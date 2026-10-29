# Phase 6 — Student Workspace and Exam Workflow

**Objective:** Students take a timed assessment from start to submission.
**Entry criteria:** Phase 5 signed off.
**Plan reference:** MASTER-PLAN.md §9, §10 reliability, §13 Phase 6.

## Opening
- [ ] P06-OPEN-01 Phase 5 signed off; tag exists
- [ ] P06-OPEN-02 Phase Opening Report written
- [ ] P06-OPEN-03 Phase brief written
- [ ] P06-OPEN-04 Best-practice sources re-checked
- [ ] P06-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P06-OPEN-06 Missing section templates captured (workspace-problem-panel, output-console, test-results-panel, timer-bar, question-navigator, results-summary-panel)

## Work items (test-first)
- [ ] P06-01 Attempt states and transitions (domain tests)
- [ ] P06-02 Timer from persisted timestamps (survives restart)
- [ ] P06-03 Run flow (visible tests only) via the Phase 3 engine
- [ ] P06-04 Submit flow; duplicate-submission rule
- [ ] P06-05 Interrupted attempt / crash recovery rule
- [ ] P06-06 Student-facing responses never contain hidden test data (test inspects the DTO)
- [ ] P06-07 Autosave

## UI pages (one at a time — UI-GATE)
- [ ] P06-UI-01 `progress-bar` (timer normal/warning/expired), `steps` (question navigator) — Playwright pass no Mismatch
- [ ] P06-UI-02 `student-dashboard` — Playwright pass no Mismatch
- [ ] P06-UI-03 `student-assessment-lobby` — Playwright pass no Mismatch
- [ ] P06-UI-04 `workspace-code-editor-panel` — Playwright pass no Mismatch
- [ ] P06-UI-05 `student-coding-workspace` (idle, running, compile error, results, time warning) — Playwright pass no Mismatch
- [ ] P06-UI-06 Submit-confirm and time-expired dialogs — Playwright pass no Mismatch
- [ ] P06-UI-07 `student-results` — Playwright pass no Mismatch

## Acceptance
- [ ] P06-20 A student completes a representative assessment end to end (Playwright E2E)
- [ ] P06-21 Timer and submission rules behave as configured
- [ ] P06-22 Hidden test details absent from student responses
- [ ] P06-23 Interrupted attempts and repeated submissions follow the documented rules

## Closing
- [ ] P06-CLOSE-01 Full Playwright regression, no Mismatch; baselines approved
- [ ] P06-CLOSE-02 `dotnet test` + E2E output in Closing Report
- [ ] P06-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P06-CLOSE-04 Docs: DEBUGGING.md (timer resumes wrong, hidden test exposed)
- [ ] P06-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P06-CLOSE-06 Owner sign-off; merge + tag `phase-06-complete`
