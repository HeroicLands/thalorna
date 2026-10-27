---
shortcode: pterosau
name: {full: Pterosaur, aliases: []}
type: being
subType: creature
description: "An ancient flying reptile with a wingspan reaching thirty feet, haunting untamed coastlines and deep valleys to snatch fish and unwary travelers."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+15
    end: 1d6+13
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Diving Claw Grab
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Diving Claw Grab
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak Strike
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
          name: Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 1
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
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.43
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
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[pterosau|Pterosaur]]{float=top-left}

The cliff above the beach is white with droppings, and a rank, fishy smell comes down from it. Then the ledges seem to unfold. A shape with a wingspan wider than your house-front opens leathery, veined wings against the sky and drops off the rock without a flap. A long, pointed beak full of curved teeth swings toward you, and the narrow head turns, a tall crest behind it. Another one launches, and another.

# Dossier {#dossier}

The Pterosaur is the great flying reptile of the sea cliffs and deep valleys, with a wingspan up to thirty feet on a thin, lean body. It nests in colonies on the headlands of the western fjord coast of [[place-kelwanukrgn|Kelwanuk]], where cedar rain-forest runs down to the cliffs, and is rarely met in settled land. It hunts fish, small mammals and anything else it can seize, from the air.

## Presentation

The wings are the first thing seen: vast, leathery and translucent, veined like parchment and stretched over a long fourth finger bone. The body beneath is lean and compact, scaled from pale gray to reddish brown, patterned to blend with rock or water. The head is dominated by a long, pointed snout set with sharp, backward-pointing teeth to hold struggling fish. Some kinds carry a crest or frill on the skull that serves in display and as a rudder. The tail, where there is one, steers.

## In the Land

Pterosaurs nest on the sea cliffs and in the deep valleys of the western fjord coast of Kelwanuk, where cedar rain-forest runs down to the water and the cliffs face the open ocean. A colony of a dozen or more roosts on one headland and uses the updraft along the face to glide out over the sea. They fish at the surface, scavenge on the shore and range far inland along the rivers.

## Key Behaviors

Pterosaurs hunt from the air and seldom come down, except at carrion or to nest. They are active by day and live in loose colonies on high cliffs, where the rising air gives steady lift. Their appetites are huge, and a bird must take a great deal of fish, small mammals or anything else to feed. In the cooler regions they migrate with the fish runs. They remember good hunting grounds and notice patterns.

## What the Coast People Do

The coast villages keep their boats drawn up on the beaches under the cliffs only in daylight and do not spread fish to dry on open ground. Children are kept in at dusk in the nesting season. A fisherman on the water watches the cliff-tops for the long wings and goes in. A pterosaur carries off a dog, a goat or a small child, and the villages kill them when they can with nets and long spears. The bones are light and strong and are worked into frames and fishing-floats.

## Signs

- A vast shadow with a narrow, angular outline sliding over the water.
- A shrieking from a headland, harsh and echoing, in a colony at dusk.
- Fish remains scattered on a cliff ledge, with white streaks down the rock beneath it.
- A line of clawed, three-fingered prints on a mud-flat, widely spaced.
- A fish-drying rack on the beach flung down with the catch gone.

## Combat Strategy

The pterosaur's dominance lies entirely in the air, where it uses superior maneuverability and speed to dictate combat. It dives at targets with terrifying velocity, attempting to snatch them with claws and lift them skyward, removing them from solid ground and advantage. If a pterosaur is forced to land or combat occurs on the ground, it becomes clumsy and vulnerable, awkwardly attempting to launch itself back into flight or using its snout and claws as clumsy melee weapons. A grounded pterosaur is desperate and dangerous but greatly diminished in fighting power. The creature will always attempt to return to flight when threatened on the ground.

## Attack Methods

### Diving Claw Grab

The pterosaur folds its wings and plummets from height, building tremendous speed, and extends its powerful taloned feet to seize prey. If the grab succeeds, the creature attempts to ascend with the prey clutched in its claws, lifting it away from solid ground. These claws can inflict severe lacerations and impale even armored targets.

### Beak Strike

Using its elongated snout like a spear, the pterosaur jabs with surprising speed and precision at faces, eyes, and exposed flesh. The backward-pointing teeth are designed to grip prey and inflict puncture wounds, though the beak's relative weakness limits damage compared to the claw attack.

### Wing Buffet

In desperation or when grounded, the pterosaur sweeps its massive wings in a wide arc to create distance from threats. This attack can knock opponents off balance and cause impacts from the tough leading edges of the wings themselves.

## Special Abilities

### Aerial Mastery

The pterosaur is superlative in flight, capable of hovering with minimal effort, achieving tremendous velocities in dives, and executing aerial maneuvers that defy gravity. It is far more dangerous in the air than on the ground.

### Thermal Gliding

The pterosaur can rise with warm air currents, sustaining flight for extended periods with minimal muscular effort. This allows it to hunt across vast territories and migrate over impossible distances.

### Predatory Vision

The pterosaur's eyes are positioned laterally and forward-facing, providing monocular vision along each side while allowing binocular focus forward — essential for diving predators. It can spot movement from extraordinary distances and tracks small creatures with uncanny accuracy.

### Bone Hollow

The pterosaur's skeleton is hollow and very light, allowing a creature with an enormous wingspan to remain surprisingly maneuverable and light. This contributes to its grace in flight but makes it fragile to heavy impacts when grounded.

### Additional Information

Pterosaurs are most vulnerable when landing, taking off, or grounded by injury or magical effect. If immobilized on the ground for extended periods, they can die of stress or starvation, as they are incapable of efficient terrestrial hunting. Their flying technique becomes labored in high altitudes with thin air, and they are surprisingly slow swimmers despite their aquatic hunting specialization. Young pterosaurs are vulnerable to ground predators and rarely venture far from nesting cliffs until fully fledged.

## Attributes

Strength
: 16-21 (1d6+15)

Endurance
: 14-19 (1d6+13)

Dexterity
: 12-17 (1d6+11)

Agility
: 13-18 (1d6+12)

Perception
: 12-17 (1d6+11)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
