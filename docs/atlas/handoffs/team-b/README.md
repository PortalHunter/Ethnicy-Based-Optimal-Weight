# Team B specialist and patient-organization discovery

Team B indexes clinical societies, patient groups, university research units and community-controlled health bodies across 248 UN M49 areas and seven condition streams. The original assignment and shared data contract are on branch `research/atlas-five-team-handoff-prompts-2026-11-04`, under `docs/atlas/research-team-prompts/`.

**Current execution procedure:** [RUNBOOK.md](RUNBOOK.md) · [prioritized research queue](QUEUE.md). These take precedence over old repeated prompts preserved in the historical continuation log. Recompute live counts and show labeled progress bars **every run**, including runs with no net source discoveries.

Start with [CONTINUE.md](CONTINUE.md). [STATUS.md](STATUS.md) gives current coverage, [CHECKPOINT.json](CHECKPOINT.json) lists the remaining areas and [GAPS.md](GAPS.md) preserves source-specific limitations and 14 examples of unsafe population generalization. [CHANGELOG.md](CHANGELOG.md) and [VALIDATION.md](VALIDATION.md) record work and verification.

| File | Unit of observation |
|---|---|
| `data/specialist_organizations.csv` | One documented organization and its home M49 area. Legal status and evidence strength vary by record. |
| `data/condition_organizations.csv` | One organization, condition and exact resource URL, with the organization's role. Two organizations can point to one paper. |
| `data/publication_context.csv` | One row for the same organization, condition and URL. Includes the linked resource's issuer, country basis and provenance IDs, plus study population, healthcare jurisdiction and organization domicile. |
| `data/coverage_by_area_condition.csv` | One of the 248 × 7 cells. The count is the number of linked relationships for organizations based in that area. Pipe-separated search IDs refer to checks of that exact cell, even when they found nothing eligible. |
| `data/search_log.csv` | One dated search or navigation check with its outcome and limits. |
| `PROVENANCE.csv` | An identity, source, verification or attribution record. Read the record class and notes to interpret its area code. |
| `data/subnational_and_indigenous_organizations.csv` | One organization and its documented communities or geographic remit. Distinguish local service from evidence of community control. |
| `data/cross_border_services.csv` | One documented relationship between a home organization and a separately served area, scoped to its condition and resource. |
| `data/m49_area_codes.csv` and `data/m49_verified_overview.csv` | Working roster and independently retrieved UNSD overview snapshot. Both cover 248 statistical areas. |

## Interpret the two coverage measures

A cell with a linked item counts as source-positive. An unlinked cell is either `targeted_search_no_verified_resource` or `not_yet_researched`. The latter means no condition-specific search is logged in the cell. Identity checks for the area can still exist. `without_linked_source` is the comparable all-gap metric across batches. Before batch 32 the metric named `unresearched` included all zero-link cells. From batch 32 it counts the subset without a matching logged search.

## Interpret publication country

`organization_domicile_m49` locates the organization. `source_country_m49` locates the issuer of the linked page, the issuing body of the document, or the journal's place of publication, depending on `source_country_basis`. For a society's own catalogue, the country describes the catalogue. Follow each referenced work separately before attributing it. Third-party mirrors, PubMed and file hosts can point to a work published elsewhere. `unknown` with basis `unresolved` preserves a conflict or missing edition-specific attribution. Pipe-separated `source_attribution_provenance_ids` lead back to the artifact and corroborating evidence. In batches 1–32 the field called source country was constrained to organization domicile. Use the current exact-URL context over that historical convention.

Country of publication never establishes the study population, representativeness, legal jurisdiction, endorsement or clinical relevance. An identity or lack of a local source does not establish health risk. All resources have release state `research_lead_only`; claim appraisal belongs to issue #27.

Run `node docs/atlas/handoffs/team-b/validate.mjs` on the verified branch. Work on the existing draft PR #71 under this directory only.
