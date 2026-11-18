---
shortcode: lrtshgnrm
name: {full: Lartush Genirum}
type: being
subType: npc
description: "A swordmaster of Yamuzel, a former sell-sword blind in one eye, who teaches the blade in a tenement yard at the edge of the Veterans' Quarter to sons of veterans, yard men and marines."
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Swordmaster
  lore: []
  culture: taruzelianclt
  homes: [yamuzel2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, brazemas: {rank: 1}}
  gender: male
  species: humanflk
  born: "670.34"
  height: 6'
  weight: 185 lbs
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: grey
    skin_color: medium
    complexion: [weathered]
    mouth: thin
    extra_features: [a scar running down the back, a blind left eye]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 24}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-mill, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 70}}
    - {model: skill-taruzelilng, system: {masteryLevelBase: 33}}
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

Lartush Genirum is a 49-year-old man who stands 6'0" tall and is broad and solidly built. He has a diamond face with soft cheekbones, a lined forehead, and a sharp jaw that leads to a pointed chin. His round dark brown right eye sits beneath prominent brows and gives him a candid gaze; the left is scarred and blind. He has a prominent nose and thin lips. He has medium-toned skin with a weathered complexion, and an old blade scar runs down the length of his back. His gray hair is tied in a low tail.

# Dossier {#dossier}

Lartush Genirum is a swordmaster of [[place-yamuzel2|Yamuzel]], who teaches the blade in the court of a tenement at the edge of the [Veterans' Quarter]{.name data-type="place/site"}, on the slope below the admirals' street. His pupils are the sons and daughters of veterans and of yard men, and young men about to join the marines, and they pay him what they can. He teaches them to fight as men fight when it is real: short, ugly and finished quickly. He keeps the practice blades himself, at his own grindstone.

## Background

**The trade.** Lartush sold his sword for most of his life, in skirmishes and wars along the coasts of the [[place-vylarianse|Vilérian Sea]], wherever a captain or a merchant would pay for one more man.

**The eye.** He lost his left eye in a fight he does not describe, and he came home to Yamuzel after the war of independence with nothing but his skill. He opened the yard because the quarter's young men were already coming to him.

## Psyche

### Personality

Lartush is quiet, blunt and haunted by his past. He does not talk about the men he killed for pay, and he does not forgive himself for them.

### Motivation

He wants the young men and women he trains to be able to defend themselves and their homes, and to answer in that way for the lives he took.

### Strengths

He has long experience of real fighting, a practical sword technique and an expert hand at keeping a blade. He is tough and slow to tire.

### Weaknesses

He is blind on his left side, and slow to a blow that comes from it.

## Social

### Enemies

Old comrades from the sell-sword years who blame him for a defeat on a foreign coast.

### Others

- **The families of the Veterans' Quarter**, who send him their sons and daughters and feed him when the fees run short.
- **The marine sergeants** raised in the quarter, several of whom learned the sword in his yard.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Yamuzel, free to trade under the Confederation's tariffs and entitled to petition the [[affiliation-grandcouncil|Grand Council]] through his state's councilors.
- **[[affiliation-brazemas|Faith of Brazemas]]**: one of the lay faithful, the Devran, who keep the Thunderer's feasts without office in the temple.

## Plot Hooks

1. **The hall's young men.** [[being-rzznpddn|Razzina Padduni]]'s hall has asked Lartush to take thirty of its young men into his yard and teach them as much as they can learn before the [[lore-fleetreview|Fleet Review]], and it has paid in advance.
2. **The sergeant's order.** A marine sergeant who learned the sword in Lartush's yard tells him that the marines have been ordered to clear the veterans off the southern terraces of [[place-khamisar|Khamisar]], and asks him what a man should do with such an order.
3. **The blades.** A man who came up the goat path from the rocks below the slope at night wants forty blades put to an edge by the end of the month, and pays in foreign silver.
