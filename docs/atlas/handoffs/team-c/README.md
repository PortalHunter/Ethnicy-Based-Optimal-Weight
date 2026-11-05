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
