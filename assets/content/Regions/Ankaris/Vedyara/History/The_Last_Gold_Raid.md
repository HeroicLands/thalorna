---
shortcode: lastgldrd
name: {full: The Last Gold Raid, aliases: []}
type: lore
subType: history
description: "About 80 BF raiders from a neighboring hill kingdom took a month's gold off Suvargeri's weighing-station; Bharyastan's king Dursabira rode them down in the gorges and returned the gold by weight, and the treaty of horse for gold was sworn at the next weighing. Suvargeri has not lost gold to a raid since."
tags: [history, vedyara]
data:
  culture: vedyariclt
  packFolder: vedyara
  events:
    - when: ~-80
      kind: treaty
      depth: region
      sources: [affiliation-suvrgrjnpd, affiliation-bharyastan, place-weighingstn]
      summary: >-
        Raiders out of a neighboring hill kingdom fall on the weighing-station at the new moon and carry off the month's gold. Bharyastan's king, Dursabira, rides them down in the gorges below the mountain road and returns the gold by weight, and the treaty of horse for gold is sworn at the next weighing. Suvargeri has not lost gold to a raid since.
      standing: single-source
      where:
        locus: [place-weighingstn]
        reach:
          - place: place-raiderscairn
            how: >-
              the raiders are caught in a gorge below the mountain road, and a cairn stands where they fell
            knowledge: named
          - place: place-suvargerijnpd
            how: >-
              the janpoda raises its guard to three hundred, sets observation posts on the high slopes, and rules that the gold never lies overnight in one place
            knowledge: named
      who:
        - {ref: affiliation-bharyastan, role: actor}
        - {ref: affiliation-suvrgrjnpd, role: victim}
      accounts:
        - by: affiliation-suvrgrjnpd
          says: >-
            The gold was returned by weight, every grain of it, and entered at the rail as returned. The treaty has been invoked perhaps a dozen times since and renewed at every succession.
          agrees: full
        - by: affiliation-bharyastan
          says: >-
            The king rode down the raiders and asked nothing for it, and the janpoda offered the tribute of its own accord. That is why the treaty has never needed renegotiating.
          agrees: partly
      unresolved:
        - which hill kingdom the raiders came from; the sabhra record names it and the kingdom it names has changed its dynasty, and its name, since
---

A clerk at the rail of [[place-weighingstn|the weighing-station]] reads the month's gold aloud at every new moon, and a stranger who listens long enough hears him read one line that is not a weight: "[[affiliation-suvrgrjnpd|Suvargeri]] has not lost gold to a raid since the year of the return." **The Last Gold Raid** is the year he means, about 80 BF, and the treaty that came out of it is the reason he can say so.

## The Raid

At the new moon the month's gold lay in the weighing-station waiting to be weighed. Raiders out of a neighboring hill kingdom came down on the station in the night, killed the guards, and carried the gold off down the mountain road toward the gorges. The janpoda then kept a few dozen guards and no posts on the high slopes. Nobody saw them coming.

## The Return

The gold went down the road toward the river country, and the road ran past [[affiliation-bharyastan|Bharyastan]]. Its king, [Dursabira]{.name data-type="being/npc"}, had four hundred horse and a district that grew barley and walnuts and little else. He rode the raiders down in a gorge below the mountain road, killed most of them there, and brought the gold back up to the weighing-station. He had it weighed at the rail against the month's record, and it came to the grain.

At the next new moon Suvargeri's sabhra and the king swore the treaty both sides still keep: Bharyastan sends its horse whenever the janpoda calls, and the janpoda pays an annual weight of gold, weighed at its own station.

## What It Left

- **The treaty.** Eight hundred years old, invoked perhaps a dozen times, renewed without argument at every succession on either side.
- **The guard.** The janpoda raised its guard to three hundred and set observation posts on the mountain's high slopes, and fortified the three temples well enough to hold until the horse arrives.
- **The rule.** The [Weighing]{.name data-type="lore/custom"} is public, every grain is entered at the rail, and the gold never lies overnight in one place.
- **The cairn.** [[place-raiderscairn|The Raiders' Cairn]] stands in the gorge where the raiders fell, and every tribute party adds a stone on the way up.

## See Also

- [[affiliation-suvrgrjnpd|Suvargeri Janpoda]] · [[affiliation-bharyastan|Bharyastan]]—the two parties
- [[place-weighingstn|The weighing-station]]—where the gold was taken from
- [[place-raiderscairn|The Raiders' Cairn]]—where it was taken back
- [[lore-agecopyists|The Age of Copyists]]
