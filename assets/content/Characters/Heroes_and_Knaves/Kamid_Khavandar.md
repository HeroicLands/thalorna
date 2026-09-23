---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Kamîd Khâvandar
  title: ""
  given: Kamîd
  clan: Khâvandar
  home: kethramir
  aliases: []
packFolder: ankariskhazryndesert
shortcode: kamdkhvndr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Beggar
  stations: []
  lore:
    - commonerrnk
  homes:
    - khzryndsrtrgn
  affiliations:
    - khzrncnfdrtn
  gender: male
  species: null
  age: 48
  birthday: 672/9/27
  height: 1.83
  weight: 77.6
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: tanned
    complexion: ruddy
    extra_features:
      - a tattoo of a phoenix on the chest
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-bahramis }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-eng, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-weapongear-clbimp }
    - { model: sohl-sohl-armorgear-hstunic }
    - { model: sohl-sohl-armorgear-hsbrch }
    - { model: sohl-sohl-armorgear-hscap }
    - { model: sohl-sohl-armorgear-rhshoe }
    - name: Carved wooden phoenix charm
      type: miscgear
      system:
        shortcode: carvedwoodenphoenix
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-torch }
    - { model: sohl-sohl-containergear-bgsmcvs }
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

![[kamdkhvndr|Kamîd Khâvandar]]{float: top-left}

Kamîd stands 6'0" tall with a medium build. He has tanned ruddy skin, black hair, and dark brown eyes. His features include a narrow face, a prominent nose, a pointed chin, full lips, dark brows, sculpted cheeks. A distinguishing mark is a tattoo of a phoenix on the chest.

# Dossier {#dossier}

Kamîd was born to farming families in the borderlands of the [[place-khzryndsrtrgn|Khazryn Desert]], one of twelve children in a household where survival was never guaranteed. From childhood, he learned the hard work of coaxing sustenance from unforgiving soil, managing water resources, and reading the desert's moods. By his twenties, he had become the foreman of a productive farm, overseeing dozens of workers and managing the complex logistics of desert agriculture.

At thirty-five, Kamîd's life changed irrevocably when a severe drought struck the region. For two seasons, the rains did not come, and water sources dried. His farm failed along with dozens of others. He attempted to hold the operation together, selling off livestock and equipment to maintain wages for his workers. By the time the drought broke and rains returned, he had nothing left – the farm was seized by creditors, and his workers were scattered.

For the past thirteen years, Kamîd has lived as a vagrant, begging in the streets of various desert settlements, occasionally finding temporary work but never managing to accumulate enough to re-establish himself. He sleeps rough, keeps his few possessions in a canvas sack, and maintains a wooden charm carved by his now-deceased mother. The phoenix tattoo, applied during a brief period when he still harbored hope of rebirth, has become a cruel mockery of his actual circumstances.

## Psyche

### Personality

Kamîd is a man of few words and hard pride. He speaks little unless directly addressed, and his words are generally practical and unemotional. Despite his circumstances, he maintains dignity and refuses – sometimes violently – to be treated as less than human. He is capable of genuine kindness, particularly toward other vagrants and those society has discarded, though his generosity comes from understanding their pain rather than from warmth.

Beneath the stoicism lies deep frustration and bitterness. He views his circumstances as a betrayal by the gods themselves, and his faith in **Báhrámiš** (god of storms) has become complicated – anger mixed with desperate hope that some storm will come to sweep away the current order and restore what he has lost. He is prone to bouts of dark introspection and has contemplated ending his suffering, though something – possibly the phoenix tattoo's symbolism – prevents final despair.

### Motivation

Kamîd is driven by a desperate desire to re-establish himself, to prove that the desert has not truly broken him. He dreams of returning to farming, of accumulating enough capital to acquire land and laborers again. More fundamentally, he is driven by rage – at the drought, at the creditors, at a society that casts aside men who have given their lives to productive work. This rage is sometimes directed outward (at authorities and those he perceives as oppressors) and sometimes inward (manifesting as self-destructive behavior). He clings to the phoenix symbol as a reminder that rebirth is possible, even if his rational mind doubts it.

### Strengths

- **Desert Hardened**: His Survival score of 13 combined with practical years of experience makes him one of the most capable people at navigating the desert, finding water, and identifying edible plants. He knows the Khazryn as intimately as most people know their homes.
- **Physical Resilience**: His Endurance of 14 and hardened physique allow him to endure conditions that would break others – heat, hunger, thirst, and exhaustion barely slow him down.
- **Practical Skills**: His knowledge of farming, animal husbandry, basic construction, and resource management makes him invaluable in creating temporary settlements or managing supplies.
- **Combat Readiness**: Despite his apparent poverty, his Initiative score of 13 and practical combat training with his wooden club mean he is more formidable in a street fight than his appearance suggests.
- **Street Sense**: His Stealth and Awareness scores of 13 each, honed by years of navigating hostile streets and avoiding authorities, make him exceptionally difficult to catch or surprise.

### Weaknesses

- **Stubborn Pride**: He refuses assistance that comes with conditions or that he perceives as charity, limiting his options for improvement. His pride has prevented him from accepting jobs that he considers beneath former station.
- **Limited Combat Training**: While street-smart, his Melee score of only 11 and lack of proper weapons training mean he will be outmatched by trained fighters.
- **Emotional Vulnerability**: Despite his stoicism, he is prone to depression and despair, and his judgment becomes questionable when he falls into these states.
- **Suspicious Nature**: Years of being treated as a vagabond have made him deeply suspicious of others' motives, sometimes seeing betrayal where none is intended.
- **Minimal Resources**: He owns essentially nothing of value and lacks the capital or connections to execute any plan requiring investment or influence.

## Social

### Patrons

- **Old Merchant Khalib**: A spice trader who knew Kamîd's family decades ago, occasionally employs him for temporary work and ensures he doesn't starve, though he is careful not to patronize.
- **The Desert Monks**: Wandering spiritual practitioners who sometimes provide shelter and accept him as fellow pilgrims in the desert's harshness.

### Enemies

- **Captain Darius and the City Guard**: The local garrison commander has made begging and vagrancy a personal crusade, and views Kamîd specifically as a troublemaker and vagrant to be driven out or arrested.
- **The Creditor's Guild**: The organization that seized his farm decades ago, though they no longer actively pursue him, he views them as the architects of his destruction and failure.

### Affiliations

- **The Vagrant Collective**: An informal network of beggars and homeless in the desert settlements who share information, resources, and protection.

## Plot Hooks

1. **The Land Returns**: A courier arrives in the settlement bearing a legal document indicating that Kamîd's original farm property has been seized for unpaid taxes from the current owners – and he has a legal claim to it. To exercise this claim, he must travel days to the provincial capital, produce evidence of original ownership, and pay substantial court fees. The opportunity is simultaneously a potential restoration of everything lost and an obvious trap where creditors might ambush or discredit him.

2. **The Desert Oath**: A dying man Kamîd shelters reveals that he was commissioned by someone to find Kamîd specifically, and before dying, gives him a location in the deep desert where something of value is hidden – something the dying man claims belongs to Kamîd's past. The location is dangerous, the revelation cryptic, and Kamîd must decide whether to pursue this mystery or remain safe in his established routine of survival.

3. **Recruitment for the Storm**: A mysterious figure appears claiming to represent a gathering of desert people planning a rebellion against the settled urban centers, particularly against the city authorities that have oppressed them. They want Kamîd to lead them, promising restoration of his dignity and station. Whether this is genuine opportunity or elaborate trap designed to eliminate a troublemaker remains unclear.

4. **The Stolen Farm**: Kamîd encounters evidence that his original farm failure may not have been entirely due to drought – that someone deliberately sabotaged water systems and spread false information about the drought's severity, profiting from the chaos while farming families lost everything. Pursuing this revelation would require resources he lacks and would make him dangerous to powerful interests.

5. **Phoenix Rising**: A wealthy investor approaches with a business proposition: reestablish a farm operation in a new location, with the investor providing capital and Kamîd providing expertise and labor. The terms are fair, the opportunity seems genuine, but Kamîd's suspicion and pride make him doubt whether it's real. Accepting requires trusting someone when trust has become a dangerous luxury.
