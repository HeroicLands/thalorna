---
shortcode: dsksft
name: {full: Dusk Swift, aliases: [Olithuri]}
type: being
subType: creature
description: "A sparrow-sized, slate-backed bird that feeds in the forest by day and flies home to the village gardens in a single streaming flock as the light fails."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: crowdive, templatePriority: 0, culture: kaliharanclt}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4
    end: 1d4+2
    agl: 1d6+8
    per: 1d6+17
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d4+4
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 1}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 5}}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 30
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -12, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 36
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -11, aspect: piercing}
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
          - {name: Body, shortcode: torsozone, probWeight: 1}
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
            bodyZoneCode: headzone
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
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -6, edged: -7, piercing: -8, fire: -6}
      weight: {base: 1, calc: "1"}
      reachBase: 0
      bodyScaleBase: 0.15
      personalFatigue: enc + 5
    currentMoveMedium: aerial
    movementProfiles:
      - medium: aerial
        feetPerRound: 240
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 10
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The light on the terrace wall goes from gold to grey, and a thread of dark specks comes over the ridge. It lengthens, thickens and pours down toward the village gardens in a single streaming flock, tight, fast and silent, and wheels once over the rooftops. Then it drops into the garden trees all at once and the leaves are full of small slate-backed birds with white throats.

# Dossier {#dossier}

The Dusk Swift, _olithuri_ in [[skill-kalihrlng|Kalihári]], "star wind", for the flock that comes home as the first stars show, is a sparrow-sized bird with a slate back and a white throat. It feeds in the forest by day and flies home to the village gardens in a single streaming flock as the light fails. It is found in gardens, on terraces and at the forest edge across the island, and it roosts in the gardens of the lowlands and the valleys. The flock holds its shape, and a household sees it come over the same ridge at the same hour for years. A single bird is no danger to anyone. Only a flock in numbers is a hazard, and then only to a face.

## Presentation

A small slender-winged bird with a slate back, pale underparts and a white throat. It flies fast and level in a flock, with quick, shallow wingbeats, and on a branch it sits upright and still. The voice is a thin, dry ticking in flight and a murmur at roost.

## In the Land

Dusk Swifts feed in the forest by day, over the canopy and along the terrace margins, and roost at night in the gardens of the lowland villages and the valleys. A flock uses the same ridge to come home and the same trees to roost in. They do not nest in the high forest and they are not met on the open shore.

## Key Behaviors

Through the day the birds scatter to feed on the insects of the forest. In the last of the light each flock gathers at a landmark ridge and flies down to its gardens as one body, so tight that it shows as a single dark streamer. A flock that is disturbed on the way home thickens and swerves round the danger, and a flock that is attacked in numbers goes for the eyes.

## What the Islanders Do

The evening return is the standard subject of the sílhari of a household: an hour at dusk is spent watching the flock come in, and the day's count is written in the manual. A weak or old person's small part is often the household's olithuri count, which needs no strength and is kept for life. A flock that comes late, comes in smaller or does not come at all is recorded, and the sanctuaries collect the households' counts. No cause is named and none is needed.

## Signs

- A dark thread of small birds coming over a ridge at dusk.
- A garden tree full of ticking and murmuring at nightfall.
- A white-throated bird on a post, upright and still, watching the sky.
- Fine droppings under the same roost trees every morning.

## Combat Strategy

A Dusk Swift avoids people. A flock that is trapped or attacked in numbers goes for the face and the eyes together, and goes on until the threat withdraws. The individual hits are trivial, and a flock is a nuisance and a distraction more than a danger.

## Attack Methods

### Talon

A bird that grips a face or a hand with its feet scratches the skin and nothing more.

### Beak

A quick peck at an eye or an ear. A flock makes many at once.

## Special Abilities

### Flock Cohesion

A flock moves as one body and turns on a single signal, so that a hundred birds fly round an obstacle together. Against a flock a target cannot defend every side at once.

### Dusk Return

The flock returns to the same roost at the same hour, and the island's households have built a habit of attention around it.

## Attributes

- **Strength:** 1-4 (1d4)

- **Endurance:** 3-6 (1d4+2)

- **Agility:** 9-14 (1d6+8)

- **Perception:** 18-23 (1d6+17)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 3-6 (1d4+2)

- **Will:** 5-8 (1d4+4)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
