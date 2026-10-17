---
shortcode: suvarnagirijnpd
name: {full: Suvarnageri Janapoda, aliases: []}
type: place
subType: region
description: "The land of the Suvarnageri Janapoda—villages in a wedge of upland at the Bharava headwaters, ringing the gold-bearing mountain whose streams are panned for alluvial gold."
tags: [region, endowed]
data:
  demonym: Suvarnageri
  lore: [vedyariclt]
  parents: [vedyarargn]
  population: 35000
  packFolder: vedyara
  government: suvrgrjnpd

# terran_analog: "Medieval South Indian temple-republic with mineral-resource wealth—Chola-era brahmadeya village federation centered on a gold-bearing mountain, governed by an unusually elaborate constitutional structure designed to prevent the concentration of mineral wealth in any one lineage or temple"
---

The land of Suvarnageri Janapoda is a triangular wedge of upland at the headwaters of [[place-bharavarivr|The Bharava]], in the foothills where the central Vedyari plain rises into [[place-graznmntns|The Grazian Mountains]]. It is the land of the temple-republic of [[affiliation-suvrgrjnpd|Suvarnageri Janapoda]], in the Bharava highlands of the [[place-vedyarargn|Vedyara Region]], and thirty-five thousand people live on it. Strangers know it for one fact about its mountain: nobody has ever dug into it.

## The Mountain

A panning head from the upper terraces puts it to a newcomer in a sentence. "You are looking at three thousand feet of old rock with gold in it. We have never cut a vein. The rain takes the gold out of the stone, the streams carry it down, and we meet it in the gravel."

The mountain is a moderately sized peak, perhaps three thousand feet above the surrounding country, of weathered metamorphic rock with thin veins of native gold running through it. The gold taken at Suvarnageri is alluvial: the seasonal rains wash it out of the veins, it gathers in the streams and small rivers that drain the slopes, and hereditary panning-families pan it out by techniques fifty generations have refined. The streams give perhaps six to eight hundred ounces in a typical year, somewhat more in a wet one and somewhat less in a drought. That is no fortune by the standards of the great Vedyari kingdoms. For a janapoda of thirty-five thousand people it is a significant and sustained income.

Where the ounces gho is the business of the [Gold Constitution]{.name data-type="lore/law"}: half to the three temples, a quarter to the common treasury, a quarter paid out to the households, and no household allowed to keep more than about twelve ounces of its own.

## Settlements

```sql
SELECT s.address.slug AS _ref,
       s.name.full AS "Name",
       s.data.market || ' ' || m.name AS "Market",
       s.data.population AS "People",
       (SELECT CASE
                   WHEN p.address.slug IS NULL THEN p.name.full
                   ELSE '[[' || p.address.slug || '|' || p.name.full || ']]'
               END
        FROM entries p
        WHERE p.type = 'affiliation'
          AND p.documents IS NULL
          AND s.data.government IN (p.address.canonical, p.documentation)) AS "Government",
       -- No field states why a place stands where it does, so "For" projects nothing.
       NULL AS "For"
FROM entries s
LEFT JOIN market m ON m.value = s.data.market
WHERE s.type = 'place'
  AND s.subType = 'settlement'
  AND list_contains(s.data.parents, 'thalorna-note-place-suvarnagirijnpd')
ORDER BY s.name.full COLLATE NOCASE
```

The table lists the constituent villages the sabhra seats and the temple-town itself. Most of the janapoda lives outside them, on the terraces, in hamlets and single farmsteads that each village answers for at its turn.

## Economy

Beyond the gold the land grows the standard Vedyari upland mix: millet at [[place-dhanyagrama|Danyagrama]], mountain rice at [[place-nilakshetra|Nilakshetra]], pulses, and the temperate fruit of [[place-madhuvana|Madavana]] that will not grow on the lowland plain.

Its smiths are better than the country around them. The iron-smelting at [[place-tamravana|Tamravana]], fed by what the gold has taught, is some of the best in inland Vedyara, and the jewelers' quarter at [Lower Suvarnageri]{.name data-type="place/site"} works the local gold with gemstones imported from [[place-chandrapur2|Chendrapur]]. Its reputation across the continent is second only to Chendrapur's own.

The janapoda sells gold, iron and ironwork, fine jewelry, mountain produce, and the considerable manuscripts of the Suvarnageri Mahajaya tradition. About half the year's gold is sold or traded into the wider Vedyari economy, and that is the cash the common-share expenditures are met from. It buys textiles, books, gemstones, salt, and the luxuries its households can afford within the cap.

## See Also

[[affiliation-suvrgrjnpd|Suvarnageri Janapoda]]
: the temple-republic that holds this land

[[place-vedyarargn|Vedyara Region]]
: the enclosing region

[[place-suvarnagiri|Suvarnageri]]
: the temple-seat
