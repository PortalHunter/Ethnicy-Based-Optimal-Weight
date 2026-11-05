# Team D — Machine-readable validation record

**Performed:** 2026-11-04  
**Target:** `research/atlas-team-d-20261104` (draft PR #70). Checks were run by fetching each committed CSV from GitHub, parsing comma/quote semantics, then comparing IDs, relationship keys and source URLs.

## Final table counts

| File | Data rows |
|---|---:|
| `data/international_networks.csv` | 36 |
| `data/network_memberships.csv` | 114 |
| `data/condition_networks.csv` | 20 |
| `data/m49_network_status.csv` | 249 |
| `data/network_coverage_gaps.csv` | 20 |
| `data/network_overlap_inventory.csv` | 14 |
| `PROVENANCE.csv` | 45 |

## Automated referential checks

- All 7 shared condition keys appear: `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`.
- All condition network IDs resolve to a network node.
- Every `network_memberships.csv` relation endpoint resolves to a network node, zero-padded country-area candidate code, or explicitly provisional national-society organization ID.
- All country-area codes in membership edges appear in `m49_network_status.csv` (this checks **internal references only**, not official UN code eligibility).
- Every relationship's `source_url` is represented in `PROVENANCE.csv`.
- No repeated relation found using composite key `from_id | to_id | relationship_type | valid_from | as_of`.
- Zero known unresolved relationship rows: deliberately unknown country-level WHO region and governance states are captured in the status matrix/gap ledger rather than fabricated as network edges.

## Critical distinction

The 249 geographic entries are ISO numeric **candidate** codes, **not an authenticated UN M49 inventory**. Only 3 WHO region values have individualized primary-source confirmation, leaving 246 unverified region assignments. Structural consistency does not establish full geographic coverage, legal/regulatory jurisdiction, society membership completeness, guideline applicability or clinical accuracy. No health claims have been validated by these integrity tests.

## Review workflow

Open draft PR #70 for maintainer validation. Do not merge or consume the graph for personalized medical advice until source, temporal, regional, legal, and clinical validation have been completed. Source provenance: `PROVENANCE.csv`. Boundary cases: `BOUNDARY_CASES.md`. Outstanding gaps: `GAPS.md`.
