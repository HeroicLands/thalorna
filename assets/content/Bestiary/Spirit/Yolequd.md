---
shortcode: yolequd
name: {full: Yolequd, aliases: [The Salt-Dust Spirit]}
type: being
subType: creature
description: "A salt-dust spirit of the dry lake bed that rises as a white column on windless afternoons and strips skin and sight from what it crosses."
tags: [spirit, image-needed]
data:
  packFolder: spirit
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    str: 1d6+4
    end: 1d6+6
    dex: 1d4+13
    agl: 1d6+14
    per: 1d6+10
    aur: 1d4+13
    wil: 1d4+9
    rea: 1d6+6
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Scouring Touch
      type: skill
      system:
        shortcode: touch
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: touch
          name: Scouring Touch
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
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
          - {name: Core, shortcode: corezone, probWeight: 1}
          - {name: Shroud, shortcode: shroudzone, probWeight: 2}
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles: [vital, core]
            canHoldItem: false
            probWeight: 10
          - name: Shroud
            shortcode: shroudpart
            bodyZoneCode: shroudzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Shroud
            shortcode: shroudloc
            bodyPartCode: shroudpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The air is dead still. No breath of wind has stirred the salt since dawn, and the white flat runs out to the horizon like a plate. Then, a half mile off, a thread of dust lifts from the surface, thin as a hair, standing straight up. It thickens as you watch. It becomes a column the color of bone, then a column taller than a tower, whirling, silent, drawing the white up into itself in a spreading skirt, and still the air around you does not move. The hair on your arms stands up. Your camel's coat crackles, and a blue spark jumps between its ear and your hand. The column is leaning toward you, and it makes no more sound than a whisper.

# Dossier {#dossier}

The Yolequd is a spirit of the salt: a column of whirling grit that rises on windless afternoons from the dry lake bed of [[place-ewod|Ewod]] and sweeps across the flat, stripping skin from whatever it catches and blinding what it does not kill. It is not a wind. The air around it is still, and it moves against the breeze if there is one. The tribes of the Hosikor call it by the word for salt and the suffix of a doer, "the salt-doer", and they tell their children that it is the thirst of the lake, walking.

It is not one of the hunters of the blood-fields, and the tribes do not treat it as one. Ewod is no blood-field: the lake was left by the people who lived beside it, and they died elsewhere. The [[lore-bloodfield|doctrine of the blood-fields]] describes ground made by slaughter and the predator spirits that gather where the unreceived dead are. The Yolequd gathers nowhere. It is a presence of the salt itself, native to the one place where the lake's water went, and what binds it there no people of the region claims to know.

## Presentation

At a distance the Yolequd is a tall, slender column of fine white dust, ten to thirty times a man's height, narrow at the base and spreading near the top. Close to, it is a rotating wall of salt crystals so small they pass for smoke, with a bright bluish glitter at the heart where the grains strike each other, and a dry rushing sound like a thousand fingernails drawn over linen. It leans. It tracks. A dust-devil of the ordinary kind goes where the wind drives it, and the Yolequd goes toward living creatures.

The column has a hollow center. Those who have been drawn into one and lived describe a still, white room with a floor of salt and no ceiling, and a sensation of being watched by something with no face.

## In the Land

The Yolequd keeps to the white flat of Ewod and a belt of dune around its edge. It rises in the middle of the day, from the hottest hour until the light begins to slant, and in the still season, in late spring before the storms and in early autumn. It does not move far off the salt. A traveler on the stone or the sand beyond the old shoreline is outside its reach, though on a calm afternoon the column may follow him to the first dune.

It is most active over the places where the brine lies closest to the surface, the old canals and the deep center. The slab-cutters of the nearest wells will not work these, and say that the Yolequd sits on top of the last of the water, and it keeps the lake's secret as a miser keeps a purse.

## Key Behaviors

A Yolequd is aware of living things on the flat and moves toward them at a walking pace. It circles a solitary person, a small party or a string of camels, closing the spiral until it touches, and then it passes over them. A creature in the column is scoured by grit moving faster than a thrown stone: skin is stripped from the exposed face and hands, the eyes are scoured white, and the breath fills with salt. Those who lie down and cover their heads in a hollow sometimes come through with their sight, and those who run in the open are caught in the center.

It does not feed. It does not kill for any purpose the tribes can find. Many things it passes over survive, and it often gives up and falls apart a few miles from the place it rose, leaving a long white scar on the flat and a rim of bones.

## What the Tribes Do

The slab-cutters of the nearest wells work the salt in the morning and are off the flat by noon. They do not sleep out on it. A cutter caught on the flat at midday lies down behind a kneeling camel with a wet cloth over his face and his back to the column, and a team that carries water carries it in skins sewn flat, so that it can be poured over the head. Every cutting party wears a veil of felt, and every cutter's eyes are rimmed with soot and tallow against the glare.

The tribes do not offer to the Yolequd and do not speak to it. Their account is that the water of the lake went down into the ground to find its people, and the Yolequd is the part of the lake that stayed. They ask visitors not to dig on the flat, not to carry brine out of it in jars and not to take a slab from the middle, and they say that the visitor who does will meet the thirst.

## Signs

- A thread of dust standing straight up in dead air, far across the flat.
- Blue sparks leaping from a camel's coat or a rider's hair, and a metallic taste on the tongue.
- Camels that kneel and refuse to rise, and dogs that crawl.
- A long white scar across the salt, straight as a rule, with the crust ground to a powder.
- Rime-white skin and clouded, weeping eyes on a returning slab-cutter.
- A hush: no fly, no insect, no wind, and the silence broken only by the sound of a rushing that comes from nowhere.

## Combat Strategy

The Yolequd attacks by passing over. It does not strike, grapple or bite. It turns the grit it carries against whatever is within its reach, and the harm is the scouring of skin and eyes. It cannot be struck by weapons, since there is nothing in it to cut, but it can be broken up by strong disruption: a hard rain, a gale, a body of water thrown into the air.

The only defenses are cover and water. A person in a hollow behind a kneeling animal, wrapped in wet cloth and lying face down, takes a fraction of the harm. A party that runs for the dune is likely to reach it. A party that stands and fights loses its sight within a minute.

## Attack Methods

### Scouring Touch

The primary attack. The column passes over a creature and the grit strips skin, sears the eyes and fills the nose and throat with crystal. The damage is greatest to exposed skin and least to clothing, leather and wet cloth.

## Special Abilities

### Salt Blindness

A creature caught in the column without eye protection is blinded. Sight returns in days with rest and clean water, or does not return if the eyes were open for long.

### Static Crown

The air around a Yolequd carries a charge. Metal sparks and hair stands on end, and a sleeping camp near one wakes to a crackle in the blankets.

### Spirit Form

The Yolequd is a spirit made visible in dust. Blades pass through it, and it is dispersed by a flood of fresh water or by the end of the still air. It does not cross onto ground that is not salt.

## Attributes

- **Strength:** 5-10 (1d6+4)

- **Endurance:** 7-12 (1d6+6)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 14-17 (1d4+13)

- **Will:** 10-13 (1d4+9)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 10-13 (1d4+9)

## A Hook

A crew of six slab-cutters came off the flat at noon, roped in a line, blind, and holding one another by the belts. The elders say the Yolequd has been rising for a week on a single spot in the middle of the flat, and rising earlier each day. The crew will not say what they saw in the column. They say only that it had a door in it. A buyer in the market-camp at Qìso will pay for whatever lies at the place, and the tribe wants somebody to go out to the spot before the next calm day, with a wet veil and a good guide.
