---
tags:
  - dreadspawn
  - creature
name:
  full: Verdantcoil
  aliases: []
description: "A colossal, patient snake of corrupted origin that lurks motionless in ancient forests, waiting days to strike from ambush."
shortcode: vrdntcl
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
  birthday: null
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
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d6+14
    end: 1d4+13
    dex: 1d6+10
    agl: 1d4+13
    per: 1d6+14
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d6+6
    cre: 1d6+6
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-mysticalability-sprt, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 43 } }
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 4
            aspect: piercing
          lengthBase: 1
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
            poison: true
    - name: Striking Constriction
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Striking Constriction
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 8
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 18
            aspect: blunt
          lengthBase: 1
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
            constrict: true
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 3
          - name: Forebody
            shortcode: torsozone
            probWeight: 11
          - name: Hindbody
            shortcode: hindbodyzone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
              - manipulator
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles:
              - core
              - locomotor
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles:
              - core
              - locomotor
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
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase:
              blunt: 4
              edged: 3
              piercing: 2
              fire: 4
      weight:
        base: 300
        calc: "300"
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - scope: surface_cover
            key: mixed_forest
            mode: add
            textValue: "0"
          - scope: surface_cover
            key: needleleaf_forest
            mode: add
            textValue: "0"
          - scope: surface_cover
            key: woodland
            mode: add
            textValue: "0"
        disabled: false
---

# Appearance {#appearance}

![[vrdntcl|Verdantcoil]]{float: top-left}

The branch ahead shifts though there is no wind. You might have missed it—might have thought it nothing but an old bough settling—except you see the scales now, brilliant emerald catching light that should be blocked by the canopy above. The coil tightens around the branch, and the creature raises its head with terrible, slow grace. Eyes like polished jade fixate on you with predatory calculation, and a forked tongue tastes the air, sensing your heat, your fear, your vulnerability. The creature's body is massive—easily thirty feet in length, all coiled muscle and power. Emerald scales shimmer as the creature shifts its position, seeking the best angle for its strike. You hear nothing as it moves—no scrape, no rustle, no warning beyond the sight of that beautiful, terrible head turning to face you with absolute intent.

# Dossier {#dossier}

Verdantcoils are apex predators of ancient forests, massive snakes of corrupted or magical origin that have evolved supernatural strength, intelligence, and patience. They are ambush hunters of supreme skill, creatures that can remain perfectly motionless for days waiting for the perfect moment to strike. A Verdantcoil does little active hunting; it prefers to place itself where prey cannot possibly escape. These creatures are found primarily in deep, old-growth forests where the canopy is thick and the darkness is deep. A single Verdantcoil can effectively cut off travel through an entire stretch of forest as travelers learn to avoid the creature's territory and the high likelihood of death.

## Presentation

A Verdantcoil measures roughly 25 to 35 feet in length, with a muscular frame built for constriction and power. Its scales are brilliant emerald in color, often with darker striping or patterns that provide perfect camouflage in forest foliage. The scales are smooth and gloss-like, shedding water and seeming to absorb light rather than reflect it, which makes the creature disturbingly difficult to track even when looking directly at it. Its head is large and triangular, filled with teeth of surprising sharpness, and hollow fangs that drip with venom of a luminescent green color. Its eyes are large and intelligent, positioned toward the front of its head for binocular vision. Its tongue is forked and nearly as long as a hand-span. The creature is silent as it moves, and even experienced trackers have difficulty determining whether a Verdantcoil is present until it strikes.

## Key Behaviors

A Verdantcoil claims a territory spanning several miles of forest and establishes multiple preferred ambush positions throughout that range. The creature is known to spend weeks or months in a single location, perfectly coiled around a branch or within dense foliage, waiting with supernatural patience for prey to pass within striking range. The creature shows evidence of learning and memory—it will avoid poison, remember humans who have escaped, and adjust its tactics accordingly. A Verdantcoil seems to breed very rarely, and breeding females become so aggressive that entire regions of forest become nearly impassable during breeding season.

## Combat Strategy

A Verdantcoil initiates combat by dropping from above or from concealment at the perfect moment, attempting to wrap around a target and crush the life from them before they have time to respond. The creature's speed at the moment of attack is nearly impossible to evade. Once a victim is constricted, the Verdantcoil will maintain relentless pressure until prey ceases to struggle, and then it will attempt to swallow the victim whole or drag them to a secure location. If the initial ambush fails and the creature fails to secure a target, it will retreat into the forest canopy or undergrowth, content to wait another few weeks for the next opportunity.

## Attack Methods

### Striking Constriction

The Verdantcoil hurls itself at a target from concealment, attempting to wrap multiple coils around the victim and crush them with relentless pressure. Escape from this constriction is nearly impossible without magical aid.

### Venomous Bite

Once prey is secured or cornered, the creature delivers a bite injecting potent neurotoxins that cause creeping paralysis and excruciating pain.

### Suffocating Squeeze

By maintaining constriction over time, the Verdantcoil slowly suffocates victims, preventing them from breathing or calling for aid.

## Special Abilities

### Forest Supremacy

The Verdantcoil moves through forest terrain with supernatural grace, traversing branches, vines, and dense undergrowth in perfect silence. In heavy forest, the creature is nearly invisible and can move at full speed while remaining undetected.

### Ambush Mastery

The Verdantcoil can remain perfectly motionless for extraordinary lengths of time, blending completely with its surroundings. Spotting one requires the keenest eyes or magical sight.

### Constriction Strength

The Verdantcoil's muscular body can apply crushing pressure to anything it coils around, strong enough to rupture organs, crush armor, and suffocate even large creatures.

### Thermal Perception

The Verdantcoil senses heat with perfect accuracy, allowing it to track prey in complete darkness and sense heartbeats from considerable distance.

## Additional Information

Cold is the Verdantcoil's primary weakness—extreme cold slows its metabolism dramatically, reducing its speed and strength significantly. Fire is equally effective, as the creature abhors heat and will retreat from sustained flames. Repeated exposure to either extreme temperature can eventually drive a Verdantcoil from its territory. In areas where the forest has been cleared or where the canopy is thin, the creature loses much of its advantage and becomes a comparatively normal predator, though still dangerous. The creature's scales, if harvested carefully, can be fashioned into armor that retains the creature's natural camouflage properties and grants the wearer partial invisibility in forest settings. Its fangs make deadly weapons. The venom can be extracted and preserved, though doing so requires great care and protective gear. Hunting a Verdantcoil is considered one of the most dangerous activities a human can undertake, and a successful hunter is famous for life.

## Attributes

- **Strength:** 15-20 (1d6+14)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 7-12 (1d6+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 7-12 (1d6+6)

- **Creativity:** 7-12 (1d6+6)
