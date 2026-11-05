# Atlas Research Team B — clinical and biomedical organizations

Independent research handoff for [Ancestry Health](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight). Scope: **non-governmental professional societies, condition-specific associations, biomedical and Indigenous/community-controlled research organizations**. No changes to site guidance or formulas.

## Durable data contract

- `data/m49_area_codes.csv`: 248 UN M49 country/area identifiers; includes territories, uninhabited areas and special jurisdictions. Roster is an index, not a verification of organizations.
- `data/coverage_by_area_condition.csv`: **1736 rows** (248 areas × 7 current condition keys); `not_yet_researched` is the default, never `no_separate_body_found` without documented local searches.
- `data/specialist_organizations.csv`: original/English names and stable Team B IDs; source domain, local language and identity verification, not scientific approval.
- `data/condition_organizations.csv`: only observed original organizational publications, listings or educational pages; typed `authored` versus `hosts` versus `describes_external_guideline` relationships.
- `data/publication_context.csv`: explicit source home area, study-population state, and healthcare jurisdiction caveats. Not all publications are studies; unknown is not a guess.
- `data/subnational_and_indigenous_organizations.csv`: community-controlled research and jurisdiction distinctions; no proxy ancestry labels.
- `PROVENANCE.csv`: row-level URLs, source issuer, language, checked date and limits.
- `STATUS.md`, `GAPS.md`, `CHANGELOG.md`: restart state, caveats and history.

## Scientific boundary

This is an institutional **discovery index**, never a clinical endorsement. `official_site_identity_verified_governance_not_audited` means an official website established the institution's presence and stated scope; it is **not** a verification of study design, treatment, copyright reuse or legislative authority. The current conditions are `diabetes, hypertension, high_chol, gout, lactose, celiac, hemochromatosis`. Do not conflate FH with ordinary high LDL; urate with gout; lactase genotype with intolerance; HLA risk with celiac diagnosis; or ferritin with hereditary hemochromatosis.

M49 source: https://unstats.un.org/unsd/methodology/m49/overview. Current editorial date: 2026-11-04. Refer to atlas #64, claim appraisal #27, journal discovery #66, and team prompt under the separate handoff-prompts research branch. Nothing is approved for public clinical guidance.
