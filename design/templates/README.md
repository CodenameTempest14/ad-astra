# design/templates/

Reference templates, one folder per element under `pages/`, `sections/`, `components/`.

- `template-manifest.json` is the **source of truth**. Edit it to add, change or approve templates.
- `capture-log.json` records the HTTP status and title of each capture, and whether it was OK, SUSPECT or FAILED.
- Each element folder contains `README.md` (generated template record), `candidates/<source>/` and `approved/`.

Rules: images must show the real template rendered, not a docs page or search results. Never overwrite an approved image; add `v2/`. File names: `<state>__<theme>__<viewport>.png`.
