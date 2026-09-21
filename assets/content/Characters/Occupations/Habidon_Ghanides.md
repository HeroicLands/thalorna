---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Habìdon Ghânîdês
  title: ""
  given: Habìdon
  clan: Ghânîdês
  home: athenikos2
  aliases: []
packFolder: helladhelionis
shortcode: habdnghnds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - helioniteclt
    - commonerrnk
  homes:
    - helionis
  affiliations:
    - athenikos
  gender: male
  species: null
  age: 28
  birthday: 692/5/6
  height: 1.99
  weight: 103
  frame: massive
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: dark_brown
    complexion: bronzed
    extra_features:
      - tattoo on arm
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 29 } }
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

Habìdon is a giant of a man — 6'6" and 227 pounds of broad-shouldered, thick-limbed muscle built by years of hauling rope and swinging boarding axes. His dark brown hair is cut short and unevenly, as though he does it himself with a knife, and his brown eyes sit in a dark-skinned, bronzed face that has been scoured by salt spray and sun until it resembles old leather. His nose is flat and broad, broken and reset more times than he can count, and his knuckles are a landscape of scar tissue from close-quarters boarding combat. A tattoo of an anchor and chain in faded blue ink covers his left forearm. He moves with the rolling gait of a man more comfortable on a pitching deck than on solid ground, and wears a sleeveless mail shirt over salt-stained linen, with a hand axe and heavy knife on his belt.

# Dossier {#dossier}

The Helionite marine service has offered Habìdon a commission more than once, and he has turned it down every time. Rank means a desk, and a desk is not what he is for. He is a marine: he goes over the rail first in a boarding action, he stands on a merchantman's deck when the pirates come alongside, and he has been in three fleet battles that people in Heliónis still argue about. Eight years of it. He is twenty-eight and the oldest man in his detachment, which tells you what the work does to marines, and he is known through the service as the one who does not get rattled when the deck is on fire.

His people worked the docks — cargo, hulls, rigging — and he grew up watching the fleet go out. The service took him at nineteen, and the change from dock to deck was smaller than it looked; the problems were the same, only now somebody was trying to kill him while he solved them. He goes through a ship's rigging as easily as he walks a street, and he walks a street like a man who expects it to move.

Admiral Kyrtos Pelagos, who commands his detachment, has made sure the promotion offers stop being pressed. Captain Marius Valerian, who commands a merchant vessel under the fleet's protection, has made sure they are remembered. Between the two of them Habìdon has a protector, an enemy, and no intention of becoming an officer for either.

## Psyche

### Personality

Relaxed, and hard to fluster. Superstitious the way sailors are — he respects the sea and takes the precautions, without fear. Easy among marines, awkward at a formal table, fond of a bawdy joke and a crude one. For all his size he is gentle with anyone smaller and patient with anyone learning the ropes.

### Motivation

To stay a marine until age or a wound stops him. He wants no fame and no rank; he wants to be very good at a thing that matters to Heliónis, and he loves the sea itself, which he treats as something alive that he has come to terms with.

### Strengths

The best fighter in the detachment on a deck or in a rigging. He understands how a ship is handled and supplied better than many of the officers who handle and supply it. He is enormously strong, which matters most in a boarding, and he thinks clearly when nothing else around him is clear.

## Social

Habìdon is respected in Heliónis and stays working-class by choice. He is at home with dockmen and marines and visibly uncomfortable among the merchant aristocracy that, on paper, employs him.

## Companions

### Patrons

**Admiral Kyrtos Pelagos** — The senior naval commander over Habìdon's detachment. A lifelong naval officer who knows what he has in Habìdon and has shielded him from being promoted out of it; a senior marine who wants to be one is worth more to him than a reluctant lieutenant. Kyrtos has also seen to it that the service record is spotless, which is what a pension will one day be paid on.

### Enemies

**Captain Marius Valerian** — A younger officer commanding a merchant navy vessel that sails under the fleet's protection. Ambitious and well connected, Valerian reads Habìdon's refusal of rank as contempt for rank, and has asked more than once that he be "reassigned" — dismissed — for insubordination. The requests have been refused, and each refusal has made him angrier.

## Plot Hooks

1. **The Mutiny's Edge** — In the middle of a fleet operation Habìdon learns that Captain Valerian has given an order that will almost certainly lose a ship and her crew. The order is defensible on paper; Habìdon can see that it was written to put him and his marines under the water, an execution dressed as a tactical choice. He takes it to Admiral Kyrtos, who halts the operation and has proof that Valerian built the trap. Proving attempted murder by way of a lawful command is a political matter, and Kyrtos suggests Habìdon vanish for a season while it is quietly investigated. That means leaving his marines.
2. **The Stolen Naval Design** — A merchant ship under Helionite protection turns out, after a small incident, to be carrying stolen naval drawings — shipbuilding specifications the fleet guards closely. Her master, **Master Thassos**, says he bought them fairly through trading contacts. The trail leads back to Captain Valerian, who took them from the fleet's own archive and sold them for his own account, and who is protected enough that no prosecution will hold. Admiral Kyrtos asks Habìdon to get the drawings back quietly, which means boarding a friendly merchantman without orders and stealing to undo a theft.
3. **The Pirate Brotherhood** — On a raid Habìdon is taken by the enemy: a loose confederation of pirates and cashiered marines, men purged from the Helionite service for their politics. Their commander gives him a choice — join the crew for good, or be killed as a prisoner of war; his fellow marines die either way. The pirates respect him, offer him command of a kind Admiral Kyrtos never would, better pay, and no admirals at all.
4. **The Refugee Fleet** — Helionite ships are sent to turn back a fleet of refugees from a collapsing regime, by force if it comes to that. Habìdon is in the boarding party and finds faces he knew as a boy — dock workers, traders, whole families — and finds too that "refugees" is a label: these are political prisoners being shipped to their likely execution. Admiral Kyrtos tells him, in person, to do his duty.
5. **The Ocean Itself** — On a routine patrol Habìdon comes on the evidence that the fishing grounds Heliónis lives on are dying — the water fouled, the catch rotting on the surface. The cause is upriver: the fleet's own research yards, dumping their waste into the sea to save the cost of carting it, and at this rate the fishery is finished within five years. He reports it to Admiral Kyrtos and is told it is above his station and to mind his duties.
