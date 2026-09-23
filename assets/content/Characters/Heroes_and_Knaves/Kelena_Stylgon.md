---
tags:
  - heroes-and-knaves
  - administration
  - character
name:
  full: Kêlena Stýlgon
  title: ""
  given: Kêlena
  clan: Stýlgon
  home: valcerise
  aliases: []
packFolder: aureldiaprovenzia
shortcode: kelnstylgn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Courtesan
  stations: []
  lore:
    - commonerrnk
  homes:
    - provenzrgn
  affiliations:
    - kngdmprvnz
  gender: female
  species: null
  age: 32
  birthday: 688/4/6
  height: 1.7
  weight: 59.4
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: golden
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-estc }
    - { model: sohl-sohl-armorgear-slkdress }
    - { model: sohl-sohl-armorgear-vglv }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-slkclk }
    - name: Silver flask (fine work, engraved)
      type: miscgear
      system:
        shortcode: silverflask
        weight: 1
        value: 100
        durability: 3
    - name: Theatrical mask (leather, decorated)
      type: miscgear
      system:
        shortcode: theatricalmask
        weight: 1
        value: 100
        durability: 3
    - name: Velvet coin purse
      type: miscgear
      system:
        shortcode: velvetcoinpurse
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 75 } }
    - { model: sohl-sohl-miscgear-gldcrwn }
    - { model: sohl-sohl-containergear-bpchmd }
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

![[kelnstylgn|Kêlena Stýlgon]]{float: top-left}

Kêlena stands 5'7" tall with a heavy build. She has golden-toned skin, flowing black hair, and alert eyes. Her features include an angular face, a prominent nose, a pronounced chin, heavy brows, and sculpted cheeks. She has a tattoo of intertwining dark green vines on her right upper arm and shoulder.

# Dossier {#dossier}

## Background

### The Dancer's Daughter

Kêlena was born in the Kingdom of [[affiliation-kngdmprvnz|Provènzia]] to a musician mother and a father whose identity she has never disclosed and seems reluctant to discuss. Her childhood was spent in the theatrical world – her mother performed in various traveling troupes, and young Kêlena was raised backstage, absorbing the arts of performance, seduction, and social manipulation as naturally as other children learn language. By age ten, she performed minor roles in stage productions; by fifteen, she was drawing attention as a dancer of unusual grace and charisma. Yet she demonstrated an early intelligence about the performance itself – understanding that physical beauty and dancing skill, while important, were secondary to the art of capturing and holding an audience's emotional attention.

### The Rise Through Society

At eighteen, Kêlena made a deliberate transition from theatrical performer to courtesan – a shift that scandalized some but which she understood perfectly as an evolution rather than a degradation. She became the kept companion of a wealthy merchant, using that position to gain access to high society. From there, she cultivated relationships systematically and brilliantly, moving through the kingdom's social hierarchy with calculated grace. She became known for her physical charms and for her ability to hold a real conversation on topics ranging from philosophy to commerce, from art to intrigue. She learned languages, studied history, memorized genealogies – all in service of her craft.

### Current Circumstances

Now established as one of Provènzia's most desired courtesans, Kêlena has made her trade into something approaching an art form. She maintains relationships with multiple powerful patrons simultaneously, each believing himself her favorite, each showering her with gifts and attention. She owns a townhouse in the capital, maintains several business interests including a small but fashionable theater troupe, and has accumulated considerable wealth and influence. Yet she has carefully avoided becoming too dependent on any single patron, having learned young the fragility of fortunes built on others' affection.

## Psyche

### Personality

Kêlena is fundamentally a creature of performance – every exchange is crafted, every expression calibrated for effect. She is brilliant at reading people and understanding what they most desire to hear or experience, and she can become whatever version of herself will best serve her interests in any given moment. This chameleonic quality is not dishonest in her mind – it is simply the nature of her profession and her art. She has maintained this level of control for so long that it is unclear to what extent there is a "true" Kêlena beneath the performances, or whether she has become purely the sum of her various personas.

That said, those few people who have broken through her carefully maintained emotional walls report finding someone capable of surprising depth and real humor. She is prone to dark moods, particularly when alone, and there is evidence of a sadness beneath the glittering surface. She drinks wine regularly and has recently begun exploring certain substances that enhance her performances and help her manage the emotional cost of her carefully constructed life. She is capable of loyalty to those she considers true friends, though she defines friendship with extreme selectivity.

### Motivation

Kêlena operates from multiple, sometimes contradictory motivations. On the surface, she seeks wealth, influence, and the security that comes from being essential to powerful people. At a deeper level, she is driven by a need to prove something – to herself and to her absent father – that she can be valuable, essential, irreplaceable. There is a component of revenge as well: an intention to use her talents and intelligence to gain advantages over those who would underestimate her because of her profession. A sadder motive underlies all of this: the desire to be known and truly valued for who she is, even though she has carefully seen to it that no one ever will be.

### Strengths

- **Masterful Charisma**: Kêlena possesses a natural magnetism and charm that is hard to resist. She can convince almost anyone to like her, trust her, or provide her assistance through the sheer force of her personality.
- **Social Intelligence**: Her understanding of social hierarchies, etiquette, and the hidden power structures of noble society is deep and exact. She can move through a tangled political situation with grace and come out of it with every advantage.
- **Performance Mastery**: Whether engaging in theatrical performance, intimate conversation, or public display, Kêlena controls her presentation with artistry. She can make others believe nearly anything about her intentions or feelings.
- **Linguistic Fluency**: She speaks multiple languages and dialects fluently, allowing her to operate across different social strata and regions.
- **Exceptional Eloquence**: Her ability to craft compelling narratives, deliver persuasive arguments, and speak with eloquence has few equals.

### Weaknesses

- **Emotional Distance**: Kêlena's constant performance has left her emotionally isolated and incapable of letting her guard down. This makes it difficult for her to form truly deep connections, even when she might desire them.
- **Lack of Genuine Agency**: Having organized her entire life around being what others want, Kêlena has relatively little sense of what she actually wants independent of others' desires. Her life is reactive rather than self-directed.
- **Physical Combat Limitations**: Despite her grace and agility, she lacks significant physical strength or endurance. While she carries a concealed rapier, she is not a dangerous fighter.
- **Substance Dependence**: Her use of various substances to manage the emotional cost of her life is increasing, and she is moving toward real dependency.
- **Vulnerability to Blackmail**: Her position depends entirely on maintaining her current reputation and relationships. Someone with knowledge of her personal history or private actions could prove extraordinarily dangerous to her position.

## Social

### Patrons

- **The Duke of Ravenshold**: A powerful noble of considerable influence who has maintained a relationship with Kêlena for the past four years. Their arrangement is more transactional than intimate, though he is fond of her and consistently provides substantial financial support in exchange for her company and discretion regarding his private matters.
- **Merchant-Prince Aldric Covens**: A wealthy merchant who profits considerably from the wine and luxury goods trade. Covens views Kêlena as an investment and source of status within high society, providing her with gifts and access to merchant circles in exchange for her presence at his events.

### Enemies

- **Margot Thesselier**: A rival courtesan who has cultivated connections with some of Kêlena's former patrons and actively works to undermine her reputation in high society. Margot views Kêlena as superior in talent but lower in status, and resents deeply what she sees as Kêlena's undeserved prominence.
- **The Hidden Hand**: A shadowy organization rumored to traffic in information and maintain leverage over powerful individuals. Kêlena has reason to believe they possess information about her past that could devastate her current position, and she lives in constant low-level fear of their attention.

### Affiliations

- **The Provènzia Theater Collective**: An informal association of performers and theater operators that Kêlena helped establish and continues to influence. Through this group, she maintains connections to the artistic and performance communities even as she operates primarily in high society.

## Plot Hooks

1. **The Blackmail Plot**: Someone begins sending Kêlena letters containing detailed knowledge of her past – specific incidents she believed forgotten or hidden, details about her family she has never shared with anyone, evidence of transactions she conducted under assumed names. The sender demands she use her influence with various patrons to bring about particular political or commercial ends. Kêlena hires the party to discover who holds this leverage over her, but her investigation must be conducted with absolute discretion, as exposure of the blackmail itself could damage her carefully constructed reputation. The party discovers the blackmailer is someone from her theatrical past who has dedicated years to collecting information, believing Kêlena betrayed them years ago.

2. **The Absent Father**: Kêlena receives an unexpected message from someone claiming to be her father, who has apparently been watching her life from a distance and now wishes to make contact. She is deeply conflicted about meeting him – desperate for answers but terrified that this person may be manipulative, dangerous, or unworthy of her imagined ideal. She hires the party to investigate him and verify his identity before committing to contact, but the investigation reveals that this person is connected to the Hidden Hand and likely intends to manipulate her relationship with her father as a means of gaining influence over her.

3. **The Performance That Went Wrong**: During an elaborate private performance arranged for a foreign dignitary of great importance, something goes dramatically wrong – perhaps the dignitary dies under suspicious circumstances, perhaps evidence emerges of an affair with consequences, perhaps Kêlena witnesses something she was not meant to see. She must get through the aftermath without revealing what actually occurred, protecting herself while making sure the powerful people involved do not blame her for the catastrophe. The party must help her manage a delicate political situation where her reputation and possibly her life are at risk.

4. **The True Name**: Kêlena comes into possession of evidence that her name is not actually her name – that she was born with a different identity, possibly noble lineage, and that her current existence may be based on false foundational assumptions. This discovery sends her into emotional crisis and raises the question: if she is not Kêlena Stýlgon, then who is she? The party must help her come to terms with the revelation and its practical consequences while dark forces – possibly including family members from her previous life – attempt to use this information to manipulate or control her.

5. **The Rival's Revelation**: Margot Thesselier, her longtime rival, approaches Kêlena with information about a conspiracy among several powerful patrons to systematically dismantle her position and reputation. Margot offers to share the details in exchange for Kêlena helping her against a shared enemy. Kêlena has to weigh whether to trust this person she has long viewed as an enemy, knowing that even if the information is true, Margot likely has ulterior motives. The situation becomes further complicated when the party investigates and discovers that Margot's information is partly true but deliberately incomplete – designed to manipulate Kêlena into taking actions that would serve Margot's own ends while appearing to serve Kêlena's interests.
