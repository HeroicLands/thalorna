---
shortcode: mbrydct
name: {full: Ember-eyed Cat, aliases: [Naokalo]}
type: being
subType: creature
description: "A heavy, dark-coated forest cat the size of a leopard, with a faint green dapple and eyes that throw back lamp-light as a steady green, and the one beast of the forest that takes grown people."
tags: [animal, creature, image-needed]
data:
  packFolder: animals
  icon: sohl-none-icon-feline
  templatePriority: 0
  culture: kaliharanclt
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+14
    end: 1d6+11
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+12
    aur: 1d6+10
    wil: 1d6+11
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Skull Crush
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
          name: Skull Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 60, calc: "60"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The lamp on the porter's pole throws its light a few yards up the ridge path and no further. Beyond it, low in the branches, two points of steady green light look back at you. They do not blink and they do not move. Then the lamp swings and the light catches a heavy, dark shape lying along a bough, its coat showing a faint broken dapple of green that you would never have seen without the lamp.

# Dossier {#dossier}

The Ember-eyed Cat, _naokalo_ in the [[skill-kalihrlng|Kalihari Language]], "green ember", for the glow of its eyes in torchlight, is a heavy, dark-coated forest cat the size of a leopard. It lives in the steep forest between the lowland villages and the terraces and on the lower slopes of [[place-klhrring|The Ring]], the ring of mountains, and it is the apex of the island's forest. It hunts pigs, deer and the lowland herds by dropping from low branches, and it takes the carcass of a [[being-mngbhmth|Mangrove Behemoth]]'s bitten victim if it finds it first. It is the one beast of the forest that takes grown people.

## Presentation

A heavy, deep-chested cat, dark-coated, with a faint broken green dapple that shows only in good light and that makes a still animal in leaf-shade very hard to see. The head is broad and the eyes throw back lamp-light as a steady green. The legs are short and thick for the size, and the paws are large.

## In the Land

A naokalo keeps a range of many miles in the steep forest above the lowland villages and below the terraces, and on the lower slopes of the ring. It leaves the range only in [Deepwater]{.name data-type="lore/calendar"}, when the ridge paths flood. It shares the forest with the gliders overhead and the pigs and deer below, and it shares the carcasses of the shore with the behemoth, which holds the mangrove while the cat holds everything above the mud.

## Key Behaviors

The naokalo hunts from the low branches. It lies along a bough above a game trail or a ridge path, waits, and drops on its prey from above, killing with a crushing bite to the skull or the neck. It takes pigs and deer, and the herds of the lowland villages when it finds them at the forest edge. It will take a person who comes within reach of its bough, and an animal that has taken one tends to take another. It is solitary, silent and patient.

## What the Islanders Do

The village councils treat the naokalo as they treat the behemoth. The council decides whether this animal has learned to take people before a spear is lifted, and an animal that has not is left alone. Pilots and the porters on the ridgeline tracks carry a lit lamp at dusk, and the lamp-light is the warning that a naokalo's eyes answer, so that the green points in the branches are seen before the cat drops.

## Signs

- Two steady green points in the branches in lamp-light.
- Pig and deer carcasses cached in a fork, the neck broken and the skull crushed.
- Deep claw-scores on the lower trunks beside a ridge path.
- Large, round, clawless prints in mud at a stream crossing, set one in front of the other.
- Forest birds going silent along a ridge in the dusk.

## Combat Strategy

The naokalo fights from above or not at all. It drops from the branch onto the nearest or the last of a party and tries to end the matter with one crushing bite, and then it rakes and drags the body off into the forest. If the first drop fails it breaks off and fades into the leaves, and it returns when the party's light has gone. A wounded naokalo is dangerous, and a cat that is cornered fights to the end.

## Attack Methods

### Skull Crush

The cat takes its prey by the head or the neck and closes its jaws. The bite crushes bone and does not need a second try.

### Raking Claws

Both forepaws rake down the flanks and back of the victim as the cat lands and drags it down. The claws open long wounds that bleed freely.

## Special Abilities

### Forest Camouflage

The dark coat and the green dapple blend into leaf-shade, and the animal lying still along a bough cannot be seen until it moves. Lamp-light shows the eyes and nothing else.

### Ambush from Above

The naokalo drops from the branches onto a target below. A person who walks under a bough without looking up gives it the first strike.

### Crushing Jaw

The jaws close with a force that goes through a skull and through armor that would turn a blade.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 11-16 (1d6+10)

- **Will:** 12-17 (1d6+11)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 6-9 (1d4+5)
