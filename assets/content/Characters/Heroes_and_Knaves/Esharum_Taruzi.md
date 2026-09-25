---
tags:
  - tamzir-crew
  - tradesfolk
  - character
name:
  full: Eshârum Tarûzî
  title: Captain
  given: Eshârum
  clan: Tarûzî
  aliases:
    - Shâ
packFolder: midhalionharad
shortcode: esharumtrz
type: being
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Ship Captain
  stations: []
  lore:
    - commonerrnk
  homes:
    - haradregin
  affiliations:
    - thetamzir
    - cnfdrtnhrdnstts
  gender: male
  species: humanflk
  born: 680/7/8
  height: 1.88
  weight: 81.6
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: medium
    complexion: weathered
    extra_features:
      - a long scar across his left jaw
      - lean and hard-bitten
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 62 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 86 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 53 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 79 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 63 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 78 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 86 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 63 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 99 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 67 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 53 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 67 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-rndsh }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-ltglove }
    - { model: sohl-sohl-armorgear-mvest }
    - { model: sohl-sohl-armorgear-plhhelm }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 189 } }
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

![[esharumtrz|Eshârum Tarûzî]]{float: top-left}

Eshârum Tarûzî is a tall, rangy man with the sun-darkened skin and salt-roughened hands of a lifelong sailor. His brown hair is streaked prematurely gray at the temples and hangs to his collar, usually tied back with a leather cord. His blue eyes are striking against his weathered complexion—sharp, watchful, and carrying the weight of things he does not discuss. A long scar traces his left jaw from ear to chin, a souvenir of the Battle of Tamzîr. He moves with the easy economy of a man accustomed to rolling decks, and his lean frame carries more strength than it advertises. He favors a long brown oiled-canvas coat over practical clothing, with his broadsword belted at his hip and a dagger in his boot.

# Dossier {#dossier}

## Background

### Early Life

Eshârum was born in the port of [[place-azhun2|Azhûn]], one of the lesser harbors of the [[affiliation-cnfdrtnhrdnstts|Haradian Confederation]], to a family of modest cattle herders who worked the scrublands east of the city. His father died of a wasting sickness when Shâ was eleven, leaving his mother to raise him alone. The boy grew up hard, learning self-reliance early. By fourteen he was working the docks for coin, and by sixteen he had signed onto a merchant vessel as a deckhand, desperate to escape the grinding poverty of the hinterland.

### The Haradian War of Independence

When the Confederation of Haradian States rose in rebellion against Vylarian imperial rule, Shâ was twenty-two and already a seasoned sailor. He joined the rebel fleet without hesitation, driven by a fierce belief that Harad's people deserved to chart their own course. He proved himself a natural leader—calm under fire, tactically sharp, and ferociously loyal to those who fought beside him. He rose to command a raiding vessel, leading boarding actions against imperial warships in the narrow straits. The Battle of Tamzîr Shoals was his defining moment. The Vylarian imperial fleet had blockaded the Haradian coast, choking the rebellion's supply lines. Shâ led a squadron of rebel vessels through the treacherous shoals at dawn, where the shallow reef-studded waters negated the imperials' advantage in size and firepower. The battle was brutal—fought at close quarters among the breaking waves—and Shâ took the scar he still carries when an imperial marine's blade found his jaw during a boarding action. But the blockade broke, and the rebellion gained its symbolic victory.

### Disillusionment

The war ended in Haradian independence—on paper. But the merchant guilds who had bankrolled the rebellion seized power almost immediately, installing themselves as a new oligarchy. The freedom that Shâ and his comrades had bled for became a commodity, traded and taxed by men who had never held a sword. Veterans were discarded. The poor remained poor. Shâ watched old friends drift into beggary or drink, and something in him went cold. He had no interest in fighting another war, but he refused to serve the guilds. Instead, he scraped together enough coin to purchase a battered sixty-foot merchant vessel, named her the _Tamzîr_ after the shoals where he had nearly died, and set sail.

### Captain of the Tamzîr

For the last twelve years, Shâ has worked the [[place-vylarianse|Vylarian Sea]] as a freelance trader, smuggler, and occasional thief. He takes the jobs that respectable captains refuse—running cargo past imperial patrols, hauling passengers who need to disappear, delivering goods to ports where no questions are asked. He has assembled a crew of misfits, outcasts, and fugitives who are loyal to him because he is loyal to them. The Tamzîr is not much to look at—a patched and weatherbeaten vessel that smells of tar and old fish—but she is fast, nimble, and home.

## Psyche

### Personality

Shâ presents a dry, sardonic front to the world. He deflects with humor, commands with quiet authority, and trusts slowly. Beneath the cynicism is a man who still believes in something—he just cannot articulate what it is anymore. He is fiercely protective of his crew and will risk everything to bring them home, though he frames every act of decency as pragmatism. He has a stubborn streak that borders on self-destructive, and he would rather die than kneel to anyone who claims authority they have not earned.

### Motivation

Freedom. Not the abstract political kind that the guilds sell—the real kind. The freedom to sail where he wants, work for who he chooses, and answer to no one. He is also driven by loyalty to his crew, who have become the only family he acknowledges. Somewhere beneath the layers of disillusionment, there remains a spark of the idealist who once believed a better world was worth fighting for.

### Strengths

Shâ is a gifted tactician and a natural leader of small groups. He inspires loyalty not through speeches but through consistent action—he never asks his crew to take a risk he will not take himself. He is an excellent swordsman, a skilled navigator and pilot, and a shrewd judge of people and situations. His wartime experience makes him dangerous in a fight and cool under pressure.

### Weaknesses

His disillusionment has curdled into a reflexive distrust of institutions, authority, and anyone who claims to be working for the greater good. He drinks more than he should. He struggles to express genuine emotion and tends to push people away when they get too close. His stubborn independence sometimes blinds him to the value of compromise, and his willingness to take morally gray jobs has put his crew in danger more than once.

## Social

### Patrons

Shâ has no formal patrons. He works freelance and prefers it that way. He maintains a loose network of contacts in Haradian port cities—old war comrades, sympathetic merchants, and dockside fixers who can find work or provide safe harbor when things get hot.

### Enemies

The **Haradian Guild Enforcers** have a long memory for debts and slights. Shâ's wartime activities embarrassed several guild families who collaborated with the Vylarian occupiers, and his refusal to fall in line after the war has made him a persistent irritant. **Vylarian Imperial Agents**, manipulated by the [[affiliation-ordoarcanis|Ordo Arcanis]], have taken an interest in the Tamzîr since the Tamaro siblings came aboard. Shâ does not yet fully understand how dangerous the forces arrayed against his passengers truly are.

### Affiliations

Shâ is captain of the **Tamzîr** and the unquestioned leader of her crew. He maintains loose ties to the **Haradian Veterans' Brotherhood**, a mutual aid society for war veterans, though he rarely attends their gatherings. He has no guild membership, no noble connections, and no interest in acquiring either.

## Plot Hooks

1. **The War That Never Ended**: A former comrade from the Haradian rebellion contacts Shâ with evidence that a powerful guild family actively betrayed rebel forces during the Battle of Tamzîr, resulting in the deaths of sailors Shâ commanded. The evidence is genuine, but pursuing it would mean returning to Harad and confronting enemies with far more resources than a freelance ship captain can muster.

2. **The Price of Passage**: A wealthy Vylarian merchant offers Shâ an enormous sum to transport a sealed cargo container to a remote island. The money would cover the Tamzîr's debts for years. But the merchant is evasive about the cargo's contents, the destination is deep in waters patrolled by imperial warships, and one of Shâ's contacts warns him that the merchant has ties to the Ordo Arcanis.

3. **Crew Fractures**: When a lucrative but morally repugnant job is offered—transporting enslaved laborers for a Vylarian noble—Shâ must navigate a crew divided between those who need the coin and those who will not compromise. The decision he makes will define what the Tamzîr stands for, and whether his crew holds together or fractures.

4. **Ghost of Tamzîr**: Shâ begins receiving anonymous messages referencing events from the Battle of Tamzîr that only someone who fought there could know. The messages suggest that a betrayal from within the rebel fleet led to the death of Shâ's closest friend during the engagement—and that the betrayer is still alive, prosperous, and operating within the Haradian merchant guilds.
