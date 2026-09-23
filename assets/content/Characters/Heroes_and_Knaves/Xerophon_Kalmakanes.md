---
tags:
  - heroes-and-knaves
  - soldiery
  - character
name:
  full: Xerôphôn Kâlmâkanês
  title: ""
  given: Xerôphôn
  clan: Kâlmâkanês
  home: ashenmere
  aliases: []
packFolder: midhalionvylaria
shortcode: xrphnklmkns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Gaoler
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provncmktr
  gender: male
  species: null
  age: 39
  birthday: 681/5/18
  height: 1.8
  weight: 78
  frame: medium
  appearance:
    eye_color: green
    hair_color: dark_brown
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a scar on the left ear
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-maul }
    - { model: sohl-sohl-armorgear-lshirt }
    - { model: sohl-sohl-armorgear-ltrsr }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-mvest }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-frtns, system: { quantity: 2 } }
    - name: Iron key ring
      type: miscgear
      system:
        shortcode: ironkeyring
        weight: 1
        value: 100
        durability: 3
    - name: Shackles and restraint chains
      type: miscgear
      system:
        shortcode: shacklesandrestraint
        weight: 3
        value: 100
        durability: 3
    - name: Guard's whistle
      type: miscgear
      system:
        shortcode: guardswhistle
        weight: 0.1
        value: 100
        durability: 3
    - name: Prison logbook
      type: miscgear
      system:
        shortcode: prisonlogbook
        weight: 0.5
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchlg }
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

![[xrphnklmkns|Xerôphôn Kâlmâkanês]]{float: top-left}

Xerôphôn stands 5'11" tall with a medium build. He has tanned weathered skin, dark brown hair, and green eyes. His features include a narrow face, a hawkish nose, an angular jawline, a wide mouth, dark brows, and sculpted cheeks. He has a scar on his left ear.

# Dossier {#dossier}

**The Soldier's Path**

Xerôphôn was not born to the work of imprisonment. He entered adulthood as a soldier of the City Watch in [[affiliation-provncmktr|Moktur]], the [[affiliation-vylarinmpr|Empire of Vylaria]]'s mountainous northern province, distinguishing himself as a reliable, methodical officer willing to perform the less glamorous work of law enforcement. Where younger officers sought glory and advancement through dramatic arrests or visible patrols, Xerôphôn specialized in the tedious work of evidence gathering, the keeping of records, and the patient questioning of suspects. His superiors recognized in him an unusual combination: a man of integrity who refused to participate in corruption, coupled with the flexibility to understand that law existed on a spectrum and that rigid application of rules without consideration of context served justice poorly.

**The Jailer's Burden**

At the age of twenty-one, following a street altercation that left him with the scar on his ear – a wound inflicted by a suspect's desperate blade – Xerôphôn made the difficult choice to move from street patrol to incarceration work. The Empire of Vylaria operated an extensive prison system, and the position of Jailer – a guard supervisor responsible for the daily management and discipline of confined prisoners – carried significant authority and responsibility. Xerôphôn's eighteen years in this position have been marked by a reputation for fairness, consistency, and an almost eerie competence in maintaining order without resorting to excessive violence. He understands the minds of prisoners in an intuitive way, recognizing the hierarchies and tensions that develop among confined populations, and he manages these forces with the delicacy of someone playing a complex game while aware that a single miscalculation could result in riot and death.

**The Iron Structure**

Over nearly two decades, Xerôphôn has become, in many respects, the de facto ruler of the largest detention facility in Moktur. Prison officials defer to his judgment regarding prisoner classification, security arrangements, and disciplinary measures. Younger guards look to him for guidance and mentorship. Even the prisoners, despite their natural enmity toward their captors, recognize in him a man of rigid principle who maintains order through consistent, predictable responses rather than through arbitrary cruelty. Xerôphôn is not gentle, but he is just, and in a prison, justice is a form of mercy.

**The Approaching Obsolescence**

Now at thirty-nine winters, Xerôphôn finds himself increasingly aware of generational change within his trade. A new generation of younger guards, trained in ever more elaborate methods of control and watching, approaches imprisonment more like a problem of arrangement than a human one. They speak of new systems, new chains, and new locks that promise to reduce the need for the kind of intuitive, constant attention that Xerôphôn has made his life's work. He senses, though it has not been explicitly stated, that his position may eventually become redundant, superseded by systems that promise to do more with fewer men at lower cost. This awareness does not frighten him as such, but it fills him with a quiet feeling of ending, of a way of life approaching its natural conclusion.

## Psyche

### Personality

Xerôphôn is a man of extreme discipline, emotional economy, and almost monastic dedication to principle. He speaks sparingly, and when he does, his words are direct and unadorned. He does not traffic in flattery, small talk, or social niceties that serve no purpose. This can read to those unused to him as coldness or even cruelty, but those who work closely with him understand that his directness is actually a form of respect – he treats everyone with sufficient regard to be truthful rather than soothing.

His sense of duty borders on the theological. Xerôphôn believes that his work matters – that the maintenance of order, the enforcement of consequence, and the containment of those judged dangerous are moral necessities. This belief sustains him through the grimness of his daily work and prevents the cynicism that affects many in similar positions.

Xerôphôn also possesses a subtle capacity for compassion that he carefully constrains to prevent it from compromising his effectiveness. He will, on rare occasions, extend a small mercy – a slightly better treatment, a quiet word of encouragement to a prisoner honestly attempting reform – because he understands that complete dehumanization serves no constructive purpose. However, these mercies are offered carefully and never in ways that would suggest weakness or inconsistency.

### Motivation

Xerôphôn is motivated fundamentally by the belief that order is a prerequisite for all other goods, and that his work – however unpleasant – is essential to maintaining that order. He has internalized the philosophy of the Aurèldián Pantheon's emphasis on organization and structure, viewing himself as a servant of larger cosmic principles of law and consequence. He seeks neither glory nor advancement, only to perform his duties with the maximum competence and integrity of which he is capable. As he approaches the latter part of his life, he is motivated by an awareness that his legacy will be measured not in dramatic achievements but in the consistency of his principles and the respect of those who worked beneath him.

### Strengths

- **Authoritative Presence**: Xerôphôn's bearing and voice command immediate respect and obedience. His ability to establish and maintain control over potentially dangerous populations is rare and relies primarily on consistency rather than excessive force.
- **Profound Knowledge of Human Nature**: His nearly two decades managing confined populations have given him deep insight into how people think, into deception, and into the subtle indicators of danger or instability.
- **Systematic Competence**: He excels at organizing complex systems, managing hierarchies, maintaining records, and establishing routines that allow large numbers of people to coexist in close quarters without disorder.
- **Unquestionable Integrity**: No one – from the highest official to the lowest prisoner – questions Xerôphôn's commitment to his stated principles. His word is considered absolutely reliable.

### Weaknesses

- **Inflexibility**: Xerôphôn's commitment to consistent application of rules sometimes prevents him from recognizing when situations call for flexibility or when circumstances have changed enough to justify different approaches.
- **Emotional Distance**: His discipline and reserve, while useful in his work, can prevent close connection with others. He struggles to communicate in ways that acknowledge emotional reality or individual human complexity.
- **Resistance to Innovation**: He views new systems and methods with suspicion, believing that proven approaches are inherently superior to untested novelty, sometimes preventing adoption of changes that would help.
- **Limited Vision Beyond Duty**: Xerôphôn has organized his entire life around his role as Jailer. He has little idea of who he is or what he is for beyond this function, and faces real uncertainty as he contemplates eventual retirement or diminishment of his position.

## Social

### Patrons

- **Commander Vâlaris of the City Watch**: The highest official in Moktur's law enforcement structure who values Xerôphôn's judgment and regularly defers to his recommendations regarding prison management.
- **The Imperial Council of Moktur**: Various officials who have depended upon Xerôphôn's discretion and integrity in managing sensitive prisoners and classified matters.
- **Magistrate Théodôr the Strict**: A justice official known for harsh sentencing who appreciates Xerôphôn's reliable implementation of punishment and consequence.

### Enemies

- **Ferûn the Escaped**: A cunning prisoner who orchestrated an attempted escape eight years ago that resulted in the death of three guards. Though captured and returned, the incident damaged Xerôphôn's reputation for complete control, and Ferûn remains in the facility as a subtle ongoing insult to his authority.
- **Warden Kasânder**: The political administrator appointed to manage the prison bureaucratically, a man who Xerôphôn views as incompetent and corrupt. They maintain an awkward relationship of mutual necessity while harboring deep disdain for one another.
- **The Brotherhood of the Freed**: A criminal organization dedicated to liberating imprisoned members through violence, bribery, or escape. Xerôphôn has thwarted multiple attempts at incarcerated members' release, making him a known enemy to the organization.

### Affiliations

- **The City Watch of Moktur**: Xerôphôn maintains formal affiliation with the Watch though he works primarily in the prison system, and his judgment on matters of law enforcement carries significant weight.

## Plot Hooks

1. **The Political Prisoner**: A high-status prisoner of unclear guilt is placed under Xerôphôn's custody, with covert instructions from government officials to see to the prisoner's "safety" while also effectively removing them from political relevance. Xerôphôn begins to suspect that the prisoner is innocent and that corruption exists at the highest levels of government. The party becomes entangled when they discover that the prisoner actually committed the crime they're charged with, but other powerful people have orchestrated the imprisonment to consolidate power. Xerôphôn can maintain order and follow orders, or act on suspicions that challenge the legitimacy of his entire system.

2. **The Brotherhood's Infiltration**: The Brotherhood of the Freed successfully places an agent inside the prison disguised as a guard. This agent slowly begins to organize a coordinated escape attempt and to subtly undermine Xerôphôn's control without making it obvious. Xerôphôn becomes increasingly aware that something is wrong but cannot identify the source of the problem. The party must help him investigate and identify the infiltrator before a major uprising occurs, all while Xerôphôn struggles with the realization that his control was not as complete as he believed.

3. **The Innocence Revelation**: Xerôphôn discovers irrefutable evidence that a prisoner he has overseen for eight years is actually innocent of the crime for which they were imprisoned, imprisoned through judicial error or deliberate framing. The prisoner is long resigned to their fate, but Xerôphôn becomes obsessed with securing their release or pardon. This personal quest puts him in conflict with the legal system he has served his entire life, forcing him to either undermine his own role or compromise his integrity.

4. **The Reformer's Challenge**: A reforming new administrator is appointed to manage the prison system and introduces sweeping changes to Xerôphôn's carefully maintained routines – new ways of watching the cells, different approaches to discipline, altered hierarchies designed to reduce guard authority. Xerôphôn is convinced these changes will result in chaos and bloodshed, and he is partially correct, though not entirely in the ways he anticipates. The party is caught between Xerôphôn's proven experience and the real value of reform, helping both the old systems and new approaches to coexist or resolve their contradiction.

5. **The Escape Conspiracy**: A particularly dangerous and charismatic prisoner, recognized to have significant support among the general population, is discovered to be planning an elaborate escape. However, the party and Xerôphôn gradually realize that the escape is actually a cover for a larger conspiracy – possibly involving officials outside the prison, possibly involving external organizations with stakes in the prisoner's freedom or death. As they unravel the conspiracy, they have to decide whether to prevent the escape, allow it and track the prisoner, or treat the conspiracy as a threat to the city itself that outweighs the prisoner's own importance.
