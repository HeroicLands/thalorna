---
shortcode: westernshore
name: {full: The Sons on the Western Shore, aliases: [The Burning of Arnwern]}
type: lore
subType: history
description: "From about 715 AF the Sons of Eldheim, campaigning out of Stormveld for a road into the Nordlands, have come ashore on Vristwald's western bay and burned villages, Arnwern first and worst; no common muster has been raised against them, and Thornak Bludtusk Barsk wants one."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: shore
      when: ~715
      until: 720
      kind: war
      depth: region
      stated: {calendar: wintertally, text: "8 PH"}
      sources:
        - affiliation-sonsmuspell
        - being-thrnkbldtscbr
        - place-falkhaven
        - affiliation-jrldmstrmvld
      summary: >-
        The Sons of Eldheim, campaigning out of Stormveld for land on the mainland from which to reach into the Nordlands, land on Vristwald's western bay and burn villages. Arnwern, a lake village behind the shore, is the first and the worst: its people killed or taken and its Shaman burned before its totem. Thornak Bludtusk Barsk's raids on their outposts are the forest's only answer so far, and no common muster has been raised.
      standing: attested
      names: [{name: the Burning of Arnwern, by: lore-varokhiclt}]
      where:
        locus: [place-falkhaven]
        reach:
          - place: place-eichengrnd
            how: Thornak's band raids the Sons' outposts and argues for a muster the elders have not agreed to
            knowledge: named
      who:
        - {ref: affiliation-sonsmuspell, role: actor}
        - {ref: affiliation-vrystwldtrbs, role: victim}
      accounts:
        - by: affiliation-sonsmuspell
          says: >-
            The forest's spirit-keepers are offered to the fire, and the ground they kept is purified for those who will hold it.
          agrees: partly
          withholds: how few of the Sons are needed to hold a burned clearing, and how many to hold it against a muster
      unresolved:
        - whether the western villages' elders will lay their fragments together, and for whom
---

In The Sons on the Western Shore, the cliff watch at [[place-arnholt|Arnholt]] on the western shore has warned of unfamiliar sails for as long as the village has stood. Since about 715 it has had something specific to warn of: hulls out of [[place-stormveld|Stormveld]] carrying [[affiliation-sonsmuspell|The Sons of Eldheim]], who come ashore on [[place-vrystwald|Vristwald]]'s western bay to burn villages and want the land they burn.

## The Burning of Arnwern

The Sons are an order of [[affiliation-blackflame|The Black Flame]], and their campaign is for ground: a foothold on the mainland, taken from the Varokh villages, from which to reach into the [[place-nrdlndsrgn|Nordlands Region]]. [[place-arnwern|Arnwern]], the eagle lake, was a village of the [[place-falkhaven|Falkhaven]] shore behind a lake where the eagles fish, and it was the first. The Sons came up from the shore at night, killed or took its people, and burned its Shaman before the eagle stone at the lake's edge, which is the order's sworn practice and the thing its Blazewarden, [[being-sirethoskhol|Sirethos Kolsamis]], has promised to do to every Shaman in the forest. They have burned several villages since, and none as thoroughly.

## No Muster Yet

The danger is common, and the elders have not agreed on it. The villages of the shore are the ones burning, and the villages a week inland are the ones that would have to send their war-bands to the coast for a season. A common muster would need a War Chief, and the War Chief most eager for the command is [[being-thrnkbldtscbr|Thornak Bludtusk Barsk]] of [[place-eichengrnd|Eichengrund]], whose band has raided the Sons' outposts and ambushed their patrols on its own account. Every elder who hears him argue for a muster hears [Dorgulf yra Grimskorn wur Thrastein]{.name data-type="being/npc"}'s winter in it ([[lore-skathhrethlss|The Loss of the Legion at Skathhreth]]), and Thornak's own village's Shaman opposes him.

## What It Left

- **[[place-arnwern|Arnwern]].** A burned clearing on the lake behind the shore, which the Sons have begun to fortify with the village's own timber. Varokh scavengers go in by night for what the fire left, and the Sons' patrols wait for them.
- **The eagle stone.** Blackened, and still standing at the lake's edge. No Shaman has called Arnwern's dead home, because Arnwern's Shaman was the one who would have done it.
- **The argument.** Whether the western villages will lay their fragments of the talisman together, and whether they will lay them down for Thornak.

## See Also

[[affiliation-sonsmuspell|Sons of Eldheim]]
: the order on the shore

[[being-thrnkbldtscbr|Thornak Bludtusk Barsk]]
: the hunter who wants the muster

[[place-falkhaven|Falkhaven]]
: the western shore the Sons come ashore on

[[lore-wintertally|The Tally of Winters]]
: the Posts at Hrindstead as the forest counts them
