---
shortcode: archivefire
name: {full: The Archive Fire, aliases: [The Burning of the Rolls]}
type: lore
subType: history
description: "About 318 AF the imperial archive on Arvel burns with most of four centuries of edicts and the rolls of the Republic; the Imperial Scribal Guild is given custody of everything written after, and its archive begins that year."
tags: [history, vylaria, ageconquest]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: fire
      when: ~318
      kind: catastrophe
      depth: region
      sources: [place-arvon, place-arvel, affiliation-imprlscrblgld]
      summary: >-
        The imperial archive on Arvel burns, with most of the first three centuries of imperial edicts and the greater part of the Republic's rolls. The Imperial Scribal Guild is given custody of everything written after, and the archive it keeps in Orzara begins in the year of the fire. Nobody asks aloud whether the fire was set.
      standing: single-source
      where:
        locus: [place-arvon]
        reach:
          - place: place-orzara
            how: >-
              the Scribal Guild's archive holds the original of every edict issued in the last four centuries and nothing earlier, and the Republic's history is read from copies
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: victim}
        - {ref: affiliation-imprlscrblgld, role: witness}
      follows:
        - event: "lore-eaglecityrse#raising"
          how: enabled
          note: the archive stood on the hill because the Senate carried its records up to it
      accounts:
        - by: affiliation-imprlscrblgld
          says: >-
            The archive begins in the year of the fire, and everything the Guild holds was written after it.
          agrees: full
        - by: affiliation-vylarinmpr
          says: >-
            A fire in a house of paper is no cause for inquiry.
          agrees: partly
          withholds: what the fire took beyond the series the Guild lists as lost
      unresolved:
        - whether the fire was set, which nobody has asked aloud
        - which of the Republic's rolls were lost, and which had been copied out elsewhere
---

In The Archive Fire, a third-year scribe of [[affiliation-imprlscrblgld|The Imperial Scribal Guild]], set to indexing the archive, is taught the rule on his first morning: "Nothing on these shelves is older than the year the old archive burned. If a citation says otherwise, it is a copy, and your first duty is to say whose."

## The Fire

The imperial archive stood on [[place-arvel|Arvel]], in the compound of the [Imperial Offices]{.name data-type="place/structure"} inside [[place-arvon|Arvon]] (the Inner City). When [[affiliation-seldan|Seldan]] (the Senate) moved up the hill ([[lore-eaglecityrse|The Raising of the Eagle City]]) it carried the rolls of the Republic with it, and the archive grew by every edict the Founder's line and their successors issued. About 318 it burned. The fire took most of the first three centuries of imperial edicts and the greater part of the Republic's rolls, and with them the dockets of the [Kandral]{.name data-type="affiliation/governmental"}.

The cause was never established, and the question was never put in public. A house of paper burns. The Senate recorded the loss and turned to its replacement.

## The Guild

The Imperial Scribal Guild had been chartered in the first century of the [[affiliation-vylarinmpr|Vylarian Empire]] to write the Empire's documents. After the fire the Empire gave it the custody of what was written next. The archive the Guild keeps in [[place-orzara|Orzara City]] begins in 318, and every original in it was written after the fire. The Guild keeps provincial archives at each chapterhouse as well, and many of the copies by which the Republic is now read were made from those. The Guild's charter is renewed by imperial edict in the eighty-third year of the present dynasty, about 489 AF.

## What It Left

- **The four-century horizon.** The Guild's central archive holds the original of every edict issued in the last four centuries, and the history before 318 is read from copies.
- **The Senate's losses.** The rolls of the Republic are known by series, and a scholar working on a decade of the Republic finds that the series for it is lost, or survives in a copy nobody can check.
- **The gap.** Every scholar of the Republic meets it, and the Guild's index lists the missing years and does not say what each held.
- **The Guild's sense of its own fragility.** The documentary apparatus is older and more fragile than its sponsors understand, and the Guild's senior leaders are the ones who say so.

## See Also

- [[affiliation-imprlscrblgld|Imperial Scribal Guild]]—the guild that keeps the archive that began that year
- [[lore-eaglecityrse|The Raising of the Eagle City]]—the hill the archive stood on
- [[place-arvon|Arvon]]—the Inner City where the Offices stands
