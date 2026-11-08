"""Bounded software validation only. No publication, check-in, or research."""
import csv
import hashlib
import io
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import urllib.request

REPO = 'PortalHunter/Ethnicy-Based-Optimal-Weight'
BRANCH = 'validation/atlas-native-v1'
OUT = Path('validation-evidence').resolve()
OUT.mkdir(exist_ok=True)
REPORT = {'version': 1, 'outcome': 'BLOCKED', 'commands': [],
          'request_commit': os.environ.get('GITHUB_SHA'),
          'workflow_run': 'https://github.com/' + REPO + '/actions/runs/' + os.environ.get('GITHUB_RUN_ID', 'local'),
          'attempt': os.environ.get('GITHUB_RUN_ATTEMPT', 'local'),
          'limitations': ['Software integrity only; no source authentication, legal, clinical, rights, expert or independent role approval.',
                          'Live ref/PR/reservation observations must be repeated immediately before any authorized write.',
                          'Artifacts expire after 90 days; preserve audited evidence in an authorized GitHub documentation commit before expiry.']}


def require(ok, why):
    if not ok:
        raise ValueError(why)


def run(args, cwd=None):
    proc = subprocess.run(args, cwd=cwd, capture_output=True, text=True)
    index = len(REPORT['commands']) + 1
    log = f'{index:02d}.log'
    (OUT / log).write_text('$ ' + json.dumps(args) + '\n' + proc.stdout + proc.stderr)
    REPORT['commands'].append({'argv': args, 'cwd': str(cwd or Path.cwd()),
                               'exit_code': proc.returncode, 'log': log})
    print('$', json.dumps(args), 'exit', proc.returncode, flush=True)
    print(proc.stdout + proc.stderr, flush=True)
    require(proc.returncode == 0, 'command failed: ' + json.dumps(args))
    return proc.stdout.strip()


def api(path):
    url = 'https://api.github.com/repos/' + REPO + '/' + path
    with urllib.request.urlopen(urllib.request.Request(url, headers={'Accept': 'application/vnd.github+json', 'User-Agent': 'Atlas-bounded-validator'}), timeout=30) as response:
        return json.load(response)


def content(root, sha, path):
    return subprocess.check_output(['git', 'show', sha + ':' + path], cwd=root)


def rows(data):
    return list(csv.DictReader(io.StringIO(data.decode('utf-8-sig'))))


def main():
    request_path = Path('docs/atlas/validation/requests/current.json')
    req = json.loads(request_path.read_text())
    REPORT['request'] = req
    REPORT['request_sha256'] = hashlib.sha256(request_path.read_bytes()).hexdigest()
    require(set(req) == {'version', 'team', 'run_id', 'harness_sha', 'commit', 'mode', 'approval_commit', 'approval_path'}, 'request fields')
    require(req['version'] == 1 and req['team'] in 'ABCD' and len(req['team']) == 1, 'supported team A-D required')
    require(req['mode'] in {'published', 'prepublication'}, 'mode')
    for field in ('harness_sha', 'commit', 'approval_commit'):
        require(re.fullmatch('[0-9a-f]{40}', req[field]) is not None, 'immutable SHA required: ' + field)
    require(re.fullmatch('[A-Za-z0-9_.:-]{1,100}', req['run_id']) is not None, 'run id')
    require(req['approval_path'].startswith('docs/atlas/') and '..' not in req['approval_path'].split('/'), 'approval path')
    require(os.environ.get('GITHUB_REF', 'refs/heads/' + BRANCH) == 'refs/heads/' + BRANCH, 'isolated branch only')
    for args in (['python3', '--version'], ['node', '--version'], ['git', '--version'], ['uname', '-a']):
        run(args)
    with tempfile.TemporaryDirectory(prefix='atlas-validation-') as tmp:
        root = Path(tmp)
        run(['git', 'clone', '--no-checkout', 'https://github.com/' + REPO + '.git', str(root / 'repo')])
        root /= 'repo'
        for sha in (req['harness_sha'], req['commit'], req['approval_commit']):
            run(['git', 'fetch', '--no-tags', 'origin', sha], root)
            require(run(['git', 'rev-parse', sha + '^{commit}'], root) == sha, 'resolved SHA mismatch')
        harness = root / 'harness-input'
        team = root / 'team-input'
        run(['git', 'worktree', 'add', '--detach', str(harness), req['harness_sha']], root)
        run(['git', 'worktree', 'add', '--detach', str(team), req['commit']], root)
        hdir = harness / 'docs/atlas/harness'
        state = json.loads((hdir / 'state.json').read_text())
        ledger = json.loads((hdir / 'checkout.json').read_text())
        ticket = ledger['runs'][req['run_id']]
        require(ticket['team'] == req['team'] and ticket['status'] == 'running', 'ticket must be running')
        require([k for k, r in ledger['runs'].items() if r['team'] == req['team'] and r['status'] in {'running', 'reserved'}] == [req['run_id']], 'conflicting reservation')
        packet = ticket['packet']
        parent = packet['expected_sha']
        require(run(['git', 'show', '-s', '--format=%P', req['commit']], root) == parent, 'exact single parent')
        config = state['teams'][req['team']]
        manifest_path = config['root'] + 'runs/' + ticket['key'].replace(':', '--', 1) + '.json'
        result = json.loads((team / manifest_path).read_text())
        diffs = run(['git', 'diff', '--no-renames', '--name-status', parent, req['commit']], root).splitlines()
        actual = []
        for line in diffs:
            status, path = line.split('\t')
            require(status in {'A', 'M'} and path in packet['paths'], 'unexpected path/deletion/rename')
            require(run(['git', 'ls-tree', req['commit'], '--', path], root).startswith('100644 blob '), 'unexpected mode')
            actual.append(path)
        require(set(actual) == set(result['paths']), 'result paths differ from actual diff')
        receipt = {'version': 1, 'key': ticket['key'], 'commit': req['commit'], 'parent': parent,
                   'paths': actual, 'blob_shas': {p: run(['git', 'rev-parse', req['commit'] + ':' + p], root) for p in actual},
                   'pr_state': 'open/draft/unmerged'}
        approval = content(root, req['approval_commit'], req['approval_path'])
        (OUT / 'approval-reference.txt').write_bytes(approval)
        REPORT['approval_sha256'] = hashlib.sha256(approval).hexdigest()
        # Approval bytes are provided for a separate human/ChatGPT Verifier to audit.
        # Software never interprets a referenced document as role approval.
        for name, value in (('packet', packet), ('result', result), ('receipt', receipt)):
            (OUT / (name + '.json')).write_text(json.dumps(value, indent=2) + '\n')
        run(['python3', 'harness.py', req['team'], '--live-sha', parent,
             '--packet', str(OUT / 'packet.json'), '--result', str(OUT / 'result.json'), '--receipt', str(OUT / 'receipt.json')], hdir)
        run(['python3', '-m', 'unittest', '-v'], hdir)
        native = {
            'A': [(['python3', 'validate.py'], 'docs/atlas/handoffs/team-a'), (['python3', '-m', 'unittest', '-v'], 'docs/atlas/handoffs/team-a')],
            'B': [(['node', 'docs/atlas/handoffs/team-b/validate.mjs'], '.')],
            'C': [(['node', 'docs/atlas/handoffs/team-c/validate.mjs'], '.'), (['python3', 'docs/atlas/handoffs/team-c/validate_negative_cases.py'], '.')],
            'D': [(['node', 'docs/atlas/handoffs/team-d/validate.mjs'], '.')],
        }
        for args, directory in native[req['team']]:
            run(args, team / directory)
        if req['team'] == 'A':
            base = config['root']
            before = rows(content(root, parent, base + 'PROVENANCE.csv'))
            after = rows(content(root, req['commit'], base + 'PROVENANCE.csv'))
            require(after[:len(before)] == before, 'prior provenance modified or reordered')
            code = packet['case']
            require(all(r['area_m49'] == code for r in after[len(before):]), 'foreign provenance appended')
            for name in ('data/legal_verification_ledger.csv', 'data/research_queue.csv', 'RECONCILED_INVENTORY_20261107.csv', 'PRIORITIZED_BACKLOG_20261107.csv'):
                old = rows(content(root, parent, base + name))
                new = rows(content(root, req['commit'], base + name))
                require(len(old) == len(new), 'row count changed: ' + name)
                require([r for r in old if r['m49_code'] != code] == [r for r in new if r['m49_code'] != code], 'foreign rows changed: ' + name)
            if ticket['key'] == 'A-01:032':
                frozen = json.loads(approval)
                require(frozen['run_id'] == req['run_id'] and frozen['launch_id'] == ticket['launch_id'] and frozen['expected_team_a_parent'] == parent, 'frozen ticket mismatch')
                require(frozen['independent_approval']['status'] == 'FOUND', 'frozen approval missing')
                require(set(actual) == {x['path'] for x in frozen['newly_computed_recovered_file_fingerprints']}, 'frozen path mismatch')
                for item in frozen['newly_computed_recovered_file_fingerprints']:
                    data = content(root, req['commit'], item['path'])
                    require(len(data) == item['bytes'] and hashlib.sha256(data).hexdigest() == item['sha256'] and receipt['blob_shas'][item['path']] == item['git_blob_sha1'], 'frozen fingerprint mismatch')
                approved = frozen['independent_approval']['approved_fingerprints']
                require(set(actual) == {x['destination'] for x in approved}, 'approval path mismatch')
                for item in approved:
                    data = content(root, req['commit'], item['destination'])
                    require(len(data) == item['bytes'] and hashlib.sha256(data).hexdigest() == item['sha256'] and receipt['blob_shas'][item['destination']] == item['git_blob_sha'], 'approved fingerprint mismatch')
                require(len(before) == 763 and len(after) == 766, 'Argentina provenance count')
            REPORT['preservation'] = 'PASS prior provenance and foreign rows; Argentina frozen fingerprints when applicable. Independent semantic/status audit remains required.'
        require(run(['git', 'status', '--porcelain', '--untracked-files=all'], team) == '', 'native tests modified checkout')
        live = api('branches/' + config['branch'].replace('/', '%2F'))
        live_ledger = api('contents/docs/atlas/harness/checkout.json?ref=architecture%2Fatlas-harness-v1')
        import base64
        live_ticket = json.loads(base64.b64decode(live_ledger['content']))['runs'][req['run_id']]
        pr = api('pulls/' + str(config['pr']))
        REPORT['live_observations'] = {'team_head': live['commit']['sha'], 'ticket': live_ticket, 'pr': {'number': pr['number'], 'state': pr['state'], 'draft': pr['draft'], 'merged': pr['merged'], 'head': pr['head']['sha']}}
        require(live_ticket == ticket, 'ticket changed since immutable request input')
        expected = req['commit'] if req['mode'] == 'published' else parent
        require(live['commit']['sha'] == expected and pr['head']['sha'] == expected, 'stale team/PR head')
        require(pr['state'] == 'open' and pr['draft'] and not pr['merged'], 'PR state')
        REPORT['outcome'] = 'PASS'


try:
    main()
except Exception as error:
    REPORT['error'] = str(error)
finally:
    (OUT / 'report.json').write_text(json.dumps(REPORT, indent=2) + '\n')
    print('ATLAS_REPORT_JSON\n' + json.dumps(REPORT, indent=2), flush=True)
sys.exit(0 if REPORT['outcome'] == 'PASS' else 1)
