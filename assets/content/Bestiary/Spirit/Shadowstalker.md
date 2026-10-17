---
shortcode: shdwstlk
name: {full: Shadowstalker, aliases: []}
type: being
subType: creature
description: "A tactical spirit-realm assassin born of murder, moving unseen and striking from darkness to hunt targets across years or guard a single domain."
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
    str: 1d6+10
    end: 1d4+13
    dex: 1d6+14
    agl: 1d6+14
    per: 1d4+13
    aur: 1d6+16
    wil: 1d6+14
    rea: 1d6+10
    cre: 1d4+13
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 57}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Shadow Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Shadow Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 130, calc: "130"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: mixed_forest, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

![[shdwstlk|Shadowstalker]]{float=top-left}

The fire has burned down to coals and the men round it are asleep, all but the brigand on watch, who sits with his back to an oak and his spear across his knees. The shadow of the oak is longer than it should be. It reaches past him, across the clearing, and the end of it lifts off the ground: a shape like a tall, thin man, all long limbs and hunched spine, made of darkness that has thickened until it is nearly solid, its edges smoking. It leans over the man on watch. He does not look up. You see a hand of shadow with claws like long black thorns close over his mouth, and then the shadow of the oak is only a shadow again, and the man is gone.

# Dossier {#dossier}

The Shadowstalker is a spirit assassin: a soul made out of murder, the victim's or the killer's, that has become a hunter of the living, moving unseen through shadow and striking from darkness. It is not mindless. It has purposes and codes of its own, it hunts particular targets across years, and it is patient, tactical and very hard to see coming. Some are bound into service by sorcerers who mean to use them. The one known in [[place-byzariargn|Bizaria Region]] haunts [[place-ravenswood|Ravenswood]], the wood astride the [[affiliation-byzarianlg|Bizarian League]]'s eastern trade routes and home ground of the [Ravenswood Brigands]{.name data-type="affiliation/criminal"}, and it is hunting the brigands, one at a time, as it has been for years.

## Presentation

A shadowstalker is a being of movement more than of shape. Seen at all, it is vaguely man-shaped and built for killing: long, thin limbs, a compact body, a hunched, predatory spine, a head that is barely a head. Its body is darkness made nearly solid, its edges smoking and blurring into the shadows round it, and its claws are long black thorns of shadow. Two points of cold light sometimes show where its eyes would be. It makes no sound at all. Where it has passed, the air is cold, and a dead man it leaves behind is cold too, colder than the night.

## In the Land

Ravenswood lies along Bizaria's eastern trade routes, and the Ravenswood Brigands, a loose confederation of bandits, live off those routes and demand tribute from the caravans. The shadowstalker hunts the wood, its oaks and holly thickets, its gullies, the brigands' camps and the road through it. It moves through shadows as if they were open doors, and the deep wood is all shadow. It is seen most in the dark of the moon and on overcast nights, and least in daylight on the open road, where it does not go. It does not leave the wood.

## Key Behaviors

A shadowstalker stalks a target for a long time before it strikes, learning his routines and his weaknesses and waiting for the moment he is alone. It prefers isolated victims and never fights fairly if it can avoid it. It kills with one strike from darkness when it can, and leaves. The one in Ravenswood kills brigands, and it seems to take some pleasure in the hunt: it takes a sentry here and a straggler there, never two in a night, and it has never touched a caravan or a teamster. The teamsters say it is the spirit of a driver the brigands murdered on the road, hunting his murderers' band to the last man. The brigands say nothing about it at all.

## What the Road Does

The teamsters who drive the eastern roads either pay the Ravenswood Brigands or plan round them, and some of them now pay a little less, because the brigands are fewer and more nervous than they were. Brigand camps in the wood burn great fires all night and post sentries in pairs with their backs to the fire, and bands that have lost men to it have left the wood for the hills. Teamsters crossing the wood at night carry bright lanterns and keep to the road, and nothing has touched them. Whether the shadowstalker had anything to do with the shipment of [Merchant House Valdris]{.name data-type="affiliation/venture"} that vanished in Ravenswood without wreckage or bodies is a question the teamsters argue in the inns and nobody can answer. Priests of the faiths of the [[affiliation-arldnpnthn|Aureldian Pantheon]] have offered, for a fee, to try to settle it; the brigands have not accepted.

## Signs

- A man found dead at his post at dawn with no wound but four cold, narrow punctures, and his body cold as stone.
- Shadows in a wood that lie the wrong way, or reach farther than the light allows.
- A sudden cold in a camp on a warm night, and the fire burning low and blue for a moment.
- Brigands who post their sentries in pairs and light fires big enough to see from the road.
- A watcher's feeling, for days, of being followed in the dark by something that never comes closer.

## Combat Strategy

A shadowstalker never fights fair if it can help it. It strikes from darkness, with all its precision, at the moment its target is alone and unready, and then it repositions or flees if the fight does not go perfectly. It uses shadows as cover and as roads. It does not stand and trade blows. Bright light is its great weakness: strong light forces it into a more solid form that ordinary weapons can hurt, and it avoids lit places. Holy ground and a temple's blessing keep it out.

## Attack Methods

### Shadow Claws

The shadowstalker strikes with claws of living shadow. The wounds are grievous and numbing at once, and a cold spreads from them, as if the wound were draining the warmth out of the body.

## Special Abilities

### Necrotic Dagger Strike

It forms a blade of shadow and bone and drives it at a vital spot with perfect precision. The blow does less to the body than to the spirit, and the victim feels as if the blade had reached inside him and pulled something out.

### Shadow Mastery

In shadow or dim light it is nearly invisible, it sees clearly in darkness, and it passes through shadows as if they were open space.

### Stealth Excellence

It moves without sound and blends with shadow so completely that even watchers looking for it miss it. Only a deliberate search with good light, or magic, finds it.

### Precision Strike

Striking from hiding or surprise, it finds the gaps in armor and the places where a blow does most harm.

### Life Drain

Its strikes drain strength as well as blood, and the cold it leaves behind goes on weakening its victim.

### Necrotic Resistance

Disease does not touch it and necrotic magic barely does. Light and holy power hurt it beyond what weapons can.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 15-20 (1d6+14)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 17-22 (1d6+16)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 14-17 (1d4+13)
