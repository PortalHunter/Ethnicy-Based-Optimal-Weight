# Team D — latest checkpoint after Batch 8 (2026-11-05)

Branch `research/atlas-team-d-20261104`; draft PR #70 open and unmerged at verified startup. **New data:** 21 individually checked WHO Country Office entries whose latest official office-head survey is April 2026, spanning all five non-SEARO WHO regions. The separate current office-presence table now has **31 positive attestations**; the survey-audit table has **21 rows**; provenance now has **113 URLs**. The 2023 WHO report remains historical (228 service records). No region/graph/membership change: 45 nodes, 542 typed edges, 205 verified WHO regions, 44 unresolved, 20 seven-key institutional references. **218/249** candidate areas have no affirmative *current* office presence record; no negative absence is implied. See BATCH_2026-11-05.md for source and limitations.

# Team D — Research status

Checked: 2026-11-05. Branch: `research/atlas-team-d-20261104`. Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

## Current checkpoint after Batch 7

Batch 7 data commit: `a757ec3979d3bce2449e5e9cd6be4c60c8fb6561`. Follow-up handoff repair commit: `4869b0486541a5b9f45679cc9ee7ffd0f46da31a` (restored the prior batch narrative and retained Batch 7). At this checkpoint PR #70 is open, draft and unmerged. Re-fetch branch head at the beginning of the next session; any subsequent handoff commit supersedes these SHAs.

| Artifact | Rows |
|---|---:|
| Network nodes | 45 |
| Typed relationships | 542 |
| Condition institutional references | 20 |
| Retained ISO candidate status rows | 249 |
| Official UN M49 crosswalk | 248 |
| ISO seed exceptions | 1 |
| Verified WHO region statuses | 205 |
| WHO region statuses not_verified | 44 |
| WHO unresolved review queue | 44 |
| Current WHO office-presence attestations | 10 |
| WHO 2023 report Annex 2 location labels | 154 |
| WHO MCO coverage labels / unique M49 edges | 42 / 40 |
| WHO regional focal-point labels / edges | 32 / 32 |
| Individual WHO metadata audit records | 56 |
| WPRO original-label name matches | 38 |
| Coverage gap tasks | 20 |
| Overlap comparisons | 14 |
| Provenance URLs | 112 |
| Sourced boundary cases | 30 |

## Completed in this continuation

Added 94 verified region statuses and 94 region edges: 37 WPRO (Indonesia rechecked), 22 EMRO country/area assignments and 35 AMRO country profiles. All six regions have source-backed country/area records: AFRO 47; AMRO 35; EMRO 22; EURO 53; SEARO 10; WPRO 38. Their sum is 205 status records, not a constitutional membership count.

Metadata audit records cover 21 EMRO plus 35 AMRO individual profiles. WPRO source labels preserve ten explicit aliases among 38 name matches. US and its territories' regional metadata does not settle WHO constitutional governance; State of Palestine UN code 275 and WHO occupied Palestinian territory operational label are linked without treating those labels as a constitutional finding.

44 retained candidate areas remain in an explicit review queue, including the separate ISO seed exception 158. Canonical UN crosswalk remains 248, not 249. Current individually attested office-presence rows remain ten SEARO countries. A new historical WHO report dataset adds 154 Annex 2 office-location records (153 M49-coded and one Kosovo row without an M49 join), 42 multi-country-office coverage relationships, and 32 regional-office focal-point relationships. These 2021–2022 report-period relationships do not establish current 2026 office status; 239 other seed areas still require current office-presence review.

## Validation and next priorities

`node docs/atlas/handoffs/team-d/validate.mjs` passes structural/reference/source checks on current local datasets. GitHub readback is independently verified before the final report. These are dataset checks, not an assertion of GitHub Actions or clinical evidence approval.

Next: source the 44 unresolved area assignments independently; distinguish multi-country office service from physical presence; verify current governance evidence, regulator scope, programme rosters and society identity joins. Main EMRO roster endpoints fail but individual WHO metadata supplied the present batch. WHO CPCD also has stale Indonesia assignment; no rows promoted from that stale source.

Full source/retrieval audit: BATCH_2026-11-05.md. Fresh standalone continuation: [CONTINUATION_PROMPT.md](CONTINUATION_PROMPT.md). PR stays draft; no main, calculator or personalized clinical changes.


## Batch 7 — WHO country presence, historical service relationships

Source: WHO, *WHO presence in countries, territories and areas: 2023 report*, Annexes 2–4 (report period January 2021–December 2022). Added 228 auditable source rows: 154 Annex 2 office-location labels (153 M49-indexed plus Kosovo without a retained M49 join), 42 Annex 3 multi-country-office coverage relations and 32 Annex 4 regional-office focal-point relations. Added nine office nodes and 225 typed edges. Cyprus’s January 2023 establishment and Israel’s pending host-agreement note are preserved. These historical findings are not current office-presence assertions.

## Next priorities

1. Review the 44 WHO region queue records individually; do not infer from parent geography.
2. Current WHO office presence as of 2026 remains unresolved for 239 candidate areas; distinguish single-country office, physical country-programme specialist under an MCO, liaison office and focal-point coverage.
3. Verify time-specific legal remits and rosters for Africa CDC/AU, ASEAN, EMRN and condition networks; coordinate explicit identity joins with other teams.
4. Preserve open governance questions and stale-source conflicts.
