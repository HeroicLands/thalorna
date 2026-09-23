---
tags:
  - continent
  - iseron
type: place
subType: region
data:
  demonym: Iseronian
  lore:
    - humanflk
  parents:
    - worldthlrn
  population: null
shortcode: isrncntnnt
name:
  full: Iseron Continent
  aliases:
    - Iseron
description: The frozen southernmost continent—desolate, largely unexplored, rumored to hold ancient ruins beneath the ice and tiny reclusive communities adapted to its extremes.
terran_analog: "Antarctica—the frozen southernmost continent: desolate, largely unexplored, rumored to hold ancient ruins beneath the ice and tiny reclusive communities adapted to its extremes."
packFolder: iseron
---

Iseron is the southernmost continent of [[place-worldthlrn|Thalorna]]—a vast ice-bound landmass at the southern pole, desolate and almost entirely unexplored. It is the least-known of Thalorna's continents by a wide margin. What is reported of Iseron is reported by a vanishingly small number of returned expeditions, and much of what the rest of the world believes about the place is informed as much by legend as by documented observation. It is rumored to hold ancient ruins beneath the ice, small reclusive communities adapted to its extremes, and knowledge that predates every other civilization on Thalorna.

## Geography

Iseron is a continent of ice. A thick ice sheet covers most of the interior, its surface rising in broad domes broken by nunatak peaks where ancient mountain ranges break through the glacial cap. Massive glaciers flow to the coasts and calve enormous icebergs into the southern ocean. Towering ice cliffs stand above rocky shorelines that appear only in the brief southern summer, and howling katabatic winds sweep off the interior with a force that has wrecked more expeditions than outright cold.

Only along the northernmost coastal fringes does the landscape admit any softer variation. During the short summer, those fringes thaw enough to reveal bare rock, mosses and lichens, and—in a handful of places—small stretches of low vegetation clinging to sheltered valleys. A few coastal zones are geothermally active, where volcanic warmth from beneath the ice sustains liquid water, ice-free ground, and the only environments on the continent that might reasonably be called habitable.

The approaches to Iseron are as hostile as the interior. Sea ice extends far north in winter, enclosing the continent in an impassable shell; in summer the ice recedes but leaves behind broken pack, rogue icebergs, and treacherous currents. Iseronian waters have claimed more ships than all of Thalorna's pirates combined.

## Regions

```sql :allow-empty
SELECT address.slug AS _ref,
       name.full    AS "Region",
       description  AS "Overview"
FROM notes
WHERE type = 'place'
  AND subType = 'region'
  AND list_contains(data.parents, 'isrncntnnt')
ORDER BY name.full COLLATE NOCASE
```

## Inhabitants

Iseron is inhabited, if barely. The continent's indigenous peoples live in small, self-sufficient communities along the coast and in the geothermally warmed valleys—populations measured in the hundreds, not the thousands, scattered across enormous distances. Adapted across an unknown span of generations to the extreme conditions, they hunt marine mammals and seabirds, trap sea-ice fish through long winter nights, and maintain ceremonial traditions that outsiders have almost no access to. They regard the rare expeditions that reach their shores with a deep and generally warranted suspicion; what little contact has occurred has mostly been brief, careful, and confined to trade in small volumes of specialized goods—ivory, furs, dried meat, and the occasional object of unclear origin recovered from the ice.

No formal pantheon has been documented. What Ankarian scholars know of Iseronian ceremony suggests a tradition oriented around the long winter dark, the stars, the sea ice, and the places where warm ground breaks through the cold—but the accounts are fragmentary and the Iseronians have not corrected them.

## The Ruins Beneath the Ice

The most persistent and troubling stories about Iseron concern what lies under the ice. A handful of expeditions across the centuries have returned with reports of vast ruined structures buried in the continent's interior—walls, halls, and architectural forms of a scale and design that suggest a civilization older and more advanced than anything known on the surface of modern Thalorna. The reports are fragmentary, often contradictory, and sometimes clearly the product of exhaustion and privation. But they have been consistent enough, over long enough, that no serious scholar dismisses them entirely.

Whether these ruins are the remains of an ancient human civilization that flourished before the last great cooling, a long-vanished outpost of the Elder Races, or something more alien still, is not known. The climate, the distance, and the lethality of Iseronian travel have so far prevented any systematic investigation. What has been recovered from the ice—the occasional carved object, the occasional inscription in a script no living scholar can read—has only deepened the mystery rather than solved it.

One thread of commentary comes from [[affiliation-kalihara|Kalihara]], and from nowhere else on Thalorna. Kaliharans who hear of the Iseronian ruins have been known to wonder aloud whether whoever built them was contemporary with—or related to—the people their own island credits with its founding. The remark is rarely repeated and rests on nothing: no Kaliharan has seen Iseron, no object out of the ice has ever been set beside anything of theirs, and the island says no more when asked. It is reported here as a thing Kaliharans have said, not as a lead. Nothing recovered from Iseron supports it, and no tradition anywhere else on Thalorna draws any connection at all.

## Relations with the Wider World

For practical purposes, Iseron stands outside the trade and diplomatic networks of the rest of Thalorna. The occasional expedition reaches it; the occasional Iseronian artifact reaches the cabinets of Ankarian collectors; nothing resembling regular commerce has ever been established. The Elder Races are effectively absent. The Vylarian Empire at its height did not attempt Iseronian voyages. Even the most ambitious Ankarian maritime traditions treat the southern continent as a destination for obsession rather than for business.

What draws the occasional expedition south is not trade but the ruins—and the conviction, never quite proven and never quite dispelled, that Iseron holds something the rest of Thalorna has forgotten.

## See Also

- [[place-worldthlrn|The World of Thalorna]]—World overview
- [[place-arnscntnnt|Aurionis Continent]]—Northern neighbor across the southern ocean
- [[affiliation-kalihara|Kalihara]]—Source of the only commentary anywhere that speculates about the ruins
- [[lore-flksinale|Sinalë]], [[lore-flkkhazar|Khazári]]—Elder Races, whose relationship (if any) to the Iseronian ruins is unknown
