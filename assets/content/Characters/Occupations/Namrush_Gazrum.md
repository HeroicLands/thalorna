---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Namrûsh Gazrûm
  title: ""
  given: Namrûsh
  clan: Gazrûm
  home: ""
  aliases: []
packFolder: midhalionharad
shortcode: namrshgzrm
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - haradianclt
    - commonerrnk
  homes:
    - haradregin
  affiliations:
    - cnfdrtnhrdnstts
  gender: male
  species: null
  born: 688/11/23
  height: 1.8
  weight: 66
  frame: medium
  appearance:
    eye_color: dark_amber
    hair_color: dark_brown
    skin_color: medium
    complexion: clear
    extra_features:
      - scar through left eyebrow
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 27 } }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

Namrûsh stands 5'11" with a medium build—rangy and loose-limbed, with the easy posture of a man comfortable in his own skin. His dark brown hair is thick and slightly curling, worn to his ears in the Haradian style, and his dark amber eyes are sharp and calculating beneath a left eyebrow bisected by a thin white scar—the only visible evidence of a dockside altercation three years past. His medium-toned skin is clear and unblemished, and his face is long and narrow, with a straight nose and a neatly trimmed beard that follows his jawline. He wears the warehouse district guard uniform: a light padded tunic, leather bracers, and soft-soled boots designed for quiet movement on wooden dock planking. He carries a short sword, but his hands—long-fingered and precise—seem better suited to counting coins than drawing steel.

# Dossier {#dossier}

Namrûsh was born into a Haradian merchant family but chose military service over commercial life. At seventeen, he joined the port warehouse district guard, a position that monitors cargo movement, prevents theft, and enforces commercial regulations. The work had less prestige than he might have hoped, but it proved more interesting than his family's expectations. He discovered a talent for understanding how wealth actually moves through the city—not the official channels that appear on manifests but the real, complex networks that merchants use to avoid taxes, hide profits, and facilitate trade that exists outside the law.

At thirty-two, he has spent fifteen years in warehouse district work and has become expert at detecting deception in shipping documentation. Most guards look at cargo manifests and verify quantities; Namrûsh reads documentation and understands the gaps where illegal goods are hidden, where profits are being siphoned, where merchants are deceiving both the city and each other. His colleagues consider him overly focused on paperwork, but Namrûsh understands that actual crimes are often ledger crimes—visible in numbers and documentation rather than in physical evidence.

The scar through his left eyebrow was earned during a confrontation with smugglers five years ago. He was investigating inconsistencies in a merchant's shipment documentation and encountered resistance that turned physical. He survived and pressed charges. The smugglers were prosecuted. The incident reinforced his understanding that the most dangerous criminals are the ones intelligent enough to hide their crimes in paperwork.

## Psyche

### Personality

Namrûsh is methodical and precise, finding satisfaction in the detective work of tracing crimes through accounts. He is not particularly charismatic and does not form close friendships easily. He is intelligent about the workings of trade and will spend hours analyzing financial patterns that others find boring. He has a dry sense of humor about human nature and the creative methods people use to engage in fraud.

### Motivation

Namrûsh's primary motivation is understanding the true economic structure of his city—recognizing where wealth actually flows and how it moves. His secondary motivation is preventing the specific kind of crime that damages legitimate commerce through fraud. He is not motivated by ideology but by an appreciation for the intellectual puzzle of financial investigation.

### Strengths

His understanding of commercial documentation and accounts is thorough. He can recognize inconsistencies in manifests and accounts that others miss. He is patient with tedious investigation. His knowledge of merchant networks and relationships is comprehensive.

## Social

Namrûsh occupies an unusual role within the port warehouse district—respected by merchants who value his honesty and feared by merchants engaged in fraud. He is barely noticed by the broader city, content with his relative invisibility.

## Companions

### Patrons

**Warehouse Master Tariq Sindros**—The administrator of the port warehouse district. Tariq has come to rely on Namrûsh absolutely for maintaining order and preventing theft. He pays Namrûsh substantially above standard guard wages and has made his position secure and protected from reassignment.

### Enemies

**Merchant Prince Hallak al-Sarif**—A wealthy merchant whose operation Namrûsh has documented engaged in systematic smuggling and tax evasion. Hallak is intelligent and politically connected, and his operations are complex enough that legal prosecution has been difficult. Hallak recognizes Namrûsh as a threat and has begun working to undermine him through allegations of corruption and bias.

## Plot Hooks

1. **The Documentation Trap**—Namrûsh discovers evidence in shipping manifests that suggests a major merchant operation is engaged in the trade in people—moving them through the port disguised as legitimate cargo. The documentation is methodical and almost open; the perpetrators were confident nobody would recognize the pattern. Namrûsh assembles the evidence carefully. But when he reports it to Warehouse Master Tariq, he learns that the operation is being protected by senior government officials. Tariq warns him that pursuing the investigation will cost him his position and possibly his life. Namrûsh can keep his post and his safety, or expose a serious crime.

2. **The Corrupted Guard**—Namrûsh discovers that a younger warehouse guard has been accepting payments from Merchant Prince Hallak in exchange for failing to document certain cargo movements. The guard is technically skilled and has been praised for his work. Namrûsh faces a choice: arrest the guard, ending his service, or give him a chance to resign, which allows Hallak to continue fraud while preserving the guard's future.

3. **The Warehouse Master's Deception**—Namrûsh discovers that Warehouse Master Tariq has been engaged in systematic fraud—falsifying inspection records to allow contraband through the warehouse in exchange for bribes. Tariq has been Namrûsh's patron and supporter. The discovery is devastating to him. He can report his patron or become complicit in corruption.

4. **The Ledger Conspiracy**—Namrûsh discovers a pattern across multiple merchants that suggests they are working together to manipulate prices and monopolize certain goods. The conspiracy is probably illegal but is technically complex, and the merchants involved have political protection. Namrûsh is being pressured by his superiors to either stop investigating (because it involves politically protected people) or to rapidly close the case with insufficient evidence.

5. **The Whistleblower's Risk**—A merchant's employee approaches Namrûsh privately with documentation proving that the employee's employer (a major merchant) is engaged in systematic crime: smuggling, fraud, and likely involvement in the trade in people. The employee has stolen the documentation and is now in possession of evidence that proves the crime but is itself technically evidence obtained through theft. The employee is asking Namrûsh to help her bring charges while protecting her identity. Accepting the evidence makes Namrûsh complicit in the theft. Refusing means allowing serious crime to continue.
