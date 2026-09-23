---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Grácena Castírenna
  title: ""
  given: Grácena
  clan: Castírenna
  home: ""
  aliases: []
packFolder: aureldiatarvenia
shortcode: gracncstrn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - tarvenanclt
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 40
  birthday: 680/7/21
  height: 1.82
  weight: 80
  frame: medium
  appearance:
    eye_color: green
    hair_color: dark_blonde
    skin_color: olive
    complexion: tanned
    extra_features:
      - missing tooth
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 30 } }
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

Grácena is a tall woman — 6'0" — with a medium build that has been hardened by twenty-one years of gate watch duty into something resembling old leather over iron. Her dark blonde hair is shot through with gray and worn in a single heavy braid coiled at the nape of her neck. Her green eyes are arresting — bright and sharp beneath sun-darkened brows — and they miss nothing that passes through her gate. Her olive skin is deeply tanned, lined at the eyes and mouth, and a missing lower tooth on the right side gives her smile a slightly rakish quality that she has never bothered to correct. She wears the Montaña gate watch uniform: a leather surcoat over quilted padding, leather knee boots, a broadsword on her hip, and a heavy iron ring of gate keys that jangles with every step.

# Dossier {#dossier}

Grácena was born in the Montaña city to a family of gate keepers—her father managed the southern gates for thirty years, and his father before him. The position is not particularly prestigious but requires the kind of attention to detail and integrity that few people maintain. Grácena inherited both the job and the work ethic. She joined the gate watch formally at nineteen and has served there for twenty-one years.

The work of the gate watch is different from street patrol. It requires the ability to make snap judgments about people crossing the gates—determining whether they represent threat, whether they are attempting to smuggle contraband, whether their papers are authentic. Grácena developed an uncanny ability to read people and detect deception. The other guards say she can smell lies, though the truth is less mystical: she notices the flicker of a face, inconsistencies in stories, the physical signs of nervousness or concealment.

At forty years old, she is the senior watch commander for the Montaña gates and has trained most of the younger guards in current service. She is missing a tooth from a smuggler's elbow during a confrontation years ago—a physical reminder that gate work can become violent. She has not smiled broadly since the incident, a change born more from self-consciousness than pain.

## Psyche

### Personality

Grácena is direct and skeptical, approaching most people with the assumption that they are attempting some form of deception. This outlook makes her seem cold to those who do not know her, but it is actually a refinement born from years of learning that almost everyone lies about something. She is fair and will adjust her skepticism if evidence warrants it, but initial assumption of guilt is her default. She is not cruel, but she is not friendly.

### Motivation

What drives Grácena first is keeping threats out of the city. She takes this responsibility seriously, perhaps more seriously than most, because her family's tradition of integrity is her own. What drives her second is proving that a woman can be as good at guard work as any man. She has met with contempt for her sex throughout her service and has worked deliberately to exceed expectations.

### Strengths

Her ability to detect deception is rare. She is physically capable and experienced in restraining a prisoner. She understands the city's trade well enough to recognize what people are likely smuggling and why. Her judgment in a crisis is sound and often brilliant.

## Social

Grácena is respected and feared alike. She has few friends outside her work family and prefers it that way. Her gender has been less of an obstacle than she anticipated, partially because she established competence early and refused to accept limitations.

## Companions

### Patrons

**City Governor Alexios Monteros** — The official administrator of Montaña city. Alexios has held power for twelve years and has come to rely on Grácena's intelligence about who is entering the city and what they are bringing with them. He has supported her advancement in the gate watch and has made it clear that she can request assistance for major operations.

### Enemies

**Smuggling Magnate Rodion Carex** — A merchant of questionable legitimacy who has been running contraband through Montaña's gates for decades. Grácena has prevented his operations repeatedly, seized contraband, even temporarily arrested his agents. But Carex is wealthy enough to work through the courts, and his seized property has been returned through appeals. The man is her direct rival, and they have come to respect and deeply resent each other in the same degree.

## Plot Hooks

1. **The Impossible Choice** — Grácena detects a significant smuggling operation coming through the gates: weapons destined for what she later learns is a separatist faction. She has evidence to arrest the operatives and seize the weapons. But investigation reveals that the separatists are actually a group of refugees fleeing political persecution in a neighboring state, and the weapons are for self-defense against those pursuing them. Arresting them sends them back to execution. Allowing them through violates the city's neutrality policy. The law and her conscience point opposite ways.

2. **The Traitor in Her Ranks** — Grácena discovers that one of her trusted subordinates, **Guard Captain Helvio**, has been accepting bribes from Rodion Carex in exchange for allowing contraband through the gates. Helvio is skilled and has been praised for his work. The betrayal is personal as well as a breach of duty. Grácena can arrest Helvio, ending his service in disgrace, or give him a chance to resign and disappear, which allows Carex to win this round but preserves the life of a man who made a terrible mistake.

3. **The Governor's Secret** — City Governor Alexios approaches Grácena privately with a request: allow a specific individual to enter the city without inspection and with minimal documentation. The individual is a foreign agent with whom Alexios is secretly negotiating. Grácena is being asked to compromise her integrity and position for the governor's political ends. Refusing means losing her patron and probably her position. Accepting makes her complicit in whatever political scheme Alexios is conducting.

4. **The Carex Escalation** — Rodion Carex makes a bold move: he approaches Grácena and offers her a bribe to allow his next operation to pass. The bribe is substantial and the offer is explicitly disrespectful—Carex is wagering that even someone as incorruptible as Grácena has a price. When she refuses, he becomes publicly hostile and spreads rumors that she is incompetent and allowing weapons into the city (the opposite of the truth). He uses his wealth to lodge formal complaints against her with the city council. Grácena has to defend her name against someone wealthy enough to do political damage.

5. **The Gate Captain's Illness** — A younger gate captain under Grácena's command becomes severely ill and is unable to work. The illness is costly to treat and the captain cannot afford the expense. Grácena has saved money throughout her life and offers to pay for the treatment. The captain gratefully accepts. Weeks later, Grácena discovers that the captain is actually Rodion Carex's illegitimate son, and Carex has deliberately arranged the illness to place the young man in a position of debt to Grácena. Now Carex is using the relationship to pressure Grácena into allowing contraband. Grácena has been manipulated into a position where refusing helps neither the captain nor herself.
