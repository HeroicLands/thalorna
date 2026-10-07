---
shortcode: mhndkngdm
name: {full: The Kingdom of Mahānadī, aliases: [Kingdom of Mahānadī, The Dissolution of Mahānadī]}
type: lore
subType: history
description: "The kingdom that held the upper Mahānadī for some four centuries, from its founding around 640 BF through the move of its capital to Rājapur in the first year of the Madhusthāna count to the forty-day sabhā that dissolved it in the first year of the Age of Copyists."
tags: [history, vedyara]
data:
  packFolder: vedyara
  events:
    - when: ~-640
      precision: century
      kind: founding
      depth: region
      sources: [lore-rcitkngsmhnd, affiliation-rajaprjnpd]
      summary: >-
        The Mahānadī dynasty takes the upper Mahānadī and its fields, about a century and a half before the standardization at Madhusthāna. It traces itself to a heroic ancestor of legendary virtue.
      standing: single-source
      where:
        locus: [place-mahanadi]
        reach:
          - place: place-mahanadi
            how: >-
              the kingdom holds the upper river and its fields, fields a respectable army and patronizes the temples
            knowledge: named
      accounts:
        - by: affiliation-rajaprjnpd
          says: >-
            The line descends from a heroic ancestor of legendary virtue, as Vedyari dynasties do, and its better generations produced kings the chronicles recount as exemplary.
          agrees: full
          withholds: the founding ancestor's deeds, which the recitation hedges as legend
      unresolved:
        - the founding ancestor's name and history, which the recitation gives as legend and not as record
        - where the kings kept their seat before Rājapur
    - when: -480
      stated: {calendar: mdhvndrcnt, text: "1 AK"}
      precision: year
      kind: founding
      depth: region
      sources: [place-sandstonealtr, lore-rcitkngsmhnd, affiliation-rajaprjnpd]
      summary: >-
        The kings of Mahānadī make Rājapur their capital and cut the sandstone altar of Vyālendra in the temple beside the new palace. Every king who reigns from Rājapur is consecrated at that altar, the last included. The move falls in the year of the standardization at Madhusthāna, and the kingdom's chronicle counts its years from the first year of the count.
      standing: single-source
      where:
        locus: [place-rajapur]
        reach:
          - place: place-mahanadi
            how: >-
              the upper river is ruled from Rājapur until the dissolution
            knowledge: named
      follows:
        - event: lore-stndrdmdhv
          how: enabled
          note: the capital is founded in the reign of the philosopher-kings, and its chronicle is dated by their count
    - when: -241
      stated: {calendar: mdhvndrcnt, text: "1 AC"}
      precision: year
      kind: dissolution
      depth: region
      sources:
        - lore-fortydays
        - lore-rcitkngsmhnd
        - affiliation-rajaprjnpd
        - place-rajavalilib
        - place-shitakoshtha
      summary: >-
        In a famine the last king of Mahānadī dies in his palace without an heir, after his household guard has opened the royal granaries and taken from them. The villages ask the senior priest of the Vyālendra temple to convene a sabhā, and ask for no king. The sabhā sits forty days, dissolves the kingdom with full honors to the line, and joins its villages as one janapada governed through the temple: the palace is taken down for the temple's stone, the granaries become common stores, the army is given land, and the council-chamber and its record are kept whole.
      standing: attested
      names:
        - name: the Forty Days
          by: affiliation-rajaprjnpd
          gloss: the sabhā's sitting, and the chronicle that records it
        - name: the Day of the Dissolution
          by: affiliation-rajaprjnpd
          gloss: the yearly anniversary of the decree, kept by Rājapur alone
      where:
        locus: [place-rajapur]
        reach:
          - place: place-rajapurjnpd
            how: >-
              the kingdom's villages become the Rājapur Janapada, and the town has kept no soldiers since
            knowledge: named
          - place: place-rajavalilib
            how: >-
              the royal council-chamber becomes the archive of the kingdom-period and of every sabhā session since, kept by the one family that has held the Memory-Keeper's office since the decree
            knowledge: named
          - place: place-palacecellar
            how: >-
              the palace comes down and its cellars lie open at the north end of the town
            knowledge: named
          - place: place-chandrapur2
            how: >-
              the janapada's patron city shelters the Rājapuri scholar whose letters urge further dissolutions on the same model
            knowledge: named
          - place: place-vedyarargn
            how: >-
              every Vedyari course in political philosophy teaches the dissolution as the classical case of a janapada that replaced a kingdom
            knowledge: named
      who:
        - {ref: affiliation-rajaprjnpd, role: actor}
        - {ref: affiliation-vyalendra, role: instrument}
      accounts:
        - by: affiliation-rajaprjnpd
          says: >-
            A judgment. The kingdom failed because it deserved to fail, and the recitation at every session is the standing reminder that any government, this one included, can be dissolved the same way.
          agrees: full
        - by: affiliation-chandrapur
          says: >-
            A precedent, and one a scholar under its protection is free to argue. The kingdoms call him a dangerous radical and have asked for his expulsion, and Chandrapur has declined.
          agrees: partly
      unresolved:
        - how the last king died; the chronicle enters the death and not its manner, and the poisoning by his cook is tradition
---

The junior scribe who meets you at the gate of [[place-rajavalilib|the Rājavalī Library]] will tell you the shape of the **Kingdom of Mahānadī** before you have asked for it: four centuries of kings, forty days of sabhā, and nine centuries since in which [[affiliation-rajaprjnpd|Rājapur]] has had no king and has never wanted one. Everything else in the library is detail.

## The Kingdom

The line was founded on the upper [[place-mahanadi|Mahānadī]] around 640 BF, about a century and a half before the first year of [[lore-mdhvndrcnt|the Madhusthāna count]]. The dynasty traced itself to a heroic ancestor of legendary virtue, as Vedyari dynasties do, and the Memory-Keeper's recitation hedges that ancestor as legend. Where the first kings kept their seat, the library does not record. The upper-river villages call a terraced hill on the pilgrim road [[place-puranasthana|Purānasthāna]], the old seat, and say the first kings were hallowed there; the library keeps that as legend.

In 480 BF, the year of [[lore-stndrdmdhv|the standardization at Madhusthāna]], the kings made [[place-rajapur|Rājapur]] their capital. They cut [[place-sandstonealtr|the sandstone altar]] of [[affiliation-vyalendra|Vyālendra]] in the temple beside the new palace, and every king who reigned from Rājapur, the last included, was consecrated at it. The chronicle the library keeps counts its years from the first year of the count, and Rājapur's recitation speaks of the line as though it began at that altar.

From Rājapur the kings held the upper river and its fields for two and a half centuries more. It was a middling kingdom of the early classical period: a respectable army, a great deal of temple patronage, and several monarchs the chronicles hold up as exemplary. The [[lore-rcitkngsmhnd|Recitation of the Kings of Mahānadi]] names those just kings at their places before it reaches the six who end the line—a dilettante, a cruel man, an incompetent, a paranoiac, a child-tyrant and a drunkard. The second of them, whom the chronicle names **Dandavīra**, destroyed a rising of the upper-river villages and forbade the pyre to their dead ([[lore-unburnford|the Unburned Ford]]), and the ford is [[place-oluratarna|Olūratarana]] still.

## The Forty Days

The end came in the first year of the Age of Copyists, 1 AC, which is 241 BF by the western count. There was famine in the villages and grain in the palace, and the drunkard's household guard opened the royal granaries and took from them while he looked on. Then the king died without an heir of his body. The chronicle enters the death and not its manner; that his own cook poisoned him is tradition, and the recitation says so when it tells it.

The people of the villages went to the senior priest of the Vyālendra temple and asked him to convene a sabhā. They asked for no king. The sabhā sat in the great hall before the altar for forty days, and on the fortieth it declared the kingdom dissolved and the line ended, with full honors to the line for its better generations. Each clause of the decree settled what to keep and what to unmake:

- the palace came down, and its stones went into the temple; [[place-palacecellar|its cellars]] lie open at the north end of the town;
- the royal granaries became common stores, and the four-story granary in the temple court still is one;
- the army was disbanded, and each of its men was given land;
- the council-chamber was kept, and the record in it was kept whole.

[[lore-fortydays|The Forty Days]] is the chronicle's account with the Memory-Keeper's glosses, and its originals lie in [[place-shitakoshtha|Shitakoshtha]].

## What It Left

The villages became the Rājapur Janapada, and one family has kept the Memory-Keeper's office since the decree. Its holder opens every session of the sabhā by reciting the kings, and on the **Day of the Dissolution** each year the whole town hears the history and the decree read through and renews its compact with a cup of river water. Rājapur has kept no soldiers since.

The dissolution did not stay in Rājapur. Every Vedyari course in political philosophy teaches it as the classical case of a janapada that replaced a kingdom, and the library's correspondence shelf holds sixty years of letters about whether it should be done again. The Rājapuri scholar [[being-anrjhrdvmbjkr|Anurāja Harshadevāmbujakar]] writes to the kingdoms urging that it should, from [[affiliation-chandrapur|Chandrapur]], and the kingdoms have asked Chandrapur to expel him. Chandrapur has declined.

## See Also

- [[affiliation-rajaprjnpd|Rājapur Janapada]]—the temple-republic the decree founded
- [[lore-fortydays|The Forty Days]] and [[lore-rcitkngsmhnd|Recitation of the Kings of Mahānadi]]—the chronicle and the recitation
- [[place-sandstonealtr|The sandstone altar]]—where every king who reigned from Rājapur was consecrated
- [[place-rajavalilib|The Rājavalī Library]]—the kingdom's record, kept whole
- [[lore-drwnngseat|The Drowning of the Royal Seat]]—the kingdom's town the river took long after
- [[lore-stndrdmdhv|The Standardization at Madhusthāna]]—the reign in which the kingdom moved its capital to Rājapur, and from which its count begins
