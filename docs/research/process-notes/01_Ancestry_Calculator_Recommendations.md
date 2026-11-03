# 01 — Calculator Recommendations (Team 1)

**Version:** 1.0 | **Date:** 2026-11-01 | **Status:** Recommendations only; **existing calculator NOT modified**.

## Non-negotiable principles

1. A BMI *screening cutoff*, obesity *classification*, weight-loss *treatment goal*, a risk-score predictor and an individual's “optimal weight” are not interchangeable.
2. A subgroup may have distinctive disease burden without having an evidence-supported separate weight threshold.
3. Self-identified heritage, socially defined race, residence, and genomic ancestry are distinct, optionally recorded variables. A national or racial label must not be converted into an implied genetic percentage.
4. Never allow the ancestry pathway to set nutritional instructions, genetic disease diagnosis, medication dosing or drug selection. Route such evidence to Teams 2 and 3.
5. New clinical logic needs versioned provenance, intended population, guideline jurisdiction, edge-case tests, and review of clinical benefit/harm.

## Priority 0 — correctness and risk communication (before clinical use)

| Item | Specific finding in `optimal_body_weight_calculator-9.html` | Proposed future change | Readiness / claim |
|---|---|---|---|
| P0-01 | `bufferZone()` starts at BMI 22 for Asian backgrounds; `bufferedRange()` can automatically cap suggested weight if diabetes/prediabetes/family-history checkbox is checked | **Stop converting the population-level BMI-risk observation into an individual's BMI-21.9 ceiling.** Use a non-prescriptive risk note and clinician evaluation prompt pending validation. Do not use ancestry fractional interpolation in the cap. | Safety/correctness priority; ANC-025 |
| P0-02 | `groupForAncestries()` permits linear blend of BMI 25/30 vs 23/27.5 | Keep any percentage blending exclusively in a visibly labelled **experimental comparison**, if it is retained at all. Remove it from standard or clinically framed suggested ranges. | Unsupported method; ANC-024 |
| P0-03 | When mixed and “identify with” is selected, UI preselects **largest ancestry percentage** and ties break by input order | Do **not** infer self-identification from the most common reported ancestry. Prompt for active user selection or show a neutral “no selection made” state and use a transparently described conservative general-screening pathway until explicit selection. | ADA mixed-context evidence gap; ANC-004 |
| P0-04 | Page title/CTA calls result “Optimal Weight” and intersects classic formulas with a BMI range | Rename the numeric product in a future revision to **“exploratory weight-range estimate”** or a screening-oriented term; explicitly distinguish validated guidance from heuristic, even when explaining the calculation. | ANC-027, ANC-022 |
| P0-05 | “Lower” grouping can reflect NICE (Black African, African-Caribbean, Middle Eastern), while separate waist classification uses ADA Asian/non-Asian | Give screening outputs independent guideline labels and a visible jurisdiction/mode selector; do **not** merge NICE BMI and ADA waist diagnostic rules into one supposedly unified standard. | ANC-002, 003, 009 |

**P0 acceptance tests** (to develop later, not run in this assignment): 50/50 ancestry must never silently yield new guideline thresholds; adding diabetes family history cannot independently impose an unvalidated weight ceiling; blank mixed-background selection cannot silently pick largest percentage; each BMI/waist output names the originating guideline; normal BMI cannot imply “no diabetes risk”; contradictory WHO/NICE/ADA interpretations remain labeled rather than averaged.

## Priority 1 — improve useful specificity without changing treatment thresholds

| Item | Proposed addition | Clinical evidence status / records |
|---|---|---|
| P1-01 | Separate optional **heritage/origin** descriptions for Nordic/Scandinavian, Mediterranean, Central, Eastern, Baltic/Balkan, and other European origin; permit multiple origins, unknown and decline to state. Do **not** alter BMI or waist thresholds. | Research taxonomy only; ANC-006–008, 026 |
| P1-02 | Differentiate Mexican, Central American (optionally nation), Caribbean (optionally nation), Andean, Brazilian, Southern Cone and other Latin American backgrounds. Do **not** assume any nation determines genomic admixture. | Observational context; ANC-010–020 |
| P1-03 | Make **Brazilian identity** and Indigenous American nations separately describable rather than automatically under Hispanic/Latino. Include Afro-Latin and multilingual Caribbean categories; no forced hierarchy or mandatory DNA entry. | Ethical accuracy; ANC-020, 028 |
| P1-04 | Show BMI, WC and WHtR as separate measurements with source attribution, units, measured-date and measurement-method hint. | Guideline-supported; ANC-003, 021 |
| P1-05 | Add brief informational statement where evidence is strong: e.g. “Normal BMI does not exclude metabolic abnormalities; ask a healthcare professional about blood pressure, glycemia and lipid testing if clinically indicated.” Do not make lab-testing decisions from ethnicity alone. | ANC-017, 023 |
| P1-06 | Distinguish **screening eligibility** from **estimated future risk** and **body composition**. Missing waist: report classification uncertainty rather than inferring low risk. | ANC-003, 005, 022 |
| P1-07 | Keep a per-output source panel: issuing body, country applicability, version/year, audience, anthropometric measurement method, source link, date reviewed, outcome and status tag. | Evidence governance |

**Example terminology:** “Population-based screening threshold per NICE NG246 (UK)” versus “Observed U.S. cohort prevalence (not your predicted probability)” versus “Unvalidated experimental ancestry model.” The user should not need to open a tooltip to see the difference.

## Priority 2 — research-only candidate predictors

1. **Country of residence and migration variables:** test incremental predictive value over BMI/WC for incident diabetes/CVD, without calling these inherited ancestry effects (ANC-006, 007, 011, 018).
2. **Self-identified national origin:** evaluate heterogeneity and missingness in HCHS/SOL and comparable Latin American cohorts (ANC-010, 020).
3. **Continuous genomic ancestry estimates:** only with explicit opt-in, appropriate reference panels and research permissions; treat as potentially informative for diabetes-risk model evaluation in Mexican cohorts, NOT as BMI cutoff weights (ANC-014–016, 028).
4. **Direct fat/visceral fat measurement:** use DXA or MRI reference subsets to test whether simple BMI+WC misclassification varies by stratum, gender and age (ANC-021, 022, 027).
5. **Alternative WC criteria in U.S. Hispanic/Latino women:** evaluate the HCHS/SOL CHD study's 97 cm candidate, with documented sensitivity 65.4%, specificity 51.3%, *against prospective outcomes*. Do not replace ADA's 88 cm diagnostic criterion with this exploratory cut point (ANC-012).
6. **European genetic/geographic subgroups:** examine interaction and model-calibration heterogeneity in cohorts; negative results justify retaining one broad clinical category (ANC-006–008, 026).

## Priority 3 — not recommended absent substantially new evidence

- New “Scandinavian healthy BMI,” “Mediterranean ideal weight,” “Eastern European fat correction,” or country-by-country optimal ranges.
- Averaging ancestry-specific BMI cutoffs by DNA percentage or fractional self-report.
- Treating 2026 Mexico genomic-ancestry diabetes OR 1.33 as a universal causal multiplier, or translating it into weight targets.
- Deriving a clinical cutoff from a cross-sectional ROC optimum or a mortality BMI nadir alone.
- Replacing measured phenotype and validated risk inputs with ethnic labels.
- Conditional nutritional/genetic/medication recommendations based solely on Team 1's population findings.

## Proposed future data model (design discussion; no implementation)

| Field concept | Allowed type | Why separate |
|---|---|---|
| `self_identified_backgrounds` | Multi-select, optional, nonexclusive | For guideline decision and participant language |
| `country_of_origin` and `countries_of_residence` | Separate and optional | Contextual exposure and model transport |
| `regional_heritage` | Multi-select descriptive, versioned ontology | Better subgroup representation without clinical threshold |
| `genomic_ancestry` | Opt-in research-only object: method, reference panel, estimate and uncertainty | Not inferred from nationality and not available from self-report alone |
| `screening_guideline` | Named jurisdiction/version, e.g. ADA 2026 or NICE NG246 | Avoid unintentional synthesis of incompatible policies |
| `waist_measurement_method` | WHO-midpoint, NIH-iliac-crest, unknown | Quantitative comparability |
| `result_semantics` | `guideline_screen`, `observed_population_context`, `experimental_model`, `heuristic_estimate` | Prevent unsupported certainty |
| `evidence_claim_ids` | References to ANC claims and other approved streams | Traceability and revision discipline |

**Privacy and fairness:** Do not require genetic or ethnic disclosure to give base BMI+waist results. Preserve “not listed” and “prefer not to say.” An uploaded genome should be handled, if ever implemented, by a separately reviewed privacy/security pathway; nothing in Team 1 endorses uploading raw genomic files to the calculator.

## Change decision gate

A future proposed change is **approved for clinically framed outputs only if**: (1) a relevant current guideline or robust externally validated model supports it; (2) intended population and outcome are explicit; (3) validation against BMI+WC and other reasonable baselines demonstrates worthwhile calibration, discrimination and net benefit; (4) sensitivity and fairness checks are complete; (5) Teams 2 and 3 have reviewed cross-stream impacts; and (6) licensed clinical input verifies claims. Until then, status stays **exploratory**.

## Audit trace and references

- Existing calculator inspected: [HTML source](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/optimal_body_weight_calculator-9.html); ancestry mapping around source lines 2605–2650, mixed cutoff logic ~3038–3068, frame estimate ~3154–3192, BMI-22 buffer ~3194–3245, ADA waist logic ~3262–3321, final calculation ~3386–3453.
- [ADA 2026 obesity diagnosis](https://doi.org/10.2337/doci26-0003); [NICE NG246](https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity); [WHO 2004](https://doi.org/10.1016/S0140-6736(03)15268-3).
- [2026 Mexico genomic ancestry association](https://doi.org/10.1016/S2468-2667(25)00305-6); [HCHS/SOL CHD waist study](https://doi.org/10.2337/dc19-1855); [SCORE2](https://doi.org/10.1093/eurheartj/ehab309).