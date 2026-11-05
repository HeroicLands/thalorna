---
shortcode: zzrnqsdn
name: {full: Zazuran Kusaduni}
type: being
subType: npc
description: "A carter of Sharimun who drives the quarries' pale stone north along the coast road to the guild houses of Besikar, two days each way behind a team of oxen."
tags: [common-folk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [trader]
  occupation: Teamster
  lore: []
  culture: taruzelianclt
  homes: [sharimun]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, pozeras: {rank: 1}}
  gender: male
  species: humanflk
  born: "682.190"
  height: 5' 10"
  weight: 172 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: golden
    complexion: [weathered]
    extra_features: []
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 52}}
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

Zazuran Kusaduni is a 37-year-old man who stands 5'10" tall and is broad and solidly built. He has an oval face with prominent cheekbones, a wide forehead, and a sharp jaw that leads to a pointed chin. His deep-set brown eyes sit beneath prominent brows, lending him a watchful gaze. A straight nose and wide lips complete his features. He has golden skin weathered by the road, and white stone dust in the creases of his hands. His dark brown hair is cropped short.

# Dossier {#dossier}

Zazuran Kusaduni is a carter of [[place-sharimun|Sharimun]] who drives cut stone from the quarries above the town north along the coast road to [[place-besikar2|Besikar]], where the guild houses build their fronts in the town's fine pale limestone. The road is two days for a loaded cart, through the farms of the north-western plain, and he comes back with grain, timber or nothing. He drives a pair of oxen he has raised himself, and he gets his load to Besikar on the day promised in any weather.

He is paid by the load by the quarry master whose terrace cuts it, and the masters dock him for every block that reaches Besikar chipped.

## Background

**The terraces.** Zazuran worked as a quarryman on the terraces as a youth, dragging blocks to the quay on sledges, and took to the carts as soon as he could buy a team.

**The road.** He has driven the coast road for most of twenty years, and he knows every ford, every farm with water for oxen and every tavern on it.

## Psyche

### Personality

Zazuran is gruff, plain-spoken and impatient with strangers, and kinder to his oxen than to most people.

### Motivation

He wants to be paid what he is owed for every load, and to own a second cart before his back gives out.

### Strengths

He handles oxen well, judges a load and a road surely, and knows the coast road and its people as well as anyone alive.

### Weaknesses

He speaks his mind to quarry masters and magistrates alike, which is dangerous for a carter in Sharimun.

## Social

### Enemies

The clerk of the terrace he hauls for, who docks him for chipped blocks he says were chipped on the quay.

### Others

- **The other carters of the coast road**, who drive in company with him when the weather is bad.
- **The cook [[being-bssshtndn|Bissush Tanaduni]]**, at the tavern an hour short of the gate, where he eats on every journey out and every journey home.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of [[affiliation-besikar|Besikar]], the city-state that holds Sharimun, free to trade under the Confederation's tariffs and entitled to petition the Grand Council through his state's councilors.
- **[[affiliation-pozeras|Faith of Pozeras]]**: one of the lay faithful, the Devran, who keep the Wayfarer's feasts without office in the temple, and he says a word to him at every ford.

## Plot Hooks

1. **The back pay.** The carters have not been paid for three months of loads, and Zazuran means to ask the quarry master for it in front of the others. A quarryman tells him quietly what happens in Sharimun to a laborer who argues about his wage.
2. **The passenger.** A man pays Zazuran well to carry him to Besikar lying flat between the blocks, the day before he is to swear on the porch of the [Khurutun]{.name data-type="place/site"}.
3. **The block.** One block in a load for a guild house of Besikar is heavier than any block of its size should be, and the quarry master's clerk has told Zazuran to deliver it to a different door.
