---
tags:
  - region
  - held
description: "The land of the march kingdom of Bhūmipāla—dry foothills under the broken end of the Grazian wall, the road that goes round it into the desert, and the salt coast of the western sea."
name:
  full: Bhūmipāla Land
  aliases:
    - The March
shortcode: bhumipalaland
type: place
subType: region
data:
  demonym: Bhumipali
  lore:
    - humanflk
  parents:
    - vedyarargn
  population: 2000000
packFolder: vedyara
---

## Overview

Bhūmipāla is the land of the march kingdom of [[affiliation-bhumipala|Bhūmipāla]], the northwestern corner of [[place-vedyarargn|Vedyara]]. It runs from the broken foothills of [[place-wstrndscnt|the Western Descent]] south and west to the shore of the [[place-sandhysmdr|Sandhyā-samudra]], and it is the driest country in the subcontinent that anybody farms.

Two million people live here. That is a thin population for a Vedyari land, and it is thin in a particular way: the country is empty between the wells and crowded at them.

## The Three Grounds

The **foothills** are the north, under the end of the wall. They are brown, broken and cold at night, and they carry sheep, goats and the horse-pastures the companies buy from. The [[affiliation-svapnasarisamaja|Svapnasāri-samāja]] keeps its monasteries up here, high enough for the cold and dry enough for the quiet.

The **desert-margin** is the west, where the foothills run out into the sand of the [[place-dunharargn|Dunhara]]. Nobody holds it and everybody crosses it. The line between the last Vedyari well and the first Dunhari one is a two-day ride and is not marked on the ground.

The **coast** is the south, a strip of arid shore two hundred miles long behind sand spits and salt flats. Herding country runs to within a few miles of the beach and the cultivation is what the wells will carry. There is no deep natural harbor on any of it.

## The Road

[[place-marchroad|The march road]] is the spine of the land and the reason there is a kingdom on it. It comes up from [[place-sandhyapur|Sandhyāpur]] on the coast, turns west at [[place-ashvapada|Ashvapada]] under the foothills, and leaves Vedyara at the wells of [[place-marukupa|Marukūpa]]. Every settlement of consequence in the land stands on it or a day off it.

## Economy

Salt is the land's own product, raked from pans along the coast and carried inland and west by the wagonload. After salt come dried fish, hides, wool and horses, and after those the carrying trade itself, which employs more Bhumipali households than any other work.

The land grows millet, dates, and barley where a well will reach, and it imports grain in any year the rains fail on the plain behind it. A herder here counts a bad year by what he must sell to eat.

## Settlements

```sql
SELECT address.slug AS _ref,
       name.full       AS "Settlement",
       data.population AS "Population",
       description     AS "Overview"
FROM entries
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'bhumipalaland')
ORDER BY name.full COLLATE NOCASE
```

The three towns of the road hold most of what is not herding. The rest of the land lives at the wells, in hamlets of a few families that answer to the Sāmanta whose fort the well stands under.

## See Also

- [[affiliation-bhumipala|Bhūmipāla]]—the kingdom that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[place-marchroad|The march road]]—the road the land is built along
- [[place-wstrndscnt|The Western Descent]]—the broken end of the wall above it
- [[place-sandhysmdr|The Sandhyā-samudra]]—the sea on its southern shore
