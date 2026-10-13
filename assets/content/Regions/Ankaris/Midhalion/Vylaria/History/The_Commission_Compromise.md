---
shortcode: commissioncmp
name: {full: The Commission Compromise, aliases: [The Examination Reform, Under Continuing Review]}
type: lore
subType: history
description: "About 710 AF, after the Dukran's report on the Tarûzelian war leaks to the senatorial houses, the senior Aurelian of his generation brokers a reform that tightens the commoner track's road to Vallar with an examination and gives the Reformist Faction a seat on the Tarmex's audit, leaving purchased commissions untouched."
tags: [history, vylaria, aftershoals]
data:
  packFolder: vylaria
  events:
    - id: compromise
      when: ~710
      kind: law
      depth: region
      sources: [affiliation-vylrnmltry, affiliation-tarmex, affiliation-vylarinmpr, place-orzara]
      summary: >-
        The Dukran's after-action report on the Tarûzelian war leaks to the senatorial houses within months of its filing, and the commission system faces its worst challenge in two centuries. The senior Aurelian of his generation brokers a compromise. Candidates from the commoner track for Vallar must pass an examination, the Reformist Faction takes a seat on the Tarmex's yearly audit, and the purchase of noble commissions goes on as before.
      standing: attested
      names:
        - {name: the Commission Compromise, by: affiliation-vylrnmltry}
        - name: the insult
          by: affiliation-vylrnmltry
          gloss: the career centurions' name for the examination, which tightens the one road their track has to the officers
      where:
        locus: [place-orzara]
        reach:
          - place: place-orzara
            how: >-
              the Reformist seat on the strongroom audit sits with the throne's and the Scribal Guild's representatives every spring
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: actor}
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-tarmex, role: instrument}
      follows:
        - event: lore-empirdclne
          how: caused
          note: the Tarûzelian war and the squadron lost at the Shoals are what the report was about
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The Ôrzâs's position is that the reform is under continuing review.
          agrees: partly
          withholds: that nothing is under review
        - by: affiliation-vylrnmltry
          says: >-
            The examination keeps the camp prefect's rank honest, and it was never meant as an insult.
          agrees: disputes
      unresolved: [whether the Ôrzâs knew the report before it leaked]
---

A senior centurion of a northern legion, asked by a young Lusel why the camp prefect's rank is so hard to reach, answers without looking up from his tablets. "Because someone in Ôrzâra read a report. I do not know his name. I know that when I was a Hundar Maldor the Vandrax's recommendation was enough, and that now it is not."

## The Report

The Tarûzelian war was lost on land and sea in a way the army had not expected ([[lore-empirdclne|The Decline of the Vylarian Empire]]). The Dukran's after-action report set out why. Several engagements the Empire should have won were lost because purchased commissions made decisions that experienced centurions would never have made.

The report leaked to the senatorial houses within months of its filing. It produced the most serious challenge to the commission system in two centuries.

## The Factions

The Reformist Faction argued for compulsory examinations as a precondition for any commission above Lusel. A coalition of Argentean houses, whose sons had served merit-route careers in the war, stood behind it in private.

The Conservative Faction included most of the Aurelian estate, most of the great commission-holding families and every officeholder whose career depended on the system as it stood. It blocked the reform. The Dukran, the senior Aurelian of his generation, led it and then brokered the compromise.

## The Compromise

About 710 the two sides settled.

- **Vallar.** A candidate raised from the commoner track must pass an examination set jointly by the Dukran and a panel of serving Magnars. The examination is rigorous, and the rate of elevation fell.
- **The strongroom audit.** The Reformist Faction took a seat on the panel that audits the Tarmex's strongroom each year ([[affiliation-tarmex|Tarmex Orzan]]).
- **Noble commissions.** They remained purchasable on the earlier basis, and no examination is required for any noble rank.

[[affiliation-lethunu2|The Lethunu]] regard the compromise as a partial victory. The Conservative Faction regards it as the price of preserving the rest. The career centurions regard it as a calculated insult, because the only path the reform tightened is the one their own track has always used to cross into the officers.

The Ôrzâs's position is that the matter is "under continuing review." It stays there until the next major war exposes the system or the balance at court changes.

## What It Left

- **The centurions' grievance.** A real and continuing discontent among the army's senior career soldiers.
- **The Reformist seat.** A voice at the strongroom audit that the Imperial Quaestor cannot block.
- **"Under continuing review."** The Ôrzâs's answer to every petition on the subject.

## See Also

- [[affiliation-vylrnmltry|Vylarian Military]]—the commission system and the Vallar
- [[affiliation-tarmex|Tarmex Orzan]]—the audit
- [[lore-empirdclne|The Decline of the Vylarian Empire]]—the war that produced the report
