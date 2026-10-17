---
shortcode: blackmarshbtl
name: {full: The Battle of the Black Marsh, aliases: [The Black Marsh, The Recovery of the Eagle]}
type: lore
subType: history
description: "In the spring of 520 AF the Karsan Soldan Korvan pins the largest Varokh host the hunger raids sent south against the water below the Moktur passes and destroys it to the last man, recovering the Pelsan Hilvan's eagle and earning the gold band its name carries."
tags: [history, vylaria, thedrift]
data:
  packFolder: vylaria
  events:
    - id: marsh
      when: 520
      kind: battle
      depth: region
      sources:
        - affiliation-vylrnmltry
        - affiliation-provncmktr
        - place-moktur
        - place-dolvar
        - place-vandstein
        - place-blackmarshfld
      summary: >-
        A Varokh host carrying the Pelsan Hilvan's eagle comes down into northern Moktur in the spring, the largest the hunger raids have sent. The Karsan Soldan Korvan closes the valley above it and waits, and when the host tries to break out the legion drives it down into the marsh at the valley's foot, where it dies to the last man. The legion takes the eagle out of the reeds and carries a gold band on its name ever after.
      standing: attested
      names:
        - {name: the Battle of the Black Marsh, by: affiliation-vylrnmltry}
        - name: the recovery of the eagle
          by: affiliation-provncmktr
          gloss: the garrisons' name for the day, which counts the eagle and not the dead
      where:
        locus: [place-blackmarshfld]
        reach:
          - place: place-moktur
            how: >-
              every watchtower counts the smoke at dusk, and the sergeants teach the recruits that the count was right at the Black Marsh
            knowledge: named
          - place: place-dolvar
            how: >-
              the fortress raised to hold the passes sends out the legion that wins the day
            knowledge: named
          - place: place-vandstein
            how: >-
              the villages that sent the host recite its dead by name and call no one home
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: actor}
        - {ref: affiliation-vrystwldtrbs, role: victim}
      follows:
        - event: "lore-hungerraids#eagle"
          how: answered
          note: the legions come to take back the eagle the war-band carried north
      accounts:
        - by: affiliation-vylrnmltry
          says: >-
            The Karsan Soldan Korvan recovered the Pelsan Hilvan's eagle at the Black Marsh, and the _orkaima_ is the most sacred object the army owns.
          agrees: full
        - by: lore-varokhiclt
          says: >-
            A dozen villages' sons went south together with the eagle in front of them, and none of them has found the way north.
          agrees: partly
          withholds: that the host was driven into the water and not met in the field
      unresolved:
        - how many of the dead lie in the marsh and how many were carried out for the pyres
---

In The Battle of the Black Marsh, a sergeant of the watch at [[place-dolvar|Dolvar]], teaching a recruit to count smoke from the wall at dusk, points down the valley to where the light goes grey and flat. "That is the marsh," he says. "We do not look at it. We look at the forest. Anything that comes out of the forest, we count. Anything that went into the marsh, we leave."

## The Eagle in the Forest

In 518 a Varokh war-band burned the camp of the [Pelsan Hilvan]{.name data-type="affiliation"} in a Mokturan valley and carried the legion's eagle north over the passes ([[lore-hungerraids|The Hunger Raids]]). No legion had lost its _orkaima_ to barbarians before, and the army's manual disbands a legion that loses one. The chancery held the Fourth's name on the roll for two years, because the eagle was known to hang in the forest and the legion meant to have it back.

In the spring of 520 the eagle came south again. The hunger that followed [[lore-threewinters|The Three Winters]] had gathered war-bands from a dozen villages into one host, the largest the passes had seen, and it carried the eagle at its head.

## The Valley and the Water

The [Karsan Soldan Korvan]{.name data-type="affiliation"}, a legion of the northern march, met the host in the valleys below the passes. The legion did not give battle in the open. It closed the valley above the host and held the ridges, and when the host turned to break out, the only ground that fell away from the legion was the marsh at the valley's foot. A man in mail sinks to the waist there. The host could not stand together on it, and the legion did not have to go in.

It died there to the last man. The Korvan took the eagle out of the reeds. The Orzas [Hárvanes]{.name data-type="being/npc"} of [[lore-restorehouse|House Helarkales]], who had ruled the [[affiliation-vylarinmpr|Vylarian Empire]] through the Three Winters and the raids that followed them, granted the legion a gold band on its name for the recovery. The Pelsan Hilvan's name was struck from the roll in the same year, as the manual requires, and its eagle went to the shrine at [[place-tyrellan|Tirellan]], the province's seat.

## What Moktur Made of It

The army counts the day as a recovery. The province counts it as the day the smoke-count was right, and the custom, which began in the raids, took its force from it.

The ground did not settle. The marsh keeps a quality the garrisons describe and do not explain, and the Varokh villages that lost their sons to it say the same thing in their own words ([[place-blackmarshfld|The Blood-field of the Black Marsh]]).

## What It Left

- **The Blood-field of the Black Marsh.** A dread on the march, thin enough that things cross.
- **The Korvan's gold band.** The honor the manual gives a legion that recovers a lost eagle, carried by the Korvan ever since.
- **The smoke count.** The northern watch's first lesson, and the reason a sergeant does not look at the marsh.

## See Also

- [[lore-hungerraids|The Hunger Raids]]—the war-bands and the Taking of the Eagle, as the forest tells them
- [[lore-empirdclne|The Decline of the Vylarian Empire]]—the lost northern revenue
- [[place-blackmarshfld|The Blood-field of the Black Marsh]]—the ground itself
- [[affiliation-vylrnmltry|Vylarian Military]]—what a legion owes its eagle
- [[place-dolvar|Dolvar]]—the fortress on the march
