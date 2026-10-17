---
shortcode: hungerraids
name:
  full: The Hunger Raids
  aliases: [The Taking of the Eagle, The Black Marsh as the Forest Tells It]
type: lore
subType: history
description: "From 515 to 528 AF, after the Three Winters, Varokh war-bands came over the Vandstein passes in numbers Moktur had never met, for cattle and grain before captives; in 518 one of them carried off a legion's eagle, and in 520 the host that carried it died in the Black Marsh."
tags: [history]
data:
  culture: varokhiclt
  packFolder: vrystwald
  events:
    - id: raids
      when: 515
      until: 528
      kind: war
      depth: region
      stated: {calendar: wintertally, text: "176 SR"}
      sources: [place-vandstein, place-moktur, place-dolvar, lore-empirdclne, lore-threewinters]
      summary: >-
        The famine of the Three Winters sends Varokh war-bands south over the Vandstein passes in numbers Moktur has never met, for cattle and grain before captives. The lowland valleys of northern Moktur empty, Dolvar is raised to a legion fortress to stop the raids, and the Empire's revenue from the north fails in the same years its southern provinces begin to drift.
      standing: attested
      names:
        - {name: the Hunger Raids, by: affiliation-provncmktr}
        - {name: the Grain Summers, by: lore-varokhiclt}
      where:
        locus: [place-moktur]
        reach:
          - place: place-dolvar
            how: a frontier post is raised to a legion fortress-town to stop the war-bands at the passes
            knowledge: named
          - place: place-vylariargn
            how: the northern revenue fails, and the Empire's own account names barbarian pressure from Vristwald among the causes of its decline
            knowledge: named
      who:
        - {ref: affiliation-vrystwldtrbs, role: actor}
        - {ref: affiliation-provncmktr, role: victim}
      follows:
        - event: "lore-threewinters#winters"
          how: caused
          note: the famine that emptied the forest's stores
      accounts:
        - by: affiliation-provncmktr
          says: >-
            The northern valleys were stripped by barbarians while the capital sent letters, and Moktur held the passes with its own blood.
          agrees: partly
          withholds: how many of Moktur's own lowland villages were Varokh kin who opened their gates
        - by: lore-varokhiclt
          says: >-
            The children were hungry and the south had grain. A war-band that comes home with cattle is a war-band that kept faith.
          agrees: full
      unresolved:
        - how many of the war-bands were Varokh of Moktur raiding the valleys they lived beside
    - id: eagle
      when: 518
      kind: battle
      depth: region
      stated: {calendar: wintertally, text: "179 SR"}
      sources: [affiliation-vylrnmltry, place-moktur, place-vandstein]
      summary: >-
        A war-band under Skathrik yra Wulfskorn wur Gargrund falls on the camp of the Pelsan Hilvan in a Mokturan valley at night, burns its granary and carries off its eagle, which no Varokh has ever taken before or since. The legion is not disbanded at once, because the eagle is known to be in the forest and might be recovered.
      standing: attested
      names: [{name: the Taking of the Eagle, by: lore-varokhiclt}]
      where:
        locus: [place-moktur]
        reach:
          - place: place-vandstein
            how: the eagle goes north over the passes and hangs in Gargrund's War Chief's hall for two winters
            knowledge: named
      who:
        - {ref: affiliation-vrystwldtrbs, role: actor}
        - {ref: affiliation-vylrnmltry, role: victim}
      follows:
        - event: "lore-hungerraids#raids"
          how: enabled
          note: the raids had made a legion's camp worth raiding for its granary
      accounts:
        - by: affiliation-vylrnmltry
          says: >-
            The Pelsan Hilvan's eagle was lost to barbarians and recovered by the Karsan Soldan, which carries the gold band for it.
          agrees: partly
          withholds: that it was taken from the legion's own camp while the camp slept
      unresolved: [who left the Pelsan Hilvan's gate unwatched]
---

Every watchtower in [[place-moktur|Moktur]] keeps the custom of counting smoke. A sergeant handing a recruit his first night on the wall tells him to count the columns rising out of the forest below and to call the officer when there are more than there were at dusk, because one column is a camp and ten is a war-band coming over the passes. The custom is two hundred years old. It began in **the Hunger Raids**, the years after [[lore-threewinters|the Three Winters]] when the [[lore-varokhiclt|Varokh]] came south for food.

## The Famine in the Forest

The Three Winters of 512 to 514 fell on [[place-vrystwald|Vristwald]] as hard as on the [[place-nrdlndsrgn|Nordlands]]. The rivers froze to the bed and stayed frozen past the thaw, the clearings gave nothing two summers running, and the stores the household mistresses keep against a lean year ran out in the second winter. The old stopped eating so the young could, which Varokh custom permits and does not ask of anyone, and in a failed winter the three elders of each village apportioned what was left with the kindreds. At [[place-sundhaven|Sundhaven]] on the western shore a whale came ashore in the worst of it and fed the village until the thaw, and its ribs stand over the village gate.

The villages of the southern forest had one thing the northern ones did not. Over the [[place-vandstein|Vandstein]] passes lay Moktur's valleys, full of cattle and grain the famine had touched less, and nothing between the forest and the valleys but the mountains and the watch.

## The Grain Summers

From 515 the war-bands went south in numbers Moktur had never met. They wanted cattle and grain first and captives after, and the reciters call these years the Grain Summers for that reason. They came over the passes in the thaw, drove the herds north before the garrisons could gather, and came back the next year to the same valleys. In ten years the lowland valleys of northern Moktur emptied, the families moving south or into the walled towns, and the [[affiliation-vylarinmpr|Empire]]'s revenue from its northern province failed in the same years its southern provinces began to drift ([[lore-empirdclne|The Decline of the Vylarian Empire]]). The province raised [[place-dolvar|Dolvar]] from a frontier post to a legion fortress-town to stop the raids at the passes, and Dolvar's garrison still drills against them.

## The Taking of the Eagle

In 518 a war-band under **[Skathrik yra Wulfskorn wur Gargrund]{.name data-type="being/npc"}**, War Chief of [Gargrund]{.name data-type="place/settlement"} in Vandstein, came down on the camp of the [Pelsan Hilvan]{.name data-type="affiliation"} in a Mokturan valley on a moonless night. It wanted the legion's granary and burned it. It found the eagle standard in the camp's shrine with two men guarding it, killed them, and carried the eagle north over the passes, where it hung in Skathrik's hall at Gargrund for two winters. No Varokh had taken a legion's eagle before, and none has since. The Empire did not disband the Pelsan Hilvan at once, because the eagle was known to be in the forest and the legion meant to have it back.

## The Black Marsh, as the Forest Tells It

[[lore-blackmarshbtl|The Black Marsh]] is a Mokturan battle and its dead lie in Mokturan ground, and the Empire's own account of it belongs to Moktur. The forest keeps a different one, and it runs like this.

In the spring of 520 Skathrik took the eagle south again, at the head of the largest host the hunger had yet sent over the passes, war-bands from a dozen villages that had agreed to go together. The reciters say he carried it to shame the legions, and the elders of Gargrund say he carried it because he could not bear to leave it behind. The legions met the host in a valley with a marsh at its foot. They did not attack it; they closed the valley above it and waited, and when the host tried to break out it was driven down into the marsh, where a man in mail sinks to the waist and a war-band cannot stand together. It died there to the last man, and the [Karsan Soldan Korvan]{.name data-type="affiliation"} took the eagle out of the reeds.

No Shaman went south with the host, because no Shaman goes raiding, and nobody called any of its dead home to their totems. The Varokh hold that they are still in the marsh, a dozen villages' sons who cannot find their way north, and that the dread on that ground is theirs: the thing a man feels there is what a war-band feels when the ground gives way under it and there is nowhere to go. Gargrund has never sent its Shaman to call them, because the marsh is in Moktur and a Varokh Shaman at the edge of it would be taken for a raider and killed. The village keeps an empty place at [Weskskald]{.name data-type="lore/gathering"} for each of its dead, and recites their names every year with nothing after them.

## What It Left

- **The smoke-counting.** Every tower on the Moktur frontier counts the forest's columns at dusk, and the Black Marsh is the most famous night the count was right.
- **[[place-dolvar|Dolvar]].** A legion fortress-town of six thousand built to stop the Grain Summers, and still manned against the raids that followed.
- **Gargrund's empty places.** A village in Vandstein that recites forty names at Weskskald with no rite after them, and asks every party bound south whether they will carry a Shaman.
- **The decline.** The Empire's own account of its losses names barbarian pressure from Vristwald, and this is what it means.

## See Also

[[lore-threewinters|The Three Winters]]
: the famine the raids answered

[[lore-blackmarshbtl|The Battle of the Black Marsh]]
: the Empire's account of the same day

[[lore-empirdclne|The Decline of the Vylarian Empire]]
: what the lost revenue cost

[[place-dolvar|Dolvar]]
: the fortress raised against the raids

[[affiliation-vylrnmltry|Vylarian Military]]
: the eagle, and what a legion owes it

[[lore-wintertally|The Tally of Winters]]
: the Southern Raiding as the forest counts it
