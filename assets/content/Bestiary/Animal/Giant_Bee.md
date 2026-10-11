---
shortcode: giantbee
name: {full: Giant Bee, aliases: []}
type: being
subType: creature
description: "A wolf-sized insect and hive worker directed by pheromone signals, defending colossal colonies of hundreds or thousands as one collective intelligence."
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
    str: 1d4+6
    end: 1d6+7
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+9
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Poisoned Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Poisoned Sting
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Bite
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: edged}
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
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 8
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 1, calc: "1"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[giantbee|Giant Bee]]{float=top-left}

The hum has been under everything for the last mile, a note too low to place, and now it is overhead. A bee the size of a wolf hangs in the air above the path on wings you cannot see, banded yellow and black, its fur dusted gold, and the sting at the end of its body is as long as a knife with a bead of clear venom on its point. It drifts toward you, drifts back. A second one comes over the trees behind it, and the smell reaches you, sweet as rotting fruit with something burning under it.

# Dossier {#dossier}

The Giant Bee is a honey-bee the size of a wolf, one of a hive of hundreds or thousands that hangs its combs in the great trees and rock-faces of [[place-okharisrgn|Okháris]], from the rain-fed forests of the west out to the dry scrub toward Bethûa. Its honey is the best in Xerathia and its sting kills a man. The village tribes of Okháris rob the hives in the one week of the year the bees allow it and keep clear of them the rest of the time, and a hive that moves into a grove near a village is a reason to move the village.

A single bee far from the hive is a cautious animal. The hive, roused, is a storm that follows a man for a mile.

## Presentation

A banded body of yellow and black in fine, dense fur, with a bulbous abdomen ending in a long, barbed sting. Four clear wings beat constantly and make the hum that carries for a mile. Six jointed legs cling to any surface. The head carries two large compound eyes and a pair of strong mandibles. For all its size the bee is light for its bulk, built for the air, and it carries a load of nectar or a pellet of wax at a speed a running man cannot match.

## In the Land

Giant Bees build in the crowns of the great forest trees of western Okháris, under the lips of river-gorge cliffs, and in the rock overhangs of the drier east, wherever the flowering is heavy within a few miles. A hive is a mass of comb as big as a house, hanging in sheets, and a grove with one in it can be heard before it is seen. The tribes map them. They are commonest along the river valleys where the orchards and the wild flowering trees stand together, which is also where the villages are.

## Key Behaviors

The hive is one animal with one will, the queen's, carried on scent. Scouts range miles out and come home to tell the rest where the flowering is and where the danger is; workers gather and build; guards hang at the comb and meet whatever comes near it. A bee alone forages and goes home. A bee at the hive attacks anything that touches the comb or the tree, and the scent it leaves on what it stings brings the rest. Every bee in the hive will die for it, and most of those that sting a man do.

## What the Villages Do

The Okhárin honey-men rob a hive once a year, in the week after the first rains when the queen has moved deep into the comb and the guards are fewest, with smoke from green wood, nets of fine cord over face and hands, and ropes to come down the tree fast. They take a third of the comb and leave the rest, and a hive robbed harder than that moves. The honey and the wax go to the temple-cities, where the wax lights the shrines and the honey is the sweetening in everything the priests eat; a hive is wealth, and the village that holds a grove of them guards the grove. A sting is drawn with a knife-point at once and the wound packed with wet clay, and a man stung three times is carried home to die. A hive that has killed is burned at night, by men who have made their peace with the possibility of not coming back.

## Signs

- A hum under the sounds of the forest, felt in the teeth before it is heard.
- A tree with sheets of pale comb hanging from its crown like washing.
- A sweet, cloying smell with a burnt edge, carried a long way on the wind.
- Bees crossing a valley in a straight line, one every few breaths, all going the same way.
- A dead monkey or a dead man under a tree, swollen, with no mark but a few small punctures.

## Combat Strategy

A lone bee leaves if it can and goes home for the others. The hive comes out together and attacks several bees to a man, stinging from above and from behind where no blade reaches, cutting one person out of a group and following whoever runs toward the hive. They do not break off. Smoke confuses them and water stops them; a man who reaches a river and goes under lives. In the open air the bees have it all their own way; under a low roof or in a thicket they cannot use their wings and a man with a cloak kills them one at a time.

## Attack Methods

### Poisoned Sting

The bee drives the sting in and pumps venom. One sting is agony and a swelling the size of a loaf; two put a man on the ground; three stop his breath. The barbed sting stays in the wound and goes on working after the bee is dead.

### Bite

The mandibles seize cloth, hair or skin and hold while the body curls round to bring the sting to bear.

## Special Abilities

### Hive Coordination

Bees fighting together move as one: no wasted pass, every angle covered, and every bee going for the man the first one marked. A bee alone has none of this.

### Flight Mastery

The bee hovers, reverses and outflies a horse, and chooses where it strikes. In open air it cannot be fought; under cover it can.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 8-11 (1d4+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
