# Phase 1 — Brand, Design System, and Template Acquisition

**Objective:** Decide what Ad Astra looks like, element by element, before building it.
**Entry criteria:** Phase 0 signed off; UI inventory approved.
**Plan reference:** MASTER-PLAN.md §3, §13 Phase 1.

## Opening
- [ ] P01-OPEN-01 Phase 0 Closing Report signed off; tag `phase-00-complete` exists
- [ ] P01-OPEN-02 Phase Opening Report written
- [ ] P01-OPEN-03 Phase brief written — documentation/context/phase-01-brief.md
- [ ] P01-OPEN-04 Best-practice sources re-checked (playbook header); changes recorded
- [ ] P01-OPEN-05 Repo-derived state table of this checklist in the Opening Report

## Brand
- [ ] P01-01 Logo concept generated from the plan §1.1 prompt; master saved to assets/branding/source/
- [ ] P01-02 Exports: 16, 32, 48, 256 PNG and multi-resolution .ico — assets/branding/exports/
- [ ] P01-03 Legibility check at real size on light and dark surfaces (screenshot evidence)
- [ ] P01-04 Asset source, steps and file names recorded in assets/branding/README.md

## Design tokens
- [ ] P01-05 DESIGN.md: colour tokens (navy base, blue/cyan accents, status palette), checked for contrast
- [ ] P01-06 DESIGN.md: typography (bundled fonts, offline), spacing scale, radius, elevation, focus ring
- [ ] P01-07 Mapping of Tabler CSS variables → Ad Astra tokens

## Template acquisition (search online → capture → record)
- [x] P01-08 Sources researched; licenses checked (Tabler MIT, Judge0 IDE MIT, Monaco MIT, shadcn/ui MIT) — evidence: design/templates/template-manifest.json `sources`
- [x] P01-09 Candidates captured for all 24 pages — evidence: design/templates/pages/*/candidates/, design/templates/capture-log.json (53/53 OK, 2026-10-29)
- [x] P01-10 Section templates captured (sidebar, top bar, content area, code editor) — evidence: design/templates/sections/
- [x] P01-11 Component templates captured (21) — evidence: design/templates/components/
- [x] P01-12 Vendor chrome removed from captures (Tabler promo banner, customiser button) — evidence: manifest `hideSelectors`; images re-checked visually
- [x] P01-13 Approved template chosen per element; README record per element; registry generated — evidence: design/TEMPLATE_REGISTRY.md (45/45 Approved)
- [ ] P01-14 Section templates for pages still missing them (e.g. workspace-problem-panel, workspace-output-console, test-case-table) — capture element crops or write a structural note + authored wireframe
- [ ] P01-15 Missing states captured where they matter: error, empty, loading, disabled (login error, empty lists, running execution)
- [ ] P01-16 THIRD_PARTY_NOTICES.md lists every source we will adapt code/markup from

## Playwright tooling
- [x] P01-17 tests/ui-visual set up with Playwright Test 1.56.1 + Chromium — evidence: tests/ui-visual/package.json, `npm run capture-templates` output
- [ ] P01-18 Spike: minimal WPF + BlazorWebView window; Playwright attaches over CDP (`WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--remote-debugging-port=9222`) and captures it — BLOCKED: .NET SDK not installed on this PC (`dotnet` not found, 2026-10-29)
- [ ] P01-19 Side-by-side + diff image generation script (template vs implementation) — tests/ui-visual/scripts/compare.mjs
- [ ] P01-20 PASS_REPORT.md template — design/captures/README.md

## Closing
- [ ] P01-CLOSE-01 Every inventory element Approved or deferred with a ruling
- [ ] P01-CLOSE-02 Spike output committed (capture of the hello-world WebView2 window)
- [ ] P01-CLOSE-03 Phase Closing Report + phase-report output + end-of-session question
- [ ] P01-CLOSE-04 Owner walkthrough of the registry and sign-off
- [ ] P01-CLOSE-05 Tag `phase-01-complete`; CURRENT_STATE.md moved to Phase 2
