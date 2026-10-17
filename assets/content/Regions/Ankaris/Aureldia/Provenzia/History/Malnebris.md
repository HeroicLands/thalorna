---
shortcode: malnebris
name: {full: Malnebris, aliases: [The First Great Raid]}
type: lore
subType: history
description: "About 556 AF High King Mórezan's host came down the pass in the first great raid on the province, the provincial levy held the road at Malnebris for a day and a night and broke, and the frontier war the border families still fight began there."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: ~556
      kind: battle
      depth: region
      sources: [place-bldfldmalnebris, place-talothe, place-tarvenirgn, place-durvalis]
      summary: >-
        High King Mórezan's host comes down the pass in the first great raid on the province. The provincial levy holds the road below the pass at Malnebris for a day and a night and breaks; both sides leave more dead on the road than either can carry. The frontier war that the border families still fight begins here.
      standing: attested
      names:
        - {name: Malnebris, by: place-bldfldmalnebris}
        - {name: the first raid, by: place-talothe}
      where:
        locus: [place-bldfldmalnebris]
        reach:
          - place: place-talothe
            how: the campaign season becomes the march's calendar, and the courts sit in the winter because the passes are shut
            knowledge: named
          - place: place-durvalis
            how: the road below the pass is the road the town's walls are raised to hold, a century after the raid
            knowledge: unlinked
          - place: place-tarvenirgn
            how: the High Kings learn that the western province can be raided, and the lords who follow them raid it every season the passes are open
            knowledge: named
      who:
        - {ref: affiliation-kingdmtrvn, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: lore-tarvfallsawy
          how: caused
          note: the High Kings who drove out the garrisons are the lords who then look west across the passes
        - event: lore-empirdclne
          how: enabled
          note: the legions are drawn north and the province's garrisons thin, which is what makes a raid down the pass worth attempting
      accounts:
        - by: place-bldfldmalnebris
          says: >-
            On still nights in the season the road is loud, and the sound is the one that was made that night.
          agrees: full
        - by: place-tarvenirgn
          says: >-
            The High King's host took the pass and the road and proved the province could be entered.
          agrees: partly
          withholds: that more of the host stayed on the road than went home
        - by: place-talothe
          says: >-
            The levy held a day and a night, and every family on the road has lost someone to the quarrel since.
          agrees: full
      unresolved:
        - whether the dead who joined the field after later raids are part of the recurrence
---

On still nights in the campaign season the pass above the [[place-bldfldmalnebris|Blood-field of Malnebris]] is loud, and the border families on both sides of it know what they are hearing. It is Malnebris, the first great raid, and the sound has not stopped.

## The Host

When the legions were drawn north and the garrisons of the western province thinned, the High Kings of the [[affiliation-kingdmtrvn|Kingdom of Tarvénia]] found a use for the lords who had elected them. **[Mórezan]{.name data-type="being/npc"}**, the second High King, led a host down the pass from the mountains above the province's north-eastern march, to see what could be taken in a season and whether anyone would stop it. It was the first great raid, and nothing like it had come that way before.

## The Road

The provincial levy was not an army and had not been called to be one. It gathered on the road below the pass, at Malnebris, where the road narrows between the ridge and the stream, and held it. The fighting lasted a day and a night. The host could not get past, and the levy could not make it go back.

By the second morning the levy broke. The host took the road, and then found it could not use it, because the dead lay in the way and neither side had the strength to carry them. Mórezan's lords went home when the snow came. The levy's survivors went home to families the host would visit again.

## The Quarrel

The raid was the first of a long run of them, and the border families on both sides took it as the beginning of a war that nobody declared. It has a calendar, because the passes close; the hosts come when the snow clears and go when it returns. It has no end, because neither crown can afford to be the one that stops. The [Winter Assize]{.name data-type="affiliation/governmental"} that sits at [[place-durvalis|Durvalis]] hears the quarrels of the families who took it up.

## What It Left

- **The Blood-field of Malnebris.** The only one of the [[place-provenzrgn|Provenzia Region]]'s fields that is still being added to ([[place-bldfldmalnebris|Malnebris]]).
- **The campaign season as a calendar.** The march's year runs from the thaw to the first snow, and the courts sit in between.
- **The border families' feud.** The quarrel is the same one in every generation, and each family on the road has someone to lose to it.

## See Also

[[place-bldfldmalnebris|The Blood-field of Malnebris]]
: the ground the battle left

[[place-talothe|Talote]]
: the march

[[place-tarvenirgn|Tarvénia Region]]
: where the host came from

[[lore-tarvfallsawy|Tarvénia Falls Away]]
: the election of the High Kings who sent it

[[place-durvalis|Durvalis]]
: the town built to hold the road
