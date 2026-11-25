---
shortcode: twenmou150
name: {full: Twenmou 150}
type: vehicle
description: "The Paddle-Wheel Ship of Tantsou, an enclosed hull 150 feet long driven by paddle wheels turned from inside, with no mast and no exposed rowers."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Twenmou
  size: 150
  locomotion: [floating]
  role: [military]
  length: 150
  width: 33
  hullDepth: 11
  capacity: 4360
  crew: 15
  construction: {methods: [bulkheaded], complexity: 8}
  buildTime: 30000
  cost: 180000
  movementProperties:
    - medium: floating
      label: paddle wheel
      crew: 248
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.01, distance: 30, distUnit: leagues, timeUnit: day}
  appearance:
    form: round_hull
    material: wood
    extra_features: [fully enclosed hull, paddle wheels at the sides, no mast, no exposed rowers]
sohl: {system: {}}
---

# Appearance {#appearance}

A broad enclosed hull with a paddle wheel on each side and no mast. No rowers are visible. The hull is 150 feet long.

# Dossier {#dossier}

The **Twenmou** is the river warship of the [[affiliation-tantsouempr|Empire of Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Walking Wood, and these pages call the vessel the Paddle-Wheel Ship.

## The Vessel

Crews walk treadmills inside an enclosed hull and turn the wheels, so no rower is exposed to arrows. The ship holds its course against a current and in a dead calm, which a sailing hull cannot, and in river warfare it is the vessel an enemy fears most. It is complex and expensive to build: its complexity factor is the highest of the four [[lore-tantsouclt|Tantsou]] war hulls.

## Statistics

| Measure        | Value                          |
| -------------- | ------------------------------ |
| Length         | 150 feet                       |
| Beam           | 33 feet                        |
| Hull depth     | 11 feet, keel to main deck     |
| Burthen        | 545 tuns, which is 4,360 seams |
| Rig            | none                           |
| Sailing grade  | none                           |
| Oar grade      | B                              |
| Operating crew | 15                             |
| Oarsmen        | 248 treadmill walkers          |
| Build time     | 30,000 man-days                |
| Cost           | 180,000 Pence                  |

The operating crew steers and commands. The treadmill walkers are counted as oarsmen ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The burthen of a warship is hull volume, not cargo space, and so is the capacity recorded here: walkers, water, stores and soldiers fill the hull. Any cargo is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]].

## A Day's Passage

With no sail the Twenmou rolls on the grade B oar table in [[doc-seatravel|Travel at Sea]] every day: no useful progress on 5% of days, and the other days end at 10 leagues (47%), 20 leagues (47%) or 30 leagues (1%), an average of 14.4 leagues. A league is 3 nautical miles. The figures assume smooth water and rested walkers; currents, weather and enemies are for the players and the Game Master to settle.

## Sizes

This note is the 150-foot hull. The other sizes are [[vehicle-twenmou80|Twenmou 80]], [[vehicle-twenmou100|Twenmou 100]] and [[vehicle-twenmou120|Twenmou 120]].
