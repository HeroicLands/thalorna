---
shortcode: leanyear
name: {full: The Year of the Barns, en: [The Failed Rains]}
type: lore
subType: history
description: "In 641 AF the rains failed in the grain belt, the granary monasteries fed the villages from their barns, and the abbots refused every prince the count of what they held; the princes have wanted that count since."
tags: [history, velanthia]
data:
  culture: velanthclt
  packFolder: velanthia
  events:
    - id: lean
      when: 641
      kind: catastrophe
      depth: region
      sources:
        - place-velanthrgn
        - affiliation-grnrymnstrs
        - affiliation-prncdmzhtvsh
        - affiliation-lizelas
      summary: >-
        The rains fail across the black-earth belt and the harvest comes in at a fraction of its measure. The granary monasteries open their barns to the villages, the starving walk to their gates, and the abbots refuse the princes any count of what the barns hold.
      standing: attested
      names: [{name: the Year of the Barns, by: affiliation-grnrymnstrs}]
      where:
        locus: [place-velanthrgn]
        reach:
          - place: place-heladrgn
            how: the grain that would have gone south stays in the barns of the belt, and the Hellád's buyers go short
            knowledge: named
      who:
        - {ref: affiliation-grnrymnstrs, role: actor}
        - {ref: affiliation-prncdmzhtvsh, role: victim}
      accounts:
        - by: affiliation-grnrymnstrs
          says: >-
            The barns were full for the people who came to them. A prince's count would have made them his barns, and a prince's barns are opened for a prince's purposes.
          agrees: partly
      unresolved: [how much grain the barns held on the day the first gate was opened]
---

Velanthia's famine year is told in barns, not in battles. **The Year of the Barns**, 641 AF, is the year the villages learned how many of them ate from a monastery, and the year the princes learned that they could not count the monastery's grain.

## The Rains

The grain belt depends on reliable rain, and in 641 AF it did not come. The spring fell short, the summer burned, and the harvest was a fraction of the measure. The rivers kept running, as they do, with the snowmelt of the northern hills, so the failure was a hardship and not a collapse. A hardship is still a famine to the people who live through it.

The [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]] holds the lowlands and takes its tithe in kind, and its own barns were thin. The villagers who could not feed themselves walked to the nearest house of the [[affiliation-grnrymnstrs|Granary Monasteries of Lizelas]].

## The Barns

The houses of the [[affiliation-lizelas|Faith of Lizelas]] had kept a reserve for a bad year, as the harvest vows require, and the year opened it. Each house took in the starving at its gate, fed them from its own barn and gave seed grain to the villages in the spring, and no starbrat asked a prince's leave. The houses that fed the most people were the ones that had kept the most grain. A prince who had never asked what the barns held learned that a large share of his people ate from them.

He asked. The lowland prince sent his keeper of the granary to the houses to count what the barns held, and the abbots refused him entry. The refusal was courteous and complete, and the heads of the houses met and agreed that none of them would open a barn to a prince's count. They gave the same answer to the port's merchant houses, who offered to lend against the reserve.

## What It Left {#what-it-left}

- **The uncounted reserve.** The houses keep their granaries closed to every prince's count, and the princes can neither count the grain nor claim it.
- **The mediators.** Princes and Hosts take their quarrels to the abbots, because the abbots fed both sides' people and took neither side's part.
- **The question.** In a bad year a village that was fed from a barn asks why the barns were full, and a prince who cannot answer for the barns is the one the villages blame.

## See Also {#see-also}

[[affiliation-grnrymnstrs|Granary Monasteries of Lizelas]]
: the houses that opened their barns

[[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]]
: the prince the villages blame

[[affiliation-lizelas|Faith of Lizelas]]
: the faith that keeps the houses
