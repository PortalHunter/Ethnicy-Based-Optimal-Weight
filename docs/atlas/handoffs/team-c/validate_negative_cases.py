"""Offline structural mutation checks; does not test medical validity."""
import csv,shutil,subprocess,tempfile,json
from pathlib import Path
root=Path(__file__).resolve().parent
def append_dup(rows):rows.append(dict(rows[0]))
def change(field,value):return lambda rows:rows[0].__setitem__(field,value)
cases=[
 ('duplicate_journal','journals',append_dup),
 ('unknown_publisher_geography','journals',change('publisher_area_m49','999')),
 ('duplicate_article','article_candidates',append_dup),
 ('article_missing_journal','article_candidates',change('journal_id','NO_SUCH_JOURNAL')),
 ('article_invalid_condition','article_candidates',change('condition_key','invented_diagnosis')),
 ('premature_article_approval','article_candidates',change('review_state','APPROVED_EDUCATIONAL')),
 ('unknown_study_geography','article_candidates',change('study_area_m49','999')),
 ('edge_missing_index','journal_index_relationships',change('index_id','NO_SUCH_INDEX')),
 ('duplicate_condition_pair','coverage_by_area_condition',lambda rows:rows.__setitem__(1,dict(rows[0]))),
 ('false_systematic_completion','coverage_by_area_condition',change('condition_search_status','systematic_search_completed')),
 ('missing_area','areas_m49',lambda rows:rows.pop()),
 ('missing_search_reference','area_discovery_pass',change('search_ids','NO_SUCH_SEARCH')),
 ('lead_premature_approval','discovery_leads',change('verification_state','APPROVED_EDUCATIONAL')),
 ('policy_missing_journal','journal_policy_assessment',change('journal_id','NO_SUCH_JOURNAL')),
 ('detail_missing_article','article_discovery_details',change('provisional_id','NO_SUCH_ARTICLE')),
 ('implicit_blank_identifier','journals',change('eissn','')),
 ('coverage_label_mismatch','coverage_by_area_condition',change('area_name','incorrect_location')),
]
def run(folder):return subprocess.run(['node',str(folder/'validate.mjs')],capture_output=True,text=True)
assert run(root).returncode==0,'positive dataset must pass first'
out=[]
for name,file,mutate in cases:
 with tempfile.TemporaryDirectory() as temp:
  folder=Path(temp)/'team-c';shutil.copytree(root,folder)
  path=folder/'data'/(file+'.csv');rows=list(csv.DictReader(path.open()));fields=list(rows[0]);mutate(rows)
  with path.open('w') as f:
   w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows(rows)
  result=run(folder)
  if result.returncode==0:raise AssertionError('accepted invalid fixture: '+name)
  out.append({'case':name,'result':'REJECTED_AS_EXPECTED'})
print(json.dumps({'positive':'PASS','negative_cases':out,'count':len(out)}))
