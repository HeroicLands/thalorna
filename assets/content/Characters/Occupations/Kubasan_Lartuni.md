---
shortcode: qbsnlrtn
name: {full: Kubasan Lartuni}
type: being
subType: npc
description: "A scribe of Yamuzel's harbor streets who writes crews' articles, bills of lading, letters and the veterans' claims to their promised land, and writes too many of them for nothing."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar]
  occupation: Scribe
  lore: []
  culture: taruzelianclt
  homes: [yamuzel2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, marendas: {rank: 1}}
  gender: male
  species: humanflk
  born: 690.76
  height: 6'
  weight: 159 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: medium
    complexion: [scarred]
    extra_features: [a scar on the chin]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 15}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 15}}
    - {model: skill-taruzelilng, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 65}}
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

Kubasan Lartuni is a 29-year-old man who stands 6'0" tall and is of moderate build. He has an oval face with sharp cheekbones, a prominent forehead, and a sharp jaw that leads to a strong chin, with a small white scar across it. His bright brown eyes sit beneath straight brows, lending him a lively gaze. An aquiline nose and full lips complete his features. He has medium-toned skin with an olive-toned complexion. His brown hair is tied in a low tail, and the first two fingers of his right hand are stained with ink to the second joint.

# Dossier {#dossier}

Kubasan Lartuni is a scribe of [[place-yamuzel2|Yamuzel]], a freeman on the city's register who keeps a writing table in the harbor streets, between the wall of the [Naval Yards]{.name data-type="place/site"} and the foot of the cliff. He writes what the waterfront cannot write for itself: the articles a crew signs at the [[affiliation-corsairleg|Corsair League]]'s hall at the head of the mole, bills of lading for the foreign masters waiting in the roads for a convoy, letters home for sailors waiting in the taverns for a ship, and the statements a robbed shopkeeper carries to the marine post at the head of his street. He writes the [[skill-merazanscrpt|Merazan script]] with every vowel pointed, as a bill should be, and he keeps a fair copy of everything he writes.

Much of his custom comes down from the [Veterans' Quarter]{.name data-type="place/site"} on the slope above, where the halls bring him the veterans' claims to the land, the guild places and the pensions they were promised after the war. He writes those for a copper, or for nothing, and the quarter knows it.

## Background

**The table.** Kubasan learned his letters and the merchants' reckoning at a writing table in the harbor streets, and took the table over when its old scribe's eyes failed.

**The war.** He was a young man when the war of independence came to the narrows, and he spent the war writing muster rolls and ration tallies for the yards while the fleet was built. He has written for the men of the fleet ever since.

## Psyche

### Personality

Kubasan is friendly, open-handed and easy to talk to. He cannot name a fair price to a man who cannot pay it, and he lets a debtor talk him out of a debt.

### Motivation

He wants things written down truly and kept: a promise made to a crew or a veteran is worth what its copy is worth, and he means every copy to be good.

### Strengths

He has a quick, clean hand, a head for figures and a good memory for faces. The hosts of the harbor taverns send their customers to him, and the halls of the quarter trust his copies.

### Weaknesses

He is poor, behind on the rent of his table, and too generous to mend it.

## Social

### Enemies

He has no enemy of his own. The clerks of the [[affiliation-tanaduni|Tanaduni]], whose house leases the southern terraces the veterans claim, know his hand from the veterans' claims and do not like to see it.

### Others

- **The halls of the Veterans' Quarter**, which bring him their claims and petitions and pay him in what they have.
- **The tavern hosts of the harbor streets**, who send him sailors with letters to write and captains with articles to copy.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Yamuzel, entitled to petition the [[affiliation-grandcouncil|Grand Council]] through his state's councilors.
- **[[affiliation-marendas|Faith of Marendas]]**: one of the lay faithful, the Devran, who keeps the god of knowledge's feasts without office in the temple.

## Plot Hooks

1. **The terraces.** The veterans ploughing the marked plots on [[place-khamisar|Khamisar]]'s southern terraces ask Kubasan to put their claim to the land in proper form before the marines clear them for the [[lore-fleetreview|Fleet Review]]. A claim needs the promise it rests on, and nobody in the quarter has a copy of it.
2. **The shipwright's letter.** The shipwright of the yards who did not come back through the gate after the evening bell had Kubasan write a letter for him the week before, to a man at an inn on the switchback road whose name he would not give. Kubasan has the fair copy.
3. **The unread clause.** A captain of the League brings him a crew's articles to copy fair, and one clause in them gives the owners the crew's share of any prize taken in the narrows. Kubasan wants it read aloud before the crew signs, and the captain does not.
4. **The rent.** A clerk of the Tanaduni offers to pay a year of the rent on Kubasan's table in return for a fair copy of every claim the quarter brings him before it goes up to the height.
