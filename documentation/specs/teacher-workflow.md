# Teacher / Administrator Workflow — DRAFT for owner review (P00-14)

Built from the owner's decisions D-007 … D-018 and the approved features in FEATURES.md.
Anything marked **(?)** is a gap the owner should confirm. Screens named below are the template IDs in `design/TEMPLATE_REGISTRY.md`.

**Roles:** a Teacher manages their own classes. An Administrator is a teacher with the extra Admin role (D-007), who also sees the Admin Console.

## 1. Before the school term (Administrator, on the teacher's PC)
1. First launch → first-run setup wizard creates the Administrator account (F-PLT-02). `shared-first-run-setup`
2. Create the term, subjects and sections (F-ADM-04). `admin-academic-structure`
3. Create teacher accounts and assign them to sections (F-ADM-02). `teacher-account-management`
4. Import each class list from Excel/CSV, review the preview, save, print first-login slips (F-ADM-03). `admin-class-import`
5. Check toolchains on the host and each lab PC; fix anything red (F-ADM-09). `shared-toolchain-status`
6. Set school name, password policy, retention (F-ADM-12). `admin-system-settings`
7. Take the first backup (F-ADM-10). `teacher-backup-restore`

## 2. Building an assessment (Teacher)
1. Open the dashboard → **New assessment** (F-TCH-01). `teacher-dashboard`, `teacher-assessment-list`
2. Choose the mode: **Practice**, **Assignment** or **Exam** (F-TCH-08), the sections, the open/close window and the time limit (F-TCH-09). `teacher-assessment-editor`
3. Add questions: write the statement (markdown), starter code, language, points (F-TCH-04). Reuse from the question bank when possible (F-TCH-03). `teacher-question-editor`, `teacher-question-bank`
4. Add test cases: input, expected output, **visible or hidden**, weight, comparison policy (F-TCH-07). Scoring is partial credit by weight (D-012).
5. Write a reference solution; Ad Astra runs it against every test and blocks publishing if any test fails (F-TCH-05). It can also fill in expected outputs (F-TCH-06).
6. Set attempt limits and penalties if wanted (F-TCH-11), what students see after the exam (F-TCH-13), and extra time for named students (F-TCH-10).
7. **Preview as a student** (F-TCH-14), then **Publish**.

## 3. Running an exam (Teacher on the teacher's PC; classroom layout in CLASSROOM-SETUP.md)
1. 15 minutes before: lab PCs show Online in the **Lab PCs** list (F-ADM-15). `admin-lab-pcs`
2. During the exam: the **Live Monitor** shows every student's question, time left, submissions and flags (F-ADM-14). `admin-live-monitor`
   - Extend a student's time, unlock re-entry on another PC. **(?)** Is force-submit needed?
   - Answer clarification questions, to one student or broadcast to all (F-TCH-17). `teacher-clarifications-inbox`
3. At zero, each student's latest saved code is auto-submitted (D-013).

## 4. After the exam (Teacher / Administrator)
1. Review each attempt: code, per-test results including hidden tests, integrity timeline (F-INT-02). `teacher-submission-review`, `admin-integrity-centre`
   - A flag means "review suggested", never "cheated" (D-010).
2. **Override a grade** with a required reason, add comments (F-TCH-15); it is written to the audit log (F-ADM-11). `admin-audit-log`
3. Fixed a wrong test? **Rejudge** all submissions (F-TCH-16).
4. See the gradebook and question analytics (F-TCH-19, F-TCH-20); export to **Excel (.xlsx) and CSV (.csv)** (D-019). `teacher-gradebook`, `teacher-assessment-report`
5. Release results to students according to the assessment's setting (F-TCH-13).
6. Back up. At term end: archive or delete the term (D-016). **(?)** Archive tooling (F-ADM-13) is held; is "delete the term" enough for V1?

## 5. When things go wrong
- Lab PC offline or crashed → CLASSROOM-SETUP.md §5, §7 (USB fallback).
- Forgot the Administrator password → recovery code from first-run setup. **(?)** Confirm this approach.
