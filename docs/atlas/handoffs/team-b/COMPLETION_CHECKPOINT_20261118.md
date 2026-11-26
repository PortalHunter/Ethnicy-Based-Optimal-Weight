# Team B — comprehensive checkpoint, B100–B105, 2026-11-18

PR [#71](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71) remains **open, draft, unmerged**. Branch `research/atlas-team-b-20261104`. Research is **incomplete**; **zero clinical, genetic, ancestry, legal, rights, licensing or Indigenous-governance approvals**. All 434 contexts remain `research_lead_only`.

## Immutable state and scope

- Starting live head: `537368fa40ccf5b692427d0c1e3cc3068c39708d` (B99 data already present, despite stale B98 CURRENT/CHECKPOINT prose).
- Validated data/tool commit: `1b2a66975522e6f9c031c2eecea33b28c66a9e81`. Final documentation commit is the commit containing this file; retrieve with `git log -1 --format=%H -- docs/atlas/handoffs/team-b/COMPLETION_CHECKPOINT_20261118.md`.
- Read-only raw intake: `be8793baaff381cafb612168c070d8de406b93c4`, 56 Team B batches, 2,071 unique unverified source URLs. Inspected/indexed via Git objects, no intake changes or automatic source promotion.
- Writes restricted to `docs/atlas/handoffs/team-b/`. Main, other teams, public calculators and original validator unchanged. Existing canonical rows, audit observations, community rows and cross-border safeguards preserved. CSV original quoting restored for concise net diffs.

## Starting versus ending live census

| Measure | Start | End | Change |
|---|---:|---:|---:|
| Organizations | 501 | 502 | +1 |
| Indexed local M49 areas | 227/248 | 227/248 | 0 |
| Local identity gaps | 21 | 21 | 0; all 21 received new identity queries |
| Raw linked cells | 388 | 389 | +1 |
| Searched-unlinked cells | 194 | 274 | +80 |
| Untouched cells | 1,154 | 1,073 | -81 |
| Exact publication/context rows | 433 | 434 | +1 |
| Individually audited source rows | 91 | 434 | +343 |
| Unaudited source rows | 342 | 0 | -342 |
| Audited S1/S2/H-qualified cells | 58 | 194 | +136 |
| Active depth D1 / D2 / D3 | 16 / 12 / 0 | 97 / 12 / 5 | +81 / 0 / +5 |
| Unlinked cells without active D2/D3 | 182 | 263 | +81 new D1 tasks; no false completion |
| Original issue-country unknowns | 5 | 5 | 0 resolved; 5 named custodian escalations |
| Provenance / search logs | 1,172 / 696 | 1,260 / 783 | +88 / +87 |
| Community / cross-border rows | 10 / 8 | 10 / 8 | unchanged |

The complete initial quality worklist was processed in batches of 80, 80, 80, 60 and 42 source-context rows. **342 queued rows represent 315 distinct exact URLs**, retrieved once per URL and interpreted separately for each condition/organization context. One additional new original URL was inspected and audited. Failed/shell/interstitial sources received at most one additional independent web route; no access circumvention. A direct status200 was never sufficient for positive classification.

| Tier | Start | End | Net added |
|---|---:|---:|---:|
| S1 original substantive | 11 | 52 | +41 |
| S2 first-party educational | 41 | 135 | +94 |
| H external with accurate role | 7 | 22 | +15 |
| M metadata/non-substantive | 30 | 196 | +166 |
| U unresolved | 2 | 29 | +27 |

**209 eligible source rows are not 209 independent studies.** Shared URLs, conditions, society publishing roles and repeated cohorts remain distinct. **194/389 historical raw-linked cells now have no audited S1/S2/H**; this is a quality finding, not a claim of national source absence. Their historic raw links are retained and require substantive replacements, actual bounded additional searches, or justified source/role escalations. No raw record was erased merely to improve quality metrics.

## Evidence and research outcomes

[Exact 342-row source observations](data/source_observations_20261118.csv) and the [append-only quality/depth ledger](data/research_quality_audit.csv) contain individual findings, exact URLs and limits. The last audit for an exact org+condition+URL is active; earlier observations remain historical. For example, the NHF Bangladesh statin-use landing page was conservatively corrected from this run's initial S1 to M because its retrieved text contained only condensed conclusions without substantive original methods/denominator; original journal retrieval timed out. This correction is retained explicitly, not erased.

The new source-positive **India lactose cell** uses [Indian Pediatrics2020;57:723–729](https://www.indianpediatrics.net/aug2020/aug-723-729.htm), Matthai and colleagues explicitly for ISPGHAN / IAP pediatric gastroenterology chapter. Its actual TableI differentiates lactose-intolerance subtypes, enzyme mechanism, symptoms and course from milk-protein allergy. It is a CMPA guideline with a substantive differential section, **not a dedicated all-age lactose-treatment guideline**. The [society's own constitution](https://ispghan.org/constitutions/) names its Chennai registered office and scientific/guideline objectives. No independent legal incorporation or clinical currency approval is implied. This was a previously D2/unlinked cell, **not one of the 81 untouched cells**.

[81 condition-specific intake checks](data/intake_candidate_checks_20261118.csv) record actual original candidate navigation or exact PMID retrieval queries through Europe PMC, original titles/DOIs where returned, response hashes and individual scope/negative/next-action limits. Author abstracts in an archive are distinguished from metadata-only records and original publisher versions. **All81 are D1 exploratory; zero new substantive positives from this untouched batch.** Their local independent institution/role/original version was not sufficiently authenticated to join as a TeamB publication. Examples retained: Chinese hyperuricaemia is not clinical gout; HFE/HLA carriage is not diagnosed disease; Vietnamese US-migrant lactose studies are not Vietnamese local-issuer evidence; Guatemalan Indigenous clinical samples require governance and sampling boundaries; old no-abstract records remain metadata only. No generic country query was multiplied into seven condition checks.

[21 geographic identity investigations](data/geographic_gap_audit_20261118.csv) preserve actual queries, candidates and scope limits. No locally unverified organization was invented. Notable findings: Le Coeur de SaintBarth service geography does not establish652 domicile (secondary registry mirror points to Saint-Martin); Nauru has a historical association lead but no authenticated current own seat/lifecycle; Norfolk has community-care candidates requiring own charter/condition-scope verification; the Pontifical Academy for Life has a verified Vatican-office statute but TeamA/B independence and seven-condition relevance remain maintainer questions. Polar stations/foreign operators, government clinics, modeled IDF statistics and Scottish Pitcairn namesakes do not fill local independent-organization gaps. These are still open gaps, not nationwide nonexistence findings.

[Five original issuer questions](data/issuer_review_20261118.csv) are individually D3-escalated with named custodian questions: Panama acceptable protocol versus PAHO host/ministry approval; WGO Portuguese translation imprint; ESPGHAN Portuguese translation/annotation imprint; PAMJ2025 issue versus historical Uganda/current Kenya-Cameroon operator; OpenAccessPub2024 issue versus current NewYork self-description. **No issue-country field was guessed.** These D3 rows do not certify clinical science or resolve the country value.

Scientific cautions remain explicit: Argentine gout/CPPD identity conflict; German leaflet ancestry-origin narrative; selected case/control, convenience and hospital populations; differing age metadata; Equatorial Guinea design labels; original versus translated guidance; clinical gout versus serum urate; ferritin/HFE versus hereditary disease; celiac autoimmunity versus confirmed diagnosis. Rights and original methods need independent specialist review.

## Seven-condition census

| Condition | Raw linked | Qualified audited cells | Searched-unlinked | Untouched |
|---|---:|---:|---:|---:|
| diabetes | 110/248 | 42/248 | 110 | 28 |
| hypertension | 75/248 | 20/248 | 48 | 125 |
| high_chol | 48/248 | 20/248 | 12 | 188 |
| gout | 41/248 | 26/248 | 28 | 179 |
| lactose | 38/248 | 34/248 | 29 | 181 |
| celiac | 52/248 | 35/248 | 19 | 177 |
| hemochromatosis | 25/248 | 17/248 | 28 | 195 |

```text
Local identity   [██████████████████··] 227/248 (91.5%); gaps21; delta0
Cell research    [████░░░·············] raw389 (22.4%); searched274 (15.8%); untouched1073 (61.8%)
Quality-qualified cells: 194/1736 (11.2%); delta+136
Source quality audited: 434/434; unaudited0 — classification census only
Legend: █ raw linked research lead; ░ searched (not necessarily bounded); · untouched.
389 + 274 + 1073 = 1736. None of these bars grants clinical/legal approval.
```

## Validation and acceptance

- **Unchanged native Node validator: PASS**, full checkout, [actual receipt](runs/20261118_native_validation.json), zero errors. Uses bundled Node because `node` is not on shellPATH; earlier Git-DNS/CLI-not-run limitations are resolved in this run.
- **Supplemental structural/preservation validator: PASS**, [receipt](runs/20261118_supplemental_validation.json): exact source/context/worklist joins, active tiers, cell counts, source/depth evidence references, metric reconciliation, historical canonical-row prefixes, and unchanged10community/8cross-border rows.
- **12/12 immutable core CSV+validator+quality-ledger blob readbacks: PASS**, complete170-entry repository tree at `1b2a66975522e6f9c031c2eecea33b28c66a9e81`, [receipt](runs/20261118_data_blob_readback.json). Local immutable Git verification and the GitHub data-tree reconstruction match exactly; branch fast-forward/head verification is reported in chat.
- Protected validator unchanged. Calculator/browser/global application suites not run because implementation paths are unchanged. GitHub CI must be read on the published final head; pending CI is not a pass or clinical approval.
- Corrected pre-existing stale metric metadata: reconciliation CSV actually contains7rows,6qualified replacements/1open (older JSON said8/7/1); no reconciliation record deleted. Identity triage now reports all actual classes rather than stale heuristic totals omitting recent organizations.

**Completed research gate:** initial source-quality classification queue exhausted, all434current source contexts individually dispositioned. **New substantive evidence gate qualifications:**136additional cells. Overall TeamB acceptance remains incomplete:1073untouched cells,263unlinked cells lacking bounded D2/D3,194raw-linked cells without qualifying audited content,21local identity gaps and unresolved clinical/rights/governance/imprint questions. No overall completion or independent specialist approval claimed.

## Remaining work and stopping reason

The run reached its execution/context budget after the full initial quality queue and the81-cell indexed-candidate batch. **Remaining research is still executable**, not all externally blocked. Do not turn the1073untouched or263D1-depth tasks into evidence-limited terminal records without new actual searches.

| Remaining category | Disposition |
|---|---|
| 1,073 untouched cells | Executable discovery backlog; use original-language independent issuers and remaining indexed leads |
| 263 searched-unlinked lackingD2/D3 | Executable distinct second avenues; archive abstract does not authenticate institution or local role |
| 196 M source contexts | Historical metadata preserved; seek actual linked originals or correctly bounded replacement searches |
| 29 U contexts | 24access/redirect/interstitial failures;3Greenland institutional-role questions;1Argentine gout/CPPD content conflict;1Vanuatu BP-figure/condition match pending |
| 21 identity gaps | Authentic local charters/seats/lifecycle/condition scope or maintainer geographic exceptions needed; original primary evidence absent or incomplete in checked routes |
| Five original issue-country values | Named publication/translation custodians or dated original imprints needed; current host/operator alone insufficient |
| Clinical, methods, legal, rights, Indigenous governance | Independent specialist/human approval separate; zero auto-approved |

Continue with batches of actual independent-issuer follow-up for the81newD1candidates and original linked documents for the196Mrecords; prioritize easy university identity/author joins before new broad searches. Avoid repeating the29blocked originals without a genuinely new route. Rebuild a frozen index with `python3 docs/atlas/handoffs/team-b/tools/build_work_index.py /tmp/team-b-index.json HEAD origin/research/atlas-raw-intake-team-b`; no raw branch edits. Canonical metrics are in `data/consolidation_metrics.json`; any future reconciliation must then rerun affected validation and refresh its validation receipt/state.

**Reusable prompt:** Continue TeamB on PR#71, branch`research/atlas-team-b-20261104`. Read CURRENT.md and COMPLETION_CHECKPOINT_20261118.md; use the source/cell/identity worklists and81candidate checks. Finish independent issuer/original-document verification in large attributable batches, preserve evidence and safeguards, validate/commit/push TeamB-only, and keep the PR draft/unmerged with zero clinical approvals.
