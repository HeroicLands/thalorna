---
tags:
  - heroes-and-knaves
  - hero
  - tradesfolk
  - character
name:
  full: Philetos Kleftes
  title: ""
  given: Philetos
  clan: Kleftes
  home: alyssar
  aliases:
    - The Fire-Sworn Strategist
packFolder: midhalionvylaria
shortcode: phltsklfts
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Scholar
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - provinclys
  gender: male
  species: null
  age: 33
  born: 687/4/19
  height: 1.8
  weight: 78
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: olive
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-blackflame }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 15 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cmcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-msbyr }
    - { model: sohl-sohl-armorgear-mleg }
    - { model: sohl-sohl-armorgear-ltkboot }
    - name: Military manuals and tactical references
      type: miscgear
      system:
        shortcode: militarymanuals
        weight: 1
        value: 100
        durability: 3
    - name: Map case with campaign maps
      type: miscgear
      system:
        shortcode: mapcasewithcampaign
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-frtns }
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Fire-starting materials and oil vials
      type: miscgear
      system:
        shortcode: firestarting
        quantity: 3
        weight: 1
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-wtrskin }
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

![[phltsklfts|Philetos Kleftes]]{float: top-left}

Philetos stands 5'11\" tall with a heavy build. He has olive weathered skin, dark brown hair, and brown eyes. His features include a long face, a prominent nose, a pronounced chin, a wide mouth, arched brows, high cheeks.

# Dossier {#dossier}

Philetos Kleftes once served as a military strategist in [[affiliation-vylarinmpr|Vylaria]]’s armies, renowned for his ability to devise bold, unorthodox strategies. His cunning earned him many victories, but his methods were seen as too destructive and unpredictable by the conservative military hierarchy. After a particularly devastating campaign where he employed fire as a weapon, burning an entire enemy fortress to the ground, Philetos was forced into exile, accused of reckless conduct. The experience only hardened his conviction that the empire’s leaders were weak men who feared the very tools that could save them—a conviction that drew him naturally to [[affiliation-blackflame|The Black Flame]] and its doctrine that might makes right.

Bitter and exiled, Philetos turned to mercenary work, selling his tactical expertise to whoever could afford him. His faith in the Black Flame gave shape to his resentment: the empire hadn’t exiled him for being wrong, it had exiled him for being strong in a way it couldn’t control. When he met [[being-klstrtsxrchds|Kallistratos Exarchides]] at a political gathering in [[place-velysara|Velysâra]], their shared fascination with fire as both a weapon and a tool for transformation brought them together. Philetos saw in Kallistratos a kindred spirit, someone willing to embrace the destructive power of fire to achieve greater goals. He believes that Kallistratos’s ambitions to reshape the empire through fire and arcane power align perfectly with his own desire for redemption and vengeance—and with the Black Flame’s vision of a world where strength, not politics, determines who rules.

## Background

### Skills and Abilities

- **Strength**: Philetos has spent years in battle, developing significant physical strength.
- **Endurance**: His experience in long campaigns has given him remarkable stamina.
- **Dexterity**: While not particularly graceful, Philetos is precise in his movements in battle.
- **Agility**: He moves efficiently, relying on agility in combat to outmaneuver opponents.
- **Perception**: His awareness of the battlefield is sharp, though not exceptionally so.
- **Comeliness**: Philetos’s appearance is rugged and battle-worn, with a certain charisma.
- **Aura**: His presence commands respect, especially among his troops.
- **Will**: Philetos’s will is strong, honed through years of command and leadership.
- **Reasoning**: His tactical mind allows him to plan and strategize effectively.
- **Creativity**: While occasionally innovative in battle, Philetos prefers tried-and-true tactics.
- **Empathy**: He is focused on his duty as a commander, often appearing emotionally distant.
- **Eloquence**: Philetos speaks with authority, his words often having the power to inspire his men.
- **Morality**: Philetos lives by the Black Flame's creed: the strong have the right to act, and victory justifies the method. As a mercenary commander, he professes loyalty to his soldiers and their shared culture, but his moral compass is ultimately calibrated to strength and results, not sentiment.
- **Voice**: Unexpectedly, Philetos possesses a rich, smooth voice that can carry a tune with surprising beauty. Despite his rough exterior as a mercenary, his voice is deep and full, suited for songs that reflect tales of battle and camaraderie.
- **Master Strategist**: Philetos excels in devising military strategies, particularly ones that use fire and heat as central elements in warfare. He is always thinking several steps ahead and can adapt quickly in chaotic situations.
- **Warrior of Flame**: Philetos isn’t just a strategist—he has learned to use fire in battle, employing incendiary tactics such as firebombs and burning oil to enhance his combat abilities.
- **Cold and Calculated**: Philetos has no qualms about using extreme measures to achieve victory. His strategic mind allows him to see opportunities where others see chaos, and he is unafraid to take risks if the potential rewards are high.

## Psyche

### Personality

Philetos is pragmatic and ruthless, unafraid to make hard decisions or sacrifice others for the greater good. His experience with fire as a tool of war has made him appreciate both its power and its uncontrollable nature, and the Black Flame's teachings have given him a framework for what others might call cruelty: the weak fall so that the strong may build something better. Though he is fiercely loyal to Kallistratos, his moral flexibility often puts him at odds with others in the group.

### Motivation

Philetos seeks both personal redemption and revenge. He believes that helping Kallistratos harness the power of fire to restore his family’s status will not only lead to personal glory but also vindicate the Black Flame’s doctrine—proving that fire can be a weapon of genius, not madness, and that the empire was wrong to exile the man who understood this first.

### Strengths

- **Military Strategy**
- **Swordsmanship**

## Social

### Enemies

rival faction

## Plot Hooks

1. **The Ashen Pact**: A rogue general from Vylaria’s armies approaches Philetos, offering him a position as their chief strategist for a campaign to conquer a rebellious province. The province holds significant cultural and personal meaning for Philetos, as it was once his family’s home. Accepting the offer could grant him a chance to restore his name, but at the cost of destroying his ancestral lands.

2. **The Scorched Earth Legacy**: Survivors of the fortress Philetos burned during his infamous campaign have formed a militia seeking revenge. Their tactics disrupt local trade routes, painting Philetos as the cause of continued suffering. To address the growing threat, he must track down the militia’s leader, only to discover a former comrade leading the group with evidence of Vylaria’s betrayal.

3. **The Calculated Rebellion**: A resistance group within Vylaria’s borders contacts Philetos, requesting his help to overthrow a corrupt governor. Though the mission aligns with his disdain for the empire’s decay, Philetos suspects the group’s leader is motivated more by personal ambition than justice. He must decide whether to manipulate the rebellion for his gain or risk exposing its leader’s true motives.

4. **The Flame Forged Alliance**: A minor noble aligned with Kallistratos offers Philetos a chance to lead a coalition of mercenary companies in exchange for pledging loyalty to their cause. While the deal promises substantial resources and influence, Philetos uncovers evidence that the noble is sabotaging Kallistratos’s ambitions. Choosing to expose the plot could secure Kallistratos’s trust but might cost Philetos the alliance and his growing network.
