# Grok diet-study handoffs — preserved sources and controlled research review

**Received 2026-11-04.** The four teams submitted 16 files (12 Markdown + 4 CSV), containing **26 CSV records** plus candidate public claims and synthetic safety scenarios in Markdown.

This folder now contains **the full 16 original handoff files and four separate normalized CSV copies**, committed byte-for-byte under [`source-files/`](source-files/), alongside the claim register and original SHA-256 provenance manifest. The original authorship and AI-generated research claims are not automatically validated by archiving.

| Resource | Purpose |
|---|---|
| [Original Team A research](source-files/A/KETO_FASTING_EVIDENCE.md) | Preserved ketogenic/fasting evidence and original audit, safety cases and source CSV in `source-files/A/`. |
| [Original Team B research](source-files/B/CARDIOMETABOLIC_DIET_REVIEW.md) | Preserved dietary-pattern evidence and culturally adaptable examples in `source-files/B/`. |
| [Original Team C research](source-files/C/CLINICAL_SAFETY_REVIEW.md) | Preserved lab safety, equity and synthetic comprehension cases in `source-files/C/`. |
| [Original Team D research](source-files/D/INDEPENDENT_SOURCE_AUDIT.md) | Preserved independent audit, correction log and contradiction register in `source-files/D/`. |
| [Corrected CSV copies](source-files/normalized/) | Four machine-readable CSVs retaining the original row IDs; structural normalization is not independent scientific verification. |
| [CLAIM_REGISTER.json](CLAIM_REGISTER.json) | All 26 source-row IDs, originating team, a corroborating primary-source anchor, evidence-scope qualification, and *public-use gate*. |
| [SOURCE_CHECKSUMS.json](SOURCE_CHECKSUMS.json) | SHA-256 checksums of every original file (16), all four normalized CSVs, and four original ZIP submissions. |
| [Research triage](../../GROK_HANDOFF_TRIAGE_2026-11-04.md) | Previously merged review of import defects and claim-level caveats. |
| [Dietary evidence review](../../DIET_PATTERN_EVIDENCE_2026-11-04.md) | Source-based comparison of studied diets; currently used for the optional educational diet library. |

The **20 files are now in GitHub** under `source-files/`. CI checks every archived file against its recorded byte length and SHA-256 and checks normalized CSV row widths and IDs. The combined ZIP package and four original ZIP submissions remain separate conversation-delivered artifacts; **the ZIP containers themselves are not stored in GitHub**. The source files are research submissions and should be read with the accompanying [claim register](CLAIM_REGISTER.json), which retains disputed and unverified claims.

## Meanings of review status

- **ANCHOR_CHECKED_SCOPE_LIMITED (17):** an independently consulted primary article, publisher or guideline substantiates the *narrow reference identity and relevant findings*. This is not a systematic appraisal of every effect size, confidence interval, subgroup or safety claim in the original record.
- **QUALIFIED_SOURCE_SCOPE (8):** the reference can be identified but needs a restriction or nuance: a different clinical population, surrogate outcome, weaker study design, short-term follow-up, lack of a personalized applicability rule, or a diet guideline applying only after a clinical diagnosis.
- **UNTRACEABLE_REFERENCE (1):** the source is inadequately specified; its numerical claim remains **WITHHELD**. Currently Team D's `KETO_LDL_META_EXAMPLE` citing only “AJCN 2024 (example)”.

All status values refer to **source-level checks**, not final grades of evidence certainty or a favorable clinical recommendation.

## Why the 26 records are not 26 independent studies

The independent research streams deliberately overlap. For example, Keto-Med appears in A and D; PREDIMED appears in B, C and D; ADA 2026's SGLT2 warning appears in A and D. A row is a **handoff claim**, not a distinct paper. Count unique studies separately in any future systematic synthesis; duplicating a paper across teams is cross-checking, not additional independent evidence.

## Two CSV import repairs

The reviewed package includes *separate normalized copies* of the four CSVs, never overwritten originals. Only two required structural repair: Team C `C001` (unquoted commas, 28/22 columns) and Team A `VLC_KD_meta` (missing empty `counterevidence_notes` cell, 15/16 columns). Those changes **do not** increase evidence certainty. The files are now archived as `source-files/A/`, `B/`, `C/`, `D/` and `source-files/normalized/`; each commit is checked against the manifest's SHA-256 digests. Do not fix errors in the originals: add explicitly dated errata or new derived versions.

## Clinical and equity guardrails

1. No ancestry-to-genotype or ancestry-to-diet algorithm; population differences alone do not establish a person's nutrient needs.
2. No results are treated as diagnostic on a single number, lab flag, or synthetic scenario; record units, fasting status, method, chronicity and medication history as **unknown** where not collected.
3. Keto and fasting are **study comparisons**, not automatic instructions. ADA 2026 recommendation 5.26 discourages ketogenic eating for specified SGLT2-treated diabetes patients at ketoacidosis risk. This app does not collect medication history to clear anyone for a restrictive diet.
4. Do not use Team C's unlabeled urine ACR “15” to assign a KDIGO category: **15 mg/g = A1; 15 mg/mmol = A2**. Preserve the original example and place the correction in an editorial erratum.
5. Preserve the 2018 **PREDIMED reanalysis/retraction context** and Keto-Med's **November 2022 figure-axis correction**. Keep favorable and unfavorable endpoints together rather than promoting one diet based on one surrogate.
6. Do not treat unverified Dr. Berg quotations as exact verbatim or endorse branded products. A dated transcript and accessible primary study must support any exact claim attribution.
7. No estimated personal lipid/glucose change, medication guidance, kidney diet or ideal-weight adjustment generated from the register.

**Release gates:** `GENERAL_EDUCATION_ONLY` permits appropriately qualified group-level discussion, not a live recommendation; `CONTEXT_ONLY` is for reference/comparison, not lab-triggered advice; `REQUIRES_CLINICAL_REVIEW` prevents app-personalized use; `WITHHOLD` blocks citation/numeric publication pending source resolution.

## Next integration procedure

1. **Complete (archival phase):** all 16 originals and four normalized CSVs have been imported and the source archive is checked in CI. Preserve the original-byte hashes and maintain an explicit provenance record for future revisions.
2. Reconcile overlapping papers and external source versions, noting the specific claim and study design rather than treating self-reported `source_verified_on` values as independent review.
3. Where a proposed patient-facing output depends on medication, pregnancy, disease or assay data the site does not collect, **withhold the new individualized output**. Do not turn missing data into permission.
4. Create a separate UI/content PR only after its precise statements pass source-specific review, synthetic safety regressions, and existing calculator/privac​​y protections.

See the [GitHub research triage](../../GROK_HANDOFF_TRIAGE_2026-11-04.md) for specific unresolved issues and evidence context.
