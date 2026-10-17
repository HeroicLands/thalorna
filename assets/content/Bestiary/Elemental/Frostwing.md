---
shortcode: frstwng
name: {full: Frostwing, aliases: []}
type: being
subType: creature
description: "An intelligent aerial hunter of deep winter, migrating toward the coldest lands and using coordinated flight tactics to bring death from above."
tags: [elemental]
data:
  packFolder: elementals
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: elemental
  attrRollFormula:
    str: 1d6+11
    end: 1d4+10
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+10
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+6
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Icy Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Icy Talons
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Freezing Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Freezing Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 350, calc: "350"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 90
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[frstwng|Frostwing]]{float=top-left}

The longship is hauled up for the winter, and the shipwrights are working on her under a roof of sailcloth when the light goes strange. Out over the gray sea, coming in on the north wind, are three great birds, white and glittering, flying in a line like geese. They are eagles, as wide across the wings as the longship is long, and their feathers are ice: they catch the low winter sun and throw it back in splinters of color. The wind they bring is colder than the north wind. They wheel over the yard, and the snow begins to fall out of a sky that was clear a moment ago, thick and whirling, and through it you see the first of them fold its wings and dive.

# Dossier {#dossier}

The Frostwing is an ice elemental in the shape of a great eagle: a spirit of the cold manifested as a bird with a wingspan of twenty to twenty-five feet and feathers of crystal ice, which hunts from the air and travels with the deepening winter toward the coldest lands. Frostwings are intelligent, they hunt in coordinated groups, and they bring their own weather. They come every winter to the northern coast of [[place-malagna|Malagna]], the Nordmen kingdom whose shipwrights build the finest longships in the north, and they hunt there until the spring. Like every elemental, a frostwing can be destroyed in the material world and comes back, and the Malagnans say they come back angrier.

## Presentation

A frostwing is shaped like a huge, sleek eagle, built for speed, with a long wedge tail and broad, pointed wings. Its feathers are crystalline ice, white and blue and clear, and they catch light and break it into colors as the bird turns. Its eyes are pale. Its beak and talons are ice, hooked and very sharp. It flies fast and silently, and the air behind it is colder than the air round it. Snow falls where frostwings fly, out of a clear sky, and their cry is a high, ringing note like ice cracking on a lake.

## In the Land

Malagna occupies the northern [[place-nrdlndsrgn|Nordlands Region]], and its own coast faces the northern ocean; everything that leaves Malagna leaves by water. Frostwings arrive on that coast with the first hard frosts, coming in off the northern sea, and stay through the winter, ranging along the coast and up the fjords and over the hill farms. They hunt seals on the ice, seabirds, reindeer in the hills, sheep, and the men of the coast. When the spring comes they go north again, toward colder places, and nobody knows where. They roost on headlands and sea-stacks, and in a bad winter on the roof-trees of empty halls.

## Key Behaviors

Frostwings hunt by day, in groups of three to six, and they coordinate: one or two dive to drive prey into the open, the others strike from above, and they focus together on whatever is weakest. They slow their prey with their freezing breath and with snow, then strike with their talons. They are intelligent, they remember a place where they were hurt and a man who hurt them, and they understand fire and avoid it. They are social with their own kind and quarrel only over kills. When one is destroyed, it bursts into a cloud of snow and ice, and returns, after a time, with the next winter.

## What the Malagnans Do

The shipwrights of Malagna guard their craft jealously, and in winter they guard their yards: a yard has fire-pots ranged along its sheds, and a watch on the roof with a horn and a bow strung with arrows wrapped in tarred rag, because burning arrows are what drive frostwings off. A longship on the slip is roofed over with sailcloth so that the birds cannot see the men working under it. The farms of the coast keep their sheep under roofs from the first frost, and the seal-hunters go out onto the ice only in large parties, with fire. Malagnan skalds call the frostwings the north wind's hawks, and a man who has brought one down with a burning arrow has a story to tell for the rest of his life.

## Signs

- Snow falling from a clear sky along one stretch of coast.
- Seals and sheep found dead and frozen hard, with deep talon wounds in the back.
- Great feathers of clear ice, as long as a man's arm, lying on the snow and slowly melting.
- A high, ringing cry like lake ice cracking, from the sky.
- A line of white birds far out over the sea in the first week of hard frost.

## Combat Strategy

Frostwings fight from the air. They dive, strike with their talons and climb away before anyone can answer. They breathe freezing air to stiffen and trap their prey, throw ice from the air, and call down a blizzard to blind their enemies. They focus on one target at a time and work together to drive it into the open. Fire is what they fear, above all burning arrows; a frostwing hit by fire screams and climbs and often does not return to the fight.

## Attack Methods

### Icy Talons

The frostwing dives and strikes with its frozen talons. The wounds are deep and the cold goes into them, and frostwing wounds heal slowly and leave patches of numbness.

### Freezing Breath

It breathes a cone of bitter, glittering air that freezes what it touches, stiffening and half freezing a victim so that its companions can strike.

## Special Abilities

### Ice Shard Barrage

It makes ice form in the air round it and hurls it at its enemies in a hail of shards that cut and chill.

### Aerial Mastery

In open air its speed and agility are beyond anything that walks.

### Freezing Aura

The air round it is bitterly cold, and movement near it is slow and hard.

### Cold Resistance

Cold and ice do not harm it. Fire and heat are the only things that do.

### Localized Blizzard

It calls a blizzard round itself, near-blinding snow and fierce wind, strongest in cold weather and over water.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 11-14 (1d4+10)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 15-18 (1d4+14)

- **Perception:** 11-14 (1d4+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 9-12 (1d4+8)
