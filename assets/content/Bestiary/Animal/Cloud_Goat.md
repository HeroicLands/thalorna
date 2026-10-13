---
shortcode: cldgt
name: {full: Cloud Goat, aliases: [Sulkula]}
type: being
subType: creature
description: "A white-coated mountain goat, heavier than an ibex, with long back-swept horns, that lives on the cliff faces of the Ring at and above the cloud line."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: goat, templatePriority: 0, culture: kaliharanclt}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+10
    end: 1d6+10
    dex: 1d6+10
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+5
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Kick
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
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Horn Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
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
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 220, calc: "220"}
      reachBase: 0
      bodyScaleBase: 1.15
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The cliff above the high meadow is sheer and wet with cloud, and a patch of it moves. It is a white goat standing on a ledge no wider than its hooves, long horns swept back along its neck, looking down at you with no concern. Behind it, higher on the same face, a small herd of others stands in the mist as if painted on the rock.

# Dossier {#dossier}

The Cloud Goat, _sulkula_ in [[skill-kalihrlng|Kalihári]], "the one that goes round the stone", is a white-coated mountain goat, heavier than an ibex, with long back-swept horns and wide splayed hooves. It lives on the cliffs and high slopes of [[place-klhrring|the Ring]], at and above the cloud line. It lives on faces a person cannot cross, in small herds led by an old female, and comes down to the high meadows only in Stillwater.

## Presentation

A stocky, long-haired white goat, with a thick coat that sheds the wet of the cloud, a short beard and long, ridged horns swept back over the shoulders. The hooves are wide and splay on the rock, with a soft pad inside that grips. The eyes are pale amber.

## In the Land

Cloud Goats live on the cliffs and high slopes of the Ring, at and above the cloud line, and on the few high meadows among them. They come down to the meadows only in Stillwater. They do not descend to the forest or the terraces, and they are not met anywhere but on the Ring.

## Key Behaviors

A herd of a few animals follows an old female along a route over the faces, and she chooses where to stand and when to move. They graze on the ledges and the meadows, rest on the rock above the cloud, and cross faces that a person cannot cross, without hurry. In Stillwater the herd comes down to the high meadows to graze. A goat that is pressed turns to face the threat and charges with its head down.

## What the Islanders Do

The people who live nearest the Ring watch the herds from below, and the herd's descent in Stillwater marks the season for them. The highland sanctuaries record the herds' ranges in the sílhari manuals. Nobody hunts a sulkula, and the animals are not driven.

## Signs

- A white shape on a ledge of a cliff face above the cloud line.
- A trail of small tracks on a ledge, cut into the lichen along the rock.
- White hair snagged on a rock at the edge of a high meadow.
- A herd coming down toward the high meadows in Stillwater.

## Combat Strategy

A Cloud Goat avoids a fight and goes up the rock, where a person cannot follow. Cornered on a ledge, it lowers its head and charges, and the charge is aimed to throw an attacker off the ledge.

## Attack Methods

### Horn Charge

The goat lowers its horns and drives into its target with the weight of its shoulders behind them. The charge can break a rib or throw a person from a ledge.

### Kick

A quick, stiff-legged kick from the hind or forefoot, to keep an attacker at a distance.

## Special Abilities

### Cliff Mastery

The goat crosses sheer faces and narrow ledges that a person cannot use, and rests on them without strain. Pursuit on the rock is hopeless.

### Sure-Footed Leaping

The splayed hooves grip the rock, and the goat leaps from ledge to ledge across gaps a person could not cross.

### Herd Leader

The old female that leads a herd knows its routes and its ranges, and the herd follows where she stands.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 6-9 (1d4+5)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
