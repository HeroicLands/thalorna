---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Akhrem Re'en'fré
  title: ""
  given: Akhrem
  clan: Re'en'fré
  home: perankhet
  aliases:
    - Akhrem Reenfré
packFolder: northernfertileregiontakheperu
shortcode: akhremrnfr
type: being
data:
  banner: takheperubnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Animal Trainer
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: male
  species: null
  age: 38
  born: 682/8/6
  height: 1.85
  weight: 78.9
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark
    complexion: null
    extra_features:
      - a scar on the back of the left arm
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-thoth }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 8 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-rhtunic }
    - { model: sohl-sohl-armorgear-rhbrch }
    - { model: sohl-sohl-armorgear-rhkboot }
    - { model: sohl-sohl-armorgear-rhmntl }
    - name: Training whistle (bone)
      type: miscgear
      system:
        shortcode: trainingwhistle
        quantity: 2
        weight: 1
        value: 100
        durability: 3
    - name: Animal treats and feed
      type: miscgear
      system:
        shortcode: animaltreatsandfeed
        weight: 1
        quantity: 1
        value: 100
        durability: 3
    - name: Leather leashes and ropes (assorted)
      type: miscgear
      system:
        shortcode: leatherleashes
        weight: 1.5
        quantity: 3
        value: 100
        durability: 3
    - name: Animal grooming tools (brush, comb, scraper)
      type: miscgear
      system:
        shortcode: animalgroomingtools
        weight: 1
        value: 100
        durability: 3
    - name: Healing salve for animal wounds
      type: miscgear
      system:
        shortcode: healingsalve
        value: 1
        weight: 1
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - { model: sohl-sohl-containergear-wtrskin }
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

**Home:** [[place-perankhet|Per-Ankhet]]

# Appearance {#appearance}

![[akhremrnfr|Akhrem Re'en'fré]]{float: top-left}

Akhrem stands 6'1" tall with a heavy build. He has dark brown skin, jet black hair, and brown eyes. His features include a long face, a prominent nose, a narrow chin, full lips, dark brows, and sculpted cheeks. He has a scar on the back of his left arm.

# Dossier {#dossier}

Akhrem was born in the Empire of [[affiliation-empirtkhpr|Ta'Kheperu]], where the vast grasslands and savannas demanded respect for the creatures that inhabited them. His family had served as animal handlers for generations, a lineage stretching back to his great-grandfather who trained the sacred beasts for temple ceremonies. As a child, Akhrem displayed an almost preternatural ability to communicate with animals—horses would calm in his presence, wild dogs would lower their hackles, and even venomous serpents seemed to sense his lack of fear combined with his lack of malice.

At fifteen, he apprenticed formally to **Master Natarû**, the Empire's foremost animal trainer, learning not through books or doctrine but through intuition and practice. Natarû taught him that animals respond to intention and respect, not dominance and cruelty. For twenty-three years, Akhrem worked beside Natarû, specializing in the training of exotic beasts for noble hunts, military campaigns, and ceremonial purposes. When Natarû grew too aged to continue, Akhrem inherited both his knowledge and his responsibilities.

Now, at thirty-eight, Akhrem maintains a training compound near the Empire's border cities, where he works with creatures brought to him by nobility, hunters, and occasionally desperate merchants. Yet his dedication to his craft has come at a cost—a deep isolation from human society, born of both necessity and choice.

## Psyche

### Personality

Akhrem's nature is fundamentally reserved, though not from shyness. He has simply learned that most humans communicate carelessly, with their attention fractured between multiple concerns. Animals, by contrast, are present in their communication; they speak through body language and scent and subtle shifts in posture. Over decades, Akhrem has become more fluent in the languages of beasts than in the languages of men.

When forced to interact with people, he is cordial but limited in expression, often answering questions with the fewest possible words. This reticence is frequently misinterpreted as hostility, when in fact it reflects his simple lack of interest in social niceties. He sees through flattery, appreciates directness, and judges individuals entirely on whether their intentions toward animals are honest. Those who befriend him discover an unexpectedly dry wit and a hard-won wisdom about patience and observation.

With animals, he displays a tenderness that surprises those who encounter it. He speaks to creatures in soft tones, celebrates small victories in their training, and mourns their deaths with unguarded emotion. His fellow-feeling—one of his most highly developed qualities—is reserved almost entirely for non-human beings.

### Motivation

Akhrem's driving force is the preservation of balance between humanity and the wild creatures that share their world. He believes that most of the suffering inflicted upon animals stems from human ignorance rather than malice, and that training animals properly prevents both animal suffering and human harm. He envisions a world where noble hunters rely upon trained beasts that understand their role and take pride in their work, where military forces employ creatures as true partners rather than mindless weapons.

Akhrem also carries a private mission to discover and preserve knowledge about animal training that his mentor Natarû possessed, fearing that if he passes without an heir, centuries of accumulated wisdom will vanish. He takes on apprentices reluctantly, waiting for someone who demonstrates the necessary gifts—and his standards are exacting.

### Strengths

- **Masterful Animalcraft**: His ability to train, communicate with, and command animals borders on the mystical. His animalcraft, with four specializations, represents decades of dedicated study and natural talent combined. Wild creatures calm in his presence; aggressive beasts become obedient companions.
- **Exceptional Endurance**: A constitution built for long hours working with demanding animals, often in harsh conditions. His endurance allows him to maintain focus and physical capability even during grueling multi-day training sessions.
- **Superior Tracking and Survival**: Years living in the borderlands have granted him expert understanding of wilderness navigation, animal signs, and resource procurement. His tracking and survival skills make him much sought for hunting expeditions or locating lost creatures.
- **Skilled Riding**: His skill with horses and other mounts, with five riding specializations, makes him a fine mounted combatant and scout.
- **Keen Awareness**: A sharp perception and awareness that allow him to notice subtle signs others overlook—the signs of illness in animals, the approach of dangerous creatures, the emotional state of those around him.
- **Combat Capability**: While not a warrior by vocation, his work with dangerous beasts has honed his martial skills. His melee and throwing skills make him reasonably competent in direct conflict.

### Weaknesses

- **Profound Distrust of Humans**: Years of isolation and bitter experiences with those who mistreat animals have left Akhrem skeptical of human motives. He assumes wrongdoing until proven otherwise, making alliance-building difficult.
- **Poor Communication Skills**: His minimal eloquence and tendency toward brevity make him ineffective at negotiation, persuasion, or any dealing requiring nuance or a feel for others' moods. He often inadvertently offends through bluntness.
- **Emotional Vulnerability Around Animals**: While his emotional distance from humans serves him well, his attachment to animals he trains creates a vulnerability. Those who threaten his beasts can manipulate him into poor decisions.
- **Limited Creativity in Non-Animal Contexts**: His low creativity means he struggles with unfamiliar problems outside the domain of animal training. Complex social or political puzzles frustrate him.
- **Aging Frame**: At thirty-eight, he remains physically capable, but the years of demanding physical labor are accumulating. He tires more easily than he did in youth and recovers more slowly from injury.

## Social

### Patrons

- **Lord Vaskan of the [[place-southrnmrch|Southern March]]**: A noble who has contracted Akhrem for decades, providing both animal resources and payment in exchange for trained beasts for noble hunts and the occasional military campaign. Vaskan is one of the few humans Akhrem respects, as the lord treats animals with consideration.
- **The Temple of Sacred Beasts**: A religious institution that occasionally seeks Akhrem's skill for the training and care of sacred creatures used in ceremonies, offering both prestige and reasonable compensation.
- **The Merchant Consortium**: Wealthy traders occasionally hire Akhrem to train guard beasts, assess the condition of animals brought through the trade routes, or consult on the transport and care of exotic creatures destined for distant markets.

### Enemies

- **Kharven the Brutal**: A rival animal trainer who believes in domination and fear as training methods. Kharven has sabotaged several of Akhrem's commissions, poisoned animals in his care, and spread rumors about Akhrem's competence. The enmity is personal; years ago, Lord Vaskan chose to employ Akhrem over Kharven, a choice Kharven has never forgiven. Recently, Kharven has been working with darker patrons, suggesting his malice toward Akhrem may escalate.
- **The Bloodlust Cult**: A secret society that captures exotic animals for forced combat spectacles. They view Akhrem's refusal to train beasts for such purposes as obstruction, and have made several attempts to steal particularly valuable animals from his compound.

### Affiliations

- **The Hunters' Guild of Ta'Kheperu**: A formal organization of hunters and animal specialists. While Akhrem maintains membership and respects the Guild's codes, he remains something of an outsider due to his unorthodox methods and preference for solitude.

## Plot Hooks

1. **The Dying Mentor's Legacy**: Akhrem receives word that Master Natarû, ancient and ailing, has requested his presence before death. Natarû claims to possess knowledge of a storied beast—a creature of immense rarity and power—that he has never taught Akhrem about, fearing the responsibility too great. Now, believing his end is near, Natarû wishes to pass this knowledge forward. The problem: the creature may be more than myth, and powerful forces seek to control it.

2. **The Cursed Animal**: A desperate merchant brings Akhrem an animal of obvious quality that nonetheless proves impossible to train—it rages against handlers, resists all conventional methods, and seems to suffer from an internal torment. Akhrem's investigation reveals signs suggesting magical corruption or curse. To help the creature, he must work where animal care and occult forces meet, seeking allies among those with arcane knowledge.

3. **The Poaching Ring**: Akhrem discovers evidence of an organized poaching operation targeting the rarest animals in the Empire. The operation is larger and better-organized than any he has encountered before, with military-style structure and significant resources. Following the trail leads him toward powerful figures in government and nobility, forcing him to choose between his loyalty to Lord Vaskan and his obligation to protect the creatures under threat.

4. **The Stolen Beast**: One of Akhrem's prized trained animals—a magnificent creature worth a fortune and irreplaceable to him—is stolen by persons unknown. The investigation leads him into the criminal underworld of Ta'Kheperu's cities, where he must employ unfamiliar tactics of deception and information-gathering to track the theft. The trail suggests involvement of Kharven, but the conspiracy appears far larger than personal rivalry.

5. **The Sacred Charge**: The Temple of Sacred Beasts approaches Akhrem with a desperate commission: a sacred creature, essential to maintaining the religious ceremonies that bind the Empire together, is dying of an unknown affliction. They believe Akhrem's skills represent the only hope for the animal's recovery. Success would grant him influence and resources unprecedented in his life; failure would devastate both the creature and the social order itself. As Akhrem works to understand the creature's illness, he uncovers evidence suggesting the affliction was deliberately induced—and the perpetrator is someone high within the Temple hierarchy.
