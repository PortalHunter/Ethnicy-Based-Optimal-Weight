# Ancestry Health — Global Medical Authority Atlas (Batch A)

**Created:** November 4, 2026 · **Discovery status:** first batch, **not complete or clinically validated**  
**Roadmap:** [Atlas issue #64](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64)  
**Related evidence programme:** [Seven-condition review issue #27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27)  
**Current data:** [25 country/area records](countries.batch-a.json), [54 authority/network records](organizations.batch-a.json), [99 typed, sourced relationships](relationships.batch-a.json)

## Why an atlas?

Rather than rebuild a country list for every disease, identify credible **medical ministries, public-health agencies, universities/research councils, specialist societies, national guideline groups, journals, and transnational scientific networks** once, preserve their sources and institutional remit, then link individual appraised health claims to their source organizations.

**An authoritative source organization is not automatic proof that every study, recommendation or publication it hosts is applicable or correct.** Institution verification and claim-level appraisal require different decisions.

## The geographic backbone

- Use the United Nations Statistics Division [M49](https://unstats.un.org/unsd/methodology/M49/) and its ISO alpha-2/alpha-3 codes. This includes countries **and territories**, and names/regional groupings are statistical conventions, not claims about sovereignty or ethnicity.
- Use [WHO's six regional offices](https://www.who.int/about/who-we-are/regional-offices) as a **different** organizational grouping; do not substitute WHO region for UN continent/subregion.
- The [CIA World Factbook was discontinued on February 4, 2026](https://www.cia.gov/stories/story/spotlighting-the-world-factbook-as-we-bid-a-fond-farewell/). Historical editions can supply dated contextual information, but the atlas must use an actively maintained country-code source.
- Preserve *effective dates* of institutional transfers. Indonesia moved from WHO SEARO to WHO WPRO on [May 23, 2025](https://www.who.int/southeastasia/about/history); its UN geographic classification remained Southeast Asia.
- The [WHO African Region includes Algeria](https://www.afro.who.int/countries) even though Algeria is in UN Northern Africa. Some neighboring North African countries are in a different WHO region.
- WHO regional classification and a state's legally effective WHO membership status are not the same field. For the United States, current WHO documentation has noted a [2026 governance question regarding withdrawal](https://www.who.int/westernpacific/about/where-we-work); retain a review flag rather than asserting a settled membership position.

A country/territory record **does not mean** a genetic ancestry group; country residence, nationality, self-described heritage, language, Indigenous nation, population genetics, and local health-system jurisdiction must remain distinct throughout the research interface.

## Institutional levels and mandates

| Type in atlas | Examples | What it can support | What it does **not** automatically support |
|---|---|---|---|
| National ministry or regulator | Indonesia's Kementerian Kesehatan, Brazilian Ministério da Saúde | Officially published national policies, public health measures and locally applicable rules | A personal genetic/ethnic risk prediction |
| National research or public-health institute | Indian Council of Medical Research, Finland's THL | Population surveillance, research programmes, technical advice | Treating observational study averages as individual risk scores |
| National disease-specific scientific society | Japanese Diabetes Society, Brazilian Diabetes Society | Published expert guidance and specialty evidence review | A guideline for all diaspora members or all nearby populations |
| Regional intergovernmental office | WHO AFRO, WHO WPRO, PAHO/AMRO | Region-based collaboration and program frameworks | Uniform national legal guidance or identical biology in every country |
| Regional public health agency | Africa CDC, ECDC | Data, surveillance and scientific cooperation within mandate | Automatic prescription/therapy authority across countries |
| Medicines regulatory network | European Medicines Agency | Medicines evaluation and regulated processes in defined territories | A universal diabetes/BMI screening guideline |
| Voluntary regional health cooperation | ASEAN Health Sector | Professional dialogue and cross-border programmes | Binding national healthcare requirements |
| Academic medical society or journal | EASL and future country medical journals | Exact appraised study publications, disease-specific technical material | Approval of all articles or license to republish copyright material |

**PAHO is dual-role:** the WHO Regional Office for the Americas and a distinct specialized inter-American public health agency. It appears as one identity in this batch to avoid counting identical institutional records twice.

## Data model

- **Countries**: M49 and ISO keys, UN region/subregion, WHO administrative region, dates/source notes and discovery stage. Batch A has 25 seeded geographic records—**not** all M49 countries and territories.
- **Organizations**: stable entity ID, official/local name (more translations to follow), home country where applicable, type, mandate, source website, research conditions and *source identity verification* separate from scientific review.
- **Relationships**: directed `from → to` edges with typed relations, reference URL, effective date, confidence/review status, and limits. These connect countries to WHO regions, national institutions to their principal countries, supra-national agencies to countries in scope, and a small number of **candidate** medical evidence issues to relevant organizations.
- **Claims (separate ledger, in [PR #63](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/63))**: claim ID, topic, actual studied people, exact source, effect/uncertainty and review state. Cross-linking an authority to `CLAIM-RDI-006` is only a **research lead** until the article's authorship/endorsement and claim are independently appraised.

**Edge labels matter:** `classified_in_WHO_region`, `based_in_or_primarily_serves_country`, `regional_member_state_cooperation`, `EU_medicines_regulatory_network`, and `candidate_source_relationship` are different facts and must never be merged into a generic "endorses" relation.

## Batch sequence to cover every country and many regions

1. **Batch A (this proposal):** First 25 M49-matched countries spanning WHO's six regions, and 54 sampled agencies and networks; establish data model, structural tests, important reassignment caveats.
2. **Batch B (country skeleton):** Obtain the full current M49 country/**area** inventory directly from UNSD; import all valid codes, identifying sovereign states versus territories transparently. Record unknown WHO coverage rather than guessing, then verify current WHO offices using region-specific country directories. Add one official national health authority where one exists, or explicitly note a dependency territory's competent authority.
3. **Batch C (medical depth):** Per-country research for all seven present selectable conditions—diabetes, hypertension, cholesterol/FH, gout, lactose intolerance, celiac disease and hemochromatosis/iron overload. Prioritize primary national health ministry and research-institute publications, regional society statements, journals indexed in reliable bibliographic sources, and subnational/Indigenous-led scientific bodies.
4. **Batch D (network edges):** Validate current international membership, role and effective dates. Identify cross-border trials and professional societies and distinguish participation from editorial control or scientific endorsement.
5. **Batch E (appraisal links):** Tie each candidate claim from #27/#28–62 to exact primary publisher or issuing organization, original language and appropriate user-selected topic. **Appraisal of every claim remains mandatory before user-facing relevance mapping.**
6. **Batch F (visual atlas):** Publish an accessible, optional map showing country coverage and source type. Country click → verified authorities → associated research topics → appraisal status. Optionally show organization/claim network links. The map should *not* color places by inferred disease risk; lighter coverage does not mean healthier people.

Suggested review metadata to add in later batches: date of source verification; archival citation; original-language title; formal affiliation and ownership; peer-review policies and indexing (for journals); regulatory/guideline mandate; regional/subnational jurisdiction; institution name changes; and who checked each fact.

## Future world map specification

**Base geography:** UN M49 country and territory polygons where licensing permits.  
**Data overlay:** organization and regional-network nodes plus selected, audited scientific links (not necessarily physical offices).  
**Filters:** health condition, source language, evidence level, issuing organization type, WHO vs UN region and research coverage.  
**Click-through:** trace the exact source and issue, see original language, English explanation and unresolved critiques.  
**Accessibility:** country list and searchable table always available, keyboard controls, screen-reader labels, no color-only statuses, low-bandwidth view.  
**Privacy:** no user geolocation, no saving personal ancestry or medical selections, no tracking.  
**Scientific guardrail:** a connection on the map means recorded organizational or evidentiary relationship, **not** a validated biological mechanism or personal medical implication.

## Contributions and maintenance

Anyone can propose a new authority, missing local medical journal, agency name correction, new network link, official page, historical change or conflicting evidence in [issue #64](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/64) or via the project contribution pathway. Correct an outdated role even if the change means **removing** an apparent cross-country relationship. Do not upload personal medical/genetic records or copyrighted full journal articles.

Run the structural gate with `node scripts/check-authority-atlas.mjs`; GitHub's `Authority atlas integrity` workflow checks relevant PRs. This tests schema integrity **only**, not whether an agency's statement is clinically correct.
