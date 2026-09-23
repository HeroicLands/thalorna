---
tags:
  - region
  - endowed
description: "The land of the Suvarṇagiri Janapada—villages in a wedge of upland at the Bhārava headwaters, ringing the gold-bearing mountain whose streams are panned for alluvial gold."
name:
  full: Suvarṇagiri Janapada
  aliases: []
shortcode: suvarnagirijnpd
type: place
subType: region
data:
  demonym: Suvarnagiri
  lore:
    - humanflk
  parents:
    - vedyarargn
  population: 35000
terran_analog: "Medieval South Indian temple-republic with mineral-resource wealth—Chola-era brahmadeya village federation centered on a gold-bearing mountain, governed by an unusually elaborate constitutional structure designed to prevent the concentration of mineral wealth in any one lineage or temple"
packFolder: vedyara
---

Suvarṇagiri Janapada is the land of the temple-republic of [[affiliation-suvrgrjnpd|Suvarṇagiri Janapada]], in the Bhārava highlands of [[place-vedyarargn|Vedyara]].

Its territory occupies a triangular wedge of upland country at the headwaters of the Bhārava river, in the foothills where the central Vedyari plain rises into the [[place-graznmntns|Grazian Mountains]].

## The Mountain

Suvarṇagiri the mountain is a moderately sized peak, perhaps three thousand feet above the surrounding country. It is weathered metamorphic rock, and thin veins of native gold run through it.

The veins themselves have never been mined. The gold taken at Suvarṇagiri is **alluvial**. The seasonal rains wash it out of the mountain, it gathers in the streams and small rivers that drain the slopes, and hereditary panning-families pan it out by techniques fifty generations have refined. The streams give perhaps six to eight hundred ounces of gold in a typical year, somewhat more in a wet one and somewhat less in a drought. That is no fortune by the standards of the great Vedyari kingdoms. For a janapada of thirty-five thousand people it is a significant and sustained income.

## Settlements

```sql
SELECT address.slug AS _ref,
       name.full       AS "Settlement",
       data.population AS "Population",
       description     AS "Overview"
FROM entries
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'suvarnagirijnpd')
ORDER BY name.full COLLATE NOCASE
```

## Economy

Beyond the gold the land grows the standard Vedyari upland mix: millet, mountain rice, pulses, and certain temperate fruits that will not grow on the lowland plain. Its metallurgy is unusually good, and the local iron-smelting work, fed by what the gold has taught, is some of the best in inland Vedyara. A thriving jeweler's quarter at Lower Suvarṇagiri works the local gold with gemstones imported from [[affiliation-chandrapur|Chandrapur]], and its reputation across the continent is second only to Chandrapur's own.

The janapada exports gold, iron and ironwork, fine jewelry, mountain produce, and the considerable manuscripts of the Suvarnagiri Mahájaya tradition. About half the year's gold is sold or traded into the wider Vedyari economy, and that is the cash the common-share expenditures are met from. It imports textiles, books, gemstones, salt, and the luxuries the wealthier Suvarnagiri can afford within their constitutional caps.

## See Also

- [[affiliation-suvrgrjnpd|Suvarṇagiri Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- Suvarṇagiri—the temple-seat
