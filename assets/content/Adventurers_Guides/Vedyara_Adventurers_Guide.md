---
shortcode: vedyaraadventurersguide
name: {full: Vedyara Adventurer's Guide, aliases: []}
type: doc
subType: concept
description: A player and GM introduction to Vedyara's lands, peoples, institutions, faiths, and ways into adventure.
tags: []
data: {packFolder: adventurersguides}
---

> You come through a northern pass with a caravan as the morning light reaches the stone walls below. A shrine stands above the road; beyond it, terraces step down toward a green plain you cannot yet see the end of. Someone calls you over for a meal, and before you have set down your pack, two travelers are arguing their claims to the caravan's toll before a fortress officer. The road south promises warmer air, river towns, and a coast you have only heard described. Which way will you go when the wagons move on?

This is one entrance to [[place-vedyarargn|Vedyara]]. Follow the rivers south and the fortresses give way to rice fields and village assemblies; keep going and the same language carries you into a harbor where gemcutters, sailors, and merchant houses bargain over the next voyage.

**Vedyara is a civilization, not a kingdom.** Its people share temples, learning, and a calendar, but no ruler can speak for them all. A pass king, a village assembly, and a coastal council can each ask something different of a traveler. That gives a party room to choose its friends, its work, and the next road: a dispute settled in one town may be an invitation to trouble in the next.

## Choose a Road

The [[place-graznmntns|Grazian Mountains]] wall off the north. In [[place-vindhyalayaland|Vindhyālaya]], a caravan needs a pass guide and must answer to the fortress that collects the toll; beyond the crossings lie the [[place-khzryndsrtrgn|Khazryn]] and [[place-tanvuregin|Tānvür]]. Around the wall's western end, the [[place-marchroad|march road]] reaches [[place-bhumipalaland|Bhūmipāla]] and [[place-dunharargn|Dunhara]] without a mountain pass. Its wells and armed companies make the question of who may travel together as important as the price of a load.

Follow the rivers into [[place-rajapurjnpd|the central plains]] and a village's water channel can bring several households before a temple assembly. [[place-rajapur|Rājapur]] is a good place to hear how such an assembly can govern without a king. Downriver, [[place-chandrapurland|Chandrapur's country]] turns stone into gems and timber into ships; [[place-vyalendraland|Vyālendra's]] guild houses turn cotton into cloth. A commission, a disputed shipment, or a place in a workshop can carry a party between the two coasts.

Away from the rivers, [[place-vandhyabhumi|Vandhyabhūmi]] follows herds and watering rights across a dry plateau. Its ruined capital still stands beside the routes drovers use. Along [[place-bharavavana|the lower Bhārava]], the pilgrim road enters forest held by temple estates, with no village assembly to speak for those who gather its products. Both places reward travelers who ask whose ground they cross and whose account of it they have heard.

The monsoon changes the journey as much as a border does. It sets planting and pilgrimage seasons, fills the eastern and southern coasts with rain, and determines when ships sail. These roads cross one Vedyari world, but each calls for different guides, patrons, and dues.

## Who Holds Power

When a canal breaks or two families claim the same field, a Vedyari village takes the matter to its **sabhā**. Most Vedyari live in a **janapada**: several villages joined around one central temple, governing themselves as a small republic. The land belongs collectively to the janapada through that temple; families hold rights to work particular fields. Household representatives, guild heads, and lineage elders sit in the sabhā, usually convened by a senior priest. The temple keeps the land records, irrigation works, granary, school, and court. A janapada is a place to live, a government, and a religious community at once.

> Farther south, you ask who can mend a broken water channel. A farmer points you toward the temple hall, where the people who work the fields can argue their claims before the sabhā. The fortress officer's answer at the pass would have been simpler; here, you have to learn whose field needs water first.

The [[affiliation-janpdsvdyr|Mahā-Sangha]] is the loose association of these janapadas. Delegates meet at markets and pilgrimages, above all the great **Mahā-Mela**, where shared water rights, routes, and disputes can be settled alongside religious observances. The Sangha convenes and persuades; it neither taxes the villages nor governs them between gatherings. A janapada can also seek a neighboring king or city-state's protection while keeping its own assembly and local law.

A **rājya** is a kingdom under a Mahārāja, with a martial council and a priestly court. A **nagara** is a city-state whose merchant and temple houses govern a city and its hinterland, sometimes with a king at their head. A kingdom may protect neighboring janapadas in exchange for grain or service, while their assemblies keep their own affairs. A traveler carrying the king's warrant still needs to know what the local sabhā has agreed to. That gap between authorities is a place for envoys, guards, advocates, and anyone who can earn the trust of both sides.

```sql
SELECT address.slug AS _ref,
       name.full AS "Polity",
       data.governance.model AS "Government"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND file.folder = 'Regions/Ankaris/Vedyara'
ORDER BY data.governance.model, name.full COLLATE NOCASE
```

The merchant houses provide another sort of power. The [[affiliation-mrchntclctvvdyr|Merchant Collective]] maintains trade standards, credit, and roads across the separate polities that signed its Compact. Their [[affiliation-assmblycmpct|Assembly]] governs the agreement, not Vedyara. The temple republic of [[affiliation-suvrgrjnpd|Suvarnagiri]] keeps its gold weighing and lending under its own constitution rather than accepting a Compact seat. Its metal reaches the coast nonetheless.

:::secret
**For the GM:** A dispute over Suvarnagiri's gold can put a temple assembly, Collective factors, and neighboring rulers at the same table. None can simply order the others to yield. The Compact's rules and Suvarnagiri's constitution give each side a reason to stand firm.
:::

## Cities, Towns, and Roads

If you want a harbor campaign, begin in [[place-chandrapur2|Chandrapur]], where the Chandramahī delivers gems to workshops and finished work to seagoing ships. For guild rivalries and the cloth trade, go to [[place-vyalendra3|Vyālendra]], the southern city of looms. [[place-suryagarha|Sūryāgarha]] puts a party at a northern pass beneath a fortress's eye; [[place-sandhyapur|Sandhyāpur]] puts it on the dry road to Dunhara. Inland, [[place-rajapur|Rājapur]], [[place-dhanurkota|Dhanurkota]], and [[place-suvarnagiri|Suvarnagiri]] offer temple halls where a decision can matter farther than a city's walls.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder = 'Regions/Ankaris/Vedyara'
  AND data.population >= 1500
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

You can cross Vedyara by riverboat with pilgrims, climb toward a pass shrine with a local guide, or join a caravan on the western [[place-marchroad|march road]]. At the coast, the monsoon decides when your ship can sail. Cotton, silk, gems, spices, medicines, worked metal, and manuscripts leave by these routes; salt, horses, and goods from beyond the mountains come back. The pass roads make the Khazryn and Tānvür trading partners; the march road connects to Dunhara; sea routes reach southern kingdoms. Vedyari scholars and Tānvüri academies exchange learning as well. A merchant letter can carry a household's payment across borders without a chest of coin; the [[lore-vdyrnbnkng|Vedyaran banking system]] explains who honors it, and why losing one matters.

## Household, Station, and Everyday Life

Vedyara is overwhelmingly human. At an introduction, a Vedyari usually gives a village, then a **kula**, or lineage, before naming a trade. The household holds land or use-rights, answers at the assembly, pays its temple share, and carries obligations across generations. A person's **tharana**, or inherited station, shapes rights to land, arms, temple space, and a voice in public affairs. Two marks on the inside of the wrist identify station and lineage. At a temple gate or an assembly, someone may read those marks before hearing a name. The [[lore-vedyariclt|Vedyari culture]] note explains the stations and what that encounter can mean.

The order is strict, and it is not experienced everywhere in the same way. An outcaste can be barred from a village well or court yet travel where nobody asks to see a wrist mark. A merchant ship, a mountain road, and a city offer different room to conceal or contest a station. A bonded servant's debt can be paid; an ascetic can leave an office; reformers argue within the system. These openings matter because the household and its obligations remain the ordinary frame of life for most people.

Daily practice gives the place its rhythm. Temples serve as schools, archives, granaries, and places of worship. A long journey begins with a traveler's cord tied at the household hearth; a guest is fed before being questioned. The monsoon marks the agricultural and ritual year together. Mathematics, astronomy, medicine, and philosophy are respected forms of learning. Poetry, music, dance, weaving, gemcutting, and sculpture can be devotional work as well as livelihood. A scholar, performer, or craftsperson has reasons to travel here as strong as any soldier's.

## Faith in Daily Life

The [[affiliation-varakpnthn|Varnaka Pantheon]] gives Vedyari life a common religious language. [[affiliation-vyalendra|Vyālendra]] shapes, [[affiliation-mahajaya|Mahájaya]] preserves, and [[affiliation-rasikara|Rásikara]] destroys and renews. Birth, duty, death, and rebirth sit within that cycle. The belief that conduct in one life shapes the next helps explain why station and duty carry such weight, although Vedyari disagree fiercely about how the order should be lived and reformed.

Religion is visible well beyond a shrine. The janapada temple is a school, storehouse, court, and meeting hall; its priest may convene the assembly. Great temples draw pilgrims across political borders. The Mahā-Mela joins worship and inter-janapada business in one gathering. A household petitions [[affiliation-meghanatha|Meghanātha]] as the rains begin, honors [[affiliation-kalavrata|Kālavrata]] at a death, and leaves an offering to the [[affiliation-pavanajitras|Pavanajitras]] at a crossing. A traveler can recognize these customs without knowing every god's rites.

Vedyari share a pantheon, but its schools give a traveler different doors to knock on. The [[affiliation-trimurtisampradaya|Trimūrti-sampradāya]] keeps the orthodox rites of many city temples and courts, honoring the three great forms in balance. [[affiliation-agnipantha|Agnī-panthā]] priests travel as ascetic reformers, invited to confront corruption or spiritual trouble and sometimes unwelcome for what they say. Other schools attend to learning, dreams, a particular god, or the dangers of a mountain crossing. An ascetic may leave household office to pursue the divine on the road or in the forest and still be supported by those who remain at home.

## Ritual and Arcane Traditions

Powerful ritual work belongs chiefly to ordained schools, or **sampradāyas**, rather than to an unlicensed individual claiming a god's name. The Council of the Triyācāryas within the [[affiliation-trimurtisampradaya|Trimūrti-sampradāya]] licenses public working. Other traditions have narrower roles: the [[affiliation-ganakashala|Ganaka-shala]] computes calendars, tides, and assays; [[affiliation-passshrineushtakas|Pass-Shrine Ushtakas]] serve dangerous crossings; [[affiliation-thresholdkeepers|Threshold-keepers]] may put one question to a newly dead person before the funeral pyre, under a restricted warrant. Folk magic and herbal practice remain part of ordinary life. Meditation, mantra, calculation, and rite all have a place, but they are not interchangeable practices. The foreign [[affiliation-ordoarcanis|Ordo Arcanis]] has only a licensed factor below Chandrapur; its scholars and Vedyari practitioners approach one another cautiously.

:::secret
**For the GM:** The public year is sighted by priests and computed by the Ganaka-shala. Their answers can differ by a day, moving a festival, a coronation, or a gold weighing. A court's choice of calendar can therefore become a choice of authority. The [[affiliation-chayavrata|Chāya-vrata]] dream-line offers another fault line: its work is condemned, but the bodies that could pursue it do not agree on doing so.
:::

## People to Meet

The traveler who feeds you, the clerk who knows a lineage, and the guide who can cross the wall all have lives beyond a party's errand. These Vedyari characters offer places to begin a friendship, a debt, or a dispute:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-vedyariclt'
  AND COALESCE(list_contains(TRY_CAST(tags AS VARCHAR[]), 'character'), false)
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Beginning an Adventure

A party can arrive by ship, over the northern passes, or by the dry road from Dunhara. One character might be a temple student carrying a disputed calendar, another a guide owed payment by a caravan, and another a weaver sent to find out why a shipment never reached port. A local character might belong to a farming household, a merchant house, a craft guild, or an ascetic's following. Each tie offers help and asks something in return.

Start with a place and a claim on the party: a household wants its water restored; a patron needs a road kept open; a pilgrim cannot find the person meant to meet them. At the first temple, market, or toll post, ask three questions: **Who holds this place? Which household or institution speaks for you? Which road or rite brought you here?** The answers give the party allies, obligations, and somewhere to go next.

Choose the road that catches your interest and begin there. The [[place-vedyarargn|region]] and [[lore-vedyariclt|culture]] notes take you farther into the land and its people; the [[affiliation-janpdsvdyr|janapadas]], [[affiliation-mrchntclctvvdyr|merchant houses]], [[affiliation-varakpnthn|pantheon]], and [[lore-vdyrnbnkng|banking]] notes are ready when the party meets them.
