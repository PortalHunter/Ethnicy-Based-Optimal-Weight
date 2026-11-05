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

## Current substantive research progress (2026-11-04)

The draft branch contains **60** official-source-identified organizations across **33** country/area codes, including **one explicitly discontinued** Netherlands organization; **60** source-publication or evidence-resource links; **57** source-positive area-condition cells and **1,679** unresearched cells. The **1,736** total coverage rows reflect the 248×7 geographic skeleton, not full clinical organization verification. This distinction is essential for any future UI.

The Netherlands' **Nederlandse Diabetes Federatie** ceased activities on **2026-01-01** per its own website ([source](https://diabetesfederatie.nl/)). Its historic standard was not reassigned to a successor without an authorship audit. The 2026 Filipino diabetes practice guidance is **led by PCEDM, published/approved through DOH and developed with collaborator societies** ([source](https://doh-gabay.telehealth.ph/view_guideline.php?id=85)); a government-hosted page is not evidence of a government-operated medical society. Thailand's 2023 diabetes guideline similarly credits several professional and government issuers.

The most recent batch includes named gout, FH, celiac, hypertension, and iron-overload publications to prevent a diabetes-only atlas. **Research discovery is not equivalent to guideline scientific appraisal.** See `VALIDATION.md` and `GAPS.md` before reuse.

## Continuation update (2026-11-05)

The latest research includes the Africa/Caribbean batch 4. The current count (superseding the 2026-11-04 historical pilot above) is **71 organization identities in 44 M49 areas**, **67 indexed resource rows**, **64 source-positive cells**, and **1672 not-yet-researched cells**. See STATUS.md, VALIDATION.md and GAPS.md for institutional-identity-only records, government authorship distinctions and pending clinical review.

## Latest metrics as of 2026-11-05 (batch 5)

See latest appended STATUS.md: **84 organizations across 53 M49 areas; 74 source/resource entries; 70 linked source-positive cells; 1666 not-yet-researched area-condition cells**. Counts in older sections are historical. Original URLs and caveats are in PROVENANCE.csv and GAPS.md.
## Batch 6 — 2026-11-05: sparse-condition discovery and QA correction

Added 4 first-party organization identities (Germany DGE, Poland celiac association, Austria FHchol, UK BSH) and 4 resource relationships. Totals: **88 organizations in 54 areas, 78 resources, 73 source-positive cells, 1663 not-yet-researched cells, 168 provenance entries**. M49 skeleton remains 248×7 = 1736. No clinical claims approved.

Corrected pre-existing Samoa rows: narrative had occupied source_review_status and notes were blank; restored typed uncertainty status and notes in publication/provenance rows. Both MANUIA cells now specialist_research_only, reflecting one unreported programme.

Baseline: draft PR #71 HEAD f24f1bd4ba321b282511e956d3520cf732201f97. Batch checkpoint is the commit containing this section; fetch current HEAD for exact SHA. Next: non-sovereign areas and undercovered Africa/Asia; independently validate M49; audit guideline supersession and third-party-only identities.

## Latest checkpoint: Batch 7 (2026-11-05)

92 organizations / 58 M49 areas; 81 resources; 76 source-positive cells; 1660 unresearched; 175 provenance entries. These supersede earlier snapshots. Read STATUS.md and CONTINUE.md. Research remains incomplete; no clinical release approved.
