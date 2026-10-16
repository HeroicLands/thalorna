---
shortcode: horngorgebtl
name: {full: The Battle of the Horn Gorge, aliases: [The Fourth Expedition]}
type: lore
subType: history
description: "About 143 AF the fourth Vylarian expedition into Asturath, the worst under the Orzas Zoranthos, was let into the gorge below the plateau of Lezkora by the mountain lord Tórsaro, who closed both ends, and the legion died there in two days."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~143
      kind: battle
      depth: region
      sources:
        - place-horngorge
        - place-asturath
        - place-lezkora
        - affiliation-kngdmstrth
        - affiliation-vylrnmltry
      summary: >-
        The fourth expedition into Asturath climbs toward the plateau of Lezkora under the Orzas Zoranthos's felzos. The mountain lord Tórsaro lets it into the gorge below the plateau, closes both ends, and the legion dies over two days among the rocks. Vylaria never sends another; it holds the lowland approaches and leaves the mountains alone.
      standing: attested
      names:
        - {name: the Horn Gorge, by: affiliation-kngdmstrth}
        - {name: the Fourth Expedition, by: affiliation-vylarinmpr}
      where:
        locus: [place-horngorge]
        reach:
          - place: place-asturath
            how: the mountain kingdom keeps the boast that no invader has held its ranges, and a cairn at the gorge's upper end
            knowledge: named
          - place: place-lezkora
            how: the plateau above the gorge is the seat of the High Kings, who hold it because no army has reached it
            knowledge: named
          - place: place-tarvenirgn
            how: the legions' failure fixes the border between the Tarvénian lowlands and the mountains for as long as the Empire holds the lowlands
            knowledge: named
      who:
        - {ref: affiliation-kngdmstrth, role: actor}
        - {ref: affiliation-vylrnmltry, role: victim}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: lore-lowlandstaken
          how: caused
          note: the legions that held the lowlands turned toward the mountains, and four expeditions went up into them
      accounts:
        - by: affiliation-kngdmstrth
          says: >-
            The mountains kill what comes into them, and the gorge is proof.
          agrees: full
        - by: affiliation-vylarinmpr
          says: >-
            The legion was lost in the mountains, and the lowland approaches were held thereafter.
          agrees: partly
          withholds: that the legion was struck from the rolls
      unresolved:
        - where the legion's paychest lay when the ends of the gorge were closed
        - the name of the felzos who led the fourth expedition
---

The shepherds of Asturath do not drive their flocks through the gorge below Lezkora, and they do not say why. On autumn nights the sound of horns comes down the rocks and the echo comes back from a wall at the far end, and the horns are blowing a recall.

## The Fourth Expedition

The legions had taken the lowlands ([[lore-lowlandstaken|The Lowlands Taken]]) and they wanted the mountains above them. Three expeditions had gone into the ranges of [[place-asturath|Asturath]] and come out again with nothing. The fourth went up in the reign of the Orzas Zoranthos about 143 AF, under his _felzos_ (legate), with the intention of climbing to the plateau of [[place-lezkora|Lezkora]] and putting a garrison on it.

## The Gorge

The mountain lord **Tórsaro** knew that a legion would take the road that was easiest to climb. He let it come to the gorge, a long cleft in the rock below the plateau where the ground favors a defender absolutely, and he waited for the last of its baggage to enter. He then closed both ends. The legion was in a trench with its sides lined with archers and its ends full of fallen stone, and it died there over two days among the rocks. The Astúrathi counted the dead afterward and found the _felzos_'s standard.

## What the Empire Did

Vylaria never sent a fifth expedition. The legion was struck off the rolls, and the chancery's account of the Western Wars says that the worst of the four was lost in the mountains and says no more. The Empire held the lowland approaches thereafter and left the mountains alone, which the Astúrathi take as the Empire's acknowledgement.

## What It Left

- **The Horn Gorge.** A blood-field below the plateau, which replays the closing of the gorge ([[place-horngorge|The Horn Gorge]]).
- **Asturath's boast.** The mountain kingdom that was never conquered, and the cairn it raised at the gorge's upper end.
- **The seat of the High Kings.** The reason Lezkora holds the crown: no army that has reached the foot of the plateau has got up it.

## See Also

- [[place-horngorge|The Horn Gorge]]—the ground the battle left
- [[affiliation-kngdmstrth|Kingdom of Asturath]] · [[place-lezkora|Lezkora]]
- [[lore-lowlandstaken|The Lowlands Taken]]—the conquest that led up to it
- [[lore-westernwars|The Western Wars]]—the Vylarian account of the expeditions
