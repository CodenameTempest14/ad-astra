# Phase 7 — Reporting, Diagnostics, Hardening, and Recovery

**Objective:** Traceable results, developer diagnostics, proven recovery.
**Entry criteria:** Phase 6 signed off.
**Plan reference:** MASTER-PLAN.md §10, §14 diagnostics module, §13 Phase 7.

## Opening
- [ ] P07-OPEN-01 Phase 6 signed off; tag exists
- [ ] P07-OPEN-02 Phase Opening Report written
- [ ] P07-OPEN-03 Phase brief written
- [ ] P07-OPEN-04 Best-practice sources re-checked
- [ ] P07-OPEN-05 Repo-derived state table in the Opening Report

## Work items
- [ ] P07-01 Reporting queries (per P00-13 decision) with tests
- [ ] P07-02 Export
- [ ] P07-03 Diagnostics: system health, test runner, execution diagnostics, log explorer
- [ ] P07-04 Redacted diagnostic report (preview before copy)
- [ ] P07-05 Security boundary + resource-control tests
- [ ] P07-06 Backup/restore/migration/crash-recovery tests on representative data
- [ ] P07-07 AI diagnostic assistant — only with clear privacy controls, else RULED

## UI pages (one at a time — UI-GATE)
- [ ] P07-UI-01 `chart` component — Playwright pass no Mismatch
- [ ] P07-UI-02 `teacher-submission-review` — Playwright pass no Mismatch
- [ ] P07-UI-03 `teacher-gradebook` — Playwright pass no Mismatch
- [ ] P07-UI-04 `teacher-assessment-report` — Playwright pass no Mismatch
- [ ] P07-UI-05 `dev-system-health` — Playwright pass no Mismatch
- [ ] P07-UI-06 `dev-test-runner` — Playwright pass no Mismatch
- [ ] P07-UI-07 `dev-log-explorer` — Playwright pass no Mismatch
- [ ] P07-UI-08 Export dialog + diagnostic report preview — Playwright pass no Mismatch

## Acceptance
- [ ] P07-20 Scores trace to recorded test results
- [ ] P07-21 Restore recovers valid data
- [ ] P07-22 Failure modes have reproducible tests and useful diagnostics
- [ ] P07-23 Security claims match implemented controls

## Closing
- [ ] P07-CLOSE-01 Full Playwright regression of the whole app, no Mismatch
- [ ] P07-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P07-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P07-CLOSE-04 Docs: DEBUGGING.md, LOGGING_AND_DIAGNOSTICS.md, SECURITY.md
- [ ] P07-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P07-CLOSE-06 Owner sign-off; merge + tag `phase-07-complete`
