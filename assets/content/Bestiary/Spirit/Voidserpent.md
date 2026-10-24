---
shortcode: vdsrpnt
name: {full: Voidserpent, aliases: []}
type: being
subType: creature
description: "An extraordinarily rare serpent from the spaces between worlds, older than gods and alien beyond comprehension, moving by incomprehensible purposes."
tags: [spirit]
data:
  packFolder: spirit
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
  kbcat: spirit
  attrRollFormula:
    str: 1d4+14
    end: 1d4+14
    dex: 1d4+8
    agl: 1d4+14
    per: 1d4+12
    aur: 1d4+16
    wil: 1d4+12
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Void Constriction
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 73
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Void Constriction
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true, impTA: 4}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "-2"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[vdsrpnt|Voidserpent]]{float=top-left}

The black water is still between the cypress knees, and the canoe has stopped because the scout in the bow has stopped paddling. Ahead, something is crossing the channel. It is a serpent, longer than three canoes, and it is wrong to look at: its body is there and not there, dark as the water and somehow darker, with lights moving inside it like stars seen through a hole in the world, and its edges do not stay where your eyes put them. It is not swimming. It is moving through the water as if the water were not there. Its head turns, slowly, and you feel it look at you from very far away, and for a moment you cannot remember which way is up.

# Dossier {#dossier}

The Voidserpent is a being from the spaces between worlds: a serpent thirty feet long or more, made of something between matter and nothing, older than the gods if the oldest accounts are right and stranger than any mortal mind can follow. It moves by purposes no one has fathomed, passing through solid things, warping space and time round itself, and draining whatever it touches. It is extraordinarily rare. The one the Ki'ich'chik know of has been seen in [Ne' P'uqan]{.name data-type="place/feature"}, the Black Water, the great marsh at the heart of [[place-tzumanotunrgn|Ts'uma No'tun]], the swamp country of the Ch'akun that Ki'ich'chik border commanders treat as effectively impassable.

## Presentation

The voidserpent is serpent-shaped and massive, thick as a horse's body, and its substance is somewhere between matter and void: dark, deeper than shadow, with points of light drifting inside it as if through a window onto night. Looking at it directly makes the eyes ache and the mind slide; its outline never stays where it was a moment ago, and its length changes as it is watched. It has a head, and eyes in the head, but no one describes them the same way twice. It makes no sound. Round it, things go wrong: water lies flat when it should ripple, a dropped paddle falls slowly, a scout's sense of direction fails.

## In the Land

Ne' P'uqan and the black-water marshes round it are trackless expanses of cypress, tupelo and saw palm, crossed by sluggish rivers and joined by hidden waterways that the Ch'akun move through with effortless mastery. The voidserpent passes through them on its own courses, sometimes seen in one channel and sometimes miles away the next night, and it favors the deepest, stillest water. Nothing about where it goes has ever made sense to the scouts who track it. It has been seen to pass through the trunk of a cypress as if the tree were mist, and it has been seen to pass a scouting party by without turning its head.

## Key Behaviors

A voidserpent does not behave like a creature. It follows paths and purposes invisible to anyone watching: it may cross a whole region without touching anything, or destroy a camp for no reason anyone can find. It does not hunt as an animal hunts, and from those it touches it takes life, will and power, and leaves the flesh. It passes through solid matter, blessed barriers included, and it cannot be trapped or cornered. It pays no attention to being attacked, and it is very hard to hurt.

## What the Border Scouts Do

Ki'ich'chik scouts and the garrisons on the swamp border have one rule for the voidserpent: get out of its way and let it pass. A canoe that sees it turns back down the channel it came by and does not stop until it has rounded a bend. The scouts have noted that the serpent imagery dominating the few artifacts recovered from the Ch'akun, the imagery that gives the Serpent People their Ki'ich'chik name, includes a coiled shape drawn with stars inside it, and they argue at the border forts whether the Ch'akun honor the voidserpent, fear it, or know how to move it. No Ki'ich'chik scholar has ever been let into Ch'akun lands and come back to say. Priests of the [[affiliation-itzanpnthn|Itsani]] faith at the border forts burn copal and hold lamps through the night when it has been seen, and say nothing about what it is.

## Signs

- Still water that lies flat in a wind, along a line through the marsh.
- Cypress trunks with a band through them where the bark and wood are smooth and dark, as if something had passed through the tree.
- Scouts who come back unable to say how long they were gone, or which way they went.
- Birds and frogs falling silent across a whole stretch of marsh at once, and staying silent for a day.
- A darkness in the water at night with lights in it, like the reflection of stars on a cloudy night.

## Combat Strategy

A voidserpent does not fight with tactics. It moves where it is going, and if something blocks it, it removes it by the most direct means, coiling round it or biting it, and then goes on. It warps time round its enemies so that they move and think slowly. Ordinary weapons pass through it. Bright light, holy power and magic aimed at the void itself are all that touch it, and even then it heals fast. The sensible response to a voidserpent is to step aside.

## Attack Methods

### Void Constriction

The serpent's coils close round a victim, and what he feels is reality itself squeezing in round him. His bones do not break as bones should; something worse happens to them.

### Bite

The serpent strikes and bites, and through the bite it pours its void into the victim, draining his vitality, his will and his magic and leaving him hollow and weak.

## Special Abilities

### Energy Drain

Its touch, as well as its bite, drains life, power and will directly.

### Void Warp

It twists space and time round itself: men caught in the warp move as if in slow motion, their blows come late and their thoughts drag, for as long as it holds the warp.

### Phase Mastery

It passes through stone, metal, wood and blessed barriers alike, and cannot be trapped or cornered.

### Void Aura

Near it, reality is unstable: magic fizzles or misfires, weapons feel heavier, and time runs strangely. The closer to it, the worse.

### Cosmic Resilience

Ordinary weapons pass through it with little effect. Light, holy power and magic aimed at the void harm it, and even that harm heals quickly.

### Reality Warping

Round it, distances become uncertain, directions mean nothing and time moves unevenly.

## Attributes

Strength
: 15-18 (1d4+14)

Endurance
: 15-18 (1d4+14)

Dexterity
: 9-12 (1d4+8)

Agility
: 15-18 (1d4+14)

Perception
: 13-16 (1d4+12)

Aura
: 17-20 (1d4+16)

Will
: 13-16 (1d4+12)

Reasoning
: 9-12 (1d4+8)

Creativity
: 11-14 (1d4+10)
