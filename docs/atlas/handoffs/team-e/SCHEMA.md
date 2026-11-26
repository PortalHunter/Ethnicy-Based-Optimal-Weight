# Atlas research schema

The versioned CSVs form the canonical handoff. All keys are UTF-8 text and M49 keys retain three characters. CSV record locators use `team:path:record` with a one-based data-record number that excludes the header and spans quoted newlines. The [field dictionary](data/field_dictionary.csv) lists the columns and observed nullable fields. `E:` identifies a Team E review input. A path with a JS symbol points to the pinned catalogue in core.js.

| Table | Primary key and semantics |
| --- | --- |
| `areas`, `m49_integrity`, `map_coverage` | `m49`. Dated UNSD geography, authority disposition, and distinct WHO administrative status. ISO-only intake stays in `noncanonical_geography`. |
| `institutions` | `entity_id`. Names retain original script and original type. Team A record areas appear as scoped links. Team B domicile is explicit. Journals and publishers keep their own roles. |
| `identifier_crosswalk` | `team, original_id`. Scoped identity matches preserve every original identifier. D directory and NCA identifiers join to another team only through recorded evidence. |
| `relationships` | `edge_id`. Subject and object target area, institution, or publication. Each assertion has its own source, type, origin, scope, event time, evidence classification, and Team E review classification. A source date and a relationship validity date are separate. |
| `publications` | `publication_id`. Identity uses an explicit DOI when present and exact URL otherwise. Records include periodical articles, guideline documents and linked resources with their inherited evidence state. |
| `publication_contexts` | `context_id`. One Team B or C context per originating assertion. It retains role, condition, source country and basis, publisher or issuer, study location and population, jurisdiction, and release state. A resource may have multiple contexts with different roles. |
| `publication_references`, `journals` | Bibliographic alternate references and journal/publisher identification. Team C journal publisher location and ISSN fields stay distinct from study location, article author and indexing claims. |
| `office_observations`, `network_condition_sources` | Dated WHO office evidence and documented network programmes. The programme row holds its own appraisal state. |
| `conditions`, `ancestry_keys`, `claim_ancestry_proposals`, `unmapped_condition_ancestry` | Exact existing selectors and proposed contextual links, each withheld. Picker parent fields describe the existing UI hierarchy only. |
| `candidate_claims`, `pilot_claim_links` | Issue-backed candidate identity, original reference, checked reference, authors, issuing body, venue, study and applicability limits, and three independent gates. Pilot links are legacy attribution candidates. |
| `condition_availability`, `discovery_leads`, `community_governance` | Distinct B and C research-intake states, candidate-only search hits and community-specific boundaries. |
| `PROVENANCE.csv`, `provenance_review` | Stable source ID identifies a URL, its original provenance observations, and transport state. Review assertions index newly inspected evidence and specify what was checked. |
| `authority_duplicates`, `edge_conflicts`, `exceptions` | Reconciliation dispositions, qualified edge assertions and the single actionable exception ledger. Original records and reviewed alternatives remain addressable. |

Foreign keys preserve one unit per assertion. A shared authority can serve multiple M49 areas. An organization's host domain and publishing venue can differ. A journal's title or publisher address supplies no study location. A regional office link conveys neither membership in another organization nor national clinical jurisdiction.

Evidence state inherits source context. Team E review state declares what was independently inspected. Legal interpretation and clinical release remain withheld unless separately authorized. Dates use ISO year, month or day precision when available. Unclear dates keep their original values and an explicit qualification. Empty geographic foreign keys signal absent assertions, with the source state and limits available in contact, audit or context rows.
