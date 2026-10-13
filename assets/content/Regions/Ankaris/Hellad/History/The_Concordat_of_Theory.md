---
shortcode: heladconcordat
name: {full: The Concordat of Theory, aliases: [The Line of Practice]}
type: lore
subType: history
description: "In the years after the Settlement of the Crowns, about 625 AF, the councils of Thyrenae and Therádon agree with the Ordo Arcanis's Heliónis chapter the arrangement that holds today: a philosopher may study, teach and dispute arcane theory without belonging to the Ordo, so long as he does not practice."
tags: [history, hellad, freecitiesage]
data:
  packFolder: helionis
  events:
    - when: ~625
      kind: charter
      depth: region
      sources:
        - place-helionis
        - affiliation-thyrenae
        - place-thyrenae2
        - affiliation-theradon
        - place-theradon2
        - affiliation-ordoarcanis
        - affiliation-panepistmm
      summary: >-
        With Heliónis's own magistrates confirmed by the Settlement of the Crowns, the city councils of Thyrenae and Therádon negotiate with the Ordo's Heliónis chapter the arrangement that holds today. A philosopher may study, teach and dispute arcane theory without Ordo membership, so long as he does not practice.
      standing: attested
      names:
        - {name: the Line of Practice, by: affiliation-ordoarcanis}
        - {name: the Concordat, by: affiliation-thyrenae}
      where:
        locus: [place-thyrenae2]
        reach:
          - place: place-theradon2
            how: >-
              the chapterhouse of the Panepistemium teaches theory under the Concordat, and the city's courts hold to the same line
            knowledge: named
          - place: place-helionis
            how: >-
              unlicensed practitioners are commoner here than anywhere in the Ordo's reach, because the line between theory and practice is a negotiated one and both sides argue about where it falls
            knowledge: named
      who:
        - {ref: affiliation-thyrenae, role: signatory}
        - {ref: affiliation-theradon, role: signatory}
        - {ref: affiliation-ordoarcanis, role: signatory}
      follows:
        - event: "lore-crownssettle#settlement"
          how: enabled
          note: the cities' own magistrates are the ones the chapter has to treat with
      accounts:
        - by: affiliation-thyrenae
          says: >-
            A philosopher may think what he likes and teach what he thinks. The Concordat says so, and the Ordo has signed it.
          agrees: partly
          withholds: that the Ordo's own scholars set the line between thinking and doing
        - by: affiliation-ordoarcanis
          says: >-
            The Heliónis chapter agreed terms with two councils, and the terms are kept. Practice is the Ordo's, and theory is a conversation.
          agrees: partly
          withholds: why the chapter agreed to a conversation at all
      unresolved:
        - why the chapter agreed to the Concordat, which neither the councils' minutes nor the chapter's record state
        - where the line between theory and practice falls in a single lesson, which the Concordat leaves to the teacher's judgment
---

A teacher of the Panepistemium at Thyrenae will tell a student that a lesson on the nature of the elements is philosophy, and that the same lesson with the student's hand held out over a flame is a matter for the Ordo. Where one lesson turns into the other is the oldest argument of the Concordat.

## The Occasion

The Settlement of the Crowns left Heliónis on the chancery's roll as a province whose cities kept their own magistrates. The Ordo's chapter in Heliónis, among the most prestigious in the order, now treated with the cities' councils and not with an imperial governor. In the years that followed, about 625, the councils of [[place-thyrenae2|Thyrenae]] and [[place-theradon2|Therádon]], the cities with the oldest colleges, sat down with the chapter and wrote out terms.

## The Terms

- **Theory.** A philosopher may study, teach and dispute arcane theory without belonging to the Ordo.
- **Practice.** A man who practices without the Ordo's licence is the Ordo's concern and not the city's.
- **The colleges.** The [[affiliation-panepistmm|Panepistemium]]'s colleges in the two cities teach their students theory under the Concordat, and the councils answer for what the colleges teach.

The Concordat says nothing about the line between the first two. Both sides know the line exists, and both have argued about it since the terms were signed.

## The Line

The line between theory and practice is blurred, and both the councils and the Ordo exploit the blur. A student of the colleges learns what a working is, how it is classified and why it succeeds, and stops where the practice would begin. A man who goes on is an unlicensed practitioner, and there are more of them in Heliónis than anywhere else the Ordo reaches.

The Ordo's Quaesitorium treads more carefully in Heliónis than elsewhere, in the land that gave the Ordo its foundations.

## What the Concordat Left

- **The line between theory and practice**, which both sides exploit.
- **Unlicensed practitioners**, commoner here than anywhere else in the Ordo's reach.
- **The Quaesitorium's caution** in the Helionite cities.
- **The colleges' standing**, as places where arcane theory is taught beside ethics, logic and law.

## See Also

- [[lore-crownssettle|The Settlement of the Crowns]]—the settlement that returned Heliónis to its own magistrates
- [[affiliation-ordoarcanis|Ordo Arcanis]] · [[affiliation-panepistmm|Panepistemium]]
- [[place-thyrenae2|Thyrenae]] · [[place-theradon2|Therádon]]
