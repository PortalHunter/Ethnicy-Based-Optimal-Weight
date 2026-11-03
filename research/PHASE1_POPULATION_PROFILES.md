# Phase 1: Population profiles, evidence, and clinical safeguards

Updated: 2026-11-02. Public-facing research documentation. This is an educational ancestry-informed calculator, not a validated diagnostic tool.

## Purpose and design

The calculator supports **11 broad selectable ancestry/heritage families** and **62 optional specific subgroups**. A separate optional founder/family heritage question is provided for Ashkenazi Jewish, Sephardic/Mizrahi Jewish, French Canadian/Québec founder, Finnish founder, and other known founder-population heritage.

The broad families are Europe; sub-Saharan Africa/African diaspora; East Asia; South Asia; Southeast Asia; Middle East/North Africa; Hispanic/Latino; Indigenous Americas/Arctic; Pacific Islands/Māori; Aboriginal Australian/Torres Strait Islander; and Other/not listed.

Subgroups are defined in `POP_REGIONS` in [the calculator](../optimal_body_weight_calculator-9.html). The UI displays a **region first, specific population second** pattern, with optional detailed selection. Mixed ancestry retains up to three backgrounds and percentages totaling 100%; users may choose distinct subgroups within the same broad family. In addition, the UI retains an explicitly labelled *unvalidated* percentage-blending option already present in the calculator.

**Clinical preservation policy:** Every optional subgroup inherits its broad family's existing `group` and `adaAsian` flags. None of the 62 subgroups introduces a BMI, waist, weight, diabetes-buffer or body-frame formula. The existing broader category labels, legacy inputs and clinical calculations remain available. Australian First Nations populations are given the standard WHO international adult BMI category because no separately validated threshold is being claimed.

## Interpreting evidence

Three different types of evidence are deliberately separated:

1. **Guideline-based clinical BMI action points.** The existing international/NICE and ADA 2026 categories remain in force. For example, NICE gives lower BMI thresholds to South Asian, Chinese, other Asian, Middle Eastern, Black African and African-Caribbean backgrounds. Different authorities may handle some backgrounds differently.
2. **Population epidemiology and genotype-association findings.** These can justify *information* about particular populations, but cannot determine any user's genes or produce a validated personal ideal weight. Such studies are affected by geography, environment, healthcare access, sampling, age and other confounders.
3. **Hereditary disorders/founder conditions.** A group- or family-enriched variant does not establish an individual's genotype, penetrance, symptoms, or need for a particular test. Personal history, family history and clinical testing can be more informative.

The page marks profile evidence as inherited-condition/founder-population evidence, genotype-specific evidence, genetic association, population epidemiology, body-composition evidence, population health survey, or exploratory. **Exploratory means there is not enough direct evidence to generate population-specific clinical advice.** There are **33 explicitly sourced subgroup notes** and a conservative explanatory fallback for the remaining 29 subgroup options.

Neither race nor ethnicity is a reliable substitute for individual genomic testing. The interface does **not** claim genetic diagnoses, require ancestry-only testing, or remove universal screening eligibility. See ACOG's universal hemoglobinopathy approach below.

## Priority population-specific evidence by cluster

| Cluster and options | What evidence informs the note | Clinical limit |
| --- | --- | --- |
| Northern Europe: Scandinavian, British/Irish | HFE hemochromatosis association | Iron studies, symptoms and family history matter; not everyone carries a variant |
| Finland | Finnish founder-associated rare inherited conditions | Not a reason to change weight or order broad testing without context |
| Mediterranean / Balkans | Thalassemia and other hemoglobin disorders | Carrier screening and diagnosis should follow clinical guidelines |
| West/Central African ancestry | APOL1-associated kidney disease | Genotype- and context-dependent; not an ancestry diagnosis |
| African American and Afro-Caribbean | Cardiometabolic epidemiology and diabetes-risk differences | Do not convert population averages into individual probability |
| Chinese / Indian / Pakistani / Bangladeshi / Sri Lankan / Nepali | Diabetes-risk-at-BMI research | Risk-equivalence estimates are not new validated weight targets |
| Filipino and Vietnamese | CDC subgroup-specific US diabetes prevalence | Findings are US survey estimates, not genes |
| Turkish / Armenian / some Arab and North African groups | Familial Mediterranean fever and hemoglobin disorders | Symptoms, diagnosis, and family history guide care |
| Mexican, Puerto Rican, Cuban | CDC cardiometabolic variation within US Hispanic/Latino groups | Hispanic/Latino describes an overlapping cultural identity |
| Greenlandic Inuit | TBC1D4 variant and type 2 diabetes | Genotype-specific result cannot be inferred from ethnicity |
| Canadian Inuit, Iñupiat/Yup'ik | CPT1A Arctic variant and infant fasting tolerance | Pediatric/newborn relevance; no adult diet recommendation |
| Samoan | CREBRF association with BMI and diabetes | Does not imply genotype or warrant an alternate weight target |
| Māori | Body composition / BMI limitations | Waist-to-height and metabolic data add context |
| Aboriginal Australian, Torres Strait Islander | Australian First Nations diabetes and nutritional biomarker surveys | Aggregate findings are **not** ethnicity-specific genetic predictions |
| Other named subgroups | Retained to support inclusive self-identification | No invented clinical subgroup-specific rules |

**Coverage limitations:** Indigenous Nations and communities differ internally and should not be collapsed biologically. The options are self-identification aids, not exhaustive or mutually exclusive national classifications. Optional Nation/community-level detail and language preferences could be added in a later evidence review with community consultation. The three-entry limit is a UI constraint, not a statement about ancestry biology. Ancestry proportions are self-reported rather than genetically measured.

## Founding/hereditary-context notes

The optional founder-heritage selector can show information about familial Mediterranean fever, Finnish disease heritage and familial hypercholesterolemia in French Canadian populations. It does not feed any weight calculation or change screening eligibility. Ashkenazi Jewish heritage is acknowledged without specifying unverified individual disorder probabilities; current inclusive screening guidance is cited.

## Full new source register

Sources below are also contained in the calculator's `REFS` array and are linked directly beside each rendered claim. Existing original calculator sources remain unchanged.

| Key | Source and why it is used |
| --- | --- |
| `pop_hfe` | [GeneReviews — HFE-Related Hemochromatosis](https://www.ncbi.nlm.nih.gov/books/NBK1440/) — northern European HFE background and diagnostic context |
| `pop_finn` | [Finnish genetic heritage review, 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9637267/) — founder-enriched variants |
| `pop_thal` | [CDC — About Thalassemia](https://www.cdc.gov/thalassemia/about/) — familial inheritance and regional distribution |
| `pop_apol1` | [National Kidney Foundation — APOL1-Mediated Kidney Disease](https://www.kidney.org/kidney-topics/apol1-mediated-kidney-disease-amkd) — western/central African genetic association |
| `pop_cdc` | [CDC MMWR, 2024: cardiometabolic diseases in disaggregated racial/ethnic subgroups](https://www.cdc.gov/mmwr/volumes/73/wr/mm7303a1.htm) — population-specific U.S. estimates |
| `pop_tbc` | [Moltke et al., Nature 2014, PMID 25043022](https://pubmed.ncbi.nlm.nih.gov/25043022/) — Greenlandic TBC1D4 genotype and diabetes |
| `pop_cpt` | [GeneReviews — CPT1A Deficiency](https://www.ncbi.nlm.nih.gov/books/NBK1527/) — Arctic infant variant, phenotype limitations |
| `pop_fmf` | [GeneReviews — Familial Mediterranean Fever](https://www.ncbi.nlm.nih.gov/books/NBK1227/) — MEFV and population patterns |
| `pop_samoa` | [Minster et al., Nature Genetics 2016, PMID 27455349](https://pubmed.ncbi.nlm.nih.gov/27455349/) — CREBRF BMI association |
| `pop_samoa_dm` | [Polynesian CREBRF and diabetes analysis, PMID 35144939](https://pubmed.ncbi.nlm.nih.gov/35144939/) — glucose and diabetes associations |
| `pop_abs` | [Australian Bureau of Statistics, 2022–24 health measures survey](https://www.abs.gov.au/statistics/people/aboriginal-and-torres-strait-islander-peoples/national-aboriginal-and-torres-strait-islander-health-measures-survey/2022-24) — First Nations population health statistics |
| `pop_fh` | [GeneReviews — Familial Hypercholesterolemia](https://www.ncbi.nlm.nih.gov/books/NBK174884/) — founder-population prevalence |
| `pop_acog` | [ACOG 2022 — Universal Hemoglobinopathy Testing](https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/08/hemoglobinopathies-in-pregnancy) — screening should not depend exclusively on ethnicity |

Original relevant sources preserved: [NICE NG246](https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity), [Caleyachetty et al. 2021](https://pubmed.ncbi.nlm.nih.gov/33989535/), [WHO 2004 Asian BMI consultation](https://pubmed.ncbi.nlm.nih.gov/14726171/), [WHO general BMI classification](https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight), and the [ADA 2026 screening framework](https://diabetesjournals.org/docm-care/article/1/4/536/170058/Screening-Diagnosis-Evaluation-and-Staging-of).

## Software safeguards and validation

- Form values are processed locally in browser JavaScript; no ancestry data is posted to a backend by this HTML.
- All 62 subgroup entries map to existing BMI flags and preserve legacy formulas.
- Results list claims beside individual links; references are renumbered and collected based on the claims actually displayed.
- Other/not listed remains available; subgroup detail is optional.
- Tests are in [tests/population-phase1.test.mjs](../tests/population-phase1.test.mjs). They compare key numeric results for every subgroup to its broad parent, check mixed-subgroup input, source-key integrity, and UI/script structure.

**Not implemented (Phase 2):** changes to BMI thresholds; population-specific ideal-weight equations; genetic risk scoring; prescribing or dietary treatment based on genotype; clinical validation, individual probabilities, or recommendations to exclude patients from routine screening.
