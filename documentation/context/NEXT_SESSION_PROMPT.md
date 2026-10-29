# Continue Ad Astra (prompt generated 2026-10-29)

You are continuing **Ad Astra**, a Windows programming-assessment desktop app (teachers build coding assessments, students solve them in C, C++, Java, Python or C#). Repo: https://github.com/CodenameTempest14/ad-astra.git. Your branch: `codenametempest14` (work and push only there; see `git log -1` for the latest commit). Start with `git checkout codenametempest14` and `git pull`.

## HARD RULES (full text in CLAUDE.md and documentation/guides/CLAUDE-CODE-PLAYBOOK.md)
1. Read in this order and nothing more: CLAUDE.md, documentation/context/CURRENT_STATE.md, the current phase checklist in documentation/phases/, the last Session Close Report.
2. Start the session with a Session Start Report that includes the **Phase Progress table** (run `node tools/phase-report.mjs --md`) and says **which Claude model to use and why**.
3. Open every reply with the status line from `node tools/phase-report.mjs`.
4. **UI-GATE:** never continue to the next page until the current page passes its Playwright comparison with no Mismatch. No page/section/component without an Approved template.
5. No new feature is planned or built until the owner approves it in documentation/specs/FEATURES.md.
6. **Push only to your own branch** (owner: `codenametempest14`, Shem Dumpor: `shem-dumpor`) and **ask before every push**. Never push to `main` or the other person's branch.
7. At the end of the session, **in this order**: Session Close Report (with the Phase Progress table), update CURRENT_STATE.md, PROGRESS_LOG.md entry, then run `node tools/continuation-prompt.mjs` and **show the generated prompt and the progress table in your final message**. This is a HARD RULE.

## Where we are
[P00 · Kickoff, Requirements, and Working System · 34/44 done · 0 blocked · templates 60/60 · unverified 0]

### Phase Progress (end of the previous session)
| Phase | Done / Total | Progress | % |
|---|---|---|---|
| P0 Kickoff, Requirements, and Working System | 34 / 44 (+2 partly) | ████████░░ | 77% |
| P1 Brand, Design System, and Template Acquisition | 9 / 34 | ███░░░░░░░ | 26% |
| P2 Foundation and App Shell | 1 / 47 | ░░░░░░░░░░ | 2% |
| P3 Execution Engine | 0 / 32 | ░░░░░░░░░░ | 0% |
| P4 Accounts and Persistence | 0 / 35 | ░░░░░░░░░░ | 0% |
| P5 Teacher Assessment Builder | 0 / 38 | ░░░░░░░░░░ | 0% |
| P6 Classroom Network and Host Service | 0 / 45 | ░░░░░░░░░░ | 0% |
| P7 Student Workspace and Exam Workflow | 0 / 46 | ░░░░░░░░░░ | 0% |
| P8 Reporting, Diagnostics, Hardening, and Recovery | 0 / 40 | ░░░░░░░░░░ | 0% |
| P9 Packaging and Classroom Deployment | 0 / 25 | ░░░░░░░░░░ | 0% |
| **Whole project** | 44 / 386 | █░░░░░░░░░ | **11%** |

### Recommended model for this session
**Sonnet 5.5**, because the next session is the owner reviewing documents (the two workflow drafts, the theme list, the collaboration protocol with Shem), closing Phase 0, and starting Phase 1 (logo brief, DESIGN.md, a non-text contrast check). That is conversation, documents and small scripts, with no architecture or security design. Switch to **Opus 5.5** when Phase 2 implementation starts (solution, WebView2 host, SQLite, tests, theme engine).

### Next concrete step
1. Owner reads `documentation/specs/teacher-workflow.md` and `student-workflow.md` and answers the 4 `(?)` questions (P00-14, P00-15).
2. Owner confirms the theme list in `design/themes/themes.json` (P01-23) and looks at `design/themes/THEME_REPORT.md` and the screenshots in `design/themes/captures/`.
3. Owner and Shem agree the collaboration protocol in `documentation/guides/COLLABORATION.md` (P00-28); the owner adds Shem as a collaborator on GitHub (repository Settings → Collaborators).
4. Owner approves the template inventory (P00-18) and does the walkthrough (P00-27); then Phase 0 closing report and sign-off.
5. Then Phase 1: logo concept and icon exports, `DESIGN.md`, 1920×1080 captures, the non-text contrast check (P01-24).

### Waiting on the owner
- Answer the 4 `(?)` questions in the two workflow drafts.
- Confirm or change the 4 starter themes (Ad Astra Dark, Ad Astra Light, High Contrast Dark, High Contrast Light).
- Review the template registry (60 templates) and approve the inventory.
- Agree the work split and merge-review rule with Shem; add Shem on GitHub.
- 10 held features (V1.1/Later) are revisited after the coding portion; multiple choice is deferred.
- Every push needs the owner's yes, to the owner's own branch only.
