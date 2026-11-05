# Ancestry Health — Research Team D continuation

Continue Team D international/regional institutional-network research in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight.

GitHub is authoritative. First independently retrieve current branch and PR state; newer commits supersede this fallback. Existing branch: `research/atlas-team-d-20261104`. Existing draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 . Do not create another branch/PR unless the current one is unavailable and recovery is necessary. Do not merge.

Read the original assignment `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and shared `DATA_CONTRACT.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`. Read all current Team D handoff files, especially STATUS.md, GAPS.md, PROVENANCE.csv, CHANGELOG.md, BATCH_2026-11-05.md, GRAPH_ONTOLOGY.md, VALIDATION.md and data/*.csv.

Exclusive writes: `docs/atlas/handoffs/team-d/` on the existing research branch. Own cross-border networks and typed relationships. Do not recompile Team A ministries, Team B national societies or Team C journals. No main writes, live-calculator changes, clinical recommendation activation, issue closure or PR merge.

## Verified fallback checkpoint, 2026-11-05

Research batch commits:
- UN roster reconciliation and SEARO: 5d687ba9d0633354bc5e10d878a76f6e53c2cb28
- WHO Europe roster: 8b44fae4fa8472e5b076a166651c699c1cde9752
- WHO Africa roster: 8b5e40bc2cfb68ca972d77f59f54d14063b0c20c

Research data at the third commit: 36 network nodes; 223 typed edges; 20 condition references across all seven keys; 249 retained ISO seed status rows; 248 official UN M49 country/area crosswalk rows; one separately retained seed exception (158); 111 verified WHO region statuses; 138 not_verified; ten SEARO office-presence records; 20 open coverage gaps; 14 overlap cases; 51 provenance URLs; 23 sourced boundary cases.

All 248 UN overview rows match the legacy ISO seed; 158 is absent from the captured UN overview and is an explicit exception, not a canonical UN roster entry. Do not delete it silently or infer political/WHO status. Antarctica geographic region fields are not_applicable. Current verified regions: SEARO ten, EURO 53, AFRO 47, Indonesia WPRO. Nine SEARO statuses were new but ten edges were added because Timor-Leste had an existing status without a region edge. Algeria was rechecked without duplicating its edge.

## Highest priorities

1. Verify current AMRO, EMRO and WPRO country/area assignments from authoritative regional rosters or individually labeled WHO profiles. Preserve nonstate-area categories and effective dates. Do not extrapolate membership or WHO region from UN geography, PAHO membership or EU/EEA scope.
2. Retrieve EMRO primary roster successfully: English and Arabic pages returned 502/timeouts in this run. Search extracts alone were deliberately not promoted. Keep unresolved areas not_verified.
3. Expand country-office presence separately. SEARO explicitly attests offices in all ten named states. WHO Europe says 33 country-level offices for 53 countries; that aggregate does not identify which countries have or lack offices.
4. Recheck US constitutional governance only against current primary records. Existing status is PENDING_GOVERNING_BODIES_REVIEW and PAHO membership is independent.
5. Continue Africa CDC/AU and regional programme rosters, competent medicines agency jurisdiction, country-specific HEARTS pathway editions and Team B ID reconciliation with explicit identity provenance.

## Source and validation safeguards

The WHO immunization regional summaries still lists Indonesia among eleven SEARO states. It is a documented stale-roster counterexample, not evidence for current assignment. Current SEARO roster and dated 2025-05-23 transfer take precedence. WHO Gateway provides corroboration for 53 EURO countries; primary main roster names exactly match the UN crosswalk. AFRO aliases: Cote d'Ivoire=384 Côte d’Ivoire; Democratic Republic of Congo=180 Democratic Republic of the Congo; The Gambia=270 Gambia. Do not fuzzy-join.

Run `node docs/atlas/handoffs/team-d/validate.mjs` after downloading current handoff files. The validator checks CSV structure, IDs, references, provenance closure, seven condition keys, 248/249 geographic reconciliation, explicit unknowns, 53 EURO/47 AFRO/ten SEARO regions, ten office records and Indonesia/US/Liechtenstein boundaries. Structural PASS is not clinical or legal approval. Known baseline website retrieval failures are in the batch log.

Work in manageable source-verified batches. Maintain stable IDs, exact jurisdictions, source dates/languages, explicit uncertainty and historical intervals. Commit each substantive validated batch directly to the existing branch with handoff updates; update PR metadata. Verify GitHub readback before claiming saved. Report failed writes explicitly and preserve recoverable results.

Before ending, update STATUS.md, GAPS.md, PROVENANCE.csv, CHANGELOG.md, VALIDATION.md and this continuation prompt. Report final verified commit SHA, branch, draft PR URL, exact new record counts, validation and remaining gaps. Ancestry never substitutes for individual clinical evidence; no unappraised discovery becomes a personalized clinical recommendation.
