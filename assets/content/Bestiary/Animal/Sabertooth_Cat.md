---
shortcode: sbrtthct
name: {full: Sabertooth Cat, aliases: []}
type: being
subType: creature
description: "A muscular ambush-hunting feline that fells prey far larger than itself through precision and raw power across grasslands and scrublands."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-lion, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+12
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Lethal Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Lethal Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
      bodyScaleBase: 1.17
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[sbrtthct|Sabertooth Cat]]{float=top-left}

The wounded carcass of a bison lies in a trampled hollow at the edge of the long grass, its throat laid open in a single deep gash. A few paces off, something crouches behind a clump of tall stems, tawny and rosetted, its shoulder blades rising and falling. A massive head turns, and two curved teeth as long as a man's hand hang down past the lower jaw, wet and gleaming. The golden eyes find you.

# Dossier {#dossier}

The Sabertooth Cat is the big stabbing cat of the grassland and woodland edge, eight to ten feet long and four to five feet at the shoulder. It hunts the grassland of [[place-penqalchaklrgn|P'enqal Ch'akal]], where the herds migrate, and the savanna and forest fringe of the [[place-sthrnsvnhs|Southern Savannahs]], taking animals much larger than itself by a leap and a stab of the long canines. One that has hunted people may take to them.

## Presentation

A heavily muscled, compact cat with a short coat of tawny gold or faint red, marked with darker rosettes that blend into dappled grass and shadow. The mark of the animal is the pair of long upper canines, four to six inches below the jaw, curved and sharp like scimitars. The head is large for the body, with massive jaw muscles, golden eyes and strong paws with retractable claws. The tail is long and muscular, a counterbalance in the leap.

## In the Land

Sabertooth cats hunt the open grassland and woodland edge of [[place-penqalchaklrgn|P'enqal Ch'akal]], where the migrating herds pass, and the savanna and forest fringe of the [[place-sthrnsvnhs|Southern Savannahs]]. A cat holds a range of many miles around a lying-up place in rock or thick cover, and takes animals much larger than itself with a leap and a stab of its long canines. It hunts at dawn and dusk and drags a kill into cover.

## Key Behaviors

Sabertooths live alone and hold large ranges against other cats. They hunt from ambush with patience and a sudden, powerful leap, mostly at dawn and dusk and at any hour when the chance comes. They are intelligent and learn the habits of the herds and adjust their tactics. They mark their ground with claw-marks on trees and scent, and call to one another over long distances.

## What the Hunters Do

Hunters keep clear of a sabertooth's range and read its kills from the vultures. A cat that has taken to stock or to people is hunted by a party of spearmen with dogs, and the skin and the long teeth are a hunter's trophy for life. The long canines are made into necklaces and ceremonial knives. Herders keep their animals in thorn cattle-folds and a watch at night. A lone traveler on open grass sleeps in a tree.

## Signs

- A great round pug-mark, as wide as a plate, with four toes and a heel pad.
- A bison or a zebra carcass, killed with a deep wound in the throat and dragged into the grass.
- A snarl in the long grass at dusk, and a herd that runs.
- Claw-marks on a trunk at the height of a standing man's head.
- Vultures circling a thicket where nothing else moves.

## Combat Strategy

The sabertooth cat’s primary tactic is ambush — using terrain and vegetation to approach prey undetected, then launching an explosive attack intended to incapacitate the victim instantly. The initial strike targets the neck, skull, or spine with the powerful saber teeth, intended to sever the spinal cord or carotid artery, causing rapid death. If the initial strike fails, the cat uses claws and continued biting to subdue prey. If the engagement goes against the cat, it will retreat to fight another day, unwilling to risk serious injury through prolonged combat.

## Attack Methods

### Lethal Bite

The sabertooth launches its entire body weight into a bite targeted at the throat, neck, or skull, using the elongated saber teeth to pierce and sever vital structures. This bite is rapid, powerful, and designed to incapacitate or kill instantly. The curved teeth can pierce bone and sinew with ease.

### Raking Claws

Once the cat has secured hold with its jaws, it uses its powerful forelimbs to rake targets with extended claws, creating additional trauma and wounds. The claws can tear through leather and muscle with ease.

### Crushing Jaw Pressure

The cat’s jaw muscles are extraordinarily powerful, capable of crushing bone and holding prey immobile even if the prey struggles or attempts escape. A victim caught in the cat’s jaws is unlikely to escape without outside assistance.

## Special Abilities

### Ambush Predator

The sabertooth cat is superlatively effective when attacking from cover or from an unexpected direction, striking harder and more surely from ambush or from a hidden position. The cat is nearly silent when stalking and can approach prey without being heard or seen.

### Killing Strike

The sabertooth’s elongated saber teeth are specifically adapted for precision attacks on vital areas. Attacks targeting the neck or throat hit more reliably and inflict increased damage. A successful hit can instantly incapacitate large prey through spinal cord or artery damage.

### Explosive Speed

Despite its size, the sabertooth cat can move with explosive acceleration, closing distance in moments. This capability is most effective in the first attack, where momentum and surprise create maximum advantage.

### Territorial Intelligence

The cat’s familiarity with its own territory makes it dangerous within its established range — the cat knows the terrain and can use it tactically while opponents do not.

### Additional Information

Sabertooth cats avoid areas with dense settlements and significant humanoid presence, preferring wilderness where large prey animals are found. A cat that has successfully hunted humanoids becomes far more likely to target humans in future encounters. The cats’ saber teeth are valuable to hunters and craftspeople and can be harvested after death to create weapons or ornaments. A sabertooth defending a kill or cubs becomes significantly more aggressive and dangerous than a normally hunting cat.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 8-11 (1d4+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
