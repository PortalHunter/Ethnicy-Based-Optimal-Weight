# Atlas Cultural & Historical Health Signals — Folklore Discovery Track

> **Status:** exploratory, non-clinical research intake. All observations are source *leads*, not validated medical evidence. See [tracking issue #141](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/141). Created 2026-11-18.

## Mission

Search historical folklore, oral accounts, myths, tall tales, local cures, beliefs, legends, and transmitted stories for potentially overlooked descriptions of human health phenomena. Record all identifiable versions across time and place, not just a canonical summary. This is a discovery system, **not** a medical diagnostic engine or a justification for treating cultures as biological categories.

## Workspace and non-interference

- Dedicated branch: `research/atlas-folklore-discovery-20261118` (forked from `research/atlas-raw-intake`).
- This folder: `docs/atlas/folklore/`. Do not write in `docs/atlas/raw-intake/`, worker branches A/B/D, the calculator, main, or clinical harnesses.
- Google Drive bulk archive, under **Ethnic BMI** in the explicitly selected account `brianallenruno@gmail.com`: [Atlas — Folklore & Historical Health Signals](https://drive.google.com/drive/folders/12VVGMHid7BQN8DoumqhUTtc67MFkjSNL). Subfolders: indexes, source collections, transcriptions/editions, rights/review.
- GitHub is **public**. Keep only lawful public metadata, brief paraphrases, schemas, links, and research notes here. Never commit restricted narratives, personally identifiable informant details without permission, whole copyrighted stories, or private community materials.

## Core data model: avoid collapsing versions

1. **Story family / motif**: research grouping, not a claim that all related cultural expressions are identical or genealogically related.
2. **Attestation**: one exact observed or documented version: source page/record, storyteller, collector, publication/recording, language, date, place, edition/translation, and rights.
3. **Relationship**: a separately evidenced edge: independent retelling, same-work new edition, translation, direct copy, adaptation, cross-cultural analogue, contradictory account, or **unknown**. Unknown is the default.
4. **Passage / feature**: concise and cited source-based description of what the account says; separate observed symptoms from moral, supernatural, symbolic, or social explanations.
5. **Hypothesis**: a *proposed* mechanism, with alternatives, falsifiable predictions, uncertainty, limitations, and independent corroborating/contrary evidence. Never infer clinical causality just from story similarity.
6. **Review**: folklore/linguistics/community rights review first; medical review only if warranted. Record reviewer, date, outcome, and withheld/restricted status.

At every stage, distinguish **date recorded** from **date story purports to describe**, and **date a website was viewed** from **date of the original telling**. Do not treat different medical articles citing the same tale as independent folklore witnesses.

## Intake workflow

**0. Scoping:** define motifs and nonmedical negative controls; collect original-language search terms and catalog identifiers.

**1. Discovery:** capture a unique attestation candidate per URL or archival locator in `intake/source-leads-2026-11-18.csv`, including `lead_only` and rights/access state. Collect *all variants located*, including accounts that contradict each other or contain no plausible health signal. Preserve a second lead for a second telling; never overwrite a first telling.

**2. Archival verification:** inspect original source; confirm identifiers, date, page, collection, creator, narrator, locale, original language, edition, accessibility, rights, translation chain, and whether transcription is volunteered or official. Attach manuscript/recording file only where lawful and approved.

**3. Variant mapping:** compare chronology, geographic variation, symptom order, characters, setting, environmental cues, explanations, cure rituals, and disputed passages. Track direct-citation dependencies. Beware that widely repeated Internet summaries can be derived from a single scholarly account.

**4. Feature extraction:** separate `reported_experience`, `narrative_explanation`, `practice_or_remedy`, and `reported_outcome`. Tag as self-report, witness report, moral tale, healer recipe, late editorial claim, or unknown. Mark missing denominators, selection bias, and unknown literalness.

**5. Hypothesis generation:** compare existing peer-reviewed literature *both for and against* possible biomedical interpretations; use explicitly testable alternatives and nonmedical explanations, including social, linguistic, literary, and historical diffusion.

**6. Governance / review:** first check cultural rights and harm; then human expert review (folklore studies / relevant languages / community representative / clinical specialty / epidemiology). No conversion into Atlas evidence without the separate established evidence-integration process, provenance checks, and clinical approval.

## Evidence and release gates

- `lead_only` -> `source_verified` -> `rights_reviewed` -> `feature_extracted` -> `hypothesis_proposed` -> `expert_reviewed` -> `eligible_for_separate_clinical_evidence_review`.
- The last status **does not mean accepted clinical evidence**.
- Invalid source or rights restriction -> `quarantined` / `restricted`; retain minimal non-sensitive tombstone ID if legally and ethically permissible.
- Every mechanistic claim must have an independently sourced publication and its own strength assessment; archival links alone support *what was recorded*, not why it happened.
- Do not assign an "unexplained medical" label to a fictional/symbolic story without corroborating observations.

## Pilot and measures

Run a manually reviewed **100-attestation** stratified pilot *after* current teams' priorities are complete. Spread across multiple regions, genres, languages, periods, and source collection types; include minimally 2+ independently identified variants for selected motifs and non-health controls.

Metrics: attestation citation validity, record-provenance completeness, translation fidelity, rights clearance, variant clustering precision/recall, source-dependency detection, inter-rater reliability, hypothesized clinical-feature precision, false discovery rate, and share of candidates with useful testable hypotheses. Compare AI extraction with blinded expert extraction; log discordant and null results.

## Starter files

- [Attestation and relationship schema](schema/attestation.schema.json)
- [Seed source lead CSV](intake/source-leads-2026-11-18.csv) — initial *links*, not copied texts or independently verified folklore claims
- [Collections and future search programs](intake/source-portals-and-searches.md)
- [Rights, safety and cultural stewardship policy](governance.md)

## First example: Bangungot

Published papers discuss Philippine bangungot, Batibat-related narrative explanations, sudden unexplained nocturnal death, and possible cardiac mechanisms. These are **not interchangeable**: a sleeping person's frightening experience, an account of a creature pressing on the chest, and a case of unexplained sudden death can be separate kinds of claim. Do not collapse them into "Brugada" or count one as proof of the other. Compare [Gaw et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC3404490/) and [Cultural beliefs on disease causation in the Philippines](https://pmc.ncbi.nlm.nih.gov/articles/PMC4159471/).

## Stewardship

Use the [CARE Principles](https://www.gida-global.org/careprinciples) for Indigenous data governance, alongside repository collection terms, consent rules, and community authority. Public access is not automatically permission to mirror, translate, computationally exploit, or publish sensitive knowledge. Default to a URL + restrained description and seek appropriate approval before bulk downloads or derivative datasets.
