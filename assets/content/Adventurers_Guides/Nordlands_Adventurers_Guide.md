---
shortcode: nordlandsadvguide
name: {full: Nordlands Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to the Nordlands—its five kingdoms, its halls and tings, its near gods, the conquered plain of Stormveld, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

> The sun has been up for hours when your ship rounds the last headland, though by any southern reckoning it is barely morning. The fjord runs inland between walls of gray granite streaked with meltwater, so still that each oar-stroke leaves a ring on it, and the wind off the snowfields stings your ears and tastes of iron. Then the water widens and Knalthstead stands on its slope: a long timber rampart, turf roofs smoking behind it, and above them the king's hall, its gable-ends carved and tarred black. On the strand below, longships that wintered under cover are being run back into the water on rollers, and the crews hauling them sing to keep the pull together.
>
> The quay smells of pine tar, salt fish and kelp drying on the stones. Caulking mallets knock in the sheds, and along the cordage-walk two boys twist hemp, walking backward as the rope grows. A red-bearded man with a silver ring on his arm calls tallies to the thralls rolling barrels up from a southern hull. A Vylarian factor in a blue cloak argues weights with a gray-braided woman whose belt carries a ring of keys; a young shield-maiden with a scarred chin shoulders past them with her spear. Then a tall woman comes down the quay in a green cloak pinned with bronze, fair hair braided back from a wind-reddened face, a notched tally-stick under one arm and a horn cup in her hand. "_Vér gangum í frídi_," she says, and waits until you say it back to her: we come in peace, the old formula that asks for _frídr_, the peace a hall owes its guest. Then she lays a hand flat on her breast. "Tvirnrinna Hvirnidrokh. Of the Hvirnidrokh of the Raltholm road, sworn to the king's hall, harbor-reeve of this haven. Whose kin are you, and what have you sworn?" She hears your answer out with her head tilted, as she would a ship's tally, and holds out the cup: thin ale, cold from the cask, smelling of smoke and barley. When you have drunk she takes the cup back, cuts one notch on her stick, and only then looks past you at the empty steering-oar of your ship. Its master went over the side on the crossing's one bad night. "You were on his deck when he promised his crew their shares," she says. "His grave-ale is in seven nights. Will you stand up in his hall and say what you heard?"

The [[place-nrdlndsrgn|Nordlands]] are rock, ice and salt water, and the water is the road. Glaciers cut the coast into thousands of harbors and fjords that reach far inland; behind them the mountains stand nearly empty, and the farmland is a strip of barley and oats at the head of each fjord. That strip has never fed the two million people who live here. The north lives on the sea instead—seal, whale, fish, amber and furs—and on the longships that carry all of it south and bring grain, wine and silver home. When trade falls short, the same ships carry raiders, and the [[lore-nordheimnclt|Nordmen]] draw no sharp line between the two voyages.

Five kingdoms share this coast, one tongue, one pantheon and one assembly. No emperor has ever ruled here, and no king rules for long without the consent of the free farmers who stand behind him at the ting.

**The one thing to understand before anything else: in the north, a word spoken before witnesses is the record.** The Nordmen distrust parchment, which burns in a night and can be forged in an afternoon. An oath binds because people heard it. A debt announced at a feast stands in the hall's credit until it is paid, and a sworn skald recites it at every feast until then, even against his own patron. Death does not cancel it; the kin reckon it aloud at the grave-ale and the heir takes it up. A Nordman's reputation is the estate he leaves his children. Say something in a hall and it will be repeated long after you are gone, for good or ill.

## Five Kingdoms on Rock and Ice

[[affiliation-kngdmnrdhm|Nordheim]] is the largest and first-ranked, with about 650,000 people, more than half again as many as any of the others. Its king rules from Knalthstead and usually convenes the assembly of all five kingdoms on [[place-domsey|Dómsey]]. Come here for the court, the fleets and the sharpest politics.

[[affiliation-kingdmnrgd|Norgaad]], at the center, keeps the old ways most strictly. Its Lawspeaker can call a **Great Moot** at [[place-asgarthul|Asgarthul]], and Norgaad brokers peace when Nordheim and Malagna quarrel. Its mines are the richest in the north and its völvur the most respected.

[[affiliation-kingdomlgn|Malagna]] faces the open ocean and trades farther abroad than any of its sisters. The shipwrights of [[place-gnarthborg|Gnarthborg]] build the finest longships in the north and show a foreign buyer every hull in the yard except how the keel was cut. Malagna is Nordheim's old rival for leadership, and two great clans, the [[affiliation-grimvar|Grímvar]] and the [[affiliation-hrafnvar|Hrafnvar]], still disagree over a killing in a shipyard three generations ago.

[[affiliation-kingdmtrgd|Targud]] holds the eastern frontier against the [[lore-grukarfolk|Grukar]] of [[place-grkrhlmrgn|Grukarhölm]]. Every free farmer stands his weeks of fort-duty in turn, and nobody in Targud reaches middle age without having held a wall. No Grukar nest sells peace or ransoms back a captive.

[[affiliation-kngdmvthgrd|Vithgard]], small and scattered along the western coast, hunts the whale and the seal and lights half the halls of the north with its oil. All five kingdoms seek its seers, and its coast once burned eleven people for working the winds after a winter when the whales did not come.

Between Nordheim and Vithgard lies [[place-hringstead|Hringstead]], neutral ground guaranteed by all five crowns. The mercenary compact of the [[affiliation-malldbndlg|Málalidabandalag]] keeps its Hall there, and the first thing a stranger hears at the gate is the **Hall's Truce**: on that ground, killing even your worst enemy is beyond any atonement. Men who have hunted one another across three kingdoms drink at the same board there with their hands on the table.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder LIKE 'Regions/Ankaris/Nordlands%'
  AND data.population >= 400
  AND state = 'full'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

The numbers are small on purpose: fifteen hundred people make Knalthstead the largest settlement in Nordheim. The north lives in halls and steads strung along the water.

## Who Holds Power

> That evening you ask Tvirnrinna who will settle the shipmaster's estate. She does not answer. She walks you up the muddy lane between turf-walled houses to his hall, where the hearth has been let go to gray ash and the smell of wet wool hangs under the rafters. His widow sits on one bench with her keys in her lap and his brother on the other, the household standing between them, and nobody sits in the high seat. By the door a lean skald with a silver arm-ring turns his cup in his hands and waits to be asked what he heard.

A [[lore-konungrnk|king]] is chosen from the royal clans and acclaimed at the ting, and he holds his realm on the assembly's continuing consent. The ting has deposed kings before. Under him, a [[lore-jarlrnk|jarl]] holds a province by royal grant, a grant the crown can move elsewhere; a [[lore-hersvaldrnk|hersvald]] leads a district's men to the muster by the district's own consent and can be set aside by it; and a [[lore-bondirnk|bóndi]] holds his _odal_ land by inheritance, bears arms and speaks at the ting in his own name. A _landvördr_ collects the king's dues and holds his courts, and a _skipstjóri_ answers for a ship in the levy. The Lawspeaker recites the law from memory, and a skald of the [[affiliation-skaldscrcl|Skalds' Circle]] recites the last judgment on a point as evidence.

Not everyone is heard equally. A _[[lore-lidmadrrnk|lidmadr]]_ is free but has no clan, and answers through the following that vouches for him; a newcomer who settles in the north starts there. A [[lore-thrallrnk|thrall]] is owned outright and has no voice at all. Beyond them all stands the _[[lore-nidingrnk|níding]]_, outlawed by the ting for a crime no wergild settles: anyone may kill him without penalty, and a hall that feeds him answers for it.

Every seventh year, at Sumarmál, the five kings and their principal jarls land on Dómsey for the **King of All Clans**. A priest of the land walks the island's bounds first, striking each _hrend_ (boundary stone), and from then on a blow struck inside the stones is an offense no wergild settles. Twenty-seven stone seats ring the law-rock; Nordheim holds eight, and Norgaad and Vithgard both say their share undercounts them. The assembly has no officers and no revenue, only the weight of the rulers who agreed.

```sql
SELECT address.slug AS _ref,
       name.full AS "Realm",
       data.population AS "People"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND (file.folder LIKE 'Regions/Ankaris/Nordlands%'
       OR file.folder LIKE 'Regions/Ankaris/Aureldia/Aelwyth/Stormveld%')
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

:::secret
**For the GM:** Every crown has a question it would rather nobody asked aloud. In Norgaad, a king's brother led forty companions up the road from [[place-tvarnmark|Tvarnmark]] toward the [[place-shtrdpks|Shattered Peaks]] seeking mithral thirty-two years ago, and most never came back; his line still claims the better right to the crown. In Malagna, the Grímvar keep [[miscgear-crwnwyrm|the Crown of the Wyrm]] in a howe at [[place-braldheim|Braldheim]], and the Hrafnvar say that fear, not piety, keeps their rivals from wearing it.
:::

## Hall, Kin and Credit

The hall is where life is decided. A lord's kin and sworn followers live under one roof; a _hirdman_ eats at the king's table and is bound to his person, and a _hringberi_ has been given a named seat. Women manage the holdings while the ships are away, own property in their own names and can divorce. A shield-maiden is uncommon but earns the respect any warrior does. When a guest is accepted at the fire, the household owes that guest protection, and betraying guest-peace is among the most shameful acts the north knows.

No kingdom of the five strikes coin. When money changes hands it is [[lore-vylrncrncy|Vylarian coin]]. Vylarian paper is not honored anywhere in the five kingdoms, so a letter of credit has to become coin before it crosses the border. Anything larger than a purse moves by [[lore-bartercnmy|barter]] in furs, sealskins, smoked meat, ale and iron tools, or by [[lore-kinhalcrdt|hall credit]]: a debt announced at a feast, witnessed by the hall and kept alive in the skald's recital until it is paid. Three generations of unpaid hall debt can bring down a house that lost no battle.

The year turns on four great blóts. [[lore-sumarmal|Sumarmál]] puts the ships back on the water and opens the season of tings. [[lore-midsumar|Midsumar]] lights a bonfire on every headland for [[affiliation-bjartr|Bjartr]]. At [[lore-vetrnaetr|Vetrnaetr]] the household slaughters what it cannot feed through winter and seats its honored old by the door. [[lore-jol|Jól]] keeps twelve nights of light against the dark.

> In the Jól nights the hall where you lodge smells of roast pork, tallow and spruce boughs, and the benches roar with a skald's saga and the stamping that answers it. A girl of eight climbs on a stool to trim the lamp burning in the doorway, then the sheaf of barley lashed above it. The wind gets up over the roof-peak. Somewhere outside, a voice calls your name. The girl catches your sleeve and holds it, and the whole near bench goes quiet and does not look at the door until the wind drops.

The wind is the **Jól-Ride**: the dead who never had their grave-ale, abroad on the longest nights. So a household keeps a lamp in the doorway and a sheaf on the roof-peak, speaks the names of its dead at the Jól table, and sends nobody out alone. The mistake every child is warned against is answering a voice that calls your name from outside.

## The Ten and the Last Fire

"They are going to lose," a Norgaad godi tells newcomers, before he has given them a single god's name. The ten gods of the [[affiliation-asguardian|Asguardian Pantheon]] cut the world from the body of the giant [[lore-hrimthurspr|Hrímthur]], and the north holds that at [[lore-aldarlok|Aldarlok]], the close of this age, they go down fighting against the fire and leave the next age to their heirs. The north worships the Ten because they know this and go out to meet it anyway. [[affiliation-odvar|Ódvar]] the All-Father and [[affiliation-solrun|Sólrún]] divide the honored dead between [[place-valsal|Valsal]] and [[place-solvangr|Sólvangr]]; [[affiliation-thrunvald|Thrúnvald]] blesses ships, and [[affiliation-eidgar|Eidgar]] holds the oath-ring. The oath-broken, and those who die of sickness without distinction, pass to [[place-nulthey|Nulthey]] and fade, a teaching the faithful of Sólrún soften.

Worship has no center: no pontiff, no synod and no chief temple. A household pours the first mead of the day on its own _hörgr_. The hof is the shrine-hall where a godi or gydja keeps the rites, witnesses oaths and often leads the district as well. The central act is the blót, an offering shared by the gods, the living and the dead; what is offered is eaten, not destroyed. Breaking an oath is graver than murder in the faith's eyes. [[affiliation-nahild|Náhild]] of the underworld is one of the Ten, and her cult is suppressed in every kingdom; its hofs are hidden and its offerings refused.

The völvur stand beside the priests and belong to no hof. A völva travels from settlement to settlement, eats at the jarl's table, sleeps by the hearth and takes the high seat to answer what the household needs to know. Her craft is _seidr_, trance and spirit-walking, admired in a woman and scorned as _ergi_ in a man. _Rúnagaldr_, rune-cutting with intent, is open to either sex and belongs to Ódvar's rune-masters. The [[affiliation-ordoarcanis|Ordo Arcanis]] has almost no presence here; the völvur were practicing their craft for centuries before it existed.

## The Dead near Home

> Two days before the grave-ale you climb the headland with the shipmaster's kin. The wind flattens the grass and carries spray from the rocks below. A carver kneels at a slab of gray stone, tapping runes down its face with a chisel, and the chips ring off the granite. When it stands upright in its socket, his widow lays both hands on it and says his name aloud to the sea, and his brother does the same, and then everyone on the headland does.

A death starts seven nights of work. The household carries its dead out through a gap cut in its own wall, never the door the living use, and closes the gap behind them. The free are burned in daylight, the great laid in a ship, and a thrall buried without a pyre. When the sea keeps the body, the kin raise a carved stone on the headland with the name cut in runes and hold the grave-ale over the stone; a drowned man nobody raises a stone for rides with the Jól-Ride. On the seventh night the kin hold the _hrúmsminni_, the grave-ale. They give the praise of the dead, speak the reckoning of what was owed and who now answers for it, and only then does the heir drink standing and step up into the _höfudsveld_, the high seat. [[lore-nrdlndsfnrl|The Pyre, the Ship and the Howe]] follows every step.

A howe is a claim as well as a grave: a line proves its _odal_ land by the howes of those who held it before. Taking anything from one is theft from the dead and the living line together. Some howes hold worse than bones. The _[[lore-haugverdir|hrúmverdir]]_ walk in their own bodies, which is why a stranger asks the local custodians before going near a mound.

## Stormveld: the Plain Across the Water

Sixty years ago, Nordmen crossed to the island of [[place-aelwyth|Aelwyth]] and took its north-east, the one large body of good arable on the island. The [[affiliation-jrldmstrmvld|Jarldom of Stormveld]] is the only realm of the Nordmen that is not a kingdom. It is a loose confederation of jarldoms, each with its own hall, levy and moot, under a [[lore-highjarlrnk|High Jarl]] elected from among them, and its elections sometimes end in armed contests. About 30,000 Nordmen hold it. About 120,000 native Vardain work the [[place-stormplain|Stormplain]] as their thralls, four in five of the Jarldom's people the property of the fifth.

Seen from the Nordlands, Stormveld is arithmetic: a people whose land could not feed them took land that could. Seen from the plain, it is a conquest. The country was [[place-vardanreach|Vardanreach]], and the [[lore-vardain|Vardain]] were a nation for thousands of years before the Nordmen came. They keep their speech and observances out of sight, and they have risen twice. At [[place-stormveil|Stormveil]], the seat, the thralls' quarters lie down the slope and apart from the hall. Thoughtful Nordmen themselves dispute an honor that protects a guest at the hearth and excuses the enslavement of strangers.

Stormveld's ships run north, carrying produce out and bringing iron, ships, men and quarrels back, and some jarls hold land on both sides of the water. A party can come to it as Nordheim kin taking service, or from the southern kingdoms it raids.

:::secret
**For the GM:** About 8,500 free Vardain live in the high valleys of the [[place-ironfells|Ironfells]] under [[lore-flkkhazar|Khazári]] protection, days away over the [[place-sunderfells|Sunderfells]]. The thralls of the plain know [[place-vardainvalleys|the valleys]] exist, and a few try to reach them every summer. The passes close with the first snow, and a thrall who leaves too late is found at the thaw. A party can be hired to guide the crossing, to hunt the runaways, or caught between the two.
:::

## People to Meet

The harbor-reeve who greets you, the skald who remembers your oath and the völva who will not say who sent her all have lives that run beyond a party's errand. Some of the north's people stand in its songs, such as [[being-grosdrnrgd|Gróa the Seidr of Norgaad]], who heals at cost to herself; others belong to the [[doc-heroessgrd|Heroes of Asguard]], whom the skalds sing whether or not they ever lived. These Nordmen offer a friendship, a debt or a feud:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-nordheimnclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## What Gets a Newcomer into Trouble

These are the rules strangers break most often:

- **Swear nothing you cannot keep.** A promise made in a hall is remembered, and an empty boast costs standing as surely as cowardice.
- **Leave the howes alone.** Nothing is taken from a grave, and you ask before going near one.
- **Keep the lamp lit at Jól**, travel in company on the riding nights, and never answer a voice that calls your name from outside.
- **Take nobody's seat.** A seat in a hall belongs to someone, and at the ting a seat follows the holder's grant.
- **Change your paper before the border.** No hall in the five kingdoms takes a Vylarian note.
- **Keep your hands on the table at Hringstead, and leave your sword in the boat at Dómsey.**
- **A stone that has moved is a matter for the ting.** Do not settle a boundary with your neighbor at the gate.

## Ways In

A party can arrive by sea at Knalthstead or Gnarthborg, sign on with a free company at Hringstead, come up from [[place-vrystwald|Vrystwald]], where Nordmen settlers and the [[lore-varokhiclt|Varokh]] contest the forest, or cross from Aelwyth. A character from the north might be a bóndi's younger child looking for a hall, a skald's apprentice who must one day recite against a patron, a fosterling owed care by a jarl, or a shield-maiden signed to a company. An outsider who settles counts as a _lidmadr_ and needs a following to vouch for them.

At the first hall, three questions place a character in the north: **Whose kin are you? What have you sworn? Who will stand behind you at the ting?**

Campaigns start well from the remembered word. A dead man's reckoning names a debt nobody can account for. A boundary stone stands a pace from where the witness struck it last spring, and the two households must stand their fort-duty on the same wall in Targud. A Vithgard völva accused at [[place-askholm|Askholm]] and never tried is asked to sit the high seat again. A jarl's seat on Dómsey stands empty because the king has moved the grant, and somebody wants the reason recited before the next sitting.

:::secret
**For the GM:** The record here lives in people. A skald can be bought, threatened, killed or simply not present, and the Circle breaks the ring of any skald who falsifies a recital. A party that learns to ask who heard an oath, and who is still alive to say so, has made every skald, witness and grieving widow in the north into a player.
:::

## Where to Read Next

- [[place-nrdlndsrgn|The Nordlands]] for the land, the five kingdoms and their neighbors
- [[lore-nordheimnclt|The Nordheimn culture]] for oath, reputation, hall and ting, and what a person owes
- [[affiliation-kngdmnrdhm|Nordheim]], [[affiliation-kingdmnrgd|Norgaad]], [[affiliation-kingdomlgn|Malagna]], [[affiliation-kingdmtrgd|Targud]] and [[affiliation-kngdmvthgrd|Vithgard]], with their histories: [[lore-nrdhmhstry|Nordheim]], [[lore-nrgadhstry|Norgaad]], [[lore-mlgnahstry|Malagna]], [[lore-trgdahstry|Targud]] and [[lore-vthgdhstry|Vithgard]]
- [[affiliation-asguardian|The Asguardian Pantheon]] for the Ten, the blót and Aldarlok
- [[lore-nrdlndsraid|The Raid and the Longship]], [[lore-nrdlndswhal|The Whale Strand]] and [[lore-nrdlndsseal|The Ice-Edge and the Rookery]] for the ships and the sea that feeds them
- [[affiliation-skaldscrcl|The Skalds' Circle]] and [[affiliation-malldbndlg|the Málalidabandalag]] for the north's memory and its swords for hire
- [[affiliation-jrldmstrmvld|The Jarldom of Stormveld]] for the conquered plain on Aelwyth
- [[skill-nordmalng|Nordmal]] for the tongue and how a name is built in it
- The songs: [[lore-storalddraskborg|Stórald of Draskborg]], the saga of a moved stone on the Targud frontier; [[lore-vyldgyldra|Vyldgyldra]], a praise-poem for a hungry winter; [[lore-folmhnura|Fölmhnúra]], a shipwright's lament; [[lore-hvelmsnerv|Hvelmsnerv]], a seeress's whale-prophecy; [[lore-skipskreld|Skipskreld]], the gods' flyting in a becalmed boat; [[lore-motmal|Mótmál]], the Maker's speech; and the hero sagas of [[lore-sagaskalforv|Skalforv Thunderstrike]] and [[lore-sagaskrildmyl|Skrildmýl Stormborn]]

## Glossary {#glossary}

| Word        | Meaning                                                                              |
| ----------- | ------------------------------------------------------------------------------------ |
| blót        | An offering and shared meal joining the gods, the living and the dead                |
| bóndi       | A free farmer of full clan membership, holding his own land and speaking at the ting |
| godi, gydja | A priest or priestess who keeps a hof's rites, often also leading the district       |
| hersvald    | The leader of a district's men at the muster, holding the post by its consent        |
| hof         | A shrine-hall where a blót is made, oaths are sworn and a ting may gather            |
| jarl        | The holder of a province by the king's grant                                         |
| Lawspeaker  | The keeper of a kingdom's law in memory, who recites it at the assembly              |
| skald       | A sworn poet whose recital is a hall's memory and counts as evidence                 |
| thrall      | A person owned outright, without voice or rights of their own                        |
| ting        | The lawful assembly of free people, where disputes are judged and laws proclaimed    |
| völva       | A wandering seeress bound to no hof; plural völvur                                   |
| wergild     | The compensation that settles a claim for a wrong                                    |

The [[lore-nordheimnclt#glossary|full glossary]] at the end of the culture note lists every term these pages use.
