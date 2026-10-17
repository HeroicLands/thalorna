---
shortcode: xrthnsvn
name: {full: Zerathian Savanna Elephant, aliases: []}
type: being
subType: creature
description: "The largest land creature alive, a towering savanna elephant living in matriarch-led herds across the Zerathian grasslands."
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
    str: 1d6+53
    end: 1d6+45
    agl: 1d4+5
    per: 1d6+15
    snt: 1d4+5
    aur: 1d4+4
    wil: 1d6+13
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 56}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 90}}
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 23, aspect: piercing}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 2}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 24, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 20, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 7}
          - {name: Trunk, shortcode: trunkzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 6}
          - {name: Torso, shortcode: torsozone, probWeight: 18}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Trunk
            shortcode: trunkpart
            bodyZoneCode: trunkzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor]
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
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Trunk
            shortcode: trunkloc
            bodyPartCode: trunkpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
      weight: {base: 10000, calc: "10000"}
      reachBase: 0
      bodyScaleBase: 2.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[xrthnsvn|Zerathian Savanna Elephant]]{float=top-left}

You feel them through the ground before you see them, a slow drumming that comes up through the soles of your feet. Then the herd comes over the rise in a long gray line: cows with calves walking under their bellies, and at the front an old cow taller than any animal you have seen, her ears spread like the sails of a boat, her tusks long and curved and yellowed at the tips. She stops. The whole line stops behind her. She lifts her trunk and tastes the wind in your direction, and the drumming goes on under your feet, deeper than sound, though no elephant is moving.

# Dossier {#dossier}

The Zerathian savanna elephant is the largest animal that walks anywhere in the world: ten to thirteen feet at the shoulder, five tons and more, with great fanning ears and long curved tusks in both bulls and cows. It lives in herds led by the oldest cows across the open grassland of the [[place-sthrnsvnhs|Southern Savannahs]] of [[place-xerathia|Zerathia]], and it moves with the seasons as the other great herds do: north into the wet belt below the [[place-cntrlrnfrsts|Central Rainforests]] to calve in the rains, and south through the central grass in the dry. It is peaceful when it is left alone and very dangerous when it is not. The herding clans of the savanna share their country with it, give it room, and count it among the things a sensible clan does not quarrel with.

## Presentation

A huge gray animal, deeply wrinkled, usually red or brown with the dust it has thrown over itself, with a back that dips behind the shoulders and rises again over the hips. The ears are enormous, wider than a man is tall, and fan constantly against the heat; spread wide, they make the animal look half again its size. Both sexes carry tusks, long and curving outward and up, heavy in the old bulls. The trunk is ringed and supple and ends in two fingerlike tips that pick a single seed from the dust. The eyes are small and dark under a heavy brow and watch with a steady attention.

## In the Land

Savanna elephants range across the whole breadth of the Southern Savannahs: the tall grass and the seasonal pans of the northern belt, where the rains flood the ground and the herds calve, the open central plains with their rocky kopjes and scattered baobabs, and the greener highlands of the southeast where the old stone enclosures stand. They avoid the dry southwest except along its rivers. A herd walks a round of hundreds of miles in a year, by routes the old cows remember, and it digs for water in the dry riverbeds with its feet and tusks, opening holes that every other animal of the country drinks from afterward. Where the herds pass, the trees are broken and the grass is cropped, and the next season grows thicker for it.

## Key Behaviors

A herd is a family of related cows and their young, led by the oldest cow, and it lives by her memory: where water lies in a drought year, which pans fill first, where the lions den. Grown bulls leave the herd and wander alone or in loose groups, and come to the herds in the season of musth, when a dark weeping from the temples marks a bull that will fight anything. Elephants call to one another across miles of grass in rumbles too low for a man to hear well, and feel the calls through their feet. They mourn their dead, stand over them for days, and come back to the bones years afterward to touch them with the trunk.

## What the Herding Clans Do

The cattle clans of the savanna move their herds out of the elephants' way when the great herds pass, and never water their cattle at a hole the elephants have dug while the elephants are still there. A clan that loses a garden or a granary to a passing herd takes the loss and plants again. They do not hunt elephants for meat, and most do not hunt them at all; a young man who kills a lone bull for its ivory has done something the elders of his clan will argue about, and an elephant's ivory carried north by the rainforest traders to the cities of the [[place-nrthrnfrtlrgn|Northern Fertile Region]] buys more cattle than most clans own. A herd's matriarch who is killed leaves the herd lost, and the clans say a herd without its old cow raids the fields.

## Signs

- A wide path beaten through the long grass, flat and bare, running straight across country toward water.
- Trees pushed over or stripped of their bark to the height of a house, and baobabs gouged with tusk-marks.
- Holes dug in a dry riverbed, with water seeping into the bottom and the tracks of every animal of the plain around them.
- Dung heaps the size of a man's head, full of undigested grass and seeds.
- A rumble at dusk, felt in the chest more than heard, from a herd out of sight.

## Combat Strategy

An elephant warns first: ears spread wide, head high, a trumpet, a short run that stops. Most charges end there. When one does not, it comes on with its whole weight and speed and only a cliff or a river stops it; it knocks a man down, kneels on him and kicks him, and hooks or gores him with a tusk. The trunk strikes like a club and throws a man yards. A herd with calves turns its cows outward in a ring and charges together. A musth bull or a matriarch defending a calf does not stop until the threat is dead or gone, and climbing a tree is no help, because an elephant pushes the tree over.

## Attack Methods

### Tusk

The long tusks gore a man on the ground or hook him from his feet and toss him. The wound crushes as much as it pierces.

### Kick

The forefeet stamp and the elephant kneels, crushing whatever the charge has knocked down under five tons of weight.

## Special Abilities

### Trunk Strike

The trunk swings like a club strong enough to break a man's back, or seizes him and throws him.

### Incredible Strength

It pushes over a full-grown tree, lifts a fallen one, and goes through a thorn fence or a hut as if it were not there.

### Herd Coordination

A herd closes round its young, turns outward, and charges together at the old cow's signal, and its members come back for one that is hurt.

### Intelligent Manipulation

The trunk lifts a gate-bar, unties a rope, and digs water out of dry sand.

## Attributes

Strength
: 54-59 (1d6+53)

Endurance
: 46-51 (1d6+45)

Agility
: 6-9 (1d4+5)

Perception
: 16-21 (1d6+15)

Scent
: 6-9 (1d4+5)

Aura
: 5-8 (1d4+4)

Will
: 14-19 (1d6+13)

Reasoning
: 7-10 (1d4+6)

Creativity
: 7-10 (1d4+6)
