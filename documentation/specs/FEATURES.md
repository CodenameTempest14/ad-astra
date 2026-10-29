# Ad Astra — Feature Catalogue

**Status:** Proposed 2026-10-29 at the owner's request ("add more features … add an admin
teacher console to tie everything together"). Tiers are the agent's recommendation. The owner may
move any feature between tiers.

> **Approval rule (owner, 2026-10-29):** every feature the agent proposes must be approved by the
> owner before it goes into a phase checklist, gets templates, or is built. A feature moves from
> ⏳ *Awaiting approval* to ✅ *Approved (date)* or ❌ *Rejected (date)* only on the owner's word.
> Features from the original plan (MASTER-PLAN §6) were already in scope; listing them here
> with an approval mark just makes the whole set reviewable in one place.

> **Deployment fact (owner, 2026-10-29):** the Teacher/Admin Console runs on the **teacher's own
> PC**, and students work on **lab PCs**. Results must therefore travel from student PCs to the
> teacher's PC. See `documentation/guides/CLASSROOM-SETUP.md` and question Q2.

**Research behind this list:**
- CodeChum: exam mode, tab-switch/copy-paste detection, "likely cheating" flag, manual score edits, Excel export, ready-made activities — https://www.codechum.com/, https://help.codechum.com/teachers/more-features-you-may-want-to-explore/activities-section/how-to-check-for-potential-cheating
- DOMjudge: rejudging, clarifications (questions to the jury, broadcast answers), detailed judging info — https://sourceforge.net/projects/domjudge/
- Moodle CodeRunner: penalty-free "precheck", penalty regime, per-question settings — https://moodle.org/plugins/qtype_coderunner/5.8.0/39386
- Code similarity: Dolos (MIT, local CLI) — https://github.com/dodona-edu/dolos; JPlag (GPL-3.0, local) — https://github.com/jplag/JPlag

## Tiers
| Tier | Meaning |
|---|---|
| **V1** | In the first release (Phases 2–9) |
| **V1.1** | Soon after V1; the design leaves room for it now |
| **LAN** | Needs the classroom network (Phase 6, now in V1 — D-008) |
| **Later** | Good idea, not planned yet |

## Roles
| Role | Who | Sees |
|---|---|---|---|
| **Administrator** ("admin teacher") | Head teacher / lab in-charge. Also a teacher (one account, two hats) | Admin Console **plus** everything a teacher sees |
| **Teacher** | Creates and runs assessments for their own classes | Teacher pages for their classes only |
| **Student** | Takes assessments assigned to their class | Student pages |

Permissions are enforced in the service layer (SEC-9), never only by hiding menu items.

---

## A. Admin Console — "ties everything together"
The administrator's control centre: people, classes, content, exams, integrity, results and the
system itself.

| ID | Feature | Tier | Owner approval |
|---|---|---|---|
| F-ADM-01 | **Overview dashboard:** exams running/scheduled today, submissions today, toolchain health, last backup age, open alerts (failed runs, integrity flags, low disk) | V1 | ⏳ Awaiting approval |
| F-ADM-02 | **User management:** create/edit/deactivate teachers and students, reset passwords, assign roles | V1 | ⏳ Awaiting approval |
| F-ADM-03 | **Bulk import** of class lists from CSV/Excel with a preview and error report before saving | V1 | ⏳ Awaiting approval |
| F-ADM-04 | **Academic structure:** school years/terms, subjects, sections/classes, enrolment; assign teachers to classes | V1 | ⏳ Awaiting approval |
| F-ADM-05 | **Shared question bank governance:** see every teacher's shared questions; tags (topic, difficulty, language); merge duplicates | V1.1 | ⏳ Awaiting approval |
| F-ADM-06 | **Exam calendar:** all scheduled assessments across classes, with clash warnings (same lab, same time) | V1.1 | ⏳ Awaiting approval |
| F-ADM-07 | **Integrity centre:** integrity events and similarity reports across all classes; mark reviewed / dismissed / escalated | V1 | ⏳ Awaiting approval |
| F-ADM-08 | **Cross-class reports:** results by class, subject, topic; export CSV/Excel/PDF | V1 | ⏳ Awaiting approval |
| F-ADM-09 | **Toolchain manager:** detected compilers, versions and paths; per-language compiler flags and default time/memory/output limits; "test this toolchain" button | V1 | ⏳ Awaiting approval |
| F-ADM-10 | **Backup & restore:** manual and scheduled backups, history, verified restore | V1 | ⏳ Awaiting approval |
| F-ADM-11 | **Audit log:** who did what and when (logins, grade overrides, deletions, settings changes); read-only | V1 | ⏳ Awaiting approval |
| F-ADM-12 | **System settings:** school name and logo on reports, password policy, data-retention rules, default assessment policies | V1 | ⏳ Awaiting approval |
| F-ADM-13 | **Data retention tools:** archive a finished term; purge temp run folders | V1.1 | ⏳ Awaiting approval |
| F-ADM-14 | **Live exam monitor:** every student's status, progress, time left, flags; extend time; force-submit; unlock re-entry | **LAN** (single PC: per-PC view only) | ⏳ Awaiting approval |
| F-ADM-15 | **Lab/host management:** register lab PCs, see which are online, push assessments to them | LAN | ⏳ Awaiting approval |
| F-ADM-16 | **Diagnostics hub:** link to the developer diagnostics (system health, logs, test runner) | V1 | ⏳ Awaiting approval |

## B. Teacher features
| ID | Feature | Tier | Owner approval |
|---|---|---|---|
| F-TCH-01 | Teacher dashboard: my classes, upcoming/running assessments, submissions needing review | V1 | ⏳ Awaiting approval |
| F-TCH-02 | My classes & rosters (read from admin's structure; a teacher may also create a class if allowed) | V1 | ⏳ Awaiting approval |
| F-TCH-03 | **Question bank:** personal + shared; tags, difficulty, language; clone/duplicate a question | V1 | ⏳ Awaiting approval |
| F-TCH-04 | **Coding questions (stdin/stdout)** with statement (markdown), starter code, visible/hidden tests, points | V1 | ⏳ Awaiting approval |
| F-TCH-05 | **Reference solution check:** the teacher's own solution must pass every test before publishing (catches broken test cases) | V1 | ⏳ Awaiting approval |
| F-TCH-06 | **Expected-output generator:** run the reference solution on test inputs to fill expected outputs | V1 | ⏳ Awaiting approval |
| F-TCH-07 | Output comparison policy per test (exact / ignore trailing whitespace / numeric tolerance), shown clearly | V1 | ⏳ Awaiting approval |
| F-TCH-08 | **Assessment modes:** Practice (unlimited runs, instant feedback) · Assignment (due date) · Exam (timed, lockdown, hidden tests) | V1 | ⏳ Awaiting approval |
| F-TCH-09 | Scheduling: open/close window, assign to classes, time limit | V1 | ⏳ Awaiting approval |
| F-TCH-10 | **Per-student accommodations:** extra time, different window | V1 | ⏳ Awaiting approval |
| F-TCH-11 | Attempt limits and **penalty regime** (e.g. −10% per extra submission) | V1 | ⏳ Awaiting approval |
| F-TCH-12 | Randomisation: question pools ("pick 3 of these 6"), shuffled order | V1.1 | ⏳ Awaiting approval |
| F-TCH-13 | Feedback release control: what students see and when (immediately / after close / never) | V1 | ⏳ Awaiting approval |
| F-TCH-14 | Preview as student | V1 | ⏳ Awaiting approval |
| F-TCH-15 | **Manual grade override** with a required reason (audited) and comments on code | V1 | ⏳ Awaiting approval |
| F-TCH-16 | **Rejudge:** re-run all submissions after fixing a test case | V1 | ⏳ Awaiting approval |
| F-TCH-17 | **Clarifications:** answer student questions during an exam; broadcast an answer to everyone | V1 (same PC) / LAN | ⏳ Awaiting approval |
| F-TCH-18 | Announcements to a class | V1.1 | ⏳ Awaiting approval |
| F-TCH-19 | Gradebook with export (CSV/Excel) | V1 | ⏳ Awaiting approval |
| F-TCH-20 | **Question analytics:** pass rate, most-failed test, average attempts, average time | V1 | ⏳ Awaiting approval |
| F-TCH-21 | **Similarity check** between submissions (own implementation of the published winnowing technique; Dolos as optional comparison) | V1.1 | ⏳ Awaiting approval |
| F-TCH-22 | Rubric scoring for code quality (manual criteria next to automatic tests) | Later | ⏳ Awaiting approval |
| F-TCH-23 | Multiple-choice and short-answer questions | V1.1 | ❌ Not yet — revisit after coding portion (Q3, D-009) |
| F-TCH-24 | Import/export question packs (file) to share between schools | V1.1 | ⏳ Awaiting approval |

## C. Student features
| ID | Feature | Tier | Owner approval |
|---|---|---|---|
| F-STU-01 | Dashboard: Upcoming / In progress / Completed assessments | V1 | ⏳ Awaiting approval |
| F-STU-02 | Assessment lobby: instructions, rules, time limit, start confirmation | V1 | ⏳ Awaiting approval |
| F-STU-03 | Coding workspace: problem panel, Monaco editor, run against visible tests, submit | V1 | ⏳ Awaiting approval |
| F-STU-04 | **Run with my own input** (custom stdin) | V1 | ⏳ Awaiting approval |
| F-STU-05 | Penalty-free **precheck** in Practice/Assignment mode | V1 | ⏳ Awaiting approval |
| F-STU-06 | Timer from persisted timestamps; warnings at 10 and 1 minutes; auto-submit at zero | V1 | ⏳ Awaiting approval |
| F-STU-07 | **Autosave** and recovery after a crash or power loss | V1 | ⏳ Awaiting approval |
| F-STU-08 | Question navigator (answered / not answered / flagged for review) | V1 | ⏳ Awaiting approval |
| F-STU-09 | Ask a clarification question | V1 (same PC) / LAN | ⏳ Awaiting approval |
| F-STU-10 | Results and history (when the teacher allows) | V1 | ⏳ Awaiting approval |
| F-STU-11 | Practice area with progress per topic | V1.1 | ⏳ Awaiting approval |
| F-STU-12 | Accessibility: editor font size, high-contrast theme, keyboard-only use | V1 | ⏳ Awaiting approval |

## D. Exam integrity (offline-honest)
A desktop app on a shared Windows PC **cannot fully prevent** cheating. It can make cheating
harder and **record evidence** for the teacher to judge. Wording in the UI must not over-promise.

| ID | Feature | Tier | Owner approval |
|---|---|---|---|
| F-INT-01 | Exam lockdown window: full screen, no app menus, close/minimise blocked during an exam | V1 | ⏳ Awaiting approval |
| F-INT-02 | **Integrity event log:** focus lost, full-screen exit, paste attempts, app restarts, with timestamps | V1 | ✅ Approved 2026-10-29 (Q4, D-010) |
| F-INT-03 | Paste from outside the app blocked in Exam mode (paste inside the editor allowed) | V1 | ⏳ Awaiting approval |
| F-INT-04 | "Review suggested" flag per attempt based on events (never "cheated") | V1 | ✅ Approved 2026-10-29 (Q4, D-010) |
| F-INT-05 | Similarity reports (see F-TCH-21) | V1.1 | ⏳ Awaiting approval |
| F-INT-06 | Hidden tests never in student-facing data or logs (MASTER-PLAN §9.4) | V1 | ⏳ Awaiting approval |

## E. Platform
| ID | Feature | Tier | Owner approval |
|---|---|---|---|
| F-PLT-01 | Five languages via adapters; per-language limits | V1 | ⏳ Awaiting approval |
| F-PLT-02 | First-run setup wizard (creates the first Administrator) | V1 | ⏳ Awaiting approval |
| F-PLT-03 | **USB fallback:** assessment package to lab PCs; encrypted results package back to the teacher's PC (also the network-failure fallback) | V1 | ✅ Approved 2026-10-29 (Q2 fallback, D-008) |
| F-PLT-04 | **Classroom network mode:** Ad Astra Host on the teacher's PC, Student app on lab PCs, hidden-test grading on the host | **V1** (Phase 6) | ✅ Approved 2026-10-29 (Q2, D-008) |
| F-PLT-05 | Light theme | pending decision P00-05 | ❌ Not planned — dark theme only (P00-05, D-015) |

---

## Decisions this catalogue raised — answered 2026-10-29
Q1 Yes (D-007) · Q2 Yes, (a) network in V1 (D-008) · Q3 Not yet (D-009) · Q4 Yes (D-010). Original wording kept below for history.

### Original questions
- **Q1 — Admin = teacher with an admin role?** Recommended: yes, one account with two roles,
  rather than a separate admin-only account. An admin-only account is still possible.
- **Q2 — How do student PCs and the teacher's PC talk in V1?** Since the console is on the teacher's PC
  (owner, 2026-10-29), "one PC" can no longer mean the whole class shares one machine. Options:
  (a) **LAN in V1 (recommended).** The teacher's PC runs the Ad Astra Host. Lab PCs run the Student
  app and connect over the classroom network (no internet needed). This enables the live monitor,
  clarifications and instant results. It also lets **hidden tests stay on the teacher's PC**: lab PCs
  run only visible tests, and final grading runs on the host. That fixes the weakness noted in
  MASTER-PLAN §9.4. Cost: a new phase for the host service and networking, before the student workspace.
  (b) **No network in V1.** The teacher exports an assessment package to USB, and each lab PC imports it,
  runs the exam and exports an encrypted results package for the teacher to import (F-PLT-03). It is
  simpler, but there is no live monitor, more manual steps per exam, and hidden tests sit on every lab PC.
  Either way, (b) stays useful as the **fallback when the network fails**.
- **Q3 — Multiple-choice questions in V1?** Recommended: V1.1. Coding first.
- **Q4 — Integrity strictness.** Is evidence plus flags (recommended) enough, or is a stronger lockdown required?
