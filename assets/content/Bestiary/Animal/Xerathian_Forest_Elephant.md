---
shortcode: xrthnfrs
name: {full: Zerathian Forest Elephant, aliases: []}
type: being
subType: creature
description: "A smaller, elusive tropical-forest elephant that avoids humans and vanishes into dense jungle through camouflage and reclusive habits."
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

![[xrthnfrs|Zerathian Forest Elephant]]{float=top-left}

The green wall beside the trail moves, and goes on moving after the wind has dropped. A gray-brown shape separates itself from the shadow under the trees, dark with wet, its ears round and close, its tusks straight and pointing down like a pair of pale stakes. It is smaller than you expected and much quieter: not a branch breaks as it steps out. It lifts its trunk toward you, tastes the air, and backs into the green again as smoothly as it came, and a moment later there is nothing to say it was ever there but a sway in the leaves and a smell of crushed fruit.

# Dossier {#dossier}

The Zerathian forest elephant is the elephant of the [[place-cntrlrnfrsts|Central Rainforests]]: eight or nine feet at the shoulder, four to five tons, dark gray-brown, with rounded ears and straight, down-pointing tusks made for pushing through undergrowth. It lives in small family groups in the deepest forest, eats leaves, bark, fruit and the mineral earth of the forest clearings, and avoids people as carefully as it can. The forest tribes see it seldom and hear it often. It is the quiet giant of the forest, and the danger of it is that a party pushing through thick growth can be on top of it before either knows the other is there.

## Presentation

A compact elephant, built lower and narrower than the great elephant of the [[place-sthrnsvnhs|savannahs]] to the south, with dark skin that is usually wet and stained with red forest mud. The ears are round and small, the back level, and the head carries a high, rounded brow. Both bulls and cows carry tusks: straight, slender, pinkish-white and pointing down and forward, harder and denser than the savanna elephant's. The trunk ends in two fingerlike tips. It moves through the forest with a care that makes it nearly silent, and on a dim trail its outline is lost among the trunks.

## In the Land

Forest elephants live throughout the equatorial forest, from the margins where it breaks into the savannah to the deep interior no outsider has crossed. They keep to the old trails they and their ancestors have walked for centuries—broad, hard-trodden paths through the undergrowth that the forest tribes use as their roads—and they gather at the forest clearings where mineral earth and water lie, digging the clay with their tusks and eating it. A family keeps a range of many miles and walks it on a round that follows the fruiting of the trees. They are absent from cleared ground and rare near villages.

## Key Behaviors

A family is a few cows and their calves, led by the oldest cow; bulls go alone. They eat a great deal of fruit and leave the seeds in their dung along the trails, and the forest tribes say a fruit tree beside an elephant trail was planted by the elephants. They are wary of people and leave when they smell them, quietly. Cornered, startled at close quarters, or with a calf to protect, a forest elephant charges without the long warning a savanna elephant gives, and a bull in musth is dangerous to everything. They call to one another in rumbles that carry through the trees.

## What the Forest Tribes Do

The rainforest tribes walk the elephant trails as their own roads, and they walk them talking, so that the elephants hear them coming and step off. A village keeps its gardens fenced with thorn and its drums ready, because a family that finds a banana garden comes back to it. The tribes take a lone bull for its ivory only seldom, and with ceremony. Forest ivory, hard, straight and fine-grained, is the most valued ivory that comes out of [[place-xerathia|Zerathia]], and the tribes who trade with the north carry it to the cities of [[place-okharisrgn|Okharis]] and beyond along with the other goods of the forest, at a price the carriers set.

## Signs

- A trail through the forest as wide as a cart-road, beaten hard and clear of undergrowth, with no axe-marks.
- A clearing of bare red clay dug into pits and gouged with tusk-marks.
- Fresh dung full of fruit-stones on the trail, with seedlings coming up in old heaps.
- Branches stripped and dropped, and a smell of crushed fruit on still air.
- A low rumbling in the trees, and then silence.

## Combat Strategy

The forest elephant leaves if it can. If it cannot—if a party comes on it at close quarters in thick growth, or comes between a cow and her calf—it charges at once, with little warning, ears spread, trunk curled, and strikes with its weight and its tusks. It knocks a man down, stabs at him with the straight tusks, and kicks and kneels on him. Then, very often, it turns and goes, and the forest closes behind it. A forest elephant that has been wounded by hunters remembers it, and some have ambushed men on the trails afterward.

## Attack Methods

### Tusk

The straight, downward-pointing tusks stab like spears into a man on the ground or pinned against a tree.

### Kick

The feet stamp and the elephant kneels on what it has knocked down.

## Special Abilities

### Trunk Blow

The trunk strikes a man aside like a club, hard enough to throw him into the undergrowth.

### Forest Navigation

It moves through dense growth faster and more quietly than a man can, and is gone in a few strides.

### Intelligent Problem-Solving

It learns where villages and hunters are, avoids them, and remembers a place where it was hurt.

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
