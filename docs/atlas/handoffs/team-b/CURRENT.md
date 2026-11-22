# Team B — B158 restart checkpoint, 2026-11-22

Research acceptance INCOMPLETE. Supersedes counts in earlier blocks below.

- Last completed batch: **B158** — Lactose depth queue, 47 cells without a WGO-listed member society: 47 D2 (four WGO regional member pages retrieved once, local gastro society checks for Nepal/Tanzania, preserved catalogue route).. Last published commit before B158: `d065bd3`. The B158 commit is the branch head adding this block.
- Qualified cells: **359**; contexts 600; organizations 529; tiers S1=137 S2=185 H=54 M=196 U=28; depth D1/D2/D3={'D1': 868, 'D2': 604, 'D3': 79}.
- Linked-source cases without terminal disposition: **0**.
- Remaining unlinked depth tasks: **699** by condition {'high_chol': 165, 'hypertension': 161, 'lactose': 70, 'diabetes': 131, 'gout': 171, 'celiac': 1}. Next: the 70 remaining lactose cells each have a WGO-listed national gastroenterology society; follow each society site (homepage/site search) for lactose content before D2/qualification. Then high_chol (EAS-FHSC directory), gout (APLAR/EULAR/PANLAR/AFLAR), hypertension, diabetes (IDF). 643:celiac lead open.
- First open queue positions (canonical inventory order): 004:high_chol 004:hypertension 004:lactose 008:diabetes 008:gout 008:high_chol 008:hypertension 008:lactose 012:diabetes 012:gout …
- Identity gaps **21**; issuer questions **5** (unchanged).
- Validation: native 0 errors; supplemental 10235 pass.
- Blockers recorded this batch: nsg.org.np returns 403.
- Unpublished local work: none at time of commit.

# Team B — B157 restart checkpoint, 2026-11-22

Research acceptance INCOMPLETE. Supersedes counts in earlier blocks below.

- Last completed batch: **B157** — Hemochromatosis depth queue 113 cells: 113 D2 (HI member directory read once via WebFetch, 14 indexed local gastro/hepatology society sites incl. native site search, preserved catalogue route). No qualification.. Last published commit before B157: `e138a09`. The B157 commit is the branch head adding this block.
- Qualified cells: **359**; contexts 600; organizations 529; tiers S1=137 S2=185 H=54 M=196 U=28; depth D1/D2/D3={'D1': 915, 'D2': 557, 'D3': 79}.
- Linked-source cases without terminal disposition: **0**.
- Remaining unlinked depth tasks: **746** by condition {'high_chol': 165, 'hypertension': 161, 'lactose': 117, 'diabetes': 131, 'gout': 171, 'celiac': 1}. Next: lactose (WGO regional affiliate lists; NFDD Singapore lactose-intolerance page is an existing lead), then high_chol (EAS-FHSC), gout, hypertension, diabetes; 643:celiac lead open.
- First open queue positions (canonical inventory order): 004:high_chol 004:hypertension 004:lactose 008:diabetes 008:gout 008:high_chol 008:hypertension 008:lactose 012:diabetes 012:gout …
- Identity gaps **21**; issuer questions **5** (unchanged).
- Validation: native 0 errors; supplemental 10141 pass.
- Blockers recorded this batch: haemochromatosis-international.org returns 202 challenge to curl (WebFetch used); pbpgigastro.com unreachable.
- Unpublished local work: none at time of commit.

# Team B — B156 restart checkpoint, 2026-11-22

Research acceptance INCOMPLETE. Supersedes counts in the B155 block below.

- Last completed batch: **B156** (celiac depth queue, 95 cells). Last published commit before B156: `b3389a8` (B155). The B156 commit is the branch head adding this block.
- Qualified cells: **359**; source contexts 600; organizations 529; tiers S1=137 S2=185 H=54 M=196 U=28.
- Linked-source cases without terminal disposition: **0**.
- Remaining unlinked depth tasks: **859** by condition {'hemochromatosis': 113, 'high_chol': 165, 'hypertension': 161, 'lactose': 117, 'diabetes': 131, 'gout': 171, 'celiac': 1}. Celiac remaining: only `643:celiac` (open lead: retrieve https://gfrussia.ru/russia or public celiac.spb.ru page; an automated fetch of gfrussia.ru was declined by safety review on 2026-11-22).
- Next queue: continue condition-by-condition using shared directories retrieved once: hemochromatosis (haemochromatosis-international.org/members), lactose (worldgastroenterology.org regional affiliate lists), high_chol (eas-fhsc.org/contact-us), gout (aplar/eular/panlar/aflar member lists), hypertension (WHL/ISH member lists), diabetes (IDF members). First open positions: 004:hemochromatosis 004:high_chol 004:hypertension 004:lactose 008:diabetes 008:gout 008:hemochromatosis 008:high_chol …
- Identity gaps **21**; issuer questions **5** (unchanged).
- Validation: native 0 errors; supplemental 9915 pass.
- Blockers (B156, do not repeat): atmc.tn unreachable (Tunisia); Belarus/Cuba/Georgia/Montenegro celiac groups social-media-only; El Salvador celiac Blogger group identity unverified.
- Unpublished local work: none at time of commit.

# Team B — B155 restart checkpoint, 2026-11-22

Research acceptance INCOMPLETE. Durable restart state (supersedes counts in the B154 section below; history preserved).

- Last completed batch: **B155** (priority 1 linked-source cases). Previous published commit before B155: `ebec28a`. The B155 commit is the branch head that adds this block (see `git log`); a later batch records it explicitly.
- Qualified area-condition cells: **356** (344→356, +12). Source contexts 597 (all individually audited, all research_lead_only). Tiers S1=137, S2=182, H=54, M=196, U=28.
- Linked-source cases without terminal disposition: **0** (57→0): 12 qualified, 36 D2, 9 D3. Files: `data/reviewed_sources_B155_20261122.json`, `data/reviewed_searches_B155_20261122.json`, `data/B155_retrieval_receipt.json`, `data/independent_review_requirements_B155_20261122.json`.
- Remaining unlinked research-depth tasks (searched, no linked source, depth not D2/D3): **953**. Queue order = canonical order of `data/consolidated_cell_inventory.csv` filtered by raw_resource_rows=0 and highest_depth_audit∉{D2,D3}. Next positions: 004:celiac 004:hemochromatosis 004:high_chol 004:hypertension 004:lactose 008:celiac 008:diabetes 008:gout 008:hemochromatosis 008:high_chol …
- Identity gaps: **21** (unchanged); original issuer/imprint questions: **5** (unchanged, `data/issuer_review_20261118.csv`).
- Validation: native `node validate.mjs` 0 errors; `tools/validate_supplemental.py` 9725 checks pass (receipts `runs/20261122_*_validation.json`; historical default supplemental receipt restored byte-for-byte).
- Known source blockers added in B155 (do not repeat): OUP 403 for BSR 2017 gout guideline; owner-restricted Drive file for PESK paediatric lipid lecture; HTTP 403/202 bot challenges for diabetes.ie, scc.org.co, sodenn.org, spedm.pt; Greenland SIF/SDU report retrievable but Ilisimatusarfik role unattributed.
- Unpublished local work: none at time of commit.
- Workflow for next batch: pick next 25-50 queue cells; reuse search_log/catalogue receipts; write `data/reviewed_sources_B<n>_*.json` / `data/reviewed_searches_B<n>_*.json`; run `tools/append_reviewed_sources.py` then `tools/append_search_dispositions.py`; update metrics manual fields; run both validators once; commit; push (non-force).

# Team B — accelerated checkpoint through B154, 2026-11-19

Research acceptance INCOMPLETE. Execution-resource checkpoint; actionable automated research remains. User explicitly approved public publication to `research/atlas-team-b-20261104` and draft PR#71. B152 data snapshot507d2ea and publication receipt52ec933 were published with exact validated Git-tree equality and non-force expected-head updates. B153/B154 completed and validated; final publication SHA is recorded in PR#71. Keep PR draft/open/unmerged.

Ordinary backlog1128→1010: unlinked depth tasks988→953 and linked nonqualified cases without terminal disposition140→57. Qualified cells270→344 (+74); individually audited source contexts511→585 (+74), plus one existing U context upgraded after original visual-figure inspection.130 appended research records across130 distinct interpreted cells;118 distinct cells genuinely advanced:74 qualified,23D2,21D3. Eleven D1 holds retain real leads; one additional context concerns an already-qualified cell. These nonadvancing records are not counted as workload reduction. Zero untouched/unaudited cells.526organizations;227/248 local identities,21 gaps; five original-issuer questions unchanged. Source tiersS1=131,S2=180,H=50,M=196,U=28. No clinical/genetic/legal/rights/community/maintainer approvals.

B143 reconciled20 previously documented individual source blockers toD3, preserving existing issues and observations. B145 interpreted34 lipid cases using actual cached bibliographic receipts plus independent original directory:23D2,11D1 holds. Same-index affiliation refinements never counted as independent routes; no national-absence inference. B149 adds one BermudaD3 for unresolved cover2025/executive-summary2026 edition conflict.

B144/B146–B154 inspected substantive original sources, retrieving each shared work once. Preserve original author/coissuer, government, academic publisher, journal-country, host, funding and population roles. H is not local host authorship. Metadata, event reports, private clinics without eligible organizational identity, passing risk variables and HTTP success were not qualified. No copyrighted PDF bodies, connector account metadata or authenticated download credentials exported.

Latest B153/B154 advances: actual Korean KDA2025/KSH2026 originals; NHF coauthored Bangladesh lipid analysis with primary NLM England journal country; rendered Vanuatu programme figure; NHAM2023 lipid guideline with own original history/objects/seat and exact publisher imprint; MSH-hosted clinical poster abstract; SFR2026 first-party gout review. NHAM is one genuine newly indexed professional association; self-reported registration is not legal certification. Vanuatu figure20.2% high-BP attendance is not diagnosed hypertension, national prevalence or intervention efficacy. French review of209-person Norwegian cohort is not original French patient research. Malaysian2019 glucose-drug case guide did not qualify missing lipid/HTN cells. Sri Lankan private rheumatology.lk site was not attributed to rheumatology.org.lk college.

Independent review: RSSDI threshold conflict, Spain sodium units, Myanmar literal HbA1c70% target, Bermuda edition dates, Nepal age criteria, Hungarian undated BP targets, Colombian disease/absolute outcome/blame wording, Korean version chronology, HFE/lactase/ancestry generalizations, genetic PRS transfer, retrospective/poster definitions/denominators, population representation, sponsor/conflict and rights restrictions. See exact B149–B154 review-requirement JSON, all research_lead_only. Qualification does not approve those claims.

Validation: unchanged native Node PASS,zero errors;9611 supplemental checks PASS. Initial five missing foreign-country links fixed with six additive provenance rows. B153/B154 changed-record checks passed; final full checks repeated only after those new changes. Historical rows and10community/8cross-border safeguards preserved. Changes exclusively under TeamB, periodic recoverable commits, no force push.

Continue:57 linked originals first, then953 unlinked depth cases using existing receipts/primary leads, followed by21 identity gaps and five issuer questions where a genuine new original can help. This is not a blanket human-only backlog or research completion declaration. Do not repeat1736 first-pass discovery or prior511-source audit, re-query zero-AFF cases just to inflate depth, or retry exhausted locations without a new lead. B153/B154 caches and exact receipts are locally available; source-specific failed routes and unqualified leads are explicit. Read rolling PROGRESS_20261118.md, runs/20261119_final_reconciliation.json and data/consolidation_metrics.json.
