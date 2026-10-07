---
shortcode: haradadvguide
name: {full: Harad Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to the island city-states of the Confederation of Haradian States—their harbors, houses, guilds and quarrels, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

> Late in the afternoon your ship clears the last breakwater, and Tamavar opens across the water all at once. The Grand Harbor is a deep blue bowl ringed by fortified islands and crowded with hulls at anchor, their furled sails gone amber in the low sun. The sea breeze cools the sweat at your collar, but the quay stones still give back the day's heat through your boots. Along the waterfront the Guild Quarter stands in a row of marble faces—warehouses, counting houses, guild halls with bronze doors—and behind it the old city climbs in a jumble of tile roofs, washing lines and the domed roofs of covered bazaars. The air smells of tar, roasting coffee, cumin and fish laid out on wet stone. On the northern arm of the harbor, shipwrights' mallets keep time; in a dry-dock by the water a captured Vylarian warship sits on her keel blocks with her gilded stern flaking, and boys climb her props.
>
> Porters with rope pads on their shoulders run bales down the gangplanks while a customs clerk chalks a mark on each one. A broad-shouldered captain with gray in her braid argues freight with a factor in a blue silk coat, and a hill man in a goat-hair cloak, a curved knife at his belt, watches the bargaining without a word. A young woman with olive skin, black curls pinned under a green scarf and an ink-stained thumb crosses the planks toward you, a clerk at her heel with a brass coffee pot. "_Shamûlû zarûtan belginû_," she says, the merchants' blessing that wishes you fair winds and profitable voyages. "I am **Nadîya Pasharûnî**, of the house of Pashar, and I keep its accounts on this quay. Sit. Drink." The cup is small and the coffee thick and sweet. Only after the second cup does she name a wage for guarding a cargo to Varoshan, an insultingly low one, and wait, smiling, for you to argue.

[[place-haradregin|Harad]] is half a dozen islands strung over 140 miles of the eastern [[place-vylarianse|Vylarian Sea]], forty to eighty miles off the coast of the [[affiliation-sultntmrdd|Sultanate of Amradad]], and it holds no foot of the mainland. Every bay on those islands is a harbor, and every harbor has a city and a guild sitting on it. Five of those cities make up the [[affiliation-cnfdrtnhrdnstts|Confederation of Haradian States]], and some twelve million people live in their ports, market towns, fishing villages and island hills. For centuries Harad was a Vylarian colony. Twelve years ago it broke away by force of arms, with help from Amradad and the [[affiliation-empireakhlth|Empire of Aû'Khelâthu]] among others, and won its freedom in two days among the sandbars of the [[place-tamzirshoals|Tamzîr Shoals]].

**The one thing to understand first: in Harad, your credit is your name.** The houses lend across distances where no court's writ runs, on nothing more than what a merchant is known to be. A hard bargain earns respect; a bargain broken makes the breaker unfinanceable from one end of the sea to the other. Nadîya's low offer was a courtesy. Taking it without argument would have told her you were not worth the time, and failing to deliver the cargo afterward would tell every factor on the quay the same thing for years.

## Choose a Harbor

Learn the harbor before you learn the city. Each of the five city-states keeps its own laws, militia and council, so a cargo lawful at one quay is contraband at the next. Smuggling and legal arbitrage—profiting from the gap between two cities' rules—are respectable trades here, and a party that learns the gaps has work in every port.

- [[place-tamavar2|Tamavar]] is the richest city and the Confederation's capital in all but name. The **Grand Council** meets there, the great guilds keep their headquarters in the Guild Quarter, and the old city behind the marble is a maze of tenements and bazaars where the dock workers live. Come here for money, intrigue and patrons.
- [[place-kethara2|Kethara]] holds the narrows at the heart of the archipelago under its **Strait Fortress**, builds the Confederation's warships, and runs on pride where Tamavar runs on money. Its admirals' families govern it, and its **Veterans' Quarter** houses the sailors and marines who won the war and never received what they were promised. Come here for the navy and the anger.
- [[place-varoshan2|Varoshan]], on the island nearest the mainland, is mudbrick and tile and the smell of camel. The caravan goods of [[place-dunharargn|Dunhara]] and the [[place-khzryndsrtrgn|Khazryn]] come over the strait to its **Caravan Gate**, its council seats hill tribesmen beside merchants, and the great guilds carry less weight there. Come here for the desert roads.
- [[place-ashkabel2|Ashkabel]] draws the finest ships in the islands in its **Design Yards**, teaches navigation and astronomy at its **Academy of the Tides**, and lines its **Painted Harbor** with open-air theaters. It is the least guild-ridden city, and artists, free-thinkers and fugitives from guild politics find room there.
- [[place-azhun2|Azhûn]] lines a natural harbor at the mouth of the [[place-alzriver|Alz]] with white-walled warehouses. Its guilds rule absolutely from the **House of Factors**, and a captain who breaks their protocol finds no berth and no crew.

Smaller places offer their own starts. [[place-qadhirun|Qadhirun]] has quarries, furnace-houses and an arena whose fighters belong to a guild. [[place-kashmuret|Kashmuret]], facing the mainland crossing on the largest island, lives by caravan masters who stop to restock and settle prices, and a merchant who reneges there is shut out of the caravan trade for years.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder = 'Regions/Ankaris/Midhalion/Harad'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

## Who Holds Power

"Every city has an equal voice in the Council," a clerk of the Grand Council tells a new arbitrator. "Count the votes by property and see whose voice carries." On paper the Confederation is a league of equal city-states with a rotating Arch-Consul. In practice the voting rules weight property, the wealthiest cities and their guilds decide the business, and the Arch-Consul presides over decisions made in back rooms.

Three great guilds hold Harad in fact, and you meet each of them differently.

- The [[affiliation-auricompct|Auric Compact]] financed the war and holds the Confederation's debt. You meet it as a letter of credit honored across Mídhalión, as a seal that makes a contract bind like a court order, and, if you default, as an enforcer at your door. Its counting house in Tamavar stands in the old Vylarian governor's palace.
- The [[affiliation-corsairleg|Corsair League]] grew out of the captains who fought at the Shoals and is now the shipping cartel that serves as the Confederation's navy. Its members carry swords on any quay and pass customs without delay. A Haradian-flagged ship that sails outside the League's umbrella waits for berths and meets the occasional "mistaken" attack at sea.
- The [[affiliation-mrchntryvl|Merchantry of the Veil]] deals openly in silks, spices and rare goods and secretly in information. Its agents wear sigil rings and greet each other with phrases that sound like small talk. It moves the cargoes the other guilds will not touch, and it is the guild most likely to offer an unaffiliated crew work.

Beneath them, the [[affiliation-sodnaqirin|Sôd-Naqîrîn]] at Tamavar charters the guilds, registers masters, examines apprentices and judges disputes between trades. Its head is the Rab-Naqîr, its treasurer the Gizbar, and its discipline officers, the pāqîds, investigate charter violations. Every guild master answers to a naqîr of his trade. If your character holds a craft, the Sôd's register is where that craft is proved.

Inside a city, standing follows the register. A freeman of the city may trade in its markets and plead in its courts; a resident lives and works under its protection without that freedom; the unfree are bound in service or debt. Above the freemen stand the guild masters, the house factors who run a great house's ships and warehouses, and the house heads who elect the councils. A person struck from the roll loses every charter and every contract at once.

:::secret
**For the GM:** The three guilds need each other and trust nothing about each other. The Compact finances voyages that the League protects; the League resents the Compact's purse and keeps a romantic attachment to the war's ideals; both quietly buy the Merchantry's information. Any cargo, debt or witness that moves between them gives a party three patrons with three different reasons to want it delivered—or lost.
:::

## The Bargain and the House

> The argument runs the better part of an hour. Nadîya laughs at your second figure, taps the table at your third, and sends the clerk for a plate of honeyed pastry when you refuse her fourth. The light goes from gold to rose on the marble behind her. When at last she names a wage you can accept, she pours a third cup and holds out her hand across the table, and the clerk writes the figure in a ledger bound in green leather while the ink is still wet on his thumb.

Haggling is the courtesy here, and refusing to haggle is the insult. The negotiation is how a Haradian learns whom he is dealing with, and he would sooner trade at a worse rate with someone he has read than at a better one with a stranger. A foreign house that sends a factor with fixed terms and no authority to move them is understood to have declined to meet. Hospitality is lavish, and it is a statement of credit: a house that feeds forty people well is telling the harbor how liquid it is.

Sharpness belongs in the negotiation and nowhere after it. A hard bargain is a bargain; a bargain not honored is theft. The coast pays its debts with a care that surprises visitors who expect merchants to be slippery, because a defaulter loses more than money.

A house is a family and a firm at once. A marriage is a merger, a son is an apprentice and an heir, and a daughter who can read a ledger is worth more to her house than a son who cannot. Women captain ships and hold partnerships. Ask a Haradian what a person owes and he names his house first, then his partners, then his crew, then the city whose harbor he uses. The Confederation comes low on the list: it is twelve years old, it is run by people he can name, and he keeps his loyalty for institutions that have outlasted him.

Harad divides sharply, and a character's place in it shapes every encounter.

- **The guild families** live in palatial estates, patronize the arts and school their children in rhetoric, mathematics and mercantile law.
- **The middle** of independent merchants, craftspeople and ship captains is the economic backbone. The characteristic Haradian is a captain who owns his own hull: proud, indebted, competent, and one bad season from working for a house.
- **The harbor districts** hold the dock workers and sailors who carried the war, and they are crowded, poor and restless.
- **The hill tribes** of the larger islands speak archaic dialects, keep older traditions and resent the port cities. They sent many of the war's foot soldiers and received nothing from the peace.

Spiced meats, flatbreads, honeyed pastries and strong coffee are the food of every port, and [[skill-haradilng|Haradi]], rhythmic and long-voweled, is the working language of the guilds and the shipping lanes.

## Coin and Script

Land with Vylarian traveler's notes and the first moneylender you visit pushes them back across the table. The [[lore-hardncrncy|Haradian currency]] uses the Vylarian denominations—1 Aurion is 160 Argo, and 1 Argo is 8 Bits—but the coins are struck in Harad and banked through the **Bayt al-Khazînah**, the treasury the Gizbar runs. The Haradian Aurion is about 7 percent light by the Vylarian standard. It passes at face value anywhere in the islands; a Vylarian or Khelâthi changer weighs it and pays less. Bayt script is honored at any Bayt-affiliated moneylender in the Confederation and at no Vylarian house, and the reverse holds too. A merchant crossing between the two converts through coin, usually at the Heliónite houses that keep accounts on both sides.

## The Anger Under the Coast

> Your pilot out of Kethara is a gray-bearded veteran in a salt-stiff coat who smells of tar and strong coffee. He steers through the island channels by the color of the water, pale green over sand and dark blue over the channel, and never once looks at the chart. Where the Shoals open off the bow he spits over the rail. Tacked inside the door of his little deckhouse, curling with damp, is a printed sheet: a broken chain, a rising sun, a ship under a Haradian flag. When a Corsair League galley passes close enough to hail, he does not answer it.

Pinned in every veterans' hall is a broadsheet gone brown at the edges: a broken chain, a rising sun, a ship under a Haradian flag, and the words _we bleed gold for an empire that gives us nothing but chains_. The guilds printed it to raise a war. The dock workers, fishermen, tribesmen and captains who fought were promised land, guild membership, pensions and a voice in the new government, and they received a discharge and a small purse of silver.

The merchant princes answer that they never lied. They spoke of freedom, and Harad is free of imperial taxes, imperial governors and conscription into foreign legions. What followed the peace is not in dispute. Prominent veterans were accused of debts they did not owe and crimes they did not commit, bought off with small posts, or imprisoned. Captains who refused to be silenced were declared outlaws, and many of them now raid guild shipping from the island channels as the **Free Captains**, the **Unchained** and the **Shoals Brotherhood**. The guilds call them all pirates.

Unrest rises and is put down: a harbor strike in Kethara, a tax riot in Tamavar's dock districts, a tribal raid on a guild caravan. The guilds answer with revoked licenses, called-in debts, blacklisted families and quiet enforcers. They send no soldiers, because soldiers make martyrs. The [[affiliation-thetamzir|Tamzîr]], a battered coastal trader whose captain fought at the Shoals, works the margins of that order, and her crew is a ready-made company for a campaign.

:::secret
**For the GM:** Every faction here has a legitimate grievance and a ledger of its own wrongs. The guilds kept the islands solvent and out of Vylarian hands; the veterans were cheated; the Free Captains are heroes to the waterfront and murderers to the families whose cargoes they burn. A party that takes a job for one side is quickly offered a better one by another. Let the players choose whom to believe.
:::

## Faith and Magic

Haradians are not much interested in doctrine and are very interested in omens, luck and the god who governs a particular sea route. The [[affiliation-arldnpnthn|Aurèldían Pantheon]], brought by the Vylarian conquest, holds the coastal cities. Merchants favor [[lore-venusiadty|Ólvenía]] for prosperity and [[lore-menervadty|Ménérva]] for knowledge, and sailors pray to [[lore-taranondty|Táranon]] of the storms before a sailing. The eastern states and the hill tribes keep the older [[affiliation-ashanpnthn|Āsháian Pantheon]], and in Varoshan it is the dominant faith; its **Temple of Two Fires** holds the rites of both pantheons under one roof. Houses endow temples and publicize the endowments. A foreign priest who arrives with theology finds the ports polite and inattentive; one who arrives with a reputation for effective blessings finds them generous.

The [[affiliation-ordoarcanis|Ordo Arcanis]] keeps chapters in the major cities, but the guilds suspect it of serving Vylarian interests and restrict its work. Hedge mages, alchemists and fortune-tellers are more common here than in Vylaria, and in Varoshan the traditions that come with the caravans are practiced openly.

## Neighbors

Across the strait to the east, the Sultanate of Amradad holds the shore where the caravan roads reach the sea. Amradad, long hostile to Vylaria, was among those who helped Harad win its independence, and relations with it are cordial. Beyond the Amradi shore, the nomads of Dunhara and the Khazryn hold the overland routes the island cities depend on, a relationship that profits both sides and is seldom easy.

The empire in [[place-vylariargn|Vylaría]] is officially correct and privately hostile, and its agents gather intelligence in every Haradian port. [[place-helionis|Heliónis]] is Harad's natural trading partner, and the [[affiliation-byzarianlg|Byzarian League]] its great rival at sea. Aû'Khelâthu kept the rebellion alive with gold, weapons and advisors in its first desperate months, and the merchant princes repay that debt quietly with lower harbor fees for Khelâthi ships.

## People to Meet

A chandler in Qadhirun, a gladiator who won his freedom in its arena, a glassmaker whose birds stand in guild halls, and the captain and crew of the Tamzîr all have their own business in the islands:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-haradianclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Ways In

A party can arrive on a merchant ship at Tamavar, cross the strait from Amradad with a caravan, or come aboard a Khelâthi trader bound for the islands. A Haradian character might be a captain's mate whose captain owes the Compact, a scribe of the Academy of the Tides with charts a guild wants, a veteran's daughter who keeps her father's broadsheet, or a tribesman come down from the hills to collect what the cities promised. At the first quay, ask three questions: **Whose credit are you trading on? Which guild's flag do you sail under? Which side were you on at the Shoals?**

Campaigns start well from a debt. A house calls in a loan from a captain who cannot pay, and the party is hired to collect, to hide him, or to sail his last cargo. A guild needs a witness moved quietly between two cities whose laws disagree about what she saw. A Free Captain offers a fair price for a manifest the Corsair League would kill to keep. A Vylarian agent wants something from the Grand Council Hall and will pay in coin no Haradian changer will touch.

:::secret
**For the GM:** Harad's debts are the engine of play. The Confederation owes the Compact; the merchant princes owe Aû'Khelâthu and the veterans; the veterans owe nobody and know it. A party that learns who holds which debt can bring down a house, free a prisoner or start the second revolution the waterfront has been waiting for. Decide early how far the guilds will go to keep that ledger closed.
:::

## Where to Read Next

- [[affiliation-cnfdrtnhrdnstts|The Confederation]] for the war of independence, the betrayal of the veterans and the Grand Council
- [[place-haradregin|The region]] for the islands, the five cities and the waters between them
- [[lore-haradianclt|The culture]] for the houses, the bargain and what a Haradian owes
- [[affiliation-auricompct|The Compact]], [[affiliation-corsairleg|the League]], [[affiliation-mrchntryvl|the Merchantry]] and [[affiliation-sodnaqirin|the Sôd-Naqîrîn]] for the guilds that rule
- [[lore-hardncrncy|Money]] and [[skill-haradilng|the language]] for coin, script and names
- [[affiliation-thetamzir|The Tamzîr]] for a ship and crew ready to sail

## Glossary

| Word                  | Meaning                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Arch-Consul           | The presiding office of the Grand Council, rotating among the cities and mostly ceremonial.    |
| Bayt script           | Paper credit issued by the Haradian treasury, honored by its moneylenders and no Vylarian one. |
| First of the Council  | The presiding officer of a city's council, holding the city's seal for a fixed term.           |
| Gizbar                | The treasurer of the Sôd-Naqîrîn, who runs the Confederation's banking.                        |
| naqîr                 | A guild-warden; the senior naqîr of each trade sits on the Sôd-Naqîrîn's council.              |
| pāqîd                 | An overseer of the Sôd-Naqîrîn, who inspects guilds and prosecutes charter violations.         |
| Rab-Naqîr             | The elected head of the Sôd-Naqîrîn.                                                           |
| Warden of the Weights | The inspector of measures, coin and quality in a city's markets.                               |

Argo, Aurion and Bit are loanwords from [[lore-vylarianclt#glossary|Vylaria]].

The [[lore-haradianclt#glossary|full glossary]] at the end of the culture note lists every term these pages use.
