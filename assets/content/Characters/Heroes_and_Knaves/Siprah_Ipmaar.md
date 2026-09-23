---
tags:
  - heroes-and-knaves
  - guilded
  - tradesfolk
  - character
name:
  full: Sip'rah Ip'maâr
  title: ""
  given: Sip'rah
  clan: Ip'maâr
  home: wasetkara
  aliases:
    - Siprah Ipmaâr
    - Siprah Ipmaar
packFolder: northernfertileregiontakheperu
shortcode: siprahipmr
type: being
data:
  banner: takheperubnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Locksmith
  stations: []
  lore:
    - commonerrnk
  homes:
    - takheperurgn
  affiliations:
    - empirtkhpr
  gender: male
  species: null
  age: 40
  birthday: 680/4/14
  height: 1.73
  weight: 67.6
  frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark
    complexion: null
    extra_features:
      - a tattoo of a knight's helmet on the shoulder
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-horus }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-demtkscrpt, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-masn, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wtunic }
    - { model: sohl-sohl-armorgear-wbrch }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wcap }
    - name: Locksmith tools (picks, tension wrenches, feeler gauges)
      type: miscgear
      system:
        shortcode: locksmithtools
        weight: 0.6
        value: 100
        durability: 3
    - name: Templates for lock designs (parchment)
      type: miscgear
      system:
        shortcode: templatesforlock
        weight: 1
        value: 100
        durability: 3
    - name: Legal contracts and guild permits
      type: miscgear
      system:
        shortcode: legalcontracts
        weight: 1
        value: 100
        durability: 3
    - name: Measuring calipers and rulers
      type: miscgear
      system:
        shortcode: measuringcalipers
        weight: 0.3
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-containergear-bgsmcvs }
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

**Home:** [[place-wasetkara|Wasetkara]]

# Appearance {#appearance}

![[siprahipmr|Sip'rah Ip'maâr]]{float: top-left}

Sip'rah stands 5'8" tall with a medium build. He has dark skin, deep black hair, and brown eyes. His features include a straight narrow nose, a narrow chin, and elegantly curved brows. He has a tattoo of a knight's helmet on his shoulder.

# Dossier {#dossier}

Siprah was born into the Ipmaâr family, a minor merchant household of [[affiliation-empirtkhpr|Ta'Kheperu]] with no particular distinction or wealth. His father, **Paher Ipmaâr**, was a lesser official in the customs house, a position of modest authority but considerable responsibility for protecting valuable goods. It was Paher who first introduced young Siprah to locks and security, teaching him that these mechanisms were conversations between those who would protect and those who would steal.

Apprenticed at thirteen to **Master Sokhoth**, then the Empire's foremost locksmith, Siprah spent twelve years in intensive study of his craft. Sokhoth was an exacting teacher whose patience was famous but whose standards were impossibly high. Under his tutelage, Siprah learned that locks were expressions of philosophy as much as mechanical devices—they were about trust, about creating a visible and tactile representation of the boundary between the protected and the vulnerable. When Sokhoth retired at Siprah's twenty-fifth year, he personally recommended Siprah as his successor to the guild, an honor rarely granted.

Now, for fifteen years, Siprah has maintained the highest standards of his craft. He has designed locks for imperial treasuries, noble estates, merchant houses, and temples. His work is known for its elegance, security, and longevity. He has never married, living alone in chambers above his workshop, with no interest in domestic entanglements. His sole companions are his craft, his faith in [[lore-horusdty|Hórús]] the voyager, and the small circle of guild members who recognize his genius.

## Psyche

### Personality

Siprah is deeply serious in a way that sometimes reads as coldness but actually reflects intense focus and respect for the weight of responsibility his craft entails. He does not engage in casual conversation and finds small talk exhausting. Social situations where he must pretend interest in inconsequential matters leave him discomfited. This has earned him a reputation for unsociability, though those who work with him directly recognize his courtesy and his real regard for those he trusts.

His morality is rigid but not cruel. He believes in clear rules, open dealing, and the honest discharge of obligations. He will accept employment from anyone who can pay, regardless of their status or character, viewing this as neutral craft service rather than moral endorsement. However, he refuses work that would directly facilitate violence or conquest, making distinctions that others sometimes find incomprehensible. To Siprah, there is a great difference between securing a vault and making it possible for someone to rob that vault more easily, despite both being technical lock work.

### Motivation

Siprah is driven by a desire to be the best locksmith who has ever lived, to surpass even Master Sokhoth in skill and reputation. This pursuit is not motivated by vanity but by a belief that perfection in one's craft is the highest form of virtue. He also seeks to leave a body of work so excellent that it will be studied and emulated for generations, effectively achieving a form of immortality through the enduring quality of his creations. There is also something quieter: a need to be necessary, to possess skills so specialized and valuable that he cannot be easily replaced or forgotten.

### Strengths

- **Unparalleled Lock Expertise**: Siprah's understanding of locking mechanisms approaches the theoretical and mathematical. He can design locks of such complexity that only his own hand can open them, and he can analyze any existing lock for weaknesses within minutes.
- **Meticulous Attention to Detail**: Every lock he creates is an object of art—symmetrical, balanced, built to standards that exceed client requirements. His work is durable beyond what function alone demands because he cannot produce something mediocre.
- **Absolute Trustworthiness**: In a profession where dishonesty could be enormously profitable, Siprah has never once betrayed a client's secrets or provided information to potential thieves. His word is unquestionable.
- **Problem-Solving Ingenuity**: Given any security challenge, Siprah can devise new solutions that combine his technical knowledge with creative thinking. He has designed the protections of the most valuable vaults in the Empire.
- **Scholarly Knowledge**: Beyond practical lock-craft, Siprah has studied the history of locks, security philosophy, and even the metaphysical meanings of barriers and protection. This theoretical grounding makes him a resource for matters beyond simple mechanics.

### Weaknesses

- **Inability to Market Himself**: Siprah's complete lack of social skill means he relies on reputation and word-of-mouth for work. He cannot negotiate aggressively or sell himself to new clients, often losing lucrative contracts to more personable competitors.
- **Obsessive Perfectionism**: He sometimes becomes paralyzed by the pursuit of incremental improvements, delaying commissions unnecessarily. A lock that is ninety-nine percent perfect is, to him, nearly worthless if that final fraction cannot be achieved.
- **Rigidity in Social Situation**: His inability to read social cues or adapt his tone to different contexts makes him seem dismissive or rude, even when he intends no offense. Working relationships are cordial but never warm.
- **Vulnerability to Manipulation**: Because Siprah trusts completely in contracts and systems, those skilled in social manipulation or deception can sometimes take advantage of the letter of agreements while violating their spirit. He struggles to recognize when he is being maneuvered.
- **Physical Limitations**: His hands, while still dexterous, have begun to show the early signs of aging—minor tremors in certain light, occasional stiffness in cold weather. This terrifies him, as everything he is depends on the precision of his hands.

## Social

### Patrons

- **Treasurer Amenemheb**: The Imperial official responsible for the Empire's treasury holds Siprah in the highest regard. All imperial vaults and secure chambers have been installed with locks of his design, and Amenemheb provides the single largest stream of consistent work.
- **Lady Nefertiti Meshenet**: A noble of considerable wealth and paranoid disposition. She commissions new locks and security modifications every few months, trusting no one but Siprah with access to her estate's systems. She pays extraordinarily well and provides social access to her wealthy peers.
- **The Temple of Hórús**: The priesthood maintains contracts with Siprah for maintaining the Temple's sacred vaults. He is one of only three individuals alive who knows the complete configuration of the Temple's security system.
- **Master Merchants' Association**: The guild of high-value traders collectively employ Siprah as their adviser on security, and he regularly designs custom vault systems for member houses.

### Enemies

- **Merchant Khenti the Bold**: A thief of considerable skill who has attempted multiple times to break Siprah's locks and steal from his clients. Each attempt has failed, and Khenti harbors a deep hatred for the locksmith, viewing him as a personal nemesis and obstacle to his art.
- **Master Sokhoth's Descendants**: The retired master's three children blame Siprah for outpacing their inheritance and belief that one of them should have succeeded Sokhoth. They spread rumors that Siprah's success owes to theft of their father's designs, a claim without foundation but which causes periodic gossip.
- **The Lockpick Society**: A secretive organization of thief-philosophers who view any lock as a puzzle to be solved and see Siprah's work as a direct challenge. They have made it a point of honor to breach at least one of his major commissions.

### Affiliations

- **Locksmiths' Guild of Ta'Kheperu**: Siprah holds the highest rank within the guild and serves on its council of masters. Though he attends meetings reluctantly and speaks rarely, his voice carries significant weight in guild decisions.
- **The Scholar's Archive**: Siprah maintains membership in this institution and regularly consults on matters of security and lock history, though he contributes little directly beyond his passive presence.

## Plot Hooks

1. **The Unbreakable Lock**: A mysterious patron approaches Siprah with a sealed box containing only instructions and an extraordinary fee—forge a lock so perfect, so absolutely impregnable, that it becomes famous. The patron provides no explanation of what it will secure or why such a lock is needed. Siprah, intrigued despite his usual caution, accepts and becomes obsessed with the commission, spending months creating what he believes to be the summit of his life's work. Only when the lock is complete does he discover through discreet inquiry that the patron intends to use it to seal away something magical—perhaps dangerous, perhaps sacred. The lock is intended to contain a malevolent entity or imprisoned consciousness rather than to protect treasure. Siprah has to judge whether his masterwork has been turned to purposes he would oppose, and whether he can live with having created it.

2. **The Apprentice's Betrayal**: Siprah finally agrees to take on a formal apprentice after decades of refusing, recognizing that his techniques cannot be lost when age eventually takes him from his craft. The apprentice, young **Mensah**, is brilliant and dedicated, soaking up knowledge at an almost supernatural rate. After two years of intense training, Mensah steals Siprah's masterwork—a lock design so cunning it can be opened by three specific keys, none alone sufficient, working in concert. Mensah disappears into the criminal underworld, and Siprah discovers that his former apprentice is now designing locks for thieves, specifically locks intended to be broken by collaborators or safeguards that can be circumvented through methods only Siprah ever taught.

3. **The Living Lock**: An ancient lock from the Old Kingdom is brought to Siprah for restoration—an artifact of such age and peculiar design that no one alive knows how to open it or what principles govern its operation. The lock appears to shift subtly when not directly observed, its tumbler alignment seeming different each time Siprah examines it. Stranger still, the lock seems to react to Siprah specifically, clicking and whirring whenever he approaches, as though recognizing him. Through research, he discovers the lock was designed by an Old Kingdom mage and was intended to open only "when the worthy successor arrives." Siprah becomes convinced that the lock is somehow aware and is choosing him to be the one to open whatever it secures. His obsession with understanding this mechanism threatens to consume him entirely.

4. **The Counterfeiter's Workshop**: Authorities discover a criminal operation producing counterfeit locks—perfect replicas of Siprah's security mechanisms that function identically to his original work. No client can distinguish true Siprah locks from the forgeries without his personal inspection. This poses a catastrophic threat to his reputation and to the security of every installation he's ever made. The counterfeiter, a master craftsman themselves, has somehow stolen or deduced all of Siprah's techniques. Investigation reveals the counterfeiter is Master Sokhoth himself, who faked his retirement and has spent the last fifteen years secretly creating competition to prove that Siprah merely inherited his master's legacy rather than surpassing it. Siprah loses his unique position and faces the painful truth that his greatest achievement may be merely the continuation of another's work.

5. **The Philosophical Paradox**: A scholar and theologian approaches Siprah with a theoretical problem: if Siprah can design a lock that cannot be opened by any key, and another scholar can create an unbreakable key, what happens when they meet? It begins as an intellectual exercise, but then both the scholar and the key-maker begin commissioning Siprah's work in earnest. Siprah finds himself creating locks with knowledge that they will be tested against an unbreakable key, and he meets the limits of his craft and of perfection itself. As these creations enter the world, strange things begin to happen—the items they secure seem to exist in a state of philosophical uncertainty, simultaneously locked and unlocked, simultaneously protected and vulnerable. Siprah discovers he may have inadvertently created a pathway to a realm of pure paradox.
