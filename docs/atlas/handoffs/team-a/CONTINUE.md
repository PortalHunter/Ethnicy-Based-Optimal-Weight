# Ancestry Health — Research Team A: standalone continuation

**GitHub repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Open DRAFT PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68  
**Existing branch (write only here):** `research/atlas-team-a-20261104`  
**Handoff updated:** 2026-11-05; dataset commit `413def180d3982ddae65f7cacf453017e389c5c2`; checkpoint-document commit containing this handoff comes next. Always retrieve current branch HEAD; newer commits supersede prior checkpoint.

## Purpose and requirements

Continue **government and statutory health-authority census ONLY** toward the original acceptance criteria, without recreating already completed research. On branch `research/atlas-five-team-handoff-prompts-2026-11-04`, read `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` and `DATA_CONTRACT.md`. On the live Team A branch, read **all** files under `docs/atlas/handoffs/team-a/`, especially STATUS/GAPS/PROVENANCE/QA_REPORT/CHANGELOG/README/validate.py, `data/*.csv` and the official M49 snapshot. GitHub is sole authoritative memory; this prompt is intentionally standalone.

The atlas must identify the government ministry, health department, statutory public-health institute, regulator and state health-research bodies with original names, precision about institutional mandate, regional/devolved and delegated jurisdictions, local-language official primary source, evidence URL, date and verification state. Independent medical journals, non-government medical societies and global network memberships belong to other teams. WHO offices are corroborating context, **not** domestic authorities. This is an educational-source directory, not clinical evidence or ancestry-specific treatment advice.

## Exact committed research to date

- Geographic skeleton: **248/248 M49 country-or-area rows**, including islands, dependent areas and Antarctica. Dated official snapshot `M49_OFFICIAL_SNAPSHOT_20261105.csv` has matched every staged M49 code, ISO field, English name, region and subregion; prior name correction 238 documented. This confirms geography only, not health legal jurisdiction.
- Principal identity coverage: **73 identified / 175 explicitly UNKNOWN_REVIEW_NEEDED**. Identity verification is narrower than legally appraised complete public-health powers. Any pending effective date is `unknown`; avoid assuming ministry exclusivity.
- Separate governmental bodies **107**, sourced within-government relationships **24**, provenance records **136** (includes access failures/candidates/corroboration, not 136 verified mandates), coverage rows **248**.
- Dataset checkpoint: `413def180d3982ddae65f7cacf453017e389c5c2`; twelve latest principals gov-242-001 (Fiji), gov-246-001 (Finland), gov-250-001 (France), gov-270-001 (The Gambia), gov-288-001 (Ghana), gov-296-001 (Kiribati), gov-308-001 (Grenada), gov-320-001 (Guatemala), gov-328-001 (Guyana), gov-372-001 (Ireland), gov-380-001 (Italy), gov-388-001 (Jamaica). Two new bodies gov-270-002 Gambian Directorate of Health Research and gov-288-002 Ghana Health Service, with published same-area internal edges. All five data CSVs independently read back from this SHA with quote-aware parser: PASS; all 248 geographic keys/fields matched dated official snapshot and relationships refer to valid bodies. Existing access failures kept in provenance. **Batch 8 Python execution not claimed**: outgoing Git clone was blocked in the execution sandbox; previous batch ran Python successfully. Run `python docs/atlas/handoffs/team-a/validate.py` on the new tree whenever executable checkout is available, with 10+ negative/boundary checks.

## Research queue and rules

1. Priority unresolved: 074 Bouvet; 104 Myanmar conflicting regime/title; 112 Belarus; 148 Chad restricted pages; 162 Christmas Island; 166 Cocos (Keeling); 174 Comoros (template/title); 175 Mayotte; 192 Cuba; 226 Equatorial Guinea current portfolio; then remaining unknowns in ascending M49 order. Also unresolved 231 Ethiopia, 232 Eritrea, 234 Faroe Islands (potentially old ministry title), 238 Falklands, 248 Åland, 266 Gabon, 268 Georgia and 316 Guam. See GAPS.md for full backlog.
2. Require **at least two independent governmental/legal source checks** for contested/renamed/delegated or cross-border mandates. Do not falsely mark missing ministries or `NOT_APPLICABLE` from failed web access. Confirm territorial legal competence and explicit parent M49 before any delegation edge. Preserve multi-level/Indigenous governmental authority distinctions, source caveats, unknown dates and reviewer-labeled translations. No assumed ethnic-genetic mapping.
3. Complete broader authority coverage: statutory agencies, disease-surveillance/public-health institutes, government research councils, devolved health authorities, Bosnia cantons and Brčko, and legal instruments. Do not silently infer relationships. Note Gambia research council is planned, not verified as constituted; Ghana Health Service Act 525 currency pending further legal review.
4. Work in manageable official-source batches, document unsuccessful source retrievals separately, and synchronize `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, `data/authority_relationships.csv` and `PROVENANCE.csv`. Every item includes M49, current local/English name, original governmental URL and issuer, source language, checked date, scope, status and limitations. Update all handoff markdown and the full standalone continuation on each batch. Run Python validator plus relevant boundary tests; where unavailable, use a complete structural mirror and clearly disclose it.
5. **Only commit to `docs/atlas/handoffs/team-a/` on this branch**; keep PR #68 draft, never merge or change `main`, public website, calculator, formulas, clinical copy, or other team outputs. Verify live head and contents before writes and independently read back the exact newly committed SHA and source counts. Finish with PR, SHA, counts, IDs, remaining gaps and validation state. Leave a durable GitHub handoff even if still unfinished.

## Same user continuation prompt — return this again after each run

> Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.
>
> Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.
>
> Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.
>
> If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.

No patient-facing clinical recommendation is authorized by directory records.
