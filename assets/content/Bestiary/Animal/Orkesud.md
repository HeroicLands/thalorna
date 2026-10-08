---
shortcode: orkesud
name: {full: Orkesud, aliases: [The Mirage-Stalker]}
type: being
subType: creature
description: "A tall, lean clay-pan ambusher whose polished scales shimmer like open water in the noon heat and draw thirsty travelers in to die."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+7
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+12
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Lunging Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Lunging Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Throat Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Throat Bite
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
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
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
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 130, calc: "130"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

Ahead, past the last of the dunes, the sand ends in a lake. It is small and bright, no more than a bowshot across, with a rim of pale reeds and a glitter on it that hurts your eyes, and your camels, which have been plodding for six hours, lift their heads and quicken. The lake is beautiful. It is also moving, a little, the way a lake does not: sliding sideways across the flat, thinning, widening, keeping its edge a hundred paces from your feet however fast the beasts go. When you are close enough to see the dry clay beneath it you can also see the thing standing in the middle of the glitter on four long gray legs, as still as a post, with its head down as if it were drinking.

# Dossier {#dossier}

The Orkesud is a tall, lean ambush hunter of the open pans and the clay flats, and the heat-shimmer is its lure and its cover. Its hide is built of overlapping scales of a pale, polished gray that throw the noon light back in a trembling film, so that from a distance the animal and the haze around it are one wavering patch the color of water. A thirsty traveler walks toward the patch, and the Orkesud waits. The tribes of the sands call it by the word for heat and the suffix of a doer, "the heat-doer", and the caravan masters of the road say "the mirage" and mean the animal.

It is a patient animal, and one of the few in the waste that hunts by day. The sand stalkers and the camel spiders wait for the cool; the Orkesud works the dead hours between mid-morning and mid-afternoon, when the air over bare ground is moving and no eye can be sure of what it sees.

## Presentation

The body is that of a heavy lizard raised up on legs like a heron's: a long barrel of a trunk about seven feet from snout to tail-root, carried a yard clear of the ground, with a neck as long as the legs and a narrow, wedge-shaped head. The scales on the back and flanks are flat, broad and slightly cupped, and each one holds a thin skin of air beneath it. In the heat the animal pumps these scales open and shut, and the fluttering produces the shimmer that surrounds it. At rest in the cool, or dead, the hide is a dull gray and the effect is gone. The belly is soft and the color of old ivory. The eyes are small, amber and set on the sides of the head, so that the Orkesud views a traveler with one eye at a time, turning its head as it watches.

The jaws are long, shallow and set with rows of hooked teeth. The forefeet carry three heavy claws, each as long as a man's finger, and the animal strikes with them, tucked under the body like a sprung trap, rather than with its mouth.

## In the Land

The Orkesud ranges the bare clay pans, the cracked salt margins and the gravel reaches of the Hosikor and the Idwakor, anywhere that heat can lie on the ground and bend the light. The [[place-ewod|Salt Basin]] is its stronghold, and the long, dry stages of the stone desert hold more of them than any caravan master likes. Its lair is a shallow scrape on the shade side of a boulder or the rim of a pan, where it spends the cool of the night and the dawn. At midmorning it walks out to its watching place, usually the edge of a real seep or a pan that holds a thumb's depth of brackish water after rain, and settles to wait.

It does not need the water. It stands by water because water draws prey, and it prefers a seep too small for a tribe to own, since an owned seep is watched. Tribes who water at a spring in its country put a stone marker a day's ride out and say that anything beyond the stone is the Orkesud's.

## Key Behaviors

An Orkesud hunts by standing still. It can hold one position for an hour, with its neck bent and its head low, and the shimmer of its scales does the work of drawing prey toward it. A string that is short of water turns toward a lake. A lone rider on a thirsty horse does the same. An animal fresh from a long stage will walk to a shimmer without any urging at all, and the Orkesud lets it come within twenty feet before it moves.

It kills one animal at a time and eats it where it falls, then rests for days. A string of camels meets it as a single dead beast and a stampede, and it has little interest in the rest.

It avoids the night, and it avoids the wind. A dust storm blinds it and a hard gale breaks the shimmer, and an Orkesud caught in either goes to ground.

## What the Tribes Do

The first rule of the sand tribes' travel is that nobody walks toward water that moves. A rider who sees a lake on the flat throws a stone at it, and a lake the stone does not reach is left alone. A guide who knows a country knows where its real waters are and rides to them by the stars and the stones, and a caravan that trusts its own eyes pays him for the privilege of finding out what is wrong with them.

The tribes also hunt the Orkesud, for the hide. A skin of Orkesud scale, dried and cut into plates and stitched to felt, makes a shield-cover that throws back a spear's glint, and the plates are worn on the cheek-guards of the raiders' helmets. A hunter walks to the watching place in the half dark, before the shimmer begins, and waits in a pit with a spear and a rope of braided hair. An Orkesud killed with its scales still wet and fluttering is a prize in the market at [[place-qisomrktcmp|Qìso]].

## Signs

- A lake that holds its place on the flat while every other mirage drifts.
- Clear, still air above a patch of ground where nothing grows: no thorn, no lizard, no insect.
- A ring of bleached bones, camel skulls and the skulls of dogs, within a stone's throw of a small pool.
- Gray scale-flakes in the sand, shed in the heat and catching the light like mica.
- Claw marks scored in the clay in sets of three, deep as a thumb.
- A camel that stops, swings its head away and will not be turned back toward the glitter.

## Combat Strategy

The Orkesud kills with a single stroke from ambush and withdraws if the stroke fails. It rises from its crouch with the speed of a trap, covers the last twenty feet in a rush and strikes with the foreclaws at the throat or the belly of its victim. If the first blow takes, it pins the prey with its weight and finishes with the jaws. If the first blow misses, it backs off, resets itself and watches. It does not press a fight against a party that stands together.

Its weakness is the glare itself. The shimmer works in the open, in direct sun, and a party that approaches from the shade side of a dune or fights it in the lee of a wall sees the animal as it is: a tall gray lizard, slow to turn, on legs that cannot bear sudden sideways force. Throwing water on the scales kills the effect for several minutes.

## Attack Methods

### Lunging Claws

The primary attack. The Orkesud launches from its crouch and rakes with all three foreclaws. The claws open a victim from shoulder to flank, and the weight of the rush bears the victim to the ground.

### Throat Bite

Once the prey is down, the long jaws close on the throat or the back of the neck. The hooked teeth hold what they take.

## Special Abilities

### Shimmer Hide

In direct sun the scales produce a wavering light that spreads the animal's outline across the air around it. Missile attacks and spells aimed at it from more than a short distance are uncertain, and a person looking directly at it from a distance is likely to see water. It fails in shade, in the wet and at night.

### Stillness

The Orkesud can hold a pose for an hour. A creature that has not already marked its location will not see it move until it strikes.

### Heat Tolerance

It feeds and fights in heat that sends other desert hunters to ground, and a noon that cooks a rider leaves it unhurried.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)

## A Hook

A small tribe of the deep desert holds the only seep within four days of a stretch of the road, and a mirage has taken up residence beside it. Three riders have walked toward it in the last month and have not come back. The tribe has worked out that the creature is a hunter and not a ghost, and it will pay a hunter's price in silver and in water for a party that kills it. The party has to approach from the shade at dawn, before the heat comes up, and then wait in a pit through a morning in which every other animal on the flat is walking toward the lake.
