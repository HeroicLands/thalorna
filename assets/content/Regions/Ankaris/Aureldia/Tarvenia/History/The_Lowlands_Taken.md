---
shortcode: lowlandstaken
name: {full: The Lowlands Taken, en: [The Occupation of Lienrik]}
type: lore
subType: history
description: "From about 140 to about 160 AF the legions took Tarvénia's southern coast and central lowlands, made Valthari an imperial port, and held Lienrik as an occupied march, while a therkos who tried to rule Eskarath directly lost his escort in the high meadows."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~140
      until: ~160
      kind: conquest
      depth: region
      sources:
        - place-tarvenirgn
        - place-leonrik
        - place-valthari
        - place-eskarath
        - affiliation-vylrnmltry
        - affiliation-kingdmlnrk
      summary: >-
        The legions take Tarvénia's southern coast and its central lowlands and make Valthari an imperial port. Lienrik is held as an occupied march, with walled towns and a chain of watchtowers to give warning of risings. A therkos who tries to rule Eskarath directly loses his escort in the high meadows and is not replaced.
      standing: attested
      names:
        - {name: the occupation, by: affiliation-kingdmlnrk}
        - {name: the lowland march, by: affiliation-vylarinmpr}
      where:
        locus: [place-leonrik, place-valthari]
        reach:
          - place: place-leonrik
            how: the towers, walled towns and fortified manors of the march stand where the legions built them, and the lords keep precedence in the order the occupation taught
            knowledge: named
          - place: place-valthari
            how: the imperial port's harbor and its crowd of tongues become the free city's fortune
            knowledge: named
          - place: place-eskarath
            how: the highlanders and the High Kings reach an arrangement that outlasts the therkos, and no therkos is sent again
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
        - {ref: affiliation-kingdmlnrk, role: victim}
        - {ref: affiliation-frtrtryskrth, role: witness}
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The lowland approaches were secured and Lienrik was held as a march.
          agrees: full
          withholds: that the mountains above the lowlands were never taken
        - by: affiliation-kingdmlnrk
          says: >-
            We were walled in by our own towers, and we learned the Empire's law from the men who watched us.
          agrees: partly
        - by: affiliation-frtrtryskrth
          says: >-
            A therkos came to the meadows and did not go back, and the Empire sent no other.
          agrees: full
      unresolved: [how many of Lienrik's lords took the Empire's offices and how many refused them]
---

The Lowlands Taken left the lords of the [[affiliation-kingdmlnrk|Kingdom of Lienrik]] with an order of precedence the occupation taught them, and the kingdom does not acknowledge where it came from. The watchtowers across the lowlands are the other half of the lesson.

## The Coast and the Lowlands

The legions came west about 140 AF, the first great wave of [[lore-westernwars|the Western Wars]], and took the southern coast of the Tarvénian peninsula first. The harbors there were the best on the western side of the [[place-vylarianse|Vylarian Sea]], and the [[affiliation-vylarinmpr|Empire]] made one of them, [[place-valthari|Valthari]], an imperial port. The central lowlands followed, farm country the legions could march across and keep. The mountainous [[affiliation-kngdmstrth|Kingdom of Asturath]] was beyond them, and the legions did not go into it ([[lore-horngorgebtl|the Horn Gorge]]).

## Lienrik

[[place-leonrik|Lienrik]] was held as an occupied march. The Tarvénian lords of the lowlands were not dispossessed, but they were watched, by a chain of watchtowers across the country that gave warning of a rising and by walled towns that gave the garrisons somewhere to retreat. The lords built fortified manors of their own and learned the Empire's law, because the Empire's courts were the ones that decided their disputes. A generation of living under it left them with administrative habits their neighbors in the mountains never acquired, and a sense of precedence the Empire had made necessary.

## Eskarath

A _therkos_ (governor) sent to rule the high country of [[place-eskarath|Eskarath]] directly rode into the meadows with an escort and lost it there. The Empire did not replace him. The Eskárathi had fought nobody, and the arrangement they reached afterward with whoever held the lowlands, fighters when the ban was called and left alone otherwise, was the one they had always kept.

## What It Left

- **Lienrik's watchtowers.** A chain of towers across the lowlands, kept up by whoever holds the ground, which the High Kings later turned to face the coast ([[lore-tarvfallsawy|Tarvénia Falls Away]]).
- **Lienrik's precedence and law.** The kingdom's formal courts, its fortified manors and its nobility's concern for lineage.
- **Valthari's harbor.** The port that became a free city and, in time, the home of a trade pidgin.
- **The Eskárathi arrangement.** The highlanders' freedom from _therkoi_, which the High Kings later found it wise to keep.

## See Also

- [[place-leonrik|Lienrik]] · [[affiliation-kingdmlnrk|Kingdom of Lienrik]]
- [[place-eskarath|Eskarath]] · [[place-valthari|Valthari]]
- [[lore-horngorgebtl|The Horn Gorge]]—where the legions stopped
- [[lore-westernwars|The Western Wars]]—the conquests it belongs to
