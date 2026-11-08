# Team D — independent issuer audit continuation and native reproducibility blocker (2026-11-07)

**Run:** PR [#70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70), branch `research/atlas-team-d-20261104`; input verified HEAD `4bd39f8f1063e1dbd25377de4776ded240f70d8c` and post-audit pre-checkpoint commit `ed485d16a8c2165a3c02a6dcfb677c91ed3b5b5e`. All changed paths restricted to `docs/atlas/handoffs/team-d/`. This is **acceptance-driven source and semantics verification**, not consolidation. Previous [native repair checkpoint](CHECKPOINT_GATE_AUDIT_FOLLOWUP_2026-11-07.md) is retained.

## 1. Full native validator — still **not executed**

**FULL CURRENT CHECKED-IN NATIVE NODE VALIDATOR NOT RUN.** A complete authorized repository checkout is unavailable. Local `node --version` returned `v22.16.0`. The live retry `git ls-remote https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight.git refs/heads/research/atlas-team-d-20261104` returned **exit 128**, empty stdout, with exact stderr:

```text
fatal: unable to access 'https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight.git/': Could not resolve host: github.com
```

Consequently **no actual `node docs/atlas/handoffs/team-d/validate.mjs` stdout/stderr** exists and neither `TD-BL-ACCEPT-002` nor native reproducibility may be declared passed. The former 18 stale current-ledger assertions were repaired in the preceding checkpoint from 321 to 328. In this run two **new** original issuer URLs bring current provenance **328 → 330** and the checked-in `EXPECTED_CURRENT_PROVENANCE_COUNT` constant is changed to 330; historical source rows are preserved. A third contemplated source, the [Africa CDC ExCon report](https://africacdc.org/download/africa-health-excon-2026-report/), was **already** TD-SRC-123 and was reused, not duplicated.

**Feasible targeted connector-side validation actually executed:** **2,589 independent JavaScript assertions** from **12** GitHub-fetched current-commit files at `ed485d16a8c2165a3c02a6dcfb677c91ed3b5b5e`, **PASS**. Inspected CSV widths, provenance ID/URL uniqueness, graph-edge semantic-key uniqueness, network and M49 endpoint/source joins for all 619 graph edges, seven condition keys, 59 independent audit source URLs, 249 M49 entries, 205 WHO current assignments, 105 distinct April affirmatives, 34 EMA directory identities, 236 unique backlog IDs and the current 330-count validator assertion. **Zero CSV width or source-join errors.** This was **not the native validator** and is not independent legal/clinical/maintainer approval.

## 2. Independent source/semantic qualification: 44 → 59 audits (+15)

The [original-source semantic audit ledger](data/postconsolidation_evidence_semantic_audit_2026-11-07.csv) now contains **TD-SEM-045–059**: **13 previously unaudited graph-edge propositions + one local original-issuer identity + one institutional issuer report distinction**. Exactly **nine** original HTML/PDF documents directly inspected, **five** official indexed original pages with **HTTP 403** on direct opening, and **one** WHO EMRO original index returning **HTTP 502**. Entries checked **2026-11-07**. Stratified WHO Europe, WPRO, EMRO, PAHO/AMRO, Africa CDC/APPM, international professional federations, and territorial office relationships; the larger original 619-edge census is not exhausted.

| Entry | Original issuer and source | Audited legal / temporal / relationship boundary |
| --- | --- | --- |
| TD-SEM-045–046 | [PAHO original profile](https://www.paho.org/en/who-we-are), issuer indexed, direct HTTP 403 | PAHO serves as WHO AMRO and also as specialised inter-American health agency; neither role creates a national statutory medicine or country-office grant. |
| TD-SEM-047 | [PAHO HEARTS](https://www.paho.org/en/hearts-americas), issuer indexed, direct HTTP 403 | Regional HEARTS implementation versus locally enacted health law, national adoption, or clinical standard. |
| TD-SEM-048 | [PAHO membership category roster](https://www.paho.org/en/planning-finance-and-accountability/member-states-pan-american-health-organization), issuer indexed, direct HTTP 403 | Curaçao (M49 531) **associate** PAHO member since **September 2012** (month precision); not a full PAHO government member, WHO governance status, or April office host. |
| TD-SEM-049 | [Africa CDC SPARK release](https://africacdc.org/news-item/africa-cdc-rolls-out-continental-spark-ncds-programme-as-noncommunicable-diseases-rise-across-africa/), direct issuer HTML 30 Mar 2026 | Africa CDC operates SPARK programme; no national law/clinical adoption. |
| TD-SEM-050 | [WHO WPRO Pacific NCD activity](https://www.who.int/westernpacific/activities/addressing-ncds-in-the-pacific), direct original page | WHO Pacific programme activity; not a separate regulator or patient care mandate. |
| TD-SEM-051 | [WHO Europe SCI 9 Jun 2026 participant roster](https://www.who.int/europe/news/item/09-06-2026-european-region-s-smallest-countries-lead-with-commitment-to-stronger--more-sustainable-health-workforce), direct | North Macedonia a participant by June 2026; precise admission date unproven. |
| TD-SEM-052 | [WHO Europe 5 Jun 2024 accession-period report](https://www.who.int/europe/news/item/05-06-2024-small-countries-pledge-action-to-improve-cancer-care-and-build-climate-resilient-health-systems), direct | North Macedonia became twelfth SCI member **during 10–12 Apr 2024**; source supports meeting-end as-of, **not signed decision or exact accession day**. |
| TD-SEM-053 | [WHO Europe 7 Jun 2023 observers report](https://www.who.int/europe/news-room/07-06-2023-11-smallest-countries-in-who-european-region-adopt-landmark-statement-committing-to-key-actions-to-improve-people-s-health), direct | Bhutan was SCI **meeting observer** 10–12 May 2023, not a member or WHO constitutional governance observer. |
| TD-SEM-054 | [WHO AFRO Namibia agreement signing account](https://www.afro.who.int/countries/namibia/news/dr-tedros-calls-investment-african-health-sovereignty-during-visit-namibia), direct 21 Aug 2026 | Namibia ministry and Africa CDC signed a WHO-witnessed **MoA** over 20–21 Aug formalising APPM participation. Signed executed instrument and exact day absent. WHO calls Namibia first-to-join; distinguish CDC statement about Egypt first-to-sign an **MoU**. |
| TD-SEM-055 | [WHO EMRO regional diabetes-framework index](https://www.emro.who.int/noncommunicable-diseases/publications/regional-frameworks-for-action.html?layout=blog&ua=1), **HTTP 502** | Original Regional Committee endorsement instrument not directly inspected; cannot elevate publication index to signed governance, national law or clinical adoption. |
| TD-SEM-056 | [AOECS Acelmex signed membership certificate](https://www.aoecs.org/media/2zipnff1/mexico-member-certificate.pdf), **original PDF p.1 screenshot direct** | Acelmex is **affiliate member since 2025**, year precision. Under [graph ontology](GRAPH_ONTOLOGY.md), retain `member_of` and put membership tier in notes; no full-member, national governmental, exact Team B ID or legal-registration inference. |
| TD-SEM-057 | [ACELMEX Mexican association homepage](https://www.acelmex.org.mx/), direct original publisher HTML | Self-identified Mexican A.C. professional/support entity, not original national corporate register or exact Team B canonical join. |
| TD-SEM-058 | [Africa CDC original ExCon report](https://africacdc.org/download/africa-health-excon-2026-report/), direct 17 Sep 2026, **existing provenance TD-SRC-123 reused** | Africa CDC says Egypt first AU state to sign APPM **MoU**; not original executed agreement or registry naming eight signed members. Do not collapse Egypt MoU into Namibia MoA or infer national medicine authority. |
| TD-SEM-059 | [PAHO original Bermuda profile](https://www.paho.org/en/bermuda), official indexed, direct HTTP 403 | Bermuda receives PAHO/WHO multi-country technical cooperation from Jamaica office; this is **not** an April 2026 local physical host or WHO administrative-region assignment. This samples one of the 21 indexed-only PAHO graph edges; none upgraded to direct original full-page inspection. |

**Canonical changes:** exactly **two existing graph rows qualified**, for Acelmex membership tier/year and Namibia witnessed MoA versus Egypt original MoU (no new graph edges or nodes). Source ledger **328 → 330 (+2 distinct URLs)**, new **TD-SRC-329 signed AOECS certificate** and **TD-SRC-330 ACELMEX original issuer**. Africa CDC ExCon is **existing** TD-SRC-123, not a new provenance entry. All 47 nodes, 619 typed/time-qualified edges and 20 seven-condition institutional links remain. No accepted individual clinical claim or national legal adoption.

## 3. Finite primary-instrument backlog and original acceptance gates

**0 original-instrument cases reopened; 0 strict closure events.** New certificate directly resolves only AOECS *membership tier*, **not** the `TD-BL-NET-007` missing original 1991 Codex admission credential. Namibia and SCI publisher narratives add exact source qualification but no newly signed originals or custodial responses; 2–5 cases cannot responsibly be reopened just to increase throughput. Retain **236 unique backlog cases** unchanged; preserve escalations:

- `TD-BL-WHO-533`: Aruba original WHO Headquarters individual administrative assignment needed, distinct from PAHO associate member and technical coverage.
- `TD-BL-NET-001`: PAHO ECC **13 undated vs 14 dated** Eastern Caribbean service areas, including **French Saint Martin M49 663** distinct from **Dutch Sint Maarten 534**; current dated original assignment instrument missing.
- `TD-BL-NET-003`: North Macedonia SCI 10–12 Apr 2024 retrospective verified, exact day and signed accession resolution still missing.
- `TD-BL-NET-004`: Africa CDC APPM eight purported signed agreements, identity/date originals for remaining signers missing; Namibia MoA and Egypt MoU must not silently be treated as identical.
- `TD-BL-NET-007`: AOECS claim of Codex observer status from 1991 requires original Codex credential; 1991 session nonappearance is not evidence of nonadmission, and 1993/2023 historical records cannot prove 1991 accreditation.

**TD-BL-ACCEPT-001 HELD:** at least 59 but not all **619** graph-edge observations independently qualified; **12 provisional society graph endpoints still lack exact Team B issuer joins** (the ACELMEX self-identity + original certificate does not supply a Team B canonical ID); **21** PAHO indexed-only technical-cooperation graph edges still lack directly inspected first-party full pages, including Bermuda. Primary-scope rights and exact original evidence must be reaudited in sufficient coverage to justify closure.

**TD-BL-ACCEPT-002 HELD:** full current checked-in native Node execution, independent complete reproducibility, and primary-source reproduction are outstanding. Original acceptance **3/5 conservatively demonstrated; 2/5 held** (six dated WHO regional administrative offices; ≥10 dated/typed international relations; ≥10 explicit negative/boundary examples demonstrated structurally). The seven-condition links and M49 graph are institutional scaffolding **not clinical approval**. A separate enhanced **34 national regulator amended law/delegation/effective-date/Team A identity audit** remains **0/34**, not an extra original acceptance gate.

**Throughput:** existing instrument cases reopened **0** (no new signed route); original instrument closures **0**; verified membership-tier corrections **1**; first-party source semantic qualifications **15**; new provenance-only URLs **2**; new graph links **0**; graph-row qualifications **2**; 236 backlog records preserved; external legal/scientific/clinical/maintainer signoff **not granted**.

## 4. Evidence bar measurements — twenty slots, before → after

```text
WHO current administration      ████████████████░░░░ 205/249 (82.3%) → ████████████████░░░░ 205/249 (82.3%) | Δ +0 | 44 not verified
April 2026 affirmative host     ████████░░░░░░░░░░░░ 105/249 (42.2%) → ████████░░░░░░░░░░░░ 105/249 (42.2%) | Δ +0 | 144 without April-positive evidence; NOT proof of absent offices
EMA source-listed identities    ████████████████████ 34/34 (100%)   → ████████████████████ 34/34 (100%)   | Δ +0 | identities only; not full law packets
Full national law/Team A packet ░░░░░░░░░░░░░░░░░░░░ 0/34 (0%)      → ░░░░░░░░░░░░░░░░░░░░ 0/34 (0%)      | Δ +0 | 34 packets remain
Original acceptance demonstrated ████████████░░░░░░░░ 3/5 (60%)    → ████████████░░░░░░░░ 3/5 (60%)    | Δ +0 | 2 gates held
Original acceptance HELD         ████████░░░░░░░░░░░░ 2/5 (40%)     → ████████░░░░░░░░░░░░ 2/5 (40%)     | Δ +0 | independent sources + native Node still open
```

**Next sequence:** Obtain a complete authorized checkout with GitHub DNS/network; execute `node docs/atlas/handoffs/team-d/validate.mjs` unchanged and capture actual stdout/stderr; remedy only Team D failures and rerun. Independently inspect further formerly unaudited exact original graph issuers and PAHO/Team B identity joins, preserving 403/502 blockers. Reopen escalated five instrument cases only after genuinely new primary text/custodian communication; otherwise explicitly hold. Recompute both original acceptance gates independently, keep PR OPEN/DRAFT/UNMERGED, never approve medical, legal, scientific or maintainer claims.
