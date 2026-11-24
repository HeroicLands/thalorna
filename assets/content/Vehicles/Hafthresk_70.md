---
shortcode: hafthresk70
name: {full: Hafthresk 70}
type: vehicle
description: "The Nordmen's open-sea trader, a clinker-built hull 70 feet long under a single square sail."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: nordheimnclt
  family: Hafthresk
  size: 70
  locomotion: [floating]
  role: [merchant]
  length: 70
  width: 19
  hullDepth: 9
  capacity: 960
  crew: 9
  construction: {methods: [clinker], complexity: 5}
  buildTime: 4083
  cost: 24500
  movementProperties:
    - medium: floating
      rates:
        - {prob: 0.1, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.01, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.11, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.38, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.33, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.07, distance: 50, distUnit: leagues, timeUnit: day}
  appearance:
    form: round_hull
    material: wood
    extra_features:
      - clinker planking
      - single square sail
      - steering oar on the starboard quarter
      - half-decked fore and aft
      - open hold amidships covered by hides
sohl: {system: {}}
---

# Appearance {#appearance}

A clinker hull, broader and deeper than a warship's, half-decked fore and aft, with an open hold amidships covered by hides. One square sail drives it, and a steering oar hangs on the starboard quarter. A few sweeps stand ready for harbor work. The hull is 70 feet long.

# Dossier {#dossier}

The **Hafthresk** is the open-sea trader of the [[lore-nordheimnclt|Nordheimn]] of the [[place-nrdlndsrgn|Nordlands]]. The name is [[skill-nordmalng|Nordmal]]: _haf-_, the open sea, and _thresk_, a keel. Together they mean the open-sea keel, said HAHF-thresk.

## The Vessel

The Hafthresk is built for long passages in open water. The hull is not rated for oars.

Ships of the Nordlands carry amber, furs, whale ivory and iron south to [[place-midhalnrgn|Midhalión]]. Northern yards build clinker, each plank lapping the one beneath it ([[doc-vesseltradtn|Seafaring Traditions]]), and the finest shipyards in the north stand at [[place-gnarthborg|Gnarthborg]].

## Statistics

| Measure        | Value                        |
| -------------- | ---------------------------- |
| Length         | 70 feet                      |
| Beam           | 19 feet                      |
| Hull depth     | 9 feet, keel to main deck    |
| Burthen        | 120 tuns, which is 960 seams |
| Rig            | one square-rigged mast       |
| Sailing grade  | C                            |
| Oar grade      | none                         |
| Operating crew | 9                            |
| Build time     | 4,083 man-days               |
| Cost           | 24,500 Pence                 |

A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Hafthresk rolls on the grade C table for a square rig in [[doc-seatravel|Travel at Sea]]. On 10% of days it makes no useful progress, and the other days end at 10 leagues (1%), 20 leagues (11%), 30 leagues (38%), 40 leagues (33%) or 50 leagues (7%), an average of 30.4 leagues. A league is 3 nautical miles. It has no oar table. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 70-foot hull. The other sizes are [[vehicle-hafthresk40|Hafthresk 40]], [[vehicle-hafthresk50|Hafthresk 50]] and [[vehicle-hafthresk60|Hafthresk 60]].
