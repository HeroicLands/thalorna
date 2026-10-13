---
shortcode: mmmthcnt
name: {full: Mammoth Centipede, aliases: []}
type: being
subType: creature
description: "A glossy, dark-plated arthropod up to eight feet long, its many-legged segments driving small mandibles and probing antennae through the undergrowth."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+8
    end: 1d6+8
    dex: 1d6+10
    agl: 1d6+12
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Constricting Coil
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Constricting Coil
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forebody, shortcode: torsozone, probWeight: 5}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 3}
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
            probWeight: 4
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mmmthcnt|Mammoth Centipede]]{float=top-left}

The stair cut into the side of the sinkhole is wet, and the light from above gives out a third of the way down. Your torch shows the rock face beside you, pale and dripping, and a crack in it as long as your arm. Two thin antennae come out of the crack, longer than your forearm, and wave slowly toward the torch. Then the rest follows, segment after segment of glossy black plate, each with its pair of legs moving in a ripple like wind over grass, until it is longer than you are tall and still coming, and the sound of the legs on the wet rock is a dry, steady patter.

# Dossier {#dossier}

The Mammoth Centipede is a predatory centipede five to eight feet long and about a hundred pounds in weight, armored in dark overlapping plates, with venomous fangs at the front and dozens of clawed legs. It lives in dark, damp, enclosed places, and its great home is the limestone country of [[place-kankulrgn|K'ankul]], where the ground is honeycombed with caves, underground rivers and the sacred pools (_ch'uqil_) that open them to the sky. It hunts by touch and vibration in total darkness, takes bats, fish, lizards and anything else it can bite, and holds what it has bitten in its coils until it stops moving. It is one of the dangers of going down into a sacred pool, and the priests who go down know it well.

## Presentation

A long, flattened body of twenty-odd segments, each covered by a glossy plate of deep brown or black with a paler band at its edge, and each carrying a pair of legs ending in a hooked claw. The head is small and plated, carrying two long, thin antennae and, beneath them, a pair of curved fangs, which are modified legs, meeting like tongs. The last pair of legs is long and trails backward, and the centipede feels behind itself with them as it feels ahead with the antennae. Between the plates, when it bends, pale soft tissue shows. It has a musky, sour smell that hangs in an enclosed space for hours after it has passed. It moves in a smooth, fast ripple and climbs any surface, wet rock included.

## In the Land

K'ankul's limestone platform looks flat and dry from above and is hollow beneath, and the centipedes live in the hollow part: in the cave passages, the dry galleries above the water in the sacred pools, the drains and cisterns of the old cities, and the cellars and tomb-shafts cut into the rock. They are most numerous where bats roost, because bats and the insects that live on bat dung are their main food, and they hunt fish and blind cave-crayfish at the edge of the underground water. They come up into the jungle on wet nights and are found under fallen timber and in the stone of ruins, and they shelter by day in any dark, damp crack wide enough to take them. Each centipede keeps to a stretch of passage and the cracks along it, and an old one in a big cave can be very old indeed.

## Key Behaviors

A centipede hunts by night or in permanent dark, and it does not need its eyes, which are poor. It runs its antennae over the rock ahead of it and feels the ground for the vibration of something moving, and when it finds prey it closes fast and bites. It holds smaller prey with its front legs and wraps the long body round it, and it simply hangs on while the venom works. It eats slowly, for an hour or more. It is solitary and hostile to other centipedes, and two that meet fight. A female guards her eggs in a crack, curled round them, and does not leave them for weeks. The centipede will flee light, noise and fire when it can, and turns on whatever stops it fleeing.

## What the Priests Do

To go down into a sacred pool is to approach the boundary of [[place-chaltzumaq|Ch'al Tz'umaq]], and the priests of K'ankul who descend to pour the offerings go carefully, in pairs, with torches of resin that smoke heavily. A centipede on the stair is taken as a warning that the descent is unwelcome that day, and the priests withdraw and come back at the next proper hour. Where a centipede has made its home on a pool's stair or ledge, the temple sends men down with long forked poles to pin it and carry it up alive, and it is released in the jungle far from the city. One is never killed inside a pool. The cities' tomb-cutters and cistern-cleaners, who go into the ground for their work, are less careful, and kill every centipede they meet with a heavy blade behind the head.

## Signs

- Bat roosts with fresh, half-eaten bats on the floor beneath them, the bodies pierced twice and crushed.
- A sour, musky smell hanging in a cave passage or cellar with no draft.
- Shed skins, long, pale and segmented, wedged in cracks.
- The dry patter of many legs on rock, heard in the dark and impossible to place.
- Fish and crayfish missing from a pool that should be full of them.

## Combat Strategy

A centipede bites first, quickly, at whatever part of a man is nearest, often the hand or the foot. If he is small or the venom takes hold fast, it throws its coils round him and holds. If he fights, it bites again, and keeps the coils on a limb to pin it while it does. It is hard to strike well: the plates turn a glancing blow, it moves faster than a man expects, and it can come at him from the wall or the roof. It does not like fire. A torch thrust at its head usually drives it back into its crack, and it will not come out again while the light is there.

## Attack Methods

### Venomous Bite

The fangs close from either side like tongs and drive in. The bite is very painful at once and deep enough to bleed freely. The venom follows, spreading numbness and weakness outward from the wound.

### Constricting Coil

The centipede throws the length of its body round a victim and squeezes, and the hooked legs grip as the coils tighten. A dog, a child or a man already weakened by venom is crushed and held; a strong man can usually pull an arm or a leg free, but while the coils hold a limb, he cannot use it, and the fangs are close.

## Special Abilities

### Wall Climber

The centipede runs up walls and along ceilings, wet or dry, at full speed, and it can drop onto a man from above or escape where he cannot follow.

### Vibration Sense

Its antennae and legs feel every step through rock and water. In absolute darkness it knows where a man is, how fast he is moving and which way, and it finds hidden or invisible creatures by their weight on the ground.

### Paralytic Venom

The venom attacks the nerves. A bitten man feels pain and then a numbness spreading from the bite, and a heavy dose leaves him weak, unsteady and, at its worst, unable to move for hours.

## Attributes

- **Strength:** 9-12 (1d4+8)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
