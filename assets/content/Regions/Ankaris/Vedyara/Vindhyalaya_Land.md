---
tags:
  - region
  - held
description: "The land of the kingdom of Vindhyālaya—the northern highlands of Vedyara, pine-clad ridges, snow-fed rivers and the pass-roads that carry the caravan trade over the wall to the steppe beyond."
name:
  full: Vindhyālaya
  aliases: []
shortcode: vindhyalayaland
type: place
subType: region
data:
  demonym: Vindhyan
  lore:
    - vedyariclt
  parents:
    - vedyarargn
  population: 8000000
packFolder: vedyara
---

## Overview

Vindhyālaya is the land of the highland kingdom of [[affiliation-vindhyalay|Vindhyālaya]], the northern passes of [[place-vedyarargn|Vedyara]] through the [[place-graznmntns|Grazian Mountains]].

The southern Vedyari kingdoms are river valleys, tropical ports and the slow rhythms of agricultural and artisan life. Vindhyālaya is pine-clad ridges, snow-fed rivers, and stone fortresses built into the passes themselves.

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
  AND list_contains(s.data.parents, 'vindhyalayaland')
ORDER BY s.name.full COLLATE NOCASE
```

The query names the settlements of the pass-roads. The terrace hamlets below the capital and the mining camps of the gorges are counted with the fortress or the workings they answer to.

## Economy

The kingdom's wealth rides on the pass-roads. Caravans carrying cotton, silk, spice and worked metal climb north out of the Vedyari plains and over the [[place-graznmntns|Grazian]] summits to the southern edge-towns of the [[place-khzryndsrtrgn|Khazryn]]. Others take the longer eastern branch into the western marches of [[place-tanvuregin|Tānvür]]. Return caravans bring salt, horses, lapis, amber and the rarer goods of the eastern steppes.

The kingdom itself produces copper, tin and iron in modest but steady quantities, from mountain mines worked by hereditary smithing sub-castes. Vindhyan steel is not as celebrated as Vylarian or even Chandrapuri work. It is serviceable, cheap and reliably supplied, and those are the virtues that matter to the mercenary companies of the western Vedyari kingdoms, who buy arms by the wagonload.

Highland agriculture is limited by terrain. The great terraced fields of the lower valleys produce rice and barley; the upper slopes graze sheep, goats, and the small mountain cattle whose dried milk-curds are a staple of the Vindhyan diet and, increasingly, an export curiosity in the southern courts.

## Notable Features

- **[[place-suryagarha|Sūryāgarha]]**—the stone capital, a fortress-city of forty thousand built across the throat of [[place-suryadvara|Sūryadvāra]], the greatest northern pass. Every caravan entering or leaving Vedyara by that pass goes beneath its walls, and beyond the throat the road forks north for the Khazryn and northeast for Tānvür. Below the city the terrace road drops through the rice and barley steps to the lowland market towns, and it is the only way anything reaches the capital from inside the kingdom.
- **[[place-pssshrines|The Pass-Shrines]]**—a chain of Varṇaka temples built at the high points of the caravan roads, where travelers stop to leave offerings before attempting the descent. The shrines are maintained by a specialized brahmin sub-caste whose members live year-round at altitudes that would kill an unaccustomed lowlander within a week.
- **[[place-slvrgorges|The Silver Gorges]]**—steep valleys in the eastern mountains, worked for lapis and silver since before the founding of the kingdom, and carrying [[place-tamradvara|Tāmradvāra]] up to the marches beyond. The mines are held by hereditary smithing clans whose prerogatives predate the Mahārāja's own charter.

## See Also

- [[affiliation-vindhyalay|Vindhyālaya]]—The kingdom that holds this land
- [[place-vedyarargn|Vedyara Region]]—The enclosing region
- [[place-graznmntns|The Grazian Mountains]]—The wall the pass-roads cross
- [[place-suryagarha|Sūryāgarha]]—The fortress-capital
- [[place-sthrnwall|The Southern Wall]]—The escarpment the kingdom's passes cross
- [[affiliation-osketguides|The Ösket]]—The guides who take every caravan over
