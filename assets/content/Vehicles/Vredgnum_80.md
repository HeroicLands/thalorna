---
shortcode: vredgnum80
name: {full: Vredgnum 80}
type: vehicle
description: "The Nordmen's bulk carrier, a high-sided clinker hull 80 feet long with a sternpost rudder."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: nordheimnclt
  family: Vredgnum
  size: 80
  locomotion: [floating]
  role: [merchant]
  length: 80
  width: 29
  hullDepth: 15
  capacity: 2784
  crew: 10
  construction: {methods: [clinker], complexity: 6}
  buildTime: 6400
  cost: 38400
  movementProperties:
    - medium: floating
      rates:
        - {prob: 0.15, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.03, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.2, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.4, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.2, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.02, distance: 50, distUnit: leagues, timeUnit: day}
  appearance:
    form: flat_bottomed_hull
    material: wood
    extra_features:
      - clinker planking
      - high straight sides
      - full decks
      - single square sail
      - sternpost rudder
---

The **Vredgnum** is the bulk carrier of the [[lore-nordheimnclt|Nordheimn]] of the [[place-nrdlndsrgn|Nordlands]]. The name is [[skill-nordmalng|Nordmal]]: _vred-_, from _vredi_, wide, and _gnum_, a clay pot. Together they mean the wide pot, said VRED-gnoom.

## The Vessel

A flat-floored clinker hull with high straight sides, full decks and a rudder hung on the sternpost. It is slow and wallows, but it carries much more cargo than a Hafthresk of the same length, and its freeboard lets it fight off raiders. Merchants favor it and traditionalists mock it. Its high sides make it the best candidate for conversion to a warship ([[doc-vesselwar|Merchant Ships in War]]).

Northern yards build clinker, each plank lapping the one beneath it ([[doc-vesseltradtn|Seafaring Traditions]]), and the finest shipyards in the north stand at [[place-gnarthborg|Gnarthborg]].

## Statistics

| Measure        | Value                          |
| -------------- | ------------------------------ |
| Length         | 80 feet                        |
| Beam           | 29 feet                        |
| Hull depth     | 15 feet, keel to main deck     |
| Burthen        | 348 tuns, which is 2,784 seams |
| Rig            | one square-rigged mast         |
| Sailing grade  | D                              |
| Oar grade      | none                           |
| Operating crew | 10                             |
| Build time     | 6,400 man-days                 |
| Cost           | 38,400 Pence                   |

A sailing hull at sea carries about twice its operating crew, to stand watches and cover sickness and losses ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The number of passengers a hull takes aboard is the game master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], the crew follows [[doc-vesselcrew|Vessel Crew and Oarsmen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Vredgnum rolls on the grade D table for a square rig in [[doc-seatravel|Travel at Sea]]. On 15% of days it makes no useful progress, and the other days end at 10 leagues (3%), 20 leagues (20%), 30 leagues (40%), 40 leagues (20%) or 50 leagues (2%), an average of 25.3 leagues. A league is 3 nautical miles. It has no oar table. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the game master to settle.

## Sizes

This note is the 80-foot hull. The other sizes are [[vehicle-vredgnum50|Vredgnum 50]], [[vehicle-vredgnum60|Vredgnum 60]] and [[vehicle-vredgnum70|Vredgnum 70]].
