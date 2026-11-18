#!/usr/bin/env python3
"""Install exact public model snapshots from the adjacent lockfile, with no paid API."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shlex
import sys


def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(8 * 1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, required=True)
    args = parser.parse_args()
    root = args.root.expanduser().resolve()
    root.mkdir(parents=True, exist_ok=True)
    os.environ['HF_HOME'] = str(root / 'hub-cache')
    os.environ['HF_HUB_DISABLE_TELEMETRY'] = '1'
    os.environ['HF_HUB_DISABLE_IMPLICIT_TOKEN'] = '1'
    from huggingface_hub import HfApi, snapshot_download
    manifest = json.loads(Path(__file__).with_name('hf_models.lock.json').read_text())
    api = HfApi(token=False)
    for model in manifest['models']:
        info = api.model_info(model['repository'], revision=model['revision'])
        if info.sha != model['revision'] or info.private or info.gated:
            raise ValueError('Pinned model must remain public and ungated.')
        target = root / 'models' / model['directory']
        snapshot_download(repo_id=model['repository'], revision=model['revision'],
                          local_dir=target, allow_patterns=list(model['files']),
                          max_workers=4, token=False)
        for filename, expected in model['files'].items():
            path = target / filename
            if path.stat().st_size != expected['bytes'] or digest(path) != expected['sha256']:
                raise ValueError(f'Snapshot checksum mismatch: {path}')
        if model['license'] == 'public-domain':
            notice = (target / 'LICENSE').read_text()
            if 'PUBLIC DOMAIN NOTICE' not in notice or 'United States Government Work' not in notice:
                raise ValueError('NCBI license notice does not match the reviewed basis.')
        elif (info.card_data or {}).get('license') != model['license']:
            raise ValueError('Publisher card license does not match reviewed lockfile.')
        model['local_path'] = str(target)
        model['download_state'] = 'COMPLETE'
        print(f'Installed and checksum verified: {model["repository"]}', flush=True)
    manifest['root'] = str(root)
    (root / 'models.lock.json').write_text(json.dumps(manifest, indent=2) + '\n')
    (root / 'bin').mkdir(exist_ok=True)
    launcher = root / 'bin' / 'atlas-research'
    helper = Path(__file__).with_name('research_models.py').resolve()
    launcher.write_text('#!/bin/sh\nexport ATLAS_RESEARCH_HOME=' + shlex.quote(str(root)) + '\nexec ' + shlex.quote(sys.executable) + ' ' +
                        shlex.quote(str(helper)) + ' "$@"\n')
    launcher.chmod(0o755)


if __name__ == '__main__':
    main()
