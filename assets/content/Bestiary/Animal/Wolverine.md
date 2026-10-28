---
shortcode: wlvrn
name: {full: Wolverine}
type: being
subType: creature
description: "A stocky, densely muscled northern predator infamous for fearlessly confronting beasts many times its size and refusing to retreat."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-badger, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+15
    dex: 1d6+9
    agl: 1d6+9
    per: 1d6+10
    aur: 1d6+8
    wil: 1d6+15
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 66
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
    - name: Bone-Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bone-Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            roles: &a1 [locomotor, manipulator]
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[wlvrn|Wolverine]]{float=top-left}

The cache hung high in the pines has been torn open, and the pieces of it scattered across the snow. A line of prints runs away from it, five-toed and dead straight, over the ridge. Ahead, in the snow beneath the spruce, a low brown animal is working at a frozen deer-leg, tearing at it with long, curved claws. It looks up. It has the face of something much larger, and no intention of leaving.

# Dossier {#dossier}

The Wolverine is the small, fearless hunter of the cold north, twelve to eighteen inches at the shoulder and two and a half to three and a half feet long, with a bushy tail. It ranges the cold forest and mountains of the [[place-nrdlndsrgn|Nordlands]], the high taiga of [[place-vrystwald|Vristwald]] and the upper valleys of [[place-graznmntns|the Grazian Mountains]]. It faces down predators many times its size and will not retreat once engaged. It is drawn to camps by food.

## Presentation

A compact, heavily muscled animal in a dense brown coat of excellent insulation. The face is broad, with a short, strong snout for rooting and tearing, and small, bright, intelligent eyes. The claws are long and curved, for climbing and tearing. It looks stocky and is far stronger than its size suggests.

## In the Land

Wolverines range the cold forest and mountains of the Nordlands, the high taiga of Vristwald and the upper valleys of the Grazian Mountains. A wolverine holds a huge range for its size, alone, and travels it in all weathers, covering miles in a day. It eats carrion, small animals and the kills of wolves, and caches what it cannot finish under snow or stones.

## Key Behaviors

Wolverines live alone and hold enormous ranges for their size, defended fiercely. They hunt and scavenge, taking prey as big as a deer and robbing bigger predators of their kills. They are reckless and will face bears and wolves for food. They are very persistent, and will pursue prey or enemies despite damage or exhaustion.

## What the Trappers Do

Trappers hate the wolverine, which follows a trap-line and eats the catch, breaks open caches and fouls what it cannot carry. A cabin is built of logs too large to gnaw, and a cache is set on stilts high up. The fur does not freeze and is valued for hoods and cuffs. A wolverine at bay fights a wolf or a bear, and trappers do not corner one. The animal is hunted with dogs and traps and shot from a distance.

## Signs

- A wandering line of prints in the snow, five-toed, straight over ridges and through drifts.
- A trap-line robbed, with the traps sprung and the catch gone.
- A cache torn open on a branch, and the contents scattered.
- A carcass of a deer dragged from a wolf-kill and cached under logs.
- A musky stink on a trail.

## Combat Strategy

The wolverine attacks with suicidal fearlessness, charging at threats and slashing with claws and teeth. It shows no signs of backing down regardless of damage and fights until unconscious or death.

## Attack Methods

### Raking Claw Attacks

The wolverine delivers rapid slashing attacks with long claws, creating multiple wounds that bleed freely.

### Bone-Crushing Bite

The wolverine's jaw strength is extraordinary, capable of crushing bone and severing limbs through focused bites to vital areas.

## Special Abilities

### Fearless Aggression

The wolverine shows no fear or caution in combat, attacking relentlessly regardless of odds or damage sustained.

### Relentless Pursuit

The wolverine pursues prey or enemies with unyielding determination, rarely abandoning a target even after significant injury.

### Iron Jaw

The wolverine's bite is extraordinarily powerful, capable of crushing bone and tearing through tough hides.

### Cold Adaptation

The wolverine is perfectly adapted to extreme cold and suffers no penalty from freezing conditions.

### Indomitable Will

Despite damage that would incapacitate other creatures, the wolverine continues fighting.

### Additional Information

Wolverines are far more dangerous than their size suggests and should be taken seriously. The creature's aggressive fearlessness makes it nearly impossible to intimidate or frighten away. A wolverine protecting food or defending young becomes even more aggressive than usual. Hunters who have killed wolverines report the creatures pursuing them relentlessly despite mortal wounds. The wolverine's pelt is valuable and can be harvested after death for cold-weather clothing.

## Attributes

Strength
: 14-19 (1d6+13)

Endurance
: 16-21 (1d6+15)

Dexterity
: 10-15 (1d6+9)

Agility
: 10-15 (1d6+9)

Perception
: 11-16 (1d6+10)

Aura
: 9-14 (1d6+8)

Will
: 16-21 (1d6+15)

Reasoning
: 7-10 (1d4+6)

Creativity
: 6-9 (1d4+5)
