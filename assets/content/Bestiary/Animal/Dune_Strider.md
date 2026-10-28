---
shortcode: dnstrdr
name: {full: Dune Strider}
type: being
subType: creature
description: "An enormous flightless desert bird up to ten feet tall, a social herd forager that is placid unless provoked."
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
    str: 1d6+9
    end: 1d6+10
    dex: 1d6+9
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+6
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Powerful Leg Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Powerful Leg Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak Peck
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Peck
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
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
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: dunes, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[dnstrdr|Dune Strider]]{float=top-left}

The heat-shimmer on the gravel reach has had shapes in it all morning, and for an hour you have taken these for more of the same. Then one of them turns its head. Five birds, each as tall as a man on a camel, stand on legs like stilts a long bowshot off, tan and cream against the tan and cream of the ground, watching the string with small, bright eyes. One takes a step. The step covers more ground than a horse's bound, and the dust it raises hangs in the still air behind it like smoke.

# Dossier {#dossier}

The Dune Strider is the great flightless bird of the hot deserts: eight to ten feet tall, two hundred pounds, a grazer of the sand seas and gravel reaches of the [[place-hskrrgn|Khoshiqor]] and the dunes of [[place-dunharargn|Dunhara]]. It goes in small herds of four to six, eats the thin desert plants, seeds and insects, and runs from everything, at a pace that nothing on the sands can match. It kills only when it cannot run, with a kick that breaks a man in half.

The tribes of both deserts eat it when they can catch it, which is seldom, and the few that have been raised from the egg and broken to ride are the fastest mounts on the desert and the least trustworthy.

## Presentation

A huge, long-necked bird on two immensely long legs, with a small head and a short, sharp, curved beak. The plumage is tan and cream, loose and shaggy over the body and thin on the neck and legs, and it matches the desert so well that a standing herd disappears at a few hundred paces. The feet are broad, two-toed and clawed, for sand; the legs are corded with muscle. The body is deep and the long tail-plumes trail behind it at a run for balance. It has small, useless wings that it spreads to shade its young.

## In the Land

Dune Striders range the sand seas, the gravel reaches and the scrub margins of the Khoshiqor, where a herd works between the wells on a circuit of its own, and the deep dunes of Dunhara to the south, where the Dunhari tribes know them as a thing to be eaten at the end of a long hunt. They need open ground to run on and avoid the ravines and the black-rock country. They stand in the shade of a dune through the heat of the day and graze in the morning and evening, and they drink at the same wells the caravans do, before the caravans arrive.

## Key Behaviors

A herd grazes spread out, with one bird always standing with its head up. It bolts at the first sight of a rider and runs for miles without slowing, at a pace near that of a galloping horse and held far longer than any horse can hold it. The cock birds dance in spring, a rolling, wing-spreading display on open ground that can be seen from a long way off. A hen lays in a scrape in the sand and both parents sit, and a sitting bird that is approached does not run. It stands, spreads its wings and kicks.

## What the Tribes Do

The Sovidur hunt the Strider by running it: three or four riders on fresh horses in relays, over half a day, until the bird stands. The meat feeds a camp for a week, the eggs are the size of a man's head, and the feathers trade south. A chick taken from the scrape can be raised and, in a few hands, ridden; a broken Strider crosses sand faster than a camel and farther than a horse, and it will throw and kick its rider the first day he is careless. No tribe keeps a string of them. The Dunhari hunt them the same way and value the leg sinew for bowstrings.

## Signs

- Two-toed tracks the length of a man's forearm, spaced further apart than a horse's bound.
- A rolling cloud of dust on the horizon in dead calm, moving faster than a rider.
- A shallow scrape in the sand with a great cream-colored egg in it and a bird standing over it.
- Droppings the size of a man's fist among the scrub, and the scrub itself cropped at the height of a man's head.
- A line of shapes in the heat-shimmer that are all facing the same way.

## Combat Strategy

The herd runs. A bird that is cornered, injured or sitting on eggs stands and kicks forward with one leg at a time, and the kick breaks a thigh-bone or a chest and throws a man several yards. It pecks at the eyes of anything that comes close. A startled herd in a narrow place stampedes straight through whatever is in front of it. The one way to hold a Strider is to tire it, and the one way to kill it on the ground is to keep clear of the legs and come in from behind.

## Attack Methods

### Powerful Leg Kick

The bird kicks forward with the whole weight of the leg behind the foot and its claw. The blow breaks bones, caves in a chest and throws the victim backward.

### Beak Peck

The beak strikes at the face and eyes. The wound is slight and the aim is not.

## Special Abilities

### Desert Speed and Endurance

A Strider runs across sand and gravel at the pace of a galloping horse and holds it for hours. Nothing on the desert catches one that has started first.

### Dust-raising Camouflage

A running bird or herd throws up a cloud of dust and sand that hides it and blinds whatever follows, and a standing herd is the color of the ground.

## Attributes

Strength
: 10-15 (1d6+9)

Endurance
: 11-16 (1d6+10)

Dexterity
: 10-15 (1d6+9)

Agility
: 14-19 (1d6+13)

Perception
: 12-17 (1d6+11)

Aura
: 7-10 (1d4+6)

Will
: 8-13 (1d6+7)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)

### Unmatched Speed
