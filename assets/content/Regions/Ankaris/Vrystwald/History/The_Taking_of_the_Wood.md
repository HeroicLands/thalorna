---
shortcode: takingwood
name: {full: The Taking of the Wood, aliases: [The Driving-Out along the Bay]}
type: lore
subType: history
description: "About 1250 BF the mixed Varkhad–Pelwar host came into the Vrystwald from the east, broke the Pelwar who stood, married the ones who stayed and drove the rest west along the bay toward the sea; the Varokh are what was left in the forest when the host stopped."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: taking
      when: ~-1250
      until: ~-1150
      kind: conquest
      depth: region
      stated: {calendar: wintertally, text: "1 TW"}
      sources:
        - lore-varkhadcnq
        - lore-pelwarmigr
        - lore-pelwarpepl
        - lore-varokhiclt
        - place-vrystwald
      summary: >-
        Three or four generations after the Varkhad took the eastern grasslands, the host their conquest made, already half Pelwar, reaches the forest's eastern edge and takes it. It breaks the Pelwar villages that stand against it and marries into the ones that stay, and within a century nobody in the forest can say which ancestor came from where. The people left in the wood when the host stops moving are the Varokh.
      standing: reconstructed
      names: [{name: the Taking of the Wood, by: lore-varokhiclt}]
      where:
        locus: [place-vrystwald]
        reach:
          - place: place-nrdlndsrgn
            how: the northern bands drift on toward the fjords and become the Nordmen
            knowledge: named
          - place: place-aelwyth
            how: the Pelwar who will not stay are pushed to the sea, and some cross it
            knowledge: named
      who: [{ref: affiliation-vrystwldtrbs, role: actor}]
      follows:
        - event: lore-varkhadcnq
          how: caused
          note: the grassland conquest made the host that took the wood
      accounts:
        - by: lore-varokhiclt
          says: >-
            The tellings keep two accounts at once: the people came out of the east with the spear, and the people came out of the oaks and were always here.
          agrees: partly
          withholds: that both accounts describe the same century from the two sides of it
      unresolved:
        - whether the oldest mounds hold the takers, the taken, or both in one grave
        - how many Pelwar villages stood and fought, against how many married in
    - id: drivingout
      when: ~-1200
      kind: departure
      depth: region
      stated: {calendar: wintertally, text: "51 TW"}
      sources: [lore-pelwarmigr, place-edrwald, affiliation-alndnwrdns, place-aelwyth]
      summary: >-
        The Pelwar who will not stay to be married leave west along the bay shore that is now Edrwald, toward the coast and the crossing to Aelwyth. They gather at a stone landing the Varokh never learned to use and leave behind rock shrines, springs and burial places the host has no names for.
      standing: reconstructed
      names: [{name: the Driving-Out along the Bay, by: lore-varokhiclt}]
      where:
        locus: [place-edrwald]
        reach:
          - place: place-aelwyth
            how: the leavers who survive the crossing come ashore about 1200 BF, driven off the mainland by the Varokh
            knowledge: named
      who: [{ref: lore-pelwarpepl, role: victim}]
      follows:
        - event: "lore-takingwood#taking"
          how: caused
          note: the leavers are the Pelwar who would not stay
      accounts:
        - by: affiliation-alndnwrdns
          says: >-
            The places on the bay shore are kept, and a Varokh crew that cuts across them is turned back, as it has been for longer than the Wardens record.
          agrees: silent
          withholds: who first set the places apart, and for whom they are kept
      unresolved: ["who keeps the rock shrines at the leavers' landing, and for what"]
---

The oldest mound in the Deepwood is **Véthhróm**, the hallowed mound. Reciters teach the children at Weskskald that both of the forest's peoples are buried in it, and when a child asks which people that means, the reciter's answer is the history of the Varokh in one sentence: the ones who were here, and the ones who came, and nobody has been able to tell them apart for two thousand years.

## The Host Out of the East

About 1400 BF the [[lore-varkhadcnq|Varkhad]] came out of the further east and took the grasslands of the [[lore-pelwarpepl|Pelwar]], and the [[lore-pelwarmigr|Pelwar Migration]] began. The conquerors did not stay conquerors for long. They married into the people they had beaten, and within three or four generations the host that kept moving west was half Pelwar itself, pushing other Pelwar ahead of it as the first ones had been pushed.

About 1250 BF that host reached the eastern edge of the forest that is now [[place-vrystwald|Vrystwald]] and went in. The Pelwar villages of the wood were tribal and unwalled, herders and clearing-farmers who had held the forest a very long time and were not organized to fight for it. Some stood, and the host broke them. Most did not, and the host married into them the way its grandfathers had married into the grasslands. In a century the forest held one people where it had held two, and the people left in the wood when the Migration ran out of land and the host stopped moving were the [[lore-varokhiclt|Varokh]]. The northern bands kept drifting toward the fjords, and became the Nordmen.

## The Driving-Out along the Bay

The Pelwar who would neither fight nor marry went west. They followed the bay shore that the Varokh now call [[place-edrwald|Edrwald]] toward the coast, and the reciters keep the road they took as the lost shore path, which the singers of Skaldwald still claim to know. They gathered at a stone landing on the bay, **Theódhaven**, the folk's haven, and crossed in whatever would float. The ones who reached [[place-aelwyth|Aelwyth]] about 1200 BF arrived, as the island's own accounts put it, driven off the mainland by the Varokh. Most of them did not arrive at all.

They left holy ground behind them that the host did not understand: rock-cut shrines at the landing, springs, and burial places with no Varokh name. The [[affiliation-alndnwrdns|Áelendan Wardens]] keep Varokh parties off several of those places on the Edrwald shore to this day, and they have never said for whom.

## Two Tellings at Once

The Varokh call Vrystwald their primeval homeland, and the claim rests on both halves of their descent. The tellings keep two accounts of this century side by side and do not choose between them. In one, the people came out of the east with the spear and took the wood. In the other, the people came out of the oaks and were always here, and the strangers who came from the east were absorbed into them. Deepwood reciters tell both at the same Weskskald. The forest's old people hold that a child who asks which is true has not yet understood either.

## What It Left

- **Véthhróm, the hallowed mound.** The oldest kindred mound in the Deepwood, claimed by both tellings. A flood once opened its side and showed grave goods of two kinds lying together, and the Shaman who saw it had the side closed again before anyone could say which kind lay deeper.
- **Theódhaven, the leavers' landing.** A stone landing and rock-cut shrines on the Edrwald bay that no Varokh village uses. Varokh boat crews cut across it, and the Wardens turn them back.
- **The forest itself.** No Varokh grove, mound or village name is older than this age, and every one of them sits on ground somebody else named first.

A Varokh child who finds a carved stone on the bay shore and brings it home brings a question with it that no Shaman in Edrwald wants to answer: whose dead the stone was cut for, and whether they are owed anything by the people who took the wood.

## See Also

- [[lore-wintertally|The Tally of Winters]]—the ages of the forest, from this one on
- [[lore-varkhadcnq|The Varkhad Conquest]]—the grassland conquest that made the host
- [[lore-pelwarmigr|The Pelwar Migration]]—the displacement this was one stage of
- [[place-edrwald|Edrwald]]—the bay shore the leavers took
