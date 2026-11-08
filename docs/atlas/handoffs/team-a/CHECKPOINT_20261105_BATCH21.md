# Team A — COMPLETE STANDALONE Batch 21 GitHub checkpoint (2026-11-05)

**Live repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Existing OPEN DRAFT PR #68; DO NOT MERGE:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Research branch:** `research/atlas-team-a-20261104`
**Exact independently QA-checked Batch 21 DATA SHA:** [`7fca741cdf7f705d572f907d342153269750b456`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/7fca741cdf7f705d572f907d342153269750b456)
**Prior Batch 20 fully standalone docs HEAD:** `4072a969586aa7ac49e55230ae38acb9bd44db4b`; Batch 21 documentation follows data commit. **Re-resolve LIVE HEAD** on every resume.
**Previous complete research backup:** [Batch 20 checkpoint](CHECKPOINT_20261105_BATCH20.md); earlier batches [Batch 19](CHECKPOINT_20261105_BATCH19.md) and older files; [current continuation](CONTINUE.md).
**Original full mission / acceptance:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on `research/atlas-five-team-handoff-prompts-2026-11-04`.
**Dated geographical master:** United Nations Statistics Division M49 https://unstats.un.org/unsd/methodology/m49/overview/ locally archived as `M49_OFFICIAL_SNAPSHOT_20261105.csv`.

## Mission and absolute scope restrictions

Build a full **governmental and statutory national/territorial health-authority directory** for all **248 UN M49 country/area records**. The 248 rows are geographic skeletons, **not verified ministries**, membership assertions, sovereign health competence, or clinical guidance. Identify in original languages the responsible national/regional/territorial authorities for public health, policy, medical regulation, surveillance and delegated services; map separate governmental institutes and internal organizational units with evidence-backed relationship types. Every official body requires issuer, source URL, language, checked date, verified state, jurisdiction and explicit law/translation/rename caveats. Avoid treating WHO presence as a local Ministry. Significant renames, disputed and devolved systems require **two independent actually distinct official issuers and preferably full current enacted legal instruments**; independent government webpages repeating the same act are not two independent laws. Do not convert draft laws to effective statutes. Never invent a cross-area parent M49 relation; no patient, genomic or ethnicity-derived clinical recommendations.

**Only edit files below `docs/atlas/handoffs/team-a/` on this research branch.** Do not touch `main`, website/calculator, medical risk/clinical guidance, other teams' research, confidential patient material. **Keep PR #68 OPEN DRAFT, UNMERGED.** Preserve all previous source failures, historical/modern distinctions, and prior country data.

## Exact Batch 21 independently re-fetched DATA SHA metrics

| Field | Verified exact result |
|---|---:|
| Official dated M49 geography matched per row M49/ISO2/ISO3/name/region/subregion | **248 / 248** |
| Principal government health authority identities located (not all legal remits fully certified) | **136 / 248** |
| Explicit unresolved principal authorities `UNKNOWN_REVIEW_NEEDED` | **112 / 248** |
| Distinct government health bodies | **191** |
| Citation-supported within-same-M49 organizational relationships | **44** |
| Unique dated source issuer/provenance checks, including limitations | **300** |
| Synced country-review coverage rows | **248** |
| Unsupported cross-area `parent_country_m49` assignments | **0** |

**Batch 21 delta:** +4 official-source principal areas **703 Slovakia, 704 Viet Nam, 705 Slovenia, 716 Zimbabwe**; +2 legally listed Vietnamese central Ministry internal departments (`gov-704-002` and `gov-704-003`), +2 enacted ministerial unit-listing edges, +12 provenance rows. Previous Batch 20 was 132 identified/116 unknown, 185 bodies/42 links/288 provenance, official geography 248; original sources unchanged.

## New official-source findings and critical limitations — checked November 5, 2026

### 703 Slovakia — official central ministry and current law version

**`gov-703-001`: original `Ministerstvo zdravotníctva Slovenskej republiky`**, reviewer English **Ministry of Health of the Slovak Republic**. Independent official governmental issuer evidence: [Slov-Lex Act 575/2001 consolidated time-version effective July 1 2026, §19](https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2001/575/20260701) expressly lists central powers (health care, public health protection, public insurance, professional education, medicinal springs and selected pricing), and [Government Office independent institution directory](https://www.vlada.gov.sk/kontakty/adresar-institucii/) identifies the health ministry. [Government cabinet roster](https://www.vlada.gov.sk/vlada-sr/clenovia-vlady/) includes both current and historical roleholders; it **must not be interpreted as all concurrently appointed**. **Slov-Lex HTML explicitly labels itself informative; the legally binding version is in PDF, not separately examined**. Do not claim authentic PDF audit or full provider/insurer/autonomous agency powers. Original Slovak language used; no effective ministry foundation date inferred from law's 2026 consolidation. Source IDs `SVK-SLOVLEX-575-2026-B21`, `SVK-GOV-ADDR-B21`, `SVK-GOV-MEMBERS-B21`.

### 704 Viet Nam — enacted government decree with date, and two nonautonomous ministry units

**`gov-704-001`: `Bộ Y tế`**, reviewer English **Ministry of Health**, primary government source [full original Vietnamese text of Decree 313/2026/NĐ-CP](https://xaydungchinhsach.chinhphu.vn/nghi-dinh-so-313-2026-nd-cp-quy-dinh-chuc-nang-nhiem-vu-quyen-han-va-co-cau-to-chuc-cua-bo-y-te-119260808163620891.htm), issued **August 8, 2026**, **effective August 18, 2026**. Articles 1–2 establish listed central state healthcare, disease prevention, health insurance, medicines, food safety and added welfare competences; Article 3 sets ministry organization. Article 4 **supersedes Decree 42/2025/NĐ-CP**; never treat 2025 organic decree as the current sole authority. [Government decree registry](https://chinhphu.vn/?docid=219136&pageid=27160) confirms number, dates, title and signed-PDF attachment (attachment **metadata only**, PDF **not opened**); these two governmental sources refer to the **same enacted decree**, not two independent legal acts. [Ministry subdomain own 19-unit list](https://vnpa.moh.gov.vn/co-cau-to-chuc-cua-bo-y-te/) is a **separate issuer** corroborating the same Article 3 organizational units.

**`gov-704-002` original `Cục Phòng bệnh`**, reviewer English *Department of Disease Prevention* (Article 3 item 14); **`gov-704-003` original `Cục Quản lý Dược`**, reviewer English *Drug Administration* (Article 3 item 9). These are **internal government ministry administrative units**, not unverified separate statutory autonomous agencies. Two `ENACTED_DECREE_313_2026_ARTICLE3_MINISTRY_UNIT` relationships connect Ministry to them, effective **August 18, 2026**; these relationships only prove government decree's unit listing, not all delegated pharmaceutical or public health surveillance powers. Still review 2025 Decree 148 on decentralization, current provinces/communes and specific post-2026 detailed unit functions, and inspect signed decree PDF when executable. Source IDs `VNM-GOV-DEC313-TEXT-B21`, `VNM-GOV-DEC313-REG-B21`, `VNM-MOH-UNITS-B21`.

### 705 Slovenia — 2026 enacted government portfolio vs proposed access bill

**`gov-705-001` original `Ministrstvo za zdravje`**, reviewer English **Ministry of Health**. [Current official Slovenian Ministry About Us](https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-zdravje/o-ministrstvu/) describes national health care, disease prevention, public-health protection and financing. A distinct central-government legal-policy publication [May 13, 2026 Government Act amendment summary](https://www.gov.si/novice/2026-05-13-delovna-podrocja-ministrstev-po-novem-zakonu-o-vladi/) says **ZVRS-K adopted April 29 and entered force May 8, 2026**, and explicitly retains the Ministry of Health. **Both are GOV.SI publishing platform; this is not necessarily independent legal issuer corroboration**; examine actual enacted statute/ZDU-1P before full statutory signoff. [Current ministry home](https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-zdravje/) describes an **October 30, 2026 proposal** for improved healthcare access/wait times **under public consultation**, NOT an enacted law. Separate National Public Health Institute, insurance funds, municipal responsibilities remain unmapped. Source IDs `SVN-MOH-ABOUT-B21`, `SVN-GOV-ZVRSK-B21`, `SVN-MOH-PROPOSED-B21`.

### 716 Zimbabwe — Ministry of Health and Child Care

**`gov-716-001`: Ministry of Health and Child Care** (original English). Official [MOHCC homepage](https://www.mohcc.gov.zw/) and [About Us](https://www.mohcc.gov.zw/?page_id=7333) describe health policy, standards, maternal/child care, disease surveillance and interagency coordination. Independently, [Parliament of Zimbabwe Who's Who](https://www.parlzim.gov.zw/whos-who/) lists this government health ministry; separately [Zimbabwe Embassy Washington cabinet directory](https://zimembassydc.org/government/) lists its Health and Child Care portfolio. Cabinet directory statements **are institutional identity checks**, not enacted legal delegated powers. MOHCC About Us may be older than 2026; current organic powers, provincial/district authorities, independent agencies and professional regulations remain pending. No unsupported provincial parent M49 link or organization edge inferred. Source IDs `ZWE-MOHCC-ABOUT-B21`, `ZWE-PARL-CABINET-B21`, `ZWE-EMB-GOV-B21`.

## Independent immutable post-data-commit structural audit, scope and legal limits

After DATA commit **`7fca741cdf7f705d572f907d342153269750b456`**, all **six** CSVs were independently re-fetched from exact GitHub SHA (not evaluated only from in-memory writes): five normalized Team A datasets + unchanged official UN M49 snapshot. Quote-aware CSV parser validated escaped double quotes, every row's expected width and uniqueness; per-area M49/ISO2/ISO3/UN name/region/subregion exact match for **248** rows (Africa60, Americas57, Asia50, Europe51, Oceania29 and Antarctica unassigned1); identified country-to-body same-area reference integrity **136**, unknown **112** have no body ID; 191 unique government bodies and required provenance fields (local names or explicit pending), 44 same-area linked cited relationships, 300 unique issuer/language/date/HTTPS/verification-source checks, 248 matching coverage statuses; **46** sensitive and high-risk geographic/agency sentinel rows checked, including B20 and B21, unknown Caribbean Netherlands 535 retained and UN-excluded Taiwan 158 absent; zero unsupported cross-area parent assignments. Exact GitHub comparison between Batch 20 documentation HEAD and Batch 21 DATA SHA changes **ONLY** the five Team A data files. GitHub PR still open DRAFT/unmerged at QA.

**PASS STRUCTURAL ONLY.** Python `python docs/atlas/handoffs/team-a/validate.py` **NOT RUN** because container GitHub remote `git ls-remote` failed `Could not resolve host: github.com`. An independent quote-aware in-connector structural readback is **not equivalent** to execution of repository's Python script or full jurisdiction/legal checks. Slov-Lex binding PDF and Viet Nam signed decree PDF not opened; full enacted statutes for all 136 identified areas not certified. Directory **not usable for medical or patient-facing guidance**.

## Remaining acceptance and next research queue

**112/248 principal government health authority identities unresolved**, not an absence. High-risk 010 Antarctica, **074 Bouvet, 086 BIOT, 104 Myanmar de facto/recognized competing entities, 112 Belarus, 192 Cuba, 226 Equatorial Guinea shifting ministries and proposed agency transfers, 239 South Georgia and South Sandwich, 260 French Southern Territories, 275 State of Palestine, 334 Heard/McDonald and 535 Caribbean Netherlands**. Further ascending unknown after B21 include **706 Somalia, 728 South Sudan, 729 Sudan, 732 Western Sahara, 740 Suriname, 744 Svalbard/Jan Mayen, 748 Eswatini**, but legal high-risk and existing law work also important. Preserve all Batch 1–20 caveats: new Senegal one decree duplicated in Presidency and Primature, Serbia regional/contested powers, Seychelles future Dec1 personnel statement and Health Care Agency vs Department, Sierra Leone old Health and Sanitation webpage; Saint Lucia ministry rename/old slug, San Marino ISS 2024 legal index not full act, Saudi Arabic/English SAME issuer, Qatar food safety transfer STARTED not finished, Comoros site template/placeholder, Faroes/Gabon/Hungary proposed laws not enacted, mainland/external territory delegations unknown, Bosnia cantons/Brčko, regional/municipal services and independent legal health institutions still incomplete. **No inferred cross-M49 parent keys.**

## Complete standalone recovery procedure

1. Check LIVE PR #68 is still draft/open/unmerged and resolve current `research/atlas-team-a-20261104` SHA. Read this entire checkpoint, latest `CONTINUE.md`, `README.md`, `STATUS.md`, `QA_REPORT.md`, `GAPS.md`, `CHANGELOG.md`, all five normalized data CSVs, `PROVENANCE.csv`, `M49_OFFICIAL_SNAPSHOT_20261105.csv`; the original research Team A acceptance contract on the prompt branch. **Do not rely on earlier historical figures**.
2. Verify sources in original languages from government, gazette, legislative/executive competent issuers. Distinguish current enacted from indexed/future/proposed/old ministry site labels and independent issuer vs same act republished. Do not guess legal hierarchy or M49 parent country; keep unknown explicit.
3. Commit a manageable source-backed *data-only* batch to existing Team A branch; independently re-fetch exact immutable data SHA and validate quote-aware M49 cross-file integrity, ≥10 sensitive territorial cases. Run repository Python `validate.py` in a real executable checkout when available, else explicitly label **NOT RUN**. After QA update top blocks of current documents and save a **new full standalone checkpoint**. Keep PR DRAFT and unmerged; no public site or other-team changes.
4. Report exact latest documentation branch SHA, latest audited immutable data SHA, coverage/legal/QA caveats, PR URL and the **identical continuation prompt below**.

## Identical next-run prompt

Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
