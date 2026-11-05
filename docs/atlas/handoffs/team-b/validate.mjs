// Team B structural checks. No scientific appraisal or live link checks.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

function parseCSV(s){let rows=[],r=[],v="",q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){r.push(v);v=""}else if(c==='\n'&&!q){r.push(v.replace(/\r$/,""));rows.push(r);r=[];v=""}else v+=c}if(v||r.length){r.push(v);rows.push(r)}if(q)throw Error("unclosed quote");return rows;}
function validate(files){
const keys=["diabetes","hypertension","high_chol","gout","lactose","celiac","hemochromatosis"],errors=[];
const ck=(ok,message)=>{if(!ok)errors.push(message);};
const get=n=>{const a=parseCSV(files[n]);ck(a.every(r=>r.length===a[0].length),"CSV row width: "+n);return a.slice(1);};
const names=["data/m49_area_codes.csv","data/specialist_organizations.csv","data/condition_organizations.csv","data/publication_context.csv","data/coverage_by_area_condition.csv","data/subnational_and_indigenous_organizations.csv","PROVENANCE.csv","data/search_log.csv"];
const [areas,org,pub,ctx,cov,ind,prov,search]=names.map(get);
const unique=(a,k,n)=>ck(new Set(a.map(k)).size===a.length,"duplicate "+n);
unique(areas,r=>r[0],"M49");unique(org,r=>r[0],"organization");unique(prov,r=>r[0],"provenance");unique(cov,r=>r[0]+":"+r[1],"coverage");unique(pub,r=>r[0]+":"+r[1]+":"+r[2],"resource");unique(search,r=>r[0],"search");
ck(areas.length===248,"M49 count");ck(cov.length===248*7,"coverage count");
const am=new Set(areas.map(r=>r[0])),om=new Map(org.map(r=>[r[0],r])),counts=new Map();
for(const a of areas){ck(/^\d{3}$/.test(a[0]),"M49 format");const cs=cov.filter(c=>c[0]===a[0]);ck(cs.length===7&&keys.every(k=>cs.some(c=>c[1]===k)),"seven keys "+a[0]);}
for(const o of org){ck(am.has(o[1]),"org M49 "+o[0]);ck(o.every(Boolean),"org required metadata "+o[0]);ck([o[8],o[11]].every(u=>u.startsWith("https://")),"org URL "+o[0]);ck(prov.some(p=>p[0]===o[0]&&p[4]===o[11]),"org provenance "+o[0]);}
for(const p of pub){const o=om.get(p[0]);ck(!!o,"pub org "+p[0]);ck(keys.includes(p[1]),"condition "+p[1]);ck(p.every(Boolean),"pub metadata "+p[0]);ck(p[2].startsWith("https://"),"pub URL "+p[0]);ck(prov.some(r=>r[4]===p[2]&&r[2]===o?.[1]),"pub provenance "+p[0]);ck(ctx.some(c=>c[0]===p[0]&&c[1]===p[1]&&c[2]===o?.[1]&&c[5]===p[6]&&c[6]==="research_lead_only"),"pub context "+p[0]);const k=o?.[1]+":"+p[1];counts.set(k,(counts.get(k)||0)+1);}
ck(ctx.length===pub.length,"context count");for(const c of ctx){ck(om.has(c[0])&&keys.includes(c[1])&&c.every(Boolean)&&c[6]==="research_lead_only","context metadata "+c[0]);}
for(const c of cov){const n=counts.get(c[0]+":"+c[1])||0;ck(am.has(c[0])&&keys.includes(c[1]),"coverage ref");ck(Number(c[4])===n,"findings count "+c[0]+":"+c[1]);ck(n>0?c[2]!=="not_yet_researched":c[2]==="not_yet_researched","coverage support "+c[0]+":"+c[1]);}
for(const p of prov)ck(p.every(Boolean)&&p[4].startsWith("https://"),"provenance metadata "+p[0]);
for(const s of search)ck(am.has(s[1])&&keys.includes(s[2])&&s.every(Boolean)&&s[5].startsWith("https://"),"search metadata "+s[0]);
for(const i of ind)ck(om.has(i[0])&&i[1]===om.get(i[0])[1],"indigenous foreign key");
return {errors,metrics:{organizations:org.length,areas:new Set(org.map(r=>r[1])).size,resources:pub.length,positive:counts.size,unresearched:cov.filter(r=>r[2]==="not_yet_researched").length,provenance:prov.length,search_log:search.length,community:ind.length,by_condition:Object.fromEntries(keys.map(k=>[k,cov.filter(r=>r[1]===k&&r[2]!=="not_yet_researched").length]))}};
}
const root=path.dirname(fileURLToPath(import.meta.url));
const paths=["data/m49_area_codes.csv","data/specialist_organizations.csv","data/condition_organizations.csv","data/publication_context.csv","data/coverage_by_area_condition.csv","data/subnational_and_indigenous_organizations.csv","PROVENANCE.csv","data/search_log.csv"];
const result=validate(Object.fromEntries(paths.map(p=>[p,fs.readFileSync(path.join(root,p),"utf8")])));
console.log(JSON.stringify(result,null,2));
if(result.errors.length)process.exitCode=1;
