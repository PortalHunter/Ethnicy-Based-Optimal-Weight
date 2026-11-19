# Team B — Quality and completion protocol (v2, 2026-11-06)

**Applies to all future Team B research batches.** This supplements RUNBOOK.md and QUEUE.md. In any conflict over evidence eligibility, search depth, acceptance, or validation fallback, this v2 protocol takes precedence. The historical dataset and original Team B assignment remain preserved. This is an instruction change, **not** a research batch and **not** medical approval.

## 1. Target and metrics

The target is an independently verifiable census of nongovernmental professional, biomedical, disease and community-controlled organizations and their **actual condition-specific publications** for 248 UN M49 areas and seven conditions, with independent evidence for organization domicile, original author/issuer, publisher/host, document country, sampled population and healthcare jurisdiction. Team A owns government authority, C independent journal census, D WHO/international networks. Do not assign an external journal or network's authorship to a local society. No country, ethnicity, residency or ancestry category establishes an individual's condition or genotype.

Maintain the current three **structural** denominators: locally verified organization domiciles / 248; area-condition cells with a linked resource / 1,736; and linked + targeted-unlinked + untouched = 1,736. These are not measures of clinical approval or of quality-qualified publication coverage. The current Batch 83 baseline is 227/248 verified local-area identities, 379 linked, 174 targeted-unlinked, 1,183 untouched and 415 linked resource/context pairs. **Do not silently re-label the 379 links as 379 substantive sources, or the 174 targeted searches as 174 thoroughly researched negatives.** These are historical baseline counts, not new goals.

Add a separate machine-readable audit in **data/research_quality_audit.csv**. For each audited **source** row, match organization ID + condition key + exact publication URL to the original resource/context and organization domicile. For each **search_depth** row, match M49 area + condition to a coverage cell and support it with the actual search log/URL. The ledger starts with four provisional Batch 83 high-priority cases; **all other resource quality and search depth are not yet audited**, not implicitly approved or negative.

## 2. Evidence-quality classes and eligibility

- **S1 original substantive:** First-party, original condition-specific society/independent-group study, registry report, published recommendation/guideline, or sufficiently substantive attributable original abstract. Verify actual original text or substantive abstract, date/edition, named author/issuer and population/jurisdiction. A society posting a third-party guideline is not original authorship.
- **S2 first-party substantive education:** An actual independent society, disease association or community organization page/document that explains that condition in substantive original content. Eligible for the **educational index only**; not primary research, clinical approval, population prevalence or guideline adoption.
- **H substantive external but accurately hosted/endorsed:** Accessible substantive externally authored document with the organization's real hosting, translation or endorsement role confirmed. Count separately; never represent it as locally authored or legally applicable guidance.
- **M metadata/activity only:** Conference session timetable, planned lecture, event notice, list of titles, index/landing page without available condition-specific substantive content, or generic awareness announcement. Can prove activity or direct further searches, but **must not create a new substantive linked-resource positive**.
- **U unresolved:** Inaccessible original, unclear publisher/imprint, conflicting edition, attribution or unsupported endorsement, or only a search snippet. Keep as an open lead until evidence confirms S1/S2/H; never infer source country from website domain or the studied population's location.

For **new** source-positive cells, insist on an inspected S1, S2 or H resource with an accurate role and exact original-language publication URL; otherwise retain source as provenance/search navigation and keep the cell unlinked. A link need not be a clinical guideline to qualify, but must have **real condition content**. For **historical** links, retain the raw record and flag M/U in the new ledger until an independently validated, provenance-preserving corrective data commit can update the exact source, context and coverage joins. Do not erase history or artificially inflate coverage. Specifically, the Peru SPR Batch 83 2025 gout **scheduled lecture programme** is provisional **M**, not an S1 study, S2 educational text or evidence that the talk occurred.

Record exact title, source language, author versus page host, issuer-country evidence basis, edition, source availability (HTML, original PDF page, substantive abstract, index-only, blocked), sample/denominator or not applicable, jurisdiction and disease-subtype limitations. Medical/rights/Indigenous consent reviews remain separate and unapproved.

## 3. Search depth and defensible nonfindings

The current validator sets targeted_search_no_verified_resource when **any search log exists**. This is **not automatically a sufficiently bounded search**. Add a separately audited depth classification:

- **D0 untouched:** no actual condition-specific targeted check.
- **D1 exploratory:** one society page, index, query path or access-failed source. It remains an open research task with a named *different* next discovery approach, even when structurally targeted-unlinked.
- **D2 reasonably bounded:** generally at least **two independent evidence avenues**, e.g. an original-language first-party society/condition page **and** a distinct professional directory, independent association publication archive or locally issued primary document catalogue. Record both real URLs, native-language queries, dates, checked editions, results and limits. Repeating equivalent queries or inspecting multiple tabs on one empty site is not necessarily independent. If no second credible route can exist or is accessible, record that exception as evidence-limited rather than inventing a search.
- **D3 escalated/evidence-limited:** legal domicile, publisher colophon, contentious national jurisdiction, inaccessible original, Indigenous/community control or rights uncertainty requiring named human or later review. Cite the precise unresolved question; do not treat D3 as scientific verification or evidence of national absence.

Never state that a society or research source does not exist nationwide based on a negative search. A legitimate endpoint is “no eligible Team B publication verified after these specified routes; evidence-limited.” S1/S2/H and D2/D3 are separate terminal research *dispositions*, not clinical approvals. An index-only D1 search is an intermediate state, regardless of legacy CSV status.

## 4. Efficiency, quality audits and stopping

At every substantive run recompute live CSV and ledger baselines. Give priority to untouched hemochromatosis, lactose, gout and celiac cells, rotate at least two regions when feasible, and choose plausible local independent first-party issuers. Aim for **6–15 distinct lower-risk first-pass cells plus 2–5 in-depth source, attribution or quality audits** when possible; this is a flexible planning range, **not a quota**. A narrower batch with strong original evidence is preferable to many agenda links. Do not repeat a failed query without a new domain, language, issuer, publication or catalogue hypothesis.

At least **every fifth substantive data batch**, do a dedicated risk-prioritized quality pass on earlier positives and organization identities: programmes, externally hosted guidance, translated foreign sources, publisher-versus-society claims, outdated editions, inaccessible PDFs, FH versus LDL-C, clinical gout versus serum urate, ferritin versus hereditary hemochromatosis, lactase genotype versus symptoms, HLA/serology versus confirmed celiac, Indigenous governance, local domicile and cross-border service scope. If **two consecutive research runs** gain no qualified substantive sources, verified independent local identities or issuer resolutions, pivot the next run toward quality/backlog and original-language discovery. Quality corrections, search-depth upgrades and documented legal/source escalations are meaningful progress even with zero raw coverage delta.

Do not force invented identities for Antarctica, tiny islands or contested territories to increase geographic percentages. Prioritize plausible inhabited gaps, then explicitly document credible independent attempts and unresolved classifications.

## 5. Validation, persistence and Node fallback

Re-fetch the live PR head and draft/open/unmerged state before every write; update only docs/atlas/handoffs/team-b/. Do not change main, other teams, website, formulas or patient medical content, and never merge/mark ready. Use a short additive data commit and a separate standalone documentation checkpoint, expected-head/fast-forward branch updates, complete rereads and no force pushes. If another run advances the branch, refetch and reconcile rather than overwrite.

**Preferred:** run the actual unchanged command **node docs/atlas/handoffs/team-b/validate.mjs** against a full checkout. If GitHub checkout fails owing to DNS, first attempt to reconstruct a temporary directory with the **exact ten canonical CSVs and unchanged validator file** downloaded through the connected GitHub tool, preserving relative paths, *if* executable filesystem and Node are available; run the same script on those exact bytes. If no runnable file environment exists, explicitly report **Node CLI NOT RUN**, blocker, and independently check CSV widths, unique M49 248 × seven cells, exact resource/context/provenance/log joins, issuer enums, all research_lead_only, community/cross-border preservation and unchanged diversity cases. Never label independent JS checks a Node pass.

The new quality CSV is **supplemental to the ten core CSVs**, not covered by the unchanged Node validator. Independently verify audit column widths, valid types/tiers/status, referenced original source/context/area keys and search evidence; do not count provisional classifications as approved audits. For every immutable data or documentation commit, obtain a nontruncated full Git tree and verify **11/11** ten core CSVs plus validator **and 1/1 quality CSV (12/12 total)** by exact tree-vs-file SHA readback. Check scoped diffs and CI, including still-in-progress jobs. A structural test, GitHub blob match or successful CI is not license, clinical or legal review.

For instruction-only work, **zero new research data, zero coverage deltas, no batch counter increment**. Keep historical standalone checkpoints intact.

## 6. Research acceptance and honest completion

Declare Team B's independently traceable **research inventory dispositioned** only when: (a) all 1,736 cells have independently audited substantive S1/S2/H evidence where available or documented D2 search / D3 evidence-limited escalation; (b) all existing resource/context pairs have been individually quality/issuer/population/jurisdiction audited and M/U source problems explicitly resolved or remaining as named blockers; (c) 248 M49 areas have justified verified local identities where real or evidence-limited no-verified-local-identity dispositions (never invented institutions); (d) five known issuer imprints and any newly discovered conflicts are resolved with primary originals **or** explicitly escalated; (e) 10+ ancestry-overgeneralization, Indigenous governance and cross-border cases are preserved and independently caveated; (f) the actual validator status, audit ledger and exact immutable readbacks are reported.

If unresolved human/legal/rights/medical questions remain, report them as such rather than claiming fully verified evidence. **All clinical release states remain research_lead_only; zero clinical claims are approved by Team B.** Issue #27 handles separate clinical appraisal. Research completeness can be declared only as a *bounded evidence inventory with transparent exceptions*, not 100% locally authored medical guidelines.

## 7. Mandatory additional progress ledger

Keep the original labeled bars for 227/248 local identity coverage and three stacked categories out of 1,736 (raw positives, targeted-unlinked, untouched), with run deltas and seven condition counts. **Add separately**, using actual audited ledger entries only, counts of adjudicated S1/S2/H, M, U and **unaudited** links; counts of D1/D2/D3 and other unaudited searched-unlinked cells; changes in five issuer uncertainties and remaining high-risk reviews. If full coverage of a category was not audited, say “not yet enumerated/audited,” not “zero” and not “complete.”

## 8. Immediate audit backlog from Batch 83

- **Peru 604 gout, B-PE-SPR**: scheduled 2025 Gota talk PDF page 5 is metadata-only (M), though historically linked as raw positive. Seek actual lecture text or substantive original publication, or carefully reclassify the linked record while preserving provenance.
- **India 356 lactose**: one ISG class catalogue checked; D1. Search distinct local/original issuer.
- **Indonesia 360 celiac**: one PGI consensus catalogue checked; D1. Check independent paediatric gastroenterology and original Indonesian publisher.
- **Egypt 818 gout**: one EGYSIR site checked; D1. Find society-issued content; do not ascribe the separate Springer 2022 authors to that society.
- **All other linked resources**: do not presume quality-tier audit; focus highest-risk programme/index/translated/PDF sources first.
- **Five original issuer imprints**: Panama HEARTS, Portuguese WGO lactose translation, Portuguese ESPGHAN celiac translation, Chad OA Pub/JHC and South Sudan PAMJ remain original-source questions.

