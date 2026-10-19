---
shortcode: heladpelagtrty
name: {full: The Pelagoran Treaty, aliases: [The Separate Peace]}
type: lore
subType: history
description: "In 314 BF, with Theradon and Korinthea fallen, Pelagora's assembly votes to treat alone, and its strátimor makes the terms: the city becomes the Republic's naval ally, keeps its fleet, its walls and its overseas daughter-cities, and lends its ships to the blockade of the cities still fighting."
tags: [history, hellad, federationage]
data:
  packFolder: helionis
  events:
    - when: -314
      kind: treaty
      depth: region
      sources: [place-helionis, affiliation-pelagora, place-pelagora2, affiliation-vylarinmpr]
      summary: >-
        With Theradon and Korinthea gone and the Riders over the coast, Pelagora's assembly votes to treat separately. The strátimor Dokharos Ársides makes the terms: Pelagora becomes the Republic's naval ally, keeps its fleet, its walls and its overseas daughter-cities, and lends its ships to the blockade of the cities still fighting. A bronze copy of the Treaty is set up in Pelagora's agorin.
      standing: attested
      names:
        - {name: the Pelagoran Treaty, by: affiliation-pelagora}
        - {name: the Separate Peace, by: affiliation-thyrenae}
      where:
        locus: [place-pelagora2]
        reach:
          - place: place-thyrenae2
            how: >-
              the rivalry with Pelagora is dated to this year, and Thirenaeans can name the day the assembly voted
            knowledge: named
          - place: place-bethuargn
            how: >-
              the colony stays Pelagora's, as an allied city's daughter, through the whole imperial age
            knowledge: named
          - place: place-helionis
            how: >-
              Pelagoran squadrons serve in Vylarian fleets from this year, and the Helionite captains hired across the sea today descend from them
            knowledge: named
      who:
        - {ref: affiliation-pelagora, role: signatory}
        - {ref: affiliation-vylarinmpr, role: signatory}
      follows:
        - event: lore-helionscnq
          how: enabled
          note: the war is what makes a city's separate peace worth buying
        - event: lore-heladturnedwrk
          how: caused
          note: the fall of Korinthea shows what a city that refuses will lose
      accounts:
        - by: affiliation-pelagora
          says: >-
            Pelagora has never been conquered, because Pelagora knew when to sign.
          agrees: full
        - by: affiliation-thyrenae
          says: >-
            Pelagora sold its sisters for their own ships and called the price a treaty.
          agrees: disputes
        - by: affiliation-vylarinmpr
          says: >-
            The Republic acquired a naval ally on honorable terms, and the terms have been kept.
          agrees: full
      unresolved:
        - what the Treaty's secret articles, if it had any, gave the Republic besides the blockade
---

The bronze copy of **the Pelagoran Treaty** stands in [[place-pelagora2|Pelagora]]'s agorin, and a Thirenaean visitor spits on the pavement beside it. A Pelagoran spits back, and the argument over whether the Treaty was a betrayal or a rescue goes on from there.

## The Vote

By 314 BF [[affiliation-theradon|Theradon]] had been taken and [[affiliation-korinthea|Korinthea]] had opened its gates after [[lore-heladturnedwrk|the Turned Working]], and the [Dragon Riders]{.name data-type="affiliation"} were over the coast. [[affiliation-pelagora|Pelagora]]'s assembly met in the agorin and voted by show of hands to treat alone. The strátimor [Dokharos Ársides]{.name data-type="being/npc"} made the terms.

## The Terms

Pelagora became the [Vylarian Republic]{.name data-type="affiliation/polity"}'s naval ally and not its subject. It kept its fleet, its walls and its overseas daughter-cities, [[place-bethuargn|Bethua]] among them, and its assembly went on sitting. In return its ships joined the blockade of the cities that were still fighting, and Pelagoran squadrons began to serve in Vylarian fleets. The bronze copy was cast that year.

## What the Treaty Left

- **The rivalry between [[affiliation-thyrenae|Thirenae]] and Pelagora**, which Thirenaeans date to this year. Each city needs the other, and neither forgives it.
- **Pelagora's hold on Bethua**, kept as an allied city's colony through the imperial age and lost only in [[lore-bethuasep|the separation]] of 615 AF.
- **The Pelagoran squadrons in Vylarian service**, the root of the Heliónite captains now hired across the sea against Bethuan privateers.
- **Pelagora's boast** that it has never been conquered.
- **The bronze copy** in the agorin, one line of which a Thirenaean student has chiselled away.

## See Also

- [[lore-heladturnedwrk|The Turned Working]]—the fall of Korinthea
- [[lore-heladthyrsiege|The Siege of Thirenae]]—the blockade's last target
- [[lore-daughtercts|The Daughter-Cities]]—how Pelagora came to hold Bethua
- [[affiliation-pelagora|Pelagora]] · [[place-pelagora2|the city of Pelagora]]
