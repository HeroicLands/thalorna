---
shortcode: sowideslng
name: {full: Sovidur Language, aliases: []}
type: skill
subType: language
description: "The hard, clipped tongue of the steppe tribes of the Khazryn, spoken from the cold northern coast to the stone desert before Tānvür."
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
  flags: {"thalorna": {lang_family: Sovidur (isolate)}}
---

Sovidur is the tongue of the herding tribes of the [[place-khzryndsrtrgn|Khazryn Desert Region]], who call themselves _Sovidur_, "the riders", from _sovid_ "rider" and _-ur_ "a people". Each tribe speaks it with its own turns of phrase, and a rider of one tribe is understood in all the others. It is the tongue in which caravan passage is bargained for, so a caravan-master who crosses the Khazryn learns its numbers and its courtesies first. Fluency measures the sophistication of expression in the language, from the halting phrases of a traveler to the nuanced discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Sounds

Sovidur is a tongue of two voices. Every stem keeps to one: a back stem is made of _a_, _o_ and _u_ and the throaty _q_ and _gh_; a front stem is made of _e_, _ö_ and _ü_ and the lighter _k_ and _g_; and _i_ sits with either. Round it run the scraped _kh_, the hissing _sh_ and _z_, the affricates _ch_ and _j_, and vowels held long by doubling them. Words close on a consonant or a vowel and never open on _r_. It has no _p_, no _h_, no _f_, no _w_ and no _ts_.

### Consonants

| Letter       | Sound                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------ |
| `b` `d` `t`  | as in "bin", "din", "tin"                                                                  |
| `k` `g`      | as in "kin" and "gift"; `g` is always hard; they belong to front stems                     |
| `q` `gh`     | `q` is a _k_ made far back in the throat; `gh` is a gargled _g_; they belong to back stems |
| `kh`         | a scraped _h_ at the back of the mouth                                                     |
| `j` `ch`     | as in "jam" and "church"                                                                   |
| `s` `sh` `z` | as in "sun", "ship" and "zeal"                                                             |
| `m` `n`      | as in "man", "not"                                                                         |
| `l` `r`      | `l` is dark, as in "full"; `r` is trilled                                                  |
| `v` `y`      | as in "vine" and "yes"                                                                     |

_kh_, _gh_, _ch_ and _sh_ are each one sound, never a stop followed by a breath.

### Vowels

| Letter      | Sound                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `a` `o` `u` | as in "father", "port" and "put"; the back vowels                                                                |
| `e` `ö` `ü` | as in "bet"; `ö` and `ü` are front-rounded, lips as for _o_ and _u_, tongue as for _e_ and _i_; the front vowels |
| `i`         | as in "bit"; it goes with either group                                                                           |

A vowel is held long by writing it twice: _aa_, _ee_, _ii_, _oo_, _uu_, _öö_ and _üü_. No mark is used, and length changes meaning: _qiiso_ is "price", and _qiso_ with a short vowel is no word at all.

### Syllables

| Rule          | Forms                                                                           |
| ------------- | ------------------------------------------------------------------------------- |
| Onsets        | a single consonant                                                              |
| Codas         | `b` `d` `t` `k` `g` `q` `gh` `kh` `j` `ch` `s` `sh` `z` `m` `n` `l` `r` `v` `y` |
| Finals        | `d` `t` `k` `q` `kh` `ch` `s` `sh` `z` `m` `n` `l` `r` `y`                      |
| Doubled       | none                                                                            |
| Vowel pairs   | `aa` `ee` `ii` `oo` `uu` `öö` `üü`                                              |
| Initial vowel | yes                                                                             |
| Never initial | `r`                                                                             |
| Harmony       | back `a` `o` `u` / front `e` `ö` `ü` / neutral `i`, which alone counts as front |
| Signature     | `q` `gh` `kh` `ch` `j` `z` `o` `ö` `ü`                                          |

A syllable opens on one consonant or on nothing and closes on nothing or on one consonant. A word may begin with a vowel (_orqun_, _otviil_) but never with _r_, never sets two different vowels side by side, never doubles a consonant, and ends on a vowel or on one of the finals above.

**Every stem takes its vowels from one group.** _ködü_ "horse", _jedör_ "road" and _kelöd_ "well" are front stems; _khoshiq_ "sand", _qodir_ "mountain" and _bolid_ "tower" are back stems. A stem of _i_ alone counts as front. A compound keeps each stem's own group, so _Kelödvootri_ holds a front half and a back half, and a suffix takes the group of the stem before it.

**The velars follow the group.** _q_ and _gh_ belong to back stems and _k_ and _g_ to front ones: _qodir_ and _kelöd_, _savagh_ "moon" and _gören_ "storm".

**Every stem carries a signature sound:** a _q_, _gh_, _kh_, _ch_, _j_ or _z_, an _o_, an _ö_ or a _ü_. The _kh_ of _khamaq_ "skull", the _j_ of _jilaq_ "lantern" and the _ö_ of _jedör_ "road" mark a word as Sovidur even when it is heard alone.

### Stress

Stress falls on a doubled vowel where a word has one, and otherwise on the last syllable of the word: **QII**-mod, kö-**DÜ**, u-ru-**VAQ**.

## Building words

Every Sovidur word is a stem, two stems set together, or a stem with a suffix after it. The stems and their senses are in the [[doc-khazrynlex|Khazryn Lexicon]]. The thing described comes first and the word describing it second: _ködü_ "horse" and _uruvaq_ "wind" make _ködüyuruvaq_ "horse of the wind".

### Joins

| Meeting | Rule     | Letters |
| ------- | -------- | ------- |
| `V+V`   | `insert` | `y`     |
| `C+C`   | `merge`  |         |

- **Two vowels are held apart by _y_.** _ködü_ and _-ür_ make _Ködüyür_, "the horse people".
- **Two of the same consonant become one.** _sovid_ "rider" and _diqraq_ "stone" make _sovidiqraq_, "stone escort".

Every other meeting leaves both parts as they are.

### Suffixes

Each suffix has a back form and a front form; a stem takes the form of its own group.

| Back   | Front  | Sense                |
| ------ | ------ | -------------------- |
| `-ur`  | `-ür`  | a people or tribe    |
| `-oq`  | `-ök`  | a union, a binding   |
| `-or`  | `-ör`  | a range or grazing   |
| `-ud`  | `-üd`  | one who does         |
| `-lun` | `-lün` | a woman's given name |

### The paramount chief

Each tribe has its chief, the _dovaq_. The tribes stand alone. Now and then a dictator, the _orqun_, forces several of them together by the sword, and the binding he holds over them is his _orqunoq_. It lasts only as long as he lives: when the _orqun_ dies, the union dies with him and every tribe goes its own way again.

### Names

| Name        | Built from         | Meaning                   |
| ----------- | ------------------ | ------------------------- |
| Sovidur     | _sovid_ + _-ur_    | the riders                |
| Ködüyür     | _ködü_ + _-ür_     | the horse people          |
| Orqunoq     | _orqun_ + _-oq_    | the union an orqun forces |
| Diqraqor    | _diqraq_ + _-or_   | the stone range           |
| Jadaqud     | _jadaq_ + _-ud_    | a raider                  |
| Voghaltoliz | _voghal_ + _toliz_ | a man's name: wolf-spear  |
| Tijoodlun   | _tijood_ + _-lun_  | a woman's name: star      |

**A union** is named by the stem of its emblem or its country with _-oq_ or _-ök_, and a tribe by the same stem with _-ur_ or _-ür_. **A range** takes _-or_ or _-ör_ after what marks it: stone, grass, salt. **A man's name** is two stems with no suffix, a beast or a weather and then a weapon or a virtue; **a woman's name** is one stem with _-lun_ or _-lün_.

## Writing

The Sovidur write nothing but signs. Each tribe has a mark, cut into the stone over its wells and the trunks of its oldest palms, and a rider carries his tribe's passage-token, which bears the sign of the tribe that issued it. Records, treaties and debts are kept in memory and witnessed aloud.
