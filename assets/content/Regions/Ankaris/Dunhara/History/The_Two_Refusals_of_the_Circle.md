---
shortcode: circlrefusl
name: {full: The Two Refusals of the Circle}
type: lore
subType: history
description: "Twice the Warrior's Circle at the Stone of Ranaz was petitioned to ride against a Dunhari tribe, about 575 AF against a sheikh who killed guests who had eaten his salt and about 665 against a tribe that fouled a shared well, and twice it refused under the Old Promise; the first tribe became a vassal of the Tellumi and the second was swallowed by its neighbors within a generation."
tags: [history, dunhara]
data:
  culture: dunhariclt
  packFolder: dunhara
  events:
    - id: salt
      when: ~575
      kind: council
      depth: region
      sources: [affiliation-wrrscrcldnhrtrbs, place-stoneofranaz]
      summary: >-
        Tribes of the northern circuits petition the Circle at a season-turn to ride against a sheikh who has killed guests who ate his salt. Sovidur raiders are at the northern wells that year, and the Circle rules that the Old Promise binds while they are: no Dunhari blade against a Dunhari. The tribe, shunned at every well, puts itself under the protection of the Tellumi Confederation and becomes its vassal.
      standing: attested
      where:
        locus: [place-stoneofranaz]
        reach:
          - place: place-dunhardsrtrgn
            how: >-
              a Dunhari tribe of the north passes out of the tribes' councils and into a Tellumi prince's service
            knowledge: named
      who:
        - {ref: affiliation-wrrscrcldnhrtrbs, role: actor}
        - {ref: affiliation-khzrncnfdrtn, role: actor}
      accounts:
        - by: affiliation-wrrscrcldnhrtrbs
          says: >-
            The Promise was kept whole. A tribe the Circle could not punish punished itself, and the price was a tribe.
          agrees: full
      unresolved: [what became of the vassal tribe when the Tellumi cities fell in the Breaking]
    - id: well
      when: ~665
      kind: council
      depth: region
      sources: [affiliation-wrrscrcldnhrtrbs, place-stoneofranaz, affiliation-dunhartrbs]
      summary: >-
        Tribes of the central circuits petition the Circle to ride against a tribe whose men fouled a well it shared with them, against the Laws of the Well. Sovidur raiders and contested wells hold the north, and the Circle refuses again under the Old Promise. The petitioning tribes take the matter into their own feuds, and within a generation the fouling tribe's wells, herds and households are divided among its neighbors and its name is recited only as a lineage inside other tribes' genealogies.
      standing: attested
      where:
        locus: [place-stoneofranaz]
        reach:
          - place: place-dunhardsrtrgn
            how: >-
              the wells of a whole circuit change hands by feud and marriage, and one tribe's genealogy ends as a lineage of others
            knowledge: named
      follows:
        - {event: "lore-circlrefusl#salt", how: answered, note: the Circle cited its first refusal}
      who:
        - {ref: affiliation-wrrscrcldnhrtrbs, role: actor}
        - {ref: affiliation-dunhartrbs, role: actor}
      accounts:
        - by: affiliation-wrrscrcldnhrtrbs
          says: >-
            The Circle refused twice and paid for each refusal, and owes nobody a third.
          agrees: full
---

The [[affiliation-wrrscrcldnhrtrbs|Warrior's Circle]] exists to keep one oath, the [Old Promise]{.name data-type="lore/custom"}: no Dunhari blade is raised against another Dunhari while any outside enemy walks Dunhari land. **The Two Refusals of the Circle** are the two times it was asked to set the oath aside, and the price it paid for keeping it.

## The Guest-Killer

About 575 AF a sheikh of one of the northern tribes killed guests in his own tents after they had eaten his salt. Salt is the first law of the desert, and every tribe that heard of it wanted the tribe punished. The tribes of the northern circuits brought the case to the [[place-stoneofranaz|Stone of Ranaz]] at the next season-turn and asked the Circle to ride.

That year [[lore-sowidesclt|Sovidur]] raiders were at the northern wells, as they are most years. The Circle ruled that an outside enemy walked the land while they were there, and that the Promise therefore held: no Dunhari blade against a Dunhari, whatever he had done. It refused the petition.

The tribe was punished all the same. No well received it and no tribe would sell to it, and within a few years its sheikh put it under the protection of the [[affiliation-khzrncnfdrtn|Tellumi Confederation]], in the belt to the north. It became a vassal of a Tellumi prince and passed out of the tribes' councils.

## The Fouled Well

About 665 tribes of the central circuits brought a second case. A tribe whose men had quarreled with theirs over grazing had fouled a well they all shared, against the [Laws of the Well]{.name data-type="lore/law"} that even blood enemies keep. The petitioners asked the Circle to ride against it.

The Circle had its own precedent to go by. Sovidur raiders and contested wells held the north, an outside enemy walked the land, and the Circle refused again in the words of its first ruling. The petitioners took the matter into their own feuds. Within a generation the fouling tribe's wells and herds had been divided among its neighbors, its households had married into theirs, and its name was recited only as a lineage inside other tribes' genealogies. This is the Circle's account of the second refusal; the poets tell it differently.

## What It Left {#what-it-left}

- **The precedent.** The Circle holds that the Promise binds whenever any outside enemy is anywhere in the desert, and the Sovidur at the northern wells have meant that it nearly always binds.
- **The price.** The Circle counts a tribe lost to the Tellumi and a tribe lost to its neighbors as the cost of keeping the Promise whole, and its oldest members cite both.
- **The open question.** Petitioners camp at the Stone with cases against [the Unrecited]{.name data-type="affiliation/criminal"}, Dunhari with their names taken, and over the storm above the [[place-twrlghtnmrkd|Tower of the Lightning-Marked]], and the Council of Scars divides on whether the Circle owes anyone a third refusal.

## See Also {#see-also}

[[affiliation-wrrscrcldnhrtrbs|Warrior's Circle]]
: the circle that keeps the Old Promise

[[place-stoneofranaz|Stone of Ranaz]]
: where both petitions were heard

[[affiliation-dunhartrbs|Dunhara Tribes]]
: the tribes whose feuds settled the second case

[[affiliation-khzrncnfdrtn|Tellumi Confederation]]
: the power that took the first tribe as a vassal
