---
shortcode: ormthresk60
name: {full: Ormthresk 60}
type: vehicle
description: "The Nordmen's longship, a long, narrow clinker hull 60 feet long with one square sail and one bank of oars."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: nordheimnclt
  family: Ormthresk
  size: 60
  locomotion: [floating]
  role: [military]
  length: 60
  width: 10
  hullDepth: 3.8
  capacity: 184
  crew: 8
  construction: {methods: [clinker], complexity: 6}
  buildTime: 3600
  cost: 21600
  movementProperties:
    - medium: floating
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.02, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.19, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.44, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.26, distance: 50, distUnit: leagues, timeUnit: day}
        - {prob: 0.04, distance: 60, distUnit: leagues, timeUnit: day}
    - medium: floating
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.01, distance: 30, distUnit: leagues, timeUnit: day}
  appearance:
    form: narrow_hull
    material: wood
    extra_features: [clinker planking, long low hull, single square sail, single bank of oars]
---

The **Ormthresk** is the longship of the [[lore-nordheimnclt|Nordheimn]] of the [[place-nrdlndsrgn|Nordlands]]. The name is [[skill-nordmalng|Nordmal]]: _orm-_, from _ormla_, a serpent, and _thresk_, a keel. Together they mean the serpent keel, said OHRM-thresk.

## The Vessel

A long, narrow, shallow clinker hull with a single square sail and a single bank of oars. Every man aboard rows, sails and fights, and the hull carries almost no cargo beyond plunder. Kings and great jarls build the larger sizes as prestige ships. The Nordlands keep no galleys; the longship is their one purpose-built warship ([[doc-vesseltradtn|Seafaring Traditions]]).

How a crew sails, shares its take and answers a kingdom's levy is set out in [[lore-nrdlndsraid|The Raid and the Longship]]. The longships of the Nordlands have reached as far south as the [[place-vylarianse|Vilérian Sea]]. The finest shipyards in the north stand at [[place-gnarthborg|Gnarthborg]].

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 60 feet                     |
| Beam           | 10 feet                     |
| Hull depth     | 3.8 feet, keel to main deck |
| Burthen        | 23 tuns, which is 184 seams |
| Rig            | one square-rigged mast      |
| Sailing grade  | B                           |
| Oar grade      | B                           |
| Operating crew | 8                           |
| Oarsmen        | 30 on a single bank         |
| Build time     | 3,600 man-days              |
| Cost           | 21,600 Pence                |

The operating crew steers, commands and works the sail; the oarsmen are counted separately, and the sailing crew can take oars when the hull is rowed. A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The burthen of a warship is hull volume, not cargo space, and so is the capacity recorded here: rowers, water, stores and marines fill the hull. Any cargo beyond plunder is the game master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Ormthresk rolls on the grade B table for a square rig in [[doc-seatravel|Travel at Sea]]. On 5% of days it makes no useful progress, and the other days end at 20 leagues (2%), 30 leagues (19%), 40 leagues (44%), 50 leagues (26%) or 60 leagues (4%), an average of 39.1 leagues. A league is 3 nautical miles. Under oars alone it rolls on the grade B oar table: no progress on 5% of days, otherwise 10 leagues (47%), 20 leagues (47%) or 30 leagues (1%), an average of 14.4 leagues. While its sail draws it rolls on the sailing table, because oars add little then. The figures assume calm open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the game master to settle.

## Sizes

This note is the 60-foot hull. The other sizes are [[vehicle-ormthresk80|Ormthresk 80]], [[vehicle-ormthresk100|Ormthresk 100]] and [[vehicle-ormthresk120|Ormthresk 120]].
