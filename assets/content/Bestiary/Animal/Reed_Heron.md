---
shortcode: rdhrn
name: {full: Reed Heron, aliases: [Lirunei]}
type: being
subType: creature
description: "A tall, pale grey wading bird with a rust stripe down the neck that stands motionless in the reed-beds of the Bowl Lake for an hour and strikes with the whole neck."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: pawprint, templatePriority: 0, culture: kaliharanclt}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d4+5
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+11
    aur: 1d6+9
    wil: 1d4+6
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 18}}
    - name: Beak Stab
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Stab
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
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
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Wing Buffet
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: blunt}
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
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 12, calc: "12"}
      reachBase: 0
      bodyScaleBase: 0.6
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The reeds at the lake's edge are still, and one of the stems is a bird. It stands in the shallows on long legs, pale grey with a rust stripe down the neck, and it has not moved for as long as you have watched. Then the neck uncoils like a whip, the long bill goes into the water, and the bird straightens with a small silver fish crosswise in its beak.

# Dossier {#dossier}

The Reed Heron, _lirunei_ in [[skill-kalihrlng|Kalihári]], "the one marked by the reed", is a tall wading bird, pale grey with a rust stripe down the neck. It stands motionless in the reeds for an hour and strikes with the whole neck. It lives in the reed-beds that form the margins of [[place-klhrlake|the Bowl Lake]], and it nests in colonies there. The colony's chorus at first light carries across the water. It is no danger to anyone who does not put a hand into a nest.

## Presentation

A tall, long-legged bird with a pale grey back, a rust stripe running down the front of a long, supple neck, and a straight bill like a dagger. In the reeds it stands with the neck folded and the bill pointed down, and is hard to tell from a stem. In flight the neck is drawn back and the legs trail.

## In the Land

Reed Herons keep to the reed margins of the lake in [[place-klhrbowl|the Great Bowl]]. They nest in colonies in the reed-beds, and feed along the shallows between the reeds and the open water. They are not met on the deep water, on the terraces below the Ring, or on the shore.

## Key Behaviors

The heron hunts by waiting. It stands in the shallows without a movement for an hour, then strikes with the whole neck at fish or frog within reach. In the nesting season the colony wakes together before dawn and calls, and the chorus carries across the water. A bird that has a nest to guard drives off anything that comes near it with its bill and its wings.

## What the Islanders Do

The lake lineages tend the reed-beds and keep the herons' nesting count as they keep their own records. A reed-bed that is over-cut is the plainest case of a part let go, and the heron's absence is how it shows. Feathers shed in the nesting are gathered and used in fletching and for the quills the scribes cut. Taking a nesting bird is a matter for the lineage's Elder.

## Signs

- A pale grey shape standing among the reed stems, with a rust line down its neck.
- A chorus of harsh calls across the water before dawn.
- Long grey feathers caught in the reeds below a nesting colony.
- Small fish and frogs left stranded on a reed mat where a strike has missed.

## Combat Strategy

A heron does not seek a fight. Disturbed, it leaves the reeds on slow wingbeats. A bird with a nest to defend stabs at the face and eyes with its bill and beats its wings at the intruder, and breaks off when the intruder withdraws.

## Attack Methods

### Beak Stab

The neck unfolds and the bill strikes at the face, the hand or the eye with the speed of a spear-thrust.

### Wing Buffet

The wings beat at the head and shoulders of an intruder at the nest, to drive it back and cover the bird's own retreat.

## Special Abilities

### Motionless Hunter

A heron standing in the reeds can hold its place for an hour. A person who walks the shallows without looking sees it only when it moves.

### Nesting Colony

Herons nest together, and a threat to one nest brings the whole colony into the air with its chorus.

## Attributes

- **Strength:** 3-6 (1d4+2)

- **Endurance:** 6-9 (1d4+5)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 10-15 (1d6+9)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
