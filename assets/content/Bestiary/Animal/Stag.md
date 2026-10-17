---
shortcode: stag
name: {full: Stag, aliases: []}
type: being
subType: creature
description: "A mature forest-dwelling male cervid with large branching antlers, turning dangerously aggressive toward intruders during the rutting season."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-staghead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+15
    end: 1d6+10
    agl: 1d6+7
    per: 1d6+15
    snt: 1d4+1
    aur: 1d4+3
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
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
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 140
        leaguesPerWatch: 6
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[stag|Stag]]{float=top-left}

The leaf litter of the glade is churned and wet, and the saplings at its edge are stripped of their bark in ribbons. At the sound of a snapped twig the head comes up from the grass: a big red-brown animal with a dark neck and a rack of branching antlers, scored and worn from fights. It stands for a long moment with its ears turning, nostrils wide. Then it bounds away between the trees and is gone.

# Dossier {#dossier}

The Stag is the mature male of the forest deer, four to five feet at the shoulder and six to seven feet long, with branching antlers and a powerful build. It lives in the woods of [[place-vrystwald|Vristwald]], the woodland of [[place-aureldirgn|Aureldia Region]] and the cool, temperate forests, where the trees give shelter and browse. It is peaceful outside the autumn rut, when it becomes territorial and dangerous.

## Presentation

A muscular, compact animal with a reddish-brown to dark-brown coat, paler on the underside and rump. The antlers branch and spread upward, grooved and worn by years of fighting, and are shed each year and regrown, larger or smaller with the animal's age and health. The head is large, with prominent eyes, sharp hearing and a powerful neck. The legs are slender but muscular, for speed through woodland. The hooves suit soft ground and the forest floor.

## In the Land

Stags live in the forests of Vristwald, the woodland of Aureldia and the temperate woods of the cool regions, where the trees give shelter and the browse is good. A stag in the autumn holds a few does and a stretch of woodland. He feeds on leaves, bark and shoots, lies up in a thicket by day and comes out to graze at dusk. Outside the rut stags keep apart in small groups.

## Key Behaviors

Stags spend most of their time browsing leaves, bark, shoots and roots. They are sociable with other deer but hold their own ranges. In the autumn rut males are territorial and aggressive, using the antlers to establish rank and to guard the does. Outside the rut they are shy and flee, unless defending young or ground. Stags learn to avoid hunters and remember dangerous places and change their movements.

## What the Foresters Do

Foresters and hunters follow the stag in autumn and take it for the meat and the antlers. In the rut a stag will attack a man who comes between him and a doe, and woodcutters keep away from the glades he holds. The antlers are cut into hilts, combs and buttons, and the hide into gloves. The lords of the kingdoms reserve the chase and punish poaching. A stag's call carries a mile through the trees.

## Signs

- A young tree stripped of bark in ribbons at the height of a man's head.
- A bellowing roar from a wooded ridge at dawn in autumn.
- A trail of cloven prints through the leaf litter, with a bed pressed in the ferns.
- Branches thrashed and torn by antlers, with a patch of scraped earth beneath.
- Droppings in a heap at the edge of a clearing.

## Combat Strategy

A stag's primary response to threat is flight — the animal is fast and agile, capable of navigating forest terrain at speed that allows escape from most predators. During rutting season, however, stags become aggressive and may charge at perceived rivals or threats. A charging stag uses its antlers to strike and gore, followed by attempts to gore opponents repeatedly or to use brute force to knock them off balance. Outside of mating season, stags will charge only if cornered or defending young, and they will prioritize escape when possible.

## Attack Methods

### Antler Strike

The stag lowers its head and charges forward, using its antlers to strike, gore, or attempt to impale opponents. The attack combines momentum with the multiple points of the antlers, capable of perforating leather and wounding unarmored flesh. Repeated strikes can cause serious injury.

### Hoofstrike

When rearing, the stag uses its powerful hind legs to deliver upward kicks with its sharp hooves, capable of inflicting serious wounds and creating distance from attackers. These kicks are used defensively during close quarters.

### Trample

If an opponent is knocked off balance or off its feet, the stag may attempt to trample the victim with its full body weight, causing impacts and hoof injuries.

## Special Abilities

### Forest Agility

The stag is supremely adapted to forest terrain, capable of running at speed through dense undergrowth where humanoids would struggle. It outruns most ground-bound predators in woodland.

### Swift Retreat

The stag is fast and capable of sustaining speed across long distances. Once fleeing, the creature is extremely difficult to catch without magical assistance or overwhelming numbers.

### Rutting Season Aggression

During autumn mating season, stags become significantly more aggressive and dangerous. Their testosterone surge makes them territorial and inclined to challenge threats instead of fleeing.

### Acute Hearing and Smell

The stag's senses of hearing and smell are extraordinarily acute, allowing it to detect threats from significant distances. The creature typically flees before visual contact is established.

### Additional Information

Stags are most dangerous during the rutting season in autumn, when testosterone drives territorial aggression. Outside of mating season, encounters can usually be avoided through careful movement and respect of the creature's space. Stags defending does or young become more aggressive but still prioritize escape when possible. The creature's antlers are valuable and can be harvested after death for decoration, crafting, or magical use. Stag hunting is a significant part of many cultures' survival and traditions.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 11-16 (1d6+10)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 16-21 (1d6+15)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 4-7 (1d4+3)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
