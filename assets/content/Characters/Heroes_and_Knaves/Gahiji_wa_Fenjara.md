---
tags:
  - heroes-and-knaves
  - hero
  - tradesfolk
  - character
name:
  full: Gahiji wa Fénjara
  title: ""
  given: Gahiji
  clan: Fénjara
  home: fenjaravlg
  aliases:
    - The Spirit Tracker
packFolder: xerathiasouthernsavannahs
shortcode: gahijwfnjr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Hunter
  stations: []
  lore:
    - commonerrnk
  homes:
    - sthrnsvnhs
  affiliations:
    - nylbtrblntn
  gender: male
  species: null
  born: 692/2/2
  height: 1.88
  weight: 90.7
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: dark
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-nyalbleop }
    - { model: skill-leopardsengalasprt, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-weapongear-lbw150 }
    - { model: sohl-sohl-weapongear-spr }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-rhtunic }
    - { model: sohl-sohl-armorgear-rhbrch }
    - { model: sohl-sohl-armorgear-rhshoe }
    - name: Quiver (leather, reinforced for heavy use)
      type: miscgear
      system:
        shortcode: quiver
        weight: 1.5
        value: 100
        durability: 3
    - { model: sohl-sohl-projectilegear-arwstd, system: { quantity: 30 } }
    - name: Tracking tools and marking materials
      type: miscgear
      system:
        shortcode: trackingtools
        weight: 2
        value: 50
        durability: 4
    - name: Animal snares and traps
      type: miscgear
      system:
        shortcode: animalsnaresandtraps
        quantity: 4
        weight: 1.5
        value: 100
        durability: 3
    - name: Dried meat and travel provisions
      type: miscgear
      system:
        shortcode: driedmeatandtravel
        quantity: 3
        weight: 1.5
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-miscgear-liteblkt }
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-backpk }
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

![[gahijwfnjr|Gahiji wa Fénjara]]{float: top-left}

Gahiji stands 6'2" tall with a heavy build. He has dark skin, dark hair, and dark eyes. His features include a square face, a strong nose, a wide jawline, an expressive mouth, thick brows, high cheeks.

# Dossier {#dossier}

Gahiji wa Fénjara is a renowned **tracker and hunter** from the Fénjara tribe of the **[[affiliation-nylbtrblntn|Nyáluba Tribal Nation]]**, whose people live deep within the most remote parts of the Xerathian jungles. The Nyáluba are famous for their unparalleled tracking skills, often said to be able to follow prey across both the physical and spirit realms. Gahiji grew up surrounded by dense jungle and spiritual traditions, learning early on how to read the signs of the land and the messages of the spirits. His family line was blessed with the ability to “track the unseen”—a mystical sense that allowed them to follow spiritual disturbances or beings.

Gahiji's reputation spread far and wide when he tracked down and defeated a dangerous **spirit panther** that had been terrorizing his people. The panther was not a simple physical predator, but a spiritual creature capable of phasing between the spirit world and the material plane. Gahiji was able to pursue the creature through the use of his family’s secret rituals, tracking it through dreams and visions as well as through physical trails. This made him one of the most sought-after trackers in Xerathia.

When [[being-kirobashkm|Kiroba]]’s quest to restore balance reached the Nyáluba lands, Gahiji was drawn to the spiritual nature of the disturbance. Sensing that this imbalance threatened all of Xerathia, Gahiji joined [[being-kirobashkm|Kiroba]]’s cause, believing that his skills would be instrumental in navigating the spirit-infused jungle and the spiritual threats ahead.

## Background

### Skills and Abilities

- **Strength**: While Gahiji isn’t the strongest physically, his strength is well-suited to carrying out long hunts and navigating tough jungle terrain.
- **Endurance**: His ability to survive and thrive in the harsh conditions of the jungle has given Gahiji remarkable stamina, allowing him to pursue prey for days without tiring.
- **Dexterity**: Gahiji is quick with his hands, whether it’s setting traps or handling his spear with expert precision.
- **Agility**: Gahiji moves with grace and fluidity, making him almost invisible in the jungle, able to slip between trees and avoid danger with ease.
- **Perception**: His heightened senses are his greatest asset, allowing him to see, hear, and even sense things that others cannot. This, combined with his spiritual abilities, makes him unparalleled in tracking.
- **Comeliness**: Gahiji’s appearance is unassuming, reflecting his practical nature. His looks are rugged and functional, suited to his life as a tracker and hunter.
- **Aura**: His spiritual connection to the jungle and the unseen forces around him is profound, allowing him to interact with the spirit world in ways few others can.
- **Will**: Gahiji’s calm and patient demeanor hides a deep inner strength. He remains focused on his tasks and is not easily swayed by distractions or danger.
- **Reasoning**: Gahiji is practical and intelligent, using his knowledge of the natural world and the spirits to make sound decisions in both survival and battle.
- **Creativity**: While not particularly imaginative, Gahiji’s experience allows him to adapt to new challenges and find effective solutions in the wild.
- **Empathy**: Gahiji’s connection to the spiritual world gives him an understanding of the balance of life, though he is often distant in personal matters, focused more on the task at hand.
- **Eloquence**: Gahiji is a man of few words, preferring to let his actions speak for him, but when he does speak, his words carry the weight of wisdom and experience.
- **Morality**: Gahiji’s connection to his culture’s spiritual and natural traditions governs his actions. He adheres to the codes of balance and respect for both the physical and spirit world.
- **Voice**: Gahiji’s voice is surprisingly steady and clear, with a natural resonance that makes it suitable for singing traditional tribal songs during rituals and ceremonies.
- **Tracker of the Unseen**: Gahiji’s unique family gift allows him to track both physical and spiritual entities. He can follow trails invisible to normal eyes and can sense disturbances in the spirit world that might indicate danger or the presence of spiritual entities.
- **Survivalist**: Gahiji is an expert in survival, able to live off the land for long periods and navigate the most treacherous environments. He knows the jungles of Xerathia better than almost anyone, making him invaluable as a guide.
- **Spirit Hunter**: Gahiji is skilled in hunting both physical and spiritual creatures. His experience with spirit creatures, combined with his knowledge of ancient rituals, allows him to defend the group from spiritual threats that would otherwise be impossible to combat.

## Psyche

### Personality

Gahiji is quiet, reserved, and deeply in tune with the world around him. His calm and patient demeanor makes him seem detached at times, but in truth, Gahiji is constantly observing his surroundings, aware of every change in the environment. He has a dry sense of humor and a strong sense of honor, believing that his role as a tracker is to preserve the balance of the natural and spiritual worlds. Though he is a man of few words, when he speaks, his advice is always grounded in wisdom.

### Strengths

- **Tracking**
- **Survival**

## Social

## Plot Hooks

1. **The Hunter Becomes the Hunted**: Gahiji’s reputation as a spirit tracker reaches the ears of a ruthless warlord who commands a small army of mercenaries. The warlord demands Gahiji’s aid in hunting a fabled spirit beast rumored to grant immortality. Refusing to help places Gahiji and his village in danger. Forced to cooperate, Gahiji must not only protect the sacred creature but also turn the hunt against the warlord, ensuring the creature remains a part of the spiritual balance.

2. **The Jungle’s Last Stand**: A series of unnatural events—trees falling overnight, animals fleeing their habitats—suggest a deeper disturbance in the Xerathian jungles. Gahiji discovers that an ancient spirit, angered by the desecration of its sacred grounds, is punishing the land. As the tribes face dwindling resources and increasing conflict, Gahiji must convince rival tribes to unify in an intricate ritual to appease the spirit. Failure could lead to the spirit unleashing catastrophic floods across the jungle.

3. **The Panther’s Return**: The spirit panther Gahiji defeated years ago begins to appear in his dreams, warning him of an impending spiritual imbalance. This time, the creature is not his adversary but a guide, leading him toward a hidden temple that holds the key to stabilizing the jungle’s fragile harmony. Along the way, Gahiji faces challengers who see his connection to the panther as a sign of weakness, testing his leadership and resolve.

4. **The Spear of Ishuara**: A legendary artifact, the Spear of Ishuara, is said to possess the power to destroy even the most dangerous spiritual creatures. When an outsider attempts to claim the spear for personal gain, Gahiji must protect the artifact while confronting his tribe’s mistrust of outsiders. The journey to secure the spear leads him to uncover the truth about his family’s lineage and their role as guardians of the spiritual world.
