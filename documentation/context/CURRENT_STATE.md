# CURRENT STATE

> Overwritten at every session close. The first file read in every session (CLAUDE.md).

**Current phase:** P00 — Kickoff, Requirements, and Working System (closing). Phase 1 work has started in parallel at the owner's request.
**Last session:** 2026-10-30 s03 — [close report](../phase-reports/phase-00-kickoff/sessions/2026-10-30_s03_CLOSE.md)
**Branches:** owner works on `codenametempest14`, Shem Dumpor on `shem-dumpor`; `main` stays at the first push (`65d6d83`) until a reviewed merge (Shem reviews the owner's work). See `git log -1` for the latest commit.
**Status line:** run `node tools/phase-report.mjs` · progress table: `node tools/phase-report.mjs --md`
**Phase builder:** owner only (Shem reviews; he pushes only when the owner asks). Ask again at the start of every session.

## Recommended model for the next session (MDL-1)
**Sonnet 5.5**, because the work is the hook check, closing Phase 0, writing the Phase 1 opening documents, and the logo exports (scripted image conversion). Switch to **Opus 5.5** at P01-18 (WPF + Blazor spike) or when Phase 2 starts.

## Next concrete step
0. **First thing (P00-29):** the agent must say which rules the every-turn gates hook sent (progress table + continuation prompt, own-branch pushes, UI-GATE, ask-before-merge-to-main, phase-owner question). If the agent cannot quote them, the hook is not running in this VS Code environment: the owner checks `/hooks`; then fix, or rule P00-29 out with a reason.
1. The enhanced D1 logo is approved (P01-01 done; masters in `assets/branding/source/`). Next: P01-02 exports (16/32/48/256 PNG + .ico; small-size master for 16–32), P01-03 legibility check, P01-04 README.
2. Close Phase 0: P00-CLOSE-01…05 (closing report, owner sign-off, tag `phase-00-complete` with approval; open the pull request into `main` for Shem's review, ask first). Then write the Phase 1 Opening Report and brief (P01-OPEN-02…05).
3. Owner adds Shem's GitHub username to COLLABORATION.md and adds him as a collaborator.
4. Then remaining Phase 1: P01-14/15 missing section templates and states, P01-18 WPF+Blazor spike (Opus), P01-19/20 compare script and PASS_REPORT.

## Waiting on the owner
- Push of the unpushed commits to `codenametempest14` (every push needs a yes, own branch only).
- Phase 0 sign-off and tag; `main` merge only via a reviewed pull request.
- Shem's GitHub username and collaborator access.
- 10 held features (V1.1/Later) are revisited after the coding portion; multiple choice is deferred.

## Decisions so far (all in DECISIONS.md)
D-001…D-006 setup · D-007 admin = teacher + admin role · D-008 classroom network in V1 · D-009 no multiple choice yet · D-010 integrity = evidence + flags · D-011 free Run on visible tests · D-012 partial credit by weight · D-013 auto-submit at zero · D-014 practical isolation · D-015 screen sizes · D-016 keep per term · D-018 51 features approved, 10 held · D-019 exports .xlsx and .csv · D-020 multiple themes · D-021 two people, own-branch pushes · D-022 themes approved, collaboration agreed · **D-023 fonts Inter + JetBrains Mono** · **D-024 logo direction D1**. New feature approved: F-ADM-17 term-end backup reminder.

## Parking lot (out of scope — not being pursued)
- `teacher-assessment-preview` template: planned to reuse `student-coding-workspace` with a preview banner; confirm in P05.
- PDF reports (not chosen in D-019).
- Slider (`.form-range`) track contrast: checked as a component in Phase 2.
