---
shortcode: wongri100
name: {full: Wongri 100}
type: vehicle
description: "A Tantsou seagoing merchant hull 100 feet long, V-bottomed and rigged with battened sails on three masts."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Wongri
  size: 100
  locomotion: [floating]
  role: [merchant]
  length: 100
  width: 32
  hullDepth: 15
  capacity: 3840
  crew: 13
  construction: {methods: [bulkheaded], complexity: 7}
  buildTime: 11667
  cost: 70000
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
      - battened lug sails on three masts
      - rudder hung on the sternpost
sohl: {system: {}}
---

# Appearance {#appearance}

A deep, V-bottomed hull planked in several layers. Three masts carry battened lug sails, and a deep rudder hangs from the sternpost. The hull is 100 feet long.

# Dossier {#dossier}

The **Wongri** is the seagoing merchant hull of the yards of [[lore-tantsouclt|Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Sea Sail, and English calls the vessel the Ocean Junk.

## The Vessel

The Wongri is a [[doc-vesseljunks|junk]]: bulkheads divide its hull into sealed compartments, it carries battened sails on two or more masts, and its sternpost rudder draws up when the water shoals. The largest sizes have cabins fitted out for merchants who sail with their goods. When the [[affiliation-tantsouempr|Empire of Tantsou]] mounts a great campaign at sea, it takes hulls of this kind into its fleets ([[doc-vesseltradtn|Seafaring Traditions]]).

## Statistics

| Measure        | Value                          |
| -------------- | ------------------------------ |
| Length         | 100 feet                       |
| Beam           | 32 feet                        |
| Hull depth     | 15 feet, keel to main deck     |
| Burthen        | 480 tuns, which is 3,840 seams |
| Rig            | three battened masts           |
| Sailing grade  | B                              |
| Oar grade      | none                           |
| Operating crew | 13                             |
| Build time     | 11,667 man-days                |
| Cost           | 70,000 Pence                   |

The operating crew steers, commands and works the sails. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]]. The hull is bulkheaded, a method described in [[doc-vesselbuild|Shipbuilding Time and Cost]].

## A Day's Passage

Under sail the Wongri rolls on the grade B table for a battened rig in [[doc-seatravel|Travel at Sea]]. Every day it makes some progress, ending at 20 leagues (4%), 30 leagues (27%), 40 leagues (47%), 50 leagues (20%) or 60 leagues (2%), an average of 38.9 leagues. It has no oar table. A league is 3 nautical miles. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 100-foot hull. The other sizes are [[vehicle-wongri80|Wongri 80]], [[vehicle-wongri120|Wongri 120]] and [[vehicle-wongri140|Wongri 140]].
