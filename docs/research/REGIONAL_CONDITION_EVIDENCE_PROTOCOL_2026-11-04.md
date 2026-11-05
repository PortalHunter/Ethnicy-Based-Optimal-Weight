# Regional condition research: claim ledger and incorporation protocol

**Started:** 2026-11-04  
**Roadmap:** [GitHub issue #27](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/27)  
**Ledger:** [REGIONAL_CONDITION_CLAIM_LEDGER_2026-11-04.csv](REGIONAL_CONDITION_CLAIM_LEDGER_2026-11-04.csv)  
**Diabetes-specific discovery notes:** [REGIONAL_DIABETES_EVIDENCE_2026-11-04.md](REGIONAL_DIABETES_EVIDENCE_2026-11-04.md)

## Mission

Ancestry Health welcomes medically grounded work from local researchers, professional societies and clinical journals in **any language**. National clinical guidelines, regional epidemiologic studies, Indigenous-led work and locally important founder-population research are all eligible for consideration. The project remains a free educational tool for informed discussions with qualified clinicians; it is not a diagnostic, prescribing, or clinically validated medical device.

**Thirty-five initial region-related candidate claims** have separate public appraisal issues (23 diabetes and 12 across the other six currently selectable health categories). The ledger is a set of research leads, not 35 independently verified medical statements. All current entries are withheld from user-facing selection-specific medical guidance.

## Current user condition selectors

| Current key | Form label / acknowledged ambiguity | Initial evidence IDs |
|---|---|---|
| `diabetes` | Type 2 diabetes **or** prediabetes **or** family history (not equivalent; need separate input semantics before any personal interpretation) | `RDI-001`–`RDI-023` |
| `hypertension` | High blood pressure | `RHT-001`–`RHT-003` |
| `high_chol` | Elevated cholesterol **or** familial hypercholesterolemia (not equivalent) | `RLD-001` |
| `gout` | Gout **or** high uric acid (not equivalent) | `RGT-001`–`RGT-002` |
| `lactose` | Lactose intolerance (symptoms, lactase non-persistence and genotype are not the same) | `RLC-001` |
| `celiac` | Celiac disease (genetic susceptibility, positive serology and biopsy diagnosis are not the same) | `RCD-001`–`RCD-002` |
| `hemochromatosis` | Hemochromatosis **or** iron overload (not equivalent) | `RFE-001`–`RFE-003` |

New module proposals can be added later, with their own codes and reviewed input semantics, rather than assuming that every regional epidemiological finding belongs in a calculator.

## What one claim record means

**One claim = one bounded proposition about one identified source.** If a paper supports multiple claims or gives conflicting findings for distinct groups, split them into independent IDs/issues rather than marking the entire paper as clinically validated. Source identification, appraisal and UI permission are separate steps.

The ledger columns record:

- `claim_id`: durable, condition-specific identifier; never recycle.
- `condition_key`: current form condition whose *topic* might be relevant, not confirmation of a diagnosis.
- `proposed_ancestry_keys`: only explicit picker keys suggested for research relevance. Multiple keys use `|` in CSV. **Not an approval to display or transfer a national guideline to diaspora users.**
- `geography_or_studied_population`, `original_language`, `source_design_and_version`, `source_title`, `source_url`: provenance and jurisdiction.
- `candidate_claim`: research question/proposition for verification—not verified guidance.
- `appraisal_status`, `mapping_status`, `patient_facing_status`: independent evidence, mapping, and release gates.
- `original_text_quote`, `precise_population_and_denominator`, `endpoint_effect_uncertainty`, `conflicting_evidence_and_limitations`: filled **only after** primary-source appraisal; do not fabricate missing measures.
- `reviewer`, `review_date`, `decision_note`: documented review outcome.
- `issue_number`, `issue_url`: public discussion, edits, counterevidence and corrections.

## Evidence states and promotion

1. **`CANDIDATE_UNVERIFIED`**: link/claim found but not independently appraised; `mapping_status=PROPOSED_NOT_APPROVED`, `patient_facing_status=WITHHELD_PENDING_APPRAISAL`. This is the **initial state for every row**.
2. **`SOURCE_VERIFIED`**: exact primary source, edition, passage and correction status checked; this does **not** authorize demographic interpretation.
3. **`QUALIFIED`**: evidence supports only a narrowed, context-bound statement; reviewer must specify exact permitted wording, population and limits.
4. **`CONTRADICTED`** or **`WITHHELD`**: incorrect, untraceable, unreliable or unsafe for the proposed use.
5. **`APPROVED_EDUCATIONAL`**: independent appropriate source review, competing evidence review, precise claim wording, actual demographic applicability, reviewer, date, human maintainer approval, provenance and regression tests are all documented. Only then can `mapping_status=APPROVED_CONTEXT_ONLY` and `patient_facing_status=APPROVED_EDUCATIONAL_ONLY` be considered.

**Never treat `SOURCE_VERIFIED` alone as permission to recommend any diet, drug, test, genetic inference or personal numerical target.** Threshold changes, medication dosing, genotype-based interpretation, lab-result risk classification and baseline weight-formula changes need separate, more stringent medical/maintainer review and remain out of scope. The longstanding diabetes-weight-cap issue [#2](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/2) remains unresolved.

## Appraisal checklist for local-language science

For each issue, an independent reviewer should record the original title, an English title/summary, publication venue, author/issuer affiliations, exact version/erratum/retraction, DOI/PMID, publication year, evidence design and local sample; find an original-language passage supporting the *specific* claim; distinguish effect size, confidence interval and association versus causation; examine confounders, harms, applicability, corrections and contrasting local evidence. Record material financial interests. For local clinical guidelines, record the **jurisdiction and intended population** separately from a user's self-described ancestry.

Researchers may challenge any claim, including the original calculator. No credentials are required to report a problem; high-impact medical conclusions should have suitably qualified human review. Preserve Indigenous attribution, avoid stereotypes, and use synthetic cases only.

## Eventual user-facing mapping behavior

Once at least one claim passes the appropriate review gate, a **read-only educational research module** can use:

```
explicitly selected condition key × explicitly selected ancestry subgroup
    → approved context-bound educational statements + original sources
```

Acceptance criteria:

- Show research **only after** an explicitly checked condition, and for an explicitly chosen subgroup with approved coverage.
- For mixed backgrounds, show separately sourced statements for each chosen group; **do not weight, average or multiply by ancestry percentages**.
- Display the local source's specific country/region, local-language title (or transliteration), study design, quality level, age/sample context and major limits; explain when a national medical protocol was designed for residents of a country, not everyone sharing ancestry.
- Never pretend a broad checkbox confirms diabetes, gout, FH, genetically determined lactase intolerance, celiac diagnosis or iron overload.
- When no approved claim maps to a combination, show **"Regional evidence review pending"** or a neutral generic statement—never infer health risk from lack of published studies.
- Do not infer an individual's genotype, ethnicity, diagnosis, medication response or personal weight target from population/region data. No ancestry-blended clinical cutoffs.
- Keep research separate from `preview-assets/core.js` and the original v9 calculator. Test one/multiple/zero conditions, broad/unmapped selections, mixed ancestry, all-zero/malformed inputs, mobile keyboard and assistive technology behavior.
- All work remains browser-only and should transmit/store no personal medical or ancestry data.

The 2026-11-04 branch is **evidence-tracking infrastructure only**. Staged candidate research is **not** active site content. Later activation should occur in a separate PR after documented review and test gates.

## Priority coverage gaps

The current 35 candidates are **not** a geographic census. Main gaps include Central and East Africa, the Maghreb, diverse Caribbean populations, South Asian subgroups beyond India/Pakistan, Laos/Cambodia/the Philippines, Caucasus and Baltic communities, Greenlandic and non-Greenlandic Inuit nations, distinct Indigenous nations of the Americas, Central/South America beyond a few examples, Pacific Micronesian and Melanesian communities, and narrower language/local-journal work. For founder populations and less-admixed settings, preferentially seek population-appropriate genetic **and** phenotype studies, with denominator and penetrance; a variant frequency alone does not diagnose disease or determine screening.

Each new *verifiable proposition* receives a new claim ID and GitHub issue before inclusion. Follow [CONTRIBUTING.md](../../CONTRIBUTING.md), source licensing, and public issue privacy practices.
