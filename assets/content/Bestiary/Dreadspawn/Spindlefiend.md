---
shortcode: spndlfnd
name: {full: Spindlefiend, aliases: []}
type: being
subType: creature
description: "A made arachnid ambusher that fills whole chambers with nearly invisible webs, turning them into silent deathtraps."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+6
    end: 1d4+9
    dex: 1d6+14
    agl: 1d6+16
    per: 1d4+13
    aur: 1d6+10
    wil: 1d4+9
    rea: 1d6+10
    cre: 1d4+13
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Paralyzing Bite
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
          name: Paralyzing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Razor Limb Slash
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
          name: Razor Limb Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 2}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 80, calc: "80"}
      reachBase: 0
      bodyScaleBase: 0.94
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

![[spndlfnd|Spindlefiend]]{float=top-left}

The tomb door was sealed with a block, and the block has been moved, a long time ago. Inside, the chamber is low and empty and smells of dust. Your lamp shows nothing: no web, no bones, only the bare walls and a second doorway at the back. You take two steps toward it and something touches your cheek, fine as a hair, and does not break. Then your sleeve is held, and your ankle, by nothing you can see. You turn the lamp, and in its light the whole chamber is suddenly full of threads, thin and dark, from floor to roof in every direction, and in the far doorway something long and gray is unfolding, leg after jointed leg, each longer than you are tall.

# Dossier {#dossier}

The Spindlefiend is a dreadspawn in the shape of a narrow, long-legged spider, five to seven feet high on legs eight to twelve feet long, which fills rooms with webs so fine and dark they cannot be seen, and kills what walks into them. It is cunning beyond any animal, patient, and inventive; it spends years perfecting its ground. One has made its home in the [[place-firsttablets|Ground of the First Tablets]], the burial-ground of the first kings of [[place-zugernome|Zu-Ger]] on the upper river of Aû'Khelâthu, where the low tombs stand on the desert edge above the fields. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The spindlefiend's body is narrow and light, plated in deep gray or mottled brown chitin, small for the length of its legs, which are long, thin and many-jointed and fold up beside it like the ribs of a closed umbrella. Its head carries a cluster of small dark eyes and a pair of short, curved fangs. The legs end in sharp, hard points and their joints are edged, and it fights with them like blades. It moves slowly and precisely when it is building and very fast when it is hunting, stepping across gaps and along walls and ceilings with each leg placed exactly. It makes no sound at all.

## In the Land

The Ground of the First Tablets is low tombs of mudbrick and rough stone, some no more than mounds, some with a door sealed by a block and a lintel cut in the sacred hand, in rows along the desert edge, and the temple of [[affiliation-hezmuiri|Hezmu'îri]] at [[place-tjegu|Tjegu]] keeps watch over it with a thin guard. The spindlefiend lives in the tombs whose seals were broken long ago, and has strung their chambers, passages and the hollows under them with its webs. It hunts the jackals, foxes, owls and snakes that come into the tombs, and the tomb-robbers who come for the gold the oldest tombs do not have. It never goes down into the fields and never into daylight.

## Key Behaviors

The spindlefiend builds. It lays its webs in layers through a chamber, slowly, over months, each strand placed for a reason: to catch, to trip, to pull, to sound an alarm, to steer a victim toward the place it wants him. A finished chamber looks empty. It waits in the dark at the edge of its web and feels the strands. When something walks in and is caught, it comes, bites to paralyze, and binds. It learns from every intruder and changes its webs to suit the next. It is solitary and it never leaves its ground.

## What the Temple and the Farmers Do

The farmers of Zu-Ger plow round the marker stones below the burial-ground and keep their rules about them, and they do not go up onto the shelf at all. The temple of Hezmu'îri's guards walk the rows by day and do not go into the opened tombs. When a guard must enter one, he goes with a smoking torch, sweeping it ahead of him through the air, because smoke and powder show the threads, and fire burns them. Tomb-robbers from the river towns come up every few years, because a rumor of gold in the oldest tombs never dies, and the guards find what is left of them in a chamber that looks empty, bound in silk and dry. The temple has not removed the creature, and a priest of Hezmu'îri, asked why, says that the dead of the First House have guardians enough, and leaves the visitor to count them.

## Signs

- A tomb chamber that looks completely empty and has no dust on its floor.
- A strand that touches the face like a hair and does not break, in a room with no visible web.
- Jackal and owl skeletons hanging in midair in a chamber, held by nothing a lamp can show.
- A bundle wrapped tight in fine gray silk lying in a doorway, the size of a man.
- Smoke from a torch that flows round invisible lines and shows them, gray and crisscrossed, filling a room.

## Combat Strategy

The spindlefiend tries to get its enemies into its web, where it has every advantage, and then keeps out of reach on the walls and ceiling, striking from angles no one expects. It bites to paralyze those already caught, slashes with its bladed legs round shields and over armor, and pulls the threads to bind and trip. It does not stand and fight in the open. Fire, smoke, powder and strong light are what defeat it: they reveal and destroy the web, and without it the spindlefiend is far less dangerous and knows it.

## Attack Methods

### Paralyzing Bite

The spindlefiend strikes very fast, drives its fangs into exposed flesh, and the venom goes in. The paralysis starts at the bite and spreads until the whole body is still.

### Razor Limb Slash

It folds its long legs in close and strikes with them like swords, their points and edged joints slashing and piercing from impossible angles, round a shield or over a guard.

## Special Abilities

### Web Entanglement

It works its web as a weapon, tightening strands round a man's limbs and throat and turning the floor itself into a snare.

### Nearly Invisible Silk

Its silk is so fine and dark that a webbed chamber looks empty. Strong light, smoke or a handful of powder thrown into the air reveals it.

### Impossible Agility

It walks on walls and ceilings and steps across wide gaps as easily as a man walks a floor, and it is fastest in cluttered, many-angled places.

### Predatory Genius

It designs its ground, anticipates its prey, sets traps within traps, and learns from every encounter.

### Venom Mastery

It has more than one venom. Some bites paralyze quickly, some cause terrible pain, and some leave the victim drained and weak for days.

## Attributes

- **Strength:** 7-12 (1d6+6)

- **Endurance:** 10-13 (1d4+9)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 17-22 (1d6+16)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 11-16 (1d6+10)

- **Will:** 10-13 (1d4+9)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 14-17 (1d4+13)
