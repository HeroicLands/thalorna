---
shortcode: gnrbbd
name: {full: Genira Bibudi}
type: being
subType: npc
description: "A gladiator of Pashinar who boxes and fences for purses in the caravanserai yards on winter evenings, fast and close, and the one the caravan men bet on."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Gladiator
  lore: []
  culture: taruzelianclt
  homes: [pashinar]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, brazemas: {rank: 1}}
  gender: female
  species: humanflk
  born: 691.132
  height: 6' 1"
  weight: 176 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: olive
    complexion: [scarred]
    extra_features: [a scar on the right upper arm]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 51}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 60}}
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

Genira Bibudi is a 28-year-old woman who stands 6'1" tall and is of moderate build. She has a long face with prominent cheekbones, a broad forehead, and a narrow jaw that leads to a pointed chin. Her sharp brown eyes sit beneath straight brows and give her an incisive gaze. She has expressive lips and a nose crooked from an old break. She has olive skin, marked with the small scars of her trade, and a long scar across her right upper arm. Her black hair is twisted into an elaborate arrangement that she pins tight before a bout.

# Dossier {#dossier}

Genira Bibudi is a gladiator of [[place-pashinar|Pashinar]], a freewoman on the register who fights for purses in the caravanserai yards. On winter evenings, when the ferries over the strait sail only on settled days and the caravanserais are full of men waiting for them, fighters box and fence in the yards for purses put up by the keepers and the caravan masters. Genira fights fast and close, inside a longer reach, and she is the one the caravan men bet on.

In the sailing season the yards empty as the trains go over the pass and the ferries run every morning, and the purses go with them. Then Genira hires out as a guard to the caravans on the road to [[place-besikar2|Besikar]], where her bow is worth more than her fists, and comes back to Pashinar for the winter.

## Background

**The streets.** Genira grew up an orphan in the lanes behind the bazaars, living off what the transients dropped, and fought for what she ate.

**The yards.** A fighter of the caravanserai yards saw her take a grown porter down in an alley and offered to teach her. She won her first purse at sixteen and has fought in the yards every winter since.

## Psyche

### Personality

Genira is quick, bold and proud, and reckless when a crowd is shouting her name.

### Motivation

She wants a name in the yards that no one can take from her, and never to go back to the lanes she came from.

### Strengths

She is very fast, agile and hard to hit, and she is as good with a bow and a thrown knife as with her hands.

### Weaknesses

She lacks the raw strength of the bigger fighters, and she will take a bout she should refuse rather than be seen to refuse it.

## Social

### Enemies

None who wish her dead. The fighters she has beaten in the yards would like their purses back.

### Others

- **The caravanserai keepers**, who put up the purses and take a share of the bets.
- **The caravan masters**, who bet on her in winter and hire her bow in summer.
- **[[being-hshdyqsdn|Hushaduya Kusaduni]]**, the armorer of the street below the western gate, who wants her blades proved by someone the caravan men watch.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Pashinar, entitled to petition the [[affiliation-grandcouncil|Grand Council]] through her state's councilors.
- **[[affiliation-brazemas|Faith of Brazemas]]**: one of the lay faithful, the Devran, who keeps the storm god's feasts without office in the temple.

## Plot Hooks

1. **The bout to lose.** A caravan master who has bet heavily against her offers Genira a season's purses to lose a bout she could win. Her name and her purse cannot both be kept.
2. **The armorer's knives.** Hushaduya Kusaduni offers Genira a pair of her throwing knives if she will fight with them in the yards, before the caravan guards who say they are ornaments.
3. **The gate on the pass.** The caravan masters coming down into Pashinar complain of a new toll-gate on the road to Besikar, kept by men who say they hold it for the hills. One of them hires Genira to ride with his train and look at the men who keep it.
4. **The Gate at Kudumel.** A ferry clerk of the [[affiliation-balinuni|Balinuni]] offers Genira a season's purses at the [[place-caravangate|Caravan Gate]] of [[place-qudumel2|Kudumel]], if she leaves Pashinar before the first spring sailing.
