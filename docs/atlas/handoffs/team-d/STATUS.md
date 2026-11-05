# Team D — Research status

Checked: 2026-11-05. Branch: `research/atlas-team-d-20261104`. Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

## Current batch 2 checkpoint

Baseline saved commit: `5d687ba9d0633354bc5e10d878a76f6e53c2cb28`. This file and the datasets are committed atomically; use the latest branch commit containing this file as the exact batch checkpoint.

| Artifact | Rows |
|---|---:|
| Network nodes | 36 |
| Typed relationships | 177 |
| Condition institutional references | 20 |
| Retained ISO candidate status rows | 249 |
| Official UN M49 crosswalk | 248 |
| ISO seed exceptions | 1 |
| Individually verified WHO region statuses | 65 |
| WHO region statuses not_verified | 184 |
| Explicit WHO office presence records | 10 |
| Coverage gaps | 20 |
| Overlap comparisons | 14 |
| Provenance URLs | 50 |

Completed: all six WHO regional nodes; seven condition keys; prior 114 edges plus ten SEARO and 53 EURO assignment edges; full UN overview geographic code reconciliation. All 248 UN roster codes match the seed; code 158 is retained separately as an ISO-only candidate exception. See BATCH_2026-11-05.md.

Next: verify remaining WHO regions from current official rosters, including territorial status; expand office presence independently; resolve US governance only with new primary evidence; national medicines agency remits and programme participation; explicit Team B identity joins.

No claim of complete WHO coverage, legal authority, clinical validation or approval to merge. PR remains draft.
