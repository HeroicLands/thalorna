---
shortcode: olcassabtl
name: {full: The Battle of Olcassa, aliases: [Olcassa, The Field of Both Eagles]}
type: lore
subType: history
description: "About 401 AF the Senate's army and the Moktur legions meet on the Olcassa estate in Hylen, legions fighting legions under the same eagle with no quarter given; Makândas wins the field and loses half his army on it."
tags: [history, vylaria, threeeagles]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: olcassa
      when: ~401
      kind: battle
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - affiliation-seldan
        - place-hylen
        - place-olcassafld
      summary: >-
        The Senate's army and the legions of Moktur meet on the Olcassa estate in Hylen, because whoever holds Hylen's granaries holds the capital's bread. Legions fight legions under the same eagle and neither side gives quarter. Makândas wins the field and loses half his army on it.
      standing: attested
      names:
        - {name: the Battle of Olcassa, by: affiliation-vylarinmpr}
        - name: the field of both eagles
          by: place-hylen
          gloss: the estate's tenants' name for the ground, from the eagles that stood on it
      where:
        locus: [place-olcassafld]
        reach:
          - place: place-hylen
            how: >-
              the great estates take the war as a family's worst memory, and a Hylen house will not applaud a general who marches on another Vylarian army
            knowledge: named
          - place: place-olcassafld
            how: >-
              the field is farmed, and the best wheat in Hylen comes off it
            knowledge: named
          - place: place-orzara
            how: >-
              the capital's dole is milled from Hylen grain, and the war years' lost harvests are the ones the dole lacked
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: instrument}
        - {ref: affiliation-seldan, role: actor}
      follows:
        - event: "lore-brkensuccsn#succession"
          how: caused
          note: the claims of the three Ôrzândoi are settled by the sword
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The Moktur legions won the field at Olcassa, and the Empire was reunited because they did.
          agrees: partly
          withholds: that half the winning army lay on the field
        - by: place-hylen
          says: >-
            Olcassa was a harvest field before it was a battlefield, and it is a harvest field now.
          agrees: partly
          withholds: what the field has grown since
      unresolved: [how many of the dead on the field were never buried by anyone]
---

A steward on the Olcassa estate, walking a grain factor's mule along the headland on a May evening, stops where the track meets the wheat and does not step into it. "We cut round," he says. "Everyone cuts round. It is the best wheat in Hylen, and I have never seen the factor's mule go into it."

## The Field

[[place-hylen|Hylen]] feeds the capital. Its estates grow the grain that is milled into the dole, and whoever holds the granaries of Hylen holds Ôrzâra's bread. The Senate knew it, and so did Makândas ([[lore-brkensuccsn|The Broken Succession]]). About 401 the Senate sent its army to hold the estates, and the Moktur legions came south to take them.

The two armies met on the **Olcassa** estate, one of the great holdings of the province. Both carried the same eagle, cast to the same pattern in the same arsenal, and men who had served in the same garrisons stood in the opposing lines. Neither side gave quarter. The Senate's army had the better ground and the Moktur legions had the better discipline, and by dusk the Senate's army lay in the standing grain and the Moktur line was half what it had been at dawn.

## What Olcassa Meant

Makândas won the field and could not use it. He had half his army, the estates' granaries were burned or taken and the harvest was lost. The war went on two years more, and the dole failed in the capital before it was over ([[lore-greatburnng|The Great Burning]]).

Hylen has not forgotten. The province's great houses, whose estates the armies marched across, say that no Vylarian should draw a sword on another, and the conservatism that marks the province's politics owes a good deal to the field. The ground itself is farmed ([[place-olcassafld|The Blood-field of Olcassa]]).

## What It Left

- **The Blood-field of Olcassa.** A quickening in the province's breadbasket.
- **Hylen's horror of civil war.** The estates' lasting dread of any claimant who marches on another.
- **The estate's grain in the dole.** The best wheat of the province goes to the state granaries, and nobody says where it grew.

## See Also

- [[lore-brkensuccsn|The Broken Succession]]—the claims the battle settled
- [[lore-greatburnng|The Great Burning]]—what the lost harvest led to
- [[place-olcassafld|The Blood-field of Olcassa]]—the ground itself
- [[place-hylen|Hylen]]
