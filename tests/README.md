# tests/

| Folder | What it tests |
|---|---|
| `AdAstra.UnitTests/` | Rules in isolation (Domain, Application): scoring, comparison, timer, permissions |
| `AdAstra.IntegrationTests/` | Components together: SQLite, language adapters, recovery |
| `ui-visual/` | Playwright: template capture, visual passes, baselines, end-to-end flows |

Test-first where there is a correct answer (playbook TST-1). Run with `dotnet test` (from Phase 2).
