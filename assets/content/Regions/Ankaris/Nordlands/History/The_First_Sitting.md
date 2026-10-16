---
shortcode: nordfirstsit
name: {full: The First Sitting on Domsey, aliases: [The Slaughter on Domsey, The Acclamations]}
type: lore
subType: history
description: "Between 260 and 285 AF five district tings acclaimed kings over the five old land-names of the north; in 287 the five kings met for the first time on Domsey, and the meeting ended in an afternoon's killing on the strand that made the island a blood-field, the ting-peace a law, and Nordheim its keeper."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: acclamations
      when: 260
      until: 285
      kind: accession
      depth: region
      sources: [place-hringstead, skill-nordmalng, place-ankrscntnnt, place-vrystwald]
      summary: >-
        Within one generation the district tings of the five old land-names of the north each acclaim a king: Nordheim first, about 270, under Svalthorv of the Knalthidrok, and Vithgard last. The hall-lords combine against the Vylarian forts in southern Vristwald and for the southern silver trade, and keep the arm-ring in the ting's hand.
      standing: reconstructed
      names: [{name: the Acclamations, by: affiliation-skaldscrcl}]
      where:
        locus: [place-nrdlndsrgn]
        reach:
          - place: place-knalthstead
            how: the first royal hall of the north is raised there
            knowledge: named
          - place: place-hringstead
            how: the Circle's neutral ground becomes the one place no king's writ runs
            knowledge: named
      unresolved: [which of the five tings acclaimed first; every kingdom's skalds say their own]
    - id: slaughter
      when: 287
      kind: battle
      depth: region
      stated: {calendar: domseycount, text: "1 FC"}
      sources: [place-domsey, affiliation-kngdmnrdhm, lore-nordheimnclt, lore-bloodfield]
      summary: >-
        At Somarmál of 287 the five kings land on Domsey with their hirvs for the first common assembly, and a quarrel over who sits nearest the law-rock becomes a killing on the strand that lasts an afternoon. Nine jarls and about three hundred hirvmen die, King Svalthorv of Nordheim among them. The survivors swear the ting-peace, leave their swords in the boats, cut the twenty-seven seats and give the island to Nordheim's keeping as the wergild nobody else could pay. No grave-ale is drunk for the dead of 287, and the island is a blood-field.
      standing: attested
      names:
        - {name: the Slaughter on Domsey, by: affiliation-skaldscrcl}
        - {name: the First Sitting, by: affiliation-kngdmnrdhm}
      where:
        locus: [place-domsey]
        reach:
          - place: place-nordheim
            how: the crown takes the island's keeping and the central seat, and has convened the assembly since
            knowledge: named
          - place: place-nrdlndsrgn
            how: every seventh year since, the five kings sit on the island under the Landsgudi's hallowing
            knowledge: named
      who:
        - {ref: affiliation-kngdmnrdhm, role: victim}
        - {ref: affiliation-kingdomlgn, role: actor}
        - {ref: affiliation-kingdmnrgd, role: actor}
      accounts:
        - by: affiliation-kngdmnrdhm
          says: >-
            Svalthorv was cut down unarmed at the law-rock by Malagnan hirvmen, and the island was given to his son as wergild because no other crown could pay what it owed.
          agrees: partly
          withholds: that Nordheim's hirv drew first on the strand
        - by: affiliation-kingdomlgn
          says: >-
            The first blow was Nordheim's, struck over a seat; Malagna answered as any hall answers, and the island was given to Nordheim to end a feud, not to admit a debt.
          agrees: partly
          withholds: how many of the nine jarls were Malagna's
        - by: affiliation-skaldscrcl
          says: >-
            The Circle keeps both tellings and recites neither as a judgment, because no ting has ever reckoned the dead of 287 and the grave-ale for them has never been drunk.
          agrees: partly
      unresolved:
        - who struck first on the strand, which no telling the Circle keeps agrees on
        - how many of the three hundred were hirvmen of each crown, since the dead were counted by nobody
---

"Leave your sword in the boat," the Lawspeaker tells a newcomer before the keel touches [[place-domsey|Domsey]], and he says it as if the rule were as old as the island. It is older than the assembly. The rule is what the five kings swore on the strand on the evening of the day they first met, with nine jarls and three hundred hirvmen lying between them and the water, and everything the north has done together since has been done inside it.

## Five Crowns in One Generation

For as long as the halls remember, the fjords had hall-lords and no kings. A district's ting kept its own peace, a gudi witnessed its oaths, and the [[affiliation-skaldscrcl|Skalds' Circle]], sworn at [[place-hringstead|Hringstead]] about a hundred and ten years after the Founding, carried a judgment from one fjord to the next in a skald's memory. What changed, between about 260 and 285 AF, was the south. Vylarian posts stood along the road into southern [[place-vrystwald|Vristwald]], a few weeks' march from the Nordheim fjords, and southern silver was coming north in quantities that made a hall-lord with a fleet a different thing from a hall-lord with a hall. One district after another did what districts do when a danger is larger than a hall: it acclaimed a king and handed him an arm-ring it could take back.

Nordheim's ting acclaimed first, about 270, over the hall at [[place-knalthstead|Knalthstead]]: [[affiliation-kngdmnrdhm|Svalthorv]], the name-giver of the [[affiliation-kngdmnrdhm|Knalthidrok]], the line that still holds the crown. Malagna's, Norgaad's and Targud's followed within a dozen years, and Vithgard's last. Every kingdom's skalds say their own ting was first; the Circle, which keeps all five claims, recites none of them as a judgment.

## The Afternoon on the Strand

Five new crowns had no order among them, and in 287 they met to settle one. The place was Domsey, a low island in Nordheim's waters a morning's row from any strand, chosen because it was nobody's hall. The time was [[lore-sumarmal|Somarmál]], the season of the great tings. The kings came with their hirvs, armed as a king travels, and the first matter raised was who should sit nearest the law-rock.

Nobody the Circle will name struck the first blow. Nordheim says a Malagnan hirvman cut Svalthorv down unarmed at the rock; Malagna says Nordheim's hirv drew first over the seat and was answered as any hall answers. What is not disputed is that the quarrel became a battle on the strand that lasted an afternoon, that nine jarls and about three hundred hirvmen died on it, that Svalthorv was among them, and that when the light went the four living kings and Svalthorv's son [[affiliation-kngdmnrdhm|Snilthorv]] stood on a beach of their own dead with the boats behind them.

What they swore that evening is the whole law of the island. Steel would never again come inside the stones. The ground would be hallowed before any king stepped on it and the peace lifted before any king left. Twenty-seven seats would be cut into the turf, seven for Nordheim's jarls, five for Norgaad's, four for Malagna's, three each for Targud's and Vithgard's, one for each king, and the count would never change without the whole assembly's consent. And the island would pass to Nordheim's keeping, as the wergild for a king that no other crown could pay, which is why Nordheim's king sits at the center and convenes the sitting still. Snilthorv rowed home a king and a creditor, and the first sitting of the [[lore-domseycount|Domsey count]] is reckoned from that year.

## The Ale Nobody Drank

One thing the kings did not do. The dead of 287 were burned where they fell, but no grave-ale was drunk for them, because to drink it is to speak the reckoning over it, and the reckoning names who owes. Four centuries of [[lore-kinhalcrdt|hall credit]] compound on that question. A crown that admitted its hirv struck first would owe wergild for nine jarls to four other crowns, with the interest the north keeps on an unpaid debt, and no king has been willing to be the one who says it. So the dead of Domsey are the unreckoned dead, and the island is a _vrellvoll_, a blood-field of the silence: nothing sings there, no ewe has dropped a living lamb on it, and for six years in every seven the herdsman who rows out to count Nordheim's sheep counts one figure more than he has sheep at dusk and does not count again. The Landsgudi's hallowing closes the ground for the days of a sitting, and lifting the peace opens it.

## What It Left

- **The ting-peace.** A blow struck inside the stones is an offense against the gods and the five crowns together, and no wergild settles it, because a man who draws steel there feels the dead of 287 stand up behind his seat.
- **The seats and the quarrel.** Twenty-seven, unchanged since; Norgaad's five and Vithgard's three are the oldest grievance in the north.
- **Nordheim's keeping.** The island, the central seat and the convening of the assembly, held as a wergild that was never reckoned.
- **The count.** The north dates by sittings from this year: the sitting of 518 was the thirty-fourth, and the one due at Somarmál of 721 is the sixty-third.

A party at a sitting can be handed either half of this. A Malagnan claimant who offers to drink the grave-ale of 287 in his own name is offering to reckon the debt, and a reckoning that found Nordheim's hirv drew first would put the island's keeping in question before every king in the north. And the field under the seats is thin, and held shut only by the hallowing: a Nahild cell that means to spill blood inside the stones at the sixty-third sitting would open it with all five kings sitting on it.

## See Also

- [[place-domsey|Domsey]]—the island, the seats and the hallowing
- [[lore-domseycount|The Domsey Count]]—the reckoning that begins with this sitting
- [[affiliation-kngdmnrdhm|Kingdom of Nordheim]]—the crown that keeps the island
- [[lore-nordkinwars|The Kin-Wars]]—the next time Nordheim and Malagna settled a quarrel with hirvs
- [[lore-bloodfield|Blood-fields]]—what the unreckoned dead left under the seats
