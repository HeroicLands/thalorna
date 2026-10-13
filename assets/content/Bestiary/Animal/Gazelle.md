---
shortcode: gazelle
name: {full: Gazelle, aliases: []}
type: being
subType: creature
description: "A small, extraordinarily fast antelope of the deep desert, grazing gravel plains and scrublands in herds that flee predators at blistering speed."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+6
    end: 1d6+7
    dex: 1d6+11
    agl: 1d6+14
    per: 1d6+12
    aur: 1d4+5
    wil: 1d4+7
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Horn Thrust
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Thrust
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
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
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 55, calc: "55"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 100
        leaguesPerWatch: 7
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[gazelle|Gazelle]]{float=top-left}

A line of pale heads lifts over the rim of the gravel basin, and a pair of delicate horns curls against the sky. They have seen you before you saw them. A buck stamps and gives a sharp whistle, and then the whole herd is gone in a spray of white rumps, bounding stiff-legged across the stones, and the dust of their going hangs in the air long after.

# Dossier {#dossier}

The Gazelle is the small, very fast antelope of the desert and steppe, two to two and a half feet at the shoulder and forty to seventy-five pounds. Herds of ten to fifty graze the gravel plains and thorn scrub of the [[place-dunhardsrtrgn|Dunhara Desert]], the [[place-khzryndsrtrgn|Khazryn]] and the high ridges of the Byzarian [[place-southrnmrch|Southern March]]. Cheetahs, jackals, steppe lions and eagles live on them, and the nomads hunt them for meat and hide and for the mounted hunts that mark a warrior's standing.

## Presentation

A slim, lightly built antelope with long, fine-boned legs. The coat is short and sandy-fawn, white on the belly, with a dark stripe from shoulder to hip. The face is narrow, with huge dark eyes fringed with long lashes. Both sexes have ridged horns, larger in the male, curving back and then inward in a lyre. The ears are long and mobile, the tail short and dark and flicked constantly. The hooves are narrow and hard.

## In the Land

Gazelles graze the gravel plains and thorn-scrub of the [[place-dunhardsrtrgn|Dunhara Desert]], the dry grass of the [[place-khzryndsrtrgn|Khazryn]], the high ridges of the Byzarian [[place-southrnmrch|Southern March]] and the desert margin of Aû'Khelâthu. A herd of a dozen to several hundred ranges between sparse grazing and the few water-holes, feeding at dawn and in the evening and lying up in the shade at midday. They move at the first sign of a predator, bounding in stiff-legged jumps to alert the herd.

## Key Behaviors

Gazelles gather in herds around related females and their young, with adult males holding small territories or keeping bachelor groups at the edge. In the breeding season bucks defend patches of ground by parallel walking, horn-fencing and scent-marking, which seldom injures anyone. They graze at dusk and dawn on tough grass, herbs and scrub, and can go long periods without drinking. When there is water they gather at oases and pools, and every predator in the region knows it. The herd's many eyes and ears watch for threats, and the herd bolts at the first alarm.

## What the Hunters Do

The desert-hunters of the Khelâthi guild take gazelle with falcons and hounds, and the lords of Byzaría ride after them with hawks and coursing cats. The tribes of Dunhara and the Khazryn course them with desert sighthounds and keep the horns as drinking cups and the hide for waterskins. Gazelle meat is a feast-dish. A tribe that holds the only well in a stretch of desert watches the gazelle trails to read where the other water lies. A young hunter proves himself by running a gazelle down with a hound, and a gazelle given as a gift between chiefs is an offer of peace.

## Signs

- A neat line of two-toed hoof-prints, small and heart-shaped, crossing a clay pan.
- A herd rising together from the shadow of a boulder and bounding away, white rumps flashing.
- A pile of dry black pellets at a regular dung-ground on a ridge.
- A single sharp whistle from a lookout, and the herd gone.
- A well with a ring of tracks around it at dawn.

## Combat Strategy

A gazelle's only combat strategy is escape. At the first sign of danger, the nearest animal gives an alarm — a sharp nasal snort combined with a distinctive bouncing gait called stotting, where the gazelle leaps vertically with all four legs stiff, flashing the white rump patch as a visual warning to the herd. The herd explodes into flight, accelerating from standing to full speed in seconds, reaching speeds that outpace all but the fastest sprinting predators. Gazelles are not merely fast in a straight line — they are supreme at evasive running, executing sharp turns, sudden direction changes, and unpredictable zigzags at full speed that make them extraordinarily difficult to intercept. Against a mounted hunter, a gazelle's strategy is to outrun the horse over distance; against a cheetah, it is to outlast the sprint through evasive turns; against a stalking lion, it is to detect the ambush before the lion reaches striking range. A cornered or injured gazelle that cannot flee will kick and thrust with its horns, but this is a last resort of desperation, not a viable defense.

## Attack Methods

### Horn Thrust

A cornered buck will lower its head and drive its lyre-shaped horns at the attacker, aiming for the face, eyes, and throat. The horns are sharp enough to puncture skin and the neck muscles provide reasonable force behind the thrust, but this attack is defensive and desperate — a gazelle that is fighting has already lost its primary survival strategy.

### Kick

Like all ungulates, a gazelle can deliver powerful kicks with its hind legs. The hooves are narrow and hard, and a kick to the face or ribs of a jackal or fox can break bones. However, the gazelle's light build means these kicks lack the devastating force of larger ungulates.

## Special Abilities

### Explosive Acceleration

The gazelle's primary survival trait. From a standing start, a gazelle can reach its top speed within three to four strides, achieving velocities that outpace most mounted pursuit over short distances. This acceleration is powered by proportionally massive hindquarter muscles and long, elastic tendons that store and release energy like springs. The burst of speed is often sufficient to open a survival gap before a predator can close.

### Desert Endurance

Gazelles are superbly adapted to desert survival. They tolerate temperatures that prostrate larger animals, require minimal water, and can sustain a ground-covering trot for hours across terrain that exhausts horses. Their pale coat reflects heat, their nasal passages cool incoming air through a countercurrent system, and their kidneys concentrate waste to minimize water loss. In the deep desert, gazelles can range across territory that no horse-mounted pursuer can follow without resupply.

### Herd Vigilance

A gazelle herd functions as a collective surveillance system. With dozens of animals scanning in all directions, the probability of a predator approaching undetected drops dramatically. The alarm system is immediate and reliable — a single snort from one animal sends the entire herd into flight within a heartbeat. This collective awareness makes gazelles far harder to hunt than their individual alertness would suggest.

### Stotting Display

The distinctive bouncing gait that gazelles perform when alarmed serves multiple functions: it alerts the herd, it signals to the predator that it has been detected (causing many ambush predators to abandon the hunt), and it may advertise the individual gazelle's fitness and speed, discouraging the predator from pursuing that particular animal. The white rump flash during stotting is visible at great distances across open terrain.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 6-9 (1d4+5)

- **Will:** 8-11 (1d4+7)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
