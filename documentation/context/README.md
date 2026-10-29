# documentation/context/

Context-management files (MASTER-PLAN §4.2, playbook §4). They let any session
start cold, load only what it needs, and continue.

| File | Purpose | Updated |
|---|---|---|
| `CURRENT_STATE.md` | One page: phase, last session, next step, blockers, pending decisions, parking lot. **Read first, every session.** | Overwritten at every session close |
| `phase-NN-brief.md` | Per-phase: objective, files in scope, which plan sections to load, templates in play, out-of-scope list. | Written at phase opening |

Do not put history here. History goes in `../phase-reports/` and `../PROGRESS_LOG.md`.
