---
shortcode: summerwar
name: {full: The Summer War}
type: lore
subType: history
description: "From about 556 AF the lords of Tarvénia's Western March go down the passes into Provénzia's eastern march every season the snow allows, in a war neither crown declares; the March counts it from Mórezan's raid and fights it still."
tags: [history]
data:
  packFolder: tarvenia
  events:
    - when: ~556
      kind: war
      depth: region
      sources:
        - place-westernmrch
        - place-toravarrange
        - place-talothe
        - place-durvalis
        - place-ceravelvale
        - affiliation-kingdmtrvn
      summary: >-
        After Mórezan's raid the High Kings and the lords of the Western March go down the passes into the province every season the snow allows. They press the march hardest while the province fights its therkos, and in the second year of the War of the Princes a host goes through Keravel Vale unopposed. Provénzia raises Durvalis to hold the road, and the March goes down regardless, below the level at which either crown must call it a war.
      standing: attested
      names: [{name: the Summer War, by: place-westernmrch}]
      where:
        locus: [place-westernmrch, place-talothe]
        reach:
          - place: place-ceravelvale
            how: a Tarvénian host goes through the vale unopposed in the second year of the War of the Princes, because there is no army to oppose it
            knowledge: named
          - place: place-durvalis
            how: the town is raised after the War of the Princes to hold the road the host used, and the March's hosts meet its muster at the foot of the pass
            knowledge: named
          - place: place-bldfldmalnebris
            how: men of both sides die on the road below the pass in most seasons, and whether they join the field is disputed
            knowledge: named
      who: [{ref: affiliation-kingdmtrvn, role: actor}, {ref: affiliation-kngdmprvnz, role: actor}]
      follows:
        - event: lore-malnebris
          how: caused
          note: the first raid proves the province can be entered, and the lords who followed Mórezan go down again every season the passes open
        - event: lore-tarvfallsawy
          how: enabled
          note: the lords who drove the garrisons out of the lowlands look west across the passes for their next season
      accounts:
        - by: place-westernmrch
          says: >-
            The March goes down the passes when the snow clears, as it has since Mórezan, and comes home when the snow returns.
          agrees: partly
          withholds: how many seasons the March brought home less than it took down
        - by: place-talothe
          says: >-
            Raid and counter-raid over pasture, passes and precedence, and every family on the road has lost someone to it.
          agrees: full
        - by: affiliation-kingdmtrvn
          says: >-
            The crown of Tarvénia has declared no war on Provénzia.
          agrees: partly
          withholds: that the crown presses its claims on the Talote's uplands whenever Provénzia's court is weak
      unresolved:
        - who led the host that went through Keravel Vale in the second year of the War of the Princes
---

In the [[place-westernmrch|Western March]] the war with [[place-provenzrgn|Provénzia]] has a name and a season, and neither crown has ever declared it. The March calls it the Summer War, because it is fought only while the passes are open, and counts it from the raid that [Mórezan]{.name data-type="being/npc"}, the second High King, led down the pass about 556 AF ([[lore-malnebris|The First Great Raid]]).

## The Season

The High Kings had been elected to drive the Empire's garrisons out of the lowlands ([[lore-tarvfallsawy|Tarvénia Falls Away]]), and once the garrisons were gone they found a use for the lords who had elected them. Mórezan's raid showed that the western province could be entered. After it, the High Kings and the lords of the March went down the passes into the province's eastern march whenever the snow allowed, to see what a season would yield, and came home when the snow returned.

The war took the shape of the mountains. It was fought over pasture, over the passes and over precedence, by the border families on both sides. No campaign ran past the first snow, and the war had no end, because neither crown could afford to be the one that stopped.

## The Hosts

The province's troubles were the March's opportunities. From about 609 to 618 the province's estates fought their _therkos_ for nine years ([[lore-charterwar|The War of the Charter]]), the eastern march was left to defend itself, and the Tarvénian hosts pressed it every season of the nine.

In 653 the kingdom of Provénzia fell into a war over its succession ([[lore-warprinces|The War of the Princes]]), and [[place-ceravelvale|Keravel Vale]], on the road from the east, became its battleground. In the second year a Tarvénian host came down the passes and went through the vale unopposed, because there was no army to oppose it.

## The Walls

When the succession was settled, Provénzia raised [[place-durvalis|Durvalis]] below the passes, at considerable expense, to hold the road the host had used. Its walls are high and new, and the march musters there every spring. The March goes down the passes regardless, and the war goes on below the level at which either crown must acknowledge it.

## What It Left {#what-it-left}

- **The March's season.** Every valley of the Western March plans its year around the passes: the host goes down when the snow clears and comes home when it returns.
- **[[place-kemthoza|Kemthoza]].** The fort at the head of the war pass, where the March's hosts gather before they go down.
- **Durvalis.** The fortress town on the far side of the passes, raised to hold the road against the March.
- **The road below the pass.** The dead of the first raid still lie at [[place-bldfldmalnebris|Malnebris]], and men of both sides are added to them in most seasons.

## See Also {#see-also}

[[place-westernmrch|Western March]]
: the March that fights it

[[place-talothe|Talote]]
: Provénzia's march across the passes

[[lore-malnebris|The First Great Raid]]
: the raid the March counts it from

[[place-durvalis|Durvalis]]
: the town raised against it

[[place-toravarrange|Toravar Range]]
: the mountains whose western passes it is fought through
