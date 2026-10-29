// Applies every theme in design/themes/themes.json to real Tabler template pages, then
//  1. measures the WCAG contrast of every visible piece of text, and
//  2. saves a screenshot per theme × page,
// and writes design/themes/THEME_REPORT.md. Proves "each theme works with the templates" (D-020).
//
// Usage (from tests/ui-visual):  npm run theme-check [-- <theme-id> ...]
import { chromium } from '@playwright/test';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const themesDir = path.join(repoRoot, 'design', 'themes');
const cfg = JSON.parse(await readFile(path.join(themesDir, 'themes.json'), 'utf8'));
const only = process.argv.slice(2);
const themeIds = Object.keys(cfg.themes).filter((id) => !only.length || only.includes(id));
const viewport = { width: 1366, height: 768 };
const HIDE = '.tblr-banner, .btn-floating';

// Runs inside the page: returns text elements whose contrast is below the threshold.
function scanContrast({ normalMin, largeMin }) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const toRGBA = (css) => {              // any CSS color (oklch, color-mix, rgb…) → [r,g,b,a] in sRGB
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = '#000';
    ctx.fillStyle = css;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const over = (top, bottom) => {        // composite top (with alpha) over an opaque bottom
    const a = top[3];
    return [top[0] * a + bottom[0] * (1 - a), top[1] * a + bottom[1] * (1 - a), top[2] * a + bottom[2] * (1 - a), 1];
  };
  const lum = ([r, g, b]) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };

  const bgOf = (el) => {                 // effective opaque background: composite ancestors' backgrounds
    const chain = [];
    for (let n = el; n; n = n.parentElement) chain.push(n);
    let bg = toRGBA(getComputedStyle(document.documentElement).getPropertyValue('--tblr-body-bg') || '#fff');
    bg = bg[3] === 1 ? bg : [255, 255, 255, 1];
    for (const n of chain.reverse()) {
      const c = toRGBA(getComputedStyle(n).backgroundColor);
      if (c[3] > 0) bg = over(c, bg);
    }
    return bg;
  };

  const failures = [];
  let checked = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    const text = t.nodeValue.trim();
    const el = t.parentElement;
    if (!text || !el || seen.has(el)) continue;
    const tag = el.tagName;
    if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'OPTION'].includes(tag)) continue;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    if (cs.visibility === 'hidden' || cs.display === 'none' || rect.width < 2 || rect.height < 2) continue;
    if (rect.bottom < 0 || rect.top > document.documentElement.scrollHeight) continue;
    if (el.closest('[aria-hidden="true"], [disabled], .disabled, .offcanvas:not(.show), .modal:not(.show), .dropdown-menu:not(.show), .tblr-banner')) continue;
    let opacity = 1;
    for (let n = el; n; n = n.parentElement) opacity *= parseFloat(getComputedStyle(n).opacity);
    if (opacity < 0.05) continue;
    seen.add(el);
    let fg = toRGBA(cs.color);
    const bg = bgOf(el);
    fg = over([fg[0], fg[1], fg[2], fg[3] * opacity], bg);
    const size = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = size >= 24 || (size >= 18.66 && bold);
    const need = large ? largeMin : normalMin;
    const r = ratio(fg, bg);
    checked++;
    if (r < need) {
      // Tabler's demo palette (btn-yellow, text-red, bg-azure-lt …) is not used by Ad Astra: the UI uses
      // semantic colours only (primary, secondary, success, warning, danger, info). Such failures are
      // reported separately and do not fail the check.
      const PALETTE = /(?:^|\s)(?:btn|badge|bg|text|alert|status|avatar|btn-outline|btn-ghost)-(?:red|green|blue|azure|indigo|purple|pink|orange|yellow|lime|teal|cyan|facebook|twitter|google|youtube|vimeo|dribbble|github|instagram|pinterest|vk|rss|flickr|bitbucket|tabler|x|light|dark|white)(?:-lt|-fg)?(?:\s|$)/;
      let classes = '';
      for (let n = el, i = 0; n && i < 4; n = n.parentElement, i++) classes += ' ' + (typeof n.className === 'string' ? n.className : '');
      failures.push({
        palette: PALETTE.test(classes),
        el: `${tag.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : ''}`,
        text: text.slice(0, 40), ratio: Math.round(r * 100) / 100, need,
        fg: `rgb(${fg.slice(0, 3).map(Math.round)})`, bg: `rgb(${bg.slice(0, 3).map(Math.round)})`,
      });
    }
  }
  return { checked, failures };
}

const browser = await chromium.launch();
const results = {};
for (const id of themeIds) {
  const theme = cfg.themes[id];
  // Expand "semantic" entries into --tblr-<name>, --tblr-<name>-rgb and --tblr-<name>-fg.
  const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(',');
  const vars = { ...theme.vars };
  for (const [name, { fill, fg }] of Object.entries(theme.semantic)) {
    vars[`--tblr-${name}`] = fill;
    vars[`--tblr-${name}-rgb`] = hexToRgb(fill);
    vars[`--tblr-${name}-fg`] = fg;
  }
  const css = `:root, :root[data-bs-theme] { ${Object.entries(vars).map(([k, v]) => `${k}: ${v} !important;`).join(' ')} }\n${theme.extraCss ?? ''}\n${HIDE} { display: none !important; }`;
  const ctx = await browser.newContext({ viewport, colorScheme: theme.base });
  results[id] = [];
  for (const file of cfg.samplePages) {
    const page = await ctx.newPage();
    const name = file.replace('.html', '');
    try {
      const url = `https://preview.tabler.io/${file}?theme=${theme.base}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      } catch {                              // one retry: the demo site occasionally times out
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
        await page.waitForTimeout(2500);
      }
      await page.addStyleTag({ content: css });
      await page.waitForTimeout(1200);
      const outDir = path.join(themesDir, 'captures', id);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'README.md'), `# Theme sweep: ${theme.label}\n\nTabler template pages with the \`${id}\` variables applied (design/themes/themes.json). File names: \`<page>__<theme>__1366x768.png\`. Regenerate: \`npm run theme-check\` in tests/ui-visual. Overwritten on every run; not baselines.\n`);
      await page.screenshot({ path: path.join(outDir, `${name}__${id}__1366x768.png`) });
      const scan = await page.evaluate(scanContrast, { normalMin: cfg.thresholds.normalText, largeMin: cfg.thresholds.largeText });
      scan.demo = scan.failures.filter((f) => f.palette);          // Tabler demo palette: informational
      scan.failures = scan.failures.filter((f) => !f.palette);     // semantic colours: must be zero
      results[id].push({ page: name, ...scan });
      console.log(`${id.padEnd(20)} ${name.padEnd(14)} checked ${String(scan.checked).padStart(4)}  failures ${String(scan.failures.length).padStart(3)}   (demo-palette only: ${scan.demo.length})`);
    } catch (error) {
      results[id].push({ page: name, checked: 0, failures: [], error: error.message.split('\n')[0] });
      console.log(`${id.padEnd(20)} ${name.padEnd(14)} ERROR ${error.message.split('\n')[0]}`);
    } finally {
      await page.close();
    }
  }
  await ctx.close();
}
await browser.close();

// Report
const lines = [
  '<!-- GENERATED by tests/ui-visual/scripts/theme-check.mjs. Do not edit; run `npm run theme-check`. -->',
  '# Theme Report',
  '',
  `Generated ${new Date().toISOString().slice(0, 10)}. Each theme in \`themes.json\` is applied to ${cfg.samplePages.length} real Tabler pages at 1366×768.`,
  `Every visible text element is measured against WCAG 2.1 AA (normal text ≥ ${cfg.thresholds.normalText}:1, large text ≥ ${cfg.thresholds.largeText}:1). Screenshots: \`captures/<theme>/\`.`,
  '',
  'Ad Astra uses **semantic colours only** (primary, secondary, success, warning, danger, info). Failures on Tabler\'s demo palette',
  '(`btn-yellow`, `text-red`, `bg-azure-lt` …) are counted separately and do not fail the check.',
  '',
  '| Theme | Pages OK | Text elements checked | Contrast failures (semantic) | Demo-palette only (not used) |',
  '|---|---|---|---|---|',
];
for (const id of themeIds) {
  const r = results[id];
  const okPages = r.filter((p) => !p.error && p.failures.length === 0).length;
  lines.push(`| \`${id}\` | ${okPages} / ${r.length} | ${r.reduce((a, p) => a + p.checked, 0)} | **${r.reduce((a, p) => a + p.failures.length, 0)}** | ${r.reduce((a, p) => a + (p.demo?.length ?? 0), 0)} |`);
}
for (const id of themeIds) {
  const bad = results[id].filter((p) => p.error || p.failures.length);
  if (!bad.length) continue;
  lines.push('', `## ${id}: pages with failures`);
  for (const p of bad) {
    lines.push('', `### ${p.page} — ${p.error ? 'ERROR: ' + p.error : p.failures.length + ' failing of ' + p.checked}`);
    if (p.failures.length) {
      lines.push('| Element | Text | Ratio | Needs | Text colour | Background |', '|---|---|---|---|---|---|');
      for (const f of p.failures.slice(0, 12)) lines.push(`| \`${f.el}\` | ${f.text.replace(/\|/g, '/')} | ${f.ratio} | ${f.need} | ${f.fg} | ${f.bg} |`);
      if (p.failures.length > 12) lines.push(`| … | ${p.failures.length - 12} more | | | | |`);
    }
  }
}
await writeFile(path.join(themesDir, 'THEME_REPORT.md'), lines.join('\n') + '\n');
const total = themeIds.reduce((a, id) => a + results[id].reduce((b, p) => b + p.failures.length, 0), 0);
const errored = themeIds.reduce((a, id) => a + results[id].filter((p) => p.error).length, 0);
console.log(`\nTotal contrast failures: ${total}. Pages that could not be checked: ${errored}. Report: design/themes/THEME_REPORT.md`);
process.exitCode = total || errored ? 1 : 0;   // an unchecked page is NOT a pass
