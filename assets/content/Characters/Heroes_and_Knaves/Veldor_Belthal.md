---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Véldor Bélthal
  title: ""
  given: Véldor
  clan: Bélthal
  home: cerdwnshlw
  aliases: []
packFolder: aureldiaelavendre
shortcode: veldrblthl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Thespian
  stations: []
  lore:
    - commonerrnk
  homes:
    - elavendre
  affiliations:
    - kngdmlvndr
  gender: male
  species: null
  age: 36
  born: 684/10/15
  height: 1.75
  weight: 65.8
  frame: medium
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: light
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-venusia }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-fltch, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-wcboot }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - name: Leather bag for scripts
      type: miscgear
      system:
        shortcode: leatherbagforscripts
        weight: 0.5
        value: 100
        durability: 3
    - name: Theater costumes and changes
      type: miscgear
      system:
        shortcode: theatercostumes
        weight: 2
        value: 100
        durability: 3
    - name: Makeup kit with cosmetics
      type: miscgear
      system:
        shortcode: makeupkit
        weight: 0.3
        value: 100
        durability: 3
    - name: Collection of dramatic scripts
      type: miscgear
      system:
        shortcode: collectionofdramatic
        quantity: 1
        weight: 1
        value: 100
        durability: 3
    - name: Lute
      type: miscgear
      system:
        shortcode: lute
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bglgcvs }
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

![[veldrblthl|Véldor Bélthal]]{float: top-left}

Véldor stands 5'9" tall with a medium build. He has light fair skin, dark brown hair, and blue eyes. His features include a broad face, a narrow nose, a rounded chin, dark brows.

# Dossier {#dossier}

## Background

### Early Life

Véldor was born into modest means in the bustling streets of [[place-elavendre|Élavendre]]'s theatrical quarter, the son of a silk merchant and a chambermaid who possessed a voice of startling clarity. His mother's love of song became his earliest education, filling his childhood with melody and story. By age seven, he had already begun performing in the street pageants that drew crowds during the Festival of Vénusia, his precocious talent earning coins and admiration in equal measure. His father, initially skeptical of such frivolous pursuits, came to recognize his son's gift during a spring performance that moved the lord mayor himself to tears.

### Training and Ascendance

At fourteen, Véldor apprenticed with **Master Celestyn Darnos**, the grand director of the Élavendre City Theater Company, a stern but visionary craftsman who had shaped the finest performers in three kingdoms. Under Darnos's exacting tutelage, Véldor learned not merely to speak words, but to inhabit them—to become, through force of will and imagination, every hero, tyrant, lover, and fool written in the classical texts. His prowess grew with each passing year, and by his mid-twenties, he had become the principal actor of the Company, commanding top billing in productions of the greatest dramatic works.

### Current Situation

Now, in his fourth decade, Véldor stands at the zenith of his career, yet feels the weight of time's passage. The roles that once came effortlessly now require greater discipline to master. His financial security is assured through generous patronage from the nobility of Élavendre—most notably from **Lady Seraphine of House Valorant**, whose love of the theatrical arts has translated into unflagging support—yet he senses a gnawing hollow beneath his considerable success. The applause that once intoxicated him now feels, on certain nights, like the roar of an uncaring sea.

## Psyche

### Personality

Véldor possesses a chameleon's gift for adaptation, wearing different masks with ease both upon the stage and in society. In public, he is charming and effusive, a raconteur of exceptional skill who can entrance a room with stories of his theatrical triumphs. Yet those who know him intimately recognize the melancholy that dwells behind those brilliant eyes—a sorrow that no amount of applause can fully banish. He is prone to bouts of introspection that can last for weeks, during which he becomes withdrawn and difficult to reach, questioning his worth and his choices with the sort of profound self-doubt that often afflicts artists of genuine depth.

His relationships tend toward intensity, and he is capable of both lavish devotion and sudden, inexplicable coldness. Colleagues have learned to recognize the signs of his darker moods and to grant him the solitude he craves. Yet his mercurial temperament has not prevented him from building deep friendships with those who understand that genius often walks hand-in-hand with affliction. He remains fiercely loyal to those he considers true companions, and his wit, when employed in their service, can brighten even the darkest of days.

### Motivation

Véldor seeks the one thing that has always eluded him: the sense of genuine, lasting meaning. He has won every accolade his art can offer, yet each victory rings hollow within days. He harbors a secret desire to create something of his own—a new work, a performance so profound and revolutionary that it might echo through the ages, something that would prove his life was not merely a parade of beautiful masks and clever words, but a genuine contribution to the human spirit. Beneath this lies a desperate fear that he has wasted his considerable gifts on ephemeral entertainments, and that when death comes for him, he will be remembered only as a voice and a face, soon forgotten.

### Strengths

- **Consummate Performer**: Véldor's mastery of theatrics, singing, and dance is unparalleled within three kingdoms. His voice alone can silence a restless crowd, and his ability to convey emotion through subtle gesture is almost uncanny.
- **Silver-Tongued Orator**: With eloquence and charm as his weapons, Véldor can persuade, manipulate, or inspire with words alone. He has negotiated his way out of dangerous situations and into advantageous ones with equal ease.
- **Exceptional Perceptiveness**: Years of studying human nature for the stage have given him an acute ability to read people. He can often discern a person's emotional state and true intentions through careful observation.
- **Cultural Literacy**: Véldor possesses encyclopedic knowledge of classical literature, history, and artistic traditions. He can discuss philosophy, myth, and history with genuine erudition.
- **Versatile Craftsperson**: Beyond his performance skills, Véldor is accomplished in multiple practical arts—brewing, cookery, and the martial disciplines. His well-roundedness makes him surprisingly capable in diverse situations.

### Weaknesses

- **Deep-Seated Insecurity**: Despite—or perhaps because of—his tremendous talent, Véldor doubts his fundamental worth. Success does not reassure him; instead, it intensifies his fear of inevitable failure and exposure.
- **Melancholic Temperament**: His moods are notoriously unstable. Periods of creative brilliance can give way suddenly to profound depression, rendering him unreliable and withdrawn.
- **Emotional Volatility**: When wounded—whether in pride, affection, or honor—Véldor can become vindictive and cruel. He wields words as weapons with devastating precision.
- **Physical Limitations**: He is neither particularly strong nor especially agile. In any situation requiring raw physical power or martial prowess, he is at a significant disadvantage.
- **Addiction to Validation**: Véldor has developed an unhealthy dependence on external approval. When denied applause or admiration, he becomes listless and unmotivated.

## Social

### Patrons

- **Lady Seraphine of House Valorant**: A noblewoman of considerable wealth and refined taste who has become Véldor's primary benefactor. She hosts exclusive performances at her estate and maintains his theater company with generous annual donations. Their relationship is primarily financial, though rumors of romantic entanglement have circulated for years.
- **The Élavendre City Theater Company's Board of Directors**: A council of wealthy merchants and minor nobility who collectively fund the theater. They rely upon Véldor's star power to fill seats and maintain the company's prestigious reputation.

### Enemies

- **Damien Ashford**: A younger actor of considerable talent who has begun to eclipse Véldor in popularity. Their professional rivalry has turned personal, with Damien taking every opportunity to undermine Véldor's authority within the company and to disparage his performances.
- **The Rival Stageworks Collective**: A competing theatrical company that has begun aggressively poaching the City Theater's best performers and audiences. Véldor sees their success as a personal affront.
- **Master Celestyn Darnos** (Complicated): Though still Véldor's mentor and director, the aging Darnos has begun to criticize Véldor's recent work as lacking the depth and nuance of his earlier performances, suggesting that Véldor has grown complacent with success.

### Affiliations

- **The Élavendre City Theater Company**: Véldor's professional home and primary identity. He serves as the company's principal actor and de facto artistic advisor, wielding considerable influence over casting and repertoire decisions.

## Plot Hooks

1. **The Lost Manuscript**: A scholar approaches Véldor claiming to have discovered the complete text of an ancient, unperformed masterwork—a tragedy of such profound power that its author was said to have gone mad during its composition. The scholar believes Véldor is the only actor alive capable of bringing the role's protagonist to life, but completion of the work requires Véldor to undertake a dangerous expedition into the Obsidian Peaks to recover several missing pages from the ruins of an ancient library, where his rival **Damien Ashford** has also taken an interest.

2. **The Patron's Dangerous Secret**: **Lady Seraphine** discreetly summons Véldor and reveals that her patronage of the theater has been a cover for her involvement in a network of rebel agents working to undermine the current regime. She asks Véldor to use his access to noble circles to gather intelligence on a potential conspirator. Véldor must decide whether to involve himself in dangerous court politics, risk losing his patronage and livelihood, or betray Lady Seraphine's trust.

3. **A Role That Demands Everything**: The Élavendre City Theater Company receives commission to perform a controversial new work that critiques the very foundations of the kingdom's social order. **Master Darnos** insists that Véldor perform the lead role—a character whose struggle with identity and meaning mirrors Véldor's own existential crisis. The performance becomes an obsession that slowly unravels Véldor's carefully maintained public persona, forcing him to confront the line between performance and reality.

4. **The Rival's Proposal**: In a shocking turn of events, **Damien Ashford** approaches Véldor with a proposal: collaborate on a revolutionary theatrical production that would blend their talents and cement their place in history. The offer tempts Véldor with exactly what he secretly craves, but accepting it requires him to overcome years of resentment and to trust the one person who has most thoroughly undermined him.

5. **The Voice Stolen**: Véldor wakes one morning to discover his voice mysteriously impaired—a condition no physician can diagnose or cure. Desperate and terrified, he must seek answers from shadowy practitioners of arcane arts, ventures into the criminal underworld of Élavendre, and ultimately confront whether his identity and value exist independent of the talent that has defined his entire life.
