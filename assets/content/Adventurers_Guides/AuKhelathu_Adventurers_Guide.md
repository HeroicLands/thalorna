---
shortcode: khelathuadvguide
name: {full: Aû'Khelâthu Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to the river empire of Aû'Khelâthu—its flood, its writing, its gods, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

> You come in from the sea by boat, the deck damp beneath your feet and the riverbanks crowded with green fields and temple roofs. The water has fallen, leaving black silt where people are already walking the boundaries of their land. At the landing, a merchant offers to pay you to carry cargo farther upriver, then asks who will witness your promise. You expected a market; instead, you are invited into an archive where a stranger's word can be made to last. Beyond it, the river leads south past cities whose names you have yet to learn.

The [[place-zumeleshrvr|Zumelesh]] runs north through a desert for a thousand miles and makes a country. Once a year it rises, drowns the fields, and goes down again leaving black silt on them, and everything the [[lore-khelathiclt|Khelâthi]] have built stands on that one fact. Their calendar counts the water. Their gods are argued about in terms of it. Their surveyors re-walk the fields every spring because the flood has taken the boundary stones away again, and the scribes who record what the surveyors find are the most powerful commoners in the world.

The [[affiliation-empireakhlth|Empire of Aû'Khelâthu]] counts its rulers back farther than any neighboring realm, and the Khelâthi hold theirs to be the oldest civilization in the world. It has been conquered — by hill-nomads, by sea-raiders, by a Vylarian occupation at the height of Vylaria's reach — and each time it has done the same thing: handed the conqueror a scribe, a temple appointment, and a throne name, and waited. Before long the conquerors are Khelâthi. In the crowded valley and delta, people speak of outlasting history as readily as surviving it.

**The one thing to understand before anything else: in Aû'Khelâthu, a written promise can follow you anywhere.** A witnessed entry gives strangers a way to hold one another to their word, and an entry left open follows its maker toward death. Unwritten duties to kin and household matter just as deeply, though no court can read them back. Come looking for a lost record, a disputed witness, or a name missing from an archive, and you have an adventure before you ever leave the city.

## The Flood and the Year

The year runs in three seasons of four months, each named for what the water is doing, beginning with the inundation. A farmer reckons everything by that cycle; tax rolls and contracts carry the regnal year of the reigning [[lore-garauu|Gar-Aû]], and temple chronicles count from a beginning so far back that the counting itself is an argument. The full reckoning is in [[lore-khelathclndr|the Khelâthi calendar]].

Choose the season and you choose the journey. During the inundation, fields disappear beneath the water, labor shifts to canals and monuments, and boats carry travelers between settlements. When the water recedes, surveyors walk the fields and old boundary claims return with them. A party might ferry a witness through the flood, guard a survey crew, or discover that two temples hold different records for the same field.

## Who Holds Power

The [[lore-garauu|Gar-Aû]] is addressed as divine, and the empire's order rests on that claim. Daily power passes through scribes and the hereditary Halzi'a who govern its **selatu**, or provinces. A decree from the throne still needs a provincial governor to act and a clerk to enter what was done. A traveler with a petition may have to win over all three.

The priesthood is the other power, and on a bad century the greater one. A major temple holds land, lends money, teaches scribes, hears disputes, and employs the people who keep it running. Its high priest speaks to the throne as something between a subject and a rival. The throne needs the temples to affirm its divinity; the temples need the throne to confirm their land. A party carrying news between them can find that both sides want the message delivered differently.

```sql
SELECT address.slug AS _ref,
       name.full AS "Body",
       data.governance.model AS "Government"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'governmental'
  AND file.folder LIKE 'Affiliations/Organizations/Khelathu%'
ORDER BY name.full COLLATE NOCASE
```

:::secret
**For the GM:** A Halzi'a can stall a decree for a season by sending it back to be witnessed and entered properly. A temple can misplace a record. The throne can appoint an auditor. Each move can draw a party into a dispute where everyone invokes the law and nobody agrees on what should happen next.
:::

## The Two Ledgers

A Khelâthi keeps two accounts, and only one of them can be written. Understanding the difference gives a visitor a way into nearly every temple, household, and quarrel in the valley.

The first is the temple account: contracts, leases, debts, and other undertakings a witness saw and a scribe entered. A temple holds them and reads them back for a fee. The second holds what a person owes a parent, a teacher, or the house that raised them. No witness entered those duties; the gods keep them regardless.

An unwritten promise opens no entry for a court to hear, but it still matters to the people involved and to the gods. A written one belongs in the archive. If your character needs an answer, the difference tells you whether to seek a scribe, a priest, or the person you made the promise to.

The rule is distance. Kin and neighbors can hold one another to a promise through the relationship itself; putting it in writing can be an insult. **Strangers** need a witness and an entry. The temple holds their word, which makes its archive as important to daily life as its shrine.

An entry **opens** when a promise is witnessed and written down. It **closes** when the outcome is witnessed and entered. An open entry can follow its maker for years; a character asked to close one has a reason to cross the empire.

> At the archive, you and the merchant agree on the terms a scribe enters. You can carry the cargo to its destination, agree to other terms, or ask the merchant to release you. Whichever path you choose, you will want a witness there when the account is closed.

An entry closes by **performance**, **settlement** on other agreed terms, **release** by the person owed, or **assumption** by someone else. A shipwrecked merchant who cannot deliver a cargo might settle with the buyer or find someone to take up the debt. Either choice can send a party after a missing shipment, a reluctant creditor, or a willing heir. The [[lore-khelathiclt|culture note]] explains which promises another person may assume.

Two consequences matter at the table. **A person owed a release may refuse it**, even at a dying person's bedside, and a feud can outlast both parties. At the judgement after death, the heart is weighed against a feather: falsehood, cruelty, theft, and cowardice matter, and wealth buys no verdict. The [[lore-khelathiclt|culture note]] follows these obligations through the deathbed, the burial, and the lives of those left behind.

## The Gods

The [[affiliation-khelathpnthn|Khelâthi Pantheon]] is large enough to meet a traveler at every turn. Its gods hold domains such as order, knowledge, creation, storms, decay, and voyages; each selat honors a patron of its own as well. A visitor can learn the great gods in an evening, then spend a journey discovering what a river village asks of its patron that the capital does not.

Household offerings and crowded festivals make worship visible throughout the year. In the major temples, a high priest leads the ordained priests who perform the rites and keep the accounts, while acolytes learn in the temple school. Those schools train the scribes and scholars a party may need as often as it needs a priest.

The gods are also where the doctrine bites. They witness promises and weigh a person's heart after death; no offering erases an open entry. A god is asked to be present when it closes.

## Lekhau

Khelâthi magic is priestly, and the line between priest and mage barely exists. Sacred power is trained in temple schools, licensed by temple authority, and practised as an extension of liturgy rather than as a separate craft; [[lore-khelunulekha|Khelunu Lekhau]] is the tradition and the houses that keep it. The [[affiliation-ordoarcanis|Ordo Arcanis]] has no presence in the empire and no prospect of one, and its factors are received with the courtesy owed to a foreign scholar who has misunderstood something fundamental.

:::secret
**For the GM:** The stranger rule is what makes organised crime here unlike organised crime anywhere else. A criminal family is nobody's doctrinal business — its obligations are held by kinship, as everyone's are. A body that takes in strangers and writes down what they owe is doing the one thing temples exist to do, and the priesthood answers that as heresy rather than theft. So growth is what condemns a syndicate, not violence or money, and its serious enemy is a priest rather than a magistrate. A party can be hired by either.
:::

:::secret
**For the GM:** Because power is licensed, the interesting practitioners are the unlicensed ones, and the interesting crime is not casting but _entering_ — a rite performed without attestation, a working done for someone whose name is not in the record. A party that wants magical help outside the temples is buying from people whose whole risk is documentary.
:::

## The Valley and Its Cities

Choose [[place-galezkara|Galezkara]] if you want to work in the shadow of the throne, the great temples, and the central archives. Across the water stands [[place-zugezer|Zu-Gezer]], the royal necropolis. Choose [[place-amqelmiglet|Amqel-Miglet]] if you want a delta port where foreigners, money, and unfamiliar papers arrive together. Upriver, old temple-cities guard records and privileges older than the reigning dynasty. On the southern and eastern frontiers, soldiers govern provinces where a journey can turn into a military assignment.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder LIKE 'Regions/Xerathia/%/Khelathu%'
  AND data.population >= 20000
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

The provinces are grouped four ways, and the grouping is most of what a traveller needs: the [[affiliation-deltaselatu|Delta Selatu]] are rich and cosmopolitan, the [[affiliation-upperrivrslt|Upper River Selatu]] are the grain and the old religion, the [[affiliation-borderselatu|Border Selatu]] are a military frontier, and the [[affiliation-capitalselat|Capital Selat]] is a province-sized city that thinks it is the empire.

The empire strikes no round coin. Its temples attest pieces of copper, silver and gold in gezan and qelu weights; familiar sealed pieces pass at face value, while unfamiliar metal is weighed and assayed. Copper spends for the temple's attested value, more than the bronze itself would fetch. The metal chosen for a payment also speaks: copper suits a market purchase, silver a substantial bargain, and gold a major exchange or offering. Large sums travel through the [[affiliation-garhalzi|Gár-Hálzi]] temple treasuries. The [[lore-aukhlthcrncy|currency note]] gives the weights and exchange rates.

## Playing a Khelâthi

A house holds land, ancestors, and responsibility for the people attached to it. Most Khelâthi have no house name to claim; they give a personal name with a village or trade instead. A character's place in a house, temple, guild, or estate offers shelter and work, and may determine who answers for them when a promise goes wrong.

A name is bestowed by a priest and is a sacred utterance, not a label. Many people carry a second name known only to themselves and the priesthood, held to confer protection — and striking a name from the record is among the heaviest punishments the empire knows. A house name is a legal claim to land, a shrine or a descent, and wearing one you have no claim to is fraud that the courts will hear.

Titles precede the personal name, always: Halzi'a Lersaîs, never Lersaîs Halzi'a. The ladder of rank is short enough to learn in a morning, and reversing the order is the commonest mistake in a foreigner's Khelâthi.

The question a Khelâthi asks about a literate stranger is never whether he can write but **which hand he was taught**. There are two: the sacred hand of [[skill-khelthzscrpt|the temple and the tomb]], and the people's hand of [[skill-qalzscrscrpt|the counting-house and the tax roll]]. A scribe trained in one may not read the other, and the answer places a man at once as temple or trade. Neither hand writes vowels, which is why foreign scholars never quite agree on how a Khelâthi name is spelled.

The scribal school is the one reliable ladder out of the class you were born in, and every family in the valley knows it. A boy admitted at seven studies sacred texts, ritual, history, mathematics and medicine for years, and comes out belonging to the institution that actually runs the country. Military service raises a family over two or three generations; commerce takes longer. Most farmers' sons are farmers.

Khelâthi women own property in their own names, initiate divorce, plead in court and practise medicine — a legal standing considerably wider than western Ankaris allows. The doctrine underneath it belongs to [[affiliation-uznera|Uznêra]], whose faith holds that creation requires a balanced partnership of masculine and feminine principles — a theology with direct legal consequences.

A character might be a temple-trained scribe whose skill opens an archive, a boat pilot who knows which channels remain passable in the flood, a physician called to a deathbed, or a trader carrying a sealed letter between cities. Each has a reason to travel and people who expect them home.

## Bodies to Belong To

Institutions announce themselves in their names, and the opening word tells you what kind of thing you are dealing with before you know anything else. A guild opens on _Lin'_, a temple or estate on _Lut-_, a house or office on _Gar-_, an order of a god's servants on _Lem'_, a council or court on _Genzet'_, and a company that goes out on _Zeghet'_. The genitive is _elu_: [[affiliation-linzethkhlth|Lin'Zethu elu Aû'Khelâthu]] is the scribes' guild of the empire, and the smiths of the capital are a different body from the smiths of the empire, with their own masters and their own quarrel.

A character almost certainly belongs to one of these, and the tie is the most useful thing on the sheet: it supplies patrons, obligations, somewhere to sleep in a strange city, and someone with a claim on you.

```sql
SELECT address.slug AS _ref,
       name.full AS "Guild or order",
       subType AS "Kind"
FROM notes
WHERE type = 'affiliation'
  AND subType IN ('guild', 'order')
  AND (name.full LIKE 'Lin''%' OR name.full LIKE 'Lem''%')
ORDER BY name.full COLLATE NOCASE
```

The houses and lineages hold claims that can follow a character into court, trade, or a temple archive:

```sql
SELECT address.slug AS _ref,
       name.full AS "House or lineage"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'lineage'
  AND file.folder LIKE 'Affiliations/Organizations/Khelathu%'
ORDER BY name.full COLLATE NOCASE
```

## People to Meet

An auditor can read a record, a caravan guard can get a party across a frontier, and a craftsperson can tell when a repair conceals more than damage. Meet Khelâthi people whose work brings them into the empire's disputes:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-khelathiclt'
  AND COALESCE(list_contains(TRY_CAST(tags AS VARCHAR[]), 'character'), false)
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Ways In

A party can arrive by sea into the delta, by caravan from [[affiliation-mtrrchybth|Bethûa]] or [[affiliation-cnfdrtnhrdnstts|Harad]], or by riverboat with the cargo. Start where the journey meets a claim: a boat cannot pass until its manifest is produced, a survey crew needs a witness, or a household asks a stranger to carry word upriver. At the first temple, market or toll post, three questions place a character in the empire: **What is entered against your name? Which hand were you taught? Whose house speaks for you?**

Campaigns here start well from an open entry. Someone died with something unclosed and the party is asked, hired or compelled to close it. A house claims a name it cannot prove. An archive burns and half a province's obligations become arguable. A foreign patron wants something done that cannot be entered, and finding a way to do it undocumented is the job.

:::secret
**For the GM:** The sharpest tool this setting hands you is that the record is both authoritative and physical. It can be read, bought, forged, lost, burned, or simply not produced on the day. A party that understands this starts asking what the archive says happened — and the moment they do, every scribe, priest and clerk in the valley becomes a player rather than scenery.

The second tool is release. A person owed an undertaking can refuse to release it, for free, forever. A dying enemy who will not release your patron is a more durable problem than a living one.
:::

## Where to Read Next

Begin with the river, a city, and a claim on the party. Follow the questions that arise into the wider setting:

- [[affiliation-empireakhlth|The Empire]] for the state, its history, its provinces, its army and its foreign relations
- [[lore-khelathiclt|The culture]] for the doctrine of attestation worked through — the ledgers, the closures, the weighing, and what happens to the widow and the orphan
- [[affiliation-khelathpnthn|The pantheon]] for the gods, their domains and their temples
- [[place-zumeleshrvr|The river]], [[place-aukhelathrgq|the region]] and the four classes of province for the geography
- [[skill-khelthlnglng|The language]] for names, the two hands, and how to coin one that fits
- [[lore-aukhlthcrncy|Money]], [[lore-khelathclndr|the calendar]] and [[lore-khelunulekha|the sacred power]] for the systems a campaign touches most
