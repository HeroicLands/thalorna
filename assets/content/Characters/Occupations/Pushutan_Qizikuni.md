---
shortcode: pshtnqzkn
name: {full: Pushutan Qizikuni}
type: being
subType: npc
description: "A senior pleader of Sharimun's Litigants' Guild who carries the name of the Qizikuni of Besikar, argues their trade disputes before the Arbitrators and is hard on the young litigants in his chambers."
tags: [administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, courtier]
  occupation: Litigant
  lore: []
  culture: taruzelianclt
  homes: [sharimun]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, qizikuni: {rank: 2}, marendas: {rank: 1}}
  gender: male
  species: humanflk
  born: 679.286
  height: 5' 7"
  weight: 141 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: medium
    complexion: [weathered]
    extra_features: []
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-pfmy, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 17}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-pilt, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 11}}
    - {model: skill-taruzelilng, system: {masteryLevelBase: 80}}
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

Pushutan Qizikuni is a 40-year-old man who stands 5'7" tall and is of moderate build. He has a heart-shaped face with prominent cheekbones, a narrow forehead, and an angular jaw that leads to a pointed chin. His large dark brown eyes sit beneath heavy brows, lending him an expressive gaze. A strong nose and curved lips complete his features. He has medium-toned skin with a weathered complexion. His dark brown hair is kept practical and short.

# Dossier {#dossier}

Pushutan Qizikuni is a litigant of [[place-sharimun|Sharimun]], one of the most senior pleaders of the [Litigants' Guild]{.name data-type="affiliation/guild"}, whose hall stands at the top of the harbor square above the [Khurutun]{.name data-type="place/site"}. He pleads commercial suits before the Arbitrators of the [[affiliation-grandcouncil|Grand Council]]: charters, cargoes, partnerships and debts between merchants of different cities, where the laws of one city and another disagree. He carries the name of the [[affiliation-qizikuni|Qizikuni]] of [[place-besikar2|Besikar]], and he argues the house's trade disputes in Sharimun, where the house keeps litigants of its own name to see that what is owed to it is paid.

He keeps chambers off the square, takes young litigants of the guild into them to learn the trade, and is hard on them. He knows the laws of all five cities, the habits of every Arbitrator and the order of the court's book.

## Background

**The guild.** Pushutan was schooled in rhetoric, mathematics and mercantile law, as the children of the guild families are, and he has pleaded before the Arbitrators for nearly twenty years.

## Psyche

### Personality

Pushutan is exacting, dry and critical. He has no patience with a careless argument or with a method he has not seen work.

### Motivation

He wants every bargain the court weighs held to its terms, because a bargain not honored is theft, and he wants the young litigants he trains to plead as well as he does.

### Strengths

He is learned in the commercial law of the five cities, a strong strategist in a long suit and a demanding teacher.

### Weaknesses

He dismisses an argument he did not think of himself, and his pupils fear him more than they like him.

## Social

### Enemies

Ambitious younger litigants of the guild want his clients and say in the guild hall that he wins the house's suits on the house's name.

### Others

- **The young litigants of his chambers**, who copy his briefs and run his errands to the clerks.
- **The merchants of the five cities** who hire him for suits worth a voyage to Sharimun.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of [[affiliation-besikar|Besikar]], the city-state that holds Sharimun, free to trade under the Confederation's tariffs and entitled to petition the Grand Council through his state's councilors.
- **[[affiliation-qizikuni|Qizikuni]]**: Kin of the House, bearing the name of the Besikar banking house and pleading its trade disputes in Sharimun, without office in the house.
- **[[affiliation-marendas|Faith of Marendas]]**: one of the lay faithful, the Devran, who keep the feasts of the god of knowledge without office in the temple.

## Plot Hooks

1. **The master at sea.** A Kudumel merchant's suit against a Besikar house turns on a ship's master who signed the charter and has gone to sea, and the session closes in twenty days. Pushutan pleads for the Besikar side, and he would be content if the master stayed at sea.
2. **The pupil's scruple.** The best of Pushutan's pupils has quarrelled with him over what the chambers charge their clients, and means to raise the matter before an Arbitrator. Pushutan has twenty days of the session left and a pupil who will not be quiet.
3. **The war's debt.** A merchant who borrowed against the Qizikuni's gold in the first months of the war has brought a suit to have the debt read as a gift to the Confederation. Pushutan is briefed to answer him.

:::secret {title="The Truth of Sharimun"}
The clerks of the Khurutun sell places in the Arbitrators' book, and cases are heard in the order they are entered. A Besikar house's suit is heard in the session it is entered, and a merchant without a litigant who knows the price waits two years or more. Every litigant of the guild knows the clerks' price, Pushutan among them, and puts it in his own fees and says nothing.

The pupil of the second hook has learned the price and which clerks are paid it, and that is what the quarrel over the chambers' charges is about. Pushutan means to keep the pupil quiet until the session closes, because a word before an Arbitrator would put every pleader of the guild, and the Qizikuni's own suits, in question.
:::
