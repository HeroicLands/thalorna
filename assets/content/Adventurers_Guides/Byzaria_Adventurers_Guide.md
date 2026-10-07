---
shortcode: byzariaadvguide
name: {full: Byzarian League Adventurer's Guide, aliases: [Byzaría Adventurer's Guide]}
type: doc
subType: concept
description: A player and GM introduction to the Byzarian League—its caravan cities, guilds and arbitrators, its marches and monasteries, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

> The road has been dust for six days: pale limestone, red earth, thorn and juniper, and gorges where last winter's streams have shrunk to green pools. Late in the afternoon it tips over a ridge, and the valley below is green. Poplars and planes line the river. Gardens step down to the water in rows of melons and vines. And across the valley floor, wall after wall, stand the caravanserais of Yeşilhan—square fortified inns the size of villages, their gates wide enough for a loaded camel, the domes and arcades of the city rising behind them in the low gold light. The heat goes out of the air as you come down among the trees. You smell water before you see it, then dung, woodsmoke, cumin and something sweeter that turns out to be a cart of incense resin ahead of you in the line.
>
> Inside the gate, the yard is a market in its own right. Dunhari drivers in dust-colored headcloths couch their camels and argue over stalls; an Amradi drover in a striped coat counts sheep through a side gate while a boy chalks the tally on the wall; a clerk with ink-stained fingers reads a bill of lading aloud to two men who each hold a copy and follow it line by line. Bales are weighed on a beam scale under an arch, and a man in a plain gray robe writes down each weight before anyone touches the bale again. Nobody shouts; the bargaining goes on in low voices, with a great deal of smiling and nobody conceding anything. The master of the house comes out of the arcade wiping his hands on a cloth: a broad man with a trimmed black beard, a green sash, and a brass seal on a cord at his neck. "_Shýn émpharin, sáphir kérdhanir_," he says: with the merchant, profit is clear. "Theodarash Karvanzát, master of this caravanserai, under the charter of Yeşilhan's caravansary masters; my father's brother taught me the trade. And you—of what trade, and whose?" While you answer, he raises two fingers to a boy at the kitchen door. By the time you sit, there is flat bread hot from the oven on the cushion beside you, a bowl of yogurt with mint, and lamb with cumin still hissing from the grill, and the boy has set down a wax tablet beside the bowl with each dish and the stabling scratched on it, item by item, with a price. Theodarash reads the tablet to you aloud, twice, and waits until you nod. Only when you have eaten does he mention the house in Altinkale that needs hands for the plateau road, and the terms it wants sealed before dawn.

The [[affiliation-byzarianlg|Byzarian League]] has no great river and no divine mandate. It has a road. Every silk, spice, incense and porcelain that crosses from the far east to the western sea comes over the eastern passes or up the road from [[place-dunharargn|Dunhara]], crosses the Byzarian plateau, and goes down to the coast to be shipped, and five merchant cities take their cut at every step. About eight million people live in [[place-byzariargn|Byzaría]], the inland band of upland and mountain in the east of [[place-heladrgn|Hellád]], which reaches the [[place-vylarianse|Vylarian Sea]] only at its western end. Their wealth rests on one thing, and they say so without embarrassment: a reputation for keeping terms.

This guide is the letter that **House Chrysákit**, a banking house of Altinkale, gives the guards, drivers and correspondents it hires for the first time. Its factors write it the way they write everything—courteously, patiently and to the letter—and they leave out what a house would rather a new hire did not know.

**The one thing to understand before anything else: in Byzaría, the terms come first.** What was agreed is kept exactly as agreed, whether or not it has turned out well. Byzarians write everything down—contracts, weights, inspections, judgments and the terms on which a quarrel was settled—and a dispute opens with both sides producing paper. A Byzarian will not agree to anything in general terms and settle the details later, because that is how swindles begin. Negotiation is slow, exhaustive and conducted with real warmth, and at the end of it both parties know what was agreed, because it is on a page with two seals.

## The Road Through Byzaría

Byzaría rises in three steps from the sea, and the trade climbs them in reverse.

The coast is short, warm and dry, with olive groves and vineyards terraced on the hills behind the harbors. [[place-denizara2|Denizara]], the League's great seaport, sits on a fortress isle in the straits that carry its name; a dozen languages are heard on its docks, and Haradian merchantmen lie beside Vylarian galleys. [[place-chrysamar|Chrysamar]] rivals it with quick turnarounds, consortium warehouses and fewer questions. [[place-thalassos|Thálassos]] keeps so little customs authority that ships wanting privacy put in there, and [[place-kostaros|Kostaros]] is another of the small harbors along the shore.

The plateau behind the coast is the country most outsiders never see: a broad, treeless upland of grass and scrub, cold in winter and baked in summer, where herds move between seasonal pastures. [[place-altinkale2|Altinkale]], the Golden Fortress, stands at the top of the last escarpment where the lowland road from Denizara reaches the plateau. Its counting houses wear gilded domes, and eastern goods are banked there before they go down to the sea. Inland from Denizara, on the arid highland, sprawls [[place-nekropolis|Nékropolis]], the city of the dead, where every great house keeps its tombs. [[place-byzaris|Byzaris]] is the artisan city of the guilds, governed by the heads of its twelve greatest guilds; [[place-selimara|Selímara]] is a market town on the inland roads.

The mountains close the country to the east and north. [[place-karatas2|Karataş]], Blackstone, quarries black basalt and mines iron and copper in the interior, and its forges burn day and night. [[place-gumushisar2|Gümüşhisar]], the Silver Citadel, sits astride the principal eastern pass behind some of the most formidable walls in the region, and the silver of its mines pays for the League's defense. [[place-yesilhan2|Yeşilhan]], the Green Caravanserai, lies in its river valley where the roads east and south divide, and it is where eastern goods first pass into League hands.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder = 'Regions/Ankaris/Hellad/Byzaria'
  AND data.population >= 4000
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

> On the plateau road out of Yeşilhan the wind never stops; it hisses through the dry grass and fills your teeth with grit, and the only shade for a day at a time is the tarred canvas of the wagon. At the first toll post, a stone hut with a striped pole across the road, the collector unfolds your wagon master's paper, reads every line with his lips moving, walks the length of the load counting bales against it, and presses a disk of red wax onto the foot of the page with a brass seal. At the second post, two days on, the collector takes the same paper, turns it over to the red wax, rubs it once with his thumb, and lifts the pole. At the third, he does not get up from his stool.

Season decides the journey. The eastern passes are snowbound from late autumn to spring. The grain road north to [[place-velanthrgn|Velanthia]] carries wagon trains from late summer until the snow closes its pass, and a bad Velanthian harvest is felt in Denizara's bread prices within the season. The coastal cities cannot feed themselves from their own terraces.

## The Marches

The League governs only three districts directly, and they are the ones nobody else wants: the border country. Each march lies outside every city's charter, under a lord the League council commissions and can dismiss, garrisoned by conscripts all five cities raise, and paid from the common treasury and the silver of Gümüşhisar. The marches exist because the cities distrust one another: a frontier held by any one city would make it master of the rest.

The [[place-eastrnmrch|Eastern March]] runs downhill from Gümüşhisar's eastern gate into the steppe margin of the [[place-khzryndsrtrgn|Khazryn]]. Way-forts stand a day's march apart on the paved pass road, and every spring in the foothills has a fort, a shrine or a caravanserai built on it. **Lord Commander Vasilis** has held the March for two decades and is the League's senior soldier. Steppe raiders are the constant trouble, and a great khanate rising in the desert is the reason the walls are so thick. In the high passes above Karataş live the **Sycâni holds**, warrior clans outside any charter whom the League tolerates as its eastern shield.

The [[place-southrnmrch|Southern March]] is dry pastoral upland on the road from Yeşilhan toward Dunhara, and its southern edge is the border of the [[affiliation-sultntmrdd|Sultanate of Amradad]], which runs the whole length of the League's south: a line of hills and customs posts crossed daily by drovers and smugglers both ways. [[being-vaskan|Lord Vaskan]] holds it from the saddle, and his hunts are its political season: merchant-princes and envoys ride after boar and gazelle with his hounds, hawks and coursing cats, and settle more League business around his fires than the council does in half its sessions.

The [[place-northrnmrch|Northern March]] is the quietest. It guards the grain road toward Velanthia, whose **Velanthian Hosts** keep the far side of a cordial border, and its lord is by custom a younger son of an Altinkalan house.

## Who Holds Power

Each city keeps its own council, its own coin standard, its own courts and its own guard, and its councillors sit by the weight of the houses behind them. The council elects a First of the Council for a fixed term, and he holds the city's seal while he presides. Within that pattern each city weighs power its own way. [[affiliation-altinkale|Altinkale]] is ruled by merchant-princes whose families have held their seats for generations. [[affiliation-denizara|Denizara]] shares government with its admiralty. [[affiliation-yesilhan|Yeşilhan's]] caravansary masters sit beside its merchant-princes, and [[affiliation-karatas|Karataş's]] guild masters sit with equal authority. [[affiliation-gumushisar|Gümüşhisar]] is governed by a military governor alongside its council.

The League council meets in Altinkale's **Merchant Hall**, a vast, ornate building that is parliament and exchange at once, and its business is narrow: tariffs, the joint fleet and army, the three marches, and quarrels between cities. Altinkale dominates it by money, Denizara by ships, and Gümüşhisar's military governor by the plain fact that the League's prosperity rests on his garrison. Altinkale has the gold, a Denizaran says, but Denizara has the ships.

```sql
SELECT address.slug AS _ref,
       name.full AS "City-state",
       data.population AS "People"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND file.folder = 'Regions/Ankaris/Hellad/Byzaria'
  AND name.full <> 'Byzarian League'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

A hired hand meets a city through its Harbormaster, who keeps the port and the dues on every hull, and its Warden of the Weights, who inspects measures, coin and quality in the markets. The Warden's inspections make the city's word good, and to be named to the office is the highest civic honor in any League city.

Standing runs from the register outward. A freeman is enrolled in it and may trade in the city's markets and plead in its courts; a resident lives under the city's protection without either. Above the freeman stand the guild master, the house factor, the house head and the councillor. Below everyone is the man struck from the roll, whose contracts are void and whom no court will hear.

The League's foreign policy is neutrality. The [[affiliation-vylarinmpr|Vylarian Empire]] would absorb it, the guilds of [[affiliation-cnfdrtnhrdnstts|Harad]]—the islands off the League's coast, and its great rival at sea—would dominate its trade, and the powers east of the desert find it useful and unreliable. It survives by being indispensable to all of them and subservient to none. Its wars are border wars, fought by conscripts under the march lords and by mercenary companies hired when the frontier turns dangerous.

## Guild, Seal and Name

A Byzarian is placed by his trade before his family and long before his city. He introduces himself by craft, names his master, and expects the same of you; a person who cannot name a guild is a person nobody knows how to deal with. Every trade is chartered, and every charter carries privileges and obligations in that order and in writing. A master's seal from Byzaris or Karataş opens doors from Harad to [[affiliation-jurthatempr|Jürthāt]], because the guild behind it will ruin a member who discredits it faster than any magistrate could.

Apprenticeship is long and is understood as a kind of adoption. The master owes the apprentice training, maintenance and a character; the apprentice owes obedience and, afterward, a lifetime's loyalty to the charter. Breaking that bond is the one social offense with no recovery.

A Byzarian name says which part is which by its last sound. A given name closes on a vowel or a soft consonant. A house name closes on a hard stop, and its ending says what the house answers for: _-ákit_ for a house of a trade, _-íkot_ for a house of a place, _-ídek_ for a house of a forebear, and _-zát_ for a house that reckons itself from an eastern founder. An eastern root always takes a Byzarian ending, so a name that arrives unadapted marks a visitor.

## Paper and Arbitration

A quarrel between two houses opens at an arbitrator's table, and the arbitrator's scribe reads both sets of terms aloud before anyone argues. The arbitrator is a professional named by both sides, his ruling is enforced by the guilds, and his standing depends entirely on being thought fair. A quarrel taken to the council instead goes nowhere: the council has never heard of a stranger, and the arbitrator asks for the terms before he asks a name.

Byzaría therefore has very little feud. A Byzarian who took private revenge would find his charter suspended and his contracts void, which ruins a man more thoroughly than any blood-feud could.

A Byzarian owes the terms first, then the guild behind his seal, then his master or his apprentices, then the city whose weights he trades under. Pressed, he adds that a man owes the truth about a defect in his own goods.

## Faith

The [[affiliation-arldnpnthn|Aurèldían Pantheon]] is the civic faith, kept in an eastern rite that is mystical, contemplative and elaborate, and served by monks. Their monasteries are the country's chroniclers, healers and manuscript houses. At Gümüşhisar the monks also keep the record of what crosses the pass, and they are the go-betweens with the peoples beyond it. Nékropolis is the rite's greatest sanctuary; its council of senior priests and hereditary tomb-keepers holds a soft power in League politics, because no merchant prince wishes to offend the people who guard his ancestors' rest.

The [[affiliation-ashanpnthn|Āsháian Pantheon]] has a substantial following among the eastern merchant communities and along the caravan roads, and small temples of it stand openly in every League city. In the Eastern March the two faiths are kept in roughly equal numbers. Byzarian tolerance began as arithmetic—a faith forbidden costs more in lost trade than orthodoxy could recover—and has been held long enough to become a habit Byzarians are proud of. The [[affiliation-ordoarcanis|Ordo Arcanis]] keeps a chapter-hall in each League city.

## Coin

Each city strikes its own coin, and the League keeps its accounts in [[lore-vylrncrncy|Vylarian money]]: the silver Argo, the cut-silver Bit, and the gold Aurion most people never hold. Large sums travel as the paper-script of the [[affiliation-clgmrgntrrm|Collegium Argentariorum]], and the League uses that imperial banking system without answering to imperial governance or paying imperial tax.

## What Gets a Newcomer into Trouble

**Agreeing in general terms.** A handshake on "the usual rate" is an invitation to be swindled, and a Byzarian counterpart takes it as a sign that the newcomer means to swindle. Name the sum, the date and the weight.

**Taking revenge.** Private revenge voids a charter. Take the grievance to an arbitrator, with the paper.

**Arriving without a guild or a master.** Name whoever you answer to—a house, a company or a captain—before anyone has to ask.

**Avoiding the tariff.** The League's collectors on the passes and at the march caravanserais are League officers. A smuggled load is cheaper only until a seal on it is checked.

## People to Meet

The caravansary master who prices your supper, the arbitrator's scribe who reads your clause aloud, the monk who writes down what crossed the pass: these Byzarians have trades, masters and terms of their own.

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-byzarianclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

In the Eastern March, [[being-athngrsktkls|Athênagoras Katakálos]] has held a garrison captaincy for a decade, and the mercenary [[being-arkdsphlmds|Arkádios Philomédis]] has taken the League's silver for twenty years. [[being-timthnnlkt|Timothéon Naulákit]], a teamster of Chrysamar, refused to pay the **Ravenswood Brigands** their tribute on the eastern routes and has been paying for it since.

## Ways In

A party can come up the Dunhara road through Amradad, down the eastern passes, south over the grain road, or by sea into Denizara. A Byzarian character has a trade and a master before anything else: a journeyman with a letter of introduction, a house factor's clerk, a march conscript, a monk-chronicler, a plateau herder who thinks the coast is soft. A foreigner is most easily a hired hand, a correspondent, or a mercenary under contract.

At the first toll post, ask three questions: **Whose seal is on your load? Who is your master, and what is your guild? Which arbitrator would you both accept?** The answers give a party its employer, its obligations and the person who will settle its first quarrel.

Campaigns here start well from a contract. A house hires the party to escort a caravan whose terms specify the arrival date to the day. An arbitrator needs a witness found before the hearing. A guild master's seal has turned up on goods his guild never made. A shipment of **Merchant House Valdris** has vanished on the eastern routes with no wreckage, no bodies and no sign of a struggle, and the Ravenswood Brigands are blamed for it.

:::secret
**For the GM:** What House Chrysákit's letter does not mention: twenty-six years ago a local lord hired [[affiliation-irnwlvscmpny|the Iron Wolves Company]] to take the village of [[place-trianthion|Trianthion]], and by nightfall every adult there was dead. The company collected its rate and the lord paid without comment. The Iron Wolves keep their compound outside [[place-veridon|Veridon]], they are the work the League prefers not to admit buying, and a survivor who testified in public would force the League to act. The company's most famous deserter, [[being-kyrksptrks|Kyriákos Patrikîos]], is still being hunted.
:::

:::secret
**For the GM:** Yeşilhan's caravansary masters pay the Southern March for its road in tolls and in gifts to Lord Vaskan, and both sides would rather the League council did not look closely at how the road's revenue is divided. A party hired to audit the road, or to carry its gifts, stands between the richest caravan city and the lord who holds its only southern road.
:::

## Where to Read Next

- [[affiliation-byzarianlg|The Byzarian League]] for the confederation, its council, its officers and its ladder of standing
- [[place-byzariargn|Byzaría]] for the coast, the plateau, the passes and the neighbors
- [[lore-byzarianclt|Byzarian]] for the culture of the bargain and what a Byzarian holds a person owes
- [[affiliation-altinkale|Altinkale]], [[affiliation-denizara|Denizara]], [[affiliation-yesilhan|Yeşilhan]], [[affiliation-gumushisar|Gümüşhisar]] and [[affiliation-karatas|Karataş]] for the five city-states
- [[place-eastrnmrch|The Eastern March]], [[place-southrnmrch|the Southern March]] and [[place-northrnmrch|the Northern March]] for the frontiers
- [[skill-byzarnlng|The Byzarian tongue]] for its words for agreement and its rules for names
- [[lore-vylrncrncy|Vylarian money]] for the coins and the paper-script
- [[place-helionis|Heliónis]] for the cousins to the west, and [[affiliation-sultntmrdd|the Sultanate of Amradad]] for the neighbor along the whole southern border

## Glossary

| Word                  | Meaning                                                                           |
| --------------------- | --------------------------------------------------------------------------------- |
| Argo                  | The everyday silver coin of Vylarian money; formally the Argentus                 |
| Aurion                | The gold coin of Vylarian money, worth 160 Argo and seldom seen                   |
| Bit                   | A silver wedge worth one-eighth of an Argo; formally the Octus                    |
| caravansary master    | Keeper of a caravanserai; in Yeşilhan, a member of the governing council          |
| caravanserai          | A fortified inn-complex housing merchants, servants and pack animals              |
| eastern rite          | The Byzarian practice of the Aurèldían faith, contemplative and served by monks   |
| First of the Council  | A city council's presiding officer for a fixed term, holding the city's seal      |
| house factor          | Manager of a great house's warehouses, ships and correspondents abroad            |
| house name            | A family name whose hard final ending says what the house answers for             |
| Lord Commander        | The League's commander of the Eastern March and its senior soldier                |
| march                 | A frontier district outside any city's charter, held for the League council       |
| merchant-prince       | Head of one of the great houses that sit on a city's council                      |
| paper-script          | Bankers' paper that carries large sums in place of coin                           |
| struck from the roll  | Expelled from a city's register, with every contract void                         |
| tomb-keeper           | A hereditary keeper of the tombs of Nékropolis                                    |
| Warden of the Weights | Inspector of measures, coin and quality; the highest civic honor in a League city |
| way-fort              | A fortified post on a pass road, a day's march from the next                      |
