# Team D — Research status

**Checked:** 2026-11-04  
**GitHub branch:** `research/atlas-team-d-20261104`  
**Draft PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70  
**Status:** substantive sourced draft; **not** approved for clinical deployment, main merge or geographic completeness claims.

## Committed snapshot

| Artifact | Exact data rows |
|---|---:|
| International/regional network nodes | **36** |
| Typed network/membership edges | **114** |
| Condition program/guideline references | **20** |
| ISO numeric geographic **candidate** statuses | **249** |
| Network coverage gaps | **20** |
| Network overlap comparisons | **14** |
| Distinct source provenance URLs | **45** |
| Human-readable sourced boundary cases | **18** |

All six WHO regional offices represented. All seven current condition keys represented. Includes 35 documented PAHO member states, 11 ASEAN member-state edges (dated), a distinct EU-IBD 30-country disease-specific ECDC surveillance roster, historical Indonesia SEARO end and WPRO entry 2025-05-23, and 12 professional-society-level association links with *provisional* source-local IDs for Team B reconciliation. Some of these groups overlap within the **114 total** edges; do not sum subgroup counts as independent totals.

## Source and structural validation

Validated 2026-11-04 against committed branch data: all seven condition keys present; zero missing referenced network IDs; zero unmatched M49 codes *within this candidate index*; zero missing edge source URLs from the 45-entry provenance ledger; zero duplicate composite edge keys; zero condition records pointing to unknown network IDs. Source list and ontology are in `PROVENANCE.csv` / `GRAPH_ONTOLOGY.md`. This does not guarantee external website uptime or complete regulatory/clinical coverage.

## Geographic and governance limitations

**Only 3 of the 249 geographic candidate rows have individually substantiated WHO region values:** Algeria = AFRO, Indonesia = WPRO (from 2025-05-23), Timor-Leste = SEARO. **246 WHO regions are deliberately left blank pending country-by-country verification.** The 249 rows derive from ISO 3166 numeric candidates and still must be reconciled with the official UN M49 country/area population. WHO region, constitutional membership, country office presence, UN statistical geography and health programme participation are separate axes.

WHO's US withdrawal notice with 2026-01-22 stated effective date has an unresolved governing-body consideration issue; `m49:840` is marked governance-pending rather than assigned a final WHO membership conclusion. PAHO lists the US as its own Member State, a distinct institutional relation. No geography-to-membership or legal effect has been imputed.

## Scientific safeguards and next integration tasks

- Independently validate all national medical agency/regulator scopes, especially EMA/ECDC/EU versus EEA relations.
- Complete official WHO country/area M49 regional assignment and independent office-presence fields. Ensure network coverage tables express historical membership changes and nonstate territories.
- Resolve Africa CDC programmes, Pacific and Middle East multicountry participant lists, regional professional memberships and individual country HEARTS guideline versions.
- Match provisional source-local national society IDs to Team B, and join ministries (Team A) and journals (Team C) only with explicit canonical identifiers; don't import their research into Team D.
- Route condition studies and national clinical advice to independent scientific appraisal, not directly to an ancestry-driven medical rule engine.

**Review required before merge.** No issues closed, no changes to `main`, and no changes to the public calculator, diagnostic content or patient-facing advice.
