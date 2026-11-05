# Shared atlas data contract

This is an **intake contract** for research handoffs. The integration team's approved canonical schema may add fields; do not discard source provenance or silently convert missing fields into confirmed negative findings.

## Geographic identifiers
- `m49_code`: canonical three-character string, preserving leading zeros (e.g. `004`). Do not use a numeric spreadsheet cell that drops leading zeros.
- `iso_alpha2` and `iso_alpha3`: when formally assigned; don't invent. Some geographic areas may require a documented exception.
- `un_region`, `un_subregion`: UN [M49](https://unstats.un.org/unsd/methodology/m49/overview) statistical grouping; not political recognition.
- `who_region`: WHO administrative assignment, with source and effective date; keep distinct from geographic assignment.
- `authority_jurisdiction` is the exact area/areas legally or professionally served, not the population whose genetic ancestry is assumed.

## Stable identity and provenance
- `record_id`: persistent scoped identifier, never reused. Suggested prefixes: `AUTH-` national/territorial government authority, `ORG-` non-government clinical society or research body, `JNL-` journal, `IDX-` index, `NET-` international body, `EDGE-` relationship.
- `official_name_local`, `english_name` (if an official English name is unavailable, explicitly state `translated_by_reviewer`), `entity_type`, `country_area_m49`, `official_url`, `status`, `last_verified_utc`, `source_url`, `source_title`, `source_language`, `review_notes` are minimum metadata for entity findings.
- Network edges require `from_id`, `to_id`, `edge_type`, `source_url`, `valid_from`, `valid_to` (or `unknown`), `verification_status`; `member_of`, `covered_by`, `collaborates_with`, `regulates`, `published_in`, `indexed_by`, `authored_by` are *not* interchangeable.
- Journals: include `issn`/`eissn` when genuine, publisher, languages, indexing claims independently verified, editorial/peer-review policy, correction policy, open-access/paywall condition, and sampled article URLs. Lack of PubMed indexing is **not** a quality failure.
- Claim candidates: `claim_id` or `provisional_id`, `condition_key`, `source_url`, `source_design`, `study_population`, `study_location`, `endpoint`, `effect_and_uncertainty`, `confounders`, `limitation`, `relevant_ancestry_picker_key` (if applicable), `claim_issue_url`, `review_state`. A future claim ID cannot be treated as assigned without a real associated review issue.

## Review states
For authority identity: `OFFICIAL_PRIMARY_VERIFIED`, `SECONDARY_CORROBORATED`, `IDENTITY_UNCONFIRMED`, `DELEGATED_TO_PARENT`, `NOT_APPLICABLE`, `UNKNOWN_REVIEW_NEEDED`, `SUPERSEDED`.

For claim-level appraisal: `CANDIDATE_UNVERIFIED`, `SOURCE_VERIFIED`, `QUALIFIED`, `CONTRADICTED`, `WITHHELD`, `APPROVED_EDUCATIONAL`. None but the explicitly approved last state is publishable; even this cannot authorize diagnosis, treatment or calculation changes.

For data uncertainty: use actual explicit `unknown`, `not_found_yet`, `not_applicable`, `not_verified`—never turn unknown into a blank silently interpreted as absent.

## Handoff paths
Each team writes **only** inside `docs/atlas/handoffs/team-a/` through `team-e/`. At minimum:
- `README.md`: assignment, method, scope and restrictions
- `STATUS.md`: coverage table and last saved batch commit(s)
- `PROVENANCE.csv`: cite provenance per source and accessed date
- `data/*.csv` (and optional JSON): normalized collected records with stable IDs
- `GAPS.md`: absent authority, disputed relationship, inaccessible site, translation uncertainty, and open research questions
- `CHANGELOG.md`: committed batches and corrections

If a URL is ambiguous, mark the row `IDENTITY_UNCONFIRMED`. If copyright prevents copying text, cite a link and use a short paraphrase, not a pasted paper.

## Delivery checks
- Unique stable IDs; valid M49 references; 100% *geographic row* coverage for Team A even where authority identity is unknown.
- True read-only, cite-linked content; dates and original language preserved; no guessed affiliations, country-wide generalization from local studies, or merged Latin America/Asia/Africa biology assumptions.
- Re-run structural checks at each batch; give at least 10 targeted negative/boundary examples where applicable.
- Every contribution has an explicit change history, issue/PR URL and verifiable commit ID. **If there is no verifiable durable link, it is not a completed handoff.**
