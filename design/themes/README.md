# design/themes/

The Ad Astra themes and the proof that each one works with the templates (owner decision D-020).

| Path | What |
|---|---|
| `themes.json` | **Source of truth.** One entry per theme: Tabler CSS variables, semantic colours (fill + text-on-fill), Monaco editor theme, optional `extraCss`. Edit this to add, rename or change a theme. |
| `THEME_REPORT.md` | Generated. Contrast results per theme × page. |
| `captures/<theme>/` | Generated screenshots of real Tabler pages with the theme applied. Overwritten on each run; not baselines. |

**Check everything after any change:** `cd tests/ui-visual && npm run theme-check` (about 5 minutes; needs internet because it loads the Tabler demo pages). It exits with an error if any theme has a contrast failure or a page could not be checked.

**Rules that keep themes safe**
- Dark themes: bright fills with dark text. Light themes: dark fills with white text.
- Use semantic colours only (primary, secondary, success, warning, danger, info), never Tabler's demo palette (`btn-yellow`, `text-red`).
- The check measures **text** contrast. Borders, focus rings and icons are reviewed by eye until the non-text check exists (checklist item P01-24).
