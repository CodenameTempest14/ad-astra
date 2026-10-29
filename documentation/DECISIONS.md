# DECISIONS

Durable technical decisions: what was chosen, the alternatives, and why. Append-only;
a reversed decision gets a new entry that references the old one.

## D-001 — UI rendering: WPF host + Blazor Hybrid (WebView2) — 2026-10-29
- **Decided by:** owner ("Yes, continue"), on the agent's recommendation.
- **Alternatives:** pure WPF XAML (simpler stack, but Playwright cannot drive it; FlaUI instead).
- **Why:** the owner's rule requires Playwright comparisons of every page; Playwright attaches
  to WebView2 over CDP (https://playwright.dev/docs/webview2). Online templates are HTML/CSS and
  translate directly to Razor. Monaco runs naturally in WebView2.
- **Costs accepted:** the owner learns Razor/HTML/CSS as well as C#; WebView2 runtime needed on
  Windows 10 (built into Windows 11); browser dev tools join the debugging path.

## D-002 — Playwright flavour: Playwright Test for Node, version 1.56.1 — 2026-10-29
- **Alternatives:** Playwright for .NET (one language, but no built-in screenshot comparison).
- **Why:** built-in `toHaveScreenshot` baselines and HTML report. Confined to `tests/ui-visual/`.

## D-003 — Design images in Git LFS; retention — 2026-10-29
- **Why:** 99 template images are already ~13 MB and captures will grow every phase.
- **Retention:** keep templates, baselines and phase-closing captures; prune intermediate session
  captures at phase close.

## D-004 — Template sources: open-licensed only — 2026-10-29
- **Chosen:** Tabler (MIT) as the primary design system; Judge0 IDE (MIT) for the coding workspace
  layout; Monaco (MIT) for the editor; shadcn/ui (MIT) as comparison candidates only.
- **Why Tabler:** plain HTML/CSS (adaptable into Razor, unlike React-based kits), a large set of
  dark-mode demo pages that cover almost every page in the inventory, and an MIT license.
- **Decided by:** the agent; the owner delegated template choice ("you don't need my approval").

## D-005 — Project naming: `AdAstra.*`, repo root `ad-astra/` — 2026-10-29
- **Why:** MASTER-PLAN §1.1 requires consistent product naming.

## D-006 — Template records are folder README.md files — 2026-10-29
- **Why:** owner rule "a README in every folder"; GitHub shows README.md automatically, so each
  template folder explains itself. Replaces the earlier `TEMPLATE.md` name.

## D-007 — Roles: the Administrator is a teacher with an extra admin role — 2026-10-29
- **Decided by:** owner (Q1: "Yes").
- **Meaning:** one account can hold Teacher + Administrator. The Admin Console is extra pages for
  that account, not a separate login. Students are a separate role. Permissions are checked in services.

## D-008 — Classroom network is in V1 (new Phase 6) — 2026-10-29
- **Decided by:** owner (Q2: "Yes"), on the agent's recommendation.
- **Context:** owner stated that the Teacher/Admin Console runs on the teacher's own PC and students use lab PCs.
- **Decision:** the teacher's PC runs the Ad Astra Host (the only database). Lab PCs run the Student app and
  connect over the classroom network (no internet). Visible tests run on lab PCs; **hidden tests run only on the host**.
  The USB package fallback stays (F-PLT-03).
- **Supersedes:** MASTER-PLAN §12 "future LAN" and the §17 rule "do not begin LAN before…" (amended).
- **Consequences:** a new Phase 6 (Classroom Network and Host Service); the old Phases 6/7/8 become 7/8/9;
  template phase numbers updated; CLASSROOM-SETUP.md describes this layout.

## D-009 — Multiple-choice questions are not in scope yet — 2026-10-29
- **Decided by:** owner (Q3: "Do not include yet, let's look at the progress first of the coding portion").
- **Meaning:** F-TCH-23 is deferred. Revisit after the coding workflow (Phase 7) is working. The data model should
  not block adding question types later, but no MC work is planned.

## D-010 — Exam integrity = record evidence and flag for review — 2026-10-29
- **Decided by:** owner (Q4: "Yes").
- **Meaning:** Ad Astra records integrity events and raises "review suggested" flags. It never claims to prevent
  cheating or labels a student as a cheater. Classroom supervision remains required.

## D-011 — Students run freely against visible tests — 2026-10-29
- **Decided by:** owner (P00-08), on the agent's recommendation.
- **Meaning:** unlimited **Run** on the lab PC against visible tests, plus a custom-input box. Hidden tests run only on the host at **Submit**; students see only pass/fail counts for them, never test data (D-008, MASTER-PLAN §9.4).
- **Note:** a run limit per question can be added later if trial-and-error guessing becomes a problem.

## D-012 — Scoring: partial credit by test weight — 2026-10-29
- **Decided by:** owner (P00-09).
- **Meaning:** score = weight of passed tests ÷ total weight × question points. A teacher may switch a question to all-or-nothing. Attempt penalties (F-TCH-11) are **not** part of this decision; they stay awaiting approval.

## D-013 — Timer expiry: auto-submit the saved code — 2026-10-29
- **Decided by:** owner (P00-10).
- **Meaning:** each student's timer starts from the host's recorded time. At zero, the latest autosaved code is submitted and the editor locks. The teacher can extend an individual student's time from the console (F-TCH-10, F-ADM-14 still awaiting approval).

## D-014 — Isolation: practical lab protection — 2026-10-29
- **Decided by:** owner (P00-12).
- **Meaning:** standard Windows student account, Job Objects (time, memory, output limits, kill process tree), a separate temp folder per run, no shell-string building. This stops accidents and casual abuse. It does **not** stop a determined attacker, and SECURITY.md must say so (MASTER-PLAN §10, never claim a sandbox without evidence). Stronger isolation can be re-evaluated in Phase 3 if the owner's threat model changes.

## D-015 — Screens and theme: dark only, 1366×768 and 1920×1080 — 2026-10-29
- **Decided by:** owner (P00-05). Every page is designed, built and Playwright-compared at these two sizes in the dark theme. Light theme is **not** planned (parking lot). The approved templates were captured at 1366×768; 1920×1080 captures are added per page when that page is built.

## D-016 — Retention: keep per term, archive on request — 2026-10-29
- **Decided by:** owner (P00-11). Submissions and source code are kept for the current school year/term; the administrator can archive or delete a finished term. Temporary run folders are deleted immediately after each run. Archive tooling is F-ADM-13 (awaiting approval); until then, "delete a term" is the minimum to build.

## D-017 — Exports: Excel (.xlsx) only — 2026-10-29 (SUPERSEDED by D-019)
- **Decided by:** owner (P00-13), who selected Excel and not CSV or PDF. Gradebook and assessment results export to .xlsx. CSV and PDF reports are **not** planned (propose again if needed). Importing class lists (F-ADM-03) is a separate feature, still awaiting approval.

## D-018 — Feature approvals, first batch — 2026-10-29
- **Decided by:** owner (P00-07d), on the agent's recommendation: approve version-1 features now, hold the rest until the coding portion is reviewed.
- **Approved (51 total):** Admin Console 13 (incl. Live Monitor and lab-PC panel), Teacher 18, Student 11, Integrity 5, Platform 4. Each is in a phase checklist under "Approved features to build".
- **Held (10), revisit after the coding portion:** F-ADM-05, 06, 13; F-TCH-12, 18, 21, 22, 24; F-STU-11; F-INT-05.
- **Declined / deferred (2):** F-TCH-23 multiple choice (D-009); F-PLT-05 light theme (D-015).
- **Scope note:** 51 features across phases 3–9 is a large plan. Each phase opening re-checks that its list is still realistic, and any feature can be moved or held with the owner's word.

## D-019 — Exports: both Excel (.xlsx) and CSV (.csv) — 2026-10-29
- **Decided by:** owner, after reviewing the session ("I decided to use both .xlsx and .csv"). **Supersedes D-017** (which recorded Excel only).
- **Meaning:** gradebook, assessment results and reports export to **.xlsx and .csv**. PDF reports are still **not** planned.
- **Design notes:** CSV is UTF-8 with a byte-order mark so Excel opens names with accents correctly; one header row; no formulas. Both formats come from the same result rows, so they cannot disagree (test: export both and compare the values).

## D-020 — Multiple themes; every theme must work with the templates — 2026-10-29
- **Decided by:** owner ("I plan to add multiple themes, make sure each theme works well with the templates"). **Supersedes the "dark only" part of D-015**; the two screen sizes (1366×768, 1920×1080) stand.
- **Starter set (the agent's proposal; owner may rename, remove or add):** `astra-dark` (default), `astra-light`, `high-contrast-dark`, `high-contrast-light`. The two high-contrast themes also deliver the accessibility option F-STU-12.
- **How themes are defined:** one file, `design/themes/themes.json`, holding Tabler CSS variables per theme. Rule that keeps every theme readable: **dark themes use bright fills with dark text; light themes use dark fills with white text**. UI uses **semantic colours only** (primary, secondary, success, warning, danger, info), never Tabler's demo palette (`btn-yellow`, `text-red`).
- **How "works with the templates" is proven:** `cd tests/ui-visual && npm run theme-check` applies each theme to 10 real Tabler pages, measures the WCAG AA contrast of every visible text element, and saves screenshots. Result 2026-10-29: **4 themes × 10 pages, 15,640 text checks, 0 semantic failures, 0 unchecked pages** (`design/themes/THEME_REPORT.md`). Screenshots were reviewed by eye; this caught weak card borders in the high-contrast themes, which the text check cannot see.
- **Known limits:** the check measures text contrast only. Non-text contrast (borders, focus rings, icons) is checked by eye for now; a checker for it is a Phase 1 item. The Judge0 and Monaco templates were captured in one theme; Monaco has built-in matching themes (`vs-dark`, `vs`, `hc-black`, `hc-light`, mapped in themes.json).
- **Cost control for UI-GATE:** a page is compared at **both screen sizes in the default theme**. At each phase close, a **theme sweep** runs every theme at 1366×768 with the contrast scanner. Baselines are kept for the default theme at both sizes and for the other themes at 1366×768.

## D-021 — Two-person collaboration: personal branches, own-branch pushes only — 2026-10-29
- **Decided by:** owner ("create two branches for me and my colleague, Shem Dumpor … you must only push to my branch name, since Shem will be pushing on his branch").
- **Branches:** `codenametempest14` (owner), `shem-dumpor` (Shem Dumpor), both created from the same commit. `main` is left at the first push (`65d6d83`) and changes only by a reviewed merge.
- **HARD RULE (SEC-13):** each person's Claude Code pushes only to their own branch, asks before every push, never to `main` or the other branch. Enforced by `.githooks/pre-push` (identity from `git config user.email`, mapping in `.githooks/branch-owners.txt`). The owner's machine additionally denies pushes to `shem-dumpor` and `main` in the untracked `.claude/settings.local.json`.
- **Note:** Shem Dumpor's GitHub username is not recorded here. The branch name is only a label; add him as a collaborator on GitHub so he can push (owner action in repository settings).
- **Open:** work split and merge reviewer are proposals in COLLABORATION.md (checklist P00-28).

## D-022 — Theme list approved; collaboration protocol agreed — 2026-10-29
- **Decided by:** owner ("Themes are approved", "Collaboration done").
- **Themes:** the four starter themes in `design/themes/themes.json` are the approved set (Ad Astra Dark default, Ad Astra Light, High Contrast Dark, High Contrast Light). New themes still need to pass `npm run theme-check`.
- **Collaboration:** the owner reports the protocol with Shem Dumpor is agreed. The agreed work split and merge reviewer are **not yet recorded**; the owner should add them to `documentation/guides/COLLABORATION.md` or tell the agent to.
