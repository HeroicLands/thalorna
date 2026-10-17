---
shortcode: eaglecityrse
name:
  full: The Raising of the Eagle City
  aliases: [The Walling of Arvel, The Moving of the Senate]
type: lore
subType: history
description: "From about 1 AF the first Orzas walls the crown of Arvel above the galleries sealed in 45 BF, moves the Senate up from its old hall on Antel, and consecrates the thrima around the whole of the Six Hills, a city that takes the name Orzara."
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
      sources: [place-arvon, place-arvel, place-sixhillsvyl, place-orzara]
      summary: >-
        The first Orzas walls the crown of Arvel above the galleries sealed in 45 BF, builds the Seldan and the Guard Camp inside the new wall, and moves the Senate up from its old hall on Antel. He walks and consecrates the thrima around the whole of the Six Hills and gives the city the name Orzara. The Republic's capital becomes the Old Hill, and the hill above it becomes the seat of the throne. A colossal statue of the Founder is raised in the Circle before the new gate to preside over accessions and triumphs.
      standing: reconstructed
      names:
        - name: the Eagle City
          by: place-arvon
          gloss: the walled crown of Arvel, named for the hill and the imperial eagle
        - name: the Old Hill
          by: place-sixhillsvyl
          gloss: Antel, once the Republic's whole city
      where:
        locus: [place-arvel]
        reach:
          - place: place-orzara
            how: the thrima and the Clearance follow the line walked in these years, and the Seldan still sits by the forms carried up from the Old Hill
            knowledge: named
          - place: place-sixhillsvyl
            how: Antel loses the Senate and the great families within a few generations, and its early monuments are left unrepaired
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-seldan, role: instrument}
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
        - by: affiliation-seldan
          says: >-
            The Seldan keeps the forms of the old hall exactly, and the forms are the proof that the Senate was never abolished.
          agrees: partly
      unresolved:
        - why the statue's crowned rune encloses a smoothed patch where the script's rule puts a name
---

In The Raising of the Eagle City, a tour-guide of [[place-arvon|Arvon]] (the Inner City), taking a group of petitioners from the provinces up the [Paldor]{.name data-type="place/feature"}, stops them at the foot of the Founder's statue and points past it at the gate. "Everything you are about to see was built on the second try," she says. "The first try is the hill you walked past on the way in, and it is still standing."

## The Old City

Before the [[affiliation-vylarinmpr|Vylarian Empire]], the city of the [Vylarian Republic]{.name data-type="affiliation/polity"} stood on [[place-antel|Antel]], the Old Hill. Its Senate, [[affiliation-seldan|Seldan]], met there in a hall of its own, it had a Circle of its own, and [[place-arvel|Arvel]] rose beside it as the higher and emptier hill, with the [Eyrie of the Dragon Riders]{.name data-type="place/site"} in galleries cut under its crown ([[lore-ridersdisb|The Lease Refused]] tells how they were sealed). The Republic never walled the Eagle Hill. It had nothing to put on the crown of it that it wished to be seen.

## The Walling

The first Orzas ([[lore-thefounding|The Founding]]) took the opposite view. Within the first dozen years of his reign his engineers walled the crown of Arvel in the ring that stands there now, and built the Seldan and [[place-thaurzurgalis|Thaurzurgalis]] (the Guard Camp) inside it. The galleries beneath were left sealed, and the palace was founded over them. When the wall closed, the Senate walked up from the Old Hill in procession, carrying its forms and its records with it. It has sat on the Eagle Hill since, and a _kurthos_ (senator) reading the Seldan's rules of debate is reading the Republic's, set down in the same words and carried uphill.

He then had the thrima walked and consecrated, the sacred line that bounds the city in law, so that it ran around all of the [[place-sixhillsvyl|Six Hills]], and he gave the whole the name **Orzara** ([[place-orzara|Orzara City]]). From this point the name covers everything the line encloses.

## The Statue

The colossus of the Founder stands in the [Orzas's Circle]{.name data-type="place/site"} before the Inner City's gate, and every accession and triumph passes it. On the plinth, in the letters of the [[skill-thrvrknscrpt|Tharavarkon Script]], a crowned rune stands where the script's rule puts the name of a god, a founder or a reigning Orzas. The rune encloses a patch of the stone that has been worked smooth. Nobody who works in the Circle can say when it was done, and the Seldan's clerks, asked whose name it was meant to hold, refer the question to the record, which does not give the Founder's name.

## What It Left

- **The [Inner Wall]{.name data-type="place/structure"}.** The ring on the crown of Arvel, the only wall Orzara has.
- **The Old Hill.** Antel, left to the families too proud or too poor to leave it, its early monuments weathering unrepaired.
- **The Seldan's forms.** The Republic's debate carried uphill, which the Senate offers as its proof of continuity and the throne as its proof of ownership.
- **A palace over sealed rooms.** The [[place-palvar|Palvar]] stands on the hill whose galleries nobody opens, and [[affiliation-sorvan|The Sorvan]] holds its doors and does not say why.

## See Also

- [[lore-thefounding|The Founding]]—the _kurthos_ who made himself the first Orzas
- [[lore-ridersdisb|The Lease Refused]]—the Eyrie sealed beneath the hill
- [[place-arvon|Arvon]]—the Inner City the wall encloses
- [[place-antel|Antel]]—the Republic's city, left behind
