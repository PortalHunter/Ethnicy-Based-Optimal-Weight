# Team D — international health network atlas

Current research checkpoint:2026-11-05. Branch:`research/atlas-team-d-20261104`. Draft PR:https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

Team D owns typed, dated, source-linked institutional relationships across borders. Country/area WHO regional assignment, constitutional governance, office presence, UN geography, national regulation, programme participation and professional society membership are separate dimensions. This graph does not authorize clinical recommendations.

## Current data

542 typed relationships among 45 network nodes;20 institutional references spanning all seven condition keys;205 verified WHO region statuses and44 not_verified among 249 retained ISO candidates. A separate official UN overview crosswalk has248 rows; ISO candidate158 is an explicit exception. There are 10 current office-presence attestations; a separate historical dataset has 154 Annex 2 location labels, 42 MCO coverage labels and 32 regional focal-point labels (all report-period 2021–2022). It also has 56 individual WHO profile audits, 38 WPRO source-name matches, 44 unresolved-area records, 20 coverage tasks, 14 overlap cases, 112 provenance URLs and 30 boundary cases.

Core data are in data/*.csv; exact current counts and saved batch SHAs are in STATUS.md. BATCH_2026-11-05.md records original source checks, explicit name aliases, stale-roster conflicts, retrieval failures and the 2021–2022 WHO office coverage batch. Historical office records must not be read as current 2026 presence. PROVENANCE.csv identifies source roles, checked dates and limitations. GAPS.md identifies remaining work; GRAPH_ONTOLOGY.md and METHOD.md define interpretation.

Run `node docs/atlas/handoffs/team-d/validate.mjs` after fetching all files. Structural checks do not establish clinical or legal validity. CONTINUATION_PROMPT.md is the standalone next-session entry point.

Keep draft. No main edits, calculator changes, merge, national-guideline adoption inference or ancestry-based individual recommendation. Source IDs and legacy identifiers remain stable; source-local society IDs require explicit Team B reconciliation.
