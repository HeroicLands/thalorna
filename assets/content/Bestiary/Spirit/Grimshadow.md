---
shortcode: grmshdw
name: {full: Grimshadow, aliases: []}
type: being
subType: creature
description: "An ancient malevolent spirit born of concentrated terror, anchored to sites of tragedy where it feeds on fear and despair rather than flesh."
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
    str: 1d4+8
    end: 1d4+8
    dex: 1d4+10
    agl: 1d4+14
    per: 1d4+10
    aur: 1d4+12
    wil: 1d4+8
    rea: 1d4+8
    cre: 1d4+12
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 28}}
    - name: Shadow Strike
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Shadow Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Core, shortcode: corezone, probWeight: 1}
          - {name: Shroud, shortcode: shroudzone, probWeight: 2}
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles: [vital, core]
            canHoldItem: false
            probWeight: 10
          - name: Shroud
            shortcode: shroudpart
            bodyZoneCode: shroudzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Shroud
            shortcode: shroudloc
            bodyPartCode: shroudpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: override, textValue: "0"}
          - {scope: surface_cover, key: dunes, mode: override, textValue: "0"}
          - {scope: surface_cover, key: mixed_forest, mode: override, textValue: "0"}
          - {scope: surface_cover, key: barren, mode: override, textValue: "0"}
          - {scope: surface_cover, key: ruins, mode: override, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: override, textValue: "0"}
          - {scope: hydrology, key: deep, mode: override, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[grmshdw|Grimshadow]]{float=top-left}

The cold comes first, so sudden that your breath smokes in the lamplight. Something moves at the edge of your sight, and when you turn there is nothing there but the shadow of a broken wall. It moves again on the other side. When at last you see it straight on it is standing in the dark of a doorway, a shape like a tall man cut out of deeper darkness, with two points of red light where its eyes should be, and threads of shadow reaching out from its edges and drawing back in. Frost forms on the stone at its feet and melts again. You find that your hands are shaking, and that you badly want to run.

# Dossier {#dossier}

The Grimshadow is a spirit that feeds on fear and despair, met where great terror and suffering happened and were never put to rest: on [[lore-bloodfield|blood-fields]] of the dread kind, which return to those who linger what was felt on them; in the ruins of cities that died badly; and in the dead towns and blood-fields of the [[place-khzryndsrtrgn|Khazryn]]. It is not undead and not a dreadspawn, and it eats no flesh. It hunts the mind. Most who meet one survive in body, and some of them do not sleep again without a lamp. A grimshadow is usually anchored to one place by the suffering that made it, and a few wander, following those who have carried some of that suffering away with them.

## Presentation

It has no fixed form. It shows as an absence of light more than a presence: a human outline some seven feet tall made of a darkness deeper than the dark around it, with two points of red or amber light for eyes. Its edges shift and waver, and tendrils of shadow reach out from it and draw back. It moves without weight, flowing over a wall or along a floor as a shadow flows. Frost forms where it passes and melts at once. Those near it hear nothing, and feel watched, cold and afraid before they see anything at all.

## In the Land

A grimshadow belongs to the place that made it: a field of slaughter, a city sacked to the last child, a tower where a garrison starved. It walks that ground at night and in dim places by day, and it is strongest where the old terror was worst. The Khazryn's dead cities and blood-fields hold several, and travelers on the road that bends round them speak of shapes in the ruins at dusk and a fear that comes on a camp from nowhere. A wandering grimshadow follows a caravan or a party that has passed through its ground, appears at dusk and goes at dawn, for days.

## Key Behaviors

A grimshadow stalks rather than ambushes. It follows its prey and feeds on the rising fear of being followed, showing itself at the edge of sight and letting itself be lost again, night after night. It chooses the frightened, the lost and those already fleeing something else, and it does not hurry the end: it can live on fear alone and may toy with a victim for a long time. It shows those near it the things they fear most. It defends the place it is anchored to against anyone who comes into it, and it avoids those it cannot frighten.

## What People Do

The people who live near a place that holds a grimshadow keep away from it after dark and teach their children the same, which is the commonest defense and the best. A caravan followed by one keeps together, keeps lamps lit, sings or talks through the dark hours, and does not let anyone sit alone. Priests are the surest help. Blessed light and holy power hurt it and weaken it; ordinary torchlight does not. Killing a grimshadow on its own ground does not end it, and it gathers again in the same place. It is ended by ending what made it, by the settlement rite of the people whose dead lie there, by the curse lifted or the old wrong answered. Some priests hold that a grimshadow is a wound before it is an evil thing, and that it can be healed; few have tried.

## Signs

- A sudden, unnatural cold in a ruin at dusk, with no wind.
- Frost on stone that forms and melts in a moment.
- A party that grows quarrelsome, sleepless and frightened over several nights for no reason any of them can name.
- A shape glimpsed at the edge of sight that is never there when looked at directly.
- A ruin where the birds will not roost and the camels will not be led.

## Combat Strategy

A grimshadow avoids a straight fight. It breaks a party's nerve with fear and false sights, drives people into mistakes, scatters them, and strikes the most frightened from the dark where nobody can see it coming. It aims to break its prey, and the killing, if it comes, comes later. Pressed by people who are not afraid of it, or by blessed light, it withdraws into shadow and waits for a better night. It fights hard only at the heart of the place it is bound to.

## Attack Methods

### Shadow Strike

Tendrils of darkness strike from the shadow with uncanny precision. The blow wounds the body and the spirit together: strength drains with each one, and the horror of it staggers a man as much as the hurt does.

## Special Abilities

### Fear Aura

Dread pours off it. Those near it think slowly, their limbs grow heavy, and panic comes hard to resist; kept close long enough, a man freezes where he stands.

### Shadow Blend

In dim light or darkness it is nearly invisible and moves through shadow as through open air, and its first strike from the dark is very hard to see coming.

### Tenebrous Form

It is only partly material and ordinary weapons do it little harm. Blessed light and holy power harm it fully, and bright light makes it more solid and easier to strike.

### Despair Manifestation

It shows each person near it the thing that person most fears. The visions are false, and a man who believes them can be hurt by them.

### Aura of Dread

Staying near one wears down the will and the body together, and a long exposure can leave a mind scarred for life.

## Attributes

Strength
: 9-12 (1d4+8)

Endurance
: 9-12 (1d4+8)

Dexterity
: 11-14 (1d4+10)

Agility
: 15-18 (1d4+14)

Perception
: 11-14 (1d4+10)

Aura
: 13-16 (1d4+12)

Will
: 9-12 (1d4+8)

Reasoning
: 9-12 (1d4+8)

Creativity
: 13-16 (1d4+12)
