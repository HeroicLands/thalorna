---
shortcode: vindhyalayaland
name: {full: Shikharalaya, aliases: []}
type: place
subType: region
description: "The land of the kingdom of Shikharalaya—the northern highlands of Vedyara, pine-clad ridges, snow-fed rivers and the pass-roads that carry the caravan trade over the wall to the steppe beyond."
tags: [region, held]
data:
  demonym: Shikharalayan
  lore: [vedyariclt]
  parents: [vedyarargn]
  population: 8000000
  packFolder: vedyara
  government: vindhyalay

# terran_analog: the Vindhya range of central India and its hill kingdoms; the name keeps clear of Vindhya and is built from shikhena, a peak, and alaja, an abode
---

## Overview

A carter on the terrace road, setting a first-time passenger down at the foot of the climb, gives him the lay of the land in the order he will need it. "Rice and barley on the steps below you, sheep and goats above, snow-water in every ditch, and a stone fortress where the road narrows. Everything you buy in the north came up this way, and everything the north sells goes down it."

Shikharalaya is the land of the highland kingdom of [[affiliation-vindhyalay|Shikharalaya]], the northern passes of the [[place-vedyarargn|Vedyara Region]] through [[place-graznmntns|The Grazian Mountains]]. The southern Vedyari kingdoms are river valleys, tropical ports and the slow rhythms of farming and craft. Shikharalaya is pine-clad ridges, snow-fed rivers, and stone fortresses built into the passes themselves.

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
  AND list_contains(s.data.parents, 'thalorna-note-place-vindhyalayaland')
ORDER BY s.name.full COLLATE NOCASE
```

The query names the settlements of the pass-roads. The terrace hamlets below the capital and the mining camps of the gorges are counted with the fortress or the workings they answer to.

## Economy

The kingdom's wealth rides on the pass-roads. Caravans carrying cotton, silk, spice and worked metal climb north out of the Vedyari plains and over the Grazian summits to the southern edge-towns of the [[place-khzryndsrtrgn|Khazryn Desert Region]]. Others take the longer eastern branch into the western marches of the [[place-tantsouregin|Tantsou Region]]. Return caravans bring salt, horses, lapis, amber and the rarer goods of the eastern steppes.

The kingdom itself produces copper, tin and iron in modest but steady quantities, from mountain mines worked by hereditary smithing clans. Shikharalayan steel is not as celebrated as Vylarian or even Chandrapuri work. It is serviceable, cheap and reliably supplied, and those are the virtues that matter to [[affiliation-bhumipala|Bhumipala]]'s mercenary companies, who buy arms by the wagonload.

The terrain limits highland farming. The great terraced fields of the lower valleys produce rice and barley; the upper slopes graze sheep, goats, and the small mountain cattle whose dried milk-curds are a staple of the Shikharalayan diet and a curiosity the southern courts buy.

## Notable Features

[[place-suryagarha|Suryagarha]]
: the stone capital, a fortress-city of forty thousand built across the throat of [[place-suryadvara|Suryadvara]], the greatest northern pass. Every caravan entering or leaving Vedyara by that pass goes beneath its walls, and beyond the throat the road forks north for the Khazryn and northeast for Tantsou. Below the city the terrace road drops through the rice and barley steps to the lowland market towns, and it is the only way anything reaches the capital from inside the kingdom.

[[place-pssshrines|The Pass-Shrines]]
: a chain of temples of the [[affiliation-varakpnthn|Varnuka Pantheon]] built at the high points of the caravan roads, where travelers stop to leave offerings before attempting the descent. The shrines are kept by a hereditary line of ushtakas who live year-round at altitudes that would kill an unaccustomed lowlander within a week.

[[place-slvrgorges|The Silver Gorges]]
: steep valleys in the eastern mountains, worked for lapis and silver since before the founding of the kingdom, and carrying [[place-tamradvara|Tamradvara]] up to the marches beyond. The mines are held by hereditary smithing clans whose prerogatives predate the Maharava's own charter.

## See Also

[[affiliation-vindhyalay|Shikharalaya]]
: The kingdom that holds this land

[[place-vedyarargn|Vedyara Region]]
: The enclosing region

[[place-graznmntns|The Grazian Mountains]]
: The wall the pass-roads cross

[[place-suryagarha|Suryagarha]]
: The fortress-capital

[[place-sthrnwall|The Southern Wall]]
: The escarpment the kingdom's passes cross

[[affiliation-osketguides|The Osket]]
: The guides who take every caravan over
