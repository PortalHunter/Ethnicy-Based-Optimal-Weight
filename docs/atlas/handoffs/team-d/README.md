## Most recent research — Batch 22, 2026-11-05

[Complete standalone Batch 22 checkpoint](CHECKPOINT_BATCH_22_2026-11-05.md) · [Continuation prompt](CONTINUATION_PROMPT.md).

The source-qualified PAHO Caribbean representative succession is in `data/paho_representative_terms_2026.csv` (**12 observations**) and Cayman HEARTS/Sint Maarten local cooperation evidence in `data/paho_local_implementation_evidence_2026.csv` (**4 observations**). Four added official PAHO URLs `TD-SRC-189–192` bring provenance to **192**. Distinguish Stein effective 22 October vs Boisson effective 29 October 2026, and do not discard the **January/February 2021 conflicting PAHO historical start months**. Indexed official article text was available but direct page access returned 403; source evidence is marked accordingly. Neither a representative's coverage nor HEARTS programme activity proves a WHO physical office, national legal policy adoption or clinically endorsed treatment. Structural validator **PASS via read-only JavaScript shim** (50 GitHub PR files, 31 inputs), not native Node/Actions/scientific signoff. Preserved 47 nodes / 616 edges, WHO 205 region assignments/44 unresolved, 105 direct April office positives and 228 separate 2021–22 service records. PR #70 is draft, unmerged.

---

## Latest standalone checkpoint — Batch 21, 2026-11-05

[Read the complete Batch 21 recovery handoff](CHECKPOINT_BATCH_21_2026-11-05.md). A new source-qualified 15-row WHO WER **2025 epidemiological reporting group** dataset is separated from **2026 WHO administrative region assignments**; all 44 pending WHO administrative statuses remain unchanged. Fixed a previously stale provenance-count invariant in the checked-in validator; all structural assertions **PASS in a read-only GitHub-PR-diff JavaScript replay** (47 files, 29 data inputs), not in native Node/Actions. Unique source URLs now 188; graph 47 nodes/616 edges, 105 April 2026 office hosts and 46/46 older survey independent checks unchanged. PR #70 stays draft/unmerged. No public website, clinical, legal, main or other-team edits.

---

## Latest standalone checkpoint — Batch 17, 2026-11-05

[Read full source/research/validation/restart handoff](CHECKPOINT_BATCH_17_2026-11-05.md). Historic WHO July 2021 SIDS Annex region headings (**13**) and WHO 2019 Barbados/ECC office host/service areas (**14**) were added as separate temporal source layers; **150** provenance URLs total. Current WHO regions still **205 verified / 44 unknown**; graph **47 nodes / 616 edges**. Full structural assertions PASS in GitHub-derived JS read-only shim, not native Node or Actions. No website/clinical/merge changes.

---

## New verified Team D artifacts — Batch 11 (2026-11-05)

- `data/hearts_pathway_catalog_2026.csv`: 24 dated PAHO source-title catalog entries, no inferred legal national adoption or local recommendation.
- `data/cross_border_programme_evidence_2026.csv`: five aggregate status observations with distinct time/denominator meanings. No country edges inferred.
- Validated data/validator commit `e430702b371b9393603c94f7fc40f9712f61d378`, **19 CSV** structural assertion run PASS in read-only JavaScript shim, **118** unique provenance URLs. See latest standalone `CHECKPOINT_2026-11-05.md`.
- Preserve `main`, public website, other research teams, and the draft/unmerged PR #70.

---

# Team D — international health network atlas

Current research checkpoint:2026-11-05. Branch:`research/atlas-team-d-20261104`. Draft PR:https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

Team D owns typed, dated, source-linked institutional relationships across borders. Country/area WHO regional assignment, constitutional governance, office presence, UN geography, national regulation, programme participation and professional society membership are separate dimensions. This graph does not authorize clinical recommendations.

## Current data

542 typed relationships among 45 network nodes;20 institutional references spanning all seven condition keys;205 verified WHO region statuses and44 not_verified among 249 retained ISO candidates. A separate official UN overview crosswalk has248 rows; ISO candidate158 is an explicit exception. There are 10 current office-presence attestations; a separate historical dataset has 154 Annex 2 location labels, 42 MCO coverage labels and 32 regional focal-point labels (all report-period 2021–2022). It also has 56 individual WHO profile audits, 38 WPRO source-name matches, 44 unresolved-area records, 20 coverage tasks, 14 overlap cases, 112 provenance URLs and 30 boundary cases.

Core data are in data/*.csv; exact current counts and saved batch SHAs are in STATUS.md. BATCH_2026-11-05.md records original source checks, explicit name aliases, stale-roster conflicts, retrieval failures and the 2021–2022 WHO office coverage batch. Historical office records must not be read as current 2026 presence. PROVENANCE.csv identifies source roles, checked dates and limitations. GAPS.md identifies remaining work; GRAPH_ONTOLOGY.md and METHOD.md define interpretation.

Run `node docs/atlas/handoffs/team-d/validate.mjs` after fetching all files. Structural checks do not establish clinical or legal validity. CONTINUATION_PROMPT.md is the standalone next-session entry point.

Keep draft. No main edits, calculator changes, merge, national-guideline adoption inference or ancestry-based individual recommendation. Source IDs and legacy identifiers remain stable; source-local society IDs require explicit Team B reconciliation.
