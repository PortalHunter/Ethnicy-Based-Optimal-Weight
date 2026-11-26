#!/usr/bin/env python3
"""Build the read-only Atlas research exports from pinned Git objects."""
from collections import Counter, defaultdict
from datetime import date
from functools import cache
import hashlib
from itertools import combinations
import json
import re
import subprocess
import unicodedata
from urllib.parse import unquote, urlsplit

from intake import INPUTS, INVENTORY, ROOT, geography, output, payload, rows

CONDITIONS = ('diabetes', 'hypertension', 'high_chol', 'gout', 'lactose', 'celiac', 'hemochromatosis')
UNKNOWN = 'unknown'
ISSUES = INPUTS['repository'] + '/issues/'
CLAIM_LEDGER = 'docs/research/REGIONAL_CONDITION_CLAIM_LEDGER_2026-11-04.csv'

def stable(prefix, *parts):
    return prefix + ':' + hashlib.sha256(json.dumps(parts, ensure_ascii=False).encode()).hexdigest()[:24]

def normalized(value):
    t = unicodedata.normalize('NFKC', value).casefold()
    return ' '.join(re.findall(r'[^\W_]+', re.sub(r'\s*\((?:translated_by_reviewer|reviewer translation)\)', '', t)))

def domain(url):
    host = urlsplit(url).hostname or ''
    return host.lower().removeprefix('www.')

def public_url(url):
    if domain(url)=='moh.gov.rw' and re.search(r'[?&]token=',url,re.I):
        return 'https://www.moh.gov.rw/'
    return url

def filename(name):
    return 'data/' + name + '.csv'

@cache
def records(team, path):
    return tuple((f'{team}:{path}:{i}', row) for i, row in enumerate(rows(team, path), 1))

def read(team, name):
    return records(team, filename(name))

def keyed(team, name, *keys):
    data = read(team, name)
    result = {tuple(row[k] for k in keys): (origin, row) for origin, row in data}
    assert len(result) == len(data), (team, name)
    return result

def json_input(team, path, member):
    values = json.loads(payload(team, path))[member]
    INVENTORY[team, path].update(records=len(values), fields=sorted({k for record in values for k in record}))
    return values

def iso_date(raw):
    if not raw or raw == UNKNOWN:
        return ''
    try:
        if re.fullmatch(r'\d{4}', raw) and int(raw) > 0:
            return raw
        if re.fullmatch(r'\d{4}-\d{2}', raw):
            date.fromisoformat(raw + '-01')
            return raw
        if re.fullmatch(r'\d{4}-\d{2}-\d{2}', raw):
            date.fromisoformat(raw)
            return raw
    except ValueError:
        pass
    return ''

class Atlas:
    def __init__(self):
        self.tables = defaultdict(list)
        self.entities = {}
        self.publications = {}
        self.sources = {}
        self.source_origin = defaultdict(list)
        self.source_keys = {}
        self.cross = {}
        self.area = {}
        self.exceptions = {}
        self.notes = {}
        self.claims = {}
        self.areas_by_entity = {}
        self.doi_by_url = {}
        self.team_b = {}

    def add(self, table, **record):
        self.tables[table].append(record)
        return record

    def raw_sources(self):
        keys = dict(A='source_id', B='record_id', C='provenance_id', D='source_id')
        for team, key in keys.items():
            for origin, row in records(team, 'PROVENANCE.csv'):
                tagged = row['source_url'].strip()
                self.source_origin[tagged].append(origin)
                assert (team, row[key]) not in self.source_keys, (team, row[key])
                self.source_keys[team, row[key]] = tagged

    def source(self, url, origin):
        original = url.strip()
        url = public_url(original)
        if url != original:
            self.exception(origin,'source_access',stable('src',url),
                           'Use the pinned source locator to identify the original cited report. The expiring query token is omitted from the integrated export.')
        assert url.startswith(('https://', 'http://')) and domain(url), (url, origin)
        key = stable('src', url)
        if key not in self.sources:
            self.sources[key] = dict(source_id=key, url=url,
                                     transport='https' if url.startswith('https://') else 'http_inherited',
                                     first_origin=origin,
                                     provenance_origins='|'.join(self.source_origin[original]),
                                     verification='structurally_checked_link')
        return key

    def exception(self, origin, kind, key, question, issue='', source='', state='external_review'):
        ident = stable('ex', kind, key, question)
        self.exceptions.setdefault(ident, dict(exception_id=ident, kind=kind, record_id=key,
                                               disposition=state, question=question, issue=issue or ISSUES+'64',
                                               source_id=source, origin=origin))

    def entity(self, ident, origin, category, kind, local, english, url, reference, review,
               domicile='', jurisdiction='', language='', date_seen='', status='', verification='inherited_qualified'):
        assert ident not in self.entities, ident
        self.entities[ident] = dict(entity_id=ident, category=category, original_type=kind,
                                    local_name=local or UNKNOWN, english_name=english or UNKNOWN,
                                    domicile_m49=domicile, jurisdiction=jurisdiction or UNKNOWN,
                                    official_url=public_url(url), source_id=self.source(reference, origin), language=language or UNKNOWN,
                                    checked_on=date_seen, lifecycle=status or UNKNOWN, evidence_state=review,
                                    integration_review=verification, origin=origin)

    def alias(self, team, orig, canonical, origin, state):
        key = (team,orig)
        old = self.cross.setdefault(key, canonical)
        assert old == canonical, key
        self.add('identifier_crosswalk', team=team, original_id=orig, canonical_id=canonical,
                 disposition=state, origin=origin)

    def edge(self, origin, subject, obj, kind, url, state, scope='', start='', end='', observed='',
             condition='', qualifier='', review='inherited_qualified'):
        source = self.source(url, origin)
        ident = stable('edge', origin, subject, obj, kind, condition, qualifier, source)
        first, last = iso_date(start), iso_date(end)
        bad = any(raw not in ('', UNKNOWN) and not parsed for raw, parsed in ((start, first), (end, last)))
        if first and last and len(first)==len(last) and first>last:
            bad = True
        if bad:
            self.edge_conflict(origin, ident, 'date_format_or_order', first+'|'+last,
                               'Inspect original effective dates; raw values retained.', source)
        self.add('relationships', edge_id=ident, subject_id=subject, object_id=obj, relationship_type=kind,
                 source_id=source, evidence_state=state, geographic_scope_m49=scope, condition_key=condition,
                 normalized_from=first if not bad else '', normalized_to=last if not bad else '',
                 original_from=start, original_to=end, observed_on=observed, date_state='qualified_conflict' if bad else 'usable_or_unknown',
                 institutional_context=qualifier, integration_review=review, origin=origin)
        return ident

    def edge_conflict(self, origin, edge, kind, related, note, source):
        self.add('edge_conflicts', edge_id=edge, conflict_kind=kind, related=related, disposition='qualified_retained',
                 note=note, source_id=source, origin=origin)
        self.exception(origin, 'edge_conflict', edge, note, source=source)

    def duplicate(self, left, right, state, origin, basis):
        self.add('authority_duplicates', left_id=left, right_id=right, disposition=state, basis=basis, origin=origin)
        if state in ('provisional_match','conflict','unresolved'):
            self.exception(origin, 'institution_identity', left, basis + ' Candidate: ' + right)

    def publication(self, origin, url, name, language, kind, review, identifier='', venue='', year='', pub_area=''):
        doi = self.doi_by_url.get(url, '') or (identifier if re.fullmatch(r'10\.\d{4,9}/\S+', identifier, re.I) else '')
        if domain(url) == 'doi.org':
            doi = unquote(urlsplit(url).path.lstrip('/'))
        ident = stable('pub', 'doi', doi.casefold()) if doi else stable('pub', 'url', url)
        src = self.source(url, origin)
        self.publications.setdefault(ident, dict(publication_id=ident, title=name, resource_type=kind, language=language,
                                                   doi=doi, other_identifier='' if doi else identifier, venue_id=venue,
                                                   publication_m49=pub_area, year_or_edition=year,
                                                   source_id=src, evidence_state=review, clinical_release='withheld', origin=origin))
        return ident

    def geo(self):
        countries = geography()
        self.tables['m49_integrity'] = countries
        a, d = keyed('A','census_dispositions','m49_code'), keyed('D','m49_network_status','m49_code')
        legal = keyed('A','legal_verification_ledger','m49_code')
        for geo in countries:
            k = geo['m49']
            origin, census = a[k,]
            dorigin, net = d[k,]
            self.area[k] = self.add('areas', m49=k, iso_alpha2=geo['iso_alpha2'], iso_alpha3=geo['iso_alpha3'],
                                    name=geo['un_name'], un_region=geo['un_region'], un_subregion=geo['un_subregion'],
                                    authority_disposition=census['disposition'], authority_scope=census['jurisdiction_limit'],
                                    who_region=net['who_region'], who_effective_date=net['who_assignment_effective_date'],
                                    who_state=net['who_membership_governance_status'],
                                    who_source_id=self.source(net['who_region_source'], dorigin) if net['who_region_source'].startswith('http') else '',
                                    strict_legal_stage=legal[k,][1]['legal_review_stage'], origin=origin, who_origin=dorigin)
        for origin, row in read('D','geographic_seed_exceptions'):
            self.add('noncanonical_geography', candidate_code=row['m49_candidate_code'], disposition=row['disposition'],
                     notes=row['notes'], source_id=self.source(row['source_url'], origin), origin=origin)

    def team_a(self):
        for origin, r in read('A','government_health_bodies'):
            oid=r['record_id']
            ident='A:'+oid
            kind=r['body_type']
            category='regulator' if re.search('regulat|medicine.*agency',kind,re.I) else (
                'public_health_institute' if re.search('institute|surveillance|laborator',kind,re.I) else 'government_authority')
            self.entity(ident,origin,category,kind,r['official_name_local'],r['english_name'],r['official_url'],r['source_url'],
                        r['verification_state'], jurisdiction=r['jurisdiction'],language=r['source_language'],
                        date_seen=r['verified_on'],status=r['current_status'])
            self.alias('A',oid,ident,origin,'original_identity')
            self.areas_by_entity[ident]=r['area_m49']
            self.edge(origin,ident,'m49:'+r['area_m49'],'government_body_scope_recorded',
                      r['source_url'],r['verification_state'],scope=r['area_m49'],qualifier=r['jurisdiction'])
        for origin,r in read('A','authority_relationships'):
            self.edge(origin,'A:'+r['parent_body_id'],'A:'+r['child_body_id'],r['relationship_type'],r['source_url'],
                      r['review_state'],start=r['effective_from'],end=r['effective_to'])
        for origin,r in read('A','census_dispositions'):
            for oid in filter(None,r['authority_record_ids'].split(';')):
                entity=self.entities['A:'+oid]
                self.edge(origin,entity['entity_id'],'m49:'+r['m49_code'],'census_authority_for',
                          self.sources[entity['source_id']]['url'], r['disposition'], scope=r['m49_code'], observed=r['reviewed_on'])
            if r['strict_conflicting_dimensions'] or r['strict_queue_state']=='BLOCKED_NEW_SOURCE_REQUIRED':
                self.exception(origin,'statutory_followup',r['m49_code'],
                               'Read the exact current instrument, conflicting dimensions and access barrier in the pinned Team A legal ledger and queue.',r['follow_up_issue'])
        for origin,r in read('A','authority_area_scope'):
            for source in r['source_ids'].split(';'):
                self.edge(origin,'A:'+r['body_id'],'m49:'+r['area_m49'],'scoped_authority_for',
                          self.source_keys['A',source],r['review_state'],scope=r['area_m49'],qualifier=r['scope'],observed=r['checked_utc'])
        for origin,r in read('A','unresolved_area_audit'):
            self.exception(origin,'government_authority',r['m49_code'],r['next_action'],ISSUES+'149')
        for name in ('country_coverage','research_queue'):
            read('A',name)

    def team_b_records(self):
        community=keyed('B','subnational_and_indigenous_organizations','org_id')
        for origin,r in read('B','specialist_organizations'):
            oid=r['org_id']
            ident='B:'+oid
            kind=r['organization_type']
            category=('community_research_organization' if re.search('indigenous|community',kind,re.I) and (oid,) in community
                      else 'biomedical_research_org' if re.search('research|academic|university|institute',kind,re.I)
                      else 'specialist_society_or_organization')
            self.entity(ident,origin,category,kind,r['name_local'],r['name_english'],r['official_url'],r['source_url'],
                        r['identity_state'], domicile=r['area_m49'],jurisdiction=r['scope'],language=r['language'],
                        date_seen=r['verified_on'],status=r['independent_or_government'])
            self.team_b[oid]=r
            self.areas_by_entity[ident]=r['area_m49']
            self.edge(origin,ident,'m49:'+r['area_m49'],'organization_domicile_recorded',
                      r['source_url'],r['identity_state'],scope=r['area_m49'])
            self.alias('B',oid,ident,origin,'original_identity')
        for origin,r in community.values():
            self.add('community_governance', entity_id='B:'+r['org_id'],area_m49=r['area_m49'],
                     community=r['named_community_or_governance'],scope=r['subnational_base_or_scope'],
                     limitation=r['scope_limitation'],state=r['review_state'],source_id=self.source(r['official_source_url'],origin),origin=origin)
        b_context=keyed('B','publication_context','org_id','condition_key','relevant_publication_url')
        audit={}
        for origin,r in read('B','research_quality_audit'):
            if r['record_type']=='source':
                audit[r['org_id'],r['condition_key'],r['relevant_url']]=origin,r
        b_sources=keyed('B','condition_organizations','org_id','condition_key','relevant_publication_url')
        assert b_sources.keys()==audit.keys()==b_context.keys()
        for key,(origin,r) in b_sources.items():
            oid,condition,url=key
            ctx_origin, ctx=b_context[key]
            audit_origin, au=audit[key]
            tier=au['quality_or_depth']
            pub=self.publication(origin,url,r['publication_title'],r['publication_language'],'organizational_resource',r['source_review_status'],year=r['edition_or_date'])
            self.add('publication_contexts',context_id=stable('context',origin),publication_id=pub,condition_key=condition,
                     organization_id='B:'+oid,source_id=self.source(url,origin),original_role=ctx['relationship_type'],quality_tier=tier,
                     source_country=ctx['source_country_m49'],source_country_basis=ctx['source_country_basis'],
                     source_issuer_or_publisher=ctx['source_issuer_or_publisher'], study_population=ctx['study_population'],
                     study_m49='',study_location_state='not_indexed_in_context',healthcare_jurisdiction=ctx['guideline_healthcare_jurisdiction'],
                     provenance_keys=ctx['source_attribution_provenance_ids'], evidence_state=au['review_state'],
                     clinical_release=ctx['clinical_release_state'],origin=ctx_origin,secondary_origin=audit_origin)
            self.edge(origin,'B:'+oid,pub,'resource_role:'+r['relationship_type'],url,au['review_state'],condition=condition)
        for origin,r in read('B','cross_border_services'):
            self.edge(origin,'B:'+r['org_id'],'m49:'+r['serves_m49'],'cross_border:'+r['relationship_type'],
                      r['source_url'],r['verification_state'],scope=r['serves_m49'],condition=r['condition_key'],observed=r['verified_on'],qualifier=r['based_in_m49'])
        issue_rows=json_input('B','data/verification_issues_20261118.json','issues')
        id_issues={r['area_m49']:r['url'] for r in issue_rows if r.get('kind')=='local_issuer_scope_exception'}
        imprint={r['org_id']:r['url'] for r in issue_rows if r['url'].rsplit('/',1)[1] in {'97','98','99','100','101'}}
        for origin,r in read('B','geographic_gap_audit_20261118'):
            self.exception(origin,'local_specialist_identity',r['area_m49'],r['next_action'],
                           id_issues.get(r['area_m49'], ISSUES+'148'),self.source(r['candidate_or_primary_url'],origin))
        for origin,r in read('B','issuer_review_20261118'):
            self.exception(origin,'issuer_or_imprint',r['org_id'],r['next_custodian_question'],
                           imprint[r['org_id']],self.source(r['original_url'],origin))
        for n,r in enumerate(issue_rows,1):
            if r['url'] in set(id_issues.values())|set(imprint.values()):
                continue
            self.exception('B:data/verification_issues_20261118.json:'+str(n),'source_review',r['org_id'],r['title'],r['url'])

    def team_c(self):
        policies=keyed('C','journal_policy_assessment','journal_id')
        for origin,r in read('C','journals'):
            oid=r['journal_id']
            ident='C:journal:'+oid
            policy_origin, policy=policies[oid,]
            self.entity(ident,origin,'journal','periodical',r['original_title'],r['english_title'],r['official_url'],
                        r['official_url'],r['verification_state'],language=r['languages'],date_seen=r['checked_date'],status=r['current_status'])
            self.alias('C',oid,ident,origin,'original_identity')
            self.areas_by_entity[ident]=r['publisher_area_m49']
            pub_org='C:publisher:'+oid
            self.entity(pub_org,origin,'publisher','publisher_attribution',r['publisher_name'],r['publisher_name'],'',
                        policy['source_url'],policy['publisher_identity_state'],verification='inherited_publisher_attribution')
            self.edge(origin,ident,pub_org,'journal_publisher_reported',policy['source_url'],policy['publisher_identity_state'])
            self.add('journals',entity_id=ident,publisher_id=pub_org,publisher_area_m49=r['publisher_area_m49'],
                     issn=r['issn'],eissn=r['eissn'],translation_basis=r['translation_basis'],editorial_review=policy['quality_approval'],
                     peer_review_policy=r['peer_review_policy_url'],correction_policy=policy['correction_policy_url'],
                     retraction_policy=policy['retraction_policy_url'],access_model=policy['access_model'], origin=origin,policy_origin=policy_origin)
            if policy['open_gaps']:
                self.exception(policy_origin,'editorial_verification',ident,policy['open_gaps'],ISSUES+'66',self.source(policy['source_url'],policy_origin))
        for origin,r in read('C','indexes'):
            oid=r['index_id']
            self.entity('C:index:'+oid,origin,'index_platform','index_or_platform',r['name'],r['name'],
                        r['official_url'],r['official_url'],r['verification_state'],jurisdiction=r['geographic_scope'],
                        language=r['languages'],date_seen=r['checked_date'])
            self.alias('C',oid,'C:index:'+oid,origin,'original_identity')
        for origin,r in read('C','journal_index_relationships'):
            self.edge(origin,'C:journal:'+r['journal_id'],'C:index:'+r['index_id'],'discovery_role:'+r['claim_of_indexing'],
                      r['source_url'],'inherited_index_check_'+r['independently_verified'],observed=r['valid_as_of'])
        detail=keyed('C','article_discovery_details','provisional_id')
        for origin,r in read('C','article_candidates'):
            ident=r['article_id']; oid='C:journal:'+r['journal_id']
            d_origin,d=detail[ident,]
            pub=self.publication(origin,r['article_url'],r['title_original'],r['source_language'],'journal_article_candidate',r['review_state'],
                                 identifier=r['doi_or_other_id'],venue=oid,year=r['year'])
            self.alias('C',ident,pub,origin,'document_identifier')
            self.add('publication_contexts',context_id=stable('context',origin),publication_id=pub,condition_key=r['condition_key'],
                     organization_id=oid,source_id=self.source(r['article_url'],origin),original_role='published_in',quality_tier='unappraised',
                     source_country='',source_country_basis='publication_country_unknown',
                     source_issuer_or_publisher='',study_population=r['study_population'],
                     study_m49=r['study_area_m49'] if r['study_area_m49'] in self.area else '',
                     study_location_state='recorded_m49' if r['study_area_m49'] in self.area else r['study_area_m49'],healthcare_jurisdiction='not_established',
                     provenance_keys='',evidence_state=d['review_state'],clinical_release='withheld',origin=origin,secondary_origin=d_origin)
            self.edge(origin,pub,oid,'published_in',r['article_url'],r['review_state'],condition=r['condition_key'])
        for origin,r in read('C','discovery_leads'):
            self.add('discovery_leads',lead_id=r['lead_id'],m49=r['area_m49'],title=r['result_title'],
                     source_id=self.source(r['source_url'],origin),state=r['verification_state'],origin=origin)
        for n in ('area_discovery_pass','local_language_searches','geographic_field_audits'):
            read('C',n)

    def team_d(self):
        for origin,r in read('D','international_networks'):
            oid=r['network_id']
            self.entity('D:'+oid,origin,'network',r['entity_type'],r['name_original'],r['name_english'],r['official_url'],
                        r['source_url'],r['review_state'],jurisdiction=r['mandate'],date_seen=r['checked_on'],status=r['legal_or_voluntary'])
            self.alias('D',oid,'D:'+oid,origin,'original_identity')
        org_links=keyed('D','provisional_team_b_identity_crosswalk_2026-11-07','provisional_graph_id')
        country_options=defaultdict(set)
        for origin,r in read('D','network_memberships'):
            left=r['from_id']
            if left.startswith('org:provisional:') and ('D',left) not in self.cross:
                x_origin,x=org_links[left,]
                b=x['team_b_org_id']
                if b and b in self.team_b and self.team_b[b]['area_m49']==x['graph_m49'] and domain(self.team_b[b]['official_url'])==domain(x['team_b_official_url']):
                    ident='B:'+b
                    self.alias('D',left,ident,x_origin,'confirmed_match')
                    self.duplicate('D:'+left,ident,'confirmed_match',x_origin,x['exact_limit'])
                else:
                    ident='D:'+left
                    m=re.search(r'Organization name as printed by source[: ]+([^.;]+)',r['notes'])
                    label=m.group(1) if m else left.split(':')[-1].replace('-',' ')
                    self.entity(ident,origin,'provisional_institution','network_directory_name','',label,'',r['source_url'],
                                'directory_identity_unconfirmed',jurisdiction='association listing only')
                    self.alias('D',left,ident,x_origin,'unresolved')
                    self.exception(x_origin,'institution_identity',ident,x['exact_limit'],source=self.source(r['source_url'],origin))
            recipient=self.cross['D',r['to_id']]
            context_id=r['organization_id']
            if context_id:
                context_id=self.cross.get(('D',context_id),self.cross.get(('D',left),context_id))
            subject=left if left.startswith('m49:') else self.cross['D',left]
            edge=self.edge(origin,subject,recipient,r['relationship_type'],r['source_url'],r['verification_state'],
                           scope=r['country_area_m49'],start=r['valid_from'],end=r['valid_to'],observed=r['as_of'],qualifier=context_id)
            if subject=='m49:360' and r['relationship_type']=='WHO_region':
                self.tables['relationships'][-1]['integration_review']='operational_date_checked_formal_event_distinct'
                if recipient=='D:WHO_WPRO':
                    self.edge_conflict(origin,edge,'formal_vs_operational_event_dates','2025-05-23|2025-05-27',
                                       'WHO history dates the operational transfer to 23 May; WHA78.25 records the plenary on 27 May. Legal effect date is not inferred.',
                                       self.source('https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R25-en.pdf',origin))
            if r['relationship_type']=='WHO_region' and not r['valid_to']:
                country_options[subject].add(recipient)
            if r['verification_state']!='VERIFIED_PRIMARY':
                self.add('edge_conflicts',edge_id=edge,conflict_kind='inherited_qualification',related=subject,
                         disposition='qualified_retained',note=r['notes'],source_id=self.source(r['source_url'],origin),origin=origin)
        for area, regions in country_options.items():
            if len(regions)>1:
                self.exception('D:data/network_memberships.csv','WHO_assignments_overlap',area,'Competing current WHO region assignments: '+', '.join(sorted(regions)))
        for origin,r in read('D','emrn_packet_bulk_review_2026-11-18'):
            oid=r['emrn_nca_candidate_id']
            if r['exact_team_a_id'] and 'A:'+r['exact_team_a_id'] in self.entities:
                ident='A:'+r['exact_team_a_id']
                self.alias('D',oid,ident,origin,'confirmed_match')
                self.duplicate('D:'+oid,ident,'confirmed_match',origin,r['identity_scope'])
            else:
                candidate=keyed('D','emrn_nca_identity_2026','record_id')[oid,]
                c_origin,c=candidate
                ident='D:'+oid
                self.entity(ident,c_origin,'regulator_listing','EMA-listed national authority candidate','',
                            r['ema_display_name'],'',c['source_url'],r['identity_outcome'])
                self.alias('D',oid,ident,c_origin,'supported_distinct_entities' if 'PARENT_OR_DEPARTMENT' in r['identity_outcome'] else 'unresolved')
                self.duplicate(ident,r['same_area_team_a_candidates'],
                               'supported_distinct_entities' if 'PARENT_OR_DEPARTMENT' in r['identity_outcome'] else 'unresolved',
                               origin,r['identity_scope']+' '+r['identity_outcome'])
            c_origin,c=keyed('D','emrn_nca_identity_2026','record_id')[oid,]
            self.edge(c_origin,ident,'D:EMRN','EMA_directory_lists_nca',c['source_url'],c['verification_state'],
                      scope=c['country_area_m49'],observed=c['as_of'],qualifier='statutory remit pending')
        for origin,r in read('D','condition_networks'):
            self.add('network_condition_sources',entity_id='D:'+r['network_id'],condition_key=r['condition_key'],
                     source_id=self.source(r['documented_program_or_guideline_url'],origin),scope=r['scope'],
                     appraisal_state=r['appraisal_status'],origin=origin)
        for origin,r in read('D','source_verification_issues_2026-11-18'):
            self.exception(origin,'network_source_review',r['source_id'],r['instructions'],r['issue_url'],self.source(r['source_url'],origin))
        for origin,r in read('D','research_disposition_2026-11-18'):
            if r['source_verification_issues']:
                continue
            self.exception(origin,'network_scope_followup',r['backlog_id'],r['reason'],state=r['research_disposition'])
        for origin,r in read('D','who_country_office_presence'):
            self.add('office_observations',record_id=r['record_id'],area_m49=r['country_area_m49'],
                     office_presence=r['office_presence'],reported_as_of=r['as_of'],office_opened_date=r['office_opened_date'],
                     source_id=self.source(r['office_presence_source'],origin),verification=r['verification_state'],origin=origin)
        read('D','who_office_april_reconciliation_2026-11-18')

    def candidates(self):
        bins=defaultdict(set)
        for ident,r in self.entities.items():
            if r['category'] in ('publisher','provisional_institution','regulator_listing'):
                continue
            if r['official_url']:
                bins['domain',domain(r['official_url'])].add(ident)
            for label in (r['local_name'], r['english_name']):
                label=normalized(label)
                if label and label!=UNKNOWN:
                    bins['name',label].add(ident)
        matches=defaultdict(set)
        for (rule,value),ids in bins.items():
            for a,b in combinations(sorted(ids),2):
                left_area,right_area=self.areas_by_entity.get(a),self.areas_by_entity.get(b)
                same_area=left_area and left_area==right_area
                if same_area or (rule=='domain' and a[0]!=b[0]):
                    matches[a,b].add(rule)
        for (a,b),rules in sorted(matches.items()):
            left_area,right_area=self.areas_by_entity.get(a),self.areas_by_entity.get(b)
            both=left_area and right_area
            distinct=both and left_area!=right_area
            state='supported_distinct_entities' if distinct else 'provisional_match'
            self.duplicate(a,b,state,self.entities[a]['origin'],f"Shared {' and '.join(sorted(rules))}; "+
                           ('distinct source-recorded geographic contexts.' if distinct else 'identity equivalence and institutional remit require stronger scope evidence.'))

    def coverage(self):
        b=keyed('B','consolidated_cell_inventory','m49_code','condition_key')
        c=keyed('C','coverage_by_area_condition','area_m49','condition_key')
        assert b.keys()==c.keys()
        for (area,key),(bo,br) in sorted(b.items()):
            co,cr=c[area,key]
            self.add('condition_availability',m49=area,condition_key=key,
                     specialist_qualified_count=br['S1_S2_H_audited'],specialist_disposition=br['evidence_disposition'],
                     search_depth=br['highest_depth_audit'],journal_discovery=cr['journal_discovery_status'],
                     systematic_search=cr['condition_search_status'],clinical_release='withheld',specialist_origin=bo,journal_origin=co)

    def claims_intake(self):
        core=payload('main','preview-assets/core.js')
        keys=json.loads(subprocess.check_output(['node','-e',
            "const fs=require('node:fs'),vm=require('node:vm');const c={};vm.runInNewContext(fs.readFileSync(0,'utf8'),c);console.log(JSON.stringify(c.EBOW.ANCESTRIES))"],
            input=core.encode()))
        for k,v in sorted(keys.items()):
            self.add('ancestry_keys',ancestry_key=k,label=v['label'],parent_key=v.get('parent',''),
                     origin='main:preview-assets/core.js:ANCESTRIES')
        input_conditions=tuple(re.findall("'([^']+)'",re.search(r'var CONDITIONS = \[([^\]]+)\]',core)[1]))
        assert input_conditions==CONDITIONS
        for k in input_conditions:
            self.add('conditions',condition_key=k,origin='main:preview-assets/core.js:CONDITIONS')
        notes=CLAIM_NOTES
        org_roles=rows_local('claim_institutions.csv')
        by_claim=defaultdict(list)
        for row in org_roles:
            by_claim[row['claim_id']].append(row)
        mapped=set()
        for origin,r in records('claims',CLAIM_LEDGER):
            cid=r['claim_id']
            note=notes[cid]
            mapped.add(cid)
            url=r['source_url']
            key=r['condition_key']
            pub=self.publication(origin,url,r['source_title'],r['original_language'],'candidate_claim_reference',note['evidence_state'],
                                 identifier=note['identifier'],year='')
            source=self.source(note['checked_source_url'] or url,origin)
            if note['checked_source_url'] != url and note['evidence_state']=='exact_source_identified':
                self.add('publication_references',publication_id=pub,source_id=source,role='checked_bibliography_or_original',
                         origin=origin)
            self.claims[cid]=self.add('candidate_claims',claim_id=cid,condition_key=key,publication_id=pub,
                     original_source_id=self.source(url,origin),review_source_id=source,original_title=r['source_title'],
                     reference_authors=note['authors'],reference_issuer=note['issuer'],reference_venue=note['venue'],
                     website_host=domain(url),identity_or_reference_state=note['evidence_state'],
                     independent_review_scope=note['review_scope'],study_location_m49=note['study_location_m49'],
                     study_population_scope=note['study_population_scope'],source_jurisdiction=note['source_jurisdiction'],
                     population_definition=r['precise_population_and_denominator'] or 'not_appraised_in_ledger',
                     ancestry_self_identification='not_established',genetic_findings='see_source_independent_appraisal_pending',
                     geography_or_population_as_cited=r['geography_or_studied_population'],
                     design_and_version=r['source_design_and_version'],source_language=r['original_language'],
                     endpoint_effect_uncertainty=r['endpoint_effect_uncertainty'] or 'not_appraised_in_ledger',
                     limitation=note['limitation'],appraisal_status=r['appraisal_status'],mapping_status=r['mapping_status'],
                     clinical_release=r['patient_facing_status'],issue=r['issue_url'],origin=origin)
            self.add('provenance_review',assertion_id=cid,source_id=source,review_scope=note['review_scope'],
                     outcome=note['evidence_state'],checked_on=note['checked_on'],finding=note['limitation'],origin=origin)
            self.alias('claims',cid,cid,origin,'original_claim_identity')
            edges=0
            for role in by_claim[cid]:
                target=role['entity_id']
                assert target in self.entities
                u=role['source_url']
                self.edge(origin,pub,target,'claim_source_role:'+role['role'],u,role['evidence_state'],condition=key,
                          qualifier=cid,review='independently_inspected_attribution')
                edges+=1
            if note['evidence_state']!='exact_source_identified' or not edges:
                self.exception(origin,'claim_attribution_or_review',cid,note['limitation'],r['issue_url'],source)
            for anc in r['proposed_ancestry_keys'].split('|'):
                assert anc in keys, (cid,anc)
                self.add('claim_ancestry_proposals',claim_id=cid,condition_key=key,ancestry_key=anc, mapping_status=r['mapping_status'],
                         clinical_release=r['patient_facing_status'],basis='pinned_issue_candidate_only',origin=origin)
        assert mapped==notes.keys() and set(by_claim)<=mapped
        for k in input_conditions:
            for anc in sorted(keys):
                self.add('unmapped_condition_ancestry',condition_key=k,ancestry_key=anc,
                         approved_mapping='none',disposition='withheld_no_independently_approved_population_mapping',origin='main:preview-assets/core.js:ANCESTRIES')
        pilot=json_input('pilot','docs/atlas/relationships.batch-a.json','edges')
        for n,r in enumerate(pilot,1):
            if r['kind']=='candidate_source_relationship':
                cid=r['to'].removeprefix('CLAIM-')
                assert cid in mapped
                self.add('pilot_claim_links',claim_id=cid,legacy_subject_id=r['from'],relationship=r['kind'],
                         source_id=self.source(r['source_url'],'pilot:docs/atlas/relationships.batch-a.json:'+str(n)),
                         state=r['verification'],origin='pilot:docs/atlas/relationships.batch-a.json:'+str(n))
        json_input('pilot','docs/atlas/organizations.batch-a.json','organizations')

    def independent_reviews(self):
        for row in rows_local('boundary_review.csv'):
            team,path=row['input_anchor'].split(':',1)
            if (team,path) not in INVENTORY:
                records(team,path)
            origin='E:boundary_review.csv:'+row['assertion_id']
            source=self.source(row['url'],origin)
            self.add('provenance_review',assertion_id=row['assertion_id'],source_id=source,review_scope=row['method'],
                     outcome=row['outcome'],checked_on=row['checked_on'],finding=row['finding'],origin=row['input_anchor'])
        self.tables['exceptions']=sorted(self.exceptions.values(),key=lambda r:r['exception_id'])

    def map_coverage(self):
        journals=Counter(r['publisher_area_m49'] for r in self.tables['journals'])
        clubs=Counter(r['domicile_m49'] for r in self.entities.values() if r['origin'].startswith('B:'))
        for k,area in sorted(self.area.items()):
            self.add('map_coverage',m49=k,label=area['name'],government_status=area['authority_disposition'],
                     who_region=area['who_region'],indexed_specialist_count=clubs[k],indexed_journal_count=journals[k],
                     specialist_label='indexed_records_available' if clubs[k] else 'no_identity_established_in_intake',
                     journal_label='indexed_records_available' if journals[k] else 'no_journal_established_in_intake',
                     clinical_release='withheld',origin=area['origin'])

    def write(self):
        self.map_coverage()
        self.tables['institutions']=sorted(self.entities.values(),key=lambda r:r['entity_id'])
        self.tables['publications']=sorted(self.publications.values(),key=lambda r:r['publication_id'])
        output('PROVENANCE.csv',sorted(self.sources.values(),key=lambda r:r['source_id']))
        for name,data in sorted(self.tables.items()):
            output(filename(name),data)
        descriptions={
            'origin':'Original pinned team, path and 1-based CSV record number or JS symbol.',
            'source_id':'Foreign key to PROVENANCE.csv. Separate source observations may share one public URL.',
            'authority_disposition':'Evidence-scoped Team A authority state. Unknown and conflict are valid.',
            'domicile_m49':'Organization seat from explicit source fields. Never derived from area served.',
            'source_country':'Country of the linked issuer or publication as stated by source_country_basis.',
            'source_country_basis':'Explicit distinction between link issuer, document issuer, original journal country and unknown.',
            'study_m49':'Explicit country of study, with study_location_state retained when unavailable.',
            'clinical_release':'Withheld research state separate from source identity and procedural appraisal.',
            'parent_key':'Existing picker hierarchy from core.js, with no relationship to M49 or studied populations.',
            'geographic_scope_m49':'Geographic reach of this assertion. This field does not identify domicile.',
            'original_from':'Raw version or validity date from the input. Normalized date can be withheld.',
            'publisher_area_m49':'Area of the publisher as specified by Team C. Never used as study location.',
            'provenance_origins':'Exact original provenance locators sharing this URL, delimited by pipe.',
            'integration_review':'Scope of Team E review on this record, or inherited qualification.',
        }
        optional={'domicile_m49','geographic_scope_m49','condition_key','normalized_from','normalized_to','original_from',
                  'original_to','observed_on','institutional_context','parent_key','source_country','study_m49',
                  'study_location_m49','publication_m49','official_url','language','checked_on','venue_id','doi',
                  'other_identifier','year_or_edition','provenance_origins','who_source_id','issn','eissn',
                  'provenance_keys','un_region','un_subregion','name_variants_in','related','study_population'}
        dictionary=[]
        for table,data in sorted((dict(self.tables)|{'PROVENANCE':list(self.sources.values())}).items()):
            for field in data[0]:
                can_blank=field in optional or any(v[field] in ('',None) for v in data)
                dictionary.append(dict(table=table,field=field,type='text',nullable=str(can_blank).lower(),
                                       definition=descriptions.get(field,field.replace('_',' ').capitalize()+'. See table semantics in SCHEMA.md.')))
        output('data/field_dictionary.csv',dictionary)
        values=sorted(INVENTORY.values(),key=lambda r:(r['team'],r['path']))
        (ROOT/'data/input_inventory.json').write_text(json.dumps(values,ensure_ascii=False,indent=2)+'\n')
        print(json.dumps({name:len(data) for name,data in sorted(self.tables.items())}|{'sources':len(self.sources)},indent=2))

def rows_local(path):
    import csv
    with (ROOT/'review'/path).open(newline='',encoding='utf-8') as handle:
        return list(csv.DictReader(handle))

CLAIM_NOTES={r['claim_id']:r for r in rows_local('claim_source_review.csv')}

def main():
    atlas=Atlas()
    atlas.raw_sources()
    for origin,r in records('claims',CLAIM_LEDGER):
        note=CLAIM_NOTES[r['claim_id']]
        if note['identifier'] and note['evidence_state']=='exact_source_identified':
            atlas.doi_by_url[r['source_url']]=note['identifier']
    for origin,r in read('C','article_candidates'):
        if re.fullmatch(r'10\.\d{4,9}/\S+',r['doi_or_other_id'],re.I):
            atlas.doi_by_url[r['article_url']]=r['doi_or_other_id']
    atlas.geo()
    atlas.team_a()
    atlas.team_b_records()
    atlas.team_c()
    atlas.team_d()
    atlas.candidates()
    atlas.coverage()
    atlas.claims_intake()
    atlas.independent_reviews()
    atlas.write()

if __name__=='__main__':
    main()
