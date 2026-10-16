---
shortcode: nordkinwars
name: {full: The Kin-Wars, aliases: [The Ice at Skalfvatn, The Peace of Asgarthul]}
type: lore
subType: history
description: "From 420 to 471 AF Nordheim and Malagna fought for the first place in the north, by raid, by marriage and twice by host; the war ended under the ice of Skalfvatn in 466, where Malagna's king and eleven hundred men went through, and at Asgarthul in 471, where Norgaad's king made the peace that founded the Great Moot."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: outbreak
      when: 420
      kind: war
      depth: region
      stated: {calendar: domseycount, text: "134 KW"}
      sources: [affiliation-kingdomlgn, affiliation-kngdmnrdhm, place-domsey]
      summary: >-
        Nordheim's fifth king dies at the twentieth sitting's year, and his succession is claimed by a Malagnan cousin by marriage as well as by his own son; the two crowns fight over it, and over the first place in the north, for two generations, by raid, by marriage and twice by host.
      standing: attested
      names: [{name: the Kin-Wars, by: affiliation-skaldscrcl}]
      where:
        locus: [place-nordheim]
        reach:
          - place: place-malagna
            how: the border howes along the Nordheim line hold two generations of raiders
            knowledge: named
      unresolved:
        - whether the Malagnan claim was ever heard at a sitting, or only pressed by host
    - id: skalfvatn
      when: 466
      kind: battle
      depth: region
      stated: {calendar: domseycount, text: "180 KW"}
      sources: [place-skalfvatn, affiliation-kingdomlgn, affiliation-kngdmnrdhm, lore-bloodfield]
      summary: >-
        In the last weeks of winter King Gnirthorv of Malagna leads his host across the frozen border lake of Skalfvatn to take King Thrildorv's Nordheim host from behind. Thrildorv holds the far shore, and the ice gives under the Malagnan centre: about eleven hundred men and the king go through. Nordheim burns its own dead with full honors; the Malagnan drowned stay under the ice, unburned and without grave-ale, and the lake is a blood-field.
      standing: attested
      names: [{name: the Ice at Skalfvatn, by: affiliation-skaldscrcl}]
      where:
        locus: [place-skalfvatn]
        reach:
          - place: place-gnarthborg
            how: the crown passes to Gnirthorv's younger son's line, which names itself from Hlurthann I rather than from the drowned king
            knowledge: named
      who:
        - {ref: affiliation-kingdomlgn, role: victim}
        - {ref: affiliation-kngdmnrdhm, role: actor}
      accounts:
        - by: affiliation-kingdomlgn
          says: >-
            The ice was sound when the host went onto it, and Nordheim's rune-workers broke it; the Malagnan shore keeps eleven hundred headland stones and one blank one for the king, and no Malagnan calls it a battle.
          agrees: partly
          withholds: that the host crossed in the thaw against its own pilots' word
        - by: affiliation-kngdmnrdhm
          says: >-
            Thrildorv held the shore and the lake did the rest; Nordheim lit the pyres for its own and offered to light them for Malagna's, and was refused.
          agrees: partly
      unresolved:
        - whether Nordheim's rune-workers had any hand in the ice, which Malagna asserts and no skald outside Malagna sings
        - where Gnirthorv's arm-ring lies, which nobody has brought up
    - id: peace
      when: 471
      kind: treaty
      depth: region
      stated: {calendar: domseycount, text: "185 KW"}
      sources:
        - place-asgarthul
        - affiliation-kingdmnrgd
        - affiliation-kngdmnrdhm
        - affiliation-kingdomlgn
        - place-domsey
      summary: >-
        King Snirvthann of Norgaad calls the two crowns to his hall at Asgarthul between sittings and brokers the peace: Nordheim keeps the island and the first seat, Malagna keeps its own succession, and the kings grant Norgaad's Lawspeaker the right to call such a moot whenever two kingdoms are at war, which is the Great Moot. Norgaad asks two more seats on Domsey as its price and is refused.
      standing: attested
      names: [{name: the Peace of Asgarthul, by: affiliation-skaldscrcl}]
      where:
        locus: [place-asgarthul]
        reach:
          - place: place-domsey
            how: Norgaad's refused seats become the oldest grievance in the seat-quarrel
            knowledge: named
      who: [{ref: affiliation-kingdmnrgd, role: actor}]
      follows:
        - {event: "lore-nordkinwars#skalfvatn", how: caused, note: the ice that ended the war}
      unresolved:
        - the terms on the peace-stave's uncut face, which the parties never agreed and the Moot has never ruled on
---

The ice-fishers of [[place-skalfvatn|Skalfvatn]] teach their children one sound before any other: a boom under the ice in a marching beat, in the last weeks of winter, that means get off the lake and do not look back. The beat is the Malagnan host of 466 still crossing, and the **Kin-Wars** are why it is down there.

## A Crown with Two Claimants

The first four kings of Nordheim passed the arm-ring from father to son with the ting's consent and nobody's objection. The fifth died in 420 with a son and a sister's son, and the sister had married into Malagna's royal hall at [[place-gnarthborg|Gnarthborg]]. Malagna's king pressed his nephew's claim as the better one, and pressed it with hirvs, because a claim heard only at a sitting is a claim the island's keeper judges. Nordheim says the claim was never a claim, only an excuse. Malagna says Nordheim's ting had already decided and the hearing would have been theater. The [[affiliation-skaldscrcl|Skalds' Circle]] keeps both and recites neither.

Two generations fought over it the way kingdoms with fleets and short summers fight: a raid on a hall in Midsomar, a marriage in the winter to bind what the raid had taken, another raid when the marriage failed to. The border between the two kingdoms is lined with howes from these years, and each crown claims some of the other's dead as its own. Twice the quarrel became a host.

## The Ice at Skalfvatn

The second time was 466. King [[affiliation-kingdomlgn|Gnirthorv]] of Malagna brought his host to the border in the last weeks of winter, when the lake that lies along the line was still frozen, and meant to cross it and take King [[affiliation-kngdmnrdhm|Thrildorv]]'s host from behind before the thaw opened the roads. His pilots told him the ice was shuddering, the sound the Nordmál language has a word for, _skalf_, the shudder in ice before it gives; the lake is named for it. He crossed anyway, because Thrildorv was on the far shore with fewer men and the thaw would bring more.

Thrildorv held the shore. The Malagnan centre, the king's own hirv and the heaviest-armed men in the host, was in the middle of the lake when the ice went. About eleven hundred men and the king went through in the time it takes to tell it, and the men on the Nordheim side watched them go. Nordheim lit pyres for its own dead with full honors. It offered, the Nordheim skalds say, to light them for Malagna's, and was refused; the Malagnan skalds say the offer was never made. The drowned stayed under the ice, unburned and without grave-ale, and the lake has been a _vrellvoll_ since: a recurrence, the marching beat under the ice and ranks of light passing under it toward the Nordheim shore.

Malagna's shore keeps a ring of headland stones above the lake, eleven hundred of them, each cut with a name, and one blank. The blank stone is Gnirthorv's, whose arm-ring was never brought up. His younger son took the crown, and the line that holds Malagna today names itself from that son's son, [[affiliation-kingdomlgn|Hlurthann I]], and not from the king who drowned, which is why a rival can say the [[affiliation-kingdomlgn|Hlurthidrok]] descend from a younger son and not from a king at all.

## The Peace of Asgarthul

The war did not end on the ice. It ended five years later at [[place-asgarthul|Asgarthul]], where King [[affiliation-kingdmnrgd|Snirvthann]] of Norgaad did what no king had done: he called two crowns to his hall between sittings, with his Lawspeaker reciting and his hirv keeping the door, and made them talk. The peace he brokered was plain. Nordheim kept the island and the first seat; Malagna kept its own succession and its dead under the ice; and the two kings granted Norgaad's Lawspeaker the right to call such a moot whenever two kingdoms were at war. That grant is the [[affiliation-kingdmnrgd|Great Moot]], and it is why Norgaad brokers the north's quarrels still.

Snirvthann asked a price. Norgaad held five seats on Domsey against Nordheim's seven, and he asked for two more as the fee for the peace. Both kings refused him, because a seat-count changed by two crowns is a seat-count the other three can change too, and the peace-stave at Asgarthul is still uncut on one face, for the terms never agreed. That face is the oldest grievance in the seat-quarrel, and Norgaad's king raises it at every sitting.

## What It Left

- **The field.** Skalfvatn, a recurrence, moderate: dangerous to anyone who answers a call from under the ice.
- **The blank stone.** Gnirthorv's arm-ring is under the lake. The man who brings it up holds a token of the oldest Hlurthidrok claim in a kingdom on the edge of civil war, and a Nordheim jarl who wants the blank stone cut and the grave-ale drunk would end the field and hand Malagna a wergild claim older than its present king.
- **The [[place-asgarthul|Great Moot]].** Norgaad's Lawspeaker can call the kingdoms to Asgarthul between sittings, and does.
- **The habit.** Nordheim and Malagna have been rivals since, fraternal and competitive at once, and the border howes are robbed by both sides' kin.

## See Also

- [[place-skalfvatn|Skalfvatn]]—the lake and its field
- [[place-asgarthul|Asgarthul]]—the hall of the peace and the Great Moot
- [[affiliation-kngdmnrdhm|Kingdom of Nordheim]] · [[affiliation-kingdomlgn|Kingdom of Malagna]]—the two crowns
- [[lore-nordfirstsit|The First Sitting on Domsey]]—the first time the two settled a quarrel with hirvs
- [[lore-domseycount|The Domsey Count]]—the age of the Kin-Wars
- [[lore-bloodfield|Blood-fields]]
