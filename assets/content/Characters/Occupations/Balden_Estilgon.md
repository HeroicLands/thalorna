---
shortcode: bldnstylgn
name: {full: Balden Estilgon}
type: being
subType: npc
description: "A Provénzian sworn skald of the Skalds' Circle at Aurelane, who recites the old families' lineages exactly as received and has been asked to recite one in evidence."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, courtier]
  occupation: Skald
  lore: []
  culture: provenzianclt
  homes: [aureliane]
  affiliations: {kngdmprvnz: {rank: 2}, lusinia: {rank: 1}}
  gender: male
  species: humanflk
  born: 669.363
  height: 6'
  weight: 172 lbs
  frame: heavy
  appearance:
    eye_color: green
    hair_color: black
    skin_color: fair
    complexion: [scarred]
    extra_features: [a scar on the right hand]
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 26}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-acro, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-jewl, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 56}}
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

Balden Estilgon is a 50-year-old man who stands 6'0" tall and is of heavy build, deep-chested from thirty years of filling halls with his voice. His fair skin is weathered by northern winters, his black hair hangs loose to his shoulders, and his green eyes are steady and unsmiling under a brow worn into deep lines. An old scar crosses the back of his right hand, and he holds that hand still when he recites.

# Dossier {#dossier}

Balden Estilgon is a sworn skald of [[affiliation-skaldscrcl|the Skalds' Circle]] living at [[place-aureliane|Aurelane]], in [[place-provenzrgn|Provénzia]], a [[lore-provenzianclt|Provénzian]] by birth and a skald by thirty years' training and service in the halls of the [[place-nrdlndsrgn|Nordlands]].

He was taken as an apprentice young and made the Circle's way, and he spent most of his life reciting in the halls of Nordland chieftains, where a skald is the hall's record and his recitation is evidence. He came back to Aurelane past forty with a voice that carries over a feast. Aurelane lives on its past, and its old families found that a man who would recite their lineages exactly as received, and would not improve them, was worth keeping. He has trained a handful of Provénzian apprentices. He does not compose to please, he holds that a story remembered wrongly is a story lost, and he has ended friendships over a line.

The high courts are full this season, and one suit has reached him. Two old houses are fighting over an inheritance, and one has asked that Balden, who keeps the family's recited record, be heard in evidence. No Provénzian court has ever taken a recitation as evidence, and the other party knows what the record says.

## Psyche

### Personality

Balden is grave, exact and unbending about the record, and slow with any composition of his own. He would rather recite a saga he holds true than write a new one he does not.

### Motivation

He wants the old stories kept exactly as they were given, because the Circle's first principle is the accuracy of memory and he has never found a reason to doubt it. He wants apprentices who will keep them the same way after him.

### Strengths

He is an experienced reciter with a powerful voice and a memory the old families trust.

### Weaknesses

He cannot be persuaded that a kindness is worth a false line, and the families who pay him know it.

## Social

### Companions

His few apprentices, and the archivists of the high courts, who share his respect for an exact record.

### Patrons

The old families of Aurelane, who want their lineages and their ancestors' deeds recited as received at weddings, funerals and feasts.

### Enemies

His own former apprentices, who compose the flattering verse he will not and have begun to take the patrons he taught them to sing for; and one patron whose grandfather's saga he recited accurately, in company.

### Affiliations

- **[[affiliation-skaldscrcl|The Skalds' Circle]]**: Balden is a sworn Skald, recognized in Aurelane under the Circle's standing with [[affiliation-tevran|the Tevran]].
- **[[affiliation-kngdmprvnz|Kingdom of Provénzia]]**: He is a Freeman of the crown.
- **[[affiliation-lusinia|Faith of Lusinia]]**: He keeps the festivals of the World-Weaver, as the singers of the south do.

## Plot Hooks

The Recital as Witness
: The inheritance suit has reached the high courts at Aurelane, and one party has asked that Balden recite the family's record in evidence, as a Nordland court would take it. The other party knows what the record says, and Balden has begun to be followed home.

A Line Amended
: An old family has asked Balden to leave out a verse of their lineage at a wedding, and offered a year's keep for it. The verse is accurate, and the bride's family has heard it before.

The False Saga
: A former apprentice has composed a saga of a patron's father that is finer than the truth and is being repeated in Aurelane as history. Balden holds the true record and nobody wants it.

The Gathering
: Balden has been summoned north to the Circle's yearly gathering to have his repertoire verified by collective recitation, as every sworn skald is in turn. A line he has recited for thirty years is disputed.
