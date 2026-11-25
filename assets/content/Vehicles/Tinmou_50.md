---
shortcode: tinmou50
name: {full: Tinmou 50}
type: vehicle
description: "The Charging Boat of Tantsou's river fleets, a narrow rawhide-covered assault hull 50 feet long, driven by oars and carrying no mast."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Tinmou
  size: 50
  locomotion: [floating]
  role: [military]
  length: 50
  width: 9
  hullDepth: 3.6
  capacity: 128
  crew: 5
  construction: {methods: [bulkheaded], complexity: 4}
  buildTime: 1667
  cost: 10000
  movementProperties:
    - medium: floating
      label: oar
      crew: 23
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.21, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.7, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.04, distance: 30, distUnit: leagues, timeUnit: day}
  appearance:
    form: narrow_hull
    material: wood
    extra_features: [rawhide-covered upper works, long low hull, single bank of oars, no mast]
sohl: {system: {}}
---

# Appearance {#appearance}

A long, narrow hull with a single bank of oars and no mast. The upper works, from the gunwale to the oar ports, are covered in stretched rawhide. The hull is 50 feet long.

# Dossier {#dossier}

The **Tinmou** is the assault craft of the [[affiliation-tantsouempr|Empire of Tantsou]]. The name is [[skill-tantsoulng|Tantsou]], literally Striking Wood, and these pages call the vessel the Charging Boat.

## The Vessel

The Tinmou exists to close with an enemy quickly, grapple and put boarders across. Rawhide on the upper works turns arrows and shrugs off fire arrows, and the crew rows under that cover. Without a mast it presents no rigging to cut and no sail to burn, and it gives up the range and the seaworthiness of a sailing hull for speed over a short distance. It belongs to the rivers, the estuaries and the coastal shallows of [[lore-tantsouclt|Tantsou]]; no sea voyage is planned around it.

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 50 feet                     |
| Beam           | 9 feet                      |
| Hull depth     | 3.6 feet, keel to main deck |
| Burthen        | 16 tuns, which is 128 seams |
| Rig            | none                        |
| Sailing grade  | none                        |
| Oar grade      | A                           |
| Operating crew | 5                           |
| Oarsmen        | 23 on a single bank         |
| Build time     | 1,667 man-days              |
| Cost           | 10,000 Pence                |

The operating crew steers and commands; the oarsmen are counted separately ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The burthen of a warship is hull volume, not cargo space, and so is the capacity recorded here: rowers, water, stores and boarders fill the hull. Any cargo is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]].

## A Day's Passage

With no sail the Tinmou rolls on the grade A oar table in [[doc-seatravel|Travel at Sea]] every day: no useful progress on 5% of days, and the other days end at 10 leagues (21%), 20 leagues (70%) or 30 leagues (4%), an average of 17.3 leagues. A league is 3 nautical miles. The figures assume smooth water and a rested, skilled crew; currents, weather and enemies are for the players and the Game Master to settle.

## Sizes

This note is the 50-foot hull. The other sizes are [[vehicle-tinmou60|Tinmou 60]], [[vehicle-tinmou70|Tinmou 70]] and [[vehicle-tinmou80|Tinmou 80]].
