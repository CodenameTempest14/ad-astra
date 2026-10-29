# documentation/phases/

One checklist file per phase. **These files are the source of truth for
progress.** `node tools/phase-report.mjs` counts them, and the status line at the
top of every Claude Code reply comes from that count.

| File | Phase |
|---|---|
| [phase-00-kickoff.md](phase-00-kickoff.md) | 0 — Kickoff, requirements, working system |
| [phase-01-design-system.md](phase-01-design-system.md) | 1 — Brand, design system, template acquisition |
| [phase-02-foundation.md](phase-02-foundation.md) | 2 — Foundation and app shell |
| [phase-03-execution-engine.md](phase-03-execution-engine.md) | 3 — Execution engine |
| [phase-04-accounts.md](phase-04-accounts.md) | 4 — Accounts and persistence |
| [phase-05-teacher-builder.md](phase-05-teacher-builder.md) | 5 — Teacher assessment builder |
| [phase-06-student-workspace.md](phase-06-student-workspace.md) | 6 — Student workspace and exam workflow |
| [phase-07-reporting-hardening.md](phase-07-reporting-hardening.md) | 7 — Reporting, diagnostics, hardening |
| [phase-08-packaging.md](phase-08-packaging.md) | 8 — Packaging and LAN readiness |

## How to mark items (playbook §5)

```
- [x] P02-04 Structured logging — evidence: src/AdAstra.Desktop/App.xaml.cs:31, `dotnet test` 12/12
- [ ] P02-05 Toolchain detection — PROG: C/C++/Python detected, Java/C# pending
- [ ] P02-06 Something — BLOCKED: needs .NET 10 SDK installed (owner)
- [ ] P02-07 Something — RULED: deferred to P07 by owner 2026-11-03
- [ ] P02-08 Not started yet
```

- Tick an item **in the same commit** as the work, with evidence (IMP-6).
- Never bulk-tick. Never tick from memory (IMP-7).
- `UI-GATE` items: a page is ticked only when its Playwright pass report shows
  **no Mismatch**, and **the next page's items may not start until then**.

## Every phase has the same frame

1. **Opening** (`Pxx-OPEN-*`): the previous phase is signed off, the reports and brief are written, practices are re-checked, and the start is approved.
2. **Work items** (`Pxx-NN`): the actual scope, in order.
3. **UI pages** (`Pxx-UI-NN`): one page at a time under UI-GATE.
4. **Closing** (`Pxx-CLOSE-*`): full regression, tests, review, reports, sign-off, tag.
