# Independent legacy evidence review — batch 01 (ANC/NUT/PGX)

**Reviewed:** 2026-11-04. **Status:** research-only, five of the 94 previously unaudited ANC/NUT/PGX claims. **Scope:** source-claim correspondence checked from publisher, PubMed, government or guideline-body pages, not independent full systematic review or professional clinical signoff. Original research matrices and their claim IDs are unchanged.

This is a companion appraisal; it does **not** change the historical `NOT_AUDITED_IN_THIS_PASS` values in the Team-4-era [unified index](../UNIFIED_CLAIM_INDEX_2026-11-04.csv). An explicitly versioned reviewed-claim register can be introduced when the original index's integrity contract is updated in a separate reviewed change. **Do not interpret a positive evidence disposition here as approval to implement an algorithm or individual medical advice.**

## Audit method and decision vocabulary

For each row, compare the **precise original assertion**, publication identity/date and version, studied population, measured endpoint, design, uncertainty, competing evidence or later guidelines, and suitability for public use. `CORROBORATED_NARROW` means the **limited source-level proposition** matches a directly inspected source; `QUALIFIED` means essential restrictions or a non-significant outcome prohibit broader wording. Neither category means clinical validation. Corrections/retractions were considered during targeted source discovery; **a comprehensive errata/retraction database sweep was not performed for these five references** and remains a required later check.

| Claim ID | Review disposition | Source-level finding | Public-use gate |
|---|---|---|---|
| **ANC-001** | `CORROBORATED_NARROW` | WHO 2004 expert consultation describes variable BMI–cardiometabolic-risk relationships across Asian populations; *action points* 23 and 27.5, not universal diagnostic or ideal-weight cutoffs. | Research/screening policy context only; never individual ideal weight. |
| **ANC-002** | `CORROBORATED_NARROW` | NICE NG246 recommendation 1.9.11 applies lower adult BMI screening thresholds to enumerated groups in **UK** practice. | Jurisdictional guideline, not a universal biologic threshold or a genetic prediction. |
| **NUT-001** | `CORROBORATED_NARROW` | Original DPP randomized trial reported **58% relative** type 2 diabetes incidence reduction vs placebo (95% CI 48–66%) over average 2.8 years for an intensive lifestyle intervention. | Does not validate this website or an individualized diet/weight target. |
| **PGX-002** | `QUALIFIED` | TAILOR-PCI 2020 randomized trial's prespecified 12-month primary endpoint favored guided treatment numerically but was **not statistically significant** (HR 0.66, 95% CI 0.43–1.02; p=0.06). | No established superiority from this trial; no prescribing or ancestry-derived genotype inference. |
| **PGX-003** | `CORROBORATED_NARROW` | Published CPIC 2017 update supports the measured `HLA-B*15:02` / carbamazepine serious cutaneous reaction association; newer 2026 UK CERSI-PGx recommendations additionally discuss HLA-B*15:11 and HLA-A*31:01. | Educational gene–drug relationship only; pharmacogenetic results require clinical interpretation and assay verification. |

## Claim-specific appraisal

### ANC-001 — Asian population BMI risk / action points

- **Original assertion:** risk of type 2 diabetes and cardiovascular outcomes can occur below BMI 25 in some Asian populations; WHO proposed action points 23 and 27.5, while retaining international BMI categories.
- **Identified source:** WHO Expert Consultation, *The Lancet*, **January 10, 2004**, 363:157–163. DOI **10.1016/S0140-6736(03)15268-3**; PMID **14726171**. [Publisher abstract](https://doi.org/10.1016/S0140-6736(03)15268-3); [PubMed record](https://pubmed.ncbi.nlm.nih.gov/14726171/).
- **Population, design, endpoints:** expert synthesis drawing on Asian population associations between BMI, body-fat percentage and cardiometabolic risk, **not** an RCT of a particular BMI cutoff. Source reports variation in observed-risk BMI ~22–25 and high-risk BMI ~26–31 among populations.
- **Exact support:** publisher summary explicitly says international WHO BMI classifications were retained and identifies additional public-health action points at **23.0, 27.5, 32.5 and 37.5**; it says there is **no clear common cutoff for all Asian populations**.
- **Limitations / apparent conflict:** population group heterogeneity and observational underpinnings; a WHO action point is not a diagnostic test, ancestry-based personal formula or validated weight goal. Modern jurisdictional guidance can differ; ANC-002 provides a UK-specific example, not independent biological confirmation.
- **Disposition:** `CORROBORATED_NARROW` for historical WHO policy summary. No equation or personal threshold authorized.

### ANC-002 — UK NICE screening thresholds

- **Original assertion:** NICE recommends practical lower BMI thresholds for listed minority-ethnicity groups.
- **Identified source/version:** [NICE NG246, *Identifying and assessing overweight, obesity and central adiposity*, recommendation **1.9.11**](https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity), guideline page current at review date; **recommendation carries [2022] wording** within NG246.
- **Population and endpoint:** adults in UK practice with South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean backgrounds; screening/assessment category, not a prospective measured ideal-weight endpoint.
- **Exact support:** guideline states overweight **BMI 23.0–27.4 kg/m²** and obesity **BMI ≥27.5 kg/m²** as a **practical measure** for the listed groups. Adjacent recommendations caution about high muscle mass and older adults.
- **Limitations / contrasting frame:** jurisdiction-specific practice guidance; does not prove common causality or applicable adjustment for every individual, mixed ancestry, children, pregnancy or other jurisdictions. It must not be mislabeled a universal genetic or physiological threshold.
- **Disposition:** `CORROBORATED_NARROW` for the guideline's actual adult screening policy, with jurisdiction noted.

### NUT-001 — Diabetes Prevention Program (DPP)

- **Original assertion:** intensive lifestyle intervention reduced *incident type 2 diabetes* by **58% relative to placebo** in high-risk adults; no genotype/diet matching was tested.
- **Identified source/version:** Knowler et al., Diabetes Prevention Program Research Group, *NEJM* **February 7, 2002**, 346:393–403. DOI **10.1056/NEJMoa012512**; PMID **11832527**. [PubMed original-trial abstract](https://pubmed.ncbi.nlm.nih.gov/11832527/); [NIDDK publication record](https://repository.niddk.nih.gov/publications/2829); trial registration **NCT00004992**.
- **Population, comparison, measured endpoint:** **3,234** high-risk participants with elevated glucose/impaired glucose tolerance; randomization to intensive lifestyle, metformin or placebo. Average follow-up **2.8 years**. Endpoint was *new-onset T2D*, not BMI or surrogate-only change.
- **Exact result/uncertainty:** lifestyle group **58% relative incidence reduction** (95% CI **48–66%**) versus placebo; diabetes incidences **4.8 vs 11.0 per 100 person-years** in lifestyle vs placebo in the published abstract. Relative reduction is not a personal absolute chance, does not apply unchanged to lower-risk populations and does not directly compare named eating patterns.
- **Limitations / competing designs:** structured high-contact support differs from a passive educational calculator; no ancestry genotype–treatment matching, specific ideal-body-weight equation or personal dietary prescription demonstrated. The trial's population diversity does not establish subgroup-specific effects without separately appraised analyses.
- **Disposition:** `CORROBORATED_NARROW` for incident diabetes reduction in this RCT and comparison, not consumer-app efficacy.

### PGX-002 — TAILOR-PCI primary outcome

- **Original assertion:** prespecified 12-month composite ischemic outcome occurred in **4.0%** genotype-guided versus **5.9%** conventional clopidogrel among CYP2C19 LOF carriers; HR **0.66** (95% CI **0.43–1.02**), p **0.06**.
- **Identified source/version:** Pereira et al., *JAMA* **August 25, 2020**, 324:761–771. DOI **10.1001/jama.2020.12443**, PMID **32840598**, PMCID **PMC7448831**. [Publisher trial and outcome table](https://jamanetwork.com/journals/jama/fullarticle/2769725); [PubMed](https://pubmed.ncbi.nlm.nih.gov/32840598/); registration **NCT01742117**.
- **Design, population and endpoints:** open-label randomized trial, **5,302** undergoing PCI for ACS or stable CAD at 40 centers; prespecified primary analysis of **1,849** CYP2C19 LOF carriers. Composite 12-month endpoint: cardiovascular death, MI, stroke, stent thrombosis, severe recurrent ischemia.
- **Exact result:** 35/903 (4.0%) vs 54/946 (5.9%), HR 0.66, 95% CI 0.43–1.02, **p=0.06**. The confidence interval crosses 1 and primary superiority was not achieved. The trial was powered to detect a larger effect (HR 0.50); a non-significant finding is **not** proof of equivalence or no effect.
- **Contrasting evidence and limits:** POPular Genetics (NEJM 2019, DOI **10.1056/NEJMoa1907096**) tested a **different primary-PCI population/comparator and noninferiority/bleeding endpoints**, so its positive noninferiority and bleeding findings cannot be substituted for TAILOR-PCI's failed primary superiority test. Post hoc early-time-window findings must remain post hoc.
- **Disposition:** `QUALIFIED`: matrix's outcome and numbers match the trial; distinguish *RCT study design* from the matrix's `clinical_status: observational` actionability label. No app antiplatelet recommendation is authorized.

### PGX-003 — HLA-B*15:02 and carbamazepine

- **Original assertion:** measured HLA-B*15:02 is strongly associated with carbamazepine-related SJS/TEN, with expert genotype-based guidance; ancestry is not genotype.
- **Sources and versions:** Phillips et al., **CPIC 2017 update**, published *Clinical Pharmacology & Therapeutics* **April 2018**, DOI **10.1002/cpt.1004**, PMID **29392710**, PMCID **PMC5847474**. [Publisher guideline and table 2](https://doi.org/10.1002/cpt.1004); [PubMed](https://pubmed.ncbi.nlm.nih.gov/29392710/). Later UK CERSI-PGx guideline by Galloway et al., *British Journal of Clinical Pharmacology* **July 2026** (online **April 19, 2026**), DOI **10.1002/bcp.70559**, PMID **42002301**, PMCID **PMC13304249**; [publisher version](https://doi.org/10.1002/bcp.70559).
- **Population, outcome, design:** CPIC guideline synthesis addresses carriers with a **measured** HLA genotype in the context of carbamazepine/oxcarbazepine exposure; outcome is serious immune-mediated skin reactions, **not** weight or nutritional response. This is guidance synthesis, not an intervention RCT.
- **Exact support:** 2017 CPIC guideline describes HLA-B*15:02/SJS-TEN association and recommendations conditional on genotype, treatment exposure and options. **2026 CERSI-PGx** adds specific testing considerations across ancestries and includes HLA-B*15:11/HLA-A*31:01; it is a **distinct UK guideline**, not proof of a new universal CPIC version.
- **Limitations / cross-guideline differences:** allele-level accuracy, accredited testing, treatment history and local guideline context are essential. Having the same broad ancestry as a carrier population does not establish genotype; noncarriers are not risk-free. No medicine selection or dose recommendation belongs in Ancestry Health's consumer calculator.
- **Disposition:** `CORROBORATED_NARROW` for genotype-associated adverse reaction risk; newer guideline requires additional specialist appraisal before modifying even educational public copy.

## Unresolved gates and next queue

- **89 other original ANC/NUT/PGX claims** are not assessed in this batch. Preserve all 94 original index rows and research files; sequence further focused batches through primary-source verification before considering a separate cumulative register.
- Each of the **seven LAB gaps** (LAB-007, LAB-019, LAB-022, LAB-027, LAB-029, LAB-030, LAB-037) remains `SOURCE_GAP`; **LAB-040 stays `WITHHELD`**. A candidate reference is not closure of an original evidence gap.
- The 2026 UK CERSI-PGx guidance should be checked for any superseding statements in local US policy before citing publicly. More extensive correction/retraction checks, full-text bias appraisal, and actual site copy mapping remain open.
- No public diet, lab, BMI or drug logic was changed. This record is for discussion and audit traceability only.
