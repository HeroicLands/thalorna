---
shortcode: dmvthflknstn
name: {full: Dómvith Falkenstein, given: Dómvith, clan: Falkenstein, aliases: []}
type: being
subType: character
tags: [heroes-and-knaves, hero, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, woodsman]
  occupation: Warrior
  stations: []
  lore: [falconttm, wolfttm]
  culture: varokhiclt
  homes: [falkensten]
  affiliations: {vrystwldtrbs: {rank: 3}}
  gender: male
  species: humanflk
  born: null
  height: 6' 2"
  weight: 201 lbs
  frame: heavy
  appearance:
    eye_color: gray
    hair_color: brown
    skin_color: pale
    complexion: null
    extra_features: []
  packFolder: ankarisvrystwald
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 65}}
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

Dómvith is a broad man with graying hair, a flattened nose and a pale scar across one palm. He wears repaired leather over a wool tunic and carries a spear whose shaft has been replaced many times. A wolf token rests beneath his collar. His old command torc is absent; he touches the bare place at his throat when someone addresses him as a leader.

# Dossier {#dossier}

## The Man Who Stayed

At [[place-falkensten|Falkenstein]] they tell of Dómvith twice. The first tale is quick, because a young man's triumph takes little breath. The second takes the length of a winter fire.

He won his first renown at the crossing below the crag. His band stood shield to shield while the river rose around their knees. He knew each man's step and each man's fear, and he brought them home together. The Falcon was the village's wesk; the Wolf was the shape he found for himself. He was given charge of the crossing and men who would follow him gladly.

Then came a raid and a retreating enemy with stolen cattle. His companions saw the chance for a greater song. Dómvith had orders to hold the crossing until the households behind it were safe. He listened to the men beside him, and their eagerness sounded like courage. They pursued.

They took back the cattle. Behind them another enemy band reached the unguarded boats. Three defenders died, a household burned, and people who had trusted his charge fled into the reeds. Dómvith came home with horns and hides enough to cover the shame. He said the crossing had already fallen when he left it.

A boatwoman had watched him go. Before the living witnesses she repeated his last words to his companions. He could remember saying them. He could no longer bear hearing them.

The Other Chief heard the losses and the witnesses. The War Chief took back his charge. The Shaman answered for the disturbed burial ground beside the burned house. Where the harms met, the three seats sat together. His kin kept him, and he remained of Falkenstein. He owed restitution and had lost the trust with which the crossing had been placed in his hands.

Do not hurry the years that follow. He gave his raid shares to the harmed households. He hauled timber, escorted those who would not ride beside him, and stood watches under younger men. One widow accepted the grain and would never accept his company. The reciters leave her that choice.

When the crossing was threatened again, he was there as a defender. Across the water he saw the leader of the earlier attack, close enough that a strong swimmer might reach him. Behind Dómvith the last boat had grounded, heavy with children and old people. He had a spear, a rope and the length of one choice.

He drove the spear beneath the boat's side and lifted while others pulled. An arrow pinned his hand to the shaft. He broke the shaft, left the point where it stood and took the rope. The enemy leader escaped. The boat floated.

When relief came, Dómvith could not close his injured hand. The younger captain asked why he had stayed when there had been glory across the river. “There were people behind me,” he said. It was an answer he could have given years before.

The village trusted him with watches again. He did not recover every friendship or his former command. Yet when the crossing must be held, people ask whether Dómvith is there. The tale ends with the rope passing from his sound hand to another's, because even the man who stays must learn to let others carry their part.

## Playing Dómvith

The oral accounts agree on the abandoned charge and the grounded boat, but place them in different generations. This sheet presents him after the rescue, with restored trust as a warrior and no current command office. His hand has healed enough for ordinary weapon use, leaving a visible scar; its temporary incapacity belongs to the tale. Living restitution and trust shape his redemption. No reciter can state how the ancestors will judge him.

## Psyche

### Personality and Motivation

Dómvith's Wolf bond expresses cooperation, careful formation fighting and loyalty. His weakness is letting a group's desire replace his own judgment. He seeks to be reliable to those entrusted to him and to finish the restitution that remains. Praise makes him wary; a clearly stated duty steadies him.

### Strengths and Limits

He is an experienced spear fighter and woodsman who can organize a defense without needing its command. He notices when a band has become excited enough to forget its charge. He is poor at defending himself in argument and sometimes accepts blame that belongs elsewhere. A victory cannot recover lost lives, and the people he harmed owe him no forgiveness.

## Social

His kin retained him when his command was withdrawn. Younger captains give his present orders, and he respects the distinction between their charge and his experience. The harmed households receive his remaining payments through witnessed reckoning. Former companions remember the cattle raid more fondly than he does, making them a continuing temptation.

## Plot Hooks

1. **The Last Reckoning**—A surviving witness disputes the remaining restitution. Escort the witness and establish a living account while Dómvith's former companions try to suppress their part in the raid.
2. **The Profitable Pursuit**—His old band proposes a rich raid during his next defensive watch. Help him keep the crossing while discovering whether the offer conceals an attack on it.
3. **The Grounded Boat**—Floodwater has trapped households at the crossing. The party must free and escort the boats while Dómvith holds the approach under a young captain whose orders he must trust.
