# documentation/phase-reports/

Phase and session reports (MASTER-PLAN §4.4).

```
PHASE_INDEX.md
_templates/                 copy these to start a report
phase-NN-<name>/
├── PHASE_OPENING.md        once, before the first session (owner approves start)
├── sessions/
│   ├── YYYY-MM-DD_sNN_START.md   every session start, before any change
│   └── YYYY-MM-DD_sNN_CLOSE.md   every session end, even if blocked
└── PHASE_CLOSING.md        once, with evidence and owner sign-off
```
Reports are append-only history. Session numbers restart at s01 in each phase.
