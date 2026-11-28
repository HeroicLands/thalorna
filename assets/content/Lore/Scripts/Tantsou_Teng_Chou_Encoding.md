---
shortcode: tanttengchouenc
name: {full: Tantsou Teng Chou Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: tant
  font: teng-chou
  mappings: {}
  rules: {normalization: NFC, matching: longest-first, roundTrip: none, word-spaces: none}
---

This encoding writes [[skill-tantsoulng|Tantsou]] in teng-chou, the face of [[skill-tengchouscript|Teng Chou]]. A passage selects it with `enc=tanttengchouenc`. The note supplies its language and font. Where several words share a writing, decoding returns every reading in brackets, separated by `|`.

## How a passage is written

- **Every word comes from the lexicon.** A word with no writing in the lexicon is an error at the word, never a spelling by sound.
- **A root is one character.** Tantsou roots are single syllables, and each has its own character.
- **A compound is its roots side by side.** Characters follow one another with no ending and no join between them, as the roots follow one another in speech. A compound entry states its roots in `built`, unless its entry states a writing of its own.
- **A word that stands for two entries written differently** is an error naming both senses. The remedy is to type that word's signs directly, choosing the entry by its sense.
- **A word space is not written.** Words follow one another with no space between their characters, and decoding puts a space after each character's word. The script draws no points; Roman punctuation follows the shared controls.

## Direction

Teng Chou runs in vertical columns, from top to bottom, with the columns read from right to left. A passage in a vertical scroll lays out in that order.

## Verse

A poem pairs its English with the roman Tantsou text, the second carrying the encoding:

```markdown
::: {.verse form=recitation lang=en work=K}
English text of the poem
:::

::: {.verse form=recitation lang=tant enc=tanttengchouenc work=K}
roman Tantsou text of the poem
:::
```

Both blocks carry the same `work`, and each line of the Tantsou block is a line of the poem in roman Tantsou words that the lexicon holds.

## Foreign names

A foreign name, or anything the lexicon does not hold, is written sign by sign through [[doc-zxxtengchouenc|Teng Chou Literal Encoding]]. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard.
