---
tags:
  - heroes-and-knaves
  - guilded
  - administration
  - character
name:
  full: Cárenna Gráveth
  title: ""
  given: Cárenna
  clan: Gráveth
  home: torreviga
  aliases: []
packFolder: aureldiatarvenia
shortcode: carengrvth
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Herald
  stations: []
  lore:
    - commonerrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: female
  species: null
  age: 32
  born: 688/4/20
  height: 1.83
  weight: 75.7
  frame: light
  appearance:
    eye_color: green
    hair_color: black
    skin_color: warm
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-murkir }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-lshirt }
    - { model: sohl-sohl-armorgear-sgtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-slkclk }
    - name: Leather satchel for official documents
      type: miscgear
      system:
        shortcode: leathersatchel
        weight: 1
        value: 100
        durability: 3
    - name: Scrolls of royal announcements
      type: miscgear
      system:
        shortcode: scrollsofroyal
        weight: 1
        value: 100
        durability: 3
    - name: Family seal (House Gráveth)
      type: miscgear
      system:
        shortcode: familyseal
        weight: 1
        value: 100
        durability: 3
    - name: Silver writing pen
      type: miscgear
      system:
        shortcode: silverwritingpen
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Ink bottle and parchment sheaf
      type: miscgear
      system:
        shortcode: inkbottle
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchmd }
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

![[carengrvth|Cárenna Gráveth]]{float: top-left}

Cárenna stands 6'0" tall with a light build. She has warm olive skin, black hair, and green eyes. Her features include an oblong face, a prominent nose, a strong jawline, well-defined lips, and expressive brows.

# Dossier {#dossier}

Born into House Gráveth, a cadet branch of nobility with connections to the royal court, Cárenna was raised in an environment where words were as valuable as swords and social grace was an imperative. Her early training in Heraldry began before she could properly write, learning the complex symbology and lineage of the noble houses, the elaborate forms of herald-craft, and the weight of official pronouncements. She proved adept at these studies, her natural eloquence and perceptiveness making her stand out among her peers.

At twenty-four, she achieved full status as a Herald of [[place-tarvenirgn|Tarvénia]] and was attached to the royal household, a position of significant prestige. For the past eight years, she has served as one of the kingdom's primary emissaries and bearers of official messages, attending royal functions, delivering proclamations, and—increasingly—handling delicate negotiations between fractious noble houses. Her success comes not from blind adherence to form, but from her willingness to adapt tradition to circumstance, to find common ground between opposing parties, and to speak with the voice of the crown in ways that inspire rather than merely compel obedience.

## Psyche

### Personality

Cárenna is a masterwork of careful cultivation, so practiced in the arts of social performance that distinguishing her authentic self from her carefully maintained public persona has become nearly impossible—perhaps even for herself. She is warm and engaging, interested in the concerns of others, skilled at making each person feel heard and valued. Yet this warmth coexists with a calculating mind; she is always aware of social hierarchies, political alignments, and the leverage points within any conversation. Her wit is sharp and her humor typically gentle, though those who cross her discover that she can deploy words as precisely as any blade.

Her philosophy is fundamentally pragmatic: the world is better served by agreement than conflict, by compromise than absolutism, by understanding than judgment. This makes her an excellent mediator but occasionally renders her morally ambiguous—she will argue persuasively for positions she does not personally believe in if doing so advances the cause of peace. Her fellow-feeling is real but selective; she feels deeply for those within her circle of concern, yet can maintain emotional distance from the broader consequences of her diplomatic maneuvering.

### Motivation

Cárenna's driving ambition is the advancement of her house and, by extension, herself. She seeks to become the most trusted advisor to the crown, the herald whose voice carries such weight that her recommendations shape policy. She believes that by positioning House Gráveth at the center of court influence, she secures not only her family's prosperity but her own lasting legacy. She also harbors a real, if secondary, commitment to preventing conflict where possible, viewing her diplomatic successes as victories for the realm itself. Recognition and status matter deeply to her; she cultivates the appearance of humble service while actually pursuing power and influence with considerable ambition.

### Strengths

- **Eloquence and Voice**: Eloquent and clear-voiced, Cárenna can persuade, inspire, command, and soothe through speech alone. She understands the music of language and deploys it with artistry.
- **Diplomatic Acumen**: Her fellow-feeling, perception, reasoning, and social grace make her adept at reading people, understanding their motivations, and finding pathways to agreement.
- **Heraldic Knowledge**: Her mastery of heraldic lore, noble lineages, and courtly form means she can handle the politics of Tarvénia's nobility with authority and precision.
- **Physical Grace and Presence**: Trained in dancing and movement from childhood, she possesses the physical poise that reinforces her verbal authority. Her bearing alone commands attention.
- **Intrigue and Guile**: Her high skill in intrigue and guile, combined with her apparent openness, allows her to move through hidden political currents while maintaining plausible deniability about her own role in events.

### Weaknesses

- **Lack of Physical Prowess**: She is not a fighter and possesses no martial skills of note. In physical danger, she is vulnerable and dependent on guards or allies for protection.
- **Over-Investment in Consensus**: Her tendency toward diplomacy and compromise can leave conflicts papered over rather than settled, storing problems for later ignition.
- **Perceived Lack of Gravity**: Some traditionalists view her new approach to herald-craft as insufficiently formal or authoritative. Important figures from older traditions sometimes doubt her sincerity or question her qualifications.
- **Emotional Distance and Inauthenticity**: Her constant performance and cultivation of persona can leave her isolated, unsure whom—if anyone—she can trust with her true self. She struggles with authentic emotional connection.
- **Dependence on Position**: Her power derives entirely from her role and reputation. Without her status as a herald of the crown, she would be merely another ambitious noble, and this knowledge creates a subtle anxiety that drives increasingly risky political maneuvering.

## Social

### Patrons

- **King Aldrous III**: The aging monarch values Cárenna's counsel and has come to rely on her judgment in matters of diplomacy and internal realm politics. He has indicated subtle support for her continued advancement within the herald corps.
- **Duke Mycaelus of the Eastern Marches**: A powerful regional lord who has engaged Cárenna's services repeatedly in mediating disputes with neighboring provinces. He views her as a valuable ally and occasional lover, though their relationship is carefully concealed.
- **Lady Serenna Voss, Master of Commerce**: The crown's chief advisor on trade and mercantile matters has become Cárenna's closest confidant and patron within court, offering guidance on the political currents of the royal household.

### Enemies

- **Lord Kelvic Aldred, Herald Emeritus**: The previous chief herald, now retired, views Cárenna as an upstart who lacks the necessary gravitas for her position. He has begun subtly undermining her authority, questioning her decisions to the king and his allies among the older nobility.
- **The Canonist Orthodox**: A traditionalist faction within the priesthood of the [[affiliation-arldnpnthn|Aurèldián Pantheon]] who view Cárenna's pragmatic morality and her role in secular governance as improper and potentially heretical. They have begun questioning her moral standing from their pulpits.
- **Merchant-Lord Thevarin**: A wealthy and politically connected trader whose interests Cárenna opposed in a recent negotiation, resulting in significant financial loss to his enterprises. He has been quietly gathering evidence of her conflicts of interest and inappropriate relationships, intending to expose her when circumstances allow.

### Affiliations

- **City Heralds' Guild of Tarvénia**: Her primary affiliation and source of authority. She maintains its political interests while advancing her own.
- **House Gráveth**: Her family house, whose interests she subtly promotes through her position.
- **The Aurèldián Pantheon**: A devoted follower of Múrkír the Voyager, she maintains public religious devotion while privately entertaining doubts about institutional faith.

## Plot Hooks

1. **The Bastard Child**: Cárenna receives an urgent message from **Duke Mycaelus** concerning a serious complication: there is a child—her daughter—born during their brief liaison five years prior. The mother, a minor noblewoman of uncertain stability, has begun making public claims and threatening to expose their relationship and the child's paternity unless Cárenna acknowledges the girl and secures her position within the nobility. To acknowledge the child would be to admit to a scandalous affair that could damage her standing with traditionalists; to ignore the threat is to allow an innocent child to be used as a weapon by her mother. Worse, Cárenna discovers that **Lord Kelvic Aldred** has learned of the situation and is preparing to use it as leverage to force her resignation from her position.

2. **The Heretical Diplomat**: Cárenna is tasked with delivering an official state declaration to the **Canonist Orthodox**, but the message contains language that the priesthood will interpret as heretical or sacrilegious. The king has deliberately worded it this way to provoke a political crisis that will discredit the traditionalist faction—but he has not told Cárenna of his intention. When the priesthood erupts in outrage and demands her censure for delivering such blasphemy, she can accept the consequences of her role or reveal the king's manipulation and become a liability to the throne.

3. **The Merchant's Leverage**: **Merchant-Lord Thevarin** reveals to Cárenna that he possesses documented evidence of her conflicts of interest and her inappropriate financial entanglement with House Gráveth's commercial interests—transactions that were facilitated through her herald's authority. He offers her a choice: either she works to undo the previous trade negotiation that cost him wealth and leverage her position to grant him specific commercial concessions, or he brings his evidence to the king's justice council. She has three days to decide.

4. **The Succession Conspiracy**: Cárenna learns through her palace network that a faction of powerful nobles is quietly working to manipulate the succession following King Aldrous's anticipated death—engineering circumstances that will place a weak but controllable heir on the throne. Several of her patrons are involved, including **Duke Mycaelus**. She is approached to be the herald who will authenticate and announce the succession, knowing that her involvement would legitimize whatever scheme unfolds. To refuse is to lose crucial allies and mark herself as an obstacle; to cooperate is to become complicit in what she suspects may be a coup.

5. **The Shadow Voice**: A mysterious contact approaches Cárenna with a proposition: become a covert agent for a foreign power (likely the Byzarian League), providing intelligence on the kingdom's diplomatic intentions, military readiness, and internal political fractures. In exchange, she receives wealth, protection, and assurance that her family will be safeguarded against future calamity. The contact has detailed knowledge of her secret daughter and seems to know everything about her vulnerabilities. She is given one week to decide, and the contact makes clear that refusal is not truly an option—they have invested too much in recruiting her.

6. **The Herald's Rebellion**: Younger members of the Herald's Guild, impressed by Cárenna's new approach but frustrated by the pace of institutional change, approach her about leading a reformist movement within the guild structure. They want her to challenge the traditional hierarchy, push for new rules that diminish the authority of elder heralds, and put the selection of official pronouncements to a vote. The reformation would require going against **Lord Kelvic Aldred** and the traditionalist leadership directly. Cárenna must weigh the potential to reshape the institution against the certain enmity of powerful figures and the risk that the reform movement, if it succeeds too dramatically, could destabilize the careful diplomatic equilibrium she has helped establish.
