---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Társia Torvaleth
  title: ""
  given: Társia
  clan: Torvaleth
  home: ""
  aliases: []
packFolder: aureldiatarvenia
shortcode: tarstrvlth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
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
  age: 26
  birthday: 694/7/24
  height: 1.85
  weight: 83
  frame: heavy
  appearance:
    eye_color: honey_brown
    hair_color: auburn
    skin_color: medium
    complexion: weathered
    extra_features:
      - crooked nose
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 20 } }
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

Társia is tall for a woman — 6'1" — with a heavy, powerful build that draws the eye in any formation. Her auburn hair is tied back in a thick braid to the middle of her back, and her honey-brown eyes have the steady, appraising look of an officer who has learned to weigh a threat before it arrives. Her medium-toned skin is weathered by years on the Kávrenath frontier, and her nose is crooked from a break taken in a border skirmish, healed and never straightened. Her hands are large and calloused, and she moves with the economy of someone trained to carry armour a long way. She wears a mail habergeon over a gambeson tunic, both carrying the dust and small repairs of active service, and keeps a broadsword and a round shield within reach at all times.

# Dossier {#dossier}

Kávrenath fortress is the most exposed and worst-manned posting on the Tarvénan frontier, and Társia Torvaleth has held it since she was twenty-three. The work is smugglers, refugees, bandits from inside the border and Haradian raiding parties from outside it, with the Haradian state behind them. She has been in real fighting perhaps forty times. She has killed nine people. Her nose was broken two years ago by a smuggler's fist and never properly reset, because she would not leave her post for the surgeon.

The border made her family and her family made her. Her grandfather fought in the independence wars. Her father commanded a border garrison. Her mother was a garrison commander's daughter, married into the family to bind two military houses together. Társia learned soldiering the way other children learn to talk — from infancy, by immersion, with the understanding that it would be what she was. She grew up in the garrison towns along the Kávrenath border, where Tarvénia meets the unstable Haradian territories and the pirate coast, took formal military training at fifteen and enlisted at eighteen, not from need but because nothing else was imagined. The family has produced three garrison commanders. She is being shaped into the fourth. She is also six feet of muscle and scar tissue, 182 pounds of it, with a bearing that makes people defer to her before they have thought about it.

At twenty-six she is a captain commanding a mixed unit of fifty. She is already better at keeping a unit supplied and leading it in a fight than most of the senior officers over her. She also knows that her family's name counts for more than anything she has done, and the knowledge is slowly poisoning her relationship with her own reflection.

## Psyche

### Personality

Direct and blunt past the point of tact. She hates intrigue and finds the social games of the officers' mess exhausting. She leads from the front, and her soldiers respect her without reservation for it. She has no patience with excuses or laziness, and cares hard about her soldiers' safety and welfare. Her humour is crude, and she drinks like a man half her size.

### Motivation

Above all, to prove she earned her rank and did not inherit it. It drives everything she does at Kávrenath: she works twice as hard as any officer should have to, keeps her unit the readiest on the frontier, and shows a ruthlessness in command that unsettles some of her superiors. Under that is the border itself — not as an idea, but as a conviction that the ground she holds needs her particular kind of strength.

### Strengths

She is a superb fighter, and moves as if her body were made for it. She is an inspired tactical commander who reads ground at a glance. And she is physically brutal enough to command respect from hardened soldiers and from officers twice her age.

## Social

Társia's position is privileged and deeply uncomfortable. She is deferred to because she is a Torvaleth, resented by ambitious officers who see her rise as family favour, and quietly pitied by the more egalitarian soldiers who assume her competence is a footnote to her name. That mixture of expectation and doubt is her daily weather.

## Companions

### Patrons

**Colonel Estáril Dómivar** — The senior officer commanding the whole Kávrenath frontier sector. Dómivar is Társia's uncle by marriage and respects her abilities, and the relationship is poisoned by the fact that nobody can quite believe his endorsements are earned. He badly wants to promote her to major and one day to give her the whole frontier, and fears that doing so would destroy her standing with the soldiers.

### Enemies

**Captain Mársel Jútharen** — A rival officer commanding the neighbouring garrison sector. Jútharen is ambitious, well connected, and seething that Társia — younger, a woman, and a Torvaleth — was given the more valuable Kávrenath posting. He has begun recording every small decision she makes, waiting for the mistake he can use, and he spreads the story that her unit's success comes from brutality toward refugees and suspected collaborators.

## Plot Hooks

1. **The Impossible Choice** — Haradian state agents stage a major incursion across the border. Társia's unit answers it and holds, and then the reports come in: the incursion was bait, to draw her away from the garrison. While she fought at the border, Haradian operatives got inside the compound and tried to wreck it; the attack was beaten off, but the stores were sabotaged. Colonel Dómivar arrives to investigate, and in the debriefing Társia sees that the sabotage was too well informed to be Haradian work alone. Someone inside her own command let it happen. She can dig, and perhaps expose an officer from a powerful military family, or bury the evidence and let the attack be written down to her negligence.
2. **The Refugee Crisis** — A vast wave of refugees from the Haradian interior arrives at Kávrenath, fleeing what they call a purge. There are thousands: women, children, the old. The orders are plain — turn them away, push them toward whoever will take them beyond the border, and on no account let them settle on Tarvénan ground. Her officers carry it out with varying degrees of mercy. Then Társia recognises one of them: **Malik**, a Haradian intelligence operative she dealt with years ago in border negotiations and came to respect. He has been exposed as a sympathiser with the refugee movement and is running for his life. He asks her for asylum, knowing that granting it will finish her.
3. **The Promotion Trap** — Colonel Dómivar at last approves her promotion to major, effective at once, with a posting: to the capital, as aide to a high-ranking general. It is advancement on paper and exile in fact — a way to clear her off the frontier so that less-connected officers can take the border command. Dómivar warns her that it is a trap; refusing it will offend the general and cripple her prospects for good. She can fight it by challenging the promotion's legitimacy, which means confronting Colonel Dómivar himself and ending his protection.
4. **The Bastard's Claim** — A man arrives at Kávrenath claiming to be her father's illegitimate son, born to a Haradian woman during a border negotiation years before Társia was born. He is Haradian-born, speaks with the accent, and wants asylum. He is intelligent, educated, and has the Torvaleth bearing. Her father was married at the time; the man's existence would humiliate her mother and complicate Társia's own standing in the family. Worse, she cannot tell whether he is a relative or a Haradian agent playing a long game, and she has to decide about him while the family presses her to deny him and her conscience will not let it go.
