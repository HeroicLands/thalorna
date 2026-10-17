---
shortcode: westernwars
name: {full: The Western Wars, aliases: [The Three Centuries of Conquest]}
type: lore
subType: history
description: "From about 140 AF to the edict of about 418 AF the Empire's legions fight west and north-west: the Tarvénian lowlands and Lienrik are taken, Provenzia is made a province, Élavendre is made a tributary, the Kervaron passes are marked with boundary-stones, and the western strait is fortified."
tags: [history, vylaria, ageconquest]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: wars
      when: ~140
      until: ~418
      kind: war
      depth: region
      sources:
        - affiliation-vylrnmltry
        - place-tarvenirgn
        - place-leonrik
        - place-provenzrgn
        - place-elavendre
        - place-vylariargn
        - place-vylarianse
      summary: >-
        Three centuries of campaigning west and north-west. The legions take the Tarvénian lowlands and occupy Lienrik; four expeditions into the mountains of Asturath fail, the worst of them in the reign of Zoranthos; Provenzia is made a province; Élavendre is entered at its edges and settles as a tributary. Expeditions plant boundary-stones at the Kervaron passes, and the Áelendan close the passes behind them. The strait to the ocean is fortified from its northern shore. The wars end by edict in the Restoration.
      standing: attested
      names:
        - {name: the Western Wars, by: affiliation-vylarinmpr}
        - name: the three centuries of conquest
          by: place-orzara
          gloss: the length of the trophies the Paldor carries
      where:
        locus: [place-tarvenirgn, place-leonrik, place-provenzrgn, place-elavendre]
        reach:
          - place: place-orzara
            how: >-
              the Paldor is lined with the rostral columns, trophies and inscriptions of the wars, the longest boast in the city
            knowledge: named
          - place: place-vylariargn
            how: >-
              the Kervaron passes carry boundary-stones the Áelendan treat as ritual objects of obscure foreign meaning, and the chancery has listed the range as Vylarian ever since
            knowledge: named
          - place: place-vylarianse
            how: >-
              the northern shore of the western strait is fortified, and every serious naval plan for the sea has turned on those forts since
            knowledge: named
          - place: place-provenzrgn
            how: >-
              the country keeps Vylarian law and Vylarian architecture from the centuries it was a province
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: actor}
        - {ref: affiliation-vylrnmltry, role: instrument}
      follows:
        - event: "lore-veteranslaw#law"
          how: enabled
          note: a standing army recruited on the Veterans' Law is the instrument of three centuries of campaigning
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The legions took what the Empire could hold, and the rest was a matter of the chancery's list.
          agrees: partly
          withholds: that no legion ever held the Kervaron, and that Asturath was never taken
        - by: place-alndntrblnds
          says: >-
            The foreign stones stand at our passes, and we let each column climb to see what they were worth.
          agrees: partly
      unresolved:
        - how many of the stones at the Kervaron passes were planted by the same expedition
---

In The Western Wars, a chancery clerk, copying a map of the western provinces for the fourth time, runs his finger down the legend. "It is marked with what the [[affiliation-vylarinmpr|Vylarian Empire]] has held," he says. "There is a second map in a locked drawer, marked with what it said it held, and the two have not agreed since the second century."

## The Lowlands and Lienrik

The legions came west in earnest about the middle of the second century. They took the lowlands of the [[place-tarvenirgn|Tarvénia Region]] and the southern coast, and held [[place-leonrik|Lienrik]] as an occupied march with walled towns and a chain of watchtowers to give warning of risings. [[place-asturath|Asturath]] they never took. Four expeditions went into its mountains, and the worst of them, in the reign of the Orzas [Zoranthos]{.name data-type="being/npc"}, was lost in the mountains. After that the Empire held the lowland approaches and left the mountains alone.

## Provenzia and Élavendre

The [[place-provenzrgn|Provenzia Region]] became a province of the Empire, and the legions that held it left Vylarian law and Vylarian building behind in it. The [[affiliation-kngdmlvndr|Kingdom of Élavendre]] fared differently. The legions entered the outer territories and fought the hill levy and the [[lore-aelendnppl|Áelendan People]] to a standstill, and the kingdom came to terms as a tributary, long a vassal in name and never a province.

## The Kervaron

Expeditions in the same decades climbed the principal passes of the [Kervaron Spine]{.name data-type="place/feature"} and planted boundary-stones at each. The Áelendan let each column climb deep into the range and sealed the passes behind it, and the columns sent to enforce the stones were turned back. The chancery lists the range as Vylarian on the strength of the stones, and the clans treat the stones as ritual objects of obscure foreign meaning.

## The Strait

The western strait is the sea's only door to the ocean. The Empire fortified the northern shore in these years, and the forts have changed hands, been rebuilt and been garrisoned by whoever holds that shore since. Every serious naval plan for the [[place-vylarianse|Vylarian Sea]] has turned on them.

## What It Left

- **Lienrik's watchtowers.** The chain of towers along the march, kept up by whichever lord holds the ground.
- **The [[affiliation-kngdmstrth|Kingdom of Asturath]]'s boast.** A kingdom that was never conquered, and says so.
- **The boundary-stones.** At the Kervaron passes, listed by the chancery and honored by the clans on the clans' terms.
- **The [Paldor]{.name data-type="place/feature"}.** [[place-orzara|Orzara City]]'s avenue of the wars' trophies, the longest boast in the city.
- **The strait forts.** The northern shore's fortifications, still garrisoned by whoever holds them.
- **Provenzia's Vylarian law.** The architecture and the legal forms of the western province, which the [[affiliation-kngdmprvnz|Kingdom of Provenzia]] kept after it left.

## See Also

[[place-vylariargn|Vylaria Region]]
: the Kervaron Spine and its passage-gifts

[[place-tarvenirgn|Tarvénia Region]]
: the lowlands the legions took

[[place-provenzrgn|Provenzia]]
: the province the wars made

[[place-vylarianse|The Vylarian Sea]]
: the sea the strait opens
