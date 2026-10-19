---
shortcode: vedyaraadventurersguide
name: {full: Vedyara Adventurer's Guide, aliases: []}
type: doc
subType: settingguide
description: A player and GM introduction to Vedyara's lands, peoples, institutions, faiths, and ways into adventure.
tags: []
data: {packFolder: adventurersguides, culture: vedyariclt}
---

> At first light, the air in the northern pass stings your nose. Pine smoke curls above a shrine built low into the rock: a walled court and a hall where travelers crowd in from the cold. Below, the stone walls of [[place-suryagarha|Suryagarha]] close across the gorge. Beyond them, rice terraces catch the sun one green step at a time.
>
> In the caravan yard, yaks kneel beside lowland horses while carters call for rope and smiths strike iron. The air smells of wet wool, charcoal, and hot grain. A dark-skinned trader in indigo cotton counts bales while a porter in a russet wool cloak calls for room. A woman with warm brown skin, a black braid, and a saffron shawl brings you a steaming bowl. "Welcome to Suryagarha. I am [Chandira]{.name data-type="being/npc"} of this city, of the [Antarsena]{.name data-type="affiliation/lineage"} kulpa—my lineage. I keep the guest kitchen. Eat first; tell me what brings you here afterward." Only then do you hear that a customs clerk holds your caravan's pass-token while two merchants dispute the weight of a load. Your employer asks you to find the shrine's crossing register before the clerk sets the date. The road south is opening; will you be on it?

This is one entrance to [[place-vedyarargn|Vedyara]]. Follow the rivers south and the fortresses give way to rice fields and village assemblies; keep going and the same language carries you into a harbor where gemcutters, sailors, and merchant houses bargain over the next voyage.

**Vedyara is a civilization, not a kingdom.** Its people share temples, learning, and a calendar, but no ruler can speak for them all. A pass king, a village assembly, and a coastal council can each ask something different of a traveler. That gives a party room to choose its friends, its work, and the next road: a dispute settled in one town may be an invitation to trouble in the next.

## Choose a Road

[[place-graznmntns|The Grazian Mountains]] wall off the north. In [[place-shikhalayaland|Shikhalaya]], a caravan needs a pass guide and must answer to the fortress that collects the toll; beyond the crossings lie the [[place-khzryndsrtrgn|Khazryn Desert Region]] and the [[place-tantsouregin|Tantsou Region]]. Around the wall's western end, [[place-marchroad|the March Road]] reaches [[place-bhumipalland|Bhumipal Land]] and the [[place-dunharargn|Dunhara Region]] without a mountain pass. Its wells and armed companies make the question of who may travel together as important as the price of a load.

Follow the rivers into the [[place-rajepurjnpd|central plains]] and a village's water channel can bring several households before a temple assembly. [[place-rajepur|Rajepur]] is a good place to hear how such an assembly can govern without a king. Downriver, [[place-chendrapurland|Chendrapur's country]] turns stone into gems and timber into ships; [[place-vyalendraland|Vyalendra Land]]'s shrena houses turn cotton into cloth. A commission, a disputed shipment, or a place in a workshop can carry a party between the two coasts.

Away from the rivers, [[place-vandyabhumi|Vandyabhumi]] follows herds and watering rights across a dry plateau. Its ruined capital still stands beside the routes drovers use. Along the lower course of [[place-bharavarivr|the Bharava]], the pilgrim road enters [[place-bharavaban|Bharavaban]], forest held by temple estates, with no village assembly to speak for those who gather its products. Both places reward travelers who ask whose ground they cross and whose account of it they have heard.

The monsoon changes the journey as much as a border does. It sets planting and pilgrimage seasons, fills the eastern and southern coasts with rain, and determines when ships sail. These roads cross one Vedyari world, but each calls for different guides, patrons, and dues.

## Who Holds Power

When a canal breaks or two families claim the same field, a Vedyari village takes the matter to its **sabhra**. Most Vedyari live in a **janpoda**: several villages joined around one central temple, governing themselves as a small republic. The land belongs collectively to the janpoda through that temple; families hold rights to work particular fields. Household representatives, shrena heads, and lineage elders sit in the sabhra, usually convened by a senior priest. The temple keeps the land records, irrigation works, granary, school, and court. A janpoda is a place to live, a government, and a religious community at once.

> Farther south, you ask who can mend a broken water channel. A farmer points you toward the temple hall, where household representatives argue their claims before the sabhra. At the pass, the clerk held a token and a ledger; here, you have to learn whose field needs water first.

The [[affiliation-janpdsvdyr|Janpodas of Vedyara]], the Mahva-Sangra, is the loose association of these janpodas. Delegates meet at markets and pilgrimages, above all the great [Mahva-Melka]{.name data-type="lore/gathering"}, where shared water rights, routes, and disputes can be settled alongside religious observances. The Sangra convenes and persuades; it neither taxes the villages nor governs them between gatherings. A janpoda can also seek a neighboring king or city-state's protection while keeping its own assembly and local law.

A **rajya** is a kingdom under a Maharava, with a martial council and a priestly court. A **nagara** is a city-state whose merchant and temple houses govern a city and its hinterland, sometimes with a king at their head. A kingdom may protect neighboring janpodas in exchange for grain or service, while their assemblies keep their own affairs. A traveler carrying the king's warrant still needs to know what the local sabhra has agreed to. That gap between authorities is a place for envoys, guards, advocates, and anyone who can earn the trust of both sides.

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

The merchant houses provide another sort of power. [[affiliation-mrchntclctvvdyr|The Merchant Collective]] maintains trade standards, credit, and roads across the separate polities that signed its [Compact]{.name data-type="lore/law"}. Their [[affiliation-assmblycmpct|Assembly]] governs the agreement, not Vedyara. The temple republic of [[affiliation-suvrgrjnpd|Suvargeri]] keeps its gold weighing and lending under its own constitution rather than accepting a Compact seat. Its metal reaches the coast nonetheless.

:::secret
**For the GM:** A dispute over Suvargeri's gold can put a temple assembly, Collective factors, and neighboring rulers at the same table. None can simply order the others to yield. The Compact's rules and Suvargeri's constitution give each side a reason to stand firm.
:::

## Cities, Towns, and Roads

If you want a harbor campaign, begin in [[place-chendrapur2|Chendrapur]], where [[place-chandrmahi|the Chandramahi]] delivers gems to workshops and finished work to seagoing ships. For shrena rivalries and the cloth trade, gho to [[place-vyalendra3|Vyalendra]], the southern city of looms. Suryagarha puts a party at a northern pass beneath a fortress's eye; [[place-sandyapur|Sandyapur]] puts it on the dry road to Dunhara. Inland, Rajepur, [[place-danurkot|Danurkot]], and [[place-suvargeri|Suvargeri]] offer temple halls where a decision can matter farther than a city's walls.

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

You can cross Vedyara by riverboat with pilgrims, climb toward a pass shrine with a local guide, or join a caravan on the western [[place-marchroad|march road]]. At the coast, the monsoon decides when your ship can sail. Cotton, silk, gems, spices, medicines, worked metal, and manuscripts leave by these routes; salt, horses, and goods from beyond the mountains come back. The pass roads make the Khazryn and Tantsou trading partners; the march road connects to Dunhara; sea routes reach southern kingdoms. Vedyari scholars and Tantsou academies exchange learning as well. A merchant letter can carry a household's payment across borders without a chest of coin; the [[lore-vdyrnbnkng|Vedyaran banking system]] explains who honors it, and why losing one matters.

## Household, Station, and Everyday Life

Vedyara is overwhelmingly human. At an introduction, a Vedyari usually gives a village, then a kulpa, or lineage, before naming a trade. The household holds land or use-rights, answers at the assembly, pays its temple share, and carries obligations across generations. A person's tarona, or inherited station, shapes rights to land, arms, temple space, and a voice in public affairs. Two marks on the inside of the wrist identify station and lineage. At a temple gate or an assembly, someone may read those marks before hearing a name. The [[lore-vedyariclt|Vedyari]] note explains the stations and what that encounter can mean.

The order is strict, and it is not experienced everywhere in the same way. An outcaste can be barred from a village well or court yet travel where nobody asks to see a wrist mark. A merchant ship, a mountain road, and a city offer different room to conceal or contest a station. A bonded servant's debt can be paid; an ascetic can leave an office; reformers argue within the system. These openings matter because the household and its obligations remain the ordinary frame of life for most people.

Daily practice gives the place its rhythm. Temples serve as schools, archives, granaries, and places of worship. A long journey begins with a traveler's cord tied at the household hearth; a guest is fed before being questioned. The monsoon marks the agricultural and ritual year together. Mathematics, astronomy, medicine, and philosophy are respected forms of learning. Poetry, music, dance, weaving, gemcutting, and sculpture can be devotional work as well as livelihood. A scholar, performer, or craftsperson has reasons to travel here as strong as any soldier's.

## Faith in Daily Life

The [[affiliation-vrnkpnthn|Varnuka Pantheon]] gives Vedyari life a common religious language. Believers hold that [[lore-vyalendradty|Vyalendra]] shapes, [[lore-mahajayadty|Mahajaya]] preserves, and [[lore-rasikaradty|Rasikara]] destroys and renews. Birth, duty, death, and rebirth sit within that cycle. The belief that conduct in one life shapes the next helps explain why station and duty carry such weight, although Vedyari disagree fiercely about how the order should be lived and reformed.

Religion is visible well beyond a shrine. The janpoda temple is a school, storehouse, court, and meeting hall; its priest may convene the assembly. Great temples draw pilgrims across political borders. The Mahva-Melka joins worship and inter-janapada business in one gathering. A household petitions [[lore-meghonatadty|Meghonata]] as the rains begin, honors [[lore-kalavratadty|Kalavrata]] at a death, and leaves an offering to the [[lore-pvnjtrsdty|Pavanajitras]] at a crossing. A traveler can recognize these customs without knowing every god's rites.

Vedyari share a pantheon, but its schools give a traveler different doors to knock on. The [[affiliation-triyangasampradeya|Triyanga-sampradeya]] keeps the orthodox rites of many city temples and courts, honoring the three great forms in balance. [[affiliation-agmipantra|Agmi-pantra]] priests travel as ascetic reformers, invited to confront corruption or spiritual trouble and sometimes unwelcome for what they say. Other schools attend to learning, dreams, a particular god, or the dangers of a mountain crossing. An ascetic may leave household office to pursue the divine on the road or in the forest and still be supported by those who remain at home.

## Ritual and Arcane Traditions

Powerful ritual work belongs chiefly to ordained schools, or _sampradayas_, rather than to an unlicensed individual claiming a god's name. The [Council of the Triyacharyas]{.name data-type="affiliation/governmental"} within the Triyanga-sampradeya licenses public working. Other traditions have narrower roles: the [[affiliation-ganokashalda|Ganoka-shalda]] computes calendars, tides, and assays; [[affiliation-passshrineushtakas|Pass-Shrine Ushtakas]] serve dangerous crossings; [[affiliation-thresholdkeepers|Threshold-keepers]] may put one question to a newly dead person before the funeral pyre, under a restricted warrant. Folk magic and herbal practice remain part of ordinary life. Meditation, montra, calculation, and rite all have a place, but they are not interchangeable practices. The foreign [[affiliation-ordoarcanis|Thordimalon]] has only a licensed factor below Chendrapur; its scholars and Vedyari practitioners approach one another cautiously.

:::secret
**For the GM:** The public year is sighted by priests and computed by the Ganoka-shalda. Their answers can differ by a day, moving a festival, a coronation, or a gold weighing. A court's choice of calendar can therefore become a choice of authority. [[affiliation-chayavreta|The Chaya-vreta]] dream-line offers another fault line: its work is condemned, but the bodies that could pursue it do not agree on doing so.
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
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Old Ground

Vedyara is old, and some of its oldest ground is dangerous. Three of its battlefields are _shorukshetras_ (blood-fields), where the dead were never burned and the way behind them never closed; locals keep off them after dark, and the [[lore-bloodfield|Blood-fields]] note explains why. Each of these places has a question waiting in it:

- [[place-olurtaran|Olurtaran]], a ford of the upper course of [[place-mahanodi|the Mahanodi]] where no flame stays lit on the west bank. Will the Agmi-pantra's fire still catch on the east bank when the priests come in their twelfth year?
- [[place-gajastal|Gajastal]], the elephant ground below the plateau, where drums sound at dusk in the first storms. Who will pay to dig there by night?
- [[place-lantustal|Lantustal]], the banner ground on the march road, a cursed field whose road is chained at sunset. What lies past the whitewashed stones, and who drove a caravan onto them?
- [[place-ludrapur|Ludrapur]], the burned capital of the march kingdom the steppe destroyed. Where did its treasury gho?
- [[place-tirnuhall|The Silenced Hall of Tirnugram]], bricked up with a sabhra's ashes inside. Who rang the bell?
- [[place-madustan|Madustan]], the empty capital the count of years is named for. Why did it empty, when nothing sacked it?

The eras of Vedyari history, from [[lore-unnumbrdage|the Unnumbered Age]] to the [[lore-agepatrons|Age of Patrons]], explain how each of these places came to be.

The Vedyari keep the same ground in their own literature, and a party that hears a work recited has heard what the locals believe before anyone tells them what the record says. [[lore-measuringcord|The Measuring Cord]] is the temple school's recitation of how the world was measured and why death has a gap in it; [[lore-ferrymanford|The Ferryman at the Ford]] is the upper-river villages' legend of the ancestor of the Mahanodi kings and the stone they turned face-down; the [[lore-rcitkngsmhnd|Recitation of the Kings of Mahanodi]] and [[lore-fortydays|The Forty Days]] are how Rajepur remembers the kingdom it ended; [[lore-borrowedlamp|The Borrowed Lamp]] is the Agmi-pantra's song of the season its founder spent on Olurtaran with a widow's threshold lamp; [[lore-fivegrounds|The Five Grounds]] is the march companies' lament for the kingdom that died at Lantustal, sung in winter inside Ludrapur; and [[lore-therecall|The Recall]] is the dialogue Danurkot reads at the [Festival of the Returning]{.name data-type="lore/gathering"}, two brothers of one bow on either side of the gorge at [[place-sharamukha|Sharamukha]].

## Beginning an Adventure

A party can arrive by ship, over the northern passes, or by the dry road from Dunhara. One character might be a temple student carrying a disputed calendar, another a guide owed payment by a caravan, and another a weaver sent to find out why a shipment never reached port. A local character might belong to a farming household, a merchant house, a craft shrena, or an ascetic's following. Each tie offers help and asks something in return.

Start with a place and a claim on the party: a household wants its water restored; a patron needs a road kept open; a pilgrim cannot find the person meant to meet them. At the first temple, market, or toll post, ask three questions: **Who holds this place? Which household or institution speaks for you? Which road or rite brought you here?** The answers give the party allies, obligations, and somewhere to gho next.

Choose the road that catches your interest and begin there. The [[place-vedyarargn|region]] and [[lore-vedyariclt|culture]] notes take you farther into the land and its people; the [[affiliation-janpdsvdyr|janpodas]], [[affiliation-mrchntclctvvdyr|merchant houses]], [[affiliation-vrnkpnthn|pantheon]], and [[lore-vdyrnbnkng|banking]] notes are ready when the party meets them.

## Glossary

These are the Vedyari words a traveler meets most often. They are written plain in these pages, the way a Vedyari says them.
