---
shortcode: burningeast
name:
  full: The Burning of the East
  aliases: [The Three Days at Dvulgvangr, The Fall of Nulthgard]
type: lore
subType: history
description: "From 604 to 614 AF a Grukar horde raised in the marsh country burned Targud's eastern districts; in 613 it reached the royal hall at Nulthgard, the hird and the eastern bóndi held the ford below it for three days at Dvulgvangr and died there, and King Skruldmýl II moved his hall to Tvalgard and founded the fort-rotation that holds the frontier still."
tags: [history, nordlands]
data:
  packFolder: nordlands
  events:
    - id: horde
      when: 604
      until: 614
      kind: war
      depth: region
      stated: {calendar: domseycount, text: "318 BG"}
      sources:
        - place-targud
        - affiliation-kingdmtrgd
        - lore-trgdahstry
        - lore-grukarfolk
        - place-grkrhlmrgn
        - lore-storalddraskborg
      summary: >-
        A Grukar tribe in the marsh country south and east of Targud raises a horde: a Sha that has watched the frontier for seasons, a Hushk that leads, and Uk in thousands, spawned for the war and driven at the farms. District after district of Targud's east burns over ten summers, and the farms draw back a day's walk down the river. The horde collapses into its own quarrels the year after Nulthgard falls.
      standing: attested
      names: [{name: the Burning of the East, by: affiliation-kingdmtrgd}]
      where:
        locus: [place-targud]
        reach:
          - place: place-grkrhlmrgn
            how: the horde is remembered on the Grukar side as a tribe that outgrew its range and spent itself
            knowledge: named
          - place: place-tvalgard
            how: the ridge above the burned ground becomes the kingdom's seat
            knowledge: named
      who: [{ref: affiliation-kingdmtrgd, role: victim}]
      unresolved:
        - what the Sha wanted, since a Grukar horde that takes nothing it can hold is a horde with a reason the watch never learned
    - id: dvulgvangr
      when: 613
      kind: battle
      depth: region
      stated: {calendar: domseycount, text: "327 BG"}
      sources: [place-dvulgvangr, place-nulthgard, lore-trgdahstry, lore-bloodfield]
      summary: >-
        The horde reaches the royal hall at Nulthgard. King Skruldmýl II's hird and the bóndi of the eastern districts hold the ford below the hall at Dvulgvangr for three days and die there, about eight hundred of them, most carried off by the Grukar so that no pyre was lit and no grave-ale drunk. The hall is burned with four kings' howes beside it, and the king falls back to the ridge at Tvalgard, where he raises his hall and orders every bóndi in the kingdom to stand his weeks on the wall in turn.
      standing: attested
      names:
        - {name: the Three Days at Dvulgvangr, by: affiliation-skaldscrcl}
        - {name: the Fall of Nulthgard, by: affiliation-kingdmtrgd}
      where:
        locus: [place-dvulgvangr]
        reach:
          - place: place-nulthgard
            how: the first royal hall of Targud is a burned shell, with the royal howes on the wrong side of the line
            knowledge: named
          - place: place-tvalgard
            how: the king's hall is raised on the last defensible ridge, and the fort-rotation is mustered through it
            knowledge: named
      who: [{ref: affiliation-kingdmtrgd, role: victim}]
      follows:
        - {event: "lore-burningeast#horde", how: caused, note: the ninth summer of the horde}
      accounts:
        - by: affiliation-kingdmtrgd
          says: >-
            The hird held the ford for three days so that the halls behind it could empty, and every bóndi who stood there was carried off; the kingdom has stood its weeks on the wall since so that it never has to hold a ford with farmers again.
          agrees: full
        - by: affiliation-skaldscrcl
          says: >-
            Knilthann Skraldumakh does not sing the three days, and the Circle keeps the count of the dead from the howes that were never raised.
          agrees: partly
      unresolved:
        - whether Skruldmýl II was at the ford or already on the ridge, which the Driskarukh and the eastern bóndi tell differently
---

"The rotation puts you on the wall to be standing there when the man beside you is not," [[being-knlthnskrldmkh|Knilthann Skraldumakh]] tells the bóndi of a new shift at [[place-tvalgard|Tvalgard]], "not to win." He does not tell them why. The why is the **Burning of the East**, and the skald who sings every last stand in Targud's memory will not sing this one.

## The Horde

In 604 something came out of the marsh country south and east of [[place-targud|Targud]] that the watch had not seen before: a Grukar tribe that had stopped fighting its neighbors. A Sha of that tribe, the Grukar who thinks forward, had spent seasons watching the frontier's roads and walls, and a Hushk led what the Sha planned. Behind them came Uk in thousands, spawned for the war by a tribe that had put a whole larder into soldiers, and driven at the farms the way the [[lore-grukarfolk|Grukar]] drive a weapon they cannot afford to keep. The watch calls it a horde because the north has no better word for a Grukar tribe with a purpose.

The east burned for ten summers. A district's farms were burned in one year and its watchtowers abandoned the next, and the frontier drew back a day's walk down the river, so that the holdings the saga of [[lore-storalddraskborg|Stórald of Draskborg]] describes "a day further down the river than they are now" are the ones the horde took. The king, **Skruldmýl II** of the **Driskarukh**, held his hall at [[place-nulthgard|Nulthgard]], on a rise above a ford at the heart of the old eastern districts, because that was where the kings of Targud had always held it.

## The Three Days

In 613 the horde reached Nulthgard. The king's hird and the bóndi of the eastern districts, farmers with spears who had come in to the hall because there was nowhere else to come, held the ford below the rise for three days, so that the steadings behind it could empty westward. About eight hundred of them died on it. Most were carried off by the Grukar, who take their dead and their enemies' alike, so that no pyre was lit for them and no grave-ale was drunk, and the ford has been a _vrellvöll_ since, a blood-field of the dread, named [[place-dvulgvangr|Dvulgvangr]] for the sleep a man takes standing on watch. The hall burned with four kings' howes beside it, and the howes are on the wrong side of the line now.

Skruldmýl fell back west to the ridge at Tvalgard, the last defensible ground before what was now the burned ground, and raised his hall there. The order he gave from it is the whole system of Targud's defense today: every bóndi in the kingdom would stand his weeks on the wall in rotation, mustered through Tvalgard, so that the frontier would never again be held by farmers who had come to a hall because there was nowhere else. A king's kinsman killed a hound with **Vrellbrandr** in the rout, the sword that must drink when drawn, and [[lore-trgdahstry|Histories and Legends of Targud]] keeps that tale. The horde spent itself the next year, in the quarrels a tribe falls into when its Sha has nothing further to plan, and the Grukar side of the frontier remembers it, if at all, as a tribe that outgrew its range.

## What It Left

- **The burned ground.** Burned farmsteads, abandoned watchtowers, and forests where neither Nordmen nor Grukar travel alone.
- **Dvulgvangr.** The field: thin, dangerous, and double-edged, since what it returns is the steadiness of men who could not leave their post.
- **Nulthgard.** A burned hall-shell, four royal howes, and a ride a king of Targud makes once in his reign to pour the grave-ale at them.
- **Tvalgard and the rotation.** The seat, and the fort-duty that gives every household in the kingdom combat experience; **Braldmýl I**, the next king, raised Draskborg and the beacon line on the burned ground.
- **The silence.** Knilthann, who sings every defeat Targud has, does not sing the three days.

The king's ride to the howes at Nulthgard is due in the present reign, and the escort is short. A party that rides with it crosses the burned ground, pours ale at four howes on the wrong side of the line, and comes back past the ford at dusk, which is the hour the field keeps a man standing.

## See Also

- [[place-dvulgvangr|Dvulgvangr]] · [[place-nulthgard|Nulthgard]]—the field and the ruin
- [[place-tvalgard|Tvalgard]] · [[affiliation-kingdmtrgd|Kingdom of Targud]]—the seat and the rotation
- [[lore-trgdahstry|Histories and Legends of Targud]]—Vrellbrandr and the frontier's memory
- [[lore-storalddraskborg|Stórald of Draskborg]]—the saga of the holdings the horde pushed back
- [[lore-bloodfield|Blood-fields]] · [[lore-domseycount|The Dómsey Count]]
