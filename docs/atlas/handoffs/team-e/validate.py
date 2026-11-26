#!/usr/bin/env python3
"""Validate committed Atlas exports and run adversarial fixture checks."""
from collections import Counter, defaultdict
from datetime import date
import csv
import json
import re

from build import CLAIM_LEDGER, CONDITIONS, iso_date, read, records, stable
from intake import INPUTS, ROOT, geography

PRIVATE_FIELDS = {'name_of_patient','patient_name','patient_id','medical_record','medical_record_number',
                  'sample_genotype','raw_genotype','date_of_birth','biomarker_values','address','health_records'}

class Invalid(ValueError):
    pass

def require(condition, message):
    if not condition:
        raise Invalid(message)

def load_csv(path):
    with path.open(encoding='utf-8',newline='') as handle:
        table=csv.DictReader(handle)
        records=list(table)
        require(table.fieldnames and len(table.fieldnames)==len(set(table.fieldnames)),str(path))
        require(not (PRIVATE_FIELDS & set(table.fieldnames)), 'private input field')
        require(all(None not in x and None not in x.values() for x in records),'invalid CSV width '+str(path))
    return records

def load():
    return {p.stem:load_csv(p) for p in sorted((ROOT/'data').glob('*.csv'))}|{'sources':load_csv(ROOT/'PROVENANCE.csv')}

def index(data,*names):
    keys={tuple(x[field] for field in names):x for x in data}
    require(len(keys)==len(data),'duplicate key '+str(names))
    return keys

def valid_source(url):
    from urllib.parse import urlsplit
    parts=urlsplit(url)
    return (parts.scheme in {'https','http'} and bool(parts.hostname) and parts.hostname not in {'localhost','127.0.0.1'}
            and not parts.username and not parts.password and not re.search(r'(?i)[?&](token|password|api_key|sessionid)=',url))

def check_origin(value,manifest):
    if value.startswith('E:'):
        return
    team,path,*parts=value.split(':')
    item=manifest.get((team,path))
    require(item is not None,'missing pinned origin '+value)
    if parts and parts[0].isdigit():
        require(1<=int(parts[0])<=item['records'],'pinned row outside table')

def context_scope(row,raw):
    if row['origin'].startswith('B:'):
        for integrated,pinned in (('source_country','source_country_m49'),('source_country_basis','source_country_basis'),
                                  ('study_population','study_population'),('healthcare_jurisdiction','guideline_healthcare_jurisdiction'),
                                  ('source_issuer_or_publisher','source_issuer_or_publisher'),('original_role','relationship_type')):
            require(row[integrated]==raw[pinned],'source role or country inferred beyond pinned context')
    else:
        require(row['source_country_basis']=='publication_country_unknown' and not row['source_country'],
                'publication country inherited from study or journal')

def edge_check(row,known,sources,areas,types):
    require(row['subject_id'] in known and row['object_id'] in known,'orphan relationship')
    require(row['source_id'] in sources and row['evidence_state'] and row['integration_review'],'missing edge source or verification')
    require(row['relationship_type'] in types,'unsupported relationship type')
    require(not row['geographic_scope_m49'] or row['geographic_scope_m49'] in areas,'invalid relationship geography')
    first,last=row['normalized_from'],row['normalized_to']
    for v in (first,last):
        require(not v or iso_date(v)==v,'invalid normalized date')
    if first and last:
        earliest=first+('-01-01' if len(first)==4 else '-01' if len(first)==7 else '')
        latest=last+('-12-31' if len(last)==4 else '-31' if len(last)==7 else '')
        require(earliest<=latest,'reversed effective dates')
    if row['date_state']=='qualified_conflict':
        require(not first and not last,'invalid interval presented as operative')

def identity_join(row, supported):
    if row['disposition']=='confirmed_match':
        require((row['team'],row['original_id'],row['canonical_id']) in supported,
                'unsupported cross-team merge')

def who_assignment(regions):
    require(len(regions)<=1,'competing current WHO membership')

def clinical_check(row):
    require(row['appraisal_status'] in {'CANDIDATE_UNVERIFIED','SOURCE_VERIFIED','QUALIFIED','CONTRADICTED','WITHHELD'},
            'unauthorized clinical approval')
    require(row['mapping_status']=='PROPOSED_NOT_APPROVED' and row['clinical_release']=='WITHHELD_PENDING_APPRAISAL',
            'unauthorized mapping or display')
    require(row['ancestry_self_identification']=='not_established','unsupported ancestry inference')

def selection(query,ancestries):
    """Synthetic contract for research navigation. No persistence, ranking or health data."""
    require(set(query)=={'ancestry_keys','condition_keys'},'unknown or private field')
    a,c=query['ancestry_keys'],query['condition_keys']
    require(isinstance(a,list) and isinstance(c,list),'invalid selections')
    require(all(isinstance(k,str) and k in ancestries for k in a),'unknown ancestry key')
    require(all(isinstance(k,str) and k in CONDITIONS for k in c),'unknown condition')
    return [(key,anc,'withheld') for key in dict.fromkeys(c) for anc in dict.fromkeys(a) if anc!='other']

def verify(t):
    manifest=index(json.loads((ROOT/'data/input_inventory.json').read_text()),'team','path')
    manifest={(team,path.removeprefix(INPUTS[team]['prefix'])):item for (team,path),item in manifest.items()}
    canonical={r['m49']:r for r in geography()}
    areas={k[0]:v for k,v in index(t['areas'],'m49').items()}
    require(set(areas)==set(canonical) and len(areas)==248,'canonical geographic loss')
    require({r['candidate_code'] for r in t['noncanonical_geography']}=={'158'} and '158' not in areas,'noncanonical area leaked')
    for k,r in areas.items():
        match=canonical[k]
        require((r['iso_alpha2'],r['iso_alpha3'],r['name'],r['un_region'],r['un_subregion'])==
                tuple(match[f] for f in ('iso_alpha2','iso_alpha3','un_name','un_region','un_subregion')),'M49 field drift')
        require(bool(r['authority_disposition']),'missing authority resolution')
    conditions={k[0] for k in index(t['conditions'],'condition_key')}
    ancestry={k[0] for k in index(t['ancestry_keys'],'ancestry_key')}
    require(conditions==set(CONDITIONS) and 'other' in ancestry and len(ancestry)==74,'selector inventory')
    require({(r['m49'],r['condition_key']) for r in t['condition_availability']}==
            {(a,c) for a in areas for c in conditions},'coverage key-set')
    require(len(index(t['condition_availability'],'m49','condition_key'))==248*7,'coverage count')
    require(len(index(t['unmapped_condition_ancestry'],'condition_key','ancestry_key'))==len(conditions)*len(ancestry)
            and all(r['approved_mapping']=='none' for r in t['unmapped_condition_ancestry']),'approval grid')
    institutions={k[0]:v for k,v in index(t['institutions'],'entity_id').items()}
    publications={k[0]:v for k,v in index(t['publications'],'publication_id').items()}
    sources={k[0]:v for k,v in index(t['sources'],'source_id').items()}
    for row in sources.values():
        require(valid_source(row['url']) and row['source_id']==stable('src',row['url']),'invalid URL/source ID')
        check_origin(row['first_origin'],manifest)
        for loc in filter(None,row['provenance_origins'].split('|')):
            check_origin(loc,manifest)
    known=set(institutions)|set(publications)|{'m49:'+k for k in areas}
    for name,table in t.items():
        for row in table:
            require(not (PRIVATE_FIELDS & set(row)), 'private field in '+name)
            for key,v in row.items():
                if key.endswith('origin') and v:
                    check_origin(v,manifest)
                if (key=='source_id' or key.endswith('_source_id')) and v:
                    require(v in sources,'orphan source in '+name)
                if key=='condition_key' and v:
                    require(v in conditions,'bad condition in '+name)
                if key=='clinical_release':
                    require(v in {'withheld','research_lead_only','WITHHELD_PENDING_APPRAISAL'},'unauthorized clinical release')
    dedup=index(t['identifier_crosswalk'],'team','original_id')
    for team,file,key in [('A','government_health_bodies','record_id'),('B','specialist_organizations','org_id'),
                         ('C','journals','journal_id'),('C','indexes','index_id'),('D','international_networks','network_id')]:
        require(all((team,r[key]) in dedup for _,r in read(team,file)),'identity loss '+team+file)
    supported=set()
    for _,raw in read('D','provisional_team_b_identity_crosswalk_2026-11-07'):
        if raw['team_b_org_id']:
            supported.add(('D',raw['provisional_graph_id'],'B:'+raw['team_b_org_id']))
    for _,raw in read('D','emrn_packet_bulk_review_2026-11-18'):
        if raw['exact_team_a_id']:
            supported.add(('D',raw['emrn_nca_candidate_id'],'A:'+raw['exact_team_a_id']))
    for _,r in dedup.items():
        require(r['canonical_id'] in known or r['team']=='claims' and r['original_id']==r['canonical_id'],'orphan crosswalk')
        identity_join(r,supported)
    for row in institutions.values():
        require(row['source_id'] in sources and row['evidence_state'] and row['integration_review'],'entity verification')
        require(not row['domicile_m49'] or row['domicile_m49'] in areas,'invalid domicile')
    doi=[r['doi'].lower() for r in publications.values() if r['doi']]
    require(len(set(doi))==len(doi),'duplicate DOI')
    for row in publications.values():
        require(row['source_id'] in sources and row['evidence_state'] and (not row['venue_id'] or row['venue_id'] in institutions),
                'invalid publication record')
    a_types={r['relationship_type'] for _,r in read('A','authority_relationships')}
    d_types={r['relationship_type'] for _,r in read('D','network_memberships')}
    b_types={'resource_role:'+r['relationship_type'] for _,r in read('B','condition_organizations')}|{'cross_border:'+r['relationship_type'] for _,r in read('B','cross_border_services')}
    c_types={'discovery_role:'+r['claim_of_indexing'] for _,r in read('C','journal_index_relationships')}
    e_types={'claim_source_role:'+r['role'] for r in load_csv(ROOT/'review/claim_institutions.csv')}
    types=a_types|d_types|b_types|c_types|e_types|{'government_body_scope_recorded','census_authority_for','scoped_authority_for',
                                                  'journal_publisher_reported','published_in','EMA_directory_lists_nca','organization_domicile_recorded'}
    edges={k[0]:v for k,v in index(t['relationships'],'edge_id').items()}
    disputes={'104','275','732','887'}
    lineage=defaultdict(list)
    active_regions=defaultdict(set)
    touched=set()
    for edge in edges.values():
        edge_check(edge,known,sources,areas,types)
        sub,obj,kind=edge['subject_id'],edge['object_id'],edge['relationship_type']
        touched.update((sub,obj))
        if kind=='census_authority_for':
            require(edge['geographic_scope_m49'] not in disputes,'exclusive authority on disputed area')
            require(sub.startswith('A:'),'unsupported delegation')
        if kind=='WHO_region' and not edge['normalized_to']:
            active_regions[sub].add(obj)
        if kind in a_types:
            lineage[sub].append(obj)
    for regions in active_regions.values():
        who_assignment(regions)
    checked=set()
    def traverse(node,path):
        require(node not in path,'hierarchy cycle')
        if node not in checked:
            for target in lineage[node]:
                traverse(target,path|{node})
            checked.add(node)
    for node in list(lineage):
        traverse(node,set())
    require(set(institutions)<=touched|{r['entity_id'] for r in t['network_condition_sources']}|{r['canonical_id'] for r in t['identifier_crosswalk'] if r['team'] in {'C','D'} and r['disposition']=='original_identity'},'orphan institution')
    require(set(publications)<=touched|{r['publication_id'] for r in t['candidate_claims']},'orphan publication')
    require(all(r['edge_id'] in edges for r in t['edge_conflicts']),'orphan conflict')
    for prefix, n in [('A:data/authority_relationships.csv:',len(read('A','authority_relationships'))),
                      ('B:data/condition_organizations.csv:',len(read('B','condition_organizations'))),
                      ('D:data/network_memberships.csv:',len(read('D','network_memberships'))),
                      ('C:data/journal_index_relationships.csv:',len(read('C','journal_index_relationships')))]:
        require(sum(r['origin'].startswith(prefix) for r in edges.values())==n,'relationship loss '+prefix)
    contexts=index(t['publication_contexts'],'context_id')
    raw=dict(read('B','publication_context'))
    require({r['origin'] for r in contexts.values() if r['origin'].startswith('B:')}==raw.keys(),'Team B context loss')
    require(len(contexts)==len(raw)+len(read('C','article_candidates')),'Team C article context loss')
    explicit=defaultdict(set)
    for row in contexts.values():
        require(row['publication_id'] in publications and row['organization_id'] in institutions,'unlinked context')
        require(not row['study_m49'] or row['study_m49'] in areas,'invalid study location')
        context_scope(row,raw.get(row['origin']))
        if row['source_country_basis']=='journal_publication_country' and row['source_country'] in areas:
            explicit[row['publication_id']].add(row['source_country'])
    for ident,pub in publications.items():
        countries=explicit[ident]
        require(pub['publication_m49']==(next(iter(countries)) if len(countries)==1 else ''),
                'publication country inferred outside explicit journal attribution')
    claims=index(t['candidate_claims'],'claim_id')
    original={r['claim_id']:r for _,r in records('claims',CLAIM_LEDGER)}
    require({k[0] for k in claims}==set(original),'claim loss')
    require(len(index(t['candidate_claims'],'issue'))==len(original),'duplicated review issue')
    for (cid,),row in claims.items():
        clinical_check(row)
        require(row['condition_key']==original[cid]['condition_key'] and row['issue']==original[cid]['issue_url'],
                'changed issue mapping')
        require(row['publication_id'] in publications and bool(row['identity_or_reference_state']),'claim without disposition')
        require(row['original_source_id'] in sources and sources[row['original_source_id']]['url']==original[cid]['source_url'],
                'changed original clinical reference')
    proposals=index(t['claim_ancestry_proposals'],'claim_id','ancestry_key')
    require(proposals.keys()=={(cid,k) for cid,r in original.items() for k in r['proposed_ancestry_keys'].split('|')},
            'unsupported ancestry proposal or silent loss')
    require(all(k in ancestry and r['mapping_status']=='PROPOSED_NOT_APPROVED' for (_,k),r in proposals.items()),
            'unsupported ancestry mapping')
    require(len(index(t['discovery_leads'],'lead_id'))==len(read('C','discovery_leads'))
            and all(r['state']=='CANDIDATE_UNVERIFIED' for r in t['discovery_leads']),'raw lead promoted or dropped')
    require(len(index(t['exceptions'],'exception_id'))==len(t['exceptions']),'exception key conflict')
    require(len(index(t['provenance_review'],'assertion_id'))==len(t['provenance_review']),'source review key conflict')
    require({r['m49'] for r in t['map_coverage']}==set(areas),'map loses area')
    dictionary=index(t['field_dictionary'],'table','field')
    for table,data in t.items():
        if table=='field_dictionary':
            continue
        name='PROVENANCE' if table=='sources' else table
        require(all((name,field) in dictionary for field in data[0]),'undocumented field in '+table)
    return ancestry,known,sources,areas,types

def fixtures(t,ancestry,known,sources,areas,types):
    out=[]
    def reject(name, action):
        try:
            action()
        except Invalid:
            out.append((name,'REJECTED'))
        else:
            raise Invalid('unexpected fixture acceptance: '+name)
    def accepts(name, condition):
        require(condition,'unexpected fixture rejection: '+name)
        out.append((name,'EXPECTED_SAFE_RESULT'))
    def choose(a,c):
        return selection({'ancestry_keys':a,'condition_keys':c},ancestry)
    accepts('mixed ancestry preserves separate entries',choose(['eu_finn','pi_maori'],['diabetes'])==
            [('diabetes','eu_finn','withheld'),('diabetes','pi_maori','withheld')])
    accepts('other / unlisted displayed without mapping',choose(['other'],['diabetes'])==[])
    accepts('multiple conditions remain separate',len(choose(['eu_finn'],['diabetes','lactose']))==2)
    accepts('missing condition yields no mapping',choose(['eu_finn'],[])==[])
    reject('unknown ancestry',lambda:choose(['fictional'],['diabetes']))
    reject('unsupported condition',lambda:choose(['eu_finn'],['fictional']))
    reject('invalid non-list selection',lambda:choose('eu_finn',['diabetes']))
    reject('private medical input field',lambda:selection({'ancestry_keys':[],'condition_keys':[],'patient_id':'synthetic'},ancestry))
    c=t['candidate_claims'][0]
    reject('unauthorized clinical approval',lambda:clinical_check(c|{'appraisal_status':'APPROVED_EDUCATIONAL'}))
    reject('inferred self-identification',lambda:clinical_check(c|{'ancestry_self_identification':'inferred from country'}))
    edge=t['relationships'][0]
    check=lambda x:edge_check(edge|x,known,sources,areas,types)
    reject('missing edge source',lambda:check({'source_id':'missing'}))
    reject('missing edge target',lambda:check({'object_id':'missing'}))
    reject('unsupported relationship',lambda:check({'relationship_type':'country_determines_risk'}))
    reject('invalid statutory date',lambda:check({'normalized_from':'2026-02-30'}))
    reject('reversed edge dates',lambda:check({'normalized_from':'2026-11','normalized_to':'2025-07'}))
    reject('noncanonical ISO candidate substituted for M49',lambda:check({'geographic_scope_m49':'158'}))
    reject('organization domicile substituted for source country',lambda:context_scope(
        t['publication_contexts'][0]|{'source_country':'008'},dict(read('B','publication_context'))[t['publication_contexts'][0]['origin']]))
    accepts('disputed territory has no single authority',
            areas['732']['authority_disposition']=='UNRESOLVED_CONFLICT_EXTERNAL_REVIEW')
    accepts('delegated area is retained with scope',
            areas['260']['authority_disposition']=='SOURCE_SUPPORTED_DELEGATED_AUTHORITY')
    accepts('duplicate translations stay distinct without identity evidence',
            any(r['disposition']=='provisional_match' and r['left_id'] in known and r['right_id'] in known for r in t['authority_duplicates']))
    reject('incorrect translated-name merge',lambda:identity_join(
        {'team':'D','original_id':'provisional:translated','canonical_id':'B:invented','disposition':'confirmed_match'},set()))
    reject('competing current WHO memberships',lambda:who_assignment({'D:WHO_SEARO','D:WHO_WPRO'}))
    accepts('unidentified or incompletely appraised publication retained as evidence gap',
            any(r['identity_or_reference_state']=='qualified_reference_or_version' and r['clinical_release']=='WITHHELD_PENDING_APPRAISAL' for r in t['candidate_claims']))
    accepts('WHO Indonesia date conflict retained with two events',
            any(r['conflict_kind']=='formal_vs_operational_event_dates' for r in t['edge_conflicts']))
    accepts('PAHO institutional overlap retains typed roles',
            any(r['subject_id']=='D:PAHO' and r['object_id']=='D:WHO_AMRO' and r['relationship_type']=='serves_as' for r in t['relationships']))
    return out

if __name__=='__main__':
    data=load()
    checked=verify(data)
    results=fixtures(data,*checked)
    print('PASS: structural and provenance gates, '+str(len(results))+' adversarial fixtures')
    for label,result in results:
        print(result, label)
