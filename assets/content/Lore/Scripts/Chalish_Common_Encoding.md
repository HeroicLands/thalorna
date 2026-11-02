---
shortcode: zxxchalishcommonenc
name: {full: Chalish Common Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: zxx
  font: chalish-pilam-common
  mappings: {}
  rules: {normalization: NFC, matching: longest-first, roundTrip: canonical}
  accepts: []
---

This encoding writes the glyphs of chalish-pilam-common by their font codes inside `⟦` and `⟧`. Word spaces remain spaces and occupy blank cells in vertical scrolls. The order of the glyphs and composition controls is the order written.

```text
::: {enc=zxxchalishcommonenc}
⟦MOON⟧ ⟦n13⟧ ⟦MAN⟧ ⟦MOUTH⟧ ⟦SKY⟧ ⟦STAR⟧ ⟦STONE⟧ ⟦EYE⟧ ⟦MOON⟧ ⟦EAST⟧ ⟦n0⟧
:::
```
