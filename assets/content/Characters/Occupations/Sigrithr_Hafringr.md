---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Sigríthr Hafringr
  title: ""
  given: Sigríthr
  clan: Hafringr
  home: ""
  aliases: []
packFolder: ankarisnordlands
shortcode: sgrthrhfrngr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - nordheimnclt
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: female
  species: null
  age: 40
  born: 680/7/21
  height: 1.6
  weight: 52
  frame: scant
  appearance:
    eye_color: honey_brown
    hair_color: gray
    skin_color: golden
    complexion: clear
    extra_features:
      - crooked nose
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 7 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: affiliation-tyr }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 54 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 37 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 23 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 37 } }
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

Sigríthr stands 5'3" with a lean, weathered frame that has been carved down to sinew and stubborn endurance by forty years of northern living. Her gray hair, once dark, is pulled back in a severe braid that hangs between her shoulder blades. Her golden-toned skin is lined and wind-burned, and her honey-brown eyes sit beneath heavy brows in a face that has long since stopped caring about softness. Her nose is crooked—broken at least twice and never set properly—and she bears a thin white scar along her left jawline from a knife fight she does not discuss. She wears a mail shirt over a quilted tunic, both well-maintained but visibly old, and carries a hand axe on her belt with the easy familiarity of a woman who has used it for purposes beyond chopping wood.

# Dossier {#dossier}

Sigríthr Hafringr was born to a shield-maiden lineage in [[place-nordheim|Nordheim]]'s frozen northern coast. Her mother, **Álfa Stormborn**, was legendary along the Greyfjord: a warrior who commanded a crew of twenty raiders and died defending her hold against an Ibeerian incursion when Sigríthr was barely four winters old. Sigríthr has no memory of her mother, only the stories—how Álfa stood alone in a mountain pass, holding back thirty soldiers until the rest of her crew escaped. Those stories became a weight.

Her father, **Garôn the Smith**, remarried quickly to a merchant woman and wanted Sigríthr to abandon the warrior's path. He built her a life in trade, away from fighting. But at fourteen, Sigríthr watched her father's new wife's nephew push a merchant off a dock during a dispute, and nobody moved to stop him. Something in her broke. She took up her mother's spear, left her father's house without farewell, and presented herself to the Greyfjord fortress commander demanding service as a shield-maiden in the traditional way.

Fortress commander **Jarl Rothgar Hrondinsson** laughed at her—a girl, barely taller than his adolescent son, claiming warrior status. He gave her a job mucking stalls and said she could train if she kept working. Sigríthr never asked for easier treatment. For twenty-five years, she has served the fortress: first as an unpaid trainee, then as irregular cavalry, eventually as professional soldier-for-hire during the Haradian independence conflicts. She has killed seventeen people in direct combat—a modest number, but each one documented in the fortress records. The younger soldiers claim her spear moves like water flowing around stone.

Now at forty years old, she is graying, scarred, and the only woman in Greyfjord fortress command who has never been forced into a marriage-alliance. She has become indispensable to Jarl Rothgar as his personal guard and occasional scout. The work is steady if brutal.

## Psyche

### Personality

Sigríthr speaks rarely and never wastes words. She observes people the way a hunter observes prey—noting habits, weaknesses, patterns. This makes her appear cold, but those who have worked closely with her recognize a grim compassion. She is disgusted by casual cruelty and will walk away from commissions involving the abuse of the helpless. She respects only two things in humans: competence and genuine honor. Everything else is noise.

### Motivation

Sigríthr has spent forty years trying to prove that her mother's sacrifice meant something—that women in Nordheim do not have to accept the roles men assign them. She has no love for fame and actively dislikes being known. Her primary motivation is quiet: to die on her feet as her mother did, not in a bed surrounded by people she never cared for. Secondary to that is a burning need to mentor younger women into the warrior's path, to ensure that her mother's legacy becomes a tradition rather than an anomaly.

### Strengths

Her combat skill is exceptional—spear work with a fluidity that suggests decades of meditation alongside training. She reads people's intentions from their body language alone. She is immune to fear-tactics and intimidation, having already accepted her own likely death a thousand times.

## Social

Sigríthr occupies a liminal space in Nordheim society: respected by warriors, distrusted by merchants, pitied by the nobility who do not understand her choice to refuse elevation. She has no family beyond the fortress and no intention of starting one.

## Companions

### Patrons

**Jarl Rothgar Hrondinsson**—The Greyfjord fortress commander. Rothgar is in his sixties and increasingly aware that his time is ending. He has come to rely on Sigríthr absolutely—she is the only person in his court he trusts completely. In his will, he has made arrangements for her to receive a small pension and permanent fortress residence, though he cannot guarantee his successor will honor it.

### Enemies

**Merchant-Lord Karvik Stormwind**—A coastal merchant prince who wanted to hire Sigríthr's services for a private war against a rival merchant. When she refused (the rival was protecting a village from his exploitation), Karvik circulated rumors that she was aging out of genuine combat ability and was taking refuge in the fortress as charity. The rumor is untrue and infuriates her, but he is powerful enough that she cannot safely kill him.

## Plot Hooks

1. **The Succession Crisis**—Jarl Rothgar dies. His chosen heir is a pragmatist who sees the old warrior traditions as expensive sentimentality. Sigríthr learns that her fortress pension will be terminated and her position eliminated. Worse, the new Jarl intends to offer the fortress as a mercenary stronghold to foreign employers—specifically, Vylarian imperial agents seeking to establish a presence in Nordheim. Sigríthr must choose between watching Greyfjord become a foreign military base or attempting to rally the traditional warrior families to prevent the succession.

2. **The Desperate Student**—A young woman, **Kess Broken-Spoke**, arrives at Greyfjord claiming she wants to become a shield-maiden. She is desperate, haunted, and fleeing something she refuses to name. Sigríthr recognizes a kindred spirit and takes her under her wing, teaching her combat and fortress discipline. Weeks later, assassins arrive looking for Kess. Sigríthr learns her student is the illegitimate daughter of a Haradian guild-lord who fears her father's rise to power and wants her eliminated. Protecting Kess means war against Haradian commercial interests—and Haradian merchants have money.

3. **The Aging Blade**—Sigríthr's body is beginning to fail in ways she cannot openly acknowledge. Her left knee pain is worsening; she is sometimes struck with chest pain when climbing stairs. Younger soldiers are noticing. **Fortress-Physician Morvain** privately tells her she has perhaps five more years of active combat before serious injury becomes inevitable. She is offered a choice: accept a position as fortress training-master (safe, respected, but soul-destroying) or take one final commission—a suicide-level operation that will likely kill her but ensure she dies as a warrior, not withering away teaching others.

4. **The Betrayed Oath**—Sigríthr realizes that Merchant-Lord Karvik is not acting alone. Someone inside Greyfjord fortress is feeding him information—fortress schedules, patrol routes, security details. She begins investigating and discovers the traitor is **Ser Halvik**, a promising young warrior who was raised in the fortress and treated as her unofficial successor. Halvik is being blackmailed; Karvik holds his younger sister's debt-contract and is using it to extort information. Sigríthr must confront Halvik, knowing that revealing this betrayal will destroy a young warrior she was beginning to care for as a daughter.
