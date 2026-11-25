<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->

# Amradad calibration inputs

`amradad-calibration.json` holds the Amradad inputs for the settlement calibration. The calibration's trial parser accepts only `bindings`, `settings`, `selection` and `bands`, so the file carries no labels. This document states the status of every value.

## Use

The file is pasted into the `trial_json` input of the package-build "Settlement real calibration preflight" workflow. The workflow does not read this path or this commit. The pin and the state and culture mapping come from package-build and are not repeated here.

## Status of each value

| Value                                                                              | Status         | Basis                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `settings.urbanShares` 0.05 for `thalorna-note-affiliation-kngdmmrdd`              | decided        | issue comment 57079; 100,000 of 2,000,000                                                                                                                                                                   |
| `selection.candidateLimit` 6                                                       | decided        | issue comment 57078; the pool of six new names                                                                                                                                                              |
| `settings.householdSizes` 6 for `thalorna-note-lore-dunhariclt`                    | trial          | comment 57274 decides only that the size is a labelled trial value; the culture text describes an extended household and gives no number                                                                    |
| `selection.spacingMeters` 8000                                                     | trial          | no decision gives a value; about five miles between new rural places                                                                                                                                        |
| `selection.workLimit` 1000000000                                                   | trial          | no decision gives a value                                                                                                                                                                                   |
| `selection.existingSites` points for Dorvakhend, Rezhakhend, Morvadez, Lemazakhend | decided method | anchor x 1305, y 645 (comment 63261); distances from the placement proposal (comment 60268); Rezhakhend, Lemazakhend and Morvadez snapped to the mapped Far Sea shore (comments 64678, 64725, 64918, 64919) |
| `bindings.rows`, `bindings.subpolities` empty                                      | decided        | the polity declares no settlement rows and no polity names it as parent                                                                                                                                     |

## Decisions that shape the placements

- Rezhakhend's note says two days' ride from Dorvakhend. The placement proposal gives 56.6 miles straight, the manifest points give 56.5 miles from the derived point and 56.1 miles after the Rezhakhend snap, and the owner's answer accepts this (comments 64671, 64918).
- Dorvakhend's eastward distance is the notes' 500 miles to the Bitter Sea, not the 427 miles of the map (comment 64672).
- A derived point that falls in the water or on the wrong shore snaps to the nearest mapped shore point, and each snap is recorded below (comment 64678). Dorvakhend keeps its derived position (comment 64725).
- Rezhakhend's derived point lies in the Far Sea, so it snaps to the Far Sea's western shore at (1680.7, 643.6), 56.1 miles from Dorvakhend. The town stands on the Far Sea's western shore, not the Bitter Sea's eastern shore, and its notes say so (comment 64918, answering question 64817).
- Lemazakhend stands across the bay from Morvadez, on the south shore near the middle of the lake, not on the western shore, and its notes say so (comment 64919, answering question 64819).
- A trial that returns a missing-input receipt is the intended outcome until the remaining inputs arrive; the issue stays open until then (comment 64679).

## Derived and snapped points

A derived point is (1305 + E / 1.43, 645 + S / 1.43), where E is miles inland from the Vilérian shore at Valmakhend and S is miles south of the northern border. One map unit is 1.43 mi. A point in the water or on the wrong shore moves to the nearest point of the mapped lake outline: the Far Sea is feature 23 of the canon map. Dorvakhend keeps its derived point.

| Note        | E (mi) | S (mi) | Derived point   | Manifest point  | Snap distance      |
| ----------- | ------ | ------ | --------------- | --------------- | ------------------ |
| Dorvakhend  | 500    | 40     | (1654.7, 673.0) | (1654.7, 673.0) | none               |
| Rezhakhend  | 540    | 0      | (1682.6, 645.0) | (1680.7, 643.6) | 2.4 units, 3.4 mi  |
| Morvadez    | 600    | 40     | (1724.6, 673.0) | (1726.4, 664.0) | 9.2 units, 13.1 mi |
| Lemazakhend | 571.7  | 28.3   | (1704.8, 664.8) | (1707.0, 666.7) | 2.9 units, 4.2 mi  |

Rezhakhend's E is the midpoint of the Bitter Sea's eastern shore (500 mi to the center plus the 40 mi radius). Lemazakhend's point is the south-west point of the Far Sea's 40-mile shore circle. The derived point for Lemazakhend lies inside the lake polygon.

The Rezhakhend snap moves (1682.6, 645.0) to (1680.7, 643.6): dx 1.9 and dy 1.4 give sqrt(1.9^2 + 1.4^2) = 2.36 units, times 1.43 = 3.4 mi.

Dorvakhend and Rezhakhend are 56.5 mi apart from the derived points (sqrt(27.9^2 + 28.0^2) = 39.5 units, times 1.43) and 56.1 mi apart after the snap (dx 26.0 and dy 29.4 give sqrt(676.0 + 864.4) = 39.25 units, times 1.43). The placement proposal gives 56.6 mi straight. The owner's answer accepts these figures for "two days' ride". Lemazakhend and Morvadez are 28.0 mi apart after the snap, against 30.6 mi before it.

### Lemazakhend's shore

The snapped Lemazakhend point lies on the south shore of the Far Sea at x 1707.0, near the middle of the lake's east-west extent (x 1679.5 to 1749.9). The mapped western shore lies at x 1679 to 1690. Lemazakhend therefore fits "across the bay from Morvadez" (28 mi by boat) and does not fit "on the western shore".

## Unavailable

- `bindings.notes: []` means unavailable: no note names a map cell or burg. It does not mean the notes have no bindings.
- `selection.cellIds`, placement `cellId` and `areaAcres`, land rules, and the urban cities, sources and routes are not supplied.
- The 14 notes with no stated geography have no row.

## candidateLimit

`candidateLimit` caps the map sites that discovery finds, not the names proposed. A selection with more than six candidate sites stops at discovery with a `candidate-limit` refusal, so name exhaustion is reached only when the selection yields six sites or fewer.
