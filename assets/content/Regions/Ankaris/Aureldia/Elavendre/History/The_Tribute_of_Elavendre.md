---
shortcode: elvtribute
name: {full: The Tribute of Élavendre, aliases: [The Treaty of Valdun]}
type: lore
subType: history
description: "From about 166 to 171 AF a Vylarian legion struck into the hills of Áuldalon and was harried into the forest margin, a cohort was lost, and Queen Réidane treated at Valdun: Élavendre kept its laws and its line and paid a yearly tribute in silver, and a Vylarian felzos took a house at Péravel."
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
        - place-auldalon
        - place-valdun
        - place-beravel
      summary: >-
        From the lowlands the legions have taken, a legion strikes north-west into the hills of Áuldalon. The hill levy and the Áelendan war-bands give it no battle; they harry it toward the forest margin, where a cohort that follows a path is not seen again. Queen Réidane of the house of Orethan treats at Valdun. Élavendre keeps its laws, its customs and its line, and pays a yearly tribute in silver, and a Vylarian felzos takes a house at Péravel. The Thordimalon comes in by the felzos's door, and the University of Péravel is chartered about 230.
      standing: attested
      names:
        - {name: the Tribute of Élavendre, by: affiliation-vylarinmpr}
        - {name: the Treaty of Valdun, by: affiliation-kngdmlvndr}
      where:
        locus: [place-auldalon, place-valdun]
        reach:
          - place: place-beravel
            how: the felzos's house becomes the oldest court of the University, and the Order's presence in the capital begins at its door
            knowledge: named
          - place: place-valdun
            how: the first wall is raised after the treaty, and the imperial road ends at its gate
            knowledge: named
          - place: place-alndntrblnds
            how: the Áelendan hold the Order's foothold in the kingdom as the oldest of their grievances against it
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
          note: the legion marches from the lowlands and the march of Lienrik
        - event: lore-firstcrown
          how: answered
          note: the oath sworn at the first crowning is tested by an army
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            Élavendre was entered at its edges and came to terms as a tributary.
          agrees: partly
          withholds: that a cohort was lost in the Áuldalon woods and the legion was not given a battle
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
        - whether the Áelendan were consulted before the queen treated at Valdun
---

The Tribute of Élavendre is marked by imperial milestones on the road out of [[place-auldalon|Áuldalon]] that stop at [[place-valdun|Valdun]]. The road beyond is the kingdom's own.

## The March

The legions had taken the lowlands of the [[place-tarvenirgn|Tarvénia Region]] and held [[place-leonrik|Lienrik]] as an occupied march by the middle of the second century ([[lore-lowlandstaken|The Lowlands Taken]]). From there a legion struck north-west into the eastern hills of Áuldalon, on the road a column would take to the [[place-ellive|Éllive]] basin. It was a march of some three hundred miles.

The hill levy and the Áelendan war-bands gave the legion no battle. The legion found a country of ditched steadings and empty ground, and the levy took a wagon here and a picket there and fell back. The war-bands came down out of the mountains behind it and out of the forest ahead of it, and drew the column into the forest margin. A cohort that followed a path into the woods was not seen again.

## Valdun

Queen **[Réidane]{.name data-type="being/npc"}** of the house of [Orethan]{.name data-type="affiliation/lineage"} saw that she could not defeat the legion and that it could not defeat the kingdom, and she treated with the _felzos_ (legate) at Valdun. The terms were these. The [[affiliation-kngdmlvndr|Kingdom of Élavendre]] would keep its own laws, its customs and its line of kings. It would pay a yearly tribute in silver. And a Vylarian _felzos_ would take a house in [[place-beravel|Péravel]] to receive it.

The [[lore-aelendnppl|Áelendan People]] were no party to the treaty. The Tree-Line oath meant the crown could not speak for the mountains, and the queen did not claim to. The treaty bound the lowland kingdom to the [[affiliation-vylarinmpr|Vylarian Empire]] and left the tribal lands, as they had always been, outside the crown's writ ([[lore-firstcrown|The First Crowning of Élavendre]]).

The road the legion had marched became the tribute's road. Silver went east along it to the imperial treasury. The legion's engineers had marked the road with imperial milestones as far as Valdun, and they set none beyond, since the Empire laid no road west of the treaty town. The town raised its first wall that year.

## The Felzos's House

The Empire's _felzos_ took a house at Péravel and lived in it. [[affiliation-ordoarcanis|Thordimalon]] (the Arcane Order) came in by the _felzos_'s door: first clerks, then lecturers, then a school. The [University of Péravel]{.name data-type="affiliation"} was chartered about 230 AF, and the _felzos_'s house became its oldest court.

The Áelendan have never forgiven the door. Order expeditions have taken artifacts from the sacred sites for as long as the Order has been permitted into the kingdom, and the Áelendan count the permission, and not any single theft, as the offense.

## What It Left

- **The felzos's house,** now the University's oldest court, and the Order's foothold in the capital ([[place-beravel|Péravel]]).
- **[The Tribute Road]{.name data-type="place/feature"}.** Imperial milestones that run from the east and stop at Valdun ([[place-valdun|Valdun]]).
- **The Lost Cohort's camp,** a ditched camp in the Áuldalon woods that hunters find and cannot find again ([[place-auldalon|Áuldalon]]).
- **The kingdom's standing.** Élavendre paid as a tributary of the Empire and was never a province of it; the Empire kept a _felzos_ at Péravel and no _therkos_ (governor), and the tribute lapsed with [[lore-crownssettle|The Settlement of the Crowns]].
- **The oldest grievance.** The Áelendan hold the Order's welcome against the crown that gave it.

## See Also

- [[lore-westernwars|The Western Wars]]—the Vylarian account of the campaigns
- [[lore-lowlandstaken|The Lowlands Taken]]—the conquest the march began from
- [[lore-firstcrown|The First Crowning of Élavendre]]—the oath the queen kept
- [[lore-sorvandaclose|The Sórvanda Closing]]—what the tribute cost a later king
- [[place-valdun|Valdun]] · [[place-auldalon|Áuldalon]] · [[place-beravel|Péravel]]
