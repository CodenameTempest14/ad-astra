# Phase 0 — Kickoff, Requirements, and Working System

**Objective:** Agree what is being built and put the working system
(repository, rules, reports, context files) in place before any product code.
**Entry criteria:** Owner approves the master plan.
**Plan reference:** MASTER-PLAN.md §13 Phase 0.

## Opening
- [x] P00-OPEN-01 Master plan v2 written — evidence: documentation/planning/MASTER-PLAN.md
- [x] P00-OPEN-02 Phase Opening Report written — evidence: documentation/phase-reports/phase-00-kickoff/PHASE_OPENING.md; owner approved start 2026-10-29 ("proceed to Phase 0")
- [x] P00-OPEN-03 Phase brief written — evidence: documentation/context/phase-00-brief.md
- [x] P00-OPEN-04 Claude Code best practices researched and recorded — evidence: documentation/guides/CLAUDE-CODE-PLAYBOOK.md (sources listed, 2026-10-29)
- [x] P00-OPEN-05 Colleague reference project reviewed (EngiRent, with permission) — evidence: playbook §0, rules marked *(EngiRent)*

## Decisions (record each in documentation/DECISIONS.md)
- [x] P00-01 D-UI: WPF host + Blazor Hybrid (WebView2) — evidence: DECISIONS.md D-001, owner 2026-10-29
- [x] P00-02 D-PW: Playwright Test (Node) for tests/ui-visual — evidence: DECISIONS.md D-002, tests/ui-visual/package.json
- [x] P00-03 D-LFS: Git LFS for design images; keep phase-closing captures + baselines — evidence: .gitattributes, DECISIONS.md D-003
- [x] P00-04 D-TPL: free/open-licensed templates only (Tabler, Judge0 IDE, Monaco, shadcn/ui — all MIT) — evidence: design/templates/template-manifest.json
- [ ] P00-05 D-VP: confirm viewport set and dark-only vs dark + light theme
- [x] P00-06 D-NAME: `AdAstra.*` projects, `ad-astra/` repo root — evidence: src/ folder names
- [x] P00-07 Account/deployment model — evidence: DECISIONS.md D-007 (admin = teacher + admin role), D-008 (teacher PC host, students on lab PCs); CLASSROOM-SETUP.md §1
- [x] P00-07a Classroom network in V1; new Phase 6 added; later phases renumbered 7–9 — evidence: DECISIONS.md D-008, documentation/phases/phase-06-classroom-network.md
- [x] P00-07b Multiple-choice deferred until coding portion is reviewed — evidence: DECISIONS.md D-009
- [x] P00-07c Exam integrity approach: record evidence + flag for review — evidence: DECISIONS.md D-010
- [ ] P00-07d Owner approves or rejects each remaining proposed feature — PROG: 4 approved, 1 deferred, 58 awaiting (documentation/specs/FEATURES.md)
- [x] P00-07e Classroom setup directions written — evidence: documentation/guides/CLASSROOM-SETUP.md
- [ ] P00-08 Can students run code before submitting? Visible/hidden feedback rules
- [ ] P00-09 Scoring policy: partial credit, penalties, multiple submissions
- [ ] P00-10 Timer rules: expiry, autosave, late submission, interruption
- [ ] P00-11 Retention: source code, submissions, temp run folders
- [ ] P00-12 Isolation strength required for the classroom threat model
- [ ] P00-13 Report/export formats

## Requirements and inventory
- [ ] P00-14 Teacher workflow written — documentation/specs/teacher-workflow.md
- [ ] P00-15 Student workflow written — documentation/specs/student-workflow.md
- [ ] P00-16 Capability list (plan §6) confirmed item by item
- [x] P00-17 UI inventory (pages → sections → components with IDs) — evidence: design/templates/template-manifest.json (45 elements), design/TEMPLATE_REGISTRY.md
- [ ] P00-18 Owner reviews and approves the UI inventory

## Repository and working system
- [x] P00-19 Repository cloned from https://github.com/CodenameTempest14/ad-astra.git — evidence: ad-astra/.git
- [x] P00-20 Folder skeleton with a README.md in every folder — evidence: `find . -type d` vs README check in tools/check-readmes.mjs
- [x] P00-21 CLAUDE.md (< 200 lines) with read order and hard rules — evidence: CLAUDE.md
- [x] P00-22 .claude/settings.json deny rules for secrets + gates hook — evidence: .claude/settings.json, .claude/hooks/ad-astra-gates.sh
- [x] P00-23 .gitignore and .gitattributes (LFS) — evidence: repo root
- [x] P00-24 Phase report script — evidence: tools/phase-report.mjs
- [x] P00-25 Context files: CURRENT_STATE.md, PHASE_INDEX.md, report templates — evidence: documentation/context/, documentation/phase-reports/
- [x] P00-26 First push to GitHub — evidence: owner approved 2026-10-29; secret sweep clean; `git push -u origin main` → remote main 65d6d83 = local HEAD (`git ls-remote`); 108 LFS files. **Owner rule: ask before every later push.**
- [ ] P00-27 Owner can explain the session workflow and where every report lives (walkthrough)

## Closing
- [ ] P00-CLOSE-01 All items done or RULED with reason
- [ ] P00-CLOSE-02 Phase Closing Report with `node tools/phase-report.mjs` output and the end-of-session question
- [ ] P00-CLOSE-03 Owner sign-off
- [ ] P00-CLOSE-04 Tag `phase-00-complete` (owner approval)
- [ ] P00-CLOSE-05 CURRENT_STATE.md moved to Phase 1
