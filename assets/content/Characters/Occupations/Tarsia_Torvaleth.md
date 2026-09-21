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

Társia is tall for a woman — 6'1" — with a heavy, powerful build that commands attention in any formation. Her auburn hair is tied back in a thick braid that reaches the middle of her back, and her honey-brown eyes carry the steady, appraising look of an officer who has learned to assess threats before they arrive. Her medium-toned skin is weathered from years on the [[place-kavrenath|Kávrenath]] frontier, and her nose is crooked from a break she took during a border skirmish, since healed but never straightened. Her hands are large and calloused, and she moves with the deliberate economy of someone trained to carry armor over long distances. She wears a mail habergeon over a gambeson tunic, both bearing the dust and minor repairs of active frontier service, and keeps a broadsword and round shield within arm's reach at all times.

# Dossier {#dossier}

Társia comes from a family whose entire existence has been defined by the border. Her grandfather fought in the independence conflicts. Her father commanded a border garrison. Her mother was the daughter of a garrison commander, married into the family specifically to cement military-family ties. Társia was taught soldiering the way other children are taught language—immersion from infancy, with the expectation that it would become her primary identity.

She grew up in various garrison towns along the Kávrenath border, where [[place-tarvenirgn|Tarvénia]] meets the increasingly unstable Haradian territories and the pirate-infested coastal regions. She received formal military training at fifteen and enlisted at eighteen, not because she needed to but because it was assumed. Her family has produced three garrison commanders and she is being groomed to become the fourth. She is also six feet tall, 182 pounds of muscle and scar tissue, with a naturally authoritative bearing that makes people defer to her without thinking about it.

At twenty-three, Társia was assigned to the Kávrenath fortress, the most strategically critical and understaffed posting on the frontier. The work is brutal: constant smuggler interdiction, refugee management, protection against both internal banditry and Haradian state-sponsored raiding. She has been in actual combat maybe forty times. She has killed nine people. Her crooked nose was broken two years ago by a smuggler's fist and never properly reset—she refused to leave her post for surgery.

Now at twenty-six, she holds the rank of captain and commands a mixed unit of fifty soldiers. She is already better at logistics and combat leadership than most senior officers. She is also deeply aware that her family's connections matter more than her actual competence, and this awareness is slowly poisoning her relationship with her own identity.

## Psyche

### Personality

Társia is direct and blunt to the point of tactlessness. She dislikes intrigue and finds the social games of officer culture exhausting. She leads from the front, which her soldiers respect absolutely. She is impatient with excuses and intolerant of laziness, but genuinely cares about her soldiers' safety and welfare. She has a crude sense of humor and drinks like a man half her size.

### Motivation

Társia's primary motivation is proving that she earned her position rather than inherited it. This drives everything she does at Kávrenath: she works twice as hard as any officer should have to, ensures her unit has the highest combat readiness in the frontier region, and demonstrates a ruthlessness in command that unsettles some of her superiors. Her secondary motivation is protecting the border itself—not from ideology but from genuine conviction that the territories she commands require her specific kind of strength.

### Strengths

Her combat ability is genuinely exceptional—she moves with a natural fluidity that suggests her body was built for violence. She is an inspired tactical commander who reads terrain instantly. She is physically brutal enough to command respect from professional soldiers and officers twice her age.

## Social

Társia's social position is privileged and deeply uncomfortable. She is treated with deference because she is a Torvaleth, resented by ambitious officers who see her advancement as family favoritism, and secretly pitied by egalitarian-minded soldiers who assume her competence is secondary to her lineage. This cocktail of expectation and doubt defines her existence.

## Companions

### Patrons

**Colonel Estáril Dómivar** — The senior officer commanding the entire Kávrenath frontier sector. Dómivar is Társia's uncle by marriage and genuinely respects her abilities, but their professional relationship is poisoned by the fact that nobody can ever quite believe his endorsements are merit-based. Dómivar desperately wants to promote Társia to major and eventually to command the entire frontier, but fears that doing so will undermine her credibility with the soldiers.

### Enemies

**Captain Mársel Jútharen** — A rival officer commanding the neighboring garrison sector. Sordello is ambitious, politically connected, and seething with resentment that Társia (younger, female, and a Torvaleth) was given command of the more strategically valuable Kávrenath posting. He has begun documenting every minor decision Társia makes, waiting for a mistake he can weaponize. He spreads rumors that her unit's success comes from excessive brutality toward refugees and suspected collaborators.

## Plot Hooks

1. **The Impossible Choice** — Haradian state agents stage a major incursion across the border. Társia's unit responds and contains it, but intelligence reports reveal the incursion was deliberately designed to draw her forces away from the garrison's interior. While she was fighting at the border, Haradian operatives infiltrated the garrison compound and attempted to destabilize it—the attack was repulsed but supplies were sabotaged. Colonel Dómivar arrives for an investigation, and during the debriefing, Társia realizes that the sabotage was too sophisticated to be Haradian alone. Someone inside her command structure enabled it. She can investigate and potentially expose an officer from a powerful military family, or she can suppress the evidence and accept that the attack will be blamed on her negligence.

2. **The Refugee Crisis** — A massive wave of refugees from the interior Haradian regions arrives at the Kávrenath garrison, fleeing what they describe as a purge by the Haradian government. There are thousands of them: women, children, elderly. The official orders are clear: turn them away, funnel them toward international relief organizations, under no circumstances allow them into Tarvénan territory permanently. Társia's officers execute the orders with varying degrees of compassion. Then Társia recognizes one of the refugees: **Malik**, a Haradian intelligence operative she had contact with years ago during border negotiations, and a man she has come to respect. He has been outed as a sympathizer with the refugee movement and is fleeing for his life. He asks for asylum, knowing it will ruin Társia professionally if she grants it.

3. **The Promotion Trap** — Colonel Dómivar finally approves Társia's promotion to major, effective immediately. The promotion comes with a reassignment: she will be transferred to the capital to serve as aide to a high-ranking general. This is technically advancement and actually exile—removal from the frontier so that less-connected officers can consolidate control of the border command. Dómivar warns her that accepting the promotion is a trap, but refusing it will offend the general and damage her career irreparably. She can fight the reassignment by challenging the promotion's legitimacy, but that means directly confronting Colonel Dómivar and effectively ending his career protection.

4. **The Bastard's Claim** — A man arrives at Kávrenath claiming to be the illegitimate son of Társia's father, born to a Haradian woman during a border negotiation years before Társia was born. He is Haradian-born and speaks with a Haradian accent, and he wants asylum. The man is intelligent and educated, and clearly has the Torvaleth bearing. The problem: her father was married at the time, and this man's existence is a family scandal that could destroy her mother's dignity and complicate Társia's own legitimacy in her family's eyes. Worse, she is not certain whether he is a genuine relative or a Haradian agent running a long con. She has to make a decision about him while her family pressures her to deny him and her conscience wrestles with responsibility.
