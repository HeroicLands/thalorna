---
shortcode: shouwou130
name: {full: Shouwou 130}
type: vehicle
description: "The Tower Ship of Tantsou, a river and estuary fortress 130 feet long, with tiered fighting galleries, crossbow ports and stone-throwing engines."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Shouwou
  size: 130
  locomotion: [floating]
  role: [military]
  length: 130
  width: 37
  hullDepth: 11
  capacity: 4232
  crew: 16
  construction: {methods: [bulkheaded], complexity: 7}
  buildTime: 19717
  cost: 118300
  movementProperties:
    - medium: floating
      label: sail
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.02, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.16, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.43, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.29, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.05, distance: 50, distUnit: leagues, timeUnit: day}
    - medium: floating
      label: oar
      crew: 241
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.89, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.06, distance: 20, distUnit: leagues, timeUnit: day}
  appearance:
    form: round_hull
    material: wood
    extra_features:
      - tiered fighting galleries
      - crossbow ports
      - stone-throwing engines on the upper decks
      - tall superstructure
      - battened sails on three masts
sohl: {system: {}}
---

# Appearance {#appearance}

A tall hull carrying tiers of fighting galleries, one above another, pierced with ports for crossbows. Stone-throwing engines stand on the upper decks. Three battened masts rise through the structure, and a bank of oars runs along the hull. The hull is 130 feet long.

# Dossier {#dossier}

The **Shouwou** is the floating fortress of the [[affiliation-tantsouempr|Empire of Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally River Hall, and these pages call the vessel the Tower Ship.

## The Vessel

A Shouwou carries hundreds of soldiers on its galleries, with crossbowmen at the ports and throwing engines overhead. It is a ship for the rivers and estuaries of [[lore-tantsouclt|Tantsou]], where it anchors a battle line or commands a crossing. It is dangerous in open water: the height of its works makes it top-heavy, and a swell or a squall can roll it over. It moves by sail, by tow or with the current more often than by its oars.

## Statistics

| Measure        | Value                          |
| -------------- | ------------------------------ |
| Length         | 130 feet                       |
| Beam           | 37 feet                        |
| Hull depth     | 11 feet, keel to main deck     |
| Burthen        | 529 tuns, which is 4,232 seams |
| Rig            | three battened masts           |
| Sailing grade  | D                              |
| Oar grade      | E                              |
| Operating crew | 16                             |
| Oarsmen        | 241 on a single bank           |
| Build time     | 19,717 man-days                |
| Cost           | 118,300 Pence                  |

The operating crew steers, commands and works the sails; the oarsmen are counted separately ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The burthen of a warship is hull volume, not cargo space, and so is the capacity recorded here: soldiers, engines, water and stores fill the hull. Any cargo is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Shouwou rolls on the grade D table for a battened rig in [[doc-seatravel|Travel at Sea]]: no useful progress on 5% of days, and the other days end at 10 leagues (2%), 20 leagues (16%), 30 leagues (43%), 40 leagues (29%) or 50 leagues (5%), an average of 30.4 leagues. Under oars alone it rolls on the grade E oar table: no useful progress on 5% of days, and the other days end at 10 leagues (89%) or 20 leagues (6%), an average of 10.1 leagues. While its sails draw it rolls on the sailing table. A league is 3 nautical miles. The figures assume smooth water; in open water the ship's height makes every day a risk, and the Game Master settles the weather and the sea.

## Sizes

This note is the 130-foot hull. The other sizes are [[vehicle-shouwou100|Shouwou 100]] and [[vehicle-shouwou160|Shouwou 160]].
