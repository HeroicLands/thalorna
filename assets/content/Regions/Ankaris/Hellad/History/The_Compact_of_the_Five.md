---
shortcode: heladcompact
name: {full: The Compact of the Five, aliases: [The Oath at the Plateau's Edge]}
type: lore
subType: history
description: "In 157 BF, the year after the Wells, the five eastern cities meet at the plateau's edge and bind themselves to common tariffs, a joint muster, the passes held by a council and disputes between cities brought to that council, while the Republic, busy with its Riders and its factions, takes a yearly payment and leaves them free."
tags: [history, hellad, provinceage]
data:
  packFolder: byzaria
  events:
    - when: -157
      kind: founding
      depth: region
      sources:
        - affiliation-byzarianlg
        - affiliation-khryshteikhos
        - place-khryshteikhos2
        - place-byzariargn
        - affiliation-crtgrphrsgldbyzrnlg
      summary: >-
        The year after the Wells the five cities meet at the plateau's edge, where the lowland road from the straits reaches the high country, and bind themselves: common tariffs, a joint muster, the passes held by a council, and disputes between cities brought to that council. The Republic, busy with its Riders and its factions, accepts a yearly payment from the Compact and leaves the eastern cities free for three and a half centuries.
      standing: attested
      names: [{name: the Oath at the Plateau's Edge, by: affiliation-khryshteikhos}]
      where:
        locus: [place-khryshteikhos2]
        reach:
          - place: place-byzariargn
            how: >-
              the League as it stands is the Compact kept, and its first charters, the Cartographers' among them, are granted by the council the Compact made
            knowledge: named
          - place: place-eastrnmrch
            how: >-
              the passes are held in common from this year, and the March is the common holding the Compact began
            knowledge: named
      who:
        - {ref: affiliation-byzarianlg, role: founder}
        - {ref: affiliation-khryshteikhos, role: founder}
      follows:
        - event: lore-heladwells
          how: caused
          note: the cities that walled the springs together find the habit worth keeping
      accounts:
        - by: affiliation-khryshteikhos
          says: >-
            The five met where the road from the sea meets the road from the mountains, because every one of them needed both.
          agrees: full
        - by: affiliation-byzarianlg
          says: >-
            The Compact was not a state. It was a promise to keep the water open and the tariffs the same, and a League that keeps a promise has no need to be more.
          agrees: full
      unresolved:
        - whether the text read aloud at each session of the council is the original or a copy that has been corrected since
---

The chair of the council of the [[affiliation-byzarianlg|Bizarian League]] opens each session by reading The Compact of the Five aloud, and the clerks of the [Merchant Hall]{.name data-type="place/structure"} know the old text well enough to hear a clause go by that is not in it.

## The Meeting

In 157 BF, the year after the host died in the foothills, the five eastern cities sent their councils to the plateau's edge. The place was where the lowland road from the straits reaches the high country, where the goods of the harbors change from ships to mule-trains. The five had mustered together for [[lore-heladwells|The Battle of the Wells]] and walled their springs together, and the Wells had taught them what a muster costs when it is improvised.

They bound themselves in four things. They set common tariffs, so that no city undercut another at the passes. They agreed a joint muster, so that the force raised for the next host would not be raised in the middle of it. They placed the passes under a council in which each city sat, and they agreed that any dispute between two of them would be brought to that council and not carried to the field.

## The Republic

The [Vylarian Republic]{.name data-type="affiliation/polity"} had other business. It was putting down factions at home and learning to field its [Dragon Riders]{.name data-type="affiliation"}, and it had no use for a war in the east. It accepted a yearly payment from the Compact and left the eastern cities free of its officers and its garrisons. The payment was the whole of the Republic's claim on them for three and a half centuries.

## What the Compact Left

- **The League itself**, which is the Compact kept.
- **The Merchant Hall** of [[place-khryshteikhos2|Krusteikhos]], built where the five met.
- **The first charters**, [[affiliation-crtgrphrsgldbyzrnlg|The Cartographers' Guild of the Bizarian League]] among them, granted by the council the Compact made.
- **A foreign policy** of being worth more paid than conquered, which the League has followed since.

## See Also

- [[lore-heladwells|The Battle of the Wells]]—the battle the cities fought together
- [[affiliation-byzarianlg|Bizarian League]]—the confederation the Compact became
- [[affiliation-khryshteikhos|Krusteikhos]]—the city whose Merchant Hall stands where the five met
