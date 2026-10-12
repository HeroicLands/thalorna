---
shortcode: thrallrivers
name: {full: The Thrall Rivers, aliases: [The Killing at the Waldburg Market, The First Frithmund]}
type: lore
subType: history
description: "From 660 AF, when the Nordmen took Stormveld and needed thralls by the tens of thousands, captives went down Vrystwald's rivers by the boatload; Waldburg grew past every limit, and about 672 a killing at its crowded market gave the market peace its present form and its first Frithmund."
tags: [history]
data:
  packFolder: vrystwald
  events:
    - id: rivers
      when: 660
      until: ~670
      kind: making
      depth: region
      stated: {calendar: wintertally, text: "1 TR"}
      sources:
        - lore-stormveldtkn
        - place-vrystwldrvrs
        - place-waldburg
        - affiliation-jrldmstrmvld
        - place-velanthrgn
      summary: >-
        When the Nordmen take Stormveld they need thralls in numbers no coastal raid can supply. Within a decade captives taken on the Velanthian frontier and in the Moktur passes go down Vrystwald's rivers to Nordmen buyers by the boatload, the women who run the landings grow rich on it, and Waldburg grows past the size a village can govern.
      standing: attested
      names: [{name: the Thrall Rivers, by: lore-varokhiclt}]
      where:
        locus: [place-vrystwldrvrs]
        reach:
          - place: place-waldburg
            how: the crossing becomes the forest's great market and holds eight hundred people behind one palisade
            knowledge: named
          - place: place-velanthrgn
            how: the frontier villages become the trade's quarry, and its raids its harvest
            knowledge: named
          - place: place-aelwyth
            how: Stormveld's plain is worked by captives the forest sold down its rivers
            knowledge: named
      who:
        - {ref: affiliation-vrystwldtrbs, role: actor}
        - {ref: affiliation-jrldmstrmvld, role: actor}
      follows:
        - event: "lore-stormveldtkn#taking"
          how: caused
          note: a jarldom that works a plain with thralls needs the forest's captives
      accounts:
        - by: lore-varokhiclt
          says: >-
            The rivers carry what the forest takes, and a woman who keeps a landing keeps the forest's road to the world.
          agrees: full
      unresolved:
        - how many of Stormveld's thralls came down the forest's rivers, which nobody on either end has counted
    - id: killing
      when: ~672
      kind: law
      depth: region
      stated: {calendar: wintertally, text: "13 TR"}
      sources: [place-waldburg, lore-varokhiclt, affiliation-vrystwldtrbs]
      summary: >-
        At the crowded summer market a man of one village kills a man of another over a captive's price, and both war-bands arm. The women who run the landings shut the market, and every tribe present answers the killer together before his kin can shelter him. The market peace takes its present form from that day, and Edrilda yra Óthwald wur Waldburg is acclaimed its first Frithmund.
      standing: attested
      names: [{name: the Killing at the Waldburg Market, by: lore-varokhiclt}]
      where: {locus: [place-waldburg]}
      who: [{ref: affiliation-vrystwldtrbs, role: actor}]
      follows:
        - event: "lore-thrallrivers#rivers"
          how: enabled
          note: the trade crowded the market with armed strangers
      accounts:
        - by: lore-varokhiclt
          says: >-
            A killing at the market is answered by every tribe present, because a market that cannot keep its peace is no market.
          agrees: full
      unresolved:
        - the killer's name, which his kin had struck from their tally and the market never learned
---

In the middle of the [[place-waldburg|Waldburg]] market there is a flat stone with an iron ring set in it, and traders who mean to deal honestly swear the market peace with a hand on the ring. A child of the landings knows what the stone is for before she knows how to count. A man was answered there by every tribe at the market at once, and the peace that has held at Waldburg since is the peace sworn over his body.

## The Rivers Open

The [[lore-varokhiclt|Varokh]] have always taken captives, and they have always sold the ones nobody ransoms down the rivers. In 660 the Nordmen crossed the sea and took Aelwyth's north-east for the [[affiliation-jrldmstrmvld|Jarldom of Stormveld]] ([[lore-stormveldtkn|The Taking of Stormveld]]), and a jarldom that works a plain with thralls needs thralls by the tens of thousands, more than any raid on a coast can supply. The buyers came looking, and they found the forest.

Within a decade captives taken on the [[place-velanthrgn|Velanthian]] frontier and in the passes of Moktur were going down the [[place-vrystwldrvrs|rivers]] to Nordmen buyers by the boatload, and the reciters began the count again from the summer the first full boats went down. The trade was the women's, as every trade in the forest is: they kept the landings, set the prices, fed the captives on the way and took the silver. The landings grew walls and wharves, [[place-grimholt|Grimholt]] among them, and the women who kept them grew rich. Waldburg, at the crossing where the rivers meet, grew past five hundred people and did not split, because nobody wanted to be the half that left the market. It holds eight hundred today, and its three elders cannot hear half of what is brought to them.

## The Killing at the Market

About 672, at the summer market, a man of one village killed a man of another over the price of a captive both claimed to have taken. Both war-bands were at the market, and both armed. The Waldburg women did what no one had done before. They shut the market, every landing at once, and sent word to every war-band present that there would be no more trade until the killing was answered. The war-bands came to the stone, every one of them, and answered the killer together before his own kin could take him home and shelter him. His kin struck his name from their tally, and the market never learned it.

The market peace takes its present form from that day. A killing at Waldburg's market is answered at once by every tribe present, not by the dead man's kin alone, and the peace is held by a Frithmund the market acclaims. The first was **Edrilda yra Óthwald wur Waldburg**, who had kept the landing where the killing happened and had shut it first. The office is acclaimed and never inherited: **Hródila yra Óthwald wur Waldburg** held it after her, and **Arnhilda yra Grimwald wur Waldburg** holds it now. The Frithmund commands nobody and answers to no crown; she keeps the peace for the days of the market, and every war-band at it keeps the peace with her.

## What It Left

- **The Frithmund's stone.** The ringed stone in the Waldburg market where the killer was answered and the peace is sworn. A killing at the stone during a muster would set the market's law against the muster's, and Waldburg's old people say it has never happened, which is not the same as saying it never will.
- **Waldburg's size.** A village of eight hundred whose triad is strained by everything it is asked, and which the upriver villages suspect of becoming something more than a village.
- **The rivers.** The forest's one road to the world, which carries furs, amber and people down the same water in the same boats. The irony that the Varokh, who drove the Pelwar off the mainland, now sell displaced people down the same rivers is one the forest has never had a reason to notice.

## See Also

- [[place-waldburg|Waldburg]]—the crossing, the market and the stone
- [[lore-stormveldtkn|The Taking of Stormveld]]—the taking that made the buyers
- [[place-vrystwldrvrs|Vrystwald Rivers]]—the water the captives went down
- [[lore-wintertally|The Tally of Winters]]—the Thrall Rivers as the forest counts them
