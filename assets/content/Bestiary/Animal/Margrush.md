---
shortcode: margrush
name: {full: Margrush, aliases: []}
type: being
subType: creature
description: "A leathery-hided forest and swamp predator about 300 pounds, its flattened head and serrated jaws made for gripping prey amid concealing camouflage."
tags: [animal]
data:
  packFolder: animals
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+14
    dex: 1d4+7
    agl: 1d6+7
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+12
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[margrush|Margrush]]{float=top-left}

The black water is still, and the cypress knees stand out of it like the teeth of a comb. On the far side of the channel a low, dark shape lies along a mudbank, as long as a canoe, and you take it for a fallen log furred with moss until it breathes. Then the head comes up off the mud, broad and flat as a spade, with two small eyes on top of it, and the mouth opens just enough to show teeth. A heavy, rank, musky smell crosses the water. The animal does not get up. It watches the canoe go by, and the paddler in front of you stops talking.

# Dossier {#dossier}

The Margrush is the great ambush predator of the swamp forests of [[place-tzumanotunrgn|Tz'uma No'tun]]: a low, heavy, short-legged hunter seven to eight feet long and about three hundred pounds, with a leathery, wrinkled hide patched with coarse dark fur, a broad flat head and jaws that crush bone. It lies up in the cypress swamps and the black-water marshes and waits by the water for deer, pigs, waterfowl, alligators and men. Nearly all that the K'ich'chik know of it comes from the scouts and border garrisons who face the Ch'aqun across the swamps, and it is one of the reasons those garrisons count the swamps as impassable.

## Presentation

The margrush lies so low that its belly brushes the ground. Its legs are short and thick, its paws broad and clawed for gripping mud and roots, and its tail long and heavy, used as a rudder in the water. The hide is gray-brown and folded at the neck and shoulders like an old man's skin, and the coarse fur grows on it in dark, bristly patches that look like moss and dead leaves. The head is wide and flat, with small rounded ears, nostrils on top of the snout and eyes set high, so that the animal can lie in shallow water with only the top of its head showing. The teeth are serrated. Every old margrush is scarred across the face and shoulders from fights over ground. It smells strongly, and the smell carries on still air.

## In the Land

Margrushes live in the swamp country of southern and eastern Tz'uma No'tun, from the piedmont valleys where the first marshes appear down to the black-water expanses of **Ne' P'uqan** and the cypress and tupelo forests along the sluggish rivers. They want water to lie in, mud to bask on, and thick cover on dry ground to sleep in, and the swamps give them all three for hundreds of miles. Each margrush holds a stretch of channel and bank a few miles long, patrols it on a regular round, and fights any other margrush that comes into it. They do not go up into the hardwood hills of the north, and the salt marshes of the coast are too open for them. In the shared hunting grounds on the western border, toward [[place-hanalxilanrgn|Ha'nal Xi'lan]], they are met at the edge of every swamp.

## Key Behaviors

A margrush hunts at night and at dusk and lies up by day in a thicket or a hollow under roots. It chooses a place where prey must come—a ford, a drinking place, the end of a game trail at the water—and lies there half-submerged or flat in the mud, motionless, for hours. When something comes within a few strides it lunges, seizes the throat or the belly, and shakes. It drags what it kills into cover and eats over several days, and it does not let anything near the carcass. It marks the edges of its ground by scoring tree trunks with its claws, by spraying musk, and by scraping leaves and mud into heaps. It keeps to its patrol routes, and an animal that knows where a margrush walks can avoid it.

## What the Border Garrisons Do

The K'ich'chik scouts who watch the swamp edge read margrush sign before anything else, because a channel with a margrush in it is a channel the scouts do not wade, and the path a margrush patrols is a path the scouts leave to it. They cross water only by daylight, in canoes, never by wading, and they do not camp within sight of a mudbank. A margrush killed on the border is a prize: its hide makes shields and sandals that do not rot in the wet, and the garrisons hold that eating its liver gives a man the animal's strength and patience, though no physician has ever found that it does anything. The few survivors of failed expeditions into Ch'aqun country speak of finding margrush skulls set up on posts at the mouths of channels. Whether these mark Ch'aqun ground, warn off strangers or honor the animal nobody outside the swamps knows.

## Signs

- Deep claw-scores on cypress and tupelo trunks at about knee height, in sets of four, renewed often.
- A heavy musky smell over still water, strongest at dusk.
- Heaps of scraped leaves and mud at intervals along a bank, each one sprayed and rank.
- A broad, flat-bellied slide on a mudbank, with splayed clawed prints on either side.
- A deer or pig carcass dragged into a thicket and half eaten, with crushed bones and no other scavenger near it.

## Combat Strategy

A margrush strikes from ambush or not at all if it can help it. It goes for the throat, the belly or a leg, clamps on, and shakes, trying to bring its victim down and drag it into the water. If the first bite does not end the fight it uses its claws, raking with the forefeet while it holds with the jaws. Against several men it fights furiously and does not give ground near its den or its kill, and a margrush defending its ground goes on fighting with wounds that would put another animal to flight. Away from its own ground and pressed, it slides into the nearest water and disappears.

## Attack Methods

### Powerful Bite

The margrush lunges with its jaws wide and closes them on the throat, the belly or a limb with force enough to crack bone. Once it has hold it shakes its whole head, tearing the wound wider and pulling its victim off his feet.

### Claw Rake

The margrush slashes with a forefoot, raking its claws down and across. The claws open long, deep cuts that bleed heavily, and a heavy rake can knock a man down or wrench a weapon out of his hand.

## Special Abilities

### Ambush Master

The margrush lies still for hours without being noticed, half-sunk in water or flat in leaf litter. A strike from hiding lands hard and nearly always lands.

### Powerful Jaws

A bitten man is held. He must tear free by main strength or be shaken and torn for as long as the jaws stay shut, and the jaws break bone and crush light armor.

### Excellent Night Vision

The margrush sees well in starlight and under the swamp canopy at night, and it hunts and fights better in the dark than its prey.

### Territorial Fury

On its own ground, at its den or over its kill, the margrush strikes harder and more surely and keeps fighting through pain and wounds.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 8-11 (1d4+7)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-13 (1d6+7)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
