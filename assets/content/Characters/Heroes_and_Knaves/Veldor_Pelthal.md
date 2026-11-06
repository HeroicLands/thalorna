---
shortcode: veldrblthl
name: {full: Veldor Pelthal, given: Veldor, clan: Pelthal}
type: being
subType: character
description: "The principal player of a company of players of Valdun, at the height of his craft and hollow at its center."
tags: [heroes-and-knaves, tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [entertainer]
  occupation: Thespian
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 2}, olvenia: {rank: 1}}
  gender: male
  species: humanflk
  born: 684.289
  height: 5' 9"
  weight: 145 lbs
  frame: medium
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: light
    complexion: [clear]
    extra_features: []
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-wshirt}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-wcboot}
    - {model: sohl-sohl-armorgear-wclk}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 2}}
    - name: Leather bag for scripts
      type: miscgear
      system: {shortcode: leatherbagforscripts, weight: 0.5, value: 100, durability: 3}
    - name: Theater costumes and changes
      type: miscgear
      system: {shortcode: theatercostumes, weight: 2, value: 100, durability: 3}
    - name: Makeup kit with cosmetics
      type: miscgear
      system: {shortcode: makeupkit, weight: 0.3, value: 100, durability: 3}
    - name: Collection of dramatic scripts
      type: miscgear
      system: {shortcode: collectionofdramatic, quantity: 1, weight: 1, value: 100, durability: 3}
    - {name: Lute, type: miscgear, system: {shortcode: lute, weight: 1, value: 100, durability: 3}}
    - {model: sohl-sohl-containergear-bglgcvs}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
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

![[veldrblthl|Veldor Pelthal]]{float=top-left}

Veldor Pelthal is a 35-year-old man who stands 5'9" tall and is of medium build. He has a broad face with a narrow nose, a rounded chin and dark brows. His blue eyes are bright and quick, his light skin is clear, and his dark brown hair is worn long for the stage. His voice carries across an inn yard without being raised.

# Dossier {#dossier}

## Background

### Early Life

Veldor Pelthal was born in [[place-valdun|Valdun]], the walled border town of the eastern march, the son of a cloth merchant and a chambermaid with a voice of startling clarity. His mother's love of song was his first schooling. By seven he was singing in the street pageants of the spring feast of [[affiliation-olvenia|Ólvenia]] and earning coins and praise for it, and his father, who thought it frivolous, changed his mind on the spring night his son's singing made the sheriff of the shire weep in the market.

### Training and Ascendance

At fourteen Veldor was taken into a company of players that plays the drove fairs, the inn yards and the great halls of the march, under its old master-player, [Sóurimand Darel]{.name data-type="being/npc"}, a stern and gifted man who had trained the best players the march has seen. Under Sóurimand, Veldor learned not just to speak words but to live in them, to become every hero, tyrant, lover and fool the company plays. By his mid-twenties he was the company's principal player, and the yards fill when his name is cried.

### Current Situation

In his middle thirties Veldor stands at the height of his craft and feels time passing. Roles that came easily now take discipline. His keep is assured by the patronage of [[being-nelamisolnar|Lady Nélamis Ólnarnde]], whose love of the players has become the company's winter bread, yet he senses a hollow beneath his success, and on some nights the applause sounds to him like the roar of an uncaring sea.

The company's play-maker, [[being-prthncrdth|Parthun Kardeth]], has written a satire on a lord of the march who wants the tribes' ground opened to the crown's roads, and Veldor is to play the lord. Every lord in Valdun knows which one it means.

## Psyche

### Personality

Veldor possesses a chameleon's gift for adaptation, wearing different masks with ease both upon the stage and in society. In public, he is charming and effusive, a raconteur of skill who can entrance a room with stories of his theatrical triumphs. Yet those who know him intimately recognize the melancholy that dwells behind those brilliant eyes—a sorrow that no amount of applause can fully banish. He is prone to bouts of introspection that can last for weeks, during which he becomes withdrawn and difficult to reach, questioning his worth and his choices with the sort of self-doubt that often afflicts artists of depth.

His relationships tend toward intensity, and he is capable of both lavish devotion and sudden, inexplicable coldness. Colleagues have learned to recognize the signs of his darker moods and to grant him the solitude he craves. Yet his mercurial temperament has not prevented him from building deep friendships with those who understand that genius often walks hand-in-hand with affliction. He remains fiercely loyal to those he considers true companions, and his wit, when employed in their service, can brighten even the darkest of days.

### Motivation

Veldor seeks the one thing that has always eluded him: the sense of real, lasting meaning. He has won every accolade his art can offer, yet each victory rings hollow within days. He harbors a secret desire to create something of his own—a new work, a performance so deep and revolutionary that it might echo through the ages, something that would prove his life was not merely a parade of beautiful masks and clever words, but a contribution to the human spirit. Beneath this lies a desperate fear that he has wasted his considerable gifts on ephemeral entertainments, and that when death comes for him, he will be remembered only as a voice and a face, soon forgotten.

### Strengths

Consummate Performer
: Veldor's playing, singing and dancing have no equal on the march. His voice alone can silence a restless crowd, and his ability to convey emotion through subtle gesture is almost uncanny.

Silver-Tongued Orator
: With eloquence and charm as his weapons, Veldor can persuade, manipulate, or inspire with words alone. He has negotiated his way out of dangerous situations and into advantageous ones with equal ease.

Perceptiveness
: Years of studying human nature for the stage have given him an acute ability to read people. He can often discern a person's emotional state and true intentions through careful observation.

Cultural Literacy
: Veldor possesses encyclopedic knowledge of classical literature, history, and artistic traditions. He can discuss philosophy, myth, and history with erudition.

Versatile Craftsperson
: Beyond his performance skills, Veldor is accomplished in multiple practical arts—brewing, cookery, and the martial disciplines. His well-roundedness makes him surprisingly capable in diverse situations.

### Weaknesses

Deep-Seated Insecurity
: Despite—or perhaps because of—his tremendous talent, Veldor doubts his fundamental worth. Success does not reassure him; instead, it intensifies his fear of inevitable failure and exposure.

Melancholic Temperament
: His moods are notoriously unstable. Periods of creative brilliance can give way suddenly to depression, rendering him unreliable and withdrawn.

Emotional Volatility
: When wounded—whether in pride, affection, or honor—Veldor can become vindictive and cruel. He wields words as weapons with devastating precision.

Physical Limitations
: He is neither particularly strong nor especially agile. In any situation requiring raw physical power or martial prowess, he is at a significant disadvantage.

Addiction to Validation
: Veldor has developed an unhealthy dependence on external approval. When denied applause or admiration, he becomes listless and unmotivated.

## Social

### Patrons

[[being-nelamisolnar|Lady Nélamis Ólnarnde]]
: A noblewoman of Valdun of wealth and refined taste who is Veldor's chief benefactor. She hosts the company's best nights in her hall and pays its winter keep. Their relationship is mostly financial, though rumors of a romance have gone round the town for years.

### Enemies

[Ryéthesand Salreth]{.name data-type="being/npc"}
: A younger player of real talent who has begun to eclipse Veldor at the fairs. The rivalry has turned personal, and Ryéthesand loses no chance to undermine Veldor in the company and mock his playing.

A rival company
: A company of players up from Péravel has begun playing the drove fairs and hiring away the march company's best players and its audiences. Veldor takes their success as a personal insult.

Sóurimand Darel
: Complicated. Still Veldor's master and the company's old head, Sóurimand has begun saying that Veldor's playing has lost its depth and that success has made him lazy.

### Affiliations

[[affiliation-kngdmlvndr|Kingdom of Élavendre]]
: Veldor is a Freeman of the crown.

[[affiliation-olvenia|Faith of Ólvenia]]
: He keeps the goddess's feasts and still sings in her pageant each spring.

The company of players
: Veldor's home and the center of his life. He is its principal player and, in all but name, its master of casting and choice of plays.

## Plot Hooks

The Satire
: Veldor is to play the lord in Parthun Kardeth's satire, and [[being-vargenhalmes|Lord Vargen Hálmesende]] has let it be known that he will attend the first night. Veldor asks a party to sit near Vargen's bench and tell him afterward how the lord took it.

The Lost Play
: A scholar of Péravel says he has the whole text of an old play never performed, a tragedy whose maker went mad writing it, and that only Veldor can play its hero. The missing pages lie in the ruin of a hall beyond the forest margin, and Ryéthesand has heard of them too.

The Voice Stolen
: Veldor wakes one morning with his voice failing, and no healer can say why. In fear he goes looking for help among practitioners the temples would not approve, and must face whether he is anything without it.

The Rival's Proposal
: Ryéthesand comes to Veldor with an offer: to play together in a new piece that would make both their names. It is exactly what Veldor wants, from the one man who has done most to undo him.

:::secret {title="The patron's request"}
Nélamis's patronage covers her part in a network of rebel agents working against the present regime. She has begun to look among her players for a man who can use his access to the great houses to watch a conspirator, and Veldor is the man she has in mind.

**Hook: the patron's request.** Nélamis summons Veldor and tells him the truth, and asks him to sit beside a knight of the march new to her circle during the interval of the satire's first night. Veldor must decide whether to risk his livelihood in politics or betray her trust.
:::
