# CLAUDE.md — Ad Astra

Windows desktop programming-assessment app (teachers create coding assessments,
students solve them in C, C++, Java, Python, C#). Offline, one PC first, LAN later.
Stack: **C# / .NET (LTS) · WPF host + Blazor Hybrid (WebView2) · SQLite · Monaco**.
The owner is learning: explain before/while implementing (MASTER-PLAN §2).

## Read these, in this order, at the start of every session — and nothing more
1. `documentation/context/CURRENT_STATE.md` — where we are, next step, blockers
2. The current phase checklist in `documentation/phases/`
3. The previous Session Close Report (linked from CURRENT_STATE)
Then only the files your task touches. Load MASTER-PLAN sections only when the
phase brief says so. Re-reading every document fills the context for nothing.

## Every session
- **Start:** write the Session Start Report *before* any change
  (`documentation/phase-reports/_templates/SESSION_START.md`).
- **Open every reply with the status line** from `node tools/phase-report.mjs`:
  `[P01 · Brand, Design System… · 9/25 done · 1 blocked · templates 45/45 · unverified 0]`
- **End:** Session Close Report, update CURRENT_STATE.md, PROGRESS_LOG.md entry,
  paste `node tools/phase-report.mjs` output, answer *"Which parts did you actually
  run, and what are you unsure about?"*, commit.

## Hard rules
- **UI-GATE: never continue to the next page until the current page passes its
  Playwright comparison with no Mismatch** (MASTER-PLAN §3.5). One page at a time.
- No page, section or component is built without an **Approved** template in
  `design/TEMPLATE_REGISTRY.md`. Missing one? Search online, capture it, record it.
- At most **one** unverified change at a time (TST-7). A blocked check still counts.
- Tick checklist items in the **same commit** as the work, with evidence. Never from memory.
- Test-first for anything with a correct answer; watch the test fail first.
- A green test is not a fix — look at the running app.
- The repo wins over the docs: flag conflicts, fix the doc, continue.
- Service layer is authoritative; hiding a UI control is not security.
- Student code is untrusted (MASTER-PLAN §10). Never claim sandboxing without evidence.
- No real student data in screenshots, fixtures or logs.
- Ask the owner before: push, merge to main, force-push, history rewrite, deleting data,
  architecture/scope changes. Template choice does **not** need approval.
- Every folder has a README.md (`node tools/check-readmes.mjs`).
- **No new feature is planned, templated or built until the owner approves it** in
  `documentation/specs/FEATURES.md`. Propose, then wait.
- Deployment: teacher PC = Ad Astra Host (only database, hidden tests); lab PCs = Student app (D-008).

## Commands
| What | Command |
|---|---|
| Phase report + status line | `node tools/phase-report.mjs` |
| Check every folder has a README | `node tools/check-readmes.mjs` |
| Capture template candidates | `cd tests/ui-visual && npm run capture-templates [-- <id>]` |
| Rebuild template registry | `cd tests/ui-visual && npm run registry` |
| Build / test (from Phase 2) | `dotnet build` · `dotnet test` |

## Context management (details: documentation/guides/CLAUDE-CODE-PLAYBOOK.md §4)
- New unrelated task → `/clear`. Long session → `/compact focus on <task>` early.
- Finish the unit of work before clearing; write the reports first.
- Use subagents for noisy read-only research; never for parallel writes.
- Watch for the six degradation symptoms (playbook CTX-7); say so out loud and clear.

## Where things live
`src/` app code · `tests/` tests + Playwright · `design/` templates, captures, baselines ·
`documentation/` plan, phases, reports, guides · `tools/` project scripts ·
`assets/branding/` icon · `deployment/` installer.
