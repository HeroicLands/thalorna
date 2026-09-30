---
"thalorna": patch
---

**Every name can now be found by typing it**

Names in Thalorna carried letters that no search box can reach. A search that
folds accents normalises to NFD and drops combining marks, which quietly handles
_â_ — it is an _a_ wearing a circumflex, so typing `harn` finds Hârn with nobody
arranging it. Thorn, eth and ash are not accented letters. They are letters in
their own right with no plain letter inside them to reduce to, so typing `thorr`
could never reach a name spelled with a thorn, and position made it worse:
_Skjaldmær_ at least answered a `skjaldm` prefix, while _Þórr_ failed on the
first keystroke.

Those letters are now written out. Accents stay throughout, because they cost a
reader nothing:

| sound                         | now           | was |
| ----------------------------- | ------------- | --- |
| voiceless dental fricative    | `th`          | þ   |
| its merged voiced counterpart | `d`           | ð   |
| the low front vowel           | `ae`          | æ   |
| the rounded back vowel        | `ö`           | ǫ   |
| long vowels                   | `á é í ó ú ý` | —   |

So Óðinn is **Ódinn**, Þórr is **Thórr**, and _seiðr_ is _seidr_. O-ogonek folds
correctly but is missing from two of the three faces the system ships, so it
becomes o-umlaut and stops falling back mid-word in sheet headers.

The northern assembly is the one word that does not take `th`: spelled that way
it becomes _thing_, an ordinary English noun with some 2,800 uses already in the
tree, and the word would never be found again. It is the **ting**.

Two names contradicted the tree rather than the rule, and follow it now —
Asgarthul is **Asgardul**, since the element is `gard` in Asgard, Midgard,
Tvalgard and Isgard; and Blóth is **Hörgsvangr**, since blood is `blod` in
Blodtusc and its own note calls it the Place of Blood-Sacrifice. Blóthöll keeps
its `th`, which is a seam between two words rather than one sound, and Vithgard
keeps its own — it was always plain ASCII and passes untouched.

Filenames were reduced by the same broken rule, which deleted what it could not
decompose: Óðinn sat on disk as `Oinn.md` and Æthería as `theria.md`, a file that
sorted under _t_ and began mid-word. They transliterate now, along with 27 paths
that had never been folded to ASCII at all.

Nothing that identifies a document moved. Shortcodes, addresses, pack folders and
`home:` references are unchanged, so saved data and cross-package links resolve
exactly as before. The rule itself is written down, in a **Romanising Nordmal**
section in the language note and a **Romanising Thalorna** section in the lore
note, so the next name gets it right without anyone re-deriving it.
