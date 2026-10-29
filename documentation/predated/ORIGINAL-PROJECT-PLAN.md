> **PREDATED — superseded on 2026-10-29 by [../planning/MASTER-PLAN.md](../planning/MASTER-PLAN.md).** Kept for history; do not follow. Still true: product vision (§1), collaboration rules (§2).

# Ad Astra — Programming Assessment Desktop Application

## Master Project Plan and Collaborative Development Guide

**Product name:** Ad Astra\
**Project status:** Planning and architecture definition\
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
-   **Owner review:** A short walkthrough or comprehension check so the
    owner can confirm understanding and ask questions before proceeding.
-   **Completion status:** Separate completed, tested, partially tested,
    and not-yet-implemented items.

The owner should be able to explain the main execution path of each
feature in their own words before it is considered fully understood.

------------------------------------------------------------------------

## 3. Initial Product Scope

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

## 4. Technical Decisions and Recommendations

### 4.1 Desktop framework

**Recommended starting point: C# with .NET 10 LTS and WPF**, subject to
verifying the current supported .NET release and the target machines
before implementation.

WPF is a mature Windows desktop framework suitable for forms,
navigation, tables, dialogs, and data binding. It keeps the application
native to Windows and allows the application itself to be written in C#.

The project's own C# code is separate from the student code it executes.
The application must launch the relevant compiler or interpreter for C,
C++, Java, Python, and C#.

### 4.2 Database

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

### 4.3 Code editor

Evaluate two realistic options:

-   **AvalonEdit:** A native .NET editor that is comparatively
    straightforward to integrate with WPF.
-   **Monaco Editor:** A more advanced editor with a modern coding
    experience, but it adds WebView2 and integration complexity.

Start with AvalonEdit unless advanced editor functionality is confirmed
as a high priority. Document the trade-offs before committing to the
editor.

### 4.4 Architecture style

Use a **modular monolith**: one desktop product and one initial
deployment, organized into clear components with defined
responsibilities.

Avoid microservices, cloud dependencies, and unnecessary infrastructure
in the first release. The code should be modular enough that LAN support
can later introduce a host service and API without rewriting the
assessment domain and grading rules.

### 4.5 Student language toolchains

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

## 5. Proposed Solution Structure

The following is a target structure, not a requirement to create every
project on day one. Add projects when they have a clear purpose.

``` text
CodeAssessment/
├── src/
│   ├── Assessment.Desktop/        # WPF windows, views, UI behavior
│   ├── Assessment.Application/    # Use cases and application workflows
│   ├── Assessment.Domain/         # Core entities and assessment rules
│   ├── Assessment.Infrastructure/ # SQLite, file storage, backups, settings
│   ├── Assessment.Execution/      # Compile/run/test orchestration
│   └── Assessment.Contracts/     # Shared DTOs and service contracts, if needed
├── tests/
│   ├── Assessment.UnitTests/
│   └── Assessment.IntegrationTests/
├── deployment/
└── documentation/
    ├── ARCHITECTURE.md
    ├── SETUP.md
    ├── DEBUGGING.md
    ├── DATABASE.md
    ├── SECURITY.md
    ├── TESTING.md
    ├── LOGGING_AND_DIAGNOSTICS.md
    └── DECISIONS.md
```

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

## 6. Code Execution and Automatic Grading Design

### 6.1 Shared execution pipeline

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

### 6.2 Language adapter interface

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

### 6.3 Test-case evaluation

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

### 6.4 Hidden test cases

Hidden test inputs and expected outputs must not be returned through
student-facing results or logs. The student UI should receive only the
permitted result summary.

However, in single-PC mode, a student with unrestricted access to the
Windows account, local files, or process memory may be able to inspect
local application data. Application-level hiding is not equivalent to a
strong security boundary. The deployment model and operating-system
account permissions must be part of the security design.

------------------------------------------------------------------------

## 7. Security, Reliability, and Data Integrity

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

## 8. Database Concepts to Define

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

## 9. Future LAN Architecture

The first release will use one PC. The codebase should nevertheless
avoid coupling every UI component directly to local database calls.

### Single-PC mode

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

## 10. Phased Development Roadmap

Each phase must end with a demonstrable result, tests, documentation,
and an owner walkthrough. Phase completion is based on evidence, not
merely on generated code.

### Phase 1 --- Foundation and Environment Setup

**Scope** - Create the solution and initial projects. - Configure the
target .NET framework. - Add structured logging and application settings.
- Initialize SQLite and migrations. - Detect installed toolchains. - Set
up the initial automated test project and `dotnet test` workflow. -
Establish repository and documentation conventions.

**Acceptance criteria** - The application launches on the target
development machine. - Database initialization works and errors are
understandable. - The app reports the detected versions and paths of
available toolchains. - Missing toolchains produce actionable
diagnostics. - The owner can explain the project structure and startup
sequence.

### Phase 2 --- Execution Engine

**Scope** - Define the execution adapter contract. - Implement C, C++,
Java, Python, and C# adapters. - Capture build errors, output, exit
codes, and duration. - Add timeouts, output caps, cancellation, and
initial isolation controls. - Build a repeatable execution test suite.

**Acceptance criteria** - Representative programs in all five languages
run successfully. - Syntax errors and runtime errors are reported
correctly. - Infinite loops and excessive output are controlled by the
configured limits. - Test cases are evaluated independently of the UI. -
Security limitations are documented and tested.

### Phase 3 --- Accounts and Persistence

**Scope** - Implement local account creation and authentication. -
Enforce teacher/student roles. - Create the initial data-access layer. -
Add migration, backup, and restore workflows.

**Acceptance criteria** - Accounts and records survive application
restarts. - Unauthorized operations are rejected by application
services. - Database integrity tests pass. - The owner can trace an
account or record operation from UI to database.

### Phase 4 --- Teacher Assessment Builder

**Scope** - Create and edit assessments and questions. - Configure
language, starter code, test cases, scoring, and timing. - Support
visible and hidden test-case configuration. - Add draft and publication
states if required.

**Acceptance criteria** - A teacher can create, save, reopen, edit, and
preview an assessment. - Test-case visibility is enforced by the service
layer. - Invalid configurations produce useful validation messages.

### Phase 5 --- Student Workspace and Exam Workflow

**Scope** - Integrate the editor and problem display. - Implement
assessment launch, timer, run, and submission flows. - Display permitted
feedback. - Save attempts, submissions, and results.

**Acceptance criteria** - A student can complete a representative
assessment from start to finish. - Timer and submission rules behave as
configured. - Hidden test details remain absent from student-facing
responses. - Interrupted attempts and repeated submissions follow
documented rules.

### Phase 6 --- Reporting, Hardening, and Recovery

**Scope** - Implement the reporting features selected during
requirements gathering. - Test security boundaries and resource
controls. - Test backups, restore, migration, and crash recovery. -
Improve the Developer Diagnostics and Testing Module, structured logs,
redacted diagnostic reports, and troubleshooting documentation. - Add an
AI diagnostic workflow only if privacy and data-sharing controls are clear.

**Acceptance criteria** - Scores can be traced to recorded test
results. - Restore testing recovers valid data. - Failure modes have
reproducible tests and useful diagnostics. - Security claims match the
controls actually implemented.

### Phase 7 --- Packaging and LAN Readiness

**Scope** - Create the Windows installer. - Test installation on a clean
target machine. - Document prerequisites and supported Windows
configurations. - Review service boundaries for future LAN support. -
Record remaining limitations and future work.

**Acceptance criteria** - The application installs and starts outside
the development environment. - Offline core functionality works as
specified. - Toolchain dependencies are clearly communicated. - The
owner can diagnose common setup failures using the project
documentation.

------------------------------------------------------------------------

## 11. Testing Strategy

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

## 12. Required Documentation and Debugging Guide

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
-   **PROGRESS_LOG.md:** A chronological development diary updated by the AI agent after every work session or completed task, including partial work and blockers.

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

## 13. Standard AI-Agent Workflow for Every Change

The AI agent must follow this workflow for each significant
implementation task:

1.  **Inspect:** Read the existing relevant files, project
    configuration, tests, and documentation before editing.
2.  **Explain:** Describe the goal, current behavior, proposed change,
    and affected components.
3.  **Plan:** List the small implementation steps and identify any
    important design choice.
4.  **Implement:** Make focused, readable changes with descriptive
    naming and appropriate comments.
5.  **Build:** Run the relevant build command and report the actual
    result.
6.  **Test:** Run the relevant unit and integration tests. Add tests for
    new behavior and bug fixes.
7.  **Review:** Explain the changed files, execution flow, trade-offs,
    and remaining risks.
8.  **Debug:** If something fails, investigate the evidence and explain
    the root cause rather than applying random changes.
9.  **Document:** Update relevant documentation and troubleshooting
    notes, and append a dated entry to `PROGRESS_LOG.md` with the exact
    files changed, observed build/test results, problems, decisions,
    limitations, and next steps.
10. **Verify understanding:** Walk the owner through the code and ask
    whether they want a deeper explanation before moving on.
11. **Handoff:** Ensure the progress log accurately describes the actual
    repository state so the owner or a later AI session can continue
    without guessing. Do not mark the task complete until the log is updated.

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

## 14. Project Rules and Scope Control

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
-   Do not begin LAN implementation before the single-PC architecture
    and execution engine are stable.
-   Preserve readable code and explainability even when a more abstract
    implementation is possible.
-   Track known bugs and technical debt instead of hiding them.
-   Update `PROGRESS_LOG.md` after every development session or meaningful task; never claim progress that is not reflected in the actual files and test evidence.
-   Ask the owner before irreversible data changes, destructive
    operations, or substantial architectural changes.
-   Keep all implementation, tests, and documentation in version
    control.

## 15. Decisions Still Open

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

## 16. Definition of Done

A feature is not considered done merely because the AI agent has
generated code for it.

A feature is done when: - The behavior matches an agreed requirement. -
The code is readable and placed in the correct component. - Relevant
tests exist and have been run, or unrun tests are explicitly
documented. - Errors and edge cases have been considered. - The owner
has received an explanation of how the feature works. - The owner knows
where to begin investigating if it fails. - Documentation reflects the
implemented behavior. - Security and reliability claims are supported by
actual controls and evidence.

## 17. Immediate Next Steps

1.  Confirm the proposed Windows desktop stack and code-editor
    direction.
2.  Gather the owner's requirements for teacher and student workflows.
3.  Define the assessment and scoring rules before finalizing the
    schema.
4.  Create the initial solution and repository with a small,
    understandable structure.
5.  Establish a small automated test project and structured logging from
    the start; keep tests runnable offline with `dotnet test`.
6.  Build a standalone proof of concept for running and grading one
    program in each of the five languages.
7.  Review the proof of concept together, including its code paths,
    failure modes, manual debugging process, logs, and regression tests.
8.  Add the Developer Diagnostics and Testing Module incrementally after
    the execution proof of concept is reliable. Keep AI diagnosis optional
    and require explicit review of any data shared externally.
9.  Expand only after the owner understands and approves the foundation.

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
