---
tags: []
name:
  full: Sinalë Language
  aliases:
    - Sinalë
    - Elven
    - Elder Tongue
description: "The eldest of the Elder Tongues—vowel-heavy, soft-consonanted, and sung as often as spoken, older than any human settlement on Thalorna."
shortcode: sinalelng
type: skill
subType: language
data:
  icon: icon-speaking
  templatePriority: null
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
packFolder: language
flags:
  "thalorna":
    lang_family: Elder
---

Sinalë is a tongue of the Elder family. Fluency measures the sophistication of expression in Sinalë, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Sinalë is the language of the **Sinalë** (known in human legends as "elves"), the eldest of the Elder Races to settle on Thalorna. The language predates all human tongues by millennia, surviving as living speech in scattered Sinalë communities hidden in deep forests and remote valleys. The Sinalë are vanishingly rare—fewer than one in ten thousand inhabitants of Thalorna—and their language is nearly as rare, known to outsiders only through legend and fragmentary encounter.

To the human ear, Sinalë is hauntingly beautiful: melodic and vowel-heavy, with open syllables and soft consonants that seem to flow like water. There are no harsh stops and no guttural sounds. Nearly every syllable ends in a vowel, and the language slides from one to the next without ever stacking consonants at the front of a word. A Sinalë speaker seems to be singing rather than speaking.

What a human listener never notices is where the grammar sits. Sinalë keeps its cases and its aspects on the ends of words, as many tongues do, but the work of saying how one word bears on another is done at the **front**: a word that leans on another **wears down** at its head, and the worn consonant is the grammar. A Sinalë hears the relation before the word is finished. A human hears a pretty variation and misses it entirely.

## Phonology

### Consonants

The inventory is small, tidy, and arranged in three places of articulation with three rows at each:

|                       | lips | tongue-tip | back |
| --------------------- | ---- | ---------- | ---- |
| **stop**              | _p_  | _t_        | _k_  |
| **fricative**         | _v_  | _s_        | _h_  |
| **nasal**             | _m_  | _n_        | _ng_ |
| **liquid** (tip only) |      | _l_, _r_   |      |

That is the whole of it. There are no voiced stops, no affricates and no back scrape—nothing a human would call harsh. Every consonant also has a **long** form, written doubled (_pp_, _tt_, _kk_, _ss_, _ll_, _mm_, _nn_, _rr_), and the length is meaningful: _mallo_ is a deep pool and _malo_ is the colour of it.

**No word begins with a cluster.** Two consonants may stand together inside a word and never more than two, and _ng_ occurs only inside one. A word ends in a vowel, or in _n_, _r_, _l_ or _s_—nothing else.

### Vowels

Sinalë has **seven vowels**: _a_, _e_, _i_, _o_, _u_, _y_ and _ë_. Each has a long form written doubled—_aa_, _ee_, _ii_, _oo_, _uu_, _yy_, _ëë_—and length distinguishes words throughout. Diphthongs are frequent and are true two-vowel sequences: _ai_, _au_, _ei_, _ie_, _oi_, _ou_, _ui_, _yi_.

The vowels fall into three sets, and this governs the shape of every word:

- **Back:** _a_, _o_, _u_
- **Front:** _y_, _ë_
- **Neutral:** _e_, _i_

**A word never holds a back vowel and a front vowel together.** Neutral vowels stand in either kind. Every suffix therefore comes in two forms—_-nna_ beside _-nnë_, _-la_ beside _-lë_, _-ssa_ beside _-ssë_—and the word chooses. A word built only of neutral vowels counts as front and takes the front form.

### Stress

**Stress falls on the first syllable of every word, without exception.** Length is written and never guessed, so a Sinalë word of any length can be said correctly on sight: _NAL-va_, _IL-me-ri_, _SEL-ven-në_. Pitch does the work stress does in human tongues—rising for a question, falling to close a thought, held level through a list—and formal speech exaggerates it until it approaches singing. To speak Sinalë in a monotone is not to speak it badly but to say something else.

### Wearing

The device that carries Sinalë's grammar is **wearing**, _luutu_—the softening of the consonant a word begins with when that word leans on another. A stop wears to the fricative made in the same place, and nothing else moves:

| radical | worn | example                           |
| ------- | ---- | --------------------------------- |
| _p_     | _v_  | _pyvë_ "low cloud" > _vyvë_       |
| _t_     | _s_  | _tuola_ "the long road" > _suola_ |
| _k_     | _h_  | _kuove_ "pale wood" > _huove_     |

Every other beginning—_v_, _s_, _h_, _m_, _n_, _l_, _r_ and the vowels—is worn already and does not change. A word wears when it modifies a noun, when it names a lineage, and when it stands as an epithet, and it does not wear when it is the thing being spoken about.

The consequence a reader can check by eye: **no worn form begins with _p_, _t_ or _k_.** It is why a Sinalë lineage name never does either.

## Grammar Notes

### Sentence Structure

Sinalë is **Verb-Subject-Object**:

- _Kanne nalva ilmerin_—"Sings starlight the still water" (starlight sings the still water)

The act comes first. Sinalë rhetoric holds that naming the actor before the act is a way of taking credit, and formal speech avoids it.

### Verbs

Verbs do not mark person or tense. Time comes from context or from a word that says so. What a verb does mark is **aspect**, by a prefix, and **mood**, by a suffix:

- **Perfective** (the act complete): _ha-_ / _hë-_—_hë-kanne_ "has sung"
- **Habitual** (the act as a practice): _li-_—_li-kanne_ "sings, as it always does"
- **Subjunctive**: _-isi_—_kanneisi_ "would sing"
- **Imperative**: _-ka_ / _-kë_—_kannekë_ "sing"

A Sinalë poem about events ten thousand years past may carry no temporal marker at all. The listener takes the time from the telling, which is considered the courteous way to do it.

### Nouns

Nouns take six cases by suffix, each with its back and front form:

| Case       | Suffix        | Example (_nalva_) | Sense                   |
| ---------- | ------------- | ----------------- | ----------------------- |
| Nominative | —             | _nalva_           | starlight (subject)     |
| Accusative | _-n_          | _nalvan_          | starlight (object)      |
| Genitive   | _-ren_/_-rën_ | _nalvaren_        | of starlight            |
| Dative     | _-men_/_-mën_ | _nalvamen_        | to starlight            |
| Ablative   | _-tos_/_-tës_ | _nalvatos_        | from starlight          |
| Locative   | _-ssa_/_-ssë_ | _nalvassa_        | in, on, among starlight |

Number is optional and carried by a separate word where it matters at all. Gender is not marked: it lives in the meaning of a word or nowhere.

### Adjectives and Modifiers

A modifier stands before what it modifies and **wears**:

- _kuove_ "pale wood" and _lanvo_ "the deep wood" give _huove lanvo_—"the pale-wood deep-wood", a stand of birch within the forest
- _tuora_ "the turning year" and _ilmeri_ "still water" give _suora ilmeri_—"the year-turning water", a pool that freezes

Poetry inverts the order, and the wearing goes with the word rather than the position, so an inverted line is still unambiguous.

### Possession

Possession is the genitive, and the possessor wears:

- _Selvennë_ and _kyme_ "the wide sky" give _Selvennërën hyme_—"the wide sky of Selvennë"

## Script and Literacy

Sinalë is written in the [[skill-clthndscrpt|Calathindë]], a **flowing script** that resembles calligraphy. Glyphs are organic, curved, and highly stylized—each letter is an artwork. The script is written left-to-right, top-to-bottom, but the flowing nature of the letters creates a visual impression of music.

Key features:

- **Letter forms**: Curved, interconnected, resembling vines or flowing water
- **Vowel marks**: Vowels are not letters but marks set above the consonant they follow, so a word's consonants make its visible line and its vowels ride on top
- **Ligatures**: Frequent connections between letters create compound characters
- **Ornate variants**: Sacred texts employ extremely elaborate, decorated letter forms

The Calathindë is the Sinalë's own, made for this language and for no other, and the fit shows: each of the three places of articulation has its own family of letters, and within a family the stop, the fricative and the nasal are the same shape three times over, so a worn word looks worn. The [[skill-aelendlng|Áelendi]] took the script from the Sinalë, being the humans closest to them; the rest of Aurèldía writes in the Vylarian alphabet and always has.

Literacy in Sinalë is near-universal among the Sinalë themselves—the language and written tradition are central to their culture. However, human literacy in Sinalë is **extremely rare**. Only scholars, elves, and highly educated humans can read or write the language.

## Historical Development

Sinalë is the **eldest language on Thalorna**, older than even Kalihári or Ki'ichek. It has changed remarkably little in structure over millennia, though vocabulary has evolved with Sinalë experience and philosophy.

Scholars identify layers in Sinalë historical development:

- **Primordial layer** (oldest, rarely used in modern speech): Archaic verb forms, ancient colour and elemental terminology
- **Classical layer** (main body of literature and ceremony): The form preserved in epic poems and sacred texts
- **Modern layer** (contemporary Sinalë speech): Philosophical and artistic vocabulary reflecting Sinalë concerns with meaning, beauty, and eternity

The language has **absorbed almost no borrowings** from other tongues, and the reason is mechanical as much as cultural: a foreign word cannot be worn, cannot take a case ending that agrees with it, and cannot be made to keep harmony with the rest of the sentence. It sits in a Sinalë line like a stone in a stream. Sinalë who need a word for a foreign thing build one from Sinalë parts, and the coinage is heard as the language working properly rather than as an affectation.

## Regional Dialects

Sinalë is fragmented geographically, with scattered communities speaking distinct—though mutually intelligible—dialects, each named for the country it is spoken in:

- **Lanvo** (the deep wood): The most conservative and archaic form, closest to ancient Sinalë, and the slowest
- **Kyme** (the wide sky, the high valleys): Slightly more rapid speech, some flattening of pitch, subtly different vowel lengths
- **Raumo** (the far bank, the old coastal settlements): Long isolated; some unique vocabulary and archaic constructions

A Sinalë of the deep wood will sound archaic and formal to a Sinalë of the high valleys. The differences are subtle but noticeable to native speakers.

## Sample Phrases

- _Kanne nalva ilmerissë_—"Starlight sings on still water" (a greeting between friends, and the commonest one)
- _Li-sile vyrnë tormassa_—"The tall grass stands in the low fog, as it always does" (patience under a difficulty that will pass)
- _Hë-tuve myne sylmën_—"The seam of light has held the breath" (said when something long awaited has arrived)
- _Pehekë huoma, pehekë nirve_—"Give warmth, give root" (a blessing on a new house)
- _Kanne tehy, kanne revy_—"The clear place sings, the turning leaf sings" (of a season and a place agreeing, and by extension of a thing done at the right moment)

## Related Languages

Sinalë is one of the **two surviving Elder Tongues**, the other being Khazári. Both descend from a **common Elder language** spoken before the Elder Races diverged. That ancestor is extinct and no text preserves it.

The kinship is not audible. Sinalë runs on open syllables, long vowels and a soft inventory; Khazári runs on clusters, short vowels and back fricatives, and a speaker of either needs to be told the two are related before he will believe it.

What the two share is a habit no human tongue on Thalorna has: **both make a new word by altering the body of an old one rather than by hanging a piece on its end.** Sinalë changes the consonant a word begins with according to the work the word is doing; Khazári pours a different vowel frame through a fixed skeleton of consonants. Case and number are suffixed in both, but that is the shallow layer—the deep one is inside the word.

Beyond that instinct the two agree on:

- **The same six cases**, marked by suffix in both, and three of the six suffixes are close enough that no one argues about them
- **The same division of aspect** into the completed and the habitual, marked in both by a prefix
- **A closed inventory of derivational shapes** rather than an open one, so neither language borrows readily

Scholars debate whether the Elder Races deliberately drove their languages apart or whether geography and craft pulled them.

## Naming Traditions

### Structure and Philosophy

A Sinalë carries a **given name** and a **lineage name**, and wearing separates them, so the two can never be confused:

1. A **given name** is a stem in its **radical** form with a naming ending. Three or four syllables, stressed on the first, and ending in _-mo_ / _-më_ or _-vo_ / _-vë_ for a man and _-la_ / _-lë_ or _-ra_ / _-rë_ for a woman.
2. A **lineage name** is the same kind of stem **worn**, with the hearth ending _-nna_ / _-nnë_. It means "the hearth of" the stem, and because it is worn it **never begins with _p_, _t_ or _k_**.

The ending that would repeat the stem's own last consonant is not used, so a stem ending in _-va_ takes _-mo_ rather than _-vo_, and a stem ending in _-na_ takes no hearth ending at all and cannot found a lineage. Sinalë find this last fact funny and outsiders find it arbitrary.

Sinalë hold that a name carries spiritual weight and shapes what the bearer becomes, so a name is chosen slowly, sometimes over years, and a child goes unnamed in the meantime without anyone thinking it strange.

### Given Names

A stem is drawn from the world rather than from virtue: light, water, wood, weather, stone, the hours and the seasons. _Nalva_ is starlight, _ilmeri_ still water, _revy_ the turning leaf, _sylmë_ the held breath, _myne_ the seam of light where a cloud parts. The name is that thing, with an ending that says who carries it:

- _Nalvamo_ "starlight" (a man), _Nalvala_ and _Nalvara_ (women)
- _Revymë_, _Revylë_, _Revyrë_—"the turning leaf"
- _Ilmerimë_, _Ilmerivë_, _Ilmerilë_—"still water"

Two endings are available to each, and the choice is the namer's ear rather than a rule: a Sinalë will say that _Selverë_ is the right shape for one child and _Selvelë_ for another, and will not explain further.

### Lineage Names

A lineage is a **hearth**, and its name is the thing the hearth keeps, worn and closed with _-nna_ or _-nnë_. _Kuove_ "pale wood" gives **Huovenna**; _tuola_ "the long road" gives **Suolanna**; _pyvë_ "the low cloud" gives **Vyvënnë**. The stem that is already worn passes through unchanged: _nalva_ gives **Nalvanna**, _selve_ gives **Selvennë**.

Lineage names descend through the **maternal line**. They are not chosen and not changed. A Sinalë whose deeds no existing hearth can account for may found one, which happens perhaps once in an age and is the most consequential thing a Sinalë can do.

A lineage name is glossed for outsiders and never translated into a foreign compound. What a hearth keeps is a Sinalë thing, and the Sinalë word for it is the only word that holds the whole of it.

### Gender Distinctions

The stems are not gendered and are freely shared: a brother and a sister are commonly named from the same stem, with different endings, and read as obviously a pair. Only the ending distinguishes them, and a Sinalë who prefers the other set takes it without remark.

Lineage names have no gendered form.

## Name Lists

### Male Given Names

Nalvamo, Kuovemo, Mallomo, Mallovo, Tuoramo, Tuoravo, Pelmavo, Ronsamo, Ronsavo, Unturomo, Unturovo, Kalvomo, Tuolamo, Tuolavo, Ohmaramo, Ohmaravo, Lavurimo, Lavurivo, Masserimo, Masserivo, Rohvamo, Panvamo, Ansaramo, Ansaravo, Huomavo, Vaanumo, Vaanuvo, Puurimo, Puurivo, Koltumo, Koltuvo, Sarmovo, Tormavo, Nuomivo, Raumovo, Hallumo, Halluvo, Lanvomo, Sylmëvë, Hylmëvë, Tymëvë, Kymevë, Revymë, Nellymë, Nellyvë, Pyvëmë, Mynemë, Mynevë, Elvymë, Tehymë, Tehyvë, Vyrnëmë, Vyrnëvë, Kyllëmë, Kyllëvë, Selvemë, Nirvemë, Helvemë, Ilmerimë, Ilmerivë, Kennemë, Kennevë, Tillemë, Tillevë, Perinemë, Perinevë, Ressimë, Ressivë

### Female Given Names

Nalvala, Nalvara, Kuovela, Kuovera, Mallora, Tuorala, Pelmala, Pelmara, Ronsala, Ronsara, Unturola, Kalvola, Kalvora, Tuolara, Ohmarala, Lavurila, Masserila, Rohvala, Rohvara, Panvala, Panvara, Ansarala, Huomala, Huomara, Vaanula, Vaanura, Puurila, Koltula, Koltura, Sarmola, Sarmora, Tormala, Tormara, Nuomila, Nuomira, Raumola, Raumora, Hallura, Lanvola, Lanvora, Sylmëlë, Sylmërë, Hylmëlë, Hylmërë, Tymëlë, Tymërë, Kymelë, Kymerë, Revylë, Revyrë, Nellyrë, Pyvëlë, Pyvërë, Mynelë, Mynerë, Elvylë, Elvyrë, Tehylë, Tehyrë, Vyrnëlë, Vyrnërë, Kyllërë, Selvelë, Selverë, Nirvelë, Nirverë, Helvelë, Helverë, Ilmerilë, Kennelë, Kennerë, Tillerë, Perinelë, Perinerë, Ressilë, Ressirë

### Lineage Names (Inherited Matrilineally)

Nalvanna—"starlight" Huovenna—"pale wood" Mallonna—"deep pool" Suoranna—"the turning year" Velmanna—"the long dusk" Ronsanna—"moss on stone" Unturonna—"winter" Halvonna—"the still surface" Suolanna—"the long road" Ohmaranna—"the cupped hand" Lavurinna—"running water" Masserinna—"the deep ground" Rohvanna—"the lifted stone" Vanvanna—"woven cloth" Ansaranna—"the long watch" Huomanna—"the first warmth" Vuurinna—"the split log" Holtunna—"the cold spring" Sarmonna—"the smell of rain" Sormanna—"the low fog" Nuominna—"the still hour" Raumonna—"the far bank" Hallunna—"white frost" Lanvonna—"the deep wood" Sylmënnë—"the held breath" Hylmënnë—"thin ice" Symënnë—"the small bell" Hymennë—"the wide sky" Revynnë—"the turning leaf" Nellynnë—"the first frost" Vyvënnë—"the low cloud" Elvynnë—"the evening star" Sehynnë—"the clear place" Hyllënnë—"the far call" Selvennë—"the woven light" Nirvennë—"the deep root" Helvennë—"the first thaw" Ilmerinnë—"still water" Sillennë—"the rising note" Ressinnë—"the plaited mat"

## External References

- Sinalë Names (given names and matrilineal lineage names)
- Elder Tongue comparative linguistics
- Sinalë literature and epic poetry
- Scattered Sinalë communities and their oral traditions
