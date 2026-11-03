# Research Team 3 — Pharmacogenetics Educational Module Proposal

**Project:** Ancestry-Adjusted Optimal Body Weight & Nutrition Calculator  
**Research cutoff:** 1 November 2026  
**Proposed product:** an independent, linked, evidence-cited **Pharmacogenetics Research & Education** sub-page.  
**Decision:** **Design-only proposal; no calculator changes or medication decision support.**

## Product recommendation

Create a dedicated pharmacogenetics (`PGx`) research/reference page, linked from but operationally separate from the existing calculator. This preserves the original program's purpose while making room for rigorous pharmacogenetic education. The page should not take the user's ancestry distribution, weight, BMI, medications, health conditions, genotype file or laboratory results as inputs. It should display generic, curated source descriptions with explicit dates and caveats.

### Architecture options assessed

| Option | Benefits | Scientific and product risks | Decision |
|---|---|---|---|
| Embed PGx advice in the existing weight-calculator results | Fewer clicks | Creates false causal link from weight or ancestry to medication choice; encourages inferences that cannot be validated | **Reject** |
| Add a separate PGx education sub-page | Clear scope and discoverability; standalone review/versioning | Requires editorial upkeep and links to authoritative sources | **Preferred now** |
| Create a separate linked, read-only evidence reference module | Can support machine-auditable claims, internal provenance and update workflows | Additional maintenance complexity; could be misused as CDS if outputs become personalized | **Preferred underlying content layer** |
| Build patient-specific PGx clinical application | Possible future clinical utility | Very different requirements for lab validation, clinical integration, licensing/regulation, governance and clinical oversight | **Future independent program only** |

**Reasoning:** Specific established gene–drug results, such as HLA-B*15:02 and carbamazepine or CYP2C19 and clopidogrel, demonstrate scientific value; however, neither ancestry fractions nor the current tool's measurements provide the validated diplotypes, clinical context and monitoring capacity needed to make those results actionable for a person. For newer GLP-1/GIP findings there are plausible research associations but no approved clinical prediction rule. [CPIC guideline index](https://cpicpgx.org/guidelines/) · [Nature GLP1 study, 2026](https://doi.org/10.1038/s41586-026-10330-z).

## 1. Intended use and explicit non-use

**Intended use:** Promote literacy about drug metabolism, pharmacodynamic variants, drug-adverse-event relationships, gene–drug guidelines, source quality, why validated testing differs from ancestry and why individual response is multifactorial. Provide non-personal educational prompts for discussion with licensed clinicians.

**Not intended:** (a) predict an individual's genotype or metabolizer phenotype; (b) interpret a consumer DNA raw-data export; (c) select, initiate, stop, replace or adjust medication; (d) triage immediate drug toxicity; (e) estimate the safety of an individual's drug from ancestry; (f) use weight loss/BMI/heritage to prescribe GLP-1 medicines; (g) create clinic decision support.

**Proposed top-of-page notice:**

> This page describes published research and clinical guidelines about gene–drug relationships. It cannot determine your genotype, interpret your test, or recommend a medication or dose. Ancestry statistics are not personal genetic results. Never change medication on the basis of this page; discuss questions about testing and treatment with a qualified healthcare professional.

## 2. User journeys

**Journey A — General understanding:** Learn that CYP2C19 metabolizes or activates certain medicines and that function varies by validated diplotype. Click a source and read what the guideline does—and does *not*—say.

**Journey B — Understand a safety warning:** Learn why a clinician may discuss HLA-B*58:01 screening before allopurinol in certain contexts. The page shows that the ACR screening policy is conditional, limited in scope, population-contextual and different from interpreting a confirmed genotype. It does not ask the user their heritage or if they take allopurinol.

**Journey C — Compare evidence:** A gene–drug page contrasts CPIC action guidance, FDA labeling, the level of clinical-outcome evidence, and limitations in studies of non-European populations. Examples include clopidogrel guideline recommendations next to the TAILOR-PCI trial's **P=0.06** primary outcome—no false claim that every outcome trial conclusively confirms benefit.

**Journey D — Investigate GLP-1 treatments:** Explain that a 2026 `GLP1R` association (~0.76 kg additional weight loss per allele, 95% CI ~0.34–1.27 kg) is academically interesting and partially replicated, but neither drug selection nor ancestry-based dosing is validated. Distinguish absolute amount from percent change and note underlying cohort characteristics.

## 3. Proposed page structure

1. **About pharmacogenetics:** clearance, activation, receptors, enzymes, transporters, immunogenetics, ADRs; drug–drug interactions/phenoconversion.
2. **Evidence ladder:** professional genotype-driven action, demonstrated clinical utility, reproducible but not actionable associations, population-only findings, uncertain/conflicting evidence.
3. **Explore confirmed gene–drug examples:** CYP2C19–clopidogrel, HLA-B*15:02–carbamazepine, HLA-B*58:01–allopurinol, TPMT/NUDT15–thiopurines, CYP2D6–codeine/atomoxetine, SLCO1B1–statins, DPYD–fluoropyrimidines, HLA-B*57:01–abacavir, CYP3A5–tacrolimus.
4. **Population research and study limitations:** regional frequency comparisons with frequency type, study cohorts, no guessing genotype.
5. **What is *not* ready:** GLP1R/GIPR treatment-response research, many metformin/antidepressant candidate variants, untested polygenic prediction scores.
6. **Testing basics:** clinical laboratory reports; allele panels vs full sequencing; HLA typing; CYP2D6 structural variants; no uploading or automatic raw-file interpretation; clinician/lab help.
7. **Sources, methodology and change log:** complete review date, effect size/uncertainty, source link, authoring and review roles, changes in guideline versions; include the **June 2026 TPMT/NUDT15 correction** (https://pmc.ncbi.nlm.nih.gov/articles/PMC13652152/) as an example of why the published table and its errata must be checked.
8. **Boundaries & glossary:** test indication vs treatment guidance; no clinical or emergency use; links to qualified professionals where relevant, not individualized action.

### Reusable entry layout

| Content field | Example for CYP2C19–clopidogrel |
|---|---|
| Gene, medication and context | CYP2C19 · clopidogrel · specific cardiovascular/neurovascular contexts |
| What the gene changes | Clopidogrel activation; reduced-function alleles can lower active metabolite exposure |
| Relevant allele(s) | `*2`, `*3` and other confirmed loss-of-function alleles; requires valid diplotype |
| What is supported | CPIC 2022 contains actionable, *indication-dependent* clinical guidance |
| What is not implied | Ancestry cannot determine function; not a prediction for every individual; not universal screening advice |
| What is the trial evidence? | TAILOR-PCI primary comparison 4.0% vs 5.9%; HR 0.66 (95% CI 0.43–1.02), P=0.06 |
| Evidence status | `guideline-supported` for the gene–drug guidance; clinical-outcome trial maintained separately |
| Last verified | Date, guideline release and curator sign-off |
| Sources | https://pubmed.ncbi.nlm.nih.gov/35034351/ and https://pubmed.ncbi.nlm.nih.gov/32840598/ |

**Important:** Source sections should separate **FDA label**, **FDA association table** (Sections 1–3), **CPIC genotype interpretation**, **DPWG guidance**, **other specialty screening policies**, **clinical studies** and **population data**. They have different functions and should never all receive the same “FDA approved” graphic. See [FDA's table and September 2026 update](https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations).

## 4. Suggested content/data design (not implementation)

A lightweight static website and a reviewable content repository suffice at the educational stage. The proposed contract below is *editorial metadata*, not a drug decision engine:

```yaml
entry_id: PGX-ENTRY-CYP2C19-CLOPIDOGREL
claim_links: [PGX-001, PGX-002, PGX-025]
page_type: gene_drug_education
intended_audience: public_and_researchers
medication: clopidogrel
gene: CYP2C19
actionability_scope: confirmed_genotype_and_clinical_context_only
clinical_status: guideline-supported
guideline:
  authority: CPIC
  published: 2022
  source: https://pubmed.ncbi.nlm.nih.gov/35034351/
population_statistics_policy: research_only_not_user_input
personal_data_inputs: none
output_type: static_cited_information
version: 0.1-research
last_medical_review: not_completed
publish_status: expert_review_required
```

### Explicit technical boundaries

- **No shared clinical computation:** PGx data must not feed existing `BMI`, target-weight, body-frame, waist, ancestry-threshold, nutrient or diet recommendation functions. The existing calculator's ancestry selector must never be passed as a PGx input.
- **No individual genotypes:** Static educational pages only; no file-upload field; no local-storage/browser-storage collection of medications or genetic results; no clinical history form.
- **No backend patient profiles:** No third-party analytics capturing health or ancestry selections from this module, and no genetic data sent to external AI services.
- **No drug selector that returns personalized actions:** A gene or drug search can navigate to a fixed literature page; it cannot compute medication safety or choose alternatives.
- **No badges or color implying individual safety:** Avoid green/red "safe" and "unsafe" indicators tied to a user; use precise labels such as "clinical guideline exists" or "research association; not actionable."
- **No ancestry predictor:** Population percentages are read-only study descriptions, not an input for a genetic risk score.

## 5. Draft copy for clinical boundaries

**Ancestry box:** “Population research reports how frequently an allele was detected in particular cohorts. These numbers cannot tell you whether *you* carry that allele, how you will respond to a drug, or whether a test is right for you. Talk with a healthcare professional about your personal clinical circumstances.”

**GLP-1 research box:** “Researchers have identified variants that correlate with small differences in reported weight loss or digestive side effects during GLP-1-based treatment. These findings are under investigation. There is no validated genotype-based drug or dose recommendation in this reference.”

**Gene–drug entry footer:** “This summary is educational, not a review of your genetic test or your medication plan. Consult the linked guideline and a qualified clinician. Do not start, stop or alter medicines because of this information.”

**Negative test explanation:** “A negative panel may mean only that the variants *on that panel* were not found. Other variants, altered copy number and non-genetic factors can still affect medication response.”

## 6. Accessibility and comprehension

Target a plain-language public summary at approximately grade 8–10 while preserving technical detail in collapsible sections. Include definitions for “allele”, “carrier”, “phenotype”, “relative risk”, “odds ratio”, “clinical utility” and “genetic assay.” Each population graphic must label the **frequency denominator** (allele copies, carriers or case outcome) directly and include a screen-reader-accessible table. Avoid reliance on color only. Test mobile use and keyboard navigation against WCAG 2.2 AA as a design goal; test comprehension among laypeople, pharmacists and clinicians from diverse backgrounds. Provide prominent publication date and review freshness.

## 7. Governance and editorial rules

**Owners:** Research curator (source extraction), pharmacogenetics pharmacist (clinical action and nuance), medical geneticist/laboratory specialist (variant nomenclature and assay limitations), clinical reviewer (risk language), accessibility reviewer, security/privacy reviewer (if any logging is introduced).

**Release gates:** (1) every user-visible claim tied to a `PGX-` record; (2) references reachable and source date recorded; (3) every actionable pairing verified from the *current* CPIC or DPWG recommendation and FDA label independently; (4) evidence statuses distinguish observational and experimental findings; (5) specialist approval and non-clinical intended-use sign-off; (6) no user data intake or clinical outputs.

**Change triggers:** CPIC update or interim notice, FDA table or label change, new PharmVar nomenclature, credible contradictory outcome study, new external validation of GLP1R/GIPR findings, adverse-event reports, user feedback suggesting clinical misunderstanding. A guideline update creates a review ticket, **not** an automatic new recommendation.

## 8. Proposed acceptance tests for a future educational build

| Test | Expected result |
|---|---|
| Change an ancestry percentage inside the original calculator | PGx static content and original calculations do not change |
| Open a PGx gene page without any input | Full educational content, dates and sources load |
| Navigate to GLP-1 research | Prominent `observational/not actionable` text; no prescribed therapy/dose |
| Click on a CYP2C19 summary | Shows guideline **and** separately presents primary RCT uncertainty |
| Search for an unvalidated gene–drug pair | Explains insufficient evidence; never guesses |
| Inspect HLA population frequencies | Labels carrier vs allele frequency and source region |
| Try to paste a genome file or personal prescription list | No data entry or upload route exists |
| Simulate source guideline retirement | Entry requires human review, is flagged stale, and is not auto-updated |
| Run accessibility checks | Keyboard/screen reader/text size and table descriptions usable |
| Review codebase | No PGx functions called by original calculator scoring pathways |

## 9. Future extension boundary

A **separate clinician-mediated CDS application**, if ever pursued, requires independently documented intended use, validated lab inputs, genotype/diplotype translation, allele-call quality control, source-version locking, drug indications, medication lists, interacting drugs, clinical contraindications, recommendations traceable to evidence, risk management, medical governance, external validation, regulatory assessment and health information security. It should **not** be implemented by expanding the single-file weight calculator.

The FDA's [January 2026 CDS guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software) differentiates qualifying non-device clinician-reviewable CDS from regulated software functions. Being “educational” in a disclaimer is not sufficient if the actual functionality gives patient-specific instructions. The current educational concept deliberately avoids that boundary.

## Deliverable relationships

- Evidence backbone: `03_Pharmacogenetics_Research_Review.md`.
- Traceable claims: `03_Pharmacogenetics_Evidence_Matrix.md`.
- Source-defined frequencies: `03_Population_Medication_Response.md`.
- Validation/regulatory gates: `03_Pharmacogenetics_Clinical_Validation.md`.
- Coordination: `03_Pharmacogenetics_Integration_Handoff.md`.

**Recommended next product action:** approve the **read-only, unpersonalized content and clinical review specification** for a linked sub-page. Do not ship it before independent subject-matter review and citation audit. Do not alter the calculator.