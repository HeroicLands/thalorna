---
tags:
  - demigod
  - heroes-of-asguard
  - unguilded
  - mages
  - character
name:
  full: Gríma Svartrúnar
  title: null
  given: Gríma
  clan: null
  aliases:
    - Svartrúnar
  home: null
packFolder: ankarisnordlands
shortcode: grmsvrtrnr
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
  age: 73
  birthday: 647/3/28
  height: 1.84
  weight: 91
  frame: heavy
  appearance:
    eye_color: black
    hair_color: black
    skin_color: pale
    complexion: sallow
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 3 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 2 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
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

Gríma stands 5'9" with a withered, skeletal frame. His pale skin has the waxy quality of a preserved corpse, and dark runic symbols are etched directly into his flesh, glowing faintly with a sickly greenish light. His black hair is thin and wispy, and his black eyes are sunken deep in their sockets, glittering with malicious intelligence. His features are sharp and cruel — a narrow face like a blade, a hooked nose, a lipless mouth that stretches in a rictus grin, and brows perpetually raised in mockery. Where he walks, plants wither and the air grows cold and stale. Gríma wears layered robes of rotting black silk over ancient armor of corroded mail, and his fingers — abnormally long and spider-like — are perpetually stained with dark pigment from carving his black runes. Despite his horrifying appearance, his runic engravings possess a perverse beauty, their elegant lines belying their corrupting purpose.

# Dossier {#dossier}

Gríma Svartrúnar was a feared and loathsome sorcerer, infamous for his dark rituals and vile practices. His heart was as black as the runes he carved into the flesh of his victims, and his insatiable hunger for power led him to delve into the most forbidden secrets of necromancy. His deeds were so wicked that even the darkest beings shunned him. Eventually, his quest for power drew the attention of Hél, who transformed him into a Nightwight — a [[being-tereb|tereb]], in the learned word — a powerful Helspawn sorcerer with mastery over death.

The most notorious saga of Gríma Svartrúnar involves his desecration of [[place-laurelosse|Laurelossë]], a hidden Sinalë enclave nestled deep in the forested mountains of northern Nordheim. For centuries the Sinalë had maintained Laurelossë as a sanctuary where their ancient magic intertwined with the living forest, concealed from human knowledge by wards older than the Vylarian Empire. Hél tasked Gríma with its destruction. Under cover of night, Gríma pierced the enclave's wards and entered the sanctuary, carving black runes into the earth that corrupted the natural energies binding the place together. The Sinalë, led by Calenlass Vardamir, fought valiantly to defend their haven, but Gríma's dark magic was overwhelming. In a desperate final stand, Calenlass confronted Gríma directly, but the sorcerer drew upon Hél's full power and shattered the Sinalo's star-staff. The once-lush sanctuary became a necropolis, the spirits of the fallen Sinalë trapped in eternal torment. Among the Sinalë, the name Gríma Svartrúnar is still spoken with a grief and fury that has not dimmed in decades — a rare thing, for a people who measure time in centuries.

## Psyche

### Personality

Gríma is vile and sadistic, taking pleasure in corruption and defilement. Where Mörkvidr is coldly rational and Vargskaer is brutally direct, Gríma is cruel for cruelty's sake. He delights in twisting things of beauty into things of horror and considers the fall of [[place-laurelosse|Laurelossë]] his masterwork. He is paranoid and trusts no one, surrounding himself with layers of Helspawn guardians. Despite his evil, he possesses a perverse artistic sensibility — his rune-carvings are genuinely beautiful, which makes their dark purpose all the more disturbing.

### Motivation

Gríma seeks to corrupt and defile every place of beauty and life he can find, believing that in doing so he proves the supremacy of death over life. His ultimate ambition is to corrupt one of the Sinalë enclaves themselves, which would be the greatest triumph of Hél's power over the living world. He also seeks to break the spirit of Calenlass Vardamir, whose soul remains defiant even in captivity.

### Strengths

Gríma's runic magic is devastatingly effective at corrupting natural and divine magic, making him particularly dangerous to druids, the Sinalë, and priests. His black runes can taint land, water, and living things, spreading death and decay wherever they are carved. The corrupted [[place-laurelosse|Laurelossë]] serves as his stronghold and source of dark power. He can sense and target places of natural beauty and divine favor, drawn to them like a moth to flame.

## Social

## Companions

### Patrons

**Hél** — The goddess favors Gríma's particular talent for corrupting places of life and beauty, which directly advances her dominion.

**The Nightwight Council** — Though many of its members find Gríma distasteful, they recognize his power and utility, providing him with information about new targets.

### Enemies

**The Sinalë** — The Firstborn consider Gríma among the most hated names in their long memory. Their agents search tirelessly for a way to destroy him and free the spirits of [[place-laurelosse|Laurelossë]].

**Calenlass Vardamir's Spirit** — The bound spirit of the Sinalo guardian resists Gríma's control and works to undermine him from within the corrupted enclave.

**Hrafnleif the Wise** — The seer has foreseen that Gríma's corruption will eventually threaten the entire northern land if left unchecked and has made the necromancer's destruction a personal mission.

## Plot Hooks

1. **The Cleansing of [[place-laurelosse|Laurelossë]]** — A way has been discovered to potentially break Gríma's hold on the corrupted enclave, but it requires a coalition of Sinalë, priests, and warriors willing to enter the necropolis and confront its master.

2. **The Black Rune Plague** — Gríma's runes have begun appearing in new locations, spreading corruption to farmland and water sources. Someone is helping him, and the trail leads to an unexpected source.

3. **Calenlass's Hope** — The spirit of the fallen Sinalo guardian has managed to send a message beyond the corrupted enclave: he has found a weakness in Gríma's defenses, but he needs help from the outside to exploit it before the necromancer discovers what he's done.
