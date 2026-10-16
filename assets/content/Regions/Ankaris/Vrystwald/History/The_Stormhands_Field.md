---
shortcode: stormhandfld
name: {full: The Stormhand's Field, aliases: [The Breaking of the Stormhand Brotherhood]}
type: lore
subType: history
description: "About 692 AF the Stormhand Brotherhood, six hundred Nordmal swords on a Nordheim jarl's contract, crossed the Falkenstein frontier to take the hill and its crossing; the western villages' muster met it a week's march into the forest, broke it, ransomed its survivors and let them carry their dead home."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: field
      when: ~692
      kind: battle
      depth: region
      stated: {calendar: wintertally, text: "33 TR"}
      sources: [affiliation-malldbndlg, place-falkensten, place-falkhaven, affiliation-kngdmnrdhm]
      summary: >-
        The Stormhand Brotherhood, the largest company the Compact ever signed, crosses the frontier on a Nordheim jarl's contract to take Falkenstein and the crossing it commands. The western villages raise a common muster at Harholt's pines under Waldulf yra Hildskorn wur Falkenstein, let the company march a week into the forest, and break it in a wooded valley where it cannot form. Half the company dies; the muster takes most of the rest alive, ransoms them home through the Compact, and lets them carry their dead.
      standing: attested
      names:
        - {name: the Stormhand's Field, by: lore-varokhiclt}
        - {name: the breaking of the Stormhand Brotherhood, by: affiliation-malldbndlg}
      where:
        locus: [place-falkhaven]
        reach:
          - place: place-nrdlndsrgn
            how: the Compact's largest company is broken, and the Hall tells its story to every new captain
            knowledge: named
          - place: place-falkensten
            how: the hill fort keeps its crossing, and its War Chief keeps it manned in every season since
            knowledge: named
      who:
        - {ref: affiliation-vrystwldtrbs, role: actor}
        - {ref: affiliation-malldbndlg, role: victim}
        - {ref: affiliation-kngdmnrdhm, role: instrument}
      accounts:
        - by: affiliation-malldbndlg
          says: >-
            The Brotherhood was broken a week's march over the frontier on a jarl's contract, and a captain who signs to take ground in the forest has been told why not.
          agrees: partly
          withholds: the jarl's name, and what the contract promised the company it would find
        - by: lore-varokhiclt
          says: >-
            The Nordmen came for the hill and went home in ransom, carrying their dead, which is more than the forest gives a legion.
          agrees: full
      unresolved:
        - which Nordheim jarl signed the contract, and whether the crown at Knalthstead knew
---

The Compact-Hall at [[place-hringstead|Hringstead]] tells every captain it signs the story of the **Stormhand Brotherhood**, six hundred swords on a Nordheim jarl's contract, which went into the forest to take a hill and came out in ransom. The [[lore-varokhiclt|Varokh]] tell the same story from the other side, and they tell it as the one fight with the Nordmen they are proud of having ended well.

## The Contract

The hill of [[place-falkensten|Falkenstein]] commands the easiest crossing between the Nordlands and the western forest of [[place-falkhaven|Falkhaven]], and whoever holds it decides who moves between the two peoples' country. Nordmal expeditions had reached its slopes more than once and Varokh counter-raids had answered from them just as often. About 692 a jarl of [[affiliation-kngdmnrdhm|Nordheim]], whose name the Hall does not say, signed the largest company the [[affiliation-malldbndlg|Compact]] had ever signed to settle it: the Stormhand Brotherhood, to take the hill, hold the crossing and burn the villages that fed it.

## The Week in the Forest

The western villages' elders met under the old pines at [[place-harholt|Harholt]], where Falkhaven's musters gather in the thaw, agreed that the danger was common to all of them, and laid their fragments of the talisman together for **Waldulf yra Hildskorn wur Falkenstein**, War Chief of the hill fort the company had come for. Waldulf did not hold the hill. He let the Stormhand take its empty slopes, let it march on for the villages behind, and kept the muster in the trees on either side of its road for a week, as Dorgulf had done with the legion four centuries before. On the seventh day the company came down into a wooded valley where six hundred men in mail could not form a line, and the muster came out of the trees.

Half the company died in the valley. The muster took most of the rest alive, which is the thing the Varokh tell the story for. A Nordlander is worth ransoming, and these were worth a great deal: the Compact paid for every one of them, through Waldburg, over the next two winters. The muster let the survivors carry their dead home over the frontier under truce, and the Brotherhood's dead got their grave-ale in their own halls. No field was left in the valley, because no one was left on it.

## What It Left

- **Falkenstein's watch.** The hill fort has been manned in every season since, and its War Chief's word carries further inside its timber ring than any War Chief's in the forest.
- **The Hall's caution.** The Compact tells the story to every new captain, and a company that signs to take ground in Vristwald signs knowing what the Stormhand found there.
- **The ransom.** The largest the forest ever took, and the reason the Nordmal halls of the Nalthmark still say, sourly, that the Varokh are reasonable people to lose to.
- **The valley.** A wooded valley a week inside the frontier with rusted mail in its leaf-mould and nothing else; the Varokh treat it as ordinary ground, because it is.

## See Also

- [[place-falkensten|Falkenstein]]—the hill fort the company came for
- [[affiliation-malldbndlg|Malalidabandalag]]—the Compact that signed it and ransomed it
- [[lore-skathhrethlss|The Loss of the Legion at Skathhreth]]—the muster's other great field, and the talisman
- [[lore-wintertally|The Tally of Winters]]—the Thrall Rivers as the forest counts them
