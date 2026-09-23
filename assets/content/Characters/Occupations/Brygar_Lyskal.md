---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Brýgar Lýskal
  title: ""
  given: Brýgar
  clan: Lýskal
  home: ""
  aliases: []
packFolder: aureldiaprovenzia
shortcode: brygrlyskl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - provenzianclt
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: male
  species: null
  age: 27
  birthday: 693/4/6
  height: 1.76
  weight: 80
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: blonde
    skin_color: dark_brown
    complexion: ruddy
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 47 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 24 } }
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

Brýgar stands 5'9" with a heavy, stocky frame – broad in the chest and thick in the arms, built like a man who has lifted barrels since childhood. His blonde hair is thick and slightly unkempt, and his blue eyes are bright and friendly in a ruddy, dark-complexioned face that flushes easily when he laughs, which is often. His features are round and open, with a broad nose and a wide mouth that seems built for smiling. He is not a handsome man in any refined sense, but there is a warmth to his appearance that puts people at ease. He wears the [[place-chastelclr|Chastèlclair]] merchant-quarter guard uniform – padded tunic, leather bracers, short sword and cudgel at his belt – and has a habit of rolling his sleeves up regardless of weather, exposing thick forearms tanned dark from years of outdoor patrol.

# Dossier {#dossier}

Brýgar was born and raised in the Chastèlclair's merchant quarter, the son of a cloth merchant of modest success. He knows every street, every business, every family in his assigned patrol area because they are literally his neighborhood. He joined the guard at twenty-two not out of ambition but out of practical recognition that his community needed functional policing and he could provide it. He is suited for the work by temperament and by knowledge rather than by any sense of profound calling.

At twenty-seven, he has been working the merchant quarter for five years. He is liked by the business owners because he grew up among them and understands their concerns. He is respected by younger people because he does not act superior to them. He knows approximately who is breaking what laws and has developed a sophisticated practice of managing minor crime while preventing serious violence. He has learned which merchants are skimming taxes (which he ignores), which are engaging in genuine deception (which he addresses), and which represent actual threats to community stability (which he works to eliminate).

His frame is heavy but not weak – he moves like a man comfortable in his own body, and his blonde hair and ruddy complexion mark him as local. He is the kind of guard that small communities need: rooted in place, known to everyone, predictable but not rigid.

## Psyche

### Personality

Brýgar is friendly and genuinely interested in the people in his patrol area. He knows the names of merchants, their families, their current struggles. This makes him seem soft to more aggressive guards, but it is actually sophisticated community policing. He is not easily angered and will engage in lengthy conversation to resolve issues rather than resorting to physical enforcement. He has a good-natured sense of humor and is well-liked.

### Motivation

Brýgar's primary motivation is simply maintaining his community's stability and safety. He has no ambitions for advancement or external validation. His secondary motivation is proving that effective policing is possible without authoritarianism or corruption. He genuinely believes that knowing people and treating them with dignity is more effective than force.

### Strengths

His knowledge of his patrol area is absolutely comprehensive. His ability to de-escalate conflict is exceptional. He is physically capable and would be a dangerous fighter if necessary, though he avoids confrontation. His emotional intelligence is significant.

## Social

Brýgar is fully integrated into his community in ways that other guards are not. He is neighbor, friend, and authority figure all at once – a role that is easier to perform for him than for people outside his community.

## Companions

### Patrons

**Merchant Councilor Davine Artois** – The senior merchant representative on the city council. Davine's business is in the merchant quarter and he knows Brýgar well. He has become a genuine patron, using his political influence to ensure Brýgar's assignment remains stable and that the merchant quarter receives adequate resources.

### Enemies

**Loan Merchant Kessian** – A wealthy financier who moved into the merchant quarter two years ago and has begun operating a predatory lending operation. Kessian's loans are technically legal but designed to fail, allowing him to seize properties and businesses when debtors cannot pay. Brýgar has watched Kessian systematically destroy established merchants, including families Brýgar has known his entire life. Kessian's operation is technically legal, which makes Brýgar's opposition to him ineffective. Kessian is aware of Brýgar's hostility and views him as an irrelevant nuisance.

## Plot Hooks

1. **The Predator's Trap** – Brýgar realizes that Kessian is targeting merchant families specifically and has learned to use his knowledge of their personal circumstances to craft loans that will inevitably fail. Kessian will own half the merchant quarter within a year. Brýgar attempts to warn the merchants, but they are often desperate enough that Kessian's loans appear to be their only option. Brýgar discovers that Kessian's methods are technically legal, though obviously immoral. He can attempt to lobby the city council for new regulations, but that will take months while Kessian continues destroying lives. He can warn merchants more aggressively, but risks seeming biased or interfering with legitimate business. He can attempt to discredit Kessian through investigation, but Kessian has left no clear legal violations.

2. **The Daughter's Mistake** – Brýgar's childhood friend, **Merchant Torvin**, approaches him privately with a desperate problem. Torvin's daughter has fallen in love with Kessian and plans to marry him. Torvin has recognized that the marriage is Kessian's plan to absorb Torvin's business entirely by becoming family. Torvin begs Brýgar to prevent the marriage. Brýgar is being asked to interfere in personal relationships and family business, which violates his principles about community policing. But he also knows that Torvin is right about Kessian's intentions, and that the marriage will destroy both the daughter and the business.

3. **The Blackmail** – Kessian approaches Brýgar with an offer: he will stop his predatory operations in the merchant quarter if Brýgar will use his position to harass a specific rival merchant out of the district – someone Kessian wants access to the business of. The offer is explicit corruption. But Brýgar recognizes that accepting would stop Kessian's predation against people he cares about. The rival merchant that Kessian wants removed is actually engaged in minor tax evasion that Brýgar has overlooked. Removing him would not destroy lives the way Kessian's lending has.

4. **The Community Betrayal** – Brýgar discovers that Merchant Councilor Davine, his patron, has been secretly working with Kessian. Davine's business was struggling, and Kessian provided financial support in exchange for Davine's use of political influence to keep regulations loose. Davine has literally been enabling the predator. Brýgar is devastated and feels betrayed. But publicly exposing Davine will destroy him professionally and politically, which would weaken Brýgar's ability to actually help the merchant quarter.

5. **The Accidental Leverage** – Brýgar discovers something about Kessian's personal life – a secret relationship, hidden illegitimate children, something that would cause him personal damage if exposed. Brýgar is suddenly in possession of leverage that could force Kessian out of the merchant quarter. But using it would make Brýgar into the kind of officer he has always opposed – someone willing to manipulate personal secrets for political advantage.
