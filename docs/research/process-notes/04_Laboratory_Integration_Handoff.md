# Research Team 4 — Laboratory Integration Handoff to Teams 1–3

**Version:** 0.9 | **Evidence cutoff:** 2026-11-03 | **Handoff type:** scientific, safety and data-contract proposal | **Clinical status:** research only; not approved to deploy.

## 1. Integration mandate

Laboratory biomarkers add *measured, dated, assay-dependent observations* to the current Ancestry Health educational calculator. They do not validate a new optimal-weight equation, reveal genotype, determine medication therapy, or take precedence over independent evidence from other research streams. The four teams must be jointly reconciled for personal outputs; **clinical safety overrides personalization**.

The existing project repository is [PortalHunter/Ethnicy-Based-Optimal-Weight](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight), with live site [Ancestry Health](https://portalhunter.github.io/Ethnicy-Based-Optimal-Weight/). **No repository changes or releases were made in this assignment.**

Repository material reviewed on November 3, 2026:

- [`docs/EVIDENCE_INTEGRATION.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/EVIDENCE_INTEGRATION.md): 17 archived Team 1–3 research files and existing feature boundaries; no individual clinical validation or numerical change approved.
- [`docs/process/CLINICAL_REVIEW.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/process/CLINICAL_REVIEW.md): claim versioning, signoffs, clinical intended-use audit, source correction checks, fairness/boundary tests, regression and rollback.
- [`docs/research/SOURCE_INDEX.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/SOURCE_INDEX.md): prior 17 reports and calculator citation keys; historical source index is not proof of individual sources' clinical validity.
- ANC evidence matrix [`docs/research/evidence/01_Ancestry_Evidence_Matrix.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/evidence/01_Ancestry_Evidence_Matrix.md) and its [`01_Ancestry_Integration_Handoff.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/process-notes/01_Ancestry_Integration_Handoff.md).
- NUT evidence matrix [`02_Nutrition_Evidence_Matrix.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/evidence/02_Nutrition_Evidence_Matrix.md) and its [`02_Nutrition_Integration_Handoff.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/process-notes/02_Nutrition_Integration_Handoff.md).
- PGX evidence matrix [`03_Pharmacogenetics_Evidence_Matrix.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/evidence/03_Pharmacogenetics_Evidence_Matrix.md) and [`03_Pharmacogenetics_Integration_Handoff.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/docs/research/process-notes/03_Pharmacogenetics_Integration_Handoff.md).
- [`README.md`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/blob/main/README.md): currently describes both an educational, unvalidated calculator and ancestry/condition-linked numeric mechanisms. See open discrepancy below; Team 4 must not extend those formulas.

**Scope limitation:** This is a targeted document and cross-stream claim review, not a complete code-level audit of all ANC, NUT and PGX evidence records or runtime execution. Full integration acceptance remains uncompleted.

## 2. Ownership and cross-stream contract

| Stream | Evidence authority | LAB integration input | Boundary that must hold |
|---|---|---|---|
| **ANC** (`ANC-*`) | Study-specific population definitions, weight/BMI evidence and its limits, frame and waist methods | Explain risk at similar BMI, study subgroup labels and why group averages do not identify an individual | No new lab reference limits, genetic status, hemoglobin variant or individualized target weight from ancestry |
| **NUT** (`NUT-*`) | Condition-specific nutrition trials, inherited conditions, family-history distinctions, food response and contraindications | Review lipid- and glucose-related food patterns, deficiencies/overload and adverse interactions | No unvalidated genotype-matched diets, no supplements from lone flags, no automatic change to weight algebra |
| **PGX** (`PGX-*`) | Assay-confirmed gene–drug and medication-response research, terminology/allele limits | Flag medication-related interpretive questions (e.g., drug-associated hyperglycemia, altered potassium, nutrient changes) | No medication selection, dose, stopping/starting instructions or inferred pharmacogenotype |
| **LAB** (`LAB-*`) | Laboratory analyte identity, specimen, unit, method, time, result interpretation limits, clinical referral/safety, evidence-backed nutrition link | Typed measured observations, abnormal-result uncertainty, safety gating, inter-marker interpretation | No diagnosis, no personal treatment instruction, no unaudited numerical weight update |
| **Joint board / reviewer** | Versioned clinical claims, release policy and dispute resolution | Adjudicate cross-domain high-impact outputs with documented signoffs | Safety review can veto any proposed personalization regardless of evidence score |

A scientifically established intervention in one stream is not permission to generate personal action in another. For example, NUT may demonstrate dietary LDL reduction in studied groups; LAB must still verify assay identity, numbers, medications, and risk context, and cannot turn that study into an individual expected LDL drop.

## 3. Specific crosswalk and action items

| Team 4 claim(s) | Existing anchor | Interaction / possible conflict | Handoff decision |
|---|---|---|---|
| `LAB-001`–`006`, `031`–`032` | `NUT-001` diabetes prevention, ADA 2026; ANC population diabetes studies | A1c thresholds are not calibrated by broad origin; RBC turnover/hemoglobin variants can interfere | Build **assay and clinical context warnings**; never ethnicity-based A1c correction or diagnosis |
| `LAB-004`–`005`, `037` | NUT diabetes nutrition and ANC adiposity/waist context | DPP risk reduction and observed group risk do not mathematically determine a personal "optimal weight" | Evidence-based pattern education only; no automatic BMI ceiling change |
| `LAB-008`–`014`, `033` | NUT 2026 dyslipidemia references and familial hypercholesterolemia | LDL nutrition evidence is direct; Lp(a) primarily genetic and generally not diet-responsive; medication status matters | Do not equate low LDL with low total ASCVD risk or claim diets lower Lp(a) |
| `LAB-015`–`019`, `034`, `038` | ANC population caveats, PGX medication-response boundaries | Renal and electrolyte results are influenced by acute illness, medicines and specimen handling; historical race equations cause bias | Use race-free eGFR; safety first; no arbitrary ethnic kidney reference factors |
| `LAB-020`–`022` | ANC obesity and NUT dietary patterns | Elevated ALT with abdominal adiposity can be associated with MASLD but is not proof; lower ALT not necessarily a clinical outcome | Consider only educational risk context and independently approved clinical follow-up |
| `LAB-023`–`027`, `035`, `039` | NUT hemochromatosis/celiac/inherited disease; ANC population variation | Microcytosis/thalassemia may mimic iron deficiency; high ferritin is not equivalent to high iron stores | No iron supplement or restriction without evaluation and full evidence chain |
| `LAB-028` | ANC ancestry and skin complexion discussion | 2024 Endocrine Society guidance opposes routine vitamin D testing merely for darker skin or obesity in generally healthy adults | Defer ancestry-dependent vitamin D module; do not assign numerical target by ethnic category |
| `LAB-029`–`030` | NUT disease status and PGX medication context | Thyroid and uric-acid tests do not justify app-directed treatments | Conditional educational definitions only; no drug/diet prescription from high/low flag |
| `LAB-036` | All streams / clinical gate | Critical result, symptoms or contradictory entries must override any diet/ancestry message | Stop auto-nutrition; urgent clinician-facing message after review of risk criteria |
| `LAB-040`–`041` | ANC experimental weight bounds | Biomarkers provide separate monitoring endpoints, not a clinically validated weight-equation correction | **Hard no-go** for formula changes; no regression baseline alterations |
| `LAB-042` | Existing GitHub Pages browser-only privacy statement | Structured lab/PDF uploads introduce health-data sensitivity, new attack surface and retention risk | Separate privacy/security and consent review before any upload or telemetry |

### Important open repository tension

`docs/EVIDENCE_INTEGRATION.md` explicitly withholds automatic ancestry-based diabetes weight caps and numerical weight interpretations that have not been independently validated. The current `README.md` nonetheless describes a diabetes-risk feature that can lower a range for some groups. This **does not authorize Team 4 to change existing functionality**. Record it as a preexisting discrepancy for ANC/clinical review; any future correction belongs to a separate approved change with baseline regression review. A new LAB module must not silently inherit this output as a validated clinical weight target.

Likewise, the current "diabetes" input conflates family history, prediabetes and confirmed disease according to the integration report. A lab result cannot repair this distinction on its own; data design must explicitly collect **self-reported diagnosis vs family history vs merely abnormal screening**.

## 4. Standardized claim evidence and provenance

Preserve all existing `ANC-`, `NUT-` and `PGX-` IDs; add stable `LAB-001`–`LAB-042` without renumbering. LAB's evidence matrix retains the 14 core fields used by PGX and adds `claim`, `source_keys`, `disposition` to maintain explicit relation to feature design. When integrating, do **not** overwrite an original grade with LAB's local A–D grade. Data model should separately contain:

```yaml
claim_id: "LAB-008"
domain: "LDL-C"
clinical_status: "guideline-supported"
source_id: "ACC-26"
source_version: "2026-03 guideline publication"
source_original_population: "source-defined adult guideline populations"
evidence_grade_internal: "A (research project label; not GRADE)"
disposition: "A for proposed education, subject to clinical release gate"
recommended_use: "educational context only"
cross_stream_links: ["NUT diet evidence", "ANC body composition context", "PGX medication caveats"]
reviewer: null
review_date: null
release_approval: false
```

The snippet illustrates **proposed documentation fields**, not an executable clinical rule. Real records should include exact source location, DOI, published/corrected dates, conflicts and a distinction between RCT surrogates versus patient outcomes. A guideline rank, local A–D grade and feature readiness are distinct.

### Observation-level data dictionary (proposed)

| Field | Requirement | Reason / guardrail |
|---|---|---|
| User-confirmed `analyte`, optional LOINC code | Always | Common name is not enough to distinguish similar analytes |
| `value`, `unit_ucum` and raw printed unit | Always for numerical analysis | Prevent mg/dL, mmol/L, nmol/L and unitless mixing |
| `reported_flag` and local reference interval | Whenever present; explicit missing otherwise | Flag is lab-specific; may differ from a clinical decision threshold |
| `collection_datetime`, timezone if known | Always date; time if material | Repeat/persistence, trend, urgency and fasting relevance |
| `specimen_type`, collection method | Always when relevant | Blood/serum/plasma/urine are not interchangeable |
| `fasting_status`, test protocol | For glucose/TG/OGTT where relevant | Distinguish fasted, nonfasted, 2-h and random |
| `method`, certification, interference, hemolysis flag | Conditional | A1c variant or potassium hemolysis can invalidate interpretation |
| `age`, pregnancy and physiology when relevant | Safety scope | Pediatric and gestational cutoffs should not be inferred |
| `diagnoses`, symptoms, meds/supplements, recent transfusion/illness | Optional user-supplied prompts; essential to certain outputs | Not available means **unknown**, not negative |
| `other_tests_reported_not_flagged` | Optional self-report | Not proof of normal numbers; does not populate hidden observations |
| `source_document_verified_by_user`, `extractor_confidence` | Mandatory in future uploads | Parsed values must be confirmed before interpretation |
| `report_critical_flag` / laboratory contact instructions | Preserve source notification | Safety pathway determined with clinician-approved policy, not standard reference flags alone |
| `ancestry_descriptor` and source definition | Optional independent field | Never auto-infers genotype or laboratory interval |

Use **LOINC** to identify the observation, **UCUM** for units, and **HL7 FHIR Observation** as a future interoperability model. Always retain original report text alongside normalized fields where permitted. Never use a generic conversion for Lp(a) mass to molar units. Do not store personal lab data remotely without a distinct privacy/consent and security review. Browser-only architectural assumptions must be verified after any new dependency is introduced.

## 5. Conflict-resolution and approval workflow

1. LAB author proposes a narrow claim with exact original source and intended use; tag links to `ANC`, `NUT`, and/or `PGX` evidence IDs where possible.
2. Source verifier checks publication, corrigenda, source-context applicability, calculations and exact units; unresolved contradictions stay flagged.
3. Independent medical and laboratory reviewers assess assay reliability, risk/critical results, missing-context fallbacks and clinical language.
4. Relevant domain owner reviews cross-stream dependencies; no stream receives blanket primacy. Explicit contradictory claims are preserved in a conflict log with source/version and decision rationale.
5. Safety lead has veto for any release that risks delaying care, promotes supplementation from uncertain labs, or auto-generates medication/diet instructions for potentially dangerous findings.
6. Maintainer performs algorithm-diff audit: LAB outputs must not feed current weight-engine variables; baseline numeric test fixtures are unchanged.
7. Accessibility, privacy/security and subgroup fairness reviews are completed and recorded. Clinical reviewers sign a discrete educational content release, **not** a statement of clinical validation.
8. Document release tag, effective source versions, monitoring owner and rollback plan. Revisions to guideline versions or changed assay recommendations reopen review.

## 6. Required tests before a LAB feature can be merged

**Data correctness and input safety**

- Blank/not entered; "not flagged" self-report without values; all-normal completed panel vs no data; zero/negative/impossible numbers; decimals, exponential notation, scientific units and locale separators.
- Exact test with right/wrong units, conflicting flag/number, missing intervals, mismatched interval units, serum vs urine confusion, extreme numbers, two measurements from different dates, and result entered in incompatible measurement system.
- Fasting vs nonfasting glucose/TG; OGTT 0-h vs 2-h; HbA1c `%` vs `mmol/mol` as *validated conversion* not mere renaming; Lp(a) `mg/dL` vs `nmol/L` **must not** automatically convert.
- HbA1c-glucose discordance; self-reported hemoglobin variant/thalassemia/G6PD/CKD/transfusion/pregnancy; method unknown means caution, not a blanket ethnic correction.
- Potassium flagged high with and without reported hemolysis, impaired eGFR, diuretics/RAAS drug exposure, or concerning symptoms; system must *not* suggest potassium restriction/supplementation automatically.
- Severe/high TG or unexpected bilirubin, sodium, creatinine/AKI, pancytopenia; safe abstention and clinician review instead of speculative nutrient change.

**Cross-stream and clinical-logic isolation**

- Each original v9 baseline height/weight/frame/waist test retains **identical numeric output** for every possible LAB input combination (null, high, low, multiple results, changed ancestry), unless a separately reviewed change explicitly modifies algorithm in a later project.
- ANC Scandinavian vs Mediterranean vs Central/Eastern European labels and Latin American/Caribbean mixed subgroup entries **never change reference intervals or infer HFE/Hb variants/APOL1**.
- Self-reported family history, prediabetes and confirmed diabetes remain semantically distinct; isolated high A1c is not retrospectively promoted to diagnosis.
- NUT diet suggestion may appear only if claim, context, contraindications and release version are approved; PGX does not translate a result to a prescription or dose.
- A user’s named ancestry or genetic status never suppresses urgent-result warnings; incomplete variables make system abstain as designed.
- Output cites a primary source/version/claim ID, distinguishes guideline versus observational claims, and cannot hallucinate an unreviewed explanation when marker is not supported.

**Deployment and governance**

- `npm` and repository evidence/link checks, screenshot/layout tests where appropriate, accessibility with screen readers and high contrast, no hidden personal data in URLs/logging or analytics, clinically adjudicated synthetic-vignette suite, source-version freeze, rollback tag, explicit maintainer release decision.
- Validate with selected human clinicians and representative users. Test misunderstood instructions, unnecessary alarm, unjustified reassurance, and false personalization—not only numeric correctness.

## 7. Proposed placement in repository

Research files, after standard citation/link checks and maintainer approval only:

- `docs/research/evidence/04_Laboratory_Biomarker_Research_Review.md`
- `docs/research/evidence/04_Laboratory_Evidence_Matrix.md`
- `docs/research/evidence/04_Ancestry_Laboratory_Interactions.md`
- `docs/research/evidence/04_Nutrition_Intervention_Matrix.md`
- `docs/research/process-notes/04_Laboratory_Safety_Framework.md`
- `docs/research/process-notes/04_Laboratory_Feature_Prioritization.md`
- `docs/research/process-notes/04_Laboratory_Integration_Handoff.md`
- `docs/research/process-notes/04_Clinical_Validation_Roadmap.md`

`docs/research/SOURCE_INDEX.md` may later index these sources using the existing process. Keep these internal research methods out of the public bibliography except for reviewed clinical references relevant to user-facing content. The source index must distinguish a URL listed from a URL independently checked. Do not modify production HTML, scripts or equations during the research handoff.

## 8. Unresolved work and signed release requirements

1. Author names for `CRITICAL` and `ADLM-LIPID` are verified against PubMed; **remaining** independent checks are precise guideline recommendation text, the corrected 2025 ADLM lipid tables and assay/version changes before clinical publication.
2. Clinician-reviewed out-of-range vs urgent-result logic with local lab contact criteria, jurisdiction, specimen handling and symptom-aware abstention; do not codify a universal critical range.
3. Prospective validation of proposed education/care-seeking outcomes, including false reassurance and distress, before claiming benefit.
4. Lab/medical review of cardio-metabolic risk interactions without invented precision, individual weight range changes, or ancestry cutoffs.
5. Separate security and legal review of health data, especially if PDF/record upload is contemplated.
6. Independent review by endocrinology/diabetes, lipid/cardiology, clinical chemistry, nephrology, hepatology, hematology and dietetics as claims require; pharmacist input for medication interaction caveats.

**Handoff decision:** Adopt LAB as a *fourth equal, research-only evidence stream*; publish its claim ledger and clinical-safety no-go rules for qualified review. Start any future feature with approved glycemia/lipid education, never with a weight-engine rewrite. Everything more clinically consequential is a separately validated extension.
