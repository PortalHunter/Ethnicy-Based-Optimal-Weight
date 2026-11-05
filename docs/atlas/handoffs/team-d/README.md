# Team D — International health relationship atlas (research handoff)

**Status:** active draft research; not clinically validated; **checked:** 2026-11-04.

This directory owns **cross-border network entities and typed, time-aware institutional relationships** only. It does not replace Team A ministries, Team B clinical societies, Team C journals, or health evidence appraisal. It does not imply that a Member State automatically adopts a network guideline or that an institutional relationship establishes clinical efficacy.

## Tables

- `data/international_networks.csv`: network nodes and original-name/authority metadata.
- `data/network_memberships.csv`: typed directional edges, with M49, dates, sources, verification state.
- `data/condition_networks.csv`: separately sourced condition programs, **not** findings or patient advice (added in subsequent batches).
- `data/m49_network_status.csv`: geographic crosswalk with explicit unknowns (added in subsequent batches).
- `data/network_coverage_gaps.csv`: follow-up queue (added in subsequent batches).
- `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md`, `GRAPH_ONTOLOGY.md` are maintained across batches.

## Interpretive rules

`member_of` = formal membership; `WHO_region` = WHO assignment; `regional_office_of` = WHO administrative subordination; `serves_as` = organizational dual role; `specialized_health_agency_of` = formal institutional role; `agency_of` = constitutional/administrative status; `coordinates_regulatory_network` = regulatory scientific coordination; `participates_in` = network participation. These do **not** imply `regulates_medicines_in`, local clinical guideline uptake, funding, study validity, or patient-level claims.

Country node IDs use `m49:NNN`, preserving leading zeros. Dates are ISO 8601 when established; blank `valid_from` means unknown, not the beginning of time; blank `valid_to` means no verified endpoint as of check, not perpetual membership. `VERIFIED_PRIMARY` is restricted to claims explicitly supported by the linked institution. `PENDING_VERIFICATION` is required for unsupported geography-to-membership assumptions.

Reference geographic universe: https://unstats.un.org/unsd/methodology/m49/overview .
