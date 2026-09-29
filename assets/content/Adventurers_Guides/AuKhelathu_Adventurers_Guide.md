---
shortcode: khelathuadvguide
name: {full: Aû'Khelâthu Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to the river empire of Aû'Khelâthu—its flood, its writing, its gods, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides}
---

[[place-zumeleshrvr|A river]] runs north through a desert for a thousand miles and makes a country. Once a year it rises, drowns the fields, and goes down again leaving black silt on them, and everything the [[lore-khelathiclt|Khelâthi]] have built stands on that one fact. Their calendar counts the water. Their gods are argued about in terms of it. Their surveyors re-walk the fields every spring because the flood has taken the boundary stones away again, and the scribes who record what the surveyors find are the most powerful commoners in the world.

The [[affiliation-empireakhlth|Empire of Aû'Khelâthu]] is old in a way no other realm is old. It has been conquered — by hill-nomads, by sea-raiders, by a Vylarian occupation at the height of Vylaria's reach — and each time it has done the same thing, which is to hand the conqueror a scribe, a temple appointment and a throne name, and wait. Two generations later the conquerors are Khelâthi. Nineteen million people live in the valley and the delta, and they do not think of themselves as having survived history so much as having outlasted it.

**The one thing to understand before anything else: in Aû'Khelâthu, what is written is what is real.** An act nobody witnessed and no scribe entered did not happen — not as a legal fiction, but as the plain sense of the world. An obligation you incur but don't settle counts against you, both civilly and in the afterlife. This is not a setting where documents are a complication on the way to the adventure. The document _is_ the adventure, and the archive is a dungeon with a clerk at the door.

## The Flood and the Year

The year runs in three seasons of four months, each named for what the water is doing, beginning with the inundation. A farmer reckons everything by that cycle; tax rolls and contracts carry the regnal year of the reigning [[lore-garauu|Gar-Aû]], and temple chronicles count from a beginning so far back that the counting itself is an argument. The full reckoning is in [[lore-khelathclndr|the Khelâthi calendar]].

For a party, the flood is a clock you cannot argue with. During the inundation the fields are underwater and the labour goes elsewhere — to the monuments, to the canals, to whatever the state wants doing while a few million farmers have nothing else to do. Travel is by boat or not at all. When the water goes down, the surveyors come out, and so do the disputes: every year the valley re-litigates who owns what, on the evidence of records held in temples by people with their own interests. A campaign that begins in the wrong week begins in the middle of that.

## Who Holds Power

The Gar-Aû is divine, and this is understood by everyone including the Gar-Aû to be a working arrangement rather than a fact. Behind the divine theatre is a bureaucracy of real competence: thirty-nine provinces, the selatu, each under a hereditary Halzi'a who answers to the throne and governs with a free hand in practice, all of it run day to day by a scribal class that outlasts every dynasty it serves.

The priesthood is the other power, and on a bad century the greater one. A major temple is not a church; it is a landholder, a bank, a school, a court and an employer, and its high priest speaks to the throne as something between a subject and a rival. The throne needs the temples to say it is divine. The temples need the throne to confirm their land. Neither can finish the other, which is the whole of Khelâthi high politics.

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
**For the GM:** The useful tension is that nobody in this system can simply give an order and have it obeyed. A Halzi'a can stall a decree for a season by sending it back to be witnessed and entered properly. A temple can misplace a record. The throne can appoint an auditor. Every one of those moves is legal, which means a party can be hired to make one of them happen without anyone breaking a law — and can be destroyed by one without anyone committing a crime.
:::

## The Two Ledgers

A Khelâthi keeps two accounts and only one of them can be written.

The first is the temple account: contracts, leases, debts, offices, betrothals, apprenticeships, a vow to keep a well, an agreement to foster a child. Everything a witness saw and a scribe entered, held in a temple, readable back to you for a fee. The second has no name a scribe could use and everyone understands it anyway — what a son owes his mother, what a man owes the master who taught him thirty years ago. No witness was present and nothing was written, and the gods keep it regardless.

So a promise made privately opens no entry. No court will hear it and there is nothing in the archive to close — and it is not thereby escaped, because the second account is the one the gods are keeping. Attest the written and petition the unwritten: asking a god to set aside a contract is impiety, and asking a god whether you have failed your father is the whole of religion.

The vocabulary is a clerk's and it is used literally. An entry is **opened** when a promise is witnessed and written down, and **closed** when the outcome is witnessed and written down. One side written and the other still blank means the entry is open, and an open entry is the thing a Khelâthi fears.

An entry closes four ways, and only one of them is doing what you promised. You may **perform** it, **settle** it by giving something else the other party accepts, be **released** from it, or have **another take it up** in your place. A man ruined by a shipwreck who agrees terms with his creditor has closed cleanly and performed nothing, and no shame attaches. What cannot be done is leave an entry open, with nobody able to say what became of it.

Two consequences matter at the table. **Anyone may refuse to release a dying man**, at no cost to themselves and entirely within their rights — which is the most frightening power an ordinary person holds, and the seed of a hundred quiet feuds. And the judgement after death — the weighing, in which the dead stand before the gods and are assessed against the truth — counts the proportion settled rather than the number: a farmer with twelve settled undertakings passes as surely as a lord with four hundred, and the priests say so to frightened people because it is true. [[lore-khelathiclt|The culture note]] works the doctrine through in full.

## The Gods

The [[affiliation-khelathpnthn|Khelâthi Pantheon]] is large, ancient and genuinely believed. The gods hold domains a visitor can learn in an evening — order, knowledge, creation, storms, decay, voyages — and every selat keeps a patron of its own beneath that, so the theology of the capital and the practice of a river village are recognisably the same religion and not at all the same experience.

Worship is not weekly attendance. It is offerings at a household shrine, a festival calendar dense enough that some part of the valley is always celebrating something, and a professional priesthood doing the actual liturgy on everyone's behalf. Three ranks run every major temple: the high priest, the ordained body who conduct the rites and keep the accounts, and the acolytes who entered the temple school as children and are being made into the empire's educated class whether or not they stay.

The gods are also where the doctrine bites. They witness; they do not judge in the sense a foreigner expects. A god is not asked to forgive an open entry — a god is asked to be present when it closes.

## Lekhau

Khelâthi magic is priestly, and the line between priest and mage barely exists. Sacred power is trained in temple schools, licensed by temple authority, and practised as an extension of liturgy rather than as a separate craft; [[lore-khelunulekha|Khelunu Lekhau]] is the tradition and the houses that keep it. The [[affiliation-ordoarcanis|Ordo Arcanis]] has no presence in the empire and no prospect of one, and its factors are received with the courtesy owed to a foreign scholar who has misunderstood something fundamental.

:::secret
**For the GM:** Because power is licensed, the interesting practitioners are the unlicensed ones, and the interesting crime is not casting but _entering_ — a rite performed without attestation, a working done for someone whose name is not in the record. A party that wants magical help outside the temples is buying from people whose whole risk is documentary.
:::

## The Valley and Its Cities

[[place-galezkara|Galezkara]] is the imperial city, and the largest thing most Khelâthi will ever see: the throne, the great temples, the central archives, and across the water the royal necropolis of [[place-zugezer|Zu-Gezer]]. The delta holds the money and the foreigners — [[place-amqelmiglet|Amqel-Miglet]] is where Khelâthi civilisation meets everyone else, and where a party with no papers can most easily be somebody. Upriver are the old temple-cities, older than the dynasty and quite aware of it. The southern and eastern frontier provinces are governed by soldiers and feel it.

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

Money is weighed rather than counted. The empire strikes no round coin; it issues temple-attested pieces of copper, silver and gold in gezan and qelu, and the gold and silver are worth their metal anywhere. Copper is worth what the temple seal says instead, which is more than the metal — melting one down returns less than half its face, which is exactly why small change stays in circulation. Banking runs through the [[affiliation-garhalzi|Gár-Hálzi]]; the details are in [[lore-aukhlthcrncy|the currency note]].

## Playing a Khelâthi

A name is bestowed by a priest and is a sacred utterance, not a label. Many people carry a second name known only to themselves and the priesthood, held to confer protection — and striking a name from the record is among the heaviest punishments the empire knows. A house name is a legal claim to land, a shrine or a descent, and wearing one you have no claim to is fraud that the courts will hear.

Titles precede the personal name, always: Halzi'a Lersaîs, never Lersaîs Halzi'a. The ladder of rank is short enough to learn in a morning, and reversing the order is the commonest mistake in a foreigner's Khelâthi.

The question a Khelâthi asks about a literate stranger is never whether he can write but **which hand he was taught**. There are two: the sacred hand of [[skill-khelthzscrpt|the temple and the tomb]], and the people's hand of [[skill-qalzscrscrpt|the counting-house and the tax roll]]. A scribe trained in one may not read the other, and the answer places a man at once as temple or trade. Neither hand writes vowels, which is why foreign scholars never quite agree on how a Khelâthi name is spelled.

The scribal school is the one reliable ladder out of the class you were born in, and every family in the valley knows it. A boy admitted at seven studies sacred texts, ritual, history, mathematics and medicine for years, and comes out belonging to the institution that actually runs the country. Military service raises a family over two or three generations; commerce takes longer. Most farmers' sons are farmers.

Khelâthi women own property in their own names, initiate divorce, plead in court and practise medicine — a legal standing considerably wider than western Ankaris allows. The doctrine underneath it belongs to [[affiliation-uznera|Uznêra]], whose faith holds that creation requires a balanced partnership of masculine and feminine principles — a theology with direct legal consequences.

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

## Ways In

A party arrives by sea into the delta, by caravan from [[affiliation-mtrrchybth|Bethûa]] or [[affiliation-cnfdrtnhrdnstts|Harad]], or up the river from the coast with the cargo. At the first temple, market or toll post, three questions place a character in the empire without anyone needing to learn it all at once: **What is entered against your name? Which hand were you taught? Whose house speaks for you?**

Campaigns here start well from an open entry. Someone died with something unclosed and the party is asked, hired or compelled to close it. A house claims a name it cannot prove. An archive burns and half a province's obligations become arguable. A foreign patron wants something done that cannot be entered, and finding a way to do it undocumented is the job.

:::secret
**For the GM:** The sharpest tool this setting hands you is that the record is both authoritative and physical. It can be read, bought, forged, lost, burned, or simply not produced on the day. A party that understands this stops trying to win fights and starts trying to control what the archive says happened — and the moment they do, every scribe, priest and clerk in the valley becomes a player rather than scenery.

The second tool is release. Any NPC can refuse it, for free, forever. A dying enemy who will not release your patron is a more durable problem than a living one.
:::

## Where to Read Next

This guide is enough to start playing. The corpus behind it goes deeper in roughly this order:

- [[affiliation-empireakhlth|The Empire]] for the state, its history, its provinces, its army and its foreign relations
- [[lore-khelathiclt|The culture]] for the doctrine of attestation worked through — the ledgers, the closures, the weighing, and what happens to the widow and the orphan
- [[affiliation-khelathpnthn|The pantheon]] for the gods, their domains and their temples
- [[place-zumeleshrvr|The river]], [[place-aukhelathrgq|the region]] and the four classes of province for the geography
- [[skill-khelthlnglng|The language]] for names, the two hands, and how to coin one that fits
- [[lore-aukhlthcrncy|Money]], [[lore-khelathclndr|the calendar]] and [[lore-khelunulekha|the sacred power]] for the systems a campaign touches most
