# Ancestry Health — Research Team A: Complete national/territorial governmental health-authority census

You are an independent research team contributing to **Ancestry Health**, a free, open-source **educational** resource. The public website is not a validated medical device and cannot diagnose, prescribe, or assign individualized genetic/weight risk from ancestry.

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Global atlas roadmap:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64  
**Regional claim appraisal:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27  
**Existing atlas pilot (schema reference only, unmerged at time of assignment):** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/65  
**Independent journal discovery roadmap:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66  
**Canonical geography:** https://unstats.un.org/unsd/methodology/m49/overview

This assignment is fully standalone. You may read the other teams' proposed data contracts, but you own only the tasks specified below. Do not assume another AI agent has already completed or reviewed your work. Do not modify `main`, source clinical formulas, patient-facing medical guidance or private user records.

## Non-negotiable: persist every handoff to GitHub

1. Before researching extensively, check whether your GitHub connector can **write** to `PortalHunter/Ethnicy-Based-Optimal-Weight`. If so, create **your own research branch** from the latest `main`, name it `research/atlas-team-a-YYYYMMDD`, and create `docs/atlas/handoffs/team-a/` containing `README.md`, `STATUS.md`, `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md` and data files.
2. Commit the first substantive source-backed batch and open a **draft pull request immediately**. Continue committing each batch to the same branch/PR as you proceed (roughly 20–40 country records per batch where relevant). Do not save work exclusively in chat messages, ephemeral attachments, or a ZIP. A ZIP can be a secondary backup, never the only handoff.
3. Every record must link to an authoritative URL, give source language, source issuer, checked date, geographic/jurisdiction scope and explicit verification state; record conflict, deprecation and unresolved questions.
4. If GitHub is **read-only**, attempt a persistent GitHub issue/comment with the full recoverable dataset or links to durable uploaded files (subject to permissions). If you cannot write anywhere durable, return exportable files and clearly write `NOT SAVED TO GITHUB`. Never claim the user can recover a handoff from GitHub when nothing was committed.
5. Finish each batch by supplying **PR/issue URL, branch, exact file paths, verified commit SHA and coverage count**. Do not merge or close review issues without maintainer permission. The next team must be able to resume using repository content alone, without the original conversation.
6. Do **not** upload identifiable medical records, genomic files, copyrighted paper full texts, API keys or personal data. Original-language citations and short paraphrases are fine; keep journal ownership and licensing clear.

**Common keys:** the seven current conditions are `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. Use actual ancestry picker IDs from `preview-assets/core.js` where applicable. Never conflate source-country residents, self-described ancestry, Indigenous nation, clinically measured phenotype or verified genotype. Claim candidates must be separately appraised in GitHub issues before any clinical content is displayed.

## Exclusive ownership

You own the **government and statutory public-health authority record for EVERY UN M49 country or area**, including non-sovereign territories and special-status areas. Do NOT own independent medical journals, non-government professional societies or international network membership, which belong to other teams.

**There must be a country/area skeleton record for every entry in the dated official M49 list.** A skeleton is not a verified ministry. Fill gaps explicitly instead of omitting countries.

## Research question

For each country/area, **who has legal or delegated responsibility for health policy, public health, medical regulation, disease surveillance, and clinical guidance?** Find the local-language official name of the Ministry of Health, Health Department, Secretariat for Health, Ministry of Public Health, national health service or territory-competent parent authority—not merely a Wikipedia title or WHO country office.

## Method

1. Obtain and archive the full current UN M49 **country-or-area** table; retain the source date and M49 code with leading zeros. Record ISO-alpha2 and alpha3 where assigned. Count countries **and territories/areas**, not just UN member states. Flag areas without permanent resident populations or independent health institutions.
2. Build one `countries.csv` row for **every** M49 entry with `country_area_m49`, codes, official geographic name, region/subregion, governance type, `health_authority_resolution` and verification status.
3. For every area, search its own official government domain in its language(s). Capture ministry name (original script and English translation clearly marked), official website, specific ministry page, role/mandate, health minister/agency not required, active dates, national vs devolved responsibility and recent institution renames. Separate the principal competent authority from regulatory agencies and public-health institutes.
4. If governmental duties are delegated to another country (or shared by multiple bodies) record the delegation and an **explicit parent-area M49 key**, citing legal/official evidence. Do not invent a local ministry. If official evidence is inconclusive mark `UNKNOWN_REVIEW_NEEDED` and a reason; do not treat it as `NOT_APPLICABLE`.
5. Record national public-health institutes, health data agencies and government biomedical research councils in distinct `government_health_bodies.csv` entries; differentiate government-owned research councils from independent professional societies owned by Team B.
6. Consult WHO country/territory profile pages, WHO country-office [2025 report](https://www.who.int/countries/country-presence/reports/2025/country-offices), national government directories, official gazettes and relevant legal instruments for corroboration. WHO offices are evidence about WHO presence, **not** substitutes for national health agencies.
7. Capture `country_coverage.csv` with reviewed ministries, missing official sites, delegated jurisdictions and conflicts. Review changes in legal authority over time rather than assuming a country name or ministry name is permanent.
8. Give a first batch spanning every UN region, then advance in alphabetical or M49 order to make full coverage auditable. Commit a complete skeleton early and enrich country rows in research batches.

## Output schema and storage

Directory: `docs/atlas/handoffs/team-a/`. Files:
- `data/countries.csv`: `m49_code,iso_alpha2,iso_alpha3,un_name,un_region,un_subregion,status,health_authority_resolution,authority_record_ids,parent_country_m49,last_verified_utc,source_url,notes`.
- `data/government_health_bodies.csv`: `record_id,area_m49,official_name_local,english_name,body_type,mandate,jurisdiction,official_url,source_url,source_language,current_status,effective_date,verified_on,verification_state,notes`.
- `data/authority_relationships.csv`: `parent_body_id,child_body_id,relationship_type,source_url,effective_from,effective_to,review_state`.
- `PROVENANCE.csv`, `GAPS.md`, `STATUS.md`, `CHANGELOG.md` and `README.md`.

## Acceptance criteria

- 100% of dated M49 list represented by a row (including non-sovereign areas), with country count compared against official master data.
- Every row has official ministry/department or **documented unknown/delegated/not-applicable** status—no silent omissions.
- At least two independent checks for disputed authorities, delegated territories and significant ministry renames, prioritizing official sources.
- All identity/mandate assertions cite precise governmental sources and dates. A WHO country office alone is inadequate.
- No guesses about clinical guidelines, country membership or ethnic population genetics.
- Provide spot-checked tests for small-island territories, devolved systems, multilingual administrations, no-permanent-population areas, agencies renamed after elections, and cross-border health responsibility.

**Your output is the atlas's foundational governmental directory, not a clinical evidence appraisal.**
