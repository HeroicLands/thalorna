---
shortcode: tiravlenbattle
name: {full: Tiravlen, aliases: [The Breaking of the Thânevar Kings]}
type: lore
subType: history
description: "About 152 AF the legions landed below Aurelàne and marched up the river roads, the Thânevar kings gathered their hosts on the shore of Lake Tiravel and were broken there, and the province of the West was made with Aurelàne as its capital."
tags: [history]
data:
  packFolder: provenzia
  events:
    - when: ~152
      kind: battle
      depth: region
      sources:
        - place-tiravellake
        - place-bldfldtiravlen
        - place-talothe
        - place-aureliane
        - affiliation-vylarinmpr
      summary: >-
        The legions land below Aurelàne and march north-east up the river roads. The Thânevar kings gather their hosts at Lake Tiravel, the richest basin they hold, and are broken on the shore; many are driven into the water. The province of the West is made, with Aurelàne its capital. The Vylarian record of the battle burns with the archive on Arvel, and Provenzians keep only the ground's name.
      standing: attested
      names:
        - {name: Tiravlen, by: place-bldfldtiravlen}
        - {name: the breaking of the kings, by: lore-provenzianclt}
      where:
        locus: [place-tiravellake, place-bldfldtiravlen]
        reach:
          - place: place-aureliane
            how: the colony on the great road becomes the capital of the province of the West and keeps the high courts for the centuries that follow
            knowledge: named
          - place: place-talothe
            how: the lake villages keep the anniversary indoors and call the ground by its name without saying whose battle it was
            knowledge: unlinked
          - place: place-provenzrgn
            how: the Thânevar kingdoms end, and the country people keep the memory of governing themselves
            knowledge: named
      who: [{ref: affiliation-vylarinmpr, role: actor}, {ref: lore-provenzianclt, role: victim}]
      follows:
        - event: lore-westernwars
          how: enabled
          note: the legions that took the lowlands of Tarvénia turn west along the coast to the Thânevar country
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The kings of the lake country were beaten in the field and the province was made.
          agrees: full
          withholds: the name of the battle, which the archive fire took with the dispatch
        - by: lore-provenzianclt
          says: Nothing of the battle. The ground is called Tiravlen and the lake is cold.
          agrees: silent
        - by: place-bldfldtiravlen
          says: >-
            Once a year the line breaks again, out over the water, and the lake takes the ones who ran.
          agrees: full
      unresolved:
        - the name of the Vylarian phêlzândôs who led the landing
        - how many of the Thânevar kings were taken alive
---

The lake villages of **Tiravlen** keep the anniversary indoors, and they cannot say what it commemorates. The Vylarian dispatch that named the battle burned with the imperial archive on Arvel in about 318 AF, and the Thânevar kings who fought it left no record of their own. The ground kept the name and the villages kept the night.

## The March

The legions came ashore below [[place-aureliane|Aurelàne]] about 152 AF. The colony on the great road had been a town of Vylarian settlers for two centuries, and it gave them a landing, a road and a gate. They marched north-east up the river roads toward the uplands, where the Thânevar kings held the richest basin they had, the shore of [[place-tiravellake|Lake Tiravel]]. It was the one place worth the cost of fighting for, and the kings gathered their hosts there rather than let it be taken.

## The Shore

The Thânevar hosts held the shore and the legions held the road. The battle was fought on the strip between them. The Thânevar line was broken by the second day, and the ones who ran went into the water, where a mountain lake in autumn is cold enough to kill a man in the time it takes to swim to the middle. The lake took more of them than the legions did.

The kings were broken. Some died on the shore and some were taken, and the rest went home to halls the legions reached by the first snow. By the end of the year the Thânevar kingdoms were a province.

## The Province of the West

The Empire made Aurelàne the capital of the province and ruled the west from it for the next four and a half centuries. The Thânevar country was left its villages and its customs, and the legions did not trouble to learn which king had held which valley. The country people kept the memory of governing themselves, and they have kept it since.

## What It Left

- **The Blood-field of Tiravlen.** The battle replays over the water on its anniversary, on the night of 9 Karnavar, and the lake villages draw up their boats and shut their shutters ([[place-bldfldtiravlen|Tiravlen]]).
- **The end of the Thânevar kingdoms.** The petty kings of the old Provenzal country are not named in any surviving record, and the country people do not name them either.
- **Aurelàne's provincial centuries.** The city that was a colony becomes the capital of everything the Empire held west of the sea.

## See Also

- [[place-bldfldtiravlen|The Blood-field of Tiravlen]]—the ground the battle left
- [[place-tiravellake|Lake Tiravel]]
- [[lore-aurelianefound|The Founding of Aurelàne]]—the colony the legions landed beside
- [[lore-westernwars|The Western Wars]]—the Vylarian conquests it belongs to
