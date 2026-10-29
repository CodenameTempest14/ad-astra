# tools/

Project scripts (Node, no dependencies).

| Script | What it does |
|---|---|
| `phase-report.mjs` | Counts the phase checklists and prints the table and status line. Run at every session end (CTX-9). `--blocked` lists blocked items. |
| `check-readmes.mjs` | Fails if any folder lacks a README.md. Run at every session close. |
