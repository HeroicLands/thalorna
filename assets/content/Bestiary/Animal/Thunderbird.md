---
shortcode: thndrbrd
name: {full: Thunderbird, aliases: []}
type: being
subType: creature
description: "An enormous apex aerial predator with a sixty-to-eighty-foot wingspan that rides storm winds above remote mountain peaks and canyons."
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
    str: 1d6+32
    end: 1d6+27
    dex: 1d6+13
    agl: 1d6+11
    per: 1d6+13
    aur: 1d6+9
    wil: 1d6+12
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 31}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - name: Diving Talon Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Diving Talon Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 12, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Grip
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Crushing Grip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 36, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak Strike
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 5}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 5}
          - {name: Body, shortcode: torsozone, probWeight: 10}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 5}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 5}
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
          - name: Body
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
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
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
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 3000, calc: "3000"}
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 120
        leaguesPerWatch: 14
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thndrbrd|Thunderbird]]{float=top-left}

The cloud on the peak has been building all morning, gray on gray, and now the first thunder rolls down off it. In the gap between two banks of cloud something moves that is too big to be moving. It is a bird. It is so far up that it ought to be a speck, and it is not a speck: its wings span the gap, black and streaked with a sheen like wet slate, and as it banks the whole sky behind it seems to tilt. The guide beside you has stopped walking. The bird turns again, lower, and the wind of the turn reaches you a moment later, cold and smelling of rain, and the mules start to scream.

# Dossier {#dossier}

The Thunderbird is the greatest bird in the world: a storm-riding eagle with a wingspan of sixty to eighty feet and the weight of two dray horses, which nests on the highest and most broken peaks and hunts by diving out of the cloud. It takes wild yaks, horses, mules and anything else it can carry, and it fights anything that comes near its eyrie. It is rare enough that most scholars doubt it exists. The people who live under [[place-meghashkhr|Meghashikhara]], the storm-peak at the western end of [[place-sthrnwall|the Southern Wall]], do not doubt it, because it nests there, and it comes and goes with the monsoon cloud that piles against the mountain.

## Presentation

The thunderbird is built like an eagle on a scale that makes no sense to the eye: a deep chest, a heavy hooked beak longer than a man's arm, and legs as thick as a man's waist, ending in four hooked talons each the length of a sword. Its plumage is dense and dark, black to charcoal, and the long flight-feathers are streaked with blue and silver that flash and shift like lightning as it moves. The eyes are gold, forward-set and fierce. It flies slowly and seldom flaps; it rides the storm wind and the updrafts off the mountain face with its wings set, and turns with small movements of the long primaries. On the ground it is clumsy and heavy, walks with a lurch, and needs a drop or a strong wind to take off again. When it cries the sound is a long, cracking scream that the mountain throws back.

## In the Land

Thunderbirds nest on the highest, most broken and most storm-beaten peaks, where nothing without wings can reach the eyrie. Meghashikhara is one: the monsoon cloud piles against its southern face every year, and the storm that feeds the Vedyari plain and shuts [[place-meghadvara|Meghadvāra]] from below is the wind the thunderbird rides. The pair that holds the peak ranges over the whole western end of the wall and down over the north-western marches, hunting wild yaks and sheep on the high grazing and the beasts of the caravans on the road. Where else they nest, nobody can say for certain; the [[affiliation-osketguides|Ösket]] say there is another pair farther east along the wall, and the tellers in the [[place-khzryndsrtrgn|Khazryn]] edge-towns say there are thunderbirds over the northern deserts as well.

## Key Behaviors

A thunderbird hunts in daylight, and most of all in storms, when the wind gives it lift and the cloud gives it cover. It soars high, watches the ground, and dives on what it has chosen from a great height, striking with its talons and carrying the prey off to the eyrie or to a ledge to eat. A pair holds its range against every other great bird and attacks a rival on sight. It is intelligent and remembers: it knows the caravan road and the season the caravans use it, and it knows the men who have shot at it. The eyrie is a heap of branches, bones and hides on a ledge below the summit, and it uses the same one for generations.

## What the Guides Do

The Ösket of the western lineages read Meghashikhara before they move a caravan, and part of what they read is the bird. A guide-mother who sees the thunderbird circling the summit at first light holds the caravan at the hearth, whatever the cloud is doing, and does not explain why. The lineages hobble the mules close and keep them under rock overhangs on the high road, and they light no fires in the open on a storm day. The [[affiliation-svapnasarisamaja|Svapnasāri-samāja]] keepers of the shrine-tower at the summit of the pass leave the carcass of a goat on a ledge above the tower when a caravan crosses, and they say the bird takes it. Down on the plain, where [[affiliation-meghanatha|Meghanātha]] is worshipped with drums, people speak of the thunderbird as the god's bird and say its cry is his first drum of the monsoon; the priests neither teach it nor deny it.

## Signs

- A shadow passing over a valley with nothing visible in the sky to cast it, under heavy cloud.
- A long, cracking scream from a peak at the start of a storm, echoed back and forth along the mountain.
- The bones of yaks and horses scattered on high ledges where no animal could have climbed.
- Feathers as long as a spear, black and streaked with blue, caught on the rock below a summit.
- Pack animals that panic and break their hobbles before any storm is visible.

## Combat Strategy

A thunderbird fights from the air. It dives out of cloud or out of the sun onto its target from far above, strikes with its talons, and tries to seize and carry. If it cannot lift its prey it crushes it on the ground and then tears at it with its beak. It does not stay on the ground to fight if it can avoid it, because on the ground it is slow and vulnerable. A thunderbird defending its eyrie is different, and attacks anything that comes up the mountain toward it, over and over, until the climbers are dead or gone. Missiles anger it more than they hurt it, and a man who has shot at it is the one it comes for.

## Attack Methods

### Diving Talon Strike

The thunderbird drops out of the sky with its talons forward, and the strike lands with the weight of a falling boulder. The talons cut deep, and a man hit by the dive is knocked flat, broken, or seized and lifted.

### Crushing Grip

Once it has seized something, the thunderbird closes its talons. The grip crushes ribs, collapses lungs and snaps a horse's spine, and it does not let go of its own accord.

### Beak Strike

On the ground, or standing on prey it has pinned, the thunderbird strikes down with its great hooked beak. The blow breaks bone, tears off limbs and opens a horse from shoulder to flank.

## Special Abilities

### Aerial Mastery

In the air the thunderbird is far faster than anything else that flies and turns with an agility its size should not allow. A man on the ground has no way to escape it except by getting under rock.

### Storm Affinity

In a storm it flies faster, higher and more surely, using wind and cloud that ground every other bird. It hunts best in the worst weather.

### Predatory Vision

It sees movement from miles away and follows its prey through rain and broken cloud.

### Lightning Affinity

Those who have seen it close in a storm say that lightning plays round its wings and that strikes fall near it more often than chance allows. Whether the bird draws the lightning or only flies where the lightning is, nobody can say.

### Regenerative Power

A thunderbird heals wounds that would kill any other creature, and a bird shot and driven off one season is back on its peak the next.

## Attributes

- **Strength:** 33-38 (1d6+32)

- **Endurance:** 28-33 (1d6+27)

- **Dexterity:** 14-19 (1d6+13)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 14-19 (1d6+13)

- **Aura:** 10-15 (1d6+9)

- **Will:** 13-18 (1d6+12)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 5-8 (1d4+4)
