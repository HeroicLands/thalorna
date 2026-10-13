---
shortcode: restorehouse
name: {full: The Restoration, aliases: [The Accession of Makândas, House Hêlarkâlês]}
type: lore
subType: history
description: "About 406 AF Makândas takes Ôrzâra from the north, the Senate acclaims him, the Praetar hands over its claimant and Sylârion dies in the Officia; he founds House Hêlarkâlês, forgives the legions that fought him and pays them, and rules twelve years."
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
        - affiliation-curiavylar
        - affiliation-pratrgstrm
        - place-orzara
      summary: >-
        Makândas takes the city from the north. The Senate acclaims him, the Praetar hands over its claimant, and Sylârion dies in the Officia. Makândas founds House Hêlarkâlês, forgives the legions that fought him and pays them, and rules twelve years.
      standing: attested
      names:
        - {name: the Restoration, by: affiliation-vylarinmpr}
        - name: the legate's year
          by: place-moktur
          gloss: Moktur's name for the year its legate took the city
      where:
        locus: [place-orzara]
        reach:
          - place: place-palatimgnm
            how: >-
              the Palatium houses the Restoration house's rule, and the monuments of the rebuilding carry its name
            knowledge: named
          - place: place-thaurzurgalis
            how: >-
              the guard pays for its candidate's fall and is paid back in donatives at every accession since
            knowledge: named
          - place: place-moktur
            how: >-
              the northern legions are rewarded and the province keeps the memory that its legate made the house
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: instrument}
        - {ref: affiliation-curiavylar, role: actor}
        - {ref: affiliation-pratrgstrm, role: victim}
      follows:
        - event: "lore-greatburnng#burning"
          how: ended
          note: a burned and starving city is taken by the man who can feed it
      accounts:
        - by: affiliation-curiavylar
          says: >-
            The Senate acclaimed the legate who restored order, and the Empire was one again.
          agrees: partly
          withholds: that the Senate acclaimed the army at its gates
        - by: affiliation-pratrgstrm
          says: >-
            The guard opened the Guard Camp to the Augustar who could pay it.
          agrees: partly
          withholds: that the guard handed over its own candidate first
      unresolved: [how Sylârion died in the Officia]
---

A restoration guild's master mason, asked who built the Circle of Triumph's colonnade, answers without looking up from the stone. "Nobody remembers who raised it. Every column carries the same line: Makândas restored it. He did not touch a stone of it, but his house paid for every one."

## The City Taken

By 405 [[place-orzara|Ôrzâra]] was a burned city under a hungry Senate, and the Senate's Augustar, Sylârion, had an empty treasury and no legions. Makândas marched south from the north with the army that had won at Olcassa ([[lore-olcassabtl|The Battle of Olcassa]]). About 406 he took the city.

The Senate acclaimed him within the week. The [[affiliation-pratrgstrm|Praetar Augustarum]] handed over its claimant, Kàdelôs, and Sylârion died in the Officia, in a room whose door was not opened for two days. The three eagles were reduced to one.

## The Forgiveness

Makândas did the unusual thing and forgave the legions that had fought him. He paid them, the Senate's regiments as well as his own, from the treasury he had just taken, and the donative was the largest the Empire had given. He founded **House Hêlarkâlês** and ruled twelve years.

## What He Built

The first Augustar of the Restoration repaired the city's walls, the granaries and the aqueducts. The great rebuilding of the Empire's institutions came under his successor ([[lore-arzanasedict|The Edicts of Arzánas]]), and it came on the foundation Makândas laid by paying for peace.

## What It Left

- **The house's name on the monuments.** House Hêlarkâlês is cut into the rebuilt Circles, the colonnades and the aqueducts, and the line "restored by Makândas" runs along every one.
- **The donative.** An accession carries a payment to the legions and the guard, and the custom began here.
- **The Moktur legions' standing.** The northern army that made a house, and a province that remembers it.

## See Also

- [[lore-brkensuccsn|The Broken Succession]]—the years the Restoration ended
- [[lore-greatburnng|The Great Burning]]—the city Makândas took
- [[lore-arzanasedict|The Edicts of Arzánas]]—the second Augustar's rebuilding
- [[affiliation-vylarinmpr|Vylarian Empire]]
