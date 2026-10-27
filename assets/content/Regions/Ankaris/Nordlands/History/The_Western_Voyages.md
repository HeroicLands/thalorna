---
shortcode: westrnvoyages
name: {full: The Western Voyages, aliases: [The Gnaldurfjord Crossings]}
type: lore
subType: history
description: "Three crossings of the western ocean by the household of Hafthann the Surf-Farer of Gnaldurfjord: a probe in 699 AF that came home, a great raid in 707 AF that a storm swamped with the jarl and thirty-five men, and a modest raid in 719 AF under his son Skeldvir that brought back a few thralls and some strange artifacts."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: testing
      when: 699
      kind: contact
      depth: region
      stated: {calendar: domseycount, text: "413 SG"}
      sources: [place-gnaldurfjord, skill-nordmalng, affiliation-xikulchakl]
      summary: >-
        Hafthann the Surf-Farer, jarl of a Gnaldurfjord household, takes a crew west across open ocean in the year before the sixtieth sitting, to learn what lies on the far side. He finds a wooded coast with people on it, is seen from the shore, and brings the boat home.
      standing: single-source
      names: [{name: the Testing, by: place-gnaldurfjord}]
      where:
        locus: [place-gnaldurfjord]
        reach:
          - place: place-xikulchaklrgn
            how: a strange ship is seen off the coast, and its crew look the shore over and leave
            knowledge: unlinked
      unresolved:
        - whether the jarl sailed west to find the land or to see if the land he had heard of was there
    - id: greatraid
      when: 707
      kind: catastrophe
      depth: region
      stated: {calendar: domseycount, text: "421 PR"}
      sources: [place-gnaldurfjord, skill-nordmalng]
      summary: >-
        In the year of the sixty-first sitting Hafthann the Surf-Farer leads three longboats west to raid. A storm swamps the boats on the open ocean and the jarl drowns. One boat turns back and reaches Gnaldurfjord with ten men; two boats and thirty-five men are lost.
      standing: single-source
      names: [{name: the Year the Boats Did Not Come Back, by: place-gnaldurfjord}]
      where: {locus: [place-gnaldurfjord]}
      follows:
        - event: "lore-westrnvoyages#testing"
          how: answered
          note: the jarl goes back for what the probe showed him
      accounts:
        - by: place-gnaldurfjord
          says: >-
            The ten tell it alike: the storm came on far out of sight of land and took two boats whole, the jarl's with them, and the one that lived did so by bailing and luck. The widows add that the jarl should have turned back at the first dark sky.
          agrees: full
      unresolved: [whether the jarl was warned of the weather and sailed anyway]
    - id: modestraid
      when: 719
      kind: contact
      depth: region
      stated: {calendar: domseycount, text: "433 PR"}
      sources: [place-gnaldurfjord, skill-nordmalng, affiliation-xikulchakl]
      summary: >-
        Skeldvir Hafthannsen, the dead jarl's son, takes a single boat west where his father took three. The crew raid a coastal settlement of the Woodland League, are seen and fought off the shore, and come home with a few thralls and some artifacts.
      standing: single-source
      names: [{name: Skeldvir's Voyage, by: place-gnaldurfjord}]
      where:
        locus: [place-gnaldurfjord]
        reach:
          - place: place-xikulchaklrgn
            how: a coastal village is raided by men of a kind the League has no name for, and some of its people are carried off over the water
            knowledge: unlinked
      follows:
        - event: "lore-westrnvoyages#greatraid"
          how: answered
          note: the jarl's son goes west to show that the dead did not die for nothing
      unresolved: [whether the voyage was worth what it cost]
---

Ask in Gnaldurfjord when the boats last went west and nobody answers with a number. They say "the year before the sixtieth sitting", or "the year the boats did not come back", or "last summer", and each of the three is a different kind of answer. **The Western Voyages** are the three crossings that [[place-gnaldurfjord|Gnaldurfjord]] has made of the ocean that lies beyond Ankaris's western coast. They are the work of one household, which acted on its own account. The kingdom of [[affiliation-kingdmnrgd|Norgaad]] did not send it, did not forbid it and keeps no policy about it, and in the rest of the north the voyages are a fjord tale. The people on the far shore have a name for that ocean of their own, because to them it is the eastern one.

## Why Gnaldurfjord

A fishing village does not often send ships over the horizon, and Gnaldurfjord's reason is the whale. Its hunters go out past the fjord's mouth for seal and for whale in open water in all weathers, in boats that hold a dozen or so oars, and they have always known more about swells, cold and being out of sight of land than any crew that hugs a coast to the market towns. About three hundred people live under the turf roofs, and a household that can put three longboats on the water, as the jarl's could, is a household the whole fjord answers to.

The jarl in 699 was [Hafthann the Surf-Farer]{.name data-type="being/npc"}. The byname is earned and is not his kin's: he was a whaler who liked to run his boat along the edge of a breaking sea, and the village gave him the name long before he gave it a reason to be remembered. What drove him west is not recorded. Two things are said in the village: that a whaler follows what he hunts, and that old charts and older tales spoke of a shore across the water. Hafthann kept his own counsel, and the sea has him now.

## The Testing, 699 AF

In the year before the sixtieth sitting, in the last years of [[lore-domseycount|the Stormveld Generation]], Hafthann took one boat west. It was a probe and nothing more: he meant to see whether the shore was there, who stood on it and whether a boat could get back. The crossing took longer than anyone in the fjord had judged a crossing could take. The shore was there, wooded to the water's edge, with smoke rising from it and people watching from it, and the crew coasted it, looked it over and turned the boat for home. They were seen from the land. They made no landing, took nothing and lost no one, and the village had its first account of a shore across the water.

The [[affiliation-xikulchakl|Woodland League]] saw it too: a strange ship stood off its coast, and then it was gone.

## The Great Raid, 707 AF

Hafthann waited eight summers and then went back with all he could muster: three longboats, forty-five men, himself at the steering oar of the first. The raid was to be a real one, to take the coast's goods and bring home the proof of it.

It never reached the shore. A storm came on far out, with no land in sight, and swamped the boats. Two went down whole. The jarl's was one of them, and Hafthann drowned. The third boat, bailing, with half its gear over the side, turned back and reached the fjord after a long, grim passage with ten men aboard. Two boats and thirty-five men did not come home.

In a village of three hundred, the loss is the whole matter. Thirty-five men is most of the strong arms that row a whaleboat, and the hunt on which Gnaldurfjord lives was crewed for years afterward by boys and by old men who had thought themselves done. The jarl's house lost its head, the village lost its fighting men, and a generation of children grew up without fathers. The skalds call the year _the year of the sixty-first sitting_ because the sitting on [[place-domsey|Domsey]] fell in it, and the fjord calls it the year the boats did not come back, because it was a loss only the fjord felt. Nobody at the sitting heard of it.

## The Modest Raid, 719 AF

For twelve years nobody spoke of going west. Then [Skeldvir Hafthannsen]{.name data-type="being/npc"}, the jarl's son, who had grown from a boy of the fjord into the head of what was left of his father's household, took one boat across, with a crew who volunteered. It was no great raid. They fell on a village on the shore, were seen and fought, and left it burning. They came home with a few thralls and some artifacts, and none of Skeldvir's crew was lost.

The artifacts are on the household's shelves and are the most-discussed things in the fjord. They are worked in hammered copper and in shell, in patterns no Nordman recognises, and some of them are plainly meant to be worn and others plainly for a purpose nobody has guessed. The thralls speak a tongue nobody in the north can follow, and the village has learned by now to make itself understood to them by signs.

On the far shore, the raid of 719 is the second the [[affiliation-xikulchakl|Woodland League]] has seen, and the League has not yet put the two together. It knows only that the men who came from the water twice are men it has no name for.

## The Argument

Skeldvir heads the household now, and Gnaldurfjord is deciding whether he should go west again. It has been arguing the question since the boat came home last summer, and nothing settles it. It is a hard question, because every voice in the argument is right about something.

**For going.** Skeldvir himself says the shore is real, the people on it can be fought, and what a single boat brought home is what the rest of the north spends a summer in the south to earn. His father crossed twice, and the first time showed that it could be done. "If we stop now," he tells the household, "then the thirty-five went down for nothing. If we go on, they went down for the road." The younger men, who have no fathers on the bottom of the sea to weigh against it, want a share in what the land holds.

**Against going.** The widows of 707 do not argue the profit. One of them, who lost a husband and two brothers in the storm, puts it in a sentence the village repeats: "The sea took three boats' worth of us to pay for a few thralls and some pretty copper, and you wish to ask it for more." The whalers say the same thing in boats and oars: every boat that goes west is one not on the hunt, every man lost is a man the hunt cannot spare, and the voyage is a month on open water in a boat that is not built for it. The crossing in 707 killed the village's best crew, and the ocean is the same ocean.

**What the village cannot weigh.** The return is little: a few thralls and some artifacts. The risk is the whole household, and perhaps the village. The prize beyond it is a shore nobody in the north has explored, and nobody can say whether it holds more of the same or something worth a village's blood. The jarl's house is not rich, and no king is at hand to forbid or bless the voyage, so the argument stays in the fjord's own hall.

Any party that comes to Gnaldurfjord this summer finds the question in every house, and both sides want an opinion from strangers.

## See Also

[[place-gnaldurfjord|Gnaldurfjord]]
: the village that sent the boats

[[lore-domseycount|The Domsey Count]]
: the sittings by which the voyages are dated

[[affiliation-xikulchakl|Woodland League]]
: the nation whose coast the boats reached
