---
shortcode: vesselrigs
name: {full: Vessel Rigs, en: [Rigs and Sails, Rig Types]}
type: doc
subType: reference
description: "The three sail rigs of Thalorna's seas (square, triangular and battened), the crew each mast needs, how a rig changes the chance of a becalmed day, and how masts are written."
tags: [reference, seafaring, vessels, rules]
---

A vessel's rig is the arrangement of its masts and sails. Three rigs are in use on the seas of [[place-worldthlrn|The World of Thalorna]]. Each is described here by what it asks of a crew and what it does to a day's passage. The sailing grade that results from a rig is defined in [[doc-vesselgrades|Vessel Grades]], and the crew it requires is counted in [[doc-vesselcrew|Vessel Crew and Oarsmen]].

## The Three Rigs

| Rig            | Sail                                                                                           | Crew per mast |
| -------------- | ---------------------------------------------------------------------------------------------- | ------------- |
| **Square**     | A four-sided sail that hangs from a crosswise spar on the mast.                                | 2             |
| **Triangular** | A three-cornered sail set along the hull's line on a long slanting spar.                       | 3             |
| **Battened**   | A sail set along the hull's line and held flat by horizontal slats; a single hand can work it. | 1             |

**Square.** A square sail is at its best with the wind behind it and weak with the wind ahead. A ship with nothing but square sails cannot beat to windward, so a headwind or a light breeze stops it on days when other rigs keep moving.

**Triangular.** A triangular sail lets a hull sail close to the wind, so a ship carrying it can work away from a shore the wind is blowing it onto, where a square-rigged ship would be driven aground. The price is labor: each mast needs three hands, more than any other rig.

**Battened.** This is the rig of [[lore-tantsouclt|Tantsou]]. The slats keep the cloth flat and let one hand reef it quickly, so a mast needs a single crew member. A vessel with it sails one grade better (D becomes C). Every grade given for a battened vessel already includes that step, and it is never applied again.

## Writing a Rig

Write a rig by giving a count of masts for each type, with a plus sign between the types, using these abbreviations.

| Abbreviation | Rig        |
| ------------ | ---------- |
| `sq`         | Square     |
| `tri`        | Triangular |
| `bat`        | Battened   |

`2sq+1tri` stands for two masts with square sails and a third with a triangular sail. `1sq` is a single square sail. A vessel with no sail carries no rig.

## Rig and the Becalmed Day

For a vessel whose masts all carry the same kind of sail, the rig moves its chance of a day with no useful progress up or down from the base for its sailing grade, by these amounts in percentage points:

- A square rig adds 5 points, because it cannot work to windward.
- A triangular or battened rig subtracts 5 points, to a floor of 0 percent.

The base chances and the rest of the daily-distance method are in [[doc-seatravel|Travel at Sea]].
