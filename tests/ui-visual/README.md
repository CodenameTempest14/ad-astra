# tests/ui-visual/

Playwright Test (Node, v1.56.1, Decision D-002). This folder holds:
- template capture: `npm run capture-templates [-- <element-id>]`
- template registry: `npm run registry`
- (from Phase 1/2) visual passes against approved templates and baselines, by attaching to the app's WebView2 over CDP.

Setup on a new computer: `npm install && npx playwright install chromium`. `node_modules/`, `test-results/` and `playwright-report/` are git-ignored.
