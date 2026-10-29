# Ad Astra — Programming Assessment Desktop Application

## Master Project Plan and Collaborative Development Guide

**Product name:** Ad Astra\
**Plan version:** v3, 2026-10-29. Adds template and visual-verification
rules including UI-GATE (§3), context management and phase reports (§4),
repository rules (§5), Claude Code practices (§2.1), and Phases 0–9 as
checklists (§13 → `documentation/phases/`). Supersedes
`documentation/predated/ORIGINAL-PROJECT-PLAN.md`.\
**Repository:** https://github.com/CodenameTempest14/ad-astra.git\
**Project status:** Phase 0 — Kickoff (see `documentation/context/CURRENT_STATE.md`)\
**UI stack (decided 2026-10-29):** WPF host + Blazor Hybrid (WebView2), Monaco editor\
**Target platform:** Windows 10/11\
**Initial deployment:** One PC, fully offline\
**Future deployment:** Multiple PCs over a local-area network (LAN)\
**Required programming languages:** C, C++, Java, Python, and C#\
**Primary goal:** Build a standalone programming assessment application
inspired by platforms such as CodeChum, while ensuring the project owner
understands the codebase, design decisions, and debugging process.

------------------------------------------------------------------------

## 1. Project Vision

Build a Windows desktop application that enables teachers to create
programming assessments and students to solve coding problems in a
controlled environment. The system should support configurable test
cases, hidden tests, timers, automated grading, submission records, and
assessment results.

The application should work locally without requiring cloud hosting or
an internet connection for its core features. It should be designed so
LAN support can be added later without rewriting the entire system.

The project is not merely about producing a working application. It is
also a guided learning project. The owner must understand how the
application is structured, how each major component works, why design
decisions were made, and how to locate and diagnose faults.

### 1.1 Product name and visual identity

The official project name is **Ad Astra**. Use this name consistently in
the application title, documentation, repository descriptions, installer
metadata, and user-facing branding. Do not rename the product or invent a
replacement name unless the owner explicitly requests it.

The name should be presented cleanly as **Ad Astra** (two words). The
visual identity should feel precise, modern, technical, and understated,
with a subtle celestial/orbital motif rather than an overly literal star
mascot. A dark navy base with restrained electric-blue or cyan highlights
is a suitable starting direction, but keep small-size legibility as the
priority.

#### Favicon and application icon requirement

Create a project logo specifically designed to work as both a favicon and
an application icon. Do not use a detailed poster or a full wordmark as
the favicon. Prefer a simple, distinctive symbol that remains recognizable
at 16×16 and 32×32 pixels, such as a stylized letter A combined subtly
with a star point or orbital arc. Avoid tiny text, thin details, and
excessive glow that disappears at small sizes.

Use this image-generation prompt when creating the initial logo concept:

> Design a clean, premium favicon and app icon for **Ad Astra**, a Windows
desktop programming assessment system. Create one distinctive geometric
symbol: a stylized capital A with a subtle celestial star point and a
single orbital arc, optionally incorporating a minimal coding-bracket cue
only if it remains clear at small sizes. Use a deep navy background with
high-contrast icy white, electric blue, and restrained cyan accents. The
style should be modern, precise, technical, and understated—not childish,
not cluttered, and not an obvious stock space illustration. Center the
symbol, use balanced negative space, strong silhouettes, and clean edges.
Do not include words, letters other than the stylized A, mockup scenes,
watermarks, or decorative background objects. Make the design legible
when reduced to 16×16 and 32×32 pixels. Deliver a square master image
suitable for generating standard favicon sizes and a Windows application
icon.

#### Required icon outputs and integration

- Keep the original high-resolution square master asset in the project
  assets folder.
- Export and verify favicon sizes including 16×16, 32×32, and 48×48 PNG.
- Provide a multi-resolution `.ico` file for the Windows application icon
  where the selected build and packaging workflow supports it.
- Use the icon consistently in the main window, taskbar, installer, and
  other relevant Windows surfaces.
- Inspect the icon at actual small sizes on both light and dark surfaces;
  do not assume a large preview guarantees favicon readability.
- Record the asset source, generation/editing steps, output filenames,
  and integration changes in the project documentation and `PROGRESS_LOG.md`.
- Do not claim the favicon or application icon is integrated until the
  actual files have been created, checked, and applied to the app.

## 2. Essential Collaboration Principle: Build It So the Owner Understands It

**The AI agent may perform much of the implementation work, but it must
not turn the project into an unexplained black box.** The owner must be
actively involved in architectural decisions, reviews, testing, and
learning.

Every implementation phase must include explanation and verification.
Code should be understandable and maintainable by the owner, not merely
generated as quickly as possible.

### Required working rules for the AI agent

1.  **Explain before or alongside implementation.** Before introducing a
    major component, explain the problem it solves, its
    responsibilities, its inputs and outputs, and how it interacts with
    other components.
2.  **Explain code at useful levels.** Explain the purpose of each
    project, class, interface, important method, configuration file, and
    non-obvious block of logic. Explain individual lines when they
    contain unfamiliar, critical, or security-sensitive behavior. Avoid
    meaningless line-by-line descriptions of obvious syntax.
3.  **Use clear naming.** Prefer descriptive names for classes, methods,
    variables, files, and database fields. Avoid unnecessary
    abbreviations, overly generic names, and clever abstractions that
    make debugging harder.
4.  **Keep architecture proportionate.** Prefer a modular monolith and
    straightforward patterns. Do not introduce microservices, dependency
    injection frameworks, design patterns, libraries, or layers unless
    they solve a specific problem that has been explained.
5.  **Work in small, reviewable increments.** Implement a small,
    coherent feature, explain it, build it, test it, and review it
    before moving on. Avoid generating the entire application in one
    huge unverified change.
6.  **Keep the owner involved.** Present important choices with
    trade-offs and a recommendation. Ask for approval when a decision
    materially changes the architecture, user experience, security, or
    scope. Do not ask for approval for every trivial implementation
    detail.
7.  **Teach debugging as part of development.** For each significant
    feature, explain where its logic lives, how to reproduce a failure,
    where to set breakpoints, what logs or variables to inspect, and how
    to distinguish likely causes.
8.  **Never hide uncertainty.** Identify assumptions, limitations,
    version-sensitive behavior, security concerns, and unverified
    claims. Do not claim that code works unless it has been built or
    tested in the available environment.
9.  **Do not overwrite working code blindly.** Inspect the existing code
    and its dependencies before editing. Keep changes focused, explain
    what changed, and identify any migrations or configuration changes
    required.
10. **Avoid unexplained code dumps.** Deliver implementation in
    manageable files or patches. Summarize each change and explain how
    the owner can verify it.
11. **Teach the debugging path, not just the fix.** When resolving an
    error, explain the symptom, root cause, evidence used to identify
    it, fix, regression test, and how to recognize the same class of
    issue later.
12. **Keep documentation current.** Update architecture notes, setup
    instructions, known limitations, and troubleshooting guides when
    behavior changes.

### Required deliverables for each development milestone

For every milestone, provide:

-   **Purpose:** What the feature accomplishes and why it is needed.
-   **Design:** How it works and why the selected approach is
    appropriate.
-   **Code map:** The files, classes, methods, interfaces, and database
    tables involved.
-   **Execution flow:** A clear step-by-step trace from user action to
    final result.
-   **Implementation:** Small, readable changes with useful comments
    where needed.
-   **Build and run instructions:** Exact commands or IDE steps.
-   **Tests:** What to test, expected results, and edge cases.
-   **Debugging guide:** Common failure modes, where to investigate, and
    how to use breakpoints and logs.
-   **Visual verification (UI work only):** Link to the Playwright pass
    report comparing the implementation to its approved templates (§3.5).
-   **Session reports:** Links to the Session Start and Session Close
    reports for the sessions that produced the milestone (§4.4).
-   **Owner review:** A short walkthrough or comprehension check so the
    owner can confirm understanding and ask questions before proceeding.
-   **Completion status:** Separate completed, tested, partially tested,
    and not-yet-implemented items.

The owner should be able to explain the main execution path of each
feature in their own words before it is considered fully understood.

### 2.1 Claude Code practices (researched rules)

The AI agent follows `documentation/guides/CLAUDE-CODE-PLAYBOOK.md`. It
holds rules for **implementation (IMP)**, **testing (TST)**, **security
(SEC)** and **context management (CTX)**, researched online from
Anthropic's Claude Code documentation and from the colleague project
EngiRent (shared with permission). The rule IDs are referenced from the
phase checklists and session reports.

The most important lesson behind the playbook: **rules that live only in
documents stop being followed once the context fills up.** Hard rules are
therefore enforced mechanically:

- deny/ask rules in `.claude/settings.json`
- a gates hook that re-injects the rules every turn
- `tools/phase-report.mjs`, which counts progress from the checklists
- `tools/check-readmes.mjs`

The sources are re-checked at the opening of every phase.

------------------------------------------------------------------------

## 3. Design Template and Visual Verification Rules

These rules apply to every piece of user interface in Ad Astra. They are
mandatory, not stylistic suggestions.

### 3.1 Template-first rule

**Every page, every part of a page, and every component must have its own
approved template before it is implemented.** Templates are organized in
three levels:

| Level | Meaning | Examples |
|---|---|---|
| **Page** | A complete screen/view and its overall layout. | Login, Teacher Dashboard, Student Coding Workspace |
| **Section** | A distinct region inside a page. | Problem panel, code editor panel, output console, timer bar, navigation sidebar |
| **Component** | A reusable control or element. | Primary button, text field, data table, tab strip, modal dialog, toast, status badge |

A component that is reused on several pages needs only one template. Each
section template lists the component templates it uses. A page template
lists its section templates. Together they form a complete map of the UI.

### 3.2 Template acquisition: search online first

Before designing any page, section, or component, the AI agent must search
online for reference templates.

1.  **Search** at least three sources for the element being designed.
2.  **Shortlist** two or three candidates. Capture screenshots of each
    (Playwright or saved image) into the templates folder (§3.4).
3.  **Present** the shortlist to the owner with a short comparison and a
    recommendation. The owner selects one candidate, a combination, or
    asks for more options.
4.  **Record** the decision in the Template Registry (§3.3) and mark the
    template **Approved**.

**Suggested sources**

- *Open-licensed UI kits and template libraries (layout and markup may be
  adapted when the license permits):* Tabler, Flowbite, shadcn/ui,
  daisyUI, Microsoft Fluent 2, Material Design 3, Bootstrap examples.
- *Inspiration only (layout ideas, no copying of assets or code):*
  Dribbble, Behance, Figma Community (check each file's license), and
  established coding platforms and editors (for example, workspace
  layouts in LeetCode, HackerRank, CodeChum, or VS Code).

**Licensing rule.** Record the license of every template. Adapt code,
markup, or assets only from permissively licensed sources (for example
MIT or Apache-2.0), and credit them in `THIRD_PARTY_NOTICES.md`.
Proprietary or unlicensed designs are layout references only: never copy
their logos, illustrations, icons, fonts, or brand identity. Ad Astra's own
branding (§1.1) always overrides a template's colors and logos.

**Each template record must state:** template ID, level (page / section /
component), source URL, author, license, date acquired, screenshot paths,
what is being adopted, what Ad Astra deliberately changes, which states
must be designed (default, hover, focus, active, disabled, error, loading,
empty), and approval status.

### 3.3 Template Registry

`design/TEMPLATE_REGISTRY.md` is the single index of all templates:

| ID | Level | Name | Used by | Source | License | Status | Last visual pass |
|---|---|---|---|---|---|---|---|
| `student-coding-workspace` | Page | Student Coding Workspace | Phase 7 | (URL) | MIT | Approved | 2026-xx-xx — Match |

**Status values:** `Proposed` → `Approved` → `Implemented` → `Verified`
(Playwright pass with no unresolved mismatches) → `Baselined` (owner
approved; screenshot is now the regression baseline).

No UI element may be implemented while its template is only `Proposed`.

### 3.4 Image folder structure and naming

All design images live in `design/` at the repository root:

``` text
design/
├── TEMPLATE_REGISTRY.md
├── templates/                                   # Acquired reference templates
│   ├── pages/
│   │   └── <page-id>/
│   │       ├── README.md                        # Source, license, decisions, section list
│   │       ├── candidates/                      # Shortlisted options before approval
│   │       │   └── <candidate-name>/<state>__<theme>__<viewport>.png
│   │       ├── approved/
│   │       │   └── <state>__<theme>__<viewport>.png
│   │       └── sections/
│   │           └── <section-id>/
│   │               ├── README.md
│   │               ├── candidates/...
│   │               └── approved/<state>__<theme>__<viewport>.png
│   └── components/
│       └── <component-id>/
│           ├── README.md
│           ├── candidates/...
│           └── approved/<state>__<theme>.png
├── captures/                                    # Playwright passes of the implementation
│   └── phase-<NN>/
│       └── <YYYY-MM-DD>_s<NN>/                  # One folder per session pass
│           ├── PASS_REPORT.md
│           ├── pages/<page-id>/
│           │   ├── implementation__<state>__<theme>__<viewport>.png
│           │   ├── side-by-side__<state>__<theme>__<viewport>.png
│           │   └── diff__<state>__<theme>__<viewport>.png
│           ├── sections/<page-id>/<section-id>/...
│           └── components/<component-id>/...
└── baselines/                                   # Owner-approved regression baselines
    ├── pages/<page-id>/<state>__<theme>__<viewport>.png
    ├── sections/<page-id>/<section-id>/...
    └── components/<component-id>/<state>__<theme>.png
```

**Naming rules**

- All folder and file names use lowercase `kebab-case`.
- Page IDs start with the role that uses them: `shared-`, `teacher-`,
  `student-`, or `dev-` (for example `shared-login`,
  `teacher-assessment-editor`, `student-coding-workspace`,
  `dev-system-health`).
- Image file names follow `<state>__<theme>__<viewport>.png` (double
  underscores separate the parts), for example
  `default__dark__1366x768.png` or `error__dark__1280x720.png`.
- Standard viewports (window sizes): `1280x720`, `1366x768`, `1920x1080`
  (to be confirmed in Phase 0).
- Never overwrite or delete an approved template or baseline. When a
  template changes, keep the old files and add a `v2/` subfolder,
  recording the reason in `README.md`.

### 3.5 Mandatory Playwright visual pass

**When designing, always run a Playwright pass to compare the
implementation with the acquired templates.** A pass is required:

- whenever a page, section, or component is created or visibly changed,
  before it can be marked done; and
- at the close of every phase, as a full regression pass over all
  implemented UI.

**Procedure**

1.  Look up the approved template images for each element in the
    registry.
2.  Start the app in **visual-test mode**: seeded sample data, frozen
    clock, fixed window size, animations off, locally bundled fonts.
3.  Use Playwright to capture the same element, state, theme, and
    viewport as each template image.
4.  Generate `side-by-side` and `diff` images into the session's capture
    folder.
5.  Review against this checklist: layout and structure, alignment and
    spacing, typography hierarchy, Ad Astra color tokens, every required
    state, long text and overflow, and basic accessibility (contrast,
    visible focus, keyboard navigation).
6.  Write `PASS_REPORT.md` giving one verdict per element:
    - **Match** — follows the template.
    - **Acceptable deviation** — intentional and explained (for example,
      Ad Astra branding replaces template colors).
    - **Mismatch** — a defect that must be fixed.
7.  Fix every Mismatch and repeat the pass until none remain.
8.  After the owner approves, copy the implementation captures into
    `design/baselines/`. Later passes compare against these baselines
    automatically (pixel-threshold comparison) to catch regressions.

Templates are references, not pixel-perfect targets, because Ad Astra's
branding and content differ from the source. Template comparison is
therefore a reviewed checklist, with diff images as evidence. Baseline
comparison is automated.

### 3.6 UI-GATE — one page at a time

**Never continue to the next page unless the current page passes its
Playwright comparison.** "Passes" means the latest `PASS_REPORT.md` for that
page (and every section and component on it) has **no Mismatch** left. Only
Match and documented Acceptable deviations may remain.

- Pages are built strictly one after another, in the order of the phase
  checklist (`Pxx-UI-NN` items).
- If a pass cannot run (tooling broken, app won't start), the page is
  **not passed**. Fix the blocker or surface it to the owner; do not start
  the next page.
- A page that passed but is changed later must pass again before work
  moves on.
- This gate is re-injected every turn by `.claude/hooks/ad-astra-gates.sh`
  and stated in `CLAUDE.md`.

### 3.7 Technical prerequisite for Playwright (decided)

Playwright automates browser engines and cannot drive a classic WPF XAML
window. **Decision D-UI (2026-10-29): WPF host + Blazor Hybrid.** The UI
renders in WebView2, and Playwright attaches to it through the Chrome
DevTools Protocol. Start the app with
`WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--remote-debugging-port=9222`, then
call `chromium.connectOverCDP('http://localhost:9222')`. Give each parallel
run its own `WEBVIEW2_USER_DATA_FOLDER`
(https://playwright.dev/docs/webview2).

### 3.8 How templates were acquired (tooling)

- `design/templates/template-manifest.json` is the single source of truth:
  sources, licenses, elements, candidate URLs, approval, adopt/change notes.
- `npm run capture-templates` (in `tests/ui-visual`) captures every
  candidate with Playwright at 1366×768, dark colour scheme. It hides vendor
  chrome (for example, Tabler's promo banner) and logs the HTTP status and
  title of every shot to `design/templates/capture-log.json`. Captures that
  look like 404s or empty pages are flagged `SUSPECT`.
- `npm run registry` copies approved images into `approved/`, writes each
  element's `README.md` record, and regenerates `design/TEMPLATE_REGISTRY.md`.
- **A capture is not accepted from its log status alone.** The images are
  opened and looked at (TST-5). The first run, for example, showed a vendor
  promo banner on every Tabler page and a redirected shadcn URL. Both were
  fixed before approval.

### 3.9 Every folder has a README

Every folder in the repository contains a `README.md` that explains what
belongs there, what doesn't, and who or what writes to it. Generated
folders get generated READMEs. `node tools/check-readmes.mjs` fails if any
folder is missing one. It runs at every session close.

------------------------------------------------------------------------

## 4. Context Management and Session Reporting

### 4.1 Purpose

An AI agent's working context is limited. Long sessions get summarized
and lose detail, and a new session starts with no memory. The project must
be organized so any session can start cold, load only what it needs, and
end with a clean handoff. The owner can use the same records to see exactly
where the project stands.

### 4.2 Context files

| File | Purpose | Updated |
|---|---|---|
| `documentation/context/CURRENT_STATE.md` | One page at most: current phase, last session, last commit, next task, blockers, pending owner decisions, and a parking lot for out-of-scope ideas. **The first file read in every session.** | Every session close |
| `documentation/context/phase-<NN>-brief.md` | The phase objective, task checklist, files and folders in scope, which sections of this plan to load, templates in play, and an explicit out-of-scope list. | At phase opening; amended if scope changes with approval |
| `documentation/phase-reports/...` | Phase and session reports (§4.4). | Every session start and close |

**Plan loading rule.** A session does not need to load this whole master
plan. It loads the global rules (§2–§5), the current phase section of §13,
and only the other sections listed in the phase brief.

### 4.3 Session rules

1.  **One bounded goal per session:** one to three tasks from the phase
    checklist.
2.  **Load context in this order:** `CURRENT_STATE.md` → the phase brief
    → the previous Session Close Report → only the source files the task
    touches.
3.  **Write the Session Start Report before changing anything.**
4.  **Reference, don't paste.** Reports point to file paths, line
    numbers, commits, and log locations rather than copying large blocks
    of code or logs.
5.  **Checkpoint at task boundaries.** Before starting a new task, or when
    the session is getting long, append a checkpoint to the Session Start
    Report: what is done, what is in progress, and the exact next step.
    Never leave a half-applied change unrecorded.
6.  **Recover after summarization.** If the conversation's context was
    summarized mid-session, re-read `CURRENT_STATE.md` and the Session
    Start Report (including checkpoints) before continuing.
7.  **Park out-of-scope ideas.** New ideas outside the phase scope go into
    the parking lot in `CURRENT_STATE.md`. They are not pursued.
8.  **Always close.** Every session ends with a Session Close Report, even
    if the work was blocked, failed, or abandoned.

### 4.4 Phase and session reports

| Report | When | Approval |
|---|---|---|
| **Phase Opening Report** | Once, before the first session of a phase | Owner approves before work starts |
| **Session Start Report** | At the start of every session, before any change | — |
| **Session Close Report** | At the end of every session | Owner reviews any pending decisions |
| **Phase Closing Report** | Once, when all phase acceptance criteria have evidence | Owner sign-off required |

**Folder structure**

``` text
documentation/phase-reports/
├── PHASE_INDEX.md                         # Each phase: status, dates, links
├── phase-00-kickoff/
│   ├── PHASE_OPENING.md
│   ├── sessions/
│   │   ├── 2026-11-02_s01_START.md
│   │   ├── 2026-11-02_s01_CLOSE.md
│   │   ├── 2026-11-04_s02_START.md
│   │   └── 2026-11-04_s02_CLOSE.md
│   └── PHASE_CLOSING.md
├── phase-01-design-system/
└── ...
```

Session numbers restart at `s01` in each phase.

**Phase Opening Report template**

```markdown
# Phase NN — <Name> — Opening Report — YYYY-MM-DD

- **Objective:**
- **Entry criteria check:** (each criterion — met / not met, with evidence)
- **Task checklist:** (numbered tasks; sessions will reference these numbers)
- **UI inventory for this phase:** (template IDs and registry status)
- **Context brief:** link to `documentation/context/phase-NN-brief.md`
- **Risks and assumptions:**
- **Owner decisions needed before starting:**
- **Owner approval to start:** (pending / approved on YYYY-MM-DD)
```

**Session Start Report template**

```markdown
# Phase NN — Session sNN — START — YYYY-MM-DD

- **Session goal:** (phase task numbers)
- **Starting state:** branch, commit hash, link to previous Close Report
- **Context loaded:** (files and plan sections actually read)
- **Context deliberately not loaded:**
- **Planned steps:**
- **Templates involved:** (registry IDs and status; must be Approved before implementation)
- **Playwright pass planned:** yes / no — which elements
- **Open questions for the owner:**
- **Risks:**

## Checkpoints
- HH:MM — done / in progress / exact next step
```

**Session Close Report template**

```markdown
# Phase NN — Session sNN — CLOSE — YYYY-MM-DD

- **Status:** Completed / Partially completed / Blocked / Failed
- **Planned vs done:** (per task number)
- **Files changed:** `path` — reason
- **Build and tests run:** `command` — observed result (or "not run" + reason)
- **Playwright pass:** link to `design/captures/.../PASS_REPORT.md` — Match / Deviation / Mismatch counts
- **Commits:** hash — message — pushed? (yes / no)
- **Problems and diagnosis:** (hypotheses labeled as hypotheses)
- **Decisions made / awaiting owner approval:**
- **Handoff (≤ 10 lines, enough for a cold start):**
- **Next session's first concrete step:**
- **Owner review / explanation needed:**
```

**Phase Closing Report template**

```markdown
# Phase NN — <Name> — Closing Report — YYYY-MM-DD

- **Acceptance criteria:** (each — met / not met — evidence link)
- **Full Playwright regression pass:** link — results
- **Test suite results:** command — results
- **Documentation updated:** (list)
- **Templates:** (all phase UI elements Verified / Baselined?)
- **Known limitations and technical debt:**
- **Items carried into the next phase:**
- **Owner walkthrough completed:** date, topics, open questions
- **Owner sign-off:** (pending / approved on YYYY-MM-DD)
- **Git tag:** `phase-NN-complete`
```

**Relationship to `PROGRESS_LOG.md`.** The Session Close Report is the
detailed record. A dated `PROGRESS_LOG.md` entry (§15) is still required
for every session. It may be shorter, but it must link to the Close
Report. `CURRENT_STATE.md` is overwritten each session to show the
present. The reports and the log are append-only history.

------------------------------------------------------------------------

## 5. Repository and Version Control

- **Repository:** https://github.com/CodenameTempest14/ad-astra.git
- `main` must always build and represent the last owner-approved state.
- Work happens on short branches named `phase-<NN>/<short-task>` (for
  example `phase-02/app-shell`). Each branch is merged into `main` after
  owner review.
- Commit at least once at every session close. Commit messages name the
  phase and session (for example `phase-02 s03: add toolchain detection`).
- Tag each completed phase `phase-<NN>-complete` after owner sign-off.
- Design images are stored with Git LFS (Decision D-LFS, §18).
- Pushing to GitHub, merging into `main`, force-pushing, rewriting
  history, and deleting branches all require explicit owner approval.
- `.gitignore` excludes build output, local databases, temporary
  execution directories, and secrets. It never excludes `design/templates`
  or `design/baselines`.

------------------------------------------------------------------------

## 6. Initial Product Scope

The exact user-facing feature list will be gathered with the owner
before full implementation. The following capabilities are the
anticipated scope based on the initial project concept.

### Teacher capabilities to evaluate during requirements gathering

-   Create and edit programming assessments.
-   Define questions, instructions, starter code, allowed language, and
    scoring rules.
-   Configure visible and hidden test cases.
-   Configure time limits and submission rules.
-   Preview an assessment as a student would see it.
-   Review submissions, scores, and test results.
-   View student and assessment performance.
-   Manage local teacher and student accounts.
-   Export reports or back up assessment data if required.

### Student capabilities to evaluate during requirements gathering

-   Sign in to a student account.
-   View available or assigned assessments.
-   Read the problem statement and starter code.
-   Write, run, and submit code in the supported language.
-   See permitted feedback, compiler errors, and visible-test results.
-   View the remaining time for a timed assessment.
-   Review results when allowed by the assessment settings.

These are candidates, not a final commitment. Confirm each capability
with the owner before implementation.

------------------------------------------------------------------------

## 7. Technical Decisions and Recommendations

### 7.1 Desktop framework

**Recommended starting point: C# with .NET 10 LTS and WPF**, subject to
verifying the current supported .NET release and the target machines
before implementation.

WPF is a mature Windows desktop framework suitable for forms,
navigation, tables, dialogs, and data binding. It keeps the application
native to Windows and allows the application itself to be written in C#.

#### Decision D-UI: how the UI is rendered — **DECIDED 2026-10-29: Option A** (DECISIONS.md D-001)

The visual-verification rule (§3.5) depends on this decision.

| | **Option A — WPF host + Blazor Hybrid (recommended)** | **Option B — Pure WPF XAML (original plan)** |
|---|---|---|
| How it works | A WPF window hosts a `BlazorWebView`. The UI is written as Razor components with HTML/CSS and runs locally in WebView2. All application logic stays in C#, in-process and offline. | Windows and controls are written in XAML. |
| Playwright pass | Full: Playwright connects to the WebView2 instance through the Chrome DevTools Protocol and captures the real app. | Partial: Playwright captures templates only. The app is captured with FlaUI plus an image-diff tool. |
| Using online templates | Direct: most templates are HTML/CSS and can be adapted where the license allows. | Indirect: web templates must be translated into XAML by hand. |
| Code editor | Monaco runs naturally inside WebView2. | AvalonEdit. |
| Costs | Requires the WebView2 Runtime (included with Windows 11; must be verified or bundled for Windows 10). The owner learns Razor/HTML/CSS as well as C#. Adds browser developer tools to the debugging path. | Fewer moving parts. The owner only needs C# and XAML. |

Before Phase 2, verify that the `BlazorWebView` WPF package supports the
selected .NET version, and confirm WebView2 availability on the target
machines.

The project's own C# code is separate from the student code it executes.
The application must launch the relevant compiler or interpreter for C,
C++, Java, Python, and C#.

### 7.2 Database

**Recommended: SQLite**, stored in a local database file.

Benefits: - No separate database server is needed for the initial
single-PC version. - Data remains available offline. - It is suitable
for structured records such as accounts, assessments, attempts, and
scores. - It can support the initial scale while the application is
being developed.

Use database migrations, foreign-key constraints, transactions, and a
tested backup/restore process. Do not let every screen execute ad hoc
SQL independently; route data access through a clearly defined
persistence layer.

Do not share the SQLite database file directly between LAN clients. In a
future network mode, a host service should own database access and
handle concurrent requests.

### 7.3 Code editor

Evaluate two realistic options:

-   **AvalonEdit:** A native .NET editor that is comparatively
    straightforward to integrate with WPF.
-   **Monaco Editor:** A more advanced editor with a modern coding
    experience, but it adds WebView2 and integration complexity.

The editor follows Decision D-UI: **Monaco** if Option A is chosen, since it
already runs inside WebView2; **AvalonEdit** if Option B is chosen.
Document the trade-offs in `DECISIONS.md` before committing to the editor.
In both cases, the editor's look comes from an approved component
template (§3).

### 7.4 Architecture style

Use a **modular monolith**: one desktop product and one initial
deployment, organized into clear components with defined
responsibilities.

Avoid microservices, cloud dependencies, and unnecessary infrastructure
in the first release. The code should be modular enough that LAN support
can later introduce a host service and API without rewriting the
assessment domain and grading rules.

### 7.5 Student language toolchains

The application should detect and validate the configured toolchains. It
must show a useful diagnostic if a compiler, runtime, or SDK is missing
or misconfigured.

  Language   Typical execution flow                        Toolchain examples
  ---------- --------------------------------------------- --------------------
  C          Compile source, then run executable           GCC or Clang
  C++        Compile source, then run executable           GCC or Clang
  Java       Compile using `javac`, then run with `java`   JDK
  Python     Execute source through interpreter            Python 3
  C#         Build and run a console program               .NET SDK

Do not assume all languages have identical project layouts, compiler
flags, startup behavior, or runtime requirements. Encapsulate
differences inside language-specific adapters.

The installer and setup guide must clearly state whether toolchains are
bundled, installed separately, or detected from existing installations.
Do not promise a fully self-contained installer until licensing, package
size, runtime dependencies, and clean-machine testing have been
evaluated.

------------------------------------------------------------------------

## 8. Proposed Solution Structure

The following is a target structure, not a requirement to create every
project on day one. Add projects when they have a clear purpose.

Project names use the `AdAstra.` prefix to follow the naming rule in §1.1
(previously `Assessment.`).

``` text
ad-astra/
├── src/
│   ├── AdAstra.Desktop/          # WPF host window, startup, BlazorWebView host (Option A)
│   ├── AdAstra.UI/               # Razor pages/sections/components + CSS design tokens (Option A only)
│   ├── AdAstra.Application/      # Use cases and application workflows
│   ├── AdAstra.Domain/           # Core entities and assessment rules
│   ├── AdAstra.Infrastructure/   # SQLite, file storage, backups, settings
│   ├── AdAstra.Execution/        # Compile/run/test orchestration
│   └── AdAstra.Contracts/        # Shared DTOs and service contracts, if needed
├── tests/
│   ├── AdAstra.UnitTests/
│   ├── AdAstra.IntegrationTests/
│   └── ui-visual/                # Playwright visual passes and baseline checks (§3.5)
├── design/                       # Templates, captures, baselines (§3.4)
├── assets/
│   └── branding/                 # Icon master, favicon PNGs, .ico (§1.1)
├── deployment/
└── documentation/
    ├── context/                  # CURRENT_STATE.md, phase briefs (§4.2)
    ├── phase-reports/            # Phase and session reports (§4.4)
    ├── ARCHITECTURE.md
    ├── SETUP.md
    ├── DEBUGGING.md
    ├── DATABASE.md
    ├── SECURITY.md
    ├── TESTING.md
    ├── DESIGN.md                 # Design tokens and UI usage rules
    ├── LOGGING_AND_DIAGNOSTICS.md
    └── DECISIONS.md
```

The page, section, and component structure inside `AdAstra.UI` mirrors the
template IDs, so every UI file can be traced to its template. For example,
`Pages/Student/CodingWorkspace/` maps to the template
`student-coding-workspace`.

### Responsibilities and boundaries

-   **Desktop:** Displays information and collects user actions. It
    should not contain the core grading rules or launch arbitrary
    compiler commands directly from UI event handlers.
-   **Application:** Coordinates workflows, such as creating an
    assessment, starting an attempt, submitting code, and recording
    results.
-   **Domain:** Defines core concepts and rules, such as assessment
    settings, scoring policy, attempt status, and test-case visibility.
-   **Infrastructure:** Implements database access, file storage,
    application settings, and backups.
-   **Execution:** Coordinates language adapters, compilation, runtime
    execution, timeouts, output capture, and execution results.
-   **Contracts:** Contains shared request/response types only when a
    real boundary requires them. Avoid creating a project merely to add
    unnecessary abstractions.

Keep UI code-behind limited to UI-specific behavior where practical. Use
simple view models or other straightforward patterns when they improve
separation and testability. Explain each pattern before introducing it.

------------------------------------------------------------------------

## 9. Code Execution and Automatic Grading Design

### 9.1 Shared execution pipeline

A submission should pass through a predictable workflow:

1.  Validate that the assessment and submission are valid.
2.  Resolve the configured language adapter.
3.  Create a unique temporary working directory for that run.
4.  Write the source code and any permitted input files.
5.  Compile the source if the language requires compilation.
6.  If compilation fails, record the diagnostics and mark the run
    appropriately.
7.  Execute the program within the configured time and resource limits.
8.  Capture standard output, standard error, exit code, and duration.
9.  Compare the result against each applicable test case.
10. Apply the assessment's scoring policy.
11. Persist the submission and result records.
12. Return only the feedback the current user is permitted to see.
13. Clean up temporary artifacts according to a documented retention
    policy.

The workflow must handle cancellation, timeouts, process crashes,
compiler failures, excessive output, and unexpected exceptions. A failed
run must not leave the assessment session or database in an inconsistent
state.

### 9.2 Language adapter interface

Design one shared interface for execution while allowing each language
adapter to handle its own build and run process. The exact interface
should be agreed upon and explained before implementation.

Conceptually, each adapter should accept: - Source code and language
settings. - A controlled working directory. - Input and execution
limits. - Compiler/runtime configuration.

It should return a normalized execution result: - Build or compilation
outcome. - Standard output and standard error. - Exit code. - Elapsed
execution time. - Timeout or limit status. - Structured diagnostics
where available.

Keep the adapter free of UI code and database-specific logic. This
allows it to be tested independently of the desktop interface.

### 9.3 Test-case evaluation

Test-case comparison rules must be explicit. Possible policies include
exact output matching, whitespace normalization, or carefully specified
numeric tolerances. The teacher-facing configuration should make the
selected rule clear.

Do not silently trim or normalize output in a way that changes the
intended grading. For expected-output exercises, line endings, trailing
spaces, capitalization, prompts, and newline behavior may matter. Make
the comparison policy visible and test it.

The score calculation must be a separate, testable component. It should
support the agreed scoring model, including whether partial credit is
permitted or all tests must pass for full credit.

### 9.4 Hidden test cases

Hidden test inputs and expected outputs must not be returned through
student-facing results or logs. The student UI should receive only the
permitted result summary.

However, in single-PC mode, a student with unrestricted access to the
Windows account, local files, or process memory may be able to inspect
local application data. Application-level hiding is not equivalent to a
strong security boundary. The deployment model and operating-system
account permissions must be part of the security design.

------------------------------------------------------------------------

## 10. Security, Reliability, and Data Integrity

Treat all student-submitted code as untrusted.

### Execution controls to investigate and implement

-   Wall-clock timeouts.
-   CPU and memory limits where enforceable.
-   Output size limits.
-   Process-tree termination on timeout or cancellation.
-   Unique temporary working directories.
-   Restricted filesystem and process access.
-   Controlled compiler and runtime invocation without unsafe
    shell-string construction.
-   Cleanup and retention rules for temporary files.
-   Clear error handling and audit logs.

A normal child process with a timeout is **not** a complete sandbox.
Windows Job Objects can help manage resource usage and process trees,
but they do not by themselves provide comprehensive filesystem and
operating-system isolation.

Evaluate a maintained isolation mechanism appropriate for the target
Windows editions and hardware. Windows Sandbox may be an option on
supported configurations, but it must not be assumed available on every
Windows 10/11 machine. If the application cannot establish the required
execution isolation, it should communicate the limitation and avoid
claiming that secure execution is guaranteed.

### Account and database controls

-   Store password hashes using an appropriate password-hashing
    algorithm; never store plaintext passwords.
-   Enforce role permissions in application services, not only by hiding
    UI controls.
-   Use parameterized database operations.
-   Use transactions for related database changes.
-   Validate inputs at application boundaries.
-   Protect backups and local database files through appropriate Windows
    account permissions.
-   Test backup restoration, not merely backup creation.
-   Record relevant events without writing passwords, secrets, or hidden
    answers to ordinary logs.

### Reliability requirements

-   The app should recover cleanly from unexpected closure where
    possible.
-   Assessment attempts should have well-defined states.
-   Duplicate submission and interrupted execution behavior must be
    specified.
-   Timer behavior should be based on persisted timestamps, not only a
    UI countdown.
-   Database migrations should be repeatable and tested on
    representative existing data.
-   Errors should be actionable, with enough context to debug them
    without exposing sensitive information.

------------------------------------------------------------------------

## 11. Database Concepts to Define

The database should distinguish assessment definitions from individual
attempts and submissions.

Potential entities include:

-   **Users:** Teacher/student identity, role, status, and
    authentication metadata.
-   **Assessments:** Title, instructions, configuration, publication
    status, and ownership.
-   **Questions:** Problem statement, starter code, language, point
    value, and ordering.
-   **TestCases:** Input, expected output, visibility, comparison
    policy, and scoring weight.
-   **AssessmentAttempts:** Student, assessment, start time, deadline,
    status, and final result.
-   **Submissions:** Source code or source-file reference, timestamp,
    attempt, and execution status.
-   **TestResults:** Per-test outcome, execution details, and awarded
    points.
-   **ApplicationSettings:** Local configuration and toolchain
    preferences where appropriate.
-   **AuditEvents:** Relevant security and administrative events where
    required.

These are conceptual candidates, not a finalized schema. Normalize
relationships where useful, define deletion and retention policies, and
avoid storing duplicated values without a clear reason.

Before writing migrations, draw or document the entity relationships and
walk through representative workflows: creating a question, publishing
an assessment, starting an attempt, submitting code, calculating a
score, and reopening a previous result.

------------------------------------------------------------------------

## 12. Classroom Network Architecture (in V1)

> **Changed 2026-10-29 (owner decision Q2, DECISIONS.md D-008).** The
> Teacher/Admin Console runs on the teacher's own PC and students use lab
> PCs, so the classroom network is part of **version 1** (new Phase 6).
> Version 1 deployment:
>
> ``` text
> Lab PC (Student app) ──┐
> Lab PC (Student app) ──┼── classroom network (no internet) ──► Teacher's PC: Ad Astra Host
> Lab PC (Student app) ──┘                                         ├── Admin/Teacher Console
>                                                                  ├── SQLite (only copy of all data)
>                                                                  ├── Hidden tests + grading
>                                                                  └── Execution service
> ```
>
> - Lab PCs run **visible tests** locally (Run). **Hidden tests run only
>   on the host** (Submit). This closes the weakness noted in §9.4: hidden
>   tests never reach a student's machine.
> - USB packages are the fallback when the network fails (F-PLT-03).
> - Step-by-step lab setup: `documentation/guides/CLASSROOM-SETUP.md`.
>
> The text below is the original design reasoning. It still applies, with
> "future" now meaning Phase 6.

The codebase should avoid coupling every UI component directly to local
database calls.

### Development mode (everything on one PC)

``` text
Desktop UI
    ↓
Application Services
    ├── Local SQLite persistence
    ├── Local file storage
    └── Execution service
```

### Future LAN mode

``` text
Student Desktop Clients ──┐
Student Desktop Clients ──┼── Authenticated LAN API
Teacher Desktop Client ───┘           ↓
                              Host Application Service
                                 ├── SQLite
                                 ├── File Storage
                                 └── Execution Service
```

The teacher PC or another designated host becomes authoritative. Clients
must not open a shared SQLite file directly over a network share.

Future LAN work will require authentication, transport security,
concurrent requests, client disconnection handling, session
synchronization, host availability, and a policy for whether student
execution occurs on the host or on each student PC.

Keep the domain rules and scoring engine independent of the transport
layer so they can be reused in both modes.

------------------------------------------------------------------------

## 13. Phased Development Roadmap

> **The working checklists live in `documentation/phases/phase-NN-*.md`.**
> This section describes each phase. The checklist files are what gets
> ticked, with evidence, and counted by `node tools/phase-report.mjs`.

### 13.1 Phase lifecycle (applies to every phase)

``` text
Phase Opening Report ──► owner approves start
        │
        ▼
┌──────────────────────── repeat per session ───────────────────────┐
│ Session Start Report → load context (§4.3) → template check (§3)   │
│ → implement → build → test → Playwright pass (UI work)             │
│ → docs + PROGRESS_LOG → Session Close Report → CURRENT_STATE       │
│ → commit                                                           │
└────────────────────────────────────────────────────────────────────┘
        │
        ▼
Full Playwright regression pass over all implemented UI
        │
        ▼
Phase Closing Report ──► owner walkthrough + sign-off ──► tag phase-NN-complete
```

Each phase must end with a demonstrable result, tests, documentation, a
completed Phase Closing Report, and an owner walkthrough. Phase completion
is based on evidence, not on generated code. A phase cannot start until the
previous phase is signed off, unless the owner explicitly approves
overlapping work.

Every phase below lists:
- **Objective:** what the phase is for.
- **Entry criteria:** what must be true before it starts.
- **Scope:** the work it includes.
- **UI inventory:** the pages, sections, and components that need
  templates.
- **Visual verification:** the Playwright passes required.
- **Acceptance criteria:** the evidence needed to close the phase.

UI inventories are first drafts. The approved inventory from Phase 0 is
the authority.

------------------------------------------------------------------------

### Phase 0 — Kickoff, Requirements, and Working System

**Objective:** Agree on what is being built and put the working system in
place (repository, reports, context files) before any product code.

**Entry criteria:** Owner approves this plan (v2).

**Scope**
- Resolve the open decisions in §18, at minimum D-UI, D-PW, D-LFS, and
  the decisions that block Phases 1–3.
- Confirm teacher and student workflows and the capability list (§6).
- Clone or initialize https://github.com/CodenameTempest14/ad-astra.git;
  add `README.md`, `.gitignore`, `.gitattributes` (Git LFS rules), and a
  license decision.
- Create the documentation skeleton: `documentation/context/`,
  `documentation/phase-reports/PHASE_INDEX.md`, `PROGRESS_LOG.md`,
  `DECISIONS.md`, and `design/TEMPLATE_REGISTRY.md` (empty).
- Write the **UI Inventory**: every page, its sections, and the shared
  components, each with a template ID following §3.4 naming.
- Use the phase and session report system during this phase so it is
  tested from the start.

**UI inventory:** None implemented. This phase produces the inventory.

**Visual verification:** None.

**Acceptance criteria**
- The repository exists on GitHub with the skeleton committed (push
  approved by the owner).
- `CURRENT_STATE.md`, the Phase 0 reports, and `PHASE_INDEX.md` exist and
  are accurate.
- The UI Inventory and the D-UI decision are approved and recorded in
  `DECISIONS.md`.
- The owner can explain the session workflow and where every report
  lives.

------------------------------------------------------------------------

### Phase 1 — Brand, Design System, and Template Acquisition

**Objective:** Decide what Ad Astra looks like, element by element,
before building it.

**Entry criteria:** Phase 0 signed off; UI Inventory approved.

**Scope**
- Create the logo, favicon, and application icon (§1.1): master asset,
  16/32/48 PNG exports, multi-resolution `.ico`. Check them at real size
  on light and dark surfaces.
- Define design tokens in `DESIGN.md`: colors (dark navy base, blue/cyan
  accents), typography, spacing scale, corner radius, elevation, and
  focus styles.
- **Search online and acquire templates** (§3.2) for:
  1. The overall design system / UI kit direction.
  2. Every shared component in the inventory.
  3. Every page and section in the inventory. Pages for later phases may
     be acquired at layout level now and refined in their own phase.
- Save all candidate and approved images in the `design/templates/`
  structure; complete every `README.md`; populate the registry.
- **Playwright tooling spike:** set up `tests/ui-visual/`. Confirm
  Playwright can (a) capture an online template page and (b) under
  Option A, attach to a minimal "hello world" WebView2 window and capture
  it. Confirm side-by-side and diff image generation works.

**UI inventory:** All items. Templates only, no implementation.

**Visual verification:** The tooling spike proves the pipeline works end
to end.

**Acceptance criteria**
- Every inventory item has an **Approved** template, or an explicit
  owner-approved deferral to a named phase.
- The folder structure and naming follow §3.4, and licenses are recorded.
- The icon assets exist and have been checked at 16×16 and 32×32.
- The Playwright capture-and-diff spike runs and its output is committed.

------------------------------------------------------------------------

### Phase 2 — Foundation and App Shell

**Objective:** A running, logged, tested application skeleton with the
approved shell UI.

**Entry criteria:** Phase 1 signed off; shell and base-component templates
Approved.

**Scope**
- Create the solution and initial projects (§8); configure the target
  .NET version.
- Add structured logging and application settings.
- Initialize SQLite and migrations.
- Detect installed toolchains and report versions and paths.
- Set up the unit test project and the `dotnet test` workflow.
- Add **visual-test mode** (seeded data, frozen clock, fixed window size,
  animations off) for Playwright passes.
- Apply the application icon to the window and taskbar.

**UI inventory (templates required)**
- Pages: `shared-startup-splash`, `shared-toolchain-status`,
  `shared-error-page`.
- Sections: `shell-title-bar`, `shell-navigation-sidebar`,
  `shell-top-bar`, `shell-status-bar`, `shell-content-area`.
- Components: buttons (primary, secondary, danger, icon), text field,
  select, checkbox, card, data table, status badge, toast, modal dialog,
  empty state, loading indicator.

**Visual verification:** A pass for every element above. The first
baselines are created at phase close.

**Acceptance criteria**
- The application launches on the development machine with the correct
  icon.
- Database initialization works, and errors are understandable.
- Detected toolchain versions and paths are displayed; missing toolchains
  produce actionable diagnostics.
- All shell and base-component passes have no Mismatch; baselines are
  approved.
- The owner can explain the project structure and startup sequence.

------------------------------------------------------------------------

### Phase 3 — Execution Engine

**Objective:** Reliably compile, run, and evaluate code in all five
languages, independently of the UI.

**Entry criteria:** Phase 2 signed off.

**Scope**
- Define the execution adapter contract (§9.2) and explain it before
  implementation.
- Implement the C, C++, Java, Python, and C# adapters.
- Capture build errors, output, exit codes, and duration.
- Add timeouts, output caps, cancellation, process-tree termination, and
  initial isolation controls (§10).
- Implement test-case comparison policies and the scoring component.
- Build the execution test matrix (§14) as a repeatable suite.

**UI inventory:** No end-user UI. If an internal "execution sandbox"
developer page is built for manual testing, it needs a `dev-` template
like any other page.

**Visual verification:** Only if a developer page is built; regression
pass of the Phase 2 baselines at phase close.

**Acceptance criteria**
- Representative programs in all five languages run successfully.
- Syntax and runtime errors are reported correctly.
- Infinite loops and excessive output are stopped by the configured
  limits.
- Test cases are evaluated independently of the UI.
- Security limitations are documented and tested.

------------------------------------------------------------------------

### Phase 4 — Accounts and Persistence

**Objective:** Local accounts, enforced roles, and durable, recoverable
data.

**Entry criteria:** Phase 3 signed off.

**Scope**
- Local account creation and authentication with password hashing.
- Teacher and student roles enforced in application services.
- The initial data-access layer.
- Migration, backup, and restore workflows.

**UI inventory (templates required)**
- Pages: `shared-login`, `teacher-account-management`,
  `teacher-backup-restore`.
- Sections: `login-form-panel`, `account-list-table`,
  `account-filter-bar`.
- Components: password field with show/hide, form validation message,
  `account-create-edit-dialog`, `password-reset-dialog`,
  `change-password-dialog`, `confirm-destructive-dialog`.

**Visual verification:** A pass for each element above, covering error
and empty states. Full regression at phase close.

**Acceptance criteria**
- Accounts and records survive application restarts.
- Unauthorized operations are rejected by application services, not just
  hidden in the UI.
- Database integrity tests pass; a restore has been tested.
- The owner can trace an account operation from the UI to the database.

------------------------------------------------------------------------

### Phase 5 — Teacher Assessment Builder

**Objective:** Teachers can create, configure, preview, and publish
assessments.

**Entry criteria:** Phase 4 signed off.

**Scope**
- Create and edit assessments and questions.
- Configure language, starter code, test cases, scoring, and timing.
- Visible and hidden test-case configuration, enforced in the service
  layer.
- Draft and published states, if required.
- Student-view preview.

**UI inventory (templates required)**
- Pages: `teacher-dashboard`, `teacher-assessment-list`,
  `teacher-assessment-editor`, `teacher-question-editor`,
  `teacher-assessment-preview`.
- Sections: `assessment-details-form`, `assessment-settings-panel`
  (timer, scoring, submission rules), `question-list-sidebar`,
  `problem-statement-editor`, `starter-code-editor`,
  `test-case-table` (visible/hidden), `comparison-policy-panel`.
- Components: tabs, rich-text/markdown field, language selector,
  visibility toggle, number/duration input, `publish-assessment-dialog`,
  validation summary.

**Visual verification:** A pass for each element above, including
validation-error states. Full regression at phase close.

**Acceptance criteria**
- A teacher can create, save, reopen, edit, and preview an assessment.
- Test-case visibility is enforced by the service layer.
- Invalid configurations produce useful validation messages.

------------------------------------------------------------------------

### Phase 6 — Classroom Network and Host Service *(added 2026-10-29, D-008)*

**Objective:** The teacher's PC runs the Ad Astra Host, and lab PCs connect
over the classroom network with no internet. Submissions are graded on the
host against hidden tests that never leave it. A USB package fallback works
when the network does not.

**Entry criteria:** Phase 5 signed off.

**Scope**
- Design explained to the owner first: host technology, transport
  security, discovery, authentication, where code runs, offline
  behaviour.
- Host service inside the teacher app; a student-facing API that never
  returns hidden test data.
- Submission queue and grading on the host, using the Phase 3 engine.
- Lab PC client: reconnect, queued submissions, local Run of visible tests.
- USB fallback: encrypted assessment and results packages (F-PLT-03).

**UI inventory (templates required):** `lab-connect-to-host`,
`connection-status-indicator`, `host-network-settings`, package dialogs.

**Visual verification:** A pass for each element above. Full regression
at phase close.

**Acceptance criteria**
- Host + 3 clients complete an exam end to end (automated), and 2 physical
  PCs complete a dry run.
- 40 simulated clients submitting within a minute are all graded.
- Pulling a cable or restarting the host mid-exam loses no work.
- No student-facing response contains hidden test data (contract test).
- The checklist is in `documentation/phases/phase-06-classroom-network.md`.

------------------------------------------------------------------------

### Phase 7 — Student Workspace and Exam Workflow

**Objective:** Students can take a timed assessment from start to
submission.

**Entry criteria:** Phase 5 signed off.

**Scope**
- Integrate the code editor (Monaco or AvalonEdit, per D-UI) and the
  problem display.
- Assessment launch, timer (based on persisted timestamps), run, and
  submission flows.
- Display only permitted feedback.
- Save attempts, submissions, and results; handle interruption and
  repeated submission.

**UI inventory (templates required)**
- Pages: `student-dashboard`, `student-assessment-lobby`,
  `student-coding-workspace`, `student-results`.
- Sections: `assigned-assessments-list`, `assessment-instructions-panel`,
  `workspace-problem-panel`, `workspace-code-editor-panel`,
  `workspace-output-console`, `workspace-test-results-panel`,
  `workspace-timer-bar`, `workspace-question-navigator`,
  `results-summary-panel`.
- Components: `timer-chip` (normal / warning / expired),
  `test-result-row` (passed / failed / hidden), run and submit buttons,
  `submit-confirm-dialog`, `time-expired-dialog`, compiler-error block.

**Visual verification:** A pass for each element above, in every timer and
result state. Full regression at phase close.

**Acceptance criteria**
- A student can complete a representative assessment from start to
  finish.
- Timer and submission rules behave as configured.
- Hidden test details are absent from student-facing responses.
- Interrupted attempts and repeated submissions follow the documented
  rules.

------------------------------------------------------------------------

### Phase 8 — Reporting, Diagnostics, Hardening, and Recovery

**Objective:** Traceable results, developer diagnostics, and proven
recovery.

**Entry criteria:** Phase 7 signed off.

**Scope**
- Implement the reporting features selected during requirements
  gathering.
- Build the Developer Diagnostics and Testing Module (§14).
- Test security boundaries and resource controls.
- Test backup, restore, migration, and crash recovery.
- Add redacted diagnostic reports and troubleshooting documentation.
- Add the AI diagnostic workflow only if privacy controls are clear.

**UI inventory (templates required)**
- Pages: `teacher-submission-review`, `teacher-gradebook`,
  `teacher-assessment-report`, `dev-system-health`, `dev-test-runner`,
  `dev-execution-diagnostics`, `dev-log-explorer`, and
  `dev-ai-assistant` (optional).
- Sections: `submission-code-viewer`, `per-test-results-breakdown`,
  `score-summary-panel`, `log-filter-bar`, `log-entry-table`,
  `health-check-list`.
- Components: chart/score bar, `export-dialog`,
  `diagnostic-report-preview` (redaction review), severity badge.

**Visual verification:** A pass for each element above, followed by a full
regression of the whole application.

**Acceptance criteria**
- Scores can be traced to recorded test results.
- Restore testing recovers valid data.
- Failure modes have reproducible tests and useful diagnostics.
- Security claims match the controls actually implemented.

------------------------------------------------------------------------

### Phase 9 — Packaging and Classroom Deployment

**Objective:** Ad Astra installs and runs on a clean machine, with two
installer modes: "Teacher PC (Host)" and "Lab PC (Student)". It is ready for
a real classroom (CLASSROOM-SETUP.md).

**Entry criteria:** Phase 8 signed off.

**Scope**
- Create the Windows installer, including the WebView2 runtime strategy
  if Option A was chosen.
- Test installation on a clean target machine.
- Document prerequisites and supported Windows configurations.
- Review service boundaries for future LAN support (§12).
- Record remaining limitations and future work.

**UI inventory (templates required)**
- Pages: `shared-first-run-setup` (toolchain detection, first teacher
  account) and installer screens, if they can be customized.

**Visual verification:** A pass for the new pages, then a full regression
pass run **on the clean installed build**, not the development build.

**Acceptance criteria**
- The application installs and starts outside the development
  environment.
- Offline core functionality works as specified.
- Toolchain dependencies are clearly communicated.
- The owner can diagnose common setup failures using the project
  documentation.

------------------------------------------------------------------------

## 14. Testing Strategy

Testing is a development activity, not a final step.

### Unit tests

Test individual rules and components without launching the full
application. Examples include score calculation, output comparison,
timer-state calculations, assessment validation, and permission checks.

### Integration tests

Test interactions between components. Examples include saving and
reopening an assessment in SQLite, invoking a language adapter,
recording a submission, and recovering data after a simulated failure.

### End-to-end tests

Exercise complete user workflows, such as teacher creates an assessment
→ student submits a correct solution → the system evaluates tests →
results are stored and displayed.

### Execution test matrix

For every supported language, test: - A valid program. - A compilation
or syntax error. - A runtime error. - Correct and incorrect output. -
Empty output and multiple lines. - Input handling. - Timeout or infinite
loop. - Excessive output. - Cancellation and cleanup. - Relevant
resource and isolation controls.

Test boundary conditions, not only the happy path. Keep test fixtures
and expected results version-controlled where appropriate.

### Visual verification (Playwright)

Visual verification covers two separate checks (§3.5):

- **Template comparison:** a reviewed checklist comparing the
  implementation with its approved template, with side-by-side and diff
  images as evidence. It is run when UI is designed or changed.
- **Baseline regression:** an automated pixel-threshold comparison
  against owner-approved baselines. It runs at every phase close and can
  run on demand.

Visual tests live in `tests/ui-visual/`. They require the app's
visual-test mode (seeded data, frozen clock, fixed window size, animations
off, locally bundled fonts) so screenshots are repeatable. A failed
baseline comparison is either a regression to fix or an intentional
change that needs a new baseline approved by the owner. It must never be
fixed by silently overwriting the baseline.

### Developer diagnostics and AI-assisted debugging

Build a small internal **Developer Diagnostics and Testing Module** to
help the owner investigate problems without depending on an AI agent to
understand the codebase. This is a developer/maintenance feature, not a
student-facing exam feature. Start with simple tools and expand only when
they solve a demonstrated problem.

The module should eventually include:

1. **System Health** — Show application version, database connection and
   migration status, available disk space where practical, relevant
   configuration status, and detected compiler/runtime paths and versions.
   Present actionable explanations when a dependency is missing or
   misconfigured; do not expose secrets or sensitive configuration values.
2. **Automated Test Runner** — Make it easy to run the application's unit
   and integration tests and view pass/fail results. Keep the standard
   command-line workflow (`dotnet test`) available so tests do not depend
   on this dashboard.
3. **Execution Diagnostics** — For a student-code run, record the language,
   toolchain version, elapsed time, exit code, timeout/cancellation status,
   and captured compiler output, standard output, and standard error, subject
   to output limits and data-retention rules. Clearly distinguish compilation,
   runtime, test-comparison, and application errors.
4. **Log and Error Explorer** — Provide searchable structured logs with
   timestamps, severity, component, correlation/run ID, and exception
   details. Support filtering and copying a redacted diagnostic report.
   Never log passwords, authentication tokens, or other secrets.
5. **AI Diagnostic Assistant (optional)** — Let the owner explicitly provide
   relevant logs, stack traces, test failures, and selected source files for
   AI analysis. The assistant may summarize the likely root cause, point to
   relevant files and methods, suggest a minimal fix, and recommend a
   regression test. It must label hypotheses as hypotheses and distinguish
   evidence from speculation. It must not silently rewrite production code
   or claim that a suggested fix is verified until tests have been rerun.

#### Recommended debugging workflow

1. Reproduce the problem and record the exact steps and expected versus
   actual behavior.
2. Run the relevant automated test or smallest reproducible test case.
3. Inspect logs, exceptions, compiler output, and execution diagnostics.
4. Use Visual Studio debugging tools—breakpoints, step-through execution,
   variable inspection, call stack, and exception settings—to follow the
   actual code path.
5. If useful, ask the AI Diagnostic Assistant to analyze the collected
   evidence and propose causes and tests.
6. Review the proposed change, understand why it should work, implement it
   deliberately, and rerun the targeted test plus the relevant regression
   suite.
7. Document the root cause and any important lesson in the appropriate
   project documentation.

AI assistance complements, but does not replace, manual debugging. The
owner should learn to navigate the code in Visual Studio and understand the
reason for each fix. Use readable code, clear method names, structured logs,
and focused tests to make that possible.

#### Tooling recommendations

- **Visual Studio Community:** Primary IDE and manual debugger.
- **xUnit or NUnit:** Choose one test framework initially; avoid adding both
  without a specific need.
- **`dotnet test`:** Repeatable command-line test execution suitable for
  local development and future automation.
- **`Microsoft.Extensions.Logging` or Serilog:** Use structured logging;
  choose the simplest option that meets the project's needs.
- **Git:** Track changes and make fixes reviewable and reversible.
- **AI coding/diagnostic assistant:** Use for explanations, evidence-based
  diagnosis, and test suggestions, with owner review before accepting changes.

Add tooling incrementally. Do not build an elaborate diagnostics dashboard
before the core execution proof of concept works.

#### Privacy, offline operation, and boundaries

Core application tests and diagnostics must work offline. AI analysis is
optional and may require an internet connection or send selected code and
logs to an external service. Before sharing data, show what will be sent and
require an explicit user action. Provide a way to review or redact the
bundle, and never transmit data automatically. Keep student assessment
content and student personal data out of AI requests by default.

Keep two testing responsibilities distinct:

- **Application verification:** Tests whether the assessment application
  itself behaves correctly—for example, scoring rules, authentication,
  timers, persistence, hidden-test handling, and recovery.
- **Student-program execution and grading:** Runs submitted programs and
  evaluates their outputs against assessment test cases.

These areas may reuse utilities, but their tests, results, and failure
categories must remain distinguishable. A student's incorrect answer must
not be reported as an application defect; an application defect must not be
misclassified as a student's wrong answer.

**Acceptance criteria for this capability:** The owner can run the test
suite, identify a failed test, open the relevant source file, inspect the
associated logs, and explain the fix. AI-generated diagnoses remain
suggestions until supported by a reproducible test and a successful
verification run.

------------------------------------------------------------------------

## 15. Required Documentation and Debugging Guide

Maintain these documents as the codebase evolves:

-   **README.md:** Project overview, prerequisites, quick start, and
    links to deeper documentation.
-   **ARCHITECTURE.md:** Components, dependencies, execution flows, and
    design boundaries.
-   **SETUP.md:** Exact environment setup, SDK/toolchain installation,
    configuration, and troubleshooting.
-   **DEBUGGING.md:** Common symptoms, likely causes, diagnostic steps,
    breakpoints, logs, and recovery procedures.
-   **DATABASE.md:** Schema, relationships, migrations, backup, and
    restore.
-   **SECURITY.md:** Threat model, isolation controls, limitations, and
    safe deployment guidance.
-   **DECISIONS.md:** Significant technical choices, alternatives
    considered, trade-offs, and reasons for each decision.
-   **TESTING.md:** How to run tests and what each test layer validates.
-   **CHANGELOG.md:** Meaningful changes between project versions or releases; keep entries concise and user-facing.
-   **PROGRESS_LOG.md:** A chronological development diary updated by the AI agent after every work session or completed task, including partial work and blockers. Each entry links to the matching Session Close Report.
-   **DESIGN.md:** Design tokens (color, typography, spacing), theme rules, and how UI code maps to template IDs.
-   **design/TEMPLATE_REGISTRY.md:** Index of every page, section, and component template with source, license, and status (§3.3).
-   **THIRD_PARTY_NOTICES.md:** Attribution and licenses for adapted templates, libraries, fonts, and icons.
-   **documentation/context/CURRENT_STATE.md** and **phase briefs:** Context management files (§4.2).
-   **documentation/phase-reports/:** Phase Opening and Closing Reports and Session Start and Close Reports (§4.4).

### Mandatory progress logging rules

The AI agent must maintain `PROGRESS_LOG.md` as the authoritative chronological record of development. This is a required step, not an optional summary. Update it during the same work session in which changes are made, before reporting the task as complete. Do not rely on chat history as the only record.

Add a dated entry whenever a development session ends, a meaningful task is completed, an implementation attempt fails, or work is paused. Each entry must include:

- **Date and task/milestone:** What the session was intended to accomplish.
- **Status:** Completed, partially completed, blocked, or failed.
- **Changes made:** Summary of features, fixes, refactoring, configuration, and documentation changes.
- **Files affected:** Exact paths of added, edited, or removed files, with a short reason for each meaningful change.
- **Build and test evidence:** Commands actually run and their observed results. Clearly mark checks as passed, failed, skipped, or not run; never invent results.
- **Problems and root causes:** Errors encountered, evidence collected, likely or confirmed causes, and fixes attempted. Label unconfirmed explanations as hypotheses.
- **Decisions and rationale:** Any important technical choice made, alternatives considered, and whether owner approval is still needed. Link or refer to `DECISIONS.md` when appropriate.
- **Known limitations and remaining work:** Incomplete behavior, technical debt, risks, and unresolved questions.
- **Next steps:** The smallest concrete actions the next session should perform.
- **Owner understanding:** A brief explanation of what the owner should understand or review, including any concept that needs a follow-up explanation.

Use this entry template:

```markdown
## YYYY-MM-DD — [Task or milestone]

- **Status:** Completed / Partially completed / Blocked / Failed
- **Goal:**
- **Changes made:**
- **Files affected:**
  - `path/to/file` — reason for change
- **Build/tests run:**
  - `command` — result (or explicitly: not run, with reason)
- **Problems and diagnosis:**
- **Decisions:**
- **Known limitations / follow-up:**
- **Next steps:**
- **Owner explanation/review needed:**
```

Do not silently rewrite or delete earlier progress entries. Correct factual errors with a clearly labeled correction, and append later updates rather than erasing history. Keep entries concise but specific enough that a new AI session or the owner can resume work without guessing. The log complements Git history; it does not replace version control, code review, test results, or `CHANGELOG.md`.

Use the documents for different purposes:

- `PROGRESS_LOG.md` = chronological record of development sessions and current handoff state.
- `CHANGELOG.md` = meaningful changes grouped by release/version, not every small development action.
- Git commits = precise version-controlled snapshots and diffs of source changes.
- `DECISIONS.md` = durable technical decisions and their rationale.

### Debugging documentation format

For every important failure mode, document:

1.  **Symptom:** What the user or developer observes.
2.  **Likely causes:** The most plausible explanations.
3.  **Reproduction steps:** How to trigger the problem reliably.
4.  **Investigation path:** Which project, class, method, log, or
    database record to inspect.
5.  **Debugging procedure:** Suggested breakpoints, variables to watch,
    and commands to run.
6.  **Fix:** What should change and why.
7.  **Regression test:** How to ensure the problem does not return.

Examples to document include a missing compiler, failed Java
compilation, incorrect output comparison, a timeout that does not
terminate a child process, a database migration failure, a timer that
resumes incorrectly, and a hidden test case accidentally exposed to a
student.

------------------------------------------------------------------------

## 16. Standard AI-Agent Workflow for Every Change

The AI agent must follow this workflow for each significant
implementation task:

1.  **Start the session:** Load context in the order given in §4.3 and
    write the Session Start Report.
2.  **Inspect:** Read the existing relevant files, project
    configuration, tests, and documentation before editing.
3.  **Explain:** Describe the goal, current behavior, proposed change,
    and affected components.
4.  **Plan:** List the small implementation steps and identify any
    important design choice.
5.  **Template check (UI work):** Confirm every page, section, and
    component involved has an **Approved** template in the registry. If
    one is missing, search online and acquire it (§3.2) and get owner
    approval before implementing.
6.  **Implement:** Make focused, readable changes with descriptive
    naming and appropriate comments.
7.  **Build:** Run the relevant build command and report the actual
    result.
8.  **Test:** Run the relevant unit and integration tests. Add tests for
    new behavior and bug fixes.
9.  **Playwright pass (UI work):** Compare the implementation with its
    templates (§3.5), save the images in the session capture folder, and
    write `PASS_REPORT.md`. Fix every Mismatch and run the pass again.
10. **Review:** Explain the changed files, execution flow, trade-offs,
    and remaining risks.
11. **Debug:** If something fails, investigate the evidence and explain
    the root cause rather than applying random changes.
12. **Document:** Update relevant documentation, troubleshooting notes,
    and the Template Registry, and append a dated entry to
    `PROGRESS_LOG.md` with the exact files changed, observed build and
    test results, problems, decisions, limitations, and next steps.
13. **Verify understanding:** Walk the owner through the code and ask
    whether they want a deeper explanation before moving on.
14. **Close the session:** Write the Session Close Report, overwrite
    `CURRENT_STATE.md`, and commit. Do not mark the task complete until
    these accurately describe the actual repository state, so the owner
    or a later AI session can continue without guessing.

Do not claim a build or test passed unless it was actually executed and
the result was observed. If a command cannot be run, state that clearly
and provide the exact command for the owner to run.

For significant code changes, provide a concise change summary such as:

  Item            Required explanation
  --------------- ----------------------------------------------
  Files changed   Which files changed and why
  New logic       What the new code does
  Data flow       Where input comes from and where output goes
  Dependencies    What calls or depends on the changed code
  Tests           What was run and what passed or failed
  Debugging       Where to investigate if the feature fails
  Limitations     What remains unsupported or unverified

------------------------------------------------------------------------

## 17. Project Rules and Scope Control

-   Do not implement all features at once.
-   Do not silently expand the scope.
-   Do not replace a working technology or architecture without
    explaining the reason and trade-offs.
-   Do not add packages without explaining their purpose and maintenance
    implications.
-   Do not store secrets, plaintext passwords, or hidden answers in
    ordinary logs.
-   Do not claim that a local process is securely sandboxed without
    evidence.
-   Do not treat a successful compilation as proof that a feature is
    correct.
-   Do not finalize the database schema before validating core
    workflows.
-   Do not begin the classroom network (Phase 6) before the execution
    engine (Phase 3), accounts (Phase 4) and the assessment builder
    (Phase 5) are signed off. *(Amended 2026-10-29, D-008: the network is
    now in V1 instead of "later".)*
-   **Do not plan, template or build a new feature until the owner has
    approved it in `documentation/specs/FEATURES.md`.**
-   Preserve readable code and explainability even when a more abstract
    implementation is possible.
-   Track known bugs and technical debt instead of hiding them.
-   Update `PROGRESS_LOG.md` after every development session or meaningful task; never claim progress that is not reflected in the actual files and test evidence.
-   Ask the owner before irreversible data changes, destructive
    operations, or substantial architectural changes.
-   Keep all implementation, tests, and documentation in version
    control.
-   Do not implement any page, section, or component without an
    **Approved** template in `design/TEMPLATE_REGISTRY.md`.
-   Do not mark UI work as done without a Playwright pass report that has
    no unresolved Mismatch.
-   **Never continue to the next page unless the current page passes its
    Playwright comparison (UI-GATE, §3.6).**
-   Do not create a folder without a `README.md` (§3.9).
-   Open every reply with the status line, and end every session with the
    phase report output (playbook CTX-8, CTX-9).
-   Do not overwrite or delete approved template images or baselines;
    add a new version instead (§3.4).
-   Do not copy code, markup, or assets from a template whose license does
    not permit it.
-   Do not start a session without a Session Start Report, or end one
    without a Session Close Report and an updated `CURRENT_STATE.md`.
-   Do not start a phase without an approved Phase Opening Report, or move
    to the next phase without a signed-off Phase Closing Report.
-   Do not push to GitHub or merge into `main` without owner approval.

## 18. Decisions Still Open

These must be resolved with the owner during requirements gathering,
rather than guessed:

-   Exact teacher and student workflows.
-   Whether one PC means separate Windows accounts, role switching, or a
    teacher-controlled session.
-   Account creation and password-reset rules.
-   The exact assessment types and question formats.
-   Whether students can run code before submitting.
-   Visible and hidden test-case feedback rules.
-   Scoring policy, partial credit, and penalties.
-   Timer expiration, autosave, late submission, and interruption
    behavior.
-   Source-code and submission retention.
-   Report and export formats.
-   Editor features and appearance.
-   Toolchain installation and update strategy.
-   Required Windows editions and minimum hardware.
-   Backup and restore expectations.
-   The strength of execution isolation required for the classroom
    threat model.
-   LAN host behavior and whether code will execute on the host or
    student computers.
-   Installer and application update strategy.

**Decisions added in plan v2.** Status as of 2026-10-29 (see `DECISIONS.md`):
D-UI **decided** (Option A). D-PW **decided** (Node Playwright Test).
D-LFS **decided** (LFS on). D-TPL **decided** (open-licensed only).
D-NAME **decided** (`AdAstra.*`). D-VP is still **open**.

-   **D-UI — UI rendering technology:** WPF + Blazor Hybrid/WebView2
    (recommended; full Playwright passes) or pure WPF XAML (FlaUI capture
    instead). See §7.1.
-   **D-PW — Playwright flavor:** Playwright Test for Node/TypeScript
    (recommended for `tests/ui-visual/` only: built-in screenshot
    comparison and HTML reports) or Playwright for .NET (keeps one
    language, but screenshot diffing must be added separately).
-   **D-LFS — Image storage:** Git LFS for `design/**/*.png` (recommended),
    and a capture retention policy (recommended: keep every phase-closing
    pass and all baselines; prune intermediate session captures at phase
    close).
-   **D-TPL — Template sources:** free and open-licensed only
    (recommended), or paid UI kits also allowed.
-   **D-VP — Verified window sizes and themes:** confirm the viewport set
    (§3.4) and whether a light theme is needed in addition to dark.
-   **D-NAME — Solution naming:** `AdAstra.*` project names and an
    `ad-astra/` repository root (§8).

## 19. Definition of Done

A feature is not considered done merely because the AI agent has
generated code for it.

A feature is done when: - The behavior matches an agreed requirement. -
The code is readable and placed in the correct component. - Relevant
tests exist and have been run, or unrun tests are explicitly
documented. - Errors and edge cases have been considered. - The owner
has received an explanation of how the feature works. - The owner knows
where to begin investigating if it fails. - Documentation reflects the
implemented behavior. - Security and reliability claims are supported by
actual controls and evidence. - **For UI work:** every page, section, and
component involved has an Approved template; the latest Playwright pass
report shows no unresolved Mismatch; and the registry status is updated. -
The work is recorded in a Session Close Report, `PROGRESS_LOG.md`, and
`CURRENT_STATE.md`, and committed.

## 20. Immediate Next Steps

The live list is the open items in
`documentation/phases/phase-00-kickoff.md`. Run `node tools/phase-report.mjs`.
As of 2026-10-29:

1.  Owner approves the first push to GitHub (P00-26).
2.  Resolve the remaining decisions P00-05 and P00-07 … P00-13.
3.  Write the teacher and student workflows (P00-14, P00-15) and review
    the UI inventory (P00-18).
4.  Install the .NET SDK so the WebView2 + Playwright spike can run (P01-18).
5.  Close Phase 0, then finish Phase 1 (brand, tokens, remaining section
    templates).

------------------------------------------------------------------------

## Final Principle

**The goal is not to have an AI generate an application that only the AI
can maintain. The goal is to use AI as an implementation partner and
technical mentor to build a reliable application that the owner
understands and can independently inspect, debug, extend, and
maintain.**

Every major component must have a clear purpose. Every important process
must have a traceable execution path. Every meaningful fix must include
an explanation and a regression test. The project should become more
understandable as it grows, not less.
