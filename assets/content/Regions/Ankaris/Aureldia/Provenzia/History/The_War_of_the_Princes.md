---
shortcode: warprinces
name: {full: The War of the Princes, aliases: [The Céravian Rebellion]}
type: lore
subType: history
description: "From 653 to 655 AF the kingdom of Provènzia fought over the succession after King Pâdran died with no clear heir; Céravel Vale was its battleground, House Dôrgaar was broken, and the war ended with the compromise accession of Dâlenar Lédravren."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: 653
      until: 655
      kind: war
      depth: region
      sources:
        - affiliation-kngdmprvnz
        - place-ceravelvale
        - place-serramarca
        - place-chastelclr
        - place-lunacorte
      summary: >-
        King Pâdran dies with no clear heir. One prince is backed by the centralizing houses of the coast, another by the Thânevar country and the regional lords who never loved the Charter; Céravel Vale and the eastern march are the battleground. House Dôrgaar is broken. The war ends with the accession of Dâlenar Lédravren, a compromise both sides can bear.
      standing: attested
      names:
        - {name: the War of the Princes, by: affiliation-kngdmprvnz}
        - {name: the Céravian Rebellion, by: place-ceravelvale}
      where:
        locus: [place-ceravelvale]
        reach:
          - place: place-chastelclr
            how: the town is raised after the war to hold the road a Tarvénian host used in the second year
            knowledge: named
          - place: place-lunacorte
            how: the crown and the Council of Peers begin the long contest over prerogative that the court has not finished
            knowledge: named
          - place: place-belsaren
            how: the lordship's Thânevar peasantry remember the war as the rebellion, and the lord the crown sets over them as its heir
            knowledge: named
      who: [{ref: affiliation-kngdmprvnz, role: victim}]
      follows:
        - event: lore-charterwar
          how: enabled
          note: a crown held under a Charter has no law of succession of its own, and the Council of Peers has no ruling on a disputed heir
      accounts:
        - by: place-ceravelvale
          says: >-
            It was a rebellion, and Céravel was its field, and its villages are still divided over it.
          agrees: full
        - by: affiliation-kngdmprvnz
          says: >-
            A dispute over the succession, ended by the accession of the king the realm could bear.
          agrees: partly
          withholds: how many of the Charter's guarantees the compromise king gave up
      unresolved:
        - which prince had the better claim, and whether Pâdran named one
        - what became of the deeds House Dôrgaar walled up before its seat was burned
---

In Céravel Vale the war is called the **Céravian Rebellion**, and the vale's villages are divided over it still. In the capital it is the War of the Princes and it is not discussed. Both names are for the same two years.

## The Heir

**Pâdran** of House Lédravren had reigned for six years when he died in 653 AF, and he had not named an heir. The Charter held the king to the counsel of the Council of Peers and gave the Council no word on the succession. Two princes of the blood each held a party. One was backed by the centralizing houses of the coast, who wanted a crown strong enough to bind the cities and the provinces to it. The other was backed by the Thânevar country and the regional lords who had never loved the Charter, and who wanted a crown that left them alone.

## The War

The vale of Céravel lay between the two parties and on the road from the east, and the war was fought there. The villages were divided, and the lords of the manors, who held from the crown in the east and owed it a levy, were forced to choose a prince in front of their tenants. The Tarvénian host that came down the passes in the second year went through the vale unopposed, because there was no army to oppose it.

**House Dôrgaar**, a minor noble family of the vale, chose the wrong prince. When the war ended, its seat was burned and its lands were given to a rival.

## The Compromise

The war ended with neither prince. The moderate houses of both parties found a third man in the royal house and gave him the crown: **Dâlenar** Lédravren, a king both sides could bear. He confirmed the Charter and left the question of the succession where it had been, with the Council.

## What It Left

- **Grudges.** Every great house still nurses a grievance from the war, and the families know which.
- **Céravel's divided villages.** The Thânevar peasantry and the Provenzian minority remember different wars.
- **House Dôrgaar's burned seat.** A gutted manor in the Sèrramarca, whose deeds were walled up in the cellar ([[place-ceravelvale|Céravel Vale]]).
- **Chastèlclair.** The fortress town raised to hold the road ([[place-chastelclr|Chastèlclair]]).
- **A crown that contests the Council.** The argument over prerogative and taxation that still occupies the court.

## See Also

- [[place-ceravelvale|Céravel Vale]]—the battleground
- [[place-chastelclr|Chastèlclair]]—the town raised after it
- [[being-branwldrgr|Brànwâal Dôrgaar]]—a mercenary captain of the broken house
- [[lore-charterwar|The War of the Charter]]—the settlement whose silence on the succession caused it
