---
shortcode: khelathlng
name: {full: Khelâthi Language, aliases: []}
type: skill
subType: language
description: "The ancient speech of Aû'Khelâthu, bound to ritual and sorcery, written in the sacred hand for priests and the people's hand for everyone else."
tags: []
data: {banner: khelathubnr, icon: icon-speaking, templatePriority: null, packFolder: regkhskl}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Khelâthi (isolate)}}
---

Khelâthi is a tongue of the Khelâthi (isolate) family. Fluency measures the sophistication of expression in Khelâthi, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

Khelâthi is the ancient and sacred tongue of the [[affiliation-empireakhlth|Empire of Aû'Khelâthu]], the monumental empire spanning the southern reaches of the [[place-xerathia|Xerathia]] continent. For over three millennia, Khelâthi has served as the language of state, ritual, and sacred knowledge—deeply intertwined with the religious and magical traditions that form the bedrock of Khelâthi civilization. Even as vernacular speech has evolved, the written and ritual languages remain largely frozen in their classical forms, creating a diglossia between the formal religious register and the spoken dialects of common life.

Khelâthi is spoken by an estimated 8-12 million people across the Khelâthi Empire and its trading colonies. It is also the liturgical tongue of several mystery cults and esoteric orders, giving it prestige and mystical authority far beyond its geographic boundaries.

## Phonology

### Consonant System

Khelâthi possesses a distinctive consonantal inventory with several features that create its characteristic timbre:

**Stops and Affricates:**

- Unvoiced: p, t, k
- Voiced: b, d, g
- Emphatic (pharyngealized): ṭ, ḍ, q (marked acoustically by uvular constriction)

**Fricatives:**

- Unvoiced: f, th (as in "thin"), s, š (palatal), x (velar), ḥ (pharyngeal), h
- Voiced: z, ẓ (pharyngeal fricative)

**Nasals:** m, n

**Liquids & Semi-vowels:** l, r, w, y

**Distinctive Glottal:** ' (glottal stop, phonemically significant and marked in classical spelling)

**Gemination:** Double consonants appear frequently and carry grammatical weight (particularly in verbal and nominal derivations).

### Vowel System

Khelâthi distinguishes three cardinal vowels, each with short and long variants:

**Vowels:** a (short/long ā), i (short/long ī), u (short/long ū)

**Secondary Vowel Reduction:** In rapid speech, unstressed vowels may flatten toward the "a" of "about", though this is not conventionally written in formal texts.

**Diphthongs:** ay, aw, iy occur but are often treated as vowel + glide sequences rather than true diphthongs.

**Vowels in Writing:** The Khelâthi scripts record consonants and leave the vowels to the reader, so this inventory describes the language as it is spoken. The romanisation these pages use is a reader's apparatus rather than Khelâthi orthography, and it spends a vowel the spoken language does not have wherever that is what keeps a name sayable.

### Phonotactic Patterns

**A word ends in a vowel or in `n`, `t`, `s` or `r`**, the emphatic `ṭ` counting as
`t`. Final vowels are frequent, particularly in nominal and verbal inflections.
Nothing ends in `l` or `z`, which is why those two are so common inside a word and
never close one.

**The glottal stop stands between two vowels and gives a word a pause where a
reader expects a consonant.** That is its whole function, and it is what a
sacred or lineage name has and an ordinary one lacks — `Qe'âret` and `Psaq'âru`
pause; `Mani` and `Dari` do not.

**Openings.** `An-`, `Am-`, `Re-`, `Wa-` and `Kh-` are the characteristic ones.
Initial clusters are otherwise rare and restricted to consonant + semi-vowel
(`y`, `w`) or fricative + stop: `Ps-` and `Tj-` are the licensed instances, as in
`Psaq'âru` and `Tjelsuk`. Stop + stop is not Khelâthi, so no word opens `Pt-`.

- **Syllable Structure:** CV or CVC; a word may begin with a vowel, which the glottal marks
- **Word Length:** Often moderate (two to three morphemes); compound names are less frequent than in Vedyari, though hieratic epithets create lengthy formal designations
- **Stress Patterns:** Usually fall on the first or second syllable; later syllables receive weaker stress in polysyllabic words

## Grammar Notes

### Word Order

Khelâthi follows a **Verb-Subject-Object (VSO)** order in narrative clauses, though marked deviations occur in dependent clauses and nominal sentences.

### Nominal System

- **Nouns** inflect for number (singular/plural), gender (masculine/feminine), and state (absolute vs. construct)
- **Definiteness:** The definite article (_en_, _et_) and demonstratives clearly mark specificity
- **Case:** Oblique arguments are marked through prepositional structures rather than inflectional endings
- **Agreement:** Adjectives agree with nouns in gender, number, and state

### Verbal System

- **Tenses/Aspects:** A tripartite system distinguishes perfective (completed action), imperfective (habitual/ongoing), and stative (state or condition)
- **Mood:** Indicative and subjunctive forms are marked through distinct morphological patterns
- **Voice:** Active and passive formations; middle voice is marginal
- **Person/Number:** Verbs inflect for both; first, second, and third person are distinguished; dual number is archaic but preserved in ritual texts

### Participles and Nominalizations

- Participles serve attributive and predicative functions; they readily nominalizes into agent nouns
- Verbal nouns (infinitives) are exceptionally productive; derived nouns often govern the same arguments as their parent verbs

## Script & Literacy

Khelâthi is written in two hands, and the division between them is one of trade rather than of style. The sacred hand belongs to the temple and the tomb; the people's hand belongs to the counting-house, the tax roll and the contract. A scribe is trained into one of them, and training in one does not confer the other, so a priest who follows a mortuary text without effort may be unable to read a harbour manifest, and the clerk who wrote the manifest cannot read the wall behind him. A temple record and a tax record are therefore two separate errands, each needing a reader of its own, and whether a Khelâthi is literate is the wrong question to ask of him: the question is which hand he was taught.

**Sacred Script ([[skill-khelthzscrpt|Khelâthi-zethu Script]]):** The original writing system employs a mixed inventory of logograms (representing whole words), phonetic signs (representing consonant clusters), and determinatives (clarifying semantic fields). Approximately 700 distinct signs are recognized by trained scribes, though only 200-300 are commonly used. This system is reserved for temple walls, royal monuments, and sacred texts; its complexity ensures that literacy remains the province of a trained priesthood.

**People's Script ([[skill-qalzscrscrpt|Qalezu Script]]):** A rapidly-written cursive adaptation emerged around 800 years ago for administrative and mercantile purposes, reducing the sign inventory to roughly 100 characters and introducing ligatures for common sequences. Qalezu writing is significantly faster and is taught to scribes, tax officials, and merchants.

**Modern Simplifications:** In recent centuries, some merchants and scholars have experimented with an even more streamlined "mercantile hand," approaching the status of a true alphabet with 24-30 signs per some reformers.

**Vowels and Foreign Spellings:** Neither hand records vowels. The phonetic signs carry consonants, and a reader supplies the vowels out of the word he already knows. The spellings other tongues give to Khelâthi words are transliterations written in the [[skill-semrnscrpt|Sêmarion]], and the vowels a foreigner reads in one of them are a convenience his own scholars supply where the Khelâthi scripts write nothing at all. A Khelâthi says his name in the three vowels the language has; a foreigner writes it in the letters his own alphabet gives him, and the two need not agree.

**Literacy:** Formal training in sacred Khelâthi script is restricted to the priesthood, royal scribes, and members of the esoteric orders. Among the nobility, perhaps 20-35% can read the Qalezu script, and a smaller number the sacred form. Professional scribes handle all written communication for the rest of the population; even guildsmen and merchants rely entirely on scribes for contracts and records. The gulf between the literate few and the non-literate majority is steep and has become a marker of social prestige and magical authority.

## Historical Development

### Proto-Khelâthi

Khelâthi is an isolate language with no widely-accepted external relatives. Its ancient origins are lost in myth and speculation. Some scholars propose that it represents a linguistic refuge—a language family that once spread widely but was supplanted by the expansion of other tongues, leaving Khelâthi as its sole surviving member. Certain lexical and structural features show vague similarities to northern Okháric, but these connections are tenuous and disputed.

### Classical Period (Age of Monuments)

The standardization of Classical Khelâthi occurred during the early dynasties of the Khelâthi Empire, roughly 2,300 years before present. This period saw the composition of the great temple inscriptions, the codification of ritual languages, and the establishment of scribal schools that have persisted to the present day. The language of this period—frozen in written form—remains the prestige register.

### Development of the People's Hand

Around 800 years ago, the widening gap between the laborious sacred script and the practical needs of administration led to the development of Qalezu Khelâthi. While structurally identical to Classical Khelâthi, Qalezu represents an orthographic reform rather than a linguistic one. However, its rapid adoption by the merchant class and administrative bureaucracies has gradually introduced vernacular features into what is written, accelerating the divergence between formal and colloquial speech.

### Modern Divergence

The spoken vernaculars of contemporary Khelâthi show considerable divergence from Classical Khelâthi:

- **Loss of Emphatics:** Younger speakers increasingly merge emphatic and non-emphatic stops
- **Vowel Lengthening and Shortening:** Classical long/short distinctions are becoming phonetically eroded
- **Simplification of Verbal Morphology:** Periphrastic constructions (auxiliary + infinitive) increasingly replace synthetic forms
- **Lexical Borrowing:** Trade languages, particularly maritime pidgins, have introduced numerous loanwords

Yet religious conservatism has resulted in Classical Khelâthi being actively reinforced through education and ritual. The priesthood has successfully resisted reforms that would modernize the written system, maintaining the sanctity and untranslatability of the sacred texts.

## Regional Dialects

### Khelâthi Proper (Core Regions)

- Closest to Classical Khelâthi; emphatic consonants are well-maintained
- Verbal morphology remains elaborate
- Stress patterns adhere to classical norms
- Extensive ritualistic vocabulary related to temple and court

### Delta Dialect (Riverine Communities)

- Moderate divergence from Classical Khelâthi
- Emphatics may be weakening
- Simplified verbal forms with greater use of auxiliaries
- Specialized maritime and agricultural vocabulary

### Frontier Dialect (Border Regions & Trading Posts)

- Extreme simplification of phonology and morphology
- Extensive code-switching with neighboring languages (particularly with Okháric and trade pidgins)
- Loss of gender and some case distinctions
- Represents an early stage of creolization

## Sample Phrases

1. **Khelâthu elu anlagh**—_Greeting formula; literally "the Khelâthi way upon life"_
2. **Aqun-Uqa, wethûr ezu qelet**—_Ritual invocation; "Sun-lord, hidden in the sanctuary"_
3. **Erlem ez luzet**—_Affirmation of loyalty; "I am bound to the throne"_
4. **Zab melet agu khelâth**—_Mercantile oath; "The lord's goods shall prosper"_
5. **Shelmu zetem**—_Sacred command; "Let the followers hear" (used to introduce proclamations)_

The particles are _elu_ (of, upon), _ezu_ (in), _ez_ (to, toward) and _agu_
(shall, marking what is undertaken rather than what is done).

## Learned Vocabulary

Two Khelâthi words are the learned world's names for the undead, taken from the funerary texts of the [[affiliation-empireakhlth|Empire of Aû'Khelâthu]] by every scholarly tradition that copied them; see [[lore-undead|Undead]] for their use.

- **ṭerebu**—root _ṭ-r-b_, to wear, to cloak: _the cloaked one_, the sentient undead ([[being-tereb|tereb]]). Invariant in number: one _ṭerebu_, many _ṭerebu_.
- **ḍumaṭu**—root _ḍ-m-ṭ_, to drive, to goad: _the driven one_, the mindless undead ([[being-damut|damut]]). Invariant in number: one _ḍumaṭu_, many _ḍumaṭu_.

The temple form is the word as Khelâthi speak and write it, emphatics and all. _Tereb_ and _damut_ are what the rest of the world made of it: the international plural, _terebu_ and _damutu_, is the temple word heard without its emphatics, and the international singular, _tereb_ ("TEH-reb") and _damut_ ("dah-MOOT"), is a back-formation from that plural. A Khelâthi priest says _ṭerebu_ for one and for many; a Vylarian physician says _tereb_ and _terebu_.

## Related Languages

Khelâthi remains an isolate, yet areal contacts have created zones of lexical and structural influence:

- **Okháric:** Some mutual intelligibility in trade contexts; possible ancient contact is evidenced by certain cognates in ritual vocabulary
- **Vedyari:** Possible borrowings in domains of royal administration and diplomatic terminology, though the directionality and depth of contact remain unclear
- **Maritime Pidgins:** Khelâthi has been a major substrate in the development of trade linguas along the Xerathian coast

## The Lexicon

This is what a Khelâthi word is made of. An author coining a name works from
these tables and the rules above them, and a form built from anything else is not
Khelâthi.

### Name elements

Eighteen elements build every given name and every house name. An element does not
stand alone as a word: it opens a compound or sits inside one, and the name it
builds is what a reader meets. Seven carry a longer form beside the short one, and
**the longer form is the one a house name takes**, since a house name ends in `-u`.

| Element  | Longer form | Sense                         |
| -------- | ----------- | ----------------------------- |
| `anlagh` | `anlaghu`   | life                          |
| `zab`    | `zabu`      | lord, lady                    |
| `leg`    | `legir`     | fair, good                    |
| `amqel`  | `amqelu`    | beloved                       |
| `reth`   | `rethu`     | name                          |
| `waz`    | `wazu`      | pure                          |
| `wal`    | `walu`      | the road                      |
| `gul`    | —           | vital spirit                  |
| `lem`    | —           | servant                       |
| `gith`   | —           | daughter of                   |
| `legez`  | —           | at peace                      |
| `lin`    | —           | brother                       |
| `quz`    | —           | strong                        |
| `anleth` | —           | the horizon, never the season |
| `zin`    | —           | the soul                      |
| `gez`    | —           | enduring                      |
| `qelt`   | —           | foremost                      |
| `zu`     | —           | land                          |

The openings `An-`, `Am-`, `Re-`, `Wa-` and `Kh-` carry much of the language's
character. They are phonology rather than lexicon, and they arrive through the
high-frequency elements — `anlagh`, `amqel`, `reth`, `waz`, `wal`, `anleth` —
rather than being chosen name by name.

**`Re-` and `Rê-` carry `reth`, the name.** The sun-lord's house-form is `Uqa`, so
`Rêqesehu`, `Rethur` and `Renutê` all mean what they say, and a house ending
`'Rêlu` is named for a name and not for the sun.

### Particles

| Particle | Sense                                                                    |
| -------- | ------------------------------------------------------------------------ |
| `ez`     | of, toward — the genitive, and the particle a commoner's byname hangs on |
| `elu`    | of, upon                                                                 |
| `ezu`    | in                                                                       |
| `agu`    | shall — marking what is undertaken rather than what is done              |

### The nineteen gods

A god carries a sacred-register stem, and the register is audible: the Twelve
pause and the local gods do not.

| God          | Domain                      |
| ------------ | --------------------------- |
| `Uqa'â`      | fire                        |
| `Qe'âret`    | order                       |
| `Reth'Sa'âr` | knowledge                   |
| `Psaq'âru`   | creation                    |
| `Uznêra`     | fertility and healing       |
| `Wethûr`     | death                       |
| `Thubâ'i`    | prosperity                  |
| `Tjaq'ûr`    | storms                      |
| `Nehle'ât`   | dreams                      |
| `Hezmuîri`   | decay                       |
| `Gewaâtis`   | voyages                     |
| `Azu'âthis`  | chaos                       |
| `Qeztu`      | war                         |
| `Tjelsuk`    | river-beasts                |
| `Shebazet`   | the marsh                   |
| `Pelgun`     | desert roads                |
| `Linhur`     | the hunt, the hunter        |
| `Linqur`     | the hunt, the killing       |
| `Igel'Nâru`  | the river, built on `igelu` |

#### The clipped house-form

A house never carries a god's full name. It carries a clipped form, and **the
clipped form drops the mark.** Not every god has houses named for it, and nobody
names a house for chaos.

| God          | House-form |
| ------------ | ---------- |
| `Uqa'â`      | `Uqa`      |
| `Qe'âret`    | `Qar`      |
| `Reth'Sa'âr` | `Retha`    |
| `Psaq'âru`   | `Psaqa`    |
| `Uznêra`     | `Uzner`    |

### Place-building elements

A place name is `<element>-<element>`. The first element opens the name and the
four directions close it.

| Element   | Sense               |
| --------- | ------------------- |
| `Gar-`    | house of, temple of |
| `Zu-`     | land of             |
| `Lut-`    | estate of           |
| `Yath-`   | mound of            |
| `Zel-`    | place of            |
| `Magu-`   | garden of           |
| `Khuqet-` | desert land of      |
| `Selat-`  | the province        |
| `-Zalu`   | south               |
| `-Miglet` | north               |
| `-Ithnet` | west                |
| `-Iaqtet` | east                |

### The morphemes a rank is built from

A rank is a two-word construct: the charge, then the holder or the place it is
held. What each rank means is stated on the ladder of the body that confers it;
what the words are made of is here.

| Morpheme   | Sense                                                                     |
| ---------- | ------------------------------------------------------------------------- |
| `Aû`       | of the throne and the realm, and reserved to it                           |
| `Thâz`     | of rank and extent — the ordinary word for great, and so the unpaused one |
| `Lem'`     | servant of                                                                |
| `Nelgir`   | god                                                                       |
| `Lekhau`   | sacred power                                                              |
| `Halzi`    | heart, and the account a heart answers for                                |
| `Wazu`     | pure                                                                      |
| `Genzet`   | council                                                                   |
| `Selat`    | province                                                                  |
| `Iru'palu` | the hereditary standing                                                   |

Two words translate as "great" and they do not merge: `Aû` belongs to the throne
and the realm, `Thâz` to rank and extent. Keeping them apart is what sets a high
priest apart from a god-king.

### Occupation words

What a commoner's byname names when it names a trade rather than a place.

| Word     | Trade       |
| -------- | ----------- |
| `zethu`  | scribe      |
| `zuqal`  | tiller      |
| `meglu`  | herder      |
| `igelar` | boatman     |
| `shebar` | reed-cutter |
| `qedlu`  | quarryman   |
| `gethar` | potter      |
| `legzar` | brewer      |
| `walir`  | weaver      |
| `lemzu`  | bondsman    |

### Temple, arcane and cosmology

| Word        | Sense                                                |
| ----------- | ---------------------------------------------------- |
| `lekhau`    | sacred power                                         |
| `zethu`     | writing                                              |
| `nelgir`    | god                                                  |
| `halzi`     | heart, account                                       |
| `igelu`     | the river                                            |
| `Zulaten`   | the realm of the dead                                |
| `Gethunu`   | the arcane order                                     |
| `Álgit`     | the Devourer of the Dead                             |
| `Qet Telgu` | the first occasion                                   |
| `selqur`    | a year of the count from the Qet Telgu               |
| `Halzunet`  | the noon denials, the heart's account declared aloud |
| `zaglu`     | a figure that answers for its owner                  |
| `Azlet`     | the season of flood                                  |
| `Gelet`     | the season of growing                                |
| `Shelu`     | the season of low water                              |

Weights and measures: `gezan`, `qelu` and its formal form `qezelet`, and `lagar`.

### The counting-house, the quay and the water-works

The words of the realm's working life, and the ones its neighbors borrowed with
the methods they name.

| Word     | Sense                                      |
| -------- | ------------------------------------------ |
| `qaṭlun` | a hidden channel, the tunnel-well          |
| `ḍegan`  | a tax, the impost on goods crossing a line |
| `qathur` | a seal, and the warrant it closes          |
| `ṭelqas` | a quay                                     |
| `ḥabṭun` | a storehouse                               |
| `halzat` | the weighing, built on `halzi`             |
| `qinlat` | sweet oil, unguent                         |
| `ḍuras`  | washing-salt                               |

### The realm, its people and its hands

| Term             | Sense                      |
| ---------------- | -------------------------- |
| `Aû'Khelâthu`    | the empire, formally       |
| `Khelâthu`       | the land                   |
| `Khelâthi`       | its people, and its tongue |
| `Khelâthi-zethu` | the sacred hand            |
| `Qalezu`         | the common hand            |

## Naming Traditions

### Cultural Significance

In Khelâthi tradition, names are sacred utterances that encapsulate divine principles, royal genealogy, and magical potency. The bestowing of a name is a ritualistic act, often overseen by priests. Personal names are believed to carry the essence of the person and to establish sympathetic connections to the divine realm. Secret names, known only to the individual and the priesthood, are thought to confer protection and magical authority.

### Register

**The pause is the register.** A god, a throne, a great institution or a house
carries a glottal hiatus between two vowels, or a seam before a vowel. An
ordinary personal name carries neither, and a reader hears the difference without
being told: `Qe'âret` and `Reth'el'Lêru` pause, `Aguri` and `Khelemûr` do not.

So a name states a standing before it states anything else, and the standing
decides what follows the given name.

| Standing                                            | How a person is named                    | Example                        |
| --------------------------------------------------- | ---------------------------------------- | ------------------------------ |
| `Iru'palu`, `Zemelu`, priestly and scribal lineages | given + house                            | `Rethutê Reth'el'Lêru`         |
| Artisan, merchant, soldier, free tenant             | given + `ez` + place                     | `Aguri ez Zileti`              |
| Farmer, villager                                    | given + `ez` + village or district       | `Khelemûr ez Iqu`              |
| Bondsman                                            | given + `ez` + the estate that holds him | `Gezebari ez Lut-Psaqa`        |
| Outcast, `Name Struck`                              | given alone                              | `Ahmuzê`, and nothing after it |

**A commoner's byname never carries `-u`.** The collective is what makes a house
name a house name, and wearing one without the land, the shrine or the ancestor
behind it is a false claim rather than an affectation. That is why rank 0 in a
Khelâthi body is `Name Struck`: a name carries legal weight here, so removing it
is a sentence.

A given name carries no seam and no hiatus whatever the standing. What rises with
standing is what comes after it.

### The Near Name

**A given name of four syllables or more has a near name**: the given name broken
off after its second vowel, with that vowel held long. A syllable is a vowel or a
run of vowels, so `Gezehutyu` has four and `Lersaîs` has two. Nothing is added and
nothing replaced; the near name is the opening of the given name, and the long
vowel is the voice holding the place where the rest of it would be. A vowel already
long stays as it is, so `Imhûgepu` is `Imhû`.

| Near name | Given name       |
| --------- | ---------------- |
| `Anlâ`    | `Anlagherhafu`   |
| `Zâbê`    | `Zâbeglegezu`    |
| `Amqê`    | `Amqelet-Zelemu` |
| `Gezê`    | `Gezehutyu`      |
| `Khelâ`   | `Khelassetepu`   |
| `Imhû`    | `Imhûgepu`       |
| `Uqê`     | `Uqetiraku`      |
| `Rêqê`    | `Rêqesehu`       |
| `Legî`    | `Legirigulu`     |
| `Gulmê`   | `Gulmenwati`     |

Names that open alike share a near name: `Amqelitâna`, `Amqelitamun` and
`Amqelitefu` are each `Amqê` to their own people. A name of three syllables or
fewer has no near name, because breaking it off at the second vowel leaves almost
all of it.

**The near name is never written.** Neither hand records vowels, and a reader
supplies them out of the word he already knows. A name broken off short is no word
he knows, so its consonants read back as some other name, or as none. A scribe
enters the given name, the temple account is kept under it, and
[[lore-readingweigh|the Reading at the Weighing]] reads it out. A contract made out
to a near name names nobody the archive holds.

**It belongs to the people a tie binds**—kin, the household, neighbors, a master
and the apprentice who lives under his roof. They are the people whose promises go
unentered, and the near name goes unentered for the same reason. Between strangers
it claims a tie that does not exist. A title always takes the given name:
`Thâz'Lekhau Anlagherhafu`, never the near name after the title.

### Naming Patterns

**Given Names (Male):**

- Often incorporate theophoric elements (divine names prefixed or suffixed): _Ahmuzê_ (devotion-blessed), _Imhûgepu_ (he who arrives in stillness)
- Many reference royal titles, divine attributes, or favorable circumstances
- Frequently compound with elements meaning "true," "beloved," "strength," or "protection"
- Consonant-heavy phonology with frequent emphatics
- Written as a single word, however many elements they are built from, and never with the collective _-u_, which belongs to the house
- Examples: _Khelâfirahu_ (the bold one), _Thûlmês_ (moon-born)

**Given Names (Female):**

- Similarly theophoric; often invoke goddesses of motherhood, fertility, and magic
- Many end in long vowels (_-ê, -ā, -ī_) which grammatically mark feminine gender
- Frequently incorporate feminine diminutive suffixes, creating terms of endearment
- Examples: _Anlaghesna_ (life-bearer), _Linya_ (fortunate), _Thiya_ (gift)

**Clan or House Names:**

- Typically elaborate compounds referencing mythological ancestors, founders, or place names, the seam between elements marked by the glottal and the following element capitalized
- Often include hieratic epithets or divine titles
- May reference the location of the family shrine or primary temple affiliation
- Carry the collective _-u_: a house is named as the people of its founder, its shrine or its land, so the plural is what a reader hears at the end of every one
- Examples: _Qar'quzu_ (house of the balance, on `Qar`), _Zu'Zekenu_ (land of the ancestral realm), _Gar'Anlaghau_ (house of the living)

### Titles and Epithets

Formal address involves extensive titulature; individuals of rank may have five to ten titles reflecting their position, accomplishments, and piety. These are often written before the personal name and may be abbreviated in daily speech but elaborated in formal or religious contexts.

### Throne Names

A Gar-Aû is crowned on Yath-Telgu under a throne name, and the throne name dates
every contract, tax roll and temple record of the reign. **A throne name joins a
name element to a god's house-form across the seam**, and the seam is what marks
it: a given name never carries one, and a throne name always does. Before a
house-form that opens on a vowel the seam stands alone; before one that opens on a
consonant it takes the linking `el`, as a house name does.

| Throne name      | Built from               | Sense                   |
| ---------------- | ------------------------ | ----------------------- |
| `Amqel'Uqa`      | `amqel` + `Uqa`          | beloved of the sun-lord |
| `Zab'Uzner`      | `zab` + `Uzner`          | lord of the healer      |
| `Anlagh'Uqa`     | `anlagh` + `Uqa`         | life of the sun-lord    |
| `Gez'el'Qar`     | `gez` + `el` + `Qar`     | enduring in order       |
| `Legir'el'Retha` | `legir` + `el` + `Retha` | fair in knowledge       |
| `Quz'el'Psaqa`   | `quz` + `el` + `Psaqa`   | strong in the making    |

**A throne name is used again, and the king-lists number its bearers across the
whole list rather than within one house.** `Zab'Uzner` II reigned nearly two
thousand years after the first `Zab'Uzner`, in a house that had no tie to his.

A founder may keep his own given name as his throne name, seamless as it was, and
the house after him keeps it in his honor. Every Gar-Aû of the reigning house has
been crowned `Meqes`, which is why the reigning Gar-Aû is Meqes XVI.

### Institutional Names

A body of people is named from three parts: the **head-word** saying what kind
of body it is, the **work** it does or the **name** it is founded on, and whose
it is.

```
Lin'Zethu elu Aû'Khelâthu     the scribes' guild of the Empire
Lin'Melnu elu Galezkara       the smiths' guild of Galezkara
```

The head-word is the part a listener parses first, and it is the part that says
whether the body is a trade, a household, a priesthood or a court.

| Head-word | What it names                           | Example                         |
| --------- | --------------------------------------- | ------------------------------- |
| _Gar-_    | a house: a family, a lineage, an office | _Gar-Sa'Aqutu_, _Gar-Meglay_    |
| _Lin'_    | a sworn body of a trade                 | _Lin'Githar_, the weavers       |
| _Lut-_    | a mansion: a god's temple, or an estate | _Lut-Uznêra_, _Lut-Mulu_        |
| _Lem'_    | an order, the servants of a god         | _Lem'Thubâ'i_                   |
| _Genzet'_ | a court or council                      | _Genzet'Uznêra_                 |
| _Zab'_    | the lords of a thing                    | _Zab elu Aû'Khelâthu_           |
| _Zeghet'_ | a company that goes out                 | _Zeghet'Nelgu_, the sacred hunt |

**The genitive is _elu_.** It is the same element that links the halves of a
clan name—_Uqa'el'Lêru_, the Uqa of Lêru—standing free between a body and
whatever holds it. What follows _elu_ is a realm, a city, a god or a house:
_elu Aû'Khelâthu_ for a body chartered across the Empire, _elu Galezkara_ for
one that answers to a single city, _elu Reth'Sa'âr_ for one attached to a
temple.

**The same trade in two places is two bodies, not one.** _Lin'Melnu elu
Aû'Khelâthu_ is the imperial guild of metalworkers, chartered by the Gar-Aû and
holding across every selat; _Lin'Melnu elu Galezkara_ is the smiths of the
capital, who answer to their own masters and to the city. A smith may belong to
both, to one, or to neither, and which he names when asked says a great deal
about him.

**A god's establishments share his name and differ by head-word.** The temple of
Uznêra is _Lut-Uznêra_; the priesthood serving in it is _Lem'Uznêra_; the
council that governs its holdings is _Genzet'Uznêra_. A speaker who says the
wrong one has said something else entirely, and the distinction matters in any
dispute over property, since the three hold different things.

**A house is _Gar-_ whether the tie is blood or office.** _Gar-Sa'Aqutu_ is a
family; _Gar-Meglay_ is the frontier command; _Gar-Gezanu_ is the service that
collects the Gar-Aû's dues. What they share is that each has a head who answers
for it, which is what the head-word asserts.

#### The Work-Words

These name what a body does, and stand between the head-word and the genitive.

| Word      | Trade                     | Word      | Trade                        |
| --------- | ------------------------- | --------- | ---------------------------- |
| _zethu_   | the written hand, scribes | _zuwaret_ | trade, merchants             |
| _zemnu_   | craft, artisans           | _melnu_   | the forge, metalworkers      |
| _githar_  | the loom, weavers         | _lagun_   | timber                       |
| _qenuwa_  | gold                      | _qelzu_   | the lock, locksmiths         |
| _zaglu_   | the made figure, toys     | _zamlu_   | music, minstrels             |
| _shelun_  | performance, players      | _legharu_ | the herb, apothecaries       |
| _zeghet_  | the hunt                  | _qeztu_   | war, mercenaries             |
| _igelu_   | the river, mariners       | _zegaru_  | the field, farmers           |
| _lutgar_  | the inn, innkeepers       | _genzet_  | the court, litigants         |
| _gezan_   | a weight of metal, debt   | _lagaru_  | bulk, volume                 |
| _rethu_   | lore, scholars            | _lemu_    | service, servants            |
| _lemzabu_ | a great house's steward   | _qethar_  | the old way, traditionalists |

Several are the ordinary word doing double duty: _gezan_ is a weight of metal
before it is a debt, so _Lin'Gezan_ is heard as "the guild of the weighing" and
only then as the collectors; _lagar_ is a measure of grain, so the merchants who
deal only in volume are _Lagaru_ whatever they think of the name. _zaglu_ is the
funerary figure, which is why the toymakers carry it and why the trade is
thought slightly unlucky.

**The temple keeps an older word for some things the market also names.** A
tenth of a _gezan_ is a _qelu_ in the street and a _qezelet_ on an attestation,
and the two are the same weight of metal; which one a document uses says who
drew it up. The formal register is not a separate vocabulary but a handful of
such doublets, kept because the temples attest the weights and write their
records in the sacred hand.

**Foreigners keep their own word and put it after.** A Vylarian factor writes
_Lin'Zethu elu Aû'Khelâthu_ in a contract and says "the Scribes' Guild" in the
tavern, and both are understood. A Khelâthi doing business abroad does the same
in reverse, which is how the trade tongues along the coast came by the words.

---

## Name Lists

### Male Given Names

- Ahmuzê
- Akhegego
- Akherethu
- Akhrelu
- Amruzi
- Azûnmat
- Athunotepu
- Aguri
- Ankethet
- Anlagher
- Anlagherhafu
- Anlaghi
- Anlaghur
- Azâri
- Lemenkhons
- Lekhûr
- Balîra
- Gajegulu
- Gari
- Gezebari
- Lâraket
- Larosê
- Lenni
- Lersaîs
- Luyat
- Imhoqar
- Imhûgepu
- Imsithe
- Inhâgi
- Igu
- Gezedafu
- Gezerker
- Gezuhatî
- Gulur
- Qedût
- Khelâden
- Khelâfirahu
- Khelansi
- Khelayu
- Khelemûr
- Khelîtyu
- Khelôr
- Khûzin
- Mathaku
- Maqi
- Maqûptas
- Magari
- Methisî
- Menkâthi
- Mentotha
- Meranlaghu
- Minraqi
- Quztar
- Latari
- Zabmeht
- Zaborêt
- Lefreta
- Lefta
- Lemjen
- Leshi
- Gahser
- Gakhoti
- Garedi
- Garri
- Gasher
- Gathamose
- Gatnefur
- Genreku
- Gerra
- Gîshur
- Zenti
- Raiaqu
- Rathashî
- Rêqesehu
- Rethur
- Zâbeglegezu
- Zahura
- Zapse
- Zarâpis
- Zebenra
- Zefurâ
- Linet
- Lizulu
- Linnuseret
- Shezur
- Zînuri
- Ziprahu
- Zobagulu
- Thara
- Thefnutî
- Thethi
- Thâfu
- Thûlmês
- Thotkar
- Thûgulu
- Uqetiraku
- Gahkar
- Gajakî
- Ganomu
- Wenlegir

### Female Given Names

- Âhmeqat
- Agosi
- Alûnet
- Ankensegi
- Anlaghes
- Anlaghesi
- Anlaghesna
- Anlaghîra
- Anlaghi
- Anmetraqe
- Asneteqe
- Balaquzu
- Zanut
- Lemani
- Lemat
- Balenerî
- Balinta
- Thalura
- Qelseta
- Lemaâ
- Lenuret
- Lenuta
- Letmiya
- Îgi
- Izaret
- Quztara
- Khelama
- Khelamoset
- Qelatha
- Kheleseti
- Maqima
- Methena
- Megeti
- Amqeletahu
- Amqelitalemu
- Amqelitâna
- Mertelu
- Muitha
- Muzemre
- Muzenakhu
- Mutrâgo
- Lafare
- Lafurê
- Zabet
- Zabhetar
- Zabita
- Zabegulu
- Zabseti
- Legirigulu
- Legiris
- Legirakhu
- Lehbet
- Lesekha
- Lesmâ
- Litaris
- Loret
- Lubhas
- Lûta
- Gakha
- Gemî
- Geshet
- Raiyaqu
- Rethia
- Rethutê
- Zâktet
- Githara
- Githera
- Githira
- Githîri
- Githiya
- Githîyat
- Zekenare
- Zekhemet
- Linta
- Linya
- Zesha
- Zeshelegezu
- Shegas
- Shepratha
- Sheqamon
- Shespazo
- Thakat
- Thakeset
- Thakete
- Thamiyra
- Thapina
- Thâpira
- Thâri
- Thasheri
- Thchamôsa
- Themerît
- Thenfakte
- Thetera
- Zaya
- Thirye
- Thiya
- Tjuqir
- Tjuyaqe
- Thema
- Garet

### Clan or Tribe Names

- Azlet'Qûtu
- Azlet'Râlu
- Akhelo'Naru
- Âthen'Rêlu
- Amralo'Methu
- Aqun'Râshequ
- Anlaghet'Zaru
- Anlaghe'Rêlu
- Anlagh'Khelesu
- Anlagh'Zeketu
- Azu'Qehetu
- Azeret'Mûlu
- Zin'el'Rêlu
- Zin'Lepau
- Zin'Gatau
- Balene'Requ
- Gezedu'Garu
- Gezer'Quru
- Gez'Aqêu
- Gez'Gathu
- Geze'el'Anlaghu
- Qelt'Leru
- Qelt'Gultau
- Qelt'Lefetu
- La'Girau
- Let'Lerau
- Let'Rethetu
- Let'Thariu
- Let'Gerau
- Iqu'Iqenu
- Ithu'Gataku
- Igu'Maâthu
- Igu'Thisû
- Itha'Letu
- Iqe'Lêru
- Iuthi'Gehtiu
- Gezâ'Uzu
- Gul'el'Khosetu
- Gul'Loruru
- Gul'Zekeru
- Gul'Zekhenu
- Gul'Zetu
- Gul'Thakétu
- Khelemu'Gathau
- Qelt'Agetu
- Mathu'Gehru
- Malu'Shegatu
- Malu'Thenoru
- Mequ'Girahu
- Mequ'Qeru
- Mequ'Lefru
- Mequ'Gataru
- Amqelu'Gatau
- Melu'Khelariu
- Zab'Anlethu
- Les'Leretu
- Le'Kheleshu
- Lisubu'Iqiu
- Gar'Anlaghau
- Gar'Labeu
- Gar'Loru
- Gar'Râqu
- Gar'Gâ'Athu
- Uqa'Qerahu
- Reth'el'Lêru
- Reth'el'Qetu
- Reth'el'Khelensu
- Reth'el'Khelétu
- Sa'Aqutu
- Sa'Aqethu
- Sa'Muqu
- Sa'Gathau
- Uzner'Âu
- Zeku'Maqu
- Zet'Maâthu
- Shathu'Egu
- Shathu'uthu'Uqu
- Shathu'Kheleru
- Shaleth'ulu
- Shethu'Zekenu
- Shethes'Râlu
- Zu'Gezâru
- Zu'Letetu
- Zu'Gezasaru
- Zu'Maâthu
- Zu'Magetu
- Zu'Meqetu
- Zu'Amqeletu
- Zu'Mequ
- Zu'Murrau
- Zu'Lemetu
- Zu'Gathau
- Zu'Zekenu
- Zu'Zereketu
- Tha'Ulgau
- Retha'Mogau
- Thoten'Râlu
- Retha'Ganu
- Gaset'Zabu
- Wal'Enrauqo
