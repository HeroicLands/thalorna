---
shortcode: heladturnedwrk
name: {full: The Turned Working, aliases: [The Afternoon on the Plain]}
type: lore
subType: history
description: "In 327 BF, where the western road from Vylaria comes down to the plain of Helionis, a Korinthean mage-warlord broke a legion with the war's greatest working, and when the Dragon Riders came over the field the working turned back on the Korinthean levy behind him, so that both armies died on one plain in one afternoon."
tags: [history, hellad, federationage]
data:
  packFolder: helionis
  events:
    - when: -327
      kind: battle
      depth: region
      sources:
        - place-helionis
        - place-sourplain
        - affiliation-korinthea
        - place-korinthea2
        - affiliation-vylarinmpr
      summary: >-
        On the western approach into Helionis, where the road from Vylaria comes down to the plain, a Korinthean mage-warlord looses the war's greatest working on a legion and breaks it. A wing of the new Dragon Riders comes over the field within the hour, and near them the working turns back on its makers and runs through the Korinthean citizen levy drawn up behind the warlord, killing it in its ranks. Both armies die on one plain in one afternoon, and no herald can cross the ground to take the dead home for a generation. Korinthea opens its gates without a siege.
      standing: single-source
      names:
        - {name: the Turned Working, by: place-helionis}
        - {name: the Afternoon on the Plain, by: affiliation-korinthea}
      where:
        locus: [place-sourplain]
        reach:
          - place: place-korinthea2
            how: >-
              the assembly loses its standing with the city, and the Temple of Árdavon keeps the city's law from that year
            knowledge: named
          - place: place-helionis
            how: >-
              the Helionite reading that magic failing on a battlefield is what a large working does is formed here, and every city repeats it
            knowledge: named
      who:
        - {ref: affiliation-korinthea, role: victim}
        - {ref: affiliation-vylarinmpr, role: victim}
      follows:
        - event: lore-helionscnq
          how: caused
          note: the war is what puts a legion and a levy on the same plain
        - event: lore-dragondead
          how: enabled
          note: the Riders who come over the field are the Republic's new arm
      accounts:
        - by: affiliation-korinthea
          says: >-
            The city opened its gates because the plain had taken its sons, and the gates were all that remained to open.
          agrees: full
        - by: place-helionis
          says: >-
            No dragon was seen on the plain. A working that large fails by its own weight, and the Republic has taken the credit for a failure that was the warlord's.
          agrees: disputes
        - by: affiliation-vylarinmpr
          says: >-
            A legion was lost to a working on the Helionis road, and the Riders arrived in time to prevent a worse result.
          agrees: partly
          withholds: the Korinthean levy, which the Republic does not count among its own victories
      unresolved:
        - how many legionaries and levymen lay on the plain, which neither city nor Republic recorded
        - what the working was, which no surviving record describes
---

The carters who take the western road into [[place-helionis|Helionis]] leave the highway at a cairn and rejoin it a day later on the far side of a long bend. The bend is **The Turned Working**, and what it goes round is [[place-sourplain|The Sour Plain]].

## The Road and the Plain

In the eighth year of the war the legion that came down the western road into Helionis met the army that [[affiliation-korinthea|Korinthea]] had put in its way. A Korinthean mage-warlord, one of the war's mage-warlords whom his own city could not fully control, stood on a rise behind the front of the city's citizen levy. He loosed on the legion the greatest working the war had seen, and the legion broke. The warlord is not named in any Helionite or Vylarian record.

## The Riders

A wing of the new [Dragon Riders]{.name data-type="affiliation"} came over the field within the hour (see [[lore-dragondead|The Dragon Dead at Theradon]]). Near them wards collapse and spells misfire, and the working the warlord had loosed did what workings do in that case. It turned back along its own line and ran through the Korinthean levy drawn up behind him, killing it in its ranks. Legion and levy lay on the plain together by evening.

## The Dead

No herald could cross the ground to take the dead home, for either army. The [[lore-firstgames|herald's crossing]] that ends every war between Helionite cities needs a field a man can walk, and the plain would not be walked. The dead were left where they lay, and the ground began to sour. Korinthea opened its gates to the legion without a siege.

## What the Plain Left

- **The Sour Plain**, the region's worst [[lore-bloodfield|blood-field]], a withering that has spread a few yards in each bad decade.
- **The bend in the western road**, which carters, couriers and the imperial post all follow.
- **[[place-korinthea2|Korinthea]]'s shame**, and with it the loss of standing of its assembly. The city's law has been kept at the temple of the [[affiliation-ardavon|Faith of Árdavon]] since, under a line of High Judges that begins with [Nomason]{.name data-type="being/npc"} in the year of the battle.
- **The Helionite reading** that magic failing on a battlefield is exactly what a large working does, which the cities formed on this plain and still repeat.

## See Also

- [[lore-helionscnq|The Conquest of Helionis]]—the war this battle belongs to
- [[lore-dragondead|The Dragon Dead at Theradon]]—the Riders' first year
- [[place-sourplain|The Sour Plain]]
- [[lore-heladpelagtrty|The Pelagoran Treaty]]—what Pelagora does after Korinthea falls
