# CURRENT STATE

> Overwritten at every session close. The first file read in every session (CLAUDE.md).

**Current phase:** P00 — Kickoff, Requirements, and Working System
**Last session:** 2026-10-29 s01 — [close report](../phase-reports/phase-00-kickoff/sessions/2026-10-29_s01_CLOSE.md)
**Branch / last commit:** `main` (local only, not pushed) — see `git log -1`
**Status line:** run `node tools/phase-report.mjs`

## Next concrete step
Owner: approve the first push to GitHub (P00-26). Before pushing, the agent runs
the secret sweep and the remote visibility check (SEC-6), then `git lfs install`
and pushes. After that: resolve open decisions P00-05, P00-07 … P00-13 with the owner.

## Blockers (owner can unblock)
- P00-26 Push to GitHub — needs owner approval. **Owner rule: ask before EVERY push**, even if approved before.
- Owner asked to confirm the system's purpose before Phase 0 questions (agent's summary given 2026-10-29; awaiting confirmation).

## Resolved this session
- .NET SDK 10.0.403 installed (P02-OPEN-06 done; P01-18 unblocked).

## Done out of order (owner-directed, 2026-10-29)
Phase 1 template acquisition was done during Phase 0 because the owner asked for it:
45 elements, 99 images, all Approved — `design/TEMPLATE_REGISTRY.md`.

## Waiting on the owner (2026-10-29)
- **Approve or reject each proposed feature** in documentation/specs/FEATURES.md (63 items, all ⏳). Owner rule: no new feature is planned or built without approval.
- **Q1** admin = teacher with an admin role? **Q2** classroom network in V1 (recommended) or USB-only? **Q3** multiple choice in V1? **Q4** integrity strictness.
- Classroom setup guide written for the owner to review: documentation/guides/CLASSROOM-SETUP.md (assumes Q2 = a).
- Template work for new admin pages is **paused** until features are approved (no renames, no captures).

## Pending owner decisions
P00-05 viewports/themes · P00-07 one-PC account model · P00-08 run-before-submit and
feedback · P00-09 scoring · P00-10 timer rules · P00-11 retention · P00-12 isolation
strength · P00-13 export formats.

## Parking lot (out of scope — not being pursued)
- Light theme (pending P00-05).
- `teacher-assessment-preview` template: planned to reuse `student-coding-workspace` with a preview banner; confirm in P05.
