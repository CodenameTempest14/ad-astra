# Phase 4 — Accounts and Persistence

**Objective:** Local accounts, enforced roles, durable and recoverable data.
**Entry criteria:** Phase 3 signed off.
**Plan reference:** MASTER-PLAN.md §10, §11, §13 Phase 4.

## Opening
- [ ] P04-OPEN-01 Phase 3 signed off; tag exists
- [ ] P04-OPEN-02 Phase Opening Report written
- [ ] P04-OPEN-03 Phase brief written
- [ ] P04-OPEN-04 Best-practice sources re-checked
- [ ] P04-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P04-OPEN-06 Entity-relationship diagram + workflow walkthrough done before migrations (plan §11)

## Work items (test-first for every rule)
- [ ] P04-01 Users table + migration
- [ ] P04-02 Password hashing (algorithm decision recorded)
- [ ] P04-03 Authentication service
- [ ] P04-03a Roles: Student, Teacher, Administrator; one account may be Teacher + Administrator (D-007); role checks in services
- [ ] P04-04 Role checks in application services (tests prove UI-hidden actions are still rejected)
- [ ] P04-05 Data-access layer pattern (parameterised, transactions)
- [ ] P04-06 Backup
- [ ] P04-07 Restore — tested by actually restoring
- [ ] P04-08 Audit events (no passwords/secrets in logs)

## UI pages (one at a time — UI-GATE)
- [ ] P04-UI-01 `password-field` + `avatar` components — Playwright pass no Mismatch
- [ ] P04-UI-02 `shared-login` (default, error, locked states) — Playwright pass no Mismatch
- [ ] P04-UI-03 `teacher-account-management` (+ create/edit and reset-password dialogs) — Playwright pass no Mismatch
- [ ] P04-UI-04 `teacher-backup-restore` (+ destructive confirm) — Playwright pass no Mismatch

## Acceptance
- [ ] P04-20 Accounts and records survive restart
- [ ] P04-21 Unauthorised operations rejected by services
- [ ] P04-22 Database integrity tests pass
- [ ] P04-23 Owner traces an account operation from UI to database

## Approved features to build (documentation/specs/FEATURES.md, approved 2026-10-29)
- [ ] P04-F01 F-ADM-02 User management — acceptance test written first
- [ ] P04-F02 F-ADM-03 Bulk import of class lists from CSV/Excel with a preview and error… — acceptance test written first
- [ ] P04-F03 F-ADM-04 Academic structure — acceptance test written first
- [ ] P04-F04 F-ADM-10 Backup & restore — acceptance test written first
- [ ] P04-F05 F-ADM-12 System settings — acceptance test written first
- [ ] P04-F06 F-TCH-02 My classes & rosters (read from admin's structure; a teacher may also… — acceptance test written first

## Closing
- [ ] P04-CLOSE-01 Full Playwright regression, no Mismatch; new baselines approved
- [ ] P04-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P04-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P04-CLOSE-04 Docs: DATABASE.md, SECURITY.md, DEBUGGING.md (migration failure)
- [ ] P04-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P04-CLOSE-06 Owner sign-off; merge + tag `phase-04-complete`
