"""Build one frozen, deduplicated working index from research and read-only intake refs.
Usage: python build_work_index.py OUTPUT_JSON [RESEARCH_REF] [RAW_REF]
No checkout, network, repository mutation or source promotion occurs.
"""
import csv,io,json,pathlib,subprocess,sys
out=pathlib.Path(sys.argv[1]);ref=sys.argv[2] if len(sys.argv)>2 else '537368fa40ccf5b692427d0c1e3cc3068c39708d';raw=sys.argv[3] if len(sys.argv)>3 else 'origin/research/atlas-raw-intake-team-b';prefix='docs/atlas/handoffs/team-b/'
def git(*args):return subprocess.check_output(['git',*args],text=True)
paths=git('ls-tree','-r','--name-only',ref,prefix).splitlines();data={p.removeprefix(prefix+'data/') if '/data/' in p else 'PROVENANCE.csv':list(csv.DictReader(io.StringIO(git('show',ref+':'+p)))) for p in paths if p.endswith('.csv') and ('/data/' in p or p.endswith('/PROVENANCE.csv'))}
paths=git('ls-tree','-r','--name-only',raw,'docs/atlas/raw-intake').splitlines();intake={p:json.loads(git('show',raw+':'+p)) for p in paths if '/workers/B/' in p or 'B001_TEAM_B_' in p}
leads={s['url']:s for b in intake.values() for s in b.get('sources',[]) if s.get('url')};index={'research_ref':git('rev-parse',ref).strip(),'raw_ref':git('rev-parse',raw).strip(),'data':data,'intake':intake,'unique_lead_urls':sorted(leads),'original_issuers':sorted({r['source_issuer_or_publisher'] for r in data['publication_context.csv']}),'source_urls':sorted({r['relevant_publication_url'] for r in data['condition_organizations.csv']}),'organizations_by_id':{r['org_id']:r for r in data['specialist_organizations.csv']},'geographic_records_by_code':{r['m49_code']:r for r in data['m49_verified_overview.csv']}}
out.write_text(json.dumps(index,ensure_ascii=True));print(json.dumps({'canonical_csvs':len(data),'unique_intake_urls':len(leads),'organizations':len(index['organizations_by_id']),'output':str(out)}))
