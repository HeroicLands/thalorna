---
shortcode: heladvezhnur
name: {full: The Vezhnûr Settlement, aliases: [The Cohort in the Passes]}
type: lore
subType: history
description: "About 226 AF, six years after the Ústaran Schism, a cohort whose officers have gone over to the Black Flame is settled on the high passes above Órashion as frontier colonists under its centurion Vezhnûrikos by an Augustar who will not proscribe the faith, marries into the pass villages and is never recalled."
tags: [history, hellad, peaceage]
data:
  packFolder: byzaria
  events:
    - when: ~226
      kind: founding
      depth: region
      sources:
        - place-eastrnmrch
        - affiliation-orashion
        - affiliation-blackflame
        - affiliation-vylarinmpr
        - place-hekardesert
      summary: >-
        Six years after the Ústaran Schism, a cohort whose officers have gone over to the Black Flame is settled on the high passes above Órashion as frontier colonists under its centurion, Vezhnûrikos. The Augustar who will not proscribe the Black Flame finds the far passes a convenient place for men he will not discipline. The cohort marries into the pass villages and is never recalled.
      standing: reconstructed
      names: [{name: the Cohort in the Passes, by: place-eastrnmrch}]
      where:
        locus: [place-eastrnmrch]
        reach:
          - place: place-hekardesert
            how: >-
              the warriors of the holds raid down into the Hek'ar margin, and the Servants of Vezhnûrikos take their name from the centurion
            knowledge: named
          - place: place-orashion2
            how: >-
              a merchant-diplomat house of the city brokers between the League council and the holds
            knowledge: named
      who:
        - {ref: affiliation-blackflame, role: actor}
        - {ref: affiliation-vylarinmpr, role: author}
      follows:
        - event: lore-ustaranschsm
          how: caused
          note: the cohort's officers go over to the Black Flame after the schism
        - event: "lore-nartumrefuse#break"
          how: enabled
          note: the Augustar's refusal to proscribe the faith is what leaves the cohort undisciplined
        - event: lore-heladeastwar
          how: enabled
          note: the passes the cohort is settled on are the ones the war has just taken
      accounts:
        - by: place-eastrnmrch
          says: >-
            The holds are the League's eastern shield, and the clans fight the desert raiders in country the garrison cannot hold.
          agrees: partly
          withholds: that the shield is made of men no one else would keep
        - by: affiliation-blackflame
          says: >-
            The cohort kept the fire in the passes when the Empire's temples would not have it, and the passes have kept the cohort.
          agrees: partly
      unresolved: [whether the settlement was ordered or only allowed]
---

The League tolerates the clans above Órashion as its eastern shield, and the clans fight the desert raiders in country the garrison cannot hold. They are descended from a cohort.

## The Cohort

About 226, six years after the [[lore-ustaranschsm|Ústaran Schism]] split the Forge-Lord's faith, a cohort of the legions stationed in the east lost its officers to the Black Flame. The officers were the kind of men a general disciplines or a throne proscribes. The Augustar Kàromphôs, who would not proscribe the faith ([[lore-nartumrefuse|Nartûm Refuses the Empire]]), would not discipline them either, and in the far passes above [[affiliation-orashion|Órashion]], at the edge of the province the legions had just won, he found a use for them.

He settled the cohort on the high passes as frontier colonists under its centurion, **Vezhnûrikos**. The passes needed holding and the men needed a place, and no one in the capital asked how the two were being reconciled.

## The Holds

The cohort married into the pass villages. Its sons were raised to arms and its warlords took the centurion's name, **Vezhnûr**, for the people they became. No one recalled the cohort, and the Empire's garrisons in the province left the high passes alone. The holds became a clan-country outside the charter of any city, and they have stayed outside it.

## What the Settlement Left

- **The Vezhnûr holds** and their warlords.
- **The Black Flame** practiced openly there and nowhere else in Byzaría.
- **The Servants of Vezhnûrikos**, the military order that raids down into the Hek'ar margin.
- **The eastern rite's absence.** No priest of the rite has ever reached the holds.

## See Also

- [[lore-ustaranschsm|The Ústaran Schism]]—the schism the cohort's officers answered
- [[lore-nartumrefuse|Nartûm Refuses the Empire]]—the refusal that left them undisciplined
- [[place-eastrnmrch|Eastern March]] · [[affiliation-orashion|Órashion]]
- [[place-hekardesert|Desert of Hek'ar]]
- [[affiliation-blackflame|The Black Flame]]
