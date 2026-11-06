# Independent research checkpoint and continuation — ketogenic LDL / apoB / Filipino-Southeast Asian

**Cut-off:** 2026-11-05. **Branch:** `research/keto-ldl-apob-seasia-20261105` (separate from Team A/B/C/D atlas branches). **Status:** substantive first and second-pass research complete as a **source-qualified narrative**, but not an exhaustive systematic review or clinically approved calculator feature. Separate draft PR should remain **OPEN, DRAFT and UNMERGED** pending review.

## Work completed / deliverables

| Artifact | Content |
|---|---|
| [README.md](README.md) | Full overview, evidence confidence map, clinical and ancestry-specific inference boundaries |
| [SOURCE_LEDGER.md](SOURCE_LEDGER.md) | 34 original study/guideline/review records (S01–S34), primary URLs, designs, data provenance, contradictory findings and corrections |
| [01_WEIGHT_STABILITY.md](01_WEIGHT_STABILITY.md) | Lipolysis vs adipose cholesterol vs LDL apoB kinetics, direct contradictory weight-loss studies, eight-week plateau question, randomized weight-stable studies, testable 24-week tracer protocol |
| [02_APOB_NMR.md](02_APOB_NMR.md) | LDL-C vs non-HDL-C vs apoB vs NMR LDL-P vs particle size, MESA event analysis, discordance examples, test actionability |
| [03_SOUTHEAST_ASIA.md](03_SOUTHEAST_ASIA.md) | Filipino FiLWHEL, Philippine General Hospital LIPAS apoB case series, Singapore LPACO apoB/Lp(a), Vietnamese ACS discordance, ancestry limitations |
| [04_LMHR_DIET_IMAGING.md](04_LMHR_DIET_IMAGING.md) | LMHR phenotype definition, proposed lipid energy model, saturated-fat versus unsaturated-fat evidence, trials with unchanged body weight, case reversibility, coronary imaging, retraction |

## Non-negotiable citation and interpretation safeguards

- **No validated eight-week rule**: scale-weight stability is not the same as verified stable fat mass; even active recomposition does not prove adipose cholesterol export caused LDL elevation. Distinguish lipid *stocks* (serum LDL-C/apoB) from kinetic *fluxes* (adipose export and VLDL/LDL production/clearance).
- **Do not merge contradictory studies into an invented consensus**: Phinney 1991 n=6 found transient total cholesterol rise late in large active weight loss, followed by decline after ≥2 months maintenance [S01]; Schaefer 1983 n=3 did not find parallel adipocyte cholesterol mobilization [S02]. Retterstøl 2018 n=30 and Burén 2021 n=17 show LDL-C **and apoB** can increase on very-low-carb/high-fat feeding without demonstrable material weight loss [S26, S04].
- **Clinical marker hierarchy**: apoB estimates the count of atherogenic particles more directly than LDL cholesterol mass; NMR LDL-P is related, but subclass size alone does not establish safety [S18, S19, S20, S23].
- **LMHR is a proposed observational phenotype**, not a diagnosis or low-risk exception; evidence of cardiovascular outcomes in this selected keto phenotype is extremely limited [S11–S14].
- **The 2025 KETO-CTA longitudinal paper is RETRACTED**. The distinct 2024 baseline CCTA analysis is still cross-sectional and not proof of lifelong cardiovascular safety [S13, S14].
- **Filipino ancestry is not a diet/LDL risk adjustment algorithm**. FiLWHEL is cross-sectional; do not promote its candidate SNP interaction to a genotype recommendation. The LDL-C-specific interaction is not significant [S15].
- **Singapore LPACO 2026 has inconsistent sample denominators/subgroup labels:** method abstract total 1,927 vs table 1,928; narrative group percentages imply ~325 Malay/~247 Filipino while rendered table labels suggest 247 Malay/325 Filipino. Record this as unresolved and contact authors/check correction rather than choosing a value [S16].
- **Carter 2025 dietary-fat trial has a listed 2025 corrigendum and probable LDL concentration unit issue** in indexed abstract. Avoid reporting precise uncorrected numerics until the corrigendum is fully inspected [S27].
- No changes to public website, clinical lab guidance, ideal-weight algorithms, patient-specific nutrition prescriptions, risk scores, ancestry classifications or atlas team research branches are authorized by this work.

## Completed / remaining acceptance criteria

- [x] Separate GitHub research branch; main and other team's branches untouched.
- [x] Source-backed deep synthesis of 8+ weeks stable scale weight and how fat-versus-lean change differs from total weight.
- [x] Both supporting and contradictory primary studies of adipose cholesterol mobilization.
- [x] RCTs in normal-weight or intended weight-stable conditions with LDL and apoB, alongside long-term studies whose attrition/weight change limit their inference.
- [x] Filipino and Southeast Asian apoB, LDL, dietary saturated-fat and cardiovascular context; explicit absence of direct ancestry-by-keto trials.
- [x] ApoB/NMR LDL-P measurement and prospective discordance research; no particle-size risk absolution.
- [x] LMHR and lipid energy model, controlled fat composition evidence, correction/retraction caveats.
- [x] Dedicated source ledger keyed to research files.
- [ ] Independently inspect complete supplemental appendices and tables for all 34 sources, rechecking each numerical statement and threshold against full papers rather than abstracts; this first-pass evidence ledger is not systematic-review completeness.
- [ ] Resolve LPACO Singapore ethnicity n/percent inconsistencies via primary correction or author communication.
- [ ] Obtain and inspect full Carter 2025 corrigendum; ensure revised table/units/subclass effects.
- [ ] Locate Filipino-specific NMR LDL-P prospective cohorts, if any, via Philippines and regional local-language databases; document genuinely negative searches.
- [ ] Reconstruct all LMHR dietary interventions with independently verified baseline and on-diet saturated fat, protein, LDL apoB, body-comp changes, dropout and duration; where unavailable mark NR.
- [ ] Search and risk-of-bias assess human cholesterol efflux isotope/kinetic work testing weight-loss adipose contributions, and human VLDL-apoB/LDL-apoB tracer tests of lipid energy model.
- [ ] Design a preregistered study protocol with power calculation and clinically meaningful primary apoB/LDL-C endpoints; separate mechanistic from event-risk protocols.
- [ ] Independent clinical/lipidology review and updated evidence cut-off before any patient-facing integration.

## Priority verification questions (next researcher)

1. Search **adipose cholesterol mobilization** with *stable body weight*, *fat-mass loss*, *caloric restriction*, *isotope-labeled cholesterol*, *adipose reverse cholesterol transport* and *apoB turnover*. Avoid treating triglyceride lipolysis as cholesterol efflux.
2. Revisit **MESA** underlying analytic sample sizes (6,814 recruited vs 5,598 analyzed), event subgroups and adjusted HR comparators. Ensure concordance cutpoints and calibration are retained. [S18]
3. Track **retraction/correction statuses** for KETO-CTA (2026) and Keto-Med (2022 figure-axis only), and retrieve Carter 2025 corrigendum. No retracted paper may be promoted as scientific evidence. [S05, S14, S27]
4. Filipino studies: expand Philippines journals (LIPAS 2018), FiLWHEL cohort, Asian American cohort disaggregation, ApoB distribution, Lp(a), ethnicity- and sex-stratified NMR; verify sample numerators separately. [S15, S16, S25]
5. Controlled intervention inventory: RCTs with **true** serial measured stable weight/fat mass, not merely weight remaining lower than baseline. Compare Retterstøl [S26] vs Burén [S04] and CARBFUNC [S07] but do not pool incompatible designs.
6. For each mechanism clearly separate **hypothesis**, **cross-sectional association**, **weight-stable intervention**, **prospective event study** and **long-term randomized clinical outcome**. Record whether elevated LDL-C coincides with high apoB or discordantly low apoB.

## Validation protocol

- Fetch the six substantive files from branch, confirm Markdown links target existing files and each [S##] citation resolves to a source ledger entry (S01–S34).
- Compare branch to main; only `docs/research/keto-ldl-2026/**` and the additive `docs/research/README.md` index entry are permitted.
- Run any available repo Markdown/source-link checks before considering merge. **No native Node or site tests were executed through the GitHub connector**; plain-text readback and GitHub compare do not constitute native CI.
- Draft PR should not be merged without source audit and medical review; this is knowledge base research, not patient-facing software.

## Standalone continuation prompt

> Continue the ketogenic LDL / apoB / Filipino–Southeast Asian research in `PortalHunter/Ethnicy-Based-Optimal-Weight`, branch `research/keto-ldl-apob-seasia-20261105`. Read `docs/research/keto-ldl-2026/CONTINUE.md` and all research files in that folder. Verify the live GitHub branch and draft PR before editing. Deepen and independently verify primary sources, especially 8+ week weight-stable body-recomposition cholesterol flux, apoB vs NMR LDL-P discordance with low TG/high HDL, LMHR tracer kinetics and saturated-fat interventions, Filipino/SE Asian apoB and lipid particle cohorts, and corrections/retractions. Resolve the Singapore LPACO denominators and the Carter 2025 corrigendum or explicitly retain unresolved status. Preserve study design distinctions and negative/conflicting data; add original primary citations and a transparent QA log. Make research-only commits to this branch, keep the public website, lab algorithms, ancestry classification, atlas research teams and main unchanged, and **do not merge the PR**. Maintain an independent on-GitHub checkpoint and update this same continuation prompt if work remains.

**Note:** The present research review identifies important gaps and does not represent all search paths as exhausted. The user's original query requested exhaustiveness; that requires a subsequent registered systematic search and independent primary-data extraction, not an unqualified claim from a selective source ledger.
