# Team D — Research status

Checked: 2026-11-05. Branch: `research/atlas-team-d-20261104`. Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

## Current checkpoint after batches 4–6

Last substantive research commit: `6f1573cd64fa1343ab84a4a0a358b662f1736f63`. Earlier new batches: WPRO `b532c3f1da839e6adb9e18798e42152cb86b75ca`; EMRO `76e566dc189882934af3231ffd1f313ce36a3c5d`. This subsequent handoff commit records final source-conflict audit and continuation. Independently retrieve branch head for the handoff's own SHA.

| Artifact | Rows |
|---|---:|
| Network nodes | 36 |
| Typed relationships | 317 |
| Condition institutional references | 20 |
| Retained ISO candidate status rows | 249 |
| Official UN M49 crosswalk | 248 |
| ISO seed exceptions | 1 |
| Verified WHO region statuses | 205 |
| WHO region statuses not_verified | 44 |
| WHO unresolved review queue | 44 |
| Explicit WHO office-presence records | 10 |
| Individual WHO metadata audit records | 56 |
| WPRO original-label name matches | 38 |
| Coverage gap tasks | 20 |
| Overlap comparisons | 14 |
| Provenance URLs | 111 |
| Sourced boundary cases | 28 |

## Completed in this continuation

Added 94 verified region statuses and 94 region edges: 37 WPRO (Indonesia rechecked), 22 EMRO country/area assignments and 35 AMRO country profiles. All six regions have source-backed country/area records: AFRO 47; AMRO 35; EMRO 22; EURO 53; SEARO 10; WPRO 38. Their sum is 205 status records, not a constitutional membership count.

Metadata audit records cover 21 EMRO plus 35 AMRO individual profiles. WPRO source labels preserve ten explicit aliases among 38 name matches. US and its territories' regional metadata does not settle WHO constitutional governance; State of Palestine UN code 275 and WHO occupied Palestinian territory operational label are linked without treating those labels as a constitutional finding.

44 retained candidate areas remain in an explicit review queue, including the separate ISO seed exception 158. Canonical UN crosswalk remains 248, not 249. Office presence remains separately verified only for ten SEARO countries; other 239 seed areas require office review.

## Validation and next priorities

`node docs/atlas/handoffs/team-d/validate.mjs` passes structural/reference/source checks on current local datasets. GitHub readback is independently verified before the final report. These are dataset checks, not an assertion of GitHub Actions or clinical evidence approval.

Next: source the 44 unresolved area assignments independently; distinguish multi-country office service from physical presence; verify current governance evidence, regulator scope, programme rosters and society identity joins. Main EMRO roster endpoints fail but individual WHO metadata supplied the present batch. WHO CPCD also has stale Indonesia assignment; no rows promoted from that stale source.

Full source/retrieval audit: BATCH_2026-11-05.md. Fresh standalone continuation: [CONTINUATION_PROMPT.md](CONTINUATION_PROMPT.md). PR stays draft; no main, calculator or personalized clinical changes.
