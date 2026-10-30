# Third-Party Notices

Ad Astra adapts or bundles the open-source works below. Each entry says what we use, where it comes from, and its licence. When a file in `src/` is adapted from one of them, its path is added to the "Adapted in" column (from Phase 2). The full licence texts ship with the installer (Phase 9).

Status of this file: **sources recorded in Phase 1 (P01-16)**. Nothing is adapted into `src/` yet; the template captures in `design/templates/` are reference screenshots only.

| Work | Used for | Source | Licence | Adapted in |
|---|---|---|---|---|
| Tabler (HTML UI kit, Bootstrap 5) | Primary design system: layout and markup adapted into Razor components; CSS variables themed by `design/themes/themes.json` | https://github.com/tabler/tabler | MIT | none yet |
| Tabler Icons | Icons used by Tabler templates | https://github.com/tabler/tabler-icons | MIT | none yet |
| Bootstrap 5 | Underlying framework of Tabler | https://github.com/twbs/bootstrap | MIT | none yet |
| Monaco Editor | Code editor component | https://github.com/microsoft/monaco-editor | MIT | none yet |
| Judge0 IDE | Layout reference for the student coding workspace (editor, input, output panels); no code copied | https://github.com/judge0/ide | MIT | reference only |
| shadcn/ui examples | Comparison candidate only; React + Tailwind, not reusable in Razor; no code copied | https://github.com/shadcn-ui/ui | MIT | reference only |
| Inter (font) | **Proposed** UI font, bundled offline; awaiting owner confirmation (design/DESIGN.md §4) | https://github.com/rsms/inter | SIL OFL 1.1 ("Inter" is a trademark of Rasmus Andersson) | not downloaded yet |
| JetBrains Mono (font) | **Proposed** code font, bundled offline; awaiting owner confirmation | https://github.com/JetBrains/JetBrainsMono | SIL OFL 1.1 | not downloaded yet |
| Playwright | Developer-only visual testing tool (not shipped) | https://github.com/microsoft/playwright | Apache-2.0 | not shipped |

## Rules we follow
- The licence of each source was checked when it was recorded (template manifest `sources`; fonts via web search, to be re-verified against the upstream repository when the files are downloaded).
- Ad Astra's own branding (colours, logo, fonts) overrides a template's; we never reuse a template's logos, illustrations or brand identity.
- Before release, the copyright line and full licence text of every shipped work are copied from the upstream release actually used (Phase 9 checklist).
- Add a row here in the same commit that first adapts or bundles a new work.
