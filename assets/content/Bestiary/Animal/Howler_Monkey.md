---
shortcode: hwlrmnky
name: {full: Howler Monkey, aliases: []}
type: being
subType: creature
description: "A large, heavily built canopy folivore of tropical forests, living in troops and producing the loudest vocalization of any land animal."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-monkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+4
    end: 1d4+5
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+6
    wil: 1d4+6
    rea: 1d6+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Canine Bite
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
          name: Canine Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 20, calc: "20"}
      reachBase: 0
      bodyScaleBase: 0.75
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[hwlrmnky|Howler Monkey]]{float=top-left}

Before dawn the forest begins to roar. It starts as a low, rolling sound far off in the dark, like wind in a ravine, and swells until the air shakes with it, coming from every side. A troop is sitting in the crown of a ceiba overhead, black shapes against the paling sky, the males with their throats swollen and their heads thrown back. A shower of half-chewed leaves comes down on the path.

# Dossier {#dossier}

The Howler Monkey is the big canopy monkey of the lowland and cloud forests, fifteen to twenty-two pounds and two feet long with a prehensile tail as long again, living in troops of ten to twenty in [[place-xelemrgn|Shelem Region]], [[place-kankulrgn|K'ankul Region]] and [[place-neokbaatergn|Ne'ok Ba'ate Region]]. Its howl is the loudest sound of any land animal and carries three miles through jungle, to claim ground and space the troops. In [[place-kchchkcntnnt|K'ich'chik Continent]] the howler is associated with scribes, artists and the arts of writing, and its image decorates libraries, scriptoria and the workshops of the artisan castes.

## Presentation

A stocky, powerfully built monkey with dense, coarse fur, dark brown to black, and a beard of longer hair on the males. The face is bare and dark, with forward-facing amber or brown eyes that look weary and wise. The throat holds an enlarged hollow bone that amplifies the voice, and the jaw is heavy. The limbs are short and strong, for slow movement in the canopy. The tail grips with enough strength to hold the animal's weight and feels as a hand does.

## In the Land

Howler monkeys live in the canopy of the river-bound jungle and cloud forest of Shelem, the limestone lowlands of K'ankul and the isthmus forests of Ne'ok Ba'ate. A troop of ten to twenty holds a few acres of forest, feeds on leaves in the early morning, rests through the heat and howls at first light and before rain. A troop moves along the same branches each day and sleeps in the same trees.

## Key Behaviors

Howlers are social, territorial and noisy. The dawn chorus begins before sunrise and goes on for half an hour, as the troops mark their places without a fight. They eat mostly leaves, with fruit, flowers and insects, which gives little energy, so they move less than any other monkey of their size and spend much of the day resting. A troop has a dominant male and several females, with young males subordinate or driven out to form bachelor groups. They do not attack people but show displeasure by dropping dung and urine on intruders.

## What the Forest Peoples Do

The forest peoples use the dawn chorus to tell the hour and the direction of the nearest troop. A hunter takes a howler for meat in the rains, when the animals are fat, and sells the skins. A traveler who is lost listens for the troops, since they sit near water and fruit. The howling is taken for a warning of rain, and the farmers of the lowlands begin their planting on a night when it has been heard. A troop in a village's fruit trees is driven off with drums and smoke. The monkeys' dung is spread on gardens.

## Signs

- A roar like a distant wind or a man in a barrel, rising from the treetops before sunrise.
- A rain of half-chewed leaves and fruit-skins from a canopy tree onto the trail.
- A dark shape with a coiled, hooked tail hanging from a branch by the tail alone.
- A troop sitting in the crowns of a fig, silent, watching.
- A branch shaking violently in a windless forest.

## Combat Strategy

Howler monkeys avoid physical confrontation whenever possible. Their primary defense is the howl itself — the sheer volume and deep resonance of the call is disorienting at close range and is an effective deterrent. If physically threatened, a troop will retreat through the canopy, where their arboreal agility makes pursuit by ground-based predators impossible. A cornered howler will bite — the jaw is powerful and the canine teeth are long — and a troop defending young will mob a threat with biting, scratching, and the targeted dropping of branches and fecal matter.

## Attack Methods

### Canine Bite

The howler's enlarged jaw houses long, sharp canine teeth capable of inflicting deep puncture wounds. The bite is powerful for an animal of its size and is used primarily in intra-troop disputes and self-defense.

### Arboreal Bombardment

A troop of howlers will drop branches, fruit, and fecal matter on intruders below. While individually these projectiles are not dangerous, the combined effect of a dozen monkeys simultaneously targeting a single individual is disorienting, disgusting, and surprisingly effective at driving away threats.

## Special Abilities

### World's Loudest Voice

The howler monkey's call, amplified by the specialized hyoid bone, is the loudest sound produced by any land animal — audible at distances of three miles or more through dense forest. At close range (within a few dozen paces), the sound is physically disorienting, vibrating in the chest cavity and making concentration difficult. The dawn chorus of multiple troops calling simultaneously creates an auditory landscape that dominates the forest.

### Prehensile Tail

The howler's tail is a fully functional fifth limb — strong enough to support the animal's full body weight, dexterous enough to manipulate small objects, and sensitive enough to serve as a tactile probe in the dark canopy. This adaptation gives the howler a degree of arboreal security that makes it virtually impossible to dislodge from a tree.

### Silence Warning

The sudden cessation of howler monkey calling is one of the most reliable indicators of danger in the tropical jungle. Experienced forest travelers know that when the howlers go silent, something has entered the canopy that frightens even the loudest voice in the forest — typically a jaguar, a large raptor, or something worse.

## Attributes

- **Strength:** 5-8 (1d4+4) — Modest; strong jaw but small body
- **Endurance:** 6-9 (1d4+5) — Sedentary lifestyle; low-energy diet limits sustained activity
- **Dexterity:** 12-17 (1d6+11) — Excellent arboreal manipulation; prehensile tail adds versatility
- **Agility:** 13-18 (1d6+12) — Sure and confident in the canopy; clumsy on the ground
- **Perception:** 11-16 (1d6+10) — Good forest senses; alert to predators
- **Aura:** 7-10 (1d4+6) — Cultural association with scribes and the arts; not sacred but respected
- **Will:** 7-10 (1d4+6) — Territorial through voice rather than violence
- **Reasoning:** 7-12 (1d6+6) — Primate intelligence; social complexity; learns territory and seasonal patterns
- **Creativity:** 6-9 (1d4+5) — Some behavioral flexibility; problem-solving within arboreal context
