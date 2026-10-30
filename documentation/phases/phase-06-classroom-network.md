# Phase 6 — Classroom Network and Host Service

**Objective:** The teacher's PC runs the Ad Astra Host. Lab PCs connect to it over the classroom
network, with no internet. Submissions travel to the host, which grades them against **hidden tests
that never leave the teacher's PC**. A USB package fallback works when the network does not.
**Why this phase exists:** owner decision Q2, 2026-10-29 (DECISIONS.md D-008). The teacher console is
on the teacher's PC, and students use lab PCs.
**Entry criteria:** Phase 5 signed off (assessments can be created on the teacher's PC).
**Plan reference:** MASTER-PLAN.md §12 (now in V1), §9.4, §10; FEATURES.md F-PLT-03, F-PLT-04;
documentation/guides/CLASSROOM-SETUP.md.

## Opening
- [ ] P06-OPEN-01 Phase 5 signed off; tag exists
- [ ] P06-OPEN-02 Phase Opening Report written
- [ ] P06-OPEN-03 Phase brief written
- [ ] P06-OPEN-04 Best-practice sources re-checked (incl. current ASP.NET Core / Kestrel guidance for local-network hosting)
- [ ] P06-OPEN-05 Repo-derived state table in the Opening Report
- [ ] P06-OPEN-06 Network design explained to the owner before code (host, client, messages, failure cases), then recorded in ARCHITECTURE.md

## Design decisions (record each in DECISIONS.md)
- [ ] P06-01 Host technology (recommended: ASP.NET Core/Kestrel hosted inside the teacher app; same domain and application layers)
- [ ] P06-02 Transport security on a LAN without internet (e.g. HTTPS with a host certificate pinned through the lab connection code)
- [ ] P06-03 How lab PCs find the host (typed address + connection code; optional discovery later)
- [ ] P06-04 Client authentication and sessions (student signs in through the host; tokens expire; no passwords stored on lab PCs)
- [ ] P06-05 Where code runs: visible tests on the lab PC (Run); all tests on the host at Submit (grading)
- [ ] P06-06 Offline behaviour: autosave + queued submissions on the lab PC; timer from host-recorded start time

## Host service (test-first)
- [ ] P06-07 Host starts with the teacher app; firewall rule; port from settings
- [ ] P06-08 API: sign-in, list my assessments, start attempt, save draft, submit, get permitted results
- [ ] P06-09 **Student-facing API never returns hidden test data** (contract test inspects every response)
- [ ] P06-10 Submission queue + grading worker on the host (uses the Phase 3 engine); handles many students at once
- [ ] P06-11 Concurrency: SQLite accessed only by the host process; transactions; duplicate-submission rule
- [ ] P06-12 Audit events for network sign-ins and submissions

## Student (lab PC) client
- [ ] P06-13 Lab PC mode: connects to the host, stores nothing permanent except encrypted drafts
- [ ] P06-14 Reconnect and retry; queued submissions sent when the link returns
- [ ] P06-15 Visible-test Run works locally with no network

## USB fallback (F-PLT-03)
- [ ] P06-16 Export assessment package (encrypted, **no hidden tests**)
- [ ] P06-17 Import package on a lab PC; take the exam offline
- [ ] P06-18 Export results package per lab PC (encrypted, signed)
- [ ] P06-19 Import results packages on the teacher's PC; host grades with hidden tests

## UI pages (one at a time — UI-GATE; templates must be Approved first)
- [ ] P06-UI-01 `lab-connect-to-host` (address + connection code; connected / failed states) — template needed
- [ ] P06-UI-02 `connection-status-indicator` component (online / reconnecting / offline-queued) — template needed
- [ ] P06-UI-03 `host-network-settings` section (address, connection code, port, firewall status) — template needed
- [ ] P06-UI-04 Package export/import dialogs — template needed

## Tests and evidence
- [ ] P06-20 Integration test: host + 3 simulated lab clients complete an exam end to end
- [ ] P06-21 Load test: 40 simulated clients submitting within one minute; grading queue drains; numbers recorded
- [ ] P06-22 Failure tests: cable pulled mid-exam, host restarted mid-exam, wrong connection code, clock differences
- [ ] P06-23 Real-hardware dry run on at least 2 physical PCs (CLASSROOM-SETUP.md §3.5) with evidence
- [ ] P06-24 `/security-review` on the network branch (auth, transport, hidden-test leakage)

## Approved features to build (documentation/specs/FEATURES.md, approved 2026-10-29)
- [ ] P06-F01 F-ADM-14 Live exam monitor — acceptance test written first
- [ ] P06-F02 F-ADM-15 Lab/host management — acceptance test written first
- [ ] P06-F03 F-PLT-03 USB fallback — acceptance test written first
- [ ] P06-F04 F-PLT-04 Classroom network mode — acceptance test written first
- [ ] P06-F05 F-TCH-17 Clarifications — acceptance test written first

## Closing
- [ ] P06-CLOSE-01 Full Playwright regression, no Mismatch; baselines approved
- [ ] P06-CLOSE-02 `dotnet test` output (incl. integration + load) in Closing Report
- [ ] P06-CLOSE-03 `/code-review` + `/security-review` on the phase diff
- [ ] P06-CLOSE-04 Docs: ARCHITECTURE.md (network), SECURITY.md (threat model for the LAN), DEBUGGING.md (cannot reach host, queued submissions), CLASSROOM-SETUP.md updated with real installer steps and port
- [ ] P06-CLOSE-05 Phase Closing Report + phase-report output + end-of-session question
- [ ] P06-CLOSE-06 Owner sign-off; merge + tag `phase-06-complete`
