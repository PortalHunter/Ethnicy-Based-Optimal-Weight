# Team C continuation — batch 6

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
Branch: research/atlas-team-c-20261104-local-journals-1851
Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/69
Batch parent: d86444069580fb754d35abe318757918ad1c8732. Resolve newest branch HEAD independently; do not rely on this parent as latest.

Read original TEAM_C_LOCAL_JOURNALS.md and DATA_CONTRACT.md on research/atlas-five-team-handoff-prompts-2026-11-04, then every current Team C handoff/data file. Work only under docs/atlas/handoffs/team-c/ on the existing branch. No main, merges, live calculator or patient recommendations.

Batch 6 improves UGA_AHS publisher, identifiers and primary editorial policies, plus Mali online ISSN. Counts: 248 geographic seed rows; 1736 unsearched queue rows; 23 journals; 13 platforms; 14 edges; 11 unappraised articles; 29 queries; 57 provenance rows. No new articles. See VALIDATION.md for check results and execution limits.

Next priorities: reconcile geographic master fieldwise with official UNSD; resolve Iranian/Cuban journal primary policies and Mali publisher/correction policy; conduct bounded local-language country-condition discovery. Do not repeat UGA_AHS checks unless newer contradictory evidence. Iranian searches Q027/Q028 unresolved; Mali print registry 429, AJOL direct about 403. Never treat these as absence. Keep journal policy verification separate from article appraisal and ancestry from location.

Run node docs/atlas/handoffs/team-c/validate.mjs where available; review source provenance and explicit gaps. Commit validated batches atomically with expected-head lease, update STATUS/GAPS/PROVENANCE/CHANGELOG and this continuation, update draft PR, independently read commit and changed files back. Report exact SHA, counts, checks and remaining gaps with another standalone prompt.
