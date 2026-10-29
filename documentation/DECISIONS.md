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
