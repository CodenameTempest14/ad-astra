# Working Together: the owner and Shem Dumpor

Two people build Ad Astra, each on their own computer and each with their own Claude Code sessions.
This guide keeps you from overwriting each other. Rules marked ⛔ are HARD RULES (owner, 2026-10-29).

## The branches

| Branch | Who pushes to it | Notes |
|---|---|---|
| `codenametempest14` | The owner (CodenameTempest14, `codename.tempest14@gmail.com`) | Owner's working branch |
| `shem-dumpor` | Shem Dumpor (`dumporshemjoshua@gmail.com`) | Shem's working branch |
| `main` | **Nobody pushes directly** | Changes only by a reviewed merge. Currently at the first push (`65d6d83`) |

⛔ **Everyone pushes only to their own branch**, and the Claude Code agent asks before every push.
You can *read* the other person's branch at any time (`git fetch`, then `git log origin/shem-dumpor`). The agent never pushes to `main` or to the other person's branch.
`.githooks/pre-push` enforces this, and also blocks branch deletion and force-pushes.

## One-time setup on each computer
1. Install Git for Windows (includes Git LFS), Node.js LTS, and the .NET 10 SDK.
2. `git clone https://github.com/CodenameTempest14/ad-astra.git` then `cd ad-astra` and `git lfs install`.
3. Set your identity (the email must match `.githooks/branch-owners.txt`):
   ```
   git config user.name "<your name>"
   git config user.email "<your email>"
   git config core.hooksPath .githooks
   ```
4. Switch to your branch: owner `git checkout codenametempest14`, Shem `git checkout shem-dumpor`.
5. `cd tests/ui-visual && npm install && npx playwright install chromium` (needed for the template and theme tools).
6. Open the folder in VS Code, start Claude Code, and paste the **continuation prompt** (`documentation/context/NEXT_SESSION_PROMPT.md`).

## Daily routine (each person, on their own branch)
1. **Start:** `git pull` (your own branch), then paste the continuation prompt into Claude Code.
2. Work; the session ends with a commit.
3. **Stop:** the agent asks "push?"; on yes it runs `git push` to your own branch only.
4. To see what the other person did: `git fetch` and `git log origin/<their-branch> --oneline`.

## Getting work into `main`
1. When a phase (or a piece of it) is done and signed off, open a **pull request** on GitHub from your branch into `main`.
2. The **other person reviews** it (read the diff and the phase closing report). Merge only when both agree.
3. After a merge, both people update their branch from `main`: `git fetch` then `git merge origin/main` on their own branch (resolve conflicts, then commit).
4. Phase tags (`phase-NN-complete`) are created on `main` after the merge, with the owner's approval.

## Where you are likely to collide (agree on these before building)
These files are edited in almost every session, so they are the usual merge conflicts:

| File | Why it conflicts | Proposed handling |
|---|---|---|
| `documentation/context/CURRENT_STATE.md`, `NEXT_SESSION_PROMPT.md` | Overwritten every session | Per branch. On merge, keep the version from the person who is continuing, then regenerate the prompt. |
| `documentation/PROGRESS_LOG.md`, `DECISIONS.md` | Both append at the end | Keep both entries; entries are dated and tagged with the author's name. |
| `documentation/phases/*.md` (checklists) | Both tick boxes | Tick only items you actually did; the counts are recalculated by `phase-report.mjs`. |
| `documentation/specs/FEATURES.md` | Approval column | Only the owner changes approvals (owner decision rule). |
| Session reports | Same names | From now on file names carry a person tag: `YYYY-MM-DD_sNN_<owner or shem>_START.md`. |

## Who does what (agreed by the owner, 2026-10-30)
- **The owner builds.** By default every phase is built by the owner alone, on `codenametempest14`.
- **Shem reviews.** Shem Dumpor reads and reviews the owner's code (pull request into `main`). Shem does **not** push code on his own.
- **Shem builds only when the owner asks.** If the owner wants help creating something, the owner says so ("Shem is helping on this phase") and only then Shem works and pushes, to `shem-dumpor`, on the part the owner names.
- ⛔ **Phase-owner question:** at the start of every session the agent asks the owner: *"Is this phase being built only by you, or is Shem also working on it?"* The answer goes in the Start Report (Phase builder: owner only / owner + Shem, with Shem's part) and decides whether the agent plans for work from `shem-dumpor`.
- Shem's GitHub username and collaborator access: the owner will add them (repository Settings → Collaborators). Username: *(owner to fill in)*.

## Rules that apply to both people (they live in CLAUDE.md, so both Claude sessions follow them)
- Approved templates before UI, UI-GATE one page at a time, new features need the **owner's** approval in `FEATURES.md`.
- Session start and end: Phase Progress table; session end: continuation prompt.
- Ask before every push, and push only to your own branch.
- Decisions go in `DECISIONS.md` with who decided. Shem's decisions about his own area are recorded the same way; decisions that change scope or architecture need both of you.
