---
shortcode: viper
name: {full: Viper, aliases: []}
type: being
subType: creature
description: "A venomous ambush serpent, gram-for-gram among the deadliest creatures, killing prey larger than itself with precise, potent strikes."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+3
    end: 1d4+5
    dex: 1d6+10
    agl: 1d4+13
    per: 1d6+14
    aur: 1d4+1
    wil: 1d4+6
    rea: 1d4+1
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 18}}
    - name: Venomous Bite
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
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forebody, shortcode: torsozone, probWeight: 5}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
            canHoldItem: false
            probWeight: 4
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
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 30, calc: "30"}
      reachBase: 0
      bodyScaleBase: 0.67
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[viper|Viper]]{float=top-left}

The dry-stone wall is warm from the afternoon sun, and a line of dark diamonds shows on a flat gray stone among the lichen. It is a snake three or four feet long, the body thick for its length, and the broad, flattened head is lying on its own coils. Two small pits sit between the eyes and the nostrils. The head lifts, slowly, and tilts to look at your hand.

# Dossier {#dossier}

The Viper is the thick-bodied venomous snake of the grassland, rock and forest edge, three to eight feet long, found in the dry hills of the Bizarian [[place-southrnmrch|Southern March]], on the farms of [[place-velanthrgn|Velanthia]] and across the warmer lands. It relies entirely on venom and a precise strike to bring down prey larger than itself, and it is among the deadliest of snakes for its size.

## Presentation

A sinuous snake in patterns that make it very hard to see, each region's snakes marked differently. The head is distinctly triangular and flattened, with forward-facing eyes and heat-sensing pits between the eyes and the nostrils. The body is slender but muscular. The mouth opens wide, and the hinged fangs fold back against the roof of the mouth when not in use.

## In the Land

Vipers lie in the grassland, rocky hills and forest edges of the warm and temperate lands, from the dry hills of the Bizarian [[place-southrnmrch|Southern March]] to the farms of [[place-velanthrgn|Velanthia]] and the hot country of the south. A viper lies coiled under a rock, in a stone wall or in a grass tussock, motionless for hours, and strikes at anything that comes within reach. It is most active at dusk and on warm nights.

## Key Behaviors

Vipers lie motionless for long periods waiting for prey. They are active at night and at dusk, in the cool parts of the day. They hunt by sight, heat and scent. They live alone except in the mating season.

## What the Farmers Do

Farmers and haymakers wear boots in the high grass and run a stick before them. A bite is cut, sucked and bound, and the victim carried to a healer or a herb-wife. Hay is turned in daylight, and a stone wall is not rebuilt in the heat of the day. A viper in a house is a bad omen, and the family carries it out on a shovel. Children are taught to look before sitting. The venom is bought by apothecaries.

## Signs

- A zigzag line down the back of a coiled gray or brown snake lying on a sunlit stone.
- A sharp hiss from the grass at a boot's height.
- A shed skin hung on a bramble.
- A small dead animal under a bush with two puncture holes.
- A dog yelping and holding up a swollen foot.

## Combat Strategy

The viper strikes with explosive speed when prey is within range, injects venom, and retreats to wait for the venom to do its work. If engaged with something that fights back, the viper attempts to retreat.

## Attack Methods

### Venomous Bite

The viper delivers a rapid bite using specialized hinged fangs to inject potent neurotoxic or hemotoxic venom designed to incapacitate prey.

### Constriction

For larger prey that don't succumb immediately to venom, the viper may attempt light coiling to hold the victim in place while venom works.

## Special Abilities

### Camouflage

Perfect color matching to environment makes the viper nearly invisible when still.

### Heat Sensing

Specialized pits detect warm-blooded prey in total darkness.

### Venom Delivery

Highly specialized fangs deliver precise venom doses that incapacitate prey efficiently.

### Rapid Strike

The viper's strike speed is very high, difficult to avoid once prey is within range.

### Additional Information

Vipers are most dangerous to unprepared targets. The creatures avoid conflict with anything that demonstrates active defense. Antivenin neutralizes venom effects if applied quickly. In cold weather or after long fasts, vipers move slowly and are less dangerous.

## Attributes

- **Strength:** 4-7 (1d4+3)

- **Endurance:** 6-9 (1d4+5)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 2-5 (1d4+1)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 2-5 (1d4+1)

- **Creativity:** 2-5 (1d4+1)
