---
shortcode: wthrnthrnhvn
name: {full: Wíthrún Thornhaven, given: Wíthrún, clan: Thornhaven, aliases: []}
type: being
subType: character
tags: [heroes-and-knaves, hero, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, woodsman]
  occupation: Warrior
  stations: []
  lore: [foxttm, oxttm]
  culture: varokhiclt
  homes: [thornhaven]
  affiliations: {vrystwldtrbs: {rank: 3}}
  gender: female
  species: humanflk
  born: null
  height: 1.8
  weight: 83
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: pale
    complexion: null
    extra_features: []
  packFolder: ankarisvrystwald
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 78}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 60}}
    - {model: skill-varokhlng, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-weapongear-spr}
    - {model: sohl-sohl-weapongear-kish}
    - {model: sohl-sohl-weapongear-cbw60}
    - {model: sohl-sohl-weapongear-baxe}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-rhtunic}
    - {model: sohl-sohl-armorgear-rhbrch}
    - {model: sohl-sohl-armorgear-rhshoe}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-bvcap}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-torch, system: {quantity: 2}}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin}
    - name: Coiled river rope and personal totem token
      type: miscgear
      system: {shortcode: riverrope, weight: 2, value: 20, durability: 3}
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
      weight: {base: null, calc: (9 * str) + 50}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Wíthrún has a riverboat crew member’s powerful shoulders, close-braided black hair and steady brown eyes. A burn has puckered the skin beside her left ear. She dresses in stout wool and patched leather, with an axe at her belt and a spear within reach. Her small ox token is worn smooth by her thumb. She tests a knot before leaning her weight on it and offers the same patient scrutiny to a stranger’s promise.

# Dossier {#dossier}

## The Rope Across the Water

Wíthrún knew the river before she knew the spear. At [[place-thornhaven|Thornhaven]] her family bought furs, carried grain and kept the household reckoning. She could judge a boat's load by the sound it made against the landing. She thought she would grow old there, hearing that sound.

The raiders came before dawn. Their boat approached like a trader's boat, and the household opened to receive it. Fire took the roof. Her parents and brothers died before neighbors could reach them. Wíthrún escaped through smoke with a rope around her waist, pulled from the water by hands she could not see.

Her kin could not provide another roof. The Other Chief arranged one within the clan, and households contributed food and clothing. The Shaman guided her family's funeral. She was fed even on the days she would not speak. Anyone telling this tale must remember the hands that pulled and the household that made room.

She asked to train with the warband. Some said the boats needed her more. A veteran put a spear in her hands and showed her how easily anger could make a strong person fall. She learned. Through rain, mistakes and humiliating practice she learned. The Fox remained Thornhaven's wesk. Her personal bond was with the Ox, whose strength carries a load long after the first rush of anger has gone.

She took escort work and followed reports of the raiders from landing to landing. Every rumor became a weight she tried to carry herself. Companions learned to stop her taking the heaviest pack as well as the longest watch. She thanked them and did it again.

At last she recognized a raider at a narrow reach upriver. He wore the brass fastening her mother had used on a river cloak. Wíthrún followed him along the bank until he leapt into a waiting boat. A little farther ahead a crowded ferry struck submerged timber and turned across the current. Its passengers cried out. The raider's boat was already moving past them.

She could take the near path and gain a bowshot at him. The ferry's rope had parted. She looked once at the brass fastening and then at the faces on the ferry. She cast her own rope.

The first pull dragged her to her knees. She wrapped the rope around a tree, called to her companions and put her shoulder against it. People who had never held a weapon came to pull beside them. They brought the ferry against the bank a hand's breadth at a time. Its passengers climbed ashore. The raider disappeared around the bend.

Wíthrún wept after the last passenger was safe. No one told her the rescue should have made her happy. A child sat beside her until she could stand. She had lost the fastening and the man who wore it; she had kept a boatful of people from becoming another burned household's grief.

Thornhaven's reciters end with the rope drying above her receiving household's door. They say she still asks who ordered the raid and still seeks a witnessed settlement. They also say that when she takes a load now, she leaves a place for another pair of hands.

## Playing Wíthrún

Tellings disagree about the season and the raiders' origin. This sheet portrays her after the ferry rescue, an accomplished defender still seeking evidence of the attack. Her clan survives and continues to support her; the destruction was of her family household. Her training took sustained work. Her grief supplies neither instant skill nor authority over the warband.

## Psyche

### Personality and Motivation

Wíthrún is dependable, patient under hardship and reluctant to admit when a burden is too heavy. Her Ox bond expresses those qualities. She wants other households to receive the protection her family lacked and wants a truthful reckoning of the raid. She is learning to let care reach her as readily as she gives it.

### Strengths and Limits

She is a strong spear fighter, capable river swimmer and alert escort who reads banks and boat traffic well. Household trading experience helps her recognize a suspicious load or inconsistent account. She struggles to delegate, and stolen family goods can draw her away from sound judgment. She respects a hospitality or ransom pledge once given, even when it protects someone she hates.

## Social

Her receiving household and companions are continuing relationships, not a debt canceled by her victories. She serves under the War Chief's military charge; the Other Chief handles provisioning and witnessed claims, while the Shaman guides sacred matters. Frontier traders may hold evidence she needs, even when the village distrusts them. She judges their present promises without forgetting the boat that brought the raiders.

## Plot Hooks

1. **The Brass Fastening**—A trader offers a family possession and an account of the raiders. Help establish its provenance before Wíthrún mistakes a stolen object for proof of its current owner's guilt.
2. **Room in the Boat**—Escort displaced households through a disputed landing. Wíthrún needs companions who can negotiate passage and share the work while she guards the vulnerable.
3. **A Pledge Already Given**—A suspected raider is held under a ransom pledge. Keep the captive safe, find witnesses and bring a claim to the living chiefs while others urge Wíthrún to break the promise.
