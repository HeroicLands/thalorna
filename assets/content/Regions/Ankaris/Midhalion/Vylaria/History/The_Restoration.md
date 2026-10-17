---
shortcode: restorehouse
name: {full: The Restoration, aliases: [The Accession of Makandas, House Helarkales]}
type: lore
subType: history
description: "About 406 AF Makandas takes Orzara from the north, the Senate acclaims him, the Sorvan hands over its claimant and Sylarion dies in the Offices; he founds House Helarkales, forgives the legions that fought him and pays them, and rules twelve years."
tags: [history, vylaria, restoration]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: restoration
      when: ~406
      kind: accession
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - affiliation-seldan
        - affiliation-sorvan
        - place-orzara
      summary: >-
        Makandas takes the city from the north. The Senate acclaims him, the Sorvan hands over its claimant, and Sylarion dies in the Offices. Makandas founds House Helarkales, forgives the legions that fought him and pays them, and rules twelve years.
      standing: attested
      names:
        - {name: the Restoration, by: affiliation-vylarinmpr}
        - name: the felzos's year
          by: place-moktur
          gloss: Moktur's name for the year its felzos took the city
      where:
        locus: [place-orzara]
        reach:
          - place: place-palvar
            how: >-
              the Palvar houses the Restoration house's rule, and the monuments of the rebuilding carry its name
            knowledge: named
          - place: place-thaurzurgalis
            how: >-
              the guard pays for its candidate's fall and is paid back in donatives at every accession since
            knowledge: named
          - place: place-moktur
            how: >-
              the northern legions are rewarded and the province keeps the memory that its felzos made the house
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: instrument}
        - {ref: affiliation-seldan, role: actor}
        - {ref: affiliation-sorvan, role: victim}
      follows:
        - event: "lore-greatburnng#burning"
          how: ended
          note: a burned and starving city is taken by the man who can feed it
      accounts:
        - by: affiliation-seldan
          says: >-
            The Senate acclaimed the felzos who restored order, and the Empire was one again.
          agrees: partly
          withholds: that the Senate acclaimed the army at its gates
        - by: affiliation-sorvan
          says: >-
            The guard opened the Guard Camp to the Orzas who could pay it.
          agrees: partly
          withholds: that the guard handed over its own candidate first
      unresolved: [how Sylarion died in the Offices]
---

A restoration guild's master mason, asked who built the colonnade of the [Circle of Triumph]{.name data-type="place/site"}, answers without looking up from the stone. "Nobody remembers who raised it. Every column carries the same line: [Makandas]{.name data-type="being/npc"} restored it. He did not touch a stone of it, but his house paid for every one."

## The City Taken

By 405 [[place-orzara|Orzara]] was a burned city under a hungry [[affiliation-seldan|Seldan]] (the Senate), and the Senate's Orzas, [Sylarion]{.name data-type="being/npc"}, had an empty treasury and no legions. Makandas marched south from the north with the army that had won [[lore-olcassabtl|the Battle of Olkassa]]. About 406 he took the city.

The Senate acclaimed him within the week. [[affiliation-sorvan|The Sorvan]] handed over its claimant, [Kadelos]{.name data-type="being/npc"}, and Sylarion died in the [Imperial Offices]{.name data-type="place/structure"}, in a room whose door was not opened for two days. The three eagles were reduced to one.

## The Forgiveness

Makandas did the unusual thing and forgave the legions that had fought him. He paid them, the Senate's regiments as well as his own, from the treasury he had just taken, and the donative was the largest the Empire had given. He founded **House Helarkales** and ruled twelve years.

## What He Built

The first Orzas of the Restoration repaired the city's walls, the granaries and the aqueducts. The great rebuilding of the [[affiliation-vylarinmpr|Empire]]'s institutions came under his successor ([[lore-arzanasedict|The Edicts of Arzanas]]), and it came on the foundation Makandas laid by paying for peace.

## What It Left

- **The house's name on the monuments.** House Helarkales is cut into the rebuilt Circles, the colonnades and the aqueducts, and the line "restored by Makandas" runs along every one.
- **The donative.** An accession carries a payment to the legions and the guard, and the custom began here.
- **The Moktur legions' standing.** The northern army that made a house, and a province that remembers it.

## See Also

- [[lore-brkensuccsn|The Broken Succession]]—the years the Restoration ended
- [[lore-greatburnng|The Great Burning]]—the city Makandas took
- [[lore-arzanasedict|The Edicts of Arzanas]]—the second Orzas's rebuilding
- [[affiliation-vylarinmpr|Vylarian Empire]]
