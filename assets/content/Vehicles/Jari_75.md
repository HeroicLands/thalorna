---
shortcode: jari75
name: {full: Jari 75}
type: vehicle
description: "The War Junk of Tantsou and Jenchai, a lean seagoing warship 75 feet long with battened sails and a bank of oars."
tags: []
data:
  templatePriority: null
  packFolder: vehicles
  culture: tantsouclt
  family: Jari
  size: 75
  locomotion: [floating]
  role: [military]
  length: 75
  width: 17
  hullDepth: 7
  capacity: 712
  crew: 10
  construction: {methods: [bulkheaded], complexity: 6}
  buildTime: 5625
  cost: 33750
  movementProperties:
    - medium: floating
      label: sail
      rates:
        - {prob: 0.04, distance: 20, distUnit: leagues, timeUnit: day}
        - {prob: 0.27, distance: 30, distUnit: leagues, timeUnit: day}
        - {prob: 0.47, distance: 40, distUnit: leagues, timeUnit: day}
        - {prob: 0.2, distance: 50, distUnit: leagues, timeUnit: day}
        - {prob: 0.02, distance: 60, distUnit: leagues, timeUnit: day}
    - medium: floating
      label: oar
      crew: 64
      rates:
        - {prob: 0.05, distance: 0, distUnit: leagues, timeUnit: day}
        - {prob: 0.66, distance: 10, distUnit: leagues, timeUnit: day}
        - {prob: 0.29, distance: 20, distUnit: leagues, timeUnit: day}
  appearance:
    form: narrow_hull
    material: wood
    extra_features: [lean sharp hull, battened sails, oars for maneuvering, two masts]
---

# Appearance {#appearance}

A lighter, sharper hull than a merchant junk, with a long low line, battened sails on two masts and a bank of oars for maneuvering in action. The hull is 75 feet long.

# Dossier {#dossier}

The **Jari** is the seagoing warship of the [[affiliation-tantsouempr|Empire of Tantsou]] and the [[affiliation-jenchaiempr|Jenchai Empire]], which both build it. The name is [[skill-tantsoulng|Tantsou]], literally Blade Sail, and English calls the vessel the War Junk.

## The Vessel

The Jari is a [[doc-vesseljunks|junk]]: a bulkheaded hull under battened sails on two or more masts. The islands call it the Rija in [[skill-jurthatlng|Jurthati]]. The Jari is built for fighting at sea, and it is lighter and sharper than a merchant junk of the same length. It escorts convoys and hunts pirates, and on [[place-easternstrt|The Eastern Strait]] both empires put it into their fleets. Its sails give it the range and its oars give it control in a fight, in a calm and in a narrow channel. Jenchai's crews are the better, in keeping with the standing of its navy ([[doc-vesseltradtn|Seafaring Traditions]]).

## Statistics

| Measure        | Value                       |
| -------------- | --------------------------- |
| Length         | 75 feet                     |
| Beam           | 17 feet                     |
| Hull depth     | 7 feet, keel to main deck   |
| Burthen        | 89 tuns, which is 712 seams |
| Rig            | two battened masts          |
| Sailing grade  | B                           |
| Oar grade      | C                           |
| Operating crew | 10                          |
| Oarsmen        | 64 on a single bank         |
| Build time     | 5,625 man-days              |
| Cost           | 33,750 Pence                |

The operating crew steers, commands and works the sails; the oarsmen are counted separately, and the sailing crew can take oars when the hull is rowed ([[doc-vesselcrew|Vessel Crew and Oarsmen]]). The burthen of a warship is hull volume, not cargo space, and so is the capacity recorded here: oarsmen, marines, water and stores fill the hull. Any cargo is the Game Master's choice.

Length, beam, hull depth and burthen follow [[doc-vesselhulls|Vessel Dimensions and Burthen]], and the time and cost, counted in [[miscgear-pence|Pence]], follow [[doc-vesselbuild|Shipbuilding Time and Cost]]. The grades are explained in [[doc-vesselgrades|Vessel Grades]] and the rig in [[doc-vesselrigs|Vessel Rigs]].

## A Day's Passage

Under sail the Jari rolls on the grade B table for a battened rig in [[doc-seatravel|Travel at Sea]]: every day ends at 20 leagues (4%), 30 leagues (27%), 40 leagues (47%), 50 leagues (20%) or 60 leagues (2%), an average of 38.9 leagues. Under oars alone it rolls on the grade C oar table: no useful progress on 5% of days, and the other days end at 10 leagues (66%) or 20 leagues (29%), an average of 12.4 leagues. While its sails draw it rolls on the sailing table, because oars add little then. A league is 3 nautical miles. The figures assume smooth open water, a usable wind and a skilled crew; contrary currents, storms and heavy seas are for the players and the Game Master to settle.

## Sizes

This note is the 75-foot hull. The other sizes are [[vehicle-jari60|Jari 60]] and [[vehicle-jari90|Jari 90]].
