---
shortcode: chmpnz
name: {full: Chimpanzee, aliases: []}
type: being
subType: creature
description: "A fiercely intelligent primate capable of calculated, grudge-driven violence, remembering faces and grievances with a cunning that outmatches most predators."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-monkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d6+9
    cre: 1d6+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Canine Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Canine Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Pummeling Strike
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Pummeling Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
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
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 120, calc: "120"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 35
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[chmpnz|Chimpanzee]]{float=top-left}

Overhead the canopy is shaking. A single hoot starts up, rises into a scream and is taken up from three sides, and then the branches are thrashing all around you. A dark shape drops to a lower limb with a long arm hooked over it, and then another, and another. Their faces are bare and wrinkled and entirely clear. They have taken your measure, and one of the males begins to beat his chest with a hand.

# Dossier {#dossier}

The Chimpanzee is the forest ape, four to five and a half feet tall and ninety to two hundred pounds, living in communities of fifteen to eighty in the rain-forest of the [[place-cntrlrnfrsts|Central Rainforests]]. It is clever, remembers faces and grievances, and plans its attacks. Communities defend their ground against their neighbors and raid across the border. People who cross a community's range meet the same coalition of males that guards it against other chimpanzees.

## Presentation

A powerful ape with arms so long that the span from hand to hand is as great as its height. The body is compact and heavily muscled across the shoulders, chest and back. The head is large, with a heavy brow ridge, small ears and a bare face of dark brown or black that is expressive. The mouth is wide, with canines that show when the animal threatens. The rest of the body is covered in dark hair, which flecks with age in a mature male. The knuckles are callused for walking. Every adult carries scars from fights.

## In the Land

Chimpanzee communities live in the rain-forest of the Central Rainforests, where a group holds a territory of several square miles of fruit trees, river bank and sleeping groves. A community feeds in the canopy by day and builds a nest of bent branches each night, in a different tree. Neighboring communities meet at the border of their ranges and fight. The Rainforests are large enough to hold dozens of groups, and the tribes do not know how many.

## Key Behaviors

Communities are ordered by rank, held by display, alliance and violence, with adult males at the core. Females keep a hierarchy of their own. Neighboring groups fight over their borders, patrolling them and sometimes killing every member of a rival group they catch. Inside a community mothers and young stay close, alliances form and dissolve, and animals grieve their dead. Chimpanzees use tools: sharpened sticks, stones for nuts and moss to carry water. They hunt monkeys together, and they fear fire and people, a fear the young learn.

## What the Forest Tribes Do

The forest tribes keep their camps and gardens away from the fruit trees a community feeds in. They do not walk alone, and they walk in numbers, with spears and drums, when a community's range lies across the track to the river. Gardens are fenced with thorn and watched from platforms by day. A tribe that loses a child blames a chimpanzee, and a hunt for the offender follows. The [Sengala]{.name data-type="affiliation/polity"} trade-parties that come in from the savanna edge are warned of the territories by the first village they reach, and they cross by night or in strength.

## Signs

- A great hooting and screaming through the canopy that rises, passes and falls away.
- Nests of bent branches high in a tree, the leaves of each browning at the edges.
- Half-eaten fruit, dropped from the crown of a fig-tree onto the path below.
- Short sticks stripped of leaves lying beside a termite hill, with its holes freshly opened.
- A stone or a heavy branch left on the ground at the base of a fruit tree.

## Combat Strategy

Chimpanzees rarely engage in solitary combat if alternatives exist. When they do fight, they fight with calculated ferocity. A single chimp may flee from a lone human if uncertain of the outcome, but a group will coordinate attacks: some creating distraction while others attack from behind or above, some throwing objects while others close for combat. They target vulnerable areas: eyes, face, genitals, and extremities. Once they have disabled an opponent’s ability to defend, they will inflict maximum damage through biting and striking. They have learned from experience and will use terrain to advantage, fighting from trees if possible, using elevation to launch attacks. Their intelligence allows them to anticipate human reactions and exploit weaknesses.

## Attack Methods

### Bite with Canine Teeth

The chimpanzee lunges and attempts to bite, targeting the face, shoulder, or limb with terrible force. The massive canine teeth can penetrate muscle, crack bone, and cause catastrophic damage. A bite to the face can blind, disfigure, or tear away tissue. Bites to the neck or extremities can sever arteries and cause death through blood loss. The bite is followed by violent shaking to increase damage.

### Grappling and Throwing

Using its powerful arms, the chimp attempts to seize and control an opponent, then either throw them (causing impact damage) or pin them for additional attacks. A human thrown by a chimpanzee can suffer serious injury from impact. A pinned human is helpless against additional bites and strikes.

### Projectile Throwing

Chimpanzees will hurl rocks, sticks, fruit husks, and other objects with surprising accuracy and force. While individual projectiles cause less damage than close combat, a barrage of objects can demoralize opponents and create opportunities for closer attacks. Multiple chimpanzees throwing simultaneously can cover an opponent effectively.

### Pummeling and Striking

Using fists, the chimp delivers powerful blows, typically to the torso, face, or extremities. These strikes are less devastating than bites but serve to disable and disorient opponents.

## Special Abilities

### Brutal Intelligence and Coordination

Chimpanzees are not merely intelligent animals—they are calculating predators capable of complex planning, deception, and coordination. A group of chimpanzees will execute elaborate ambushes, coordinate attacks, and communicate during combat. They remember individual humans and hold grudges, planning attacks that account for known human capabilities. This intelligence makes them far more dangerous than animals relying on instinct alone.

### Preternatural Strength and Climbing Ability

A chimpanzee’s strength exceeds human capability by a factor of three to five, allowing them to move through forest canopy with effortless grace and inflict damage that seems impossible given their size. They can ascend vertical surfaces, swing from branch to branch with one arm while carrying additional weight, and exert force that humans cannot resist. In the trees this strength tells most—a person fighting a chimpanzee on a branch is badly placed.

### Fearlessness and Pain Tolerance

Once committed to combat, a chimpanzee fights with suicidal determination. Pain and injury do not cause retreat—injured chimpanzees often become more aggressive. This fearlessness, combined with their physical capability, makes them extraordinarily dangerous opponents that do not break from combat easily.

### Organized Group Tactics

Multiple chimpanzees hunting together employ tactics suggesting military training. They create numerical superiority, attack from multiple angles, use distraction and misdirection, and focus force against the weakest opponent to eliminate threats systematically. A group of five or more chimpanzees can overwhelm significantly larger human forces through superior coordination.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 10-15 (1d6+9)

Dexterity
: 12-17 (1d6+11)

Agility
: 13-18 (1d6+12)

Perception
: 11-16 (1d6+10)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Reasoning
: 10-15 (1d6+9)

Creativity
: 9-14 (1d6+8)
