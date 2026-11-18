# Codex handoff — Atlas folklore source collection (later, isolated)

**When to use:** after the current Team B task reaches a safe checkpoint. This is a deferred handoff, not an instruction to modify the currently running Codex job.

## Scope

Repo: `PortalHunter/Ethnicy-Based-Optimal-Weight`
Branch: `research/atlas-folklore-discovery-20261118`
Existing tracking issue: [#141](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/141)
Working folder: `docs/atlas/folklore/`

**Do not change** main, `research/atlas-raw-intake`, Team B, Teams A/D, calculator, V1/V2 harness, or pre-existing research. If Team B uses the same local checkout, create an independent clone or Git worktree for folklore; do not switch its active branch. Inspect local state before edits, do not reset or force-push. Preserve manual changes.

## Aim

Expand link-only source lead index from 43 entries toward 100 **actual candidate attestations**, with careful provenance, and then begin detecting *possible* versions of the same story. Seek multiple original-language editions/tellings and track the earliest documented versions available. No clinical verification; no unapproved full-text copying.

## Mandatory workflow

1. Read `README.md`, `governance.md`, `schema/attestation.schema.json`, `variants/variant-comparison-template.md`, and `intake/source-leads-2026-11-18.csv`.
2. Check the repository issue and branch for newer updates; respect edits in flight.
3. Research all documented variants of an already indexed motif before seeking more motif families. But balance regions: current pilot overrepresents Irish archives.
4. Prioritize original source pages / manuscript folios / recordings over summaries; do not count repeated medical papers that cite one tale as distinct oral witnesses. Record original language, earliest attested date, collection, narrator/collector when appropriately disclosed, location, URL or item locator, different editions, and contradictions.
5. For each source: store one unique `lead_id`, `motif_group_id`, and the exact source URL, plus status and caveats. Label relationships as **unknown** until shown, then add separately sourced relationship evidence. Do not conflate cross-cultural similar motifs with actual shared ancestral stories.
6. Avoid copying copyrighted, private, sacred or community-restricted narratives into public GitHub or Google Drive. Check collection usage terms, CARE principles, and requests for permission. Store only short metadata and original summaries until clearance.
7. Never infer clinical conditions, causal explanations, genetic risk, or treatment efficacy from folklore. Separate historical observation, story cosmology, and modern hypothesized mechanism; do not insert findings into clinical Atlas knowledge.
8. Put each new bulk batch in a **new**, date-stamped `intake/source-leads-YYYY-MM-DD-batch-NNN.csv` or reviewed JSONL file, preserving prior batches unchanged. Document method, omissions, duplicates, blocked sites, access and rights restrictions, failure counts.
9. Run `python3 docs/atlas/folklore/scripts/validate_source_leads.py <CSV>` (on any compatible CSV manifest). Ensure stable IDs across all batches and no accidental duplicate URLs except deliberately multi-topic sources.
10. Commit only folklore files to the isolated branch. Post progress and limitations on issue #141. **Do not merge** pending multidisciplinary review.

## Acceptance for next intake increment

- At least 25 additional **source-located** records; target a minimum of 15 original archive/firsthand records, when obtainable.
- Explicitly compare at least 3 motif groups with 2+ separately documented variants and identify contradictions or uncertain dependence.
- Include non-European and non-English sources with translation/provenance labels, acknowledging access and consent limitations.
- Preserve blocked or inconclusive leads in a separate report instead of silently dropping them.
- Provide a completion summary with counts for new leads, original vs secondary, variant clusters compared, URL duplicates, language coverage, rights issues, and remaining unknowns.

## End conditions

Stop and request human cultural/community or clinical review whenever needed. Source gathering is useful without inventing diagnoses or claiming that every story encodes a discoverable disease.
