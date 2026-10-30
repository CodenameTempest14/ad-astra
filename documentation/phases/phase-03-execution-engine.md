# Phase 3 — Execution Engine

**Objective:** Reliably compile, run and evaluate code in five languages, independent of the UI.
**Entry criteria:** Phase 2 signed off.
**Plan reference:** MASTER-PLAN.md §9, §10, §13 Phase 3, §14 execution matrix.

## Opening
- [ ] P03-OPEN-01 Phase 2 signed off; tag exists
- [ ] P03-OPEN-02 Phase Opening Report written
- [ ] P03-OPEN-03 Phase brief written
- [ ] P03-OPEN-04 Best-practice sources re-checked
- [ ] P03-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P03-OPEN-06 All five toolchains installed on the dev machine (versions recorded)

## Contract and pipeline (test-first — TST-1)
- [ ] P03-01 Adapter contract explained to the owner, then written (inputs, normalised result)
- [ ] P03-02 Unique temp working directory per run + cleanup policy
- [ ] P03-03 Process runner: argument lists (no shell strings), stdout/stderr capture, exit code, duration
- [ ] P03-04 Timeouts + process-tree kill (Job Object)
- [ ] P03-05 Output size cap
- [ ] P03-06 Cancellation

## Language adapters (one at a time; each with the full test matrix)
- [ ] P03-07 Python adapter — matrix green
- [ ] P03-08 C adapter — matrix green
- [ ] P03-09 C++ adapter — matrix green
- [ ] P03-10 Java adapter — matrix green
- [ ] P03-11 C# adapter — matrix green

Matrix per language: valid program · compile/syntax error · runtime error · correct and incorrect output · empty and multi-line output · stdin input · infinite loop · excessive output · cancellation + cleanup.

## Grading
- [ ] P03-12 Output comparison policies (exact, whitespace-normalised, numeric tolerance) — tests first
- [ ] P03-13 Scoring component (partial credit per P00-09 decision) — tests first
- [ ] P03-14 Application errors vs student errors kept distinct in results

## Security
- [ ] P03-15 Isolation evaluation written (Job Objects, restricted token, Windows Sandbox availability) — SECURITY.md
- [ ] P03-16 Security limitations documented and tested; no sandbox claims without evidence
- [ ] P03-17 `/security-review` on the execution branch

## UI
- [ ] P03-UI-01 (Only if built) `dev-execution-sandbox` page — template Approved first, then Playwright pass no Mismatch — else RULED

## Approved features to build (documentation/specs/FEATURES.md, approved 2026-10-29)
- [ ] P03-F01 F-PLT-01 Five languages via adapters; per-language limits — acceptance test written first
- [ ] P03-F02 F-TCH-07 Output comparison policy per test (exact / ignore trailing whitespace… — acceptance test written first

## Closing
- [ ] P03-CLOSE-01 Regression pass of Phase 2 baselines, no Mismatch
- [ ] P03-CLOSE-02 `dotnet test` output (full matrix) in Closing Report
- [ ] P03-CLOSE-03 `/code-review` on the phase diff
- [ ] P03-CLOSE-04 Docs: ARCHITECTURE.md (execution flow), DEBUGGING.md (missing compiler, Java failure, timeout kill), SECURITY.md
- [ ] P03-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P03-CLOSE-06 Owner sign-off; merge + tag `phase-03-complete`
