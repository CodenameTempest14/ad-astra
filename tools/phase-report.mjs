// Counts the checklists in documentation/phases/*.md and prints the phase report
// (playbook CTX-8, CTX-9). Numbers come from the files, never from memory.
//
// Usage:  node tools/phase-report.mjs            (all phases + status line)
//         node tools/phase-report.mjs --blocked  (also list every BLOCKED item)
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const phasesDir = path.join(repoRoot, 'documentation', 'phases');
const showBlocked = process.argv.includes('--blocked');

function classify(line) {
  if (/^\s*- \[x\]/i.test(line)) return 'done';
  if (/BLOCKED:/.test(line)) return 'blocked';
  if (/RULED:/.test(line)) return 'ruled';
  if (/PROG:/.test(line)) return 'prog';
  return 'todo';
}

const files = (await readdir(phasesDir)).filter((f) => /^phase-\d\d-.*\.md$/.test(f)).sort();
const rows = [];
const blockedItems = [];

for (const file of files) {
  const text = await readFile(path.join(phasesDir, file), 'utf8');
  const heading = text.match(/^# (.+)$/m)?.[1] ?? file;            // "Phase 0 — Kickoff, Requirements, …"
  const title = heading.replace(/\s*—.*$/, '').trim();              // "Phase 0"
  const name = heading.includes('—') ? heading.split('—')[1].trim() : heading;
  const counts = { done: 0, prog: 0, todo: 0, blocked: 0, ruled: 0 };
  for (const line of text.split('\n')) {
    if (!/^\s*- \[[ xX]\] /.test(line)) continue;
    const kind = classify(line);
    counts[kind]++;
    if (kind === 'blocked') blockedItems.push(`${file}: ${line.trim().replace(/^- \[ \] /, '')}`);
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const denominator = total - counts.ruled;
  const pct = denominator ? Math.round((counts.done / denominator) * 100) : 0;
  rows.push({ file, title: `${title} ${name}`, name, ...counts, total, pct });
}

const pad = (v, n) => String(v).padStart(n);
console.log('Phase                          done prog todo BLOCKED ruled total    %');
for (const r of rows) {
  console.log(`${r.title.padEnd(30).slice(0, 30)} ${pad(r.done, 4)} ${pad(r.prog, 4)} ${pad(r.todo, 4)} ${pad(r.blocked, 7)} ${pad(r.ruled, 5)} ${pad(r.total, 5)} ${pad(r.pct, 3)}%`);
}

// Template and verification counts from the generated registry.
let templates = '?';
let unverified = '?';
try {
  const registry = await readFile(path.join(repoRoot, 'design', 'TEMPLATE_REGISTRY.md'), 'utf8');
  const lines = registry.split('\n').filter((l) => /^\| `/.test(l));
  const approvedOrLater = lines.filter((l) => /\| (Approved|Implemented|Verified|Baselined) \|/.test(l)).length;
  templates = `${approvedOrLater}/${lines.length}`;
  unverified = lines.filter((l) => /\| Implemented \|/.test(l)).length;
} catch { /* registry not generated yet */ }

// Current phase is read from CURRENT_STATE.md ("**Current phase:** P01 ...").
let current = rows[0];
try {
  const state = await readFile(path.join(repoRoot, 'documentation', 'context', 'CURRENT_STATE.md'), 'utf8');
  const id = state.match(/\*\*Current phase:\*\*\s*P(\d\d)/)?.[1];
  current = rows.find((r) => r.file.startsWith(`phase-${id}-`)) ?? current;
} catch { /* no state file */ }

const curNum = current.file.slice(6, 8);
console.log(`\nStatus line:\n[P${curNum} · ${current.name} · ${current.done}/${current.total - current.ruled} done · ${current.blocked} blocked · templates ${templates} · unverified ${unverified}]`);

if (showBlocked || blockedItems.length) {
  console.log(`\nBLOCKED (${blockedItems.length}) — only the owner can move these:`);
  for (const item of blockedItems) console.log(`  - ${item}`);
}
