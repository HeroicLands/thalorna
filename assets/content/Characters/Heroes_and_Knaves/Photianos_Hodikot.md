---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Phótianos Hodíkot
  title: ""
  given: Phótianos
  clan: Hodíkot
  home: gumushisar2
  aliases: []
packFolder: helladbyzaria
shortcode: phtnshdkt
renamedFrom: phtnstrtgpls
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Innkeeper
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: humanflk
  born: 660/12/1
  height: 1.73
  weight: 64.4
  frame: heavy
  appearance:
    eye_color: green
    hair_color: gray
    skin_color: light
    complexion: weathered
    extra_features:
      - a scar on the right hand
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 26 } }
    - { model: skill-helnkscrpt, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-weapongear-stk }
    - { model: sohl-sohl-armorgear-wtunic }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wcap }
    - name: Cooking utensils (set)
      type: miscgear
      system:
        shortcode: cookingutensils
        weight: 1
        value: 100
        durability: 3
    - name: Herbal remedies and medicinal preparations
      type: miscgear
      system:
        shortcode: herbalremedies
        quantity: 4
        weight: 1
        value: 100
        durability: 3
    - name: Ledger for bookings and accounts
      type: miscgear
      system:
        shortcode: ledgerforbookings
        weight: 1
        value: 100
        durability: 3
    - name: Brewing supplies (hops, grains, vessels)
      type: miscgear
      system:
        shortcode: brewingsupplies
        quantity: 3
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-stdrtns }
    - { model: sohl-sohl-miscgear-tndrbx }
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

![[phtnshdkt|Phótianos Hodíkot]]{float: top-left}

Phótianos stands 5'8" tall with a heavy build. He has light weathered skin, gray hair, and green eyes. His features include a long face, a straight nose, a sharp jawline, and prominent brows. He has a scar on his right hand.

# Dossier {#dossier}

Phótianos was born the second son of Stratégios, a merchant of modest success in the coastal trading city of Nékropolis. His elder brother inherited the family's trading operations while Phótianos, spirited and imaginative from youth, apprenticed with his mother's brother Demetríos, proprietor of the celebrated inn called the Starlight Crown. Those early years instilled in him a deep philosophy: a good inn is a sanctuary, a stage where the great and small dramas of human life unfold.

At thirty-two, following Demetríos's death, Phótianos inherited and expanded the Starlight Crown, transforming it from a simple waystation into one of the most famous inns in the Byzarian League. Over the following decades, he earned his name through the rare art of hospitality—the subtle skill of making every guest feel simultaneously welcomed and known.

His greatest achievement and deepest sorrow occurred simultaneously when his daughter Lyssandra, a promising healer's apprentice, died of a fever at age nineteen, an event that haunted him for twenty years until he found meaning in expanding his inn's reputation as a place of refuge and healing knowledge. Now, in his twilight years, Phótianos operates less as a merchant and more as a keeper of traditions, a living bridge between the old ways and a present that increasingly threatens to leave him behind.

## Psyche

### Personality

Phótianos is a man of warmth tempered with steel. His public persona—the genial host, the teller of rambling yet captivating tales—masks a sharper mind than most realize. He is perceptive nearly to the point of unsettling; he notices when a regular drinks more than usual, when a traveler's smile does not reach his eyes, when strangers exchange meaningful glances over supper. This observational skill has made him a natural confidant, and his inn has become a place where secrets flow as freely as wine.

He is deeply nostalgic, sometimes painfully so. He speaks often of "the old days" when honor meant something and the roads were safer, when younger men still knew the proper way to greet their elders. Yet this nostalgia is tempered with hard-earned pragmatism—he has adapted his inn to survive changing times, accepting changes he privately disdains because survival requires it.

He is a man wrestling with the approach of mortality and the fear of irrelevance. His repeated stories, while engaging, are also tethers to a past he cannot recapture.

### Motivation

Phótianos's deepest motivation is to create and maintain a sanctuary—a refuge where the weary can find restoration, where strangers might become friends, and where the old virtues of hospitality and honor still possess weight. Through this work, he seeks to honor the memory of his lost daughter and his uncle who taught him the craft. Increasingly, he is driven by a desire to pass on his knowledge and philosophy to a new generation before age claims the ability to do so. He is searching for an heir of spirit as much as of blood—someone who understands that an inn is a sacred trust.

### Strengths

- **Culinary Mastery**: Phótianos is famous throughout the League for his brewing, cooking, and especially his craft with preserved foods and medicinal broths. His herb garden and root cellar are talked of among travelers, and his ability to create nourishing, memorable meals from simple ingredients rivals master chefs of royal courts.

- **Master of Hospitality**: He possesses an almost supernatural ability to discern what each guest truly needs—whether comfort, discretion, information, or assistance. He can seat incompatible personalities at the same table and have them departing as friends, or conversely, see that those seeking privacy are never intruded upon.

- **Legendary Raconteur**: His stories are captivating—rich with detail, humor, and real feeling. He uses storytelling as both entertainment and subtle means of gathering and imparting information. Many travelers have shared secrets with him after becoming drunk on his stories and mead.

- **Deep Community Knowledge**: Phótianos possesses encyclopedic knowledge of the region—not from books but from decades of conversation. He knows the genealogies of leading families, the feuds that simmer beneath civility, the hidden capabilities of seemingly minor figures, and the true currents of power beneath the visible government.

- **Steady Presence**: In crisis or sudden danger, Phótianos becomes calm and decisive. His very presence seems to settle panic. He has mediated disputes, guided lost souls away from despair, and provided practical wisdom in moments when others froze.

### Weaknesses

- **Physical Fragility of Age**: While still spry, his strength is diminished. He tires more quickly than he did in youth, and his reflexes are noticeably slower. Any physical confrontation would quickly overwhelm him.

- **Romantic Idealization of the Past**: His constant references to "better days" are not merely nostalgic habit—they reflect a real inability to fully accept the changes the present age brings. This sometimes leads to poor judgment in adapting to new threats and opportunities.

- **Emotional Volatility Regarding Loss**: Mention of disease, children, or death can bring on deep emotion. His daughter's death remains an open wound that sixty years of stoicism have not truly healed, and tragic stories can reduce him to sudden tears, undermining his authority.

- **Reluctance to Delegate**: Despite needing help, Phótianos struggles to truly empower subordinates, constantly second-guessing their work and taking on excessive labor himself. This perfectionism has caused friction with promising young staff.

- **Difficulty with Combat**: While capable of defending himself with a staff or using tactical cunning, Phótianos is not a warrior. Situations requiring sustained violence place him at severe disadvantage despite his mental sharpness.

## Social

### Patrons

- **The City Magistrate, Lord Theodóros**: An aging administrator who conducts much of his actual governance from a corner table in the Starlight Crown's common room. Phótianos provides him with information, advice, and the illusion of privacy while subtly influencing policy through carefully timed conversations.

- **Captain Nikolaüs of the Harbor Guard**: A gruff military officer who has relied on Phótianos for word of smuggling and crime in the port. Phótianos freely trades information in exchange for protection and official favor.

- **The Merchant House of Kallistos**: A wealthy trading family that considers the Starlight Crown their second home and pays high rates for exclusive use of the private dining hall. Phótianos is their informal advisor in matters of society.

- **Traveling Scholars and Healers**: An informal network of educated wanderers who view the inn as both sanctuary and information exchange. Phótianos subsidizes rooms for impoverished scholars in exchange for access to their knowledge.

### Enemies

- **Kharon the Fist**: A new criminal lord from the southern territories who has been attempting to establish an extortion racket in the district. Phótianos refused to pay protection money and has become the target of increasingly hostile "suggestions." Kharon views the innkeeper as an obstacle to establishing his power.

- **Demetría Sulfúra**: A merchant woman of rival house who has accused Phótianos of spreading false rumors about her trading practices, damaging her reputation and business. The two families maintain cold antagonism, though the rift may not be irreparable.

- **The Orthodox Temple of Jánus**: Certain temple authorities believe Phótianos's inn has become "too permissive" regarding who is served and what discussions are tolerated. They have sermonized against the inn and encouraged the faithful to boycott it, viewing him as spiritually corrupted by worldliness.

### Affiliations

- **The Innkeepers' Association of the Byzarian League**: Phótianos holds high standing, though he is often at philosophical odds with younger members regarding the running of an inn and the new fashions.

- **The Order of Hospitality**: An ancient, somewhat informal organization dedicated to preserving the traditions of sacred hospitality. Phótianos is a sworn keeper of its traditions.

- **The Starlight Crown**: His life's work and legacy, the inn functions as much as a symbol as a business.

## Plot Hooks

1. **The Mysterious Lodger**: A cloaked figure arrives at the Starlight Crown requesting the most private accommodations available, paying in gold and demanding absolute discretion. Over several nights, Phótianos observes this guest receiving late-night visitors—some clearly frightened, others angry. On the fourth night, the guest is found dead in their chamber under circumstances that appear accidental but smell of murder. Local authorities blame Phótianos's negligence, and his inn's reputation hangs in the balance. Investigation reveals the guest was a political dissident from a neighboring realm, and his death sets off a cascade of complications between realms that Phótianos has to handle carefully to clear his name while protecting the identities of those who visited.

2. **The Heir's Dilemma**: A promising young tavern worker from humble background shows real aptitude for the innkeeper's craft and the philosophical understanding that attracted Phótianos to the craft decades ago. Phótianos begins grooming this young person to eventually take over the Starlight Crown, but discovers they have become involved with a dangerous organization whose goals contradict everything the inn stands for. Phótianos can confront them, reveal their involvement to the authorities, or attempt to save them by bringing them deeper into his confidence and converting them away from dangerous associations.

3. **The Debt Collector's Wrath**: A creditor Phótianos believed settled long ago presents documents showing that a significant debt from thirty years past was never actually paid—only deferred through now-invalid agreements. The sum, with accumulated interest, is ruinous. The creditor is not interested in money but in using this legal claim to gain control of the inn itself. Phótianos must investigate the fraud—someone has falsified records—and trace a conspiracy that reaches back into his family's past, possibly implicating his now-deceased uncle Demetríos or brother Stratégios.

4. **The Alchemist's Laboratory**: During routine renovations of the inn's cellars, workers discover a hidden chamber containing elaborate alchemical equipment, strange manuscripts, and preserved substances. The space is clearly ancient and had been sealed long before Phótianos's tenure. Investigation suggests one of the inn's previous owners was conducting dangerous experiments—possibly attempting to create forbidden substances or prolonging life through unnatural means. Phótianos must decide what to do with these dangerous secrets. If word gets out, his inn will be labeled as a place of dark magic. If he destroys evidence, he might be destroying proof of a historical crime.

5. **The Poisoned Feast**: During a gathering of regional nobility at the inn, Phótianos's own soup is served to the guests, and three of them fall deathly ill within hours, nearly dying. Investigation suggests the poison was deliberately introduced into the kitchen—by one of Phótianos's staff. Yet all his trusted workers would swear on their lives that no poisoning occurred. Someone is either framing Phótianos, testing his defenses, or sending a message. As authorities investigate and the inn's reputation crumbles, Phótianos must identify the perpetrator while uncovering the true motive—is this an attack on the nobility, an attack on the inn, or something more tangled involving Phótianos's own past?
