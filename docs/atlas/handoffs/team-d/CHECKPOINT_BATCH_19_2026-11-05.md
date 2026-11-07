# Team D standalone research checkpoint — Batch 19 — 2026-11-05

## Authoritative restart and write boundaries

- Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- Draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70
- Branch: `research/atlas-team-d-20261104`
- Starting verified Batch 18 head: `580235d602f7a3e1cbbfd478ff8d6883bca995d6`.
- Batch 19 primary evidence commit: `587083c1dbaab2b7e1f4ec8ec5b6ac2180933a08`.
- Source/provenance commit: `879589fe19e322f7038f8f4674594dd507ac2b9e`.
- Batch 19 corrected checked-in validator commit: `cdba5ad40eb828728ed8a6fe41a69433d6344fe0`.
- This checkpoint and subsequent documentation commits move the live head: independently verify GitHub PR **open/draft/unmerged** and current branch SHA again. The PR was verified open, draft and unmerged immediately after the three data/validator commits.
- **Allowed writes ONLY `docs/atlas/handoffs/team-d/` on the existing branch.** Do not change main, live website/calculator, other teams' files, legal/medical guidance, clinical deployment, or merge/close the PR.
- Read `CONTINUATION_PROMPT.md`, `METHOD.md`, `GAPS.md`, `STATUS.md`, `PROVENANCE.csv`, `validate.mjs`, the `data/*.csv` files, and original `TEAM_D_INTERNATIONAL_NETWORKS.md` + `DATA_CONTRACT.md` before future edits. Preserve earlier research.

## What Batch 19 added

The 2026 WHO office-survey dashboard includes **46 retained September 2024** reports, which are *not* direct April 2026 affirmations. Batch 19 adds **10 new individually cited independent official WHO page checks**, now `TD-OFFICE-CORROBORATION-020` through `029`, to `data/who_office_independent_checks_2026.csv`. The matching **ten new unique primary-source URLs** are `TD-SRC-161` through `170` in `PROVENANCE.csv`. These records were not added as network membership graph edges or as new 2026 dashboard survey responses.

| M49 | Area | WHO source and precise evidence | Source time | Source |
|---|---|---|---|---|
| 112 | Belarus | WHO/Europe country-office contact in Minsk; source also states 1994 opening | undated page | https://www.who.int/belarus/about-us |
| 795 | Turkmenistan | WHO/Europe says Country Office organized 20–23 October joint external evaluation orientation | 2026-10-20 **event start**, publication date not verified | https://www.who.int/europe/news-room/events/item/2026/10/20/default-calendar/joint-external-evaluation-orientation-workshop-and-training-on-the-international-health-regulations-%282005%29 |
| 048 | Bahrain | WHO EMRO acting-representative biography, with February 2025 appointment claim | undated page | https://www.emro.who.int/bahrain/who-representative/index.html |
| 364 | Islamic Republic of Iran | WHO EMRO head-of-mission profile mentions April 2026 role commencement | undated page | https://www.emro.who.int/iran/who-representative/who-representative.html |
| 368 | Iraq | WHO EMRO acting-representative country profile | undated page | https://www.emro.who.int/countries/iraq/who-representative.html |
| 434 | Libya | WHO EMRO 5 May 2026 agreement news explicitly identifies WHO Representative and Head of Mission | 2026-05-05 event/report date | https://www.emro.who.int/lby/libya-news/who-and-libyas-ministry-of-health-sign-strategic-collaboration-framework-to-strengthen-the-national-health-system.html |
| 682 | Saudi Arabia | WHO EMRO biography states January 2023 appointment, not continuous physical-presence confirmation | undated page | https://www.emro.who.int/saudi-arabia/who-representative/who-representative.html |
| 706 | Somalia | WHO EMRO profile lists Mogadishu head-office and distinct Hargeisa/Nairobi satellite or liaison addresses | undated page | https://www.emro.who.int/somalia/who-representative/who-representative.html?ua=1 |
| 729 | Sudan | WHO EMRO representative office's technical-cooperation role, no verified currently operating street address | undated page | https://www.emro.who.int/sdn/who-presence/ |
| 760 | Syrian Arab Republic | WHO EMRO acting-representative profile, no verified present premises | undated page | https://www.emro.who.int/syria/who-representative/ |

### Material evidence and date limitations

- **20/29 supplementary checks use undated first-party WHO pages; nine contain a 2026 day-level source event or publication reference.** The Turkmenistan `2026-10-20` is an **event-start date**; the WHO page publication date is **unknown**. The Libya `2026-05-05` describes the reported signing event and representative, not the office address.
- The Bahrain, Iran, Iraq and Somalia WHO EMRO representative biographies/landing pages include **potentially inconsistent or non-synchronized representative names**. No present-day incumbent identity is adjudicated from this conflicting site content. For Bahrain, one biography expressly describes a representative also assigned to Kuwait: cross-country representation is not evidence of separate on-site staffing.
- Libya and Sudan source snippets were available as indexed first-party WHO content; direct page opening returned HTTP **502** during this run. Independently refetch and archive these pages before any consequential use.
- Office-address pages or mission participation do **not** establish uninterrupted office operation, legal presence, country-wide clinical guideline adoption, a new April 2026 survey, or physical premises at an event venue. All 46 September 2024 survey original dates remain unchanged.
- **These are evidence crosschecks, not proof of current office status in all ten places.** New source rows record actual source-date precision and conflict details rather than claiming current presence.

## Complete retained research state

- **Office rechecks: 29/46** old survey office labels now have source-qualified independent checks; **17** remain to investigate. The 29 checks cover unique M49 codes and unique source URLs. Eight new undated source profiles plus two day-level event/engagement reports; overall **20 undated / 9 day-level**.
- **Provenance: 170 unique source URLs**, including 10 new WHO sources. Primary-source URLs, review date 2026-11-05 and scope limitations are stored in `PROVENANCE.csv`.
- **Graph unchanged:** 47 institutional nodes, 616 source-stamped typed/date-qualified edges; 20 network-condition references spanning `diabetes`, `hypertension`, `high_chol`, `gout`, `lactose`, `celiac`, `hemochromatosis`. No national clinical adoption inferred from network membership.
- **WHO region status unchanged:** 249 geographic seed candidates; 248 official UN M49 codes plus separately retained 158 exception; 205 direct-current WHO regional assignments, 44 explicit `not_verified`; six WHO offices represented. Historical 2021 WHO SIDS Annex heading evidence (13 cases) is **not** promoted to current region assignments.
- **WHO office dashboard unchanged:** 153 labels = 106 April 2026 respondents + 46 September 2024 retained responses + 1 unavailable. Only 105 exact-M49 affirmative April 2026 country-office host attestations; 144 additional candidates have no equivalent recent direct-positive evidence, **not** a confirmed absence of office. Four multi-country or operational labels remain unjoined to one country code.
- **Historical office sources unchanged:** 228 WHO Jan 2021–Dec 2022 country presence office/multicountry coverage/focal-point observations (225 historical graph edges), 14 2019 WHO Barbados/Eastern Caribbean scope observations, 13 2021 SIDS heading observations. Do not mix historical and present-day status.
- Other retained work: 53 WHO Europe Small Countries Initiative role/time snapshots; 34 EMA national competent-authority identity candidates without agency-specific statutory-remit proof; 44 formal PAHO governance observations; 21 separate Caribbean technical-cooperation observations; 24 HEARTS pathway catalog titles; five programme aggregate observations; 19 regulator cooperation reports. No legal or clinical inference.

## Validation and GitHub persistence

1. Prewrite CSV checks: exactly 29 distinct independent-check IDs, M49 codes and source URLs; 170 unique provenance IDs/URLs; consistent 11/10 CSV column widths and referential source URL links; zero duplicate new URLs.
2. Three sequential commits above saved source rows, provenance and revised `validate.mjs` assertions. The revision **restricts historical Batch 18 range checks to IDs 010–019** before adding the Batch 19 cohort checks, so Batch 19 rows cannot invalidate the Batch 18 precise claims.
3. The **complete checked-in structural validator executed and PASSED** in an isolated read-only JavaScript filesystem/assertion shim, using the **26 small CSV files reconstructed from the existing PR #70 additions-only file patches plus the two large GitHub branch files fetched directly** (`m49_network_status.csv` and `network_memberships.csv`). The 28 inputs include 27 data CSVs plus `PROVENANCE.csv`; no other external files were invented. Outputs: 47 nodes, 616 typed edges, 249 WHO area status rows, 205 verified/44 unknown current WHO regions, 105 affirmative April hosts, 153 mixed-year survey labels, 228 historical office observations, **170** provenance URLs, and **29** old-survey check rows. Batch 18 and 17 historical assertions also PASSED.
4. **This is NOT a native `node` CLI invocation or a GitHub Actions/CI success.** Native reproducibility test still requested in a real checkout: `node docs/atlas/handoffs/team-d/validate.mjs`. Structural pass is not legal authority review, independent source-facsimile verification or clinical safety clearance.
5. GitHub direct readbacks confirmed all three new data/provenance/validator paths on the branch. `compare_commits` from Batch 18 head to the data/validator SHA found **exactly those three Team D paths**, three commits; no main, public website, or other team files touched. Check the newest head again after this documentation commit.

## Next prioritized research

1. Complete **17 remaining** old September 2024 office-survey independent checks, including multi-country office labels that deliberately lack one-to-one M49 joins. Source-date precision and stale/conflicting profiles are mandatory; do not overwrite old survey timestamps.
2. Resolve **44 current WHO region assignments** only using direct contemporary explicit WHO evidence (never statistical UN region, historical selective 2021 Annex headings, or geographic adjacency); then investigate **144** missing April-2026 direct affirmative office-host observations without converting unknown to absent.
3. Adjudicate PAHO undated Barbados/Eastern Caribbean 13-area page versus dated 2026-08-24 14-area source, explicitly retaining French Saint Martin 663 separately from Dutch Sint Maarten 534. Obtain direct WHO 2019 and 2021 PDF facsimile access after prior image 403; no inferred coverage-effective date.
4. Find WHO Europe SCI North Macedonia precise accession instrument/day during 10–12 April 2024 (2023 meeting observer vs 2024 member), original signed EDA/APPM statutory/regulator agreements and seven other named African APPM signatories, 15 reported expressions of intent, exact Team A identities and per-agency legal remits.
5. Verify actual country-specific PAHO HEARTS editions/adoptions, ASEAN programme implementing states, specific IDF and condition-linked scientific alliances across underrepresented regions, and exact Team B/C institutional joins. All need source/validity dates; all need expert review before publication.

## Original continuation prompt (repeat verbatim)

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
