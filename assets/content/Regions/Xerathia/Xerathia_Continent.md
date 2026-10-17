---
shortcode: xerathia
name: {full: Zerathia, aliases: []}
type: place
subType: region
description: The southern continent—fertile crescent along the Vylarian Sea, trackless equatorial rainforests in the interior, and endless savannahs in the deep south.
tags: [continent]
data:
  demonym: Zerathian
  lore: [humanflk, flksinale, flkkhazar]
  parents: [worldthlrn]
  borders: [{to: sandhysmdr, bearing: E}]
  population: 29000000
  packFolder: xerathia

# terran_analog: Africa
---

Zerathia is the southern continent of [[place-worldthlrn|The World of Thalorna]]—a vast landmass whose character changes dramatically as one travels south from its fertile northern crescent, through trackless equatorial rainforest, into the endless savannahs of the deep south. Its northern shore along the [[place-vylarianse|Vylarian Sea]] hosts some of the oldest and most sophisticated civilizations on the world; its interior and far south remain largely unknown to Ankarian scholars, charted only in fragments from the accounts of traders, missionaries, and the occasional expedition that returned.

## Geography

Zerathia's landscape descends in broad climatic bands from north to south, each one defining a different mode of human life.

The [[place-nrthrnfrtlrgn|Northern Fertile Region]] is a belt of productive land along the southern shore of the Vylarian Sea, shaped by a pronounced coastal-to-inland climate gradient. The coastal strip is wet-coastal—citrus, grape, olive, date, and fig orchards thrive on sea-tempered winters—and supports the crescent's most cosmopolitan port cities. Moving inland, rainfall drops off sharply, and the middle and deep interiors are semi-arid, productive only through extensive aqueduct and irrigation engineering that sustains grain agriculture and pastoral grasslands; beyond the reach of the canals, the land gives way to true steppe where nomadic peoples graze sheep, cattle, and horses. The great river valley of the [[affiliation-empireakhlth|Empire of Au'Khelathu]] is the crescent's exception—a band of almost-tropical abundance running south from the delta that makes the Khelathi heartland the richest single agricultural prize in the known world. The [[affiliation-mtrrchybth|Matriarchy of Bethua]] occupies the eastern portion of the crescent proper, its coastal strip producing luxury fruit and wine, its interior sustained by monumental water-engineering. [[affiliation-okharis|Okharis]] sits at the crescent's southern margin—west of Bethua and southwest of Au'Khelathu—where the irrigated country gives out and the land runs into semi-arid grasslands that shade, eventually, into the [[place-cntrlrnfrsts|Central Rainforests]]. Okharis is a pastoral kingdom rather than an agricultural one, its few great temple-cities rising like anchors from a sea of seasonal grazing land. The crescent has been the face Zerathia shows to the [[place-ankrscntnnt|Ankaris Continent]] for as long as the two continents have known each other.

South of the crescent, the land gives way to the Central Rainforests—a vast trackless band of equatorial jungle that stretches across the continent. The forests teem with life, much of it dangerous: predators, disease, and creatures unknown elsewhere on Thalorna. Scattered tribes inhabit the rainforests, some maintaining carefully managed trade relationships with the northern civilizations, others wholly isolated. Ankarian cartographers mark the interior in blank stretches of green with a few rivers drawn in by guesswork.

Beyond the rainforests lie the [[place-sthrnsvnhs|Southern Savannahs]]—vast grasslands populated by nomadic hunter-tribes who follow the great seasonal animal migrations. [[place-ekundavlg|Ékunda Village]] is one of the more settled communities of this region, known to Ankarian travelers as the southernmost reliable outpost of civilization. Beyond the savannahs, the continent trails off into regions that Ankarian cartographers have rarely reached and almost never returned from.

## Regions

```sql
SELECT address.slug AS _ref,
       name.full    AS "Region",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'thalorna-note-place-xerathia')
ORDER BY name.full COLLATE NOCASE
```

## Peoples and Cultures

The peoples of Zerathia are as varied as its landscapes, and no single framework captures them all.

The great northern empires are as ancient and urbanized as anything on Thalorna. Empire of Au'Khelathu worships the [[affiliation-khelathpnthn|Khelathi Pantheon]] and is ruled by a divine Gar-Auu whose lineage is held to descend from the gods themselves; its pyramids, canal-lined cities, and temple-complexes are among the architectural wonders of the world. Okharis is a semi-feudal realm of three pyramidal city-states united under the Ruler of the Three Flames, worshipping [[lore-nkaruthardty|Nkaru'thar]]—the Eternal Flame—through three aspects bound to its three cities. The Matriarchy of Bethua, east of Au'Khelathu, is a matriarchal society where women rule and men are subservient; its religious and political order differs sharply from anything west of the Vylarian Sea.

The rainforest and savannah peoples are far more diverse and far less documented. What Ankarian scholars know suggests considerable variety: structured priesthoods and named spirit-courts in the more settled rainforest communities, ancestor veneration and landscape-tied spirit relationships among the pastoral peoples of the south. These traditions do not map neatly onto the pantheon model familiar to western Ankaris, and attempts to force that framework onto them have produced more confusion than clarity.

Non-human peoples are extremely rare. A few scattered [[lore-flksinale|Sinale Folk]] enclaves are rumored in the deepest rainforests; the [[lore-flkkhazar|Khazár Folk]] are absent from almost all Zerathian accounts except for a handful of mountain halls in the continent's interior highlands.

## History

Zerathia's recorded history is older than Ankaris's in some respects. Empire of Au'Khelathu reckons from [[lore-qettelgu|The Qet Telgu]] ("First Occasion"), the mythological unification of its river valley approximately 2,830 years ago—nearly four times as long as [[lore-commoncal|The Vylarian Calendar]]'s 720 years. Neighboring polities including Okharis adopted the Qet Telgu reckoning, and within the northern crescent it remains the standard dating system.

The [[affiliation-vylarinmpr|Vylarian Empire]] at its height exerted significant commercial and diplomatic influence over the northern Zerathian coast, and in places military pressure, but it never succeeded in subjugating the great indigenous powers of Au'Khelathu or Okharis. Those empires were ancient when Vylaria was a cluster of fishing villages and have watched Vylaria's rise and decline with the patience of civilizations that measure their own history in millennia.

The rainforests and savannahs have their own histories, almost entirely oral, and almost entirely inaccessible to Ankarian scholarship.

## Trade and External Relations

Zerathia's connection to the wider world runs primarily across the Vylarian Sea. The northern ports of the Fertile crescent have hosted Ankarian merchants for centuries, and the trade zone of the [[place-midhalnrgn|Mídhalión Region]] is genuinely shared between the two continents—Au'Khelathu, Okharis, and the Matriarchy of Bethua all sit on its southern shore, and the cities of the [[place-vylariargn|Vylaria Region]], the [[place-taruzelrgn|Taruzel Region]] and the [[place-provenzrgn|Provenzia Region]] on its northern. Grain, papyrus, linen, gold, gemstones, spices, and exotic animals flow north; wine, steel, wool, and timber flow south.

Beyond the Vylarian Sea, Zerathia's contact with the rest of Thalorna is thin. The western coast touches the open ocean but has no significant seafaring tradition that has produced regular contact with the [[place-kchchkcntnnt|K'ich'chik Continent]] or the [[place-klhrcntnnt|Kalihara Continent]]. The eastern coast faces the [[place-sandhysmdr|Sandva-samedra]] and the western shore of the [[place-vedyarargn|Vedyara Region]] a month's sailing beyond it, and no regular traffic crosses that water either; what moves between the two continents goes round by the Khelathi delta. The continent's southern tip is known to be coastline, but beyond that coastline lies speculation rather than geography.

## See Also

[[place-worldthlrn|The World of Thalorna]]
: World overview

[[affiliation-empireakhlth|Empire of Au'Khelathu]]
: Ancient northern empire

[[affiliation-okharis|Okharis]]
: The three-flamed kingdom

[[affiliation-mtrrchybth|Matriarchy of Bethua]]
: matriarchy of the central northern shore

[[place-ekundavlg|Ékunda]]
: Settled community of the southern savannahs

[[affiliation-khelathpnthn|Khelathi Pantheon]]
: Faith of Au'Khelathu

[[affiliation-nkaruthar|Nkaru'thar]]
: The Eternal Flame of Okharis

[[place-vylarianse|Vylarian Sea]]
: The inland sea shared with Ankaris

[[place-midhalnrgn|Mídhalión Region]]
: Shared trade zone spanning both continents

[[place-ankrscntnnt|Ankaris Continent]]
: The northern continent
