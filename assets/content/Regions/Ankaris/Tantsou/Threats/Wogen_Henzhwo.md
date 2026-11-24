---
shortcode: wogenhenzhuo
name: {full: Wogen Henzhwo, en: [Master Tiger of the Steppes]}
type: being
subType: npc
description: >-
  Forty-seven-year-old warlord risen out of the Hwenhatou, the Black Wilds north of the Empire of Tantsou—a master strategist whose steppe confederation has become the gravest external threat the imperial frontier has faced in a generation.
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, skirmisher]
  occupation: Warlord
  lore: []
  culture: henhatoutsouclt
  homes: [blackwilds]
  affiliations: {hwenhatoucnf: {rank: 3, office: War-Leader}}
  gender: male
  species: humanflk
  born: "672.287"
  died: null
  height: 5' 9"
  weight: 186 lbs
  frame: heavy
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: [weathered, scarred]
    extra_features: [old scars across a face cut by the wind]
  packFolder: threats
  items:
    - {key: sbyrn, model: armorgear-sbyrn, name: "Felt coat sewn with iron plates", kind: armor}
    - {key: scmtr, model: weapongear-scmtr, name: "Saber", kind: weapon}
    - {key: saddlewar, model: miscgear-saddlewar, name: "War saddle", kind: miscgear}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 74}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 40}}
    - {model: skill-tantsoulng, system: {masteryLevelBase: 60}}
    - {key: sbyrn, model: sohl-sohl-armorgear-sbyrn}
    - {key: scmtr, model: sohl-sohl-weapongear-scmtr}
    - {key: saddlewar, model: sohl-sohl-miscgear-saddlewar}
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
      weight: {base: 186, calc: "(9 * str) + 50"}
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

A broad, unhurried man in a felt coat sewn with iron plates sits his horse a little apart from his captains and lets them do the talking. He is forty-seven and past his youth, his face cut by wind and old scars, and he watches whoever is speaking rather than the one he is speaking to. When he does talk, it is quietly, in the clipped trade-speech of the frontier markets, and the riders around him go still to hear it.

# Dossier {#dossier}

Wogen Henzhwo, called the Master Tiger of the Steppes, is the warlord of [[place-blackwilds|the Black Wilds]], the Hwenhatou: the steppe and broken hill-country that lies north of the [[affiliation-tantsouempr|Empire of Tantsou]] beyond the marches, a country where [[lore-grukarfolk|Grukar]] nests also lie. He has done what no one in living memory managed and united its feuding tribes under one banner, and his riders are raiding the empire's northern districts. He is a strategist before he is a warrior, and he reads the frontier as carefully as any commander who holds it.

## Background

**The divided steppe.** For generations the tribes of the Hwenhatou fought one another over grazing, wells and blood debts, and the empire's border garrisons kept them divided with gifts to one chief and raids against another. Wogen began as the war-leader of a minor tribe. He bound the others to him one at a time: by marriage where a chief had a daughter, by treaty where a chief had sense, and by slaughter where he had neither. To the tribes he presented himself as their strength gathered in one hand, and he promised them the riches of the south.

**The open door.** He chose his moment. Infighting among the [[lore-wohou|Wohou]] lords of the north thinned the frontier garrisons, and the court was too busy with its own intrigues to notice the steppe uniting. By the time a Prince's report reached the capital, the border was porous and the tribes answered to one man.

**The hungry years.** A run of hard winters and failing grazing drove the tribes south in any case. Wogen turned that hunger into a war aim: the steppe could starve, or it could take the empire's rice basins.

## Psyche

### Personality

Patient, watchful and cold. He listens far more than he speaks, never threatens what he does not intend to do, and keeps promises to allies and enemies alike, which makes both trust him more than they should.

### Motivation

Grazing and grain for the tribes, whom hard winters and failing pastures have driven south.

:::secret {title="What the Master Tiger wants"}
Land and grain for the tribes first; after that, a throne. He does not want to burn the empire, he wants to rule a piece of it, and he studies its registers and its castes as carefully as its forts. The campaigns he loses are the ones he meant to lose.
:::

### Strengths

He turns raiders into soldiers. His horsemen ride in disciplined companies, strike supply lines and outposts instead of towns, and withdraw before an imperial army can force a battle. He reads his enemies' politics as well as their ground.

### Weaknesses

The confederation is held together by his person and by plunder.

:::secret {title="What holds the tribes"}
A season without victories, or a blow to Wogen himself, would set the tribes at each other's throats again, and every chief he subdued remembers how.
:::

## Social

### Enemies

[[being-tuizhokwzng|Tuizho]]
: the Prince of Kwozheng, the [[lore-zhazho|Zhazho]] lord whose province he raids, who would win the court's favor by bringing back his head.

### Affiliations

[[affiliation-hwenhatoucnf|Hwenhatou Confederation]]
: War-Leader; the tribes of the Black Wilds, sworn to him as their single war-leader.

## Plot Hooks

The Burned Granaries
: A chain of supply depots in the northern districts burns in one night. The garrison commander blames the riders; the party finds a forged order that emptied the guard the night before, and the forger was someone inside the province.

:::secret {title="An Offer to the Exiles"}
An Offer to the Exiles
: Wogen's envoys are seeking out exiled Wohou and rebel factions, offering them places in the realm he means to carve from the north. One of them has approached [[being-tuijawengyan|Tuija Wengyan]], and the empire would pay well to know the answer.
:::

The Lost Caravan
: A Shwonong merchant's caravan vanished on the northern road with a cargo the merchant will not name. The steppe riders have it, and Wogen is willing to bargain for something other than silver.

The Example
: Peasants in a northern district, crushed by war taxes, have begun to say the Master Tiger would treat them better than their lord. The magistrate wants the talk stopped, and the people saying it are not wrong about the taxes.

## See Also

[[being-tuijawengyan|Tuija Wengyan]]
: the exiled general whose rebellion could join Wogen's war

[[lore-grukarfolk|Grukar Folk]]
: the nests in the far north beyond the marches

[[affiliation-tantsouempr|Empire of Tantsou]]
: the power he presses against
