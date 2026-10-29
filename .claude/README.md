# .claude/

Claude Code project configuration, shared through the repo.

- `settings.json`: deny rules for secrets and destructive git, "ask" for push/merge, and the gates hook (playbook SEC-1, SEC-7, §0).
- `hooks/`: hook scripts.

Personal settings go in `settings.local.json`, which is git-ignored. Review changes to this folder carefully: they change what the agent may do.
