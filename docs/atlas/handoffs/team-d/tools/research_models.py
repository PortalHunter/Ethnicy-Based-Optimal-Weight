#!/usr/bin/env python3
"""Local-only retrieval, reranking and page OCR; outputs are research candidates."""
import argparse
import gc
import hashlib
import importlib.metadata
import json
import os
from pathlib import Path
import re
import time
import tempfile

os.environ['HF_HUB_OFFLINE'] = '1'
os.environ['TRANSFORMERS_OFFLINE'] = '1'
os.environ['HF_HUB_DISABLE_TELEMETRY'] = '1'
os.environ['TOKENIZERS_PARALLELISM'] = 'false'


def home():
    if os.environ.get('ATLAS_RESEARCH_HOME'):
        return Path(os.environ['ATLAS_RESEARCH_HOME']).expanduser()
    for parent in Path(__file__).resolve().parents:
        candidate = parent / '.atlas-research-tools'
        if (candidate / 'models.lock.json').exists():
            return candidate
    raise RuntimeError('Set ATLAS_RESEARCH_HOME to the installed local environment.')


def sha256(path):
    digest = hashlib.sha256()
    with Path(path).open('rb') as stream:
        for chunk in iter(lambda: stream.read(8 * 1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()


def lock():
    return json.loads((home() / 'models.lock.json').read_text())


def model_record(key):
    record = next((r for r in lock()['models'] if r['key'] == key), None)
    if not record or record['download_state'] != 'COMPLETE':
        raise RuntimeError(f'Model download is not complete: {key}')
    return record


def device(requested='auto'):
    import torch
    torch.set_num_threads(4)
    chosen = 'mps' if torch.backends.mps.is_available() else 'cpu'
    return chosen if requested == 'auto' else requested


def corpus(path):
    rows = [json.loads(line) for line in Path(path).read_text().splitlines() if line.strip()]
    seen = set()
    for row in rows:
        for field in ['id', 'source_url', 'source_sha256', 'locator']:
            if not row.get(field):
                raise ValueError(f'Missing provenance field: {field}')
        if row['id'] in seen:
            raise ValueError(f'Duplicate passage ID: {row["id"]}')
        seen.add(row['id'])
        if not re.fullmatch('[a-f0-9]{64}', row['source_sha256']):
            raise ValueError('source_sha256 must identify the original source bytes.')
        if not row.get('text') and not (row.get('title') or row.get('abstract')):
            raise ValueError('Each passage needs text or title/abstract.')
        if row.get('source_path') and sha256(row['source_path']) != row['source_sha256']:
            raise ValueError(f'Original source digest mismatch: {row["id"]}')
    if not rows:
        raise ValueError('Corpus is empty.')
    return rows


def embed(key, rows, target, max_length=512):
    import torch
    from transformers import AutoModel, AutoTokenizer
    record = model_record(key)
    path = record['local_path']
    tokenizer = AutoTokenizer.from_pretrained(path, local_files_only=True, trust_remote_code=False)
    # The publisher's BGE-M3 release uses a state dictionary, loaded with the
    # restricted PyTorch weights-only loader. Other selected models use safetensors.
    model = AutoModel.from_pretrained(
        path, local_files_only=True, trust_remote_code=False,
        use_safetensors=(key != 'bge-m3'), weights_only=True,
    ).to(target).eval()
    outputs = []
    for start in range(0, len(rows), 4):
        batch = rows[start:start + 4]
        if key == 'medcpt-article':
            inputs = tokenizer(
                [r.get('title', '') for r in batch],
                [r.get('abstract') or r.get('text', '') for r in batch],
                padding=True, truncation=True, max_length=max_length, return_tensors='pt',
            )
        else:
            texts = [r.get('text') or '\n'.join([r.get('title', ''), r.get('abstract', '')]) for r in batch]
            inputs = tokenizer(texts, padding=True, truncation=True,
                               max_length=64 if key == 'medcpt-query' else max_length,
                               return_tensors='pt')
        inputs = {k: v.to(target) for k, v in inputs.items()}
        with torch.inference_mode():
            vectors = model(**inputs).last_hidden_state[:, 0]
            if key == 'bge-m3':
                vectors = torch.nn.functional.normalize(vectors, p=2, dim=1)
        outputs.append(vectors.float().cpu())
    result = torch.cat(outputs).numpy()
    del model
    gc.collect()
    if target == 'mps':
        torch.mps.empty_cache()
    return result


def rerank(query, rows, target, max_length=512):
    import torch
    from transformers import AutoModelForSequenceClassification, AutoTokenizer
    record = model_record('bge-reranker')
    tokenizer = AutoTokenizer.from_pretrained(record['local_path'], local_files_only=True,
                                             trust_remote_code=False)
    model = AutoModelForSequenceClassification.from_pretrained(
        record['local_path'], local_files_only=True, trust_remote_code=False,
        use_safetensors=True,
    ).to(target).eval()
    results = []
    for start in range(0, len(rows), 4):
        batch = rows[start:start + 4]
        texts = [r.get('text') or '\n'.join([r.get('title', ''), r.get('abstract', '')]) for r in batch]
        inputs = tokenizer([query] * len(batch), texts, padding=True, truncation=True,
                           max_length=max_length, return_tensors='pt')
        with torch.inference_mode():
            logits = model(**{k: v.to(target) for k, v in inputs.items()}).logits.reshape(-1).float().cpu().tolist()
        results.extend(dict(row, relevance_logit=score) for row, score in zip(batch, logits))
    del model
    gc.collect()
    if target == 'mps':
        torch.mps.empty_cache()
    return sorted(results, key=lambda r: r['relevance_logit'], reverse=True)


def search(args):
    import numpy as np
    rows = corpus(args.corpus)
    target = device(args.device)
    article_key = 'bge-m3' if args.mode == 'multilingual' else 'medcpt-article'
    query_key = 'bge-m3' if args.mode == 'multilingual' else 'medcpt-query'
    revision = model_record(article_key)['revision']
    cache = home() / 'embedding-cache'
    cache.mkdir(exist_ok=True)
    cache_key = hashlib.sha256(f'{sha256(args.corpus)}:{revision}:{args.max_length}:{args.mode}'.encode()).hexdigest()
    cached = cache / (cache_key + '.npy')
    if cached.exists():
        vectors = np.load(cached, allow_pickle=False)
    else:
        vectors = embed(article_key, rows, target, args.max_length)
        with tempfile.NamedTemporaryFile(dir=cache, suffix='.npy', delete=False) as temporary:
            np.save(temporary, vectors, allow_pickle=False)
            temporary_path = temporary.name
        os.replace(temporary_path, cached)
    query = embed(query_key, [{'text': args.query}], target, args.max_length)[0]
    scores = vectors @ query
    indices = np.argsort(-scores)[:args.top_k]
    hits = [dict(rows[i], retrieval_score=float(scores[i])) for i in indices]
    if args.rerank:
        hits = rerank(args.query, hits, target, args.max_length)
    return dict(query=args.query, mode=args.mode, device=target, corpus_sha256=sha256(args.corpus),
                revisions={k: model_record(k)['revision'] for k in
                           [article_key, query_key] + (['bge-reranker'] if args.rerank else [])},
                max_input_tokens=args.max_length, query_max_tokens=64 if args.mode == 'biomedical' else args.max_length,
                truncation='Inputs exceeding the token limit are truncated; chunk long documents before indexing.',
                score_semantics='Retrieval similarity/reranker logit, not evidence strength or verification probability.',
                evidence_state='CANDIDATES_REQUIRING_ORIGINAL_SOURCE_REVIEW', candidates=hits)


def ocr(args):
    import pypdfium2 as pdfium
    source = Path(args.pdf).resolve()
    document = pdfium.PdfDocument(source)
    if not 1 <= args.page <= len(document):
        raise ValueError('Page number is outside the PDF.')
    page = document[args.page - 1]
    native = page.get_textpage().get_text_range()
    provenance = dict(source_path=str(source), source_sha256=sha256(source), page=args.page,
                      verification_state='EXTRACTED_TEXT_REQUIRES_ORIGINAL_PAGE_REVIEW')
    if len(native.strip()) >= 120 and not args.force_model:
        return dict(provenance, method='NATIVE_PDF_TEXT', text=native)
    import torch
    from transformers import AutoProcessor, Qwen2_5_VLForConditionalGeneration
    target = device(args.device)
    record = model_record('olmocr')
    scale = 1288 / max(page.get_width(), page.get_height())
    picture = page.render(scale=scale).to_pil().convert('RGB')
    processor = AutoProcessor.from_pretrained(record['local_path'], local_files_only=True,
                                             trust_remote_code=False, use_fast=False)
    model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
        record['local_path'], local_files_only=True, trust_remote_code=False,
        use_safetensors=True, dtype=torch.bfloat16, low_cpu_mem_usage=True,
        attn_implementation='eager',
    ).to(target).eval()
    # Ai2 olmocr/prompts/prompts.py, build_no_anchoring_v4_yaml_prompt (Apache2.0).
    prompt = (
        "Attached is one page of a document that you must process. "
        "Just return the plain text representation of this document as if you were reading it naturally. Convert equations to LateX and tables to HTML.\n"
        "If there are any figures or charts, label them with the following markdown syntax ![Alt text describing the contents of the figure](page_startx_starty_width_height.png)\n"
        "Return your output as markdown, with a front matter section on top specifying values for the primary_language, is_rotation_valid, rotation_correction, is_table, and is_diagram parameters."
    )
    messages = [{'role': 'user', 'content': [{'type': 'text', 'text': prompt},
                                            {'type': 'image', 'image': picture}]}]
    text = processor.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    inputs = processor(text=[text], images=[picture], padding=True, return_tensors='pt')
    inputs = {k: v.to(target) for k, v in inputs.items()}
    with torch.inference_mode():
        torch.manual_seed(0)
        result = model.generate(**inputs, max_new_tokens=args.max_tokens, do_sample=True, temperature=0.1)
    generated = result[:, inputs['input_ids'].shape[1]:]
    output = processor.batch_decode(generated, skip_special_tokens=True)[0]
    truncated = generated.shape[1] >= args.max_tokens and int(generated[0, -1]) not in (
        model.generation_config.eos_token_id if isinstance(model.generation_config.eos_token_id, list)
        else [model.generation_config.eos_token_id])
    front_matter = re.match(r'^\s*---\s*\n(.*?)\n---', output, re.DOTALL)
    metadata_complete = False
    if front_matter:
        import yaml
        try:
            metadata = yaml.safe_load(front_matter.group(1))
            metadata_complete = isinstance(metadata, dict) and {
                'primary_language', 'is_rotation_valid', 'rotation_correction', 'is_table', 'is_diagram'
            } <= set(metadata)
        except yaml.YAMLError:
            pass
    return dict(provenance, method='OLMOCR_LOCAL_TRANSFORMERS_SINGLE_PAGE', device=target,
                manual_review_required=True, front_matter_complete=metadata_complete,
                model_revision=record['revision'], text=output, generation_limit_reached=bool(truncated),
                limitation='English-tagged model; inspect each output against the original page. This lightweight runner does not reproduce the full olmOCR rotation/retry benchmark pipeline.')


def doctor(args):
    import torch
    models = lock()['models']
    for model in models:
        for name, item in model['files'].items():
            path = Path(model['local_path']) / name
            if not path.is_file() or path.stat().st_size != item['bytes']:
                raise ValueError(f'Missing or incomplete model file: {path}')
            if args.verify_hashes and sha256(path) != item['sha256']:
                raise ValueError(f'Model checksum mismatch: {path}')
    return dict(home=str(home()), packages={p: importlib.metadata.version(p) for p in
                ['torch', 'transformers', 'huggingface-hub', 'safetensors', 'pypdfium2']},
                mps_available=torch.backends.mps.is_available(), model_keys=[m['key'] for m in models],
                offline=True, paid_api_calls=0, checksum_verification=args.verify_hashes)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest='command', required=True)
    d = sub.add_parser('doctor');d.add_argument('--verify-hashes', action='store_true')
    s = sub.add_parser('search')
    s.add_argument('--mode', choices=['multilingual', 'biomedical'], default='multilingual')
    s.add_argument('--corpus', required=True);s.add_argument('--query', required=True)
    s.add_argument('--top-k', type=int, default=5);s.add_argument('--rerank', action='store_true')
    s.add_argument('--max-length', type=int, default=512)
    o = sub.add_parser('ocr');o.add_argument('--pdf', required=True);o.add_argument('--page', type=int, default=1)
    o.add_argument('--force-model', action='store_true');o.add_argument('--max-tokens', type=int, default=2048)
    for cmd in [d, s, o]:
        cmd.add_argument('--output');cmd.add_argument('--device', choices=['auto', 'cpu', 'mps'], default='auto')
    args = parser.parse_args()
    if args.command == 'search' and (args.top_k < 1 or not 8 <= args.max_length <= 8192):
        parser.error('top-k must be positive and max-length between8 and8192.')
    if args.command == 'ocr' and args.max_tokens < 1:
        parser.error('max-tokens must be positive.')
    started = time.monotonic()
    result = {'doctor': doctor, 'search': search, 'ocr': ocr}[args.command](args)
    result['elapsed_seconds'] = round(time.monotonic() - started, 3)
    output = json.dumps(result, indent=2, ensure_ascii=False) + '\n'
    if args.output:
        Path(args.output).write_text(output)
    else:
        print(output, end='')


if __name__ == '__main__':
    main()
