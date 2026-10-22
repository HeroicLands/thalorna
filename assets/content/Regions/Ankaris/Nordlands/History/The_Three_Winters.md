---
shortcode: threewinters
name: {full: The Three Winters, aliases: [The Door-Seat Oath]}
type: lore
subType: history
description: "From 512 to 514 AF three winters ran together with no summer between them across the Nordlands and the forest south of them; the old of the poorest halls went over the death-fell above Marvstead, and at the thirty-fourth sitting in 518 the five kings swore, or the skalds say they swore, that no hall would send its old to the fell while another hall had bread."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: winters
      when: 512
      until: 514
      kind: famine
      depth: region
      stated: {calendar: domseycount, text: "226 HF"}
      sources:
        - lore-nrdhmhstry
        - lore-nordheimnclt
        - place-marvstead
        - lore-nrgadhstry
        - place-holafell
      summary: >-
        Three winters run together with no Somarmál between them. The thaw fails in 512 and 513 and comes late and thin in 514; the seed grain is eaten, the whale strand stays empty and the cattle die in the byres. In Nordheim's interior and in Vithgard the old of the poorest halls go over the svelthfell, the death-fell above Marvstead, so that the young can eat, and the halls differ to this day on who went and whether anyone was sent.
      standing: attested
      names:
        - {name: the Three Winters, by: lore-nordheimnclt}
        - {name: the Hunger, by: affiliation-skaldscrcl}
      where:
        locus: [place-nrdlndsrgn]
        reach:
          - place: place-marvstead
            how: the kin-fell above the town takes the old of the poorest halls
            knowledge: named
          - place: place-vithgard
            how: the kingdom claims the memory as its own, and its halls keep the door-seat
            knowledge: named
          - place: place-holafell
            how: the Giant's Children say a predecessor let the Wound close, and winter did not end until the next elder cut it
            knowledge: named
          - place: place-nalthmark
            how: a child's cry on the road between the last farm and the forest is placed in these winters by the tale
            knowledge: named
          - {place: place-vrystwald, how: the famine falls on the forest too, knowledge: named}
      accounts:
        - by: affiliation-thursborn
          says: >-
            A keeper of the Wound at Holafell failed to keep it open, and the world's winter did not end until the next elder opened it again.
          agrees: partly
        - by: affiliation-skaldscrcl
          says: >-
            The old went over the fell. Some say they walked, some say they were led, and the Circle keeps every version and judges none, because no law ordered it and no ting ever tried it.
          agrees: full
      unresolved:
        - who went over the svelthfell and whether anyone was sent, which the halls have argued for two centuries
        - whether the famine began in the north or came up from the south with the failed trade
    - id: oath
      when: 518
      kind: treaty
      depth: region
      stated: {calendar: domseycount, text: "232 HF"}
      sources: [lore-nrdhmhstry, lore-nordheimnclt, place-domsey, lore-veturnetur]
      summary: >-
        At the thirty-fourth sitting on Domsey, the first after the famine, King Bruldmil of Nordheim and the four kings swear at the law-rock that no hall shall send its old to the fell while another hall has bread. The Skalds' Circle teaches the oath as history; the skalds of Hliskvir's school decline it, and say the tale gives a shape to a duty older than the famine.
      standing: disputed
      names: [{name: the Door-Seat Oath, by: affiliation-skaldscrcl}]
      where:
        locus: [place-domsey]
        reach:
          - place: place-nrdlndsrgn
            how: every hall seats its honored old by the door at Veturnetur and serves them first
            knowledge: named
      who: [{ref: affiliation-kngdmnrdhm, role: actor}]
      follows:
        - {event: "lore-threewinters#winters", how: caused, note: the famine the oath answered}
      accounts:
        - by: affiliation-skaldscrcl
          says: >-
            Five kings swore it at the law-rock in the words the Circle recites, and the door-seat is its memorial.
          agrees: full
        - by: lore-nordheimnclt
          says: >-
            The obligation of kin to feed their old does not depend on proving the oath, and the tellers differ over whether it was ever sworn in those words.
          agrees: partly
      unresolved: ["whether the oath was sworn in the words the Circle recites, or at all"]
---

At [[lore-veturnetur|Veturnetur]] in every hall of the north, the steward seats the household's old by the door and serves them before the jarl, and the first time a fosterling sees it done he asks why the honored seat is the cold one nearest the way out. The answer is **the Three Winters**, and it is the north's best-known shame.

## The Winters That Ran Together

In 512 the thaw did not come. The ice stayed on the fjords past [[lore-sumarmal|Somarmál]], the ships stayed on the strand, and the seed grain went into the pot instead of the ground. In 513 the thaw came late and the frost came early, and there was no harvest to speak of between them; the whale strand at [[place-vithgard|Vithgard]] stayed empty, the cattle died in the byres, and the halls ate the breeding stock. In 514 the summer came thin and short, and the halls that had anything left to plant planted it. The skalds count the three as one winter because that is how it was lived: no Somarmál between them that anyone remembers keeping.

[[place-nordheim|Nordheim]]'s interior and Vithgard both claim the worst of it, and both are right. In the poorest halls, far from the coast where a boat could still find fish, the old of the household went over the _svelthfell_, the death-fell above [[place-marvstead|Marvstead]], so that the young might eat. Some tellings say they walked; some say they were led up; some say a hall's steward chose who went. No law ordered it, no ting ever tried it, and two centuries later the halls still argue about who went and whether anyone was sent, because every family in the interior has a grandmother's name in the argument. [[affiliation-thursborn|The Giant's Children]] at [[place-holafell|Holafell]] tell it differently: a keeper of the Wound let it close, and the world's winter did not end until the next elder cut it open. The halls below do not accept the cause and do not forget the telling.

The famine reached the forest. In [[place-vrystwald|Vristwald]] the stores failed and the rivers froze to the bed, and the [[lore-varokhiclt|Varokh]] remember the same winters by their own names.

## The Oath at the Thirty-Fourth Sitting

The first sitting after the famine fell in 518, the thirty-fourth by [[lore-domseycount|the Domsey count]]. King [Bruldmil]{.name data-type="being/npc"} of [[affiliation-kngdmnrdhm|Nordheim]], who had been king through all three winters and had sent his own grain west to Vithgard in the second of them, came to the island with the other four kings, and at the law-rock, the [[affiliation-skaldscrcl|Skalds' Circle]] says, they swore together that no hall should send its old to the fell while another hall had bread. The Circle recites the oath in fixed words and teaches it as history. The skalds of [Hliskvir]{.name data-type="being/npc"}'s school decline it: they say the tale gives a shape to a duty older than the famine, that the words were made by a skald a generation later, and that five kings who had each let halls starve would not have sworn anything that named what they had done. The culture note says the plainer thing, that the obligation of kin to feed their old depends on nobody proving the oath.

What is not disputed is the door-seat. From that generation on, the steward of every hall seats the honored old by the door at Veturnetur and serves them first, and a hall that cannot provision its elders goes to its kin and its neighbors for help, which enters [[lore-kinhalcrdt|hall credit]] and diminishes a house that leaves it unpaid. The seat nearest the way out became the seat of honor because that is the way the old had gone.

## What It Left

- **The svelthfell.** A cliff above Marvstead with small frost-split cairns at its foot, where kin with a grandmother's name in the argument still go at Veturnetur.
- **The door-seat.** Kept in every hall, whatever the skalds say about the oath.
- **The crying child.** Travelers on the [[place-nalthmark|Nalthmark]] road hear a child between the last farm and the forest, and the tale places it in these winters, left unnamed when its mother's food failed.
- **The fleets.** The famine sent every hull in the north south within five years ([[lore-southrnfleets|The Southern Fleets]]), and the shame of the fell is the reason the skalds give for the ferocity of what followed.

A hall in the interior still carries a claim from these winters: that it holds the odel of two halls whose old "ate on" its own, and that the debt was never reckoned. A party asked to witness such a claim at a ting will find that both halls can name the dead and neither can name who sent them.

## See Also

[[lore-nrdhmhstry|Histories and Legends of Nordheim]]
: the famine as Nordheim tells it

[[lore-nordheimnclt|Nordheimn]]
: the door-seat and the duty of kin

[[place-marvstead|Marvstead]]
: the town below the death-fell

[[lore-southrnfleets|The Southern Fleets]]
: what the hunger did next

[[lore-domseycount|The Domsey Count]]
: the age of the Hunger and the Fleets
