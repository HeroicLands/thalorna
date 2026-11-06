---
shortcode: vlyrbrylnd
name: {full: Volira Brilonde}
type: being
subType: npc
description: "A thatcher of Palnebris and the reeve its tenants elected, who says openly that the lord's quarrels are being paid for out of their strips."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan]
  occupation: Thatcher
  lore: []
  culture: provenzianclt
  homes: [palnebris]
  affiliations: {brnyzrvln: {rank: 1}, kngdmprvnz: {rank: 2}, lizelas: {rank: 1}}
  socialTies: {being-ryldnbrnwyld: rival}
  gender: female
  species: humanflk
  born: 690.81
  height: 5' 7"
  weight: 146 lbs
  frame: light
  appearance:
    eye_color: brown
    hair_color: grey
    skin_color: light
    complexion: [sun_kissed]
    extra_features: [a scar running down the right leg]
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-eng, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pfmy, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 65}}
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

Volira Brilonde is a 29-year-old woman who stands 5'7" tall and is of light build. Her light skin is bronzed from roof work, her hair went gray in her twenties and she keeps it swept up with carved combs, and her narrow brown eyes are sharp and unimpressed. A scar runs down her right leg from a fall from a drying-shed roof that she climbed back onto the next morning.

# Dossier {#dossier}

Volira Brilonde is a thatcher of [[place-palnebris|Palnebris]], the wealthiest manor of the [[affiliation-brnyzrvln|Barony of Zuravlen]], and the reeve its tenants elected to speak for them, an office that makes her nobody's friend by the Festival of the Golden Harvest.

She learned to thatch from her father, the manor's thatcher before her, and she is one of the few women in the valley in the trade. She keeps the roofs of the tenants' cottages, the drying sheds and the heated graft-house where the manor's famous grafters work through the winter. Her work is neat and lasting, and the older tenants who doubted a woman on a roof have stopped saying so. She takes on more work than she can do and cannot say no to a neighbor with a leaking roof. The tenants elected her reeve two years ago because she is on every roof in Palnebris and afraid of nobody.

Palnebris is fighting on every front at once, and the tenants are paying for it. The grading table at [[place-elthrembis|Eltrembis]] failed a Palnebris consignment last week, which cost the tenants their rent, because their rent is paid in fruit reckoned at the table's marks. The lord, [[being-ryldnbrnwyld|Rilden Branvilde]], has not remitted it. Volira says openly that his quarrels are being paid for out of their strips.

## Psyche

### Personality

Volira is plain-spoken, tireless and stubborn, quick to help and quicker to argue.

### Motivation

She wants the tenants of Palnebris treated fairly by a lord who is frightened and a barony that judges their rent by a stranger's marks.

### Strengths

She is a skilled, careful and inventive thatcher, and she knows every tenant and every roof of the manor.

### Weaknesses

She cannot refuse work or a fight, and she is running out of hours for both.

## Social

### Companions

The tenants of Palnebris, and the grafters, whose graft-house roof she keeps.

### Patrons

None. The reeve answers to the tenants who elect her.

### Enemies

Rilden Branvilde, the lord of Palnebris, and his steward, who keeps the manor's accounts closer than its charter.

### Affiliations

- **[[affiliation-brnyzrvln|Barony of Zuravlen]]**: Volira is a subject of the barony and reeve of the tenants of Palnebris.
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: She is a Freeman of the crown.
- **[[affiliation-lizelas|Faith of Lizelas]]**: She keeps the frost vigil with the rest of the manor.

## Plot Hooks

The Frost Vigil
: Volira has told the tenants not to come to the frost vigil until the lord remits their rent. If a late frost comes, the manor's blossom dies, and so does her standing; if it does not, the lord fines every tenant who stayed away.

The Failed Mark
: Volira believes the grader who failed the consignment was bribed by somebody who wants Palnebris ruined, and she suspects her own lord's steward. She wants a party to watch the grading table at the next consignment.

The Graft-House Roof
: Rethatching the graft-house, Volira found a sealed box hidden in the old roof: a copy of the manor's water-charter, older than the one kept in the church, and not the same.
