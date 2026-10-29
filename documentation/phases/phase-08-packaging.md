# Phase 8 — Packaging and LAN Readiness

**Objective:** Ad Astra installs and runs on a clean machine; the path to LAN mode is documented.
**Entry criteria:** Phase 7 signed off.
**Plan reference:** MASTER-PLAN.md §12, §13 Phase 8.

## Opening
- [ ] P08-OPEN-01 Phase 7 signed off; tag exists
- [ ] P08-OPEN-02 Phase Opening Report written
- [ ] P08-OPEN-03 Phase brief written
- [ ] P08-OPEN-04 Best-practice sources re-checked
- [ ] P08-OPEN-05 Repo-derived state table in the Opening Report

## Work items
- [ ] P08-01 Installer technology decision recorded
- [ ] P08-02 WebView2 runtime strategy (evergreen bootstrapper vs fixed version) for Windows 10
- [ ] P08-03 Toolchain strategy communicated (bundled / detected / installed separately)
- [ ] P08-04 Install test on a clean machine (evidence: screenshots + log)
- [ ] P08-05 Prerequisites and supported Windows configurations documented
- [ ] P08-06 Service-boundary review for LAN mode (plan §12) written
- [ ] P08-07 Remaining limitations and future work recorded

## UI pages (one at a time — UI-GATE)
- [ ] P08-UI-01 `shared-first-run-setup` (each wizard step) — Playwright pass no Mismatch
- [ ] P08-UI-02 Installer screens (if customisable) — template Approved first, then pass; else RULED

## Acceptance
- [ ] P08-20 Installs and starts outside the dev environment
- [ ] P08-21 Offline core works as specified
- [ ] P08-22 Toolchain dependencies clearly communicated
- [ ] P08-23 Owner diagnoses a common setup failure using the docs

## Closing
- [ ] P08-CLOSE-01 Full Playwright regression **on the installed build**, no Mismatch
- [ ] P08-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P08-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P08-CLOSE-04 Docs: SETUP.md, README.md, CHANGELOG.md
- [ ] P08-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P08-CLOSE-06 Owner sign-off; merge + tag `phase-08-complete` / `v1.0.0`
