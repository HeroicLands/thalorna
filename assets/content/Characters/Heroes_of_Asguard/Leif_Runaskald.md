---
tags:
  - paragon
  - heroes-of-asguard
  - mages
  - character
name:
  full: Leif Runaskald
  title: null
  given: Leif
  clan: null
  aliases:
    - Runaskald
  home: null
packFolder: ankarisnordlands
shortcode: leifrnskld
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Skald and Runemaster
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
  age: 41
  born: 679/12/6
  height: 1.88
  weight: 105
  frame: massive
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: ruddy
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 18 } }
    - { model: affiliation-odinn }
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

Leif stands 5'10" with a lean, wiry frame, weighing about 165 pounds. His fair skin has a ruddy undertone from years of travel in all weathers, and his auburn hair falls loose to his shoulders, often tangled and unkempt. His hazel eyes are bright and expressive, dancing with humor or clouding with melancholy depending on his mood. His features are open and mobile, with a broad forehead, a slightly upturned nose, a generous mouth quick to grin, and laugh lines that crinkle at the corners of his eyes. Runic tattoos cover his forearms, each one a verse from a different saga. He carries a well-worn lyre slung across his back and dresses in a patchwork of fine and humble garments—a silk scarf from a grateful jarl's wife, a threadbare woolen cloak, boots that have seen a thousand roads. His fingers are callused from years of playing strings and carving runes.

# Dossier {#dossier}

Leif Runaskald was a wandering skald, known throughout the lands for his enchanting voice and his mastery of the ancient runes. Unlike many warriors of his time, Leif chose the path of the bard, believing that words and knowledge held a power greater than any sword. He traveled from village to village, sharing stories of Ódinn and the gods, teaching the secrets of the runes, and recording the sagas of great heroes. Leif was revered not only for his musical talents but for his deep understanding of the mystical arts, which he used to heal, protect, and inspire.

The most famous saga of Leif Runaskald is the tale of how he saved a kingdom with nothing but his voice and a single rune. When the realm of Fjallheim was beset by a terrible blight, which no healer could cure, the people turned to Leif for help. Guided by Ódinn, Leif spent three days and nights in a trance, seeking the root of the curse. On the third night, he emerged with a single rune inscribed on a piece of bark. Leif traveled to the heart of Fjallheim, where he sang the ancient verses of Ódinn and pressed the rune into the earth. As he did, the blight lifted, the land healed, and the crops began to grow once more. The people of Fjallheim hailed Leif as a savior, and his song became a part of their harvest rituals for generations to come.

## Psyche

### Personality

Leif is gregarious and warm, with an infectious enthusiasm for stories both old and new. He has a gift for making strangers feel like old friends within minutes of meeting them. Behind his cheerful exterior, however, Leif carries a deep melancholy—he has seen too many heroes fall and too many villages burn, and each loss adds another verse to the sorrowful songs he sings alone at night. He drinks more than he should and has a weakness for gambling, though his uncanny luck at dice suggests Ódinn may be watching the throws.

### Motivation

Leif believes that the sagas are more than entertainment—they are the living memory of his people, and if they are forgotten, the people themselves will fade. He travels ceaselessly to collect and preserve stories, driven by the fear that the old ways are dying. He also seeks the legendary Song of Creation, said to be the first words Ódinn ever spoke, which Leif believes could heal any wound and mend any broken thing.

### Strengths

Leif's voice carries supernatural resonance when he sings the old sagas, capable of inspiring courage in the fearful and calming rage in the wrathful. His runic knowledge, while more limited than a dedicated runemaster's, is versatile and practical—focused on healing, warding, and revealing hidden things. His vast network of contacts across the northern lands means he can find shelter, information, and allies in almost any settlement.

## Social

## Companions

### Patrons

**The Skalds' Hall of Vinterheim**—This prestigious gathering of northern bards and loremasters considers Leif one of their finest, granting him the right to speak with their authority and access their archives of ancient sagas.

**Freya Halvsdottir**—A wealthy merchant's widow who funds Leif's travels in exchange for first hearing of any new sagas he discovers. She harbors a quiet affection for the skald that he pretends not to notice.

### Enemies

**Ivar the Silencer**—A fanatical warrior-priest who believes the old sagas contain dangerous heresies. He has burned several libraries and murdered two skalds, and Leif is next on his list.

**The Whispering Court**—A cabal of sorcerers who believe Leif unknowingly carries fragments of a powerful incantation within the sagas he sings. They seek to capture him and extract the knowledge by force.

## Plot Hooks

1. **The Lost Saga**—Leif has heard rumors of a saga so old it predates the founding of the northern kingdoms. The only surviving copy is said to be hidden in a barrow guarded by a draugr king who demands a worthy story in exchange for the text.

2. **The Silencer's March**—Ivar the Silencer is burning his way through the northern settlements, destroying libraries and killing anyone who keeps the old stories. Leif must rally the scattered skalds and loremasters to stand against him before the old knowledge is lost forever.

3. **The Cursed Song**—A song Leif learned from a dying woman has begun to have strange effects when he sings it—listeners fall into trances and speak in tongues. The song may be a fragment of the legendary Song of Creation, but using it seems to attract something dark and hungry.
