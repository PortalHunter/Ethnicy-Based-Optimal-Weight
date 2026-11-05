# Team C status — 2026-11-05

**Five prior durable data commits plus batch 6 continuation; draft PR #69. Research-only, not clinically appraised or deployed.**

| Metric | Exact count | Interpretation |
|---|---:|---|
| International and national research discovery platforms | 13 | Includes regional WHO sources and national hosting/aggregation portals, distinct from clinical endorsements |
| UN M49 standard-list country/area entries | 248 | Derived code baseline; fieldwise official UNSD table reconciliation pending |
| Country/area × 7-condition queue rows | 1,736 | All `not_searched` **for a complete area-specific literature audit**; selectively discovered article sources tracked separately |
| Journal and archival records | 23 across 17 publisher areas | Entries have verification-state tiers; some publisher/editorial fields pending |
| Hosting or directly verified index relationships | 14 | Host != publisher != clinical evidence endorsement |
| Exact article candidates | 11 | **All unappraised**; seven condition keys represented, different study designs; at least one source displays no DOI |
| Recorded executed queries | 29 | Includes original-language search queries, positive/negative results |
| Visibility counterexamples | 13 | Illustrate restrictive title-language/prestige-only failures; do not establish absence from PubMed |
| Provenance ledger rows | 57 | Sources and checking states |

**Remaining:** Full official-UN field-by-field reconciliation; systematic country-by-condition article discovery for every area; full journal ethics/peer-review review (including Cuban/Iranian provisional journal sources); genuine DOI-less confirmation where metadata lacks DOI; actual-index membership validation and full clinical appraisal. The 1,736 unsearched rows deliberately do not claim no research exists. No live medical app changes or main merge.

## Batch 6 checkpoint
Parent: `d86444069580fb754d35abe318757918ad1c8732`; existing branch `research/atlas-team-c-20261104-local-journals-1851`, draft PR https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/69. The batch 6 commit is the commit containing this status (resolve via GitHub commit history; a commit cannot contain its own SHA).
Two journal records improved; zero new journals/articles; 5 new provenance entries; 4 executed queries. All 11 candidates stay unappraised; all 1,736 systematic search queue rows unchanged. Validation: CSV widths, unique scoped IDs, geographic/journal/index foreign keys, seven condition keys and queue cardinality checked; see VALIDATION.md and validate.mjs. No main or application changes.
Next: official UNSD fieldwise reconciliation; Iranian/Cuban primary policies; Mali publisher and correction policies; country-by-condition local-language discovery, without duplicating completed source checks.
