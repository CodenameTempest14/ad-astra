# Ad Astra

A Windows desktop programming-assessment application. Teachers create coding
assessments with visible and hidden test cases; students solve them in **C, C++,
Java, Python or C#** inside a timed, offline workspace, and are graded automatically.

**Stack:** C# / .NET (LTS) · WPF host + Blazor Hybrid (WebView2) · SQLite · Monaco editor
**Status:** Phase 0 — Kickoff. See [documentation/context/CURRENT_STATE.md](documentation/context/CURRENT_STATE.md).

## Start here
| If you want to… | Read |
|---|---|
| Know where the project stands right now | [documentation/context/CURRENT_STATE.md](documentation/context/CURRENT_STATE.md) |
| See the full plan | [documentation/planning/MASTER-PLAN.md](documentation/planning/MASTER-PLAN.md) |
| See each phase as a checklist | [documentation/phases/](documentation/phases/) |
| See every UI template | [design/TEMPLATE_REGISTRY.md](design/TEMPLATE_REGISTRY.md) |
| Know how the AI agent must work | [CLAUDE.md](CLAUDE.md) and [documentation/guides/CLAUDE-CODE-PLAYBOOK.md](documentation/guides/CLAUDE-CODE-PLAYBOOK.md) |
| Get a progress count | `node tools/phase-report.mjs` |

## Folder map
```
ad-astra/
├── CLAUDE.md            Rules Claude Code loads automatically every session
├── .claude/             Claude Code project settings and hooks
├── src/                 Application source (one folder per .NET project)
├── tests/               Unit, integration and Playwright visual tests
├── design/              UI templates, Playwright captures and baselines
├── assets/              Branding (logo, favicon, .ico)
├── deployment/          Installer and packaging
├── documentation/       Plan, phase checklists, reports, guides, decisions
└── tools/               Project scripts (phase report, README check)
```
Every folder has its own README.md explaining what belongs in it.

## Working on two computers (PC + laptop)
1. **Start:** `git pull`
2. Work, then `git add .` and `git commit -m "P00 s02: what I did"`
3. **Stop:** `git push` (unpushed work is invisible to the other computer)

First time on a computer: install Git for Windows (includes Git LFS), Node.js LTS,
then `git clone https://github.com/CodenameTempest14/ad-astra.git`, `git lfs install`,
and `cd tests/ui-visual && npm install && npx playwright install chromium`.
The .NET SDK is needed from Phase 2.
