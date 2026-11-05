# Team C — Local medical journals and regional-language research

Date: 2026-11-04. Research-only handoff for Ancestry Health; related issues [#64](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64), [#66](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66), [#27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27).

## Principles
- Publisher country / place of study / clinical jurisdiction / participants' identities / genetically tested variants are distinct, never interchangeable.
- Journal presence, index membership, publication language and impact factor **do not validate** an article's medical findings.
- All article candidates are **unappraised**; no changes to the live calculator or personal medical advice.
- Blank values mean not independently established, not false; pending countries are **not searched**, not zero local research.

## Data files
- `data/indexes.csv`: source-verified discovery platforms and stated mandates.
- `data/journals.csv`: publishers, language, journal-level quality evidence and verification.
- `data/journal_index_relationships.csv`: index assertions separately verified when possible.
- `data/article_candidates.csv`: exact original-language paper candidates, unappraised by default.
- `data/coverage_by_area_condition.csv`: UN M49 baseline with separate discovery and condition search state.
- `data/local_language_searches.csv`: exact performed queries; never invent search activity.
- `PROVENANCE.csv`: evidence audit trail; `STATUS.md`, `GAPS.md`, `CHANGELOG.md` track milestones.

## Research method
Start with WHO's five regional Indexes Medici, AJOL, LILACS, SciELO, DOAJ and national publication platforms. Validate journal identity and claims from primary journal/publisher records; preserve missing ISSNs/policies as unknown. Cross-check regional index membership on each index's own journal record; do not rely on a journal's self-claim. Separate editorial integrity from independent appraisal of each medical study. Preserve only links and metadata, not copyrighted articles.

## Geography baseline
The `areas_m49.csv` and `coverage_by_area_condition.csv` baseline uses the [UNSD M49 authoritative overview](https://unstats.un.org/unsd/methodology/m49/overview) as the governing reference and the [lukes ISO/M49-coded JSON](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.json) as an efficient parsed intermediate. Its 249 ISO entries include Taiwan (158), which UNSD's M49 FAQ treats as part of China for the standard list and permits separately for statistical purposes; the **248 standard-list rows** exclude Taiwan (158). No sovereignty statement is intended. Source names/region assignments remain marked pending a complete fieldwise reconciliation with the official UNSD table. Antarctica has no UN continental region in that intermediary; do not assign one speculatively.

All 248 areas × seven condition keys = **1,736 explicit rows** initially marked `not_searched`. A row is a queue item, NOT a completed literature search or evidence-of-absence finding. Non-sovereign territories and remote areas remain represented. Optional extended code 158 could be tracked in a separate future supplement but is not silently inserted into the standard master.

## Representative journal/article batch
`journals.csv` includes both **verified-identity** and clearly labeled **provisional** journals. `journal_index_relationships.csv` records direct hosting/index evidence, not assumed publisher claims. `article_candidates.csv` identifies primary paper URLs and typology (cohort, cross-sectional, review, guideline, labeling audit) with seven-condition search keys; no paper has been independently appraised or authorized as medical advice. Consult `COUNTEREXAMPLES.md` for evidence-linked English-only/prestige-filter discovery limitations.

## National discovery platforms
ThaiJO (Thailand), DergiPark (Türkiye) and Magiran (Iran) are separately recorded as **hosting/index/aggregation platforms** with source provenance. They are not equivalent to PubMed, nor is platform inclusion an article-level credibility endorsement. Iranian source `A_IR_DIA_01` has a traceable Persian record with no DOI shown by the catalog; a missing displayed DOI must not be interpreted as proved DOI absence.

The Chilean ARS MEDICA record has its journal-specific 2026 official website and editorial policy (separate from the original paper on SciELO Chile). Spanish REED has a society and NLM verified official website, though direct automated access returned HTTP 403; peer review and ownership were checked against SEPD and NLM records. Journal website access barriers are flagged rather than silently replaced with an article URL.
