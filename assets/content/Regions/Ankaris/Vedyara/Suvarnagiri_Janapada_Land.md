---
tags:
  - region
  - endowed
description: "The land of the Suvarnagiri Janapada—villages in a wedge of upland at the Bhārava headwaters, ringing the gold-bearing mountain whose streams are panned for alluvial gold."
name:
  full: Suvarnagiri Janapada
  aliases: []
shortcode: suvarnagirijnpd
type: place
subType: region
data:
  demonym: Suvarnagiri
  lore:
    - vedyariclt
  parents:
    - vedyarargn
  population: 35000
terran_analog: "Medieval South Indian temple-republic with mineral-resource wealth—Chola-era brahmadeya village federation centered on a gold-bearing mountain, governed by an unusually elaborate constitutional structure designed to prevent the concentration of mineral wealth in any one lineage or temple"
packFolder: vedyara
---

Suvarnagiri Janapada is the land of the temple-republic of [[affiliation-suvrgrjnpd|Suvarnagiri Janapada]], in the Bhārava highlands of [[place-vedyarargn|Vedyara]].

Its territory occupies a triangular wedge of upland country at the headwaters of the Bhārava river, in the foothills where the central Vedyari plain rises into the [[place-graznmntns|Grazian Mountains]].

## The Mountain

Suvarnagiri the mountain is a moderately sized peak, perhaps three thousand feet above the surrounding country. It is weathered metamorphic rock, and thin veins of native gold run through it.

The veins themselves have never been mined. The gold taken at Suvarnagiri is **alluvial**. The seasonal rains wash it out of the mountain, it gathers in the streams and small rivers that drain the slopes, and hereditary panning-families pan it out by techniques fifty generations have refined. The streams give perhaps six to eight hundred ounces of gold in a typical year, somewhat more in a wet one and somewhat less in a drought. That is no fortune by the standards of the great Vedyari kingdoms. For a janapada of thirty-five thousand people it is a significant and sustained income.

## Settlements

```sql
SELECT s.address.slug AS _ref,
       s.name.full AS "Name",
       s.data.market || ' ' || m.name AS "Market",
       s.data.population AS "People",
       (SELECT string_agg(
                   CASE
                       WHEN p.address.slug IS NULL THEN p.name.full
                       ELSE '[[' || p.address.slug || '|' || p.name.full || ']]'
                   END, ' and ' ORDER BY p.name.full)
        FROM entries p
        WHERE p.type = 'affiliation'
          AND list_contains(p.data.domains, s.shortcode)) AS "Held by",
       -- No field states why a place stands where it does, so "For" projects nothing.
       NULL AS "For"
FROM entries s
LEFT JOIN market m ON m.value = s.data.market
WHERE s.type = 'place'
  AND s.subType = 'settlement'
  AND list_contains(s.data.parents, 'suvarnagirijnpd')
ORDER BY s.name.full COLLATE NOCASE
```

The query names the constituent villages the sabhā seats and the temple-town itself. Most of the janapada lives outside them, on the terraces, in hamlets and single farmsteads that each village answers for at its turn.

## Economy

Beyond the gold the land grows the standard Vedyari upland mix: millet, mountain rice, pulses, and certain temperate fruits that will not grow on the lowland plain. Its metallurgy is unusually good, and the local iron-smelting work, fed by what the gold has taught, is some of the best in inland Vedyara. A thriving jeweler's quarter at Lower Suvarnagiri works the local gold with gemstones imported from [[affiliation-chandrapur|Chandrapur]], and its reputation across the continent is second only to Chandrapur's own.

The janapada exports gold, iron and ironwork, fine jewelry, mountain produce, and the considerable manuscripts of the Suvarnagiri Mahájaya tradition. About half the year's gold is sold or traded into the wider Vedyari economy, and that is the cash the common-share expenditures are met from. It imports textiles, books, gemstones, salt, and the luxuries the wealthier Suvarnagiri can afford within their constitutional caps.

## See Also

- [[affiliation-suvrgrjnpd|Suvarnagiri Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[place-suvarnagiri|Suvarnagiri]]—the temple-seat
