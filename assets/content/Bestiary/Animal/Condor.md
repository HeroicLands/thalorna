---
shortcode: condor
name: {full: Condor, aliases: []}
type: being
subType: creature
description: "A massive soaring vulture with a ten-foot wingspan, sacred to highland faith, spotting carrion from staggering altitudes above the western peaks."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-vulture, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+4
    end: 1d6+8
    dex: 1d4+7
    agl: 1d6+12
    per: 1d6+13
    aur: 1d6+8
    wil: 1d4+6
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Beak Tear
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Tear
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Wing Buffet
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 47
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Wing Buffet
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 25, calc: "25"}
      reachBase: 0
      bodyScaleBase: 0.75
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[condor|Condor]]{float=top-left}

High on the cliff, a hundred feet above the ledge you are climbing toward, a black shape launches off the rock and falls a long way before its wings open. They span more than a man can stretch his arms, and the white panels on them flash as it banks. The bare, wrinkled red head turns to look down at you, and the bird slides away along the face of the mountain without a wingbeat.

# Dossier {#dossier}

The Condor is the great vulture of the high mountains, twenty to thirty-three pounds with a wingspan over ten feet. It nests on the cliff ledges and in the high canyons above [[place-ixilankulrgn|Ish'ilankul Region]] and in the snow-crowned ranges of [[place-ixbaltzakurgn|Ish'bal Tsa'ku Region]]. It eats carrion and finds it from a great height. In the [[affiliation-itzanpnthn|Itsani Pantheon]] faith it is the messenger between the world and the sun, its feathers are sacred, and killing a condor is punished by death.

## Presentation

A huge bird, black and glossy, with white panels on the upper wings seen in flight. The head and neck are bare, wrinkled and dark red to purplish black, with a fleshy comb on the male's crown. A white ruff circles the base of the neck. The beak is large and hooked. The feet are flat with blunt claws made for walking and not for gripping. The eyes are sharp, reddish in the male. The wings, over ten feet across, are held rigid in flight.

## In the Land

Condors nest on the cliff ledges and in the high canyons of the mountains above Ish'ilankul and in the snow-crowned ranges of Ish'bal Tsa'ku. A pair uses the same ledge for decades. The birds roost in groups on the cliff and fly out at mid-morning, when the sun has warmed the rock and the air rises along the slope, and they sail for hours on a rising wind without a wingbeat. They descend to the lower valleys for carrion after a storm or a battle.

## Key Behaviors

Condors roost together on cliff ledges and feed in groups at a carcass in order of rank, the largest males first. They do not kill. A bird that has found a carcass descends in spirals, and the others come to it from across the mountain range. Pairs are monogamous and rear a single chick every year or two, so the populations are small and the individual birds are known to the highland communities over generations. The same roost is used for centuries, and feathers and bones from it are sacred and contested.

## What the Priests Do

In the faith of the Itsani a condor is the messenger between the world and the sun. The temples keep its feathers on altars and in the headdresses of high priests, and a condor is never killed, on pain of the death of the killer. A dead condor found on a mountain is carried to a temple by whoever finds it, with a prayer, and a feast is held. The mountain villages lay their dead out on high rock for the birds, and a body the condors leave alone is read as a bad sign. The weavers of the highlands work condor patterns into ceremonial cloth.

## Signs

- A huge black bird with white wing-patches, turning on a rising wind without a beat of its wings.
- A line of birds dropping in slow circles toward one slope, and others joining from every side.
- A long, white-streaked ledge on a cliff face above a nest, with bones below.
- A black quill, as long as a man's forearm, lying on a track.
- A broad shadow that crosses a village street at noon and is gone.

## Combat Strategy

The condor is not a combative animal. Its beak can deliver a powerful bite capable of tearing through tough hide, but it uses this ability for feeding, not fighting. At carcasses, condors establish dominance through threat displays — spreading wings, hissing, and lunging — rather than physical combat. If threatened by a predator or human, the condor's primary defense is simply to take flight, and once airborne it is beyond the reach of any ground-based threat. A cornered condor that cannot take flight will strike with its beak and buffet with its wings, but this is desperation, not strategy.

## Attack Methods

### Beak Tear

The heavy, hooked beak delivers a tearing bite capable of ripping through tough animal hide. Against human flesh, the beak can cause deep, ragged wounds. This is a feeding adaptation pressed into defensive service.

### Wing Buffet

The enormous wings, driven by powerful flight muscles, can deliver stunning blows at close range. The leading edge of the wing is bony and can bruise or disorient an attacker.

## Special Abilities

### Thermal Mastery

The condor is the supreme soaring bird — capable of riding thermal updrafts for hours without a single wingbeat, covering vast distances with almost no energy expenditure. It can ascend to altitudes where the air is too thin for most birds, surveying enormous swaths of territory from heights that render it invisible to ground observers. This ability makes the condor an unparalleled aerial scout and explains its association with the upper world in highland religion.

### Carrion Detection

The condor can detect a carcass from miles away at altitude, using eyesight refined for detecting the subtle signs of death on a landscape — the stillness of a fallen animal, the congregation of smaller scavengers, the dark stain of blood on rock. This ability, combined with its soaring range, means that a condor's descent is itself a signal — to other condors, to ground scavengers, and to highland watchers — that something has died.

### Sacred Immunity

In the high country, the condor's protected religious status creates a practical constraint identical to the crane's or the peacock's elsewhere: harming a condor is a capital religious offense. Condor roosting sites are sacred ground, condor feathers found naturally are the property of the temple, and interference with nesting condors can provoke armed intervention from temple guardians. A condor that establishes a roost on a building, bridge, or fortification creates an immediate jurisdictional crisis.

## Attributes

- **Strength:** 5-8 (1d4+4) — Modest; beak is powerful for feeding but the bird is not built for combat
- **Endurance:** 9-14 (1d6+8) — Extraordinary soaring stamina; can remain aloft for an entire day
- **Dexterity:** 8-11 (1d4+7) — Adequate in air; clumsy on ground
- **Agility:** 13-18 (1d6+12) — Supreme aerial agility; thermal navigation is an art form
- **Perception:** 14-19 (1d6+13) — Extraordinary high-altitude vision; detects carcasses from miles
- **Aura:** 9-14 (1d6+8) — Sacred messenger of the upper world; deep religious significance
- **Will:** 7-10 (1d4+6) — Patient and persistent; not aggressive
- **Reasoning:** 5-8 (1d4+4) — Social intelligence within feeding hierarchy
- **Creativity:** 4-7 (1d4+3) — Limited
