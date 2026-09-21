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

Grácena is a tall woman — 6'0" — with a medium build that twenty-one years of gate duty have hardened into something like old leather over iron. Her dark blonde hair is shot with grey and worn in one heavy braid coiled at the nape. Her green eyes are bright and sharp under sun-darkened brows and miss nothing that comes through her gate. Her olive skin is deeply tanned and lined at the eyes and mouth, and a missing lower tooth on the right gives her smile a rakish cast she has never bothered to correct. She wears the Montaña gate watch uniform — a leather surcoat over quilted padding, leather knee boots, a broadsword at her hip — and a heavy iron ring of gate keys that announces her a corridor away.

# Dossier {#dossier}

Everything that enters Montaña by the southern gates passes under Grácena's eye, and she assumes it is lying to her until it proves otherwise. Gate work is not street patrol. It is a run of snap judgements about strangers — a threat or not, contraband or not, papers real or not — and she has made them for twenty-one years. Her colleagues say she can smell a lie. The truth is plainer: she watches the face, catches the story that does not match itself, sees the hands and the sweat of a man carrying something he should not.

The gate is a family post. Her father managed the southern gates for thirty years and his father before him; it is not a prestigious job, and it needs an attention and an honesty that few people keep up for a lifetime. Grácena inherited both the job and the habit. She joined the gate watch formally at nineteen.

At forty she is senior watch commander for the Montaña gates and has trained most of the younger guards now on duty. The tooth she lost to a smuggler's elbow years ago — a reminder that the gate turns violent without warning. She has not smiled broadly since, and it is self-consciousness rather than pain.

## Psyche

### Personality

Direct and sceptical. She approaches nearly everyone on the assumption that they are attempting some deception, which makes her seem cold to strangers and is in fact a conclusion drawn from years of watching nearly everyone lie about something. She is fair, and will drop the suspicion when the evidence warrants; but guilt is her starting position. Not cruel, and not friendly.

### Motivation

To keep threats out of the city. She takes it more seriously than most, because the family's honesty is something she has made her own. Under that is the need to show that a woman can do this work as well as any man; she has met the doubt her whole working life and has made a point of exceeding what was expected.

### Strengths

Her eye for a lie is the best on the gates. She is physically capable and long practised in restraint. She knows the city's trade well enough to guess what a man is likely smuggling and why. In a crisis her judgement is sound, and now and then brilliant.

## Social

Grácena is respected and feared in about equal parts. She has few friends outside the watch and prefers it that way. Being a woman has been less of an obstacle than she expected, partly because she was plainly competent early and refused to accept any limit set on her.

## Companions

### Patrons

**City Governor Alexios Monteros** — The official administrator of Montaña. Alexios has held power for twelve years and has come to depend on what Grácena knows about who is entering the city and what they bring. He has backed her rise in the gate watch and made it clear she can call on him for help in a major operation.

### Enemies

**Smuggling Magnate Rodion Carex** — A merchant of doubtful legitimacy who has run contraband through Montaña's gates for decades. Grácena has broken his operations again and again, seized his goods, arrested his agents. Carex is rich enough to work the courts, and what she seizes comes back to him on appeal. He is her direct opponent, and the two have arrived at a respect and a resentment of roughly the same size.

## Plot Hooks

1. **The Impossible Choice** — Grácena picks up a large smuggling run coming through the gates: weapons, bound for what she later learns is a separatist faction. She has enough to arrest the couriers and take the arms. Then she learns that the separatists are refugees fleeing persecution in a neighbouring state and the weapons are for their own defence against the men hunting them. Arrest them and they go back to their executioners; let them through and the city's neutrality is broken.
2. **The Traitor in Her Ranks** — Grácena discovers that one of her trusted subordinates, **Guard Captain Helvio**, has been taking Rodion Carex's money to let contraband through. Helvio is skilled and has been praised for his work. The betrayal is personal as well as official. Arrest him and finish him, or let him resign and disappear, which hands Carex the round and spares a man who made one terrible mistake.
3. **The Governor's Secret** — City Governor Alexios comes to Grácena privately with a request: let one particular individual into the city without inspection and with next to no papers. The individual is a foreign political asset Alexios is secretly negotiating with. She is being asked to compromise her honesty and her post for the governor's own ends. Refuse and lose her patron, and probably her position; agree and be complicit in whatever he is doing.
4. **The Carex Escalation** — Rodion Carex makes a bold move: he approaches Grácena himself and offers her money to let his next run through. The sum is large and the offer is deliberately insulting — a wager that even she has a price. When she refuses he turns openly hostile, spreads the story that she is incompetent and letting weapons into the city (the reverse of the truth), and uses his wealth to lodge formal complaints against her with the city council. She has to defend her name against a man rich enough to do real political damage.
5. **The Gate Captain's Illness** — A younger gate captain under her command falls seriously ill and cannot work. The treatment is costly and beyond him. Grácena has saved all her life and pays for it, and he takes the money gratefully. Weeks later she learns that he is Rodion Carex's illegitimate son, and that Carex arranged the illness to put the young man in her debt. Now Carex is using the tie to press her to let contraband through, and she is in a position where refusing helps neither the captain nor herself.
