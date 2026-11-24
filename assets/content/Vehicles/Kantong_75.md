---
shortcode: kantong75
name: {full: Kantong 75}
type: vehicle
description: "A Tantsou flat-bottomed coastal merchant hull 75 feet long with leeboards and three battened masts."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Kantong
  size: 75
  locomotion: [floating]
  role: [merchant]
  length: 75
  width: 19
  hullDepth: 5
  capacity: 568
  crew: 11
  construction: {methods: [bulkheaded], complexity: 5}
  buildTime: 4688
  cost: 28125
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
    form: flat_bottomed_hull
    material: wood
    extra_features: [flat floor, square ends, leeboards, battened lug sails on three masts]
sohl: {system: {}}
---

# Appearance {#appearance}

A flat-floored hull with square ends and a leeboard on each side. Three masts carry battened lug sails. The hull is 75 feet long.

# Dossier {#dossier}

The **Kantong** is the coasting merchant hull of the shallow northern shores of [[lore-tantsouclt|Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Wide Floor, and English calls the vessel the Sand Ship.

## The Vessel

Bulkheads divide the hull into sealed compartments. When the tide goes out, the flat floor lets the Kantong settle upright on the mud, so it can take the ground on a mudflat and work estuaries that a deeper hull cannot enter ([[doc-vesseltradtn|Seafaring Traditions]]).

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 75 feet                     |
| Beam           | 19 feet                     |
| Hull depth     | 5 feet, keel to main deck   |
| Burthen        | 71 tuns, which is 568 seams |
| Rig            | three battened masts        |
| Sailing grade  | B                           |
| Oar grade      | none                        |
| Operating crew | 11                          |
| Build time     | 4,688 man-days              |
| Cost           | 28,125 Pence                |

The operating crew steers, commands and works the sails. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]]. The hull is bulkheaded, a method described in [[doc-vesselbuild|Shipbuilding Time and Cost]].

## A Day's Passage

Under sail the Kantong rolls on the grade B table for a battened rig in [[doc-seatravel|Travel at Sea]]. Every day it makes some progress, ending at 20 leagues (4%), 30 leagues (27%), 40 leagues (47%), 50 leagues (20%) or 60 leagues (2%), an average of 38.9 leagues. It has no oar table. A league is 3 nautical miles. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 75-foot hull. The other sizes are [[vehicle-kantong60|Kantong 60]], [[vehicle-kantong90|Kantong 90]] and [[vehicle-kantong105|Kantong 105]].
