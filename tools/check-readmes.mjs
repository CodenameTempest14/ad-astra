// Fails (exit 1) if any folder in the repository has no README.md.
// Owner rule: every folder explains itself. Skips .git, node_modules and tool output.
//
// Usage:  node tools/check-readmes.mjs
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const skip = new Set(['.git', 'node_modules', 'bin', 'obj', 'test-results', 'playwright-report', '.vs']);
const missing = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  if (!entries.some((e) => e.isFile() && e.name === 'README.md')) {
    missing.push(path.relative(repoRoot, dir).replaceAll('\\', '/') || '.');
  }
  for (const e of entries) {
    if (e.isDirectory() && !skip.has(e.name)) await walk(path.join(dir, e.name));
  }
}

await walk(repoRoot);
if (missing.length) {
  console.log(`Folders without README.md (${missing.length}):`);
  for (const m of missing) console.log(`  - ${m}`);
  process.exit(1);
}
console.log('Every folder has a README.md.');
