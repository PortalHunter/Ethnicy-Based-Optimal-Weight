# Local Hugging Face research tools

Installed for this project on18November2026 in `.atlas-research-tools/` beside the repository. Models and the isolated Python environment are outside Git and outside the read-only synced `sources/` directory. Teams A–E can use the same local launcher; other computers need the reproducible installation below.

The selected models have no licensing fee: BGE-M3 (MIT), BGE reranker v2 m3 and olmOCR2 (Apache2.0), and the paired NCBI MedCPT encoders (public-domain notices). Publisher license declarations/notices and immutable revisions are preserved in `tools/hf_models.lock.json`; dependency versions are in `tools/requirements-research.lock.txt`. Retain applicable attribution and notices. Source-document and article rights remain separate.

No hosted inference, subscription, paid endpoint, gated model or bulk medical corpus is enabled. Inference uses local Apple GPU/CPU and local model files. The selected model files occupy about20.55GiB, plus the Python environment and working caches. BGE-M3's publisher release uses a PyTorch state dictionary; the helper loads it with the restricted weights-only loader. Other selected weights use safetensors. No repository-provided Python model code is executed.

## Use on this Mac

Launcher:

```sh
/Users/brianwork/.codex/.chatgpt-projects/g-p-6ae909821af08191ab14b78f3e85635b/.atlas-research-tools/bin/atlas-research doctor
```

Short examples below assume that launcher is on `PATH`:

```sh
atlas-research search --mode multilingual --corpus passages.jsonl --query "effective date of the authority" --rerank --output hits.json
atlas-research search --mode biomedical --corpus articles.jsonl --query "celiac disease gluten" --output hits.json
atlas-research ocr --pdf obtained-source.pdf --page 1 --output page1.json
```

The OCR command uses native PDF text when available; otherwise it invokes the local OCR model. `--force-model` is for explicit scan/model checks. The lightweight single-page runner does not reproduce the upstream toolkit's rotation/retry benchmark pipeline. Use `--max-tokens` to bound output and inspect `generation_limit_reached`; partial output must not be treated as a complete transcription. English is the model's declared language; other scripts require separate evaluation.

JSONL inputs need one record per passage/article with `id`, `source_url`, original-source `source_sha256`, `locator`, and `text` or `title`/`abstract`. Optional `source_path` causes the original bytes to be checked against that digest. Authenticate and obtain permission to index sources before preparation. Preserve original-language text and dates. For example:

```json
{"id":"original-document:section7","source_url":"https://official.example/document","source_sha256":"<64 lowercase hexadecimal characters>","locator":"section7","text":"<original passage>","checked_on":"2026-11-18"}
```

This is a schema example, not a research source. Metadata survives retrieval unchanged. BGE uses normalized dense CLS embeddings; MedCPT uses its paired article/query CLS encoders and dot products. Optional BGE reranking returns raw relevance logits. Scores are not verification probabilities. Default input limit512 tokens; split long sources into traceable passages before indexing. Biomedical queries use64 tokens. Reuse of unchanged corpus embeddings is automatic; cache keys include corpus hash, model revision, mode and token limit. Final assertions still require the original document and the appropriate independent review.

## Reproduce without a paid service

Use Python3.12, about25GiB free disk for the selected files and runtime, and enough memory for the OCR model (this Mac has36GiB). Start with the small encoders for retrieval; load models sequentially. A local installation on another machine must be tested there.

```sh
python3.12 -m venv /path/to/.atlas-research-tools/venv
/path/to/.atlas-research-tools/venv/bin/python -m pip install -r docs/atlas/handoffs/team-d/tools/requirements-research.lock.txt
/path/to/.atlas-research-tools/venv/bin/python docs/atlas/handoffs/team-d/tools/install_research_models.py --root /path/to/.atlas-research-tools
/path/to/.atlas-research-tools/bin/atlas-research doctor
```

The installer downloads only the pinned public snapshots, verifies every recorded file digest, checks publisher licensing metadata/notices, and creates a launcher. Runtime commands force offline model loading. `doctor --verify-hashes` performs a full file-integrity reread when needed.

## Shared instruction for Teams A–E

> Use the project's installed `atlas-research` launcher for bounded local retrieval, optional reranking and OCR of already obtained sources. Follow this setup document and the shared research supplement. Keep source identifiers, hashes, original spans, language and dates with every result. Consult `tools/hf_models.lock.json` for immutable revisions and license basis. Search results and OCR are assistance, not primary authorities, canonical IDs, membership decisions, clinical approval or legal certification. Keep retrieved candidate ranking separate from source verification. Use existing lexical/native-text routes when they suffice, and preserve unknown, historical, contradictory and non-applicable states.

## Installation checks

The accompanying installation receipt records actual local checks and their limitations. Original Irish statute retrieval and a Danish-to-English query exercise multilingual retrieval; a clearly marked synthetic corpus exercises the paired biomedical encoders. OCR uses a synthetic raster-only page with dates and negation. The OCR sample preserved both dates and negation but duplicated a header word and emitted incomplete front matter. OCR therefore remains review-assisted; do not use its generated metadata or transcription unattended. The failed float16 output and final bfloat16 output are retained in the local receipt. These are installation checks, not a completed25-case Atlas evaluation, clinical validation, or a measured speed/quality improvement over the full existing workflow. Deferred catalog resources, including gated, noncommercial, incompletely licensed or corpus-scale candidates, were not installed.
