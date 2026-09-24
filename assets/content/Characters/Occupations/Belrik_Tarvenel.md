---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Bélrik Tárvenel
  title: ""
  given: Bélrik
  clan: Tárvenel
  home: ""
  aliases: []
packFolder: aureldiaelavendre
shortcode: belrktrvnl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - elavendriclt
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: male
  species: null
  age: 35
  born: 685/9/3
  height: 1.7
  weight: 77
  frame: medium
  appearance:
    eye_color: warm_brown
    hair_color: auburn
    skin_color: fair
    complexion: bronzed
    extra_features:
      - prominent scar on neck
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 35 } }
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

Bélrik stands 5'7" with a medium build—compact and quietly strong rather than imposing. His auburn hair falls past his collar in loose waves, and his warm brown eyes carry the slightly distant look of a man more accustomed to watching treelines than people. His fair skin has been bronzed by years of outdoor service, and a prominent scar runs along the right side of his neck—a pale, ropy line from a blade that came closer to killing him than he likes to remember. His face is angular, with a narrow jaw and high cheekbones that mark his Élavendren ancestry. He wears a forest warden's practical kit: a leather tunic over quilted padding, leather knee boots, and a longbow across his back. A hunting knife rides on his belt, and his cloak is the mottled green-brown of someone who prefers not to be seen.

# Dossier {#dossier}

Bélrik was born in the forest borderlands of [[place-elavendre|Élavendre]], son of a ranger who worked the deep woods. His mother was a settlement dweller; his father was a man of the wild who lived in that liminal space between Élavendren civilization and the ancient forest itself. Bélrik inherited his father's discomfort with walls and his mother's connection to people, a combination that made him ideally suited for border patrol work.

At twenty, he volunteered for Élavendre's border militia, specifically requesting forest patrol duty. For fifteen years, he has worked that role: monitoring boundaries, protecting settlements from predatory creatures, tracking foreign incursions through terrain that others find disorienting. He is more comfortable with a bow than a sword, more at ease among trees than in garrison compounds. He has killed three foreign agents, two aggressive forest predators, and one Élavendren political fugitive—a complex shooting that required his judgment more than his aim.

The scar on his neck is a reminder of an ambush five years ago—a coordinated attack by foreign scouts testing Élavendre's border defenses. Bélrik survived through luck and superior knowledge of the terrain. The people responsible were executed by Élavendren government forces. Bélrik has not stopped thinking about the attack since.

## Psyche

### Personality

Bélrik is quiet and observant, more comfortable with animals and plants than with most humans. He is patient to the point of stoicism and dislikes rapid emotional display. He is genuinely kind to those who approach him with respect, and his few friendships are deep and lasting. He is uncomfortable in formal social settings and will slip away from garrison gatherings whenever possible. He is not antisocial so much as asocial—people are not his native environment.

### Motivation

Bélrik's primary motivation is protection of Élavendre's borderlands and the rare wildlife that inhabits them. He is not ideologically committed to his government but rather to the land itself. His secondary motivation is the desire to understand the ambush that nearly killed him and to prevent similar incursions. This curiosity drives him to investigate political and military tensions that exceed his formal responsibilities.

### Strengths

His tracking ability is exceptional and earned through decades of living in forest environments. His archery is accurate at remarkable distances. He understands the deep forest better than nearly anyone alive. His judgment in dangerous wilderness situations is reliable and often brilliant.

## Social

Bélrik occupies a liminal role within Élavendren society: respected as a specialist but regarded as emotionally distant and potentially untrustworthy by those who prefer more traditional social engagement. His status as half-forest-dweller makes him something of a legend to young soldiers but suspect to older officers.

## Companions

### Patrons

**Captain Aelwyn Llýdar**—The commander of Élavendre's border militia. Aelwyn is a professional soldier who respects Bélrik's competence and has explicitly protected him from reassignment despite his social awkwardness. She has encouraged his investigative work into the ambush that nearly killed him, providing resources quietly.

### Enemies

**Foreign Agent Kessian**—A survivor of the ambush that scarred Bélrik. Kessian was wounded in the attack and disappeared into the forest. Bélrik has tracked him sporadically over the past five years and believes he is still active in the borderlands. Kessian has left evidence of his movements—dead animals, disturbed camp sites—that suggests he is specifically taunting Bélrik. The two men have become locked in a long-distance confrontation that is somewhere between vendetta and psychological warfare.

## Plot Hooks

1. **The Ambush Investigation**—Bélrik's investigation into the ambush that scarred him leads him to discover that the foreign agents involved had support from within Élavendre—specifically, members of the regional government who were facilitating border incursions in exchange for political power and trade access. The conspiracy is significant and implicates people with connections to the capital. Captain Aelwyn warns him that pursuing the investigation will make him politically dangerous, and he will be removed or eliminated. Bélrik must choose between abandoning the investigation or becoming a fugitive within his own country.

2. **The Deep Forest Sanctuary**—Bélrik discovers evidence of a hidden settlement deep in the forest—a community of people who have left Élavendren civilization for various reasons (refugees, dissidents, religious separatists). The settlement is peaceful and self-sufficient, but its existence violates multiple laws. Bélrik has access to files that would expose the settlement and allow government forces to eliminate it. He is under pressure from his superiors to submit a report. He must choose between loyalty to law and loyalty to people he has come to respect.

3. **Kessian's Revelation**—Bélrik finally confronts Kessian after five years of tracking. Instead of combat, Kessian offers information: the ambush that scarred Bélrik was not a military operation but a punishment by a foreign government against Élavendren officials who had wronged Kessian's people. The "invasion" was actually a targeted execution. Kessian has evidence that the Élavendren government knew this and lied about the attack's nature to avoid diplomatic consequences. Bélrik must decide whether to report this truth or protect his government's credibility.

4. **The Cursed Forest**—Bélrik becomes aware that a region of deep forest is showing signs of corruption—trees dying unnaturally, animal behavior becoming erratic, the spiritual connection that Élavendren rangers feel with the forest becoming twisted and wrong. Investigation suggests the corruption is caused by artifact or ritual from an external source, possibly left by Kessian or similar foreign agents. Bélrik must venture into a genuinely dangerous region to identify and neutralize the threat, knowing that the forest itself is becoming hostile.

5. **The Young Ranger's Responsibility**—Bélrik is asked to mentor a promising young border patrol recruit. The recruit is physically talented but emotionally volatile—prone to aggressive behavior and poor judgment. Bélrik works hard to guide the recruit toward competence and restraint. But the recruit eventually admits that she is pregnant, fathered by a foreign agent she met during a border incident—a fraternization that is technically treason. She begs Bélrik not to report her. Bélrik must choose between military duty and his responsibility as a mentor to a young person making terrible but understandable mistakes.
