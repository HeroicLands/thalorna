---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Íngrithr Skýrekkr
  title: ""
  given: Íngrithr
  clan: Skýrekkr
  home: havamal
  aliases: []
packFolder: ankarisnordlands
shortcode: ingrthrskyrkr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Domestic Servant
  stations: []
  lore:
    - slavernk
  homes:
    - nrdlndsrgn
  affiliations:
    - kingdomlgn
  gender: female
  species: null
  born: 693/9/21
  height: 1.73
  weight: 64.9
  frame: light
  appearance:
    eye_color: hazel
    hair_color: black
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-freyr }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-lshirt }
    - { model: sohl-sohl-armorgear-ldress }
    - { model: sohl-sohl-armorgear-ltshoe }
    - name: Wicker basket for carrying household items
      type: miscgear
      system:
        shortcode: wickerbasket
        weight: 0.5
        value: 100
        durability: 3
    - name: Cleaning rags and work cloths (bundle)
      type: miscgear
      system:
        shortcode: cleaningragsandwork
        quantity: 8
        weight: 1
        value: 100
        durability: 3
    - name: Wooden hairbrush (well-worn, cherished)
      type: miscgear
      system:
        shortcode: woodenhairbrush
        weight: 1
        value: 100
        durability: 3
    - name: Small keepsake from her home (carved wooden token)
      type: miscgear
      system:
        shortcode: smallkeepsakefromher
        weight: 0.1
        value: 0
        durability: 3
    - name: Herbal remedies and healing salves
      type: miscgear
      system:
        shortcode: herbalremedies
        weight: 0.5
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-torch, system: { quantity: 1 } }
    - { model: sohl-sohl-containergear-bgsmcvs }
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

![[ingrthrskyrkr|Íngrithr Skýrekkr]]{float: top-left}

Íngrithr stands 5'8" tall with a light build. She has pale fair skin, black hair, and hazel eyes. Her features include a broad face, a snub nose, a narrow chin, rosy lips, light brows, and soft cheeks.

# Dossier {#dossier}

## Background

### The Taking

Íngrithr does not remember her freedom, though she was born to it. She was seven years old when the slave-traders came through the rural villages of the [[affiliation-kingdomlgn|Kingdom of Malagna]]. Her mother had gone to market, and her father was working in the fields. Slave-catchers came to their cottage, and Íngrithr was taken along with four other children from her village. That was twenty years ago. The woman that the traders claimed was her mother, who should have come to purchase her back, never appeared. Either her mother never learned where Íngrithr had been taken, or could not afford the ransom. Íngrithr has long since stopped wondering which.

### The Household

For the first five years, Íngrithr was passed between owners, her worth declining as she grew older and less "valuable" as a house servant. She was purchased at age twelve by the current master, **Lord Aldwyn Darkmore**, a cold and exacting nobleman of moderate wealth who preferred competent staff to beautiful ones. In his household, Íngrithr discovered she had a gift for anticipating needs—she could read a person's mood in their posture and have what they required ready before they asked for it. She became extraordinarily valuable precisely because she was so good at being invisible, at providing service without demanding recognition or sympathy.

Over the years, she has become the primary household servant, the one person who keeps the entire establishment running. She manages the junior servants, oversees the kitchen, maintains the household accounts, and is the closest thing to a confidante the emotionally distant Lord Aldwyn possesses. Her position has afforded her certain minor privileges—a small private room, slightly better food, the trust of her master. And yet it has also marked her as someone above the other servants, creating resentment among those who have not achieved her status.

### Present Circumstance

Now twenty-seven years old, Íngrithr exists in the peculiar intersection of being valued and entirely disposable. Her master depends on her—more than he might recognize—but she remains slave, property that can be sold or traded at his whim. She has become highly skilled at managing the household, understanding financial matters, negotiating with merchants, and manipulating situations through subtle influence. Yet she remains bound by law and circumstance to absolute obedience. Recently, she has begun to wonder what freedom might look like, and the question itself terrifies her because to even ask it suggests rebellion.

## Psyche

### Personality

Íngrithr has learned through painful experience that the safest strategy is invisibility combined with meek cooperation. She has perfected the art of appearing submissive while observing everything. Her humor is quiet and private—she rarely laughs where her masters might hear, finding comedy in observations she shares only with the other servants, usually in the safety of the kitchen. She is intelligent and capable of subtle thought, but she has learned to hide this from those with power over her, recognizing that intelligence in a slave can be perceived as threat.

The submissive manner covers a more complex person. She is capable of real kindness toward those more wretched than herself—the oldest servants, the less capable servants who struggle with their duties. She will cover for others' mistakes when she can, see they are fed when rations are short, and listen to their troubles with fellow-feeling. This kindness is not calculated but flows from understanding what it means to be powerless. However, she is also capable of ruthless pragmatism—she has learned to put her own survival first and will do what is necessary to maintain her position, including throwing others under scrutiny when her own safety demands it.

### Motivation

Íngrithr is driven primarily by the need to survive, to maintain stability and avoid punishment in an existence where both are precarious. This basic survival instinct has blossomed into something more complex: a desperate hope that perhaps her life might be something more than endless labor and servitude. She dreams of freedom with the intensity of someone who has never experienced it, yet fears it equally because freedom is incomprehensible to her. She is motivated also by a desire to prove her worth, perhaps as a way of asserting her humanity in a system that denies it—if she can be so valuable that she is irreplaceable, perhaps she has value that slavery cannot diminish.

### Strengths

- **Exceptional Observation and Intuition**: She reads people with great accuracy, understanding motivations and moods through subtle cues. This skill has made her indispensable as a household manager and confidante.
- **Skilled in Domestic Arts**: Her cooking is excellent, her housekeeping immaculate, and her management of servants and household resources highly competent. Few in the kingdom could manage a household as well as she does.
- **Pragmatic Intelligence**: She understands systems—how money flows, how authority structures work, how to manage the rivalries and alliances within the servant hierarchy. She is naturally gifted at finding solutions to practical problems.
- **Resourcefulness and Problem-Solving**: Working with limited resources, she has learned to improvise and make do with what is available. She can solve complex household management challenges with rare creativity.
- **Survival Instinct**: Twenty years of a dangerous and uncertain existence have honed her ability to assess threats and respond appropriately. She knows how to survive.
- **Linguistic Ability**: She speaks multiple languages, a skill acquired from listening to the household's many visiting merchants and nobles. This could be valuable in contexts beyond her current station.

### Weaknesses

- **Learned Helplessness and Submissiveness**: Years of slavery have conditioned her to accept her fate, to not fight for her own interests. She would struggle to assert herself even if opportunity for freedom presented itself.
- **Profound Anxiety and Fear of Punishment**: She lives in constant low-level fear of discipline and punishment. Loud voices or unexpected anger from authority figures can cause her significant distress.
- **Internalized Belief in Her Own Worthlessness**: Despite her obvious competence and intelligence, she believes on a fundamental level that free people are more human than she is, that she deserves her position. Overcoming this will require deep healing.
- **Lack of Combat or Physical Defense Skills**: She has never been trained to fight and would be helpless in physical confrontation. Her body is designed for labor, not combat.
- **Social Isolation**: Her position as both servant and above-servants means she belongs to neither community. She has no true friends or trusted confidantes who know her whole self.
- **Dependence on Her Master's Will**: Everything about her life—her shelter, food, security—depends entirely on Lord Aldwyn's continued whim. Without him, she has nothing.

## Social

### Patrons

None in any formal sense. She is dependent entirely on the whim of her master, **Lord Aldwyn Darkmore**, who has come to rely on her more than he might acknowledge. In some ways, she serves him more than he serves her, though this is obscured by formal power relationships.

### Enemies

- **Other Servants in the Household**: The junior servants resent what they perceive as her elevated position and favor. They sometimes sabotage her work, speak against her to Lord Aldwyn, or deliberately create extra work for her as punishment for her perceived betrayal of servant solidarity.
- **Senior Housemistress Morvanna**: The elderly servant who would have taken the position Íngrithr now holds has become her bitter enemy, blaming her for being passed over due to age. Morvanna actively works against Íngrithr within the servant hierarchy.
- **Unspoken Enemies Among Nobility**: Some of the visiting nobles are aware of Íngrithr's position as a boundary-crosser (a servant trusted with knowledge and responsibility beyond her station) and view her with suspicion or hostility. A few have made inappropriate advances toward her, and when she has managed to evade them, they have blamed her for the embarrassment.

### Affiliations

None. As an enslaved person in the Kingdom of Malagna, she is forbidden by law from joining any formal organization or association. She exists outside all affiliations by legal definition, bound only to her master's household.

## Plot Hooks

1. **The Hidden Will**: A traveler comes to the household as a guest and, during his stay, witnesses Íngrithr's competence and kindness. When he leaves, he leaves behind a carefully hidden letter, written by an old woman who claims to be Íngrithr's mother. The letter speaks of a legal action, filed decades ago but buried in bureaucratic processes, that could potentially free her. The traveler promises to return to help her pursue this claim. Íngrithr faces an agonizing dilemma: hope that freedom is possible, or accept her fate and protect herself from the devastating disappointment that could follow. If she pursues this, she may betray her master's trust, placing her in danger.

2. **The Magical Binding**: Lord Aldwyn falls gravely ill and in his delirium reveals to Íngrithr that her servitude is bound by more than legal contracts—she has been magically bound to the household by a dark ritual performed on her as a child, something designed to prevent her from escaping or even wanting to escape. A mysterious figure, perhaps a mage or a freed slave, contacts her and offers to break the binding, but doing so requires an act of betrayal against her master. More troublingly, she is not certain the binding is truly constraining her, or if she has simply accepted slavery so completely that the magic is no longer necessary—the chains might be entirely in her mind.

3. **The Secret Pregnancy**: Íngrithr discovers she is pregnant, possibly from an assault by a visiting nobleman that she was powerless to prevent. She has no rights as a mother—any child born to a slave becomes property of her master or can be sold away. She desperately seeks help, approaching a sympathetic visitor who might help her escape before the pregnancy becomes apparent. This desperate flight could be the beginning of freedom or could lead to her recapture and terrible punishment if discovered.

4. **The Household in Decline**: Lord Aldwyn, aging and showing signs of serious illness, begins to make concerning decisions about his estate. Íngrithr realizes that upon his death, her position is not secure—she might be sold as part of the estate settlement or simply abandoned. She begins secretly educating herself in the household accounts and Lord Aldwyn's finances, attempting to position herself somehow to survive his death. Her actions risk appearing treacherous if discovered, but inaction guarantees her vulnerability.

5. **The Underground Movement**: A member of an underground network helping enslaved people achieve freedom makes contact with Íngrithr. The network is apparently well-funded and effective, having successfully moved dozens of people to freedom over recent years. They believe Íngrithr's skills—her intelligence, her knowledge of the household, her ability to move unsuspected—would be of great value to their cause. They ask her to become an agent within noble households, gathering information or subtly assisting escapes. Helping would be deeply dangerous, requiring her to maintain the pretense of absolute loyalty while actually working against her master. But it would also mean becoming part of something larger than her own survival, connecting her to a community dedicated to liberation.
