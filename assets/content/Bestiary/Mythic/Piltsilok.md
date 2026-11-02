---
shortcode: threader
name: {full: "P'iltsilok", en: [The Threader]}
type: being
subType: creature
description: "A slow, pale thing of the Sick Forest, part beast and part fungus, that creeps to the warmest sleeper in a camp and threads him to the ground before morning."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: sohl-none-icon-mushroomgills
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+12
    end: 2d6+16
    dex: 1d4+4
    agl: 1d4+2
    per: 1d6+6
    snt: 1d6+10
    aur: 1d6+10
    wil: 1d6+14
    rea: 1d4+1
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 23}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 3}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 95}}
    - name: Threads
      type: skill
      system:
        shortcode: threads
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: threads
          name: Threads
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 0, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, entangle: true}
    - name: Smother
      type: skill
      system:
        shortcode: smother
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: smother
          name: Smother
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, envelop: true}
  system:
    body:
      structure:
        zones:
          - {name: Mound, shortcode: moundzone, probWeight: 8}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Base, shortcode: basezone, probWeight: 2}
        parts:
          - name: Mound
            shortcode: moundpart
            bodyZoneCode: moundzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Gills
            shortcode: gillspart
            bodyZoneCode: moundzone
            roles: [vital]
            canHoldItem: false
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Root Mat
            shortcode: matpart
            bodyZoneCode: basezone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Mound
            shortcode: moundloc
            bodyPartCode: moundpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 1
            probWeight: 10
            protectionBase: &a1 {blunt: 6, edged: 2, piercing: 8, fire: 0}
          - name: Gills
            shortcode: gillsloc
            bodyPartCode: gillspart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 3, fire: 0}
          - name: Left Arm
            shortcode: larmloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
          - name: Right Arm
            shortcode: rarmloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
          - name: Root Mat
            shortcode: matloc
            bodyPartCode: matpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: *a1
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.25
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 10
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

The fire has burned down to red, and the man on watch is asleep sitting up. You wake, and you do not know why. It is very quiet. Beside the embers, where the youngest of the party lay down, there is a low pale mound that was not there at dusk, soft-looking and faintly ribbed, like a mushroom cap the size of a crouching man. It is breathing, slowly, with a sound like wind in a reed bed. Two long pale arms reach out from under it, as thin as rope, and from the end of each a fan of white threads lies over the sleeper's hands and face, fine as cobweb, already pressed into the forest floor around him. He is smiling.

# Dossier {#dossier}

The p'iltsilok is the Threader of the returners' accounts, one of the things of [[place-sickforest|the Sick Forest]] that they describe as part animal and part fungus, slow, and very hard to kill. It is a pale mound that creeps along the forest floor on a mat of roots, and it comes by night to the warmest sleeper in a camp and lays its threads over him. Its name in the priests' tongue means full of threads.

## Presentation

A p'iltsilok is about the size of a man crouching, a low dome of soft, pale gray flesh, damp and cool, with fine ribs running down its sides. It has no head and no eyes. Underneath it, against the ground, are gills like the underside of a great mushroom, wet and darker, and when they move it breathes, slowly, with a sound like wind in reeds. From under the dome come two long arms, pale and thin as rope, which it can stretch to three times a man's height, and each ends in a fan of white threads. It moves on a mat of thick pale roots that pulls it along the forest floor a little faster than a man can crawl. Cut, it bleeds a little gray sap and a little blood together.

## In the Land

It lives on the floor of the Sick Forest, among the great fungi and the rot, and it is commonest where the mat of rotting leaves is deepest and the air is stillest. It lies under the great domes and stalks in the day, where it looks like one more of them. It does not come out into open ground.

## Key Behaviors

By day a p'iltsilok lies still among the fungi. At night it moves toward warmth, slowly and without a sound, and it chooses the warmest thing it can find, which in a camp is a sleeping man. It lays its threads over him, starting at the hands and the face, and the threads numb whatever they touch, so that the sleeper does not wake and only sleeps more deeply. Through the night the threads root into the ground around him and into his skin. It feeds on him slowly over days, and it stays with him the whole time.

## How the Day Ends

A party that kept no watch in the Sick Forest wakes in the morning one man short of awake. He lies where he lay down, smiling, with a pale mound beside him and a web of white threads holding him to the forest floor, rooted into the ground and into the backs of his hands. Shaking him does not wake him. Cutting him free takes the whole morning, because each thread has to be cut where it enters the ground and drawn carefully from the skin, and a thread left in grows. Burning the threads burns the man. When he is free he wakes in an hour or two, feverish and weak, and pulls fine white threads out of his skin for weeks after. The party carries him, or waits for him, and either way the day's walk is lost.

## What the Returners Do

A party keeps a watch with a burning torch through every night it spends in the forest and wakes each sleeper by touch at every change of watch. Returners carry a short knife with a hooked tip for cutting threads, and burn all their clothes at the forest's edge.

A p'iltsilok can be burned, and the returners advise against it near a camp. It burns very slowly, like wet wood, and its smoke is sweet and thick with spores.

## Signs

- A pale dome among the fungi that stands a little apart from the others, and is breathing.
- A track of crushed rot and pale root-threads across the forest floor, a pace wide.
- Fine white threads lying over anything left out overnight.
- A sweet, wet smell, like bread rising, close to the ground.
- A sleeper who does not wake at a touch.

## Combat Strategy

The p'iltsilok is too slow to catch anything awake and does not try. Disturbed, it throws its threads over whatever is nearest, numbing and holding, and draws itself onto anything it has caught to smother it under its weight. It does not flee. Cut pieces of it keep moving, crawl away into the rot and root there, and blows that would kill any beast leave it breathing.

## Attack Methods

### Threads

The arms whip out and a fan of threads falls over a man's hands, face or legs. The threads cling and numb, and a man caught by them is slowed and weakened.

### Smother

It drags itself onto what it has caught and settles over it, cold and damp, until it stops moving.

## Special Abilities

### Numbing Threads

Its threads numb whatever they touch, and a sleeper under them sinks into a deeper sleep that he cannot be shaken out of while they lie on him. Cut free, he wakes in an hour or two.

### Very Hard to Kill

It has no head or heart to strike, and only the gills underneath take real harm. Cuts and blows hardly trouble it, thrusts go into it and come out again, and pieces cut from it go on living.

### Spore Smoke

It burns, slowly, and its smoke is thick with spores. Breathing it sickens a man as the spore-clouds of the great fungi do.

## Attributes

Strength
: 13-18 (1d6+12)

Endurance
: 18-28 (2d6+16)

Dexterity
: 5-8 (1d4+4)

Agility
: 3-6 (1d4+2)

Perception
: 7-12 (1d6+6)

Scent
: 11-16 (1d6+10)

Aura
: 11-16 (1d6+10)

Will
: 15-20 (1d6+14)

Reasoning
: 2-5 (1d4+1)

Creativity
: 2-5 (1d4+1)

## See Also

[[place-sickforest|The Sick Forest]]
: the rotting forest where it lives

[[place-xelemixbalrgn|Shelem Ish'bal Region]]
: the waste
