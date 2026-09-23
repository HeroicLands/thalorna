---
tags:
  - heroes-and-knaves
  - guilded
  - tradesfolk
  - character
name:
  full: Alýkos Sampsiôn
  title: ""
  given: Alýkos
  clan: Sampsiôn
  home: selimara
  aliases: []
packFolder: helladbyzaria
shortcode: alykosmpsn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Physician
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: null
  age: 42
  birthday: 678/3/15
  height: 1.7
  weight: 64.4
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: gray
    skin_color: light
    complexion: tanned
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-sacredforge }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 18 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 72 } }
    - { model: skill-helnkscrpt, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-lshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wclk }
    - name: Medical text (comprehensive anatomy treatise)
      type: miscgear
      system:
        shortcode: medicaltext
        weight: 1
        value: 20
        durability: 4
    - { model: sohl-sohl-miscgear-surgkit }
    - name: Herbal remedies (assorted tinctures)
      type: miscgear
      system:
        shortcode: herbalremedies
        quantity: 8
        value: 12
        weight: 1
        durability: 3
    - name: Surgical instruments (scalpels, lancets, forceps)
      type: miscgear
      system:
        shortcode: surgicalinstruments
        weight: 0.5
        value: 8
        durability: 5
    - name: Healing poultices (prepared)
      type: miscgear
      system:
        shortcode: healingpoultices
        quantity: 4
        value: 2
        weight: 0.5
        durability: 1
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Herbal reference guide (personal notes)
      type: miscgear
      system:
        shortcode: herbalreferenceguide
        weight: 0.5
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

![[alykosmpsn|Alýkos Sampsiôn]]{float: top-left}

Alýkos stands 5'7" tall with a medium build. He has light tanned skin, gray hair, and dark hazel eyes. His features include a long face, a strong nose, a pronounced chin, full lips, and expressive brows.

# Dossier {#dossier}

Alýkos was born into a merchant family of the [[affiliation-byzarianlg|Byzarian League]], the younger son of a silk trader who expected him to eventually manage family commerce. Yet from childhood, Alýkos demonstrated an obsessive fascination with the mechanisms of the body and the nature of disease. At sixteen, against his father's strong objections, he apprenticed himself to **Physician Theordos**, a respected healer whose small practice operated from a converted storehouse near the harbor district.

Theordos recognized immediately that Alýkos possessed, beyond intelligence, a rare combination of precise observation, logical reasoning, and compassion for the suffering. For twelve years, Alýkos worked as apprentice, then journeyman, absorbing medical knowledge both from formal study of inherited texts and from the relentless practice of treating diverse patients. At twenty-eight, he completed his training and established his own practice, which quickly became known throughout the League's merchant and noble circles.

For the past fourteen years, Alýkos has maintained a thriving medical practice, training young physicians, consulting on difficult cases for other healers, and slowly building a comprehensive personal library of medical texts, herbal references, and anatomical illustrations. His reputation for accuracy in diagnosis and new methods of treatment has made him wealthy and respected, yet increasingly isolated by the dedication that created his success.

## Psyche

### Personality

Alýkos is a man of passionate intellect, whose mind moves at velocities that leave most casual conversation behind. He speaks with precision, preferring clarity over social convention, and will interrupt pleasantries to engage in substantive discussion of his latest medical theories or observations. This directness, combined with his evident enjoyment of intellectual challenge, makes him fascinating to those who can match his pace but somewhat intimidating to those who cannot.

Despite his devotion to reason, Alýkos possesses a deep wellspring of feeling for his patients. He listens to symptoms and to the circumstances behind illness, understanding that poverty, fear, and familial conflict are as much causes of disease as any contagion. His bedside manner is very gentle; even as he palpates an abdomen to test for inflammation or peers into an eye to assess clarity, he speaks with a soothing tone that inspires confidence.

His composure covers a man struggling under accumulated grief. Each patient he cannot save, each illness he cannot master despite his knowledge and effort, accumulates as a small wound in him. He has become increasingly solitary, withdrawing from social engagement beyond what his practice demands, channeling his emotional energy into his work.

### Motivation

Alýkos is driven by a consuming desire to advance medical knowledge itself, and not only to apply what is already understood. He believes that many of the diseases that plague humanity can be overcome if the fundamental mechanisms of illness are properly understood. He envisions a future in which physicians operate from a foundation of tested knowledge rather than inherited tradition and educated guesswork.

Privately, Alýkos is also motivated by a need for mastery and control—not of people, but of disease. His inability to save every patient, despite his growing skill, haunts him. He pursues difficult cases with almost obsessive intensity, driven by the conviction that the right knowledge, the right approach, the right insight will unlock the secrets of recovery. This motivation has become increasingly unhealthy; he drives himself toward exhaustion and sacrifices personal relationships in pursuit of medical breakthroughs.

### Strengths

- **Unparalleled Medical Expertise**: His physician skill, with four specializations, is mastery of the healing arts. There are few ailments within the Byzarian League that Alýkos cannot diagnose or treat with great effect. His knowledge encompasses herbalism, surgical technique, and the subtle signs of internal disease.
- **Exceptional Perception**: His perception lets him notice minute signs—a discoloration of the lips suggesting anemia, a tremor indicating nerve damage, a subtle smell indicating certain infections. Few details escape his observation.
- **Extensive Herbal and Alchemical Knowledge**: His herblore and brewing skills are considerable, allowing him to create medicines, tinctures, and remedies of great potency. His knowledge of mineral properties and their medicinal uses has few equals.
- **Eloquence and Discourse**: His ability to communicate complex medical concepts clearly makes him an effective teacher and consultant. Patients understand his explanations; students grasp his lessons; other healers respect his reasoning.
- **Intellectual Reasoning**: His reasoning allows him to draw observations together into theories, identify patterns across diverse cases, and make intuitive leaps that advance his understanding of disease.
- **Charm and Empathy**: Despite his intensity, his compassion and ability to make patients feel understood are themselves a great part of the cure. He instinctively understands the emotional side of suffering.

### Weaknesses

- **Emotional Burden**: The accumulated weight of patient deaths, incurable illnesses, and cases beyond his reach has left Alýkos emotionally fragile. He is prone to despondency, occasionally verging on despair when faced with particularly tragic cases.
- **Work Obsession**: His tendency to become entirely focused on the problems of his practice means he neglects personal relationships, his own health, and his own grief. Those close to him struggle with his absence even when physically present.
- **Reduced Physical Capability**: His focus on intellectual pursuits has left his physical strength and endurance modest compared to those of more active lifestyles. He tires more easily than younger or more vigorous companions.
- **Perfectionism**: His high standards and unwillingness to accept limitations in his own knowledge mean he is frequently frustrated with the gaps in medical knowledge, or with colleagues whose understanding falls short of his own expectations.
- **Limited Combat Ability**: His lack of martial training makes him vulnerable in physical conflict, a limitation that troubles him intellectually even if not practically.
- **Social Isolation**: His intensity and tendency to dominate conversation with technical medical details make company awkward for him. Most casual friendships have dwindled over the years.

## Social

### Patrons

- **House Polytimós**: A noble merchant family that has engaged Alýkos for decades as their personal physician, providing stable income and access to their extensive private library for research purposes.
- **The Physicians' Guild of the Byzarian League**: Both as member and occasional consultant, the Guild provides Alýkos with referrals, research materials, and standing among his peers. However, his sometimes heterodox approaches occasionally create friction with more traditionalist guild members.
- **The Temple of Múrkír**: The religious institution has engaged Alýkos to advise on public health matters and the treatment of pilgrims afflicted with various ailments, providing both financial support and access to the temple's historical medical archives.

### Enemies

- **The Traditionalist Faction of the Physicians' Guild**: Conservative healers who view Alýkos's experimental approaches and willingness to question inherited medical doctrine as dangerous and disrespectful. Led by the elderly physician **Markinos**, they regularly oppose his positions within the Guild and spread rumors that his new methods have resulted in patient deaths—a charge with just enough truth to be damaging.
- **Charlatan Healers**: Various fraudulent practitioners throughout the League whom Alýkos has publicly exposed or reported to authorities, resulting in lost income for them. Some have threatened retaliation.

### Affiliations

- **The Physicians' Guild of the Byzarian League**: A formal organization maintaining standards for medical practice and licensing. Alýkos holds high standing despite occasional controversy.
- **The Circle of Medical Scholars**: An informal association of physicians and natural philosophers who share research and meet periodically to discuss advances in medical knowledge.

## Plot Hooks

1. **The Plague**: A mysterious illness begins spreading through the League's port cities, bearing symptoms Alýkos has never encountered before. The disease progresses rapidly and proves resistant to standard treatments. As the affliction spreads, panic grows, and desperate patients flock to Alýkos seeking a cure. He becomes locked in an intellectual race against the disease itself, attempting to understand its nature before it claims thousands. The investigation reveals that the plague may not be natural—someone or something may have deliberately unleashed it.

2. **The Unethical Experiment**: Alýkos discovers evidence that another physician, **Dr. Cassia**, has been conducting unauthorized medical experiments on prison inmates and the desperately poor, seemingly attempting to replicate or understand the mechanisms of a rare disease. When Alýkos threatens to expose her, she counters that her work has advanced medical knowledge more than a century of conventional practice—and that some discoveries require sacrifices. She offers Alýkos the choice to join her research or watch as she uses her considerable influence to destroy his reputation.

3. **The Impossible Patient**: A patient is brought to Alýkos bearing a condition so bizarre, so contradictory to all medical knowledge, that he cannot begin to understand what he is observing. The patient is simultaneously fevered and hypothermic, displays symptoms of diseases that should not occur together, and seems to exist in a state of bodily contradiction. As Alýkos struggles to understand the case, he begins to suspect that conventional medicine will not provide answers—that something beyond the natural world may be involved.

4. **The Apprentice's Tragedy**: Alýkos's most promising student, **Young Kylis**, comes to him desperate for help after making a terrible mistake—a patient under the apprentice's care has been poisoned, and Kylis suspects his own preparation of medicine was at fault. The situation is complicated by the fact that the patient is the child of a powerful noble, and if the truth is discovered, Kylis will be executed. Alýkos can protect his student or investigate the truth, and may discover that the poisoning was deliberate—perhaps even intended to frame Kylis.

5. **The Healer's Dilemma**: A wealthy merchant seeks Alýkos's care for a condition that, while treatable, will require months of expensive treatment and significant lifestyle changes. The merchant, however, is willing to pay triple Alýkos's normal fees for a "quicker solution"—poison disguised as medicine that will appear to be a natural death, allowing the merchant's heir to claim inheritance. The merchant reveals that he is terminally ill regardless, simply tired of lingering in pain, and offers the money not for himself but as compensation for Alýkos's trouble.
