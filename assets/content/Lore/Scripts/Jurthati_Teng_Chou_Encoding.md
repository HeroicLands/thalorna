---
shortcode: jurttengchouenc
name: {full: Jurthati Teng Chou Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: jurt
  font: teng-chou
  mappings: {}
  rules: {normalization: NFC, matching: longest-first, roundTrip: none, word-spaces: none}
---

This encoding writes [[skill-jurthatlng|Jurthati]] in teng-chou, the face of [[skill-tengchouscript|Teng Chou]]. A passage selects it with `enc=jurttengchouenc`. The note supplies its language and font. Where several words share a writing, decoding returns every reading in brackets, separated by `|`.

## How a passage is written

- **Every word comes from the lexicon.** A word with no writing in the lexicon is an error at the word, never a spelling by sound.
- **A content word is the character for its meaning.** A noun, a verb root, a number or a color that has a Teng Chou character is written in it, the character its [[skill-tantsoulng|Tantsou]] cognate carries in the sense the cognate names.
- **Particles, endings, island words and any word without a character are written in the syllable signs.** A sign stands for one syllable and sits lighter and smaller than a character, so a column shows at a glance which words are characters and which are signs. A syllable is a consonant and its vowel, or a vowel alone, or a closing _n_; an _n_ before a vowel is the sign for that syllable, and the two vowels of a pair such as _ai_ or _ou_ are two signs. A sound the signs do not cover leaves its word without a writing.
- **A compound is its parts side by side.** Characters and signs follow one another with no ending and no join. A compound entry states its parts in `built`, unless its entry states a writing of its own.
- **A word that stands for two entries written differently** is an error naming both senses. The remedy is to type that word's signs directly, choosing the entry by its sense.
- **A word space is not written.** Words follow one another with no space between their characters, and decoding puts a space after each character's word. The script draws no points; Roman punctuation follows the shared controls.

## Direction

Teng Chou runs in vertical columns, from top to bottom, with the columns read from right to left. A passage in a vertical scroll lays out in that order.

## Verse

A poem pairs its English with the roman Jurthati text, the second carrying the encoding:

```markdown
::: {.verse form=counted-verse lang=en work=K}
English text of the poem
:::

::: {.verse form=counted-verse lang=jurt enc=jurttengchouenc work=K}
roman Jurthati text of the poem
:::
```

Both blocks carry the same `work`, and each line of the Jurthati block is a line of the poem in roman Jurthati words that the lexicon holds.

## Foreign names

A foreign name, or anything the lexicon does not hold, is written sign by sign through [[doc-zxxtengchouenc|Teng Chou Literal Encoding]]. Literal glyph codes between `⟦` and `⟧` select the font’s glyphs directly: the face’s codes name each syllable sign by its syllable, such as `⟦ka⟧`, and each character by its name in capitals, such as `⟦HO⟧`.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard.
