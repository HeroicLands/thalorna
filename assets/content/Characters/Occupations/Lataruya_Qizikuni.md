---
shortcode: ltryqzkn
name: {full: Lataruya Qizikuni}
type: being
subType: npc
description: "A litigant of Sazumun who bears the Qizikuni name and pleads the Besikar banking house's inheritance cases in the city, and the cases of the families who cannot pay a house's fee."
tags: [administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, courtier]
  occupation: Litigant
  lore: []
  culture: taruzelianclt
  homes: [sazumun2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, marendas: {rank: 1}}
  gender: female
  species: humanflk
  born: "692.90"
  height: 5' 8"
  weight: 148 lbs
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: olive
    complexion: [sun_kissed]
    face_shape: long
    brow: arched
    mouth: thin
    extra_features: [a tattoo of a leaf on the wrist]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-pfmy, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 17}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-lock, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 13}}
    - {model: skill-taruzelilng, system: {masteryLevelBase: 80}}
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

Lataruya Qizikuni is a 27-year-old woman who stands 5'8" tall and is slender. She has a long face with broad cheekbones, a high forehead, and a strong jaw that leads to a pointed chin. Her wide-set dark brown eyes sit beneath arched brows and give her an open gaze. She has a strong nose and narrow lips. She has olive skin with a sun-kissed complexion. Her black hair is tucked beneath a kerchief, and a small leaf is tattooed on the inside of her wrist, where her cuff covers it in court.

# Dossier {#dossier}

Lataruya Qizikuni is a litigant of [[place-sazumun2|Sazumun]], a freewoman on the city's register who pleads family and inheritance cases in the city's courts. She bears the name of the [[affiliation-qizikuni|Qizikuni]], the oldest banking house of [[place-besikar2|Besikar]], which keeps litigants of its own name in other cities to see that its debts are honored, and in Sazumun the house's inheritance cases are hers. When a captain who sailed under a Qizikuni bond dies, or a merchant who borrowed from the house, she sees that what he owed passes to his heirs with the rest of what he left.

A debt a man dies owing is a debt his house inherits, and the courts of Sazumun hear such cases under the guilds' rules. Lataruya argues them well, and she argues the other side of them too, for widows and younger sons who come to her rooms off the temple streets without a house of their own to plead for them. The Qizikuni pay her for the first kind of case. She takes the second kind for what the family can give.

## Background

**The schooling.** She was schooled in rhetoric, mathematics and mercantile law, as children of the guild families are, and reads and writes the [[skill-merazanscrpt|Merazan script]] as fast as the clerks of the court.

**The courts.** She came to Sazumun to plead for the house and has stayed, because inheritance in a port city of 200,000 is never short of cases.

## Psyche

### Personality

Lataruya is warm, patient and persuasive, and she feels too much for her clients. She carries the weight of a case home and does not put it down until the verdict.

### Motivation

She wants each inheritance to pass fairly, the debt with the estate, and she wants the families who cannot pay a litigant to be heard as well as the houses that can.

### Strengths

She knows the law of inheritance and the guilds' rules thoroughly, she is a skilled mediator, and few can match her in argument or in reading a hostile witness.

### Weaknesses

Her two kinds of client are often on opposite sides of the same debt, and she has not found a way to serve both that leaves her easy.

## Social

### Enemies

The litigants who plead for the [[affiliation-hitusuni|Hitusuni]] have lost two inheritance cases to her and say in the courts that a Besikar name has no business in a Sazumun estate.

### Others

- **The Qizikuni's counting room in Besikar**, which sends her its cases by sealed letter and expects them won.
- **The families of the quays**, who send their neighbors to her rooms when a death leaves a debt behind.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Sazumun, entitled to petition the [[affiliation-grandcouncil|Grand Council]] through her state's councilors.
- **[[affiliation-marendas|Faith of Marendas]]**: one of the lay faithful, the Devran, who keeps the feasts of the god of knowledge without office in the temple.

## Plot Hooks

1. **The widow's bond.** A porter of the quays has died owing on a Qizikuni bond, and the house wants the debt from his widow. The house's letter names Lataruya to plead its case, and the widow has come to her rooms asking her to plead the other side.
2. **The receipt.** The widow of an outlawed captain of the [[affiliation-freecaptains|Free Captains]] asks Lataruya to claim his prize cargo stored in the war. The original receipt remains aboard [[being-nzzntrshn|Nazzuna Tarshuni]]’s coaster with the captains’ other receipts. Lataruya needs Nazzuna’s agreement before she can present it; the Hitusuni maintain that outlawry excludes the captain’s estate from protocol.
3. **The sealed letter.** A sealed letter from Besikar asks her, as the house's litigant of inheritance, how a seat in the [[place-houseoffactors|House of Factors]] could be made to pass from a head to his heir under the guilds' rules. Nobody in Sazumun has asked the question, and she is not to discuss it.
4. **The second will.** A factor of the slope has died leaving two wills, one under the seal of his guild and one in his own hand, and the second leaves his warehouse leases to a son whose name is on the black board at the foot of the House's stair.
