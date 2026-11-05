# Batch 6 validation — 2026-11-05

PASS: all eight CSV widths; unique journal/index/article/search/provenance IDs; journal and study M49 references; article journal references; relationship journal/index references; seven condition keys; 248 areas and 1,736 unique area×condition queue entries. All 11 articles remain unappraised; all queue entries remain not_searched. Counts: 23 journals, 13 platforms, 14 relationships, 11 articles, 29 queries, 57 provenance rows.

Validator logic executed against committed-parent data plus proposed batch in JavaScript orchestration. Local shell execution was unavailable because the attempted transfer exceeded process argument length; no claim of local Node or GitHub Actions success. `validate.mjs` is provided for repeatable Node checks.

Boundary checks: publisher≠study location; index≠endorsement; ISSN≠quality; policy existence≠enforcement; peer review≠clinical appraisal; 403≠no journal; 429≠missing registry record; unsuccessful Persian search≠no policy; ISSN-L≠independently fetched print record; no displayed DOI≠no DOI; local sample≠national ancestry; unsearched≠negative finding. These are interpretation checks, not clinical tests.

## Batch 7 — 2026-11-05
PASS: eight existing CSV structures and new geographic audit CSV; unique IDs; article/journal/index/geographic foreign keys; 1736 unique area×seven-condition pairs; all systematic queues remain not_searched; 11 candidates remain unappraised. Seven unique geographic audit rows match the updated area master fieldwise. Totals 23 journals, 13 indexes, 14 edges, 35 queries, 60 provenance, 248 areas. Zero geographic field discrepancies observed in the seven inspected Northern African rows; remaining 241 not certified. Original journal/article IDs retained.
Validator JavaScript executed in tool orchestration against proposed data and exact parent file content. No local Node or GitHub Actions result claimed. Source validity and scientific appraisal are not established by structural PASS. Ten-plus interpretation boundary examples above still apply; Directory vs Catalogue qualification and conflicting ISSN fields add two further boundaries.

## Batch 8
Local `node docs/atlas/handoffs/team-c/validate.mjs` PASS: 248 official geographic audits, eight other CSV datasets and 1,736 unique queue pairs. Geographic comparison: 21 name differences, no ISO/region differences. Official HTML SHA256 in P026; raw HTML is temporary, not committed copyrighted material. All 11 article candidates still unappraised; no new clinical claims.

## Batch10 final discovery verification
Actual local Node validation PASS:248 official geography audits;248 discovery-area rows;744 candidate-only leads;27 journals and policy assessments;15 unappraised papers and intake details;13 indexes;14 relationships;297 queries;329 provenance;1736 unique condition queue pairs. All systematic condition-search states remain not_searched. All17 intentionally invalid fixtures rejected (duplicate IDs, invalid geographies/references, false clinical approval, false systematic completion, missing source-query reference, implicit blank identifier and mismatched geographic label). PDFs inspected for bibliographic identity only; no full clinical appraisal claimed. Batch8 and9 changed files independently read back from GitHub; batch10 to be read back after write. No GitHub Actions result asserted.
