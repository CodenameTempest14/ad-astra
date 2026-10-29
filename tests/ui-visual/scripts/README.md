# tests/ui-visual/scripts/

- `capture-templates.mjs` reads `design/templates/template-manifest.json`, captures every candidate, hides vendor chrome, and logs status to `capture-log.json`.
- `build-registry.mjs` copies approved images, writes every template folder's README, and regenerates `design/TEMPLATE_REGISTRY.md`.

Planned: `compare.mjs`, which makes side-by-side and diff images for Playwright passes (P01-19).
