# Phase 9 — Packaging and Classroom Deployment

**Objective:** Ad Astra installs and runs on a clean machine; it is ready for a real classroom (teacher PC host + lab PCs).
**Entry criteria:** Phase 8 signed off.
**Plan reference:** MASTER-PLAN.md §12, §13 Phase 9.

## Opening
- [ ] P09-OPEN-01 Phase 8 signed off; tag exists
- [ ] P09-OPEN-02 Phase Opening Report written
- [ ] P09-OPEN-03 Phase brief written
- [ ] P09-OPEN-04 Best-practice sources re-checked
- [ ] P09-OPEN-05 Repo-derived state table in the Opening Report

## Work items
- [ ] P09-01 Installer technology decision recorded
- [ ] P09-02 WebView2 runtime strategy (evergreen bootstrapper vs fixed version) for Windows 10
- [ ] P09-03 Toolchain strategy communicated (bundled / detected / installed separately)
- [ ] P09-04 Install test on a clean machine (evidence: screenshots + log)
- [ ] P09-05 Prerequisites and supported Windows configurations documented
- [ ] P09-06 Classroom deployment verified: installer modes "Teacher PC (Host)" and "Lab PC (Student)" (CLASSROOM-SETUP.md)
- [ ] P09-07 Remaining limitations and future work recorded

## UI pages (one at a time — UI-GATE)
- [ ] P09-UI-01 `shared-first-run-setup` (each wizard step) — Playwright pass no Mismatch
- [ ] P09-UI-02 Installer screens (if customisable) — template Approved first, then pass; else RULED

## Acceptance
- [ ] P09-20 Installs and starts outside the dev environment
- [ ] P09-21 Offline core works as specified
- [ ] P09-22 Toolchain dependencies clearly communicated
- [ ] P09-23 Owner diagnoses a common setup failure using the docs

## Closing
- [ ] P09-CLOSE-01 Full Playwright regression **on the installed build**, no Mismatch
- [ ] P09-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P09-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P09-CLOSE-04 Docs: SETUP.md, README.md, CHANGELOG.md
- [ ] P09-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P09-CLOSE-06 Owner sign-off; merge + tag `phase-09-complete` / `v1.0.0`
