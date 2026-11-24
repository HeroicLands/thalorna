---
shortcode: wongri120
name: {full: Wongri 120}
type: vehicle
description: "A Tantsou seagoing merchant hull 120 feet long, V-bottomed and rigged with battened sails on four masts."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Wongri
  size: 120
  locomotion: [floating]
  role: [merchant]
  length: 120
  width: 39
  hullDepth: 18
  capacity: 6736
  crew: 16
  construction: {methods: [bulkheaded], complexity: 7}
  buildTime: 16800
  cost: 100800
  movementProperties:
    - medium: floating
      label: sail
      rates:
        - {prob: 0.04, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.27, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.2, distance: 50, distUnit: leagues, timeUnit: day}
        - {prob: 0.02, distance: 60, distUnit: leagues, timeUnit: day}
  appearance:
    form: round_hull
    material: wood
    extra_features:
      - multiple layers of planking
      - V-shaped bottom
      - battened lug sails on four masts
      - rudder hung on the sternpost
---

# Appearance {#appearance}

A deep, V-bottomed hull planked in several layers. Four masts carry battened lug sails, and a deep rudder hangs from the sternpost. The hull is 120 feet long.

# Dossier {#dossier}

The **Wongri** is the seagoing merchant hull of the yards of [[lore-tantsouclt|Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Sea Sail, and English calls the vessel the Ocean Junk.

## The Vessel

The Wongri is a [[doc-vesseljunks|junk]]: bulkheads divide its hull into sealed compartments, it carries battened sails on two or more masts, and its sternpost rudder draws up when the water shoals. The largest sizes have cabins fitted out for merchants who sail with their goods. When the [[affiliation-tantsouempr|Empire of Tantsou]] mounts a great campaign at sea, it takes hulls of this kind into its fleets ([[doc-vesseltradtn|Seafaring Traditions]]).

## Statistics

| Measure        | Value                          |
| -------------- | ------------------------------ |
| Length         | 120 feet                       |
| Beam           | 39 feet                        |
| Hull depth     | 18 feet, keel to main deck     |
| Burthen        | 842 tuns, which is 6,736 seams |
| Rig            | four battened masts            |
| Sailing grade  | B                              |
| Oar grade      | none                           |
| Operating crew | 16                             |
| Build time     | 16,800 man-days                |
| Cost           | 100,800 Pence                  |

The operating crew steers, commands and works the sails. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]]. The hull is bulkheaded, a method described in [[doc-vesselbuild|Shipbuilding Time and Cost]].

## A Day's Passage

Under sail the Wongri rolls on the grade B table for a battened rig in [[doc-seatravel|Travel at Sea]]. Every day it makes some progress, ending at 20 leagues (4%), 30 leagues (27%), 40 leagues (47%), 50 leagues (20%) or 60 leagues (2%), an average of 38.9 leagues. It has no oar table. A league is 3 nautical miles. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 120-foot hull. The other sizes are [[vehicle-wongri80|Wongri 80]], [[vehicle-wongri100|Wongri 100]] and [[vehicle-wongri140|Wongri 140]].
