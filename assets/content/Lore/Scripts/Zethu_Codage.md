---
shortcode: zxxzethuenc
name: {full: Zethu Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: zxx
  font: khelathi-zethu-glyphs
  mappings: {}
  rules: {normalization: NFC, matching: longest-first, roundTrip: canonical}
  accepts: []
---

This encoding writes the glyphs of khelathi-zethu-glyphs by their font codes inside `⟦` and `⟧`. Word spaces remain spaces and occupy blank cells in vertical scrolls. The order of the glyphs and composition controls is the order written.

```text
::: {enc=zxxzethuenc}
⟦HOUSE_OF VERTICAL_JOINER THRONE BEGIN_ENCLOSURE WEIGH HORIZONTAL_JOINER SURVEY SAIL VERTICAL_JOINER SIX END_ENCLOSURE⟧
:::
```

## Composition

`VERTICAL_JOINER` stacks the preceding and following signs; `HORIZONTAL_JOINER` puts them side by side. `BEGIN_SEGMENT` and `END_SEGMENT` group a segment. `BEGIN_ENCLOSURE` and `END_ENCLOSURE` enclose a cartouche. The `INSERT_TOP_START`, `INSERT_BOTTOM_START`, `INSERT_TOP_END` and `INSERT_BOTTOM_END` controls place a following sign in a corner. These are the font’s glyph codes, used inside the same literal frame as the signs.
