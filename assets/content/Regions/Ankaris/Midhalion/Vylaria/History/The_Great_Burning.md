---
shortcode: greatburnng
name: {full: The Great Burning, aliases: [The Six Days, The Burning of the Old Hill]}
type: lore
subType: history
description: "About 403 AF the dole fails in Ôrzâra, the Circles riot, the Watch loses the valley wards and fire runs from the Warrens over Antel for six days; the Old Hill's families move to Selvin and do not go back."
tags: [history, vylaria, threeeagles]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: burning
      when: ~403
      kind: catastrophe
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - place-orzara
        - place-antel
        - place-selvin
      summary: >-
        With Hylen's harvest lost to the war, the dole fails in Ôrzâra. The Circles riot, the Watch cannot hold the valley wards, and fire runs from the Warrens over Antel for six days. The families of the Old Hill move to the newer slopes of Selvin and do not go back.
      standing: attested
      names:
        - {name: the Great Burning, by: affiliation-vylarinmpr}
        - {name: the six days, by: place-orzara, gloss: the Warrens' name for the fire}
      where:
        locus: [place-orzara, place-antel]
        reach:
          - place: place-antel
            how: >-
              cellars and foundations under three centuries of cheaper building mark the burned ward, and the Old Hill has been a shabby hill since
            knowledge: named
          - place: place-selvin
            how: >-
              the Old Hill's families rebuilt on the Laurel, and it is the hill a family builds on when it is rising
            knowledge: named
          - place: place-orzara
            how: >-
              the Clearance ringing the city and the district law that banishes forges and the foul trades are the rebuilding's statutes, and every Ôrzâs fears a missed dole
            knowledge: named
      who: [{ref: affiliation-vylrnmltry, role: victim}]
      follows:
        - event: "lore-olcassabtl#olcassa"
          how: caused
          note: the harvest lost to the war is the dole's failure
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            A fire in the poor wards burned for six days in a lean year, and the Ôrzâs of the day rebuilt what he could.
          agrees: partly
          withholds: that no Ôrzâs of the day held the city, and that the rebuilding was the Senate's and the guild-masters'
      unresolved: [whether the first fire was set]
---

A Watch sergeant, showing a new recruit round the lanes of the Old Hill's lower wards, stops at a blank stone wall that rises three storeys with no window in it. "Fire-wall," he says. "Every one in the city is a fire-wall for something that burned, and this one is for the six days. The district law was written by men who watched the Warrens go up."

## The Failed Dole

[[place-orzara|Ôrzâra]] is fed from [[place-hylen|Hylen]], and Hylen's harvests were lost to the war ([[lore-olcassabtl|The Battle of Olcassa]]). About 403 the dole did not come. A citizen's bread is the bargain at the heart of the Empire ([[lore-veteranslaw|The Veterans' Law]]), and the capital's poor had no other.

## The Fire

The Circles riot first. The Watch, which keeps the city beyond the Inner Wall, held the main avenues and lost the valley wards, and a fire started in the Warrens climbed the lanes of **Antel** and burned for six days. The tenements are timber above their ground storeys, the hill-lanes are narrow, and no brigade in the city had water to spare for a ward that was already lost. The Old Hill's upper houses, the Republic's own, burned with the lower.

## The Move to the Laurel

The great families of the Old Hill did not rebuild where their houses had stood. They moved to the newer slopes of **Selvin**, which the fire had not reached, and did not go back. The old Senate hall stood on the crown of the hill and the cellars under it survived. The Old Hill has been a plain hill since, and the Laurel has been the address of the rising.

## The Rebuilding

The Senate and the guild-masters rebuilt. They passed the decree of the Clearance, which set the open ground that rings the city, and the district law that banishes the forges and the foul trades from the walls. Both were written for the next fire, and both are in force.

## What It Left

- **The fear of a missed dole.** Every Ôrzâs since has paid it before he paid anything else.
- **The Old Hill's decay and the Laurel's rise.** The one hill empty and the other full, from the same six days.
- **The Clearance and the district law.** Statutes that carve the city into wards a fire can gut without leaping.
- **The cellars.** The foundations and cellars of the burned ward lie under three centuries of cheaper building, part of the Warrens now.

## See Also

- [[place-antel|Antel]] · [[place-selvin|Selvin]]—the hill that burned and the hill that rose
- [[lore-olcassabtl|The Battle of Olcassa]]—the war behind the failed dole
- [[lore-restorehouse|The Restoration]]—who took the city afterwards
- [[place-orzara|Ôrzâra]]
