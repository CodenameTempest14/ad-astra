# Phase 2 — Foundation and App Shell

**Objective:** A running, logged, tested application skeleton with the approved shell UI.
**Entry criteria:** Phase 1 signed off; shell and base-component templates Approved.
**Plan reference:** MASTER-PLAN.md §8, §13 Phase 2.

## Opening
- [ ] P02-OPEN-01 Phase 1 signed off; tag exists
- [ ] P02-OPEN-02 Phase Opening Report written
- [ ] P02-OPEN-03 Phase brief written
- [ ] P02-OPEN-04 Best-practice sources re-checked
- [ ] P02-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P02-OPEN-06 .NET SDK (current LTS) installed and `dotnet --info` recorded — BLOCKED: not installed (2026-10-29)
- [ ] P02-OPEN-07 BlazorWebView WPF package support for the chosen .NET version verified

## Solution
- [ ] P02-01 Solution + projects created in the existing src/ and tests/ folders (READMEs kept)
- [ ] P02-02 WPF host window with BlazorWebView; app icon on window and taskbar
- [ ] P02-03 Structured logging (Microsoft.Extensions.Logging or Serilog — decision recorded)
- [ ] P02-04 Application settings
- [ ] P02-05 SQLite initialisation + first migration; understandable errors
- [ ] P02-06 Toolchain detection for C, C++, Java, Python, C# (version + path; actionable message when missing)
- [ ] P02-07 Unit test project (xUnit or NUnit — decision recorded); `dotnet test` works offline
- [ ] P02-08 **Visual-test mode**: seeded data, frozen clock, fixed window size, animations off, CDP port on
- [ ] P02-09 GitHub Actions: build + test on push (TST-9)
- [ ] P02-10 Stop hook running fast unit tests (TST-9) added to .claude/settings.json
- [ ] P02-11 CLAUDE.md updated with build/test/run commands

## Shared components (one at a time — UI-GATE)
- [ ] P02-UI-01 `button` — Playwright pass no Mismatch
- [ ] P02-UI-02 `form-controls` — Playwright pass no Mismatch
- [ ] P02-UI-03 `card` — Playwright pass no Mismatch
- [ ] P02-UI-04 `data-table` + `pagination` — Playwright pass no Mismatch
- [ ] P02-UI-05 `status-badge` — Playwright pass no Mismatch
- [ ] P02-UI-06 `toast` — Playwright pass no Mismatch
- [ ] P02-UI-07 `modal-dialog` — Playwright pass no Mismatch
- [ ] P02-UI-08 `dropdown` — Playwright pass no Mismatch
- [ ] P02-UI-09 `empty-state` + `loading-indicator` + `alert-validation` — Playwright pass no Mismatch

## Shell sections and pages (one at a time — UI-GATE)
- [ ] P02-UI-10 `shell-navigation-sidebar` — Playwright pass no Mismatch
- [ ] P02-UI-11 `shell-top-bar` — Playwright pass no Mismatch
- [ ] P02-UI-12 `shell-content-area` — Playwright pass no Mismatch
- [ ] P02-UI-13 `shared-startup-splash` — Playwright pass no Mismatch
- [ ] P02-UI-14 `shared-toolchain-status` — Playwright pass no Mismatch (missing-toolchain state too)
- [ ] P02-UI-15 `shared-error-page` — Playwright pass no Mismatch

## Acceptance
- [ ] P02-20 App launches on the dev machine with the correct icon
- [ ] P02-21 Database init errors are understandable (tested by breaking the DB path)
- [ ] P02-22 Missing toolchains produce actionable diagnostics (tested by hiding one)
- [ ] P02-23 Owner can explain project structure and startup sequence

## Closing
- [ ] P02-CLOSE-01 Full Playwright regression pass, no Mismatch; first baselines approved → design/baselines/
- [ ] P02-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P02-CLOSE-03 `/code-review` on the phase diff
- [ ] P02-CLOSE-04 Docs: ARCHITECTURE.md, SETUP.md, TESTING.md, DESIGN.md updated
- [ ] P02-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P02-CLOSE-06 Owner sign-off; merge + tag `phase-02-complete`
