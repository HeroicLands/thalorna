---
shortcode: cavebear
name: {full: Cave Bear, aliases: []}
type: being
subType: creature
description: "A titanic solitary apex predator of mountains and deep caverns, larger and more muscular than any brown bear and thought to survive from an older age."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-bearhead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+25
    end: 1d6+18
    agl: 1d6+7
    per: 1d6+11
    snt: 1d4+5
    aur: 1d4+3
    wil: 1d6+12
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 84}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 8, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
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
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 10, edged: 9, piercing: 8, fire: 10}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.84
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[cavebear|Cave Bear]]{float=top-left}

The cave mouth is worn smooth on the stone at the height of a heavy animal's flank, and the rock above it is grooved with claw-marks as high as a man can reach. Bones lie in the dust before it, split lengthwise. A deep, slow breathing comes out of the dark. Then the shadow inside grows, a shaggy head with a heavy brow comes forward into the light, and the animal rises on its hind legs under the roof of the cave.

# Dossier {#dossier}

The Cave Bear is the largest of the bears, up to ten feet tall on its hind legs and over two thousand pounds. It holds the deep limestone caves and high valleys of [[place-graznmntns|The Grazian Mountains]], the broken ground of the [[place-shtrdpks|Shattered Peaks]] in the [[place-nrdlndsrgn|Nordlands Region]] and the upland caverns of [[place-vrystwald|Vristwald]], and a few caves have been a bear's den for longer than any village has stood near them. Unlike other bears, it does not avoid people and attacks anything that comes into its cave or its valley.

## Presentation

A massive bear, more heavily muscled than a brown bear, with especially large shoulders. The fur is thick and shaggy, dark brown to almost black, matted with cave dust and mud. The head is large, with a heavy brow ridge, a broad, flat muzzle and small, forward-set eyes. The jaws crush bone, and the canines are an inch or more long. Each paw ends in curved claws four to six inches long, dark and grooved from use on stone.

## In the Land

Cave bears hold the deep limestone caves and high valleys of the Grazian Mountains, the broken ground of the Shattered Peaks in the Nordlands and the upland caverns of Vristwald. A territory takes in a cave system, the valley below it and the game-trails that run to water, and the bear winters in the deepest chamber. A few caves have been held by bears for longer than any village has stood near them.

## Key Behaviors

Cave bears live alone, apart from the mating season. A bear holds fifteen to twenty-five square miles of caves and ground around them, marking the edges with claw-marks on trees and stone and scat at the markers. It hunts elk, deer, aurochs and sometimes travelers, by ambush from cover it knows well. In winter it sleeps in the deepest chamber of a cave system and comes out lean and savage in spring. A sow with cubs is more dangerous than a male. A bear remembers kills and threats for years, and one that has killed people comes to take them as prey.

## What the Mountain People Do

The mountain guides know which caves hold bears and mark them with a cairn at the trailhead. Pack-trains halt a day's march away from a marked cave and go round. The caribou clans of the Nordlands plateaus lose calves and stragglers to cave bears and move the herd when a bear takes a liking to a pass. Hunters do not go into a bear's cave, because there is no room to use a spear and no way out. Skulls and great claws hang in clan halls as proof of a bear's death, and the fat is sold for lamp oil.

## Signs

- A cairn of fist-sized stones at a trailhead, with claw-scores in the rock above it as high as a man can reach.
- A cave mouth worn smooth by a heavy body, with broken bones in the dust before it.
- Tracks as broad as a shield, with the toes close together.
- A hillside of rubbed trees, the bark gone to the height of a rider on a horse.
- Scat the size of a loaf, full of bone and hair.

## Combat Strategy

A Cave Bear’s typical response to human intrusion is immediate and violent attack. The bear does not posture or threaten—it assesses the threat and either charges or withdraws to continue its activity. Its strategy is to use its overwhelming size and strength to close distance rapidly, crash into the threat, and kill through raw force. A charging Cave Bear is virtually impossible to stop; defensive structures can be shattered, shield walls broken, mounted troops unhorsed. The bear will use its weight to pin targets and its claws and jaws to inflict maximum damage. Against multiple opponents, a Cave Bear will still focus its aggression, driving at the nearest threat with focus that ignores peripheral dangers. A wounded Cave Bear becomes more aggressive, not less—pain triggers deeper predatory instinct, and the bear will continue fighting until literally incapable of movement.

## Attack Methods

### Devastating Claw Swipe

The bear rakes with claws each the length of a dagger, attempting to disembowel or sever limbs with a single strike. The force behind these claws can penetrate armor, shatter bone, and open wounds from which blood pours freely. Multiple successive rakes in rapid succession can reduce an armored opponent to a bleeding, crippled state in seconds. The claws frequently break off in wounds, leaving splinters of bone-hard chitin that become embedded in tissue.

### Crushing Bite

The Cave Bear’s jaws close with force sufficient to break steel, crushing skull bones and severing spines. A target caught in these jaws will be violently shaken, multiplying the damage and potentially dislocating joints or breaking limbs. The teeth leave puncture wounds prone to severe infection, and the bear’s bite itself can transmit diseases from its saliva.

### Unstoppable Charge

The bear accelerates toward its target with full body weight behind it, using the force of impact to knock opponents backward, downward, and off-balance. The collision alone can inflict bone-breaking trauma. If the charge connects, the bear will often pin the target and continue attacking with claws and jaws without mercy.

### Crushing Body Slam

Using its weight as a weapon, the bear falls upon or throws itself against opponents, attempting to crush them beneath its mass. This attack is most effective against targets already on the ground or those who have been knocked down.

## Special Abilities

### Overwhelming Strength and Resilience

Cave Bears possess physical power that exceeds even brown bears by a significant margin. They can overturn massive boulders, break through wooden doors and structures, and crush stone with their jaws. Their skeletal density and muscle composition give them extraordinary resistance to both cutting and blunt trauma. Weapons that would cripple humans pass through or bounce off without crippling effect.

### Ancient Predatory Instinct

The Cave Bear hunts with intelligence and patience that exceeds most creatures. It will stalk prey for hours, exploit terrain to maximize advantage, and attack at moments of weakness. It learns from encounters and adapts tactics. This is not a mindless beast but a calculating predator of terrifying effectiveness.

### Territorial Fury

Unlike other bears, Cave Bears do not tolerate intrusion. They view territorial violation as an existential threat and respond with absolute violence. This fury can override pain and self-preservation, making a cornered or defending Cave Bear nearly impossible to disengage from combat.

### Endurance

Cave Bears can sustain physical exertion and combat for extended periods, accumulating fatigue slowly. Their reserves of strength seem almost inexhaustible. A Cave Bear may continue fighting long after creatures of similar size would collapse from exhaustion.

## Attributes

Strength
: 26-31 (1d6+25)

Endurance
: 19-24 (1d6+18)

Agility
: 8-13 (1d6+7)

Perception
: 12-17 (1d6+11)

Scent
: 6-9 (1d4+5)

Aura
: 4-7 (1d4+3)

Will
: 13-18 (1d6+12)

Reasoning
: 4-7 (1d4+3)

Creativity
: 4-7 (1d4+3)
