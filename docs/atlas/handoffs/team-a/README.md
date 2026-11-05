# Team A — Government and statutory health-authority atlas

**Assignment:** [Team A prompt](../../research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md)  
**Research branch:** `research/atlas-team-a-20261104`  
**Draft pull request:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Snapshot:** 2026-11-04

Team A maintains a geography-keyed atlas of **government** institutions with legal or delegated public-health competence. It is for research, not medical diagnosis, guidance or personal risk estimation. No clinical formulas or patient-facing code are altered.

## Durable files

- `data/countries.csv`: **248 UN M49 countries/areas** represented, including territories and Antarctica; M49 identifiers retained with leading zeroes. **34** source-backed ministry/competent health departments; **214** unknowns.
- `data/government_health_bodies.csv`: **55** distinct government organizations with original-script name (when checked), English translation, body type, jurisdiction, mandate summary, source language, government URL, checked date and verification state.
- `data/authority_relationships.csv`: **14** government-source-verified intra-government structural/listed subordinate relationships; independent external parent-area delegation not asserted without evidence.
- `data/country_coverage.csv`: **248** per-area research coverage statuses, missing government site flags and complex-jurisdiction review markers.
- `PROVENANCE.csv`: **52** per-source records including UN, secondary geography transcription, ministries and statutory agency sources.
- `STATUS.md`: current counts and next M49-ordered research batch.
- `GAPS.md`: queue of contested, devolved and special jurisdictions and unresolved authorities.
- `CHANGELOG.md`: commit-by-commit logical batch history.
- `validate.py`: self-contained offline checks to help next researcher test coverage, links and M49 integrity.

## Canonical geography and limitations

Use the [United Nations Statistics Division's M49 overview](https://unstats.un.org/unsd/methodology/m49/overview/) as the sole canonical geography. The initial staging file used a traced secondary [datasets/country-codes transcription](https://github.com/datasets/country-codes/blob/main/data/country-codes.csv), filtered to the **248** rows on the official UN table. The mirror also contains code 158 that is not in this UN table; its exclusion is a *geographical data contract decision, not a political statement*. Official per-row M49/ISO/name/region reconciliation is **outstanding**; an equal count alone does not certify it. UN lists Antarctica without an assigned region.

A resolved area identifies the main current national or territorially competent health ministry/department on its own government page, but does **not** certify all statutory responsibilities, officials, regulators, health institutes or devolved legal authorities. `UNKNOWN_REVIEW_NEEDED` means unresearched or unresolved, not no ministry. `status=M49_AREA_GOVERNANCE_NOT_REVIEWED` intentionally avoids guessed constitutional classifications. The `source_url` of an unresolved country row is geographical, not health ministry evidence.

A body with an empty original-language name must explicitly say `LOCAL_NAME_PENDING` or `LOCAL_NAMES_PENDING` in verification state; an English official translation is not a substitute for an unverified local-script official name. A WHO country field office is not a domestic health authority.

## Updating the census

1. Take the next 20–40 areas in ascending M49 order or alphabetical order; commit regularly to this branch / PR.
2. Confirm each authority against the national/territorial government's own-language current ministry page and a role/mandate page. Track institutional renames with effective dates.
3. Require *two independent official sources*, one preferably a statute or gazette, for disputed/delegated areas or significant renames. Do not infer a parent M49 link from political geography.
4. Put regulator, public-health institute, government-owned biomedical institute and health-data units into **separate rows**; cite relationship evidence before adding graph edges.
5. Update `PROVENANCE.csv`, `data/country_coverage.csv`, `STATUS.md`, `GAPS.md` and `CHANGELOG.md` every batch.
6. Run the repository-local offline validator: `python docs/atlas/handoffs/team-a/validate.py`.
7. Do not update clinical recommendations, ancestry-picker IDs, patient data or the application while completing this research dataset. Do not merge without maintainer approval.
