---
shortcode: gntbr
name: {full: Giant Boar, aliases: []}
type: being
subType: creature
description: "A thousand-pound apex boar of northern forests, standing five feet at the shoulder and jealously guarding vast territories with barely restrained violence."
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
    str: 1d6+13
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+7
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Tusk
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntbr|Giant Boar]]{float=top-left}

The ground under the beech-mast is torn up in a swath as wide as a cart-track, and the trunk beside the path is rubbed raw at the height of your shoulder and plastered with mud and black bristles. The smell is rank and old. Then the undergrowth thirty paces off splits open and the thing that made the marks is standing in the path: five feet at the shoulder, black, with a head like an anvil and two yellow tusks as long as your forearm. It blows once through its nose, a spray of foam, and begins to paw.

# Dossier {#dossier}

The Giant Boar is the great wild pig of the northern forests, five feet at the shoulder and a thousand pounds, which roots the beech and oak woods of [[place-vrystwald|Vristwald]] and holds several square miles of them against everything that walks in. It eats mast, roots, fungus, carrion and whatever small thing it turns up, and it kills the men who get in its way. The Varokh hunt it, fear it and keep it as a wesk: three of the forest's villages, [[place-eichengrnd|Eichengrund]] among them, take the boar as their totem spirit.

## Presentation

A huge pig built forward: massive shoulders and neck sloping back to narrower hindquarters, short thick legs and sharp cloven hooves. The hide is thick and covered in coarse black or dark-brown bristles, usually caked with mud. The head is long and heavy, with small forward-set eyes, and the tusks curve up and back from the lower jaw, thick as a man's wrist, yellowed, and worn to an edge against the upper pair. An old boar carries a shield of thickened hide over its shoulders, scarred white from fights with its rivals.

## In the Land

Giant Boars live in the oak and beech of the central mixed-forest belt and south to the highland forests facing Vylaria, and they are thinner in the northern taiga where there is no mast. A boar's ground is marked by its rubbing-trees and its wallows and by the rooted ground itself, a swath torn through the leaf litter that another boar reads and respects. The Varokh villages of the forest clearings share their woods with one or two each, and the boar wesk villages count the one in their woods as a thing of theirs.

## Key Behaviors

A boar roots by night and in the gray hours and lies up by day in a wallow or a thicket. It walks a round of its ground, rubs its shoulders on the same trees, and wallows in the same mud, and it meets another boar at the edge of its ground with a fight that leaves both bleeding. In winter, in the rut, the boars fight to the death and a boar that has been fighting attacks anything it meets. Sows with young run in small sounders and a sow with piglets charges as readily as a boar. A boar that has been hunted and has lived learns the sound of a horn.

## What the Villages Do

The Varokh hunt the boar in winter, on foot in the snow, with dogs to hold it and boar-spears with a crossbar below the head to keep it from running up the shaft; a hunter who takes one alone has made his name, and the tusks hang on his house. In a boar village the hunt is a rite with the Weskár present and the first blood carried to the sacred grove. A boar that has killed a man in the woods is hunted by the whole village as a matter of honor. The hide makes the best shield-covers and boot-leather in the forest, the bristles make brushes, and the tusks are worked into knife-handles, charms and the fittings of a chief's belt. Nobody drives a herd through boar ground in autumn, when the mast is down and the animals are fat and bad-tempered.

## Signs

- A swath of torn ground through the leaf litter, as if a plow had been dragged through it.
- A tree rubbed bare and muddy at shoulder height, with black bristles caught in the bark.
- A wallow in a hollow, churned to black mud and stinking.
- Cloven tracks as long as a man's hand, deep, with the dew-claws showing.
- A sound of blowing and grunting in a thicket, and then silence.

## Combat Strategy

The boar charges. It builds speed over the open ground between it and the target and hits with the whole weight of its body behind the tusks, and if the man goes down it tramples and gores him on the ground. In close quarters it hooks upward with the tusks and uses its weight to knock a man over. A wounded boar is worse than a whole one, and it does not stop until it is dead or the man is. A charge is stopped by a boar-spear braced against the foot, by thick brush, or by a tree between the man and the pig; a boar that cannot reach a man who has climbed gives up and goes back to its rooting.

## Attack Methods

### Tusk

The tusks hook upward and across as the boar drives in, opening a man from thigh to belly. On a charge they go through a shield and the mail behind it.

### Trample

The boar knocks a man flat with its weight and goes over him with its hooves, and comes back to gore what is on the ground.

## Special Abilities

### Thick Hide

The hide and the shoulder-shield turn a blade's edge and a glancing thrust. A point driven straight in behind the foreleg finds the heart.

### Charge Momentum

The longer the run, the worse the blow: a boar that has crossed a clearing hits like a falling tree, and one met in dense brush hits like a boar.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)
