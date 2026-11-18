# Atlas folklore discovery — scale-up plan and Europe / Southeast Asia priorities

**Created:** 2026-11-18  
**Status:** catalog and source discovery; *no medical validation*. Tracking issue: [#141](https://github.com/PortalHunter/Ethnicy-Based-Optimal-Weight/issues/141).

## Mission and realistic scale

**No hard ceiling at 100.** A 100-attestation pilot is a **quality-calibration sample only**. The long-term archive should aim for **thousands of fully traceable source attestations** if rights, quality and community permissions allow. Count separately:
1. **Collection portals**: search endpoints/corpora, not stories.
2. **Indexed tale entries**: titles with source work + exact printed locator; health content unexamined, independence unverified.
3. **Footnote/variant references**: titles or citations appearing in an apparatus, which may duplicate published tales or be only summaries.
4. **Source-located leads**: specific archive pages or academically discussed motifs, mostly unverified.
5. **Verified attestations**: inspected original sources with provenance, version/edition, narrator/collector information where appropriate, and rights status.
6. **Reviewed hypotheses**: separately tested medical questions and their counterevidence. These must never be conflated with stories or become medical advice.

**Working count after this pass:** 410 *indexed printed tale entries*, 57 *note-story references*, and 43 pre-existing *raw source leads* = 510 **metadata records of different kinds**. Not 510 unique stories or 510 medically meaningful discoveries. Work catalogs have multiple entries per book, and cross-book duplication is expected.

## Regional priorities (new focus)

**Europe first:** Ireland, UK and wider Celtic collections, Norway, mainland German-language collections, Italy and southern Europe, Baltic, Slavic and Eastern European. Compare 19th-century edited translations to original regional and local-language records; do not treat "Celtic" or "European" as a homogeneous cultural or genetic category.

**Southeast Asia first:** Philippines, Laos, Malaysia/peninsular Malay traditions, Sabah/Borneo, Indonesia, Thailand/Lan Na, Vietnam, Cambodia, Myanmar and diasporas. Focus on local-language sources and source communities alongside colonial-era English texts; do not conflate modern national borders with linguistic/cultural origins.

## New catalog batches

| Type | File | Count | Grounding |
|---|---|---:|---|
| Europe printed titles | [Jacobs index](intake/catalog-european-printed-tales-2026-11-18.csv) | 127 | `English Fairy Tales` (1890); `More English Fairy Tales` (1894); `Celtic Fairy Tales` (1892); `More Celtic Fairy Tales` (1894), verified tables of contents |
| Norway printed titles | [Norse index](intake/catalog-norse-printed-tales-2026-11-18.csv) | 59 | Asbjørnsen/Moe collection, Dasent's 1859 English edition, ebook 8933 contents |
| Southeast Asia printed titles | [Philippines and Laos index](intake/catalog-southeast-asia-printed-tales-2026-11-18.csv) | 224 | Mabel Cook Cole, 1916: 59; Dean S. Fansler, 1921: 117; Katherine Neville Fleeson, 1899: 48 |
| Footnote stories and candidate alternatives | [Fansler notes index](intake/catalog-philippine-fansler-footnote-references-2026-11-18.csv) | 57 | `Filipino Stories given in the Notes`, numbered book-page locators; may include abstracts, printed romances, repeat titles |
| Previously gathered archive and scholarly leads | [43 original leads](intake/source-leads-2026-11-18.csv) | 43 | Mixed archival-page and secondary references; all status `lead_only` |

The two Philippine collections are **distinct publication witnesses**; they are not necessarily independent oral-tradition witnesses. A book entry with multiple versions in its heading counts **one unresolved table-of-contents record** until the separate forms and narrators have been inspected.

## High-value variant leads

See [variant watchlist](variants/variant-candidate-watchlist-2026-11-18.csv). Specific examples:

- Cole's `The Flood Story` occurs under more than one historical group heading; source chronology and narratives must be compared.
- Cole's `The Sun and the Moon` occurs under several different community headings. Similar titles do **not** imply the same tale.
- Cole's `The Monkey and the Turtle` and Fansler's editorial section `The Monkey and the Turtle (three versions)` should be segmented into exact tellings and carefully checked for literary borrowing.
- Fansler indexes `The Monkey and the Crocodile (two versions)`, `The Adarna Bird (two versions)` in notes, plus two humpback and crow-color tales. Multiple in-book variants must not be collapsed.
- Compare Dasent's Norwegian `Why the sea is salt` against Fansler's `Why the Ocean is Salty` as a **literary diffusion / convergent motif control**, not as evidence of similar disease.

## Source discovery queue — verify at source, not pre-ingested

| Priority | Scope | Archive / initial link | Next action / caveat |
|---|---|---|---|
| P0 | Ireland | [Dúchas](https://www.duchas.ie/en/info/cbe) | Find distinct 1930s school-manuscript pages by term, location and informant; preserve edits/transcription vs manuscript; apply collection-specific licensing |
| P0 | Philippines | [Cole 1916](https://sacred-texts.com/book/philippine-folk-tales/contents), [Fansler 1921](https://www.fulltextarchive.com/book/Filipino-Popular-Tales/) | Read footnotes and source notes; identify storytellers, old journal publications, dates, transliterations, and independently told versions |
| P0 | Laos | [Fleeson 1899](https://tianmu.org/good-work-library/thai-and-lao/lanna-and-lao-folklore/laos-folk-lore-of-farther-india-katherine-neville-fleeson) | 48 translated tales indexed; verify missionary/translator framing against Lao texts and later narration; modern hosted edition notes AI-assisted editorial work |
| P0 | Norway | [Norse Asbjørnsen/Moe/Dasent](https://www.gutenberg.org/ebooks/8933) | Seek original Norwegian collection and other English editions; 59 English edition titles indexed |
| P0 | Vietnam | [Digitizing Việt Nam: Treasury of Vietnamese Folktales](https://www.digitizingvietnam.com/en/our-collections/vietnamese-folk-literature/truyen-co-tich-viet-nam) | Nguyễn Đổng Chi, eighth edition 2000, describes **201 folktales with variants**; **not yet indexed individually**; rights/translation and editions need review |
| P0 | Thailand | [Digital Library of Northern Thai Manuscripts](https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/?lang=en) | 6,137 manuscripts across **many genres**, not 6,137 tales. Manuscript-level metadata and CC BY-NC conditions; isolate folklore/medicine genres only |
| P0 | Laos | [Digital Library of Lao Manuscripts](https://digital.crossasia.org/digital-library-of-lao-manuscripts-about-dllm-collection/?lang=en) | Thai/Lao original-script collection includes medicine, ritual, myths, folktales; track unique microfilm and item IDs |
| P0 | Malaysia / Borneo | [Malay Magic, Skeat 1900](https://www.gutenberg.org/ebooks/47873), [Evans 1923](https://books.google.com/books?id=ZUkyAAAAIAAJ) | Identify actual observed accounts rather than broad chapter themes; compare 1913 Evans paper with 1923 republication to avoid double-counting |
| P0 | Indonesia/Laos/Thailand | [DREAMSEA repository](https://dreamsea.co/repository/) | Historic digitized manuscript collections; most manuscripts may not be folk narrative. Rights and script expertise first |
| P1 | Cambodia | [Khmer legends corpus](https://khmercorpus.com/corpus/legends) | Khmer language corpus; check collection provenance, original storytellers, permissions and true reuse terms per item |
| P1 | Germany | [Grimm/Hunt English edition](https://www.gutenberg.org/ebooks/5314) | Trace original 1812/1815/1857 `Kinder- und Hausmärchen` and version differences; don't treat English translation as original manuscript |
| P1 | Italy | [Crane: Italian Popular Tales](https://www.gutenberg.org/ebooks/23634) | **Confirm edition URL and specific content** before new title-level intake; regional provenance |
| P1 | Estonia | [Estonian Folklore Archives](https://www.folklore.ee/era/eng/) | Original languages and field-collection witness distinctions; avoid modern scientific paraphrase as raw tale |
| P1 | Myanmar | [Burmese folktales catalog](https://www.si.edu/object/kingdom-lost-drop-honey-and-other-burmese-folktales-maung-htin-aung-and-helen-g-trager-illustrated%3Asiris_sil_21467) | Work-level lead, 15 tales in one published collection; check current copyright/availability |

**Do not count** the Vietnamese book's 201 tales, Thai archives' 6,137 manuscripts, or other large collection sizes in the 510 recorded metadata entries until individual safe source-located records are created.

## Health signal screening categories (hypothesis only)

- Sleep, nightmares, paralysis and sudden death stories (distinct phenomena)
- Illness language, outbreaks, fever and community explanations of death
- Child development, disability and changeling narratives (avoid stigmatizing interpretations)
- Pregnancy, childbirth, infant-care and postpartum narratives
- Trauma, altered experience and culturally patterned distress
- Food, plants, weather, animals, water and environmental exposure
- Healing, charms and remedies as historical *descriptions*, never recommendations
- Social impacts: stigma, exclusion, household care and fear of contagion
- **Negative controls:** narrative entries with no plausible illness/health content and tales chosen only for name resemblance

All remain `not_screened` until individual sources are actually read.

## Mechanically scalable process

1. **Portal discoverer**: record institution, official collection ID, permitted interface/API, license, embargo and language.
2. **Manifest expansion**: generate one row per source-specific **tale locator** or archivally distinct witness, with provenance and source link. Do not fabricate unique URLs: for books, use the verified book URL and a separate exact chapter locator.
3. **Rights gate**: link-only metadata by default. Explicitly separate public domain status of original work from the license of modern digital editions, transcriptions or scans.
4. **Story family clusters**: build weak `candidate` edges by title/subject; prohibit independent/derivative inference without page-level evidence and chronological sources.
5. **Edition comparison**: preserve original quotations only where lawfully permitted and evidence needed; segment versions, editor notes, translations, conflicting endings and historical reprints.
6. **Health triage**: index narrative features without interpreting them as diagnoses; sample a controlled fraction for expert review; include unrelated stories and known literary borrowing.
7. **Quality metrics**: source validity, duplicate rate, edition/witness independence, region/language representation, expert agreement, wrong medical cue rate, rights coverage and chronology completeness.
8. **No clinical promotion**: any medically relevant hypothesis requires a separate Atlas evidence review and explicit gates.

## Reasonable scale targets

- **Now:** source-indexed catalogs with provenance caveats; this pass contains 510 metadata records, not medically screened.
- **Next:** trace the 10 watchlist clusters and locate original-language editions; add archives from Vietnam, Thailand, Malay Peninsula/Indonesia, mainland Europe.
- **500–1,000+ reviewed candidates:** only after URLs, rights and exact source locators are inspected; measure real unique witnesses, not just catalog rows.
- **Thousands:** long-term *open-ended* target, dependent on source permissions, robust deduplication, language/community partnerships and reviewer resources.

Preserve source URL, date viewed, current source terms, a canonical document ID, translation chain, and a note when the archive has changed. Maintain tombstone/provenance records for removed items to avoid silent reuse.
