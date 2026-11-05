---
shortcode: pzsnkhdzm
name: {full: Pazasan Khidizum}
type: being
subType: npc
tags: [todo-warrior, draft, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Town Guard
  lore: []
  culture: taruzelianclt
  homes: [sazumun2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, arldnpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: 688.327
  height: 5' 11"
  weight: 146 lbs
  frame: medium
  appearance:
    eye_color: amber
    hair_color: dark_brown
    skin_color: medium
    complexion: [clear]
    extra_features: [scar through left eyebrow]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 27}}
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

Pazasan stands 5'11" with a medium build—rangy and loose-limbed, with the easy posture of a man comfortable in his own skin. His dark brown hair is thick and slightly curling, worn to his ears in the [[lore-taruzelianclt|Taruzelian]] style, and his dark amber eyes are sharp and calculating beneath a left eyebrow bisected by a thin white scar—the only visible evidence of a fight with smugglers on the quays five years past. His medium-toned skin is clear and unblemished, and his face is long and narrow, with a straight nose and a neatly trimmed beard that follows his jawline. He wears the coat of his guild's watch: a light padded tunic, leather bracers, and soft-soled boots designed for quiet movement on wooden dock planking. He carries a short sword, but his hands—long-fingered and precise—seem better suited to counting coins than drawing steel.

# Dossier {#dossier}

Pazasan was born into a Taruzelian merchant family but chose a watchman's coat over commercial life. At seventeen he joined the watch of the guild that keeps the warehouse quays of [[place-sazumun2|Sazumun]], where every quay and warehouse belongs to a guild and the guild's own watchmen keep it. The watch guards the bonded warehouses, three and four floors high behind the quays, checks their seals against the tally-men's counts, and stops theft. Most of the warehouses on his stretch of the quay belong to the [[affiliation-hitusuni|Hitusuni]], the great house of the city. The work had less prestige than he might have hoped, but it proved more interesting than his family's expectations. He discovered a talent for understanding how wealth actually moves through the city—not the official channels that appear on manifests but the real, complex networks that merchants use to avoid taxes, hide profits, and facilitate trade that exists outside the law.

At thirty-one, he has spent fourteen years on the warehouse quays and has become expert at detecting deception in shipping documentation. Most guards look at cargo manifests and verify quantities; Pazasan reads documentation and understands the gaps where illegal goods are hidden, where profits are being siphoned, where merchants are deceiving both the city and each other. His colleagues consider him overly focused on paperwork, but Pazasan understands that actual crimes are often ledger crimes—visible in numbers and documentation rather than in physical evidence.

The scar through his left eyebrow was earned in a fight with smugglers on the quays five years ago. He was investigating inconsistencies in a merchant's shipment documentation and encountered resistance that turned physical. He survived and pressed charges. The smugglers were prosecuted. The incident reinforced his understanding that the most dangerous criminals are the ones intelligent enough to hide their crimes in paperwork.

For years he has kept a record of the cargoes that leave the Hitusuni warehouses at night with their seals unbroken and their tariffs unpaid: dates, stores, bale-counts and the boats that took them, which fly no house's mark. This spring the record went missing from his lodgings. He does not know who took it, and the house's head, [[being-ashurazhitus|Ashuraz Hitusuni]], has begun saying at good dinners that Pazasan is corrupt.

## Psyche

### Personality

Pazasan is methodical and precise, finding satisfaction in the detective work of tracing crimes through accounts. He is not particularly charismatic and does not form close friendships easily. He is intelligent about the workings of trade and will spend hours analyzing financial patterns that others find boring. He has a dry sense of humor about human nature and the creative methods people use to engage in fraud.

### Motivation

Pazasan's primary motivation is understanding the true economic structure of his city—recognizing where wealth actually flows and how it moves. His secondary motivation is preventing the specific kind of crime that damages legitimate commerce through fraud. He is not motivated by ideology but by an appreciation for the intellectual puzzle of financial investigation.

### Strengths

His understanding of commercial documentation and accounts is thorough. He can recognize inconsistencies in manifests and accounts that others miss. He is patient with tedious investigation. His knowledge of merchant networks and relationships is comprehensive.

## Social

Pazasan holds an unusual place on the warehouse quays: respected by the merchants who value his honesty and feared by those engaged in fraud. Beyond the quays he is little known, and he prefers it.

## Companions

### Patrons

**Warehouse Master [Zazurush Bunituni]{.name data-type="being/npc"}**—The master of the guild watch on the warehouse quays. Zazurush has come to rely on Pazasan absolutely for maintaining order and preventing theft. He pays Pazasan substantially above standard guard wages and has made his position secure and protected from reassignment.

### Enemies

**Merchant Prince [[being-ashurazhitus|Ashuraz Hitusuni]]**—A wealthy merchant whose operation Pazasan has documented engaged in systematic smuggling and tax evasion. Ashuraz is intelligent and politically connected, and his operations are complex enough that legal prosecution has been difficult. Ashuraz recognizes Pazasan as a threat and has begun working to undermine him through allegations of corruption and bias.

## Plot Hooks

The Documentation Trap
: Pazasan discovers evidence in shipping manifests that suggests a major merchant operation is engaged in the trade in people—moving them through the port disguised as legitimate cargo. The documentation is methodical and almost open; the perpetrators were confident nobody would recognize the pattern. Pazasan assembles the evidence carefully. But when he reports it to Warehouse Master Zazurush, he learns that the operation is protected by men who sit in the [[place-houseoffactors|House of Factors]]. Zazurush warns him that pursuing the investigation will cost him his position and possibly his life. Pazasan can keep his post and his safety, or expose a serious crime.

The Corrupted Guard
: Pazasan discovers that a younger warehouse guard has been accepting payments from Merchant Prince Ashuraz in exchange for failing to document certain cargo movements. The guard is technically skilled and has been praised for his work. Pazasan faces a choice: arrest the guard, ending his service, or give him a chance to resign, which allows Ashuraz to continue fraud while preserving the guard's future.

The Warehouse Master's Deception
: Pazasan discovers that Warehouse Master Zazurush has been engaged in systematic fraud—falsifying inspection records to allow contraband through the warehouse in exchange for bribes. Zazurush has been Pazasan's patron and supporter. The discovery is devastating to him. He can report his patron or become complicit in corruption.

The Guard's Record
: Pazasan's record of the cargoes that left the Hitusuni warehouses untaxed has gone from his lodgings, and Ashuraz did not take it. Pazasan wants a party to find it before whoever has it decides what to do with it, and before Ashuraz's talk of corruption reaches his guild.

The Whistleblower's Risk
: A merchant's employee approaches Pazasan privately with documentation proving that the employee's employer (a major merchant) is engaged in systematic crime: smuggling, fraud, and likely involvement in the trade in people. The employee has stolen the documentation and is now in possession of evidence that proves the crime but is itself technically evidence obtained through theft. The employee is asking Pazasan to help her bring charges while protecting her identity. Accepting the evidence makes Pazasan complicit in the theft. Refusing means allowing serious crime to continue.
