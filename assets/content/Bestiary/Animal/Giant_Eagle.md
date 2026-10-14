---
shortcode: gntegl
name: {full: Giant Eagle, aliases: []}
type: being
subType: creature
description: "A mount-sized mountain raptor with a twenty-foot wingspan and armor-piercing talons, hunting high passes with calculating tactical intelligence."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    dex: 1d6+12
    agl: 1d6+11
    per: 1d6+13
    aur: 1d6+7
    wil: 1d6+10
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 55}}
    - name: Talon Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 7, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak Tear
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Tear
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: piercing}
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
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
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
            bodyZoneCode: lwingzone
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
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1.71
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 110
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntegl|Giant Eagle]]{float=top-left}

A shadow the size of a longship slides across the scree and up the far wall of the valley, and the goats scatter under it. You look up into the sun and see it bank: twenty feet of wing, gold and bronze with the light through the primaries, two legs trailing talons as long as sword-blades. It is not coming for the goats. It has turned, lost height, and is coming down the valley at the height of a tall tree, straight along the path, and the cry it gives as it comes rings off both walls.

# Dossier {#dossier}

The Giant Eagle is a mountain eagle with a wingspan of twenty feet and talons that go through a mail hauberk, which nests on the high crags of the [[place-nrdlndsrgn|Nordlands]] behind the fjords and on the peaks of the [[place-graznmntns|Grazian Mountains]], and holds a hunting range of a hundred square miles or more from the air. It takes goats, caribou calves, lambs and the pack animals of a caravan on an exposed ridge, and a nesting pair takes a man who climbs toward the eyrie. The Varokh of [[place-vrystwald|Vrystwald]] keep it as a wesk: four of their villages, [[place-arnstein|Arnstein]] on its eagle crag among them, take the eagle for their totem and keep the crag where it nests as sacred ground.

It is not a hunter of men by habit. It is a thing that owns the sky over a range of mountains and resents a trespasser in it.

## Presentation

A heavily built eagle with dense golden-brown plumage, paler at the head and nape, with a hooked beak that opens wider than seems possible and tears cleanly. The eyes are gold or amber, set forward. The legs are thick and feathered to the foot and the talons are curved, each as long as a man's finger, with an edge that opens leather like cloth. The wings are long and broad, built for soaring on the mountain thermals and for a stoop that comes down out of the sun faster than an arrow. It weighs fifty pounds and lifts a goat.

## In the Land

Pairs nest on ledges and rock spires above the snowline in the wind-scoured mountain tracts behind the Nordlands fjords, where the caribou clans see them over the high plateaus, and on the Southern Wall and Eastern Reach of the Grazian range, where the guides of the passes count them among the hazards of an exposed ridge. Each pair holds a range that covers several valleys and tolerates no other adult in it. In Vrystwald they are seen over the cliffs of [[place-falkhaven|Falkhaven]] on the western shore, where the eagle villages keep their watch, and they drift south along the fjord coast in the hard winters.

## Key Behaviors

An eagle hunts by day from a great height, watching the ground for movement, and comes down in a long stoop that ends in a strike with both feet. A pair hunts apart and drives prey to each other across a valley. They take goats, hares, foxes, the calves of caribou and deer, carrion when the winter is hard, and a dog or a mule left on open ground. They are at their worst in spring, with young in the eyrie, when both birds strike at anything that climbs toward the nest and follow it for miles. Outside the nesting season they drive a rival out of their sky and leave people alone unless the people have something small and alive with them.

## What the Mountain People Do

A caravan guide on the Grazian passes does not cross an open saddle with a pack string spread out, and he puts the mules close together under the crags where the bird cannot stoop. The caribou clans of the northern plateaus lose calves to them every spring and shoot at them when they can, which is seldom. In Vrystwald an eagle is a wesk, and the villages that keep it, **Arnholt** on the Falkhaven shore among them, set a watch on a cliff where the birds nest and read the pair's flights as omens; killing one in an eagle village's woods is a blood matter. A primary feather is worth having for fletching and for a chief's helm, and an eyrie, reached by a man with a rope and a strong stomach, holds the bones of a century of kills and whatever the kills were wearing.

## Signs

- A shadow crossing a slope faster than a cloud, with no cloud in the sky.
- Goat carcasses on a spire of rock no goat could climb, opened from the back.
- A ringing double cry from high up, answered from another peak.
- Mules that bunch and stare upward on an open ridge.
- A heap of sticks the size of a cart on a ledge, white with droppings, with bones scattered below it.

## Combat Strategy

The eagle stoops out of the sun, strikes with both feet and tries to carry what it has hit. If the prey is too heavy it opens it with the talons on the first pass and climbs away to come again, and it will make pass after pass at a man on an open ridge until he is down or under cover. A pair comes from two directions at once. On the ground, or in a confined place, it fights with beak and talons and is far less dangerous; it does not land by choice among enemies. A nesting bird does not stop for wounds. A bow, a crag to put a back against, and a cloak thrown over the head when the shadow comes are the whole of a traveler's defense.

## Attack Methods

### Talon Strike

Both feet strike together at the end of the stoop, with the whole weight and speed of the bird behind the talons. They go through mail and open the body beneath; on the ground the eagle strikes several times quickly.

### Beak Tear

With the prey held under its feet the eagle tears with the hooked beak at the face, the throat and the soft parts, and takes a limb off a small animal at the joint.

## Special Abilities

### Aerial Dominance

In open air nothing matches the eagle. It stoops faster than an arrow flies, pulls out of the stoop into a climb, and turns inside any bird that could follow it. On the ground it is a heavy, awkward thing.

### Piercing Vision

The eagle sees a hare move on a hillside two miles off and a man on a ledge from above the clouds. It is not surprised from the air and seldom from the ground.

### Talon Grapple

A thing gripped in the talons stays gripped. A goat, a dog or a child is lifted and carried to the eyrie, and a man who is gripped is held under the bird's weight for the beak.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 16-21 (1d6+15)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 14-19 (1d6+13)

- **Aura:** 8-13 (1d6+7)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
