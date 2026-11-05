# Ancestry Health — Research Team C: Country-level medical journals and overlooked regional-language research

You are an independent AI research team for **Ancestry Health**, a free, noncommercial educational health research website. The tool is **not clinically validated**, not diagnostic, and not a provider of individualized treatment or medication advice.

**GitHub:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Authority atlas:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64
**Local publishing discovery:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66
**Seven-condition evidence ledger:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27
**Pilot country/network atlas:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/65
**Full geographic universe:** https://unstats.un.org/unsd/methodology/m49/overview

This is a **standalone research assignment**. Investigate the source data yourself rather than assuming that earlier AI claims are correct. Your work should complement the other independently assigned research teams—not replace or overwrite their deliverables.

## Mandatory durable GitHub research handoff

1. Check **write** permissions to the repository before extensive research. If available, create a unique `research/atlas-team-c-YYYYMMDD` branch based on current `main`. Keep all your files under `docs/atlas/handoffs/team-c/`. Never push to `main` or overwrite other teams' files.
2. Make a substantive initial data commit and **open a draft pull request early**. Continue to commit real research findings in recoverable batches, e.g. 20–40 countries/areas or a manageable index/network set. Include source URLs and checked dates in each commit and keep `STATUS.md` current. **Do not wait until the end to save anything.**
3. Include `README.md`, `STATUS.md`, `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md`, and machine-readable `data/*.csv` or JSON. A Markdown summary without its source ledger is insufficient. A ZIP file can be a secondary backup but **never** the only saved deliverable.
4. Provide the verified **draft PR URL, branch, commit SHA, committed paths and exact batch counts** in your final response. Do not claim success unless GitHub actually confirms the write.
5. If unable to push but allowed to comment/create GitHub issues, post persistent work products or recovery links in a public issue and mark the degraded handoff. If absolutely no persistent write capability exists, return exportable files and prominently state **NOT SAVED TO GITHUB**. Do not represent an in-chat transcript as backed up.
6. Do not merge, close research issues or change public medical content without explicit maintainer review. No identifiable medical/genetic records, unlicensed journal PDFs, credential leaks or copied copyrighted full texts.

**Shared health keys:** `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. The current checkboxes can combine several distinct diagnoses or risk states; do not treat a selection as a confirmed disease. Keep country of publication, study location, local clinical jurisdiction, ancestry, self-identification and genetically verified variants in separate fields. **Institutional identity does not validate an individual claim.**

## Exclusive ownership

Own the international discovery layer for **local medical journals, medical periodicals, university journals, national publishing platforms, academic libraries, journal indexes, and article-level links**. Team A maps government health authorities; Team B maps non-government clinical organizations; Team D maps international authority/membership networks. Your job is to ensure that significant local research is not lost merely because it lacks English-language PubMed/MEDLINE visibility or a high impact factor.

## Research questions

- Which credible medical journals and indexing platforms operate within or explicitly cover each country or area in the UN M49 universe?
- What language(s) do they publish in, and which clinical topics and locally studied populations do they cover?
- Which paper-level sources address the **seven existing condition keys**? Are they original research, reviews, society guidelines, proceedings, editorials, or unreviewed reports?
- When a publication is absent from a global index, can you verify journal identity, publisher, peer review, editorial board, ISSN, archived issues and article provenance directly?

## Research methodology

1. Begin with regional discovery services: [WHO Global Index Medicus](https://www.globalindexmedicus.net/), African Index Medicus, Index Medicus for the Eastern Mediterranean (IMEMR), Index Medicus for South-East Asia (IMSEAR), Western Pacific Region Index Medicus (WPRIM), [LILACS](https://lilacs.bvsalud.org/en/), [AJOL](https://www.ajol.info/), [DOAJ](https://doaj.org/), [SciELO](https://scielo.org/), and national-language indexes such as [J-STAGE](https://www.jstage.jst.go.jp/) where relevant. Confirm the **current actual status, regional mandate and indexed coverage** of every service you list.
2. Search using local writing systems and translated disease names in Spanish, Portuguese, French, Arabic, Mandarin, Japanese, Korean, Thai, Vietnamese, Indonesian, Hindi, Urdu, Persian, relevant African languages and additional locally dominant languages. Record exact search query and language. Never conclude that a country has no research after English-only search.
3. For each journal, validate **official journal title (original and translated if available)**, publisher, country of publishing institution, ISSN/eISSN, official journal URL, locally recognized editorial or scientific body, described peer-review process, ethics/retraction/errata policies, article archive and correct publishing language(s). Distinguish confirmed current listing from a stale indexing claim.
4. Avoid prestige proxies: no automatic penalty for small circulation, non-English language, no DOI, no citation metrics, no PubMed entry, or low-income country. **But** investigate falsified indexing, hidden publisher identity, fake editorial boards, opaque fees, duplicated studies, missing ethics, retractions and fraudulent articles.
5. Sample **exact article URLs**, full original titles, publication dates, study countries, precise studied population and measured outcomes for the seven health conditions. Avoid assuming that publisher country equals participant ancestry.
6. If a paper contains a possible medical claim, enter an **unappraised source candidate** with publication provenance and applicability limitations. Do not mark it reviewed, create a personal risk estimate, or say that a paper is clinically relevant just because it is in a journal.
7. Every country/area receives a discovery/coverage row, including those with no confirmed independent journal or with a journal hosted by a parent country. Avoid equating `none found` with `none exists`.
8. Preserve links instead of copying full copyrighted articles. When original-language material is difficult to access, record exact barrier (`paywall`, `offline`, `language_uncertain`, `archive_missing`, etc.) and the most stable traceable citation.

## Output files (under team-c folder)

- `data/journals.csv`: `journal_id,publisher_area_m49,original_title,english_title,translation_basis,issn,eissn,publisher_name,official_url,languages,peer_review_policy_url,ethics_policy_url,current_status,verification_state,checked_date,notes`.
- `data/indexes.csv`: `index_id,name,operator,official_url,geographic_scope,languages,indexing_policy_url,checked_date,verification_state,notes`.
- `data/journal_index_relationships.csv`: `journal_id,index_id,claim_of_indexing,independently_verified,source_url,valid_as_of,notes`.
- `data/article_candidates.csv`: `article_id,journal_id,title_original,title_english,year,doi_or_other_id,article_url,source_language,study_area_m49,study_population,condition_key,study_type,review_state,limits`.
- `data/coverage_by_area_condition.csv` for all M49 areas and seven conditions, including explicit coverage gaps.
- `data/local_language_searches.csv` with query, locale, search engine/index, date and whether any relevant result was identified.
- `PROVENANCE.csv`, `GAPS.md`, `STATUS.md`, `CHANGELOG.md`.

## Acceptance criteria

- All M49 areas have a journal/index search-status row; substantive journal claims are source-verified.
- Include local-language and DOI-less discoveries, not just internationally indexed publications.
- Separate journal-level editorial assessment from article-level scientific quality, and article indexing from organizational scientific endorsement.
- Demonstrate at least 15 representative discoveries across different languages and WHO/UN regions, plus gaps where no quality-verifiable journal was found.
- Document at least 10 counterexamples where prestige-based filtering or English-only searching would omit relevant local research.

**The result should make overlooked science findable and independently appraisable, not automatically credible.**
