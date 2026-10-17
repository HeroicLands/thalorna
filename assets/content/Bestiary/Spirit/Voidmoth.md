---
shortcode: voidmoth
name: {full: Voidmoth, aliases: []}
type: being
subType: creature
description: "A rare being of solidified darkness and void-energy, gathering near thin places and torn reality where the barrier between worlds grows weak."
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
    str: 1d4+5
    end: 1d4+8
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+12
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Wing Buffet
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Wing Buffet
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Mandible Strike
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Mandible Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: edged}
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
          - {name: Thorax, shortcode: thoraxzone, probWeight: 4}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[voidmoth|Voidmoth]]{float=top-left}

The march road runs across the stony fan at the foot of the hills, and the barrier at its edge is closed: dusk has come. Out on the field, under the first stars, something rises from the stones. It is a moth, as big as a horse, its body made of segments that do not reflect the light at all, and when it spreads its wings, twenty feet of them, they are patterned with shapes that move, like stars seen through deep water. A fine black powder drifts down from the wings, and where it falls the light goes out. Your torch gutters. The moth turns toward the torch, and its eyes, huge and faceted, look at you from several directions at once.

# Dossier {#dossier}

The Voidmoth is a spirit-being of solidified darkness, a moth the size of a horse with a twenty-foot wingspan, born of or touched by the spaces between worlds, which gathers where reality has torn and the barrier between the worlds is weak. It feeds on something that is not food, perhaps magic, perhaps the force of the tear itself. It makes darkness, suppresses magic, and breaks men's reason with its gaze. It is one of the hunters that cross onto [[place-lanthusthli|Lantustali]], the thinnest blood-field in [[place-vedyarargn|Vedyara]], where the march kingdom of [Marupala]{.name data-type="affiliation/polity"} died in 315 AF and nobody's rites were said for the dead. Like the other hunters that gather where the dead were never received, it takes on a half-material form on the field, and in that form it kills.

## Presentation

The voidmoth's body is a long, heavy, segmented shape, furred and plated with something that swallows light, so that it looks like a hole in the night. Its wings are vast and patterned with shapes like stars and nebulae seen through deep water, which shift as it moves. It has huge compound eyes and a pair of short, curved mandibles. A fine black powder falls from its wings, and wherever the powder settles, light dies. It flies slowly and silently, and the air round it is cold and still. Magic near it falters; lamps dim; the dread of the field is heavier where it is.

## In the Land

Lantustali is the fan of stony ground where the foothills of [[place-wstrndscnt|the Western Descent]] open onto the march road, a day and a half west of [[place-ashvapada|Ashvapada]]. It is a dread: the overrun host's panic is still on the field and comes on anyone who lingers, by day as well as by night. On any night of the year, and worst in the dry season when the wind comes off the Descent, the hunters cross onto the field, and the voidmoth is one of them. It rises from the stones after dark and hunts the field and the road's edge, and it is gone before dawn. It does not leave the field, and it treats the field as its own.

## Key Behaviors

A voidmoth is nocturnal and territorial, and it attacks anything that comes onto its ground after dark. It surrounds itself with darkness that no light enters and hunts within it. It is drawn to light and to magic, and it feeds, as far as anyone can tell, on both: it dims lamps and drains workings, and a sorcerer who casts near it finds his magic failing. It seems to sense the boundaries between worlds and to know when they are being crossed or worked on. When it has killed, it leaves the body at the edge of the field, cold and dark-stained.

## What the March Companies Do

The march companies of [[affiliation-bhumipala|Bhumipala]] call the field the banner ground in daylight and nothing after dark, and the road across it is barred at dusk. A caravan that must pass goes by day, at a trot, with its animals blindfolded against the dread, and is across before the sun touches the hills. The march companies post their dusk watch behind the barrier with bright torches and a priest of the [[affiliation-agnipantha|Agmi-pantra]], whose sect claims the fields of Vedyara and burns the ground to end them. The priests say that the voidmoth is one reason the burning has not yet worked on Lantustali: it drinks the fire's working as it drinks a lamp. They burn the edges anyway.

## Signs

- A fine black powder on the stones at the edge of a field in the morning, which dims a lamp held over it.
- Torches and lamps that gutter and go out at dusk at the edge of a field, with no wind.
- A shape like a hole in the night crossing the stars, slowly, with no sound.
- Bodies found at the edge of a field at dawn, cold and stained dark at the mouth and eyes.
- A sorcerer's working that fails, unaccountably, within sight of a field after dark.

## Combat Strategy

A voidmoth wraps itself in absolute darkness and fights from inside it, unseen, while its enemies see nothing. It buffets them with its wings, bites, sheds its light-killing powder over them, and turns its gaze on any who still stand to break their reason. Its aura makes magic unreliable. Light is its weakness: bright light and light magic force it into a more solid form that weapons can hurt, and blessed weapons strike it fully.

## Attack Methods

### Wing Buffet

The wings strike with force far beyond their look, knocking a man off his feet. The touch of the void-stuff is cold and disorienting and feels deeply wrong.

### Mandible Strike

The voidmoth bites with its curved mandibles, quick and sharp, cutting flesh and leaving a dark stain in the wound.

## Special Abilities

### Dark Powder Release

It beats its wings and releases a cloud of fine black powder. Where the powder falls, light dies; those who breathe it see poorly, and magic falters near it.

### Void Gaze

It fixes its eyes on a man, and he feels himself seen from many angles at once, as if from many worlds. His reason breaks for a moment, and he stumbles and cannot act.

### Darkness Manifestation

It fills the space round itself with absolute darkness that no natural light enters, and sees perfectly inside it.

### Void Phasing

It slips partly out of the world, and weapons pass through it. Magic and light strike it fully and force it back into solid form.

### Void Aura

Within thirty feet of it, spells are hard to cast and workings unreliable and unstable.

### Interdimensional Knowledge

It senses the boundaries between worlds and knows when they are approached, crossed or worked on.

## Attributes

Strength
: 6-9 (1d4+5)

Endurance
: 9-12 (1d4+8)

Dexterity
: 11-14 (1d4+10)

Agility
: 13-16 (1d4+12)

Perception
: 9-12 (1d4+8)

Aura
: 13-16 (1d4+12)

Will
: 7-10 (1d4+6)

Reasoning
: 7-10 (1d4+6)

Creativity
: 11-14 (1d4+10)
