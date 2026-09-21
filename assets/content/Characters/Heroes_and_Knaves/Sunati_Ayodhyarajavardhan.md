---
tags:
  - heroes-and-knaves
  - administration
  - character
name:
  full: Sunáti Āyodhyārājavardhan
  title: ""
  given: Sunáti
  clan: Āyodhyārājavardhan
  home: chandrapur2
  aliases: []
packFolder: ankarisvedyara
shortcode: sntydhyrjvrdhn
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Courtesan
  stations: []
  lore:
    - commonerrnk
  homes:
    - vedyarargn
  affiliations:
    - chandrapur
  gender: female
  species: null
  age: 28
  birthday: 692/10/14
  height: 1.7
  weight: 60.3
  frame: medium
  appearance:
    eye_color: honey_brown
    hair_color: black
    skin_color: rich_brown
    complexion: null
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 15 } }
    - { model: affiliation-varakpnthn }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-vdykshrscrpt, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-slkdress }
    - { model: sohl-sohl-armorgear-slkclk }
    - { model: sohl-sohl-armorgear-vhat }
    - { model: sohl-sohl-armorgear-vglv }
    - name: Silk purse (ornate, hand-embroidered)
      type: miscgear
      system:
        shortcode: silkpurse
        weight: 1
        value: 100
        durability: 3
    - name: Jewelry (earrings, bangles, multiple pieces)
      type: miscgear
      system:
        shortcode: jewelry
        quantity: 3
        value: 15
        weight: 1
        durability: 3
    - name: Perfumed oils and incense
      type: miscgear
      system:
        shortcode: perfumedoils
        quantity: 2
        weight: 1
        value: 100
        durability: 3
    - name: Sitar or vina (stringed instrument)
      type: miscgear
      system:
        shortcode: sitarorv
        weight: 1.2
        value: 100
        durability: 3
    - name: Cosmetic preparations (kohl, henna, rouge)
      type: miscgear
      system:
        shortcode: cosmeticpreparations
        quantity: 2
        weight: 1
        value: 100
        durability: 3
    - name: Silk scarves (various colors)
      type: miscgear
      system:
        shortcode: silkscarves
        quantity: 2
        weight: 1
        value: 100
        durability: 3
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

![[sntydhyrjvrdhn|Sunáti Āyodhyārājavardhan]]{float: top-left}

Sunáti stands 5'7" tall with a medium build. She has rich brown skin, black hair, and honey brown eyes. Her features include a soft-featured face, a rounded chin, elegantly curved brows, rounded cheeks.

# Dossier {#dossier}

## Background

### The House of Āyodhyārājavardhan

Sunáti was born into the House of Āyodhyārājavardhan, one of the city-states of [[affiliation-janpdsvdyr|Vedyara]]'s most prestigious courtier families. Her family has produced celebrated courtesans for four generations, each woman refined through intensive training in the arts of music, dance, conversation, and courtship. Rather than viewing this legacy as constraining, Sunáti embraced it as her path to freedom—the courtier's trade being one of the few avenues through which women of Vedyara could accumulate genuine wealth and independence.

### The Education

From childhood, Sunáti studied. She learned the twelve classical dance forms before her twelfth year, mastered musical instruments under the tutelage of renowned masters, and studied languages, poetry, and the arts of conversation. Her training was grueling and exacting, designed not merely to make her beautiful, but to make her invaluable—a woman whose company elevated those who sought her. She learned to read emotion like a master reader interprets sacred texts, to guide conversations with invisible subtlety, and to create an experience of connection that made wealthy patrons feel seen and understood.

At eighteen, Sunáti formally entered the courtesan's world, establishing herself in the courts of Vedyara's merchant princes and minor nobles. Her reputation grew swiftly; she was sought after not merely for her beauty but for the sense that time spent with her was time spent with someone genuinely remarkable.

### Present Mastery

Now, at twenty-eight, Sunáti has moved beyond simply accepting patronage to controlling it entirely. She has accumulated considerable wealth through careful management, has cultivated a network of powerful allies, and has positioned herself as one of the most selective and celebrated courtesans in Vedyara's upper circles. Yet beneath the elegant exterior lies a woman increasingly aware of the transience of her power—beauty fades, charm dulls, and the courtier's world is brutal to those who slip into obsolescence.

## Psyche

### Personality

Sunáti is a paradox: deeply known and profoundly hidden. She possesses genuine warmth and affection for those in her circle, yet maintains absolute control over which aspects of herself she reveals. Her conversation is luminous with intelligence, humor, and insight—she is never merely decorative but always a presence that elevates any gathering. Yet this very excellence creates distance; most of those who encounter her are aware that what they are experiencing is, in some sense, a performance—exquisitely crafted, but performance nonetheless.

She is introspective and melancholic when alone, prone to philosophical reflection on the nature of connection and authenticity. She practices the worship of [[lore-vyalendradty|Vyālendra]], the creation-goddess, and views her work as a form of creation—the creation of beauty, meaning, and transcendent experiences in the lives of those who seek her company. She is neither cynical nor naive about her work; she understands fully both its value and its limitations.

### Motivation

Sunáti is driven by a complex mixture of desires: the pursuit of genuine security and independence in a world that constantly threatens to render women powerless; the creation of beauty and meaning as an end in itself; and the search for authentic connection in a life necessarily built on performance and controlled revelation. She seeks to build something beyond her current life—perhaps a legacy that extends beyond her years as a celebrated courtesan, perhaps a circle of equals with whom she can lower her carefully maintained guard.

### Strengths

- **Emotional Mastery and Perception**: Sunáti can read emotions with surgical precision. She understands what people need emotionally before they do, and creates experiences that fulfill those needs perfectly. Few can manipulate social situations as effectively as she does.
- **Masterful Performance**: Her skill in dance, music, poetry, and conversation is unparalleled in her circles. She is capable of creating moments of transcendent beauty that patrons remember for years.
- **Strategic Networking**: Sunáti has carefully cultivated relationships with the most powerful figures in Vedyara's political and commercial landscape. She understands patronage networks and can navigate them with expert precision.
- **Unarmed Combat and Concealed Weapons**: Beneath her elegance lies dangerous training in moving silently, fighting lethally with her concealed dagger, and self-defense. She is far more dangerous than her appearance suggests.

### Weaknesses

- **Emotional Vulnerability**: The very sensitivity that makes her exceptional at understanding others makes her vulnerable to emotional manipulation. Genuine connection terrifies her because it threatens her carefully maintained control.
- **Social Stigma and Isolation**: Despite her wealth and status, she is bound by the social position of her profession. She will never be accepted into the highest circles of respectability, and many nobles' wives view her with barely concealed hostility.
- **The Trap of Beauty**: Her power is fundamentally rooted in beauty and youth. The knowledge that these assets are temporary creates an underlying anxiety about her future and a desperation to build something that will outlast her physical appeal.
- **Ethical Complications**: Her profession sometimes requires her to manipulate powerful men in ways that blur the line between influence and corruption. She harbors genuine moral uncertainty about the impact of her work.

## Social

### Patrons

- **Merchant-Prince Vikrama Vyāvahārika**: A powerful trader in textiles and spices who has maintained a consistent patronage of Sunáti for the past four years. Though he is married, his relationship with Sunáti is explicitly financial and social rather than romantic. He values her counsel on matters of business and politics.
- **The Council of Merchant Princes**: Collectively, Sunáti has served as an informal consultant and companion to multiple members of Vedyara's ruling merchant council, making her privy to significant political and commercial secrets.

### Enemies

- **Śarvī Kalāñjanasundarī**: A rival courtesan of equal talent who views Sunáti as having stolen patrons and prestige that should rightfully be hers. Their competition is professional but genuinely bitter, and Śarvī has attempted various forms of sabotage and social exclusion.
- **The Traditionalist Faction**: A coalition of religious conservatives in Vedyara who view courtesans as corrupting influences and have begun advocating for restrictions on their freedoms. Sunáti has become their symbolic target.

### Affiliations

- **The Circle of Free Courtesans**: An informal association of independent courtesans (as opposed to those bound to houses) who provide mutual support, share information about patrons, and collectively maintain standards. Sunáti holds considerable influence within this circle.
- **Worshippers of Vyālendra**: While not formally organized, Sunáti maintains connections with other devotees of the creation-goddess, viewing her work as a sacred practice of creation and meaning-making.

## Plot Hooks

1. **The Dangerous Secret**: A powerful noble client confesses to Sunáti that he is planning to betray the merchant council in a trade agreement, with implications that could destabilize the entire city-state. He believes that his emotional intimacy with Sunáti ensures her silence, but she is now caught between her loyalty to her patron system and knowledge of a conspiracy that could harm the city. Whom does she expose, and at what cost?

2. **The Authentic Connection**: A scholar and philosopher, **Lord Kamasvāmin Acharya**, begins visiting Sunáti with no interest in the typical courtier-patron dynamic. Instead, he seeks genuine conversation and intellectual companionship. For the first time in her life, Sunáti encounters someone who seems interested in her authentic self rather than her performed self. This threatens everything she has built—because it forces her to confront what authenticity even means for someone whose life is fundamentally built on controlled performance.

3. **The Rescue Unwanted**: A young woman, barely twenty, is being groomed to enter the courtesan profession by coercive means rather than choice. She reaches out to Sunáti, begging for help escaping her family's control. Saving her would expose Sunáti to legal liability and could damage her reputation with the very clients whose patronage sustains her. Does she help, and if so, at what cost?

4. **The Fading Beauty**: A debilitating illness strikes Sunáti—nothing immediately life-threatening, but something that will gradually diminish her physical capabilities and perhaps leave visible marks. She must confront the reality that the asset upon which she has built her entire life is becoming compromised. Her response—whether to retire gracefully, fight to remain relevant, or seek a different path—will define the next phase of her life.

5. **The Request for Betrayal**: The merchant council approaches Sunáti with an explicit request: use her intimate access to rival traders to gather intelligence on their plans. The payment is substantial, the advantage to the council is enormous, but the request crosses a line from personal patronage into active espionage. Accepting would compromise her carefully maintained neutrality and make her a tool of political power. Refusing would anger the very people whose patronage sustains her independence.
