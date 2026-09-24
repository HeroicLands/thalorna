---
tags:
  - animal
  - image-needed
  - creature
name:
  full: Vedyaran Elephant
  aliases: []
description: "The largest land animal in Vedyara Region — war-beast of the kingdoms' hosts, temple mount, and the measure every other megafauna in the region is judged against."
shortcode: vdyrnelphnt
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
  born: "unknown"
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
    str: 1d6+45
    end: 1d6+38
    agl: 1d4+4
    per: 1d6+13
    snt: 1d4+4
    aur: 1d4+5
    wil: 1d6+15
    rea: 1d4+5
    cre: 1d4+5
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 48 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 41 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-snt, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 85 } }
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 10
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 18
            aspect: piercing
          lengthBase: 5
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
            armorReduction: 2
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 20
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 16
            aspect: blunt
          lengthBase: 4
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
    - name: Trunk-Grasp
      type: skill
      system:
        shortcode: trnkgrsp
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: trnkgrsp
          name: Trunk-Grasp
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 10
            modifier: 0
          impactBase:
            numDice: 1
            die: 4
            modifier: 4
            aspect: blunt
          lengthBase: 6
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
            entangle: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 6
          - name: Trunk
            shortcode: trunkzone
            probWeight: 4
          - name: Forelegs
            shortcode: forelegszone
            probWeight: 5
          - name: Torso
            shortcode: torsozone
            probWeight: 16
          - name: Hindquarters
            shortcode: hindqtrzone
            probWeight: 5
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Trunk
            shortcode: trunkpart
            bodyZoneCode: trunkzone
            roles:
              - manipulator
            canHoldItem: false
            probWeight: 9
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1
              - locomotor
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
            roles:
              - core
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles:
              - locomotor
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
            probWeight: 5
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Trunk
            shortcode: trunkloc
            bodyPartCode: trunkpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 8
            protectionBase:
              blunt: 15
              edged: 14
              piercing: 12
              fire: 14
      weight:
        base: 7200
        calc: "7200"
      reachBase: 0
      bodyScaleBase: 2.15
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 75
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The ground itself seems to answer its footfall before the shape resolves out of the tree-line or the dust of a royal road. Gray-brown hide hangs loose over a frame that dwarfs anything else moving on four legs in this country, the great fan-ears working slowly against the heat, the trunk never still, testing wind and ground and the space around it with a delicacy that has nothing to do with its owner's size. Ivory tusks, when a bull carries them, curve pale against the dark hide. Small eyes, set deep and shadowed by a heavy brow, watch with an attention that reads as calculation rather than instinct. Whether it wears a mahout's goad-scars on its flank and a temple's paint on its brow, or neither, it is unmistakably the largest thing that walks on land anywhere in the region.

# Dossier {#dossier}

The Vedyaran elephant is the largest land animal in [[place-vedyarargn|Vedyara Region]] — bigger by a clear margin than the armored [[being-vdyrnrhn|Vedyaran rhinoceros]], which shares its floodplains and grasslands and is, by every account that has occasion to compare the two, the second-largest thing in the country rather than the first. A bull stands nine to eleven feet at the shoulder and can weigh three and a half tons or more; cows run smaller. Wild herds range the forest margins, the tall grasslands and the river floodplains from the western march to the eastern reach, and every kingdom that can afford the keeping of them maintains a captive stock besides.

Domesticated elephants are the region's siege engines, its heaviest labor, its ceremonial mounts and, dressed for war, the deciding weight in a pitched battle between hosts that can afford them. A mahout directs a working elephant with voice, knee and the elephant-hook rather than force — an animal this size cannot be compelled by anything a man can apply directly, and every kingdom's stable of war-elephants is only as reliable as the bond between each beast and the one or two handlers it will actually answer to. A wild bull in musth, or a captive one whose mahout has died or been replaced badly, is among the most dangerous single animals a traveler can meet in Vedyara.

## Presentation

A vast, gray-brown bulk on four columnar legs, the elephant's skin is thick, deeply wrinkled and sparsely haired, tightening over a domed skull and loosening in heavy folds at the knees, the throat and the base of the trunk. The ears are broad and mobile, used as much for cooling as for hearing, and flare wide when the animal is alarmed or aggressive. The trunk is the animal's most striking feature: a fused, muscular extension of nose and upper lip capable of lifting a felled tree or plucking a single blade of grass, ending in a fingerlike process delicate enough to untie a knot. Tusks, elongated upper incisors, are more pronounced in bulls; cows carry shorter tusks or none visible.

## Key Behaviors

Wild herds are matriarchal, led by the oldest and most experienced cow, and composed of related females and their young; bulls range alone or in small bachelor groups outside the breeding season. A herd's memory for water, forage and danger is carried in the matriarch's experience across decades, and a herd that has lost its matriarch to hunting or capture is measurably worse at surviving a hard season than one that has not.

A herd defending young is relentless and coordinated, cows placing themselves between a threat and the calves and charging in sequence rather than as a single rush. A wild bull outside a herd is more unpredictable and, in musth, considerably more dangerous — a state of heightened aggression and hormonal surge that experienced trackers learn to read from a distance and give a very wide berth.

## Combat Strategy

An elephant that has decided to fight rather than flee — which a wild one rarely does unless cornered, protecting young, or in musth — leads with sheer mass: a charge intended to knock down and trample rather than to gore first. Tusks, where present, are used to hook and toss an opponent already on the ground or to gore a target the trunk has pinned in place. A trained war-elephant is directed by its mahout to a specific target and will press an attack it would otherwise avoid, which is the whole reason armies pay the enormous cost of keeping them.

## Attack Methods

### Tusk

A bull drives a tusk into a downed or grappled target with the weight of the charge behind it; the wound is typically as much a crushing injury as a puncture.

### Kick

The forefeet strike downward with crushing force against anything caught beneath the animal, whether felled by the charge or already on the ground.

### Trunk-Grasp

The trunk seizes a limb, a weapon or a whole person, restraining or lifting the target for a following tusk or foot strike — the same dexterity a mahout relies on to hand up water or shift a log is turned, in earnest, into the animal's most versatile weapon.

## Special Abilities

### Matriarchal Memory

A herd led by an old matriarch finds water and forage in a drought that would defeat a younger-led herd, and avoids danger a less experienced leader would walk the herd into.

### The Mahout's Bond

A trained elephant answers reliably only to the handler or handlers it has bonded with over years; a stranger's command, however correctly given, is as likely to be ignored as obeyed. This is why the elephant-hook goes to war in a mahout's hand and not a footman's — a man with no bond to the animal is directing nothing.

### Sheer Mass

At three and a half tons and more, a charging elephant's momentum alone is close to unstoppable by anything short of a fortification or a matched weight of animal; the Vedyaran rhinoceros is the only other creature in the region's floodplains that will contest ground with one rather than yield it.

## Attributes

- **Strength:** 46-51 (1d6+45)

- **Endurance:** 39-44 (1d6+38)

- **Agility:** 5-8 (1d4+4)

- **Perception:** 14-19 (1d6+13)

- **Scent:** 5-8 (1d4+4)

- **Aura:** 6-9 (1d4+5)

- **Will:** 16-21 (1d6+15)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 6-9 (1d4+5)
