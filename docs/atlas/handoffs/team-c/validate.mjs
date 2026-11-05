import fs from 'node:fs';
import path from 'node:path';
const root=process.argv[2]||path.dirname(new URL(import.meta.url).pathname);
const parse=function parse(s){let rows=[],row=[],v="",q=false;for(let i=0;i<s.length;i++){let c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++;}else q=!q;}else if(!q&&(c===','||c==='\n')){row.push(v);v="";if(c==='\n'){rows.push(row);row=[];}}else if(c!=='\r')v+=c;}if(v||row.length){row.push(v);rows.push(row)}return rows};
const files=['areas_m49','article_candidates','coverage_by_area_condition','indexes','journal_index_relationships','journals','local_language_searches'];
const data={};
for(const f of files){const rows=parse(fs.readFileSync(path.join(root,'data',f+'.csv'),'utf8'));if(rows.some(r=>r.length!==rows[0].length))throw Error(f+' width');data[f]=rows.slice(1).map(r=>Object.fromEntries(rows[0].map((k,i)=>[k,r[i]])));}
const prov=parse(fs.readFileSync(path.join(root,'PROVENANCE.csv'),'utf8'));
if(prov.some(r=>r.length!==prov[0].length))throw Error('provenance width');
function unique(a,k){if(new Set(a.map(r=>r[k])).size!==a.length)throw Error('duplicate '+k);}
for(const [f,k]of [['journals','journal_id'],['indexes','index_id'],['article_candidates','article_id'],['local_language_searches','search_id']])unique(data[f],k);
if(new Set(prov.slice(1).map(r=>r[0])).size!==prov.length-1)throw Error('duplicate provenance');
const j=new Set(data.journals.map(r=>r.journal_id)), idx=new Set(data.indexes.map(r=>r.index_id));
const areaKey=Object.keys(data.areas_m49[0]).find(k=>k==='area_m49');
if(!areaKey)throw Error('area key unresolved');
const areas=new Set(data.areas_m49.map(r=>r[areaKey]));
const conditions=new Set(['diabetes','hypertension','high_chol','gout','lactose','celiac','hemochromatosis']);
for(const r of data.journals)if(!areas.has(r.publisher_area_m49))throw Error('journal geography');
for(const r of data.article_candidates){if(!j.has(r.journal_id)||!conditions.has(r.condition_key)||r.review_state!=='unappraised')throw Error('article reference/state');if(r.study_area_m49&&!areas.has(r.study_area_m49))throw Error('study geography');}
for(const r of data.journal_index_relationships)if(!j.has(r.journal_id)||!idx.has(r.index_id))throw Error('relationship reference');
if(areas.size!==248||data.coverage_by_area_condition.length!==1736)throw Error('queue count');


const keys=new Set();for(const r of data.coverage_by_area_condition){const key=r.area_m49+'|'+r.condition_key;if(!areas.has(r.area_m49)||!conditions.has(r.condition_key)||keys.has(key)||r.condition_search_status!=='not_searched')throw Error('coverage reference/state');keys.add(key);}

const auditRows=parse(fs.readFileSync(path.join(root,'data/geographic_field_audits.csv'),'utf8'));
if(auditRows.some(r=>r.length!==auditRows[0].length))throw Error('audit width');
const audit=auditRows.slice(1).map(r=>Object.fromEntries(auditRows[0].map((k,i)=>[k,r[i]])));
unique(audit,'audit_id');unique(audit,'area_m49');
for(const a of audit){const r=data.areas_m49.find(r=>r.area_m49===a.area_m49);if(!r)throw Error('audit geography');for(const k of ['iso_alpha2','iso_alpha3','un_region','un_subregion','un_intermediate_region'])if(a[k]!==r[k])throw Error('audit field '+k);if(a.official_area_name!==r.area_name||r.verification_state!=='official_UNSD_name_ISO_region_fields_verified')throw Error('audit name/state');}
if(audit.length!==248||data.areas_m49.filter(r=>r.verification_state==='official_UNSD_name_ISO_region_fields_verified').length!==248)throw Error('audit verification count');
console.log(JSON.stringify({result:'PASS',counts:Object.fromEntries(files.map(f=>[f,data[f].length])),provenance:prov.length-1,geographic_audits:audit.length}));
