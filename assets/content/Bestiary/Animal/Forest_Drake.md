---
shortcode: frstdrk
name: {full: Forest Drake}
type: being
subType: creature
description: "A small, intelligent semi-arboreal drake ruling the forest canopy, solitary and fiercely territorial despite its modest draconic size."
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
    str: 1d6+10
    end: 1d6+9
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Fanged Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Fanged Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Talon Rend
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Talon Rend
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Wings, shortcode: wingszone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: wingszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor, manipulator]
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
            probWeight: 8
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
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
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 120
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[frstdrk|Forest Drake]]{float=top-left}

The oak over the path has a branch as thick as a horse, and the branch has been looking at you for some time. You see the eyes first, two slits of yellow in the dapple of leaf and shadow, and then the scales resolve round them, emerald flecked with lighter green, and the shape of a head the length of your arm. Eight feet of it is wound along the limb. A forked tongue tastes the air in your direction, and a long tail with a spine at its tip uncoils from the far side of the trunk.

# Dossier {#dossier}

The Forest Drake is the drake of the old forest of [[place-vrystwald|Vristwald]] and its deepwood, [[place-vethwald|Vethwald]]: eight feet from snout to tail-tip, scaled in greens that match the canopy, with four taloned limbs, a prehensile tail and a pair of leathery wings on which it glides from crown to crown and makes short, heavy flights. It lives in the trees, holds a hunting range of several square miles of old growth, and takes birds, squirrels, martens, fawns and whatever else comes under its branch. It is clever enough to learn a hunter's habits and to lie up where he passes.

The [[lore-varokhiclt|Varokh]] count it among the beasts of the forest and give it a wide berth.

## Presentation

A sleek, long-bodied reptile built for climbing, with fine overlapping scales in emerald and paler greens broken by lighter flecks, so that a drake lying along a limb in sunlight looks like leaf and shadow. A row of short spines runs down the back from neck to tail, and smaller ridges bracket the eyes. The forelimbs end in three curved talons that grip bark and flesh alike, and the hind limbs are stronger. The tail is long, muscular and prehensile, and ends in a hard spine. The head is angular with a deep jaw of backward-curving teeth and large yellow eyes. The wings are leathery, patterned in brighter green and gold on the underside, and folded along the body when the drake is at rest.

## In the Land

Forest Drakes live in the central mixed-forest belt of Vristwald, in the oldest timber, and are thickest in Vethwald, where the oaks are large enough to hold one along a branch. They are met along the rivers where the old forest comes down to the water and rarely in the northern taiga, where the trees are too thin. Each drake holds its range alone and drives out any other, and a range with a Varokh clearing in it is a range where goats and dogs go missing. In winter the drake dens in a hollow trunk and is seldom seen.

## Key Behaviors

A drake hunts chiefly at night and in the dusk, and spends the day coiled on a high limb watching the ground. It drops on prey from above or strikes from cover as it passes beneath, and it carries what it can lift back into the canopy to eat. It eats birds and their eggs, squirrels, martens, hares, fawns and, on a clearing's edge, lambs, kids and dogs. It learns: it marks where a hunter walks and when the herd-boy brings the goats to the stream, and it is there. It understands speech after a fashion, and the few who have tried to talk to one report that it listened and did as it pleased.

## What the Villages Do

A Varokh village with a drake in its woods keeps its goats and dogs in at night and sends the children for firewood in pairs. The hunters do not go after it in the trees. When a drake has taken too much, the village stakes out a kid in a clearing at dusk and waits with bows under cover, and a drake that comes down to the bait on the ground is killed there; one that drops from a branch and goes straight back up with the kid is not. The hide is scaled and tough and the Varokh make it into belts and the covers of their shields; the wing-leather makes fine gloves and is traded downriver.

## Signs

- A goat or a dog gone from a clearing with no track leading away and a scrape of claw-marks on the nearest big trunk.
- Shed scales, green and the size of a thumbnail, at the foot of an old oak.
- Bones and feathers lodged in the crotch of a high branch.
- A sudden silence of birds in one stand of trees while the forest round it goes on singing.
- A patch of dappled green on a limb that does not move with the wind.

## Combat Strategy

The drake strikes from above or from cover and does not stay to fight. It drops on a man, bites and holds, and if he is small enough it goes back up the trunk with him; if he is not, it bites and rakes quickly and climbs out of reach, then glides to another tree and watches. On the ground it is a competent fighter and no more, and it does not stay on the ground by choice. Cornered in a hollow trunk or wounded so that it cannot climb it fights to the end, and the tail-spine and the hind talons do as much as the jaws. A drake that has been hurt in a fight it could leave, leaves, and remembers who hurt it.

## Attack Methods

### Fanged Bite

The jaws close and the curved teeth hold a struggling animal fast. A drake usually bites after it has seized the prey with its talons or wrapped it in a coil of the tail; a drake dropping from a branch bites first.

### Talon Rend

A hooking rake with the fore-talons across a body or a limb, used to open a wound and win room.

### Tail Strike

The tail lashes like a whip with the spine at its end, hard enough to knock a man off his feet or drive him back from the trunk.

## Special Abilities

### Arboreal Mastery

The drake climbs at full speed, head up or head down, crosses between crowns on its wings, and goes where no man or dog can follow. In the canopy everything favors it; on open ground nothing does.

### Camouflage Scales

Lying still in leaf-shadow the drake is a branch until it opens its eyes. Moving, it is harder to lose in the green than anything else of its size, and in full sun on open ground its colors hide nothing.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 10-15 (1d6+9)

Dexterity
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 12-17 (1d6+11)

Aura
: 8-11 (1d4+7)

Will
: 9-14 (1d6+8)

Reasoning
: 7-10 (1d4+6)

Creativity
: 5-8 (1d4+4)
