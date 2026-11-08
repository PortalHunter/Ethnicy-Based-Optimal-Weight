# Team D standalone research checkpoint — Batch 18 — 2026-11-05

## Authority, scope, and restart point

- **Repository:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight
- **Existing branch:** `research/atlas-team-d-20261104`.
- **Existing PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70; verified **OPEN, DRAFT, UNMERGED** immediately before the documentation commit. Recheck actual live state and branch SHA on resume.
- **Starting Batch 17 head:** `098413971173c73276e78ee8b6bdf04c9f144bec`.
- **Batch 18 evidence/data commit:** `dab5056c2aa3c84f5bd1adf22539ffb1b74ebd2d`.
- **Corrected full-structural-pass data/validator commit:** `0023c58ca6538d5733a5bc651d66888d1990f741`.
- This checkpoint is added by a later documentation-only commit, so the **actual branch head must be independently fetched**.
- **Write ONLY** `docs/atlas/handoffs/team-d/`. No edits to `main`, the public website/calculator, patient-facing advice, the other teams' paths or their datasets; no PR merge/issue closure. Team D owns typed, dated cross-border institutional links, not individual medical or ancestry rules.

## Batch 18 new primary-source evidence

Ten previously unchecked entries from WHO's **retained September 2024** office-survey set now have **independent WHO-page corroboration**, stored as new `TD-OFFICE-CORROBORATION-010` through `019` in `data/who_office_independent_checks_2026.csv`. The batch adds ten unique URLs `TD-SRC-151`–`TD-SRC-160` to `PROVENANCE.csv`.

| M49 | Area | Separate official WHO evidence | Source time | Official source |
|---|---|---|---|---|
| 148 | Chad | WHO country profile, N'Djamena address | undated | https://www.afro.who.int/countries/chad |
| 226 | Equatorial Guinea | WHO country profile, Malabo address | undated | https://www.afro.who.int/countries/equatorial-guinea |
| 480 | Mauritius | WHO country profile, Port Louis address | undated | https://afro.who.int/countries/mauritius |
| 508 | Mozambique | WHO country profile, Maputo address | undated | https://afro.who.int/countries/mozambique |
| 516 | Namibia | WHO country profile, Windhoek address | undated | https://afro.who.int/countries/namibia |
| 686 | Senegal | WHO country profile, Dakar address | undated | https://www.afro.who.int/countries/senegal |
| 716 | Zimbabwe | WHO country profile, Harare address | undated | https://afro.who.int/countries/zimbabwe |
| 748 | Eswatini | WHO representative at regional meeting; publication distinct from conference dates | 2026-02-12 | https://www.afro.who.int/countries/eswatini/news/eswatini-assumes-chair-east-southern-and-central-africa-health-community |
| 834 | United Republic of Tanzania | WHO Country Office media contact in article; event is not office premises | 2026-09-11 | https://www.afro.who.int/countries/united-republic-of-tanzania/news/tanzania-expands-emergency-medical-team-capacity-across-lake-zone?form=FUNKUKTZPCK |
| 728 | South Sudan | WHO Country Office officer-in-charge; not completed headquarters | 2026-08-26 | https://afro.who.int/countries/south-sudan/news/who-regional-office-country-focus-coordinator-visits-south-sudan-strengthen-health-sector-support |

**Source precision:**
- Seven official WHO country pages give representative/contact/location details, but **lack a verified publication date**. They are labelled `source_evidence_date=unknown`, `source_date_precision=undated`; they are NOT asserted to be new April 2026 survey responses or proof of office operation on any specific day.
- Three dated WHO news sources document a named representative/leader or Country Office media contact in February, August, or September 2026. They do **not** prove a specific physical office building, lease, programme implementation or uninterrupted status since September 2024. The Eswatini news publication date differs from the January–February conference; South Sudan's August mission is not an office building completion; Tanzania's Mwanza event venue is not a WHO office site.
- These **independent source checks do not alter** the original `who_office_survey_roster_2026.csv` timestamps or `who_country_office_presence.csv` direct-April attestations. The 46 Sept-2024 survey values remain retained, not refreshed.

## Exact after-batch coverage and unchanged scientific boundaries

- **Office legacy rechecks:** 9 prior + 10 new = **19 of 46** independently corroborated, with **27** still lacking a separate WHO corroboration. Check categories: **7** dated 2026 source checks and **12** undated official WHO page checks.
- **Provenance:** **160 unique official source URLs** (150 prior + 10 new); office independent checks: **19 unique M49 codes and source URLs**.
- **Graph preserved:** **47** institutional nodes, **616** typed/source-stamped relationships and **20** condition-network references across all **seven** health keys. New office checks are audit observations, **not invented graph membership edges**.
- **WHO regions:** **249** seed/UN candidates, **248** official M49 crosswalk rows plus one ISO exception (158), **205** direct-current WHO assignments, **44** `not_verified`. Six WHO regions remain separately modelled; no 2021 SIDS-only historical hints promoted to current assignments.
- **Offices:** **153** WHO survey roster labels (106 April 2026 respondents, 46 retained September 2024, one unavailable); **105** exact M49 positive April-2026 office hosts; **144** additional M49 candidates without equivalent positive April-2026 attestation (unknown does NOT imply absent). Historical 2021–22 WHO country presence report **228** office/coverage/focal-point records and **225** typed historic edges remain separately time-qualified. WHO 2019 Barbados/ECC 14 host/service observations and WHO 2021 selective SIDS 13 historic region observations remain in separate files.
- **Other retained audit sets:** 34 EMA agency candidates, 24 PAHO HEARTS catalogue titles, 19 regulator-cooperation records, 44 PAHO governance category rows, 21 2026 PAHO technical-cooperation rows, 53 Europe SCI time snapshots, 5 aggregate programme observations; no unsupported statutory/clinical claim inferred.

## Validation and readback

1. Pre-commit checks asserted exact new office IDs/codes, 10 unused primary-source URLs, no source duplicates, all 19 unique office IDs/M49 codes, and every office citation represented in the provenance ledger.
2. First batch commit `dab5056c...` correctly saved the data, ten provenance URLs and audit assertions.
3. Full checked-in validator initially found a **stale fixed 150-source assertion**; corrected transparently in commit `0023c58c...` to 160, without weakening any graph/WHO/time-boundary assertions.
4. **PASS:** checked-in `validate.mjs` structural assertion body executed against the current PR's **26 smaller Team D CSV/provenance files reconstructed from their complete additions-only GitHub patches**, plus **2 oversized CSVs read directly from the live GitHub branch** (`m49_network_status.csv`, `network_memberships.csv`). **28 CSVs + provenance** total; printed `result: PASS`, nodes 47, edges 616, verified regions 205, unknown 44, offices 105, provenance 160, and Batch 18 `19` office audit assertions.
5. Execution used a **read-only JavaScript filesystem/assertion shim**, not a native shell command, `node` CLI, GitHub Actions or medical/legal review. Exact validation commit `0023c58c...`; source-file re-read after the documentation commit and native `node docs/atlas/handoffs/team-d/validate.mjs` still recommended in a checked-out repository.
6. Diff and changes are restricted to Team D. Refetch changed files and PR head after this checkpoint commit before reporting final state.

## Unfinished acceptance work, highest priority

1. **27** old September 2024 WHO office respondents still need independent present-day source checks. Even 19 independently corroborated records are not formally upgraded to fresh survey responses. Investigate 144 other candidates missing direct April 2026 host attestations using appropriate categories (physical country office, multi-country coverage, liaison, special representative, remote focal point, unknown), and record source precision.
2. **44** unresolved current WHO region M49/exception candidates: pursue contemporary **explicit regional assignment**, not 2021 SIDS selective annex placement or parent-country geography.
3. PAHO undated **13** versus dated 24 August 2026 **14** Barbados/Eastern Caribbean service areas including French Saint Martin 663 remains unadjudicated. French Saint Martin 663 and Dutch Sint Maarten 534 are distinct. Earlier WHO 2019 and July 2021 PDF pages still need facsimile verification after screenshot 403.
4. WHO Europe SCI North Macedonia exact instrument/day within **10–12 April 2024** not found. The 2023 **meeting observer** and 2024 **member** states are distinct; temporary observer attendance is not constitutional WHO observer status.
5. Obtain signed texts/statutory remit for EDA/UPA and other regulatory MoUs, seven unnamed APPM signatories and 15 expressions of intent, exact Team A joins, national HEARTS pathway adoptions/editions, ASEAN 2026–2030 implementing members, Team B/C exact IDs, and independent expert review.
6. Maintain M49 leading zeros, primary-source URLs, effective/publication/event date distinctions, explicit unknown/not_verified states, seven condition-key separation and no extrapolation into clinical/ancestry-based advice.

## Repeat this exact prompt on every continuation

```text
Continue Research Team D in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70.

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`.

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, historical-versus-current source distinctions, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint. At the end, provide this same continuation prompt again.
```
