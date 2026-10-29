# Phase 7 — Student Workspace and Exam Workflow

**Objective:** Students take a timed assessment from start to submission.
**Entry criteria:** Phase 6 signed off.
**Plan reference:** MASTER-PLAN.md §9, §10 reliability, §13 Phase 7.

## Opening
- [ ] P07-OPEN-01 Phase 6 signed off; tag exists
- [ ] P07-OPEN-02 Phase Opening Report written
- [ ] P07-OPEN-03 Phase brief written
- [ ] P07-OPEN-04 Best-practice sources re-checked
- [ ] P07-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P07-OPEN-06 Missing section templates captured (workspace-problem-panel, output-console, test-results-panel, timer-bar, question-navigator, results-summary-panel)

## Work items (test-first)
- [ ] P07-01 Attempt states and transitions (domain tests)
- [ ] P07-02 Timer from persisted timestamps (survives restart)
- [ ] P07-03 Run flow (visible tests only) via the Phase 3 engine
- [ ] P07-04 Submit flow **through the Phase 6 host** (hidden tests graded on the teacher PC); duplicate-submission rule
- [ ] P07-05 Interrupted attempt / crash recovery rule
- [ ] P07-06 Student-facing responses never contain hidden test data (test inspects the DTO)
- [ ] P07-07 Autosave

## UI pages (one at a time — UI-GATE)
- [ ] P07-UI-01 `progress-bar` (timer normal/warning/expired), `steps` (question navigator) — Playwright pass no Mismatch
- [ ] P07-UI-02 `student-dashboard` — Playwright pass no Mismatch
- [ ] P07-UI-03 `student-assessment-lobby` — Playwright pass no Mismatch
- [ ] P07-UI-04 `workspace-code-editor-panel` — Playwright pass no Mismatch
- [ ] P07-UI-05 `student-coding-workspace` (idle, running, compile error, results, time warning) — Playwright pass no Mismatch
- [ ] P07-UI-06 Submit-confirm and time-expired dialogs — Playwright pass no Mismatch
- [ ] P07-UI-07 `student-results` — Playwright pass no Mismatch

## Acceptance
- [ ] P07-20 A student completes a representative assessment end to end (Playwright E2E)
- [ ] P07-21 Timer and submission rules behave as configured
- [ ] P07-22 Hidden test details absent from student responses
- [ ] P07-23 Interrupted attempts and repeated submissions follow the documented rules

## Approved features to build (documentation/specs/FEATURES.md, approved 2026-10-29)
- [ ] P07-F01 F-INT-01 Exam lockdown window — acceptance test written first
- [ ] P07-F02 F-INT-02 Integrity event log — acceptance test written first
- [ ] P07-F03 F-INT-03 Paste from outside the app blocked in Exam mode (paste inside the… — acceptance test written first
- [ ] P07-F04 F-INT-04 "Review suggested" flag per attempt based on events (never "cheated") — acceptance test written first
- [ ] P07-F05 F-INT-06 Hidden tests never in student-facing data or logs (MASTER-PLAN §9 — acceptance test written first
- [ ] P07-F06 F-STU-01 Dashboard — acceptance test written first
- [ ] P07-F07 F-STU-02 Assessment lobby — acceptance test written first
- [ ] P07-F08 F-STU-03 Coding workspace — acceptance test written first
- [ ] P07-F09 F-STU-04 Run with my own input (custom stdin) — acceptance test written first
- [ ] P07-F10 F-STU-05 Penalty-free precheck in Practice/Assignment mode — acceptance test written first
- [ ] P07-F11 F-STU-06 Timer from persisted timestamps; warnings at 10 and 1 minutes;… — acceptance test written first
- [ ] P07-F12 F-STU-07 Autosave and recovery after a crash or power loss — acceptance test written first
- [ ] P07-F13 F-STU-08 Question navigator (answered / not answered / flagged for review) — acceptance test written first
- [ ] P07-F14 F-STU-09 Ask a clarification question — acceptance test written first
- [ ] P07-F15 F-STU-10 Results and history (when the teacher allows) — acceptance test written first
- [ ] P07-F16 F-STU-12 Accessibility — acceptance test written first

## Closing
- [ ] P07-CLOSE-01 Full Playwright regression, no Mismatch; baselines approved
- [ ] P07-CLOSE-02 `dotnet test` + E2E output in Closing Report
- [ ] P07-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P07-CLOSE-04 Docs: DEBUGGING.md (timer resumes wrong, hidden test exposed)
- [ ] P07-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P07-CLOSE-06 Owner sign-off; merge + tag `phase-07-complete`
