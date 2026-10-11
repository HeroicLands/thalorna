---
shortcode: wyvern
name: {full: Wyvern, aliases: []}
type: being
subType: creature
description: "A two-legged, dragon-like flier of mountain peaks and high plateaus, lacking true draconic cunning but formidably lethal on the wing."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-wyvern
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    agl: 1d6+7
    per: 1d6+14
    snt: 1d4+1
    aur: 1d4+1
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 7, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 2}
    - name: Talon
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 6, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
          - name: Torso
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
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            protectionBase: {blunt: 7, edged: 8, piercing: 7, fire: 9}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 9, piercing: 8, fire: 10}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a2 {blunt: 4, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: &a1 {blunt: 8, edged: 9, piercing: 8, fire: 10}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: *a1
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a2
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 3
            protectionBase: &a3 {blunt: 8, edged: 9, piercing: 8, fire: 10}
          - name: Left Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: &a4 {blunt: 7, edged: 8, piercing: 7, fire: 9}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 3
            protectionBase: *a3
          - name: Right Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 2
            protectionBase: *a4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 7, piercing: 6, fire: 8}
      weight: {base: 600, calc: "600"}
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 150
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The cliff above the pass has a shelf of yellow-brown rock on it that you have been looking at for an hour, and the shelf opens its wings. Twenty feet of bat-leather spread between the forelimbs and the hind, and the thing drops off the cliff and catches the wind, a scaled body the length of a man and a half with two clawed legs tucked under it and a long tail trailing behind, barbed at the tip. It circles once, unhurried, with its wedge of a head turned down toward the string. The barb on the tail is wet, and a drop falls from it and smokes where it lands on the rock.

# Dossier {#dossier}

The wyvern is a two-legged winged lizard of six hundred pounds, with a body six to eight feet long, a wingspan of eighteen to twenty-four feet, and a barbed tail that carries a venom which kills a horse in minutes. It nests on the cliffs and in the high caves of the [[place-estrnreach|Eastern Reach]] of the Grazian range, where the two passes the Hvarn keep run under its ledges, and in the cliff-top [[place-grazruins|ruins and labyrinths]] of the high country, and it hunts from the thermals across a territory of many peaks and valleys. It takes eagles, goats, caribou and men, and it strikes a pack train on an open saddle as a hawk strikes a dovecote.

It is no dragon. It breathes no fire, it has no speech and no hoard, and a mage's work beside it goes on as it would anywhere; it is a very large and very dangerous hunting animal with a poisoned tail, and the guides of the high passes name it among the four or five reasons a crossing is made in company.

## Presentation

A long, muscular, serpentine body scaled in amber-yellow, dull green or muddy brown with darker bands, carried on two stout hind legs with claws the length of fingers. The forelimbs are the wings: long bones and a leathery membrane in dusky colors, veined dark, folded along the body on a perch and spread to twenty feet or more in the air. The head is large, wedge-shaped and wholly reptile, with forward-set golden eyes and a jaw of conical, piercing teeth. The tail is as long as the body, thick, and ends in a barb like a dagger that is always wet with venom.

## In the Land

Wyverns roost on cliff faces, in high caves and among the cut stone of the ruins on the Eastern Reach and the eastern end of the Southern Wall, where the thermals off the sun-warmed rock carry them to a height without effort and the passes below give them prey. Each holds a territory of many peaks against every other wyvern and drives rivals off in fights in the air that are watched from the shrine-summits. They breed once in ten years or so, and a nesting pair holds its cliff against everything. They are not found below the foothills except when a hard winter in the heights sends one down after the flocks, which the march villages below the wall remember for a generation.

## Key Behaviors

A wyvern hunts by day, when the thermals are strongest. It rises on a column of warm air to a great height, hangs there watching, and comes down in a stoop at a speed nothing on the ground can judge, striking with the hind claws and the tail together. It takes eagles and hawks out of the air, goats and ibex off a ledge, a caribou on a plateau, a mule off a saddle, a man on a rope. A big kill feeds it for weeks, and it carries what it can to its roost and eats there. It learns a pass's traffic and a hunter's face. It drives a flock toward a killing-ground it prefers and waits for it there. Its nest holds bright things it has picked up with the bones, for no reason anyone has found.

## What the Guides Do

The Hvarn guides who keep the eastern passes reckon the wyvern roosts as they reckon the weather: by season, by the shelf a particular animal uses, and by whether it has fed. A string crosses an open saddle under a known roost at dawn, before the thermals rise, close together and fast, with the guides watching the sky and the mules' loads lashed to be cut free. A wyvern that comes down on a string is fought off with long spears braced against the rock and the mules driven on; nobody stands and fights it in the open. The venom-sac of a dead wyvern is bought by the Vedyari physicians at the foot of the passes for a price that pays the guides' year, and the wing-leather makes drumheads for the shrines. A roost above a pass that has killed too often is smoked out by the whole guide-clan with fires lit under the cliff at night, which works when the wind is right.

## Signs

- A shelf of yellow-brown rock on a cliff that was a different shape yesterday.
- Goat and eagle bones on a ledge, with the skulls pierced from behind.
- A drop of something clear on the rock that smokes, and dead beetles round it.
- Hawks that quit a valley all at once in the middle of the morning.
- Mules that balk on an open saddle and look up.

## Combat Strategy

The wyvern strikes from above and behind, where a shield is no use, raking with the hind claws and whipping the tail forward over its own back to drive the barb in, and climbs away before anything can answer. It makes pass after pass, each one meant to wound and not to close, and once a man is stung it follows him, because the venom does its work in minutes and the wyvern knows it. It drives a party toward a drop or into a narrow place. Against a flier its own size it grapples with the hind claws and brings the tail to bear. It comes to the ground and fights with teeth, claws and tail together only when it is starving or defending its young, and then it fights like something with nothing to lose. A braced spear-line under an overhang, where it cannot stoop, is the one thing that turns it.

## Attack Methods

### Bite

The jaws close with the strength to break a thigh-bone and the teeth pierce mail; a man bitten and shaken loses an arm.

### Talon

The hind claws rake at the end of a stoop with the whole speed of the fall behind them and open a man from shoulder to hip, and on the ground they strike like a hawk's.

### Tail

The tail whips forward over the body faster than the eye follows and drives the barb home, through leather and mail, and the venom follows it. A second strike finishes what the first began.

## Special Abilities

### Aerial Mastery

In open sky the wyvern hovers, banks, climbs and stoops as nothing on the ground can answer, and chooses the quarter of every attack.

### Venomous Barb

The venom on the barb kills a horse in minutes and a man in little more, by a creeping paralysis that takes the limbs and then the breath. A man who lives through a sting is weak for weeks. The barb is wet with it at all times, and small animals near a fresh drop fall down dead.

### Thermal Soaring

The wyvern rides the warm air off the rock to a height where the cold would kill a man and hangs there for hours without a wing-beat, and from there the whole of its country is under its eye.

### Predatory Intelligence

It has no speech and no cunning beyond the hunt, and within the hunt it is wholly cunning: it learns a road's traffic, a hunter's face and the hour the flocks move, and it changes its ways when a trick has failed.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 16-21 (1d6+15)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 2-5 (1d4+1)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 1-4 (1d4)
