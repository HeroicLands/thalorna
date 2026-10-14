---
shortcode: vdyrnrhn
name: {full: Vedyaran Rhinoceros, aliases: []}
type: being
subType: creature
description: "A massive semi-aquatic armored megaherbivore of the Vedyaran floodplains, wallowing among rivers, marshes, and tall lowland grasslands."
tags: [animal, image-needed]
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
    str: 1d6+15
    end: 1d6+14
    dex: 1d4+6
    agl: 1d4+5
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 48}}
    - name: Horn Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Battering Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Battering Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trample
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 12}
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
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 4000, calc: "4000"}
      reachBase: 0
      bodyScaleBase: 1.43
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[vdyrnrhn|Vedyaran Rhinoceros]]{float=top-left}

The elephant-grass on either side of the path is higher than a rider's head, and somewhere in it something is breathing, a long heavy snort like a bellows. The bank ahead bursts open in a spray of mud and brown water, and out of the wallow comes an animal built like a fortification: gray-brown hide laid over its shoulders, flanks and haunches in great plates divided by deep creases, every plate studded with round knobs like the rivets of a cuirass. It is two tons if it is a pound. A single blunt horn stands on its nose. Its small eyes do not seem to find you at all, but its tubular ears have, and they are both turned your way. It lowers its head.

# Dossier {#dossier}

The Vedyaran rhinoceros, the _phāndra_ of the Vedyari, is the armored giant of the river floodplains of [[place-vedyarargn|Vedyara]]: five to six feet at the shoulder, two tons and more, with a single horn of eight to sixteen inches and a hide grown in plates so like worked armor that armorers have copied it for centuries and never matched it. It lives in the elephant-grass, marshes and wallows along the great rivers, eats grass and reeds, and holds its ground by charging whatever comes into it. It is solitary, short-sighted and short-tempered, and it charges at a sound or a smell before it has seen what made it. In the tall grass, where the grass hides a man and the rhinoceros alike until they are a few yards apart, that makes it the most dangerous animal a traveler on the river paths meets, more so than the elephant, which is larger and prefers to go away.

## Presentation

A barrel-bodied animal on short, columnar legs with broad three-toed feet. The hide is the whole of its reputation: an inch or two thick over the shoulders and flanks, gray-brown, gathered into raised plates across the shoulders, back and haunches with deep, soft, pinkish-gray creases between them where the animal bends, and every plate covered in rounded knobs. The head is long and heavy with a flat brow, small eyes set far back, and mobile, tube-shaped ears. The upper lip is pointed and grasping, and plucks grass stems with precision. The horn is single, blunt and conical, worn smooth and often chipped from fighting and from rooting in the banks. At a walk it is surprisingly quiet. At a charge it goes from standing to a gallop in a few strides.

## In the Land

The rhinoceros lives along the great rivers of the Vedyari lowlands—the [[place-mahanadi|Mahānadī]] and the others that come down from the [[place-sthrnwall|Southern Wall]]—in the flood-meadows of elephant-grass twelve to fifteen feet high, in the reed-marshes and in the wallows and mud-holes of the river margins. A bull holds a stretch of river bank with its wallows, its crossing-places and its grazing, and patrols it on a regular round. Rhinoceros are common in the wilder stretches of the rivers and rare along the settled banks, where the poachers have taken them for their horns. A path that crosses a rhinoceros's ground is known to the people who live there, and a stranger who uses it is warned.

## Key Behaviors

A rhinoceros grazes in the morning and evening and lies through the heat in a wallow or a river, often for hours; the mud cools it, keeps off the biting flies and keeps its hide from cracking, and one kept from water grows worse-tempered by the day. Neighboring bulls share their dung heaps and wallows and settle disputes by display more often than by fighting; a stranger is attacked at once. The animal sees poorly beyond fifty yards and hears and smells very well, so it charges at a sound or a scent on the wind and finds out afterward what it charged at. A cow with a calf charges more readily than a bull, with less warning, and keeps charging. A rhinoceros remembers: one that has been hunted or harried attacks at the smell of men for years.

## What the River People Do

The villages of the rivers keep their paths through the grass wide and cut back, and walk them talking, so that a rhinoceros hears them coming from far off and moves away. A traveler who must cross rhinoceros ground goes upwind of the wallows, keeps a tree in sight, and climbs it if he hears the snort; a rhinoceros cannot climb and seldom waits. The Senāja houses, the families born to the host, carry the _phāndra_ on their banners as the beast that does not give ground, and a shield of rhinoceros hide, lighter than metal and proof against a sword-cut, is a gift a captain gives the man who saved his life. The horn is worth more than ivory to the physicians and the temple-makers, and the trade in it keeps the poachers in the grass and the animals gone from the settled banks; a kingdom that claims the herds hangs the poachers it catches.

## Signs

- A great dung heap at a path junction in the grass, shared and scattered by many feet.
- Wallows on the river bank, churned to slick mud, with the shape of a heavy body pressed into them.
- Broad three-toed tracks deep in the mud, in a line along the same path every day.
- A long, heavy snort from the grass close by, and then silence.
- Trees by the river with the bark rubbed off at the height of a man's waist and caked with mud.

## Combat Strategy

The rhinoceros charges. It lowers its head, turns toward the sound or the smell, and comes at a gallop, covering fifty or a hundred yards in moments, and strikes with the horn and the whole weight of its head and shoulders behind it. It overturns carts and goes through fences. If it misses, which is common with its poor eyes, it wheels and charges again, and keeps on until the threat is gone, crushed, or no longer interesting to it. A man knocked down is trampled and knelt on. A man up a tree is safe, though the animal may try to push the tree over. The creases between the plates and the soft parts of the throat are where a spear goes in; anywhere else it skids off.

## Attack Methods

### Horn Gore

The horn drives in with the momentum of the charge behind it and the head scoops upward at the end, so that a man struck squarely is thrown into the air with a wound that is crushing and piercing at once. It goes through armor and timber alike.

### Battering Charge

Even when the horn misses, the skull and shoulders strike with the weight of two tons. A man is knocked flat or thrown several yards with his ribs broken on that side, and a horse or a light cart fares no better.

### Trample

A man on the ground is trampled under the broad feet and knelt on, the animal pressing its full weight down through its armored chest.

## Special Abilities

### Living Armor

The plated hide turns arrows, light spears and sword-cuts. A heavy weapon must be put into the creases or the soft throat to do real harm.

### Floodplain Dominance

It goes through elephant-grass like a boat's prow, crosses rivers easily, and walks firm in a marsh where a horse would sink.

### Poor Vision, Sharp Ears

It cannot tell a still man from a tree at fifty yards, but it hears and smells him at several hundred. A careful traveler downwind and quiet slips past at ten paces; a careless one meets the charge before he knows the animal is there.

### Territorial Memory

It knows every wallow, path and landmark of its ground and walks the same round every day, so its movements can be learned, and it remembers for years a man who has hurt it.

## Attributes

- **Strength:** 16-21 (1d6+15)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 6-9 (1d4+5)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
