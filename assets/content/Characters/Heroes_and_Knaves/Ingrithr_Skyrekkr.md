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
  age: 27
  birthday: 693/9/21
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

She is built to be overlooked and has worked at it: 5'8" but slight, pale, with black hair kept back and hazel eyes kept down, a broad face with a snub nose, a narrow chin, soft cheeks, rosy lips and light brows.

# Dossier {#dossier}

## Background

### The Taking

Her mother had gone to market. Her father was in the fields. That is all she has of the day, and she was seven, and she has stopped trying for more. The slave-catchers came through the villages of the Kingdom of Malagna that season and took five children from hers; that was twenty years ago. The traders said a mother would come to buy her back. No one came. Íngrithr does not know whether her mother never learned where she had gone or could not find the price, and has stopped asking herself which.

### The Household

For five years she was sold and sold again, worth less at each sale as she grew out of being a pretty child. At twelve **Lord Aldwyn Darkmore** bought her — a cold, exact nobleman of middling wealth who wanted competent servants rather than handsome ones. In his house she found she could read a person's mood from how they stood and have what they wanted ready before they asked. She became valuable by being invisible.

She runs the house now. The junior servants answer to her, the kitchen is hers, the accounts are hers, and she is the closest thing to a confidant the cold Lord Aldwyn has. It has bought her a small room of her own, slightly better food, and her master's trust, and it has set her above the other servants, who have not forgiven it.

### Present Circumstance

She is twenty-seven. Her master depends on her more than he knows, and she is still property, to be sold or traded on a whim. She has learned to run a household, to keep accounts, to bargain with merchants and to move a situation a little without anyone seeing her hand in it. She is still bound to obey. Lately she has begun to wonder what freedom would be like, and the wondering frightens her, because it feels like the beginning of a rebellion.

## Psyche

### Personality

She learned young that the safe way is to be invisible and agreeable, and she is very good at it — submissive to look at, and watching everything. Her humour is private, shared in the kitchen with the other servants where the family cannot hear. She is clever and hides it, because in a slave cleverness reads as a threat.

She is kind to the ones worse off than she is — the old, the slow, the ones who cannot keep up — and covers their mistakes, sees that they eat when rations are short, and listens. It is not a tactic; it is knowing what powerlessness is. She is also capable of a hard pragmatism. Her survival comes first, and when it has required her to let scrutiny fall on someone else, she has let it.

### Motivation

To survive, and to keep the small stability she has in a life where a bad week can end it. Then a hope she barely admits: that her life might be more than work and obedience. She dreams of freedom as only someone who has never had it can, and fears it as much, because she cannot picture it. And she works to be so valuable that she cannot be replaced — as if worth were a thing slavery could not take away.

### Strengths

- **Observation and Intuition**: She reads a mood from a posture and a motive from a pause, which is what makes her the manager and the confidant.
- **Domestic Arts**: Her cooking is excellent, her housekeeping faultless, and few in the kingdom could run a household as well.
- **Practical Intelligence**: She understands how money moves, how authority works and how the servants' world is ordered, and finds the practical answer.
- **Resourcefulness**: She has always had too little, and has learned to make do and to improvise.
- **Survival Instinct**: Twenty years of judging threats have made her very good at it.
- **Languages**: Several, picked up listening to the merchants and nobles who pass through the house.

### Weaknesses

- **Learned Helplessness and Submissiveness**: She has been taught to accept, and would find it hard to take her own side even if a door opened.
- **Fear of Punishment**: A raised voice or a sudden anger from anyone in authority can undo her.
- **Belief in Her Own Worthlessness**: For all her competence she believes she is less than a free person and that her place is deserved. It will take a long time to unlearn.
- **No Defence**: She has never been taught to fight and could not.
- **Isolation**: Above the servants and below the family, she belongs to neither, and nobody knows all of her.
- **Dependence on Her Master's Will**: Shelter, food, safety — all of it is Lord Aldwyn's to withdraw.

## Social

### Patrons

None, formally. She depends wholly on **Lord Aldwyn Darkmore**, who has come to depend on her more than he would say; in most of the ways that matter she serves him, and in some he serves her, and the law recognises only the first.

### Enemies

- **Other Servants in the Household**: The juniors resent her place and her favour, and sabotage her work, carry tales to Lord Aldwyn, and make extra work for her when they can.
- **Senior Housemistress Morvanna**: The old servant who should have had Íngrithr's post, and blames her for being passed over. She works against her wherever the servants' order allows.
- **Unspoken Enemies Among Nobility**: Visiting nobles who see a servant trusted beyond her station and dislike it. Several have made advances; when she slipped away, they blamed her for the embarrassment.

### Affiliations

None. A slave in the Kingdom of Malagna may belong to no organisation by law. She belongs to the household, and to nothing else.

## Plot Hooks

1. **The Hidden Will**: A guest who noticed her has left, hidden, a letter from an old woman who says she is Íngrithr's mother — a legal claim, filed long ago and lost in the offices, that might free her — and has promised to come back and help pursue it. Hope, or the safety of expecting nothing; to pursue it would betray her master's trust, and that is dangerous.

2. **The Magical Binding**: In a fever Lord Aldwyn told her that she is bound to the house by more than law — a dark rite worked on her as a child so that she could not run, or want to. A stranger, a mage or a freed slave, offers to break it, at the price of a betrayal. She is not sure the binding is doing anything any more. She may have finished the work herself.

3. **The Secret Pregnancy**: She is pregnant, perhaps by a visiting nobleman she could not refuse, and a slave's child is her master's to keep or sell. She has approached a sympathetic visitor about getting away before it shows. It could be the start of a free life, or the end of every small safety she has.

4. **The Household in Decline**: Lord Aldwyn is old and ill and making odd decisions about the estate, and when he dies she will be sold with the furniture or turned out. She has begun, secretly, to learn his finances, to find some position she could survive from. If she is caught at it, it looks like treachery. If she does nothing, she is helpless.

5. **The Underground Movement**: A network that moves slaves to freedom — well funded, quiet, with dozens freed in recent years — has reached her. They want her to work inside noble houses: watching, passing word, helping escapes. It would mean feigning perfect loyalty while betraying it every day, and it would mean, for the first time, belonging to something.
