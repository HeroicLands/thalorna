---
shortcode: khazrilng
name: {full: Tellumi Language, aliases: []}
type: skill
subType: language
description: "The measured, liquid tongue of the Tellumi, the old oasis people at the foot of the Grazian Mountains."
tags: []
data:
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given} {house}", "{given}"]
    given:
      female:
        - "Lisena"
        - "Minesha"
        - "Hulena"
        - "Yashgema"
        - "Talvuta"
        - "Birvata"
        - "Reluma"
        - "Gilsuma"
        - "Sunhema"
        - "Nimesha"
        - "Yermima"
        - "Viluna"
        - "Perima"
        - "Daneta"
        - "Muresha"
        - "Hiresha"
        - "Liruna"
        - "Vemuna"
        - "Valsuma"
        - "Mavesha"
        - "Yeluna"
        - "Berhina"
        - "Talhisha"
        - "Hevuna"
        - "Karvema"
      male:
        - "Vurinay"
        - "Teyutay"
        - "Garmeshay"
        - "Kenbeshay"
        - "Lirunay"
        - "Hevunay"
        - "Talhishay"
        - "Gureshay"
        - "Pedunay"
        - "Kireshay"
        - "Karvemay"
        - "Kervishay"
        - "Tenhuray"
        - "Vemunay"
        - "Garvanay"
        - "Tarlimay"
        - "Revunay"
        - "Budishay"
        - "Hageshay"
        - "Bamdenay"
    house:
      - "Tashbemun"
      - "Nineshun"
      - "Gudeshun"
      - "Himbarun"
      - "Hireshun"
      - "Helrimun"
      - "Gerhenun"
      - "Kishneshun"
      - "Karvemun"
      - "Sunhemun"
      - "Nimeshun"
      - "Tamkerun"
      - "Talvutun"
      - "Birvatun"
      - "Berhinun"
      - "Yashgemun"
      - "Perimun"
      - "Bulamun"
      - "Valsumun"
      - "Kervishun"
      - "Budemun"
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

Tellumi is soft and unhurried, with a hush in it. Every syllable opens on a single consonant, and it closes on a sonorant or on a quick stop or hiss, so words end in _-l_, _-m_, _-n_, _-r_, _-t_, _-d_, _-k_, _-s_ or _-sh_. Where two parts of a word meet, the consonant that opens the second doubles, so the doubled _ll_ of _Tellumi_ is the tongue's signature sound. There is no _o_, no _kh_, _gh_ or _zh_, and no _z_, and those are the sounds Tellumi speakers find hardest in [[skill-atarzadilng|Ātárzādi]], the tongue of the people who took four of their cities.

### Consonants

| Letter            | Sound                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `p` `t` `k`       | as in "pin", "tin", "kin", lightly breathed                                                                  |
| `b` `d` `g`       | as in "bin", "din", "gift"; `g` is always hard                                                               |
| `m` `n`           | as in "man", "not"                                                                                           |
| `l` `r`           | `l` is clear, as in "leaf"; `r` is a single tap of the tongue                                                |
| `s` `sh` `ts` `h` | `s` is always as in "sun", never as in "rose"; `sh` as in "ship"; `ts` as the end of "cats"; `h` as in "hat" |
| `v` `y`           | as in "vine" and "yes"                                                                                       |

### Vowels

| Letter | Sound                  |
| ------ | ---------------------- |
| `a`    | as in "father", short  |
| `e`    | as in "bet"            |
| `i`    | as in "machine", short |
| `u`    | as in "rule", short    |

Tellumi writes no marks. A vowel is always pronounced the same way, so a word can be read aloud from its spelling alone.

### Syllables

| Rule          | Forms                                                       |
| ------------- | ----------------------------------------------------------- |
| Onsets        | a single consonant                                          |
| Codas         | `l` `m` `n` `r` `t` `d` `k` `s` `sh`                        |
| Finals        | `l` `m` `n` `r` `t` `d` `k` `s` `sh` `y`                    |
| Doubled       | `bb` `dd` `gg` `kk` `ll` `mm` `nn` `pp` `rr` `ss` `tt` `vv` |
| Vowel pairs   | never                                                       |
| Initial vowel | no                                                          |

A syllable is a consonant and a vowel, or a consonant, a vowel and one closing consonant. So a word never begins with a vowel, never sets two vowels side by side, and ends either on a vowel or on one of the closings above. Two consonants meet only across a syllable break: _veshkun_ "lost" and _tashbem_ "tower" are sound.

### Stress

Stress falls on the syllable that a doubled consonant opens: te-**LLU**-mi, ten-**NE**-li-mash. A word with no doubled consonant is stressed on its first syllable: **NE**-lim, **TASH**-bem.

## Building words

Every Tellumi word is a stem, two or more stems set together, or a stem with a suffix after it. The stems and their senses are in the [[doc-khazrynlex|Khazryn Lexicon]]. A modifier comes before what it modifies: _te_ "high" before _lu_ "spring" makes the high spring.

### Joins

| Meeting | Rule     | Letters                                         | Where         |
| ------- | -------- | ----------------------------------------------- | ------------- |
| `V+V`   | `drop`   |                                                 | anywhere      |
| `V+C`   | `double` | `p` `t` `k` `b` `d` `g` `m` `n` `l` `r` `s` `v` | between stems |

Two rules work where two parts of a word meet:

- **A stem ending in a vowel doubles the single consonant that opens the next stem.** _te_ "high" and _lu_ "spring" make _tellu_; _te_ and _nelim_ "water" make _tennelim_ "high water". _sh_, _ts_, _h_ and _y_ do not double. A suffix is not a stem, so _tellu_ and _-mi_ make _Tellumi_ with a single _m_.
- **A vowel before a vowel drops.** The suffix _-el_ on _Tellumi_ makes _Tellumel_, the land of the Tellumi, with the _i_ gone.

Every other meeting leaves both parts as they are: _veshkun_ and _-ash_ make _veshkunash_.

### Suffixes

| Suffix | Sense                |
| ------ | -------------------- |
| `-mi`  | a people             |
| `-el`  | a land or country    |
| `-ash` | a city or town       |
| `-un`  | a house or line      |
| `-ay`  | a man's given name   |
| `-a`   | a woman's given name |

### Names

A Tellumi name is built in the same few moves as any other word, and it can be read back the same way:

| Name        | Built from                  | Meaning                        |
| ----------- | --------------------------- | ------------------------------ |
| Tellumi     | _te_ + _lu_ + _-mi_         | the people of the high springs |
| Tellumel    | _te_ + _lu_ + _-mi_ + _-el_ | the land of the Tellumi        |
| Tennelimash | _te_ + _nelim_ + _-ash_     | high-water town                |
| Tashbemun   | _tashbem_ + _-un_           | the house of the tower         |
| Vurinay     | _vurin_ + _-ay_             | a man's name: holy             |
| Lisena      | _lisen_ + _-a_              | a woman's name: moon           |

**Places** take _-ash_ for a city or town and _-el_ for a land, after one or two stems that say what the place has: its water, its height, its tower. **Houses** take _-un_ after the stem of a founder's name or the house's emblem. **Given names** take _-ay_ for a man and _-a_ for a woman, after one stem; a second stem in front of it is a mark of an old house.

## Writing

The Tellumi keep their records on baked-clay tablets in a syllabary they brought down from the mountains, and the tablet-keepers of each city can read a tablet two thousand years old. A sign stands for a consonant and its vowel, and a small stroke under a sign marks the closing sonorant, so the script's sign list follows the syllable rules above exactly.
