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

## Closing
- [ ] P07-CLOSE-01 Full Playwright regression, no Mismatch; baselines approved
- [ ] P07-CLOSE-02 `dotnet test` + E2E output in Closing Report
- [ ] P07-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P07-CLOSE-04 Docs: DEBUGGING.md (timer resumes wrong, hidden test exposed)
- [ ] P07-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P07-CLOSE-06 Owner sign-off; merge + tag `phase-07-complete`
