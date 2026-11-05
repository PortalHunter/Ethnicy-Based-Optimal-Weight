# Ancestry Health — Research Team D: International and regional health authority relationship network

You are an independent AI research team for **Ancestry Health**, a free, noncommercial educational health research website. The tool is **not clinically validated**, not diagnostic, and not a provider of individualized treatment or medication advice.

**GitHub:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Authority atlas:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64
**Local publishing discovery:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/66
**Seven-condition evidence ledger:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27
**Pilot country/network atlas:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/65
**Full geographic universe:** https://unstats.un.org/unsd/methodology/m49/overview

This is a **standalone research assignment**. Investigate the source data yourself rather than assuming that earlier AI claims are correct. Your work should complement the other independently assigned research teams—not replace or overwrite their deliverables.

## Mandatory durable GitHub research handoff

1. Check **write** permissions to the repository before extensive research. If available, create a unique `research/atlas-team-d-YYYYMMDD` branch based on current `main`. Keep all your files under `docs/atlas/handoffs/team-d/`. Never push to `main` or overwrite other teams' files.
2. Make a substantive initial data commit and **open a draft pull request early**. Continue to commit real research findings in recoverable batches, e.g. 20–40 countries/areas or a manageable index/network set. Include source URLs and checked dates in each commit and keep `STATUS.md` current. **Do not wait until the end to save anything.**
3. Include `README.md`, `STATUS.md`, `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md`, and machine-readable `data/*.csv` or JSON. A Markdown summary without its source ledger is insufficient. A ZIP file can be a secondary backup but **never** the only saved deliverable.
4. Provide the verified **draft PR URL, branch, commit SHA, committed paths and exact batch counts** in your final response. Do not claim success unless GitHub actually confirms the write.
5. If unable to push but allowed to comment/create GitHub issues, post persistent work products or recovery links in a public issue and mark the degraded handoff. If absolutely no persistent write capability exists, return exportable files and prominently state **NOT SAVED TO GITHUB**. Do not represent an in-chat transcript as backed up.
6. Do not merge, close research issues or change public medical content without explicit maintainer review. No identifiable medical/genetic records, unlicensed journal PDFs, credential leaks or copied copyrighted full texts.

**Shared health keys:** `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. The current checkboxes can combine several distinct diagnoses or risk states; do not treat a selection as a confirmed disease. Keep country of publication, study location, local clinical jurisdiction, ancestry, self-identification and genetically verified variants in separate fields. **Institutional identity does not validate an individual claim.**

## Exclusive ownership

Own **supranational and cross-border organizational membership, public-health cooperation, scientific partnerships, regulator relationships, historical network affiliations, and research-institution links**. Do not recompile the ministries (Team A), journal catalog (Team C), or national societies (Team B). Create *typed edges* that those teams can join to their organization IDs.

## Research question

Which institutions actually coordinate health policy, research, surveillance, medical regulation, pharmaceutical evaluation, specialist guideline development, or multicountry trials? Which countries/areas and professional bodies belong to them **at a specific time**? Which institutional relationships are legal, administrative, advisory, scientific, or purely voluntary?

## Networks to examine first, without assuming uniform membership

- WHO: all six regional offices (AFRO, AMRO/PAHO, EMRO, EURO, SEARO, WPRO) and country-office presence; separate statistical UN region, WHO region assignment, office presence and current WHO governance/membership status.
- PAHO's dual WHO-AMRO and Inter-American institutional role; national Pan-American relationships.
- Africa CDC, African Union structures and regional public-health programmes; country-participation constraints.
- EU/EEA: ECDC (infectious disease surveillance), EMA and network of national competent medicines agencies, European Commission medical structures; **never** claim all these bodies issue the same type of medical guidance or cover every European country.
- ASEAN Health Sector and ASEAN member collaboration; avoid converting nonbinding regional work into national medical law.
- International Diabetes Federation and relevant professional scientific alliances for the seven conditions: cardiology/HTN, lipid disorders/FH, rheumatology/gout, nutrition and lactose science, celiac societies, hepatology/hemochromatosis.
- Other regional bodies only after checking actual current institutional authority; do not infer membership from location.

## Required research method

1. For each network, verify official original title, founding body, governance mandate, official membership lists, member-state vs affiliated professional organization status, and **source date/effective date**. Preserve changes over time; use a `valid_from/valid_to` or `as_of` field.
2. Explicitly check **Indonesia's WHO transfer to WPRO effective 2025-05-23**, which should not change its UN South-eastern Asia classification; also check **Algeria's WHO AFRO grouping despite UN Northern Africa**. Handle disputed/pending international memberships and 2026 WHO/U.S. governance separately, without guessing.
3. Model `member_of`, `covered_by`, `WHO_region`, `regulates_medicines_in`, `cooperates_with`, `publishes_guidance_for`, `official_representative_of`, `indexes_articles_from` and `study_collaboration` as **different** relationships. No generic "connected" label without a defined meaning.
4. Capture jurisdiction: e.g. national statutes vs multinational regulator vs public-health guidance vs research consortium. A country's collaborative membership does **not** prove it adopts the network's guidelines.
5. Identify cross-border or region-specific condition initiatives for **each of the seven current conditions**, including less prominent alliances in Africa, Latin America, Pacific Islands, South Asia and Middle East. Distinguish organization activity from actual research claims.
6. Where the data are uncertain, place the relationship in `PENDING_VERIFICATION` rather than fabricate. Record prior obsolete memberships, date of withdrawal/entry where evidenced and conflicts between government and organization sources.
7. Maintain an M49-indexed geographic status matrix and a network overlap inventory so the later world map can show **network nodes, membership edges and time filtering**.

## Deliverables

Directory: `docs/atlas/handoffs/team-d/`.
- `data/international_networks.csv`: `network_id,name_original,name_english,entity_type,legal_or_voluntary,mandate,official_url,founding_or_effective_date,checked_on,source_url,review_state`.
- `data/network_memberships.csv`: `from_id,to_id,relationship_type,country_area_m49,organization_id,valid_from,valid_to,as_of,source_url,verification_state,notes`.
- `data/condition_networks.csv`: `network_id,condition_key,documented_program_or_guideline_url,scope,issue_or_claim_link,appraisal_status,notes`.
- `data/m49_network_status.csv`: `m49_code,who_region,who_region_source,who_assignment_effective_date,who_membership_governance_status,regional_collaboration_flags,review_notes`.
- `data/network_coverage_gaps.csv` and human-readable method and graph ontology notes.
- `STATUS.md`, `PROVENANCE.csv`, `GAPS.md`, `CHANGELOG.md`.

## Acceptance criteria

- Cover all six WHO offices; validate source dates and meaningful status transitions.
- At least 10 specific documented multi-country or international organizational relationships, including changes/effective dates.
- No geography-to-membership inference without a source; no assumption that national clinical recommendations are automatically identical among members.
- Present at least 10 negative/boundary cases (a non-EU WHO-Europe member, PAHO's special status, WHO office absent but government present, reassigned WHO region, different local guideline versions, regulatory remit vs journal publication, etc.).
- All graph links are reproducible, provenance-stamped and understandable to non-specialists.

**Your deliverable is a sourced, time-aware institutional relationship graph, not a clinical cross-border rule engine.**
