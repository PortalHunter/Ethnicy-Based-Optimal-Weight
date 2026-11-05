// Team B structural checks; no live URL/clinical appraisal.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

function parseCSV(s){let rows=[],r=[],v="",q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v.replace(/\r$/,""));rows.push(r);r=[];v=""}else v+=c}if(v||r.length){r.push(v);rows.push(r)}if(q)throw Error("unclosed quote");return rows;}
function validate(files){
const keys=["diabetes","hypertension","high_chol","gout","lactose","celiac","hemochromatosis"],errors=[];
const ck=(ok,message)=>{if(!ok)errors.push(message);};
const get=n=>{const a=parseCSV(files[n]);ck(a.every(r=>r.length===a[0].length),"CSV row width: "+n);return a.slice(1);};
const names=["data/m49_area_codes.csv","data/specialist_organizations.csv","data/condition_organizations.csv","data/publication_context.csv","data/coverage_by_area_condition.csv","data/subnational_and_indigenous_organizations.csv","PROVENANCE.csv","data/search_log.csv","data/cross_border_services.csv"];
const [areas,org,pub,ctx,cov,ind,prov,search,cross]=names.map(get);
const unique=(a,k,n)=>ck(new Set(a.map(k)).size===a.length,"duplicate "+n);
unique(areas,r=>r[0],"M49");unique(org,r=>r[0],"organization");unique(prov,r=>r[0],"provenance");unique(cov,r=>r[0]+":"+r[1],"coverage");unique(pub,r=>r[0]+":"+r[1]+":"+r[2],"resource");unique(search,r=>r[0],"search");unique(cross,r=>r[0],"cross-border edge");
ck(areas.length===248,"M49 count");ck(cov.length===248*7,"coverage count");
const am=new Set(areas.map(r=>r[0])),om=new Map(org.map(r=>[r[0],r])),counts=new Map();
for(const a of areas){ck(/^\d{3}$/.test(a[0]),"M49 format");const cs=cov.filter(c=>c[0]===a[0]);ck(cs.length===7&&keys.every(k=>cs.some(c=>c[1]===k)),"seven keys "+a[0]);}
for(const o of org){ck(am.has(o[1]),"org M49 "+o[0]);ck(o.every(Boolean),"org required metadata "+o[0]);ck([o[8],o[11]].every(u=>u.startsWith("https://")),"org URL "+o[0]);ck(prov.some(p=>p[0]===o[0]&&p[4]===o[11]),"org provenance "+o[0]);}
const resourceKey = (orgId, condition, url) => JSON.stringify([orgId, condition, url]);
const provById = new Map(prov.map(r => [r[0], r]));
const resourcesByKey = new Map(pub.map(r => [resourceKey(r[0], r[1], r[2]), r]));
const checkedContexts = new Set();
const countryBases = new Set(["issuer_of_linked_page", "document_issuer", "journal_publication_country", "unresolved"]);
for (const publication of pub) {
  const [orgId, condition, url] = publication;
  const area = om.get(orgId)?.[1];
  ck(!!area && keys.includes(condition), "resource organization or condition " + orgId);
  ck(publication.every(Boolean) && url.startsWith("https://"), "resource metadata " + orgId);
  ck(prov.some(r => r[4] === url && r[2] === area), "resource provenance " + orgId);
  const key = area + ":" + condition;
  counts.set(key, (counts.get(key) || 0) + 1);
}
for (const context of ctx) {
  const [orgId, condition, country, , , role, release, url, domicile, , basis, evidence] = context;
  const key = resourceKey(orgId, condition, url);
  ck(!checkedContexts.has(key), "duplicate resource context " + key);
  checkedContexts.add(key);
  ck(resourcesByKey.get(key)?.[6] === role, "exact resource and role for context " + key);
  ck(context.every(Boolean) && release === "research_lead_only", "context metadata " + key);
  ck(om.get(orgId)?.[1] === domicile, "context organization domicile " + key);
  ck(countryBases.has(basis) && (basis === "unresolved" ? country === "unknown" : am.has(country)), "context issuer country " + key);
  const ids = (evidence || "").split("|");
  ck(new Set(ids).size === ids.length && ids.every(id => provById.has(id)), "context attribution evidence " + key);
  ck(ids.some(id => provById.get(id)?.[4] === url), "context linked artifact evidence " + key);
  if (country !== domicile && country !== "unknown") {
    ck(ids.some(id => provById.get(id)?.[2] === country), "cross-area issuer evidence " + key);
  }
}
for (const key of resourcesByKey.keys()) ck(checkedContexts.has(key), "missing resource context " + key);
const searchIdsByCell = new Map();
for (const [id, area, condition] of search) {
  const key = area + ":" + condition;
  if (!searchIdsByCell.has(key)) searchIdsByCell.set(key, []);
  searchIdsByCell.get(key).push(id);
}
const withoutSource = cov.filter(c => Number(c[4]) === 0);
const targetedNoSource = withoutSource.filter(c => searchIdsByCell.has(c[0] + ":" + c[1]));
const positiveStates = new Set(["national_or_cross_border_body_verified", "specialist_research_only"]);
for (const [area, condition, state, , count, , logIds] of cov) {
  const key = area + ":" + condition;
  const n = counts.get(key) || 0;
  const expectedIds = searchIdsByCell.get(key) || [];
  const actualIds = logIds === "none_logged" ? [] : (logIds || "").split("|");
  ck(am.has(area) && keys.includes(condition), "coverage reference " + key);
  ck(String(n) === count, "findings count " + key);
  ck(actualIds.length === expectedIds.length && new Set(actualIds).size === actualIds.length &&
    actualIds.every(id => expectedIds.includes(id)), "coverage search references " + key);
  const gapState = expectedIds.length ? "targeted_search_no_verified_resource" : "not_yet_researched";
  ck(n > 0 ? positiveStates.has(state) : state === gapState, "coverage state " + key);
}
for(const p of prov)ck(p.every(Boolean)&&p[4].startsWith("https://"),"provenance metadata "+p[0]);
for(const s of search)ck(am.has(s[1])&&keys.includes(s[2])&&s.every(Boolean)&&s[5].startsWith("https://"),"search metadata "+s[0]);
for(const i of ind)ck(om.has(i[0])&&i[1]===om.get(i[0])[1],"indigenous foreign key");
for(const e of cross){ck(e.every(Boolean)&&am.has(e[2])&&am.has(e[3])&&e[2]!==e[3],"cross-border metadata "+e[0]);ck(om.has(e[1])&&om.get(e[1])?.[1]===e[2],"cross-border organization domicile "+e[0]);ck(keys.includes(e[5])&&e[6].startsWith("https://"),"cross-border condition/source "+e[0]);ck(prov.some(p=>p[4]===e[6]&&p[2]===e[3]),"cross-border provenance "+e[0]);}
return {errors,metrics:{organizations:org.length,areas:new Set(org.map(r=>r[1])).size,resources:pub.length,positive:counts.size,without_linked_source:withoutSource.length,targeted_no_source:targetedNoSource.length,unresearched:withoutSource.length-targetedNoSource.length,provenance:prov.length,search_log:search.length,community:ind.length,cross_border_edges:cross.length,issuer_country_unresolved:ctx.filter(r=>r[2]==="unknown").length,issuer_country_differs_from_domicile:ctx.filter(r=>r[2]!=="unknown"&&r[2]!==r[8]).length,by_condition:Object.fromEntries(keys.map(k=>[k,cov.filter(r=>r[1]===k&&Number(r[4])>0).length]))}};
}

function validateOverview(files,result){const a=parseCSV(files["data/m49_verified_overview.csv"]),rows=a.slice(1),codes=rows.map(r=>r[0]),known=parseCSV(files["data/m49_area_codes.csv"]).slice(1).map(r=>r[0]);if(rows.length!==248||new Set(codes).size!==248||rows.some(r=>r.length!==a[0].length)||known.some(c=>!codes.includes(c))||codes.some(c=>!known.includes(c)))result.errors.push("UNSD snapshot code-set/width mismatch");result.metrics.current_unsd_overview_codes=rows.length;return result;}

const root=path.dirname(fileURLToPath(import.meta.url));
const paths=["data/m49_area_codes.csv","data/specialist_organizations.csv","data/condition_organizations.csv","data/publication_context.csv","data/coverage_by_area_condition.csv","data/subnational_and_indigenous_organizations.csv","PROVENANCE.csv","data/search_log.csv","data/m49_verified_overview.csv","data/cross_border_services.csv"];
const files=Object.fromEntries(paths.map(p=>[p,fs.readFileSync(path.join(root,p),"utf8")]));
const result=validateOverview(files,validate(files));
console.log(JSON.stringify(result,null,2));
if(result.errors.length)process.exitCode=1;
