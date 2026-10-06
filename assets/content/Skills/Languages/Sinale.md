---
shortcode: sinalelng
name: {full: Sinalë Language, aliases: [Sinalë, Elven, Elder Tongue]}
type: skill
subType: language
description: "The eldest of the Elder Tongues—vowel-heavy, soft-consonanted, and sung as often as spoken, older than any human settlement on Thalorna."
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

Sinalë is a tongue of the Elder family. Fluency measures the sophistication of expression in Sinalë, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Sinalë is the language of the **Sinalë** (known in human legends as "elves"), the eldest of the Elder Races to settle on Thalorna. The language predates all human tongues by millennia, surviving as living speech in scattered Sinalë communities hidden in deep forests and remote valleys. The Sinalë are vanishingly rare—fewer than one in ten thousand inhabitants of Thalorna—and their language is nearly as rare, known to outsiders only through legend and fragmentary encounter.

To the human ear, Sinalë is hauntingly beautiful: melodic and vowel-heavy, with open syllables and soft consonants that seem to flow like water. There are no voiced stops and no guttural sounds. Nearly every syllable ends in a vowel, and the language slides from one to the next without ever stacking consonants at the front of a word. A Sinalë speaker seems to be singing rather than speaking.

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

That is the whole of it. There are no voiced stops, no affricates and no back scrape—nothing a human would call harsh. Every consonant but _v_, _h_ and _ng_ also has a **long** form, written doubled, and the length is meaningful: _mallo_ is a deep pool and _malo_ is the colour of it.

### Vowels

Sinalë has **seven vowels**, and each has a long form written doubled—_aa_, _ee_, _ii_, _oo_, _uu_, _yy_, _ëë_—so that length distinguishes words throughout. The vowels fall into three sets, and the sets govern the shape of every word:

| Vowel | Set     | In a suffix's front form |
| ----- | ------- | ------------------------ |
| _a_   | back    | _ë_                      |
| _o_   | back    | _ë_                      |
| _u_   | back    | _y_                      |
| _e_   | neutral | _ë_                      |
| _i_   | neutral | _ë_                      |
| _y_   | front   | _y_                      |
| _ë_   | front   | _ë_                      |

**A word never holds a back vowel and a front vowel together.** Neutral vowels stand in either kind, and a word built only of neutral vowels counts as front.

**Every suffix is stated in its back form, and its front form changes the suffix's last vowel to the partner the table gives**—_-tos_ beside _-tës_, _-men_ beside _-mën_, _-ka_ beside _-kë_—so the word the suffix is added to chooses which form it takes. A prefix alternates only when its own vowel is back: _ha-_ beside _hë-_, while _li-_ stands unchanged before either kind of word.

The diaeresis on _ë_ is the only mark the romanization writes. Length is written by doubling, so an acute, a circumflex or a macron over a Sinalë vowel is an error and never a spelling.

### Diphthongs

Two different vowels side by side are a diphthong and are said in one beat. Only these occur, and any other meeting of two vowels is not Sinalë:

| Set     | Diphthongs                         |
| ------- | ---------------------------------- |
| back    | _ai_, _au_, _oi_, _ou_, _ui_, _uo_ |
| neutral | _ei_, _ie_                         |
| front   | _yi_, _yë_                         |

_uo_ and its front partner _yë_ open wide and close narrow, the reverse of every other pair.

### Medial clusters

**No word begins with a cluster.** Inside a word two consonants may stand together, never more than two, and only in these pairings:

| Kind                                    | Clusters                                                                           |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| a long consonant                        | _pp_, _tt_, _kk_, _ss_, _mm_, _nn_, _ll_, _rr_                                     |
| a nasal and the stop of its own place   | _mp_, _nt_, _nk_                                                                   |
| a nasal and a fricative                 | _nv_, _ns_                                                                         |
| a liquid and any consonant but a liquid | _lp_, _lt_, _lk_, _lv_, _ls_, _lm_, _ln_, _rp_, _rt_, _rk_, _rv_, _rs_, _rm_, _rn_ |
| _h_ and a stop, nasal, liquid or _v_    | _hp_, _ht_, _hk_, _hv_, _hm_, _hn_, _hl_, _hr_                                     |
| _s_ and a stop                          | _sp_, _st_, _sk_                                                                   |

_nk_ is said with the back nasal, as the spelling of _ng_ before _k_ would be.

### Onsets and finals

| Edge             | Sounds                                                                |
| ---------------- | --------------------------------------------------------------------- |
| beginning a word | any vowel, or one of _p_, _t_, _k_, _v_, _s_, _h_, _m_, _n_, _l_, _r_ |
| ending a word    | any vowel, or one of _n_, _r_, _l_, _s_                               |

The back nasal _ng_ stands only between vowels, and no word opens on it.

### Stress

**Stress falls on the first syllable of every word, without exception.** Length is written and never guessed, so a Sinalë word of any length can be said correctly on sight: _NAL-va_, _IL-me-ri_, _SEL-ven-të_. Pitch does the work stress does in human tongues—rising for a question, falling to close a thought, held level through a list—and formal speech exaggerates it until it approaches singing. To speak Sinalë in a monotone is not to speak it badly but to say something else.

### Wearing

The device that carries Sinalë's grammar is **wearing**, _luutu_—the softening of the consonant a word begins with when that word leans on another. A stop wears to the fricative made in the same place, and nothing else moves:

| Radical | Worn | Example                           |
| ------- | ---- | --------------------------------- |
| _p_     | _v_  | _pyvë_ "low cloud" > _vyvë_       |
| _t_     | _s_  | _tuola_ "the long road" > _suola_ |
| _k_     | _h_  | _kuove_ "pale wood" > _huove_     |

Every other beginning—_v_, _s_, _h_, _m_, _n_, _l_, _r_ and the vowels—is worn already and does not change. There is one grade of wearing and no other: a worn consonant never wears further.

### What wears

A word wears in these places, and it does not wear when it is the thing being spoken about:

| Where                                           | Example                                          |
| ----------------------------------------------- | ------------------------------------------------ |
| a modifier standing before what it modifies     | _kuove_ before _lanvo_ gives _huove lanvo_       |
| a possessor, which is a modifier like any other | _kuove_ gives _huoveren_ "of the pale wood"      |
| the first stem of a compound                    | _kuove_ and _lanvo_ give _huovelanvo_            |
| a lineage name                                  | _kuove_ gives _Huovento_                         |
| an epithet                                      | an epithet stands worn after the name it follows |
| a name or a noun in direct address              | _Kuovemo_, called, is _Huovemo_                  |
| a verb after the negative particle              | _tuve_ "holds" gives _ahi suve_ "does not hold"  |
| a number multiplying the one after it           | _kuuho_ "three" gives _huuho elkë_ "sixty"       |

The consequence a reader can check by eye: **no worn form begins with _p_, _t_ or _k_.** A lineage name never does, and a verb after _ahi_ never does.

A verb's object does not wear; the accusative suffix marks it.

## Grammar Notes

### Sentence Structure

Sinalë is **Verb-Subject-Object**:

- _Kanne nalva ilmerin_—"Sings starlight the still water" (starlight sings the still water)

The act comes first. Sinalë rhetoric holds that naming the actor before the act is a way of taking credit, and formal speech avoids it.

### Verbs

Verbs do not mark person or tense. Time comes from context or from a word that says so. What a verb does mark is **aspect**, by a prefix, and **mood**, by a suffix:

| Marks                            | Back   | Front  | Example                               |
| -------------------------------- | ------ | ------ | ------------------------------------- |
| perfective (the act complete)    | _ha-_  | _hë-_  | _hë-kanne_ "has sung"                 |
| habitual (the act as a practice) | _li-_  | _li-_  | _li-kanne_ "sings, as it always does" |
| subjunctive                      | _-isi_ | _-isë_ | _kanneisi_ "would sing"               |
| imperative                       | _-ka_  | _-kë_  | _kannekë_ "sing"                      |

A Sinalë poem about events ten thousand years past may carry no temporal marker at all. The listener takes the time from the telling, which is considered the courteous way to do it.

### Case suffixes

Nouns take six cases by suffix, each with its back and front form:

| Case       | Back   | Front  | Example (_nalva_) | Sense                   |
| ---------- | ------ | ------ | ----------------- | ----------------------- |
| nominative | —      | —      | _nalva_           | starlight (subject)     |
| accusative | _-n_   | _-n_   | _nalvan_          | starlight (object)      |
| genitive   | _-ren_ | _-rën_ | _nalvaren_        | of starlight            |
| dative     | _-men_ | _-mën_ | _nalvamen_        | to starlight            |
| ablative   | _-tos_ | _-tës_ | _nalvatos_        | from starlight          |
| locative   | _-ho_  | _-hë_  | _nalvaho_         | in, on, among starlight |

A front word takes the front form: _revy_ "the turning leaf" gives _revyrën_, _revyhë_. Gender is not marked: it lives in the meaning of a word or nowhere.

### Number

Sinalë counts the world the way it meets it. A noun for something met in quantity—leaves, stars, rain, grass, birds—is **collective** in its plain form, and a suffix picks out one of them: _nalva_ is starlight and _nalvanu_ a single star. A noun for a thing met singly—a person, a particular tree, a stone—is singular in its plain form, and the word _vuuhe_ "many" standing after it gives the plural: _mallo vuuhe_ "many deep pools". No suffix makes a plural.

### Derivational suffixes

A closed set of suffixes makes new words from old ones. Each takes the back or front form as a case suffix does, and a case suffix follows it:

| Makes                      | Back   | Front  | Example                                     |
| -------------------------- | ------ | ------ | ------------------------------------------- |
| one of a collective        | _-nu_  | _-ny_  | _nalva_ > _nalvanu_ "a single star"         |
| the one who does it        | _-ttu_ | _-tty_ | _kanne_ > _kannettu_ "singer"               |
| the place of it            | _-sto_ | _-stë_ | _nalva_ > _nalvasto_ "a place of starlight" |
| the quality of it          | _-rsa_ | _-rsë_ | _mallo_ > _mallorsa_ "depth"                |
| the thing to do it with    | _-pi_  | _-pë_  | _kanne_ > _kannepi_ "a pipe"                |
| a small one                | _-lu_  | _-ly_  | _mallo_ > _mallolu_ "a small pool"          |
| a stand or gathering of it | _-kko_ | _-kkë_ | _kuove_ > _kuovekko_ "a stand of birch"     |
| a word describing by it    | _-sa_  | _-së_  | _nalva_ > _nalvasa_ "starlit"               |
| a verb from a noun         | _-hta_ | _-htë_ | _torma_ > _tormahta_ "to fog over"          |

### Compounds

Two stems make one word: the first is the modifier and wears, the second is the head, and the case suffix goes on the end. _Kuove_ "pale wood" and _lanvo_ "the deep wood" give _huovelanvo_, a birch stand within the forest. Each stem keeps its own harmony, so a compound may join a back stem to a front one, and the suffix follows the last.

A **place name** is a compound of this kind, or a single stem with the place suffix. An enclave's own name is Sinalë; the names human neighbours give enclaves are words in the neighbours' tongues.

### Adjectives and Modifiers

A modifier stands before what it modifies and **wears**:

- _kuove_ "pale wood" and _lanvo_ "the deep wood" give _huove lanvo_—"the pale-wood deep-wood", a stand of birch within the forest
- _tuora_ "the turning year" and _ilmeri_ "still water" give _suora ilmeri_—"the year-turning water", a pool that freezes

Poetry inverts the order, and the wearing goes with the word rather than the position, so an inverted line is still unambiguous.

### Possession

Possession is the genitive, and the possessor wears:

- _Selvennë_ and _kyme_ "the wide sky" give _Selvennërën hyme_—"the wide sky of Selvennë"

### Address

A name or a noun spoken to someone wears, so that a call can never be mistaken for a statement about its bearer: _Kuovemo_ is the man spoken of, _Huovemo_ the man called.

### Pronouns

The pronouns have three persons, each singular and collective, and no gender. A pronoun stands where a noun would and takes the cases a noun takes. The collective lengthens the last vowel:

| Person | One   | More than one |
| ------ | ----- | ------------- |
| first  | _ëhi_ | _ëhii_        |
| second | _ovu_ | _ovuu_        |
| third  | _ytë_ | _ytëë_        |

_Ëhin_ is "me", _ovuren_ "of thee", _ytëëmën_ "to them".

### Being

There is no "is" in the present. Two words side by side, the one said of the other standing first as a verb would, make a statement: _lanvo ëhi_ "I am of the deep wood". The verb _eho_ says that a thing exists—_eho mallo_ "there is a deep pool"—and carries the aspects when being must be marked as complete or habitual.

### Negation

The particle _ahi_ stands before the verb, and the verb wears: _tuve_ "holds" gives _ahi suve_ "does not hold". A negated verb therefore never begins with _p_, _t_ or _k_.

### Questions

A question rises in pitch. Writing loses the pitch, so a written question opens with the particle _uvi_: _uvi tuve ytë_ "does it hold?".

### Joining words

_Ivo_ "and" joins words and clauses alike. _Oso_ opens a relative clause and stands at its head, whatever the clause says of its noun: _mallo oso tuve_ "the pool that holds".

### Demonstratives

Three words point, by distance:

| Word  | Points to                      |
| ----- | ------------------------------ |
| _ihy_ | this, here by me               |
| _ëhy_ | that, there by you             |
| _ohu_ | that yonder, away from us both |

A demonstrative is a modifier and stands before its noun. All three open on a vowel, so none of them ever shows a worn consonant.

### Numbers

Sinalë counts in twenties, with ten and fifteen as resting points along the way:

| Value | Word    |
| ----- | ------- |
| 1     | _ahvo_  |
| 2     | _sëhy_  |
| 3     | _kuuho_ |
| 4     | _pëmi_  |
| 5     | _vymi_  |
| 6     | _louti_ |
| 7     | _ilpe_  |
| 8     | _lerre_ |
| 9     | _myrsi_ |
| 10    | _tootu_ |
| 15    | _ilvo_  |
| 20    | _elkë_  |

Eleven to fourteen are a unit on ten, in the locative: _ahvo tootuho_ "one on ten" is eleven. Sixteen to nineteen are a unit on fifteen, _ahvo ilvoho_, except eighteen, which is _sëhy myrsi_ "two nines". Twenties are counted by a multiplier standing before _elkë_ and wearing as any modifier does: _sëhy elkë_ is forty, _huuho elkë_ sixty, and _tootu elkëhë_ "ten on twenty" is thirty. A count follows the thing counted and does not wear: _mallo kuuho_ "three deep pools", _nalvanu sëhy_ "two stars".

### Comparison

The ablative compares: what something exceeds is the place it stands out from. _Vauli kuovetos_ is "taller than the birch", tall from the pale wood.

## Script and Literacy

Sinalë is written in the [[skill-clthndscrpt|Calathindë]], a **flowing script** that resembles calligraphy. Glyphs are organic, curved, and highly stylized—each letter is an artwork. The script is written left-to-right, top-to-bottom, but the flowing nature of the letters creates a visual impression of music.

Key features:

- **Letter forms**: Curved, interconnected, resembling vines or flowing water
- **Vowel marks**: Vowels are not letters but marks set above the consonant they follow, so a word's consonants make its visible line and its vowels ride on top
- **Ligatures**: Frequent connections between letters create compound characters
- **Ornate variants**: Sacred texts employ extremely elaborate, decorated letter forms

The Calathindë is the Sinalë's own, made for this language and for no other, and the fit shows: each of the three places of articulation has its own family of letters, and within a family the stop, the fricative and the nasal are the same shape three times over, so a worn word looks worn. The [[skill-aelendlng|Áelendi]] took the script from the Sinalë, being the humans closest to them; the rest of Aurèldía writes in the Vylarian alphabet and always has.

Literacy in Sinalë is near-universal among the Sinalë themselves—the language and written tradition are central to their culture. However, human literacy in Sinalë is **extremely rare**. Only scholars, elves, and highly educated humans can read or write the language.

### Setting a romanized word back in the Calathindë

Every Sinalë word on these pages is a romanization, written in Latin letters for readers who do not have the hand. Setting one back into the Calathindë is not a matter of taste: the mapping below is fixed, so that two scribes working from the same Latin spelling produce the same page. What may differ between one page and another is the cut of the letterforms—an everyday hand, the elaborated sacred one, a carved inscription—and never which sign is which.

**The consonants are the visible line.** One sign to each cell of the inventory in the table above, arranged in the three families the table sets out, so that the stop, the fricative and the nasal of one family are the same shape at three grades. _l_ and _r_ stand outside the families and have signs of their own. Because wearing only ever moves a stop to the fricative of its own family, a worn word is the same shape one grade along—which is where the romanization is at its clumsiest, writing _t_ and _s_ as two unrelated letters for what the hand shows as one letter lowered. The back nasal has a sign like the rest, but no word opens on it and so it is never the first thing on a line.

**A doubled consonant is one sign and a bar.** The romanization writes a long consonant twice—_mallo_, and the _tt_, _ss_ and _rr_ of the phonology—while the Calathindë writes the sign once and sets a bar beneath it. _Mallo_ and _malo_ therefore differ in the hand by a single stroke, and a damaged page that has lost its bars has lost the difference between a deep pool and the colour of it.

**The vowels ride above.** Seven marks, one each for _a_, _e_, _i_, _o_, _u_, _y_ and _ë_, set over the consonant they follow. A word that begins with a vowel carries its mark on a bare carrier stroke, the one sign in the script that stands for no sound of its own. A doubled vowel in the romanization—_aa_, _ëë_—is a single mark drawn long rather than two marks; a diphthong is two marks over one carrier, in the order they are said.

**What the Latin spelling loses, and what it never needed.** Stress is not marked in the Calathindë, because it never moves: the first syllable of every word, without exception, so a mark over a later one is emphasis and is saying something else. Pitch is marked, and a romanized line drops it entirely, so a romanized line read aloud keeps every word and loses the tune that told how they were meant.

**The check that catches most copyists.** A word never holds a back vowel and a front vowel together, so every vowel mark in a word belongs to one set. A word carrying both is an error before it is anything else, and it is the first thing a Sinalë reader sees.

**This is Sinalë's mapping and not Áelendi's.** The Áelendan write in the same hand, borrowed and much adapted, for a language carrying sounds the Calathindë was never cut for. A passage of [[skill-aelendlng|Áelendi]] wants its own convention and does not follow this one.

## Historical Development

Sinalë is the **eldest language on Thalorna**, older than even Kalihári or Ki'ichek. It has changed remarkably little in structure over millennia, though vocabulary has evolved with Sinalë experience and philosophy.

Scholars identify layers in Sinalë historical development:

- **Primordial layer** (oldest, rarely used in modern speech): Archaic verb forms, ancient colour and elemental terminology
- **Classical layer** (main body of literature and ceremony): The form preserved in epic poems and sacred texts
- **Modern layer** (contemporary Sinalë speech): Philosophical and artistic vocabulary reflecting Sinalë concerns with meaning, beauty, and eternity

The language has **absorbed almost no borrowings** from other tongues, and the reason is mechanical as much as cultural: a foreign word cannot be worn, cannot take a case ending that agrees with it, and cannot be made to keep harmony with the rest of the sentence. It sits in a Sinalë line like a stone in a stream. Sinalë who need a word for a foreign thing build one from Sinalë parts, and the coinage is heard as the language working properly rather than as an affectation.

### Words older than the rules

A handful of the oldest words keep shapes the regular language no longer makes: the people's name for itself, which holds a back vowel and a front one together, and a few names as old, which close on the hearth ending of the Primordial layer, _-nna_. They are spoken as they have always been spoken, and nothing new is made on their pattern:

| Form       | Gloss                                                    | Layer      |
| ---------- | -------------------------------------------------------- | ---------- |
| _Sinalë_   | the people's name for themselves and their tongue        | Primordial |
| _Haulonna_ | the hearth of the unfallen leaf; an enclave of the north | Primordial |

## Regional Dialects

Sinalë is fragmented geographically, with scattered communities speaking distinct—though mutually intelligible—dialects, each named for the country it is spoken in:

- **Lanvo** (the deep wood): The most conservative and archaic form, closest to ancient Sinalë, and the slowest
- **Kyme** (the wide sky, the high valleys): Slightly more rapid speech, some flattening of pitch, subtly different vowel lengths
- **Raumo** (the far bank, the old coastal settlements): Long isolated; some unique vocabulary and archaic constructions

Deep-wood speech sounds archaic and formal beside the speech of the high valleys. The differences are subtle but noticeable to native speakers.

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

### The shared ancestor

Three of the case suffixes descend from one ancestral form each:

| Case       | Proto-Elder (reconstructed by scholars in-world) | Sinalë        | Khazári |
| ---------- | ------------------------------------------------ | ------------- | ------- |
| accusative | `*-am`                                           | `-n`          | `-am`   |
| dative     | `*-man`                                          | `-men`/`-mën` | `-an`   |
| locative   | `*-khom`                                         | `-ho`/`-hë`   | `-um`   |

The sound changes are the ones each tongue shows elsewhere. Sinalë has no back scrape, so the ancestral _kh_ became _h_, and it closes no word on _m_, so a final _m_ became _n_ or fell away. Khazári dropped an initial _m_ and _kh_ before the vowel of a suffix.

## Naming Traditions

### Structure and Philosophy

A Sinalë carries a **given name** and a **lineage name**, and wearing separates them, so the two can never be confused:

1. A **given name** is a stem in its **radical** form with a naming ending. **A given name runs three or four syllables**, stressed on the first.
2. A **lineage name** is the same kind of stem **worn**, with the hearth ending. It means "the hearth of" the stem, and because it is worn it **never begins with _p_, _t_ or _k_**.

**The ending that would repeat the stem's own last consonant is not used**, so a stem ending in _-va_ takes _-mo_ rather than _-vo_, and **a stem whose last consonant is _n_ takes no hearth ending** and cannot found a lineage. Sinalë find this last fact funny and outsiders find it arbitrary.

Sinalë hold that a name carries spiritual weight and shapes what the bearer becomes, so a name is chosen slowly, sometimes over years, and a child goes unnamed in the meantime without anyone thinking it strange.

### Name endings

| Given to | Back  | Front |
| -------- | ----- | ----- |
| a man    | _-mo_ | _-më_ |
| a man    | _-vo_ | _-vë_ |
| a woman  | _-la_ | _-lë_ |
| a woman  | _-ra_ | _-rë_ |

### The hearth ending

| Name    | Back   | Front  |
| ------- | ------ | ------ |
| lineage | _-nto_ | _-ntë_ |

### Given Names

A stem is drawn from the world rather than from virtue: light, water, wood, weather, stone, the hours and the seasons. _Nalva_ is starlight, _ilmeri_ still water, _revy_ the turning leaf, _sylmë_ the held breath, _myne_ the seam of light where a cloud parts. The name is that thing, with an ending that says who carries it:

- _Nalvamo_ "starlight" (a man), _Nalvala_ and _Nalvara_ (women)
- _Revymë_, _Revylë_, _Revyrë_—"the turning leaf"
- _Ilmerimë_, _Ilmerivë_, _Ilmerilë_—"still water"

Two endings are available to each, and the choice is the namer's ear rather than a rule, so one household names a daughter _Selverë_ and another names a daughter _Selvelë_ from the same stem.

### Lineage Names

A lineage is a **hearth**, and its name is the thing the hearth keeps, worn and closed with _-nto_ or _-ntë_. _Kuove_ "pale wood" gives **Huovento**; _tuola_ "the long road" gives **Suolanto**; _pyvë_ "the low cloud" gives **Vyvëntë**. The stem that is already worn passes through unchanged: _nalva_ gives **Nalvanto**, _selve_ gives **Selventë**.

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

## Stems and Words

Every stem and word this page uses, with its class: `n` a noun, `n-coll` a collective noun, `v` a verb, `adj` an adjective, `pron` a pronoun or pointing word, `num` a number or a word of quantity, `part` a particle.

### Stems

| Form      | Class  | Gloss                     |
| --------- | ------ | ------------------------- |
| `nalva`   | n-coll | starlight                 |
| `kuove`   | n      | pale wood                 |
| `mallo`   | n      | deep pool                 |
| `malo`    | n      | the colour of a deep pool |
| `tuora`   | n      | the turning year          |
| `pelma`   | n      | the long dusk             |
| `ronsa`   | n-coll | moss on stone             |
| `unturo`  | n      | winter                    |
| `kalvo`   | n      | the still surface         |
| `tuola`   | n      | the long road             |
| `ohmara`  | n      | the cupped hand           |
| `lavuri`  | n      | running water             |
| `masseri` | n      | the deep ground           |
| `rohva`   | n      | the lifted stone          |
| `panva`   | n      | woven cloth               |
| `ansara`  | n      | the long watch            |
| `huoma`   | n      | the first warmth          |
| `vaanu`   | n      | the slow river            |
| `puuri`   | n      | the split log             |
| `koltu`   | n      | the cold spring           |
| `sarmo`   | n      | the smell of rain         |
| `torma`   | n      | the low fog               |
| `nuomi`   | n      | the still hour            |
| `raumo`   | n      | the far bank              |
| `hallu`   | n      | white frost               |
| `lanvo`   | n      | the deep wood             |
| `sylmë`   | n      | the held breath           |
| `hylmë`   | n      | thin ice                  |
| `tymë`    | n      | the small bell            |
| `kyme`    | n      | the wide sky              |
| `revy`    | n-coll | the turning leaf          |
| `nelly`   | n      | the first frost           |
| `pyvë`    | n      | the low cloud             |
| `myne`    | n      | the seam of light         |
| `elvy`    | n      | the evening star          |
| `tehy`    | n      | the clear place           |
| `vyrnë`   | n-coll | the tall grass            |
| `kyllë`   | n      | the far call              |
| `selve`   | n      | the woven light           |
| `nirve`   | n      | the deep root             |
| `helve`   | n      | the first thaw            |
| `ilmeri`  | n      | still water               |
| `kenne`   | n      | the new shoot             |
| `tille`   | n      | the falling drop          |
| `perine`  | n      | the heartwood             |
| `ressi`   | n      | the plaited mat           |
| `sille`   | n      | the rising note           |
| `luutu`   | n      | wearing                   |
| `kanne`   | v      | sing                      |
| `sile`    | v      | stand                     |
| `tuve`    | v      | hold                      |
| `pehe`    | v      | give                      |
| `vauli`   | adj    | tall                      |

### Function words

| Form    | Class | Gloss                          |
| ------- | ----- | ------------------------------ |
| `ëhi`   | pron  | I                              |
| `ëhii`  | pron  | we                             |
| `ovu`   | pron  | thou, one person spoken to     |
| `ovuu`  | pron  | you, more than one spoken to   |
| `ytë`   | pron  | he, she, it                    |
| `ytëë`  | pron  | they                           |
| `ihy`   | pron  | this, here by me               |
| `ëhy`   | pron  | that, there by you             |
| `ohu`   | pron  | that yonder                    |
| `eho`   | v     | be, exist                      |
| `ahi`   | part  | not                            |
| `uvi`   | part  | the mark of a written question |
| `ivo`   | part  | and                            |
| `oso`   | part  | that, which, who               |
| `vuuhe` | num   | many                           |
| `ahvo`  | num   | one                            |
| `sëhy`  | num   | two                            |
| `kuuho` | num   | three                          |
| `pëmi`  | num   | four                           |
| `vymi`  | num   | five                           |
| `louti` | num   | six                            |
| `ilpe`  | num   | seven                          |
| `lerre` | num   | eight                          |
| `myrsi` | num   | nine                           |
| `tootu` | num   | ten                            |
| `ilvo`  | num   | fifteen                        |
| `elkë`  | num   | twenty                         |

## External References

- Sinalë Names (given names and matrilineal lineage names)
- Elder Tongue comparative linguistics
- Sinalë literature and epic poetry
- Scattered Sinalë communities and their oral traditions
