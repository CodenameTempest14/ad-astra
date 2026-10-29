# CURRENT STATE

> Overwritten at every session close. The first file read in every session (CLAUDE.md).

**Current phase:** P00 — Kickoff, Requirements, and Working System
**Last session:** 2026-10-29 s01 — [close report](../phase-reports/phase-00-kickoff/sessions/2026-10-29_s01_CLOSE.md)
**Branch / last commit:** `main`. GitHub has commit 65d6d83 (pushed 2026-10-29); later commits are local until the owner approves each push.
**Status line:** run `node tools/phase-report.mjs`

## Recommended model for the next session (MDL-1)
**Sonnet 5.5**, because the next session is the owner reviewing two draft workflow documents and the template inventory, closing Phase 0, and starting Phase 1 (logo brief, design tokens). That is conversation, documents and one image-prompt task, with no architecture or security design. Switch to **Opus 5.5** when Phase 2 implementation starts (solution, WebView2 host, SQLite, tests).

## Next concrete step
1. Owner reads documentation/specs/teacher-workflow.md and student-workflow.md and answers the 4 (?) questions (P00-14, P00-15).
2. Owner reviews design/TEMPLATE_REGISTRY.md (60 templates) and approves the inventory (P00-18).
3. Owner walkthrough of the session workflow (P00-27), then Phase 0 closing report and sign-off.
4. Ask the owner before any push (last push: 65d6d83; later commits are local).

## Decisions made this session (all in DECISIONS.md)
D-001…D-006 setup · D-007 admin = teacher + admin role · D-008 classroom network in V1 (Phase 6) · D-009 no multiple choice yet · D-010 integrity = evidence + flags · D-011 free Run on visible tests · D-012 partial credit by weight · D-013 auto-submit at zero · D-014 practical isolation · D-015 dark only, 1366×768 + 1920×1080 · D-016 keep per term · D-017 Excel export only · D-018 51 features approved, 10 held, 2 declined.

## Parking lot (out of scope — not being pursued)
- Light theme (pending P00-05).
- `teacher-assessment-preview` template: planned to reuse `student-coding-workspace` with a preview banner; confirm in P05.
