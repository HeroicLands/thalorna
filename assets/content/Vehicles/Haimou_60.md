---
shortcode: haimou60
name: {full: Haimou 60}
type: vehicle
description: "A Tantsou grain barge 60 feet long, narrow enough for the canal locks, with two battened sails and sculls."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Haimou
  size: 60
  locomotion: [floating]
  role: [merchant]
  length: 60
  width: 15
  hullDepth: 5
  capacity: 360
  crew: 8
  construction: {methods: [bulkheaded], complexity: 3}
  buildTime: 1800
  cost: 10800
  movementProperties:
    - medium: floating
      label: sail
      rates:
        - {prob: 0.01, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.12, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.42, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.37, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.08, distance: 50, distUnit: leagues, timeUnit: day}
    - medium: floating
      label: oar
      crew: 45
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.89, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.06, distance: 20, distUnit: leagues, timeUnit: day}
  appearance:
    form: narrow_hull
    material: wood
    extra_features: [long narrow hull, battened lug sails on two masts, stern sculls]
---

# Appearance {#appearance}

A long, narrow hull. Two masts carry battened lug sails, and long sculls work over the stern. The hull is 60 feet long.

# Dossier {#dossier}

The **Haimou** is the grain barge of the canals and rivers of [[lore-tantsouclt|Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Carrying Wood, and English calls the vessel the Tribute Barge.

## The Vessel

The Haimou carries the grain tax to [[place-zhowen|Zhowen]] and to the garrisons of the north. Its hull is narrow enough to pass the canal locks, and bulkheads divide it into sealed compartments. It is not a junk. Stern sculls move it, and haulers on the bank tow it where the current runs against it. A barge on a river gets most of its movement from the current, from towing and from poling, so the tables below describe it only on open water; the rule for rivers is in the River Vessels section of [[doc-seatravel|Travel at Sea]].

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 60 feet                     |
| Beam           | 15 feet                     |
| Hull depth     | 5 feet, keel to main deck   |
| Burthen        | 45 tuns, which is 360 seams |
| Rig            | two battened masts          |
| Sailing grade  | C                           |
| Oar grade      | E                           |
| Operating crew | 8                           |
| Oarsmen        | 45                          |
| Build time     | 1,800 man-days              |
| Cost           | 10,800 Pence                |

The operating crew steers, commands and works the sails; the oarsmen are counted separately, and the sailing crew can take sculls when the hull is rowed. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]]. The hull is bulkheaded, a method described in [[doc-vesselbuild|Shipbuilding Time and Cost]].

## A Day's Passage

Under sail the Haimou rolls on the grade C table for a battened rig in [[doc-seatravel|Travel at Sea]]. Every day it makes some progress, ending at 10 leagues (1%), 20 leagues (12%), 30 leagues (42%), 40 leagues (37%) or 50 leagues (8%), an average of 33.9 leagues. Under oars alone it rolls on the grade E oar table: no progress on 5% of days, otherwise 10 leagues (89%) or 20 leagues (6%), an average of 10.1 leagues. While its sail draws it rolls on the sailing table, because oars add little then. A league is 3 nautical miles. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 60-foot hull. The other sizes are [[vehicle-haimou40|Haimou 40]], [[vehicle-haimou50|Haimou 50]] and [[vehicle-haimou70|Haimou 70]].
