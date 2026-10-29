# CURRENT STATE

> Overwritten at every session close. The first file read in every session (CLAUDE.md).

**Current phase:** P00 — Kickoff, Requirements, and Working System
**Last session:** 2026-10-29 s02 — [close report](../phase-reports/phase-00-kickoff/sessions/2026-10-29_s02_CLOSE.md)
**Branches:** owner works on `codenametempest14`, Shem Dumpor on `shem-dumpor`; `main` stays at the first push (`65d6d83`) until a reviewed merge. See `git log -1` for the latest commit.
**Status line:** run `node tools/phase-report.mjs` · progress table: `node tools/phase-report.mjs --md`

## Recommended model for the next session (MDL-1)
**Sonnet 5.5**, because the next session is the owner reviewing documents (the two workflow drafts, the theme list, the collaboration protocol with Shem), closing Phase 0, and starting Phase 1 (logo brief, DESIGN.md, a non-text contrast check). That is conversation, documents and small scripts, with no architecture or security design. Switch to **Opus 5.5** when Phase 2 implementation starts (solution, WebView2 host, SQLite, tests, theme engine).

## Next concrete step
1. Owner reads `documentation/specs/teacher-workflow.md` and `student-workflow.md` and answers the 4 `(?)` questions (P00-14, P00-15).
2. Owner confirms the theme list in `design/themes/themes.json` (P01-23) and looks at `design/themes/THEME_REPORT.md` and the screenshots in `design/themes/captures/`.
3. Owner and Shem agree the collaboration protocol in `documentation/guides/COLLABORATION.md` (P00-28); the owner adds Shem as a collaborator on GitHub (repository Settings → Collaborators).
4. Owner approves the template inventory (P00-18) and does the walkthrough (P00-27); then Phase 0 closing report and sign-off.
5. Then Phase 1: logo concept and icon exports, `DESIGN.md`, 1920×1080 captures, the non-text contrast check (P01-24).

## Waiting on the owner
- Answer the 4 `(?)` questions in the two workflow drafts.
- Confirm or change the 4 starter themes (Ad Astra Dark, Ad Astra Light, High Contrast Dark, High Contrast Light).
- Review the template registry (60 templates) and approve the inventory.
- Agree the work split and merge-review rule with Shem; add Shem on GitHub.
- 10 held features (V1.1/Later) are revisited after the coding portion; multiple choice is deferred.
- Every push needs the owner's yes, to the owner's own branch only.

## Decisions so far (all in DECISIONS.md)
D-001…D-006 setup · D-007 admin = teacher + admin role · D-008 classroom network in V1 (Phase 6) · D-009 no multiple choice yet · D-010 integrity = evidence + flags · D-011 free Run on visible tests · D-012 partial credit by weight · D-013 auto-submit at zero · D-014 practical isolation · D-015 screen sizes 1366×768 + 1920×1080 · D-016 keep per term · D-017 (superseded) · D-018 51 features approved, 10 held · **D-019 exports .xlsx and .csv** · **D-020 multiple themes, each verified against the templates** · **D-021 two people, own-branch pushes only**.

## Parking lot (out of scope — not being pursued)
- `teacher-assessment-preview` template: planned to reuse `student-coding-workspace` with a preview banner; confirm in P05.
- PDF reports (not chosen in D-019).
