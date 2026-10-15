---
shortcode: aurochs
name: {full: Aurochs, aliases: []}
type: being
subType: creature
description: "A massive, ill-tempered wild bovine of prehistoric power that roams grasslands and sparse forests in loose, dangerous herds."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-bull, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+13
    end: 1d6+12
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+9
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 57
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
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[aurochs|Aurochs]]{float=top-left}

The grass ahead is trampled flat in a swath wide enough for a wagon, and the dung along it is steaming. A long way off on the plain a dark line of backs lifts out of the grass, and the nearest of them raises a head with horns as long as your arm and a pale stripe running from shoulder to rump. The bull blows once, and the smell of musk and wet earth reaches you on the wind.

# Dossier {#dossier}

The Aurochs is the great wild ox of the open grassland, over six feet at the shoulder and upward of two thousand pounds, black, with a pale stripe along the back. Herds graze the forest-steppe of [[place-velanthrgn|Velanthia]] and the clearings at the southern edge of [[place-vrystwald|Vrystwald]], keeping to the river meadows and the steppe margin where the plough has not reached. A herd keeps together, and where one cow is seen the rest are grazing close by.

## Presentation

A huge, black ox on a frame of iron sinew and heavy bone. Shaggy hair four to six inches long covers the body except for a cream or pale gold stripe from shoulder to rump. The horns curve outward and up, three to four feet long, with a sharp point and a slight forward hook. The muzzle is broad and square, and snorts up dust when the animal is angry. The hooves are as big as a man's fist, and the small eyes miss little.

## In the Land

Aurochs herds graze the forest-steppe of [[place-velanthrgn|Velanthia]], where the black-earth grain belt breaks into river meadow, and the open clearings along the southern edge of [[place-vrystwald|Vrystwald]]. A herd keeps to a range of several valleys, moving between summer meadow and winter forest by the same routes each year. Plough-land and villages push the herds back to the river bottoms and the steppe margin, and a herd in the grain belt is nearly always one that has been driven there.

## Key Behaviors

Aurochs live in small matriarchal herds of four to twelve. They graze in open grassland through the day, where they can see what approaches, and go into woodland only in the hottest weeks or when wolves are pressing. Cows with calves attack anything that comes near, including larger predators, and a lone bull charges what it takes for a rival. In the late autumn rut the bulls are at their worst. A herd remembers the places where it has been hunted, avoids them and changes its routes with the seasons.

## What the Hosts Do

The Velanthian Hosts keep their horses out of aurochs country in the autumn rut and drive a herd off the winter grain with fire and noise, since a bull will not be turned by a man alone. A bull taken in a hunt feeds a Host for a month. The horns are banded in silver and passed round the ataman's table, and the hide makes the best tent-covers on the frontier. Calves are left alone, because the cows follow a calf-taker for miles. Farmers on the river-prince estates fence their cattle away from wild herds, which will take a tame cow into the herd and keep her.

## Signs

- A wide, trampled swath through the long grass, with dung heaps the size of a cart-wheel along it.
- Trees rubbed bare of bark at the height of a man's shoulder, with coarse black hair caught in the wood.
- Hoof-prints as wide as a man's palm, deeper in the muddy ground of a drinking place.
- A low rumbling snort from the edge of a thicket, and then the grass moving.
- A bull's horn-scrapes on a fence-post at a farm that keeps no bull.

## Combat Strategy

An Aurochs rarely hesitates to confront a threat head-on. When it perceives danger, it lowers its head, stamps once or twice as a warning, then charges with surprising speed for an animal of its bulk. Its strategy is simple but devastatingly effective: drive the point of a horn through the target, fling the impaled opponent skyward, or slam them with the broad mass of its head and neck. If surrounded or cornered, it will rear and stomp with forelegs, then wheel to drive enemies backward with horn thrusts. Herds amplify this danger—panicked Aurochs may stampede, and multiple individuals will often attack from different angles, making coordinated defense nearly impossible. A herd in full flight can level a wooden structure or trample a small company of soldiers.

## Attack Methods

### Gore with Horns

The Aurochs drives forward with tremendous force, seeking to impale with its long, curved horns and hurl the target upward and backward. The force of the charge imparts both penetrating damage from the points and blunt trauma from the skull and neck behind them. Multiple adventurers have been tossed ten feet or more through the air before crashing to earth.

### Trample

Once an opponent is knocked down or flanked, the Aurochs will deliberately step on them with legs like pillars, crushing bone and armor alike. Each hooffall carries the weight of over two thousand pounds concentrated into a point no larger than a man’s palm.

### Skull Slam

When at close quarters or surrounded, the creature swings its massive head like a club, using the thick bone of its skull more than the horns themselves. This battering attack is less precise than a goring charge but effective against multiple foes.

## Special Abilities

### Thick Hide and Dense Build

An Aurochs’s hide is naturally thick and overlaid with dense fur that sheds water and provides surprising protection against slashing weapons. Its muscle and bone density exceed that of ordinary cattle by a factor of three or more, allowing it to absorb impacts that would cripple lesser creatures. Slashing weapons are notably less effective than piercing or blunt trauma.

### Aggressive Temperament

Once provoked, an Aurochs pursues its aggressor with single-minded determination. It will not break off an attack simply because a foe retreats; instead, it will charge until the target is down, beyond its reach, or it loses the scent. In herds, this aggressive behavior propagates—one attacking Aurochs may trigger simultaneous charges from others.

### Keen Hearing and Smell

Despite small eyes, Aurochs rely heavily on hearing and scent. They can detect movement and danger at considerable distance, making surprise difficult. They will circle a potential threat, determining its size and threat level through smell alone before committing to an attack.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
