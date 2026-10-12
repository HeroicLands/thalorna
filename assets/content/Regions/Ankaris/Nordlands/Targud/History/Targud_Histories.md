---
shortcode: trgdahstry
name: {full: Histories and Legends of Targud, aliases: []}
type: lore
subType: history
description: "Targud's frontier memory and the disputed tale of Vrellbrandr, the sword bound behind its king's seat."
tags: []
data:
  culture: nordheimnclt
  packFolder: targud
  events:
    - id: vrellbrandr
      when: ~590
      kind: making
      depth: region
      stated: {calendar: domseycount, text: "304 BG"}
      sources: [lore-trgdahstry, place-tvalgard]
      summary: >-
        The story of Vrellbrandr, the sword that must drink when drawn, places its making before the east burned; the sword's tellers say it hangs bound with nine knots behind the king's seat at Tvalgard.
      standing: legendary
      names: [{name: Thirst, by: affiliation-kingdmtrgd}]
      where: {locus: [place-targud]}
      unresolved: ["who made the sword and why, which no telling agrees on"]
    - id: beacons
      when: ~640
      kind: raising
      depth: region
      stated: {calendar: domseycount, text: "354 BG"}
      sources: [lore-trgdahstry, lore-storalddraskborg, affiliation-kingdmtrgd]
      summary: >-
        King Braldmýl I raises the fort at Draskborg and a line of beacons across the burned ground, so that a raid seen on the frontier is known at Tvalgard the same night.
      standing: single-source
      where: {locus: [place-targud]}
      follows:
        - event: "lore-burningeast#horde"
          how: caused
          note: the frontier the horde left had to be watched from the ridge
---

Targud's eastern border is marked by burned farms, abandoned watchtowers and forts whose duty passes
from one district to the next. Its skalds remember defenses that failed as readily as victories. The
watch learns the [[place-grkrhlmrgn|Grukar]] from patrols and survivors; their raids are part of the
frontier's history, not evidence of a peace bought from a nest.

## The Kingdom's Past

Targud was a kingdom of farms before it was a kingdom of forts. Its kings, the **Driskarukh**, held their hall at [[place-nulthgard|Nulthgard]] above a ford in the old eastern districts for three centuries, and **Skruldmýl I**, about 528 to 556, raised the first watchtowers along the eastern woods when the Grukar raids grew bold. From 604 a single Grukar tribe spawned for war burned the east district by district, and in 613 it reached Nulthgard. The hird and the eastern farmers held the ford below the hall for three days at [[place-dvulgvangr|Dvulgvangr]] and died there, and **Skruldmýl II** fell back to [[place-tvalgard|Tvalgard]] and ordered every bóndi in the kingdom onto the wall in turn; [[lore-burningeast|The Burning of the East]] tells it. His son **Braldmýl I** raised **Draskborg** and the beacon line about 640, which the saga of [[lore-storalddraskborg|Stórald of Draskborg]] remembers from the other end.

Three kings have held Tvalgard since 686: **Skruldmýl III**, his short-lived son **Thraldvir**, and **Braldmýl II**, king since 707. The court has had three accessions in a generation and the frontier has had none of the peace a settled succession buys.

## The Sword Named Thirst

The [[place-tvalgard|Tvalgard]] hall is said to hold **Vrellbrandr**, the blood-brand, a sword its tellers call Thirst, behind the king's seat. In the
story its hilt and scabbard are bound together with nine knots, checked each morning. Its making is
placed before the land to the east was burned, about 590. A teller warns that it must drink when drawn or turn
on the one who draws it. One older king's kinsman is said to have spared his own men by killing a
hound when the enemy fled before he could strike.

Targud's fatalist skalds say the sword will be drawn once more at [[lore-aldarlok|Aldarlok]]. Others
hear a warning about the next war. These are readings of the tale, not a prophecy confirmed by the
king or a rule every blade obeys. The binding at Tvalgard matters because people who live under the
frontier's pressure must decide what it would mean to find the knots cut.

## See Also

- [[affiliation-kingdmtrgd|Kingdom of Targud]] · [[place-targud|Targud]]
- [[place-grkrhlmrgn|Grukarhölm]] · [[lore-aldarlok|Aldarlok]]
- [[lore-burningeast|The Burning of the East]] · [[place-nulthgard|Nulthgard]] · [[place-dvulgvangr|Dvulgvangr]]
- [[lore-domseycount|The Dómsey Count]]—the reckoning of the sittings and the ages of the north
