# Team D standalone continuation checkpoint — Batch 38 (2026-11-06)

## Authorization, original acceptance criteria and live state

Repository: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight  
Branch: `research/atlas-team-d-20261104` (base `main`); draft PR: https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70  
Research commit: [`48bf94f90ecc06655665629eed39c947b98bc193`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/48bf94f90ecc06655665629eed39c947b98bc193); corrected checked-in validator: [`048a77e02b5643989c07b3da90efb059a7b06b6a`](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/commit/048a77e02b5643989c07b3da90efb059a7b06b6a). At the validator commit PR was independently **OPEN / DRAFT / UNMERGED**, head exactly `048a77e02b5643989c07b3da90efb059a7b06b6a`; this documentation commit will move the tip and must be refetched at every restart.

Original source assignment: `docs/atlas/research-team-prompts/TEAM_D_INTERNATIONAL_NETWORKS.md` and `DATA_CONTRACT.md` on branch `research/atlas-five-team-handoff-prompts-2026-11-04`. Team D scope: six distinct WHO administrative regions, source-dated international and national-agency relationships (>=10), >=10 negative/boundary cases, seven-condition institutional links, typed time-aware graph with M49 coverage and provenance, with historical/nonbinding/governance/clinical distinctions. Directory restriction: **only `docs/atlas/handoffs/team-d/`**. No website/main/other-team changes, PR merge or ready-for-review transition, clinical or legal approval.

## Substantive Batch 38 findings

Four added records `TD-NCA-REMIT-063–066` in `data/emrn_nca_national_remit_evidence_2026.csv` describe **two additional** exactly matching *EMA-listed candidate labels*, with original agency identity fields preserved; they are not exact Team A joins:

1. **Liechtenstein (`438`; EMA candidate `TD-EMRN-NCA-019`):** its Amt für Gesundheit describes general market acceptance of medicines approved by Swissmedic **subject to one exception**. This does **not** mean the office itself granted every Swissmedic product authorisation; the exact exception and current amended national law remain unaudited. Source `TD-SRC-266`, directly opened German government HTML: https://www.llv.li/de/landesverwaltung/amt-fuer-gesundheit/unsere-aufgaben
2. **Liechtenstein (`438`; same EMA candidate):** government states medicines manufacturers/wholesalers require domestic Amt für Gesundheit permission with GMP/GDP compliance; references Swiss customs-area SR 812.21 and EEA-specific LR 812.103. Business licences and individual medicinal product marketing grants are distinct. Original amended statutes and jurisdictional interactions are not fully legally audited. Source `TD-SRC-267`, directly opened German government HTML: https://www.llv.li/de/unternehmen/branchen-berufe-verbaende/gesundheitsberufe-und-heilmittel/arzneimittel/herstellung-und-grosshandel
3. **Luxembourg (`442`; EMA candidate `TD-EMRN-NCA-021`):** national Guichet identifies Direction de la santé / Division de la pharmacie et des médicaments (DPM) as the Luxembourg competent authority for medicine pharmacovigilance. This is a ministry-subdivision source description, **not** a complete marketing authorisation statutory delegation or confirmed exact Team A ID. Source `TD-SRC-268`, directly opened official French HTML: https://guichet.public.lu/fr/citoyens/sante/notification-effets-indesirables-medicaments.html
4. **Luxembourg (`442`; same source):** government states DPM collaborates with Nancy's regional pharmacovigilance centre in France for suspected adverse reaction reporting. The collaboration description does not itself establish a separate signed bilateral treaty, independent medical recommendation or external agency's national legal powers.

`TD-SRC-268` page is marked last modified **2025-10-15**; this is **not a statutory commencement date**. Neither Liechtenstein HTML page supplied a verified legal-effective date. All four roles explicitly preserve `CONSOLIDATED_NATIONAL_STATUTE_NOT_INDEPENDENTLY_AUDITED`, `PENDING_EXACT_TEAM_A_ID_JOIN`, and `OFFICIAL_GOVERNMENT_ROLE_DESCRIPTION_ONLY`. No `regulates_medicines_in` or international member-of graph edge fabricated. Latvian official pages remain **indexed but direct-open HTTP 403**, Swedish official source still JS-only in direct open; do not classify them as direct-HTML reviews. Iceland direct official access also unresolved.

## Quantified research and interpretation boundaries

| Measure | Evidence-positive | Remaining / distinction |
|---|---:|---|
| M49 geography with documented exception | **249/249** | Geography does not assign a WHO region or legal jurisdiction |
| Direct-source current WHO region assignment | **205/249 (82.3%)** | **44 unknown**, not assumed outside WHO |
| Affirmative April 2026 WHO office-host survey record | **105/249 (42.2%)** | **144 without equivalent positive evidence**, not proved absence |
| Retained September 2024 WHO surveys | **46** | Older responses, not April 2026 attestations |
| Separate WHO 2021–22 historical office/service records | **228** | Historical activity, not current physical hosts |
| National EMA directory identity candidates | **34** across 30 areas | Identity is not national statutory permission |
| Directly opened first-party regulator-role descriptions | **31/34 (91.2%)**, **66** observations | **3** still missing: Iceland, Latvia, Sweden |
| Independent current complete amended statute + exact Team A authority-ID clearing | **0/34** | **34 outstanding**, institutional source description is not legal approval |
| International institutional graph | **47 nodes / 617 typed time-qualified edges** | No blanket guideline adoption or clinical signoff |
| Seven-condition institutional observations | **20** across all **7** keys | Not clinical appraisals of individual health claims |
| Unique provenance URLs | **268** | Some historic source primary facsimiles/instruments unaudited |

## Validation and GitHub write/readback

- Precommit JavaScript full-width CSV parsing, row/URL uniqueness, exact `TD-EMRN-NCA-019` and `021` name/M49 joins to the original EMA candidate table, all 66 source-backed roles and 268 distinct provenance URLs **PASS**. Four new IDs and three source IDs sequential without collisions.
- Initial source/validator commit `48bf94f90ecc06655665629eed39c947b98bc193` changed precisely three Team D paths; GitHub compare confirmed: `PROVENANCE.csv` (+3), `data/emrn_nca_national_remit_evidence_2026.csv` (+4), `validate.mjs` (assertion updates). Three GitHub blob readbacks confirmed: provenance `a42f1e5fe44b9f62d237aae858068ca46dfcdd23`; role `8d8bf9209e13fdb1d7fb1708825c8e20ce6612b5`; initial validator `67018beed820970083687c41c02e45c00321da68`.
- **Important caught-and-corrected failure:** initial full structural shim replay failed on an over-strict text-fragment match in new Batch 38 assertion (not data content). Corrected **only `validate.mjs`** in `048a77e02b5643989c07b3da90efb059a7b06b6a`; corrected validator blob `051942f08f048d3c4f8344fb2f35dd0e84e06c15` independently read back.
- **Full corrected checked-in structural validator PASS: 12,381 assertions, 39 GitHub-derived dependencies** reconstructed from **27 full addition-only PR file patches + 12 direct branch file reads** in a read-only V8 JavaScript filesystem/assertion shim. Observed 249 statuses / 205 assigned / 44 unverified, 105 office hosts, 47 nodes, 617 edges, 20 condition refs, 34 EMA candidates, 66 direct remit observations, 268 sources.
- **Not a native Node command, GitHub Actions, complete amended-law audit, exact Team A join, original facsimile audit, clinical/scientific or legal approval.** Run `node docs/atlas/handoffs/team-d/validate.mjs` in a full checkout and official CI if enabled. Documentation commit readbacks and compare must be verified separately.

## Open gaps — preserve conflicts rather than fabricate

1. **44** unassigned WHO regions: direct current administrative WHO authority is required. No UN-parent, foreign territory, historical SIDS report, WER surveillance-region or SPH data can substitute. Indonesia WPRO transfer effective **2025-05-23** and Algeria AFRO vs UN Northern Africa are distinct; U.S. governance remains separately pending.
2. **144** geographic candidates without direct April 2026 affirmative host survey evidence: verify WHO office type/location and contemporaneous dates, not 2024 profile retention or the **228** 2021–22 historic service records. Physical host vs MCO service vs liaison/special representative/focal point remain distinct.
3. **Iceland, Latvia, Sweden** need directly opened current regulator roles; Latvia official indexed sources yielded 403 on direct open, Iceland new official pages 403/old ima.is retired, Sweden Läkemedelsverket direct pages JS-only. **All 34** still need current fully amended and independent national legal-remit/delegation review and exact Team A IDs, with Malta conflicting agency role descriptions and distinct EU Commission centralised grants.
4. PAHO ECC **dated 14 vs undated 13** service territories (French Saint Martin distinct from Dutch Sint Maarten); Boisson former term January vs February 2021; SCI North Macedonia exact 2024 accession day/instrument; Africa CDC APPM **8 signed, only Egypt named / 15 intent / 55 target**; IDF NAC **22 vs 23** count; AOECS **43+1+3 versus 41+6** and nonmembers; HI member/partner boundaries; Codex 1991 observer instrument; 29-vs-35 HEARTS adoption/initiative distinction, local pathway versions and ASEAN nonbinding work, primary instruments, Teams A/B/C exact joins and independent clinical/scientific appraisal.
5. Network structure and WHO coverage are **not** an overall acceptance percentage; legal/statutory, source-facsimile and clinical-scientific original criteria stay open. **No** public-facing claims/medical calculators updated.

## Progress bars (independent dimensions)

- Direct-current WHO region **205/249 = 82.3%** `████████████████░░░░`; unresolved **44/249**.
- Affirmative April 2026 WHO host **105/249 = 42.2%** `████████░░░░░░░░░░░░`; lacking equivalent affirmative **144/249**.
- Direct official role descriptions **31/34 = 91.2%** `██████████████████░░`; three candidate descriptions remain.
- Independent full amended statute/delegation + Team A identity review **0/34 = 0%** `░░░░░░░░░░░░░░░░░░░░`; all 34 remain. None constitutes clinical clearance.

## Exact reusable continuation prompt

```text
Continue Research Team D in [https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/pull/70).

Read `docs/atlas/handoffs/team-d/CONTINUATION_PROMPT.md` on branch `research/atlas-team-d-20261104`, including its latest checkpoint and original acceptance criteria.

Verify live GitHub state and continue autonomously. Prioritize unresolved WHO assignments, office evidence, regulator authority, and international network relationships. Preserve all historical-versus-current distinctions, source conflicts, existing research, and scope restrictions. Commit, validate, and verify readbacks regularly. Modify only Team D's research directory. Do not modify the public website, main, or other teams; do not merge or mark the PR ready.

If unfinished, save a complete standalone GitHub checkpoint. End with a concise status, this same reusable continuation prompt, and updated visual progress bars for WHO regional assignments, verified office-host evidence, and remaining research gaps. Do not equate structural validation with legal or clinical approval.
```
