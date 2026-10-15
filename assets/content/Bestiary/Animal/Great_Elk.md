---
shortcode: greatelk
name: {full: Great Elk, aliases: []}
type: being
subType: creature
description: "A migratory megafauna elk of northern forests and plains, a mature bull standing eight feet at the shoulder and weighing near a ton."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-staghead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+13
    dex: 1d6+8
    agl: 1d6+10
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Antler Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Antler Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
      weight: {base: 1800, calc: "1800"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[greatelk|Great Elk]]{float=top-left}

The mud at the river's edge has been trodden to a trough by hundreds of cloven hooves, each print as wide as a dinner-plate. A bank of willow is stripped to the height of a man on a horse. Across the river a bull stands at the edge of the birch, nearly eight feet at the shoulder, with antlers spreading wider than the span of a longboat's oars. He lifts his muzzle and bellows, and the sound rolls over the valley.

# Dossier {#dossier}

The Great Elk is the giant deer of the northern forests and plains, a bull standing nearly eight feet at the shoulder and weighing close to a ton. Herds range the birch and pine forest of the [[place-nrdlndsrgn|Nordlands]], the river valleys and mixed woodland of [[place-vrystwald|Vrystwald]] and the forest-steppe of [[place-velanthrgn|Velanthia]], moving hundreds of miles between summer and winter ground by routes handed down over generations. They are peaceful until the rut and fierce in defence of calves.

## Presentation

A huge deer built for power and endurance, with columnar forelegs under a heavy body and a thick, muscular neck that carries the antlers. The antlers are the mark of the animal: a massive crown of bone that can span twelve feet or more, branching into many sharp points. The coat is dense and double-layered, tawny brown with a paler belly. The head is large and carried nobly, with big, expressive eyes and a broad muzzle.

## In the Land

Great elk range the birch and pine forest of the [[place-nrdlndsrgn|Nordlands]], the broad river valleys and mixed woodland of [[place-vrystwald|Vrystwald]] and the forest-steppe of [[place-velanthrgn|Velanthia]]. A herd moves in spring to the high ground and the river meadows and back to the lower forest before the snow, along the same routes it has used for generations. Bulls keep apart from the cows and calves for most of the year and rejoin them for the autumn rut.

## Key Behaviors

Elk travel in herds of a few animals to several dozen, along fixed routes to summer and winter ranges. They are most active at dawn and dusk and rest and chew the cud by day. They eat grass, shrubs, leaves and twigs in great quantity. Bulls live alone outside the breeding season and join the cows for the autumn rut, when each holds ground and a harem against rivals. Cows protect their calves fiercely.

## What the Hunting Companies Do

The hunting companies of Vrystwald follow the elk on their migrations and plan a season's hunting around the herd's route. A bull is a month's meat for a company, and the antlers and the hide are traded south. In the rut a bull will attack a man on foot, and the hunters work from a stand or from the saddle. Whole villages depend on a good run: when a herd takes another route, as it did for the Gárskald when the Hildskorn country drew it away, the hunters go hungry. The great antlers are set over the doors of clan halls.

## Signs

- A broad trail of cloven prints, deep in the mud, running between a river meadow and a ridge.
- Bark scraped from young trees at a man's reach, with strips hanging.
- Shed antlers lying in the leaf litter in late winter, the points gnawed by mice.
- A bugling roar over a valley at dawn in the autumn.
- Browse-lines on the pines, cut level at the height of a raised hand.

## Combat Strategy

A Great Elk's primary defense is the charge—using the antlers as lance points, driving with the full weight and power of the body. A charging elk can pierce armor and impale opponents with shocking ease. If cornered or if a calf is threatened, the elk uses powerful hind legs to deliver crushing kicks. A herd of elks may stampede, trampling anything in their path. An elk defending its territory or offspring will press attacks with determination, though it will typically retreat if seriously wounded and escape is possible.

## Attack Methods

### Antler Gore

The massive antlers are driven forward in a charging attack, capable of penetrating armor and impaling opponents. The impact of the charge adds tremendous force behind the antler strike.

### Crushing Kick

The hind legs deliver powerful kicks—slow but tremendously forceful—that can break bones or drive an opponent backward with significant violence.

## Special Abilities

### Herd Alert

Within a herd, Great Elks are nearly impossible to surprise—one alert individual shares danger signals with the entire group, allowing them to react as a coordinated unit. A solitary elk is more vulnerable but still maintains excellent vigilance.

### Endurance

The Great Elk can travel for days without tiring, covering vast distances at a steady pace. This endurance allows escape from most pursuers, though it also means a determined elk can follow prey relentlessly.

## Additional Information

A Great Elk's antlers are molted annually and can be collected and crafted into extraordinary weapons or decorative pieces. A single antler can be worth significant coin to craftspeople. The elk's hide is valuable for leather goods. Some cultures venerate the Great Elk as a symbol of wildness and untamed strength.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 14-19 (1d6+13)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-13 (1d6+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
