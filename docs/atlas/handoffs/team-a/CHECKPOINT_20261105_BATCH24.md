# Research Team A — COMPLETE standalone Batch24 GitHub checkpoint (2026-11-05)

**Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
**Research branch:** `research/atlas-team-a-20261104`
**OPEN DRAFT PR #68, DO NOT MERGE/READY:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68
**Independently audited DATA commit:** `68a7445f111ee0800402d10960d176d8beae82e9` — https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/68a7445f111ee0800402d10960d176d8beae82e9
**Documentation/this file SHA:** a subsequent GitHub commit (resolve live branch PR HEAD; do not assume DATA SHA is final HEAD).
**Original acceptance contract:** `docs/atlas/research-team-prompts/TEAM_A_GOVERNMENT_CENSUS.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`.
**Archived 2026-11-05 official M49 geographic reference:** `M49_OFFICIAL_SNAPSHOT_20261105.csv`, https://unstats.un.org/unsd/methodology/m49/overview/.
**Complete preceding history:** [Batch23](CHECKPOINT_20261105_BATCH23.md), [Batch22](CHECKPOINT_20261105_BATCH22.md), previous batches preserved, `STATUS.md`, `CHANGELOG.md`, `PROVENANCE.csv`. Preserve all earlier caveats and negative source retrievals.

## Mission, authority limits and strict file boundaries

Government/statutory public-health authority atlas for **all 248** official UN M49 country-and-area geographic rows (including nonsovereign, autonomous, contested, disputed, small/no-resident). Geographic record != verified ministry. Principal government identity != current *enacted full statutory legal competence*. For each M49 area find own original-language governmental ministry/department, actual legal/delegated policy, public health, medical regulation, disease surveillance, clinical policy remit and separate governmental health research institutes/regulators, recognizing federal, state, provincial, municipal and territorial powers. Record precise original government issuer, source language, date checked, exact source URL, geographic scope, conflict/renames, verification state and translation caveats. WHO offices are not domestic ministries. Renamed, delegated or disputed systems require ideally two **independent** governmental/legislative sources and authentic enacted/current texts, NOT duplicate pages from same ministry. Never turn consultation drafts or proposals into enacted laws. Never infer unsupported `parent_country_m49` links.

**Only edit `docs/atlas/handoffs/team-a/` on `research/atlas-team-a-20261104`.** DO NOT modify default main, live website, calculator, clinical/genetic/ancestry claims, patient-facing advice, other teams, medical private data, or merge/change PR draft state. All older records and old source caveats retained.

## Exact dataset after Batch24

| Metric | Exact checked count |
|---|---:|
| Full UN M49 2026-11-05 official geography entries and aligned ledger | **248 / 248** |
| Principal governmental health authority identities located (NOT certified legal mandates) | **156 / 248 (62.9%)** |
| Principal health identities explicitly `UNKNOWN_REVIEW_NEEDED` | **92 / 248 (37.1%)** |
| Governmental body records | **211** |
| Source-limited in-area organizational relations | **44** |
| Unique issuer/language/date/provenance entries (including unsuccessful/limited/historical) | **353** |
| Coverage ledger | **248** |
| Unsupported inferred parent country M49 | **0** |

Before Batch24: **152 located /96 unknown, 207 bodies, 44 relations, 341 provenance**, all in [Batch23 checkpoint](CHECKPOINT_20261105_BATCH23.md). New Batch24 identifies **Malaysia 458, Morocco 504, Oman 512, Nigeria 566**, adds four principal body rows and **12** original-government issuer checks, **zero** unsupported relationships or parent M49. Only four normalized CSV files changed in this DATA commit: `data/countries.csv`, `data/government_health_bodies.csv`, `data/country_coverage.csv`, and `PROVENANCE.csv`. All prior values/negative audit history preserved in files.

## New ministry identities and all exact sources (checked 2026-11-05)

### M49 458 — Malaysia (`gov-458-001`)

**Current identity source:** https://www.moh.gov.my/info-korporat/maklumat-bahagian/bahagian-perkembangan-perubatan

**Mandate/verification caveat:** Official source-backed identity only: KKM division duties updated March 2026 and current October organization index; full linked organization PDF and enacted federal/state health-law allocation not independently reviewed. All ministry sources same issuer.

**Government source ledger (issuer / source language / check date / scope / evidence state):**

- `MYS-MOH-DIV2026-B24`: Malaysia Ministry of Health (KKM); ms; 2026-11-05; Malaysia federal ministry clinical services planning; `OFFICIAL_2026_MINISTRY_DIVISION_FUNCTIONS`. [Medical Development Division roles in Malay](https://www.moh.gov.my/info-korporat/maklumat-bahagian/bahagian-perkembangan-perubatan). **Limitation:** March 2026 update; department website not authenticated current organic law.
- `MYS-MOH-NEWS2026-B24`: Malaysia Ministry of Health (KKM); ms; 2026-11-05; Malaysia federal ministry 2026 operations; `OFFICIAL_MINISTRY_2026_IDENTITY`. [2026 KKM public announcements](https://www.moh.gov.my/pengumuman-terkini/tahun-2026). **Limitation:** Same issuer as division page; notices do not establish federal-state mandate.
- `MYS-MOH-ORG2026-B24`: Malaysia Ministry of Health (KKM); ms; 2026-11-05; Malaysia federal ministry structure; `OFFICIAL_CURRENT_ORGANIZATION_INDEX`. [Organization chart index updated 30 October 2026](https://www.moh.gov.my/info-korporat/carta-organisasi). **Limitation:** Linked organization PDF not examined; agency autonomy and state/local roles pending.

### M49 504 — Morocco (`gov-504-001`)

**Current identity source:** https://www.sante.gov.ma/Pages/Accueil.aspx

**Mandate/verification caveat:** Official source-backed identity only: Current October 2026 minister change documented; ministry 1994 original health-decree mission webpage is historic and NOT demonstrated current enacted social-protection or territorial remit. Other ministry pages have stale incumbent names.

**Government source ledger (issuer / source language / check date / scope / evidence state):**

- `MAR-MOH-HOME2026-B24`: Morocco Ministry of Health and Social Protection; fr; 2026-11-05; Morocco central health and social protection; `OFFICIAL_CURRENT_MINISTRY_IDENTITY`. [Current French ministry identity and portfolio](https://www.sante.gov.ma/Pages/Accueil.aspx). **Limitation:** Current portfolio naming, not authenticated contemporary legal merger act.
- `MAR-MOH-OCT2026-B24`: Morocco Ministry of Health and Social Protection; fr; 2026-11-05; Morocco current ministerial executive; `OFFICIAL_2026_CHANGE_OF_MINISTER`. [17 October 2026 ministerial handover and health reforms](https://www.sante.gov.ma/Pages/infos_actualites.aspx). **Limitation:** Same ministry issuer, historical minister/personnel on older page differs; not legal act.
- `MAR-MOH-HIST1994-B24`: Morocco Ministry of Health and Social Protection; fr; 2026-11-05; Morocco historically Ministry of Public Health; `HISTORICAL_LEGAL_TEXT_NOT_CURRENT_CONSOLIDATION`. [1994 Decree 2-94-285 described in historic missions text](https://www.sante.gov.ma/Ministere/Mission/Pages/default.aspx). **Limitation:** Historical decree not independently authenticated current post-social-protection portfolio and health territorial group delegated duties.

### M49 512 — Oman (`gov-512-001`)

**Current identity source:** https://www.moh.gov.om/ar/%D8%B9%D9%86-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A9/%D8%B9%D9%86-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A9/

**Mandate/verification caveat:** Official source-backed identity only: Arabic ministry About describes policy and current organizational functions, English pages and Nov 2026 ministry news confirm active institution; same issuing ministry, not independent enacted decree. Governorate and state agency delegations and original Royal Decree remain unverified.

**Government source ledger (issuer / source language / check date / scope / evidence state):**

- `OMN-MOH-AR-B24`: Sultanate of Oman Ministry of Health; ar; 2026-11-05; Oman national and governorate directorates; `OFFICIAL_MINISTRY_ORIGINAL_LANGUAGE_MANDATE_NARRATIVE`. [Arabic About and ministry responsibilities](https://www.moh.gov.om/ar/%D8%B9%D9%86-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A9/%D8%B9%D9%86-%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%A9/). **Limitation:** Ministry description is not an independently certified current royal decree or detailed local powers.
- `OMN-MOH-EN-B24`: Sultanate of Oman Ministry of Health; en; 2026-11-05; Oman national ministry; `OFFICIAL_SAME_ISSUER_ENGLISH_CROSSCHECK`. [English ministry competencies](https://www.moh.gov.om/en/ministry/about-moh/). **Limitation:** Same institution as Arabic page; not independent second legal source.
- `OMN-MOH-2026-B24`: Sultanate of Oman Ministry of Health; en; 2026-11-05; Oman national ministry; `OFFICIAL_2026_MINISTRY_OPERATION`. [November 2026 ministry homepage activity](https://www.moh.gov.om/en/). **Limitation:** Nov1 health data platform announcement, not a legislative delegation.

### M49 566 — Nigeria (`gov-566-001`)

**Current identity source:** https://health.gov.ng/about-us/

**Mandate/verification caveat:** Official source-backed identity only: Federal Ministry About and FAQ confirm health/social welfare naming, but both share same ministry issuer. No independent enacted rename or current 36-state/FCT/local-government health competence audit.

**Government source ledger (issuer / source language / check date / scope / evidence state):**

- `NGA-FMOH-ABOUT-B24`: Nigeria Federal Ministry of Health and Social Welfare; en; 2026-11-05; Nigeria federal public health and social welfare; `OFFICIAL_MINISTRY_IDENTITY_AND_MANDATE_NARRATIVE`. [About Us, mandate and programme agenda](https://health.gov.ng/about-us/). **Limitation:** Current statutory mandate and state/local delegation not corroborated by independent enacted legal instrument.
- `NGA-FMOH-FAQ-B24`: Nigeria Federal Ministry of Health and Social Welfare; en; 2026-11-05; Nigeria federal health programmes; `OFFICIAL_SAME_ISSUER_POLICY_DESCRIPTION`. [FAQ national health functions](https://health.gov.ng/faqs/). **Limitation:** Same ministry issuer, not independent legal corroboration.
- `NGA-FMOH-HOME-B24`: Nigeria Federal Ministry of Health and Social Welfare; en; 2026-11-05; Nigeria national health and welfare executive ministry; `OFFICIAL_MINISTRY_IDENTITY_CURRENT`. [Current ministry public portal](https://health.gov.ng/). **Limitation:** Website identity only, 2026 legal competence, rename instruments and devolved powers pending.


## Independently read-back validated immutable DATA SHA

After successfully committing `68a7445f111ee0800402d10960d176d8beae82e9`, independently re-fetched all **six CSVs at the exact immutable SHA**, quote-aware parsed all fields including embedded quoted commas, checked 248 code/name/ISO2/ISO3/UN region/subregion cells against dated master and 248 unique leading-zero preserved codes; region totals Africa 60, Americas 57, Asia 50, Europe 51, Oceania 29, Antarctica unassigned 1. Checked **156** located sources with same-M49 principal body IDs and dates, **92** explicit unknowns with no authority ID; **211** unique government body IDs and required issuer/URL/language/date/status; **44** source-bounded, same-area, nonself, valid body-relationship references; **353** unique source IDs with HTTPS/issuer/source language/check date/geographic remit/verification state; **248** coverage rows with matching status; **37** sensitive special-status/island/contested/territory/federal sentinels including Batch23 and current Batch24. No speculative nonblank `parent_country_m49`. Compared preceding docs HEAD `f5947f258ccc743acadda3cc38c390241cf4ab00` to DATA commit and verified only the four named Team A research CSVs were changed. **PASS STRUCTURAL.**

**Python repository `python docs/atlas/handoffs/team-a/validate.py`: NOT RUN**, because local execution container `git ls-remote` fails resolving `github.com`; connector-based structural JavaScript audit is not a Python validation pass. Source-link metadata presence is not independently authenticated current statute, current exact legal mandate, signed source text, independent issuer count, URL uptime over all 353 sources, territorial effective control, patient safety, or clinical certification.

## Complete exact 92-area unknown queue

`010` Antarctica; `074` Bouvet Island; `086` British Indian Ocean Territory; `104` Myanmar; `112` Belarus; `192` Cuba; `226` Equatorial Guinea; `239` South Georgia and the South Sandwich Islands; `260` French Southern Territories; `275` State of Palestine; `312` Guadeloupe; `334` Heard Island and McDonald Islands; `336` Holy See; `364` Iran (Islamic Republic of); `368` Iraq; `384` Côte d’Ivoire; `408` Democratic People's Republic of Korea; `414` Kuwait; `417` Kyrgyzstan; `418` Lao People's Democratic Republic; `422` Lebanon; `426` Lesotho; `430` Liberia; `434` Libya; `438` Liechtenstein; `446` China, Macao Special Administrative Region; `450` Madagascar; `454` Malawi; `466` Mali; `474` Martinique; `478` Mauritania; `480` Mauritius; `492` Monaco; `496` Mongolia; `498` Republic of Moldova; `499` Montenegro; `508` Mozambique; `516` Namibia; `520` Naoero; `524` Nepal; `528` Netherlands (Kingdom of the); `531` Curaçao; `533` Aruba; `534` Sint Maarten (Dutch part); `535` Bonaire, Sint Eustatius and Saba; `540` New Caledonia; `548` Vanuatu; `558` Nicaragua; `562` Niger; `570` Niue; `574` Norfolk Island; `580` Northern Mariana Islands; `581` United States Minor Outlying Islands; `583` Micronesia (Federated States of); `584` Marshall Islands; `585` Palau; `586` Pakistan; `591` Panama; `598` Papua New Guinea; `600` Paraguay; `612` Pitcairn; `624` Guinea-Bissau; `638` Réunion; `643` Russian Federation; `652` Saint Barthélemy; `654` Saint Helena; `659` Saint Kitts and Nevis; `660` Anguilla; `663` Saint Martin (French Part); `666` Saint Pierre and Miquelon; `670` Saint Vincent and the Grenadines; `678` Sao Tome and Principe; `706` Somalia; `729` Sudan; `732` Western Sahara; `744` Svalbard and Jan Mayen Islands; `760` Syrian Arab Republic; `772` Tokelau; `788` Tunisia; `795` Turkmenistan; `796` Turks and Caicos Islands; `798` Tuvalu; `831` Guernsey; `832` Jersey; `833` Isle of Man; `850` United States Virgin Islands; `854` Burkina Faso; `860` Uzbekistan; `862` Venezuela (Bolivarian Republic of); `876` Wallis and Futuna Islands; `882` Samoa; `887` Yemen

### High-risk research next

- Identity unknowns: Antarctica 010, Bouvet 074, BIOT 086, Myanmar 104 contested/effective-control institutions, Belarus 112, Cuba 192, Equatorial Guinea 226 conflicting cabinet, South Georgia 239, French Southern Territories 260, State of Palestine 275, Heard/McDonald 334, Caribbean Netherlands 535, Somalia 706, Sudan 729, Western Sahara 732, then all other 92 source/identity gaps in source-priority/M49 order.
- Statutory and subnational research for the **new four**: Malaysian federal-state and separate regulators/councils (KKM pages same issuer); Morocco post-2022 Health/Social Protection legal remit versus 1994 historic health decree and territorial health group powers (minister replaced Oct 2026, avoid stale incumbent); Oman Arabic policy source and authentic Royal Decrees/current laws + governorate competences (English is same Ministry issuer); Nigeria federal renamed health/social portfolio statutory origin and state/FCT/local/agency remit (About and FAQ same Ministry). No new health agency relationship should be asserted without exact organization/legal evidence.
- Enacted legal jurisdictions and independent-source checks remain unfinished for most of **156** identified bodies. Distinguish effective control, policy leadership and owned/autonomous public-health institutes and regulators. Do not treat country names or ministry renames as sufficient evidence. All earlier Batch23 legal caveats remain, including Tobago/THA, UAE local emirate regulators, Ukraine occupation, Turkey 2018 decree, Tanzania Zanzibar and Zambia prior source timeout. Preserve Batch22 and earlier: Togo 2023 proposed commune law NOT enacted, Vietnam 313/2026 enacted vs unreviewed signed PDF, Slovenia proposed bill, Qatar transfer started not complete, Tajik ministry spam contamination, Morocco historical 1994 law, etc. Predecessor checkpoints have all source details and unresolved status.
- Original assignment is **UNFINISHED**, not approved medical/clinical evidence or public site input; 100% geographic entries does not mean health statutory authority completion.

## Safe resumption protocol

1. First read this full checkpoint, current `CONTINUE.md`, `README.md`, `STATUS.md`, `GAPS.md`, `QA_REPORT.md`, `CHANGELOG.md`, all five normalized CSVs, dated official M49 master, `PROVENANCE.csv`, source history Batches23/22, and original Team A acceptance contract. Re-fetch **live** PR #68 HEAD/draft/branch, account for any simultaneous other AI changes, no duplicate integrations.
2. Research official ministries and independently issued current original-language government gazettes, judiciary/parliament statutes, signed authentic instruments for locality/territory/renames. Preserve failed lookups and competing claims. Clearly label candidate, historic, draft/proposed and enacted; do not invent parent relationships.
3. Continue in modest source-backed **Team A-only** batches; commit, independently re-fetch immutable exact DATA SHA six CSVs and verify M49/reference/source/territory constraints; run Python validator if proper executable checkout exists, otherwise state NOT RUN. Persist a fully standalone new checkpoint, update all handoff docs and PR summary. Always leave PR **OPEN DRAFT/unmerged** and website/main/clinical content untouched.
4. Report exact latest GitHub HEAD, exact data SHA, counts, source caveats, unfinished statutory acceptance, exact resumable prompt below.

## Exact original continuation prompt — verbatim

```text
Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read `docs/atlas/handoffs/team-a/CONTINUE.md` on branch `research/atlas-team-a-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
