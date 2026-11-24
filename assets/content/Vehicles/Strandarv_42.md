---
shortcode: strandarv42
name: {full: Strandarv 42}
type: vehicle
description: "The Nordmen's coastal and fjord trader, a clinker-built hull 42 feet long with a square sail and oar-ports."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: nordheimnclt
  family: Strandarv
  size: 42
  locomotion: [floating]
  role: [merchant]
  length: 42
  width: 13
  hullDepth: 5
  capacity: 216
  crew: 6
  construction: {methods: [clinker], complexity: 4}
  buildTime: 1176
  cost: 7056
  movementProperties:
    - medium: floating
      label: sail
      rates:
        - {prob: 0.1, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.01, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.11, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.38, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.33, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.07, distance: 50, distUnit: leagues, timeUnit: day}
    - medium: floating
      label: oar
      crew: 27
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.8, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.15, distance: 20, distUnit: leagues, timeUnit: day}
  appearance:
    form: round_hull
    material: wood
    extra_features: [clinker planking, single square sail, oar-ports along the hull]
---

# Appearance {#appearance}

A lighter clinker hull than the open-sea trader's, with a square sail and oar-ports along its length. The hull is 42 feet long.

# Dossier {#dossier}

The **Strandarv** is the coastal and fjord trader of the [[lore-nordheimnclt|Nordheimn]] of the [[place-nrdlndsrgn|Nordlands]]. The name is [[skill-nordmalng|Nordmal]]: _strand-_, from _strandva_, a shore, and _arvi_, an oar. Together they mean the shore-oar, said STRAND-ahrv.

## The Vessel

The oars let it work up narrow waters and rivers and make way through calms. It is the workhorse of the northern coastal trade.

Northern yards build clinker, each plank lapping the one beneath it ([[doc-vesseltradtn|Seafaring Traditions]]), and the finest shipyards in the north stand at [[place-gnarthborg|Gnarthborg]].

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 42 feet                     |
| Beam           | 13 feet                     |
| Hull depth     | 5 feet, keel to main deck   |
| Burthen        | 27 tuns, which is 216 seams |
| Rig            | one square-rigged mast      |
| Sailing grade  | C                           |
| Oar grade      | D                           |
| Operating crew | 6                           |
| Oarsmen        | 27 on a single bank         |
| Build time     | 1,176 man-days              |
| Cost           | 7,056 Pence                 |

The operating crew steers, commands and works the sail; the oarsmen are counted separately, and the sailing crew can take oars when the hull is rowed. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Strandarv rolls on the grade C table for a square rig in [[doc-seatravel|Travel at Sea]]. On 10% of days it makes no useful progress, and the other days end at 10 leagues (1%), 20 leagues (11%), 30 leagues (38%), 40 leagues (33%) or 50 leagues (7%), an average of 30.4 leagues. A league is 3 nautical miles. Under oars alone it rolls on the grade D oar table: no progress on 5% of days, otherwise 10 leagues (80%) or 20 leagues (15%), an average of 11.0 leagues. While its sail draws it rolls on the sailing table, because oars add little then. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 42-foot hull. The other sizes are [[vehicle-strandarv30|Strandarv 30]], [[vehicle-strandarv36|Strandarv 36]] and [[vehicle-strandarv48|Strandarv 48]].
