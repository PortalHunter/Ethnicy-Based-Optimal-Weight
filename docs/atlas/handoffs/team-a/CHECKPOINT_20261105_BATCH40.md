# Team A standalone checkpoint — Batch40 / six research cycles (2026-11-05)

**PR:** https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68 — **OPEN, DRAFT, UNMERGED. NEVER MERGE OR MARK READY WITHOUT AUTHORIZATION.**

**Research branch:** `research/atlas-team-a-20261104`  
**Exact independently connector-readback DATA commit:** [`4605711f4a4c9ee4aac303e6a8db9dd674c2ab78`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4605711f4a4c9ee4aac303e6a8db9dd674c2ab78).  
**Baseline before this run:** [`7df57a9cb2eec1bad14a1c1c15ed38ef120cfa88`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/7df57a9cb2eec1bad14a1c1c15ed38ef120cfa88) (Batch39 documentation).  
**Predecessor immutable data:** [`ed9b14167525defa02389ce20c9f06da83a6129c`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/ed9b14167525defa02389ce20c9f06da83a6129c).  
**Original preceding checkpoint:** [Batch39](CHECKPOINT_20261105_BATCH39.md). Earlier research and notes are preserved.

## Summary — research progress is not acceptance completion

| Record type | Current | Verification limitation |
| --- | ---: | --- |
| Official UN M49 geographic country/area skeleton | **248/248** | Exact official geographical codes/names/regions, not certified current statutes |
| M49 areas with at least one scoped governmental health-body identity | **231/248** | Identity is not sole authority, current statute, actual effective control, or multi-level remit |
| Areas still explicitly UNKNOWN | **17** | Revisited 6, all 17 retained; no guesswork |
| Governmental health bodies | **312** | Existing records unchanged |
| Existing institutional relationships | **45** | No new legal-organizational edge or parent inferred |
| Source/provenance observations | **623** | **+20** dated source-state records (previous 603; one issuer may supply several pages) |
| Coverage records | **248** | Existing statuses and territory distinctions preserved |
| Explicit multi-area institution assignments | **4** | Existing source-specific mapping ledger unchanged |

**Six sequential cycles, six source-recovery Markdown reviews and commits:**

1. **M49 086 — British Indian Ocean Territory:** [Source review](source_recovery/CYCLE_086_BIOT_20261105.md), commit `179a0b624daabb4de1cbb47655664d4622a3e57a`. UK Parliament 2026–27 private member's bill is at Committee stage, NOT enacted; previous Diego Garcia implementation bill fell. Signed treaty, bill stages, military-base worker context and present legal health responsibilities distinguished. Four A40-086 source states.
2. **M49 112 — Belarus:** [Source review](source_recovery/CYCLE_112_BELARUS_20261105.md), commit `17d8a090f9fb53229355d0f53a88808ec23484e1`. Belarus tax authority January 2026 joint agency reference confirms Ministry of Health name and a **narrow** tax interpretation role; regional government contact guide is undated; original Health Ministry source remains inaccessible. Three source observations; no legal-mandate certification.
3. **M49 239 — South Georgia and the South Sandwich Islands:** [Source review](source_recovery/CYCLE_239_SOUTH_GEORGIA_20261105.md), commit `bfb86d921b81b91273e19df20675878daaad2ded`. Government-associated ordinances index expressly has **no legal status** and designates the Gazette as authoritative. Visitor self-sufficiency ≠ worker healthcare or complete statutory responsibilities. Policy PDF unread. Three A40-239 sources.
4. **M49 334 — Heard Island and McDonald Islands:** [Source review](source_recovery/CYCLE_334_HIMI_20261105.md), commit `b55e4c2cbb1b9b7d26ece1b49c39023c7786396f`. Australian Antarctic Division documents Territory Act and layered Commonwealth/ACT/Jervis Bay law application; environmental administration and self-sufficient permits ≠ complete public-health delegation. Three A40-334 sources.
5. **M49 624 — Guinea-Bissau:** [Source review](source_recovery/CYCLE_624_GUINEA_BISSAU_20261105.md), commit `28a556494b8ccb03568cca48d3a850bb5d3f1153`. WHO's April/August 2026 reports corroborate *Ministry of Public Health* activity with dated external issuer, but both WHO reports come from **one issuer**; domestic Portuguese legal instrument and inaccessible candidate ministry sites remain unresolved. Three A40-624 sources.
6. **M49 744 — Svalbard and Jan Mayen Islands:** [Source review](source_recovery/CYCLE_744_SVALBARD_JAN_MAYEN_20261105.md), commit `9067db9b73169297423b110b37e8a82935e1e6f3`. **Material statutory progress:** Norwegian Health Ministry 22 April 2026 applicability guidance, Lovdata regulation FOR-2015-06-22-747 (§3–10 Svalbard and later Jan Mayen section references), Health Directorate interpretation and 2026–27 budget **proposal**. Service provider, Governor, local council, regional health enterprise and Jan Mayen must remain distinct. Lovdata /nav direct page returned 405, so consolidated version and all sections not fully audited. Four A40-744 sources.

## Committed data and verification

- Six new Markdown files under `docs/atlas/handoffs/team-a/source_recovery/` were created and content-readback verified on the branch.
- The full `PROVENANCE.csv` now contains **623 source rows**. Appending 20 A40 source observations was committed at [`52d354e4d7f7a4e89a1799e72ec3d2ae15016c08`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/52d354e4d7f7a4e89a1799e72ec3d2ae15016c08). Every preceding 603 row was **record-for-record unchanged** in a quote-aware parsed comparison; all 20 new rows read back exactly.
- All 20 A40 source IDs were referenced from the 6 appropriate rows of `data/unresolved_area_audit.csv`; the other 11 rows were not substantively changed. This was committed at [`4605711f4a4c9ee4aac303e6a8db9dd674c2ab78`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/4605711f4a4c9ee4aac303e6a8db9dd674c2ab78) and quote-aware independently re-read. Existing reasons, caveats and next actions remain in their original row strings; specific follow-up context was appended.
- Eight Team A CSVs were connector-fetched at the exact immutable DATA SHA and parsed with a quote-aware JS auditor. **PASS STRUCTURAL:** 248 exact M49 geography keys, ISO/UN names and regions match the dated master row by row; expected region counts; valid body and relationship references; all 4 cross-area mappings and multi-source IDs; 248 aligned coverage states; 17 unknown audits with valid source references; 623 unique HTTPS provenance entries; 16 high-risk territory control codes; blank parent-country M49 for all 248 rows; no hidden promotions of unknown areas. No academic/clinical claim checked.
- Compared Batch39 HEAD to DATA SHA: **8 commits ahead, 0 behind**; **only 8 paths changed**, all under `docs/atlas/handoffs/team-a/` (6 new source notes plus provenance and unresolved audit), and no changes to other-team files, public site, `main`, calculator, clinical or ancestry content. PR checked OPEN DRAFT/UNMERGED.
- **Important limitation:** The repository's real Python `validate.py` and regression `test_validate.py` **were not executed this session** because the local container's GitHub DNS resolution failed. The quote-aware JS structural audit is not equivalent to running the Python tests. The prior Batch39 Python run still applies to that immutable earlier snapshot only. Run both Python scripts in an authenticated checkout at the next opportunity. Legal substantive accuracy, source independence, exact current amended laws and effective territorial control are not certified.

## Original acceptance criteria and continuing scope

**PASS for geography intake only:** exact 248 M49 country/area skeletons, no skipped area, 17 explicit source-linked UNKNOWN entries.

**INCOMPLETE for source/legal acceptance:** two independently *issuing* official enactments for renamed, contested or delegated responsibilities; original-language consolidated signed legislation and effective date; complete government/public-health/regulator/research-service identity and precise legal competence; province/state/canton/city/Indigenous/territory responsibilities, especially federations, contested jurisdictions, special territorial groups and extraterritorial workers. A provider, old cabinet list, foreign ministry roster, commercial mirror, visitor rule, draft bill, proposed budget or WHO article must never silently become signed domestic law.

**NO clinical or public changes:** Do not modify `main`, user-facing calculator/site, patient guidance, ancestry, genetic or drug information, other teams' folders, or PR draft/merge state.

## Full 17-area unresolved queue (2026-11-05)

- **010 Antarctica:** station and expedition national/operator health law; Treaty sovereignty neutrality.
- **074 Bouvet Island:** current Norwegian expedition/visitor health legislation and competent authority.
- **086 British Indian Ocean Territory:** treaty commencement plus military/civilian medical/occupation laws; see new review.
- **104 Myanmar:** two competing ministries and ethnic/regional jurisdictions with original Burmese and effective-control check.
- **112 Belarus:** authentic current original ministry establishment decree, accessible ministry and independent legal issuance.
- **226 Equatorial Guinea:** current Spanish original allocation decree and completed-versus-prospective INSESO transfer.
- **239 South Georgia and South Sandwich Islands:** authentic Gazette medical/worker law, provider versus state public-health role.
- **260 French Southern Territories:** TAAF districts and ships, medical-service statutory scope versus exact M49 260.
- **275 State of Palestine:** separate administrations' current original legal/territorial competences; no automatic supremacy.
- **334 Heard Island and McDonald Islands:** actual laws extended by 1953 Act and excursion/worker responsibilities.
- **364 Iran:** original Persian current ministerial remit and independent government/legal act; ministry timeout.
- **408 DPR Korea:** current original Korean legal authority beyond WHO/foreign government reporting.
- **581 United States Minor Outlying Islands:** each of nine components; civilian/refuge/military jurisdictions.
- **624 Guinea-Bissau:** original Portuguese gazette/competence; independent domestic first-party confirmation.
- **732 Western Sahara:** separately administered area/refugee services, independent source, unresolved territorial dispute.
- **744 Svalbard and Jan Mayen:** **highest immediate legal-document opportunity**; inspect full current FOR-2015-06-22-747 with Jan Mayen §§18ff and trace exact Svalbard Council/Governor/Helse Nord/UNN powers.
- **887 Yemen:** Aden/Sanaa ministries and medical regulator in original law; independent extent-of-control sources.

Full source-linked reasons and exact next actions: `data/unresolved_area_audit.csv`. All older source contradictions and special conditions remain in `CHECKPOINT_20261105_BATCH39.md`, earlier checkpoints, `PROVENANCE.csv`, country notes, and the six new source reviews. Avoid generic rediscovery of the 231 identities already located.

## Next autonomous action

1. Verify live PR #68 branch HEAD and reread latest `CONTINUE.md`, this checkpoint, existing 17-row unresolved ledger and new source reviews. If others have committed since this checkpoint, reconcile before writing.
2. Run the actual repository Python validator and `python -m unittest discover -s docs/atlas/handoffs/team-a -p 'test_*.py'` in an authenticated checkout; report results honestly. Preserve all source caveats.
3. Prioritize **744 original current regulation/Jan Mayen** and **112 original Ministry of Health decree**, then each of the 17 cited recovery actions. Where evidence is adequate, add *scoped* body/issuer/relationship rows with original name/area/currency and narrow functions, not a blanket sole-country authority. Independently validate original enactment, not just identity.
4. Continue to the other 231 areas' still-open current legal mandates, regional/municipal roles, regulators and research institutes. Do not regard 231/248 identity count as 93.1% acceptance completion.
5. Commit incremental batches on `research/atlas-team-a-20261104`, read back exact immutable blobs, compare changed paths against Team A-only allowlist, keep PR DRAFT/unmerged, and record a new standalone checkpoint if unfinished.

## Exact reusable continuation prompt

```text
Continue Research Team A in https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/68.

Read "docs/atlas/handoffs/team-a/CONTINUE.md" on branch "research/atlas-team-a-20261104".

Verify live GitHub state and continue autonomously toward all original acceptance criteria. Preserve existing research, source caveats, and scope restrictions. Commit and validate regularly. Do not modify the public website or merge the PR.

If unfinished, save a complete standalone GitHub checkpoint.
```
