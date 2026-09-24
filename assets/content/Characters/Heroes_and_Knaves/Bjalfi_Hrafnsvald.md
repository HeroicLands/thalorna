---
tags:
  - heroes-and-knaves
  - soldiery
  - character
name:
  full: Bjalfi Hrafnsvald
  title: ""
  given: Bjalfi
  clan: Hrafnsvald
  home: haldrvik
  aliases: []
packFolder: ankarisnordlands
shortcode: bjlfhrfnsvld
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Yeoman Infantry
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmvthgrd
  gender: male
  species: null
  born: 691/5/19
  height: 1.83
  weight: 75.3
  frame: medium
  appearance:
    eye_color: gray
    hair_color: brown
    skin_color: light
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-tyr }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-mnrl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-weapongear-spr }
    - { model: sohl-sohl-weapongear-rndsh }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltstunic }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - name: Hunting knife (well-maintained)
      type: miscgear
      system:
        shortcode: huntingknife
        weight: 1
        value: 100
        durability: 3
    - name: Bedroll (military style)
      type: miscgear
      system:
        shortcode: bedroll
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 3 } }
    - { model: sohl-sohl-miscgear-medsupil, system: { quantity: 3 } }
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - name: Military documents and insignia
      type: miscgear
      system:
        shortcode: militarydocuments
        value: 2
        weight: 1
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-containergear-wtrskin }
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

![[bjlfhrfnsvld|Bjalfi Hrafnsvald]]{float: top-left}

Bjalfi stands 6'0" tall with a medium build. He has light fair skin, brown hair, and gray eyes. His features include a rectangular face, a slightly upturned nose, a square jawline, a firm-set mouth, thick brows, and hollow cheeks.

# Dossier {#dossier}

Bjalfi was born in a rural settlement of the **[[affiliation-kngdmvthgrd|Kingdom of Vithgard]]**, the son of **[[being-hrfnklhrfnsvld|Hrafnkell Hrafnsvald]]**, a soldier who enlisted in Vithgard's levy when Bjalfi was only three years old. With his father away fighting in the border conflicts, Bjalfi was raised primarily by his mother on the family's small farm in the borderlands—a region prone to bandit raids and territorial disputes. He grew up knowing his father only through stories and the occasional brief visit between campaigns.

At fifteen, his family's lands were attacked by a raider band. Bjalfi's mother died defending the property, and his younger brothers were too small to help. By the time word reached [[being-hrfnklhrfnsvld|Hrafnkell]], it was over. The experience crystallized something in the young man: a burning desire to become strong enough to protect others from similar suffering—and a quiet resentment toward the father who had not been there when it mattered most.

At eighteen, Bjalfi joined the local militia, impressing his commander almost immediately with his dedication and aptitude. **Captain Aldric Stonefist**, a grizzled veteran of thirty years' service, recognized something in the earnest young warrior and took him under personal tutelage. In many ways, Aldric became the father figure Bjalfi had lacked growing up. For the past eleven years, Bjalfi has served with distinction, progressing from raw recruit to one of the militia's most capable fighters. He has become known for his quick thinking in chaotic situations, his willingness to volunteer for dangerous assignments, and an almost self-sacrificial approach to protecting the people he serves.

[[being-hrfnklhrfnsvld|Hrafnkell]], meanwhile, returned from military service around the same time, settling in Vithgard as a tentmaker. The two live in the same kingdom now but their relationship remains complicated—marked by unspoken guilt on [[being-hrfnklhrfnsvld|Hrafnkell]]'s part and unresolved anger on Bjalfi's. They see each other occasionally, and there is love beneath the tension, but neither man finds it easy to bridge the years of absence.

Recently promoted to the rank of sergeant, Bjalfi stands at a crossroads. **Captain Aldric** has suggested he could rise further, perhaps eventually assume leadership of the militia itself. Yet Bjalfi feels the weight of something larger stirring—hints that bandit activity is coordinated by unseen powers, suggestions that the relative peace of the region may be ending.

## Psyche

### Personality

Bjalfi is earnest and direct, with little interest in political maneuvering or social posturing. He speaks plainly and acts decisively. What he lacks in years of experience he compensates for with determination and an almost supernatural capacity to learn from each encounter. In conversation, he is respectful and humble, showing particular deference to experienced fighters who have wisdom to share.

There is an underlying idealism to Bjalfi that sometimes puts him at odds with the cynicism of older soldiers. He believes that order can be maintained, that justice serves a purpose, and that individual actions matter. This idealism has occasionally made him reckless—charging into situations that more experienced heads would have cautioned against—but it also makes him beloved by the common people he protects.

### Motivation

Bjalfi is motivated by a desire that no one else should suffer what his family endured—to create a world where families need not live in constant fear of violence while those who should protect them are elsewhere. He wants to be the kind of soldier and leader that **Captain Aldric** has shown is possible—someone who acts with both strength and integrity, who is present when it matters. There is also ambition beneath the idealism: a drive to rise in status, to gain the resources and authority to affect larger changes. And somewhere deeper, a need to prove to his father—and to himself—that he became something worth being proud of, despite everything.

### Strengths

- **Exceptional Agility and Reflexes**: Bjalfi's physical reactions are among the fastest in the militia. He can exploit openings in combat that others cannot perceive quickly enough to use.
- **Melee Combat Mastery**: His skill with spear and shield is advanced for his age. He has trained obsessively under **Captain Aldric** and has extensive real combat experience.
- **Tactical Flexibility**: Though he lacks the long view of older commanders, Bjalfi adapts rapidly to changing battlefield conditions and thinks creatively about problem-solving.
- **Inspirational Presence**: Younger militia members naturally follow his lead, and common citizens respond positively to his straightforward manner and evident commitment to their protection.
- **Quick Learning**: Bjalfi absorbs lessons rapidly, both from training and from field experience. Each encounter teaches him something new, and he integrates those lessons quickly.

### Weaknesses

- **Inexperience**: At twenty-nine, Bjalfi has significant combat experience but lacks the decades of perspective that true mastery requires. There are situations he has never encountered and pitfalls he cannot anticipate.
- **Impulsiveness**: His earnestness sometimes becomes recklessness. He occasionally rushes into dangerous situations without fully considering alternatives or waiting for support.
- **Limited Strategic Perspective**: While tactically sound in immediate situations, Bjalfi sometimes misses the larger consequences of his actions. He can be manipulated by those with longer-term designs.
- **Naiveté about Politics**: Bjalfi tends to trust authority and has limited understanding of the political maneuvering that occurs at higher levels. He could be used as a pawn by ambitious nobles.
- **Emotional Investment**: His care for the people he protects sometimes clouds judgment. He may take risks to save individuals that endanger larger objectives.

## Social

### Patrons

- **Captain Aldric Stonefist**: Bjalfi's commanding officer and mentor. Aldric became the father figure Bjalfi lacked growing up, and his opinion matters more to Bjalfi than almost anyone else's.
- **The Farming Council of Vithgard**: The communities Bjalfi's militia protects recognize him as their primary defender. They advocate for his promotions and provide support for militia operations.
- **The Village Elder Kara Stonekeeper**: An influential elder who sees potential in Bjalfi and has been mentoring him in aspects of leadership beyond combat.

### Enemies

- **The Crimson Raiders**: A particularly organized bandit gang that has proven difficult to eliminate. Their leader, **Skraldarukh**, has specifically marked Bjalfi, seeing him as an obstacle to their plans.
- **Corrupt Local Officials**: Some magistrates profit from allowing banditry to continue unchecked. Bjalfi's aggressive pursuit of raiders threatens their arrangements.
- **Ambitious Militia Rivals**: Some older militia members resent Bjalfi's rapid advancement and question whether his youth and idealism suit him for leadership.

### Affiliations

- **The Militia of Vithgard**: Bjalfi's primary affiliation. He is a dedicated member and now a sergeant with increasing responsibility.
- **The Followers of Týr**: Bjalfi actively participates in worship of the god of order and justice, and his faith is sincere, not mere ritual.
- **[[being-hrfnklhrfnsvld|Hrafnkell Hrafnsvald]] (Father)**: Bjalfi's father, a former soldier turned tentmaker in Vithgard. Their relationship is complicated by years of absence during Bjalfi's childhood and the unspoken weight of his mother's death. They see each other from time to time, and there is love beneath the tension, but reconciliation remains a work in progress.
- **[[being-thjthrhrfnsvld|Thjótharr Hrafnsvald]] (Uncle)**: Bjalfi's uncle, a well-known clothier in the [[affiliation-kingdmnrgd|Kingdom of Norgaad]]. Though they live in different realms and lead very different lives, the family bond remains. [[being-thjthrhrfnsvld|Thjótharr]]'s connections among nobility have occasionally proven useful, and Bjalfi's martial reputation lends a certain rugged credibility to the Hrafnsvald name that his uncle quietly appreciates.

## Plot Hooks

1. **The Coordinated Threat**: Bjalfi's investigations into bandit activity begin revealing patterns that suggest the raids are coordinated by a larger force—possibly a noble house, a religious faction, or something darker. **Captain Aldric** dismisses his concerns, but Bjalfi's evidence becomes increasingly difficult to ignore. Pursuing the truth might require him to act against his commander or to discover that superiors are complicit in what he has been investigating.

2. **The Impossible Choice**: A village under Bjalfi's protection is attacked by the **Crimson Raiders**, but at the same time a militia outpost requires urgent reinforcement. Bjalfi cannot save both. Whatever choice he makes will result in significant loss, and the decision haunts him. The experience forces him to confront the limits of individual heroism and to accept that sometimes good people die despite his best efforts.

3. **The Recruitment**: An organization of mysterious power and resources approaches Bjalfi, claiming to be conducting a secret war against forces he has only partially perceived. They offer him resources, advanced training, and answers to questions he has been asking. The catch: joining would require operating outside militia authority and potentially deceiving **Captain Aldric**. Bjalfi must assess whether the group's claims are legitimate or if he is being recruited for purposes he does not understand.

4. **The Succession Crisis**: **Captain Aldric** suffers a serious injury, forcing him to consider retirement. Bjalfi and another ambitious younger officer are both candidates to replace him. The promotion decision becomes embroiled in political considerations beyond either candidate's control. Bjalfi must play politics while remaining true to his principles, and must ask himself whether he wants leadership badly enough to compromise his ideals.

5. **The Dark Revelation**: Bjalfi discovers that his mother's death—which he believed to be the tragic result of a random bandit raid—was actually orchestrated by powerful interests as part of a larger scheme. His family's farm sat on land someone wanted, and the raid was no accident. The knowledge that his mother's death was deliberate, and that his father's absence was exploited by those who planned it, transforms Bjalfi's motivation from abstract idealism to personal vengeance. He must struggle to channel that rage toward justice rather than revenge—and must weigh whether to tell [[being-hrfnklhrfnsvld|Hrafnkell]] the truth, knowing the guilt might destroy his father entirely.
