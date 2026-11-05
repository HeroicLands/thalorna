---
shortcode: nagaritgaj
name: {full: Nagarit Gajabir, en: [Captain Nagarit]}
type: being
subType: npc
tags: [soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, courtier]
  occupation: Commander of the Watch
  lore: []
  culture: vedyariclt
  homes: [vyalendra3]
  affiliations: {vyalendra2: {rank: 4}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "672.140"
  height: 6' 0"
  weight: 176 lbs
  frame: medium
  appearance: {eye_color: brown, hair_color: black, skin_color: tawny, complexion: [clear]}
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 65}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-weapongear-shrtswd}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-weapongear-lbw75}
    - {model: sohl-sohl-projectilegear-arwstd}
    - {model: sohl-sohl-containergear-quiversmsh}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-miscgear-sealsignat}
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

Nagarit is a hard, well-kept man of forty-eight, 6'0", tawny-skinned and clear-faced, with black hair cut short in the academy manner and brown eyes that settle on a man's hands. He wears a leather vest over good cloth, a short sword and a dagger, and on his right thumb the bow-ring every graduate of [[place-danurkot|Danurkot]] is given on the day he leaves.

# Dossier {#dossier}

## The Commander

Nagarit Gajabir is the **Commander of the Watch** in [[place-vyalendra3|the City of Ten Thousand Looms]]. By the city's custom the commander is a graduate of the [[affiliation-dnrktjnpd|Janpoda of the Bow-Fort]] and no Vyalendri, so that the watch answers to the Loom-Council and to no shrena's household, and Nagarit is both. He is a **Sentija**, born to the warrior tarona in the Danurkot country, and he has held the command for nine years at the Council's pleasure.

The command pays less than it brings in. The shrenis pay the Watch for patrols past their warehouses, the dyers pay it to look away from the runoff, and a household that wants a quarrel settled quietly pays Nagarit to settle it. He keeps the city orderly and himself comfortable, and the Council has never asked him to choose between the two.

## Darmapalda

[[being-drmpldvmkt|Darmapalda Vimuktan]] is a bodyguard of the first rank who protects the people the Watch cannot be bothered with, takes no orders from Nagarit and pays him nothing. Nagarit calls this an insult to his authority. He has made Darmapalda's removal a personal crusade, brought false charges against him twice, and tried to cut him off from his clients.

The crusade has another cause. Darmapalda once refused work from the [[affiliation-gargezru|Gar-Gezru]], the network of corrupt officials who keep a bounty on honest auditors, and reported them to the Watch. Nagarit buried the report, because he owes the Gar-Gezru more than he can pay. They have named the price of the debt, and it is Darmapalda.

## Psyche

### Personality

Nagarit is controlled, sociable, intelligent and entirely self-interested. He is good at the work of commanding a watch when nothing more is asked of him, and he believes, accurately, that most men in his place do as he does. He has a trained soldier's contempt for men who fight for hire.

### Motivation

He wants his debt to the Gar-Gezru canceled, and the price they have set on it is Darmapalda Vimuktan.

### Strengths

The Command
: The Watch's men, its cells and its warrants are his to use, and the Council does not audit him.

The Academy
: He is a good soldier and a better archer, and he still fights like one.

### Weaknesses

The Debt
: The Gar-Gezru own him, and if he fails them they can expose him to the Council.

The Buried Report
: Darmapalda's report still exists somewhere in the Watch's records, and it names the men Nagarit protects.

## Social

### Patrons and Allies

The shrenis of the warehouse quarter
: Who pay the Watch for patrols and Nagarit for favors.

### Rivals

[[being-drmpldvmkt|Darmapalda Vimuktan]]
: The bodyguard he is pursuing, for his own pride and for his creditors.

The [[affiliation-gargezru|Gar-Gezru]]
: His creditors, who are also his masters.

### Affiliations

[[affiliation-vyalendra2|Vyalendra City-State]]
: Sentija, Commander of the Watch.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Upasoka, who keeps the feasts the Council keeps.

## Plot Hooks

The Third Charge
: Nagarit brings a third charge against Darmapalda, this time for a killing, with two witnesses. One of the witnesses comes to the party and says she was paid.

The Report
: A clerk of the Watch has found Darmapalda's buried report and wants to sell it. Nagarit wants it destroyed, the Gar-Gezru want it, and Darmapalda would give a good deal to see it read before the Council.

The Bargain
: Nagarit approaches the party, not Darmapalda, with an offer: help him get out from under the Gar-Gezru and he will drop the charges. He may mean it.
