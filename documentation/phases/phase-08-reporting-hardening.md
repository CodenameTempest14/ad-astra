# Phase 8 — Reporting, Diagnostics, Hardening, and Recovery

**Objective:** Traceable results, developer diagnostics, proven recovery.
**Entry criteria:** Phase 7 signed off.
**Plan reference:** MASTER-PLAN.md §10, §14 diagnostics module, §13 Phase 8.

## Opening
- [ ] P08-OPEN-01 Phase 7 signed off; tag exists
- [ ] P08-OPEN-02 Phase Opening Report written
- [ ] P08-OPEN-03 Phase brief written
- [ ] P08-OPEN-04 Best-practice sources re-checked
- [ ] P08-OPEN-05 Repo-derived state table in the Opening Report

## Work items
- [ ] P08-01 Reporting queries (per P00-13 decision) with tests
- [ ] P08-02 Export
- [ ] P08-03 Diagnostics: system health, test runner, execution diagnostics, log explorer
- [ ] P08-04 Redacted diagnostic report (preview before copy)
- [ ] P08-05 Security boundary + resource-control tests
- [ ] P08-06 Backup/restore/migration/crash-recovery tests on representative data
- [ ] P08-07 AI diagnostic assistant — only with clear privacy controls, else RULED

## UI pages (one at a time — UI-GATE)
- [ ] P08-UI-01 `chart` component — Playwright pass no Mismatch
- [ ] P08-UI-02 `teacher-submission-review` — Playwright pass no Mismatch
- [ ] P08-UI-03 `teacher-gradebook` — Playwright pass no Mismatch
- [ ] P08-UI-04 `teacher-assessment-report` — Playwright pass no Mismatch
- [ ] P08-UI-05 `dev-system-health` — Playwright pass no Mismatch
- [ ] P08-UI-06 `dev-test-runner` — Playwright pass no Mismatch
- [ ] P08-UI-07 `dev-log-explorer` — Playwright pass no Mismatch
- [ ] P08-UI-08 Export dialog + diagnostic report preview — Playwright pass no Mismatch

## Acceptance
- [ ] P08-20 Scores trace to recorded test results
- [ ] P08-21 Restore recovers valid data
- [ ] P08-22 Failure modes have reproducible tests and useful diagnostics
- [ ] P08-23 Security claims match implemented controls

## Approved features to build (documentation/specs/FEATURES.md, approved 2026-10-29)
- [ ] P08-F01 F-ADM-01 Overview dashboard — acceptance test written first
- [ ] P08-F02 F-ADM-07 Integrity centre — acceptance test written first
- [ ] P08-F03 F-ADM-08 Cross-class reports — acceptance test written first
- [ ] P08-F04 F-ADM-09 Toolchain manager — acceptance test written first
- [ ] P08-F05 F-ADM-11 Audit log — acceptance test written first
- [ ] P08-F06 F-ADM-16 Diagnostics hub — acceptance test written first
- [ ] P08-F07 F-TCH-15 Manual grade override with a required reason (audited) and comments… — acceptance test written first
- [ ] P08-F08 F-TCH-16 Rejudge — acceptance test written first
- [ ] P08-F09 F-TCH-19 Gradebook with export (CSV/Excel) — acceptance test written first
- [ ] P08-F10 F-TCH-20 Question analytics — acceptance test written first

## Closing
- [ ] P08-CLOSE-01 Full Playwright regression of the whole app, no Mismatch
- [ ] P08-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P08-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P08-CLOSE-04 Docs: DEBUGGING.md, LOGGING_AND_DIAGNOSTICS.md, SECURITY.md
- [ ] P08-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P08-CLOSE-06 Owner sign-off; merge + tag `phase-08-complete`
