---
shortcode: atarzadilng
name: {full: Ātárzādi Language, aliases: [Atarzadi Language]}
type: skill
subType: language
description: "The harsh, long-voweled tongue of the Ātárzád, a Desert-family cousin of Dunhari."
tags: []
data: {icon: icon-speaking, templatePriority: null, packFolder: language}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Desert}}
---

Ātárzādi is the tongue of the [[affiliation-tribestrzd|Tribes of Ātárzád]], the twelve tribes who took four of the [[lore-khazrynclt|Tellumi]] cities in the oasis belt at the foot of the Grazian Mountains. It is a tongue of the Desert family, a cousin of [[skill-dunharlng|Dunhari]], and like Dunhari it is written in the [[skill-dnshkscrpt|Dûnshâk]] script. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Sounds

Ātárzādi is the harshest tongue of the belt: full of _kh_, _gh_, _sh_ and _zh_, heavy with long vowels, and closed at the end of every word by a consonant. It shares Dunhari's fricatives and its uvular _q_ but none of its gliding vowels, and it lacks Dunhari's _p_, _f_ and _w_. Speakers of the two tongues understand each other's numbers, kin-words and a good part of their trade talk, and very little else.

### Consonants

| Letter              | Sound                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `b` `t` `d` `k` `g` | as in "bin", "tin", "din", "kin", "gift"                                                                                  |
| `q`                 | a _k_ made far back in the throat                                                                                         |
| `m` `n` `r` `l`     | as in "man", "not"; `r` is trilled; `l` as in "leaf"                                                                      |
| `s` `z` `sh` `zh`   | as in "sun", "zeal", "ship", and the _s_ of "measure"                                                                     |
| `kh` `gh` `h` `y`   | `kh` is a scraped _h_ at the back of the mouth; `gh` its voiced partner, a gargled _g_; `h` and `y` as in "hat" and "yes" |

### Vowels

| Letter      | Sound                                       |
| ----------- | ------------------------------------------- |
| `a` `ā` `á` | as in "father"; `ā` held long; `á` stressed |
| `e` `ē` `é` | as in "bet"; `ē` held long, as in "they"    |
| `i` `ī` `í` | as in "bit"; `ī` held long, as in "machine" |
| `o` `ō` `ó` | as in "port"; `ō` held long, as in "note"   |
| `u` `ū` `ú` | as in "put"; `ū` held long, as in "rule"    |

### Marks

| Mark   | Letters             | Kind   | Limit         |
| ------ | ------------------- | ------ | ------------- |
| acute  | `á` `é` `í` `ó` `ú` | stress | one in a word |
| macron | `ā` `ē` `ī` `ō` `ū` | length | any           |

The macron marks a long vowel, and length belongs to the word: _kēlum_ is "sheep" only with its long _ē_. The acute marks stress where the stress rule does not put it, and a word carries at most one.

### Syllables

| Rule          | Forms                                                               |
| ------------- | ------------------------------------------------------------------- |
| Onsets        | a single consonant                                                  |
| Codas         | `b` `t` `d` `k` `g` `q` `m` `n` `r` `l` `s` `z` `sh` `zh` `kh` `gh` |
| Finals        | `t` `d` `k` `q` `m` `n` `r` `l` `s` `z` `sh` `kh`                   |
| Doubled       | none                                                                |
| Vowel pairs   | never                                                               |
| Initial vowel | yes                                                                 |
| Final vowel   | no                                                                  |
| Signature     | `ā` `ē` `ī` `ō` `ū`                                                 |

A syllable opens on one consonant or on nothing and closes on any consonant but _h_ or _y_. A word never sets two vowels side by side, never doubles a letter, and **always ends on a consonant**: _ūzhem_ "water", _deshāk_ "road", _khūmez_ "sand". **Every stem holds a long vowel**, so a name built from Ātárzādi stems always carries a macron.

### Stress

Stress falls on the last long vowel of a word: de-**SHĀK**, **ŪZH**-em. A word with no long vowel is stressed on its last syllable. An acute marks a short vowel that takes the stress against that rule.

## Building words

Every Ātárzādi word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[doc-khazrynlex|Khazryn Lexicon]]. The thing described comes first: _qūrbel_ "well" and _lūkhem_ "council" make _qūrbelūkhem_, the council of the well.

### Joins

| Meeting | Rule    | Letters |
| ------- | ------- | ------- |
| `C+C`   | `merge` |         |

Two of the same consonant meeting become one, as the _l_ of _qūrbel_ and _lūkhem_ does. Every other meeting leaves both parts as they are.

### Suffixes

| Suffix | Sense                |
| ------ | -------------------- |
| `-ūn`  | a people             |
| `-ōd`  | a tribe              |
| `-ēz`  | a place or holding   |
| `-ekh` | one who does         |
| `-ōr`  | a man's given name   |
| `-āt`  | a woman's given name |

### Names

| Name      | Built from        | Meaning                  |
| --------- | ----------------- | ------------------------ |
| Zhōqarōd  | _zhōqar_ + _-ōd_  | a tribe: the sons of war |
| Hōmzelūn  | _hōmzel_ + _-ūn_  | the whole people         |
| Shēkhulēz | _shēkhul_ + _-ēz_ | the place of the flame   |
| Zhōqarekh | _zhōqar_ + _-ekh_ | a warrior                |
| Gherōsōr  | _gherōs_ + _-ōr_  | a man's name: horse      |
| Yūremāt   | _yūrem_ + _-āt_   | a woman's name: song     |

**A tribe** is named by the stem of its founder or its emblem with _-ōd_, "the sons of". **A holding** takes _-ēz_ after what it holds: a spring, a garden, a flame. **A given name** is one stem with _-ōr_ for a man or _-āt_ for a woman; a tribe's name follows it.
