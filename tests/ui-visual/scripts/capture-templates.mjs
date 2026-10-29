// Captures every candidate template listed in design/templates/template-manifest.json
// into design/templates/<level>s/<id>/candidates/<candidate>/<state>__<theme>__<WxH>.png
// and writes design/templates/capture-log.json so failed or suspicious captures are visible.
//
// Usage (from tests/ui-visual):  npm run capture-templates [-- <element-id> ...]
import { chromium } from '@playwright/test';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const templatesDir = path.join(repoRoot, 'design', 'templates');
const manifest = JSON.parse(await readFile(path.join(templatesDir, 'template-manifest.json'), 'utf8'));
const onlyIds = process.argv.slice(2);

const { viewport, theme, settleMs } = manifest.defaults;
const viewportName = `${viewport.width}x${viewport.height}`;

const browser = await chromium.launch();
const context = await browser.newContext({ viewport, colorScheme: theme === 'dark' ? 'dark' : 'light' });
const log = [];

for (const element of manifest.elements) {
  if (onlyIds.length && !onlyIds.includes(element.id)) continue;

  for (const candidate of element.candidates) {
    for (const capture of candidate.captures) {
      const outDir = path.join(templatesDir, `${element.level}s`, element.id, 'candidates', candidate.source);
      const fileName = `${capture.state}__${theme}__${viewportName}.png`;
      const entry = { id: element.id, candidate: candidate.source, state: capture.state, url: capture.url,
                      file: path.relative(repoRoot, path.join(outDir, fileName)).replaceAll('\\', '/') };
      const page = await context.newPage();
      try {
        const response = await page.goto(capture.url, { waitUntil: 'networkidle', timeout: 45000 });
        await page.waitForTimeout(settleMs);
        entry.httpStatus = response?.status() ?? null;
        entry.title = await page.title();

        // A 404 page or near-empty body is a failed capture, not a template (lesson from EngiRent).
        const bodyText = (await page.locator('body').innerText().catch(() => '')).trim();
        const looksBroken = (entry.httpStatus && entry.httpStatus >= 400 && capture.state !== 'not-found')
          || /page not found|404/i.test(entry.title) && capture.state !== 'not-found'
          || bodyText.length < 20;

        // Hide vendor chrome (promo banners, theme-customiser buttons) that is not part of the template.
        const hide = manifest.sources[candidate.sourceRef ?? candidate.source]?.hideSelectors ?? [];
        if (hide.length) await page.addStyleTag({ content: `${hide.join(', ')} { display: none !important; }` });

        await mkdir(outDir, { recursive: true });
        const target = path.join(outDir, fileName);
        if (capture.selector) {
          await page.locator(capture.selector).first().screenshot({ path: target });
        } else {
          await page.screenshot({ path: target, fullPage: Boolean(capture.fullPage) });
        }
        entry.status = looksBroken ? 'SUSPECT' : 'OK';
      } catch (error) {
        entry.status = 'FAILED';
        entry.error = error.message.split('\n')[0];
      } finally {
        await page.close();
      }
      entry.capturedAt = new Date().toISOString();
      log.push(entry);
      console.log(`${entry.status.padEnd(7)} ${element.id} [${candidate.source}/${capture.state}] ${entry.error ?? entry.title ?? ''}`);
    }
  }
}

await browser.close();

// Merge with previous log so partial re-runs keep earlier results.
const logPath = path.join(templatesDir, 'capture-log.json');
let previous = [];
try { previous = JSON.parse(await readFile(logPath, 'utf8')); } catch { /* first run */ }
const key = (e) => `${e.id}|${e.candidate}|${e.state}`;
const merged = new Map(previous.map((e) => [key(e), e]));
for (const e of log) merged.set(key(e), e);
await writeFile(logPath, JSON.stringify([...merged.values()], null, 2) + '\n');

const failed = log.filter((e) => e.status !== 'OK');
console.log(`\n${log.length - failed.length}/${log.length} captured OK. ${failed.length} need attention (see capture-log.json).`);
