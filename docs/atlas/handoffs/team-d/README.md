# Ancestry Health — Team D international health network atlas

**Current snapshot: 2026-11-05. See STATUS.md for authoritative current counts; the inventory below is the original 2026-11-04 baseline.**

Current additional work: all 53 WHO Europe and 47 WHO Africa region assignments verified. Current totals in STATUS.md.

Batch 1 added: 248 official UN M49 crosswalk records; one separately retained ISO seed exception; ten new SEARO region edges; ten independent office presence records. See BATCH_2026-11-05.md.

**Original research snapshot:** 2026-11-04 | **Status:** draft for maintainer and scientific review | **PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70

Team D maps **typed, source-linked, time-aware institutional relationships** among international and regional health organizations, formal member countries, scientific societies, and research/public-health initiatives. It does **not** decide clinical treatment, validate an individual study, or infer that countries automatically adopt an international clinical guideline. No public calculator or medical content has been changed.

## Committed data inventory

| File | Rows | Use |
|---|---:|---|
| `data/international_networks.csv` | 36 | WHO six regions, PAHO, Africa CDC/AU, EMA/ECDC, ASEAN, professional networks, condition-specific regional programs |
| `data/network_memberships.csv` | 114 | Dated formal memberships and explicitly typed agency/office/participation/affiliation relationships; includes 12 society-level links |
| `data/condition_networks.csv` | 20 | Program/guideline **institutional references** across all seven health keys; no independent clinical appraisal |
| `data/m49_network_status.csv` | 249 | **ISO numeric candidate** country/area statuses requiring reconciliation to official UN M49; **only three WHO regions individually verified** |
| `data/network_coverage_gaps.csv` | 20 | Specific pending verification tasks |
| `data/network_overlap_inventory.csv` | 14 | Demonstrated network overlaps, historical transitions and non-equivalent legal scopes |
| `PROVENANCE.csv` | 45 | Official source URLs, roles, checked dates, version caveats |

The seven condition keys are `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`.

## Human-readable deliverables

- `STATUS.md` — batch counts, validation, unverified geographic/WHO status and maintainer review gates.
- `METHOD.md` — source selection, temporal method, reproducibility and overlap analysis.
- `GRAPH_ONTOLOGY.md` — all typed relations, date semantics, namespace and cross-team join rules.
- `BOUNDARY_CASES.md` — 18 sourced negative and boundary cases.
- `GAPS.md` — incomplete coverage and safeguards.
- `CHANGELOG.md` — research batch history.
- `README.md` — this directory manifest.

## Interpreting geography and affiliations

Geographic code `m49:NNN` uses a zero-padded numeric country/area identifier for graph joins. The 249 geographic rows were seeded from ISO-3166 numeric candidates (pycountry v24.6.1); **they are not presented as an authenticated complete UN M49 list**. The official geographic universe to reconcile against is https://unstats.un.org/unsd/methodology/m49/overview. Missing WHO region values are intentional unknowns. Do not infer WHO membership, office presence, WHO region, ASEAN affiliation, or PAHO status from continental location.

The 114 edges include historical and current country memberships, WHO administrative office relationships, programme operations, legal/institutional roles, a disease-specific ECDC surveillance network and professional-association links. Professional associations have provisional source-local IDs (`org:provisional:*`) for future alignment with Team B; their corresponding national governments have not been made members by inference.

**Temporal caveat:** An empty `valid_from` means unknown. An empty `valid_to` means no verified end date, *not* perpetual membership. `as_of` records the check date. Indonesia changed WHO region from SEARO to WPRO on 2025-05-23 while its UN statistical region remained South-eastern Asia; Algeria is WHO AFRO despite UN Northern Africa. The United States' WHO constitutional/governance status must be kept separate from formal PAHO membership.

## Review gates

Keep this PR in draft. Reconcile the 249 geographic candidate codes with official UN M49, establish WHO region, governance and country-office presence independently, verify cross-border regional programme rosters and national regulator jurisdiction, link Team A/B/C identifiers with match provenance, and independently appraise guideline evidence before any public health tool changes. See the 20 recorded coverage gaps.

The authoritative individual-source citations and checked dates are in `PROVENANCE.csv` and each machine-readable relationship row.
