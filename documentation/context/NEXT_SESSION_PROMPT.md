# Continue Ad Astra (prompt generated 2026-10-30)

You are continuing **Ad Astra**, a Windows programming-assessment desktop app (teachers build coding assessments, students solve them in C, C++, Java, Python or C#). Repo: https://github.com/CodenameTempest14/ad-astra.git. Your branch: `codenametempest14` (work and push only there; see `git log -1` for the latest commit). Start with `git checkout codenametempest14` and `git pull`.

## HARD RULES (full text in CLAUDE.md and documentation/guides/CLAUDE-CODE-PLAYBOOK.md)
1. Read in this order and nothing more: CLAUDE.md, documentation/context/CURRENT_STATE.md, the current phase checklist in documentation/phases/, the last Session Close Report.
2. Start the session with a Session Start Report that includes the **Phase Progress table** (run `node tools/phase-report.mjs --md`) and says **which Claude model to use and why**.
3. Open every reply with the status line from `node tools/phase-report.mjs`.
4. **UI-GATE:** never continue to the next page until the current page passes its Playwright comparison with no Mismatch. No page/section/component without an Approved template.
5. No new feature is planned or built until the owner approves it in documentation/specs/FEATURES.md.
6. **Push only to your own branch** (owner: `codenametempest14`, Shem Dumpor: `shem-dumpor`) and **ask before every push**. Never push to `main` or the other person's branch.
7. **Ask before every merge to `main`**, naming the target; `main` changes only by a pull request that the other person reviews. In your first reply ask: *"Is this phase being built only by you, or is Shem also working on it?"* (Shem normally only reviews and pushes only when the owner asks).
8. At the end of the session, **in this order**: Session Close Report (with the Phase Progress table), update CURRENT_STATE.md, PROGRESS_LOG.md entry, then run `node tools/continuation-prompt.mjs` and **show the generated prompt and the progress table in your final message**. This is a HARD RULE.

## Where we are
[P01 · Brand, Design System, and Template Acquisition · 16/34 done · 0 blocked · templates 60/60 · unverified 0]

### Phase Progress (end of the previous session)
| Phase | Done / Total | Progress | % |
|---|---|---|---|
| P0 Kickoff, Requirements, and Working System | 45 / 45 | ██████████ | 100% |
| P1 Brand, Design System, and Template Acquisition | 16 / 34 | █████░░░░░ | 47% |
| P2 Foundation and App Shell | 1 / 47 | ░░░░░░░░░░ | 2% |
| P3 Execution Engine | 0 / 32 | ░░░░░░░░░░ | 0% |
| P4 Accounts and Persistence | 0 / 35 | ░░░░░░░░░░ | 0% |
| P5 Teacher Assessment Builder | 0 / 38 | ░░░░░░░░░░ | 0% |
| P6 Classroom Network and Host Service | 0 / 45 | ░░░░░░░░░░ | 0% |
| P7 Student Workspace and Exam Workflow | 0 / 46 | ░░░░░░░░░░ | 0% |
| P8 Reporting, Diagnostics, Hardening, and Recovery | 0 / 40 | ░░░░░░░░░░ | 0% |
| P9 Packaging and Classroom Deployment | 0 / 25 | ░░░░░░░░░░ | 0% |
| **Whole project** | 62 / 387 | ██░░░░░░░░ | **16%** |

### Recommended model for this session
**Sonnet 5.5**, because the work is the Phase 1 opening documents and the logo exports (scripted image conversion). Switch to **Opus 5.5** at P01-18 (WPF + Blazor spike) or when Phase 2 starts.

### Next concrete step
0. Phase 0 is closed (signed off, tagged `phase-00-complete`). The owner opens the pull request for the last commit; `main` is not protected and Shem has approved the route.
1. The enhanced D1 logo is approved (P01-01 done; masters in `assets/branding/source/`). Next: P01-02 exports (16/32/48/256 PNG + .ico; small-size master for 16–32), P01-03 legibility check, P01-04 README.
2. Tick P01-OPEN-01 (tag exists), then write the Phase 1 Opening Report and brief (P01-OPEN-02…05).
3. Owner adds Shem's GitHub username to COLLABORATION.md and adds him as a collaborator.
4. Then remaining Phase 1: P01-14/15 missing section templates and states, P01-18 WPF+Blazor spike (Opus), P01-19/20 compare script and PASS_REPORT.

### Waiting on the owner
- Push of the unpushed commits to `codenametempest14` (every push needs a yes, own branch only).
- A pull request from `codenametempest14` into `main` for the commits after #2 (the owner opens it; `gh` is not installed).
- Shem's GitHub username and collaborator access.
- 10 held features (V1.1/Later) are revisited after the coding portion; multiple choice is deferred.
