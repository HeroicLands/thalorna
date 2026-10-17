---
shortcode: huntingyears
name: {full: The Hunting Years, aliases: [The Enforcement of the Monopoly]}
type: lore
subType: history
description: "From about 73 BF to about 25 AF the Sekran enforces the Kandrol: renegade masters, hedge traditions and the last free schools of Helionis are enrolled, imprisoned or killed, with legions lent to the hunt under the Republic and then under the Founder."
tags: [history, vylaria, kingsrepub]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: hunt
      when: ~-73
      until: ~25
      kind: war
      depth: region
      sources: [affiliation-ordoarcanis, lore-kandrol, place-helionis]
      summary: >-
        The Sekran, constituted by the Kandrol, sets out to bring every practitioner in the Republic's territories under the Order. Renegade masters, hedge traditions and the last free schools of Helionis are enrolled, imprisoned or killed, and the Republic and then the Founder's peace lend the Order legions for the work. Most of those found are enrolled. The campaign has no end date, and the Sekran's own histories close it with the first reigns of the Empire, when there was little left outside the register to hunt.
      standing: attested
      names: [{name: the Hunting Years, by: affiliation-ordoarcanis}]
      where:
        locus: [place-helionis, place-vylariargn]
        reach:
          - place: place-helionis
            how: >-
              the independent schools were closed or enrolled, and the city-states still produce more untrained talent than any other country the Order registers
            knowledge: named
      who:
        - {ref: affiliation-ordoarcanis, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
      follows:
        - event: lore-kandrol
          how: caused
          note: the charter gave the Sekran the duty to enforce the monopoly, and the Senate lent it the legions to do so
      accounts:
        - by: affiliation-ordoarcanis
          says: >-
            The monopoly was enforced against people who refused the terms the surviving masters had drafted, and the enforcement was the price of ending the age before the Order.
          agrees: full
        - by: affiliation-vylarinmpr
          says: >-
            Remember what happened the last time mages were free to do as they pleased.
          agrees: partly
      unresolved:
        - how many practitioners the hunt took, which the Sekran's register does not give
---

A _sekeros_'s notary, filing the report on a hedge-witch's cottage in a [[place-moktur|Moktur]] valley, looks up the date on the standing instruction for the work: the instruction is nearly eight hundred years old and has been reissued without a change of wording. "It is the same hunt," he says. "It was never closed, it only got smaller."

## The Monopoly Meets the Country

[[lore-kandrol|The Kandrol]] gave the [[affiliation-ordoarcanis|Thordimalon]] the sole right to practice, teach and trade in arcane lore, and it gave the [Sekran]{.name data-type="affiliation"} the duty to make that right real. Making it real took a generation. Practitioners who refused the terms had gone underground or beyond the [Vylarian Republic]{.name data-type="affiliation/polity"}'s reach, and others had never heard of the Lex at all. Rival traditions, handed down in families and temples and market towns, taught what the Order's colleges did not teach and ignored the register.

The Sekran went after all of it. A practitioner the Sekran found was enrolled if he would be, on terms, and the Order's colleges grew by people who would not otherwise have come. Those who would not be enrolled were held, under oath or in a prison, and the few judged too dangerous were killed. The Republic lent the Order legions for the work, and when the Republic ended the Founder's peace went on lending them.

## Helionis

The hardest country to hunt in was the one that had taught the Order its craft. The Helionite city-states had produced practitioners for centuries before the Republic took them, and after the conquest their free schools went on teaching what they had always taught. The Sekran closed them one by one, enrolling their masters or breaking their houses, and the last of them fell in the first decades of the [[affiliation-vylarinmpr|Empire]]. The city-states still produce more untrained talent than any other country the Order registers, and the Sekran treads carefully in them.

## What It Left

- **The five methods.** Recruitment, confiscation, restriction, imprisonment and elimination, in that order of preference, are the Sekran's practice today as they were its practice in these years.
- **The age before the Order.** The official history that teaches a Vylarian child what an unregistered practitioner is, and the cautionary tale the monopoly is defended with.
- **The prisons.** The magical prisons the Order keeps at several places across the western part of the [[place-ankrscntnnt|Ankaris Continent]], for the offenders the Sekran judges too dangerous to enroll.
- **The register.** A name on it is the best outcome the Sekran can file, and the Hunting Years are where the habit of filing one began.

## See Also

[[lore-kandrol|The Kandrol]]
: the charter that made the hunt a duty

[[affiliation-ordoarcanis|Thordimalon]]
: the body that conducted it

[[place-helionis|Helionis]]
: the country it was hardest to hunt in
