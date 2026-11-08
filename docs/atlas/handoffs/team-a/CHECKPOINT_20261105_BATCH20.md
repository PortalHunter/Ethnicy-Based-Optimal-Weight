# Team A — COMPLETE STANDALONE Batch 20 GitHub checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**OPEN DRAFT PR #68 (DO NOT MERGE):** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Research branch:** `research/atlas-team-a-20261104`
**Immutable Batch 20 independently validated DATA commit:** [`f0069dc868ba619302343c651161ca032c63d110`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/f0069dc868ba619302343c651161ca032c63d110)
**Pre-batch docs HEAD:** `6316ea436cf2cc3e34e469beb92b2d04f445b305`. This checkpoint and other docs land in a later documentation commit. **Always recheck live branch HEAD** to avoid overwriting parallel research.
**Previous full checkpoint:** [Batch 19](CHECKPOINT_20261105_BATCH19.md). **Recovery entrypoint:** [CONTINUE.md](CONTINUE.md). **Original complete acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.
**Official dated geographic master:** [`M49_OFFICIAL_SNAPSHOT_20261105.csv`](M49_OFFICIAL_SNAPSHOT_20261105.csv), https://unstats.un.org/unsd/methodology/m49/overview/.

## Mission, non-negotiable scope and remaining acceptance

Team A maps **government and statutory public-health authorities** in every **248 UN M49 country-or-area records**, including autonomous, non-sovereign, contested, devolved and uninhabited areas. Geography inventory is **not 248 verified ministries**. A ministry/department **identity** is NOT verified full current statutory legal competence, successful independent confirmation of all delegations, or clinical evidence. Capture original-language government identities, reviewer-translated English names, official government/gazette issuer and URL, checked date, authority/geographic scope, explicit effective dates only if independently supported, health institutes/regulators separately, and evidence caveats including negative/failed access. WHO offices cannot replace domestic authorities; proposed law is not enacted law. For sensitive delegations/renames/disputes obtain independent checks from separate official issuing authorities and inspect enacted original-language statutory instruments before certifying rights or powers. Do not invent parent M49 relationship keys; sovereignty is not proof of effective competence.

**Only edit `docs/atlas/handoffs/team-a/` on existing Team A research branch.** Do not edit `main`, the live website, calculator, clinical risk formulas, patient-facing/ancestry/genomic outputs, other teams' work or sensitive patient information. PR #68 must remain **OPEN DRAFT and UNMERGED**.

## Exact Batch 20 data state (independently re-read from DATA SHA)

| Invariant / metric | Exact result |
|---|---:|
| Distinct official M49 geography rows, matched individually on M49 / ISO2 / ISO3 / UN name / region / subregion | **248 / 248** |
| Principal government health-authority identities located (not necessarily statutory powers complete) | **132 / 248** |
| Explicit principal unknowns, not denials of an authority | **116 / 248** |
| Separate government health-body records | **185** |
| Citation-backed limited same-area authority relationships | **42** |
| Unique dated government/official source-provenance rows including caveats | **288** |
| Country coverage rows synchronized with country statuses | **248** |
| Unsupported cross-area parent M49 assignments | **0** |

Batch 20 adds **4 newly identified principal areas**: **Senegal 686 `gov-686-001`**, **Serbia 688 `gov-688-001`**, **Seychelles 690 `gov-690-001`**, and **Sierra Leone 694 `gov-694-001`**. Also a separately named statutory-type **Seychelles Public Health Authority `gov-690-002`** (specific current organic law still pending), one limited within-country `gov-690-001` → `gov-690-002` **ministry component-listing** edge, **13 issuer-specific provenance rows**, **no invented cross-area parents**. Incremental baseline [Batch 19](CHECKPOINT_20261105_BATCH19.md) was 128 identified/120 unknown, 180 bodies, 41 links, 275 checks.

## New evidence (official links individually reviewed on 2026-11-05) and qualifications

### 686 — Senegal: current health/public hygiene ministry (French original)

**`gov-686-001`: `Ministère de la Santé et de l’Hygiène Publique`**, reviewer English `Ministry of Health and Public Hygiene`. Presidency publishes **Decree no. 2026-1130 dated June 1, 2026** on government composition [Presidency, English transcription](https://www.presidence.sn/en/actualites/composition-of-the-new-government/), and the Prime Minister's office publishes the same decree in [French](https://primature.sn/publications/actualites/composition-du-nouveau-gouvernement-3). The [Ministry's own 2026 news](https://www.sante.gouv.sn/Actualites/le-ministre-de-la-sant%C3%A9-et-de-l%E2%80%99hygi%C3%A8ne-publique-reconduit-dans-ses-fonctions) identifies the new portfolio. **These are independent official publishing channels but Presidency and Primature share ONE underlying decree; not two independently enacted health jurisdiction laws.** Old sante.gouv.sn site chrome still says *Ministère de la Santé et de l’Action Sociale*; preserve the current vs historical naming distinction. Current signed **Decree 2026-1133 allocating state services**, exact effective departmental transfer, departmental/regional powers and full organic law remain to read; do not infer full mandates from cabinet composition. Provenance `SEN-PRES-DEC1130-B20`, `SEN-PRIM-DEC1130-B20`, `SEN-MOH-2026-B20`.

### 688 — Serbia: original Cyrillic health ministry

**`gov-688-001`: `Министарство здравља`**, reviewer English `Ministry of Health`. The Ministry's [Cyrillic healthcare organizational sector duties](https://www.zdravlje.gov.rs/tekst/333192/sektor-za-organizaciju-zdravstvenog-sistema.php) describe health-system planning, oversight and drafting sector norms; [ministry directory](https://www.zdravlje.gov.rs/tekst/333296/imenik-ministarstva-zdravlja.php) independently locates internal units (both same issuer). [Serbian central government English cabinet roster](https://www.srbija.gov.rs/sastav/en/10) lists health portfolio, but it was originally formed in **April 2025**. Neither ministry website nor government roster verifies all consolidated 2026 ministerial powers, healthcare insurance fund and province/municipal rules. Do not adjudicate internationally contested territory or infer actual control from ministry name. Provenance `SRB-MOH-SECTOR-B20`, `SRB-MOH-DIR-B20`, `SRB-GOV-CABINET-B20`.

### 690 — Seychelles: ministry and distinct Public Health Authority

**`gov-690-001`: `Ministry of Health`**, original English. Ministry [About Us](https://www.health.gov.sc/about-us/) states parent Ministry policy, macro-indicator and workforce roles; a separate [Seychelles State House cabinet portfolio announcement](https://www.statehouse.gov.sc/news/6620/president-herminie-presents-ministerial-portfolios-in-special-cabinet-meeting) independently identifies health-policy ministerial role. The [whole-government departments directory](https://www.gov.sc/departments) separately names the PHA and health service department.

**`gov-690-002`: `Public Health Authority`**, current ministry [PHA service/mandate page](https://www.health.gov.sc/public-health-authority/) lists public-health prevention, surveillance, inspection, research, and threats. A `MINISTRY_PUBLIC_HEALTH_AUTHORITY_COMPONENT_LISTING_ONLY` same-area edge is supported by the ministry About Us division into components, and **does not prove direct ministerial legal subordination** or full authority under the amended Public Health Act. New site navigation calls care delivery *Health Care Services Department* while the About Us calls it *Health Care Agency*; do NOT merge or create separate agency without validating legal continuity. The ministry homepage/profile also claims an appointment began **December 1, 2026**, future as of this **November 5, 2026** audit; this has **not** been used as evidence of current officeholder status. Statutory enactments, PHA independence, other agencies pending. Source IDs `SYC-MOH-ABOUT-B20`, `SYC-STATEHOUSE-B20`, `SYC-GOV-DIR-B20`, `SYC-PHA-B20`.

### 694 — Sierra Leone: present Ministry of Health vs legacy sanitation label

**`gov-694-001`: `Ministry of Health`**, original English. [Official ministry portal](https://mohs.gov.sl/) identifies national policy and health/surveillance mission, with 2026 dated news; independently the [State House cabinet roster](https://statehouse.gov.sl/cabinet/) explicitly lists Minister of Health. A still-live [government emergency directorate DHSE site](https://dhse.gov.sl/) displays older **Ministry of Health and Sanitation** branding. **Do not assign a rename date or legal continuity solely from conflicting pages**. No separate emergency-directorate record or unsourced hierarchy added; current Ministry organic statute, district delegation, public-health and regulatory powers remain open. Source IDs `SLE-MOH-PORTAL-B20`, `SLE-STATEHOUSE-CABINET-B20`, `SLE-DHSE-LEGACY-B20`.

## Precise immutable validation and limits

**Exact immutable GitHub DATA commit `f0069dc868ba619302343c651161ca032c63d110`** was independently re-fetched after writing, not merely checked from the prepared content buffers. Six files: `data/countries.csv`, `data/country_coverage.csv`, `data/government_health_bodies.csv`, `data/authority_relationships.csv`, `PROVENANCE.csv`, `M49_OFFICIAL_SNAPSHOT_20261105.csv`. Independent **quote-aware parsing including escaped quotes PASS**, exact row widths; 248 direct master comparisons across six geography columns and region totals **Africa 60 / Americas 57 / Asia 50 / Europe 51 / Oceania 29 / Antarctica unassigned 1**; 132 principal identities reference same-area existing bodies, 116 unknowns have no linked principal, all 185 body IDs unique, 42 nonself citation-backed same-area edges, 288 distinct provenance IDs with language/issuer/date/HTTPS and state, 248 matching ledgers, **40** sensitive area sentinel controls (exclude Taiwan 158 because NOT in dated official 248 master), 535 Caribbean Netherlands explicitly UNKNOWN, zero guessed parent key. Previous legitimate `LOCAL_NAME_PENDING` entries remain valid with caveats. Diff from prior docs HEAD has **only five Team A data CSV files**. PR was **OPEN DRAFT, unmerged** at QA. **PASS STRUCTURAL; NOT legal acceptance certification**.

**Repository's Python `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN.** Local `git ls-remote` on 2026-11-05 failed `Could not resolve host: github.com`; the connector-based independent structural mirror is NOT an execution of that script. Future executable checkout must run it and separately verify current legal texts, jurisdiction, direct source access, two independent legal issuers and each unresolved area.

## Outstanding research / next autonomous run

**116/248 primary authority identities remain unresolved**, not without ministries. Highest-risk unresolved cases include **010 Antarctica; 074 Bouvet; 086 BIOT; 104 Myanmar competing authorities; 112 Belarus; 192 Cuba; 226 Equatorial Guinea cabinet conflicts and projected transfers; 239 South Georgia/South Sandwich; 260 French Southern Territories; 275 Palestine; 334 Heard/McDonald; 535 Caribbean Netherlands**, plus remaining countries/territories from the 248 ledger. Next tractable ascending M49 unknown areas after Batch 20 include **703 Slovakia, 704 Viet Nam, 705 Slovenia, 706 Somalia, 716 Zimbabwe**, but do not prioritize easy identities at expense of enacted authority/devolution checks. Continue original-law checks for 686/688/690/694 and all previous Batch 1–19 cases. Important older source caveats preserved: Qatar food-safety transfer merely *started* Nov 5 2026; San Marino 2024 ISS law **index only**; Saudi English/Arabic SAME ministry issuer; Comoros portal placeholder/test content and decree title, Faroese/Gabon/Hungarian proposed acts **NOT ENACTED**, mainland/overseas or federal/local jurisdiction not fully allocated, no inferred cross-area parent links. Seychelles future personnel date remains explicit; Sierra Leone old branding and Senegal ministry header conflicting with current names remain unresolved. Identity != statutory powers != clinical guidance.

**Recovery:** Re-fetch PR #68 and branch HEAD; read this complete standalone file and `CONTINUE.md`, `README.md`, `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `CHANGELOG.md`, five normalized data CSVs, provenance, and official M49 master. Read full original TEAM_A_GOVERNMENT_CENSUS acceptance on handoff-prompt branch. Check live changes/commits before modifying, keep edits only Team A folder, commit a small source-backed data batch, independently reread immutable SHA and run Python validator if executable, commit new updated docs and complete standalone checkpoint, keep PR open DRAFT/unmerged. Finish with exact head/data SHA and identical short prompt below.

## Identical short continuation prompt

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
