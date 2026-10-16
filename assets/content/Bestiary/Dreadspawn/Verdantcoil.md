---
shortcode: vrdntcl
name: {full: Verdantcoil, aliases: []}
type: being
subType: creature
description: "A colossal, patient made snake that lurks motionless in ancient forests, waiting days to strike from ambush."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
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
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
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
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Striking Constriction
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
          name: Striking Constriction
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 18, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 300, calc: "300"}
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
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
          - {scope: surface_cover, key: woodland, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[vrdntcl|Verdantcoil]]{float=top-left}

The old fir has a limb as thick as a man's body running out over the path, and the limb is wrapped in green, coil on coil of it, bright as new leaves. You take it for a creeper. You are under the limb when the creeper moves. It pours off the branch, coil after emerald coil, a snake as long as a boat and thicker than your thigh, and it lands across your shoulders with a weight that drives you to your knees, and before you have finished falling the coils are round your chest, and tightening, and a flat green head with gold eyes swings round in front of your face.

# Dossier {#dossier}

The Verdantcoil is a dreadspawn in the shape of a colossal emerald constrictor, twenty-five to thirty-five feet long and three hundred pounds, which lies motionless along branches in ancient forest for weeks at a time and drops on what passes beneath. It crushes, and it has a venom that paralyzes and burns. It is patient beyond any animal and cunning. One holds a stretch of the old forest of the [[place-toravarrange|Toravar Range]], the forested mountains along Tarvénia's border with Élavendre that the [[affiliation-aelndntrbs|Áelendan]] hold as sacred country. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The verdantcoil is long and heavy-bodied, built entirely for constriction, with scales of brilliant emerald barred with darker green and flecked with gold, glossy as wet leaves. Coiled on a branch or among ferns, it looks like a mass of creeper. Its head is broad and flat, with gold eyes and pits along the lip that sense warmth. Its fangs fold back in its mouth. It moves in perfect silence along branches, vines and the forest floor, and it can lie for weeks without moving at all. It is cool to the touch and smells faintly of crushed leaves.

## In the Land

The Toravar is the great forested mountain belt that marks Tarvénia's northern border, and its high reaches are Áelendan country, sacred and old. The verdantcoil holds several miles of the oldest forest on the range's middle slopes, where the firs and oaks are huge and their limbs reach over the deer trails, and it has many favored ambush branches and moves among them through the seasons. It eats deer, boar, wolves and anything else it can catch from above. It keeps to the warm, sheltered slopes and avoids the cold of the high ridges, where it would be sluggish, and the winter sends it into a deep hollow under the roots of a great tree to wait for spring.

## Key Behaviors

The verdantcoil waits, for weeks if need be, coiled on a branch above a trail, and when something passes beneath, it drops, coils and squeezes. It bites what fights back, and the venom finishes it. It swallows its prey whole and lies up for a long time afterward to digest. It is clever: it learns which trails are used and when, and moves to the branch above the one most used. It senses warmth with great accuracy, finds prey in total darkness, and feels a heartbeat at a distance.

## What the Áelendan and the Barons Do

The Áelendan clans of the Toravar know the verdantcoil's ground and walk round it, or walk it in company, with the oldest of them watching the branches overhead. The [[affiliation-alndnwrdns|Wardens]] do not hunt it. Tarvenan foresters who come up into the range with a baron's logging concession, against the clans' wishes, are told by the clans which slopes to keep off, and do not always listen. One of the frictions over logging concessions that the local Wardens settle with the local baron, without troubling the crown, ended when a felling crew went up onto the verdantcoil's slope against the Wardens' warning and three of them did not come down. The clans did not need to say anything after that, and did not.

## Signs

- A mass of bright green "creeper" on a high limb over a trail that is on a different limb a week later.
- Deer and boar that will not use a trail they have used for years.
- A sloughed skin, green-gold and as long as a boat, draped over branches.
- Bones of deer and boar regurgitated in a pellet under a great tree.
- A sudden silence of birds along a stretch of trail, as if something were holding its breath.

## Combat Strategy

The verdantcoil attacks once, from above and from concealment, at the moment its prey is beneath it: it drops, coils and crushes before its victim can react. It bites anything that fights back or comes to help. It holds its victim while the venom and the squeezing do their work, and it does not let go of its own accord. If it is badly hurt it releases and goes up into the trees, fast and silent, where it is very hard to follow. Cold and fire both drive it off.

## Attack Methods

### Striking Constriction

The verdantcoil drops onto its victim from above and throws coil after coil round him at once, crushing his chest and pinning his arms. Breaking free without help is almost impossible.

### Venomous Bite

It bites what struggles, and its venom brings a creeping paralysis and a burning pain that spread from the bite.

## Special Abilities

### Suffocating Squeeze

Held long enough, a victim cannot breathe and cannot cry out, and he loses consciousness and dies.

### Forest Supremacy

It moves along branches, vines and through undergrowth in perfect silence and at full speed, and in heavy forest it is nearly invisible.

### Ambush Mastery

It holds perfectly still for extraordinary lengths of time and is all but impossible to see while it does.

### Constriction Strength

Its coils crush armor, rupture organs and suffocate creatures far larger than a man.

### Thermal Perception

It senses warmth precisely, tracks prey in total darkness, and feels a heartbeat from a distance.

### Cold and Fire

Cold slows it badly and saps its strength, and it shrinks from fire and will leave sustained flame.

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
