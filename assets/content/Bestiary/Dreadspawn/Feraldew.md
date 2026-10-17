---
shortcode: feraldew
name: {full: Feraldew, aliases: []}
type: being
subType: creature
description: "A made cervid of predatory intelligence that infiltrates ordinary herds and ambushes travelers before they sense the danger."
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
    str: 1d6+14
    end: 1d4+10
    dex: 1d4+6
    agl: 1d4+14
    per: 1d4+10
    aur: 1d4+5
    wil: 1d4+12
    rea: 1d4+5
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Antler Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Antler Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Fanged Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Fanged Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Talon Rending
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Talon Rending
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 1
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
          - {name: Torso, shortcode: torsozone, probWeight: 2}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[feraldew|Feraldew]]{float=top-left}

The deer are grazing the river meadow at the edge of the birch wood, a dozen of them, does and young and a buck with a modest spread of antler, and they lift their heads as you come along the bank and then go back to grazing. All but the buck. The buck keeps looking. It has the softest, gentlest eyes you have ever seen on an animal, and it walks toward you, slowly, through the herd, as a tame deer might come to a hand. Close to, its face is too narrow and too sharp, and when it opens its mouth to bleat, every tooth in it is a fang. Its forelegs bend at a joint where a deer's do not, and the hooves begin to unfold.

# Dossier {#dossier}

The Feraldew is a dreadspawn made in the likeness of a deer: a buck of ordinary size and fifty pounds' weight, with soft eyes and a modest rack of antler, that runs with a herd of real deer and uses it as a blind. Inside the likeness it is a killer, with fangs, dagger-tipped antlers and hooves that unfold into hooked talons. It hunts predators and people, never the deer it runs with. It is met in the forest-steppe belt of [[place-velanthrgn|Velanthia Region]], where mixed forest, river meadow and farmland interleave and the deer are many. More than one of the pattern has been killed there, which makes it one of the dreadspawn shapes its makers return to; each was made, each was alive, and none ever bred.

## Presentation

At a distance it is a fine buck, dappled brown and cream, healthy and graceful, with a rack of branching antlers that look natural. Close to, the wrongness shows: the face is too long and the angles of it too sharp, the eyes are a little too large and too steady, the antler tines are hard and pointed as daggers, and the mouth is full of fangs. Its legs bend at a joint too many. Its hooves are thick and split deep, and when it rears they open into jointed, three-hooked talons. It bleats like a deer. It moves like a deer until it attacks, and then it moves like nothing else.

## In the Land

The feraldew runs with the herds of the northern forest-steppe, the deer of the birch and pine woods and the river meadows between the great river-kingdoms' farmland. It stays with one herd for a season or for years, and when the herd moves, it moves. The wolves and lynxes that follow deer herds learn to stay away from a herd with a feraldew in it, and the herd itself seems unaware of it. It hunts the hunters: wolves, foxes, the bears that take fawns, and the men who come out from the villages for venison. It does not come into villages or farmsteads.

## Key Behaviors

A feraldew waits for prey to come to the herd. When a predator closes on the herd, or a hunter creeps up on it, the feraldew lets the deer scatter and stays, as if dazed or as if it were the slowest of them, until the hunter is close and committed. Then it charges, antlers down, or rears and strikes with the talons. It understands how hunters behave and uses the herd to cover its movements and to draw them in. It will lie down as if wounded to bring a hunter close. It is fiercely jealous of its herd and kills other predators that hunt it, and it eats what it kills, slowly, in cover.

## What the Villagers Do

The forest-steppe villages hunt deer as they always have, and their hunters learned the feraldew the hard way. A hunter who brings down a deer and walks up to it carries his spear ready, and a hunting party never sends one man alone to finish an animal off. A buck that does not run when the herd runs is left alone and watched. The river-princes' foresters, who keep the princes' hunting grounds, count dead hounds as the surest sign: a feraldew kills hounds before anything else, and a pack that comes back short by three or four from a deer hunt brings the foresters out in force, with fire, which it fears. A feraldew killed is hung up whole at the village gate for a week so that every child sees the fangs and the talons, and its antlers are kept in the shrine.

## Signs

- A herd that does not scatter properly: one buck that holds its ground when the rest bolt.
- Wolves, foxes and hounds found dead near a herd's grazing, gored and torn by talons.
- Hoofprints at the edge of a meadow that change partway along the trail into the prints of something clawed.
- A herd's movements that are too orderly, all of it turning together, as if steered.
- A hunter's camp found in the morning with its fire out and its hunter gone.

## Combat Strategy

A feraldew attacks only with the advantage. It waits until its victim is among the deer, confused about which one is the danger, or committed to taking what looks like an easy kill. Its first attack is a charge with the antlers down, from a few strides out. If that lands, it closes and bites. If its victim escapes the charge, it rears and rakes with the talons. It uses the panicking herd to break line of sight and to circle. Once it has been recognized it loses most of its advantage, and a feraldew that is identified and faced by several men usually breaks off and goes into the forest.

## Attack Methods

### Antler Gore

The feraldew lowers its head and charges, and the dagger-pointed tines drive in with the speed of the charge behind them. A lightly armored man can be impaled.

### Fanged Bite

Close in, it bites, and the fangs leave deep punctures and tear away flesh. It bites to wound and weaken, and keeps biting.

### Talon Rending

Rearing on its hind legs, it unfolds the hooves of its forelegs into hooked talons and rakes down with them, quickly, again and again. The cuts are deep and bleed heavily.

## Special Abilities

### Deceptive Form

At any distance it is a deer, and within a herd it is nearly impossible to pick out without careful watching.

### Unfolding Talons

Its forehooves unfold into jointed talons for slashing, gripping and climbing, and fold away again into hooves.

### Antler Defense

Its antlers are dense and very strong, and it catches and turns blows with them and protects its head with them.

### Herd Camouflage

It uses the herd as cover, moving through it to break line of sight and to circle a hunter, and a stampeding herd hides it entirely.

### Fear of Fire

Fire burns its hide badly and breaks its composure, and a feraldew faced with torches loses its patience and its cunning.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 11-14 (1d4+10)

Dexterity
: 7-10 (1d4+6)

Agility
: 15-18 (1d4+14)

Perception
: 11-14 (1d4+10)

Aura
: 6-9 (1d4+5)

Will
: 13-16 (1d4+12)

Reasoning
: 6-9 (1d4+5)

Creativity
: 9-12 (1d4+8)
