---
shortcode: mntnln
name: {full: Mountain Lion, aliases: []}
type: being
subType: creature
description: "A lean, muscular solitary cat six to eight feet long, built for explosive speed and agility as it hunts across mountains and wilderness."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-lion, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+13
    end: 1d4+10
    dex: 1d4+14
    agl: 1d4+16
    per: 1d4+12
    aur: 1d4+5
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Killing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Killing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 78
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
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
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.28
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

![[mntnln|Mountain Lion]]{float=top-left}

In the soft earth below the ledge a line of round prints crosses the stream, four toes and a heel, with no claw-marks and a drag of the tail between them. A deer's carcass lies half-buried under a mound of leaves and sticks. Overhead on the rock a pair of yellow eyes follows you, and a long, tawny body lies flat along the stone, the tail hanging, perfectly still.

# Dossier {#dossier}

The Mountain Lion is the large lone cat of the mountains and scrub, six to eight feet long and eighty to two hundred twenty pounds. It hunts the forested mountains of [[place-kelwanukrgn|Kelwanuk]], the piedmont and mesa country of the northern reaches, the scrub at the edge of [[place-chakultzklrgn|Ch'akul Tsa'kul]] and the highlands of [[place-ixilankulrgn|Ish'ilankul]], taking deer and wild goats. It avoids people and larger threats and prefers to hunt unseen.

## Presentation

A sleek, aerodynamic cat, lean and muscular, with long, powerful hind legs for jumping. The coat is short, dense and tawny, from pale cream to rich rust, white beneath. The face is narrow and angular, with small rounded ears, a powerful jaw and forward-facing yellow eyes. The claws are sharp, curved and retractable. The tail, nearly as long as the body, is held low in a stalk and coiled tight when the cat is tense. Old animals carry scars from fights and hunts.

## In the Land

Mountain lions hunt the forested mountains of Kelwanuk, the piedmont and mesa country of the northern reaches, the scrub at the edge of Ch'akul Tsa'kul and the highlands of Ish'ilankul. A lion holds a range of forty square miles or more with several lying-up places in rock or thick cover, and it follows the deer and the wild goats through the seasons. It hunts at dusk and dawn and covers its kills with leaves.

## Key Behaviors

Mountain lions live alone except in the mating season, each holding a large range of forest, mountain, desert or scrub. They stalk silently for long distances, strike from ambush and prefer big prey such as deer and wild goats, which they bring down with a leap and a heavy bite, even when the animal is much larger than the cat. They hunt at dawn and dusk and at any time when prey is available. They are elusive, and when threatened they escape rather than fight.

## What the Hunters Do

Hunters follow a lion's track to learn where the deer have been taken and keep away from the cache. A herder in the foothills pens stock at night and walks the flock at dawn, and a lion that has taken sheep is hunted with dogs, which tree it. The pelt is a gift to a chief, and the skull and claws are worn as charms. A lion is rarely seen, and a trail that passes under a ledge is followed in daylight only. Travelers keep children close in lion country and make noise.

## Signs

- Round, four-toed tracks without claw-marks in a mud bank, with a tail-drag mark beside them.
- A deer carcass half-buried under a mound of leaves and sticks.
- A scream like a woman's in the night from a high ridge.
- Deep claw-scratches on a trunk, head-high, with a patch of scraped earth beneath it.
- A dog that will not go beyond the edge of a camp.

## Combat Strategy

Mountain lions employ stealth, speed, and devastating first strikes. They stalk from a distance until within striking range, then launch an explosive pounce from behind or above, attempting to land on the prey's back and deliver a killing bite to the neck or spine. Against opponents in direct combat, they use their agility and speed to dodge attacks while delivering rapid strikes with claws and teeth. They target the throat, neck, and belly—vulnerable areas—with preference. If an opponent proves too dangerous, they use their climbing ability to escape to places pursuers cannot easily follow.

## Attack Methods

### Killing Bite

The mountain lion lunges to deliver a devastating bite to the neck, throat, or spine, aiming for a fatal strike; this bite deals significant damage and may incapacitate the victim if the bite connects to a vital area.

### Claw Rake

The mountain lion uses its sharp, retractable claws in rapid succession to shred flesh and light armor; these attacks are often delivered during a pounce and can incapacitate or blind opponents.

## Special Abilities

### Ambush Master

The mountain lion strikes hardest from surprise; it can stalk prey for extended distances without being detected, and its first attack of an ambush is the one that counts.

### Explosive Speed

The mountain lion can move with extraordinary speed over short distances, allowing it to close distance rapidly or escape from threats; it usually strikes before its opponent has moved, and covers more ground in a rush than a person would expect.

### Climbing Master

The mountain lion can scale vertical surfaces and trees with ease, using its claws and muscle control; it climbs very quickly and can reach terrain that non-climbing opponents cannot easily follow.

## Attributes
