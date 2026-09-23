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

Habìdon is a giant of a man – 6'6" and 227 pounds of broad-shouldered, thick-limbed muscle built by years of hauling rope and swinging boarding axes. His dark brown hair is cut short and unevenly, as though he does it himself with a knife, and his brown eyes sit in a dark-skinned, bronzed face that has been scoured by salt spray and sun until it resembles old leather. His nose is flat and broad, broken and reset more times than he can count, and his knuckles are a landscape of scar tissue from close-quarters boarding combat. A tattoo of an anchor and chain in faded blue ink covers his left forearm. He moves with the rolling gait of a man more comfortable on a pitching deck than on solid ground, and wears a sleeveless mail shirt over salt-stained linen, with a hand axe and heavy knife on his belt.

# Dossier {#dossier}

Habìdon was born into [[place-helionis|Heliónis]]'s maritime culture where the sea is as fundamental as breath. His family worked the docks: loading cargo, maintaining vessels, repairing rigging. He grew up watching combat-ready naval forces and was conscripted into the Helionite marine service at nineteen. The transition from dock labor to naval infantry was surprisingly natural; the work required the same problem-solving and physical competence, only with higher stakes.

His eight years of marine service have made him entirely at home at sea. He has fought in boarding actions, defended merchant convoys against pirates, been involved in three major sea battles. He moves through the rigging of a ship with the same ease he walks on solid ground. His knuckles are scarred from boarding combat where his size and strength count for most.

At twenty-eight, he is the oldest marine in his current detachment, and he has developed a reputation as steady and reliable under the chaos of naval combat. He has been offered promotion to naval officer multiple times and has refused each time; he has no interest in the paperwork that comes with rank. He simply wants to keep doing the work he is good at for as long as his body permits.

## Psyche

### Personality

Habìdon is relaxed in his manner and hard to rattle. He is superstitious in the way maritime people are superstitious – he respects the sea's power and takes precautions, but without paranoia. He is sociable with his fellow marines and less comfortable in formal social settings. He has a bawdy sense of humor and an appreciation for crude practical jokes. Despite his size and martial capability, he is gentle with smaller people and patient with those learning naval skills.

### Motivation

Habìdon wants to remain part of the Helionite marine service until age or injury makes it impossible. He has no ambitions for fame and no interest in advancing beyond his current role. What drives him is the plain satisfaction of mastering a craft, of being very good at something that matters to his people. He also loves the sea itself, and treats it almost as a living thing to be respected and worked with.

### Strengths

He is a superb fighter aboard ship. He understands ship-handling and the supplying of a vessel better than many officers. His physical strength is extraordinary and particularly useful in boarding actions. He thinks clearly in the chaos of a fight.

## Social

Habìdon occupies an unusual social position within Heliónis: respected for his skill but firmly of the docks. He is at home with dock workers and fellow marines but visibly uncomfortable among the merchant aristocracy that technically employs him.

## Companions

### Patrons

**Admiral Kyrtos Pelagos** – The senior naval commander overseeing Habìdon's current detachment. Kyrtos is an officer of long service who recognizes Habìdon's value and has explicitly protected him from promotion pressure, understanding that Habìdon is far more useful as a senior marine than as a reluctant officer. Kyrtos has also seen to it that Habìdon's service record is exemplary, which will mean a strong pension when he retires.

### Enemies

**Captain Marius Valerian** – A younger officer commanding one of the merchant navy vessels that operates under the Helionite military umbrella. Valerian is ambitious and politically connected, and he views Habìdon's refusal of promotion as insulting to military hierarchy. He has repeatedly requested Habìdon be "reassigned" (essentially dismissed) from the service for insubordination. His requests have been denied, which has made him resentful.

## Plot Hooks

1. **The Mutiny's Edge** – During a major naval operation, Habìdon becomes aware that Captain Valerian has given an order that will almost certainly result in the destruction of his ship and crew. The order is defensible on paper, but Habìdon recognizes that Valerian issued it to be rid of him and his fellow marines – an execution disguised as a tactical decision. Habìdon informs Admiral Kyrtos, who orders the operation halted. Kyrtos has evidence that Valerian intentionally created the dangerous situation. But proving attempted murder through military command is politically complex, and Kyrtos suggests that Habìdon might disappear for a season while the investigation proceeds quietly. The choice is between his loyalty to Kyrtos and his refusal to abandon his fellow marines.

2. **The Stolen Naval Design** – A merchant vessel under Helionite protection is involved in a minor incident that reveals it is carrying stolen military naval designs – shipbuilding plans the navy guards closely. The merchant captain, **Master Thassos**, claims the designs were bought honestly through his trading partners. Investigation suggests they were stolen from military archives by Captain Valerian and sold to merchants for personal profit. Valerian has political protection that makes prosecution difficult. Habìdon is asked by Admiral Kyrtos to recover the designs covertly, which means boarding the merchant vessel without authorization and committing theft to counteract theft.

3. **The Pirate Brotherhood** – Habìdon is captured during a raiding operation by Helionite enemies – a loose confederation of pirates and rogue marines who were themselves purged from the Helionite service for political reasons. The pirate commander offers Habìdon a choice: join the pirate crew permanently, or be executed as a prisoner of war. Habìdon's fellow marines are executed either way. The pirate crew respects him and offers him a command of his own (something Admiral Kyrtos never would), better pay, and freedom from military hierarchy. The choice is loyalty to Heliónis or survival among people he respects more.

4. **The Refugee Fleet** – Helionite forces are ordered to intercept a refugee fleet fleeing a collapsing political regime. Official orders are to turn the refugees away by force if necessary. Habìdon is part of the boarding team, and during the operation, he discovers that the refugee fleet includes people he knew from his childhood – dock workers, merchants, families. He also discovers that the "refugees" designation is a cover; the people were actually political prisoners being transported to potential execution. Admiral Kyrtos personally tells Habìdon to do his duty. Obedience and conscience cannot both be satisfied.

5. **The Ocean Itself** – During a routine patrol, Habìdon discovers evidence that Heliónis's main fishing grounds are being poisoned – the water is becoming toxic, killing marine life at catastrophic rates. Investigation reveals the cause: naval workshops upriver are dumping their waste into the river to save the cost of carting it away. The poison will destroy Heliónis's fisheries within five years. When Habìdon reports this to Admiral Kyrtos, he is told the matter is above his station and to attend to his duties. He can accept the ruin of his homeland's waters or act against a direct command.
