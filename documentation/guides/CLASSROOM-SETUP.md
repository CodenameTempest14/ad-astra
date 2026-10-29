# Classroom Setup Guide — Running Ad Astra in a Real Computer Lab

**For:** the Administrator (admin teacher) and teachers who set up and run exams in a lab.
**Status:** *Target procedure.* It describes how Ad Astra **will** be set up once it is built. It
assumes decision **Q2 = (a), classroom network mode**, which is still awaiting owner approval
(`documentation/specs/FEATURES.md`). Section 7 is the USB fallback, which also covers Q2 = (b).
Items marked 🔧 are details fixed during implementation (installer names, port number). This
guide is updated as each phase lands.

**Features used here that are still awaiting owner approval** (FEATURES.md): network mode
(F-PLT-04), USB fallback (F-PLT-03), bulk import (F-ADM-03), academic structure (F-ADM-04),
Live Monitor and lab-PC panel (F-ADM-14/15), accommodations (F-TCH-10), clarifications (F-TCH-17),
rejudge (F-TCH-16), reference-solution check (F-TCH-05), integrity log and lockdown (F-INT-01…04),
autosave (F-STU-07). If any is rejected, the matching steps are removed from this guide.

---

## 1. How a classroom is laid out

```
                    ┌──────────────────────────────┐
                    │  TEACHER'S PC                │
                    │  Ad Astra (Host mode)        │
                    │  • Admin / Teacher Console   │
                    │  • Database (all results)    │
                    │  • Hidden tests + grading    │
                    └──────────────┬───────────────┘
                                   │  wired classroom network
                          ┌────────┴────────┐       (no internet required)
                          │ network switch  │
                          └─┬────┬────┬───┬─┘
                ┌───────────┘    │    │   └───────────┐
         ┌──────┴─────┐  ┌───────┴──┐ ┌┴─────────┐ ┌──┴─────────┐
         │ LAB PC 01  │  │ LAB PC 02│ │ LAB PC 03│ │ LAB PC NN  │
         │ Ad Astra   │  │ Student  │ │ Student  │ │ Student    │
         │ (Student)  │  │   app    │ │   app    │ │   app      │
         └────────────┘  └──────────┘ └──────────┘ └────────────┘
```

| Machine | Runs | Holds |
|---|---|---|
| **Teacher's PC** (one) | Ad Astra in **Host mode**: the Admin/Teacher Console and the host service | The only database: accounts, classes, assessments, **hidden tests**, all submissions and grades, backups |
| **Lab PCs** (one per student) | Ad Astra in **Student mode** | Nothing permanent: only the student's in-progress code (autosaved), which is sent to the host |

Students can **Run** their code on the lab PC against visible tests. When they **Submit**, the code
goes to the teacher's PC, which runs the hidden tests and records the grade. Hidden tests never
leave the teacher's PC.

---

## 2. What you need

**Teacher's PC**
- Windows 10 (22H2) or Windows 11, 64-bit; 8 GB RAM minimum (16 GB recommended for 40+ students); 20 GB free disk.
- A wired network port (Wi-Fi works but is less reliable during exams).
- A Windows **administrator** account for installation; a normal account for daily use.
- An external USB drive for backups.

**Each lab PC**
- Windows 10 (22H2) or 11, 64-bit; 4 GB RAM minimum.
- A wired connection to the same network switch as the teacher's PC.
- A **standard (non-administrator) Windows account for students**, e.g. `Student`. This stops students
  from reading application data or changing the installation.

**Network**
- One network switch (or the lab's existing switch/router). **Internet is not required.**
- The teacher's PC needs a **fixed address** on the network: a static IP or a DHCP reservation, e.g. `192.168.10.10`.
- The firewall on the teacher's PC must allow Ad Astra's host port (🔧 the installer adds the rule).

**Compilers (toolchains)** must be installed on the teacher's PC and on every lab PC:
| Language | Toolchain | Notes |
|---|---|---|
| C, C++ | GCC (MinGW-w64) or Clang | Same version on every PC |
| Java | JDK (LTS version) | `javac` and `java` |
| Python | Python 3 | Tick "Add to PATH" when installing |
| C# | .NET SDK (LTS) | |

Use **the same versions on every PC**. Ad Astra's Toolchain page (Admin Console) shows what each PC has.

---

## 3. One-time setup (allow about half a day for a 40-PC lab)

### 3.1 Teacher's PC
1. Sign in to Windows as an administrator.
2. Install the toolchains in section 2.
3. Run the **Ad Astra installer** 🔧 and choose **"Teacher PC (Host)"**.
4. On first launch, the **First-Run Setup Wizard** opens:
   1. **Welcome:** enter the school name (shown on reports).
   2. **Toolchains:** the wizard detects compilers. Fix anything shown in red before continuing; each error has a "how to fix" link.
   3. **Administrator account:** create *your* account. Use a strong password and write it somewhere safe; there is no online "forgot password".
   4. **Backup location:** choose the external USB drive or a second disk.
   5. **Network:** the wizard shows this PC's address (e.g. `192.168.10.10`) and a **lab connection code**. Write both down; every lab PC needs them.
5. Set a **fixed IP address** for this PC (ask the school IT person, or set a DHCP reservation on the router). If the address changes, lab PCs cannot find the host.

### 3.2 Network check
1. Connect the teacher's PC and all lab PCs to the same switch.
2. On any lab PC, open Command Prompt and run `ping 192.168.10.10` (your teacher PC's address). You should see replies.
   No replies? Check the cable and switch, and check that both PCs are on the same network range.

### 3.3 Each lab PC (repeat for every PC; a USB stick with the installers speeds this up)
1. Sign in as a Windows administrator.
2. Install the **same toolchain versions** as the teacher's PC.
3. Run the Ad Astra installer and choose **"Lab PC (Student)"**.
4. Enter the **teacher PC address** and the **lab connection code** from step 3.1.5.
5. Give the PC a name you can find in the room, e.g. `LAB-01` … `LAB-40`. Label the monitor with it.
6. Ad Astra shows **"Connected to host ✔"**. If not, see Troubleshooting.
7. Create (or confirm) the **standard `Student` Windows account**, and set Ad Astra to start automatically for it 🔧.
8. Sign out. From now on, students only use the `Student` Windows account.

### 3.4 Accounts and classes (on the teacher's PC, Admin Console)
1. **Academic structure:** create the school year/term, subjects and sections (e.g. *BSIT 1-A, Programming 1*).
2. **Teachers:** create accounts for other teachers and assign them to their sections.
3. **Students:** import each class list from Excel/CSV (columns: student number, last name, first name, section).
   Review the preview, fix the rows flagged in red, then save. The Admin Console prints **first-login slips**
   with each student's username and temporary password.
4. Students change their password the first time they sign in.

### 3.5 Dry run (strongly recommended before the first real exam)
1. Create a 1-question **Practice** assessment ("print Hello, World") for one section.
2. Have 3–5 students (or yourself) sign in on lab PCs, run, and submit.
3. Confirm the submissions and scores appear on the teacher's PC within a few seconds.
4. Pull a lab PC's network cable for 30 seconds, then reconnect it. The student's work must still be there, and it should sync again.

---

## 4. Before each exam

**The day before**
- [ ] The assessment is **published**, assigned to the right section, and has the right time window and time limit.
- [ ] The **reference solution passes all tests** (Ad Astra blocks publishing otherwise).
- [ ] Students needing extra time have their **accommodation** set.
- [ ] Take a **backup** (Admin Console → Backup → Back up now).

**15 minutes before**
- [ ] Teacher's PC is on, signed in, and Ad Astra is open. The **Overview** dashboard shows no red alerts.
- [ ] Turn on every lab PC. The Admin Console's **Lab PCs** panel shows each one as *Online*.
- [ ] Any PC shown as *Offline*: check the cable, restart Ad Astra, or move the student to a spare PC.
- [ ] Toolchain status is green on all PCs.
- [ ] Write the assessment name on the board. Students will see it on their dashboard; they do **not** need a code or link.

---

## 5. During the exam
1. Students sign in to the `Student` Windows account, then to Ad Astra with their own username.
2. They open the assessment, read the instructions in the **lobby**, and press **Start**. The timer starts for each student individually.
3. The exam opens in **full-screen lockdown**. Leaving full screen, switching apps or pasting from outside is **recorded**, not silently allowed.
4. On the teacher's PC, the **Live Monitor** shows each student: PC name, current question, time left, submissions, and any integrity flags.
   - **Extend time** for a student (e.g. a PC restart cost them 5 minutes).
   - **Answer clarifications.** Reply to one student, or broadcast to everyone.
   - **Unlock re-entry** if a student's PC crashed and they must continue on another PC. Their autosaved work follows them.
5. At time zero, Ad Astra **auto-submits** the latest saved code. Students cannot keep typing.

**If the network drops during an exam:** students keep working. Code is autosaved on the lab PC, and the
timer is based on the recorded start time. Submissions queue and send automatically when the connection
returns. If it does not return before the end, use the USB fallback (section 7) for that PC.

---

## 6. After the exam
1. Live Monitor shows all students as *Submitted* (or *Auto-submitted*).
2. Review the **Integrity** list. A flag means *review suggested*, not *cheated*; look at the event timeline before deciding anything.
3. If a test case was wrong, fix it and press **Rejudge**. All submissions are re-graded and the change is logged.
4. Release results to students when ready (if the assessment is set to *release after close*).
5. Export the gradebook (Excel/CSV) if needed.
6. Take a **backup** and keep the USB drive somewhere safe.

---

## 7. USB fallback (no network, or a PC that lost its connection)
1. Teacher's PC: open the assessment → **Export exam package** to a USB drive. The package is encrypted and contains **no hidden tests**.
2. Each lab PC (Ad Astra, signed in as a teacher): **Import exam package**.
3. Students take the exam normally. Only visible tests can run on the lab PC.
4. After the exam, on each lab PC: **Export results package** to the USB drive (encrypted; one file per PC).
5. Teacher's PC: **Import results packages**. Ad Astra runs the hidden tests here and records the grades.

---

## 8. Troubleshooting
| Symptom | Likely cause | What to do |
|---|---|---|
| Lab PC says "Cannot reach host" | Cable/switch; teacher PC address changed; firewall | `ping` the teacher PC; confirm its fixed IP; rerun the installer's firewall repair 🔧 |
| Toolchain shown red on one PC | Compiler missing or a different version | Install the same version as the teacher PC; press "Test toolchain" |
| Student's code runs on the lab PC but fails on submit | Different compiler version between lab and host | Align versions; Admin Console → Toolchains shows differences |
| Student's PC froze mid-exam | Hardware/OS | Move them to a spare PC; **Unlock re-entry** on the Live Monitor; extend time if needed |
| Many submissions slow to grade | Teacher PC under load | Normal for big classes; grading queues. Keep the teacher PC free of other heavy programs |
| Forgot the administrator password | — | Use the recovery code shown during first-run setup 🔧; keep it with the backup drive |

---

## 9. Security notes for the lab
- Students use a **standard Windows account**, never an administrator one.
- The teacher's PC is **never** used by students and is locked (Win+L) when unattended.
- Backups contain all grades and student names: store the USB drive securely.
- Ad Astra records integrity events but **cannot guarantee** that cheating is impossible on a PC the
  student physically controls. Classroom supervision is still required.
