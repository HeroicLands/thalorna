---
shortcode: wllyrhn
name: {full: Woolly Rhino, aliases: []}
type: being
subType: creature
description: "A massive shaggy grazer of frozen tundra and cold steppe, peaceful yet fiercely territorial and devastating when defending its range."
tags: [animal, creature]
data: {packFolder: animals, icon: rhinoceroshorn, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+12
    dex: 1d4+7
    agl: 1d4+6
    per: 1d6+7
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Horn Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trampling Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Trampling Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 12}
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
            roles: &a1 [locomotor]
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
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 4000, calc: "4000"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[wllyrhn|Woolly Rhino]]{float=top-left}

On the tundra the wind has scoured the snow back from a ridge, and a mound the size of a hay-wagon stands on it, shaggy and brown-gray, with clumps of coat hanging from it. It swings a huge head with a great forward-curving horn as long as a man, scarred and dark, and the long hair on its back streams in the gale. It is grazing. The only sound is the tearing of frozen sedge.

# Dossier {#dossier}

The Woolly Rhino is the great grazer of the tundra and cold steppe, six to seven feet at the shoulder and up to thirteen or fourteen feet long. It lives alone on the northern plateaus of the [[place-nrdlndsrgn|Nordlands]] and the cold high steppe of [[place-idwkrrgn|Idvaqor]]. It is peaceful but fiercely territorial, and dangerous when defending its range or young.

## Presentation

A massive, heavily built animal in a thick brownish-gray coat that hangs in clumps. The mark of the animal is the large forward-curving horn of dense keratin, four to five feet long, scarred and darkened with age. The shoulders are broad and the legs sturdy.

## In the Land

Woolly rhinos graze the tundra and cold steppe of the northern plateaus of the [[place-nrdlndsrgn|Nordlands]] and the cold high steppe of [[place-idwkrrgn|Idvaqor]]. A rhino keeps a range around good grazing and moves little, feeding on grass and sedge and clearing snow from it with its horn. It has a thick coat and a hump of fat on its shoulders. A bull is solitary, and a cow keeps her calf at her side for two years.

## Key Behaviors

Woolly rhinos live alone and graze for much of their time in harsh tundra. They defend their feeding grounds fiercely, most of all in the mating season. They remember dangerous places and change their movements.

## What the Hunters Do

The caribou clans and the steppe hunters leave a rhino alone unless the hunting is poor. A rhino is taken with a pit and spears in winter, a feast for a whole camp. The wool is spun, the hide is used for tents and the horn is carved. A rhino charges at a threat to its range and is as fast as a horse for a short run. The hunters drive it into soft ground or a pit and spear it from both sides. A beast that has killed a person is left alone for a season.

## Signs

- Huge, three-toed tracks, deep in the snow, with a long drag-mark between them.
- A patch of tundra grazed to the ground with a rubbed boulder at its edge.
- A big shaggy hump on a ridge against the sky.
- Frozen dung heaps the size of a bucket.
- A pit in the snow with horn-marks where a rhino has dug.

## Combat Strategy

The woolly rhino charges at threats with all its weight and power behind its horn. If cornered or defending young, it becomes relentless and will continue attacking until the threat is eliminated or departs.

## Attack Methods

### Horn Charge

The rhino charges with all its weight concentrated behind the horn, capable of impaling and throwing opponents.

### Trampling Stomp

The creature’s hooves deliver crushing blows to targets on the ground.

## Special Abilities

### Charge Momentum

The rhino’s charge over distance gains additional force and impact.

### Cold Adaptation

The thick fur provides real protection against extreme cold and minor insulation against slashing attacks.

### Relentless Territorial Defense

Within claimed territory, the rhino fights with enhanced determination and refuses to retreat.

### Additional Information

Woolly rhinos are most dangerous when defending territory or young. In open terrain, their charging advantage is maximized. The creature’s horn can be harvested after death and is valuable for crafting and decoration.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-11 (1d4+7)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 8-13 (1d6+7)

- **Aura:** 7-10 (1d4+6)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
