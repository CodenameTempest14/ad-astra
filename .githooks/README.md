# .githooks/

Git hooks shared through the repo.

| File | What |
|---|---|
| `pre-push` | Blocks any push that is not to **your own branch**, any branch deletion, and any force-push (HARD RULE SEC-13). |
| `branch-owners.txt` | `email=branch` list that the hook reads. |

**Enable once per clone** (Git does not do this automatically):
```
git config core.hooksPath .githooks
git config user.email "<your email as listed in branch-owners.txt>"
```
The hook runs on every `git push`. It protects against mistakes, not against someone who deliberately skips hooks (`--no-verify`); the branch rule is also in CLAUDE.md and the playbook. Keep `pre-push` saved with LF line endings (`.gitattributes` does this).
