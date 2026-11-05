# Team B research status — 2026-11-05

## Historical batch 8 snapshot (superseded below)

**INCOMPLETE — active organization and resource discovery.** Geographic matrix is a skeleton, not a completed census. No clinical claims approved.

| Metric | Count |
|---|---:|
| M49 roster areas | 248 |
| Area × condition rows | 1736 |
| Organization identities | 112 |
| Areas with identities | 72 |
| Resource relationships | 95 |
| Source-positive cells | 89 |
| Explicit not_yet_researched cells | 1647 |
| Provenance records | 209 |
| Logged targeted searches (new ledger; historical searches not backfilled) | 20 |
| Community-specific organization records | 3 |
| Approved clinical claims | 0 |

Source-positive conditions: {"diabetes":40,"hypertension":12,"high_chol":6,"gout":4,"lactose":2,"celiac":22,"hemochromatosis":3}.

Batch 8: 20 organizations and 14 first-party education/resource indexes. Andorra, Croatia, Cyprus, Czechia, Denmark, Estonia, Greece, Iceland, Belgium (two distinct societies), Latvia, Luxembourg, Malta, Ireland, Austria, Finland, Germany, Hungary, Italy and Netherlands. Five directory-only entities have no resource cell credited; Hungary identity-only. Membership, licensor, funder, author, host and regulator remain distinct. See search_log.csv for all attempts.

Baseline saved/readback checkpoint: 7cb35aad01605ac74b4701b9c7c44e1ca00c103c (batch 7). Current batch checkpoint is the commit containing this file; resolve branch HEAD for exact SHA. PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/71 . Branch: research/atlas-team-b-20261104.

## Completion criteria and remaining work

The original assignment requires real per-area seven-stream discovery, explicit unresolved findings, source-backed identities/resources, original-language checks and valid joins. Neither a full matrix nor directory enumeration alone completes it. 176 areas still lack identities, 1647 condition cells remain without verified source resources. Global source completeness cannot be honestly certified while these remain unsearched.

Continue African/Asian and territory discovery, parallel seven-condition stream diversification through national sources, and documented negative/inaccessible searches. Prioritize lactose, gout, inherited FH and hereditary iron overload. Complete current UNSD machine-readable diff, source currency/authorship/rights/identity review and full live-link checks. Scientific claim appraisal remains separate under #27 and must not be conflated with discovery completion.

## Validation

validate.mjs core evaluated in orchestration runtime against all eight CSV tables: zero structural failures. Node CLI entry is provided for reproduction, not yet independently run in this session. Counts, keys, joins, metadata, URL syntax and source support checked. This is not a scientific or legal identity audit. Main and live calculator untouched. Historical batch snapshots are retained in Git history and CHANGELOG.md.

## Latest: Batch 9 — 2026-11-05

**132 organizations in 91 areas, 101 resources, 95 source-positive cells, 1641 unresearched cells, 236 provenance rows, 42 logged targeted searches, 3 community-specific records; zero clinical approvals.** Adds 20 identities and 6 first-party resources across Africa and South/Southeast Asia. Most directory-only identities still need original-publication discovery; association presence is not a completed condition search. Country-script legal names remain unverified for several English-source identities.

**UNSD roster check completed at current rendered-table level:** exact 248-code set, zero missing/extra codes. data/m49_verified_overview.csv saves the English official table's names/ISO/geographic fields. This is an independently extracted rendered-table snapshot, not a direct downloadable-export diff or WHO/jurisdiction audit. Old pending code-set statements are superseded at this level.

Batch 8 saved/read back: 1ad107d58d5017a0225a2180123232b25a385237. Latest checkpoint is commit containing this section. validate.mjs core checked all nine CSVs with zero errors; Node CLI not separately executed. Continue until original scope completed; still 157 areas without organization identities and 1641 condition cells without resources. Full global research remains incomplete.
