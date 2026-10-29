# design/captures/

Playwright passes of the Ad Astra implementation (MASTER-PLAN §3.5).

```
phase-NN/YYYY-MM-DD_sNN/
├── PASS_REPORT.md
├── pages/<page-id>/{implementation,side-by-side,diff}__<state>__<theme>__<viewport>.png
├── sections/<page-id>/<section-id>/...
└── components/<component-id>/...
```

PASS_REPORT.md gives one verdict per element: **Match**, **Acceptable deviation** (explained), or **Mismatch** (must fix). UI-GATE: the next page starts only when the current page has no Mismatch. Intermediate session captures are pruned at phase close (D-003).
