---
shortcode: drmdrycm
name: {full: Dromedary Camel, aliases: []}
type: being
subType: creature
description: "A one-humped desert transport animal engineered for the harshest arid wastes, faster than its two-humped cousin but far more nervous and aggressive."
tags: [animal, creature]
data: {packFolder: animals, icon: camelhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+25
    end: 1d6+11
    agl: 1d4+6
    per: 1d6+15
    snt: 1d4+3
    aur: 1d4+2
    wil: 1d6+11
    rea: 1d4+3
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 42}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 1100, calc: "1100"}
      reachBase: 0
      bodyScaleBase: 1.84
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 120
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[drmdrycm|Dromedary Camel]]{float=top-left}

The string of camels comes over the dune-crest one behind another, tall and rangy, the humps swaying against the sky. The lead animal stops at the well-head and kneels with a groan, and its lip curls back from yellow teeth. A bubbling, grumbling roar comes out of it, and green froth sprays the sand a yard from your boots.

# Dossier {#dossier}

The Dromedary is the one-humped camel of the hot deserts, six and a half to seven and a half feet at the shoulder and nine hundred to fourteen hundred pounds, the transport animal of [[place-dunhardsrtrgn|Dunhara]] and the oasis cities of [[place-amradadrgn|Amradad]]. It is faster and more agile than the two-humped Khazryn camel but more nervous and more aggressive, and less able to stand cold or hardship. A dromedary in a bad mood spits, kicks and bites. Caravans depend on it across the wide deserts.

## Presentation

A long-legged animal with a single hump above the shoulders. The head is long and narrow, with a split upper lip, nostrils that close against sandstorms and long lashes that guard the eyes. The body is lean apart from the hump, which stores fat. The legs are long and slim but strong, ending in two-toed feet with leathery pads for sand. The tail is thin. The coat is sandy brown or tan.

## In the Land

Dromedaries are kept in the hot deserts of [[place-dunhardsrtrgn|Dunhara]], the oasis cities of [[place-amradadrgn|Amradad]] and the dry southern margin of the Khazryn, where the cold of the northern steppe stops them. They are a herd animal: a tribe keeps a string of breeding cows, a few bulls and a number of geldings, and drives them from well to well. A camel can go several days without water and carries a load of two hundred pounds or more for twenty miles a day.

## Key Behaviors

Dromedaries live in herds, with more independence of mind than the Khazryn camels. They are quick to react, have definite preferences about handlers and routes, and can be stubborn or cantankerous. They travel long distances on little food and water, though not as long as a Khazryn camel can. They are active in the cool of dawn, dusk and night and save their strength in the heat.

## What the Caravans Do

The tribes of Dunhara ride dromedaries in war and on raids and sell them to the caravans. The Amradad cities buy them for the carrying-trade along the coast. A rider sits behind the hump, controls the animal with a stick and a nose-line, and chooses a camel for its temper as well as its speed. A dromedary in rut will bite, kick and spit, and a bull is kept apart from the string. The tribes judge a man's wealth by the number of his camels. Camel milk is drunk fresh and made into cheese, and the dung is burned for fuel.

## Signs

- A long string of tall, rangy animals on the skyline, each led by the rope of the one in front.
- Oval, broad-pad tracks, deep in the sand, with a scuffed toe-mark.
- A camel kneeling beside a tent in the heat of the day, groaning and chewing.
- A gurgling, grumbling roar from a bull at the well, and a spray of green froth.
- Dung dropped in dry pellets along a caravan road, with bones of camels that did not finish the crossing.

## Combat Strategy

A dromedary will kick with hind legs when threatened, delivering impressive blows. It will spit foul-smelling liquid capable of discomforting targets. It prefers flight to fight but becomes aggressive when trapped or protecting offspring.

## Attack Methods

### Hind-leg Kick

The dromedary delivers powerful kicks capable of breaking bones. The kick is often used with less force than Khazryn camels but with greater frequency due to the camel's higher agility.

### Spitting Attack

The dromedary produces a foul-smelling liquid from its stomach and projects it at threats, capable of reaching fifteen feet. The smell is overwhelming and causes nausea and eye irritation.

### Biting

When cornered or protecting young, the dromedary will bite with force that can tear flesh.

## Special Abilities

### Desert Adaptation and Speed

A dromedary can survive in deserts where other large animals perish. It requires minimal water and food compared to other animals its size. It is faster than Khazryn camels and more agile, capable of sustained running at moderate pace for hours.

### Resilience to Heat and Harsh Conditions

Physiology adapted to extreme heat allows the dromedary to function in temperatures that incapacitate humans and other creatures.

### Keen Senses and Navigation

The dromedary can navigate by scent and sound in featureless desert, finding water sources and locations visited in the past. Its senses are adapted to desert conditions where visibility is often limited by haze and dust.

## Attributes

- **Strength:** 26-31 (1d6+25)

- **Endurance:** 12-17 (1d6+11)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 16-21 (1d6+15)

- **Scent:** 4-7 (1d4+3)

- **Aura:** 3-6 (1d4+2)

- **Will:** 12-17 (1d6+11)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 5-8 (1d4+4)
