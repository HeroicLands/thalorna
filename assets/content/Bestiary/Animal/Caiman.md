---
shortcode: caiman
name: {full: Caiman}
type: being
subType: creature
description: "A broad-snouted, armored crocodilian of the southern rivers and flooded forest, smaller than a crocodile but patient, quick and common in every backwater."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-crocjaws, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+12
    end: 1d6+12
    dex: 1d4+4
    agl: 1d6+7
    per: 1d6+10
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+2
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Lunging Bite
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
          name: Lunging Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
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
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
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
            roles: [manipulator]
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
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.2
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 45
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The black water beside the canoe is perfectly flat, and in it two knobs and a ridge sit like a drifting log, except that the log has eyes, and they follow you. A pair of red points catches the lamplight. Then there is a swirl, a long, flat back armored in ridged plates, and a head as long as your forearm. It slides under without a ripple, and the water closes over the place where it was.

# Dossier {#dossier}

The Caiman is a crocodilian of eight to ten feet and two hundred to three hundred pounds, a patient ambusher of slow water. It lives in the rivers, lagoons and flooded forest of [[place-xelemrgn|Shelem Region]], the mangrove swamps and river mouths of [[place-kankulrgn|K'ankul Region]] and the coastal rivers of [[place-neokbaatergn|Ne'ok Ba'ate Region]]. It is the common reptile of every backwater, and the jaguar's prey on the river bank.

## Presentation

A squat, long-tailed reptile with a broad, rounded snout, a bony ridge between the eyes, and a back of dark olive-brown, ridged plates banded with paler marks. The belly is pale yellow, and the eyes are amber with a slit pupil that throws back a red glint at night. The jaws are lined with long, interlocking teeth. A caiman is smaller and slimmer than a crocodile, and more active.

## In the Land

Caimans live in slow rivers, lagoons, backwaters, mangrove channels and flooded forest. In the wet season they spread through the flooded trees; in the dry season they gather in the deep pools and channels that stay full. They lie on mud banks and logs to bask in the morning, slip into the water at midday and hunt in the dark. They eat fish, snails, turtles, waterbirds and whatever mammal comes to the water to drink.

## Key Behaviors

Caimans hunt from ambush, lying with only the eyes and nostrils above the surface and seizing prey in a short lunge, or sweeping fish into the jaws with a sideways swing of the head. They hunt mostly at night and are quiet and still in the day. A female builds a mound nest of rotting leaves and earth on the bank, guards it, and carries the hatchlings to the water in her mouth. Caimans grunt and hiss, and the young call from the eggs. A caiman avoids large animals and people if it can, and attacks when cornered, surprised in the water, or guarding a nest.

## What the River Villages Do

The river villages of Shelem, K'ankul and Ne'ok Ba'ate hunt caimans for meat and hide. The hide is cut into shields, sandals and straps, and the teeth are strung. Villages fence their washing and bathing places with stakes and keep their dogs and children out of the water at dusk. Fishers know the pools where caimans lie and avoid them in the dry season. The [Itsani]{.name data-type="lore/culture"} regard the caiman as a creature of the river that belongs to the underworld,.

## Signs

- A smooth slide in the mud of a bank, with the prints of short legs on either side and the groove of a tail between.
- A pair of red points at the water's surface in lamplight, perfectly still.
- A mound of rotting leaves and earth at the edge of the forest, torn by a heavy body.
- A fish trap torn from its stakes and a dog gone from the washing place.
- A deep grunting from a lagoon after dark.

## Combat Strategy

The caiman's strategy is to lie still and strike once. It floats with only its eyes and nostrils showing, and seizes the prey with a lunge, then drags it under to drown. It will bite a leg at the water's edge, a paddle, a hand trailing from a canoe. If the first strike fails it withdraws and waits, or flees into deep water. On land it is clumsy and slow and fights only when cornered, whipping its tail from side to side and snapping.

## Attack Methods

### Lunging Bite

The caiman bursts forward from the water's surface and closes its jaws on the target, the teeth locking in. It holds on and drags the victim into the water. The bite is powerful but less devastating than a crocodile's.

### Tail Strike

The caiman sweeps its muscular tail sideways with great speed, striking anything near its flank. The blow can knock a man down on land or throw a paddler off balance in a canoe.

### Dragging Roll

Once it has a grip, the caiman rolls and thrashes, tearing flesh and breaking the grip of its victim. The roll is used mostly on prey that is too large to swallow whole.

## Special Abilities

### Armored Hide

The caiman's back is covered with bony plates that turn light blows and slashes. Arrows and knives often glance off the back; the soft belly and the eyes are the weak spots.

### Water Ambush

A caiman lying in water is nearly invisible. Its first strike comes with little warning, and it uses the dark and the current to reach prey before the prey knows it is there.

### Night Eyes

The caiman sees well in the dark. It hunts best at night, and the glint of its eyes is the only warning a traveler on a river bank is likely to get.

## Attributes

Strength
: 13-18 (1d6+12) — Powerful for its size; the jaws and tail are strong enough to drag a deer into the water

Endurance
: 13-18 (1d6+12) — Lies motionless for hours and survives long periods without food

Dexterity
: 5-8 (1d4+4) — Blunt and clumsy with its body, though the head moves precisely

Agility
: 8-13 (1d6+7) — Slow on land, quick and smooth in water

Perception
: 11-16 (1d6+10) — Sensitive to vibration and movement on the water; excellent night vision

Aura
: 7-12 (1d6+6) — A hunter of the river's edge; the Itsani give it a place in the underworld

Will
: 11-16 (1d6+10) — Patient and unflinching; will wait hours for prey or a guarded nest

Reasoning
: 3-6 (1d4+2) — Learns the habits of animals that come to drink

Creativity
: 2-5 (1d4+1) — Little improvisation; relies on ambush and the water
