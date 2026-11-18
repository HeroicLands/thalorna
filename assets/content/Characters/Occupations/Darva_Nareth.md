---
shortcode: daryanardh
name: {full: Darva Nareth}
type: being
subType: npc
description: "A bard of Kélpasi trained at the College of the Wood-Song, who sings in the halls of the eastern march and was singing at the Valdun cloth fair the night the village's Speaker vanished."
tags: [guilded, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar]
  occupation: Bard
  lore: []
  culture: elavendriclt
  homes: [kelpasi]
  affiliations: {kngdmlvndr: {rank: 2}, clgwoodsng: {rank: 2}, lusinia: {rank: 1}}
  gender: female
  species: humanflk
  born: 692.114
  height: 5' 11"
  weight: 161 lbs
  frame: light
  appearance:
    eye_color: green
    hair_color: greying_brown
    skin_color: fair
    complexion: []
    hair_style: long
    face_shape: oval
    brow: thin
    extra_features: [a tattoo of a bird in flight on the left shoulder]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 15}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 45}}
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

Darva Nareth is a 27-year-old woman who stands 5'11" tall and is of light build. She has an oval face with angular cheekbones, a prominent forehead and a narrow jaw that leads to a delicate chin. Her narrow green eyes sit beneath thin brows and give her a keen gaze. She has a delicate nose, expressive lips and fair skin. Her brown hair is graying early and falls past her shoulders, and a tattoo of a bird in flight shows on her left shoulder when she sings in a sleeveless shift.

# Dossier {#dossier}

Darva Nareth is a bard of [[place-kelpasi|Kélpasi]], the hidden village in a fold of the [[place-auldalon|Áuldalon]] hills, an [[lore-elavendriclt|Élavendri]] freewoman trained at [[affiliation-clgwoodsng|the College of the Wood-Song]] who sings in the halls and inns of the eastern march and comes home for [[lore-springguest|the Spring Guest]].

She went down to Elanmere at fourteen with a voice the village could not keep, and the College gave her the old ballads and the discipline to sing them. Her songs blend the march's history with its myths, and she has a gift for making a hall of drovers in [[place-valdun|Valdun]] go quiet. She is ambitious and knows it: a chair at a lord's table, a name at the drove fairs, perhaps a summons to [[place-beravel|Péravel]]. Kélpasi asks one thing of her in return for its pride in her, which is that its own songs stay in the hills.

This winter the village's errand and her own have crossed. The Speaker to the Lowlands took Kélpasi's winter cloth down to Valdun and has not come back, and Darva was singing at the cloth fair the night he sold it.

## Psyche

### Personality

Darva is charming, quick and restless, and she lets ambition run ahead of sincerity more often than she likes to admit. She is clumsy at politics, because she says what she thinks in the wrong room.

### Motivation

Darva wants a name that outlasts her and a hall that keeps her. She also wants to go home each spring and be welcome there, and the first want keeps testing the second.

### Strengths

She is a skilled singer and storyteller, she holds an audience, and she knows the march's history better than most who write it down.

### Weaknesses

She trusts applause more than advice, and she has made enemies by singing the truth about a patron at his own table.

## Social

### Companions

The innkeepers and drovers of Valdun, who give her a bench and a fire. Her mother's hearth in Kélpasi.

### Patrons

The lesser lords and gentry of the march, who pay well for a night of the old ballads and expect their own ancestors in them.

### Enemies

A bard of [[affiliation-clgline|the College of the Line]] who sings in Valdun's better houses and calls her songs hill noise.

### Affiliations

- **[[affiliation-clgwoodsng|The College of the Wood-Song]]**: Darva is a Bard of the College.
- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: She is a Freeman of the crown.

## Plot Hooks

The Cloth Fair
: The Speaker to the Lowlands went down to the cloth fair at Valdun and has not come back. The [[affiliation-thrglnklps|Thárgalon]] has asked Darva to go down and find him, and she asks a party to go with her.

The Priest at the Bend
: The priest from the lowlands has reached Valdun early and asks the Kélpasi bard to guide him up the track. Nobody but the Speaker meets a visitor at the last bend, and the Speaker is missing, so Darva must keep the priest in Valdun without telling him why.

A Song of the Spring
: A lord of the march offers her a place at his table for one song of what Kélpasi does at its spring. The Keeper of the Closed Songs at Elanmere wants the same song for the College, and the village wants it sung by nobody.

The Helmet
: The hill hunter who brought an unrusted imperial helmet into Valdun comes from the slopes below Kélpasi, and Darva knows an old ballad that names a legion's grave there. The [[affiliation-ordoarcanis|Order]]'s antiquarians will pay well to hear it.

:::secret {title="The cloth-buyer's yard"}
Darva saw the Speaker leave a cloth-buyer's yard in Valdun with two men she did not know, and she has said so to nobody.
:::
