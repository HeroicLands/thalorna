---
tags:
  - heroes-and-knaves
  - soldiery
  - character
name:
  full: Ídrisè Kórisvar
  title: ""
  given: Ídrisè
  clan: Kórisvar
  home: elanmere
  aliases: []
packFolder: aureldiaprovenzia
shortcode: idriskrsvr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Bodyguard
  stations: []
  lore:
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: female
  species: null
  age: 29
  birthday: 691/1/15
  height: 1.91
  weight: 86.2
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: warm
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-taranon }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-weapongear-shrtswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltstunic }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-weapongear-rndsh }
    - { model: sohl-sohl-miscgear-medsupil, system: { quantity: 4 } }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 3 } }
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: First aid kit (salves, poultices, bandages)
      type: miscgear
      system:
        shortcode: firstaidkit
        weight: 0.6
        value: 100
        durability: 3
    - name: Survival kit (rope, grappling tools, climbing gear)
      type: miscgear
      system:
        shortcode: survivalkit
        weight: 1.5
        value: 100
        durability: 3
    - name: Whetstone for blade maintenance
      type: miscgear
      system:
        shortcode: whetstoneforblade
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-backpk }
    - { model: sohl-sohl-containergear-wtrskin }
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

![[idriskrsvr|Ídrisè Kórisvar]]{float: top-left}

Ídrisè stands 6'3" tall with a medium build. She has warm olive skin, brown hair, and green eyes. Her features include an angular face, a strong nose, a pointed chin, full lips, arched brows, angular cheeks.

# Dossier {#dossier}

## Background

### The Foundling

Ídrisè's earliest memory is of cold stone and the sound of chanting. She was raised in the Shrine of **[[lore-taranondty|Táranon]] the Stormkeeper**, in the Kingdom of [[affiliation-kngdmprvnz|Provènzia]], by a community of warrior-monks devoted to the storm god. Whether she was left there as an infant or born within the shrine, no one would ever tell her—the monks spoke only of her arrival as an act of divine will. They raised her alongside their sons and daughters, training her from childhood in the disciplines of blade, body, and spirit. While other children played, Ídrisè trained. While other girls learned needlework, she learned the anatomy of vulnerable points on the human body.

### The Training and the Breaking

At sixteen, the shrine was attacked by bandits seeking to loot the treasury. Ídrisè fought alongside the elder monks and proved herself devastatingly effective. In the aftermath, as the wounded were tended and the dead were mourned, the shrine's hierarchy made a decision: Ídrisè was too dangerous to keep cloistered. She was sent into the world with the monks' blessing to become what she was born to become—a protector, a warrior, a tool of the god's will. The transition from the spiritual discipline of the shrine to the brutal pragmatism of the mercenary world was profoundly disorienting.

### Current Path

For the last decade, Ídrisè has worked as an independent bodyguard and security expert in Provènzia's major cities, though she maintains loose affiliation with the Mercenaries Guild for contract purposes. She has developed a sterling reputation for absolute reliability and lethality, taking contracts only with clients whose goals she can morally accept. Her rates are high, and her services in constant demand. Yet beneath the professional competence lies a profound disconnection from normal human life—she moves through the world aware of threat angles and exit routes, unable to simply exist without tactical assessment.

## Psyche

### Personality

Ídrisè is reserved to the point of austerity, speaking only when necessary and rarely about anything beyond the immediate professional concern. Her humor, when it emerges, is dry and often dark—laughing at absurdities that others might find horrifying. She is not unfriendly, but she maintains emotional walls so high that even those she has worked with for years describe her as distant. She has learned through painful experience that attachments create vulnerabilities, and vulnerabilities get people killed.

However, beneath this fortress of control lies a deeply ethical individual. She will not take contracts to harm the innocent, refuses to work for obviously corrupt nobility, and has walked away from lucrative work when she discovered the true nature of what she was being asked to do. This rigid morality, combined with her lethal competence, makes her rare—a killer with a conscience, which some see as contradiction and others as profound integrity.

### Motivation

Ídrisè is driven by a need to protect, rooted in the spiritual training of the shrine but complicated by her observation that most people are not worthy of protection—they pursue petty ambitions and hurt those weaker than themselves. Still, she continues working because the act of preventing harm is the closest she comes to feeling meaningful purpose. Beneath this lies a deeper motivation she seldom acknowledges: she seeks redemption for the damage she causes, attempting to balance the scales by protecting innocent lives from those who would prey upon them.

### Strengths

- **Exceptional Martial Skill**: Her combat training spans multiple disciplines and decades of practice. She is ambidextrous, skilled with blade and ranged weapons, and devastatingly effective in hand-to-hand combat. Few people in the realm could match her in single combat.
- **Threat Assessment and Tactical Analysis**: She reads situations with almost supernatural accuracy, identifying threats and exit strategies within moments of entering any space. This skill extends to understanding human behavior and motivation.
- **Inhuman Discipline and Control**: She maintains focus and calm in situations where others panic. She can endure pain, cold, exhaustion, and fear without allowing these to affect her judgment or performance.
- **Absolute Reliability**: Once committed to a contract or cause, she follows through with complete dedication. Those who hire her know they are getting what they pay for, without compromise or abandonment.
- **Perception and Awareness**: Her senses are exceptionally sharp; she notices details others miss and remains aware of her surroundings at all times.
- **Physical Endurance and Strength**: Years of training have left her capable of incredible feats of stamina and strength. She can travel for days on minimal rest, carry heavy loads, and push through conditions that would incapacitate ordinary people.

### Weaknesses

- **Emotional Isolation and Difficulty Forming Bonds**: Her walls are so high that even those closest to her struggle to truly connect. She is incapable of genuine intimacy and views emotions as weaknesses to be controlled rather than experienced.
- **Over-Protectiveness**: Because she views the world primarily through the lens of threat, she often smothers those in her charge with excessive caution, preventing them from living normally or taking acceptable risks.
- **Inability to Relax or Be Vulnerable**: She never truly rests, always maintaining tactical awareness. This constant vigilance exhausts her in ways that others cannot understand.
- **Limited Social Skills**: She struggles with small talk, emotional communication, and the unspoken rules of polite society. Her directness often offends people who expect more delicacy.
- **Moral Rigidity**: While her ethics are admirable, they occasionally prevent her from taking expedient action. A more flexible person might achieve better outcomes in complex situations.
- **Difficulty with Ambiguity**: She prefers situations where right and wrong are clear. When morality becomes gray and complex, she struggles with decision-making and second-guesses herself.

## Social

### Patrons

- **Duke Reginald Stormthorne**: A minor nobleman of genuine virtue who has employed Ídrisè multiple times for security work. He respects her integrity and has become one of the few people whose company she actively seeks rather than merely tolerates.
- **Lady Merchant Selena Goldleaf**: A wealthy trader specializing in luxury goods who employs Ídrisè for high-value escort work. Their professional relationship has extended into something approaching friendship, though Ídrisè would never use that word.
- **The Shrine of Táranon**: The monks who raised her remain her deepest loyalty. Though she no longer practices their faith in any formal way, she maintains a connection to the community and would move mountains to protect them.

### Enemies

- **The Red Syndicate**: A criminal organization that attempted to force Ídrisè into their employ. When she refused, they placed a contract on her life. The contract remains technically active, though several assassins have already tried and failed. The Syndicate views her refusal as an insult that must be answered.
- **Lord Petyr the Cruel**: A nobleman whose cruelty toward servants and dependents violated every principle Ídrisè holds. When she discovered he was considering hiring her services, she refused and then discovered evidence of his crimes. She has become a quiet enemy, gathering information against him while maintaining professional distance.
- **Her Own Past**: In her younger years as a mercenary, before she developed her current moral code, Ídrisè took contracts whose purposes she now regrets. She wonders if any of her former victims or their families will one day come seeking revenge.

### Affiliations

- **The Mercenaries Guild of Provènzia**: She maintains loose membership for contract purposes, though she is often at odds with the Guild's leadership over their willingness to take any contract regardless of moral considerations.
- **The Shrine of Táranon**: Her spiritual home and place of origin, where the warrior-monks still speak of her as one of their most accomplished students, though she has moved beyond their direct community.

## Plot Hooks

1. **The Mirror in the Storm**: Ídrisè is hired to protect **Lord Kael Vesperos**, a nobleman she has guarded before who seems paranoid and frightened. He confesses that he has become aware of a shadow that mirrors his movements—a skilled fighter matching his patterns, present at multiple locations where he has been, never attacking but always watching. Kael is convinced he is being hunted by a professional assassin. As Ídrisè investigates, she discovers that the shadow is actually **Myrrh**, another warrior trained at the Shrine of **Táranon** decades before Ídrisè was born. **Myrrh** claims to be hunting Kael for a dark secret in his past, and asks Ídrisè to stand aside. Ídrisè must decide whether her loyalty to her client supersedes her respect for a sister from the Shrine, and whether she truly knows her employer's past.

2. **The Forbidden Vow**: Ídrisè falls into an unexpected relationship with **Kiran**, a merchant's daughter, over the course of a multi-month contract protecting the merchant's household. It is the first genuine emotional connection Ídrisè has allowed herself in years. When the contract ends, Kiran asks Ídrisè to abandon her mercenary life and simply be with her. At the same moment, the Shrine of **Táranon** calls upon Ídrisè for a critical mission—monks are being kidnapped and experimented upon by a dark sorcerer seeking to create a new form of warrior-slave. Ídrisè's training and combat skills are desperately needed. She is forced to choose between the personal happiness she has never allowed herself and the duty that defines her entire existence.

3. **The Assassin's Interrogation**: Ídrisè captures an assassin who was sent to kill one of her clients. Rather than execute him, she interrogates him and is shocked to learn that the employer is not the person she suspected, but rather someone from deep within the mercenary underworld. The assassin reveals the existence of a secret network of warrior-slaves—people like Ídrisè, trained from childhood but kept under magical compulsion to obey their handlers. The assassin himself claims he was once free but was captured years ago. He begs Ídrisè to help him break free of his magical bonds and promises to help her understand whether the shrine's training methods, however benign, contained traces of the same dark magic.

4. **The Shrine's Dark Secret**: The monks of the Shrine of **Táranon** call Ídrisè home urgently. When she arrives, she discovers that one of the senior monks, **Master Aldwyn**, has begun performing mysterious rituals and seems to be attempting to create warrior-slaves similar to the ones she discovered in the previous plot hook. Some among the monks believe this is necessary to defend against great evils coming; others want to stop him. Ídrisè is confronted with the possibility that her entire upbringing may have been preparation for purposes she never fully understood, and that the place she considered sanctuary may have been complicit in creating a system of magical slavery.

5. **The Replacement**: A new warrior, **Cassian**, arrives in the city with a reputation nearly matching Ídrisè's own. Within days, Cassian begins taking contracts that would normally come to Ídrisè. Unlike other competitors, Cassian seems to know her methods and can counter her approaches. When Ídrisè finally confronts him, she is stunned to recognize her own mirror image—Cassian is a clone or twin created through magical means, deliberately crafted to match her abilities. Someone has stolen her genetic essence and created a replacement, and Cassian claims to be the "true" version while suggesting that Ídrisè is the copy. As Ídrisè unravels this mystery, she must question everything about her own origins and identity.
