---
shortcode: oldcompact
name: {full: The Old Compact, aliases: [The Compact]}
type: lore
subType: history
description: "From 5274 BF to 2427 BF the Sinale and the Khazari hold a shared accord across much of Thalorna, and make together what neither people can make alone—until the day Khazartúrn falls."
tags: [history, spine]
data:
  packFolder: settinglore
  events:
    - when: -5274
      until: -2427
      kind: treaty
      depth: world
      sources: [place-worldthlrn, lore-flkkhazar, lore-flksinale]
      summary: >-
        The two Elder Races hold a shared accord spanning much of Thalorna for twenty-eight centuries, beginning within a generation of the Khazari's arrival and ending on the day Khazartúrn falls. Under it they live and work together and produce what neither can produce alone: structures that marry living wood to shaped stone, artifacts that marry Sinalean enchantment to Khazárian craft, and a worship of the god of dreams held in common. Neither people has ever stated the accord's terms, and neither has spoken to the other since it ended.
      standing: attested
      where:
        locus: [place-worldthlrn]
        reach:
          - place: place-ankrscntnnt
            how: >-
              ruins and artifacts of two makings at once stand across the continent, and no human workshop can reproduce either half of one
            knowledge: unlinked
          - place: place-aelwyth
            how: >-
              the two peoples here are still on the same ground when the accord ends, and are the only ones of their kind who ever try to put it back together
            knowledge: named
          - place: place-hallowwood
            how: >-
              the god of dreams is kept here in a rite that was once held in common with the Deep Folk, and the two traditions have diverged so far that neither would recognize the other's
            knowledge: named
      who: [{ref: lore-flksinale, role: signatory}, {ref: lore-flkkhazar, role: signatory}]
      follows:
        - event: lore-khazararrv
          how: enabled
          note: there is nothing to agree to until the second Elder Race is in the world
      accounts:
        - by: place-worldthlrn
          says: >-
            In the deepest past the two elder races lived and worked together under some form of shared accord, and something shattered it in an age before human memory.
          agrees: partly
          withholds: when it began, what it covered, and what ended it
        - by: lore-flkkhazar
          says: >-
            A golden age of collaboration. Soon after it began their envoy asked us to withdraw from the world's troubles as they do, and we answered that we had not come so far to hide. What we made together neither people could have made alone. The breach was final and the fault was not ours alone.
          agrees: partly
          withholds: the accord's terms, and why it broke
        - {by: lore-flksinale, says: Nothing whatever., agrees: silent}
      unresolved:
        - what the accord's terms were, neither people having ever stated one of them
        - whether it was one realm or two peoples in agreement, which the surviving fragments do not settle
        - where the joint works stand, how many of them there are, and which of them are still doing what they were made to do
---

For twenty-eight centuries the [[lore-flksinale|Sinale]] and the [[lore-flkkhazar|Khazari]] held
ground together. The accord opens within a generation of the Khazari arriving as seven clans, before
[[lore-khazturnrsd|Khazartúrn was cut]], and it closes on the single day in 2427 BF when that city
was killed. Nothing in the world has ever recorded what its terms were.

The Khazari account opens the accord with a refusal. Soon after the two peoples first met, a Sinale
envoy came to the clans and urged them to do as the Sinale do: to draw back from the world's
troubles and leave them to whoever stayed in it. The clans refused. Their answer, as their account
keeps it, is that they had not come so far to hide. The Sinale say nothing of the envoy, as they say nothing of the Khazari at all.

What it produced is the part the world can still touch. The Sinale had the living world and the
intangible; the Khazari had stone and metal and the enduring; and the fragments describe structures
that blended living wood with shaped stone and artifacts that married Sinalean enchantment to
Khazárian craft. Humans meet these as ruins and as priceless curiosities from an age before
humanity, and cannot reproduce either half of one. They are not usually recognized as the work of two
hands.

It reached further than craft. Both peoples honored [[lore-goddreams|the god of dreams]] together, or at
least in parallel, under the accord's terms—and when the accord shattered, the shared rites shattered
with it. The Khazari also venerate the god's servant
[[lore-khazararrv|Puthakun]], who led the seven clans out of Humadhan and saved their people, and the
Sinale give him no honor at all. The two traditions have diverged so completely since that whether the Sinale's
Aulveira and the Khazari's Luváth would recognize each other's rites is an
open question, and one neither race has any interest in answering.

The end is not gradual. It is [[lore-fallkhazturn|the Fall of Khazartúrn]], and the two events are
one moment seen from two sides: the Khazari lose their greatest city and thirty thousand of their
people, and the world loses the only arrangement the Elder Races ever made with one another. They do
not speak. They do not trade. They do not enter each other's territories. On
[[place-aelwyth|Aelwyth]], where both peoples were already living on the same ground, the estrangement
was resisted for six centuries by a joint crown, and that is the only place anyone tried.
