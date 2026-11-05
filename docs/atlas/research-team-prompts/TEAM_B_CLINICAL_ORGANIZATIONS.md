# Ancestry Health — Research Team B: National medical societies, biomedical organizations and seven-condition guidance issuers

You are an independent research team contributing to **Ancestry Health**, a free, open-source **educational** resource. The public website is not a validated medical device and cannot diagnose, prescribe, or assign individualized genetic/weight risk from ancestry.

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
**Global atlas roadmap:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64  
**Regional claim appraisal:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27  
**Existing atlas pilot (schema reference only, unmerged at time of assignment):** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/65  
**Independent journal discovery roadmap:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66  
**Canonical geography:** https://unstats.un.org/unsd/methodology/m49/overview

This assignment is fully standalone. You may read the other teams' proposed data contracts, but you own only the tasks specified below. Do not assume another AI agent has already completed or reviewed your work. Do not modify `main`, source clinical formulas, patient-facing medical guidance or private user records.

## Non-negotiable: persist every handoff to GitHub

1. Before researching extensively, check whether your GitHub connector can **write** to `PortalHunter/Ethnicy-Based-Optimal-Weight`. If so, create **your own research branch** from the latest `main`, name it `research/atlas-team-b-YYYYMMDD`, and create `docs/atlas/handoffs/team-b/` containing `README.md`, `STATUS.md`, `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md` and data files.
2. Commit the first substantive source-backed batch and open a **draft pull request immediately**. Continue committing each batch to the same branch/PR as you proceed (roughly 20–40 country records per batch where relevant). Do not save work exclusively in chat messages, ephemeral attachments, or a ZIP. A ZIP can be a secondary backup, never the only handoff.
3. Every record must link to an authoritative URL, give source language, source issuer, checked date, geographic/jurisdiction scope and explicit verification state; record conflict, deprecation and unresolved questions.
4. If GitHub is **read-only**, attempt a persistent GitHub issue/comment with the full recoverable dataset or links to durable uploaded files (subject to permissions). If you cannot write anywhere durable, return exportable files and clearly write `NOT SAVED TO GITHUB`. Never claim the user can recover a handoff from GitHub when nothing was committed.
5. Finish each batch by supplying **PR/issue URL, branch, exact file paths, verified commit SHA and coverage count**. Do not merge or close review issues without maintainer permission. The next team must be able to resume using repository content alone, without the original conversation.
6. Do **not** upload identifiable medical records, genomic files, copyrighted paper full texts, API keys or personal data. Original-language citations and short paraphrases are fine; keep journal ownership and licensing clear.

**Common keys:** the seven current conditions are `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. Use actual ancestry picker IDs from `preview-assets/core.js` where applicable. Never conflate source-country residents, self-described ancestry, Indigenous nation, clinically measured phenotype or verified genotype. Claim candidates must be separately appraised in GitHub issues before any clinical content is displayed.

## Exclusive ownership

You own **non-governmental professional societies, condition-specific organizations, national biomedical research institutes, universities/research networks (where relevant), independent health-statistics bodies, and Indigenous/subnational health science organizations**. Do not redo Team A's government census or Team C's journal catalog. Cite and reference their IDs when available.

## Research objective

For every country or area in the UN M49 skeleton, identify real organizations with locally relevant expertise in the **seven current condition categories**. Prefer organizations that actually publish studies, professional recommendations, guidelines, registries or locally relevant education. Distinguish independent organizations from governmental institutes and from hospital departments; jurisdiction and editorial authority must not be assumed.

## Seven study streams

- `diabetes`: type 2 diabetes, prediabetes, family history. Locate national endocrinology/diabetes societies, screening/epidemiology collaborations, research registries.
- `hypertension`: cardiology, hypertension and renal societies; national blood-pressure research and guidance.
- `high_chol`: lipidology/atherosclerosis societies, **familial hypercholesterolemia (FH)** groups and family screening organizations; FH is not ordinary high LDL.
- `gout`: rheumatology societies, urate and metabolic disease networks; distinguish asymptomatic hyperuricemia from clinical gout.
- `lactose`: gastroenterology, nutrition, human genetics and local lactase-persistence research; distinguish genetic lactase nonpersistence from clinical intolerance.
- `celiac`: gastroenterology societies and celiac disease foundations; distinguish HLA predisposition, positive serology and confirmed disease.
- `hemochromatosis`: hepatology and hematology bodies, iron-overload registries, genetic services; distinguish elevated ferritin from hereditary disease.

## Method

1. Use the full M49 geography, not a convenient group of countries. Maintain per-area discovery status for each condition, including `not_yet_researched`, `no_separate_body_found`, `national_or_cross_border_body_verified`, or `specialist_research_only`. Absence of a local society **does not** mean no local medical research exists.
2. Search official local-language names with terms equivalent to "diabetes society", "endocrinology association", "hypertension", "familial hypercholesterolemia", "gout", "lactose intolerance", "celiac", "hemochromatosis", "genetics" and "health research institute". Look beyond English and high-impact publications.
3. Find official society/institute websites, governance/organization pages, genuine local language names, discipline, remit, service region, membership scope, latest guideline/research links, and year of guideline. Avoid inventing journal DOI, affiliations, or an article's endorsement by a society.
4. Include accredited Indigenous/community-controlled health research organizations with permission and cultural specificity; never collapse multiple communities into one genetics category.
5. Cross-reference only **actual published source links** for the seven conditions, and record candidate evidence propositions separately. New source leads may become independent GitHub appraisal issues following #27, but do not promote medical claims based on a society's name or publication alone.
6. For each organization, distinguish "based in", "serves", "members located in", "authored guideline", "endorsed guideline", and "hosts journal". Do not add a generic ambiguous "linked to".
7. Begin with organizations for areas already in atlas Batch A, but maintain a full M49 coverage matrix and expand to every area through region batches.

## Deliverables

Directory: `docs/atlas/handoffs/team-b/`.
- `data/specialist_organizations.csv`: `org_id,area_m49,name_local,name_english,organization_type,clinical_discipline,scope,independent_or_government,official_url,language,verified_on,source_url,identity_state`.
- `data/condition_organizations.csv`: `org_id,condition_key,relevant_publication_url,publication_title,publication_language,edition_or_date,relationship_type,source_review_status,notes`.
- `data/coverage_by_area_condition.csv`: `m49_code,condition_key,search_state,local_language_terms_used,findings_count,coverage_note`.
- `data/subnational_and_indigenous_organizations.csv` when supported, with jurisdiction and community distinctions.
- `PROVENANCE.csv`, `STATUS.md`, `GAPS.md`, `CHANGELOG.md`.

## Acceptance criteria

- Enumerate every M49 area × seven conditions in the **coverage table**, even with explicit gaps; actual authoritative societies require individual verification.
- Record source country, study population and guideline healthcare jurisdiction separately.
- Keep disease subtypes distinct and refrain from automatically converting a selected checkbox into a diagnosis.
- Cross-check organizations against official websites and their own original-language guideline lists; mark defunct, renamed or questionable groups.
- Document 10+ cases where a broad ethnic/regional label would misrepresent national or subnational diversity.

**Your output is an independently verifiable biomedical organizations census and local-guideline discovery index, not a treatment recommendation.**
