---
shortcode: brygrlyskl
name: {full: Brigar Liskal}
type: being
subType: npc
description: "A soldier of the Durvalis garrison who keeps the peace in the town's lanes and is hunting the forger of the salter's mark on the spoiled winter barrels."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Town Guard
  lore: []
  culture: provenzianclt
  homes: [durvalis]
  affiliations: {kngdmprvnz: {rank: 2}, arldnpnthn: {rank: 1}}
  socialTies: {being-talvenekmrl: patron}
  gender: male
  species: humanflk
  born: 693.97
  height: 5' 9"
  weight: 176 lbs
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: blonde
    skin_color: dark_brown
    complexion: [ruddy]
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 47}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 24}}
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

Brigar Liskal is a 26-year-old man who stands 5'9" tall and is of heavy build, broad in the chest and thick in the arm from a boyhood spent lifting barrels. His blond hair is thick and never quite combed, his blue eyes are friendly, and his ruddy face flushes when he laughs, which is often. He wears the garrison's padded jack with the sleeves rolled up in any weather, a short sword and a cudgel at his belt, and his forearms are burned dark from the road.

# Dossier {#dossier}

Brigar Liskal is a soldier of the garrison of [[place-durvalis|Durvalis]], the fortress town of the eastern march, who walks the town's lanes inside the walls and keeps the peace among the carters, victualers, farriers and soldiers who fill it from the thaw to the snow.

He was born in Durvalis, the son of a carter who hauled the garrison's stores up from [[place-tiravellake|Lake Tiravel]], and he knows every yard and every family in the lanes behind the muster ground because they are his neighbors. He took the garrison's pay at twenty-one because the town needed somebody in its lanes who knew who was who, and he has kept the peace there for five years. He knows which victualer skims the garrison's weights, which he ignores; which sells rotten meat, which he does not; and which carters will knife a man over a debt, whom he watches. He would rather talk a quarrel down than break a head, and he usually manages it.

The town's present quarrel has landed in his lanes. Barrels in the garrison's winter store have begun to spoil, and they carry the mark of the salter [[being-chynrkrsvr|Chinara Kórisvar]], who says the mark is forged by a rival victualer. The quartermaster has asked Brigar to find out before the snow, and the rival victualer is the man who holds the debts of half the carters Brigar grew up with.

## Psyche

### Personality

Brigar is friendly, curious about everyone and slow to anger. He talks a long time before he acts, which more aggressive soldiers take for softness, and he has a good-natured humor that the lanes enjoy.

### Motivation

He wants his lanes safe and his neighbors left to make a living. He also wants to prove that a town can be kept honest by knowing people rather than by beating them.

### Strengths

He knows the lanes and the people in them completely, he is very good at calming a quarrel, and he is a hard man to put down when a fight cannot be avoided.

### Weaknesses

He is too close to the people he polices, and the man he is after has bought half of them.

## Social

### Companions

The carters and the victualers' boys of the lanes behind the muster ground, and his mother, who still keeps the family's yard.

### Patrons

[[being-talvenekmrl|Talvene Komrelis]], the Warden of the Talote, who likes a soldier who knows the town and keeps Brigar in the lanes rather than on the road.

### Enemies

[Palveze Gredalis]{.name data-type="being/npc"}
: A victualer who came to Durvalis two years ago, sells the garrison his barrels under everyone's price and lends to the carters on terms built to fail, so that their carts and yards come to him. Brigar has watched him ruin families he has known all his life, and nothing Palveze does is quite against the law.

### Affiliations

- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: Brigar is a Freeman and a soldier of the crown's garrison.
- **[[affiliation-arldnpnthn|Aureldian Pantheon]]**: He gives at whichever temple's festival falls that week.

## Plot Hooks

The Forged Mark
: Brigar is sure Palveze put Chinara's mark on his own spoiled barrels, and he cannot prove it before the snow shuts the town in with the [[affiliation-wntrassize|Winter Assize]]. He asks a party to watch Palveze's yard at night, where the barrels are marked.

The Carter's Daughter
: [Kolmete]{.name data-type="being/npc"}, a carter Brigar grew up with, begs him to stop his daughter's marriage to Palveze, which will make Palveze master of the family's yard and its carts. Brigar has no right to interfere and every reason to.

The Offer
: Palveze offers to stop calling in the carters' debts if Brigar will drive a rival victualer out of the lanes. The rival has been skimming the garrison's weights, and Brigar has always let him.
