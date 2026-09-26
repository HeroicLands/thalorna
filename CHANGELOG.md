# thalorna

## 0.1.0

### Minor Changes

Ermelína's regional patron is now named Jarl Knalthorv Hrandendikh, a name and title Nordmal's own conventions actually produce. The brewers' guildmaster she supplies is now named Braldvir Thalmumakh, in the same vein. The patron's reference record moves to a new address to match.

**Byzarían houses answer to Byzarían names.** Sixteen people of the League — a man-at-arms, a
perfumer, two timberwrights, a herder, a locksmith, a mercenary and the rest — carry house names
their own tongue builds, each closing on the hard stop that tells a house from a person, and each
saying what the house is held to: the wood, the pitch, the iron, the freight, the road, the gate.

**The Duke is named for his gate.** The aristocrat who keeps Arkádios on retainer is a Byzarían
lord with a Byzarían house, not a man surnamed for a city the setting does not contain.

**Their addresses move with them.** Each renamed person is a new record and names the address it
used to hold, so art and links written against the old one can be pointed at the new.

**Draft pages say so.** A page tagged `draft` now carries a notice above its
prose stating that it is unfinished and nothing in it is settled. A finished
page carries nothing, and a draft page no longer lists `draft` among its tags.

**Places and affiliations list what they hold.** A place or affiliation page
now carries a card below the body listing what lies within it and who holds
it.

**Three people take names from the tongues they live among.** The senior priestess at Liranel and
the town magistrate of the forest edge carry Élavendri names now, and the warlord who has sworn to
meet Böthvarr in single combat carries a Nordmal one, in place of the elder-tongue and Khazári forms
those stocks no longer hold.

**Two of them are new records.** The priestess and the warlord each name the address they used to
hold, so anything written against the old one can be pointed at the new.

**Lore**

- Deity, totem, and arcane entries display their symbols beside the text.

**Drafts**

- In-progress reference, location, and mystical ability entries carry draft notices.

**A hundred and fifty-four entries stop publishing a page.** Deities,
settlements, cultures and a handful of other places carried a heading and a "to
be written" line, and nothing else.

**Each of them says what it is.** Every one now carries a single line — what the
god holds, what kind of place it is — and that line is what the tables and
indexes listing them print.

**The nineteen arcane talents say what they do.** Each carries a sentence
describing its effect, beside the abilities somebody has written out in full.

**Prose that linked to those entries names them instead.** A mention that was a
link reads as the plain name, so nothing points at a page that is not there.

**Two Sinalë places name their own**

- The ruined enclave in the deep interior of Nordheim is **Haulonna**, the hearth of the unfallen leaf, for the valley whose trees kept their leaves all winter.
- The crumbling ruin in the Tramontàna borderlands is **Sirmennë**, the hearth of the first stone, and the Áelendan use the Sinalë name too.
- The adventure among those ruins is **The Enigma of Sirmennë**.
- A world that linked to either place, or to that adventure, needs those links pointed at the new entries.

**Nineteen arcane talents no longer have a page of their own.** Each carried a
title and nothing beneath it, so the site publishes nothing where it once
published an empty page.

**They are unchanged in the compendium.** Each is still the item it was, and a
character who has one is unaffected.

**The Arcane Talent table lists all nineteen**, as plain names rather than
links, beside the abilities somebody has written.

**Vedyara**

- The Adventurer's Guide introduces the lands, communities, faiths, and traditions of Vedyara in one place, with paths into their detailed entries.

### Patch Changes

The Norgaad settlement of Asgarthul carries its name spelled with a th.

Every place, person and organisation a being names that has its own page is linked to it.

The great regions state which lands and seas they border, and the build checks that both sides agree.

All 65 tables across 34 notes move from Dataview's query language to **SQL, run
by DuckDB over the content index** — the language package-build is standardising
on. Nothing about how a table is authored changes: it is still a fenced block in
the note, answered at build time, rendered into the journal and the page.

Most tables emit exactly what they emitted before. Four publish better material,
because SQL refuses a field no note carries where Dataview quietly rendered an
em-dash:

| Table                                 | Before                             | After                                       |
| ------------------------------------- | ---------------------------------- | ------------------------------------------- |
| The six bestiary tables               | Weight and BodyScale were `—`      | the values the notes declare                |
| Hex Hodai incantations                | Level was `—`, rows sorted by name | the incantation's level, sorted by it       |
| Heroes and Knaves · Heroes of Asguard | Realm and Occupation were `—`      | Occupation; Realm dropped — no note has one |
| Pantheons, on _The World of Thalorna_ | 32 rows, 15 of them rituals        | the 17 actual pantheons                     |

The Pantheons table is the one place rows disappear. Dataview's `contains`
matches a substring, so a note tagged `celestial-pantheon` — every _Ritual:_
note — answered a query asking for `pantheon`. SQL matches the tag itself.

Row order is unchanged. SQL collates binary where the old evaluator folded
case, so a table sorted by a name asks for `COLLATE NOCASE` — which is what keeps
`The Order of the Ashen Vow` ahead of `The Order of Týr's Justice`.

Two language notes spelled the emphatic/uvular k as `ḳ` — k with a dot below —
once each, in the same list of emphatic consonants:

| Note    | Was                                                     | Now                                                     |
| ------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Kheperi | `Emphatic (pharyngealized): ṭ, ḍ, ḳ`                    | `Emphatic (pharyngealized): ṭ, ḍ, q`                    |
| Bethuan | `**Emphatics** (ṭ, ḍ, ḳ) collapse into plain _t, d, k_` | `**Emphatics** (ṭ, ḍ, q) collapse into plain _t, d, k_` |

Semitic romanisation writes this sound either way, and `q` is both the commoner
choice and pure ASCII. It also agrees better with what the Kheperi note already
says about it — `q` _is_ the uvular stop, and the line describes the sound as
"marked acoustically by uvular constriction".

`ṭ` and `ḍ`, its companions in both lists, are unchanged: they are carried by
essentially every book face, and `ḳ` was carried by almost none. Of the
thirty-nine OFL text faces probed over the whole corpus, this letter and the
`ṁ` respelled alongside it were the only two characters standing between the
tree and a wide choice of faces — together they take the number of faces that
can set this corpus from **eleven to twenty-one**, adding Literata, Spectral,
Vollkorn, Source Serif 4, Crimson Pro, Piazzolla, Bitter, Petrona, Alegreya and
Cormorant Garamond.

The phonology says what it said before, and the tree now contains no `ḳ`.

Three northern affiliations show relationships only to organizations with their own entries.

The Heroes notes that name Moktur and Nartûm agree with those places' own pages.

Khaset-Mehtet, Ta'Kheperu's disputed northern desert-march facing Dunhara, has its own page.

Every territory a polity rules has its own page — the land beside the realm that holds it, carrying the country's geography, produce and settlements, so a nome of Ta'Kheperu and the ground it governs read as two things.

Meshara the Wise, mentor to Shebas Thutmosa and Sênta Ta'Sereket, has her own page.

The shamen's moot of the Silver Forests and Thrymstead's Tingward have their names.

The people the setting names in passing are now records you can search and list, even where nobody has written them up yet.

Every page lists the pages that link to it and the pages it links to, grouped by type, at the foot of the page.

Every place sits in the region that holds it, and the River Vylaris has its own.

The table setting out which letters Nordmal never writes listed those letters by
printing them, so the note stating that thorn, eth and ash have no place in the
content was the one place they still appeared — and any check enforcing the rule
would have failed on the rule. They are named now instead of shown, which also
reads better for anyone who has never met the word _thorn_ as a letter. The same
went for an o-ogonek used as an example in the lore note.

No name or word changes. The tree now holds none of these letters at all.

The city-state of Saṃgha was written with `ṁ` — m with a dot _above_ — in the
three places it appears. The IAST convention that the surrounding Vedyaran names
already follow (Dhanurvedakīrtirāja, Ādānaśreṇī) renders anusvāra as `ṃ`, m with
a dot _below_, so the name was the one word in its own neighbourhood using a
different system.

It also widens what the tree can be printed in. Of thirty-nine OFL text faces
probed over the whole corpus, the dot-above `ṁ` is carried by **three**; the
dot-below `ṃ` is carried by **every one of them**. Nine otherwise-complete book
faces — among them Literata, Spectral, Vollkorn and Source Serif 4 — were
disqualified by this one character and are now available. With `ḳ` respelled
alongside it, the number of faces that can set this corpus goes from **eleven to
twenty-one**.

No other note used the letter. The name reads and sorts as it did.

Names in Thalorna carried letters that no search box can reach. A search that
folds accents normalises to NFD and drops combining marks, which quietly handles
_â_ — it is an _a_ wearing a circumflex, so typing `harn` finds Hârn with nobody
arranging it. Thorn, eth and ash are not accented letters. They are letters in
their own right with no plain letter inside them to reduce to, so typing `thorr`
could never reach a name spelled with a thorn, and position made it worse:
_Skjaldmær_ at least answered a `skjaldm` prefix, while _Þórr_ failed on the
first keystroke.

Those letters are now written out. Accents stay throughout, because they cost a
reader nothing:

| sound                         | now           | was |
| ----------------------------- | ------------- | --- |
| voiceless dental fricative    | `th`          | þ   |
| its merged voiced counterpart | `d`           | ð   |
| the low front vowel           | `ae`          | æ   |
| the rounded back vowel        | `ö`           | ǫ   |
| long vowels                   | `á é í ó ú ý` | —   |

So Óðinn is **Ódinn**, Þórr is **Thórr**, Skjaldmær is **Skjaldmaer**, and
_seiðr_ is _seidr_. O-ogonek folds correctly but is missing from two of the three
faces the system ships, so it becomes o-umlaut and stops falling back mid-word in
sheet headers.

The northern assembly is the one word that does not take `th`: spelled that way
it becomes _thing_, an ordinary English noun with some 2,800 uses already in the
tree, and the word would never be found again. It is the **ting**.

Two names contradicted the tree rather than the rule, and follow it now —
Asgarthul is **Asgardul**, since the element is `gard` in Asgard, Midgard,
Valgard and Isgard; and Blóth is **Blód**, since blood is `blod` in Blodtusc and
its own note calls it the Place of Blood-Sacrifice. Blóthöll keeps its `th`,
which is a seam between two words rather than one sound, and Vithgard keeps its
own — it was always plain ASCII and passes untouched.

Filenames were reduced by the same broken rule, which deleted what it could not
decompose: Óðinn sat on disk as `Oinn.md` and Æthería as `theria.md`, a file that
sorted under _t_ and began mid-word. They transliterate now, along with 27 paths
that had never been folded to ASCII at all.

Nothing that identifies a document moved. Shortcodes, addresses, pack folders and
`home:` references are unchanged, so saved data and cross-package links resolve
exactly as before. The rule itself is written down, in a **Romanising Nordmal**
section in the language note and a **Romanising Thalorna** section in the lore
note, so the next name gets it right without anyone re-deriving it.

Sênta Ta'Sereket's hook about her mentor, Meshara the Wise, agrees with the rest of the setting: Meshara is already dead when the hook begins.

The Shattered Peaks of the Nordlands have their own page.

- Six prose sentences that read "sohl" now read the word they meant: "kit".

- Meret-Sebek Hekaamun's Will entry loses a stray HTML fragment, and his Reasoning entry reads as its own bullet again.

- Seventeen patrons' and enemies' names in Heroes and Knaves render in full instead of breaking off after a garbled bold marker.

- Nékropolis and Yeşilhan are placed the way their own pages already describe them, and Vedyara and the Vylarian Sea both declare their shared border with Dunhara.

Sir Drazha Sycâni and Shadiq ibn Rahman come from the Sycâni holds in the passes of eastern Byzaría, and the Eastern March says what those holds are.

Artwork is addressed by the package that ships it, so every icon and portrait a
note names reaches the website, the sourcebook and the compendium packs, and a
note can place a picture in its prose where the text calls for one. The
sourcebook carries its own typefaces rather than relying on what the reader's
machine happens to have.

Every picture, icon and sound the setting ships is now checked to carry a stated
rights holder and licence, so the credit owed for a file cannot go missing
without the build saying so.

The header navigation on the website is the organisation's shared menu.

**Tānvür's sacred epoch and its datable dynastic record are two different
things, and the notes now say which is which.** The Celestial Calendar still
counts from the Great Convergence exactly as it always has, and the empire still
holds that as plain fact; the oldest dynasty the imperial archive can document
begins around 2500 BF, thirty-seven centuries later.

- The Umbral Court regards Dúnavarre and the Ordo Arcanis as nemeses and the Justiciar Blade Order as a rival.

- **Bestiary** — The undead have their learned names: the _tereb_, the cloaked one that can pass for living, and the _damut_, the driven one.

- **Bestiary** — The Nordlands keep _Helspawn_, _nightwight_ and _helthraal_ as their own words for them.

- **Bestiary** — Their pages sit at their own names now, so an old bookmark to the nightwight or helthraal page no longer finds them.

- **Bestiary** — Dreadspawn are made, not born: any god of invention or creation, or a mortal who dares, can make one; none can breed.

**Áelendi names.** The highlanders of the Élavendran interior no longer answer to lowland names.
Áelendi carries a stock of its own — given names built from roots the lowlands have stopped
saying, clan names closed with an ending the lowlands have lost — so a name told at a mountain
hearth places its bearer the moment it is spoken. The language note now sets out what Élavendri
changed and Áelendi kept, and how a clan name is made from an ancestor's.

**The Áelendan write in a Sinalë hand.** Áelendi is set down in the starlight-hand of its elder
neighbours, borrowed and bent to sounds it was never cut for, while Élavendri took the imperial
alphabet instead. The two branches can hold a conversation and cannot read a line of each other,
and an Áelendi page reaches almost no one outside the highlands.

**Aelwyth.** The Khazári reached the island around 3100 BF, while Khazártúrn still stood — which is

- Affiliations show their common skills in the SoHL section, with links to the relevant skill descriptions.
- SoHL games require SoHL 0.8.7 to display affiliation common skills.
- Character ages match their birthdays at the start of the setting year; unknown ages remain unknown.

**Setting artwork loads on the website.** Every icon and portrait a note names
is now addressed by the package that ships it, so a page serves the picture
from the shared artwork host instead of asking for a file that is not there.
Weapons, beings, skills, mystical abilities and faiths all pick up their
artwork; the same names still resolve to the right files in Foundry and in the
sourcebook.

**Weapon pages print their strike modes.** A weapon's panel carries its heft
beside weight, price and durability, and lists each strike mode with its
attack modifier, impact and length. Beings' panels read from the same
renderer, so a creature's attributes, skills and mystical abilities sit
together in one box, and a system with nothing to say says so rather than
showing an empty panel.

**Vedyara.** The Assembly of the Compact has a note of its own: the five polities that hold the

Vedyaran banking system in common, what a seat obliges its holder to do, the standing committees a
merchant actually deals with, and why Suvarṇagiri sits outside by its own constitution rather than
by anyone's exclusion.

roofless on open pasture in the middle of the plateau, its tanks still holding
and owned by two drover lineages, and almost nobody in the civilization that
numbers its years from it has ever seen it.

**Characters.** Padmàvali Dhanurvedakīrtirāja was born in Suvarṇagiri, which is where the rest of
her account has always placed her; her patrons and the flood that threatens her city read
accordingly.

**Aurèldía writes in the Vylarian alphabet.** Provenzal and Tarvéni now name the imperial letters
as the region's common script, shared across Aurèldía by tongues of no common descent.

**The borrowed letters do not quite fit.** Provenzal has no sign for its nasal vowels and has taken
the imperial length mark for them, so an imperial reader reads every nasal long; Tarvéni leaves its
glottal catch and the stress that tells one word from another unwritten, and expects the reader to
supply them.

**One spelling for Aurèldía.** The region, its people and its faith are named the same way on every
page.

**Beings**

- A being's portrait now sits in the page itself, at the head of the entry, on
  every being whose likeness has been drawn. It carries the being's name as its
  caption.
- Every being in the Characters collection is tagged `character` and every being
  in the Bestiary is tagged `creature`, so the people and the beasts can be
  browsed apart.

**Bestiary** — Every creature's entry reads as its author wrote it: the read-aloud appearance, then the referee's account of what it does.

**Borrowed guild ranks.** Sixteen affiliations carried an identical European craft-guild ladder,
most of them bodies that were never a craft. Four keep a ladder — the Cartographers' Guild, the
Imperial Scribal Guild, Per'Mesnu and Per'Nuw — but it is now their own, drawn from what each note
already said about itself rather than borrowed from the others, and levelled the way every other
guild, order and tradition in the setting is: outcast, layperson, apprentice, master, and whatever
stands above master. Eleven more now state their own standing and, where the note already named
one, its own offices, levelled the same way: the Bethûan Trade-Houses, the Crown Trades of
Okháris, the Merchant Collective of Vedyara, Pér-Háti, Sôd-Naqîrîn, Ordo Arcanis, the Magnum
Collegium, the Collegium Argentariorum and the Panepistemium now state it, and the Corsair League
states the single rank its members plainly hold. Sebeq'Sut alone still carries no governance and
stays marked `draft`.

**Place pages can state a settlement's market class**, from hamlet through
great city. **A place page now lists what lies within it and who holds it,
and an affiliation page lists what it holds** — the reciprocal `contains`,
`held_by` and `holdings` tables build from the same source data.

**Byzaría** — the region has its own description: its coast, plateau and mountains, the five League cities and lesser towns as they sit in the land, and the neighbours on every side. The League's three border districts — the Eastern, Southern and Northern Marches — have their own pages, each naming the lord who holds it for the League council, what it guards and who lives there.

- Clan names that read as borrowings from our own world give way to Byzarian
  ones, on the people who carry them and in the tongue's own naming stock.
- The guild office at the head of a chartered trade is spelled one way wherever
  it appears.

**Byzarian names**

- The Byzarian language page carries a hundred male and a hundred female given names, where it carried fifty of each.
- Every Byzarian house name is a Byzarian coinage, and the page says how a house comes by its name and on what footing it holds it.
- A house name and a personal name can no longer be mistaken for one another: a house name closes on a hard stop, and a personal name never does.

**Three calendars gain their own pages.** The Common Calendar, the Khazryn
calendar and the Kheperi calendar each get a page describing their months,
and the Tānvüri Calendar and Astrology page now carries its month lengths
alongside its existing prose.

**Thalorna's own page describes its year.** Its size, gravity and tilt, its
365-day year that never drifts, and the four quarter days that never move
now have a section of their own.

**Vaelith, the world's moon, has a page of its own.** Its size, its orbit
and its thirty-day cycle are there, along with what the Itzani, the Tānvüri
and the Kheperi each call it.

**Chandramukha.** The port keeps a five-day coastal run down to Bharanya and a month's crossing to Ta'Kheperu's shore.

**Vindhyālaya.** The kingdom names Bhūmipāla as the buyer of its steel and the keeper of the road round the wall's end, and counts it among its allies.

**Coin and year**

- Vedyara strikes its own coin: the gold suvarṇa, the silver candra and the
  copper tāmra, priced so a purse can be counted, with the Merchant
  Collective's letter of credit standing above all three.
- The Vedyaran banking note states its denominations and how they exchange at
  the passes and the sea, rather than only naming the Collective that
  administers them.
- Vedyara keeps its own year, the Mādhavendra count, dated from the
  standardisation of Classical Vedyari and sighted each year at the Sūrya
  temple.

**Content Changes**

- Bestiary creatures no longer carry a stale template-priority flag alongside
  the one that actually governs them. Creatures never offer themselves as a
  starting-character template in the Foundry Create dialog; that was already
  true, and now the notes say so consistently instead of contradicting
  themselves.
- Aelwyth becomes a place with politics: Its four realms get real populations
  and real societies, and the island gets twelve new regions and features, its
  settlements written out.
- Grukar infest the uninhabited interior of Aelwyth.
- The Kingdom of Aelwyth was an Elder Races reconciliation, and the
  _Battle of Three Sisters_ in 1984 BF is where it died with the Sinalë king.
- Numerous named places, people, and lore that existed only as prose now have
  individual entries.
- The deep prehistory has been enhanced, including:
  - **Khazártúrn** — the Khazári city also known as the _Valley of Seven Towers_.
  - The **Varkhad**, whose attacks initiated the _Pelwar Migrations_ to both Aelwyth
    and all across western Ankaris.
- Ta'Kheperu massively enhanced, including all new regions and polities,
  characters, and lore notes regarding Ta'Kheperu society.
- Rewrite of many religions to update correct hierarchies and beliefs, including
  10 new Itzáni gods and the First Gods, as well as spirit traditions for
  the Nyáluba, the Old Way, and Okháris.
- Provènzia, Élavendre and other northwestern Ankaris places and institutions have
  expanded notes.
- Money you can actually carry: the Kheperian gold, silver and copper deben and
  kite, the Vylarian Aurion, Argentus and Octus, and the Haradian coins struck
  against them are all items now, priced so a purse can be counted.
- The Kheperian gold and silver pieces are worth the metal in them, as
  temple-attested weight-pieces should be. The copper pieces are worth what the
  temple seal says instead — melting one down returns less than half its face,
  which is what keeps small change in circulation and the Pér-Háti in business.
- The Haradian Aurion carries its seven per cent of missing gold, so it passes
  at home and converts at a discount at the border.
- Bestiary notes now state a being's default combat group in one place rather
  than two. The compiled packs are unchanged.
- Pages no longer repeat their own title in the body. A note that opened with
  a heading restating its name had that heading removed; the site already
  renders the name once, as the page title.
- Creature and NPC dossier pages carry their section headings — **Appearance**,
  **Dossier**, and everything beneath them — at their proper level below the
  page title, instead of competing with it as a second title of their own.

**Asset Changes**

- Shipped new original portrait images and icons

**Content tables are now written in SQL.**

**The Elder Tongues name their own.** Khazári and Sinalë carry naming stocks

- A Khazári house name states the work the house holds—"the striking of stone",
  "the guarding of the gate"—in Khazári, and is glossed rather than translated.
- A Khazári given name is one root in a naming frame, and the vowel of that
  frame says why the name was laid on the child.
- A Sinalë given name and a Sinalë lineage name are built by different rules,
  so nobody has to be told which is which.
- Both language pages set out how a name is made, so a referee can coin one
  that belongs.

**Adventures**

- Sir Aran Célavren, the ambassador the whole Dúnavarren mission answers to, has a page at last, and his name is spelled the same way in both places it appears.
- Baloth Nemirina reads as the murdered Tarvennan senator he is, rather than as a serving senator of the wrong realm travelling with an embassy that left three years after his death.
- The embassy and Gróa's Campaign each list their cast, and the embassy says it is bound for Tānvür by way of Élavendre rather than only naming where it sets out from.

**Malagna**

- The Kingdom of Malagna names the king who holds it, and King Hákon III's page places him in the Nordlands.

**Faiths and orders wear their own emblems.** An affiliation whose badge this
setting draws now carries it on the page and in Foundry, in place of the plain
mark its kind falls back to. The Asguardian, Aureldian and Hex Hodai traditions
all pick theirs up.

**The emphatic k is written q, the way most romanisations write it**

**Government ranks.** Eight governmental bodies shared one civil-service ladder whose lowest

- The Warrior's Circle of the Dunhara ranks its acclaimed warriors and the Council of Scars, and
  names no captain over them, because it has none.
- The Grove Council runs initiate, grovekeeper, grove-elder; the Council of the Nobles seats the
  nomarchs beneath the royal kin and settles nothing itself.
- The courts and treasuries of the Vylarian capital each name their own judges, censors,
  provincial officers and chiefs, and the Senate its Gilded and Silver houses.
- The Bethûan Fleet ranks the marines who decide a boarding and the officers over them, leaving
  out the oarsmen and deckhands who are not of it.

**The guide-peoples of the wall.** The Ösket and the Hvarn each have a culture of their own, in

- The Ösket keep a road by descent: a guide-mother says whether it is open, a door feeds any
  stranger who reaches it, and selling a road puts a man outside every hearth.
- The Hvarn share their crossings out at a winter council, recite the roll of their dead from
  memory, and feed the garrison on the col under a contract that makes a poor people a
  well-connected one.
- Neither people is placed in the order of stations, and neither tongue is anything a lowlander
  can read.
- The Twilight House and the march kingdoms of Bhūmipāla and Bharyastān name the Vedyari culture.

**Characters** — Every hero and knave's dossier reads as an account of a person, not a character sheet.

**The janapadas' villages**

- Each of the three temple-republics now lists its villages, with how many
  people live in each and what the place is there for.
- Suvarnagiri's gold country: the stream nine of the panning families work, the
  smelters a mile below it, the bridge with the free pilgrim hostel, and the one
  stream on the mountain where panning is forbidden.
- Dhanurkota's bow country: the bamboo groves the staves are cut from, the marsh
  that shafts and fletches the arrows, the only crossing a loaded cart can use,
  and the meadow where the horse academy keeps its mounts.
- Rājapur's river country: the head-gate where the year's water is divided, the
  cremation-ground that takes the dead of every village, the sugar village and
  the copyists.
- The three temple-seats are written — Suvarnagiri in three parts round its
  three temples, the bow-fort and its academies, and Rājapur standing in the
  street-plan of the kingdom its assembly dissolved.
- Dharmapur, the copying town of the middle Sarvada, where one adult in five can
  read and the scribes' guild sets the price of a written page.

**Places** — Kalm is a village of nine hundred, leaving Vargate the only town

in the Vardain valleys.

support, and Magnápolis states one figure rather than two.

**The Khazári arrive earlier, and Khazártúrn stands far longer.** The Deep Folk
reached Thalorna around 5300 BF and raised Khazártúrn in 5123 BF, so the city
stood close to twenty-seven centuries rather than one.

**The Fall of Khazártúrn is dated 2427 BF.** Every note that counts from the
Fall now counts from that year — the sealed tomb, the silence between the elder
races, and the Khazári's standing policy on Grukar.

**Dates.** The Khazári reached Thalorna two thousand years after the Sinalë
rather than one, and Khazártúrn fell in 2427 BF. The pages that mention either
— Ankaris, Kalihara, the Sinalë, and Aelwyth's Hallowwood, Three Sisters and
Vorgald — now agree on those figures, and Vorgald's long wait for a delivery
that never came is counted from the right year.

**A Kheperi house sounds like a house.** Every house name in Ta'Kheperu now closes on the collective
that says "the people of" and marks the seam between its elements, so Isaret of the Ka'Sekeru and
Hathura of the Ise'Fréu are heard as members of a line rather than as two people with long names.

**A Kheperi person sounds like a person.** The seam has come out of the personal names that were
wearing one — Hersaîs, Mertep, Parri, Patnefur, Siprah, Tamiyra, Totkar — so a name spoken at a
door says at once whether it is the caller or the caller's house.

**A Kheperi house name reads as a house.** It is written as a compound across the glottal and
it ends in the plural, so it no longer passes for a personal name, or a personal name for it.

**Kheperi is written in two hands.** The temple keeps one and the counting-house the other,
and a scribe taught the one may not read the other — so a temple record and a tax record are
two separate errands for anyone chasing a fact.

**The language note says what its spellings are.** Neither Kheperi hand writes vowels, so the

- Characters identify as Human Folk, with a short account of human peoples and their shared inheritance; regional lore links to Grukar Folk resolve correctly.
- Three K'ich'chik borderlands that no nation rules — Ch'akul Tza'kul, Ha'nal
  Xi'lan, Tz'ikin Ba'alam — now read as land pages instead of empty polities.
- Seven southern K'ich'chik settlements sit under the city-state they belong
  to, and Fénjara, Tamavar, Varoshan and the two Khazryn polities each name
  the land they actually hold.
- Kalihara's duplicate Confederation page is gone, and its geography now
  lives once, on the Kalihara Region page.
- A being's mention of Nordheim, Norgaad, Vithgard, Malagna or Targud now
  opens that land's page when the name marks a place rather than the crown
  acting.

**The Mādhavendra count**

- Vedyara's reckoning now says how it divides its year: named solar months,
  paired into the seasons a Vedyaran plans and contracts by.
- A week of seven days runs through the months, the first two the sun's and
  the moon's and the rest belonging to the lesser gods of the Varnaka.
- The temples keep the moon beside the sun in an almanac, and that is what
  fixes a Weighing, a Mela, a marriage or a coronation.

**Corrected where the Mahā-Mela is held.** The janapada note pointed pilgrims toward a river confluence that does not exist; it now agrees with the river notes on where the festival actually stands, and states its size the same way everywhere it is mentioned.

**Names** — Thalorna's names drop the marks no reader could hear. The Vedyaran

names, the Varnaka pantheon and Suvarnagiri keep their long vowels and their
acutes and lose their dots, and every sibilant that sounds like "sh" is now
written that way — Kshatriya, Vishvara, Shudra. One institution that was
spelled two ways is now spelled one.

and the jarls of Stormveld spell their rank like every other jarl.

**The learned registers** — A Kheperi priest still writes _ṭerebu_ for the
revenant the rest of the world calls a _tereb_, and each language's own page
still sets out its full sound system.

**Nordmal names**

- The Nordmal page says how a northern name is built, and lists the stems with what each one names.
- A referee can coin a Nordmal name the page never printed, and it will sound like the others.
- A clan name and a given name can no longer be mistaken for one another.
- The clan list holds every clan the setting's Nordmen belong to, spelled as their own pages spell it.
- A hundred more clans stand ready for halls nobody has written yet.
- The given lists drop a man of Beowulf, an English surname and a saga ghost, and no longer run out at the letter G.

**Titles** — The Ādānashrenī's teacher-title matches the Varnaka schools it
borrowed from, and the two storm-readers share one spelling.

**The Grove Council** — A grove-elder holds one of the nineteen seats and a
grovekeeper serves a lesser grove, so the two are no longer one word.

**A range and a lord** — The Grazian Mountains are the Grazian Range in
scholarship, and Lord Tárvund is named without a borderland the setting never
mapped.

**The keepers of the Pass-Shrines are named for what they do.** The body that
holds the summit temples on the Southern Wall is the Pass-Shrine Ushtakas, and
its page, its epithet and every note that points to it say so together.

**History** — The Pelwar Migration has its dates: the displacement out of the
east begins around fourteen centuries before the Founding and the great
westward movement runs some three centuries from there. The refugee flood that
reached Aelwyth arrives two centuries before the Great War ended at the Three
Sisters, and the battle itself is dated 984 BF wherever Aelwyth's history is
told.

**People read as people.** Meshara the Wise and King Trédavar III were filed among the world's historical records; each is now a person, with a profile of their own and a place among the setting's cast, and each answers at a new page that an old link will not reach. Njörven is a creature rather than a man, and stands with the Bestiary's mythic beasts instead of among the realms of the Nordlands.

**A name without numbers no longer arrives as a blank sheet.** Sixteen people who were written but never given statistics stop appearing in the Actors compendium as documents carrying a name, an icon and nothing else; every one of them keeps the page and the journal that say who they are.

**People** — The mentors, patrons, rivals and kin the setting names in passing now carry names their own countries could have given them, drawn from the naming stock each region publishes. Modern honorifics are gone from in-world speech; a person keeps the name beneath one.

**Populations** — The world, its continents, its regions, its realms and its
towns now agree with each other. Every land says how many people it holds, and
each one fits inside the land around it.

**Aelwyth** is an island of 710,000, not seven million; the Peshtar tribes are
a sixth of it, counted once rather than twice.

**Tamavar and Varoshan** are cities of 400,000 and 220,000. They had been
carrying their whole city-states' people inside their walls — a quarter of
Harad in two towns.

**Heliónis** shares its three million among all seven of its city-states.
Athenikos, Korinthea and Kostaros had been left with nobody.

**Élavendre and Tarvénia** settle their disputed counts: Élavendre's crown and
the Áelendan together make the region's two million, and Tarvénia's kingdoms
make three and a half.

**Prose style**

- Every page reads in American spelling and punctuation: color, honor, labor, defense, license, center, traveler, gray, judgment, plow, draft.
- Dashes are set closed against the words on either side, the same way throughout.
- Place names, titles and offices keep their own spelling, so Greyfjord, the Theatre District and the Harbourmaster are unchanged.

**Vedyara**

- The Ādānaśreṇī answers to whoever actually rules — a crown where there is a
  crown, a council where there is not — in its ranks and in its taboos alike.
- The Twilight House's second trade is named to the clients it serves rather
  than to men who are not among them.
- The account of foreign coin no longer claims the two Vylarian routes are the
  same length.
- Every land now names the settlements that stand in it, each with its people and the polity that holds it.
- A settlement that has a page of its own is linked from the list, and so is its holder.

**The setting** — Meret-Sebek's history names Wasetkara, the imperial city, as the seat the Per-Aá rules from.

**Byzarían walk-on names.** The teachers, rivals, patrons and poachers named in passing across
Byzarían character notes carry Byzarían names now, built the way the tongue builds them, in place
of the borrowed forms they wore.

**The consortium is named for its city.** The mining combine that shadows the Byzarían League's ore
trade takes its name from Karataş, the mountain city whose deposits it works.

**The romanisation rules stop breaking themselves**

**Saṃgha is spelled the way the transliteration standard spells it**

**Every name can now be found by typing it**

**The north is smaller than it sounded** — the Nordlands' halls and harbours
are villages of a few hundred, and only three places in the whole north are
towns at all.

**How a Sinalë word is written.** The language note sets out how a romanized Sinalë word goes back
into the starlight-hand—which sign each letter stands for, how a long consonant and a long vowel are
marked, and why a worn word looks worn on the page.

**What the Latin spelling drops.** Stress is never written, because it never moves off the first
syllable; pitch is, and a romanized line loses it, so a page in Latin letters carries the words and
not the sentence.

**Website** — The setting's page is at `/thalorna/`.

**The South Marches have their own page.** The drylands beyond Bethûa's southern frontier — the hot scrub country of the tribute-paying marcher clans, the Jackals and the road toward Ta'Kheperu — are described as a region of Xerathia in their own right.

**Suvarṇagiri's page moves to its correctly spelled address.** A bookmark or
link to the old, misspelled address no longer resolves.

**Foundry listing** now reads the module's own description for the compendium browser; **site description** reads the setting's overview for search results and social previews. Each surface now displays the text written for its reader.

**This package moves to `@heroiclands/package-build@^21.2.0`.**

**This package moves to `@heroiclands/package-build@^22.0.2`.**

**This package moves to `@heroiclands/package-build@^22.1.1`.**

**Compatible with SoHL 0.8.6.** The packs compile against that release, whose
content index publishes an address for every icon and picture the system ships.
Skills, weapons, mystical abilities, affiliations and beings all reach the
artwork their notes name, and a being with no portrait of its own takes the
system's character head.

**The Celestial Order has an answer for the gap.** The Tānthëi teach that the
earliest dynasties filed upward into the celestial archive before any mortal
bureau existed to keep a copy, so the missing centuries are a question of
jurisdiction rather than of history.

**Khazártúrn fell within a lifetime of the first human empire.** The Fall and
the Khazári entry now say so, and say that neither people's records notice the
other.

**Tānvüri chroniclers claim the elder age ended when the Mandate began.** The
Elder Races entry carries the claim, and says plainly that nothing in the
empire's possession supports it.

**Tānvür** — The steppe warlord Bāthür Hürtzhük and the rebel general Tëitjëk Vëngyürt each had two entries that told half a story apiece. Each is now one, carrying the full survey of his rise alongside his title, his epithet and his dossier. Their former pages no longer answer, and Bāthür's address is now spelled with the B his name begins with.

**Reference** — The private, real-world-analogs worldbuilding note no longer appears as a journal entry in the compendium; it was never meant for a referee to find there.

**The module points at its own page.** Foundry's package browser links to
`https://www.heroiclands.org/thalorna/`, which says what the setting is and how
to install it, rather than to the source tree. Bug reports and updates address
the repository under its own name.

**The World of Thalorna now builds as a PDF sourcebook**, alongside the
compendium packs and the website. `npm run build:book` produces it: a
selection of the setting, arranged as Lore, Places, Affiliations, Beings,
Skills, Mystical Abilities, Mysteries, Concoctions, Weapons, Scenarios and
Reference, each printed with a table of contents.

**Installing and running**

- The module installs as **`thalorna`**. Its world folder, its compendium references and the paths to its artwork all carry that name.
- The setting stands on its own: install it under Song of Heroic Lands, HârnMaster or any other system and its journals, scenes and macros are readable.

**Lore — The Ithári.** The people who came before Kalihara now have their own
account. What they left is all of one substance: marble-smooth and a uniform
grey to look at, slightly giving under a finger like supple leather, and beyond
anything to harm — no tool, fire or working has ever marked one, and eight
thousand years have left no mark either. The doorways are ovals with no door in
them; the wall itself dilates. Nothing carries writing, and there is no Ithári
word for anything: every name in the account is Kaliharan.

**The Sinalë arrived earlier, and met the Ithári.** Their coming to Thalorna now
reads as roughly eight millennia ago rather than six, and they arrived in time
to be found quaint and politely declined. The Kalihara pages had the Elder Races
reaching the world long after the Ithári were gone; the island's custodians have
in fact been keeping the works since the departure in 7,300 BF, and every page
that counted from the wrong end now counts from that one.

**Kalihara knows, and nobody else does.** Off the island the works are met as
unconnected local marvels by people who hold no history of them and no name for
their makers, and the notes that had foreign scholars reasoning about the Ithári
now report what Kaliharans at the ports have told them instead.

**A lexicon of titles.** A new reference page sets the peoples' words for rank and office
side by side, so the man who holds a province for his king can be found under the same
heading whether his people call him a Jarl, a Haty'a or a Sāmanta. Standing and office are
kept apart, because they are: one is what the neighbours reckon you, the other is the job
you hold, and a house may have plenty of the first and none of the second.

**It reads two ways.** Standing is looked up by what the thing is — the outlaw, the
war-leader, the high priest — with every people that has a word for it listed underneath.
Offices are looked up by people, each with a line saying what its holder actually does, for
the moment at the table when somebody says "the Muhtasib wants a word" and nobody knows
whether to be worried.

**The sturgeon totem's full description now appears in the PDF sourcebook**

**Who may work magic in Vedyara**

- The Council of the Triyācāryas licenses every public rite, a working done in a
  god's name outside every school casts the worker out for good, and the Ordo
  Arcanis keeps one licensed factor at Chandrapur's river mouth and no school.
- The reckoners' college at Chandrapur computes the year, the eclipse, the tide
  and the gold-assay, and its date and the temple's differ often enough to move
  a coronation.
- The ushtakas who keep the shrines on the passes work the weather-rite and the
  road-rite, and may refuse a caravan its blessing without explaining and
  without appeal.
- The Threshold-keepers put one question to the newly dead before the pyre,
  warranted for a disputed inheritance or an unwitnessed killing and nothing
  else.
- The shadow-vow works the waking dream on people who never asked for it, and
  the brotherhoods that train Vedyara's assassins hire out of its lines.

**The Vedyari**

- Their culture has a page: the wrist-line that states a person's station from
  the naming on, what each station may do, and how one is lost, left or hidden.

**Chandrapur**

- The Moon City has a page of its own — nine quarters the Nine Houses keep, a
  tenth the crown holds, and the gem trade every one of them lives on.
- Chandramukha, the port at the river's mouth, carries the bar, the roadstead,
  the shipyards and the foreign factories, and a crew signs on there without
  showing a wrist.
- The Great Bazaar, the Moon House and the reckoners' college each stand where
  the city's business is actually done.
- The fleet works a season rather than a year, and the escort Vyālendra hires
  is bargained fresh every time the rain stops.
- The Sūrya temple on the ice above the Chandramahī declares the year the
  region keeps, and the reckoners downriver make it a day later.

**The coasts**

- Vedyara's three seas have names and pages of their own — the Sūrya-samudra
  the sun rises from, the Megha-samudra the monsoon comes from, and the
  Sandhyā-samudra of evening.
- The coast sails when the rain stops and plants when it starts, and nothing
  on either coast moves outside the open season.
- The eastern sea carries the foreign hulls, the three kinds of ship a Vedyari
  builds, and harbors that speak a pidgin a scholar of the language cannot
  follow.
- The southern sea carries the long passage to the Kheperi delta, the most
  valuable voyage a Vedyari ship makes and one made on Kheperi terms.
- The western sea has no harbor on it worth the name, and its arid coast sells
  salt and dried fish.
- Two seasonal ports at the river mouths, the island chain and its merchant
  colonies, and Chandrapur's galleys, hired out by the season.

**Vedyara's map reads straight.** The subcontinent's only land neighbour is Dunhara, reached round
the western end of the mountain wall rather than over it; the Khazryn lies north and Tānvür
northeast, behind six crossings of the wall and nothing else.

**Chandrapur.** The Waiting House stands in the cutting streets, holding sealed
consignments between stages for anyone who pays — and teaching the shadow-vow in
its upper rooms, on an income its ordinary trade explains.

**The eastern run.** Nīlatīra and the Tānvür Region each name the sea passage
between them, so the indigo port's route to the east reads from either end.

**The gods**

- Vedyara's ten gods each have their own lore entry: what each is god of, and
  where on the map their worshippers say they are found.
- Thirteen ritual skills, one per god and per sect, now say what the rite
  does, what it costs, and who may perform it.

**Guides** — GM passages in the Vedyara Adventurer's Guide appear as secret sections in Foundry and expandable spoilers on the web.

**The things**

- The Dhanurkota academies' bows, a cheap Vindhyan blade the western mercenary
  companies buy by the wagonload, a mahout's elephant-hook, a rhinoceros-hide
  shield, and a coastal watch's waxed coat all have their own pages.
- A caravan's halved copper pass-token, an Ösket guide-cord, a pilgrim's
  knotted pledge-cord, and a bonded household's stamped tally are written.
- The temple's marking needle, the Twilight House's wrap, a dreamer's stone,
  the Dream Assembly's mirror, and the threshold lamp and coin of passage
  every household keeps join the setting's everyday gear.
- A reckoner's counting-board, the Sūrya temple's year-sighting rod, a
  merchant house's letter of credit, and the Weighing's own touched scale are
  written.
- The Rājavalī Library's manuscripts and its Memory-Keeper's recitation-roll,
  a Chandrapur moon-cut gem, a loom-sealed Vyālendri indigo bolt, a
  Triyācārya's stole, and the ash-mark stamp cut before a razing or a felling
  all have pages.
- A Pass-Shrine ushtaka's altitude draught, a poisoner's vial, and the
  Vedyaran elephant that makes the region's rhinoceros only the
  second-largest thing in it round out the set.

**The march**

- Bhūmipāla holds Vedyara's northwestern frontier, the only way into the
  subcontinent that crosses no mountain, and it hires its soldiers by the
  season.
- The crown does not tax the road by the bale. It sells escort, and a caravan
  that declines pays the same money at the next well.
- Sandhyāpur, the capital, is a court and a salt town on an open roadstead, and
  the eastern coast of Xerathia lies a month west across water no hull of this
  coast works.
- The horse fair at Ashvapada and the last wells at Marukūpa are the road's
  other two towns, with the dream-sect's tower above the wells.
- The treaty with Amradad is Bhūmipāla's, and it binds the Sultanate and not
  the tribes, who raid in lean seasons and trade in fat ones.
- Bharyastān, a small mountain kingdom behind the gold country, sends its horse
  to Suvarṇagiri every year for a weight of gold no moneylender ever sees.

**The Merchant Collective.** It no longer works every mine in Vedyara: the Gorges are leased to it
by the smithing clans who hold the rock, the gem-workings on the upper Chandramahī are its own, and
Suvarnagiri's gold is beyond its reach. Its five members are seats of the Compact — two courts and
three councils — rather than five janapada rulers, and it says why Suvarnagiri has never taken a
sixth seat.

**Vedyaran banking.** The region has three edges and not two: the passes, the sea, and the march
road round the broken end of the wall, which is the one that moves in bulk. The page also says where
Vylarian coin comes from and why nobody quotes it.

**The Twilight House.** Its clients are the loom-masters and merchant houses of Vyālendra and the
courts of the cities where its satellites stand, and the court it began in is gone while the House
is not.

**The Guild of Taking.** Its forty charters come from crowns, councils and sabhās alike, and the
courts of all forty honour its judgments.

**The plateau and the forest**

- Vandhyabhūmi, the arid central plateau, has a page: held water, droveways between wells, and the ruined capital the Vedyari year-count is dated from standing on open pasture.
- Gomārga, the kingdom of the cattle-road, whose crown holds the wells and the droveways and makes no claim on the grazing between them, and whose court travels all year.
- Bhāravavana, the forest country of the lower Bhārava, where the timber, resin and lac that pay for the pilgrim road's free hostels are gathered under licence.
- The Bhārava-Devabhoga, the temple-estates that hold that forest — the one country in Vedyara where no assembly sits and no sabhā meets.

**Three kinds of polity, three ways of governing.** A temple-republic answers to
its sabhā and its convening priest, a kingdom to its Mahārāja, and a city-state
to a council that may or may not keep a king above it.

**Vyālendra has no king.** Its Loom-Council of master weavers governs the city,
and the commander of its watch is always a Dhanurkota man.

**Chandrapur keeps one**, surrounded by the Nine Houses whose heads hold the
nine seats at his court.

**Two new lands** — the gem valley and delta behind Chandrapur, the cotton and
indigo valleys behind Vyālendra — each saying who holds a village there.

**Vyālendra's great sanctuary** belongs to Mahájaya, the serene matriarch of
honest measure.

**The places the notes name**

- The ground where the janapadas hold their twelve-yearly assembly has a page of its own, and so does Sangama, the temple on it that convenes the assembly and keeps the roll.
- Bharanya, the pilgrim town of the lower Mahānadi, built on mounds around one of the three great Mahájaya temples of inland Vedyara.
- The Bhārava-Devasthāna, the twenty-three free hostels that keep traveling priests and ascetics on the pilgrimage roads at Suvarnagiri's charge, and the roadless forest the road stops at.
- Rājapur's archive with the cold vault at the back of it, the cellars of the palace the sabhā pulled down, the altar its kings were crowned at, and the royal town the river took.
- Dhanurkota's bow-fort on foundations no living mason can account for, its temple, and the four academy halls, each with its own discipline and its own way of sending students home.
- Suvarnagiri's gold mountain: three temples that take the government in turn, the station where the month's gold is weighed in public, the stream where panning is forbidden, and a hermitage few people can find.

**The gods and the passes**—Varṇaka deity and ritual entries say plainly what a worshipper keeps and what a rite asks, and the janapadas, the wall's crossings and the guide-peoples are described rather than argued for.

**The janapadas**—A janapada's pages give its population rather than a count of its villages, and the three named janapadas list their settlements in a table.

**The wall**

- The mountain wall along Vedyara's north is drawn out: its three sub-ranges,
  the three sacred peaks, the four glacier-springs the great rivers rise from,
  and the four rivers themselves.
- Six crossings, and only six. Five carry a summit shrine and a blessing; the
  sixth is the Ösket's own road, which nothing blesses and no lowlander walks
  unled. Each says how long it takes and where it comes down.
- The guide-peoples have names, tongues and villages — the Ösket of the western
  crossings and the Hvarn of the eastern — and no caste rule reaches above the
  last shrine.
- The temple-republics' one standing garrison, the smithing clans' toll-gate in
  the Silver Gorges, and two things on the wall that nobody built and nothing
  has ever marked.

**Vedyara speaks of its own orders in its own tongue.** The order a Vedyaran is
born into, the four orders themselves, and the priest who keeps the rite all
carry Vedyari names now, and each name says what the thing it names does.

**The ladders say what a standing is.** Every rank that names one of the four
tells a referee plainly what the person may do and owes, and the culture note's
table of stations sets out arms, land, temple, assembly and travel row by row,
so a ladder reads without the name having to teach it.

**Artwork**

- Every icon the setting uses now ships inside the module, so spells, weapons, skills and beings show their art whatever system a world runs under.
- Each icon carries its artist, source and licence alongside it.

**Sūryāgarha is a city now.** The fortress-capital of Vindhyālaya sits across
the throat of the greatest northern pass, with its citadel, its customs-house,
its caravanserai and its Tānvüri quarter.

**What the customs-house sells is the season.** The pass-token is cheap and the
date written on it is not, and on a road shut for ten months that date is the
difference between a profit and a year's wait.

**The crown collects on the road and not on the rock.** The smithing clans
lease the silver and the lapis over the king's head, and nobody on either side
wants the question settled.

**Two councils, one succession.** The chieftains and the ushtakas can sit
together only while the passes are open, and they do not agree about who is to
be acclaimed next.

**The kingdom and the guide-peoples.** Above the last Pass-Shrine the crown does
not govern, and a warden who overrules a guide-mother about the weather does it
exactly once.

**Vyālendra is written from the inside.** The Loom-Council sits in the audience
hall of the city's last king, in a ring on the floor where the throne stood. The
great weaving halls, the dye-houses and the water rule that governs them, the
sanctuary every bolt leaves under, and a watch commanded by a man who is never a
Vyālendri.

**Nīlatīra**, the bale-port at the river's mouth, where the cloth is sealed,
counted and taxed before it goes to sea in Chandrapur's galleys — and where a
ship's master does not ask to see a wrist.

**The House of the Long Evening** is a building now: four courts, two doors and a
ledger-room, held under a royal grant nobody in the city wants tested.

**The Shaper's temple at the head of the Sarvada**, kept by masons who can rebuild
it inside one open season, and who have measured the mountain's melt since long
before anybody offered to buy the record.

**The Vylarian rank ladder reads as a table.** The two-track command structure
was drawn with line characters sized for a wide screen, so in the sourcebook's
columns the rules ran past their labels and ranks broke across lines. It is now
a table: every rank in order of seniority with its gloss, which track it belongs
to, and the one post a soldier reaches from either track.

**Settled what lies across Vedyara's western sea.** The note no longer hedges on the question: it names the far shore and the lands that lie in that direction.

**A dated history of the world**

- The world's great events each have a page and a year, from the coming of the Ithári to the Empire's decline — the arrival of the elder races, the fall of Khazártúrn, the Pelwar Migration, the Founding, and the rest.
- Each one says what happened, where it was felt, and what each people says about it. Where two peoples disagree, both readings stand side by side and nothing adjudicates between them.
- Each also says what it does not settle: who made the Second Voice, what killed the Sinalë king at the Three Sisters, whether the fire at Alyssa was an accident.
- The elder races' shared accord has a beginning and an end, the crossing that lost the Second Voice has a year, and the conquest of Heliónis runs from its first year to its last.
- What the Vylarian Republic carried out of Therádon, and the bargain it bought the dragons with, are dated events — though what was promised to them is written nowhere.

**Fixed broken wikilinks.** Display text that wrapped across a line break in the source was never recognized as a wikilink, surviving verbatim into compiled journal text. Joined wrapped lines in three locations: the Gulf of Batáren, Nyáluba Tribal Nation, and Ordo Arcanis. Added a missing wikilink to Brunjár Skathhelm in The Blackpine Wolves so his reference matches the other members of the gang.
