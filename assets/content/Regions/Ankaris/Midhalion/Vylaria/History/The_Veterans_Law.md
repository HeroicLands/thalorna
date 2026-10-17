---
shortcode: veteranslaw
name: {full: The Veterans' Law, aliases: [The Law of Arkanamos, The Soldier's Bargain]}
type: lore
subType: history
description: "About 34 AF the second Orzas, Arkanamos, makes citizenship the reward of twenty years under the eagles and ties the grain dole and the right to live inside the thrima to it, leaving the nobility the only citizens by birth."
tags: [history, vylaria, firstaugs]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: law
      when: ~34
      kind: law
      depth: region
      sources: [doc-vylrnctznshp, place-orzara, affiliation-vylrnmltry, affiliation-vylarinmpr]
      summary: >-
        Arkanamos, the second Orzas, makes the citizenship a reward for twenty years in the legions, begun no earlier than a recruit's fifteenth year. He ties the grain dole and the right to live inside the thrima to it, and he leaves the nobility the only citizens by birth. The statute recruits his legions and binds the men who fill them to the throne in a single act.
      standing: attested
      names:
        - {name: the Veterans' Law, by: affiliation-vylarinmpr}
        - name: the soldier's bargain
          by: affiliation-vylrnmltry
          gloss: what a centurion puts to the recruits on the morning of the oath
      where:
        locus: [place-orzara]
        reach:
          - place: place-orzara
            how: >-
              the thrima admits citizens by right and everyone else by a waiver tied to an employer, and the great mass of the city's working people live outside it
            knowledge: named
          - place: place-vylariargn
            how: >-
              every legion in the Empire recruits on the promise of this statute, and the old soldiers at the gate of each camp are the proof of it
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: author}
        - {ref: affiliation-vylrnmltry, role: instrument}
      follows:
        - event: "lore-eaglecityrse#raising"
          how: enabled
          note: the right of residence needs a consecrated thrima to apply to
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The citizenship is earned, and a throne that rewards service with standing has a better army than one that buys it.
          agrees: full
        - by: affiliation-seldan
          says: >-
            The nobility were citizens before the law and need no service to remain so; the law concerns everybody else.
          agrees: partly
          withholds: that a Senate which once admitted its own citizens now owes its rolls to the army
      unresolved:
        - whether Arkanamos meant the dole to be a standing charge or a gift for the generation that first drew it
---

In The Veterans' Law, a centurion puts the bargain to each year's recruits on the morning they swear the oath. He does not know that the words come from a statute, and nobody has told him: the law is more than six hundred years old, and the speech has been handed from centurion to centurion until it sounds like a proverb. "There is one door," he finishes, "and the army holds it open." [[affiliation-seldan|Seldan]] (the Senate) can open another for a single man by grant, and a grantee stands exactly as a veteran does.

## The Statute

[Arkanamos]{.name data-type="being/npc"} was the second of the Founder's line. About 34 AF he put an end to the arrangement by which the [Vylarian Republic]{.name data-type="affiliation/polity"}'s citizen body had renewed itself by birth and patronage. The citizenship became a personal status won by service: twenty years under the eagles, counted from the recruit's fifteenth year, so that a commoner who survives his term is a citizen at thirty-five. The nobility keep it by station and transmit it heir to heir. Everyone else renews the citizen body each generation out of those who have served or been granted it by the Senate. A citizen's wife holds the status permanently, widowhood included, and his children are honorary citizens only while they are his dependents.

The statute bound three things to the status together. The grain dole was a citizen's. The right to live inside the thrima, which the Founder had consecrated around the [[place-sixhillsvyl|Six Hills]], was a citizen's by right and everyone else's by waiver. And a citizen had standing at law, with an appeal to the imperial tribunals. Each of the three was a reason to enlist, and the three together were the reason to enlist for twenty years.

## What Arkanamos Got

Recruits in numbers the Republic's levy never gave. A legion filled by men who wanted the status asked for no bounty, and a throne that could count on a standing army did not need the Senate's vote to raise one. The statute also settled the discharged veteran in the capital or near it, where thirty-five-year-old men trained to arms and owed the throne their living were a heavier counterweight to the Senate than any guard.

## What It Left

- **An old soldiers' city.** The capital's citizen body is a veterans' class at its core, and the dole is the thing every Orzas fears to miss.
- **A charge the treasury can neither afford nor cut.** The dole began as the reward for the first generation of veterans and is now the largest standing charge on the [[affiliation-vylarinmpr|Vylarian Empire]].
- **The waiver and its clerks.** A resident needs a registered waiver to sleep inside the thrima, and the clerks who register them sell them.
- **The nobility's exemption.** The only citizens by birth, which is part of what makes them the nobility.

## See Also

- [[doc-vylrnctznshp|Vylarian Citizenship]]—what the status carries and how it is earned
- [[lore-eaglecityrse|The Raising of the Eagle City]]—the thrima the right of residence is measured by
- [[affiliation-vylrnmltry|The Vylarian Military]]—the legions the statute fills
