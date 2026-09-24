---
tags:
  - heroes-and-knaves
  - guilded
  - tradesfolk
  - character
name:
  full: Harkhîs Bàremydês
  title: ""
  given: Harkhîs
  clan: Bàremydês
  home: belekos
  aliases: []
packFolder: midhalionvylaria
shortcode: hrkhsbrmyds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Apothecary
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provinclys
  gender: male
  species: null
  born: 674/2/11
  height: 1.73
  weight: 66.2
  frame: medium
  appearance:
    eye_color: green
    hair_color: gray
    skin_color: light
    complexion: ruddy
    extra_features:
      - a scar on the left calf
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-murkir }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 28 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 9 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltshirt }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-ltglove }
    - name: Belt pouch with vials and phials
      type: miscgear
      system:
        shortcode: beltpouchwithvials
        quantity: 1
        weight: 1.5
        value: 100
        durability: 3
    - name: Poison samples (locked, labeled)
      type: miscgear
      system:
        shortcode: poisonsamples
        weight: 0.8
        value: 100
        durability: 3
    - name: Antidote recipes (hidden manuscript)
      type: miscgear
      system:
        shortcode: antidoterecipes
        weight: 0.3
        value: 100
        durability: 3
    - name: Medical toolkit (lancets, herbs, bandages)
      type: miscgear
      system:
        shortcode: medicaltoolkit
        weight: 1.2
        value: 100
        durability: 4
    - name: Mortar and pestle (bronze)
      type: miscgear
      system:
        shortcode: mortarandpestle
        weight: 1.5
        value: 100
        durability: 3
    - name: Alchemist's measuring scale
      type: miscgear
      system:
        shortcode: alchemistsmeasuring
        weight: 1.5
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - { model: sohl-sohl-containergear-bglgcvs }
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

![[hrkhsbrmyds|Harkhîs Bàremydês]]{float: top-left}

Harkhîs stands 5'8" tall with a medium build. He has light ruddy skin, gray hair, and green eyes. His features include an oblong face, an aquiline nose, a pointed chin, full lips, and heavy brows. He has a scar on his left calf.

# Dossier {#dossier}

## Background

### The Healer's Apprentice

Harkhîs was born into moderate means at the center of [[affiliation-vylarinmpr|Vylaria]]'s empire, to parents of the merchant class with interests in trade in exotic herbs and spices. His mother, a woman named **Amôra**, possessed real knowledge of herbal medicine and shared her interests with her intelligent youngest son. Where his siblings followed the ordinary merchant's path, Harkhîs became absorbed in the deeper mysteries of his mother's work—the understanding that the same substance that heals in small doses becomes poison in larger quantities, and that the boundary between remedy and toxin is a matter of precise measurement.

At sixteen years old, he was apprenticed to **Master Kehdaan**, one of the Empire's most respected apothecaries, working in an official shop located in Vylaria's primary administrative district. For twelve years, Harkhîs learned legitimate medicine, earning his guild standing and beginning to build a respectable reputation as a skilled practitioner of the herbal art. He married, had two children, lived a life that seemed destined for quiet prosperity.

### The Fall and the Underground

At thirty-two years old, Harkhîs was approached by representatives of a criminal brotherhood operating in Vylaria's underworld. They requested that he create a particular poison—one that would mimic natural disease while being entirely artificial. He refused. They approached again, offering money sufficient to secure his family's future. He refused again. They approached a third time with a threat: create the poison or watch his family die. He created the poison.

The poison was used to assassinate a merchant prince, setting off a chain of events that unsettled Vylaria's merchant class. In the investigation that followed, Harkhîs' involvement was uncovered. Rather than face execution, he disappeared into the city's underground, abandoning his family and legitimate trade for a shadowed half-life where his skills could keep him alive.

His wife remarried; his children grew to hate his memory. He has made no effort to reconnect, understanding that his presence would bring only danger and shame.

### Present Circumstance

For fourteen years, Harkhîs has operated in Vylaria's underworld, creating both poisons and antidotes for criminals, mercenaries, and the desperate. He is known to those who know him as a master of his craft—reliable, discreet, and willing to fulfill orders that legitimate practitioners would refuse. His reputation is impeccable within criminal circles and disreputable outside them. He has survived longer than most because he understands that the most valuable poison is one that no one suspects has been administered, and the most valuable antidote is one that only its maker possesses. He has built a carefully maintained balance of power through the careful distribution of knowledge and product.

Yet the weight of accumulated betrayals, poisons, and deaths grows heavier with each passing year. He drinks more than is wise, sleeps less than is healthy, and has begun to wonder whether a man of his history can ever again inhabit legitimate society, or whether he is now permanently locked in this shadowed world he has created.

## Psyche

### Personality

Harkhîs is a man of careful precision in speech and action. He rarely speaks unless necessary, and when he does, his words carry careful weight. This deliberation can read as coldness to those who do not understand him, but those who work with him repeatedly recognize it as a kind of respect—he gives those around him the courtesy of meaningful communication rather than empty chatter.

Despite his external coldness, he possesses a peculiar morality that should not be mistaken for righteousness but rather for a working code. He will not knowingly create a poison for use against children or the truly innocent, having discovered through bitter experience that such crimes haunt him more seriously than others. He will not poison wells or create weapons of mass harm. Within these boundaries, however, his conscience is very flexible. He views his work as simply the application of knowledge to human problems, neither good nor evil, problems that would exist with or without his participation.

His intellectual engagement with his craft approaches the artistic. He takes real pride in the elegance of his solutions—a poison that cannot be detected, an antidote that counters toxins through mechanisms others have not considered. This artistic pride sometimes leads him to make choices based on the ingenuity required rather than the practical benefit.

### Motivation

Harkhîs seeks only to survive, to continue the work that defines his existence, and to maintain the subtle balance of power and discretion that allows him to walk unmolested through Vylaria's underworld. Beyond mere survival, he is driven by the intellectual challenge of his craft—the puzzle of creating substances with precise effects, the artistic satisfaction of solving difficult problems through craft and knowledge. He also carries a desperate, unexamined hope: that through perfect precision and excellence in his work, he might somehow atone for the specific poison that fractured his family and began his descent into shadow. This hope is likely futile, which he understands, but understanding does not prevent him from continuing to pursue it.

### Strengths

- **Toxicological Master**: Possesses a knowledge of poisons, their creation, application, and effects that few can equal; can compound toxins of precisely judged deadliness and can create substances that mimic natural disease
- **Antidote Expertise**: Equally skilled in creating antidotes and counter-toxins; maintains a mental library of countermeasures for hundreds of known poisons and can improvise others when necessary
- **Absolute Discretion**: Can be trusted completely to maintain confidence; has survived in the underworld partly because those who employ him never fear he will betray them through careless speech
- **Chemical Mastery**: Possesses comprehensive understanding of the properties of substances and how they act on one another; can create complex alchemical preparations that achieve precise effects
- **Moral Consistency Within Bounds**: Despite his flexibility on many ethical questions, is absolutely consistent within his defined boundaries; those who hire him know exactly what he will and will not do

### Weaknesses

- **Emotional Corruption**: His descent into criminality has stripped him of real human connection; he has become substantially less capable of fellow-feeling with those he does not know personally
- **Moral Decay**: His flexibility on ethical questions has not prevented the gradual erosion of his conscience; he increasingly suspects he may have become something monstrous
- **Physical Decline**: The weight of years in the underworld manifests in deteriorating health; he drinks too much, sleeps poorly, and feels the fragility of aging more acutely each season
- **Isolation**: His distance from legitimate society and his family has created an isolation of the mind from which he cannot escape; he experiences real loneliness despite constant contact with underworld figures
- **Vulnerability to Manipulation**: Those who understand his remaining moral boundaries can potentially manipulate him; his refusal to harm children, for instance, could be turned against him

## Social

### Patrons

- **The Crimson Order**: A well-organized criminal brotherhood operating throughout Vylaria; they maintain standing contract for Harkhîs' exclusive services and provide security in exchange for his availability
- **Merchant Prince Devarion**: An ambiguous figure who may be legitimate or criminal (Harkhîs is uncertain); he contracts Harkhîs for exotic poisons and antidotes and seems to move easily between legitimate and shadow economies
- **The Master Healer's Guild (Covertly)**: Certain legitimate medical practitioners have been known to discreetly contract Harkhîs for poisons used in mercy-killings and the relief of suffering in cases he does not fully understand but accepts at face value

### Enemies

- **Commander Thrace of the City Watch**: The official responsible for investigating underground apothecary operations; she views Harkhîs as a personal obsession and has dedicated significant resources to apprehending him
- **The Violet Syndicate**: A rival criminal organization that has attempted multiple times to acquire Harkhîs' services exclusively; they view his independence as a threat to their control
- **Master Kehdaan (His Former Mentor)**: His old master encountered Harkhîs years after his disappearance and, rather than helping him, publicly denounced him as a disgrace to the apothecary craft; Harkhîs has never forgiven this betrayal

### Affiliations

- **The Underground Apothecaries Network**: Informal confederation of renegade healers and alchemists operating beyond legitimate authority; Harkhîs maintains standing in this organization and contributes his knowledge to the common store
- **The Crimson Order**: While not a formal member, functions effectively as their primary alchemical consultant

## Plot Hooks

1. **The Impossible Contract**: A mysterious patron who has never engaged Harkhîs before approaches with a contract that offers payment sufficient to buy freedom from the underworld permanently—perhaps even enough to attempt a return to legitimate society. The contract requires creation of a poison so complex and so specifically targeted to a particular individual that only Harkhîs could accomplish it. However, the target is someone whose role in political events is obscure; Harkhîs cannot determine whether he would be eliminating a real threat, removing an innocent, or serving a hidden purpose. The payment is substantial enough to tempt him, but the moral weight of uncertainty troubles him in ways simpler contracts do not.

2. **The Antidote Becomes Poison**: Harkhîs discovers that one of his antidotes—created years ago and distributed widely among criminal organizations—was never actually effective and may instead have accelerated the death of those who used it during poison exposure. Investigation suggests the error was inadvertent and came from contaminated source material he could not have known was compromised. However, dozens of people may have died believing themselves protected while actually being slowly poisoned. Addressing the problem means revealing his past involvement and inviting the attention of authorities; ignoring it means accepting that he carries responsibility for deaths that continue to accumulate.

3. **The Healer's Daughter**: A young woman arrives at his underground shop claiming to be the daughter Harkhîs abandoned years ago. She has learned, through investigation, what her father became and what he has done, and she has come to offer him a choice: help her expose and dismantle the Crimson Order, which she claims murdered her adoptive family, and in exchange she will help him escape the underworld and attempt a return to legitimate society. The offer represents hope but also requires him to betray the organization that has kept him alive for fourteen years, and his daughter may not forgive him whatever he does.

4. **The Plague's Cure**: A true plague begins spreading through Vylaria's populations, a disease uncontrolled and spreading with terrifying speed. Official apothecaries are unable to create an effective treatment. Commander Thrace approaches Harkhîs secretly with an unusual proposal: if he will develop a cure, she will allow him to escape the city safely. He has the knowledge she does not, and she is willing to overlook his crimes if it means saving the city's population. The offer is tempting, but Harkhîs suspects a trap—either designed to capture him or to compromise him further by making him a public hero rather than a hidden criminal.

5. **The Suicide's Inheritance**: One of Harkhîs' few real friends among underworld figures—a woman named **Sylvara** who operated as an information broker—takes her own life after a business failure, leaving Harkhîs as her sole named heir. Her estate includes not only significant wealth but documents and records of secrets known only to her—blackmail material on numerous figures throughout Vylaria's underworld and legitimate circles. Sylvara left explicit instructions that Harkhîs should decide whether these secrets should be released, destroyed, or held in perpetuity. The decision he makes will shape politics and crime in Vylaria for decades, and Harkhîs realizes he has suddenly been positioned as a figure of real power, a responsibility he never sought.
