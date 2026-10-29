# .claude/hooks/

`ad-astra-gates.sh` is a UserPromptSubmit hook. It re-injects the hard gates (status line, UI-GATE, template-first, one unverified change, session reports) on every turn, because rules that live only in docs stop being followed once the context fills. Keep it short, since it costs tokens every turn. Hooks use `command` type (playbook SEC-3).
