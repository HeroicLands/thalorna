---
shortcode: phntmwng
name: {full: Phantomwing}
type: being
subType: creature
description: "The lonely, searching spirit of a creature that died far from home, pursuing living beings in hope of companionship it can never reclaim."
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
    str: 1d4+6
    end: 1d4+8
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+10
    aur: 1d4+12
    wil: 1d4+8
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Ethereal Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Ethereal Talons
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
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
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[phntmwng|Phantomwing]]{float=top-left}

The well is a day behind and the next one four days ahead, and the camp in the stone desert is silent under a sky crowded with stars. Something crosses the stars. It is a bird, a hawk or an eagle, wide as two men are tall, and you can see the stars through it: it is made of pale light and nearly nothing. It circles the camp low, once, twice, and lands on the stack of saddles, and folds its wings, and looks at the sleeping men one after another, slowly, as if it were looking for one face among them. It does not find it. It opens its beak, and the sound that comes out is the loneliest sound you have ever heard.

# Dossier {#dossier}

The Phantomwing is the spirit of a winged creature that died far from home, a great bird, most often, that fell over a foreign land with every tie to its own country cut, and whose soul was never received anywhere. It is pale, nearly transparent, and endlessly searching, and it follows the living in the hope of a companionship it cannot have. It is not a predator, and it is dangerous only when cornered, and to those who stay near it too long. On [[lore-celestialroad|the Celestial Road]] across the [[place-khzryndsrtrgn|Khazryn]], the phantomwings haunt the last stage, the stone desert and cold high steppe of [[place-idwkrrgn|Idvaqor]] before [[place-tantsouregin|Tantsou Region]]'s western passes, and the caravans know them.

## Presentation

A phantomwing has the shape of a great raptor, with a wingspan approaching fifteen feet, but its body is pale light and semi-visible matter, and the landscape shows through it. Its eyes are the most solid part of it, dark and searching. It flies without a sound, and its shape thins and thickens as it moves. When it cries, the sound is like wind through broken glass and an animal's last cry together, and those who hear it close feel a grief that is not their own.

## In the Land

Idvaqor is the last eight hundred miles of the Celestial Road, black rock and pale gravel climbing by long steps to a cold high steppe, with wells four to seven days apart and nights that freeze the water in the skins. Caravans on the road carry hunting hawks and eagles, traded or gifted between Bizarian and Tantsou merchants, and birds die on the road; the cold kills them, or the wind takes them, or their masters die. The phantomwings are those birds. They haunt the high places of Idvaqor, the ridges, the rock towers and the cliff-cisterns, and they come down to the caravans at night, searching. They are seen most on overcast days and moonless nights.

## Key Behaviors

A phantomwing searches, endlessly: for its home, its master, its kind. It roosts on high places and watches the land, and when a caravan comes by it follows, landing near the camp at night and looking at the sleepers. It is solitary and avoids fighting. Simply being near it for a long time brings on melancholy and despair, and a caravan that a phantomwing follows for days becomes quarrelsome and withdrawn, and its men start talking of home. A phantomwing that is cornered, or that loses the caravan it has fastened on, grows desperate and attacks.

## What the Caravans Do

The caravan-masters who sell the road a stretch at a time know that a phantomwing following a caravan costs days, because the men lose heart, and they deal with it. A caravan carrying a living hawk keeps it hooded at night, because a phantomwing comes to a living bird of its own kind and does not leave it. The masters' remedy, learned from the tribes of Idvaqor, is to give the phantomwing what it searches for: a feather or a jess from a bird of its own country, burned on a fire of dung at dawn, with the country's name said over it. Some caravans swear by it. The [[lore-tanchei|Tanchei]] registrar at the frontier way-station enters each phantomwing seen on the road in the register, with the date and the bird it seems to have been, because the empire writes everything down.

## Signs

- A pale bird seen against the stars that the stars show through.
- A cry at night from a ridge, like wind through broken glass, and a grief that settles on a camp after it.
- Hooded hawks that will not settle, and turn their heads to follow something no one can see.
- Men on a crossing who begin to quarrel and talk of home for no reason.
- Faint, cold marks, like claw-scratches without blood, on the arm of a man who woke in the night.

## Combat Strategy

A phantomwing does not seek a fight. If attacked it slips away into the sky, letting blows pass through it. Cornered, it becomes desperate and vicious, raking with its talons and crying out to paralyze its attackers with grief, and then it flees again. Holy power, magic and blessed weapons strike it fully; ordinary weapons do little.

## Attack Methods

### Ethereal Talons

The phantomwing rakes with talons that pass partly through flesh. The wounds are shallow, but the victim feels as if part of himself had been torn away with them, and he is left cold and weak.

## Special Abilities

### Spectral Screech

Its cry is grief made sound. Those who hear it close are overwhelmed by sorrow and confusion and cannot act with purpose for a time.

### Phasing

It is only partly in the material world. Ordinary weapons pass through it with little effect; magic, holy power and blessed weapons strike it fully.

### Aerial Mastery

In open air nothing material can match its movement.

### Mournful Presence

Long company with it brings melancholy and fatigue. Those near it for more than an hour grow sad, tired and irritable.

### Incorporeal Vision

It sees through mist and darkness, senses the feelings of the living, and perceives disturbances in the spirit realm.

## Attributes

Strength
: 7-10 (1d4+6)

Endurance
: 9-12 (1d4+8)

Dexterity
: 13-16 (1d4+12)

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
: 11-14 (1d4+10)
