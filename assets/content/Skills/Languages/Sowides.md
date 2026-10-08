---
shortcode: sowideslng
name: {full: Sowides Language, aliases: [Sowides]}
type: skill
subType: language
description: "The hard, clipped tongue of the steppe confederations of the Khazryn, spoken from the cold northern coast to the stone desert before Tānvür."
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
  flags: {"thalorna": {lang_family: Sowides (isolate)}}
---

Sowides is the tongue of the herding confederations of the [[place-khzryndsrtrgn|Khazryn Desert Region]], who call themselves _Sowides_, "the riders", from _sowid_ "rider" and _-es_ "a people". Each confederation speaks it with its own turns of phrase, and a rider of one confederation is understood in all the others. It is the tongue in which caravan passage is bargained for, so a caravan-master who crosses the Khazryn learns its numbers and its courtesies first. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Sounds

Sowides is clipped and hard-edged. Words close on _k_, _q_, _d_, _n_, _r_ or _s_; a throaty _q_ and a lip-rounded _kw_, _gw_ and _qw_ run through it; and every two-syllable stem swings between a front vowel and a back one, so that speech rocks from _e_ and _i_ to _a_, _o_ and _u_ and back. Every letter is one sound: Sowides writes no two-letter sound like _sh_ or _kh_, and it has no _f_, _v_ or _z_.

### Consonants

| Letter      | Sound                                                             |
| ----------- | ----------------------------------------------------------------- |
| `p` `t` `k` | as in "pin", "tin", "kin"                                         |
| `q`         | a _k_ made far back, where the tongue meets the soft palate's end |
| `b` `d` `g` | as in "bin", "din", "gift"; `g` is always hard                    |
| `m` `n`     | as in "man", "not"                                                |
| `r` `l`     | `r` is trilled; `l` is dark, as in "full"                         |
| `s` `h`     | `s` as in "sun"; `h` as in "hat"                                  |
| `w` `y` `j` | as in "wet", "yes" and "jam"                                      |

_kw_, _gw_ and _qw_ are single sounds at the start of a syllable: the stop said with the lips already rounded, as in "queen".

### Vowels

| Letter  | Sound                                       |
| ------- | ------------------------------------------- |
| `a` `à` | as in "father"; `à` held long               |
| `e` `è` | as in "bet"; `è` held long, as in "they"    |
| `i` `ì` | as in "bit"; `ì` held long, as in "machine" |
| `o` `ò` | as in "port"; `ò` held long                 |
| `u` `ù` | as in "put"; `ù` held long, as in "rule"    |

### Marks

| Mark  | Letters             | Kind   | Limit |
| ----- | ------------------- | ------ | ----- |
| grave | `à` `è` `ì` `ò` `ù` | length | any   |

The grave marks a long vowel and nothing else. Length changes meaning: _qìso_ is "price", and _qiso_ with a short vowel is no word at all.

### Syllables

| Rule          | Forms                                     |
| ------------- | ----------------------------------------- |
| Onsets        | `kw` `gw` `qw`                            |
| Codas         | `t` `k` `q` `d` `g` `n` `r` `l` `s`       |
| Finals        | `k` `q` `d` `n` `r` `s`                   |
| Doubled       | none                                      |
| Vowel pairs   | never                                     |
| Initial vowel | yes                                       |
| Mixed vowels  | `e` `i` `è` `ì` / `a` `o` `u` `à` `ò` `ù` |
| Signature     | `q` `k` `w` `j` `o` `à` `è` `ì` `ò` `ù`   |

A syllable opens on one consonant, on _kw_, _gw_ or _qw_, or on nothing at all, and closes on nothing or on one consonant. A word may begin with a vowel (_orqwen_, _atwìl_) but never sets two vowels side by side, never doubles a letter, and ends on a vowel or on _k_, _q_, _d_, _n_, _r_ or _s_.

**A stem of two syllables mixes its vowels:** one from the front group _e_, _i_ and one from the back group _a_, _o_, _u_, long or short. _kwedu_ "horse", _jedor_ "road" and _hosik_ "sand" are sound; a stem like _tolu_ or _seni_ is not Sowides. The rule holds for stems, so a compound of two stems keeps it in each half.

**Every stem carries a signature sound:** a _q_, _k_, _w_ or _j_, an _o_, or a long vowel. The _q_ of _yoleq_ "salt", the _w_ of _ruwel_ "water" and the _o_ of _hilod_ "sun" mark a word as Sowides even when it is heard alone.

### Stress

Stress falls on a long vowel where a word has one, and otherwise on the first syllable of each stem: **KWE**-du, **JE**-dor, a-**TWÌL**.

## Building words

Every Sowides word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[doc-khazrynlex|Khazryn Lexicon]]. The thing described comes first and the word describing it second: _kwedu_ "horse" and _ruweq_ "wind" make _kweduruweq_ "horse of the wind".

### Joins

| Meeting | Rule     | Letters |
| ------- | -------- | ------- |
| `V+V`   | `insert` | `h`     |
| `C+C`   | `merge`  |         |

- **Two vowels are held apart by _h_.** _kwedu_ and _-es_ make _Kweduhes_, "the horse people".
- **Two of the same consonant become one.** _jedor_ "road" and _roqid_ "camp" make _jedoroqid_, "road camp", where a caravan halts.

Every other meeting leaves both parts as they are.

### Suffixes

| Suffix | Sense                |
| ------ | -------------------- |
| `-es`  | a people or tribe    |
| `-oq`  | a confederation      |
| `-or`  | a range or grazing   |
| `-ud`  | one who does         |
| `-ye`  | a woman's given name |

### The paramount chief

Each tribe has its chief, the _dowek_. A confederation raised over many tribes has one paramount chief, the _orqwen_, to whom every _dowek_ in it has sworn, and the confederation an _orqwen_ holds is his _orqwenoq_. An _orqwen_ is made under open sky, before the chiefs, and his confederation lasts as long as he can hold it; at his death it may pass whole to a son, split among rivals, or fall to a stronger _orqwen_.

### Names

| Name       | Built from        | Meaning                             |
| ---------- | ----------------- | ----------------------------------- |
| Sowides    | _sowid_ + _-es_   | the riders                          |
| Kweduhes   | _kwedu_ + _-es_   | the horse people                    |
| Orqwenoq   | _orqwen_ + _-oq_  | a confederation under one paramount |
| Gweranoq   | _gweran_ + _-oq_  | the storm confederation             |
| Dikraqor   | _dikraq_ + _-or_  | the stone range                     |
| Jadekud    | _jadek_ + _-ud_   | a raider                            |
| Wogeltolis | _wogel_ + _tolis_ | a man's name: wolf-spear            |
| Tijòdye    | _tijòd_ + _-ye_   | a woman's name: star                |

**A confederation** is named by the stem of its emblem or its country with _-oq_, and its people by the same stem with _-es_. **A range** takes _-or_ after what marks it: stone, grass, salt. **A man's name** is two stems with no suffix, a beast or a weather and then a weapon or a virtue; **a woman's name** is one stem with _-ye_.

## Writing

The Sowides write nothing but signs. Each tribe has a mark, cut into the stone over its wells and the trunks of its oldest palms, and a rider carries his confederation's passage-token, which bears the sign of the _orqwen_ who issued it. Records, treaties and debts are kept in memory and witnessed aloud.
