---
shortcode: heladharbors
name: {full: The War of the Harbors, en: [The Three Summers]}
type: lore
subType: history
description: "From about 548 to about 551 AF Pelagora closes the coast to Thirenaean and Kalidrian ships that will not pay its dues, and the Helionite cities fight each other for the first time in eight and a half centuries: three summers of battle end with no border moved, every herald crossing every field and every city taking its dead home."
tags: [history, hellad, driftage]
data:
  packFolder: helionis
  events:
    - when: ~548
      until: ~551
      kind: war
      depth: region
      sources:
        - place-helionis
        - affiliation-pelagora
        - place-pelagora2
        - affiliation-thyrenae
        - place-thyrenae2
        - affiliation-kalydria
      summary: >-
        With the legions gone north, the Helionite cities hold their own levies again. Pelagora's assembly, led by the strátimor Rhézamos Férandides, closes the coast to Thirenaean and Kalidrian shipping that will not pay Pelagoran dues. Three summers of fighting end with no border moved. The heralds cross every field afterward and every city takes its dead home, and Pelagora's dues are cut to a third.
      standing: attested
      names:
        - {name: the Three Summers, by: affiliation-thyrenae}
        - {name: the Harbor Dues, by: affiliation-pelagora}
      where:
        locus: [place-helionis]
        reach:
          - place: place-pelagora2
            how: >-
              the dues survive at a third of their demand and are paid to this day, and the assembly counts the war a success
            knowledge: named
          - place: place-thyrenae2
            how: >-
              the city pays the third and holds that it paid for nothing, which is the second half of the quarrel the Pelagoran Treaty began
            knowledge: named
          - place: place-kalydria2
            how: >-
              the city's ships sit idle for three summers, and its graduates carry the first terms of the truce to the next Games
            knowledge: named
      who:
        - {ref: affiliation-pelagora, role: actor}
        - {ref: affiliation-thyrenae, role: victim}
        - {ref: affiliation-kalydria, role: victim}
      follows:
        - event: "lore-threewinters#winters"
          how: enabled
          note: the legions that went north when the winters ran together leave the cities to settle their own quarrels
        - event: lore-heladpelagtrty
          how: caused
          note: the quarrel between the sister cities began in the treaty, and the dues give it a price
        - event: lore-firstgames
          how: enabled
          note: the heralds who cross the fields are the Games' heralds, and the crossing is the Games' custom carried to war
      accounts:
        - by: affiliation-pelagora
          says: >-
            The coast is Pelagora's, and a ship that uses its harbors pays for them. The assembly asked for what was owed and took a third of it.
          agrees: partly
          withholds: that the assembly asked for three times what the cities had paid in any year before
        - by: affiliation-thyrenae
          says: >-
            Pelagora took the road to the sea for a toll and called a blockade a bill. We paid because we could not win, and we have not forgotten that we could not.
          agrees: partly
          withholds: that Thirenae's own levy broke at the second battle
      unresolved:
        - where the dead were exchanged after the last battle, which the Pelagoran and Thirenaean heralds place on different sides of the same ridge
---

At the edge of a ridge in the Helionite hills there is a stone, left by The War of the Harbors, that heralds touch before every war season, and the heralds of two cities disagree about which side of the ridge it stands on.

## The Dues

When the legions went north in the years after [[lore-threewinters|the Three Winters]], the cities of [[place-helionis|Helionis]] found that nobody was left to forbid them to fight. The [[affiliation-vylarinmpr|Empire]] kept its name on the chancery's roll and took its soldiers home, and the councils of the cities took up their own levies for the first time since the [Vylarian Republic]{.name data-type="affiliation/polity"}'s conquest.

[[affiliation-pelagora|Pelagora]] held the harbors, and since its separate peace it had held them as the Republic's naval ally, with no one to ask what it charged. In about 548 its assembly, led by the strátimor [Rhézamos Férandides]{.name data-type="being/npc"}, voted a schedule of dues on every hull that used a Pelagoran harbor, and closed the coast to the Thirenaean and Kalidrian ships that would not pay it.

## The Three Summers

The war lasted from about 548 to about 551 and was fought in the summers. Pelagora's fleet held the coast, [[affiliation-thyrenae|Thirenae]] and [[affiliation-kalydria|Kalidria]] raised levies and marched on the Pelagoran hinterland, and the armies met twice in the hills and once on the coast road. The first battle went to the fleet's marines and the second to the levies. The third was a draw in which neither side could hold the ground it won.

It was the first war among the Helionite cities in the eight and a half centuries since the conquest, and nobody knew how to fight it. Both sides sent their heralds across the field after each battle to ask for the dead, as the custom of [[lore-firstgames|the First Games]] required, and both sides gave the dead up. The custom held with no imperial officer present to enforce it.

No border moved. Pelagora cut its dues to a third and kept the third, and Thirenae and Kalidria paid it and reopened their harbors. The assembly of Pelagora counted the war a success and the assemblies of the other two counted it a lesson.

## The Heralds' Stone

After the last battle the heralds of the three cities met on the field and exchanged the dead across a ridge, and a stone was set where they met. Heralds touch it before each war season begins. Because every city takes its dead home, the war left no blood-field, which is why the Helionite hills have only [[place-sourplain|the Sour Plain]]: the one battle in Helionis where no herald could cross.

## What the War Left

- **Pelagora's dues**, cut to a third and paid to this day.
- **The [Heralds' Stone]{.name data-type="place/structure"}**, where the dead were exchanged, touched before each war season.
- **The sharper quarrel** between Thirenae and Pelagora, which now has a price as well as a grievance.
- **[[lore-heladtruce|The Truce of the Games]]**, the rules the cities wrote at the next meeting so that their next war would be smaller.

## See Also

- [[lore-firstgames|The First Games]]—the custom of the herald's crossing
- [[lore-heladpelagtrty|The Pelagoran Treaty]]—the quarrel the dues renewed
- [[lore-heladtruce|The Truce of the Games]]—the rules that came after
- [[affiliation-pelagora|Pelagora]] · [[affiliation-thyrenae|Thirenae]] · [[affiliation-kalydria|Kalidria]]
