# Atlas folklore — collection expansion, 2026-11-18 (round 3)

**Status:** link-only exploratory catalog; no clinical verification. All new work is in the folklore branch, not `main`, Team B or any live Atlas clinical evidence.

## Readout

- Previous linked metadata rows: **731**.
- [92 additional European and Armenian/Caucasus printed tale titles](intake/catalog-europe-caucasus-tales-2026-11-18-batch-003.csv):
  - 28 Swedish: Klara Stroebe, `The Swedish Fairy Book` (1921).
  - 18 Romanian: Mite Kremnitz, `Roumanian Fairy Tales` (1885).
  - 17 Russian chapbook-translated stories: Robert Steele, `The Russian Garland` (1916; source chapbook traditions date to circa 1830, per publisher).
  - 29 Armenian: A. G. Seklemian, `The Golden Maiden` (1898). **Caucasus transcontinental**, not falsely classified exclusively European.
- [63 additional Philippine historical chapter or tale locators](intake/catalog-philippine-1902-1907-regional-stories-2026-11-18-batch-004.csv):
  - 14 actual titles: John Maurice Miller, `Philippine Folklore Stories` (1904).
  - 3 titles: Clara Kern Bayliss article in `Journal of American Folk-Lore` (1902).
  - 22 Visayan folk tale chapters from Panay field collection (collected 1904; printed 1906–1907), B. L. Maxfield and W. H. Millington.
  - 23 Tagalog folk tale chapters by Fletcher Gardner (1907).
  - 1 separately presented Tagalog Aladdin adaptation by Gardner.
  - **24 of these 63** have exact section and chapter locators but **blank title fields** pending original transcription. Do not fill with invented names. Some narrators are students/teachers whose authorship and consent rights need careful review.
- [9 Philippine source-lineage leads for Beyer's 1913 paper](intake/philippine-source-lineage-beyer-1913-2026-11-18.csv): tags historical narrators/collectors and translations of Ifugao, Bontok, Manobo, Tagbanwa material. Quotation in a later paper does not make a new oral attestation.
- [8 published Tinguian passage / original-collector leads](intake/tinguian-1915-passage-variant-leads-2026-11-18.csv) from Fay-Cooper Cole's 1915 `Traditions of the Tinguian`. They remain within-one-work observations, **not eight unique tales**.
- [Variant comparison watchlist](variants/variant-candidate-watchlist-2026-11-18.csv) expanded **17 → 19** groups, linking 1902/1906–07 monkey-and-turtle versions to 1916 and 1921 anthologies and identifying possible related Benito and Tinguian sources.
- **New snapshot: 903 distinct internal metadata IDs** = 731 + 92 + 63 + 9 + 8. **Only 106 direct URL strings** appear in those 903 records; book URLs intentionally repeat across chapters. Total is *not* independently verified storytellers, sources, unique stories, or medical discoveries.

## Selected sources and original-publication context

| Title / corpus | Source | Main risk |
|---|---|---|
| Swedish fairy tales `The Werewolf`, `First Born, First Wed` etc. | https://www.gutenberg.org/ebooks/37193 | 1921 American edited translation; locate older Swedish tellings |
| Romanian `The Voice of Death`, `Youth Without Age and Life Without Death` | https://www.gutenberg.org/ebooks/20552 | Published in 1885; some tales trace to named literary authors, so published folk text ≠ independent witness |
| Russian chapbook legends | https://www.gutenberg.org/ebooks/30109 | Translation circa 1916 from 1830-era printed chapbooks; some Western European narratives reused |
| Armenian `The Golden Maiden`, `Dragon-Child and Sun-Child` | https://www.gutenberg.org/ebooks/46944 | Compiled 1898 English edition; original-language and regional narrator uncertain |
| Philippine Miller tales including `Quicoy and the Ongloc` | https://www.gutenberg.org/ebooks/10771 | Published 1904; moralistic educational rewriting and genre influence |
| Philippine 1902 Bayliss, Visayan 1906–07 and Tagalog 1907 articles | https://www.gutenberg.org/ebooks/11028 | Reprint of multiple originally separate journal articles. Visayan material collected on Panay in 1904; do not treat translated similar stories as independent |
| Philippine origin myths | https://www.gutenberg.org/ebooks/46024 | 1913 paper frequently quotes prior collectors, one or more older transcripts and translated versions |
| Tinguian 1915 collected myths | https://www.gutenberg.org/ebooks/12545 | Reported six tellers from four towns for 26 core myths. Some passages in introduction are summaries of chapters and must not be counted as oral accounts |

## Promising but still speculative feature-screen leads

These require a cultural/genre review **before** medical interpretation:

- Swedish `The Werewolf`: transformations and human-animal boundary narrative; likely literary genre rather than objective illness report.
- Romanian `The Voice of Death` and `Youth Without Age and Life Without Death`: mortality narratives, **not clinical case histories**.
- Philippine `Quicoy and the Ongloc`: fear-related child narrative; different from claims that a supernatural creature actually exists.
- Philippine `The Queen and the Aeta Woman` or `The Child Saint`: medical/supernatural narrative details in collector English; read original context and identify stigmatizing colonial framing.
- Tinguian transformation, pregnancy and magic-water passages: descriptive cultural cosmology; not evidence of a disorder, magical cure or biological mechanism.
- Multiple Philippine `Monkey and the Turtle` editions: evidence opportunity concerns **variant transmission**, not medicine. Treat as methodological negative control.

## Next acquisition priorities

1. Inspect and transcribe missing titles for 24 Panay / Tagalog numbered chapters in the 1906–07 journal compilation.
2. Identify individual **narrator, collection place, original language, edition and archival manuscript** for Swedish, Romanian, Armenian, Philippine and earlier Irish items.
3. Search Vietnamese/Thai/Khmer/Malay/Indonesian original-language corpora, prioritizing archival catalog and local governance before copying.
4. Map source-dependency graphs for JAF → Cole 1916 → Fansler 1921, 1894 Villaverde → 1913 Beyer, Seidenadel 1909 → Beyer 1913, and 1915 Fay-Cooper Cole → 1916 Cook Cole when actual retelling texts can be compared.
5. Only then do blind descriptive feature extraction with alternative social and literary explanations and nonmedical controls.

## Boundaries

Everything is **link-only** until rights and culturally relevant permissions are cleared. Do not place full narratives, restricted Indigenous text, living informant identifiers or modern copyrighted translations in public GitHub or unapproved Drive. Do not infer medical conditions, genetic risks, treatment efficacy or health outcomes from folktales. The clinical Atlas pipeline remains separate.
