---
name:
  full: Vedyara Adventurer's Guide
  aliases: []
shortcode: vedyaraadventurersguide
type: doc
subType: concept
tags: []
description: A player and GM introduction to Vedyara's lands, peoples, institutions, faiths, and ways into adventure.
packFolder: adventurersguides
---

Vedyara is a subcontinent whose people share a language, a body of learning, and a religious calendar, but have never shared a throne. Its great rivers support thousands of temple-centered village communities. Kings guard the northern passes and the dry western march; merchant houses shape the port cities; priests convene assemblies that can settle a water dispute without ruling a kingdom. The [[place-vedyarargn|region]] is vast enough that a traveler can leave a snow-fed fortress, cross crowded rice country, and reach a monsoon harbor without leaving the Vedyari world.

The first thing to understand is that **Vedyara is a civilization, not a state**. Its polities disagree over roads, land, taxes, and rites. They can still recognize one another's temples, social stations, contracts, and classical learning. A visitor who asks “Who rules Vedyara?” gets no single name. A visitor who asks where to find a temple, a market, or a household willing to feed a traveler can get an answer almost anywhere.

## A Map in Words

The [[place-graznmntns|Grazian Mountains]] form a wall along the north. Their passes connect Vedyara to the [[place-khzryndsrtrgn|Khazryn]] and [[place-tanvuregin|Tānvür]]; the road around their western end reaches [[place-dunharargn|Dunhara]] without climbing a pass. Four great river systems and their tributaries carry much of the inland population. The monsoon sets both planting and pilgrimage seasons. The eastern and southern coasts take heavy rain and seaborne trade; the shorter western coast is dry.

| Part of Vedyara                                       | What makes it different                                                                                                     |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [[place-vindhyalayaland\|The northern passes]]        | Fortresses, caravan tolls, mountain farms, and guides who know the crossings.                                               |
| [[place-bhumipalaland\|The western march]]            | A dry frontier kingdom facing Dunhara, where the road around the mountains carries bulk trade and armed companies guard it. |
| [[place-rajapurjnpd\|The central river plains]]       | The densest janapada country: villages, irrigated fields, temple assemblies, and pilgrimage routes.                         |
| [[place-chandrapurland\|The Chandramahī delta]]       | Gemworking, cotton and rice fields, shipyards, and the southern sea trade gather around Chandrapur.                         |
| [[place-vyalendraland\|The southern textile country]] | Spinning, dyeing, and weaving connect villages to the looms and merchants of Vyālendra.                                     |
| [[place-vandhyabhumi\|The dry interior plateau]]      | Herds and wells matter more than river valleys; Gomārga controls the routes between them.                                   |
| [[place-bharavavana\|The lower Bhārava forest]]       | Temple estates hold a broad forest country where no janapada assembly sits.                                                 |

These are ways to get one's bearings, not borders between separate peoples. A cloth merchant, pilgrim, soldier, or ascetic can move among them, though each road asks for different help and each polity asks different dues.

## Who Holds Power

Most Vedyari live in a **janapada**: several villages joined around one central temple, governing themselves as a small republic. The land belongs collectively to the janapada through that temple; families hold rights to work particular fields. Its **sabhā** brings together household representatives, guild heads, lineage elders, and usually a senior priest who convenes them. The same temple keeps the land records, irrigation works, granary, school, and court. A janapada is thus a place to live, a government, and a religious community at once. It is not a province of a greater Vedyaran state.

The [[affiliation-janpdsvdyr|Mahā-Sangha]] is the loose association of these janapadas. Delegates meet at markets and pilgrimages, above all the great **Mahā-Mela**, where shared water rights, routes, and disputes can be settled alongside religious observances. The Sangha convenes and persuades; it neither taxes the villages nor governs them between gatherings. A janapada can also seek a neighboring king or city-state's protection while keeping its own assembly and local law.

A **rājya** is a kingdom under a Mahārāja, with a martial council and a priestly court. A **nagara** is a city-state whose merchant and temple houses govern a city and its hinterland, sometimes with a king at their head. A kingdom may protect neighboring janapadas in exchange for grain or service, while their assemblies keep their own affairs. The arrangements vary from valley to valley. A temple republic, a pass kingdom, and a coastal city can share a faith while disagreeing about who may collect a toll.

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

[[place-chandrapur2|Chandrapur]] is the great gemworking city at the mouth of the Chandramahī, where the river trade meets seagoing ships. [[place-vyalendra3|Vyālendra]] is the southern city of looms, drawing cloth from specialized villages. [[place-suryagarha|Sūryāgarha]] guards a northern pass and the caravans that cross it. [[place-sandhyapur|Sandhyāpur]] serves the road to Dunhara. Inland, settlements such as [[place-rajapur|Rājapur]], [[place-dhanurkota|Dhanurkota]], and [[place-suvarnagiri|Suvarnagiri]] matter through their temples and assemblies as much as through their size.

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

Travel follows the seasons and the terrain. River roads and the fertile plains carry grain and pilgrims; mountain crossings need local guides and shrines; the western [[place-marchroad|march road]] moves caravan loads around the end of the wall. At the coast, sailing schedules answer to the monsoon. Cotton, silk, gems, spices, medicines, worked metal, and manuscripts leave Vedyara by these routes. Salt, horses, and goods from beyond the mountains come back. The pass roads make the Khazryn and Tānvür trading partners; the march road connects to Dunhara; sea routes reach southern kingdoms. Vedyari scholars and Tānvüri academies also exchange learning. Many households pay and borrow through the [[lore-vdyrnbnkng|Vedyaran banking system]]: merchant letters move value across borders even when no coin makes the journey.

## Household, Station, and Everyday Life

Vedyara is overwhelmingly human. A Vedyari usually names a **kula**, or lineage, before a trade, and a village before either. The household holds land or use-rights, answers at the assembly, pays its temple share, and carries obligations across generations. A person's **tharana**, or inherited station, shapes rights to land, arms, temple space, and a voice in public affairs. The [[lore-vedyariclt|Vedyari culture]] note lays out the stations and their local variations; the essential point for a newcomer is that a person's station is legible to other Vedyari and can change how even an ordinary meeting proceeds.

The order is strict, and it is not experienced everywhere in the same way. An outcaste can be barred from a village well or court yet travel where nobody asks to see a wrist mark. A merchant ship, a mountain road, and a city offer different room to conceal or contest a station. A bonded servant's debt can be paid; an ascetic can leave an office; reformers argue within the system. These openings matter because the household and its obligations remain the ordinary frame of life for most people.

Daily practice gives the place its rhythm. Temples serve as schools, archives, granaries, and places of worship. A long journey begins with a traveler's cord tied at the household hearth; a guest is fed before being questioned. The monsoon marks the agricultural and ritual year together. Mathematics, astronomy, medicine, and philosophy are respected forms of learning. Poetry, music, dance, weaving, gemcutting, and sculpture can be devotional work as well as livelihood.

## Faith in Daily Life

The [[affiliation-varakpnthn|Varnaka Pantheon]] gives Vedyari life a common religious language. [[affiliation-vyalendra|Vyālendra]] shapes, [[affiliation-mahajaya|Mahájaya]] preserves, and [[affiliation-rasikara|Rásikara]] destroys and renews. Birth, duty, death, and rebirth sit within that cycle. The belief that conduct in one life shapes the next helps explain why station and duty carry such weight, although Vedyari disagree fiercely about how the order should be lived and reformed.

Religion is visible well beyond a shrine. The janapada temple is a school, storehouse, court, and meeting hall; its priest may convene the assembly. Great temples draw pilgrims across political borders. The Mahā-Mela joins worship and inter-janapada business in one gathering. A household petitions [[affiliation-meghanatha|Meghanātha]] as the rains begin, honors [[affiliation-kalavrata|Kālavrata]] at a death, and leaves an offering to the [[affiliation-pavanajitras|Pavanajitras]] at a crossing. A traveler can recognize these customs without knowing every god's rites.

There is a shared pantheon, **not a single uniform church**. The [[affiliation-trimurtisampradaya|Trimūrti-sampradāya]] is the orthodox tradition of many city temples and courts, honoring the three great forms in balance. [[affiliation-agnipantha|Agnī-panthā]] priests travel as ascetic reformers, invited to confront corruption or spiritual trouble and sometimes unwelcome for what they say. Other schools emphasize learning, dreams, a particular god, or the needs of a mountain crossing. An ascetic may leave household office to pursue the divine on the road or in the forest and still be supported by those who remain at home.

## Ritual and Arcane Traditions

Powerful ritual work belongs chiefly to ordained schools, or **sampradāyas**, rather than to an unlicensed individual claiming a god's name. The Council of the Triyācāryas within the [[affiliation-trimurtisampradaya|Trimūrti-sampradāya]] licenses public working. Other traditions have narrower roles: the [[affiliation-ganakashala|Ganaka-shala]] computes calendars, tides, and assays; [[affiliation-passshrineushtakas|Pass-Shrine Ushtakas]] serve dangerous crossings; [[affiliation-thresholdkeepers|Threshold-keepers]] may put one question to a newly dead person before the funeral pyre, under a restricted warrant. Folk magic and herbal practice remain part of ordinary life. Meditation, mantra, calculation, and rite all have a place, but they are not interchangeable practices. The foreign [[affiliation-ordoarcanis|Ordo Arcanis]] has only a licensed factor below Chandrapur; its scholars and Vedyari practitioners approach one another cautiously.

:::secret
**For the GM:** The public year is sighted by priests and computed by the Ganaka-shala. Their answers can differ by a day, moving a festival, a coronation, or a gold weighing. A court's choice of calendar can therefore become a choice of authority. The [[affiliation-chayavrata|Chāya-vrata]] dream-line offers another fault line: its work is condemned, but the bodies that could pursue it do not agree on doing so.
:::

## Beginning an Adventure

A party can come to Vedyara by ship, by a caravan over the northern passes, or by the dry road from Dunhara. A character might belong to a farming household, a merchant house, a craft guild, a temple school, a caravan company, or a lineage of pass guides. Those ties offer help and impose obligations wherever the character travels. At the first temple, market, or toll post, ask three questions: **Who holds this place? Which household or institution speaks for you? Which road or rite brought you here?** The answers connect a character to Vedyara's politics, stations, and faith without requiring anyone to master them all at once.

The detailed [[place-vedyarargn|region]], [[lore-vedyariclt|culture]], [[affiliation-janpdsvdyr|janapadas]], [[affiliation-mrchntclctvvdyr|merchant houses]], [[affiliation-varakpnthn|pantheon]], and [[lore-vdyrnbnkng|banking]] notes are the next stops. This guide is enough to start playing; those notes explain the people and institutions a journey brings into view.
