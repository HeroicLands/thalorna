---
shortcode: khazarlng
name: {full: Khazári Language, aliases: [Khazári, Khazari, Dwarven, Elder Tongue]}
type: skill
subType: language
description: "The second of the Elder Tongues—short, percussive, and consonant-heavy, kept alive in the holds of the Khazári."
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
  flags: {"thalorna": {lang_family: Elder}}
---

Khazári is a tongue of the Elder family. Fluency measures the sophistication of expression in Khazári, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Khazári is the language of the **Khazári** (known in human legends as "dwarves"), the second of the Elder Races and one of the oldest peoples on Thalorna. The Khazári are vanishingly rare—fewer than one in ten thousand inhabitants of Thalorna—and their language is nearly as rare, spoken only in isolated mountain strongholds and passed down within closely-guarded family traditions.

To the human ear, Khazári sounds hard and percussive: short, consonant-heavy words that crack and resound like hammer-blows on stone. There are few long vowels and few flowing transitions. The language runs on sharp stops, rolled liquids and back fricatives that carry along a passage. A Khazári speaker sounds strong and commanding even when speaking softly.

What makes the language strange to a human ear is not its sound but its build. A Khazári word is not a stem with endings glued on. It is a **skeleton of three consonants**, carrying the meaning, into which a **frame of vowels** is poured, carrying the grammar. The same three consonants yield the stone, the mason, the quarrying and the quarry, and a word never heard before is still readable from its skeleton. Where a human tongue makes a new word by hanging a piece on the end of an old one, Khazári makes it by pouring a different frame through the same skeleton.

## Phonology

### Consonants

The inventory is laid out in clean series, and Khazári grammarians teach it as a grid rather than a list:

| Series     | Letters                                 | Notes                                                                                   |
| ---------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| Stops      | `p` `b` `t` `d` `k` `g`                 | Unaspirated and firmly articulated                                                      |
| Fricatives | `f` `v` `th` `dh` `s` `z` `kh` `gh` `h` | `th` and `dh` dental, as in "thin" and "then"; `kh` and `gh` scraped at the soft palate |
| Nasals     | `m` `n`                                 |                                                                                         |
| Liquids    | `r` `l`                                 | `r` heavily rolled                                                                      |
| Glottal    | `'`                                     | Only between two vowels, to hold them apart                                             |

The four digraphs—_th_, _dh_, _kh_, _gh_—are single sounds and count as single consonants everywhere in the grammar below. There is no `sh`: the hushing sound does not exist in Khazári, and a Khazári saying a foreign name that has one says `s`. **Consonant clusters are common**, which is unusual on Thalorna: _thamr_, _vanth_, _zamd_ and _khaln_ are ordinary words, and the density is the point. More meaning travels per syllable than any human tongue manages.

### Vowels

Khazári has **five vowels**, and strongly prefers them short. A long vowel is written with an acute, is uncommon, and never occurs by accident: a long vowel is part of a grammatical frame and is always doing work. No word carries more than one, and no other mark is written.

| Short | Long |
| ----- | ---- |
| `a`   | `á`  |
| `e`   | `é`  |
| `i`   | `í`  |
| `o`   | `ó`  |
| `u`   | `ú`  |

Khazári has no diphthongs. Two vowels never stand together: where a suffix that begins with a vowel meets a word that ends in one, the glottal holds them apart, so the given name _Dalka_ takes the dative as _Dalka'an_ "to Dalka".

### Stress

**Stress falls on the syllable carrying the acute. A word with no acute is stressed on its first syllable.** There are no exceptions and no secondary stresses, so any Khazári word can be said correctly on sight: _dalk_ (DALK), _Khalvan_ (KHAL-van), _dalkathumár_ (dal-ka-thu-MÁR).

### Clusters

A word begins on a single consonant. The only clusters at the front of a written word are the verb prefixes of the grammar below, which are joined with a hyphen. Inside a word no more than two consonants stand together—a doubled consonant counts as one—and a word ends on at most two.

One rule governs every frame. **The second and third consonants of a skeleton stand together only when the second is one of five; otherwise a short _a_ stands between them.** No frame can override it.

| Second consonant of the skeleton | Between the second and third |
| -------------------------------- | ---------------------------- |
| `l` `r` `m` `n` `s`              | nothing: _dalk_, _thamr_     |
| any other                        | `a`: _kaval_                 |

## Skeletons and Frames

### Skeletons

Meaning in Khazári lives in a **skeleton**—a _marg_, literally a bone—of exactly three consonants, written with hyphens between them. A skeleton is never spoken on its own. To say it, a speaker pours a **frame**—a _vald_, a binding—of vowels through it, and the frame says what kind of word comes out. The skeletons the examples on this page are built from:

| Skeleton | Sense                    |
| -------- | ------------------------ |
| `r-m-k`  | to lay a course of stone |
| `d-l-k`  | stone; to cut stone      |
| `th-m-r` | to strike                |
| `kh-l-v` | unlit, without light     |
| `k-v-l`  | to shape                 |
| `v-l-d`  | to bind                  |
| `v-r-n`  | a true line              |
| `dh-n-k` | the fall of a hammer     |
| `z-m-d`  | to assay                 |
| `s-m-d`  | to raise                 |
| `v-n-th` | an oath; to swear        |
| `m-r-g`  | bone                     |
| `kh-l-n` | silence                  |
| `g-l-d`  | fire                     |
| `h-l-b`  | silver                   |
| `l-k-m`  | a lamp                   |
| `t-n-v`  | a gate                   |
| `g-r-z`  | to guard                 |
| `n-l-p`  | cold                     |
| `z-v-k`  | to be, to stand          |

Every skeleton the language is known to use, with the words its frames make, is set out in the [[doc-khazarilex|Khazári Lexicon]].

### Frames

The frames are taught on the model skeleton **r-m-k**, "to lay a course of stone". In the shape column, `K1`, `K2` and `K3` stand for the skeleton's three consonants, and `V` for the vowel a given name chooses:

| Frame                 | Shape                 | Class | What it makes                     | On r-m-k  | On d-l-k  | On th-m-r  |
| --------------------- | --------------------- | ----- | --------------------------------- | --------- | --------- | ---------- |
| **bare**              | `K1aK2K3`             | n     | the thing itself                  | _ramk_    | _dalk_    | _thamr_    |
| **adjective**         | `K1aK2íK3`            | adj   | of the kind that it is            | _ramík_   | _dalík_   | _thamír_   |
| **worker**            | `K1aK2K3ir`           | n     | one who does it                   | _ramkir_  | _dalkir_  | _thamrir_  |
| **deed**              | `K1uK2áK3`            | v, n  | the doing of it                   | _rumák_   | _dulák_   | _thumár_   |
| **mastery**           | `K1uK2K2áK3`          | v, n  | the doing of it as a master       | _rummák_  | _dullák_  | _thummár_  |
| **reflexive**         | `K1atuK2áK3`          | v     | doing it to oneself or each other | _ratumák_ | _datulák_ | _thatumár_ |
| **place**             | `huK1aK2K3`           | n     | where it is done                  | _huramk_  | _hudalk_  | _huthamr_  |
| **done thing**        | `K1iK2K3ath`          | n     | what has been made                | _rimkath_ | _dilkath_ | _thimrath_ |
| **given name, man**   | `K1VK2K3Vn`           | name  | a man's name (below)              | _Ramkan_  | _Dalkan_  | _Thamran_  |
| **given name, woman** | `K1VK2K3V`            | name  | a woman's name (below)            | _Ramka_   | _Dalka_   | _Thimri_   |
| **compound**          | `bare` + `a` + `deed` | n     | two skeletons in one word         | —         | —         | —          |

So from **d-l-k** alone: _dalk_ "stone", _dalkir_ "mason", _dulák_ "the cutting of stone", _hudalk_ "quarry", _dilkath_ "a dressed block". A Khazári hearing _dalkir_ for the first time does not learn a word; he recognises a skeleton in a frame he already knows.

The adjective frame makes a word distinct from the bare noun on the same skeleton, so _khalv_ is "the unlit", a thing, and _khalív_ is "unlit", a quality. The mastery frame doubles the middle consonant: _thummár_ is to strike as a master strikes, and the craft-records use it of work no apprentice could have done. The reflexive frame sets a _t_ after the first consonant, parted from it by _a_ because no word opens on two consonants: _thatumár_ is to strike oneself, or to strike one another.

The frames are a closed set. A speaker who needs a word Khazári has not got does not borrow one—he takes the nearest skeleton and pours a frame through it, and every other speaker understands the result at once. This is why the language has absorbed so little from its neighbours, and why the Khazári regard borrowing as an admission of poverty rather than a courtesy.

### Doubling

A doubled digraph is written by doubling its first letter:

| Consonant | Doubled |
| --------- | ------- |
| `th`      | `tth`   |
| `dh`      | `ddh`   |
| `kh`      | `kkh`   |
| `gh`      | `ggh`   |

### Words older than the rules

A few words are older than the frames and keep shapes the frames no longer make. They belong to the Primordial layer of the language, and no Khazári would recast them:

| Form         | Gloss                        | Layer      |
| ------------ | ---------------------------- | ---------- |
| `Khazár`     | one of the people            | Primordial |
| `Khazári`    | the people, and their tongue | Primordial |
| `Khazártúrn` | the city of the seven towers | Primordial |

## Grammar Notes

### Sentence Structure

Khazári is **Subject-Verb-Object**, and the order does not move:

- _Dalkir thumár-ak ramkam_—"The mason strikes the course"

The actor, the act and the thing acted upon, in that sequence. Khazári rhetoric treats any other order as evasion. Inscriptions are the one exception: an inscription may set the verb last, an archaic order kept for carved stone and never spoken.

### Verbs

A verb is a skeleton in the deed, mastery or reflexive frame. Person is carried by a separate pronoun and never by the verb.

#### Tense

A tense suffix is joined with a hyphen:

| Tense   | Suffix   | Example        | Sense       |
| ------- | -------- | -------------- | ----------- |
| Present | `-ak`    | _thumár-ak_    | strikes     |
| Past    | `-ag`    | _thumár-ag_    | struck      |
| Future  | `-aktor` | _thumár-aktor_ | will strike |

#### Verb prefixes

Aspect and voice are prefixes, joined with a hyphen. Aspect stands first, voice second. The voice prefixes take their short form before a stop and their long form before anything else:

| Prefix     | Before a stop | Otherwise | Kind   | Sense                          |
| ---------- | ------------- | --------- | ------ | ------------------------------ |
| perfective | `kr-`         | `kr-`     | aspect | the act completed              |
| habitual   | `gl-`         | `gl-`     | aspect | the act as a practice or trade |
| causative  | `s-`          | `sa-`     | voice  | the subject has another do it  |
| passive    | `n-`          | `na-`     | voice  | the act is done to the subject |

- _kr-thumár_ "has struck"; _gl-thumár_ "strikes as a trade"
- _sa-thumár-ak_ "has someone strike"; _s-dulák-ak_ "has stone cut"
- _na-thumár-ak_ "is struck"; _n-dulák-ag_ "was cut"
- _kr-na-sumád_ "has been raised"

A verb carries a tense suffix, an aspect prefix, or both. An aspect prefix with no tense suffix speaks of the present: _kr-thumár_ is "has struck", and _kr-thumár-ag_ "had struck".

#### Being

Khazári says "is" by saying nothing: _Vog dalkir_ is "He is a mason". The past and the future take the verb _zuvák_, "to be, to stand": _Vog zuvák-ag dalkir_, "He was a mason".

### Nouns

A noun carries up to three suffixes, in a fixed order: gender, then number, then case. None takes a hyphen.

#### Gender

Gender is grammatical and not semantic—every noun is masculine, feminine or neuter, and the gender belongs to the noun, not to its skeleton. The masculine is unmarked:

| Gender    | Suffix | Example   | Sense  |
| --------- | ------ | --------- | ------ |
| Masculine | —      | _dalk_    | stone  |
| Feminine  | `-ev`  | _lakamev_ | a lamp |
| Neuter    | `-od`  | _galdod_  | fire   |

#### Number

A noun is singular unless it carries the plural suffix. Khazári never makes a plural by changing the vowels of the word:

| Number   | Suffix | Example  | Sense  |
| -------- | ------ | -------- | ------ |
| Singular | —      | _dalk_   | stone  |
| Plural   | `-ez`  | _dalkez_ | stones |

So _lakamevez_ is "lamps" and _lakamevezam_ "lamps" as an object.

#### Case

The six cases are the same six Sinalë keeps, which is the strongest single piece of evidence for the common ancestor:

| Case       | Suffix | Example   | Sense           |
| ---------- | ------ | --------- | --------------- |
| Nominative | —      | _dalk_    | stone (subject) |
| Accusative | `-am`  | _dalkam_  | stone (object)  |
| Genitive   | `-ith` | _dalkith_ | of stone        |
| Dative     | `-an`  | _dalkan_  | to stone        |
| Ablative   | `-ol`  | _dalkol_  | from stone      |
| Locative   | `-um`  | _dalkum_  | in stone        |

**A genitive stands before the noun it belongs to**, as an adjective does: _dalkith vanth_ is "an oath of stone", and never "the stone of an oath".

### Adjectives

An adjective is a skeleton in the adjective frame. It stands before its noun and agrees with it in gender, number and case, taking the same suffixes in the same order:

- _khalív dalk_—"unlit stone"
- _khalívev lakamev_—"an unlit lamp"
- _khalívez dalkez_—"unlit stones"
- _khalívith dalkith vanth_—"the oath of the unlit stone"

Poetic inversion is permitted and is immediately recognisable as poetry.

### Pronouns and particles

| Form   | Class | Sense                                           |
| ------ | ----- | ----------------------------------------------- |
| `gaz`  | pron  | I                                               |
| `ves`  | pron  | you                                             |
| `vog`  | pron  | he, she, it                                     |
| `gazn` | pron  | we                                              |
| `vesn` | pron  | you (many)                                      |
| `vogn` | pron  | they                                            |
| `kez`  | dem   | this, these                                     |
| `koz`  | dem   | that, those                                     |
| `thov` | part  | not; stands before the verb                     |
| `zef`  | part  | closes a question                               |
| `bek`  | conj  | and                                             |
| `zi`   | rel   | who, which, that; opens a clause after its noun |

A pronoun takes case like a noun. The demonstratives take no suffix and stand before the noun and any adjective.

- _Dalkir thov thumár-ak ramkam_—"The mason does not strike the course"
- _Dalkir thumár-ak ramkam zef_—"Does the mason strike the course?"
- _dalkir zi thumár-ak ramkam_—"the mason who strikes the course"
- _koz khalív dalk_—"that unlit stone"
- _dalkir bek ramkir_—"the mason and the layer of courses"

### Numbers

Khazári counts in sixties, and within a sixty in tens. A number under sixty is said tens first and units after, the tens as a unit before the word for ten: thirty-seven is _vem zund fozd_, "three ten seven". Sixty is _girm_, and a count of sixties is said the same way: a hundred and twenty is _zik girm_. A noun after a number above one takes the plural.

| Word    | Value |
| ------- | ----: |
| `tob`   |     1 |
| `zik`   |     2 |
| `vem`   |     3 |
| `bozd`  |     4 |
| `zom`   |     5 |
| `nefk`  |     6 |
| `fozd`  |     7 |
| `kabr`  |     8 |
| `khozm` |     9 |
| `zund`  |    10 |
| `girm`  |    60 |

The craft-records keep their own arithmetic in this count, and divide a measure of ore or a length of course into sixtieths.

### Compounds

Khazári compounds two skeletons by setting the first in the bare frame, the second in the deed frame, and putting a linking _-a-_ at the seam. Neither half carries a suffix of gender:

- _dalk_ and _thumár_ give _dalkathumár_, "the striking of stone"
- _gald_ and _vulád_ give _galdavulád_, "the binding of fire"—the tempering of a blade
- _tanv_ and _guráz_ give _tanvaguráz_, "the guarding of the gate"

The compound is one word, stressed on its acute, and it means exactly what its two skeletons mean in that order. The same device makes house names, which is why a Khazári house name is a sentence about a craft and not a description of a person.

## Script and Literacy

Khazári is written in [[skill-drthrkscrpt|Pirzath]], which has **two forms**. The carved form resembles runes cut into stone—or rather, the runes of the Pelwar peoples resemble it, being in all likelihood a reduced work-row taught to the Proto-Pelwar tribes when those tribes were Khazári subjects, and simplified twice over since. The hand form is the everyday writing. Both read left to right and top to bottom.

Key features of **carved Pirzath**:

- **Letter forms**: Short angled strokes cut across the grain of the stone, never along it, because along the grain the stone splits; each letter is angular, and the same letter is cut differently in slate and in granite
- **The line of text**: Follows a seam, a bedding line or a natural edge of the stone, never a ruled baseline, so no inscription runs straight; reading carved Pirzath well means reading the stone
- **Inscription tradition**: Used for what must last—oaths, laws, tombs and the founding of a hold—cut into stone, metal, or wood
- **Diacritical marks**: Notches, dots, and lines indicate the acute and the skeleton boundaries
- **Formality variants**: More elaborate, decorative versions for monuments or sacred texts

Key features of **the hand form of Pirzath**:

- **Letter forms**: Flowing and curved, and joined within a word
- **Media**: Ink or a stylus on slate and chalk (teaching, tallies, notes), wax tablets (drafts and accounts), hide or parchment (letters and books), and thin sheets of lead or copper cut with a stylus (records meant to last without being monumental)

Carved Pirzath writes the three consonants of a skeleton larger than the vowels of the frame, so a carved word shows its own grammar: the bone is cut deep and the binding is scored between. A Khazári reader takes in the skeleton first and the frame second, which is how a worn inscription can still be read when half the vowel-scoring has weathered away. The hand form marks the skeleton with a heavier stroke.

The runic rows of the Nordlands, where anyone there writes at all, are near enough to Pirzath that a Khazári can pick out most of the staves. What they do not share is that depth of cut in the carved form. A Nordman's staves all stand equal, because Nordmal has no skeleton to pick out; Khazári grades its own, and a stroke that carries grammar in one hand carries nothing in the other. Khazári who have compared the two rows say the northern one looks like a tool being held by the wrong end.

Literacy in Khazári is **nearly universal among the Khazári**—writing is fundamental to their culture of craftsmanship, record-keeping, and genealogy. However, human literacy in Khazári is **very rare**. Only dedicated scholars or those with Khazári kinship learn to read or write the language.

## Historical Development

Khazári is one of the **two surviving Elder Tongues**, sharing a common ancestor with Sinalë but diverging sharply in development. The language emerged among a people who live in the faces of mountains and talk along passages in the rock, and it reflects that origin: compact, resonant, built to carry along a passage.

Historical layers in Khazári:

- **Primordial layer** (oldest, archaic): Rare frames, ancient craft vocabulary, astronomical and geological terminology, and the few words older than the frames themselves
- **Classical layer** (the main body of Khazári tradition): The form preserved in genealogies, craft records, and ancestral epics
- **Modern layer** (contemporary Khazári): Philosophical vocabulary reflecting Khazári concerns with craft, honor, and legacy

The language has **absorbed minimal borrowings** from other tongues, for the reason the frames make plain: a Khazári who meets a foreign thing coins a skeleton for it rather than taking the foreign word, and the coinage is transparent to everyone at once. Khazári pride in linguistic purity is legendary, and it is cheaper for them than for anybody else.

## Regional Dialects

Khazári is fragmented geographically, with scattered strongholds and communities:

- **Northern stronghold dialect** (high mountains): The prestige form, slowest and most formal
- **Southern hall dialects** (foothills and lower regions): Slightly faster, some vowel shifts, minor vocabulary variations
- **Far-distant isolate dialects** (remote holds): Archaic frames, unique skeletons, extremely different from the modern standard

Inter-stronghold communication is maintained through formal written records and periodic gatherings, limiting dialect divergence. However, a Khazári from the northern peaks will sound notably different from one of the southern halls.

## Sample Phrases

- _Vog dalkir, vog kr-rumák ramkam huramkum_—"He is a mason; he has laid the course in the workhall" (an introduction, and a claim to competence)
- _Thamrol dhank, valdol varn_—"From the blow, the hammer-fall; from the binding, the true line" (a proverb: results follow method)
- _Gaz gl-thumár, ves gl-zumád_—"I strike as a trade, you assay as a trade" (a division of work, and by extension an acknowledgment of another's mastery)
- _Ramk kr-na-sumád, ramk na-thumár-aktor_—"The course has been raised; the course will be struck" (said over a finished work, and at funerals)
- _Dalkith vanth, margith vanth_—"Oath of stone, oath of bone" (the strongest form of undertaking)

## Related Languages

Khazári is one of the **two surviving Elder Tongues**, descended from a **common Elder ancestor** shared with Sinalë. The kinship is not audible. Sinalë runs on open syllables, long vowels and a soft inventory; Khazári runs on clusters, short vowels and back fricatives, and nothing in the sound of either suggests the other.

What the two share is a habit no human tongue on Thalorna has: **both make a new word by altering the body of an old one rather than by hanging a piece on its end.** Khazári pours a different vowel frame through a fixed skeleton; Sinalë changes the consonant a word begins with according to the work the word is doing. Case is suffixed in both, but that is the shallow layer—the deep one is inside the word.

Beyond that instinct the two agree on:

- **The same six cases**, marked by suffix in both, and three of the six suffixes descend from one ancestral form, as the table below sets out
- **The same division of aspect** into the completed and the habitual, marked in both by a prefix
- **A closed inventory of derivational shapes** rather than an open one, so neither language borrows readily

### The shared ancestor

The shared ancestor is extinct and no text preserves it, but scholars of both tongues have reconstructed three of its case endings from the forms its daughters keep:

| Case       | Proto-Elder | Sinalë        | Khazári |
| ---------- | ----------- | ------------- | ------- |
| accusative | `*-am`      | `-n`          | `-am`   |
| dative     | `*-man`     | `-men`/`-mën` | `-an`   |
| locative   | `*-khom`    | `-ho`/`-hë`   | `-um`   |

Each daughter shows its own sound changes. Sinalë turned a final _m_ into _n_ and the back scrape _kh_ into _h_, having no _kh_ of its own; Khazári lost an _m_ or a _kh_ standing before the vowel of a suffix. Scholars debate whether the Elder Races deliberately drove their languages apart or whether geography and craft pulled them.

## Naming Traditions

### Structure and Philosophy

A Khazári carries a **given name** and a **house name**, and the two are built by different frames, so no Khazári has ever mistaken one for the other:

1. A **given name** is a single skeleton in a **given-name frame**. It is short—two or three syllables—it never carries an acute, and it always ends in a vowel or in that vowel followed by _n_.
2. A **house name** is **two skeletons compounded**, exactly as any other Khazári compound is built. It is four or five syllables, it always carries the acute of the deed frame, and it always ends in a consonant.

Length, the acute and the final sound therefore separate the two on sight, which matters in a culture that carves both onto the same lintel.

Khazári hold that a name is not a label but a **charge**: it names work the bearer is expected to do, and a name given carelessly is an insult to the child. Naming is performed by the elders of the house, who choose the skeleton and are held to account for the choice.

### Clans and Houses

The Khazári are seven **clans**, the seven who came to Thalorna together; a **house** is a line within a clan. A Khazári's house name says which line he belongs to, and the line says which of the seven it descends from.

### Given Names

The given-name frame takes any of the five vowels, and the choice is meaningful rather than decorative. The **frame vowel is repeated in the ending**: _-an_, _-en_, _-in_, _-on_, _-un_ for a man, and the bare vowel _-a_, _-e_, _-i_, _-o_, _-u_ for a woman. From **d-l-k** "stone": _Dalkan_ and _Dalka_, _Delken_ and _Delke_, _Dilkin_ and _Dilki_, _Dolkon_ and _Dolko_, _Dulkun_ and _Dulku_.

The five vowels carry the five senses in which a charge can be laid:

- **a**—the work as it stands. The commonest, and the plainest.
- **e**—the work hoped for, laid on a child born to a house that needs it.
- **i**—the work of a named forebear, taken up again.
- **o**—the work as an inheritance, used where a line would otherwise end.
- **u**—the work endured, given to a child born in a bad season or a bad year.

A Khazári therefore reads a stranger's given name twice: once for the skeleton, which says what he is for, and once for the vowel, which says why.

### House Names

A house name compounds two skeletons and states a craft as an act: _dalk_ "stone" and _thumár_ "striking" give **Dalkathumár**, the house of the striking of stone. The name is not a description of anybody. It is the work the house holds, and the house is answerable for it.

House names descend from father to child and do not change. A Khazári who accomplishes something no existing house can account for may be granted a **new** house name, compounded for the occasion by the elders of several holds together; this happens perhaps twice in a century, and it founds a line.

Because both halves are Khazári skeletons, a house name means the same thing to every Khazári and nothing at all to anyone else. Written out for outsiders it is glossed, never translated into a foreign compound, and Khazári are notably short with human scholars who try.

### Place Names

A place takes its name from the place frame—_hudalk_, "the quarry"—or, for a hold, from a compound built as a house name is, stating the work the hold was cut for. Every hold carries a name of one of these two shapes.

### Gender and Naming

The skeletons are not gendered: a woman and a man may be named from the same skeleton and frequently are, within a house and within a generation. Only the ending distinguishes them.

House names have no gendered form at all. A woman of Dalkathumár is of Dalkathumár, and the convention some human chroniclers report—that certain houses are "women's houses"—is a misreading of holds where the senior craft happened to descend through sisters.

## Name Lists

### Male Given Names

Ramkan, Rimkin, Rumkun, Dalkan, Delken, Dolkon, Thamran, Thimrin, Thumrun, Kevalen, Kivalin, Sekaren, Sikarin, Sokaron, Nalpan, Nilpin, Nulpun, Gelden, Goldon, Guldun, Kherden, Khirdin, Khardan, Vetamen, Vutamun, Varthan, Virthin, Vorthon, Molthon, Milthin, Pernen, Pirnin, Zamdan, Zimdin, Famgan, Fimgin, Fumgun, Khalvan, Khilvin, Ganvan, Gunvun, Palzan, Pilzin, Vanthan, Vinthin, Derkhen, Dorkhon, Mirgin, Murgun, Dhenken, Dhonkon, Dhunkun, Valdan, Voldon, Gasvan, Gisvin, Helben, Holbon, Garfan, Girfin, Balgan, Bulgun, Samdan, Simdin, Tevaren, Tovaron, Zenthen, Zonthon, Ferden, Furdun, Khalnan, Khilnin, Revaden, Rovadon, Hemken, Homkon, Thalgan, Thilgin, Vernen, Vornon, Tenven, Tonvon, Lekamen, Lokamon, Hanthan, Hinthin, Ranthan, Rinthin, Salthan, Silthin, Gerzen, Gorzon, Tamkan, Timkin, Khevanen, Khivanin, Sakalan, Sikalin

### Female Given Names

Ramka, Rimki, Rumku, Dalka, Delke, Dolko, Thimri, Themre, Kevale, Kivali, Sekare, Sokaro, Nilpi, Nulpu, Gelde, Goldo, Kherde, Khirdi, Vetame, Vutamu, Verthe, Vortho, Moltho, Milthi, Perne, Pirni, Zamda, Zimdi, Famga, Fimgi, Kholvo, Khilvi, Ganva, Genve, Palza, Pilzi, Vontho, Vunthu, Derkhe, Dorkho, Mirgi, Murgu, Dhenke, Dhonko, Velde, Voldo, Gasva, Gisvi, Helbe, Holbo, Garfa, Girfi, Balga, Bulgu, Samda, Simdi, Tevare, Tovaro, Zenthe, Zontho, Ferde, Furdu, Khelne, Khilni, Revade, Rovado, Hemke, Homko, Thalga, Thilgi, Verne, Vorno, Tenve, Tonvo, Lekame, Lokamo, Henthe, Hontho, Renthe, Rinthi, Selthe, Sulthu, Gerze, Gorzo, Tamka, Timki, Khevane, Sakala, Sekale

### House Names (Patrilineal)

| House          | Gloss                         |
| -------------- | ----------------------------- |
| `Dalkathumár`  | the striking of stone         |
| `Sakarapuláz`  | the folding of iron           |
| `Galdavulád`   | the binding of fire           |
| `Khalvagunáv`  | the delving of the unlit      |
| `Tanvaguráz`   | the guarding of the gate      |
| `Tavarasuláth` | the pouring of the deep water |
| `Margavuráth`  | the bearing of the bone       |
| `Halbazumád`   | the assay of silver           |
| `Thalgahunáth` | the spanning of the snow      |
| `Ravadarunáth` | the reckoning of the vein     |
| `Ramkasumád`   | the raising of the course     |
| `Vanthakhuván` | the chanting of the oath      |
| `Nalpafurád`   | the enduring of the cold      |
| `Zanthaguráf`  | the whetting to brightness    |
| `Famgadurákh`  | the holding of the deep       |
| `Lakamakhulán` | the lamp in the silence       |
| `Balgatumák`   | the trust of copper           |
| `Malthapurán`  | the root of salt              |
| `Parnasumád`   | the raising from deep ground  |
| `Vatamarumák`  | the course that endures       |
| `Khardavurán`  | the hold set true             |
| `Hamkadhunák`  | the note of the hammer-fall   |
| `Ganvahumák`   | the note of the delving       |
| `Valdasukár`   | the binding of iron           |
| `Kavalazunáth` | the shaping to brightness     |

## External References

- [[doc-khazarilex|Khazári Lexicon]] (skeletons, words and attested names)
- Khazári Names (given names and house names)
- Elder Tongue comparative linguistics
- Khazári genealogies and craft records
- Stronghold records and monuments
