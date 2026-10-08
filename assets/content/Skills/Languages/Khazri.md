---
shortcode: khazrilng
name: {full: Tellumi Language, aliases: [Tellumi]}
type: skill
subType: language
description: "The measured, liquid tongue of the Tellumi, the old oasis people at the foot of the Grazian Mountains."
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
  flags: {"thalorna": {lang_family: Tellumi (isolate)}}
---

Tellumi is the tongue of the [[lore-khazrynclt|Tellumi]], the old oasis people whose walled cities stand in a narrow belt along the north foot of the Grazian Mountains, and it is the tongue of their clay archive. Their own name says where they came from: _Tellumi_ is "the people of the high springs", built from _te_ "high" and _lu_ "spring". Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Sounds

Tellumi is soft and unhurried. Every syllable opens on a single consonant, only the four sonorants _l_, _m_, _n_ and _r_ close one, and those four double where two parts of a word meet, so the doubled _ll_ of _Tellumi_ is the tongue's signature sound. There is no _o_, no rasp of _kh_ or _sh_, and no _z_, and those are the sounds Tellumi speakers find hardest in [[skill-atarzadilng|Ātárzādi]], the tongue of the people who took four of their cities.

### Consonants

| Letter      | Sound                                                          |
| ----------- | -------------------------------------------------------------- |
| `p` `t` `k` | as in "pin", "tin", "kin", lightly breathed                    |
| `b` `d` `g` | as in "bin", "din", "gift"; `g` is always hard                 |
| `m` `n`     | as in "man", "not"                                             |
| `l` `r`     | `l` is clear, as in "leaf"; `r` is a single tap of the tongue  |
| `s` `h`     | `s` is always as in "sun", never as in "rose"; `h` as in "hat" |
| `v` `y`     | as in "vine" and "yes"                                         |

### Vowels

| Letter | Sound                  |
| ------ | ---------------------- |
| `a`    | as in "father", short  |
| `e`    | as in "bet"            |
| `i`    | as in "machine", short |
| `u`    | as in "rule", short    |

Tellumi writes no marks. A vowel is always pronounced the same way, so a word can be read aloud from its spelling alone.

### Syllables

| Rule          | Forms               |
| ------------- | ------------------- |
| Onsets        | a single consonant  |
| Codas         | `l` `m` `n` `r`     |
| Finals        | `l` `m` `n` `r`     |
| Doubled       | `ll` `mm` `nn` `rr` |
| Vowel pairs   | never               |
| Initial vowel | no                  |

A syllable is a consonant and a vowel, or a consonant, a vowel and one of the four sonorants. So a word never begins with a vowel, never sets two vowels side by side, and ends either on a vowel or on _l_, _m_, _n_ or _r_. Two consonants meet only across a syllable break, and the first of them is always a sonorant: _velkun_ "lost" and _talbem_ "tower" are sound, and a word with _pt_ or _sk_ in it is not Tellumi.

### Stress

Stress falls on the syllable that a doubled sonorant opens: te-**LLU**-mi, ten-**NE**-li-mar. A word with no doubled sonorant is stressed on its first syllable: **NE**-lim, **TAL**-bem.

## Building words

Every Tellumi word is a stem, two or more stems set together, or a stem with a suffix after it. The stems and their senses are in the [[doc-khazrynlex|Khazryn Lexicon]]. A modifier comes before what it modifies: _te_ "high" before _lu_ "spring" makes the high spring.

### Joins

| Meeting | Rule     | Letters         | Where         |
| ------- | -------- | --------------- | ------------- |
| `V+V`   | `drop`   |                 | anywhere      |
| `V+C`   | `double` | `l` `m` `n` `r` | between stems |

Two rules work where two parts of a word meet:

- **A stem ending in a vowel doubles the sonorant that opens the next stem.** _te_ "high" and _lu_ "spring" make _tellu_; _te_ and _nelim_ "water" make _tennelim_ "high water". A suffix is not a stem, so _tellu_ and _-mi_ make _Tellumi_ with a single _m_.
- **A vowel before a vowel drops.** The suffix _-el_ on _Tellumi_ makes _Tellumel_, the land of the Tellumi, with the _i_ gone.

Every other meeting leaves both parts as they are: _velkun_ and _-ar_ make _velkunar_.

### Suffixes

| Suffix | Sense                |
| ------ | -------------------- |
| `-mi`  | a people             |
| `-el`  | a land or country    |
| `-ar`  | a city or town       |
| `-un`  | a house or line      |
| `-ul`  | a man's given name   |
| `-e`   | a woman's given name |

### Names

A Tellumi name is built in the same few moves as any other word, and it can be read back the same way:

| Name       | Built from                  | Meaning                        |
| ---------- | --------------------------- | ------------------------------ |
| Tellumi    | _te_ + _lu_ + _-mi_         | the people of the high springs |
| Tellumel   | _te_ + _lu_ + _-mi_ + _-el_ | the land of the Tellumi        |
| Tennelimar | _te_ + _nelim_ + _-ar_      | high-water town                |
| Talbemun   | _talbem_ + _-un_            | the house of the tower         |
| Vurinul    | _vurin_ + _-ul_             | a man's name: holy             |
| Lisene     | _lisen_ + _-e_              | a woman's name: moon           |

**Places** take _-ar_ for a city or town and _-el_ for a land, after one or two stems that say what the place has: its water, its height, its tower. **Houses** take _-un_ after the stem of a founder's name or the house's emblem. **Given names** take _-ul_ for a man and _-e_ for a woman, after one stem; a second stem in front of it is a mark of an old house.

## Writing

The Tellumi keep their records on baked-clay tablets in a syllabary they brought down from the mountains, and the tablet-keepers of each city can read a tablet two thousand years old. A sign stands for a consonant and its vowel, and a small stroke under a sign marks the closing sonorant, so the script's sign list follows the syllable rules above exactly.
