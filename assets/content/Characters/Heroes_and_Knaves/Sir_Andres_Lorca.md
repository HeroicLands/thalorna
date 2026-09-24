---
tags:
  - heroes-and-knaves
  - hero
  - soldiery
  - character
name:
  full: Sir Andrés Lorca, Knight of the Western Marches
  title: Sir
  given: Andrés
  clan: Lorca
  home: null # was: Eskárath
  aliases:
    - Knight of the Western Marches
    - Sir Andres Lorca
packFolder: aureldiatarvenia
shortcode: srndrslrcknghtwstrnmrchs
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Nobility (Knight Bachelor)
  stations: []
  lore:
    - landedlordrnk
  homes:
    - tarvenirgn
  affiliations:
    - kingdmtrvn
  gender: male
  species: null
  age: 44
  born: 676/10/8
  height: 1.85
  weight: 99.8
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: olive_tanned
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-taranon }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-glas, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-jewl, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-lnc }
    - { model: sohl-sohl-weapongear-knsh }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-plbreast }
    - { model: sohl-sohl-armorgear-plgrvs }
    - { model: sohl-sohl-armorgear-plvamb }
    - { model: sohl-sohl-armorgear-plspld }
    - { model: sohl-sohl-armorgear-plgthlm }
    - { model: sohl-sohl-armorgear-plkncp }
    - { model: sohl-sohl-armorgear-plcou }
    - { model: sohl-sohl-armorgear-plrebr }
    - name: Knight's heraldic surcoat (quartered arms)
      type: miscgear
      system:
        shortcode: knightsheraldic
        weight: 0.5
        value: 100
        durability: 3
    - name: Silk cloak with knightly insignia
      type: miscgear
      system:
        shortcode: silkcloak
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 2 } }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 5 } }
    - name: Whetstone for blade maintenance
      type: miscgear
      system:
        shortcode: whetstoneforblade
        weight: 1
        value: 100
        durability: 3
    - name: Small holy icon (Táranon)
      type: miscgear
      system:
        shortcode: smallholyicon
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-containergear-bpchmd }
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

![[srndrslrcknghtwstrnmrchs|Sir Andrés Lorca, Knight of the Western Marches]]{float: top-left}

Sir Andrés stands at 6'1", with a broad, muscular build, the result of years of rigorous knightly training. His olive-toned skin speaks of his noble heritage, while the faint scars that line his face and arms tell the story of a life dedicated to battle and honor. His dark hair is shoulder-length and slightly graying at the temples, often tied back or tucked under his helm during combat. Sir Andrés’s sharp, deep-set brown eyes reveal a calm but intense demeanor, and his chiseled jaw is typically clean-shaven, in accordance with the disciplined standards of his knightly order. He wears well-maintained plate armor, polished but not excessively ornate, marked with the sigil of his knightly order—a silver falcon, symbolizing vigilance and nobility. His favored weapon is a longsword, which he wields with precision and strength, and a round kite shield bearing his family crest.

# Dossier {#dossier}

Born into a noble family in the Western Marches, Sir Andrés was groomed for knighthood from a young age. The youngest son of a prominent house, he was instilled with a strong sense of duty and loyalty to his family and his kingdom. As a squire, he served under a famous knight, learning the ways of chivalry, combat, and leadership. His early years were marked by long campaigns defending the borders of his homeland from invaders, and it was here that he earned his reputation as a skilled warrior and a leader of men.

Over the years, Sir Andrés has fought in numerous battles, defending his kingdom and upholding the chivalric code. Though his elder brothers inherited the family’s lands and titles, Sir Andrés forged his own path through his deeds on the battlefield and his unshakeable loyalty to the knightly order. He is now known throughout the Western Marches as a knight of honor and integrity, a man whose sword is at the service of his people and his king.

## Background

### Skills and Abilities

- **Strength**: Sir Andrés is physically strong, trained in the art of combat since his youth.
- **Endurance**: His knightly training has given him great stamina for both battle and travel.
- **Dexterity**: He’s skilled in combat but relies more on strength than finesse.
- **Agility**: Sir Andrés moves without wasted motion in battle, though not particularly fast.
- **Perception**: His awareness of his surroundings is sharp, though not extraordinary.
- **Comeliness**: His appearance is rugged and noble, with an air of chivalry.
- **Aura**: Sir Andrés has an unusually strong metaphysical power and awareness.
- **Will**: Sir Andrés is deeply committed to his code of honor, with a willpower forged through years of discipline.
- **Reasoning**: He’s practical in his decision-making, focusing on strategy and tactics.
- **Creativity**: While he prefers tradition, Sir Andrés can adapt to new challenges when necessary.
- **Empathy**: He tends to put duty before personal feeling, though not without compassion.
- **Eloquence**: His words carry the weight of authority, though he’s more action-driven than talkative.
- **Morality**: Sir Andrés follows the strict chivalric code of his knightly order, consistently upholding the mores of his culture, even when faced with personal loss or hardship.
- **Voice**: Sir Andrés has a firm, commanding voice that is suitable for giving orders or leading in prayer. His singing voice is solid but unremarkable, more focused on strength than melody.
- **Skilled Combatant**: Sir Andrés is a master of the longsword and skilled in other knightly weapons such as lances and maces. His years on the battlefield have made him a dangerous opponent, both in single combat and leading troops in battle.
- **Tactical Leader**: His experience as a knight has given him a sharp tactical mind. He is skilled at leading men into battle, reading the battlefield, and adjusting his plans to win the day.
- **Chivalric Code**: Sir Andrés’s strong adherence to the chivalric code grants him a moral clarity that guides his decisions. His reputation as a just and honorable knight often earns him the respect and trust of others.
- **Endurance**: His training has given him great stamina, allowing him to endure long campaigns and grueling battles without faltering.
- **Shield Bearer**: His mastery of the shield allows him to defend himself and others, using it for protection and as a weapon in its own turn.

## Psyche

### Personality

Sir Andrés is stoic and reserved, his personality shaped by a lifetime of discipline and sacrifice. He is calm under pressure, maintaining a clear head in the chaos of battle, and is deeply introspective, often contemplating the moral weight of his actions. He is a man of few words, preferring to let his actions speak for him, but when he does speak, his words are measured and carry great weight. Honor and duty are the pillars of his life, and he holds himself to the highest standards, even when it means making difficult decisions or personal sacrifices.

Though outwardly stern, Sir Andrés is deeply compassionate, particularly toward those who cannot defend themselves. He feels a strong sense of responsibility to protect the weak, and this sense of justice fuels his every decision. However, he can be somewhat rigid in his adherence to the chivalric code, and his unwillingness to compromise on his principles can sometimes make him seem distant or inflexible to those who don't understand his deep sense of honor.

### Motivation

Sir Andrés is driven by his commitment to the ideals of knighthood—honor, loyalty, and the protection of the weak. He views his role as a knight as a calling and a sacred duty, one that he must uphold at all costs. His primary goal is to safeguard the Western Marches from external threats and to maintain peace and justice in the land. However, he is also motivated by a desire to live up to the legacy of his ancestors and the knightly order to which he belongs.

Though he has achieved much in his life, Sir Andrés feels that his work is far from over. He seeks to leave behind a legacy that will inspire future generations of knights, and he is always on the lookout for opportunities to prove his worth, whether by defending the innocent or confronting the forces that threaten the stability of the realm. His greatest ambition is to be remembered as a knight who upheld the highest virtues of his order, even in the face of overwhelming odds.

### Strengths

- **Swordsmanship**
- **Leadership**

## Social

## Plot Hooks

1. **The Bandit Warlord**: Rumors spread of a bandit leader uniting various outlaw factions under a single banner in the Western Marches. This growing threat to the realm’s borders forces Sir Andrés to lead a small contingent of knights into the untamed wilds. However, when he discovers that the warlord is a former knight cast out of the order for corruption, Sir Andrés faces a moral dilemma: bring the warlord to justice or offer him redemption to stem the bloodshed.

2. **The Relic of Vigilance**: Sir Andrés is tasked with recovering a lost relic of his knightly order, the Silver Falcon Standard, believed to grant protection to the Western Marches. The relic was lost decades ago in a bloody battle and is now rumored to be held by a tribal chieftain who sees it as a symbol of his people’s resistance. Sir Andrés can negotiate with the chieftain, risking political trouble, or seize the relic through force, potentially inciting rebellion.

3. **The Betrayer’s Shield**: During a routine patrol, Sir Andrés uncovers evidence linking a respected noble family to recent raids on villages along the frontier. His investigation uncovers a conspiracy that ties the noble to foreign powers. Torn between loyalty to his king and his knightly code of honor, Sir Andrés must work through the court's intrigues to expose the truth and protect the realm without igniting a civil war.

4. **The March of the Undying**: Strange reports of spectral knights terrorizing border villages reach Sir Andrés’s ears. The ghostly figures are said to be the spirits of soldiers who fell in the Western Marches long ago. As Sir Andrés investigates, he discovers an ancient oath tied to his knightly order that was broken generations before. To lay the spirits to rest, Sir Andrés must restore the order’s honor, even if it means revealing uncomfortable truths about his own lineage.
