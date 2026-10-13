---
shortcode: hntngdg
name: {full: Hunting Dog, aliases: []}
type: being
subType: creature
description: "A medium-sized, powerfully built canine bred to track and bring down prey, combining lean endurance with intelligence honed by generations of training."
tags: [animal, creature]
data: {packFolder: animals, icon: hound, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d4+7
    agl: 1d6+10
    per: 1d6+17
    snt: 1d4+4
    aur: 1d4+2
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 60, calc: "60"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 110
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[hntngdg|Hunting Dog]]{float=top-left}

The kennel yard erupts into noise as the huntsman opens the gate, a dozen lean red and brindle dogs flowing out around his legs. Their tails are up and their noses are already down, working the ground in quick, fierce circles. One finds a line on the grass and lifts its head to give tongue, and the whole pack pours away through the hedge after the sound, the huntsman's horn behind them.

# Dossier {#dossier}

The Hunting Dog is the tracking and holding hound of the hunting companies, twenty-four to twenty-eight inches at the shoulder and forty-five to seventy pounds, bred over generations to follow a scent, pursue and bring down quarry. Packs are kept by the hunting companies of [[place-vrystwald|Vrystwald]], the river-prince courts and estates of [[place-velanthrgn|Velanthia]], the hunt-lords of [[place-byzariargn|Byzaría]] and the noble houses of [[place-aureldirgn|Aurèldía]]. They are far more intelligent than wild dogs.

## Presentation

A medium-sized, powerful dog, lean and muscular, built for endurance and short bursts of speed. The coat is short and dense, red, black, brindle or a mixture. The chest is deep, the legs long with the muscle showing, and the tail is carried up and alert. The ears are medium-sized and the eyes bright and always moving. It moves economically. A working dog wears a leather collar or harness and often carries scars from earlier hunts.

## In the Land

Hunting dogs are kept by the hunting companies of [[place-vrystwald|Vrystwald]], the river-prince courts and the estates of [[place-velanthrgn|Velanthia]], the hunt-lords of [[place-byzariargn|Byzaría]] and the noble houses of [[place-aureldirgn|Aurèldía]]. A pack is kept in a kennel beside the huntsman's house, fed on offal and meal, and run on the hunting days and exercised on the others. A good hound follows a scent for dozens of miles.

## Key Behaviors

Hunting dogs are disciplined and focused, able to follow a scent for dozens of miles and for hours, and to keep on when exhausted. They obey a handler at once. In a pack they keep a clear order and speak with body posture, short calls and scent. Between hunts they rest, alert and patient, waiting for the next order.

## What the Huntsmen Do

A huntsman chooses his dogs by nose, voice and temper and trains them from a puppy to follow a scent, hold a quarry and stand off from it until the spears come up. The Varokh use dogs to hold boar in the winter hunts. The lords of the Southern March ride after boar and gazelle with their hounds, and the kennel is a point of pride for a house. A man's pack is passed to his heir with the horses. Hounds are named, and a great hound is mourned when it dies.

## Signs

- A pack at full cry in the distance, rising and falling along a ridge.
- Tracks of four or five dogs together, running, with the toes spread.
- A kennel with a long yard and a trough, and the smell of wet dog.
- A hound with its nose to the ground that works a hedge-line from end to end.
- A horn at dawn, a single long note, and a clatter of dogs.

## Combat Strategy

Hunting dogs employ pack tactics when possible, surrounding prey and cutting off escape routes while one or more dogs close for the bite. A dog will target the extremities—legs, arms, throat—to immobilize or wound. They circle and harry opponents, wearing them down through relentless pressure and coordinated attacks. Against multiple opponents, they prioritize isolating weaker or separated targets.

## Attack Methods

### Bite

The hunting dog's powerful jaws clamp down on limbs, throats, or torsos, aiming to wound and immobilize; a dog that has latched on will shake violently to inflict additional damage.

### Coordinated Tackle

A hunting dog will leap at an opponent, driving them backward or to the ground with its full body weight; multiple dogs will execute this simultaneously to ensure success.

## Special Abilities

### Scent Tracking

The hunting dog can follow a scent trail over any surface and across extended distances, even days old; it can distinguish between individual scents and will unerringly pursue a marked target.

### Pack Coordination

Hunting dogs fight far more effectively alongside other trained dogs, and they can execute complex coordinated attacks based on subtle handler signals or instinctive pack behavior.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 8-11 (1d4+7)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 18-23 (1d6+17)

- **Scent:** 5-8 (1d4+4)

- **Aura:** 3-6 (1d4+2)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 6-9 (1d4+5)
