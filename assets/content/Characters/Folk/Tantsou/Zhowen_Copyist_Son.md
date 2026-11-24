---
shortcode: zhowencpysn
name: {full: "Third Son of the Copyist of the Clan of Ink on Wet Paper, near Zhowen"}
type: being
subType: npc
description: "A copyist of Zhowen, twenty-nine, the third son of a copyist, who takes copying commissions in a city whose largest single trade is the paperwork of the imperial administration."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar]
  occupation: Copyist
  lore: [tsaihuo]
  culture: tantsouclt
  homes: [zhowen]
  affiliations: {tantsouempr: {rank: 3}}
  gender: male
  species: humanflk
  born: "690.087"
  died: null
  height: 5' 7"
  weight: 136 lbs
  frame: light
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: [ink on the fingers of the right hand]
  packFolder: ankaristantsou
  items:
    - {key: ctunic, model: armorgear-ctunic, name: "Plain clothing", kind: clothing}
    - {key: ltshoe, model: armorgear-ltshoe, kind: clothing}
    - {key: scribekit, model: miscgear-scribekit, name: "Copyist's kit", kind: miscgear}
    - {key: inkblk, model: miscgear-inkblk, kind: miscgear}
    - {key: parchment, model: miscgear-parchment, name: "Paper", kind: miscgear}
    - {key: kni, model: weapongear-kni, name: "Paper knife", kind: weapon}
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 22}}
    - {model: skill-tantsoulng, system: {masteryLevelBase: 80}}
    - {model: skill-tengchouscript, system: {masteryLevelBase: 70}}
    - {key: ctunic, model: sohl-sohl-armorgear-ctunic}
    - {key: ltshoe, model: sohl-sohl-armorgear-ltshoe}
    - {key: scribekit, model: sohl-sohl-miscgear-scribekit}
    - {key: inkblk, model: sohl-sohl-miscgear-inkblk}
    - {key: parchment, model: sohl-sohl-miscgear-parchment}
    - {key: kni, model: sohl-sohl-weapongear-kni}
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
      weight: {base: 136, calc: "(9 * str) + 50"}
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

He is a 29-year-old man who stands 5'7" tall and is of light build. There is ink on the fingers of his right hand that no washing takes out, and he carries his kit and his paper in a plain bag.

# Dossier {#dossier}

He is a copyist of [[place-zhowen|Zhowen]] and the third son of a copyist, and he names himself by his description: Third Son of the Copyist of the [Clan of Ink on Wet Paper]{.name data-type="affiliation/lineage"}, near Zhowen. The ministries, the chancellery and the offices of the Caste-Registrar and the census stand in the administrative centers on the two shores, and the [[lore-tanchei|Tanchei]] who staff them, with their clerks, copyists, seal-cutters and messengers, are the largest single trade in the city. He is one of the copyists.

## The Copyist

**The hand.** His hand is clean and quick, he copies exactly what is in front of him, and his commissions come to him by word of mouth.

**The seals.** A forged permission to cross the bridges to the enclave is the surest way to send a person to the archers on its walls, and he knows what a seal is worth.

:::secret {title="The Shadow Sect"}
He is the Embassy Liaison of [[affiliation-hazhao|The Shadow Sect]], the carrier of its arrangement with the [[affiliation-ordoarcanis|Thordimalon]] embassy in the capital. He is not a member: the Sect's members are escaped Wandwo, and he is one of its collaborators, a Sympathizer. He carries what passes between them: coded correspondence that needs both sender and recipient to read it correctly, the specific Wandwo texts transcribed for the Order's archivists, and intelligence on Tantsou court magic flowing westward. He is one of the intermediaries who know only a fraction of the picture, and he knows none of the Sect's members. The exchanges are held at sites with no permanent records.

Above him stands the small unit of the Sect's most trusted members that manages the arrangement and keeps its information asymmetries balanced, and above them the senior leadership known to fewer than a dozen members, of whom he knows nothing. For the Sect, exposure means the imperial identification of every member ever associated with it and the ritual erasure of the [[affiliation-wansouzhuo|Ministry of Final Account]]. For the embassy, it means expulsion and, for the agents implicated, trial before an imperial tribunal that does not recognize diplomatic immunity for acts of magical heresy.
:::

## Psyche

### Personality

He is quiet and exact, and he keeps no paper he does not need.

### Motivation

He wants his commissions to keep coming and his hand to be known as one that copies exactly what is in front of it.

### Strengths

He reads the hands of the offices as easily as his own, and nobody looks twice at a copyist carrying papers.

### Weaknesses

A copyist lives on commissions, and every commission he turns away goes to another shop on the shore.

## Social

### Family

- His father, a copyist of the Clan of Ink on Wet Paper.

### Affiliations

- **[[affiliation-tantsouempr|Empire of Tantsou]]**: of the [[lore-tsaihuo|Tsaihwo]].

:::secret {title="The Sect"}
**The Shadow Sect**: Embassy Liaison, a Sympathizer and collaborator outside its membership, who knows none of its members.
:::

## Plot Hooks

1. **The extra mark.** A copy he made for a household of the shore comes back to it with a calligraphic mark the household cannot read, and its head wants a party to learn who added it and why.
2. **The ministry's question.** Officers of the [[affiliation-wansouzhuo|Ministry of Final Account]] are seeking a runaway [[lore-wanduo|Wandwo]], and they are asking the copyists of the shore what papers have passed through their hands this season.
3. **The watched compound.** An embassy lodges in the compound the chancellery assigns it and keeps to it until it is summoned, and a servant of that compound wants a party to learn why one copyist of the shore is let in when others are not.
