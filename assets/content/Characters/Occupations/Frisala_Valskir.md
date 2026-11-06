---
shortcode: fryslvlskyr
name: {full: Frisala Valskir}
type: being
subType: npc
description: "The head shepherd of Estivren, elected by the shepherd families, who means to raise the price of folding at the Eltrembis fair."
tags: [administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [woodsman, courtier]
  occupation: Head Shepherd
  lore: []
  culture: provenzianclt
  homes: [estivren]
  affiliations: {brnyzrvln: {rank: 1}, kngdmprvnz: {rank: 2}, ardavon: {rank: 1}}
  socialTies: {being-ryldnbrnwyld: rival}
  gender: female
  species: humanflk
  born: 678.152
  height: 5' 10"
  weight: 172 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: chestnut
    skin_color: fair
    complexion: [clear]
    extra_features: [a tattoo of an eagle on the back]
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: skill-provnzlng, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 13}}
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

Frisala Valskir is a 41-year-old woman who stands 5'10" tall and is of medium build, hard and spare from summers on the high grazing. Her fair skin is clear for an upland woman, her chestnut hair is pinned in a plain twist under a shepherd's hood, and her hooded hazel eyes give little away. She has a delicate nose and expressive lips, and a tattoo of an eagle spreads across her back, which the valley has heard of and few have seen.

# Dossier {#dossier}

Frisala Valskir is the head shepherd of [[place-estivren|Estivren]], the upland pastoral manor of the [[affiliation-brnyzrvln|Barony of Zuravlen]], elected by the shepherd families to an office that is customary, older than the lords of Estivren and beyond their power to fill.

The shepherd families of Estivren hold their holdings on ancient terms no lord has managed to revise, and they take the manor's four thousand head up to the high summer grazing after lambing and bring them down in autumn, answering to nobody while they are gone. The head shepherd speaks for them, keeps their grazing boundaries against the holdings outside the barony, and settles their quarrels on the hill. Frisala's father held the office before her and died on the high grazing fighting rustlers from beyond the barony's boundary. The families elected his daughter, and she has led them by custom where it serves and by her own judgment where it does not. Her planning has kept the flocks whole through two bad winters, and her fights with the rustlers have won her a respect the older shepherds still give grudgingly.

The folding contracts come up at this autumn's fair at [[place-elthrembis|Eltrembis]], and Estivren means to raise its price. The fast boats have made the orchards richer, and the shepherd families reason that the orchards can pay for the dung that grows the fruit. [[place-palnebris|Palnebris]] cannot do without the folding and cannot afford to be seen to give way, and Frisala speaks for the families and not for the lord.

## Psyche

### Personality

Frisala is guarded, deliberate and unorthodox, and some of the elders distrust her for it. She says little at the fair and a great deal on the hill.

### Motivation

She wants the shepherd families' terms kept and their price paid, and she wants the elders who doubt her to stop doubting.

### Strengths

She is a careful planner, skilled at making and keeping agreements, and a capable fighter with a staff and a sling.

### Weaknesses

She has made the price of folding her test, and she cannot be seen to lower it whatever it costs the valley.

## Social

### Companions

The shepherd families of Estivren, and the young shepherds who stood with her against the rustlers.

### Patrons

None. The office answers to the families who elect it.

### Enemies

The lord of Palnebris, [[being-ryldnbrnwyld|Rilden Branvilde]], who has called the shepherds' price theft at the fair; and the rustlers beyond the barony's boundary, who have not forgotten her father.

### Affiliations

- **[[affiliation-brnyzrvln|Barony of Zuravlen]]**: Frisala is a subject of the barony.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: She is a Freeman of the crown.
- **[[affiliation-ardavon|Faith of Árdavon]]**: The shepherds keep the god of gates at the gate of every fold.

## Plot Hooks

The Price of Folding
: Frisala will not lower the folding price at the fair, and Palnebris has hinted that a flock folded on the wrong fallow can sicken. She wants a party to guard the folds on the nights before the contracts are sealed.

The Rustlers on the High Grazing
: Sheep are going missing on the high grazing in the same way they went the summer her father died. Frisala means to go up and settle it herself, and she wants hands she can trust who are not shepherds.

The Elders' Choice
: The older shepherds say Frisala has given away a grazing boundary to a holding outside the barony, and they will call a new election if she cannot show the old marker stones where her father set them.
