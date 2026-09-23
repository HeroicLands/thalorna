---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Goremadânis Hérendânis
  title: ""
  given: Goremadânis
  clan: Hérendânis
  home: belekos
  aliases: []
packFolder: midhalionvylaria
shortcode: grmdnshrndns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Common Seaman
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provncmktr
  gender: female
  species: null
  age: 22
  birthday: 698/2/7
  height: 1.73
  weight: 66.2
  frame: light
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: light
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-sacredforge }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 4 } }
    - name: Rope coil (50 feet)
      type: miscgear
      system:
        shortcode: ropecoil
        weight: 2
        value: 100
        durability: 3
    - name: Fishing line and hooks (bundle)
      type: miscgear
      system:
        shortcode: fishinglineandhooks
        weight: 1
        value: 100
        durability: 3
    - name: Navigation slate for star-reading
      type: miscgear
      system:
        shortcode: navigationslate
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bglgcvs }
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

# Appearance {#appearance}

![[grmdnshrndns|Goremadânis Hérendânis]]{float: top-left}

Goremadânis stands 5'8" tall with a medium build. She has light olive skin, light brown hair, and brown eyes. Her features include a diamond-shaped face, an aquiline nose, a sharp jawline, an expressive mouth, light brows, high cheeks.

# Dossier {#dossier}

**Orphaned Beginnings**

Goremadânis was born to a sailor's widow in the port city of **[[affiliation-provncmktr|Moktur]]** in the [[affiliation-vylarinmpr|Empire of Vylaria]]. Her mother, a former ship's cook, died of lung fever when **Goremadânis** was only seven summers old, leaving her alone and resourceless in a city where orphans had few options beyond servitude or thievery. A kindly captain named **Revik Saltmask** found her stealing bread from the docks and, instead of turning her in to the city watch, offered her work aboard his merchant vessel—cleaning, hauling, running messages between crew members.

**Coming of Age at Sea**

For fifteen years, the sea has been Goremadânis's home and her education. She served aboard **Saltmask's** ship, the _Tempest's Mercy_, learning seamanship through exposure and imitation. Her quick intelligence and physical grace made her valuable; by age sixteen, she was assisting with piloting, learning to read stars and currents. By age nineteen, she could navigate by celestial observation alone and handle any task aboard a merchant vessel. More importantly, she earned the respect of **Saltmask's** crew through her reliability, her willingness to work harder than circumstance demanded, and her genuine good spirits even during the hardest voyages.

**Current Station**

At twenty-two, Goremadânis operates as a reliable hired hand—a deck worker, navigator, and general utility crew member for whichever captain can afford her services. She maintains deep loyalty to **Captain Revik Saltmask**, who saved her life, but she also works other vessels when **Saltmask** has no need of her services. She has begun saving coin toward a distant dream—perhaps one day to own a small vessel of her own, or to become a navigator-for-hire to adventurers and explorers. She remains blissfully unaware that she has caught the romantic eye of several crew members and minor naval officers who admire her spirit from a distance.

## Psyche

### Personality

Goremadânis possesses an uncomplicated joy in her work and an infectious enthusiasm for the sea that borders on the spiritual. She approaches new tasks with confidence, assuming that if others can do something, she can learn to do it, given sufficient time and effort. This optimism occasionally makes her underestimate dangers or fail to grasp the complexities of political maneuvering—she tends to interpret the world in straightforward terms, and deception sometimes catches her off guard.

She is genuinely friendly and open-hearted, forming quick attachments to people who treat her kindly. She is fiercely loyal to those she considers part of her circle, particularly **Captain Saltmask**, and she would perform dangerous acts without hesitation for those who have earned her trust. She laughs readily, sings passably, and finds humor in difficult situations. She has a practical sensibility about work and survival—no shame in doing difficult labor, no false pride about her origins.

### Motivation

Goremadânis is driven by gratitude toward **Captain Saltmask** and a desire to eventually achieve independence through mastery of seamanship and navigation. She dreams of commanding her own vessel someday, though this dream feels distant and somewhat improbable. She seeks to prove that her humble origins do not limit her potential, and she yearns for recognition of her skills beyond the patronizing approval that sometimes comes from crew members who view her primarily as a charming young woman. She is also increasingly curious about the larger world beyond the merchant routes she knows—she envies adventurers their freedom and their ability to pursue meaningful quests beyond the simple business of commerce and cargo.

### Strengths

- **Exceptional Climbing and Physical Agility**: Her climbing score of 14 reflects years of scrambling through ship's rigging, shinning up masts, and navigating complex three-dimensional vessel architecture. She is more comfortable in vertical spaces and on swaying lines than most people are on solid ground.
- **Skilled Navigator**: Though self-taught, she has developed an intuitive understanding of celestial navigation, current patterns, and weather prediction. Her dexterity and perception enable her to manage complex navigation calculations with reasonable accuracy.
- **Versatile Sailor**: She can perform virtually any required shipboard task—rigging sails, hauling cargo, performing maintenance, cooking basic meals, even basic ship repairs. This versatility makes her invaluable aboard merchant vessels.
- **Quick Learning**: Her reasoning score of 12 combined with her genuine enthusiasm allows her to grasp new concepts rapidly. She has learned most of her skills through observation and imitation rather than formal instruction, testimony to her adaptive intelligence.
- **Seamanship and Awareness**: She possesses an almost intuitive understanding of water conditions, ship behavior, and the subtle signs of approaching weather. Her awareness and seamanship scores reflect countless hours spent in genuine attentiveness.

### Weaknesses

- **Limited Physical Strength**: Her strength score of 10 means she struggles with tasks requiring brute force—hauling the heaviest cargo, wrestling with stubborn rigging in high wind, or engaging in prolonged physical labor relative to larger crew members.
- **Naiveté Regarding Social Complexity**: She tends toward straightforward honesty and is sometimes blind to political maneuvering, betrayal, or social manipulation. She assumes people's statements are truthful unless proven otherwise, a vulnerability in urban and courtly settings.
- **Lack of Formal Education**: She cannot read or write beyond basic numerals, a limitation that restricts her advancement to officer ranks on most vessels and makes her vulnerable to deception regarding documents or written instructions.
- **Practical Inexperience Beyond the Sea**: She struggles with horseback riding, sustained walking on land, and the business aspects of commerce. Her practical skills are almost entirely maritime.
- **Insufficient Confidence in Authority**: Younger and lacking formal rank, she sometimes struggles to assert herself or give orders to older crew members, even when she has superior knowledge of a situation.

## Social

### Patrons

- **Captain Revik Saltmask**: Her adoptive father figure and original savior, **Saltmask** remains her primary patron and deepest loyalty. He has refused several offers to purchase her contract and insists she maintain her independence and freedom to choose her work.
- **The Crews of Various Merchant Vessels**: The collective captains and officers of the ships she regularly works for, who value her reliability and skills. She has become a known commodity among **Moktur's** merchant marine.

### Enemies

- **Slave Trader Devorin**: A merchant of human suffering who operates out of hidden docks in **Moktur**, **Devorin** has attempted multiple times to capture **Goremadânis**, viewing her as a valuable commodity. **Captain Saltmask** has protected her thus far, but the threat remains.
- **The Stern Order of Naval Tradition**: Some of the older, more conservative naval officers view her presence aboard vessels as a violation of maritime tradition and believe women have no place in honest seafaring. They sometimes attempt to bar her from work or undermine her standing with captains.

### Affiliations

- **Informal Merchant Marine Community**: While not a member of any formal organization, she is known among **Moktur's** maritime workers and enjoys a loose affiliation based on reputation and mutual respect.

## Plot Hooks

1. **The Cartographer's Prize**: An elderly scholar and cartographer approaches **Goremadânis** with an unusual proposition: he believes he has discovered evidence that ancient, pre-sinking maps to legendary islands exist, and he needs a skilled navigator to help recover them from a wreck site far beyond the established shipping lanes. He cannot persuade **Captain Saltmask** to risk his vessel, so he hires the party to escort and assist **Goremadânis**. The journey becomes an extended expedition into unknown waters, where the party encounters rival explorers, actual dangers marked only on ancient charts, and eventually discovers whether the legendary islands are real—and whether reaching them would be fortune or doom.

2. **The Stowaway's Secret**: While cleaning the hold, **Goremadânis** discovers a stowaway—a terrified young person fleeing persecution by a despotic government. **Saltmask** initially wants to put the stowaway ashore and return to his usual routes, but **Goremadânis** is moved by their plight and persuades the party to assist in smuggling the refugee to a safe harbor. The journey becomes complicated when the persecuting government dispatches a naval vessel to intercept and retrieve the stowaway. The party must use guile, seamanship, and combat to protect the refugee while helping **Goremadânis** come to terms with the moral complexity of the situation.

3. **The Sabotaged Supply Run**: **Goremadânis** is hired with a merchant expedition carrying critical supplies to an isolated settlement, a lucrative contract that would fund her personal dreams. However, she discovers that someone has deliberately adulterated the supplies—contaminating food, tainting fresh water, damaging medications. She must determine whether this is commercial sabotage by a rival merchant, an act of war by a hostile power, or something more sinister. The investigation and resolution might require the party to confront powerful commercial interests or to prevent a settlement's planned destruction.

4. **The Sea Shepherd's Call**: **Goremadânis** is approached by a mysterious figure who claims to be an agent of a sea goddess, offering her an opportunity to become something more—a true navigator of the mystical tides, one who could guide ships through impossible waters and perhaps communicate with the spirits of the sea itself. The offer tempts her toward a path of genuine meaning and power beyond the routine of merchant sailing, but accepting would require her to undergo a dangerous mystical transformation and to leave behind her old life and her loyalty to **Captain Saltmask**. The party must help her navigate this choice, or potentially assist her through whatever transformation she undergoes.
