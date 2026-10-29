#!/usr/bin/env bash
# Ad Astra — re-injects the hard gates on every user turn (UserPromptSubmit hook).
#
# Why a hook and not just documentation: rules that live only in docs stop binding
# when the context fills up (EngiRent incident log; playbook §0). This keeps them in
# view every turn. Keep it SHORT: it costs tokens on every prompt.

printf '%s' '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"Ad Astra gates (documentation/guides/CLAUDE-CODE-PLAYBOOK.md).\nSTATUS LINE: open every reply with the status line from node tools/phase-report.mjs.\nUI-GATE: never continue to the next page until the current page passes its Playwright comparison with no Mismatch.\nTEMPLATE-FIRST: no page/section/component without an Approved template in design/TEMPLATE_REGISTRY.md.\nTST-7: at most ONE unverified change; a blocked check still counts.\nIMP-6/7: tick checklist items in the same commit with evidence; never assert done from memory.\nSESSION: Start Report before changes; Close Report + CURRENT_STATE + phase report before ending.\nEvery folder has a README.md. Ask before push/merge/destructive git."}}'
