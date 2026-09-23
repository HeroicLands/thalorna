---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Vishali Bâlarṇaya
  title: ""
  given: Vishali
  clan: Bâlarṇaya
  home: rajapur
  aliases: []
packFolder: ankarisvedyara
shortcode: vishalblry
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Fool
  stations: []
  lore:
    - commonerrnk
  homes:
    - vedyarargn
  affiliations:
    - rajaprjnpd
  gender: female
  species: null
  age: 27
  birthday: 693/10/4
  height: 1.73
  weight: 68.9
  frame: light
  appearance:
    eye_color: warm_brown
    hair_color: black
    skin_color: rich_brown
    complexion: null
    extra_features:
      - a scar on the right elbow
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 14 } }
    - { model: affiliation-varakpnthn }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 17 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-vdress }
    - { model: sohl-sohl-armorgear-vshirt }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-vcap }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - name: Small pouch for tricks and sleight-of-hand supplies
      type: miscgear
      system:
        shortcode: smallpouchfortricks
        weight: 0.3
        value: 100
        durability: 3
    - name: Props and juggling items
      type: miscgear
      system:
        shortcode: propsandjuggling
        weight: 1
        value: 100
        durability: 3
    - name: Musical instruments (small pipes, bells)
      type: miscgear
      system:
        shortcode: musicalinstruments
        weight: 0.5
        value: 100
        durability: 3
    - name: Ornate mirror for tricks
      type: miscgear
      system:
        shortcode: ornatemirr
        weight: 0.2
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

![[vishalblry|Vishali Bâlarṇaya]]{float: top-left}

Vishali stands 5'8" tall with a light build. She has rich brown skin, dark black hair, and warm brown eyes. Her features include a round face, a slightly arched nose, a gentle jawline, generous lips, and rich brows. She has a scar on her right elbow.

# Dossier {#dossier}

## Background

### Early Life and Training

Vishali was born into the merchant caste of the [[place-vedyarargn|Vedyara]] city-states, the daughter of a spice trader who prided himself on honest dealing. Her childhood was one of relative comfort, spent among the marketplaces and trade routes that connected the city-states. However, at age twelve, a devastating fire claimed both her parents and the family's trading house, leaving her orphaned and destitute. Rather than fall into indentured servitude or worse, Vishali attached herself to a traveling fair – a caravan of performers, acrobats, and charlatans who moved from city to city in the Vedyara territories.

It was here, under the tutelage of **Korvin the Magician**, a cynical but talented performer with a sharp eye for raw talent, that Vishali discovered her gifts. Korvin taught her the arts of misdirection, sleight of hand, and performance – not to deceive for malice, but to amaze and delight. She proved to be an apt student with natural grace and an almost supernatural dexterity that made her especially suited to acrobatic performance. More importantly, Korvin recognized that Vishali possessed something rare: the courage to push boundaries and make people uncomfortable through comedy that cut close to bone.

### Coming of Age

By her late teens, Vishali had become the star attraction of **Master Korvin's Traveling Spectacular**, famous throughout the Vedyara city-states for her daring acrobatic feats combined with biting comedy that often left audiences laughing even as they questioned whether they should. She developed a reputation for physical comedy that bordered on the obscene, for jokes that targeted sacred cows and powerful individuals, and for a reckless disregard for propriety that made her beloved by common folk and despised by those of delicate sensibilities.

### Current Situation

Now, at twenty-seven, Vishali operates independently, having parted amicably from Master Korvin's company five years prior. She travels the Vedyara city-states and beyond, performing at festivals, fairs, and in the courts of those wealthy enough and broad-minded enough to hire her. She has developed something of a following – a reputation as a court jester without a court, a fool-for-hire who will perform anywhere and for anyone willing to pay. The performance covers a sharp intelligence and a calculating mind. Her relationships with various patrons and city governments give her access to information and influence that she occasionally uses to help those in real need.

## Psyche

### Personality

Vishali's dominant quality is her shameless irreverence. She treats authority with casual dismissal and has perfected the art of making the powerful uncomfortable through humor that borders on insolence. This is more than rebelliousness: it comes from a carefully cultivated philosophy that holds that the greatest duty of a fool is to speak truth through jest, to remind the powerful of their human frailty and folly.

The quick wit and acerbic humor cover a person of real depth and surprising compassion. Having lost everything at a young age, she harbors a particular sympathy for the dispossessed and will often perform for the poor at reduced rates or for free. Her relationships tend to be superficial by design – she has learned that attachment breeds vulnerability – yet she is capable of fierce loyalty to those few she considers true friends. She is also mercurial and impulsive, prone to making decisions based on momentary whim rather than careful consideration, which has sometimes led her into dangerous situations.

### Motivation

Vishali is driven by a contradictory pair of impulses: a desire for freedom so absolute that she refuses to allow any person, institution, or circumstance to constrain her, and a secret yearning to matter, to use her talents in service of something larger than herself. She performs partly for the coins and partly for the pure joy of making people feel something – whether that is laughter, discomfort, or the unsettling sensation of having their assumptions challenged. Her irreverence covers a young woman trying to build a life of meaning and independence from ashes, while fearing that she is incapable of real connection or lasting purpose.

### Strengths

- **Virtuosic Physical Performer**: Vishali's acrobatic abilities are extraordinary. She can scale walls, perform death-defying tumbling sequences, and move through spaces with the fluidity of water. Her body is a precise instrument.
- **Master of Misdirection**: Her sleight of hand is superb, and her understanding of where an eye goes and how to lead it is nearly supernatural. She can make crowds see what she wants them to see and miss what she intends to hide.
- **Cutting Wit**: Vishali possesses a rapier-sharp sense of humor and an ability to craft jokes that disarm even the most guarded audiences. Her timing is impeccable, and her understanding of human nature allows her to land jokes that cut precisely where intended.
- **Exceptional Dexterity**: Beyond acrobatics and sleight of hand, Vishali's manual dexterity extends to fine craftwork, drawing, and any task requiring precise finger control. She is an accomplished artist.
- **Survival Resourcefulness**: Having survived loss and homelessness, Vishali possesses practical skills in cooking, herblore, and survival that make her capable of thriving in harsh conditions.

### Weaknesses

- **Reckless Impulsivity**: Vishali acts on whim without fully considering consequences. This has led her into dangerous situations multiple times, and her ability to talk her way out is not always successful.
- **Boundary-Crossing Humor**: Her comedy, while brilliant, often offends those in power or those with delicate sensibilities. She has made enemies among nobility and clergy through jokes that crossed the line from clever to plainly insulting.
- **Emotional Guardedness**: Having known great loss, Vishali struggles to form trusting relationships. Her tendency to maintain ironic distance prevents deep connection and leaves her fundamentally isolated.
- **Physical Limitations in Direct Conflict**: While acrobatic, Vishali lacks strength and formal combat training. In any situation involving direct physical confrontation with armed opponents, she would be severely outmatched.
- **Dependency on Performance**: Like all performers, Vishali's opinion of herself is deeply tied to audience reaction. When performances fail or audiences are unreceptive, she becomes withdrawn and bitter.

## Social

### Patrons

- **Lord Vikram of House Deshani**: A broad-minded noble of one of the Vedyara city-states who has hired Vishali multiple times for court performances. He appreciates her boundary-pushing humor and has developed a real, if platonic, fondness for her. His support provides her with regular employment and credibility.
- **Traveling Fair Circuit**: The various festival organizers, merchants' guilds, and market masters throughout the Vedyara territories who regularly book Vishali for performances. These relationships are transactional but reliable.

### Enemies

- **Priest Vandal of the Temple of Ashkanti**: A high-ranking priest offended by one of Vishali's performances in which she mocked certain temple practices as superstitious theater. He has used his influence to have her banned from several religious festivals and considers her a heretic.
- **Lady Malvina the Austere**: A noblewoman whose reputation Vishali devastated through a performance that highlighted her well-known hypocrisy regarding virtue and morality. Lady Malvina has sworn that Vishali will never perform in her territories and has hired informants to track her movements.
- **The Masked Collective**: A shadowy group of puritanical extremists who view Vishali's performances as a corruption of traditional Vedyaran values. They have threatened her on several occasions, and one member attempted violence against her in a marketplace.

### Affiliations

- **The Traveling Fair Network**: While technically independent, Vishali maintains close connections with various traveling fairs and circus companies that move through the Vedyara territories. She often collaborates with performers from these groups.

## Plot Hooks

1. **The Royal Commission**: A desperate royal court summons Vishali to perform for a dying prince whose spirits have grown so dark that nothing can lift them. The king offers a substantial reward if she can make the prince laugh. However, Vishali discovers that the prince's darkness stems from real wounds and political corruption, and making him laugh requires her to become involved in court intrigues that threaten her life and challenge her commitment to remaining uninvolved in others' struggles.

2. **A Debtor's Gambit**: A crime boss known as **The Kohl-Eyed Syndicate** has purchased Vishali's debts from various creditors and demands she use her access to noble courts to steal a particular artifact – a sacred relic stolen years ago that would cement the Syndicate's power if recovered. Vishali faces an impossible choice between bondage to criminals and betraying the trust of the nobles who have supported her.

3. **The Forbidden Performance**: An underground movement of revolutionaries seeking to overthrow the current Vedyara government discovers that Vishali's sharp wit and popularity make her the perfect vehicle for spreading seditious ideas. They approach her with a commission to perform a specific, politically charged satire that would ignite popular sentiment. The commission puts to Vishali whether her art is entertainment alone or a tool for political change.

4. **A Ghost from the Past**: Korvin the Magician, Vishali's former mentor, resurfaces after five years of absence, bearing news that he is dying. He claims to possess knowledge of Vishali's parents' deaths that was never revealed to her, suggesting that the fire that killed them was no accident. He bequeaths to her a cryptic final performance piece that, when executed, will supposedly reveal the truth. Vishali must complete a series of dangerous performances in specific locations while piecing together the mystery of her past.

5. **The Acrobat's Curse**: During a particularly daring performance, Vishali begins to experience strange physical maladies – moments of inexplicable weakness, ghostly pain, and sensations of being watched. A mysterious healer suggests that she has inadvertently angered a spirit through her irreverent mockery of sacred traditions, and that the curse can only be broken by performing a sacred ritual in a forbidden location, or by finding and making peace with the wronged spirit itself.
