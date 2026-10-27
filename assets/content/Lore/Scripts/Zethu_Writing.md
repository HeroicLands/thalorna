---
shortcode: khelzethuenc
name: {full: Khelathi Zethu Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: khel
  font: khelathi-zethu-glyphs
  mappings: {}
  rules: {normalization: NFC, matching: longest-first, roundTrip: canonical}
---

This encoding writes [[skill-khelathlng|Khelathi]] in khelathi-zethu-glyphs. A passage selects it with `enc=khelzethuenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## How a passage is written

- **Every word comes from the lexicon.** A word with no writing in the lexicon is an error at the word, never a spelling by sound.
- **A word built from parts** is its parts' writings in order, unless its entry states a writing of its own.
- **A word that stands for two entries written differently** is an error naming both senses. The remedy is to type that word's signs directly, choosing the entry by its sense.
- **A space separates signs.** In a vertical scroll it occupies a blank cell. The script draws no points; Roman punctuation follows the shared controls.

A foreign name, or anything the lexicon does not hold, is written sign by sign through [[doc-zxxzethuenc|Zethu Codage]].

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
