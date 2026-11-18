# Team D — standalone research checkpoint, Batch 20 (2026-11-05)

## Live workstream and recovery

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70
- Working branch: `research/atlas-team-d-20261104`
- Starting verified Batch 19 branch head: `400fa1f7753a20c46f9cc3ee68f91a132e342c94`.
- New batch data commit: `85d6e1eb25cbf72457e0e3b4fda6d225d580480a`.
- Primary-source ledger commit: `b1809f88403e0896f822a1a1061622ffb13dc2f0`.
- Revised validator commit: `406846e114e5e40e3efd815b7b43bf80fdc00715`.
- This checkpoint and subsequent documentation commits move the live branch tip. **Always re-fetch live PR metadata and branch SHA.** PR must stay **OPEN, DRAFT, UNMERGED**.
- **Write exclusively under `docs/atlas/handoffs/team-d/`.** No main, public website or calculator, Team A/B/C, clinical rules, medical recommendations, merge or publication changes.

## Batch 20 new, machine-readable source checks

**17 individually source-qualified first-party WHO/PAHO corroboration rows** `TD-OFFICE-CORROBORATION-030` through `046` in `data/who_office_independent_checks_2026.csv`, matched against the remaining 17 WHO country-office dashboard labels whose latest self-reported surveys were **September 2024**, not April 2026. **17 previously unused primary-source URLs** `TD-SRC-171` through `187` appended to `PROVENANCE.csv`. PAHO is the WHO Regional Office for the Americas, but office activity and organizational contacts do not constitute a renewed country-office survey.

| Record | M49/exception | Survey label target | Source evidence | First-party source |
| --- | --- | --- | --- | --- |
| 030 | `not_verified` | Barbados/Eastern Caribbean WHO MCO | 2026-06-25 PAHO leadership handover at Barbados office | [PAHO](https://www.paho.org/en/news/25-6-2026-leadership-transition-formalized-pahowho-office-barbados-and-eastern-caribbean) |
| 031 | 068 | Bolivia | 2026-10-22 PAHO representative/technical team engagement | [PAHO Spanish](https://www.paho.org/es/noticias/22-10-2026-paz-plantea-fortalecer-redes-salud-rectoria-sanitaria-para-mejorar-atencion-0) |
| 032 | 076 | Brazil | 2026-08-01 PAHO representative at separate BIREME agreement | [PAHO](https://www.paho.org/en/news/1-8-2026-brazil-and-paho-formalize-bireme-headquarters-agreement) |
| 033 | 170 | Colombia | 2026-08-20 PAHO representative emergency response statement | [PAHO](https://www.paho.org/en/news/20-8-2026-pahowho-supports-colombia-health-response-enters-next-phase-following-earthquake) |
| 034 | 188 | Costa Rica | 2026-10-01 PAHO representative meeting participation | [PAHO](https://www.paho.org/en/news/1-10-2026-global-pharmacovigilance-authorities-gather-costa-rica-advance-medicines-and) |
| 035 | 218 | Ecuador | 2026-05-21 PAHO/WHO representative quoted | [PAHO](https://www.paho.org/en/news/21-5-2026-ecuador-first-country-latin-america-and-caribbean-acquire-mobile-cold-chain-vehicles) |
| 036 | 332 | Haiti | undated Port-au-Prince country-office contact | [PAHO country offices](https://www.paho.org/en/countries-and-centers) |
| 037 | 340 | Honduras | 2026-09-25 PAHO representative on health-workforce mission | [PAHO](https://www.paho.org/en/news/25-9-2026-honduras-advances-strengthening-nursing-personnel-and-health-workforce-governance) |
| 038 | 504 | Morocco | 2026-05-05 **reported MoU event**, publication day unverified | [WHO EMRO French](https://www.emro.who.int/fr/mor/morocco-news/signature-dun-memorandum-dentente-entre-loms-maroc-et-la-fondation-mohammed-vi-des-sciences-et-de-la-sante-2.html) |
| 039 | 591 | Panama | 2026-10-14 acting representative activity | [PAHO](https://www.paho.org/en/news/14-10-2026-paho-delivers-critical-supplies-strengthen-emergency-care-communities-affected) |
| 040 | 600 | Paraguay | 2026-10-27 acting representative and country-office advisor | [PAHO](https://www.paho.org/en/news/27-10-2026-paraguay-strengthens-health-surveillance-border-crossings-through-pahowho-ministry) |
| 041 | 604 | Peru | 2026-07-24 report of 22 July country-office appointment | [PAHO Spanish](https://www.paho.org/es/noticias/24-7-2026-gustavo-mery-es-nuevo-representante-opsoms-peru) |
| 042 | 643 | Russian Federation | undated Moscow WHO office description/contact; 1998 historical opening | [WHO Europe](https://www.who.int/russian-federation/about-us) |
| 043 | `not_verified` | South Pacific WHO MCO | undated Fiji-based WHO representative office and Pacific liaison scope | [WHO WPRO](https://www.who.int/westernpacific/about/how-we-work/pacific-support) |
| 044 | 776 | Tonga | undated country **liaison** office contact in Ministry of Health | [WHO Tonga](https://www.who.int/tonga/about-us) |
| 045 | 788 | Tunisia | undated WHO acting representative also assigned Libya | [WHO EMRO French](https://www.emro.who.int/fr/tun/who-representative/) |
| 046 | 862 | Venezuela | 2026-07-31 PAHO/WHO representative quoted during health response | [PAHO](https://www.paho.org/en/news/31-7-2026-venezuela-strengthens-disease-diagnostic-capacity-after-earthquakes-pahowho-support) |

**Aggregate after Batch 20:** all **46/46** September-2024 survey labels have a *separate* official-source corroboration entry: **21 with day-level 2026 evidence and 25 on undated institutional pages**. The total **44 single-area M49 codes plus two multi-country office labels** must **not** be counted as 46 M49 host offices. In particular, Barbados/Eastern Caribbean and South Pacific remain intentionally `not_verified` for an exact one-to-one M49 join, while Tonga is a liaison office, not a dedicated WHO representative office.

**These 46 checks are NOT current 2026 WHO dashboard survey attestations, proof of continuous staffing/physical operations, proof that every serviced territory has a local office, evidence of region reassignment, domestic clinical-guideline adoption or legal regulatory delegation.** Many 2026 articles document an event or representative activity somewhere in a country rather than an office address. WHO EMRO Tunisia's November 2025 appointment month is not its page publication date, and Morocco's May 5 event is not an independently verified publication date. PAHO page content was often retrievable as indexed first-party material; some direct PAHO URL fetches returned 403 and PDF facsimiles from earlier batches remain outstanding.

## Preserved, non-promoted research

- **187 unique provenance URLs**; all 17 new ones absent from the pre-batch 170-URL ledger.
- Graph unchanged: **47 nodes, 616 typed and time-qualified institutional edges**, and 20 institutional references across all seven health keys.
- Geographic inventory unchanged: **249 WHO region candidate statuses; 205 direct-current assignments, 44 `not_verified`**. Never inherit parent geographic region from an ISO/UN classification or old SIDS excerpt.
- WHO office survey table unchanged: **153 source labels = 106 April 2026 respondents + 46 retained September 2024 + 1 unavailable**. Exactly **105** April-2026 affirmative M49 office-host attestations, **144** without equivalent April direct-positive evidence (unknown, not absent), and four unmatched labels across the complete 153-row roster.
- Historical Jan 2021–Dec 2022 WHO country-presence inventory **228 observations**, historical 2019 Barbados/ECC office/service evidence and 2021 selective SIDS Annex remain explicitly separate from present assignment or operation.
- Existing 53 WHO Europe SCI time snapshots, 44 PAHO formal governance categories, 21 Caribbean service observations, 34 EMA agency identity candidates, 24 HEARTS catalog titles, five aggregate programme records and 19 regulator-cooperation observations unchanged.

## Validation and readback

- The **checked-in validator source was updated** to assert 46 separate old-survey independent checks, 187 unique provenance URLs, 21 day-level/25 undated check records, and two intentionally unjoined MCOs. Batch 18 and 19 cohort-specific constraints remain bounded by their original row IDs.
- After sequential writes, GitHub direct readback verified the full new independent-check CSV (blob `38078506dc0712950ff758ac8253d1ff54f1b19e`), provenance CSV (blob `3bb2b08164c3d42d1127e42c42a0588f78b3423e`), and revised validator (blob `f95be66b94998788b65dfa0317dc80fb982ec5e4`); the unchanged WHO survey roster was also re-fetched (blob `6c785c28535a6eb80d3f487449f86d4b7e962ba5`).
- **Targeted read-only cross-file audit PASS, 18 checks:** CSV widths, 46 unique IDs/URLs/labels, 187 unique provenance IDs/URLs, exact 44 M49-linked older survey codes, two original MCO labels `not_verified`, 21 day/25 undated, all check sources in provenance, 17 new IDs and 17 new source IDs, original 46/106 survey counts, 44 WHO region unknowns, and updated validator invariant strings.
- **Full checked-in `node docs/atlas/handoffs/team-d/validate.mjs` was NOT run in native Node, CI or this session's full JS shim.** An attempted 28-source connector-backed full JS replay hit the tool call limit before executing. Batch 19's previous complete read-only JavaScript shim PASS applied to the earlier 170-source/29-check state only. Structural checks are not legal, clinical or publication clearance. Run native Node in an authorized checkout; do not claim a full PASS for Batch 20 until done.

## Remaining high-priority acceptance and research gaps

1. Recheck the **clinical-operational meaning and effective period** of the 46 old-survey WHO labels, especially 25 undated corroborations, the physical accessibility of Haiti and other conflict-zone premises, cross-country WHO representatives, and direct WHO country-office contact/operation in November 2026. **The source-URL corroboration queue is complete; operational recency is not.**
2. Resolve **44 current WHO regional `not_verified` statuses** only from explicit date-appropriate WHO country/area authority. Preserve region/UN M49 distinctions, Indonesia's 2025-05-23 transfer to WPRO, the special 158 seed, disputed area statuses and U.S. pending governance.
3. Find **144 remaining current direct-positive office-host attestations** without treating missing evidence as absence. Distinguish single-country office, multi-country hub, coverage, focal point and liaison; PAHO's 13/14 Eastern Caribbean descriptions and French Saint Martin 663 vs Dutch Sint Maarten 534 remain contested or differently scoped.
4. Determine WHO Europe SCI North Macedonia exact 10–12 April 2024 accession day/instrument without treating May 2023 meeting-observer status as member status.
5. Obtain named primary instruments for remaining seven African APPM MoU signatories and 15 expressions of intent; regulators' country-specific legal remits and Egyptian EDA/UPA/Team A identity joins; current EMA NCA statutes.
6. Confirm nationally or subnationally adopted HEARTS editions, ASEAN implementing parties and programmes, seven-condition professional/scientific alliance role links, and exact Team B/C joins; avoid national clinical-adoption inference.

**Files to read first next session:** this checkpoint; `CONTINUATION_PROMPT.md`; `STATUS.md`; `GAPS.md`; `METHOD.md`; `PROVENANCE.csv`; `validate.mjs`; all `data/*.csv`; `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`. Live GitHub state overrides any hardcoded SHA in this checkpoint.

## Exact original continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
