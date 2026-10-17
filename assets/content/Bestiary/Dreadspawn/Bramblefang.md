---
shortcode: brmblfng
name: {full: Bramblefang, aliases: []}
type: being
subType: creature
description: "A made woodland apex predator that blends indistinguishably into thickets, striking from shadow-touched forests and groves."
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
    str: 1d4+12
    end: 1d4+10
    dex: 1d4+8
    agl: 1d4+10
    per: 1d4+6
    aur: 1d4+8
    wil: 1d4+8
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Tearing Bite
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
          name: Tearing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Thorn Swipe
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: quill
          name: Thorn Swipe
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[brmblfng|Bramblefang]]{float=top-left}

The path into the coppice narrows between two banks of bramble, and then it stops: a wall of thorn across it, head-high, woven so tight you could not put a hand through. Behind you, the way you came has closed the same way. You are sure it was open a moment ago. In the bramble to your left, two yellow eyes open, low down, and the brambles around them move together, as one thing, and step out onto the path. It is the size of a big dog and shaped like a badger, and it is made of thorn: black wood and bark knotted together, every inch of it bristling with hooked thorns as long as daggers.

# Dossier {#dossier}

The Bramblefang is a dreadspawn made of living wood and thorn: a low, heavy, badger-shaped hunter about a hundred pounds in weight, its whole body a mesh of thorned vine and black bark, which grows thickets round itself and hunts from inside them. It is cunning, patient and territorial, and it eats meat. The one the river villages of [[place-thornwald|Thornwald]] know lives in the eastern [[place-vrystwald|Vristwald]] where the forest gives way to the grain country of [[place-velanthrgn|Velanthia]], and it has turned a stretch of the forest edge into a bramble maze that the villagers will not enter. It was made, as all dreadspawn are; it is alive, and it does not breed.

## Presentation

The bramblefang is built like a badger or a wolverine, broad, low and strong, on short legs with long claws of hard dark wood. Its body is woven from thorned vines, branches and black bark so tightly that no strand can be pulled away from the rest. The thorns along its back and flanks are thick and curve backward, and they catch and tear on anything that brushes them. The head is a knot of thorn with two bright yellow eyes deep in it, and the mouth, when it opens, is lined with teeth of polished wood. It smells of crushed leaves and sap. It moves almost silently in its own thicket, and loudly, with a crackle like a fire, outside it.

## In the Land

Thornwald is the forest's most permeable frontier: landings and villages along the rivers where [[lore-varokhiclt|Varokh]] and Velanthian families have traded and married across the line for generations. The bramblefang holds a stretch of mixed woodland and coppice there, a few miles of it between two river landings, and over the years it has grown its ground into a maze of bramble thickets, with paths that open and close. It hunts deer, pigs, dogs and the stock of the forest-edge farms, and it lies up in the deepest of its thickets. It does not go out into the open grain fields of Velanthia, where it has no cover, and it does not cross the rivers.

## Key Behaviors

The bramblefang hunts by sound and movement. It lies still in its thicket, indistinguishable from it, until something passes close, then charges out. It shapes its ground to suit it: it grows bramble walls to channel animals down particular paths, closes paths behind them, and waits where the channel ends. It is clever and learns, and it uses tricks: it drags a carcass to the mouth of a path to draw in scavengers and hunters, and it has been seen to limp, as if injured, to draw a dog after it. It attacks anything that comes into its ground and never follows prey out of it.

## What the River Villages Do

The landings on either side of the bramblefang's ground have moved their paths round it, and the river traffic between them goes by water. Nobody cuts coppice or gathers firewood in the stretch where the brambles grow wrong, and children are told that a thorn hedge across a path that was open yesterday means turn round at once. The village elders on the Varokh side and the reeves on the Velanthian side have met over it more than once, and both sides agree on the remedy, which is fire. Twice the villages have burned the edge of the thicket in a dry autumn, and the creature has fled from the fire and come back to the burned ground the next year and grown it again. The Varokh hold that a thing like that is the sign of something worse nearby, and send their Shamans to the edge to look for it.

## Signs

- A bramble hedge across a path or a ride, head-high and too thick to push through, where there was none before.
- Thorn thickets grown in long walls and channels, like a maze, with paths between them that change.
- Deer and pig carcasses inside a thicket, torn and pierced in many places, with thorns broken off in the wounds.
- Tufts of fur, hide and cloth caught on every thorn along a path.
- A crackling in the bramble like a small fire moving, with no smoke.

## Combat Strategy

The bramblefang attacks only when it has the advantage: from cover, at close range, with its prey hemmed in by its thickets. It charges, bites and slashes, and pushes its thorny body against its victim so that every touch tears. It uses the brambles round it to entangle and hold. If it is badly hurt or faces too many, it backs into its thicket and lets the thorns stop the pursuit, and it never chases anyone out of its ground. Fire it fears above everything, and it runs from flame.

## Attack Methods

### Tearing Bite

The bramblefang bites hard at a limb or the body and tears away. Its wooden teeth often come away with strips of flesh or armor caught in them.

### Thorn Swipe

It slashes with a thorned forelimb. The barbed thorns tear long wounds and lodge in them, and the wound keeps bleeding after the creature has pulled away.

## Special Abilities

### Entangling Brambles

The creature moves the brambles round it to wrap and hold a man's legs, arms or weapon, and a man held in them is torn by the thorns as he struggles.

### Thorny Body

Its whole body is armor and weapon. Anyone who grapples it or is grappled by it is cut at once, and a weapon swung at it can catch on the thorns and be torn out of the hand.

### Camouflage

Still, in undergrowth, it is a bramble thicket, and it can lie unseen for as long as it likes.

### Thicket Growth

Bramble and thorn grow fast where it lives, over hours and days, into walls and mazes that open for the bramblefang and close against everything else.

### Fear of Fire

Its body burns, and it knows it. Fire drives it back faster than any weapon, and burning its thicket strips it of cover and of the paths it hunts on.

## Attributes

Strength
: 13-16 (1d4+12)

Endurance
: 11-14 (1d4+10)

Dexterity
: 9-12 (1d4+8)

Agility
: 11-14 (1d4+10)

Perception
: 7-10 (1d4+6)

Aura
: 9-12 (1d4+8)

Will
: 9-12 (1d4+8)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)
