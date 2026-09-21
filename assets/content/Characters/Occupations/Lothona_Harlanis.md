---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Lôthônâ Hârlânis
  title: ""
  given: Lôthônâ
  clan: Hârlânis
  home: ""
  aliases: []
packFolder: midhalionvylaria
shortcode: lothnhrlns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: female
  species: null
  age: 35
  birthday: 685/12/19
  height: 1.73
  weight: 72
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: chestnut
    skin_color: tanned
    complexion: freckled
    extra_features:
      - calloused knuckles
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 22 } }
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

Lôthônâ stands 5'8" with a solid, medium build that carries its weight in the shoulders and arms. Her chestnut hair is kept practical — tied back and pinned when on duty, falling to her shoulders when loose. Her dark brown eyes are direct and unblinking, the kind that make petty criminals confess before she has asked a question. Her tanned skin is freckled across the bridge of her nose and cheeks, and her face is broad and strong-featured, with a firm jaw and a mouth that settles naturally into a skeptical line. Her knuckles are visibly calloused from years of hand-to-hand training. She wears the standard [[affiliation-provinclys|Alyssa]] guard kit — padded tunic over linen, leather bracers, a short sword and truncheon on her belt — with the settled ease of a woman who stopped thinking about her uniform a decade ago.

# Dossier {#dossier}

Lôthônâ joined the Alyssa docks patrol at seventeen, same as her older brother Brákôs, though she went to the urban garrison while he went to garrison cavalry. She spent her first years breaking up merchant-crew brawls and maintaining order in the chaotic marketplace of the docks. The work required learning to read violence instantly—to recognize which fights would de-escalate with a guard's presence and which would require actual intervention. She became exceptionally good at this judgment.

By her late twenties, she was assigned as supervisor of the docks night patrol—the role that placed her between the guard station hierarchy and the actual street-level enforcement. The docks at night are their own kind of violent: smuggling, theft, prostitution, the occasional murder disguised as drunken accident. She has dealt with all of it. Her hands are calloused from hauling drunks and breaking up fights, and she carries herself with the wariness of someone who has learned that almost anyone will become dangerous if cornered.

At thirty-five, she remains in the same post—not through lack of advancement opportunity but through deliberate choice. She declined promotion twice, preferring the actual work of policing to the administrative requirements of higher ranks. She knows the docks better than anyone else in the guard, and the merchants and dock workers know her as someone who is fair but incorruptible.

## Psyche

### Personality

Lôthônâ is tough without being cruel, and fair without being soft. She speaks plainly and expects straightforward communication. She has no patience for excuses and will call out deception immediately. But she is genuinely concerned for the welfare of the people on her watch, even when they are criminals; she will arrest someone with regret rather than satisfaction. She has a dark sense of humor born from years of dealing with urban violence.

### Motivation

Lôthônâ's primary motivation is maintaining order in a chaotic environment while protecting the people under her watch from the worst predators. She has no illusions that she can eliminate crime; she simply wants to prevent the unnecessary suffering that comes when violence goes unopposed. Her secondary motivation is proving that she earned her position through competence rather than family connection (her brother's presence in the military creates assumptions about favoritism).

### Strengths

Her ability to de-escalate violence is exceptional and earned through actual experience. She is physically strong and skilled with her weapons, though she prefers avoiding combat. She understands the docks' economic and social structures better than any single merchant or dock master. She is genuinely intelligent and strategically minded about community policing.

## Social

Lôthônâ occupies an unusual role: she is respected by dock workers and merchants both, accepted into neither world fully. Her gender initially made authority more difficult; it has slowly become an advantage as she proved herself capable of managing it effectively.

## Companions

### Patrons

**Dock Master Sevenros** — The official coordinator of dock operations for Alyssa's harbor authority. Sevenros has worked with Lôthônâ for twelve years and respects her judgment completely. He has authority to hire additional guards and has frequently requested Lôthônâ for sensitive operations, providing her with pay supplements and job security.

### Enemies

**Smuggling Kingpin Verath Carlock** — A criminal leader who coordinates much of the black-market operation through the docks. Carlock is intelligent and careful, leaving minimal evidence for legal prosecution. Lôthônâ knows he is guilty of everything from weapons smuggling to slavery facilitation, but has never been able to build a prosecutable case. Carlock has made it clear that he respects Lôthônâ professionally while making equally clear that he will destroy her if she becomes too much of an obstacle.

## Plot Hooks

1. **The Corruption Ascension** — Lôthônâ discovers that a younger guard in her patrol unit has been taking bribes from Verath Carlock in exchange for allowing specific contraband to pass through checkpoints. The guard is the nephew of a powerful merchant family with political connections. When she tries to arrest him, she is blocked by Dock Master Sevenros, who reveals that the young guard's family has just secured a major contract with the harbor authority. Sevenros is trapped between institutional pressure and his loyalty to Lôthônâ. Lôthônâ must decide whether to accept corruption to protect her relationship with Sevenros or pursue the arrest and lose her most important patron.

2. **The Slave Ship** — Evidence arrives at the guard station that one of the merchant vessels currently docked is operating as a slave ship—the cargo is human beings destined for illegal sale. The ship is officially a merchant vessel registered to a legitimate trading company. The captain claims the "cargo" is actually indentured laborers legally bound to work. Lôthônâ knows this is a lie, but legal documentation supports the captain's version. She cannot legally board and arrest without better evidence, but waiting means the ship will sail. She must choose between illegal boarding (which destroys her career if discovered) or allowing the ship to depart with enslaved people.

3. **The Informant's Price** — Lôthônâ is approached by someone offering information that would allow her to prosecute Verath Carlock. The informant is a low-ranking member of Carlock's organization who wants out. He will provide everything needed to build an airtight case—in exchange for Lôthônâ helping him disappear with a substantial bribe to a merchant captain for passage away from Alyssa. The request is explicitly asking Lôthônâ to commit felony corruption. She believes the information is genuine and the case would be unassailable. She must choose between her integrity and eliminating a major criminal threat.

4. **The Guard Station War** — The Alyssa city guard restructures and places Lôthônâ under a new commanding officer, **Captain Meredith Vane**, who is ambitious and wants to reform the "soft" docks patrol into aggressive law enforcement. Vane's methods involve heavy-handed searches, harassment of merchants and dock workers, and a general approach that Lôthônâ knows will destabilize the careful balance she has maintained. Lôthônâ is being ordered to implement Vane's methods. She must choose between accepting destructive changes or openly defying her commander.

5. **The Merchant's Daughter** — Lôthônâ encounters a young woman, **Lyssa**, daughter of a major merchant family, who is operating as a fence for stolen goods from the docks. Lyssa is intelligent, careful, and her criminal operation is actually less harmful than most of the smuggling that occurs. Lôthônâ knows Lyssa personally—they grew up in the same part of the city. Lyssa asks Lôthônâ to let her operate unimpeded, in exchange for information about larger criminal operations. Lôthônâ would be protecting a criminal while gaining access to better targets. She must decide whether the trade-off is ethically acceptable.
