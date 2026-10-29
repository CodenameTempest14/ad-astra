# Phase 5 — Teacher Assessment Builder

**Objective:** Teachers create, configure, preview and publish assessments.
**Entry criteria:** Phase 4 signed off.
**Plan reference:** MASTER-PLAN.md §9.3, §9.4, §13 Phase 5.

## Opening
- [ ] P05-OPEN-01 Phase 4 signed off; tag exists
- [ ] P05-OPEN-02 Phase Opening Report written
- [ ] P05-OPEN-03 Phase brief written
- [ ] P05-OPEN-04 Best-practice sources re-checked
- [ ] P05-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P05-OPEN-06 Missing section templates captured (question-list-sidebar, test-case-table, comparison-policy-panel, assessment-settings-panel)

## Work items (test-first)
- [ ] P05-01 Assessment + Question + TestCase entities and migrations
- [ ] P05-02 Create/edit/save/reopen services with validation messages
- [ ] P05-03 Visible/hidden test-case configuration enforced in services
- [ ] P05-04 Draft → published states
- [ ] P05-05 Student-view preview uses the same filtering as the real student path
- [ ] P05-06 Monaco integrated for starter code (offline bundle)

## UI pages (one at a time — UI-GATE)
- [ ] P05-UI-01 `tabs`, `segmented-control`, `number-input` components — Playwright pass no Mismatch
- [ ] P05-UI-02 `teacher-dashboard` — Playwright pass no Mismatch
- [ ] P05-UI-03 `teacher-assessment-list` (incl. empty state) — Playwright pass no Mismatch
- [ ] P05-UI-04 `teacher-assessment-editor` (incl. validation errors) — Playwright pass no Mismatch
- [ ] P05-UI-05 `teacher-question-editor` (statement, starter code, test cases, scoring tabs) — Playwright pass no Mismatch
- [ ] P05-UI-06 `teacher-assessment-preview` — template Approved first, then Playwright pass no Mismatch

## Acceptance
- [ ] P05-20 Teacher can create, save, reopen, edit and preview an assessment
- [ ] P05-21 Hidden-test visibility enforced by the service layer (test proves it)
- [ ] P05-22 Invalid configurations produce useful messages

## Closing
- [ ] P05-CLOSE-01 Full Playwright regression, no Mismatch; baselines approved
- [ ] P05-CLOSE-02 `dotnet test` output in Closing Report
- [ ] P05-CLOSE-03 `/code-review` + `/security-review` (hidden tests) on the phase diff
- [ ] P05-CLOSE-04 Docs updated
- [ ] P05-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P05-CLOSE-06 Owner sign-off; merge + tag `phase-05-complete`
