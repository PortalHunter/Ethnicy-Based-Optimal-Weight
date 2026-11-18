# Hugging Face research tools for Atlas Teams A–E

**Installed locally at the user’s request (18November2026):** BGE-M3, BGE reranker v2 m3, paired MedCPT encoders and olmOCR2. [Usage and reproducible setup](HUGGING_FACE_LOCAL_SETUP.md); [installation receipt](data/huggingface_local_installation_2026-11-18.json); pinned files/licenses in `tools/hf_models.lock.json`. Retrieval smoke checks passed; OCR preserves the sample dates/negation but has formatting/transcription defects and remains review-assisted. No licensing fees or paid inference services. The catalog below began as a screening review; deferred resources remain uninstalled.

Checked 18 November 2026 with the connected Hugging Face tools. This is a shared research-process supplement, stored in Team D's authorized directory with copy-ready blocks for each team. Original prompts were read at `29d3b1f38cfee796520ed866c795302926040159`. Catalog: `data/huggingface_resource_review_2026-11-18.csv`.

## Best additions

| Priority | Resource | Useful work | Teams | Qualification |
|---|---|---|---|---|
|1|[BGE-M3](https://huggingface.co/BAAI/bge-m3)|Search original-language passages across already authenticated documents; propose duplicate institution-name candidates|A–E|MIT model card; multilingual retrieval, not legal/clinical validation. Source identity and exact IDs still checked directly.|
|1|[MedCPT Query Encoder](https://huggingface.co/ncbi/MedCPT-Query-Encoder) + [Article Encoder](https://huggingface.co/ncbi/MedCPT-Article-Encoder)|Biomedical title/abstract retrieval for the seven condition keys|B,C,E|NCBI public-domain notices inspected. Use the paired encoders; source-article rights remain separate. English/PubMed coverage does not establish global completeness.|
|2|[MedCPT Cross Encoder](https://huggingface.co/ncbi/MedCPT-Cross-Encoder)|Rerank retrieved biomedical abstracts|B,C,E|Card declares public domain but the LICENSE endpoint returned an empty file; clarify before execution. Relevance is not evidence strength.|
|2|[BGE reranker v2 m3](https://huggingface.co/BAAI/bge-reranker-v2-m3)|Rerank multilingual query/passage pairs|A–E|Apache 2.0 card; useful after retrieval. A score normalised to 0–1 is still not a calibrated verification probability.|
|2|[olmOCR2](https://huggingface.co/allenai/olmOCR-2-7B-1025)|Extract difficult scanned pages and tables from obtained source PDFs|A–E|Apache 2.0; card language tag English. Evaluate each other script separately. Preserve page images, page numbers and source hashes. Use existing native PDF text extraction first when adequate.|
|3|[SciFact](https://huggingface.co/datasets/allenai/scifact)|Benchmark evidence-sentence retrieval, support/refutation handling and abstention|E; B/C evaluation|CC BY-NC 2.0. Original publisher card reviewed; viewer unsupported because legacy loader executes Python. Require a vetted data-only export; do not execute an unfamiliar loader automatically.|
|3|[PubMedQA](https://huggingface.co/datasets/qiaojin/PubMedQA)|Benchmark biomedical question answering and yes/no/maybe handling|E; B/C evaluation|Card metadata MIT; documentation has gaps. Keep expert-labeled, artificial and unlabeled configurations distinct; preserve the original project's held-out evaluation split.|

**First pilot:** BGE-M3 over a small existing public-source corpus for Teams A/D; MedCPT over traceable titles/abstracts for Teams B/C; Team E evaluates provenance preservation and abstention. Keep lexical/BM25 search as the comparison baseline. Local installation checks now exercise this first subset. The complete25-case Atlas pilot and comparative benchmark remain unexecuted.

## Conditional or unsuitable additions

- [MedRAG PubMed corpus](https://huggingface.co/datasets/MedRAG/pubmed): potentially useful for PMID-linked discovery, but the card snapshot is from 2024 and does not declare a dataset license. Its headline corpus size and partial viewer export differ; completeness was not established. Inspect provenance, rights and version before bulk import. Verify each selected PMID and current article/retraction status against the original source. It does not supply the local-language/regional coverage Team C requires.
- [NLLB200](https://huggingface.co/facebook/nllb-200-distilled-600M): CC BY-NC 4.0; its card explicitly excludes medical/legal domain document translation and production deployment. Do not add it as the team's legal or clinical translation engine. Short general query-term experiments would need separate evaluation and would remain unreviewed machine assistance.
- [MedGemma1.5](https://huggingface.co/google/medgemma-1.5-4b-it): live listing found, but this connection lacks gated access and the full card was not available. No access terms accepted, weights downloaded or inference run. Defer; the atlas's immediate bottlenecks are original sources, entity identity and dates rather than clinical image interpretation.
- Public medical chat demos and arbitrary user fine-tunes: no adoption on popularity or model name alone. They have not been reviewed here and are not evidence authorities.

## Common prompt block — append to each team

> Use the reviewed Hugging Face resource catalog and installed local launcher for bounded retrieval, extraction or evaluation experiments that address a named backlog item. Authenticate the original source before indexing. Record resource owner/ID, immutable model/dataset revision, license file, pipeline/dependency version, query language, source URL/issuer/date, source hash, document page or section, exact evidence span and access mode. Use the pinned installed revisions in `tools/hf_models.lock.json`; see `HUGGING_FACE_LOCAL_SETUP.md` for the shared launcher and local/offline commands.
>
> Preserve original-language text beside any translation and identify machine assistance explicitly. Keep publication, enactment, commencement, observation and survey dates in separate fields. A retrieval, embedding or reranker score cannot establish authority identity, membership, legal remit, guideline adoption, causality or clinical approval. Model-generated text and benchmark labels are not primary evidence. Every proposed assertion returns to an inspectable original document; otherwise retain the appropriate unknown, partial or conflicting state.
>
> Evaluate a small fixed set of existing cases before scaling. Report retrieval recall, wrong-entity matches, source-link accuracy, date/negation errors, abstention, elapsed time and compute cost against lexical search/native extraction. Save code/configuration and fixture results in the owning team's handoff directory. Keep benchmark data out of the research evidence ledger. Respect document rights; use public de-identified research materials rather than private medical/genomic records. Remote compute and dataset access terms are separate execution decisions; none were started or accepted during this review.

## Team A — governmental identities and legal jurisdiction

> Use BGE-M3 and optional multilingual reranking to find original agency names, gazette provisions, renamed institutions and delegated-jurisdiction passages. Use OCR only where obtained scans need it. Produce candidate identity pairs with both original labels, domains, M49 keys, dated legal source and exact provision. Keep ministry, regulator, public-health institute and contractor distinct. Fuzzy similarity never assigns a canonical ID or extends parent-state law to a territory. Verify decisive dates, exclusions and delegation clauses against the original page image/text.

## Team B — societies, guidelines and condition discovery

> Use MedCPT Query/Article encoders and optional Cross Encoder to retrieve papers and guideline candidates for all seven keys; use multilingual retrieval for local society names and original-language publication lists. Keep diabetes subtypes, lactose intolerance, celiac disease and hemochromatosis concepts distinct. Confirm society identity, original guideline issuer, edition, jurisdiction and actual published text separately. Retrieved mentions create unappraised candidates; they do not establish membership, endorsement, national adoption or clinical applicability.

## Team C — local journals and article provenance

> Combine MedCPT biomedical retrieval with BGE-M3 original-language searching over rights-cleared local-index metadata. Preserve DOI, PMID or other identifier and original journal/article URL. Retain Global Index Medicus regional services, LILACS, SciELO, AJOL and other local indexes as independent discovery routes. Deduplicate translated titles using identifiers and publisher evidence rather than embedding score alone. PubMed-derived corpora are an additional route, not a full-country coverage denominator. Recheck current article corrections, retractions and source rights before promotion.

## Team D — dated international relationships and regulator packets

> Use multilingual retrieval to locate explicit institutional allocation, membership, office survey, statutory authority and commencement clauses in authenticated documents. Keep each relationship type and period separate. Store source spans that support the exact edge, together with nearby limitations. OCR cannot supply an unavailable appointment instrument or signatory register. Check a named candidate against existing exact Team A/B/C IDs; semantic similarity remains a proposal. Preserve independent legal/scientific review gates.

## Team E — evidence and integration evaluation

> Use a vetted SciFact data-only export and the original PubMedQA expert-labeled evaluation split for separate method benchmarks, then evaluate Atlas-specific fixtures. Benchmark success is not source authenticity, legal certification or clinical release approval. Test contradiction preservation, absent evidence, wrong entity, different jurisdiction, future commencement, retained historical survey, untranslated original, and retrieved text that does not entail the claim. Require reproducible source/revision hashes and report false promotions separately from useful candidate retrieval.

## Initial Atlas-specific pilot fixtures

Use 25 fixed existing cases, including these mandatory boundaries:

1. Boisson: contemporaneous27 January 2021 effective date versus later retrospective January/February wording; signed personnel instrument remains separate.
2. SCI: original welcome as twelfth country at10–12 April 2024 does not give an exact admission day.
3. German AMG: October enactment/publication versus9 December 2026 commencement.
4. Malta: distinct clause (j) and delegated (m)/(n)/(o); keep the unresolved scope overlap.
5. Liechtenstein: 53-country WHO-Europe roster and nonmember boundary do not infer an assignment.
6. WHO offices: exact April survey joins, older 2024 responses, historical 2021–22 service and later activity remain separate.
7. Institution names: a ministry match cannot substitute for a regulator or society ID.
8. Clinical discovery: relevant abstracts and yes/no/maybe benchmark answers do not create an approved patient-facing claim.

The initial review completed card/license/availability screening; the later user-authorized local installation is recorded separately above. Dataset preview of PubMedQA returned 429; no examples were used to claim a local benchmark. Five public model snapshots were subsequently installed locally; no dataset corpus, private records, paid job or hosted inference were loaded. Tool choices and per-team mappings are project recommendations inferred from the inspected cards; full Atlas benchmark performance and comparative efficiency remain unmeasured.
