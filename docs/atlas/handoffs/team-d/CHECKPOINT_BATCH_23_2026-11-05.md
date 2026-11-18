# Team D — complete standalone checkpoint, Batch 23 (2026-11-05)

## Recover live GitHub state and preserve scope

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight . PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70 . Branch: `research/atlas-team-d-20261104`, base `main`. PR observed **open, draft, unmerged** after Batch 23 data commit `5bb0e50dd3c911941d72c81f1b562323892e4258`. This documentation checkpoint advances branch head: **refetch live GitHub branch/PR before any next write**. All writes exclusively in `docs/atlas/handoffs/team-d/`; never edit `main`, public website/calculator, other teams, clinical recommendations, or merge/close PR/issues.

Original assignment and acceptance: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`. Preserve six WHO regional offices; dated typed cross-border relationships; at least ten negative/boundary cases; all seven non-clinical condition keys; a source-dated, reproducible M49-indexed graph and caveats. The structural minimum is represented, but source/legal/scientific review remains incomplete.

## Newly committed source-backed Greenland boundary findings

Data, source ledger and validator commit: [`5bb0e50dd3c911941d72c81f1b562323892e4258`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/5bb0e50dd3c911941d72c81f1b562323892e4258). All **four** changed files fetched back byte-identical from GitHub.

- `data/who_greenland_cooperation_2023_2024.csv`: **four** unique M49 **304** observations, `TD-WHO-GREENLAND-001–004`, WHO_EURO partner:
  - [WHO/Europe 4 April 2023 photo story](https://www.who.int/europe/news-room/photo-stories/item/regional-director-undertakes-first-ever-high-level-visit-to-greenland) about **March 2023** Greenland visit. WHO/Europe describes a location at western edge of European Region; not independently current 2026 administrative WHO country-area assignment or WHO constitutional Member State membership.
  - [WHO/Europe 4 July 2023 news release](https://www.who.int/europe/news/item/04-07-2023-a-new-era-of-partnership-and-exchange-between-who-europe-and-greenland) describes **28 June 2023** Greenland ministerial visit and high-level pledge to strengthen cooperation; no signed clinical adoption or legal authority.
  - [WHO/Europe 1 July 2024 announcement](https://www.who.int/europe/news-room/01-07-2024-strengthening-health-and-well-being-in-greenland--a-landmark-collaboration-agreement-with-who-europe) reports signed **five-year health cooperation MoU**, with **ten priority areas**, signed 1 July 2024. **Signed full instrument not reviewed**, so exact expiry day, renewal, withdrawal, binding terms and national legal effect remain unverified.
  - The 2024 announcement lists potential participation in **Small Countries Initiative/Regions for Health Network technical activities**; prospect does **not** establish SCI formal membership, actual participation, implementation or clinical outcomes.
- `data/network_memberships.csv`: one `m49:304 → WHO_EURO` `cooperates_with` edge with `valid_from=2024-07-01`, `as_of=2024-07-01` and evidence limitation `VERIFIED_PRIMARY_MOU_PRESS_NOTICE_ONLY`. **47 institutional nodes / 617 typed temporal links**. Neither this edge nor WHO geographic prose resolves Greenland's present WHO administrative assignment; M49 304 **remains `not_verified`**.
- `PROVENANCE.csv`: three official WHO URLs `TD-SRC-193–195`, each **directly opened and reviewed** (unlike Batch 22's four PAHO indexed-only 403 pages); **195 unique source URLs** in total. Event date vs article publication dates preserved.
- `validate.mjs`: checks four Greenland rows, unique IDs, three source IDs/URLs, M49/WHO_EURO link, dated MoU, proposal-only distinction, no 2026 region promotion and updated 617/195 totals.

## Full checked-in structural validator PASS, method accurately bounded

**PASS** on commit `5bb0e50dd3c911941d72c81f1b562323892e4258`. Fetched **52** changed paths via PR patch; all inside Team D, all newly added relative to `main`. Reconstructed **50** files from patches, independently fetched two omitted large files `data/m49_network_status.csv` and `data/network_memberships.csv`, confirmed patch validator matches directly fetched committed `validate.mjs`, and supplied **32 read dependencies**. Ran **all checked-in structural assertions in isolated read-only JavaScript with Node-style filesystem/assertion shim**. Terminal JSON result `PASS` included all Batch 23 assertions.

Exact totals: 47 nodes; **617** edges; **20** institutional condition references across seven condition keys; **249** M49 geographic candidates (248 official UN crosswalk + one ISO exception); **205** directly verified / **44** unresolved current WHO administrative region statuses; **105** April 2026 affirmative WHO office-host codes; **95** supplemental office audits; **153** date-qualified survey labels (106 April 2026, 46 September 2024, one unavailable); **46/46** older survey independent corroborations, not equivalent to April 2026 survey; **228** separate Jan 2021–Dec 2022 historical WHO office/service records and 225 typed historical edges; **34** EMA NCA agency identities; **24** PAHO pathway catalog titles, five aggregate programme observations, 19 regulatory-cooperation observations, 44 PAHO governance/21 PAHO cooperation rows, 12 PAHO representatives/four local activities; four Greenland observations; **195** unique provenance URLs.

**No native `node docs/atlas/handoffs/team-d/validate.mjs` run or GitHub Actions result is claimed**, no independently inspected signed Greenland MoU text, no comprehensive primary-source archival recheck, no regulator legal appraisal, no clinical or scientific signoff. Run native Node in a legitimate checkout and document results separately.

## Unfinished work and explicit source/time distinctions

1. **44** current WHO administrative region assignments remain unverified, including Greenland 304: dated 2023 WHO prose and 2024 institutional agreement are not unambiguous contemporary administrative assignment or constitutional WHO member status. No geography-to-membership, PAHO-to-WHO, UN M49-to-WHO or parent-territory promotion. Indonesia WPRO effective **2025-05-23** retained independently of UN subregion.
2. **144** candidates lack equivalent directly affirmative **April 2026** WHO country-office-host evidence; this is **unknown**, not proof of absence. Exact recent operation/premises of 46 WHO survey profiles retained from **September 2024** unverified despite separate first-party corroborations. WHO 2019 Eastern Caribbean, July 2021 SIDS report, Jan 2021–Dec 2022 service report and **2025** WER epidemiological reporting table are historical/subject-specific and **not** current 2026 administrative membership or office evidence.
3. PAHO Barbados/Eastern Caribbean **13/14 French Saint Martin 663** dispute unresolved; Dutch **Sint Maarten 534** separate. PAHO officials Stein (effective **22 Oct 2026**) and Boisson (**29 Oct 2026**) documented but two PAHO articles disagree on Boisson's previous tenure start **January vs February 2021**. Four source news direct opens got **HTTP 403**; do not silently adjudicate or infer interim days.
4. Greenland original MoU instrument/term and actual technical-network participation; North Macedonia WHO Europe SCI accession day/instrument; seven unnamed Africa CDC APPM MoU signatories and 15 intent states; EMA regulator-specific statutes and explicit Team A joins; national HEARTS 2.0 local editions, adoption/legal effect, ASEAN implementation, and Team B/C seven-condition institutions/research links all need direct primary verification.
5. No international relationship is a national medical statute, clinically adopted recommendation, approval for diagnosis, individual treatment or ancestry/weight inference. Maintain draft scientific/maintainer review gate.

## Continuation procedure

Refetch live PR #70 **open/draft/unmerged** and new branch SHA; read this checkpoint, `CONTINUATION_PROMPT.md`, `STATUS.md`, `GAPS.md`, `PROVENANCE.csv`, `CHANGELOG.md`, `VALIDATION.md`, `METHOD.md`, `validate.mjs` and relevant data files. Keep IDs and sources `TD-SRC-001–195` stable. Search primary evidence, commit scoped, source-qualified batches, independently read back edits, rerun validator. Do not merge, touch main/public site or other teams. If incomplete, save a new **standalone GitHub checkpoint**.

## Exact original continuation prompt

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
