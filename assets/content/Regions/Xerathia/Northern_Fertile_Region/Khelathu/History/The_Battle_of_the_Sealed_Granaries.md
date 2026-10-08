---
shortcode: sealedgran
name: {full: The Battle of the Sealed Granaries, aliases: []}
type: lore
subType: history
description: "In 268 AF the Halzi'a of Anlagh-Zetûn raised the upper river and the temple levies against the guard of the false god-king, broke the granary gates, and sealed the dead of both sides in an emptied granary without rites."
tags: [history, khelathu]
data:
  packFolder: regkhhist
  events:
    - when: 268
      stated: {calendar: khelathclndr, text: "2378 ST"}
      precision: year
      kind: battle
      depth: region
      sources:
        - place-anlaghzetun
        - affiliation-selatnlghztn
        - affiliation-garzinelrelu
        - lore-failfloods
      summary: >-
        Gezanlaghur of Anlaghet'Zaru, Halzi'a of Anlagh-Zetûn, raises the upper river with the temple levies and marches on the great granaries that the god-king's guard holds sealed. The guard fights at the granary gates; when the gates fall, the dead of both sides are thrown into an emptied granary and shut in haste without rites, because there is no grain left to pay the embalmers. The god-king is taken within the month.
      standing: single-source
      where:
        locus: [place-anlaghzetun]
        reach:
          - place: place-amqelulegez
            how: the barges of the river-port carry the levies down from the basin and the first sacks of freed grain back up
            knowledge: named
          - place: place-galezkara
            how: the host goes on down the river to the capital, where the god-king is taken within the month
            knowledge: named
          - place: place-yathtelgu
            how: the freed grain reaches the Great Temple, where the judgment is held
            knowledge: named
      who:
        - {ref: affiliation-selatnlghztn, role: actor}
        - {ref: affiliation-garzinelrelu, role: victim}
        - {ref: being-falseuqaa, role: victim}
      follows:
        - event: lore-failfloods
          how: caused
          note: the rising is the answer to the sealed granaries and the hidden famine
      accounts:
        - by: affiliation-uqaa
          says: >-
            A judgment. The heart of even a Gar-Aû is weighed, and the god let the upper river be the scale.
          agrees: full
          withholds: the dead of the granary gates, whom the temple's accounts do not name
        - by: affiliation-selatnlghztn
          says: >-
            The selat took back its own grain. There was none left to pay an embalmer and none to feed a priest, so the gate was shut on the dead until the rites could be paid, and the rites were never paid.
          agrees: full
          withholds: how many lay behind the gate, and whose they were
      unresolved:
        - how many died at the gates; no roll of the dead was kept on either side
        - which side broke the gate first, a question the selat and the temple answer differently
---

"Ten you open and one you do not," a granary steward tells a new tally-clerk as they walk the row of domes at [[place-anlaghzetun|Anlagh-Zetûn]]. "Count them all the same, and do not ask me which."

The one he does not name is the **Eleventh Granary**, and the **Battle of the Sealed Granaries** is why it is shut.

## The Rising

After twelve years of failing floods ([[lore-failfloods|the Failing Floods]]) the great granaries of Anlagh-Zetûn held the grain of the whole upper river and nobody in the basin could eat it. The god-king's guard held the gates. The villages around them had been living on seed-corn for years, and the temples of the upper river, which had lost priests to the silence about the blasphemy, were ready to move.

**Gezanlaghur** of **Anlaghet'Zaru**, the Halzi'a of the selat, raised the basin. His own levies came first, and the temple levies of the upper river came with them, so that the host that marched on the granaries was a lord's retinue, a farmers' muster and a priesthood's fighting men under one standard. It was the army the selat had always been able to raise, and no Gar-Aû had needed it raised against the throne before. In 2378 ST (268 AF) it came to the gates.

## The Gates

The guard held the granary gates and fought there. The battle was fought in the narrow lanes between the domes, where the host's numbers counted for little, and it went on until the gates fell. What the Khelâthi remember is not the fighting but its end. Several thousand lay dead between the domes: the guard, the levies and the starving who had followed the levies to the doors. The living had no grain to pay the embalmers, and the rite of the dead is paid in grain. A Khelâthi who is not embalmed, entered and read aloud has no continuation, and everyone at the gates knew it.

One of the great granaries had been emptied to feed the guard. The dead of both sides were thrown into it together and the gate was sealed in haste, with no rite said, no name entered and no priest to read. The selat meant to open it again when the harvest allowed the rites to be paid for. The harvest came, and the selat has kept the gate shut since.

The god-king was taken within the month, and the host went down the river to the capital with the freed grain behind it. The next flood came full ([[lore-judgfalseuq|the Judgment of the False Uqa'â]]).

## What It Left

- **The Eleventh Granary.** The sealed granary is a blood-field, the second in Khelâthi memory ([[place-eleventhgran|the Eleventh Granary]]). The Halzi'a's house keeps it shut by order.
- **The Bread for the Gate.** On each anniversary the selat throws bread over the granary wall, and the festival has its name from that.
- **A kingmaker's house.** The Halzi'a of Anlagh-Zetûn who holds the granaries holds a grip on the capital's throat, and the house of Anlaghet'Zaru is the case in point.
- **A rule for the upper river.** When a dynasty weakens, the upper-river Halzi'a and the temple priesthoods decide who sits the throne, and the rising of 2378 ST is the case they cite.

## See Also

- [[lore-failfloods|The Failing Floods]] · [[lore-judgfalseuq|The Judgment of the False Uqa'â]]—the events on either side
- [[lore-akhstruckhs|The Struck House]]—the age it belongs to
- [[place-eleventhgran|The Eleventh Granary]] · [[place-anlaghzetun|Anlagh-Zetûn]] · [[affiliation-selatnlghztn|The Selat of Anlagh-Zetûn]]
