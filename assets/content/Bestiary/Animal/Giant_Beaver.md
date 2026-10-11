---
shortcode: gntbvr
name: {full: Giant Beaver, aliases: []}
type: being
subType: creature
description: "An intelligent, industrious rodent and master engineer that reshapes whole landscapes with dams and lodges redirecting entire watercourses."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+11
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+8
    aur: 1d4+5
    wil: 1d6+9
    rea: 1d4+7
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Powerful Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Powerful Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Slam
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Slam
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
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
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aquatic
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntbvr|Giant Beaver]]{float=top-left}

The river has gone wrong. Where the boatman says there should be a run of fast water between birches there is a flat brown lake with drowned trees standing in it, and across its foot, from bank to bank, a wall of stripped trunks woven together higher than a man. Something the size of a pony is working at the top of it, dark fur slick with water, dragging a birch into place with its teeth. It stops when the boat comes into the open. The flat tail comes up, and the crack it makes on the water is as loud as a split log.

# Dossier {#dossier}

The Giant Beaver is a three-hundred-pound water rodent four feet high at the shoulder, which fells trees, dams rivers and builds lodges on a scale that changes the map, and it lives on [[place-vrystwldrvrs|the slow rivers of Vrystwald]] and in the marsh country of [[place-grkrhlmrgn|Grukarhölm]] to the east. A family's dams turn a mile of river into a chain of lakes, drown a stand of forest and close a boat-road, and the family defends the work against anything that touches it. The Varokh who live by the rivers deal with it as they deal with a flood: by moving, by waiting, or, when they must, by breaking the dam at night with the whole village and running.

## Presentation

A heavy-bodied aquatic rodent in dense, waterproof fur, dark brown with a reddish cast, that lies wet and slick whether the animal is in the water or out of it. The shoulders and hindquarters are thick with muscle and the hind feet are webbed; the forepaws are small, clawed and clever. The tail is flat, scaled, nearly as long as the body and as wide as a shovel-blade, used for steering, for warning and as a club. The head is blocky, with small side-set eyes and a pair of orange incisors as long as a man's hand that never stop growing and are kept sharp by use.

## In the Land

Giant Beavers hold the slow brown rivers of the central forest belt wherever the banks carry birch, aspen and willow, and the marsh and lake systems of Grukarhölm, where the water is already slow and a dam floods a league of bog. A family's territory is a reach of river with one great dam or a chain of several, a lodge of logs and mud in the pond behind it, and a felling-ground on each bank. The Vrystwald landings know which reaches are beaver water and which season a dam is building, and a boat-road is rerouted round a new lake the year it appears.

## Key Behaviors

A family works by night and on gray days, felling trees with its teeth, floating them to the dam and weaving them in, and plastering the face with mud. It eats bark and the soft wood under it, water plants and roots, and stores branches under the ice for winter. The family is the pair and two or three years of young, and it holds its reach against every other beaver. Any creature on the dam, in the lodge or in the water near either is attacked; a man on the bank is watched and warned with a tail-slap, and a man who goes on cutting the dam is attacked in the water. The animals do not hunt and do not pursue onto dry land for far.

## What the Villages Do

A Varokh river village with a beaver family above it loses a mill-race or gains a fish-pond, and the village council argues about which for a year. A dam that drowns a field or closes the landing is broken in winter, when the family is in the lodge under the ice, by the whole village working with axes on the frozen face in a single night, and the river takes the rest. The family builds again a mile upstream by midsummer. A pelt is worth more than any other fur of its weight, and the castor from the glands trades to the Nordmal and south to the Vylarian physicians at a price that makes a hunter's winter; a beaver is hunted with nets staked across the channel under the lodge and spears from the ice above it, and a hunter in the water with one is a drowned hunter. A tail, roasted, is the one meat of the animal worth eating.

## Signs

- Birch and aspen stumps cut to a point, three feet high, with wood chips the size of a hand around them.
- A river that runs still and brown where the map shows a riffle, with dead trees standing in it.
- Drag-paths down the bank worn smooth, with stripped branches in the water at their foot.
- A crack like a split log carrying across the water at dusk, repeated.
- A mound of logs and mud in the pond with a thread of warm air rising from it on a cold morning.

## Combat Strategy

The beaver fights in the water and from the water. It slaps a warning, and then it comes in under the surface and bites at the legs of anything standing in the shallows, dragging a man down and holding him under. On the dam it meets an axe-man with its teeth and knocks him off the face with its tail. It does not fear a larger animal and does not break off while the danger is on its dam, but it does not follow onto dry land beyond a few yards. In the drowned timber behind the dam, among the stumps and the deep channels it has cut, nothing on two legs moves as fast as it does, and a party that wades in after it is fighting in its house.

## Attack Methods

### Powerful Bite

The incisors cut through a wrist-thick branch and do the same to a wrist. The beaver clamps on a leg or an arm and pulls the man into deep water and under.

### Tail Slam

The tail comes round or down with weight enough to break ribs or a knee, knock a man off a dam face, or throw up a sheet of water that blinds him for the next bite.

## Special Abilities

### Aquatic Master

In the water the beaver is fast, silent and at home. It swims under the ice and through flooded timber, stays under for a long while, and chooses where and when it surfaces. On land it is slow and heavy and knows it.

### Tireless Engineering

A family fells and moves timber at a pace that puts a dam across a small river in a season, floods a valley floor and cuts channels through the drowned ground that only it can find. The work is its weapon as much as its home: an enemy on its water is in a maze it built.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 6-9 (1d4+5)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 8-11 (1d4+7)

- **Creativity:** 7-10 (1d4+6)
