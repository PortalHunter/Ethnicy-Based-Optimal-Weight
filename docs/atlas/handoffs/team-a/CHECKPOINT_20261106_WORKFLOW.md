# Team A standalone workflow upgrade checkpoint — November 6, 2026

**Status:** Operational/research-tracking improvement completed, **not a substantive legal approval or new identified area**. All original Team A original acceptance criteria continue to apply. PR [#68](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68) stays **OPEN / DRAFT / UNMERGED**; ONLY writes to `docs/atlas/handoffs/team-a/` on `research/atlas-team-a-20261104`. No site, main, clinical calculator, medical/ancestry guidance or other-team changes.

## Purpose and short next-run instruction

The user no longer needs to copy large historical handoff prompts: all operating rules, acceptance criteria and execution discipline now live in [RUNBOOK.md](RUNBOOK.md), supplemented by the historical [CONTINUE.md](CONTINUE.md). **Use this short prompt:**

> Continue Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68. Read `docs/atlas/handoffs/team-a/RUNBOOK.md` and `CONTINUE.md` on branch `research/atlas-team-a-20261104`. Work from the research queue and legal-verification ledger. Research, commit, validate and checkpoint Team A-only changes; preserve caveats, keep PR draft/unmerged, and report measured progress. End by repeating this same prompt.

## Live GitHub baseline and immutable workflow data

- Pre-upgrade branch/PR HEAD: `4e06f080d9ff11418d0579f1dababf355ba33f28`, open draft unmerged. Previous Batch53 DATA `e0bb17f56bae44ca338537a003e6005916b641cf`, with 692 provenance observations. Previous 248 official geographic skeletons, 231 preliminary official government health-body identities, 17 documented UNKNOWN, 318 government bodies, 45 source-limited relations, 4 shared area scopes and 248 reviews.
- Workflow ledger commit `a992bd736e4d9c6c0267dfc2edfe49f812cf01df`; queue commit `ed941e5f9fdb48def4ef4e94cdf44fe7f82acc04`; runbook commit `07c64ebeb38d729013f30245bda44a20e0af3255`; validator extension commit `9116ddc75edabc99137eca34e234a0acec6c4e7b`; four additional Python regression checks `c68fd68b07fbea6edc8e4505fdcf4bd81e1ea129`.
- **Immutable independently structurally audited workflow DATA SHA:** [`c68fd68b07fbea6edc8e4505fdcf4bd81e1ea129`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/c68fd68b07fbea6edc8e4505fdcf4bd81e1ea129). [Exact structural QA JSON](QA_TRACKING_20261106.json), committed at `361e0fb14fcf5ccd07c2b7d244532213d5a17f63`. **Resolve live HEAD before any new write**—later documentation commit(s) supersede it.
- **Only five workflow-stage changed paths** between pre-upgrade HEAD and immutable workflow DATA: `RUNBOOK.md`, `data/legal_verification_ledger.csv`, `data/research_queue.csv`, `validate.py`, `test_validate.py`. The eight prior data CSV blob SHAs, original 231/17 research status, 692 provenance sources, all earlier juridical caveats and original-source notes **were not modified**. Further documentation/QA commits occur under Team A only.

## Exactly what was created / how to use it

1. **[`RUNBOOK.md`](RUNBOOK.md)** documents two-track work (17 unresolved + 231 provisional), original 248-M49 acceptance criteria, ranking/rotation, source issuer hierarchy, devolution, escalation of blocked searches, evidence-quality gating, commits, structural and actual Python QA, readbacks and standalone checkpoints. It explicitly prevents interpreting a WHO host, independent publisher or cross-area land management as a domestic public-health legal issuer.
2. **[`data/legal_verification_ledger.csv`](data/legal_verification_ledger.csv)**: **248/248 one-to-one M49 keys**, with original 231 provisional versus 17 unknown identity baselines. Eight separate legal-evidence dimensions were initialized to `NOT_TRIAGED`, stage `UNSCORED_EXISTING_RESEARCH`, legal acceptance `NOT_MEASURED`. **These are workflow scoring placeholders—not a statement that earlier law sources are absent or disproven.** A reviewer must revisit prior `PROVENANCE.csv` source IDs and source notes before upgrading.
3. **[`data/research_queue.csv`](data/research_queue.csv)**: **248/248 queued M49 work records**; 17 unknowns (five targeted priority `624,226,581,744,010` and 12 other unknowns) plus 231 provisional legal reviews. Ten provisional records form an initial **five-region rotation** (two from Africa, Americas, Asia, Europe and Oceania); rotate and prioritize evidence opportunities on next runs. A blocked source requires an alternate retrieval strategy and specific reason instead of repetitive dead-end URL attempts.
4. **[`validate.py`](validate.py)** updated with structural checks that the new ledger and queue each have unique exact 248-M49 keys, correct original identity baseline, evidence states and source links, no unsupported legal acceptance promotions, and source-blocked queue outcomes. **[`test_validate.py`](test_validate.py)** now defines **nine tests (five older + four new)** to reject incomplete ledger, unsupported legal completion, mismatched queue lane and unreasoned source blockage. These are repository test **definitions**; **not executed** in this run because the local container cannot resolve GitHub to obtain a full checkout.
5. **[`QA_TRACKING_20261106.json`](QA_TRACKING_20261106.json)** records exact immutable source/validator blobs, M49 counts, no original CSV mutation, four standalone JavaScript structural negative invariants and the Python execution limitation. **JS structural verification passed; Python execution NOT RUN.** Structure does **not** authenticate current enacted law or medical suitability.

## No fabricated legal completion

```text
Official dated UN M49 geography     [####################] 248/248 100%
Provisional health identity         [###################-] 231/248  93.15%
Documented unresolved areas         [#-------------------]  17/248   6.85% remain
New ledger rows requiring scoring   [####################] 248/248 unscored baseline
Complete current enacted legal work [????????????????????] NOT MEASURED / INCOMPLETE
```

**Do not treat the newly initialized 248 `NOT_TRIAGED` ledger values as measured legal failure or as zero confirmed laws.** The ledger has not yet been independently scored against existing sources. Full acceptance still requires original government-issued/current and cross-border competence confirmation; independent sources for disputed/delegated/renamed authorities, current amendments/effective dates, statutory medical/regulatory responsibilities across jurisdictions, and documented limitations. No clinical/patient approval.

## Next operator

1. Read the RUNBOOK and CONTINUE plus original assignment, inspect current queue/ledger and existing evidence. Select one viable unresolved case and two provisional cases across regions as an objective, not a quota.
2. Add narrowly sourced original-law findings and dated provenance, then update only affected ledger dimensions, statuses and queue outcome with source IDs and reason; preserve all historical records. **Avoid promoting unknown or provisional statuses solely to improve the dashboard.**
3. Commit only Team A paths on current branch, independently reread exact content/SHAs, run actual Python validation/test suite when checkout is available, otherwise explicitly document structural-only validation. Include legal-completion measurement only when substantiated. Save new standalone checkpoint and repeat the short prompt.

**PR remains open/draft/unmerged. No legal or clinical signoff is asserted.**
