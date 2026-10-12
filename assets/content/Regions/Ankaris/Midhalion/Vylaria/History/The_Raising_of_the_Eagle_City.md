---
shortcode: eaglecityrse
name:
  full: The Raising of the Eagle City
  aliases: [The Walling of Mons Aquila, The Moving of the Senate]
type: lore
subType: history
description: "From about 1 AF the first Augustar walls the crown of Mons Aquila above the galleries sealed in 45 BF, moves the Senate up from its old hall on Mons Vétus, and consecrates the pomerium around the whole of the Six Hills, a city that takes the name Ôrzâra."
tags: [history, vylaria, firstaugs]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: raising
      when: ~1
      until: ~12
      kind: raising
      depth: region
      sources: [place-urbsaquiln, place-monsaquila, place-sixhillsvyl, place-orzara]
      summary: >-
        The first Augustar walls the crown of Mons Aquila above the galleries sealed in 45 BF, builds the Curia and the Castra inside the new wall, and moves the Senate up from its old hall on Mons Vétus. He walks and consecrates the pomerium around the whole of the Six Hills and gives the city the name Ôrzâra. The Republic's capital becomes the Old Hill, and the hill above it becomes the seat of the throne. A colossal statue of the Founder is raised in the Circle before the new gate to preside over accessions and triumphs.
      standing: reconstructed
      names:
        - name: the Eagle City
          by: place-urbsaquiln
          gloss: the walled crown of Mons Aquila, named for the hill and the imperial eagle
        - name: the Old Hill
          by: place-sixhillsvyl
          gloss: Mons Vétus, once the Republic's whole city
      where:
        locus: [place-monsaquila]
        reach:
          - place: place-orzara
            how: the pomerium and the Clearance follow the line walked in these years, and the Curia still sits by the forms carried up from the Old Hill
            knowledge: named
          - place: place-sixhillsvyl
            how: Mons Vétus loses the Senate and the great families within a few generations, and its early monuments are left unrepaired
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-curiavylar, role: instrument}
      follows:
        - event: lore-thefounding
          how: enabled
          note: a Senate reduced to counsel could be moved wherever the man who held the legions chose
        - event: lore-ridersdisb
          how: enabled
          note: the hill stood empty above its sealed galleries, and the new wall closed over both
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The Founder gave the Republic's city a crown and a wall, and the Senate a better seat than the one it had.
          agrees: partly
          withholds: that the Senate was moved because it was easier to watch on the hill than in its own hall
        - by: affiliation-curiavylar
          says: >-
            The Curia keeps the forms of the old hall exactly, and the forms are the proof that the Senate was never abolished.
          agrees: partly
      unresolved:
        - why the statue's crowned rune encloses a smoothed patch where the script's rule puts a name
---

A tour-guide of the Inner City, taking a group of petitioners from the provinces up the Via Triumphalis, stops them at the foot of the Founder's statue and points past it at the gate. "Everything you are about to see was built on the second try," she says. "The first try is the hill you walked past on the way in, and it is still standing."

## The Old City

Before the Empire, the city of the Republic stood on [[place-sixhillsvyl|Mons Vétus]], the Old Hill. Its Senate met there in a hall of its own, it had a Circle of its own, and [[place-monsaquila|Mons Aquila]] rose beside it as the higher and emptier hill, with the Eyrie of the Dragon Riders in galleries cut under its crown ([[lore-ridersdisb|The Lease Refused]] tells how they were sealed). The Republic never walled the Eagle Hill. It had nothing to put on the crown of it that it wished to be seen.

## The Walling

The first Augustar ([[lore-thefounding|The Founding]]) took the opposite view. Within the first dozen years of his reign his engineers walled the crown of Mons Aquila in the ring that stands there now, and built the Curia and the Castra inside it. The galleries beneath were left sealed, and the palace was founded over them. When the wall closed, the Senate walked up from the Old Hill in procession, carrying its forms and its records with it. It has sat on the Eagle Hill since, and a senator reading the Curia's rules of debate is reading the Republic's, set down in the same words and carried uphill.

He then had the pomerium walked and consecrated, the sacred line that bounds the city in law, so that it ran around all six hills, and he gave the whole the name **Ôrzâra**. From this point the name covers everything the line encloses.

## The Statue

The colossus of the Founder stands in the Augustar's Circle before the Inner City's gate, and every accession and triumph passes it. On the plinth, in the Thâravárkon letters, a crowned rune stands where the script's rule puts the name of a god, a founder or a reigning Augustar. The rune encloses a patch of the stone that has been worked smooth. Nobody who works in the Circle can say when it was done, and the Curia's clerks, asked whose name it was meant to hold, refer the question to the record, which does not give the Founder's name.

## What It Left

- **The Inner Wall.** The ring on the crown of Mons Aquila, the only wall Ôrzâra has.
- **The Old Hill.** Mons Vétus, left to the families too proud or too poor to leave it, its early monuments weathering unrepaired.
- **The Curia's forms.** The Republic's debate carried uphill, which the Senate offers as its proof of continuity and the throne as its proof of ownership.
- **A palace over sealed rooms.** The Palatium Magnum stands on the hill whose galleries nobody opens, and the Praetar hold its doors and do not say why.

## See Also

- [[lore-thefounding|The Founding]]—the Senator who made himself the first Augustar
- [[lore-ridersdisb|The Lease Refused]]—the Eyrie sealed beneath the hill
- [[place-urbsaquiln|Urbs Aquilion]]—the Inner City the wall encloses
- [[place-monsvetus|Mons Vétus]]—the Republic's city, left behind
