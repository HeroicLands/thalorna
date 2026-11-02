---
shortcode: mandulikulan
name: {full: Manduli Kulanaya, en: [Priestess Manduli]}
type: being
subType: npc
tags: [clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric]
  occupation: Achorya of Rasikara's Form
  lore: []
  culture: vedyariclt
  homes: [rajepur]
  affiliations:
    rajeprjnpd: {rank: 5}
    vrnkpnthn: {rank: 3}
    triyangasampradeya: {rank: 3}
    rasikara: {rank: 2}
  gender: female
  species: humanflk
  born: "670.255"
  height: 5' 8"
  weight: 177 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: brown
    complexion: [smooth]
    extra_features: [Rasikara's grey ash-mark on her brow, Burn-scars on both palms]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 20}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 60}}
    - {model: skill-triyangasampradeya, system: {masteryLevelBase: 60}}
    - {model: skill-rasikara, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-armorgear-lrobe}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-ashmarkstamp}
    - {model: sohl-sohl-miscgear-incense}
    - {model: sohl-sohl-miscgear-candlestal}
    - {model: sohl-sohl-miscgear-tndrbx}
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
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
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
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
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
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Manduli is a big, deep-voiced woman of fifty, 5'8" and heavy, brown-skinned and smooth-faced, with black hair cut short for the fire and brown eyes that do not blink at smoke. She wears the plain linen robe and single cord of an ordained priest of the [[affiliation-triyangasampradeya|Triyanga-sampradeya]], and [[affiliation-rasikara|Rasikara]]'s grey ash-mark on her brow every day. Both her palms carry the burn-scars of the Walk of Coals.

# Dossier {#dossier}

## The Fire Chamber

The great temple at [[place-rajepur|Rajepur]] has its three chambers, one for each of the three forms, and an **Achorya** for each. Manduli is the Achorya of Rasikara's form. She keeps the fire chamber's rites and the other two forms' as her school requires, tends the fire that is never let out, and leads the god's great feast at the turn of the dry season, when the chamber's fire is carried through the town and the households relight their lamps from it.

She is a **Ritrija** of a family of the janpoda's priests and sits in the [[affiliation-rajeprjnpd|Janpoda of the King's-Town]] when the temple's turn sends her. She walked the coals of Rasikara's ordeal at twenty and has the scars to show it.

## The Feast-Meal

At Rasikara's feast the fire chamber feeds the town at its door. For three years Manduli has had the feast-meal cooked by [[being-vanikartns|Vanika Ratnisen]], the best cook in the janpoda, and has become her advocate and something like her spiritual companion.

The difficulty is the order. Cooked food passes downward freely and upward not at all, and Vanika is a **Danhija**. The town eats her meal at the door without a second thought. The temple's priests do not touch it, and the chamber's own dish, from which the priests of the feast take the first portion, is still cooked by a Ritrija of the temple kitchen.

Manduli holds that Rasikara's fire changes what it touches, and that food cooked over the chamber's own fire carries no station but the god's. It is close to what the [[affiliation-agmipantra|Agmi-pantra]] teach about purgation, and the other Achoryas of the temple have noticed the closeness.

## Psyche

### Personality

Manduli is warm, loud, blunt and fearless about doctrine. She laughs easily and argues gladly, and she has no patience for a priest who keeps a rite because it has always been kept. She is devoted to the god in a way that frightens some of her colleagues.

### Motivation

She wants it accepted at Rajepur that food cooked over Rasikara's fire carries no station, so that the temple's priests eat Vanika's feast-meal from the fire chamber's own dish.

### Strengths

The Fire Chamber
: She keeps the god's rites at the great temple of the janpoda, and the town's lamps are lit from her fire.

The Walk of Coals
: She has completed the god's ordeal, and nobody can say she does not know what the fire does.

### Weaknesses

The Agmi-pantra
: Her doctrine sounds to the orthodox like the reformers', and she has not troubled to sound otherwise.

The Temple Kitchen
: The priests who cook the chamber's dish lose their place at the feast if she wins.

## Social

### Patrons and Allies

[[being-vanikartns|Vanika Ratnisen]]
: The cook whose feast-meal she means to bring inside the temple.

The households of Rajepur
: Who eat at the fire chamber's door and light their lamps from it.

### Rivals

The temple kitchen
: The Ritrija who cook the chamber's dish, and the Achoryas of the other two forms who back them.

[[being-akendra2|Akendra]]
: Who wanted the feast-meal commission for himself and has said, at a good many tables, that Vanika's cooking is not worth a god's fire.

### Affiliations

[[affiliation-rajeprjnpd|Rajepur Janpoda]]
: Ritrija, and a seated member of the sabhra in the temple's turn.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Ordained of a sampradeya.

[[affiliation-triyangasampradeya|Triyanga-sampradeya]]
: Achorya of Rasikara's form at the great temple.

[[affiliation-rasikara|Rasikara]]
: Vretin of the Walk of Coals.

## Plot Hooks

The First Portion
: At this year's feast Manduli means to serve the priests from a dish Vanika has cooked over the chamber's fire, in front of the town. She hires the party to see that the dish reaches the chamber's door unspoiled, because she expects somebody to try.

An Ember at the Door
: An Agmi-pantra ember-bearer has arrived in Rajepur and is praising Manduli's doctrine in the market. She did not ask for his help and it is ruining her. She asks the party to persuade him to move on.

Spoiled Grain
: Grain for the feast-meal has been found fouled in Vanika's storeroom. Manduli wants to know who did it before the sabhra hears of it and calls off the meal.
