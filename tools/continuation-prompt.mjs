// Builds the CONTINUATION PROMPT the owner copies into the next Claude Code session
// (HARD RULE, playbook CTX-12). It is generated from files, never written from memory:
//   - progress table      <- node tools/phase-report.mjs --md
//   - status line         <- node tools/phase-report.mjs
//   - next step / model   <- documentation/context/CURRENT_STATE.md
// Writes documentation/context/NEXT_SESSION_PROMPT.md and prints it.
//
// Usage: node tools/continuation-prompt.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd, args) => execFileSync(cmd, args, { cwd: repoRoot, encoding: 'utf8' }).trim();

const table = run('node', ['tools/phase-report.mjs', '--md']);
const statusLine = run('node', ['tools/phase-report.mjs']).split('\n').filter((l) => l.startsWith('[P')).pop();
// The person's own branch comes from .githooks/branch-owners.txt (email → branch), not from the current checkout.
const email = run('git', ['config', 'user.email']);
const owners = (await readFile(path.join(repoRoot, '.githooks/branch-owners.txt'), 'utf8'))
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => l.split('='));
const myBranch = (owners.find(([e]) => e === email) ?? [])[1] ?? '(your email is not in .githooks/branch-owners.txt)';
const state = await readFile(path.join(repoRoot, 'documentation/context/CURRENT_STATE.md'), 'utf8');

const section = (heading) => {
  const m = state.match(new RegExp(`## ${heading}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`));
  return m ? m[1].trim() : '(missing in CURRENT_STATE.md: fix this before ending the session)';
};
const today = new Date().toISOString().slice(0, 10);

const prompt = `# Continue Ad Astra (prompt generated ${today})

You are continuing **Ad Astra**, a Windows programming-assessment desktop app (teachers build coding assessments, students solve them in C, C++, Java, Python or C#). Repo: https://github.com/CodenameTempest14/ad-astra.git. Your branch: \`${myBranch}\` (work and push only there; see \`git log -1\` for the latest commit). Start with \`git checkout ${myBranch}\` and \`git pull\`.

## HARD RULES (full text in CLAUDE.md and documentation/guides/CLAUDE-CODE-PLAYBOOK.md)
1. Read in this order and nothing more: CLAUDE.md, documentation/context/CURRENT_STATE.md, the current phase checklist in documentation/phases/, the last Session Close Report.
2. Start the session with a Session Start Report that includes the **Phase Progress table** (run \`node tools/phase-report.mjs --md\`) and says **which Claude model to use and why**.
3. Open every reply with the status line from \`node tools/phase-report.mjs\`.
4. **UI-GATE:** never continue to the next page until the current page passes its Playwright comparison with no Mismatch. No page/section/component without an Approved template.
5. No new feature is planned or built until the owner approves it in documentation/specs/FEATURES.md.
6. **Push only to your own branch** (owner: \`codenametempest14\`, Shem Dumpor: \`shem-dumpor\`) and **ask before every push**. Never push to \`main\` or the other person's branch.
7. **Ask before every merge to \`main\`**, naming the target; \`main\` changes only by a pull request that the other person reviews. In your first reply ask: *"Is this phase being built only by you, or is Shem also working on it?"* (Shem normally only reviews and pushes only when the owner asks).
8. At the end of the session, **in this order**: Session Close Report (with the Phase Progress table), update CURRENT_STATE.md, PROGRESS_LOG.md entry, then run \`node tools/continuation-prompt.mjs\` and **show the generated prompt and the progress table in your final message**. This is a HARD RULE.

## Where we are
${statusLine}

### Phase Progress (end of the previous session)
${table}

### Recommended model for this session
${section('Recommended model for the next session')}

### Next concrete step
${section('Next concrete step')}

### Waiting on the owner
${section('Waiting on the owner')}
`;

await writeFile(path.join(repoRoot, 'documentation/context/NEXT_SESSION_PROMPT.md'), prompt);
console.log(prompt);
