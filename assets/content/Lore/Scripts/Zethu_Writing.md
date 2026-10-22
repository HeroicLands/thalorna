---
shortcode: mapzethu
name: {full: Zethu Writing, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  map:
    name: zethu
    logographic: true
    rows:
      - [" ", " "] # U+0020
    fonts: [{font: khelathi-zethu-glyphs}]
---

Zethu Writing sets Khelathi in the signs of [[skill-khelthzscrpt|Khelathi-zethu Script]]. A passage marked with `map=zethu` and `lang=khel` is written word by word from the [[skill-khelathlng|Khelathi Language]] lexicon, because the script writes meanings rather than sounds: each word takes the signs its lexicon entry states, or the signs of the parts it is built from.

```text
[zeghet ez igelu]{lang=khel font=khelathi-zethu-glyphs map=zethu}
```

## How a passage is written

- **Every word comes from the lexicon.** A word with no writing in the lexicon is an error at the word, never a spelling by sound.
- **A word built from parts** is its parts' writings in order, unless its entry states a writing of its own.
- **A word that stands for two entries written differently** is an error naming both senses. The remedy is to type that word's signs directly, choosing the entry by its sense.
- **A space is the gutter between two signs.** The script has no points, so a full stop or a comma in a passage is an error at the mark; leave the mark out.

A foreign name, or anything the lexicon does not hold, is written sign by sign through [[doc-mapzethumdc|Zethu Codage]].
