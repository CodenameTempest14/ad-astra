# Student Workflow — DRAFT for owner review (P00-15)

Built from the owner's decisions D-008 … D-018 and the approved student features. **(?)** marks gaps to confirm.

## 1. Signing in
1. The lab PC starts in the standard `Student` Windows account with Ad Astra open and **Connected to host ✔** (F-PLT-04). `lab-connect-to-host` on first setup only.
2. The student signs in with the username and temporary password from their first-login slip, and sets a new password on first login. `shared-login`

## 2. Finding an assessment
1. The dashboard lists assessments in three columns: Upcoming, In progress, Completed (F-STU-01). `student-dashboard`
2. Opening one shows the lobby: instructions, rules, time limit, and what happens at time-out (F-STU-02). In **Exam** mode, a clear warning that the screen will lock down. `student-assessment-lobby`
3. **Start** begins that student's own timer from the host's clock (D-013).

## 3. Solving problems — `student-coding-workspace`
1. Left: problem statement and visible examples. Centre: Monaco editor with starter code, in the language the teacher chose (F-STU-03).
2. **Run** compiles and runs on the lab PC against the **visible** tests, or against the student's own input (F-STU-04). Unlimited (D-011). Compiler errors and output appear in the console below.
3. In Practice/Assignment mode a penalty-free **Check** is available (F-STU-05). Check differs from Run: Check = Run against the visible tests with a pass/fail summary (owner confirmed 2026-10-30).
4. The timer bar warns at 10 minutes and 1 minute (F-STU-06). Code is autosaved continuously; a crash or power loss resumes where they left off (F-STU-07).
5. The question navigator shows answered / not answered / flagged for review (F-STU-08).
6. **Ask the teacher** a question in the clarification panel; broadcast answers show highlighted (F-STU-09). `student-clarification-panel`
7. **Submit** (with a confirmation) sends the code to the teacher's PC, which runs all tests, including hidden ones. The student sees only pass/fail counts for hidden tests, never their data (D-008, D-011).

## 4. Exam mode lockdown (F-INT-01, 02, 03)
Full screen. Leaving full screen, switching apps, pasting from outside the editor, or restarting the app is **recorded** and may raise a "review suggested" flag for the teacher. Pasting from outside the editor is blocked. The student is told this in the lobby.

## 5. Finishing
- At time zero the latest saved code is auto-submitted and the editor locks (D-013).
- If the network is down, work is kept on the lab PC and sent when the connection returns; if it does not return, the teacher uses the USB fallback (F-PLT-03).
- **Results** appear when the teacher releases them (F-STU-10, F-TCH-13): score, tests passed, per-question breakdown. `student-results`

## 6. Accessibility (F-STU-12)
Editor font size, a high-contrast option within the dark theme (no light theme, D-015), and keyboard-only navigation.
