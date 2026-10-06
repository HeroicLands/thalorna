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

To the human ear, Sinalë is hauntingly beautiful: melodic and vowel-heavy, with open syllables and soft consonants that seem to flow like water. Its consonants are the liquids and the nasals—_l_, _r_ and _n_ above all, doubled and run together—with the breathed _th_ and _dh_ between them, and its vowels are the open _a_, _e_, _i_ and _o_, often held long. No word opens on a voiced stop and there are no guttural sounds. Nearly every syllable ends in a vowel, and the language slides from one to the next without ever stacking consonants at the front of a word. A Sinalë speaker seems to be singing rather than speaking, and the song is a slow one: the language has the sound of a long memory, of starlight and twilight, and of things a long time lost.

What a human listener never notices is where the grammar sits. Sinalë keeps its cases and its aspects on the ends of words, as many tongues do, but the work of saying how one word bears on another is done at the **front**: a word that leans on another **wears down** at its head, and the worn consonant is the grammar. A Sinalë hears the relation before the word is finished. A human hears a pretty variation and misses it entirely.

## Phonology

### Consonants

The core of the inventory is small and tidy: three places of articulation with three rows at each. Around it stand the soft sounds of the tongue-tip and the lips, which carry most of the language's music:

|                       | lips | tongue-tip      | back |
| --------------------- | ---- | --------------- | ---- |
| **stop**              | _p_  | _t_             | _k_  |
| **fricative**         | _v_  | _s_             | _h_  |
| **nasal**             | _m_  | _n_             | _ng_ |
| **liquid** (tip only) |      | _l_, _r_, _rh_  |      |
| **soft** (tip only)   |      | _th_, _dh_, _d_ |      |
| **glide** (lips only) | _w_  |                 |      |

That is the whole of it. _Rh_ is _r_ breathed rather than voiced; _th_ is the breathed sound between the teeth and _dh_ its voiced partner; _w_ is a glide, never a vowel. _D_ is the one voiced stop, and it stands only after a liquid or a nasal, where the tongue is already raised to it. There are no affricates and no back scrape—nothing a human would call harsh. _P_, _t_, _k_, _s_, _m_, _n_, _l_ and _r_ also have a **long** form, written doubled, and the length is meaningful: _mollu_ is a deep pool and _molu_ is the colour of it.

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

**A word never holds a back vowel and a front vowel together.** Neutral vowels stand in either kind, and a word built only of neutral vowels counts as back.

The front vowels are the language's rarer colour. Most words are back, neutral or a mixture of the two, so a suffix most often takes its back form, and a word that runs on _y_ and _ë_ stands out in a line as a bright word among dark ones.

**Every suffix is stated in its back form, and its front form changes the suffix's last vowel to the partner the table gives**—_-tos_ beside _-tës_, _-men_ beside _-mën_, _-ka_ beside _-kë_—so the word the suffix is added to chooses which form it takes. A prefix alternates only when its own vowel is back: _ha-_ beside _hë-_, while _li-_ stands unchanged before either kind of word.

The diaeresis on _ë_ is the only mark the romanization writes. Length is written by doubling, so an acute, a circumflex or a macron over a Sinalë vowel is an error and never a spelling.

### Diphthongs

Two different vowels side by side are a diphthong and are said in one beat. Only these occur, and any other meeting of two vowels is not Sinalë:

| Set     | Diphthongs                                     |
| ------- | ---------------------------------------------- |
| back    | _ai_, _au_, _ia_, _eo_, _oi_, _ou_, _ui_, _uo_ |
| neutral | _ei_, _ie_                                     |
| front   | _yi_, _yë_                                     |

_uo_ and its front partner _yë_ open wide and close narrow, the reverse of every other pair. _ia_ and _eo_ open narrow and widen, and belong to the back set because their second vowel does.

### Medial clusters

**No word begins with a cluster.** Inside a word two consonants may stand together, never more than two, and only in these pairings. A digraph—_th_, _dh_, _rh_, _ng_—is one consonant, so _lth_ is a pair:

| Kind                                      | Clusters                                       | Use     |
| ----------------------------------------- | ---------------------------------------------- | ------- |
| a long liquid, nasal or _s_               | _ll_, _nn_, _rr_, _mm_, _ss_                   | common  |
| a nasal and the stop of its own place     | _nt_, _nd_, _mp_, _nk_                         | common  |
| a liquid and a tongue-tip sound           | _lt_, _ld_, _lth_, _rt_, _rd_, _rth_           | common  |
| a liquid and a fricative, nasal or liquid | _lv_, _ls_, _lm_, _ln_, _rv_, _rs_, _rm_, _rn_ | common  |
| a nasal and a fricative                   | _nv_, _ns_, _nth_                              | common  |
| _s_ and a stop                            | _st_, _sp_, _sk_                               | sparing |
| a liquid and a lip or back stop           | _lp_, _lk_, _rp_, _rk_                         | sparing |
| a long stop                               | _pp_, _tt_, _kk_                               | sparing |
| _h_ and a stop, nasal, liquid or _v_      | _hp_, _ht_, _hk_, _hv_, _hm_, _hn_, _hl_, _hr_ | sparing |

**_d_ stands only after _n_, _l_ or _r_**, so it never begins a word, never ends one and never stands alone between vowels. _Dh_ stands only between vowels.

_nk_ is said with the back nasal, as the spelling of _ng_ before _k_ would be.

The common pairings are the body of the language: a word holds one of them, or none, and its other syllables are open. The sparing ones are true Sinalë and stand in old words, hard words and words for sharp things, but a line that holds more than one of them sounds clipped, and a poet avoids it.

### Onsets and finals

| Edge             | Sounds                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------- |
| beginning a word | any vowel, or one of _p_, _t_, _k_, _v_, _s_, _h_, _m_, _n_, _l_, _r_, _th_, _rh_, _w_ |
| ending a word    | any vowel, or one of _n_, _r_, _l_, _s_                                                |

The back nasal _ng_ stands only between vowels, and no word opens on it.

### Stress

**Stress falls on the first syllable of every word, without exception.** Length is written and never guessed, so a Sinalë word of any length can be said correctly on sight: _NUU-va_, _E-py-ri_, _SËL-vin-të_. Pitch does the work stress does in human tongues—rising for a question, falling to close a thought, held level through a list—and formal speech exaggerates it until it approaches singing. To speak Sinalë in a monotone is not to speak it badly but to say something else.

### Wearing

The device that carries Sinalë's grammar is **wearing**, _hoivu_—the softening of the consonant a word begins with when that word leans on another. A stop wears to the fricative made in the same place, and nothing else moves:

| Radical | Worn | Example                           |
| ------- | ---- | --------------------------------- |
| _p_     | _v_  | _pyvë_ "low cloud" > _vyvë_       |
| _t_     | _s_  | _tuhli_ "the long road" > _suhli_ |
| _k_     | _h_  | _kouvi_ "pale wood" > _houvi_     |

Every other beginning—_v_, _s_, _h_, _m_, _n_, _l_, _r_, _th_, _rh_, _w_ and the vowels—is worn already and does not change. There is one grade of wearing and no other: a worn consonant never wears further.

### What wears

A word wears in these places, and it does not wear when it is the thing being spoken about:

| Where                                           | Example                                          |
| ----------------------------------------------- | ------------------------------------------------ |
| a modifier standing before what it modifies     | _kouvi_ before _lonvu_ gives _houvi lonvu_       |
| a possessor, which is a modifier like any other | _kouvi_ gives _houviren_ "of the pale wood"      |
| the first stem of a compound                    | _kouvi_ and _lonvu_ give _houvilonvu_            |
| a lineage name                                  | _kouvi_ gives _Houvinto_                         |
| an epithet                                      | an epithet stands worn after the name it follows |
| a name or a noun in direct address              | _Kouvimo_, called, is _Houvimo_                  |
| a verb after the negative particle              | _tuve_ "holds" gives _ahi suve_ "does not hold"  |
| a number multiplying the one after it           | _kuuho_ "three" gives _huuho elkë_ "sixty"       |

The consequence a reader can check by eye: **no worn form begins with _p_, _t_ or _k_.** A lineage name never does, and a verb after _ahi_ never does.

A verb's object does not wear; the accusative suffix marks it.

## Grammar Notes

### Sentence Structure

Sinalë is **Verb-Subject-Object**:

- _Luuro nuuva epyrin_—"Sings starlight the still water" (starlight sings the still water)

The act comes first. Sinalë rhetoric holds that naming the actor before the act is a way of taking credit, and formal speech avoids it.

### Verbs

Verbs do not mark person or tense. Time comes from context or from a word that says so. What a verb does mark is **aspect**, by a prefix, and **mood**, by a suffix:

| Marks                            | Back   | Front  | Example                               |
| -------------------------------- | ------ | ------ | ------------------------------------- |
| perfective (the act complete)    | _ha-_  | _hë-_  | _ha-luuro_ "has sung"                 |
| habitual (the act as a practice) | _li-_  | _li-_  | _li-luuro_ "sings, as it always does" |
| subjunctive                      | _-isi_ | _-isë_ | _luuroisi_ "would sing"               |
| imperative                       | _-ka_  | _-kë_  | _luuroka_ "sing"                      |

A Sinalë poem about events ten thousand years past may carry no temporal marker at all. The listener takes the time from the telling, which is considered the courteous way to do it.

### Case suffixes

Nouns take six cases by suffix, each with its back and front form:

| Case       | Back   | Front  | Example (_nuuva_) | Sense                   |
| ---------- | ------ | ------ | ----------------- | ----------------------- |
| nominative | —      | —      | _nuuva_           | starlight (subject)     |
| accusative | _-n_   | _-n_   | _nuuvan_          | starlight (object)      |
| genitive   | _-ren_ | _-rën_ | _nuuvaren_        | of starlight            |
| dative     | _-men_ | _-mën_ | _nuuvamen_        | to starlight            |
| ablative   | _-tos_ | _-tës_ | _nuuvatos_        | from starlight          |
| locative   | _-ho_  | _-hë_  | _nuuvaho_         | in, on, among starlight |

A front word takes the front form: _rivy_ "the turning leaf" gives _rivyrën_, _rivyhë_. Gender is not marked: it lives in the meaning of a word or nowhere.

### Number

Sinalë counts the world the way it meets it. A noun for something met in quantity—leaves, stars, rain, grass, birds—is **collective** in its plain form, and a suffix picks out one of them: _nuuva_ is starlight and _nuuvanu_ a single star. A noun for a thing met singly—a person, a particular tree, a stone—is singular in its plain form, and the word _vuuhe_ "many" standing after it gives the plural: _mollu vuuhe_ "many deep pools". No suffix makes a plural.

### Derivational suffixes

A closed set of suffixes makes new words from old ones. Each takes the back or front form as a case suffix does, and a case suffix follows it:

| Makes                      | Back   | Front  | Example                                     |
| -------------------------- | ------ | ------ | ------------------------------------------- |
| one of a collective        | _-nu_  | _-ny_  | _nuuva_ > _nuuvanu_ "a single star"         |
| the one who does it        | _-nno_ | _-nnë_ | _luuro_ > _luuronno_ "singer"               |
| the place of it            | _-sto_ | _-stë_ | _nuuva_ > _nuuvasto_ "a place of starlight" |
| the quality of it          | _-rsa_ | _-rsë_ | _mollu_ > _mollursa_ "depth"                |
| the thing to do it with    | _-pi_  | _-pë_  | _luuro_ > _luuropi_ "a pipe"                |
| a small one                | _-lu_  | _-ly_  | _pyvë_ > _pyvëly_ "a wisp of cloud"         |
| a stand or gathering of it | _-rno_ | _-rnë_ | _kouvi_ > _kouvirno_ "a stand of birch"     |
| a word describing by it    | _-sa_  | _-së_  | _nuuva_ > _nuuvasa_ "starlit"               |
| a verb from a noun         | _-lta_ | _-ltë_ | _tahvu_ > _tahvulta_ "to fog over"          |

### Compounds

Two stems make one word: the first is the modifier and wears, the second is the head, and the case suffix goes on the end. _Kouvi_ "pale wood" and _lonvu_ "the deep wood" give _houvilonvu_, a birch stand within the forest. Each stem keeps its own harmony, so a compound may join a back stem to a front one, and the suffix follows the last.

A **place name** is a compound of this kind, or a single stem with the place suffix. An enclave's own name is Sinalë; the names human neighbours give enclaves are words in the neighbours' tongues.

### Adjectives and Modifiers

A modifier stands before what it modifies and **wears**:

- _kouvi_ "pale wood" and _lonvu_ "the deep wood" give _houvi lonvu_—"the pale-wood deep-wood", a stand of birch within the forest
- _toiru_ "the turning year" and _epyri_ "still water" give _soiru epyri_—"the year-turning water", a pool that freezes

Poetry inverts the order, and the wearing goes with the word rather than the position, so an inverted line is still unambiguous.

### Possession

Possession is the genitive, and the possessor wears:

- _kouvi_ "pale wood" and _pëlvy_ "the wide sky" give _houviren pëlvy_—"the wide sky of the pale wood"

### Address

A name or a noun spoken to someone wears, so that a call can never be mistaken for a statement about its bearer: _Kouvimo_ is the man spoken of, _Houvimo_ the man called.

### Pronouns

The pronouns have three persons, each singular and collective, and no gender. A pronoun stands where a noun would and takes the cases a noun takes. The collective lengthens the last vowel:

| Person | One   | More than one |
| ------ | ----- | ------------- |
| first  | _ëhi_ | _ëhii_        |
| second | _ovu_ | _ovuu_        |
| third  | _ytë_ | _ytëë_        |

_Ëhin_ is "me", _ovuren_ "of thee", _ytëëmën_ "to them".

### Being

There is no "is" in the present. Two words side by side, the one said of the other standing first as a verb would, make a statement: _lonvu ëhi_ "I am of the deep wood". The verb _eho_ says that a thing exists—_eho mollu_ "there is a deep pool"—and carries the aspects when being must be marked as complete or habitual.

### Negation

The particle _ahi_ stands before the verb, and the verb wears: _tuve_ "holds" gives _ahi suve_ "does not hold". A negated verb therefore never begins with _p_, _t_ or _k_.

### Questions

A question rises in pitch. Writing loses the pitch, so a written question opens with the particle _uvi_: _uvi tuve ytë_ "does it hold?".

### Joining words

_Ivo_ "and" joins words and clauses alike. _Oso_ opens a relative clause and stands at its head, whatever the clause says of its noun: _mollu oso tuve_ "the pool that holds".

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

Eleven to fourteen are a unit on ten, in the locative: _ahvo tootuho_ "one on ten" is eleven. Sixteen to nineteen are a unit on fifteen, _ahvo ilvoho_, except eighteen, which is _sëhy myrsi_ "two nines". Twenties are counted by a multiplier standing before _elkë_ and wearing as any modifier does: _sëhy elkë_ is forty, _huuho elkë_ sixty, and _tootu elkëhë_ "ten on twenty" is thirty. A count follows the thing counted and does not wear: _mollu kuuho_ "three deep pools", _nuuvanu sëhy_ "two stars".

### Comparison

The ablative compares: what something exceeds is the place it stands out from. _Vauli kouvitos_ is "taller than the birch", tall from the pale wood.

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

**The consonants are the visible line.** One sign to each cell of the inventory in the table above, arranged in the three families the table sets out, so that the stop, the fricative and the nasal of one family are the same shape at three grades. The liquids, the soft sounds and the glide—_l_, _r_, _rh_, _th_, _dh_, _d_ and _w_—stand outside the families and have signs of their own. Because wearing only ever moves a stop to the fricative of its own family, a worn word is the same shape one grade along—which is where the romanization is at its clumsiest, writing _t_ and _s_ as two unrelated letters for what the hand shows as one letter lowered. The back nasal has a sign like the rest, but no word opens on it and so it is never the first thing on a line.

**A doubled consonant is one sign and a bar.** The romanization writes a long consonant twice—_mollu_, and the _tt_, _ss_ and _rr_ of the phonology—while the Calathindë writes the sign once and sets a bar beneath it. _Mollu_ and _molu_ therefore differ in the hand by a single stroke, and a damaged page that has lost its bars has lost the difference between a deep pool and the colour of it.

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

- **Lonvu** (the deep wood): The most conservative and archaic form, closest to ancient Sinalë, and the slowest
- **Pëlvy** (the wide sky, the high valleys): Slightly more rapid speech, some flattening of pitch, subtly different vowel lengths
- **Loova** (the far bank, the old coastal settlements): Long isolated; some unique vocabulary and archaic constructions

Deep-wood speech sounds archaic and formal beside the speech of the high valleys. The differences are subtle but noticeable to native speakers.

## Sample Phrases

- _Luuro nuuva epyrihë_—"Starlight sings on still water" (a greeting between friends, and the commonest one)
- _Li-sëly vylnë tahvuho_—"The tall grass stands in the low fog, as it always does" (patience under a difficulty that will pass)
- _Ha-tuve myne hyssën_—"The seam of light has held the breath" (said when something long awaited has arrived)
- _Peheka huoman, peheka nylvin_—"Give warmth, give root" (a blessing on a new house)
- _Luuro tehy, luuro rivy_—"The clear place sings, the turning leaf sings" (of a season and a place agreeing, and by extension of a thing done at the right moment)

## Related Languages

Sinalë is one of the **two surviving Elder Tongues**, the other being Khazári. Both descend from a **common Elder language** spoken before the Elder Races diverged. That ancestor is extinct and no text preserves it.

The kinship is not audible. Sinalë runs on open syllables, long vowels and a soft inventory; Khazári runs on clusters, short vowels and back fricatives. Nothing in the sound of either suggests the other.

What the two share is a habit no human tongue on Thalorna has: **both make a new word by altering the body of an old one rather than by hanging a piece on its end.** Sinalë changes the consonant a word begins with according to the work the word is doing; Khazári pours a different vowel frame through a fixed skeleton of consonants. Case and number are suffixed in both, but that is the shallow layer—the deep one is inside the word.

Beyond that instinct the two agree on:

- **The same six cases**, marked by suffix in both, three of whose suffixes descend from one ancestral form each—the accusative, the dative and the locative, set out below
- **The same division of aspect** into the completed and the habitual, marked in both by a prefix
- **A closed inventory of derivational shapes** rather than an open one, so neither language borrows readily

Scholars debate whether the Elder Races deliberately drove their languages apart or whether geography and craft pulled them.

### The shared ancestor

Three of the case suffixes descend from one ancestral form each:

| Case       | Proto-Elder | Sinalë        | Khazári |
| ---------- | ----------- | ------------- | ------- |
| accusative | `*-am`      | `-n`          | `-am`   |
| dative     | `*-man`     | `-men`/`-mën` | `-an`   |
| locative   | `*-khom`    | `-ho`/`-hë`   | `-um`   |

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

A stem is drawn from the world rather than from virtue: light, water, wood, weather, stone, the hours and the seasons. _Nuuva_ is starlight, _epyri_ still water, _rivy_ the turning leaf, _hyssë_ the held breath, _myne_ the seam of light where a cloud parts. The name is that thing, with an ending that says who carries it:

- _Nuuvamo_ "starlight" (a man), _Nuuvala_ and _Nuuvara_ (women)
- _Rivymë_, _Rivylë_, _Rivyrë_—"the turning leaf"
- _Epyrimë_, _Epyrivë_, _Epyrilë_—"still water"

Two endings are available to each, and the choice is the namer's ear rather than a rule, so one household names a daughter _Sëlvirë_ and another names a daughter _Sëlvilë_ from the same stem.

### Lineage Names

A lineage is a **hearth**, and its name is the thing the hearth keeps, worn and closed with _-nto_ or _-ntë_. _Kouvi_ "pale wood" gives **Houvinto**; _tuhli_ "the long road" gives **Suhlinto**; _pyvë_ "the low cloud" gives **Vyvëntë**. The stem that is already worn passes through unchanged: _nuuva_ gives **Nuuvanto**, _sëlvi_ gives **Sëlvintë**.

Lineage names descend through the **maternal line**. They are not chosen and not changed. A Sinalë whose deeds no existing hearth can account for may found one, which happens perhaps once in an age and is the most consequential thing a Sinalë can do.

A lineage name is glossed for outsiders and never translated into a foreign compound. What a hearth keeps is a Sinalë thing, and the Sinalë word for it is the only word that holds the whole of it.

### Gender Distinctions

The stems are not gendered and are freely shared: a brother and a sister are commonly named from the same stem, with different endings, and read as obviously a pair. Only the ending distinguishes them, and a Sinalë who prefers the other set takes it without remark.

Lineage names have no gendered form.

## Name Lists

### Male Given Names

Nuuvamo, Kouvimo, Mollumo, Molluvo, Toirumo, Toiruvo, Puolmavo, Rohkumo, Rohkuvo, Unturomo, Unturovo, Uhtomo, Tuhlimo, Tuhlivo, Ohkurimo, Ohkurivo, Lavurimo, Lavurivo, Masserimo, Masserivo, Ruhvomo, Pohvumo, Ansorumo, Ansoruvo, Huomavo, Vuunumo, Vuunuvo, Pourimo, Pourivo, Kehtumo, Kehtuvo, Solpuvo, Tahvumo, Nuomivo, Loovamo, Hullomo, Hullovo, Lonvumo, Hyssëvë, Hinvymë, Tymëvë, Pëlvymë, Rivymë, Nellymë, Nellyvë, Pyvëmë, Mynemë, Mynevë, Hyrvimë, Tehymë, Tehyvë, Vylnëmë, Vylnëvë, Kyllëmë, Kyllëvë, Sëlvimë, Nylvimë, Hirsymë, Epyrimë, Epyrivë, Kinsymë, Kinsyvë, Tëllymë, Tëllyvë, Pyrinemë, Pyrinevë, Ressimo, Ressivo

### Female Given Names

Nuuvala, Nuuvara, Kouvila, Kouvira, Mollura, Toirula, Puolmala, Puolmara, Rohkula, Rohkura, Unturola, Uhtola, Uhtora, Tuhlira, Ohkurila, Lavurila, Masserila, Ruhvola, Ruhvora, Pohvula, Pohvura, Ansorula, Huomala, Huomara, Vuunula, Vuunura, Pourila, Kehtula, Kehtura, Solpula, Solpura, Tahvula, Tahvura, Nuomila, Nuomira, Loovala, Loovara, Hullora, Lonvula, Lonvura, Hyssëlë, Hyssërë, Hinvylë, Hinvyrë, Tymëlë, Tymërë, Pëlvylë, Pëlvyrë, Rivylë, Rivyrë, Nellyrë, Pyvëlë, Pyvërë, Mynelë, Mynerë, Hyrvilë, Hyrvirë, Tehylë, Tehyrë, Vylnëlë, Vylnërë, Kyllërë, Sëlvilë, Sëlvirë, Nylvilë, Nylvirë, Hirsylë, Hirsyrë, Epyrilë, Kinsylë, Kinsyrë, Tëllyrë, Pyrinelë, Pyrinerë, Ressila, Ressira

### Lineage Names (Inherited Matrilineally)

Nuuvanto—"starlight" Houvinto—"pale wood" Mollunto—"deep pool" Soirunto—"the turning year" Vuolmanto—"the long dusk" Rohkunto—"moss on stone" Unturonto—"winter" Uhtonto—"the still surface" Suhlinto—"the long road" Ohkurinto—"the cupped hand" Lavurinto—"running water" Masserinto—"the deep ground" Ruhvonto—"the lifted stone" Vohvunto—"woven cloth" Ansorunto—"the long watch" Huomanto—"the first warmth" Vourinto—"the split log" Hehtunto—"the cold spring" Solpunto—"the smell of rain" Sahvunto—"the low fog" Nuominto—"the still hour" Loovanto—"the far bank" Hullonto—"white frost" Lonvunto—"the deep wood" Hyssëntë—"the held breath" Hinvyntë—"thin ice" Symëntë—"the small bell" Vëlvyntë—"the wide sky" Rivyntë—"the turning leaf" Nellyntë—"the first frost" Vyvëntë—"the low cloud" Hyrvintë—"the evening star" Sehyntë—"the clear place" Hyllëntë—"the far call" Sëlvintë—"the woven light" Nylvintë—"the deep root" Hirsyntë—"the first thaw" Epyrintë—"still water" Syllëntë—"the rising note" Ressinto—"the plaited mat"

## Lexicon

Every stem and word this page uses, and several hundred more, stand in the [[doc-sinalelexcn|Sinalë Lexicon]], grouped by what they are about, with the way each built word is made and a register of every Sinalë name the setting uses.

## External References

- Sinalë Names (given names and matrilineal lineage names)
- Elder Tongue comparative linguistics
- Sinalë literature and epic poetry
- Scattered Sinalë communities and their oral traditions
