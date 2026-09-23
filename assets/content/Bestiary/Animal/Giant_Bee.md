---
tags:
  - animal
  - creature
name:
  full: Giant Bee
  aliases: []
description: "A wolf-sized insect and hive worker directed by pheromone signals, defending colossal colonies of hundreds or thousands as one collective intelligence."
shortcode: giantbee
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
  lore: []
  homes: []
  affiliations: []
  gender: null
  species: null
  age: null
  birthday: null
  height: null
  weight: null
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
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 5 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 25 } }
    - name: Poisoned Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: sting
          name: Poisoned Sting
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 0
            aspect: piercing
          lengthBase: 1
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
            poison: true
    - name: Bite
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: mandible
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 0
            aspect: edged
          lengthBase: 0
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Thorax
            shortcode: thoraxzone
            probWeight: 1
          - name: Abdomen
            shortcode: abdomenzone
            probWeight: 1
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles:
              - core
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
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 8
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase:
              blunt: 3
              edged: 2
              piercing: 1
              fire: 3
      weight:
        base: 1
        calc: "1"
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

![[giantbee|Giant Bee]]{float: top-left}

The sound fills the air before you fully see it—a deep, penetrating hum that seems to come from everywhere at once. Then it crests the ridge: a creature the size of a wolf, all furred body and translucent wings that beat so rapidly they become invisible. The yellow and black stripes that cover it are vivid, almost too bright, and when it banks in the air above you, the afternoon light catches and reflects off something terrible: a stinger as long as a dagger, dripping with clear venom that smokes where it falls. The buzzing grows louder, more insistent, and you realize with creeping dread that this is not one creature—there are more, emerging from behind the ridge, converging on your position. The smell hits next: a cloying sweetness mixed with something chemical and wrong, filling your sinuses and burning your throat.

# Dossier {#dossier}

The Giant Bee is a massive insect that has evolved far beyond its common cousins, standing as large as a wolf at the shoulder, with surprising strength and speed. These creatures are workers and defenders of colossal hive systems that can have hundreds or thousands of individual bees. They are not solitary creatures but part of a collective intelligence directed by pheromone signals from a queen. Adventurers most often encounter them when traveling near a hive location or when they inadvertently threaten a hive's foraging operation or territory. A single giant bee is dangerous; a swarm is nearly unstoppable.

## Presentation

A Giant Bee is a creature of striking appearance: a bulbous abdomen striped in vivid yellow and black, covered in fine hairs, two pairs of translucent wings that beat constantly to create an audible hum, six jointed legs that can cling to any surface, and a head bearing large compound eyes and powerful mandibles. The most fearsome feature is the stinger—a long, sharp appendage extending from the rear abdomen, capable of injecting venom. The body is built for flight, and the wings are capable of carrying the bee's full weight at considerable speed. Despite its apparent heaviness, the bee's frame is light for its size.

## Key Behaviors

Giant Bees operate under hive intelligence—they are individuals only in physical form but follow the chemical and pheromonal commands of a central queen with perfect obedience. Scouts range far from the hive, identifying nectar sources and intruders. Workers gather food and maintain hive structures. Guards and soldiers defend the hive and food sources from threats. All individuals will sacrifice themselves without hesitation for the colony's survival. A bee away from the hive is quieter and more circumspect; near the hive, the bees are aggressive and coordinated.

## Combat Strategy

A lone giant bee avoids combat if escape is possible, preferring to return to the hive and recruit assistance. A group of bees attacks with devastating coordination—multiple bees assault individual targets simultaneously, stinging from angles designed to prevent effective counterattack. The bees work to separate targets from the group, overwhelm single individuals, and drive enemies toward the hive (where more bees emerge to provide reinforcement). They show no tactical retreat or mercy once committed to attack.

## Attack Methods

### Poisoned Sting

The bee drives its stinger into a target and injects venom designed to cause pain, paralysis, or death depending on dosage and the target's size. The stinger is barbed in some bee species, leaving it behind (fatal to the bee) and driving the venom deep. Multiple stings compound the venom load.

### Bite and Grapple

The bee uses powerful mandibles to bite and hold, attempting to position the target for a sting or to simply do damage. The bee's legs can also cling to a target, making it difficult to dislodge.

## Special Abilities

### Hive Coordination

When multiple bees fight together, they act as if controlled by a single mind—never a wasted movement, perfect tactical awareness, and devastating synchronized attacks. A lone bee loses this advantage.

### Flight Mastery

The bee's wings allow it to hover, reverse direction, and reach speeds that land creatures cannot match. In open air, the bee has overwhelming tactical advantage. Indoors or in confined space, this advantage diminishes.

## Additional Information

A giant bee hive can be harvested for honey, wax, and other valuable materials, but only by those brave enough to approach during the appropriate season when the queen is least protective. Some have attempted to communicate with hives through magical means, with limited success—the collective intelligence is alien and not easily bargained with. A dead bee's stinger is sometimes preserved or worked into jewelry or weapons.

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
