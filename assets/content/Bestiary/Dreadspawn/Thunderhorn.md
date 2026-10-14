---
shortcode: thndrhrn
name: {full: Thunderhorn, aliases: []}
type: being
subType: creature
description: "A massive, storm-infused beast of territorial fury that roams lightning-swept highlands, feeding on the electrical energy of thunderstorms."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+14
    end: 1d4+14
    dex: 1d4+5
    agl: 1d4+6
    per: 1d4+6
    aur: 1d4+8
    wil: 1d4+10
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Electrified Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Electrified Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: fire}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Thunderous Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Thunderous Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Electrical Discharge
      type: skill
      system:
        shortcode: bolt
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: bolt
          name: Electrical Discharge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 180
          drawBase: 0
          traits: {}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 2000, calc: "2000"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thndrhrn|Thunderhorn]]{float=top-left}

The storm comes across the altiplano like a wall, black underneath and white where the lightning runs through it, and the herders are driving their flocks down into the gorge as fast as they can. Out on the open grass, something is not going down. It is walking toward the storm: a beast as tall as a house, built like a buffalo, slate-gray and blue-black, with a great forward-curving horn and two lesser ones. The air round it crackles. Blue light crawls along its horns and down its flanks, and the grass under its feet smokes. Lightning strikes the plain a hundred yards from it, and it lifts its head into the flash, and bellows.

# Dossier {#dossier}

The Thunderhorn is a dreadspawn of storm and bulk: a horned beast fifteen to twenty-two feet long and ten to fourteen feet high, built like a buffalo or a rhinoceros, whose body carries a charge like a thundercloud. It gores and tramples with lightning crawling on its horns, throws shocks that scorch, feeds, as far as anyone can tell, on the lightning of storms, and grows stronger in them. It claims miles of open high country. One ranges the altiplano of [[place-kuxiixbalrgn|K'uxi Ix'bal]], the high, cold grassland at the threshold of Southern K'ich'chik's forsaken wastes, where storms sweep the plateau and the herders follow their flocks. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The thunderhorn is massive and deep-chested, with a high hump over the shoulders, short powerful legs and broad hooves. Its hide is thick and tough, the colors of storm cloud, slate, charcoal and bruised blue-black, and in storms it is veined with flickers of light. It carries a great horn curving forward from the snout and two lesser horns above the eyes, and the horns are dark and glassy at the tips. Its eyes are pale. The air round it smells sharp, like the air after lightning, and its hair stands up on end. When it is roused, or in a storm, light crawls over its horns and flanks with a crackling hiss, and a man close to it feels his own hair rise.

## In the Land

The altiplano of K'uxi Ix'bal is an immense high plateau of thin air and cold wind, sparse grass and hardy shrub, broken by isolated highlands and scattered with the outpost-cities of the Itzáni priesthood, and the great herds of the high grazing roam it with the pastoral peoples who tend them. The thunderhorn ranges the most exposed part of the plateau, the open grass and the bare rises where lightning strikes most often, several miles of it, and patrols that ground regularly. It grazes, and it goes out into every storm that crosses its range, and in storms it is fastest and fiercest. Between storms it is sluggish and short-tempered. It does not go down into the sheltered valleys or the gorges.

## Key Behaviors

The thunderhorn is solitary and territorial. It drives every large animal off its ground: the herds, the herders' animals, the cats that hunt them. It is drawn to storms and to high places where lightning falls, and it walks into storms and stands under them, and lightning strikes near it and into it and it is the stronger for it. It is aggressive at any time and furious in a storm. Hurt or cornered, it discharges more and more violently, and loses what judgment it has.

## What the Herders Do

The pastoral peoples of the plateau move their flocks with the seasons, and they move them off the thunderhorn's ground whenever a storm is coming, down into the sheltered gorges, as fast as they can. They have learned that it cannot follow them below the rim of a gorge, where the ground is wet and the rock is deep. A herder caught in the open by it lies flat in the wet grass, away from his staff and anything metal, and hopes. The priests of the Itzáni outposts, who attribute the cracked stones of the ceremonial roads to the wrath of [[lore-puqilchaqundty|P'uqil Ch'aqun]], master of storms, call the thunderhorn his beast, and they will not let it be hunted; a herder who has lost his flock to it is told that the god has taken his tithe.

## Signs

- A sharp smell in the air, like the air after a lightning strike, on a clear day.
- Grass scorched in long, branching streaks across a rise where no fire has been.
- Huge, three-toed hoofprints with the grass inside them burned black.
- Herd animals that stampede off the open plateau before a storm, all in one direction.
- A bellowing out on the plain when a storm breaks, and a flicker of blue light where nothing should be.

## Combat Strategy

The thunderhorn charges first, with its whole weight behind horns that crackle with lightning, to gore or trample whoever is in front of it. Then it stamps and discharges, throwing shocks round it, and charges again. It is a straightforward fighter and does not plan, but in a storm it calls the lightning down near its enemies. Hurt, it discharges wildly and charges anything that moves. Wet ground and grounding bleed its charge away, and water soaks up its shocks.

## Attack Methods

### Electrified Charge

The thunderhorn lowers its horns and charges, and the horns discharge as they strike: a man hit is gored, crushed and burned at once, and thrown.

### Thunderous Stomp

It rears and brings a forefoot down, and the ground jolts and a burst of lightning crackles outward from the blow, knocking men down and scorching them.

### Electrical Discharge

Without charging, the thunderhorn throws a burst of lightning from its body and horns in a ring or a cone round it, scorching everything it touches.

## Special Abilities

### Electrical Embodiment

Part of the thunderhorn is lightning. Lightning does not harm it, it feeds on lightning strikes, and storms make it faster and stronger.

### Lightning Authority

In an open storm, with a few moments' concentration, it calls a bolt down from the clouds onto a place it chooses.

### Primal Fury

Hurt or cornered, it discharges more and more fiercely and attacks with reckless violence, and its judgment fails as its fury grows.

### Grounding Weakness

Wet ground, standing water, deep rock and anything that grounds its charge bleed its power away. Soaked or standing in water, it cannot build its charge.

## Attributes

- **Strength:** 15-18 (1d4+14)

- **Endurance:** 15-18 (1d4+14)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 9-12 (1d4+8)

- **Will:** 11-14 (1d4+10)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
