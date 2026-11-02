---
shortcode: wildturkey
name: {full: Wild Turkey}
type: being
subType: creature
description: "A large, ground-feeding forest bird of the eastern oak hills, bronze and iridescent, a cautious flocker that runs fast, flies in short bursts and roosts in the trees."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-pawprint, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+2
    end: 1d6+8
    dex: 1d6+6
    agl: 1d6+10
    per: 1d6+12
    aur: 1d6+5
    wil: 1d6+6
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 15}}
    - name: Spur Slash
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Spur Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -3, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Peck
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 45
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Peck
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
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
            probWeight: 3
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: -1, edged: -2, piercing: -3, fire: -1}
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 0.62
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aerial
        feetPerRound: 70
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

Something big and dark is moving in the leaf litter under the oaks, one step and a scratch, in the unhurried pace of a farmyard hen. It lifts its head: bare blue-gray skin on a small head, a red wattle swinging at the throat, a tuft of black bristles on the chest. The bronze of its feathers goes green and copper where the light touches them. Then it sees you, and it is a running streak between the trunks, and a dozen more run after it.

# Dossier {#dossier}

The Wild Turkey is the largest ground bird of the eastern forests, three to four feet long and fifteen to twenty-five pounds, a flocking forager of oak and hickory hills. It lives in the forested hills and river bottomlands of [[place-tokchiaskargn|Tokchi Aska Region]], the country of the [[affiliation-tokchiaska|One Fire]], along the ridges that run down to the [[place-hokpargn|River Valley]]. It is a staple game bird of the nation's hunters.

## Presentation

A heavy, long-legged bird with a small head, a long neck and a broad, rounded tail. The feathers are dark bronze and black, barred with copper and green where the light catches them. The head and neck are bare, blue-gray in the hen and bright red, white and blue in a displaying tom, with a fleshy wattle at the throat and a tuft of coarse hair, the beard, hanging from the chest. A tom has sharp spurs on the back of each leg and fans his tail into a great rounded disc to display.

## In the Land

Wild turkeys live in the hardwood forests and the brushy edges of fields and bottomlands. They scratch through the leaf litter for acorns, hickory nuts and chestnuts, and eat seeds, berries, grasshoppers and other insects. They fly up at dusk into tall trees to roost, away from foxes and wolves, and come down at dawn. In winter they gather in large flocks in the oak hills where the mast lies thick.

## Key Behaviors

Turkeys live in flocks of hens and young animals, with toms keeping their own groups until the spring. A flock feeds through the morning and evening and rests in the middle of the day, with one or two birds always watching. At a sign of danger, a sentinel gives a sharp "putt" and the flock runs, with their heads low and necks stretched, at the speed of a galloping horse, or flies in a short burst to the nearest tree. In the spring toms gobble from the roost at dawn, a sound that carries a mile, and strut with fanned tails and dragging wings before the hens. Hens nest on the ground in leaves and brush and defend the poults with flapping and hissing.

## What the One Fire Do

The [[affiliation-tokchiaska|One Fire]] hunt the turkey in the oak, hickory and chestnut hills along with deer and bear, for its meat. The feathers fletch arrows and trim cloaks, the long bones become awls and whistles, and the spurs are tied into rattles. Turkeys come to the edges of the bottomland fields in autumn to feed on stubble, and the farmers of the eastern towns drive them off or take them there. The bird is an everyday food and a common sight.

## Signs

- Patches of leaf litter scratched down to bare earth in long, parallel strokes.
- Three-toed tracks, hand-sized, in soft mud along a creek bank.
- A dusting hollow in dry soil, scattered with a few bronze feathers.
- A gobbling call at first light from the trees above a ridge.
- Droppings and feathers beneath a tall oak where a flock roosts.

## Combat Strategy

The turkey's strategy is to run and to see first. Its sight is extraordinary, and a flock posts sentinels, so that a hunter approaching in the open is usually spotted at a distance. It runs to cover or flies up to a high branch and sits motionless. A tom cornered by a person or a dog turns and fights in a flurry of wings and spurs. A hen guarding poults hisses and flaps. None of these fights lasts long, and the turkey breaks away at the first chance.

## Attack Methods

### Spur Slash

A tom leaps and strikes with his spurs, raking at the legs or arms of whoever is near. The spurs are sharp, an inch or more long, and a mature tom can open a deep cut.

### Peck

The turkey jabs with its hard, pointed beak at hands and faces. The blows are quick and numerous but do not carry much weight.

### Wing Beat

A cornered bird flaps and buffets its attacker with its wings, scratching and kicking at the same time. The noise and dust of this display are often enough to make a dog back away.

## Special Abilities

### Keen Eyes

The turkey sees at a great distance and notices the slightest movement. A hunter must be still and hidden to approach one.

### Roost Alarm

A turkey's alarm call alerts the whole flock and often other forest animals. A flock on the ground scatters in all directions, and the few that fly go straight up into the trees.

### Burst Flight

Despite its bulk, the turkey flies strongly over short distances, rising almost vertically to clear a tree or cross a stream. It cannot sustain the flight and drops to the ground again within a few hundred yards.

## Attributes

Strength
: 3-6 (1d4+2) — A bird; the legs and wings are strong for its size but it is not a fighter

Endurance
: 9-14 (1d6+8) — Walks and scratches all day and runs far when pressed

Dexterity
: 7-12 (1d6+6) — Clean, steady movements when picking seeds and insects out of the litter

Agility
: 11-16 (1d6+10) — Fast on the ground and explosive in flight for short bursts

Perception
: 13-18 (1d6+12) — Extraordinary sight and good hearing; the flock is nearly impossible to approach unseen

Aura
: 6-11 (1d6+5) — An ordinary forest bird without any special presence

Will
: 7-12 (1d6+6) — Cautious and quick to run, but a hen defends her poults

Reasoning
: 4-7 (1d4+3) — Learns the flock's feeding grounds and roosts

Creativity
: 3-6 (1d4+2) — Little improvisation; relies on the flock and habit
