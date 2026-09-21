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

The branch ahead shifts, though there is no wind. You might have missed it — might have taken it for an old bough settling — except that you see the scales now, brilliant emerald, catching a light the canopy above should have blocked. The coil tightens around the branch, and the creature raises its head with a slow, terrible grace. Eyes like polished jade fix on you, and a forked tongue tastes the air — your heat, your fear. Its body is enormous, longer than a wagon and its team, all coiled muscle. The emerald scales shimmer as it shifts, hunting the angle it wants for its strike. You hear nothing as it moves — no scrape, no rustle, no warning at all beyond the sight of that beautiful, terrible head turning to face you with absolute intent.

# Dossier {#dossier}

Verdantcoils are enormous snakes of corrupted or magical origin, strong, intelligent and patient past anything natural. They hunt from ambush and they are very good at it: a Verdantcoil can hold perfectly still for days waiting for the one moment it wants, and its real interest is not the chase but the position — being where prey cannot get past it. They live in deep old-growth forest under a canopy thick enough to keep the ground in dusk, and one of them can close a whole stretch of woodland, since travellers learn where it lies and what the odds are of getting through.

## The Snake

A Verdantcoil runs 25 to 35 feet and is built for crushing. The scales are a brilliant emerald, often striped or patterned darker in a way that vanishes into foliage; they are smooth and glossy, shed water, and seem to take in light rather than give it back, so that the animal is hard to follow with the eye even when looked at directly. The head is large and triangular, the teeth sharp, the fangs hollow and wet with a venom that glows faintly green. The eyes are big, forward-set for judging distance, and thinking. The tongue is forked and nearly a hand-span long. It makes no sound moving, and experienced trackers have not been able to tell whether one is present until it struck.

## The Wait

A Verdantcoil claims several miles of forest and keeps a number of favoured positions in it. It will spend weeks or months at one of them, coiled on a branch or folded into the undergrowth, waiting for something to walk under it. It learns: it avoids poisoned bait, it remembers a person who got away from it, and it changes its methods to suit. They breed seldom, and a breeding female is so aggressive that whole tracts of forest become nearly impassable for the season.

It goes through the trees at full speed without being seen or heard, along branches, up vines, through the thickest growth, and in heavy forest it is very nearly invisible whether it is moving or still. Finding one at rest takes either an extraordinary eye or magical sight. It hunts heat: it tracks prey in total darkness by the warmth of the body and can feel a heartbeat from some way off.

## The Kill

It drops from above, or hurls itself from cover, at the exact moment, throwing several coils around the victim and crushing at once; at that speed there is almost no evading it, and once the coils are on, getting out without magic is close to impossible. The pressure ruptures organs and crushes armour and will suffocate a large animal. It keeps squeezing until the struggling stops, so that the victim can neither breathe nor call out, and then it swallows him whole or drags him somewhere safe. Prey that is held or cornered but not yet subdued it bites, and the venom brings on a spreading paralysis with agony alongside it. If the ambush fails and the prey gets clear, the Verdantcoil goes back up into the canopy or down into the brush and waits, without any apparent frustration, for the next chance a few weeks on.

## Against It

Cold, first. Real cold slows its body badly, and with it the animal's speed and strength. Fire second: it hates heat and draws back from steady flame. Enough of either, repeated, will push a Verdantcoil out of its territory altogether. Where the forest has been cleared or the canopy thinned it loses most of what makes it what it is and becomes a large, dangerous, ordinary predator. The scales of a dead one, taken with care, can be made into armour that keeps the snake's own camouflage and hides the wearer partly in woodland; the fangs make deadly weapons; the venom can be drawn and kept, though not without great care and proper protection. Hunting one is counted among the most dangerous things a person can do, and those who have done it and lived are famous for it.

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
