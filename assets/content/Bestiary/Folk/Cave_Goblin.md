---
shortcode: cvgbln
name: {full: Cave Goblin, aliases: []}
type: being
subType: creature
description: "A highly intelligent, amoral subterranean goblin living as solitary hunter or loose community, pursuing its own self-interest with unwavering consistency."
tags: [folk]
data:
  packFolder: folk
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: goblin
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+10
    per: 1d4+10
    aur: 1d4+5
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
      weight: {base: 40, calc: "40"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[cvgbln|Cave Goblin]]{float=top-left}

The cave runs back from the hillside, and your torch shows its walls slick and gray. Small shapes move at the edge of the light, three or four of them, three feet high and hunched, gray-green and thin, and they move without a sound. Their eyes are the biggest thing about them, huge and pale and shining in the torchlight like a cat's, and they are fixed on you without any expression you can read. One of them steps forward into the light, holding up both empty hands. It smiles, showing small sharp teeth. "Lost?" it says, in your own tongue. Behind it, a little farther back in the dark, you hear a sling being wound.

# Dossier {#dossier}

The Cave Goblin is a [[lore-goblinfolk|goblin]] of the underground: a small, hunched, sapient creature, three to four feet tall, with huge pale eyes that see in near-darkness, which lives in caves and tunnels as a solitary hunter or in loose communities when food and room allow. It is highly intelligent and amoral, neither wicked nor good: it pursues its own self-interest and the customs of its kind with perfect consistency, follows a trickster god, lies as easily as it breathes, and poisons its weapons with fungal toxins. Goblins hold their own territories in the marginal lands between the settled kingdoms, and the cave goblins of the [[place-vandstein|Vandstein]], the stony southern edge of the [[place-vrystwald|Vrystwald]] facing the Vylarian Empire, are the ones the empire's frontier knows best.

## Presentation

A cave goblin stands three to four feet tall, thin and hunched, built for tunnels, with long arms and long fingers. Its skin runs from sickly gray to mottled dark green or brown, often patched darker with cave slime or a fungal bloom. Its eyes are large, pale and luminous, and its long ears turn toward every sound. Its mouth is wide and full of small sharp teeth. It dresses in scraps, hide, salvaged cloth and stolen gear, and it carries a light spear, a sling and a pouch of darts and pots of poison. It moves in perfect silence and freezes perfectly still. In daylight it squints and keeps to shade.

## In the Land

The Vandstein's highlands are stony and broken, crossed by a few passes that make the fur trade possible, and its limestone is riddled with caves. The cave goblins live in those caves, alone or in loose communities in the bigger systems, and they hunt underground and come out at night: cave fish, bats, beetles and blind crabs below, and above, birds, hares, the forest villages' poultry and anything a traveler leaves unguarded. Their caves reach into the overgrown Vylarian posts of the southern woods, whose cellars and drains they use, and some reach under the mountains toward [[place-moktur|Moktur]], where the empire's miners break into them from the other side.

## Key Behaviors

A cave goblin is driven by hunger, curiosity and its standing among its kind, and it thinks about its own advantage first, last and always. With other goblins it cooperates when the benefit is plain and turns on them when it is not. With outsiders it is the same: it trades, guides, lies, robs or kills as the moment pays, without malice and without loyalty. It values shiny things, food that is scarce underground, and good tools and weapons, and an individual goblin can usually be bargained with if the terms are interesting to it. It is territorial, but a community defends its caves together only when the community itself is threatened. It knows its tunnels in three dimensions, as a fish knows water.

## What the Frontier Does

The Varokh villages below the Vandstein's passes trade with the cave goblins, cautiously, for the fungi and cave-salts the goblins gather, and pay them not to raid the poultry; the arrangement works most years. Fur traders crossing the passes hire goblin guides now and then, because a goblin knows the caves that cut a day off the road, and they count their packs every night. The Vylarian miners in Moktur who break into goblin tunnels from below call it bad luck and wall the gallery up, because a goblin community that has had its tunnels broken into spends the next season stealing everything the mine owns. Everyone who deals with them learns the same rule: a cave goblin is honest when honesty pays it, and it is never honest by accident.

## Signs

- Small, long-toed bare footprints in the mud of a cave floor, many of them, crossing and recrossing.
- Bones of bats, fish and poultry heaped in a side passage, cracked for the marrow.
- Pale fungus deliberately grown in rows on rotten wood in a cave, and the smell of it drying.
- Tools, lamps and food missing from a mine or a camp overnight, with no sign of how anyone got in.
- Large pale eyes shining at the edge of the torchlight, gone when the torch is turned.

## Combat Strategy

Cave goblins fight from the dark and from advantage: from above, from side passages, from behind. They use their sight in darkness, their knowledge of the tunnels and their numbers, and they strike, poison and withdraw. A goblin does not stand and fight if it can help it; it flees the moment a fight turns, and a group scatters. They put out the lights first when they can, because in darkness they have every advantage. They talk to divide a party and lie to lead it into dead ends and drops.

## Special Abilities

### Poisoned Spear and Darts

The goblin fights with a light spear whose point is smeared with fungal poison, and throws small darts tipped with a paralytic poison that brings numbness and slows the victim.

### Sling

It slings stones and bone shot from cover, and it is a small, hard target at a distance.

### Darkvision

It sees in near-complete darkness as if in twilight.

### Tunnel Mastery

In caves it moves in perfect silence and climbs and threads passages in three dimensions with an ease no surface-dweller can match.

### Toxin Knowledge

It knows how to find, prepare and use the poisons of cave fungi.

### Cunning Misdirection

It lies easily and well, confuses and misdirects, and exploits whatever outsiders assume about it. In conversation it is dishonest unless honesty pays.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 11-14 (1d4+10)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 6-9 (1d4+5)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 11-14 (1d4+10)
