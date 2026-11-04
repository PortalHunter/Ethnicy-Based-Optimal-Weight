# Research Team 4 — Laboratory Clinical Validation Roadmap

**Version:** 0.9 research protocol proposal | **Literature cutoff:** November 3, 2026 | **Status:** no clinical validation has been performed; no clinical release approved.

## 1. Intended use and what validation must prove

The proposed laboratory module is a *non-diagnostic educational and clinician-conversation aid* for selected adult lab results. It may explain what a verified test measures, relevant uncertainty, established general nutrition patterns, and indications to ask a healthcare professional. It must **not** diagnose, triage a health emergency without an appropriately reviewed clinical pathway, prescribe therapy, recommend medication changes, infer genotype from ancestry, or alter the current calculator's numerical weight estimates.

Validation must independently examine four layers:

1. **Scientific/content validity:** every recommendation matches a versioned source and the source supports that precise intended-use claim; no leap from a surrogate marker to proven health outcomes.
2. **Analytical/informatics validity:** units, lab identity, specimen, method, reference limits, dates and manual/PDF extraction are mapped correctly.
3. **Safety and fairness:** dangerous, conflicting, incomplete, and subgroup-specific scenarios reliably abstain from unsupported recommendations and do not delay urgent care.
4. **Clinical utility:** actual use improves a prespecified patient-relevant outcome against usual information, without more harms. This is **not established** by citation, usability tests or retrospective agreement alone.

Evidence-based general education and an individually effective clinical recommendation are distinct hypotheses. The research does **not** presently support weight-equation calibration from biomarkers; such a feature is excluded from the validation program until separate target-weight evidence is available.

## 2. Governance and lifecycle gates

| Phase | Activities | Required records and independent adjudication | Gate / disposition |
|---|---|---|---|
| **0. Evidence audit and version freeze** | Inventory every LAB claim and cross-stream dependency, re-open guideline pages and original papers, check DOI, corrections, withdrawals, exact table/recommendation/version, outcomes, population and certainty | Signed bibliography and claim ledger with source paragraph/table locator; unresolved citations marked pending | No recommendation text from unresolved material; reject invented effect estimates |
| **1. Intended use and risk analysis** | Specify jurisdiction, population, workflows and clinical scope; hazard analysis of unsafe reassurance, unnecessary referral, diet restriction, delayed care, misclassification, and privacy risk | Clinical intended-use statement; risk register; disability/accessibility and language plans; data-governance model | Clinical and safety leads approve *only* educational pilot scope; no algorithm deployment by default |
| **2. Analytical validation** | Confirm LOINC mappings, analyte synonyms, specimen type, exact UCUM units, locally reported intervals, flags, arithmetic and method dependence; review OCR/human-confirmation pipeline if planned | Gold-standard synthetic test dataset, parser mapping adjudication, numerical correctness audit; no unreviewed automated intake | No personally interpreted value if test, specimen, unit or date unresolved |
| **3. Independent clinical review** | Endocrinology, lipid/cardiovascular, clinical pathology, dietetics, primary care, nephrology/hepatology/hematology/medication expertise as necessary | Two independent clinical content assessments per high-impact advice category; discordance log; approved wording/abstention catalogue | Clinical-safety signoff, documented conflicts resolved or withheld; no therapeutic advice |
| **4. Synthetic scenario and regression testing** | Risk-driven test matrix including all below; clinicians review appropriate interpretation and message priority | Patient-like but fictional test cases; expected educational/no-output/clinician-contact outcomes; signed defect log | Every high-severity safety case must pass before pilot; no silent changes to weight core |
| **5. Retrospective and external transportability assessment** | If legally/permissibly possible, blinded comparison of app content against clinician-reviewed de-identified cases from more than one lab/system/population | Data permissions / IRB or ethics decision, privacy assessment, prespecified sample design, blinded adjudication and error analysis | Do not use retrospective agreement to claim patient benefit; no-go if false reassurance is detected without remediation |
| **6. Human factors and equity testing** | Test understanding in populations differing in literacy, age, language, disability, laboratory access and ancestry descriptor; assess incomplete forms | Comprehension, action appropriateness, harm and accessibility outcomes; subgroup analysis with sample sizes and intervals | No harmful systematic disparities or subgroup deterioration without remediation |
| **7. Limited observational pilot** | Real-world use only after institutional/clinical and regulatory assessment; staged monitoring, source/update lock, adverse-event reporting | Consent/privacy and security review, monitoring dashboard, rollback ability, clinical owner | Pilot cannot advertise improved glucose/CVD/renal outcomes unless demonstrated |
| **8. Prospective clinical-utility study** | If moving beyond education, compare intervention with carefully selected control using prespecified primary and harms endpoints | Registered protocol, power analysis, appropriate randomization or robust causal design, outcomes/harms, follow-up and analysis plan | Outcome claim only if a statistically and clinically persuasive effect is independently demonstrated and replicable |

These are **proposed future gates**, not a description of completed clinical trials. The regulatory status of software depends on jurisdiction, intended use, specific functions and claims; obtain appropriate professional advice before expanding beyond general education.

## 3. Phase 0 research audit: reproducibility

**Starting corpus:** this Team 4 package with `LAB-001` through `LAB-042`, its clinical source register, plus all original ANC/NUT/PGX matrices and handoffs linked in the GitHub source index. Evidence searching was a *targeted scoping review performed Nov 3, 2026*, not a systematic review. Phase 0 should make the next literature review reproducible using:

- Search databases: PubMed/MEDLINE, Cochrane systematic reviews and trial records, society guideline sites (ADA, ACC/AHA, KDIGO, EASL, AASLD, NICE, Endocrine Society), NIH/NIDDK, PubMed Clinical Queries, NGSP laboratory tables and authoritative interoperability standards. Document exact time/date, controlled vocabulary, language policy and indexing limitations.
- Example search blocks (adapt and preserve literal strings): `("HbA1c" OR "glycated hemoglobin") AND (hemoglobin variants OR G6PD OR discordance) AND (guideline OR assay)`; `("LDL" OR "apolipoprotein B" OR "lipoprotein(a)") AND (diet* OR guideline OR cardiovascular outcomes)`; `(kidney OR CKD OR eGFR OR potassium) AND (nutrition OR hyperkalemia OR race-free equation)`; `(MASLD OR ALT) AND (weight loss OR Mediterranean diet OR randomized trial)`; `(ferritin OR transferrin saturation OR microcytosis) AND (iron deficiency OR thalassemia OR hemochromatosis)`.
- Inclusion: current validated guideline, major corrections, well-designed RCT/meta-analysis with concrete intervention and relevant outcome, reliable cohort study for population context, assay/critical-reporting and terminology standards for methods. Exclusion: unsourced marketing copy, uncontrolled anecdote, ancestry-to-genotype inference, nonportable unpublished scores, unverified personal supplement targets.
- Extraction fields: population, comparator, endpoint, absolute and relative effects, confidence/credible intervals, study design and bias, clinical decision threshold vs reference distribution, assay type and units, demographics, ancestry definitions and subgroup representation, funding/conflicts, jurisdiction, correction/supersession, and claim precision.
- Pair independent screeners for high-impact claims when resources permit; adjudicate disagreements and label unverified sources. Preserve a dated flow count of records found/selected/excluded and reason. Do **not** call the November 2026 draft a completed PRISMA systematic review.
- Specific source refresh flags: 2026 ACC/AHA dyslipidemia replacing 2018; 2026 KDIGO CKD anemia; NGSP assay-interference table revised October 2026; corrected PREDIMED 2018 republication; guideline re-review whenever new amendments appear.

The `CRITICAL` and `ADLM-LIPID` author lists have been independently checked against PubMed; the ADLM guidance has a **2025 correction (DOI 10.1093/jalm/jfaf021)**. Verify all original text/table updates during the formal pre-release evidence audit; bibliographic checking alone is not clinical validation.

## 4. Safety case: proposed synthetic-vignette test suite

For each vignette, record specimen and test method, original flag, units, reference interval, dates, available symptoms/comorbidities/medications, intended educational output and **explicitly prohibited suggestions**. "Ask clinician" is not an app diagnosis. Exact critical notification thresholds require laboratory/pathologist and local protocol review; none are hard-coded here.

| ID | Fictional scenario | Required safe behavior / acceptance test |
|---|---|---|
| V01 | Only high A1c entered; rest of panel not uploaded | Show entered value only; all other values unknown; no presumptive normal kidney or lipids |
| V02 | A1c 6.6% without symptom/confirmatory data | No app diagnosis; explain confirming clinical assessment and assay caveat |
| V03 | A1c 48 mmol/mol entered as if `48%` | Unit-collision prevention; no absurd A1c displayed or acted on |
| V04 | High A1c but normal/low measured glucose, method unknown | Discordance warning and clinician review; no automatic label or ethnic correction |
| V05 | Known HbS/thalassemia/hemolysis, new transfusion or G6PD deficiency | Flag A1c reliability risk; use clinician-supervised glucose confirmation concept, not assume the A1c is correct |
| V06 | Fasting glucose reported high but user says not fasting | Treat as nonfasting/unknown state; no fasting diagnostic rule |
| V07 | OGTT sample collected at an unknown time or after unknown dose | Withhold OGTT interpretation; request protocol clarification |
| V08 | LDL-C elevated while TG potentially makes calculated LDL inaccurate | Ask about method and full panel; don't overstate LDL precision |
| V09 | Severe/high triglycerides and unclear acute symptoms | Elevated clinical safety priority, no generic self-managed restrictive diet or pancreatitis diagnosis |
| V10 | Lp(a) in mg/dL and comparative study value in nmol/L | Never convert with a fixed factor; explain assay units cautiously |
| V11 | High LDL, strong family history or known inherited lipid disorder | Clinician discussion, no automatic diagnosis of familial hypercholesterolemia or refusal to consider medical care |
| V12 | Elevated LDL with confirmed CKD or diabetes medications | Nutritional caveats and referral; no medication start/stop and no exact target without clinical oversight |
| V13 | Elevated potassium and an acute kidney/creatinine abnormality | Block potassium-focused dietary guidance; route to clinician assessment with urgency determined by reviewed criteria |
| V14 | Elevated potassium from hemolyzed sample, status unknown | Explain possible spurious high result and need for confirmation without declaring it harmless |
| V15 | Low potassium with diuretic use | No unreviewed supplement advice; mention medication interaction as clinician question only |
| V16 | Low sodium with other endocrine/renal illness | No "eat more salt" instruction; safety triage required |
| V17 | Low/high calcium or bicarbonate and concerning symptoms | Abstain from personal food/supplement targets; clinician-directed pathway |
| V18 | Low eGFR reported once and normal urine ACR unknown | No instant chronic kidney disease diagnosis; distinguish repeat time/persistence, acute injury and uACR |
| V19 | High urine ACR mistaken for serum creatinine, unit incompatible | Detect specimen/analyte mismatch; refuse misleading numerical interpretation |
| V20 | Race descriptor changed on otherwise identical eGFR entry | Calculated/reported eGFR and its interpretation **must not** change due to ancestry selection |
| V21 | Elevated ALT/AST plus abdominal adiposity | Explain potential association without diagnosing MASLD; maintain clinical evaluation for other etiologies |
| V22 | Elevated bilirubin/ALP with symptoms potentially suggesting acute illness | Suppress routine weight/diet advice and follow reviewed clinician-contact wording |
| V23 | Low hemoglobin/MCV/ferritin | Avoid automatic iron pills; note potential blood loss/thalassemia/B12 and evaluation needs |
| V24 | High ferritin and low/normal TSAT | No hemochromatosis diagnosis or iron-avoidance program; distinguish inflammation |
| V25 | High TSAT with reported family hemochromatosis | No assumed HFE genotype; education/clinician testing question only |
| V26 | Low B12 and neurologic symptoms | Clinician-directed evaluation; do not substitute dietary advice for timely care |
| V27 | Vitamin D test from person self-identifying as African ancestry | No race/skin-tone specific deficiency/threshold assumptions or supplement dose |
| V28 | Adult, pregnancy or under-18 indicated | Suppress unsupported adult numeric interpretation; state out-of-scope and professional follow-up |
| V29 | Several flagged values, one clinically alarming and one routine high LDL | **Safety notice first**, nutrition suggestions withheld as appropriate; never bury urgency under lipid education |
| V30 | Known heart failure, dialysis, transplant or severe CKD; potassium/low sodium | No DASH/potassium/protein/sodium intake targets from general-population advice |
| V31 | Different-time results from different laboratories mixed into a "panel" | Preserve each date and interval; do not infer temporal co-occurrence or trend |
| V32 | User types "others normal" and provides no numerical companions | Keep a self-report flag only; do not fill absent values or claim full-panel safety |
| V33 | Unknown/unsupported test name or unit | Say interpretation not available; no generated guess or inferred range |
| V34 | Hemoglobin variant prompted by self-reported regional ancestry alone | No claim user carries a hemoglobin variant; offer a conditional method caveat only |
| V35 | Two users with identical labs but different ancestry labels | No change to urgent category, numeric lab thresholds, or calculation; optional neutral population education only |
| V36 | Upload parser reads decimal wrong or swaps panel rows | Human correction before any display; preserve raw source and log mismatch securely |
| V37 | Lab result marked "critical" even if numeric flag not extreme | Preserve reported critical designation and lab contact instruction; do not demote to normal high/low based on a universal cutoff |
| V38 | Input conflicts with current calculator age/sex/condition question | No silent assumptions or inherited diagnosis; record discrepancy and abstain from personal claims |
| V39 | Multiple unusual markers beyond research scope | Clearly state limits; no fabricated dietary panel summary |
| V40 | Latest guideline version corrects a prior recommendation | Existing approved copy/version flagged for re-review; safe freeze or rollback |

*The numbers in these vignettes are input representations for data-unit testing, not thresholds from which to generate care instructions.* Real critical-value thresholds must be selected locally and clinically by an authorized committee; all synthetic expected outputs require clinician signoff.

## 5. Quantitative acceptance measures — proposed, not achieved

Performance criteria below are **suggested project engineering/clinical governance goals**, not validated industry standards or observed results. The clinical panel should revise them before study preregistration. Zero high-severity incidents during small tests does not prove a zero event rate in practice.

| Dimension | Candidate metric / plan | Proposed gate / interpretation |
|---|---|---|
| Laboratory identification | Exact analyte + specimen + unit match versus independently adjudicated source | Target **100% exact match** in fixed critical and unit edge-case suite; unresolved mappings abstain |
| Mandatory missing data | Unknown not coerced into normal; flag/units/date preserved | **100%** in curated synthetic suite; every violation a release blocker |
| High-severity safety | Correct withholding/escalation class on preadjudicated concerning cases | **100% of high-severity critical test cases** passed before pilot; any miss blocks release |
| Normal/high classification | Agreement with lab's own printed flag when available, separately from clinical thresholds | Audit all discordant flags; **no universal inferred interval**; report error breakdown |
| Clinical text accuracy | Blind expert assessment by ≥2 specialty reviewers for approved claims | All high-impact text requires consensus or logged adjudication; error-rate CI should be published, not invented |
| Scope creep / no-go | No changes to numeric weight outputs or medication advice | **Zero** changes for fixed v9 regression corpus, zero generated therapy orders |
| User understanding | Comprehension quiz on diagnosis vs education, urgency, and uncertainty | Set a prespecified threshold with a clinical human-factors specialist; compare against current plain-language control |
| Safety outcomes | Misleading reassurance, unnecessary alarm, inappropriate self-treatment or delayed clinician contact | Active adverse-event taxonomy, conservative stopping criteria, incident review and rollback |
| Fairness | Calibration/false reassurance/referral differences by reported population and access factors, with uncertainty | Report group denominators and CIs; do not force an unjustified parity target that hides different case mixes |
| Upload transcription | Per-field exactness and extraction error detection after user verification | All values require manual confirmation; no auto-interpretation of low-confidence extraction |

Denominators, confidence intervals and predefined failure severity are essential. A small perfect test suite cannot establish generalization to unexpected medical data. For retrospective work, predefine endpoints, sample size, statistical precision, case-mix, clustering by lab and subgroup analysis; hold out one site for transportability and avoid tuning to the test cohort.

## 6. Retrospective evaluation design (only if authorized)

Potential sample: de-identified multi-laboratory adult results in the proposed scope, deliberately enriched for common abnormal A1c/LDL/TG plus less common but high-risk renal/electrolyte and hematologic scenarios. Keep complete lab report and metadata available to expert adjudicators, but **test the app as users would enter data** (often just flagged values). This directly assesses false reassurance from sparse input.

An independent panel should assign a gold-standard category for each case: (a) educational context safe; (b) insufficient data—ask user to confirm; (c) clinician discussion prompt and no diet directive; (d) urgent escalation / no routine explanation; (e) out of scope. Reviewers should be blinded to the app output at first pass, and discrepancies resolved by a separate adjudicator. Analyze error rates and especially harmful misses with exact binomial confidence intervals, clustering and site stratification. Include representative populations and compare performance with **and without** optional ancestry labels to quantify whether ancestry adds any benefit beyond measured clinical variables. The default hypothesis is that ancestry has *no authority* to modify laboratory reference thresholds.

Obtain legal/privacy/data-use review and ethics/IRB determination; retrospective data availability is not authorization to access patients’ records. Maintain data minimization and restricted access. Publish aggregate performance with demographic caveats and uncertainty, not raw private cases.

## 7. Population fairness and implementation science

Research cohorts and clinical settings often underrepresent Indigenous American, specific African, Southeast Asian, South Asian, Latin American/Caribbean, mixed-background, transgender, pediatric and pregnant populations. This project should not invent adjustment formulas to compensate. Instead:

- Preserve the original population definition, sampling site and ancestry ascertainment of every supporting paper. Map broad self-report labels to source categories only if meaningful; keep "not studied" where not.
- Do not use ethnicity to impute Hb variant, APOL1, HFE, G6PD, vitamin D deficiency, medication genotype, or dietary preference.
- Test the same numerical examples across ancestry choices and confirm identical lab thresholds, safety priority, and weight engine values. An optional **explanation of assay caveats** can be shown without asserting genetic status.
- Test rural/urban, different healthcare-access, language, lab-format, age and digital-literacy scenarios; a misunderstood safety message can be as harmful as a wrong number.
- Ask representative participants what they would do with an abnormal report after viewing the module. Record clinician-contact comprehension, worry, unintended restriction/supplementation and response time. Avoid purely cosmetic satisfaction metrics.
- In out-of-scope groups (pregnancy, minors, recent critical illness, chronic dialysis, rare metabolic conditions), abstain from personalized numeric interpretations and state limited applicability.

Do not treat absence of statistically significant subgroup differences as proof of fairness when groups are small. Fairness is an ongoing safety obligation after release.

## 8. What is needed to claim real health benefit?

A claim such as "Ancestry Health improves individual metabolic health" would require more than correctness or engagement. Define a **prespecified causal hypothesis** and a credible comparator, preferably a randomized controlled design with appropriate power and clinical oversight. Possible staged questions:

1. **Low-risk feasibility:** Does a validated educational explanation improve correct understanding of the entered lab, reduce inappropriate self-directed treatment and improve preparation for clinician visits compared with standard lab-report text? Assess comprehension, anxiety and unneeded care as co-outcomes.
2. **Care-process utility:** Does access lead to appropriate clinician follow-up, timely confirmation of an abnormal result and documented shared decision-making without increased false alarms? Account for access disparities.
3. **Clinical/metabolic impact:** Over a meaningful follow-up, does the intervention improve independently verified clinical outcomes (e.g., incident diabetes, ASCVD events or validated patient-centered outcomes) compared with usual care? If using A1c/LDL as surrogate secondary endpoints, do not claim prevention of morbidity without outcome support.
4. **Incremental ancestry contribution:** Does a properly defined ancestry-related feature improve decision accuracy and outcomes beyond measured lab data, clinical history and standard care, without introducing bias? This must be directly tested, not inferred from subgroup associations.
5. **Weight prediction:** No current LAB evidence validates modifying the individual weight equation. Before any such claim, require externally validated weight targets tied to meaningful outcomes, with transparent comparisons against conventional risk models and bias testing; lab associations alone are insufficient.

A prospective utility study requires ethics approval/consent as appropriate, eligibility/exclusion criteria, preregistration, endpoints, statistical analysis plan, handling of missing data/crossovers, safety-monitoring and stopping rules, and independent replication before marketing stronger claims. Nutrition interventions that are efficacious in supervised trials are not automatically effective as app prompts.

## 9. Privacy, regulation, change management and monitoring

Current public calculator documentation describes browser-only use. **PDF uploads, connectors, analytics, or any server-side processing could invalidate that privacy description**, so future work must first verify data flows and provide consent, retention and deletion policies, protected secrets, encryption, access controls, vulnerability review and incident response. Avoid putting lab values in URLs, logs, exception telemetry, browser history or public GitHub issues. Consider the use of protected health information under jurisdictional law if data are processed by providers or researchers; do not assume personal wellness applications automatically satisfy clinical privacy requirements.

Maintain a central version/verification calendar. Each claim should record: owner, approval status, exact source location and dates, corrigenda, applicable patient population, assay method, clinical effect estimates where applicable, source grade vs project grade, wording and tests it affects, and withdrawal/rollback owner. An urgent-source correction triggers a freeze until re-reviewed. Safety incidents and misunderstood output should be evaluated by a clinical expert, including adverse event and near-miss tracking, without collecting unnecessary private detail.

## 10. Final go / no-go checklist

**No-go until all applicable items are affirmative:**

- [ ] All source links and author/DOI metadata independently checked; changed guidelines reconciled with older ANC/NUT/PGX records.
- [ ] Exact education and safety claims signed by independent clinical reviewers; scope and contraindications explicit.
- [ ] Local/unit/specimen/method/flag handling tested, with unknowns kept unknown and user confirmation.
- [ ] Critical/urgent results and disease/special population pathways adjudicated; no universal laboratory critical values invented.
- [ ] No dietary supplement, food restriction, medication change or individual target weight from insufficient data.
- [ ] Representative fairness, literacy, accessibility and false-reassurance scenarios tested.
- [ ] Existing weight-engine regression fixture remains unchanged; research files cannot affect production outputs.
- [ ] Privacy, upload threat model, legal/regulatory review and incident/rollback owners documented.
- [ ] Manual reviewer and maintainer release tag recorded under `docs/process/CLINICAL_REVIEW.md`.
- [ ] Public wording says **educational, not a diagnosis or substitute for care**; no outcome-efficacy claims without outcome evidence.

**Recommended next milestone:** commission independent biomedical and clinical laboratory review of the A1c/lipid subset and the safety framework, then run the synthetic vignette suite before considering an MVP. Postpone kidney/electrolyte advice, broad ancestry personalized lab rules and weight-equation changes until they meet a distinctly higher validation bar.

## 11. Traceable source families

The complete source titles/URLs and claim links are in `04_Laboratory_Evidence_Matrix.md`. Key current anchors are the **ADA 2026 Standards of Care** (diagnosis, lifestyle, glycemic management), **ACC/AHA 2026 Dyslipidemia Guideline**, **KDIGO 2024 CKD** and **2026 CKD anemia guidelines**, **NGSP assay-interference table updated October 2026**, **EASL–EASD–EASO 2024 MASLD guidance**, **Endocrine Society 2024 vitamin D guidance**, **NICE NG239 B12**, and trial/meta-analysis sources for DPP and Portfolio diet. The relevant GitHub release-control standard is `docs/process/CLINICAL_REVIEW.md`. All claims and gate metrics above are explicitly provisional until expert validation.
