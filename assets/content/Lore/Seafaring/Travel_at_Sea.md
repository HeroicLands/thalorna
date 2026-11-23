---
shortcode: seatravel
name: {full: Travel at Sea, en: [Daily Distance at Sea, Sailing and Rowing Days]}
type: doc
subType: reference
description: "How far a vessel travels in a day under sail or oar: the league, the day and the distance steps, how a sailing or oar grade sets the odds of each distance, and the tables for every grade."
tags: [reference, seafaring, vessels, rules, travel]
---

A voyage is planned a day at a time, and how far a ship gets in a day is left to chance. This note lists the odds of each distance for every sailing grade and every oar grade, with the rules that turn a vessel's grade, rig and hull shape into the table it rolls on. Where a vessel's grade and rig are not stated, they are worked out with [[doc-vesselgrades|Vessel Grades]] and [[doc-vesselrigs|Vessel Rigs]].

## Measures

**League.** Distance at sea is measured in leagues. A league is 3 nautical miles, which is about 3.45 miles or about 5.56 kilometers. Distances over land are in miles.

**Watch.** A watch lasts four hours, so six watches make a day.

**Day.** Under sail a day is all twenty-four hours, since a ship keeps going at night with the watches changing. A day under oar is a day's rowing broken by rests.

**Distance steps.** A table records distance in steps of 10 leagues (about 35 miles). Each step covers the span around it: a result of 30 leagues stands for anything from 25 to 34. The first step above zero, 10, takes in every distance below 15 leagues, and the last step in a table takes in everything beyond it. A step of 0 is a day on which the ship goes nowhere useful.

| Step | Range in leagues | Miles        |
| ---- | ---------------- | ------------ |
| 0    | none             | none         |
| 10   | under 15         | under 52     |
| 20   | 15 to 24         | 52 to 83     |
| 30   | 25 to 34         | 86 to 117    |
| 40   | 35 to 44         | 121 to 152   |
| 50   | 45 to 54         | 155 to 186   |
| 60   | 55 to 64         | 190 to 221   |
| 70   | 65 and over      | 224 and over |

**Average.** The average is what a ship can expect to cover in a day, found by multiplying each step by its share of days and adding the results. It suits planning a whole voyage. For one day at a time, roll on the table.

## Conditions

The tables describe smooth open water, a usable wind and a skilled crew. Contrary currents, storms and heavy seas change a day's run at the table, and the players and the Game Master decide by how much. The tables give no figures for them.

## How the Sailing Table Is Chosen

Three values decide a sailing vessel's table.

**Days of no progress.** A ship that is becalmed or blown back makes no useful headway on some days. The sailing grade sets the share: A 0%, B 0%, C 5%, D 10%, E 20%. The rig then moves it. A ship with only square sails adds 5 points. A ship with only triangular or battened sails takes away 5 points, down to no less than 0%. A mixed rig, square sails together with at least one triangular or battened sail, takes no square-rig penalty, so its share is the grade's base reduced to 0% at every grade. The adjustments are set out in [[doc-vesselrigs|Vessel Rigs]].

**Typical distance.** On days when the ship does move, the grade sets the center of the distances: A 46 (159 miles), B 39 (135), C 34 (117), D 32 (110) and E 28 leagues (97 miles). Two leagues (about 7 miles) are added for a fine hull, whose length is five times its beam or more, and taken away for a bluff hull, whose length is three times its beam or less.

**Spread.** Moving days scatter around the typical distance in a bell curve whose standard deviation is 8 leagues (about 28 miles). The scatter is then sorted into the 10-league steps.

**Forming an adjusted table.** The base tables below show the case with no adjustment. Each step's share is the moving share, which is 100% minus the days of no progress, multiplied by the chance that the bell curve falls between that step's edges, rounded to a whole percent; a cell moves by a point where needed so that the row totals 100%. A grade C ship with a square rig has 10% days of no progress, so the moving share is 90%. That gives 10%, 1%, 11%, 38%, 33% and 7% for steps 0 to 50, where the base row reads 5%, 1%, 11%, 40%, 35% and 8%. A fine or bluff hull moves the center of the bell curve by 2 leagues before the steps are filled, and the share of days with no progress stays the same.

These figures hold for every size of one type of vessel.

## Sailing Days

The sailing table for each grade, before the rig and hull shape change it, is below. Each cell gives the percentage of days that end at that step.

| Sailing grade | 0   | 10  | 20  | 30  | 40  | 50  | 60  | 70  | Average |
| ------------- | --- | --- | --- | --- | --- | --- | --- | --- | ------- |
| A             | 0%  | 0%  | 0%  | 8%  | 37% | 42% | 12% | 1%  | 46.1    |
| B             | 0%  | 0%  | 4%  | 27% | 47% | 20% | 2%  | 0%  | 38.9    |
| C             | 5%  | 1%  | 11% | 40% | 35% | 8%  | 0%  | 0%  | 32.3    |
| D             | 10% | 2%  | 16% | 41% | 27% | 4%  | 0%  | 0%  | 28.5    |
| E             | 20% | 4%  | 24% | 37% | 14% | 1%  | 0%  | 0%  | 22.4    |

**Example.** A grade C ship with a square rig has a 10% chance of a day with no progress (5 from the grade and 5 from the sail). On the days it does move it makes about 34 leagues, about 117 miles, and its adjusted table is the row given above.

## Rowing Days

Oarsmen tire, and that, not the wind, caps a day's rowing, so a rowed day seldom passes 20 leagues (about 69 miles). The oar table serves any vessel that has an oar grade and moves by oars alone, such as when it is becalmed or has to make way against the wind along a coast. A vessel without sails always uses it. The walkers on the treadmills of a paddle-wheel ship are its rowers.

Each oar grade has a 5% chance of a day with no progress. The typical distance is A 18 (62 miles), B 15 (52), C 13 (45), D 11 (38) and E 9 leagues (31 miles), and the spread is 4 leagues (about 14 miles).

| Oar grade | 0   | 10  | 20  | 30  | Average |
| --------- | --- | --- | --- | --- | ------- |
| A         | 5%  | 21% | 70% | 4%  | 17.3    |
| B         | 5%  | 47% | 47% | 1%  | 14.4    |
| C         | 5%  | 66% | 29% | 0%  | 12.4    |
| D         | 5%  | 80% | 15% | 0%  | 11.0    |
| E         | 5%  | 89% | 6%  | 0%  | 10.1    |

A vessel with sails and oars rolls on the sailing table, because oars add little once the sails are drawing. The rowers rest until the wind fails.

## River Vessels

A barge on a river gets most of its movement from the current, from towing and from poling, so these tables do not describe it. Its grades apply on open water.
