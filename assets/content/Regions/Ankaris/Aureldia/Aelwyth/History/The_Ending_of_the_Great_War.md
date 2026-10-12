---
shortcode: endgreatwar
name: {full: The Ending of the Great War, aliases: [The Stopping]}
type: lore
subType: history
description: "Within a decade of the Three Sisters the Khazári finished the Great War and did not take the island: they kept the Ironfells and the north-east plain for the Vardain and left everything else to the Pelwar they had fought."
tags: [history]
data:
  packFolder: aelwyth
  events:
    - when: ~-980
      kind: treaty
      depth: region
      sources:
        - place-aelwyth
        - place-ironfells
        - place-vorgald
        - place-vardanreach
        - lore-flkkhazar
        - lore-pelwarpepl
      summary: >-
        With the Sinalë gone into the Hallowwood, the Khazári finish the Great War in a few seasons and do not take the island. They keep the Ironfells and the north-east plain under their protection for the Vardain, and leave the rest of the country the Sinalë abandoned to the Pelwar who had fought for it. Nothing is written down and no oath is sworn; the Deep Folk simply stop. The works of the joint crown pass to whoever lives beside them.
      standing: reconstructed
      where:
        locus: [place-aelwyth]
        reach:
          - place: place-vardanreach
            how: the plain and its high valleys, something like a fifth of the island, are kept for the Vardain by the hold that fed on them
            knowledge: named
          - place: place-vorgald
            how: the hold's friendship with the Vardain is made permanent by the war's end, and the Khazári go back inside the mountain
            knowledge: named
          - place: place-aldorathrgn
            how: the eastern interior is left to the Pelwar settled there, and every realm of the island later stands on ground the Khazári did not claim
            knowledge: unlinked
          - place: place-hallowwood
            how: the Sinalë, who left the field, learn of the settlement from no one and ask no one
            knowledge: unlinked
      who:
        - {ref: lore-flkkhazar, role: actor}
        - {ref: lore-pelwarpepl, role: actor}
        - {ref: lore-vardain, role: witness}
      follows:
        - event: lore-threesistrs
          how: caused
          note: the Khazári were left to finish alone a war they had entered as one half of a crown
      accounts:
        - by: lore-vardain
          says: >-
            The Khazári finished it, and then they went home.
          agrees: full
          withholds: nothing; the Vardain keep the saying and do not know what it left out
        - by: lore-flkkhazar
          says: Nothing is written of the end, because nothing was agreed.
          agrees: partly
          withholds: why a war against tens of thousands ended with the other side owning most of the island
      unresolved:
        - how a war with the Pelwar ended without a surrender, a treaty or a line on any map
        - whether the Khazári meant to leave the island to the humans, or merely stopped wanting it
---

The saying in the Vardain valleys is short: the Khazári finished it, and then they went home. It is a complete account of how the **Great War** ended on [[place-aelwyth|Aelwyth]], and it leaves out only the question of why a people who had just won would go home.

## A War With Nobody Left to Fight It

The Great War had been two centuries of arrival and reprisal between the [[lore-pelwarpepl|Pelwar]] refugees of the island and the elder kingdom that could not absorb them. When the Sinalë king fell at the [[place-threesisters|Three Sisters]] in 984 BF the [[lore-flksinale|Sinalë]] left the field and the crown, and the [[lore-flkkhazar|Khazári]] stayed to finish a war they had joined as one half of a government. They did it in a few seasons, as they do anything that has been decided, and then they stopped.

They did not take the island. A hold grows nothing and needs farmers within reach of its gate, and the Khazári had never wanted the lowlands, only the people on them who fed [[place-vorgald|Vorgald]]. So they kept what a hold needs: the [[place-ironfells|Ironfells]] and the north-east plain, with the high valleys, held for the [[lore-vardain|Vardain]] who farmed it. Everything else, from the interior and the coast to the western uplands and the forest edge, they left to the Pelwar who had fought them. No oath was sworn and no line was drawn; the garrisons went back inside the mountain, and the Pelwar found that nobody remained to dispute the ground.

## Whose Roads

The works of the [[lore-jointcrown|Joint Crown]] stood on that ground and had no keepers. The Sinalë did not return for their avenues and the Khazári did not send masons to repair their roadbeds. The Pelwar settled beside them, used the roads, quarried the footings for their first walls, and forgot who had laid them. The realms that rose on the island in the following centuries stand on this settlement, and none of their charters mentions it.

## What It Left

- **The bounds of Vardanreach.** A fifth of the island, kept by the one hold that never claimed to rule it.
- **A friendship of thousands of years.** The Vardain's standing with Vorgald, which lasts until the [[lore-stormveldtkn|Nordmen take the plain]] in 660 AF.
- **Every Aelwythan realm's ground.** Land that came to the humans because the elder races stopped, and not because anyone gave it.
- **An unwritten ending.** The Khazári archive records the war and its end in the same entry, and the entry is two lines long.

## See Also

- [[lore-threesistrs|The Battle of the Three Sisters]]—the field the war was lost on
- [[lore-jointcrown|The Joint Crown of Aelwyth]]—the kingdom whose roads the Pelwar inherited
- [[place-vardanreach|Vardanreach]] · [[lore-vardain|The Vardain]]—what the Khazári kept
