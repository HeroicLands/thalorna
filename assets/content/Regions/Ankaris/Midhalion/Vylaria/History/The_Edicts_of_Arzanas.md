---
shortcode: arzanasedict
name: {full: The Edicts of Arzánas, aliases: [The Great Refounding, The Refounding of Arzánas]}
type: lore
subType: history
description: "Between about 418 and 425 AF the second Ôrzâs of the Restoration, Arzánas, closes the western conquests by edict and founds the Tevran Maldor, constitutes the Tolvan, makes the Tarmex the central bank of the note system, rebuilds the Palvar and lines the Paldor with three centuries of trophies."
tags: [history, vylaria, restoration]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: edicts
      when: ~418
      until: ~425
      kind: charter
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-tevran
        - affiliation-tolvan
        - affiliation-tarmex
        - affiliation-danvar
        - place-palvar
        - place-orzara
      summary: >-
        Arzánas, the second Ôrzâs of the Restoration, closes the western conquests by edict. He founds the Tevran Maldor to put every conquered city's guilds under one charter, constitutes the Tolvan and its tax-farmers, makes the Tarmex the central bank of the note system and builds its strongroom, rebuilds the Palvar, and lines the rebuilt Paldor with the trophies of three centuries of conquest.
      standing: attested
      names:
        - {name: the Edicts of Arzánas, by: affiliation-vylarinmpr}
        - name: the Refounding
          by: affiliation-tevran
          gloss: the guilds' name for the charter that made them one body
      where:
        locus: [place-orzara]
        reach:
          - place: place-palvar
            how: >-
              the Palvar stands in the shape the second Ôrzâs gave it
            knowledge: named
          - place: place-orzara
            how: >-
              the Paldor is lined with the trophies of the Western Wars, and the Offices houses the treasury and the Fiscal Court
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: author}
        - {ref: affiliation-tevran, role: instrument}
        - {ref: affiliation-tolvan, role: instrument}
      follows:
        - event: "lore-restorehouse#restoration"
          how: enabled
          note: the peace Makândas bought pays for the rebuilding
        - event: "lore-westernwars#wars"
          how: ended
          note: the edict closes three centuries of conquest
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The second Ôrzâs of the Restoration gave the Empire the institutions by which it still governs itself.
          agrees: full
        - by: affiliation-danvar
          says: >-
            The House of Calventian was founded to bank the rebuilding and has banked everything since.
          agrees: partly
      unresolved:
        - which edict closed the western conquests, and whether it was one edict or several
---

A junior clerk of the Tevran Maldor, copying the preamble of the guilds' charter for the hundredth time, is stopped by an older colleague at the line that names the Ôrzâs. "Read the date aloud," the older clerk says. "Three centuries and a few years. Everything in this building, the building itself and the Seldan down the corridor, was put there by one Ôrzâs in seven years."

## The Closing of the Conquests

About 418 the second Ôrzâs of the Restoration house, **Arzánas**, ended the wars of three centuries ([[lore-westernwars|The Western Wars]]) by edict. The legions held what they held, and the chancery's maps held the rest. Arzánas was the first Ôrzâs of his house to rule long enough to build, and the edict that closed the frontier opened the work.

## The Machinery

Over seven years he gave the Empire its present institutions.

- **The Tevran Maldor.** Arzánas put the guilds of every conquered city under one charter, so that the Empire could regulate, tax and rely on them as a single system ([[affiliation-tevran|Tevran Maldor]]).
- **The Tolvan.** He constituted the Fiscal Court and the Tolari who collect for it ([[affiliation-tolvan|Tolvan]]).
- **The Tarmex.** He made the treasury the central bank of the note system and built the strongroom that has held the bullion since ([[affiliation-tarmex|Tarmex Orzan]]).
- **The Palvar.** He rebuilt the palace on the hill ([[place-palvar|Palvar]]).
- **The Paldor.** He lined the rebuilt avenue with the trophies of three centuries of conquest, so that every embassy walks the length of the Empire's boast.

## What Paid for It

The treasury Makândas had spent on peace was empty, and the rebuilding was banked. The **House of Calventian**, founded in Ôrzâra to carry the debt, lent the Ôrzâs the money and has been the largest of the great banking houses since ([[affiliation-danvar|Danvar]]).

## What It Left

- **The Empire's machinery.** Almost every institution that governs the Empire today is the second Ôrzâs's, with a few additions.
- **"Three centuries ago."** The phrase the Empire's notes give for its guilds, its fiscal court and its central bank.
- **The House of Calventian.** The great bank that financed the rebuilding.

## See Also

- [[lore-restorehouse|The Restoration]]—the house Arzánas belonged to
- [[lore-westernwars|The Western Wars]]—the conquests the edict closed
- [[affiliation-tevran|Tevran Maldor]] · [[affiliation-tolvan|Tolvan]] · [[affiliation-tarmex|Tarmex Orzan]]
