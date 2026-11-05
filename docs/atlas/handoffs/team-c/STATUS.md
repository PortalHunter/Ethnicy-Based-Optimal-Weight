# Team C status — 2026-11-05

**Five prior durable data commits plus batches 6–7 continuation; draft PR #69. Research-only, not clinically appraised or deployed.**

| Metric | Exact count | Interpretation |
|---|---:|---|
| International and national research discovery platforms | 13 | Includes regional WHO sources and national hosting/aggregation portals, distinct from clinical endorsements |
| UN M49 standard-list country/area entries | 248 | Derived code baseline; 7 Northern African rows fieldwise verified; remaining 241 pending |
| Country/area × 7-condition queue rows | 1,736 | All `not_searched` **for a complete area-specific literature audit**; selectively discovered article sources tracked separately |
| Journal and archival records | 23 across 17 publisher areas | Entries have verification-state tiers; some publisher/editorial fields pending |
| Hosting or directly verified index relationships | 14 | Host != publisher != clinical evidence endorsement |
| Exact article candidates | 11 | **All unappraised**; seven condition keys represented, different study designs; at least one source displays no DOI |
| Recorded executed queries | 35 | Includes original-language search queries, positive/negative results |
| Visibility counterexamples | 13 | Illustrate restrictive title-language/prestige-only failures; do not establish absence from PubMed |
| Provenance ledger rows | 60 | Sources and checking states |

**Remaining:** Full official-UN field-by-field reconciliation; systematic country-by-condition article discovery for every area; full journal ethics/peer-review review (including Cuban/Iranian provisional journal sources); genuine DOI-less confirmation where metadata lacks DOI; actual-index membership validation and full clinical appraisal. The 1,736 unsearched rows deliberately do not claim no research exists. No live medical app changes or main merge.

## Batch 6 checkpoint
Parent: `d86444069580fb754d35abe318757918ad1c8732`; existing branch `research/atlas-team-c-20261104-local-journals-1851`, draft PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/69. The batch 6 commit is the commit containing this status (resolve via GitHub commit history; a commit cannot contain its own SHA).
Two journal records improved; zero new journals/articles; 5 new provenance entries; 4 executed queries. All 11 candidates stay unappraised; all 1,736 systematic search queue rows unchanged. Validation: CSV widths, unique scoped IDs, geographic/journal/index foreign keys, seven condition keys and queue cardinality checked; see VALIDATION.md and validate.mjs. No main or application changes.
Next: official UNSD fieldwise reconciliation; Iranian/Cuban primary policies; Mali publisher and correction policies; country-by-condition local-language discovery, without duplicating completed source checks.

## Batch 7 checkpoint
Verified parent: bd4fc6ef95e8b2f70dc4058fdd2727eed3c0008d. This batch's SHA is the commit containing this section, independently resolvable from branch history.
- Seven Northern African area records matched official UNSD code, name, ISO2/3, region, subregion and empty intermediate-region fields with zero differences. Verification states/dates updated; source audit file added. Remaining 241 rows retain derived/pending status. Systematic search queue untouched.
- One existing journal record (CUB_RCE) improved with registry identity/publisher provenance; current editorial policies and current issue remain unverified. Explicit print-ISSN conflict between Latindex note and registry; no guessed print-field fill.
- Three provenance entries, six queries added. Totals 60 and 35. Article candidates remain 11, all unappraised; journal count remains 23.
- Structural validation PASS in JavaScript against complete proposed dataset; no Node/Actions execution success asserted. All changed files to be independently fetched after branch write.
Next: geographic field audit of the 241 remaining rows in bounded regional batches; Iranian and Cuban primary policies; Mali publisher/corrections; source-linked country-condition discovery. No live calculator, main or clinical recommendations changed.

## Batch 8 — complete geographic reconciliation
All 248 main-list areas now matched by code against the official UNSD English table (2026-11-05): name, ISO2/3, region, subregion and intermediate region. Twenty-one names aligned; no ISO or regional-field differences. All 1,736 queue-row geography labels synchronized. Source checksum and per-row deltas recorded. This is geographic completion only: country-specific journal and seven-condition searches remain pending. Provenance total 61. Local Node validator PASS (248 geographic audits), superseding the earlier orchestration-only execution limitation. Parent f8f6ecf84b5b1e6d9095aea9dc77dd4febedca0e. Next: all-area bounded discovery pass and remaining journal-policy/source-provenance gaps.
