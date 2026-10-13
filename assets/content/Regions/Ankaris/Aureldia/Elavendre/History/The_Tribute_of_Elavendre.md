---
shortcode: elvtribute
name: {full: The Tribute of Élavendre, aliases: [The Treaty of Valdûn]}
type: lore
subType: history
description: "From about 166 to 171 AF a Vylarian legion struck into the hills of Brynavar and was harried into the forest margin, a cohort was lost, and Queen Réidhanë treated at Valdûn: Élavendre kept its laws and its line and paid a yearly tribute in silver, and a Vylarian legate took a house at Béravel."
tags: [history]
data:
  culture: elavendriclt
  packFolder: elavendre
  events:
    - when: ~166
      until: ~171
      kind: war
      depth: region
      sources:
        - affiliation-kngdmlvndr
        - affiliation-vylrnmltry
        - affiliation-vylarinmpr
        - affiliation-ordoarcanis
        - place-brynavar
        - place-valdun
        - place-beravel
      summary: >-
        From the lowlands the legions have taken, a legion strikes north-west into the hills of Brynavar. The hill levy and the Áelendan war-bands give it no battle; they harry it toward the forest margin, where a cohort that follows a path is not seen again. Queen Réidhanë of the house of Oréthan treats at Valdûn. Élavendre keeps its laws, its customs and its line, and pays a yearly tribute in silver, and a Vylarian legate takes a house at Béravel. The Ordo Arcanis comes in by the legate's door, and the University of Béravel is chartered about 230.
      standing: attested
      names:
        - {name: the Tribute of Élavendre, by: affiliation-vylarinmpr}
        - {name: the Treaty of Valdûn, by: affiliation-kngdmlvndr}
      where:
        locus: [place-brynavar, place-valdun]
        reach:
          - place: place-beravel
            how: the legate's house becomes the oldest court of the University, and the Ordo's presence in the capital begins at its door
            knowledge: named
          - place: place-valdun
            how: the first wall is raised after the treaty, and the imperial road ends at its gate
            knowledge: named
          - place: place-alndntrblnds
            how: the Áelendan hold the Ordo's foothold in the kingdom as the oldest of their grievances against it
            knowledge: named
          - place: place-elavendre
            how: the crown pays for centuries and keeps its law, its customs and its line, and is not made a province
            knowledge: named
      who:
        - {ref: affiliation-kngdmlvndr, role: signatory}
        - {ref: affiliation-vylarinmpr, role: signatory}
        - {ref: affiliation-vylrnmltry, role: victim}
        - {ref: lore-aelendnppl, role: actor}
        - {ref: affiliation-ordoarcanis, role: witness}
      follows:
        - event: "lore-westernwars#wars"
          how: enabled
          note: the Empire's western campaigning reaches the kingdom's eastern hills
        - event: lore-lowlandstaken
          how: enabled
          note: the legion marches from the lowlands and the march of Léonrik
        - event: lore-firstcrown
          how: answered
          note: the oath sworn at the first crowning is tested by an army
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            Élavendre was entered at its edges and came to terms as a tributary.
          agrees: partly
          withholds: that a cohort was lost in the Brynavar woods and the legion was not given a battle
        - by: affiliation-kngdmlvndr
          says: >-
            The queen kept the kingdom whole, and the silver was the price of its law.
          agrees: full
        - by: lore-aelendnppl
          says: >-
            We did not fight the legion. We let it walk until it was lost.
          agrees: partly
          withholds: that the Áelendan took no part in the treaty and did not sign it
      unresolved:
        - which path the lost cohort followed, and from whom it learned that there was one
        - whether the Áelendan were consulted before the queen treated at Valdûn
---

The imperial milestones on the road out of Brynavar stop at Valdûn. The road beyond is the kingdom's own.

## The March

The legions had taken the lowlands of Tarvénia and held Léonrik as an occupied march by the middle of the second century ([[lore-lowlandstaken|The Lowlands Taken]]). From there a legion struck north-west into the eastern hills of [[place-brynavar|Brynavar]], on the road a column would take to the [[place-tirwen|Tirwen]] basin. It was a march of some three hundred miles.

The hill levy and the Áelendan war-bands gave the legion no battle. The legion found a country of ditched steadings and empty ground, and the levy took a wagon here and a picket there and fell back. The war-bands came down out of the mountains behind it and out of the forest ahead of it, and drew the column into the forest margin. A cohort that followed a path into the woods was not seen again.

## Valdûn

Queen **Réidhanë** of the house of Oréthan saw that she could not defeat the legion and that it could not defeat the kingdom, and she treated with the legate at Valdûn. The terms were these. Élavendre would keep its own laws, its customs and its line of kings. It would pay a yearly tribute in silver. And a Vylarian legate would take a house in [[place-beravel|Béravel]] to receive it.

The Áelendan were no party to the treaty. The Tree-Line oath meant the crown could not speak for the mountains, and the queen did not claim to. The treaty bound the lowland kingdom to the Empire and left the tribal lands, as they had always been, outside the crown's writ ([[lore-firstcrown|The First Crowning of Élavendre]]).

The road the legion had marched became the tribute's road. Silver went east along it to the imperial treasury. The legion's engineers had marked the road with imperial milestones as far as Valdûn, and they set none beyond, since the Empire laid no road west of the treaty town. The town raised its first wall that year.

## The Legate's House

The Empire's legate took a house at Béravel and lived in it. The Ordo Arcanis came in by the legate's door: first clerks, then lecturers, then a school. The University of Béravel was chartered about 230 AF, and the legate's house became its oldest court.

The Áelendan have never forgiven the door. Ordo expeditions have taken artifacts from the sacred sites for as long as the Ordo has been permitted into the kingdom, and the Áelendan count the permission, and not any single theft, as the offense.

## What It Left

- **The legate's house,** now the University's oldest court, and the Ordo's foothold in the capital ([[place-beravel|Béravel]]).
- **The Tribute Road.** Imperial milestones that run from the east and stop at Valdûn ([[place-valdun|Valdûn]]).
- **The Lost Cohort's camp,** a ditched camp in the Brynavar woods that hunters find and cannot find again ([[place-brynavar|Brynavar]]).
- **The kingdom's standing.** Élavendre paid as a tributary of the Empire and was never a province of it; the Empire kept a legate at Béravel and no governor, and the tribute lapsed with [[lore-crownssettle|the Settlement of the Crowns]].
- **The oldest grievance.** The Áelendan hold the Ordo's welcome against the crown that gave it.

## See Also

- [[lore-westernwars|The Western Wars]]—the Vylarian account of the campaigns
- [[lore-lowlandstaken|The Lowlands Taken]]—the conquest the march began from
- [[lore-firstcrown|The First Crowning of Élavendre]]—the oath the queen kept
- [[lore-ardwynclose|The Ardwyn Closing]]—what the tribute cost a later king
- [[place-valdun|Valdûn]] · [[place-brynavar|Brynavar]] · [[place-beravel|Béravel]]
