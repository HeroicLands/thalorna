---
tags:
  - demigod
  - heroes-of-asguard
  - unguilded
  - mages
  - character
name:
  full: Mörkvidr the Deathmage
  title: null
  given: Mörkvidr
  clan: null
  aliases:
    - the Deathmage
  home: null
packFolder: ankarisnordlands
shortcode: mrkvdrdthmg
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Necromancer
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 67
  birthday: 653/7/6
  height: 1.84
  weight: 76
  frame: medium
  appearance:
    eye_color: black
    hair_color: black
    skin_color: pale
    complexion: sallow
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 5 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 19 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 2 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-hel }
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

Mörkvidr stands 5'10" with a gaunt, wasted frame that belies the terrible power coiled within. In undeath, his pale skin has become translucent, showing the dark veins that web beneath like cracks in old parchment. His black hair hangs lank and lifeless past his shoulders, and his black eyes are fathomless voids that seem to absorb the light around them. His features are sharp and cadaverous – sunken cheeks, a thin hooked nose, bloodless lips drawn tight over teeth, and brows like slashes of charcoal. A chill emanates from his presence that no cloak can ward against, and plants wilt visibly when he passes. Mörkvidr wears robes of black and deep violet, trimmed with silver thread that traces necromantic sigils. The corrupted Heart of Judgment hangs from a chain at his chest, pulsing with a sickly light. His hands, once a scholar's, are now tipped with nails grown long and dark as talons.

# Dossier {#dossier}

Mörkvidr was once a powerful and malevolent human sorcerer dedicated to Hél, feared across the lands for his mastery of dark magic. Obsessed with the secrets of death, he delved into forbidden rituals, sacrificing countless innocents in his quest for power. His cruelty knew no bounds, and his name became synonymous with terror. Mörkvidr's ultimate goal was to transcend mortality itself. Hél offered him a chance to become one of her favored servants – a Nightwight, a [[being-tereb|tereb]] in the learned word – in return for his immortal soul. Mörkvidr eagerly accepted, embracing his new existence as a Helspawn sorcerer with even greater powers.

The most infamous saga of Mörkvidr the Deathmage recounts his assault on a grand temple of Týr. Hél, desiring to undermine Týr's influence, tasked Mörkvidr with retrieving the Heart of Judgment, a relic said to discern and destroy evil. Mörkvidr created an army of Hélthralls – mindless Helspawn soldiers – and descended upon the temple under cover of night. The priests of Týr fought valiantly but were no match for Mörkvidr's necromantic powers. He confronted the High Priest, bound him in chains of shadow, desecrated the Heart of Judgment, and made the High Priest into the lowest of his Hélthralls, leaving the temple in ruins.

## Psyche

### Personality

Mörkvidr is cold, calculating, and utterly without remorse. He views living beings as raw materials and dead ones as tools, and this utilitarian cruelty extends to his own followers, whom he considers expendable. He is intellectually brilliant and takes genuine pleasure in the elegance of a well-executed plan, though his definition of elegance includes acts of staggering cruelty. The one vestige of his former humanity is a fascination with beautiful objects – he collects art, jewelry, and fine craftsmanship, perhaps the last echo of the man he once was.

### Motivation

Mörkvidr seeks complete dominion over death itself, answering to no one – not even Hél. His service to the goddess is a means to an end; he gathers power and knowledge with the ultimate goal of transcending even undeath and becoming something entirely new. He is driven by a bottomless hunger for power and the conviction that mortality was a prison he has escaped only partially.

### Strengths

Mörkvidr's necromantic powers are staggering: he can raise armies of the dead, bind spirits, drain life force, and project devastating shadow magic. As a Nightwight, he is immune to most physical attacks and conventional weapons. His intellect and centuries of accumulated knowledge make him a terrifyingly effective strategist. The Heart of Judgment, though corrupted, still retains some of its original power, which Mörkvidr has bent to his own purposes.

## Social

## Companions

### Patrons

**Hél herself** – The goddess of the underworld considers Mörkvidr her most effective mortal agent, though she is well aware of his ambitions. She provides him with dark power and commands while keeping a watchful eye on his loyalty.

**The Nightwight Council** – A cabal of Helspawn lords who serve Hél and recognize Mörkvidr as their most powerful member. They provide him with Helspawn servants and intelligence.

### Enemies

**The Temple of Týr** – The entire faith of Týr has sworn to destroy Mörkvidr for the desecration of their temple. Their finest warriors and most powerful blessings are dedicated to this purpose.

**The Sinalë of Laurelossë** – The Sinalë whose sanctuary was later devastated by Gríma under Mörkvidr's indirect influence seek to eliminate all of Hél's champions.

**Sigvardr One-Hand** – The champion of Týr views Mörkvidr as his ultimate quarry and has sworn a personal oath to bring the necromancer to justice.

## Plot Hooks

1. **The Dark Resurrection** – Mörkvidr is attempting to raise an ancient dragon from death to serve as his ultimate weapon. The ritual requires components scattered across the northern lands, and agents of Týr race to destroy them before Mörkvidr can collect them all.

2. **The Heart of Judgment** – The corrupted relic still contains a spark of its original divine power. A vision suggests that if it can be reclaimed and purified, it could be the key to destroying Mörkvidr permanently.

3. **Nightwight Civil War** – Mörkvidr's ambition has drawn the suspicion of other Nightwight lords, who fear he plans to usurp Hél's authority. A power struggle among the Helspawn could be exploited – or could make things far worse.
