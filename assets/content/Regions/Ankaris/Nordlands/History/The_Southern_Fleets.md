---
shortcode: southrnfleets
name: {full: The Southern Fleets, aliases: [The Nordheim Raids]}
type: lore
subType: history
description: "From 519 to 530 AF the fleets of King Thraskmýl of Nordheim, built in Malagna's yards, went south every summer with the famine behind them: Provènzia's coast and the Gulf of Batáren, where they threw down Yhârvalen Henge and sacked Ménavar Abbey, and Élavendre's north shore, which has refused every treaty since."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: fleets
      when: 519
      until: 530
      kind: war
      depth: region
      stated: {calendar: domseycount, text: "233 HF"}
      sources:
        - place-bldfldyharvalen
        - place-yharvalenhenge
        - place-menavarabbey
        - place-elavendre
        - lore-empirdclne
        - skill-nordmalng
        - affiliation-kingdomlgn
      summary: >-
        With the Three Winters behind them, the fleets of King Thraskmýl of Nordheim go south every summer for eleven years, carrying the hirds of three kingdoms in hulls built in Malagna's yards. They strike the empire's western provinces: the Provènzian coast and the Gulf of Batáren, where in about 520 they throw down Yhârvalen Henge and sack Ménavar Abbey, and Élavendre's north shore. The raids make the Blood-field of Yhârvalen, fill Nordheim's howes with southern silver, and are counted by the empire among the causes of its decline.
      standing: attested
      names:
        - {name: the Southern Fleets, by: affiliation-skaldscrcl}
        - {name: the Nordheim raids, by: place-provenzrgn}
      where:
        locus: [place-provenzrgn]
        reach:
          - place: place-bldfldyharvalen
            how: the henge thrown down and the men killed on its ruins make the worst blood-field in Provènzia
            knowledge: named
          - place: place-menavarabbey
            how: the abbey is sacked and never refounded
            knowledge: named
          - place: place-elavendre
            how: the north coast is raided, and the kingdom has had no treaty and no embassy with the Nordmen since
            knowledge: named
          - place: place-gnarthborg
            how: the yards grow rich building the hulls, and Malagna Coastal speech takes its Provenzal words
            knowledge: named
          - place: place-knalthstead
            how: southern church silver goes into a royal howe by the king's road
            knowledge: named
          - place: place-braldvik
            how: one Malagna crew sails a captured galley through the western strait, is stranded on the Sâlkhâlon coast in 523, and leaves the bay its Nordmal name
            knowledge: named
      who:
        - {ref: affiliation-kngdmnrdhm, role: actor}
        - {ref: affiliation-kingdomlgn, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: "lore-threewinters#winters"
          how: caused
          note: the hunger the fleets carried south
      accounts:
        - by: place-provenzrgn
          says: >-
            The Nordheim raids came in off the gulf, threw down the henge, sacked the abbey and left a withering field that the Black Flame has been rousing since; the kingdom has never been paid for any of it.
          agrees: full
        - by: affiliation-kngdmnrdhm
          says: >-
            The halls that had sent their old over the fell sent their sons south instead, and the sons came home with grain and silver; the skalds sing the fleets as the answer to the shame of the hunger and sing nothing of the henge.
          agrees: partly
          withholds: the henge, which no Nordheim skald names
        - by: affiliation-vylarinmpr
          says: >-
            Barbarian pressure from the north on the western provinces, in the same years the southern provinces began to drift.
          agrees: partly
      unresolved:
        - the sea road the fleets took to the Gulf of Batáren, which lies beyond Élavendre's west cape
        - which of the three kingdoms' hirds threw down the henge, which every skald leaves to another kingdom
---

A Knalthstead howe-warden tells it as a warning rather than a boast. "There is a plate in the king's howe by the road," he says, "silver, with a southern saint on it, and the saint has a chip out of her face where a sword took her off a wall. You can go and look. You cannot bring her out." The plate came north in the **Southern Fleets**, and so did most of the silver in the north's royal howes.

## The Hunger Goes to Sea

The [[lore-threewinters|Three Winters]] ended in 514, and the halls that had sent their old over the fell did not forget what the fell had cost them. King [[affiliation-kngdmnrdhm|Thraskmýl]] of Nordheim, who took the arm-ring in 519 from his father [[affiliation-kngdmnrdhm|Bruldmýl]], the king of the hunger, gave the north something to do with its shame: every hull that could be made seaworthy went south at Sumarmál, and the hirds of Nordheim, Malagna and Vithgard went in them. Malagna's yards at [[place-gnarthborg|Gnarthborg]] built the hulls, under King [[affiliation-kingdomlgn|Hlurthann I]], who had turned his kingdom to the western water after [[place-skalfvatn|Skalfvatn]], and the Malagna Coastal dialect still carries the Provenzal words its sailors brought home.

The fleets went south every summer for eleven years. Their targets were the empire's western provinces: the coast of [[place-provenzrgn|Provènzia]] and the [[place-batarengulf|Gulf of Batáren]], and the north shore of [[place-elavendre|Élavendre]]. They did not strike the Vylarian heartland, which has no northern coast, except once: in 523 a Malagna crew took a captured galley through the western strait and was stranded on the Sâlkhâlon coast, where the bay they burned still carries their name ([[lore-bankedfire|The Winter of the Banked Fire]]). What the Vylarian chroniclers call "pressure from the north" on the empire's own frontier is the Varokh hunger raids of the same years, out of the forest, and not a landing.

## The Henge and the Abbey

About 520 the fleets came in off the gulf onto northern Provènzia. The hirds threw down [[place-yharvalenhenge|Yhârvalen Henge]], the great stone circle of the north of that kingdom, and killed the men who stood on it, and they sacked [[place-menavarabbey|Ménavar Abbey]], a house of Aurèldían learning that was never refounded. The killing on the ruins of a sacred circle made the [[place-bldfldyharvalen|Blood-field of Yhârvalen]], a withering that kills the land around it and the worst field in a kingdom that has more fields than anywhere else. Provènzia has never been paid for it, and the Cult of the Black Flame has been rousing the field since.

No Nordheim skald sings the henge. The fleets are sung as the answer to the hunger, the sons going south where the old had gone over the fell, and every kingdom's skalds leave the stones to another kingdom's hird. The Circle keeps the silence as a fact: the one deed of the Southern Fleets that the north will not claim is the one the south remembers.

## What It Left

- **The field.** Yhârvalen is Provènzia's, made by northern hands, and the one blood-field in the world that the north owes to someone else.
- **The silver.** Southern church plate in the royal howes of Knalthstead and Gnarthborg, with wardens in them, and a chip out of the saint's face.
- **Élavendre's memory.** The kingdom has had no treaty, no embassy and no appetite for either with the Nordmen since, and its north coast is still raided.
- **The decline.** The empire counts the fleets among the causes of its decline, in the same years its southern provinces began to drift, and within a generation it was paying Nordmen to garrison what the fleets had loosened ([[lore-compactsignd|The Signing of the Compact]]).

A Provenzian abbot's agent who knows which howe holds Ménavar's plate has a reason to hire a party that does not mind a howe-warden. A Nordheim jarl who learns that a stone from the henge lies in his great-grandfather's howe has a worse problem: the Black Flame knows it too, and returning it might matter.

## See Also

- [[lore-threewinters|The Three Winters]]—the hunger the fleets carried south
- [[place-bldfldyharvalen|Blood-field of Yhârvalen]] · [[place-yharvalenhenge|Yhârvalen Henge]] · [[place-menavarabbey|Ménavar Abbey]]—what the fleets left in Provènzia
- [[lore-compactsignd|The Signing of the Compact]]—how raiding turned to hire
- [[lore-bankedfire|The Winter of the Banked Fire]]—the one crew that reached the Vylarian heartland
- [[lore-empirdclne|The Decline Begins]]—the empire's account of the same years
- [[lore-domseycount|The Dómsey Count]]—the age of the Hunger and the Fleets
