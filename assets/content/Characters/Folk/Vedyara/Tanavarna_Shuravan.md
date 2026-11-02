---
shortcode: tanavarnashu
name: {full: Tanavarna Shuravan, en: [Master Tanavarna]}
type: being
subType: npc
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan]
  occupation: Woodcrafter
  lore: []
  culture: vedyariclt
  homes: [bharavaban]
  affiliations: {bhrvdvbhon: {rank: 2}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "635.150"
  height: 6' 1"
  weight: 157 lbs
  frame: light
  appearance:
    eye_color: amber
    hair_color: white
    skin_color: golden
    complexion: [weathered]
    extra_features: [Hands broad and scarred from sixty years of adze and chisel]
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-shpw, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 5}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: sohl-sohl-miscgear-waxtablet}
    - {model: sohl-sohl-containergear-bpchlg}
    - {model: sohl-sohl-miscgear-liteblkt}
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

Tanavarna is a tall, thin old man of eighty-five, 6'1", golden-skinned and deeply weathered, with long white hair that was dark brown once and amber eyes that still see a grain before the bark is off. His hands are broad, scarred and steady. He wears plain cotton and sandals and carries a knife and a wax tablet, and nothing else that he would call a tool.

# Dossier {#dossier}

## The Master

For sixty years Tanavarna Shuravan was the most celebrated woodcrafter in [[lore-vedyariclt|Vedyaran woodcraft traditions]], working out of [[place-rajepur|Rajepur]]: the great doors of temples, the beams of a sabhra hall, river-stairs, ferry-barges and, now and again, a chest or a chair for a house that could wait ten years for it. He is a **Karmija**, of the serving tarona, and he never wanted any other station. His teaching was that every wooden thing is a covenant with the people who will use it after its maker is dead, a promise that it will bear the weight it was made for, and that a craftsman who breaks the covenant has made nothing.

[[being-tmrtjnnd|Tamura Tejanand]] apprenticed under him for thirteen years and took that teaching whole. Tanavarna counts Tamura the best of all the men he trained and tells him so seldom.

## The Timber Landing

At eighty he gave his workshop to his apprentices and went down the river to [[place-bharavaban|the Bharava Forest]], where the timber comes from. He lives on the margin of one of the temple-estates of the lower river, in a hut by the landing where the felled logs are dragged to the water, under the keeper's license and by his leave. The keeper values his eye, and the licensed buyers pay him to walk the season's logs before they float and tell them which are sound. He is paid in food and in timber he never uses.

## The Closed Stand

Forty years ago, on a buying journey upriver, Tanavarna walked the edge of an old stand of hardwood beyond the estates' last felling line and marked one tree in it for the last thing he would make. He did not say what that would be. The stand has since been closed to felling by the Devapavi [[being-bhrjvrmdbd|Bhrijivara Madibada]], who confirms the keepers of the estates there and has refused every license for it.

Tanavarna does not know why it is closed and has not asked. He has asked only for the one tree.

## Psyche

### Personality

Tanavarna is quiet, exacting, kind to the young and wholly without patience for poor work. He has outlived his wife, two of his children and most of his rivals, and speaks of all of them with affection. He is not afraid of dying. He is afraid of dying before the tree is seasoned.

### Motivation

He wants the tree he marked in the closed stand forty years ago felled and seasoned while his hands can still work it.

### Strengths

An Eye for Timber
: He can read a standing tree's heart from its bark and a log's soundness from its end-grain.

His Name
: Every woodcrafter in Vedyara knows it, and most of the great buildings of the river have his work in them.

### Weaknesses

Age
: He is eighty-five, and seasoning hardwood takes years he may not have.

The One Tree
: He will not take another, and he will not be told why he cannot have this one.

## Social

### Patrons and Allies

[[being-tmrtjnnd|Tamura Tejanand]]
: His apprentice of thirteen years, who would come down the river if he were asked.

The keeper of the estate
: Who lodges him at the landing and values his eye.

The licensed buyers
: Who pay him to walk the logs. [[being-lkvtprtsy|Lokavati Pritasya]] has offered to pay for his tree's felling if he can get it licensed.

### Rivals

[[being-bhrjvrmdbd|Bhrijivara Madibada]]
: The Devapavi who keeps the stand closed and has refused him twice, kindly.

### Affiliations

[[affiliation-bhrvdvbhon|The Forest Estates]]
: Karmija, lodged under an estate's license at a timber landing.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, who offers a shaving of every new piece of wood at the household shrine.

## Plot Hooks

The Old Man's Errand
: Tanavarna asks the party to go into the closed stand, find his mark on the tree, and come back to tell him whether it is still standing. He does not ask them to fell it.

A Letter Upriver
: Tanavarna wants Tamura to make the last piece if he cannot, and sends the party up the river to Rajepur to bring him down before the felling season opens.

The License
: Lokavati offers the Devapavi a great price for one tree from the stand, for an old man's last work. Bhrijivara asks the party to make Tanavarna understand why the answer is still no, without telling them why.
