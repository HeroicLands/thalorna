---
shortcode: vrystwaldadvguide
name: {full: Vrystwald Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to Vrystwald and the Varokh—their forest, their villages and three seats, their totems and their dead, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

> For three days the boat has worked upriver between walls of spruce and birch, and this morning the fog lies on the water so thick that you hear Grimholt before you see it: an adze biting wood, a dog, a woman's voice calling a number twice. Then the fog thins and the landing is there. A palisade of split logs, gray with age and green with moss at the foot, runs down to the water; inside it, steep roofs of bark and turf breathe smoke into the cold. The wharf planks are black and slick under your boots. Bundled pelts lie stacked on them—marten, beaver, fox—and the air smells of wet fur, tallow, pine pitch and the river. Birch leaves, already yellow, float past the pilings.
>
> On the wharf, women in dark wool gowns and fur-trimmed hoods move from bale to bale with knotted tally-cords at their belts, and one of them argues with a Velanthian grain-boatman in his own tongue, then turns and finishes the argument in another. Men and boys stand back by the gate under the carved post of a great fish, axes on their shoulders, watching your boat and saying nothing. Two slaves in undyed wool carry water up from the river in yoked buckets. A tall woman with a weathered face, ash-blond braids bound in leather and a heavy amber bead at her throat steps down onto your boat's gunwale as easily as onto a stair. "Grimholt _vel stur_," she says, setting her village beside its totem—"Grimholt, and the sturgeon." She lays a hand flat on her chest. "**Hródwyn Balthskorn**. I keep the stores of my house." She looks you up and down, then your cargo. "You sleep under my roof tonight." Before you can answer, she has cut the cord on your top bale, lifted out a pelt and blown into the fur to see how thick it lies at the root.

[[place-vrystwald|Vrystwald]] is dense forest and slow brown rivers between the Nordmal kingdoms to the north, [[place-velanthrgn|Velanthia]] to the east and the lands of the [[affiliation-vylarinmpr|Vylarian Empire]] to the south. About half a million [[lore-varokhiclt|Varokh]] live in it, in villages of 200 to 500 people behind timber palisades, and they live nowhere else. There are no towns and no cities, and there never have been. In summer the rivers are the roads; in deep winter they freeze and become roads of another kind for sleds and war-bands. The Varokh are a small people by any neighbor's count, and the Nordmen, who are feared on every coast within reach of a longship, rate them as worse.

**The one thing to understand first: nothing stands above the village.** No king, no capital, no council sits over the Varokh between dangers, and nobody can speak for them all. Each village is governed by its own three seats, and the next village along the river owes it nothing. A traveler who wants safe passage, a bargain or a truce makes it village by village, and a promise from one carries no weight a day's paddle downstream. That is also why no army has ever conquered Vrystwald: there is nothing to capture.

## Choose a River

Vrystwald falls into five reaches, each named for the country it faces. None of them is a government.

- [[place-falkhaven|Falkhaven]] faces the western shore and the Nordmal frontier. At [[place-falkensten|Falkenstein]], a hill fort that commands the easiest crossing for leagues, Nordmal expeditions and Varokh counter-raids have met more than once.
- [[place-edrwald|Edrwald]] turns around the bay toward [[place-elavendre|Élavendre]], where fishing villages share their landings season by season.
- [[place-thornwald|Thornwald]] meets Velanthia, the most permeable border in the region. At [[place-thornhaven|Thornhaven]] the villagers look as much like Velanthian river-folk as their own kin, and at [[place-frithhaven|Frithhaven]] the Other Chief keeps a truce at the water with children of both sides in her household as surety.
- [[place-skathwald|Skathwald]] lies where [[lore-grukarfolk|Grukar]] nests grow thicker toward [[place-grkrhlmrgn|Grukarholm]]. Its villages watch their paths through every season and are the poorest and most embattled in the forest.
- [[place-vandstein|Vandstein]] faces the southern highlands toward Vylaría, where overgrown imperial forts tempt treasure-hunters and the pass scouts serve no foreign claimant.

At the center of the forest stands [[place-vethwald|Véthwald]], the Deepwood, where the canopy lets in little light even at midsummer. [[place-dunkelwald|Dunkelwald]] keeps the oldest rites there under its Shaman, and [[place-eichengrnd|Eichengrund]] follows a woman War Chief whose visions some call blessed and some call demonic. Along the rivers, [[place-grimholt|Grimholt]] trades furs down and grain up, and [[place-waldburg|Waldburg]], at 800 people the largest gathering in the forest, holds a seasonal market at its crossing. Its market peace, kept by the _Frithmund_, rests on one plain rule: a killing at the market is answered at once by every tribe present.

```sql
SELECT address.slug AS _ref,
       name.full AS "Village",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder = 'Regions/Ankaris/Vrystwald'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

The [[place-vrystwldrvrs|rivers]] change with the year. A river party covers ground far faster than walkers in summer, the spring thaw stops both, and in _grema_, deep winter, the frozen channels carry sleds, traders and raiders alike.

## Three Seats, No Throne

> Hródwyn's hall is long and low, its roof posts carved with fish and knots, its air thick with smoke from a fire banked under ash. At the near end a gray man sits mending a net. At the far end the War Chief, a young man with a split lip, sits on a bench with his axe across his knees and does not look up. Hródwyn walks you past both of them to a third bench, where a woman in a russet hood is counting knots on a cord, and puts your bales down in front of her.

Each village has three coequal elders, the Fródrád, with one vote each, so a vote of the three never ties. The Weskár, the Shaman, keeps the village's totem and rules on sacred breaches. The War Chief, the _Hárthúl_, leads the war-band and keeps the peace. The Other Chief, the _Theódár_, hears trade, custom, debts, inheritance and blood-payment before witnesses, and in most villages answers for its dealings with outsiders. A matter that crosses their duties goes to the three together. Each seat passes its own way: the Shaman trains and names an apprentice, band leaders contest the War Chief's seat by their deeds, and the people acclaim an Other Chief from among the proven assistants. A village can withdraw its support from any of them.

Below the seats runs a ladder of standing. A Druthmund is a full member of a kindred, holding a true name earned at eth-kethrun, the rite of adulthood, through a deed of significance. A Hródthúl bears a charge on renown already won, as a Shaman's apprentice or a hunting-band leader. An Edrmund is free and sheltered by a household not of their blood, without a voice at the moot. An Óthmund is enslaved and answers to the _óthris_, the mistress of the house. At the bottom stands the Vrystrith, cast out by their own kin and claimed by nobody, owed neither shelter nor vengeance.

Only imminent danger lets several villages' elders meet, acclaim a common War Chief and call a muster, and that command ends with the response. The brief unity has broken more than one Vylarian legion without leaving a government behind it.

## Who Trades, Who Fights

The work divides three ways, and a stranger meets all three on the first day. Slaves do the labor: they tend stock, haul wood and water and work the fields. Men train for war as their whole occupation, from boyhood. Women run everything else—the traplines and the fur trade from end to end, the boats and the _mórth_, the landings where they put in, the stores and the household, the prices and the languages of trade.

So a foreigner who comes to trade deals only with women. They have been down the rivers, know what a _skurn_, a pelt prepared for market, fetches in three markets, and speak enough of two or three tongues to know when they are lied to. A foreigner who comes to fight meets men who have mostly never left the forest. No chief bargains at a landing.

Furs are the great export, with amber, wax, honey, hides, tallow, timber and river fish behind them, and slaves. People taken on the Velanthian frontier or off raided coasts go down the rivers to Nordmal buyers and eastern traders, and Vrystwald is a conduit for them more than a destination. A tribe pays _hóva_, ransom, for its own captives as a matter of course, and Nordlanders are usually ransomed too; a captive from a southern coast seldom has kin within reach to pay, and stays as household labor. Vylarian coin is the money where money is used at all, though no Vylarian paper is honored; most dealing runs on [[lore-bartercnmy|barter]] and [[lore-kinhalcrdt|clan credit]].

## Keeping Faith

Good conduct means carrying an entrusted duty even when it costs. A warrior brings his companions home; a household mistress keeps the winter stores; a Shaman refuses a dangerous question. A prudent retreat is no disgrace unless it abandons someone pledged. An oath sworn before witnesses binds, including an oath given to an accepted outsider, and so do hospitality and a promise of safety: when Hródwyn offered you her roof, she made herself answerable for you while you sleep under it.

What gets a newcomer into trouble is usually a broken obligation:

- **An oath before a war-band is the strongest bond the Varokh know.** Nothing written replaces it, because nothing is written; Varokhi has no script. Breaking such an oath is the commonest road to Vrystrith standing.
- **Do not take from a protected grove** without the Shaman's consent, and never disturb a clan mound or its grave goods.
- **Do not hunt the village's totem animal** without the Shaman's approval and the rite that protects the hunter.
- **Restitution earns more respect than revenge.** A kindred keeps a feud-cord, knotted for blood owed and untied for blood paid, and the Skathár keeps the reckoning in memory. Paying what is owed, publicly and before witnesses, ends a quarrel with honor.

## The Forest Is the Temple

> At dusk Hródwyn takes you to the edge of the clearing, where an old oak stands inside a ring of stones. Nobody speaks there. A boy sets down a wooden bowl of fish broth at its roots and backs away, and a gray-haired man with bone beads in his beard, the Shaman, kneels and presses his forehead to the bark for a long time.

The Varokh have no gods, no temples and no priesthood. Each village keeps one wesk, its totem spirit, and its Weskár tends the rites at the sacred grove and the oldest trees. The _wesketh_ binds a person or a village to that spirit; an _eldwesk_ is an ancestor addressed through it. Some people also carry a personal totem suited to their temper, beside the village's and never in its place. The [[lore-sturgeonttm|sturgeon]], the [[lore-boarttm|boar]] and dozens of other animals each mean something particular about the people who follow them. A foreign god may come home with a captive, a spouse or a returning traveler, but it gets no place beside the totem.

The dead go into the spirit world to be with their clan's wesk, and over generations they merge into the land itself. The ancestors judge there, and those they banish wander among hungry things that hunt the weak; the living do not know the grounds of that judgment. Most of the dead go into sacred ground with useful goods, warriors are often burned with their weapons, and the most revered lie in a _hróm_, a mound holding generations of a kindred's dead.

In trance the Shaman travels among the spirits and may speak with the dead, within strict limits. A Shaman may **never** ask the dead about the future, about the spirit world beyond generalities, about combat or revenge, or about anyone banished. A warrior who wants an ancestor's counsel for a vendetta, or a merchant who wants a dead father's forecast, will not get it from a Shaman who keeps faith. Herbalism, reading signs in the forest and communion with forest spirits are the rest of Varokh magic. The [[affiliation-ordoarcanis|Ordo Arcanis]] has tried to extend its reach here and been rebuffed every time.

The year turns at the seasons with rites of its own. **Weskskald**, the Totem Reciter, is a deep-winter evening when each household recites its _eldskorn_, the tally of its dead, name by name. **Weskmund**, the Totem Protection, is a late-summer day spent tending sacred ground. A child is named and introduced to the clan at three months, earns a true name at eth-kethrun, and goes to the grave with the Shaman guiding the rite.

## Neighbors and Dangers

The [[lore-grukarfolk|Grukar]] are the enemy no oath, hospitality or ransom reaches. They take no captives worth ransoming, send no envoys and eat the Varokh they take. Every Grukar tribe answers to its own spawner, so what comes out of their country is an endless scatter of small raids, and a tribe that outgrows its ground can wake deep in Vrystwald's own forest.

The [[place-nrdlndsrgn|Nordmen]] to the north and west share Pelwar ancestry, martial values and a good deal of custom with the Varokh, and the two peoples trade, intermarry and raid each other in turn. Twelve years ago Nordmal settlers planted hall-posts at [[place-hrindstead|Hrindstead]] in a grove the **Eichthúl** clan claims, and the Eichthúl burned the first stockade. The oaks remain a claim neither people can give up; the [[lore-nrdhmhstry|Nordheim histories]] tell the Nordmal side.

To the south, the Vylarian province of [[affiliation-provncmktr|Moktur]] counts Vrystwald its most persistent military problem. Varokh raid south for cattle, weapons and slaves, and the ruins of old Vylarian forward posts stand in the southern woods, picked over by generations of treasure-hunters. To the east, Velanthian river-princes find the frontier villages useful auxiliaries and unreliable subjects in about equal measure, and Varokh war-bands hire out to them.

:::secret
**For the GM:** Two old things lie under the forest that no note explains. Elders who meet at Waldburg in a danger bring fragments of the **Sundered Talisman**, and no shared account says what it was or why it broke. Legends tell of giants who walked the forest before the clans, and ruins of "whatever civilization" came before the Varokh still stand in the deep woods. Either can carry a campaign as far as you want it to go.
:::

## People to Meet

A boar-bonded hunter who wants power from the old barrows, a woman War Chief whose visions trouble her own kin, a stablewoman whose horses never fail, and the Shaman who refused the forbidden questions in the [[lore-sturgeonroad|Sturgeon Road]] all have places in the forest:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-varokhiclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

[[being-thrnkbldtscbr|Thornak Blodtusc Bar]] of Eichengrund is the admired warrior, strong and stubborn in defense of his people, and the danger in that ideal as well: his ambition can dress itself as protection. [[being-sndwrhldvth|Sundwíra Eichengrund]] is the quieter admiration, the woman whose care for horses protects other people's livelihoods. [[being-athlwvthrnd|Athalwa Eichengrund]] holds a War Chief's seat by her war-band's acclamation.

## Ways In

A party can come up the rivers from Velanthia with a fur-buyer's boat, cross the southern highlands from Moktur, or walk in from the Nordmal frontier. A Varokh character might be a young warrior who has not yet earned a true name, a trader on the river circuit, a Shaman's apprentice, an Edrmund sheltered by a household that took them in, or a captive freed and married in. At the first landing, ask three questions: **Whose roof are you under? Before whom have you sworn? Which wesk do they keep here?**

Campaigns start well from a claim on a village. A captive taken in a failed raid still awaits ransom, and the party is sent to carry the price. A feud between a village and its daughter clearing needs witnesses to a settlement both sides will accept. A Grukar raid leaves a palisade open and nobody to bury. A Velanthian prince wants Varokh auxiliaries for a war that is not theirs, and a War Chief wants to know what he will pay.

:::secret
**For the GM:** The Shaman's prohibitions are the culture's sharpest tool. Any character, Varokh or foreign, can be tempted by a voice in the spirit world that offers what may not be asked: the future, revenge, the fate of the banished. Refusing is the Varokh hero's victory; accepting brings hungry things through the break, and only a public repair closes it.
:::

## Where to Read Next

- [[place-vrystwald|The region]] for the forest, its villages, its trade and its neighbors
- [[lore-varokhiclt|The culture]] for keeping faith, the dead, the household and what a person owes
- [[affiliation-vrystwldtrbs|The Vrystwald Tribes]] for the three seats, the ladder of standing and the offices
- [[skill-varokhlng|The language]] for names, true names and the words the reciters keep
- [[place-vrystwldrvrs|The rivers]], [[place-waldburg|Waldburg]] and [[place-grimholt|Grimholt]] for the trade

## Glossary

| Word        | Meaning                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| Druthmund   | A full member of a kindred by a true name earned at eth-kethrun, entitled to its protection, feud and share. |
| Edrmund     | A free person sheltered by a household not of their blood, with no independent voice at the moot.            |
| eth-kethrun | The taking of a true name by a deed, and the rite that marks adulthood.                                      |
| Fródrád     | One of the three elders who govern a village together: the Shaman, the War Chief or the Other Chief.         |
| Hródthúl    | One who bears a charge on renown already won, assisting the three elders.                                    |
| Other Chief | The Theódár: the elder who hears trade, custom, debts, inheritance and blood-payment.                        |
| Óthmund     | One taken in war or bought, answering to the mistress of the house; the standing is not hereditary.          |
| Skathár     | The keeper of the reckoning of blood owed and paid between kindreds.                                         |
| Vrystrith   | One cast out by their own kin and claimed by none, owed neither hospitality nor vengeance.                   |
| wesk        | The one totem a village keeps, and the bond with its spirit.                                                 |
| Weskár      | The Shaman, who keeps the village's totem and every rite of its people.                                      |

The [[lore-varokhiclt#glossary|full glossary]] at the end of the culture note lists every term these pages use.
