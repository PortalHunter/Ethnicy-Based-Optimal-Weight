# Batch 6 validation — 2026-11-05

PASS: all eight CSV widths; unique journal/index/article/search/provenance IDs; journal and study M49 references; article journal references; relationship journal/index references; seven condition keys; 248 areas and 1,736 unique area×condition queue entries. All 11 articles remain unappraised; all queue entries remain not_searched. Counts: 23 journals, 13 platforms, 14 relationships, 11 articles, 29 queries, 57 provenance rows.

Validator logic executed against committed-parent data plus proposed batch in JavaScript orchestration. Local shell execution was unavailable because the attempted transfer exceeded process argument length; no claim of local Node or GitHub Actions success. `validate.mjs` is provided for repeatable Node checks.

Boundary checks: publisher≠study location; index≠endorsement; ISSN≠quality; policy existence≠enforcement; peer review≠clinical appraisal; 403≠no journal; 429≠missing registry record; unsuccessful Persian search≠no policy; ISSN-L≠independently fetched print record; no displayed DOI≠no DOI; local sample≠national ancestry; unsearched≠negative finding. These are interpretation checks, not clinical tests.
