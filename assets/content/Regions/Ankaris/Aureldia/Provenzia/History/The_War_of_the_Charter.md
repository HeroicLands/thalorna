---
shortcode: charterwar
name: {full: The War of the Charter, en: [The Nine Years' Refusal]}
type: lore
subType: history
description: "From about 609 to 618 AF the estates of the province of the West refused the Empire's therkos and fought his legion for nine years; the peace gave them a Charter of Rights held by a king of their choosing, and the Empire stopped sending therkoi."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: ~609
      until: ~618
      kind: war
      depth: region
      sources:
        - affiliation-kngdmprvnz
        - place-provenzrgn
        - place-aureliane
        - place-jalnazdal
        - affiliation-sacredforge
        - affiliation-vylarinmpr
      summary: >-
        Burdened with levies for the frontier and taxes for a distant Orzas, the province's estates refuse the therkos. The Sacred Forge preaches against an Empire that tolerates the Flame, and the port cities and the Tanevar country fight the therkos's legion for nine years. Nobody declares a kingdom. The peace grants a Charter of Rights, held by a king the estates choose, Ylarven of the Meridiane house of Lédravren, and the Empire stops sending therkoi.
      standing: attested
      names:
        - {name: the War of the Charter, by: affiliation-kngdmprvnz}
        - {name: the nine years' refusal, by: place-aureliane}
      where:
        locus: [place-provenzrgn]
        reach:
          - place: place-jalnazdal
            how: the Charter's first king settles his court on the coast, where the money is, and the kingdom is governed from it
            knowledge: named
          - place: place-aureliane
            how: the old provincial capital keeps the high courts and the academies and loses the court
            knowledge: named
          - place: place-talothe
            how: the march is left to defend itself against Tarvénia, and the Tarvénian hosts press it while the province fights its therkos
            knowledge: named
      who:
        - {ref: affiliation-kngdmprvnz, role: founder}
        - {ref: affiliation-sacredforge, role: actor}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: lore-empirdclne
          how: enabled
          note: an Empire that cannot defend its provinces cannot collect from them either
        - event: lore-bloodhillsbtl
          how: enabled
          note: the Forge's grievance against an Empire that would not choose between the faiths is the war's preaching
      accounts:
        - by: affiliation-kngdmprvnz
          says: >-
            The estates won a Charter of Rights, and the kingdom is the form the Charter took.
          agrees: full
        - by: affiliation-vylarinmpr
          says: >-
            The province's estates were granted a charter, and a province that governed itself needed no therkos.
          agrees: partly
          withholds: that the therkos's legion was beaten
        - by: lore-provenzianclt
          says: >-
            The Charter belongs to the cities, and the country people were not asked.
          agrees: partly
      unresolved:
        - who first proposed that the estates choose a king
        - what the Orzas's chancery thought it had granted
---

A province becomes a realm without ever declaring it, and keeps the forms. [[affiliation-kngdmprvnz|Provenzia]] is the case that is told best, and it is told as a war about a charter.

## The Refusal

The [province of the West]{.name data-type="affiliation/polity"} had been a province for nearly five centuries. By about 609 AF it paid for a frontier it could not see and a distant Orzas it never met, in levies and taxes that rose with every year the [[affiliation-vylarinmpr|Empire]]'s grip loosened. The estates, the assemblies of nobles, towns and guilds that had advised the _therkoi_ (governors) since the first century of the province, refused the _therkos_ a levy. When he sent his legion to collect it, they refused the legion.

## Nine Years

The war was fought for a charter and not for a crown. The estates did not ask to leave the Empire and the Empire did not ask them to; the dispute was over who had the right to tax the province and to call out its men. The port cities held the coast, and [[affiliation-sacredforge|the Sacred Forge]], which had never forgiven an Empire that would not choose between its faith and [[affiliation-blackflame|the Black Flame]] ([[lore-bloodhillsbtl|The Battle of the Blood Hills]]), preached the cause from every temple. The [[lore-provenzianclt|Tanevar country]] fought for the old principle that a free people governs itself, and for its own reasons, which were not the cities'.

The _therkos_'s legion kept the great road and [[place-aureliane|Aurelane]]. It could not keep the country, and the war settled into nine years of marches, sieges and levies that neither side could end. The Tarvénian hosts came down the passes to see what the province would yield while it was busy.

## The Charter

The peace was a settlement, not a victory. The estates agreed to a king, so that the [Charter of Rights]{.name data-type="lore/law"} would have a holder, and chose one from among themselves: [Ylarven Lédravren]{.name data-type="being/npc"}, of the Meridiane [House **Lédravren**]{.name data-type="affiliation/lineage"}, whose lands lay on the southern coast. The Charter of Rights bound the king to take counsel of a [Council of Peers]{.name data-type="affiliation/governmental"}, to levy only by the estates' consent and to leave the cities their own law. The Empire recognized the Charter, and its chancery stopped sending _therkoi_ to the province; the terms were set down with the other realms that had left the Empire in [[lore-crownssettle|the Settlement of the Crowns]]. Nobody declared a kingdom, and the Provenzians do not date one. They date the Charter.

## What It Left

- **The Charter of Rights and the Council of Peers.** The kingdom's constitution, and the long contest between the crown and the Council ([[affiliation-kngdmprvnz|The Kingdom of Provenzia]]).
- **[[place-jalnazdal|Jalnasdal]] as the capital.** The court settles on the coast, and [[place-aureliane|Aurelane]] keeps the law and the learning ([[place-jalnazdal|Jalnasdal]]).
- **The House of Lédravren.** The Charter's first king and his line, who hold the crown still.
- **The Tanevar country's sense that the Charter was the cities'.** The country people keep the grievance in every generation.

## See Also

[[affiliation-kngdmprvnz|The Kingdom of Provenzia]]
: the realm the Charter made

[[lore-bloodhillsbtl|The Battle of the Blood Hills]]
: the Forge's quarrel with the Empire

[[lore-empirdclne|The Decline of the Vylarian Empire]]
: the loosening grip

[[lore-crownssettle|The Settlement of the Crowns]]
: the Empire's recognition of the Charter, set beside the other realms'

[[lore-warprinces|The War of the Princes]]
: the first test of the Charter's crown
