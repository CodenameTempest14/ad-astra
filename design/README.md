# design/

Everything visual that UI work is checked against (MASTER-PLAN §3).

| Path | What | Committed? |
|---|---|---|
| `TEMPLATE_REGISTRY.md` | Index of all 45 page/section/component templates (generated) | yes |
| `templates/` | Acquired reference templates: candidates + approved images, one README per element | yes (LFS) |
| `research/` | Inspiration that is **not** a template (docs pages, genre references) | yes |
| `captures/` | Playwright passes of our implementation + PASS_REPORT.md | phase-closing passes (LFS) |
| `baselines/` | Owner-approved screenshots for automated regression | yes (LFS) |

UI-GATE: never continue to the next page until the current page passes its Playwright comparison. No real student data in any image.
