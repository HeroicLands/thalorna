---
shortcode: anaconda
name: {full: Anaconda}
type: being
subType: creature
description: "The heaviest snake of the southern rivers, a thick-bodied, olive-green water constrictor that waits in shallows and swamp to seize and drown large prey."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-snake, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+18
    end: 1d6+14
    dex: 1d4+4
    agl: 1d6+8
    per: 1d6+9
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d4+2
    cre: 1d4+1
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 52}}
    - name: Seizing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 53
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Seizing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, clench: true, armorReduction: 2}
    - name: Constricting Coil
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coil
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 16, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forebody, shortcode: torsozone, probWeight: 11}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            isStumble: true
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isStumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 6, piercing: 5, fire: 4}
      weight: {base: 250, calc: "250"}
      reachBase: 0
      bodyScaleBase: 1.3
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 40
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The mud at the water's edge bears a smooth trough as wide as a barrel, and at its end the shallows are a little too still. Then a loop of olive-green body rises, as thick as your thigh and blotched with black rings, and another beside it, and a flat head with eyes set high on top turns toward you. It tastes the air and the water in a single flick of the tongue.

# Dossier {#dossier}

The Anaconda is a non-venomous water constrictor of fifteen to twenty feet and two hundred to three hundred pounds, the heaviest snake of the continent. It lives in the slow rivers, swamps and flooded forest of [[place-xelemrgn|Shelem Region]], along [[place-hanaltzuma|the Misty River]] (Ha'nal Ts'uma) and [[place-hanalxilik|the Blue River]] (Ha'nal Shilik) and their backwaters. The river peoples hold it to be a spirit of the water that bridges the world of the living and the underworld.

## Presentation

An immense, thick-bodied snake, olive-green to dark brown, with large black oval blotches down the back and yellow-ringed spots along the flanks. The head is small beside the body and flattened, with the eyes and nostrils set high so that the snake can lie submerged and see and breathe. Females are far larger than males. A big anaconda is as thick through the middle as a man's thigh and heavier than a man.

## In the Land

Anacondas live in the water and at its edge: in sluggish backwaters, flooded forest, swamps and the reedy shallows of the rivers, hidden under floating plants. They bask on logs and mud banks in the morning, and lie submerged by day with the nostrils just breaking the surface. They eat fish, turtles, waterbirds, capybaras, caimans and deer that come to drink. After a large meal an anaconda lies up for weeks.

## Key Behaviors

Anacondas hunt from ambush, lying still in the water for hours, and strike at prey that comes within reach, seizing it with a bite, throwing coils round it and dragging it under to drown. A large prey animal is swallowed whole, headfirst, and the snake then rests and digests for a week or more; it can go for months between meals. Anacondas are solitary except at mating, when several males twine round one female in a ball. They give birth to live young. They are shy of people and flee into the water when approached, but an anaconda that is cornered, guarding a meal or startled at close range strikes.

## What the River Peoples Do

The river peoples of Shelem blend the official Itsani cosmology with the veneration of local spirits, and the anaconda is one of them: the snake that bridges the world of humans and the underworld. Boatmen leave one alone, steer clear of its pools, and make offerings at the water's edge where one is known to lie. The priesthood of Shelem reads its movements and its sloughed skin as signs. A dead anaconda's skin is a rare and costly gift, and the heaviest snakes are taken only by hunters who are sent to find a particular animal for a particular rite.

## Signs

- A smooth, wide trough in the mud of a bank, as if a log had been dragged to the water.
- A shed skin, as long as a canoe, caught in the reeds, translucent and pale.
- A line of bubbles rising in a still backwater, with the birds suddenly silent.
- A dog, a peccary or a goat lost at the water's edge, with a flattened patch of grass leading in.
- A fat, heavy snake basking on a log with a large bulge along its length.

## Combat Strategy

The anaconda's strategy is the ambush and the coil. It lies submerged and immobile, and it seizes prey at the waterline with a single bite, anchoring it with the recurved teeth. Within moments the coils are round the victim, and each time the victim breathes out the coils tighten. The snake pulls its prey into deep water, where it cannot be fought free, and holds it there until it drowns. Against a fighter on land it is slower and clumsier, and its best hold is when the enemy is already in the water.

## Attack Methods

### Seizing Bite

The anaconda's strike is fast, and the bite anchors it to the prey with a hold of many curved teeth. The bite is not venomous, but it tears flesh, and it is only the first move.

### Constricting Coil

The snake wraps itself two or three times round the victim and squeezes, tightening with each breath. The crushing force breaks ribs, stops the heart and forces the breath from the lungs. A victim caught in the coils cannot easily be freed.

### Drowning Hold

The anaconda drags its prey beneath the surface and keeps it there, coils tight and head clear of the struggle. A victim held under water is dead in a few minutes.

### Submerged Ambush

The snake lies hidden under floating plants or in the shallows, and strikes without warning at anything that wades, drinks or paddles close. The attack comes from a place that looks empty.

## Special Abilities

### Constriction

The anaconda's coils tighten on every breath the victim takes. Once the coils are round the target, the damage is automatic and increases each round, and a struggling victim cannot easily break free.

### Water Concealment

The anaconda's eyes and nostrils are set high on the head, so that it can lie hidden and breathe under plants and mud. It cannot be seen in murky water until it moves.

### Camouflage

The mottled olive-green and black pattern blends with floating plants, mud and the dappled light of the river. A resting anaconda looks like a log.

## Attributes

Strength
: 19-24 (1d6+18) — Among the strongest snakes; the coils can crush a deer or a caiman

Endurance
: 15-20 (1d6+14) — Lies in wait for hours, holds its victims for minutes and fasts for months

Dexterity
: 5-8 (1d4+4) — A snake's control of its own body, with no precision for anything else

Agility
: 9-14 (1d6+8) — Slow on land but quick and smooth in water

Perception
: 10-15 (1d6+9) — Tastes the air and water; senses heat and vibration of prey

Aura
: 8-13 (1d6+7) — A heavy, sinister presence; sacred to the river peoples

Will
: 12-17 (1d6+11) — Relentless and patient; does not release a hold

Reasoning
: 3-6 (1d4+2) — Instinct more than thought; learns where prey comes to drink

Creativity
: 2-5 (1d4+1) — No improvisation; relies on ambush and the coil
