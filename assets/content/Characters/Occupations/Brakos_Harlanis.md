---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Brákôs Hârlânis
  title: ""
  given: Brákôs
  clan: Hârlânis
  home: ""
  aliases: []
packFolder: midhalionvylaria
shortcode: brakshrlns
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Man-at-Arms
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  born: 695/3/23
  height: 1.62
  weight: 52
  frame: scant
  appearance:
    eye_color: honey_brown
    hair_color: red
    skin_color: fair
    complexion: fair
    extra_features:
      - tattoo on arm
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 9 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 31 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 28 } }
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

Brákôs is a compact man, standing just 5'4" with a wiry, scant frame that barely fills his borrowed armor. His fair skin burns easily in the Vylarian sun, and his close-cropped red hair marks him as an oddity among the dark-haired ranks of the [[affiliation-provinclys|Alyssa]] provincial garrison. His honey-brown eyes are sharp and restless, constantly scanning doorways and rooflines with the wariness of a man who learned early that trouble comes from unexpected directions. His face is narrow, with high cheekbones and a thin-lipped mouth that rarely smiles. A faded tattoo of a coiled serpent wraps around his left forearm—a youthful indiscretion he declines to explain. He wears his garrison-issue padded tunic and leather bracers with the casual disregard of a soldier who cares more about function than appearance.

# Dossier {#dossier}

Born the third son of a minor Hârlânis family in declining Province of Alyssa, Brákôs joined the garrison at sixteen as a junior courier—his only path to advancement when his elder brothers inherited the family's meager holdings. He was fast, eager to prove himself, and the garrison needed riders who could navigate the fractious provincial borders without getting killed. For nine years, he carried dispatches through bandit country and served in three minor skirmishes, each one reinforcing that he was expendable and that the Vylarian Empire had stopped believing in itself.

Three years ago, ambush shattered the courier route he knew. A coordinated assault on a supply wagon caught his unit in mountainous terrain. Brákôs was the only mounted soldier; he made the decision to abandon the wagon and ride for the garrison, racing ahead while screaming to the foot soldiers to scatter. Seven of the eight infantry made it to shelter because of his warning. The wagon and its driver died. Command decorated him for the extraction and promoted him to irregular-war patrol—mounted reconnaissance against smugglers and dissidents in the high passes.

Now Brákôs serves **Captain Rhúlis Mervian**, a grizzled professional who recognizes that the Empire is rotting from within and treats his soldiers as disposable tools. The work is lonely and dangerous. Brákôs has become expert at reading the small signs—disturbed earth, abandoned camps, the difference between a refugee's tracks and a raiders'. He has also become deeply disillusioned with his service. The Hârlânis family still expects him to send coins home and restore the family honor; his garrison pay barely covers his horse's feed.

## Psyche

### Personality

Brákôs masks his disillusionment with sardonic wit and deliberate carefulness. In the field, he is methodical and observant, speaking little but noting everything. Among fellow soldiers, he allows himself dark humor—jokes about death and incompetence that draw bitter laughs. He is careful not to form close attachments, having learned early that comrades die and sentimentality dulls judgment.

### Motivation

Brákôs wants what every soldier in a declining empire wants: a path to stability and respect that doesn't end with him bleeding out in a ravine. He still sends money home because the Hârlânis name is the last thread connecting him to something larger than himself, though he no longer believes the family can be saved. His primary motivation is pure survival—making it to thirty years old with enough coin to walk away.

### Strengths

He reads terrain and danger signs with preternatural accuracy. His horse is better-trained than any in the garrison. He remains calm under immediate threat and has genuine tactical sense—his ambush response three years ago was not luck but sound judgment under pressure.

## Social

Brákôs occupies an uncomfortable social position: too educated for common soldiers (he reads Vylarian philosophy poorly but persistently), too pragmatic for officers who expect ideological commitment. His connection to the declining Hârlânis family gives him nominal noble status but no actual advantage.

## Companions

### Patrons

**Captain Rhúlis Mervian**—The garrison's senior irregular-war officer. Rhúlis values competence above all and has explicitly stated he will protect Brákôs from court-martial as long as Brákôs delivers accurate intelligence. Their relationship is transactional but genuine; Rhúlis is one of the few officers in Province of Alyssa who sees the empire's decline clearly and treats it as fact rather than heresy.

### Enemies

**Prefect Gaerion Valdis**—A political appointee from the capital who arrived two years ago with orders to strengthen imperial authority in the province. Brákôs once submitted a report contradicting Valdis's claims about bandit activity (Brákôs had evidence; Valdis had speculation). Valdis has since quietly obstructed Brákôs's advancement and spreads rumors that he is "soft on dissidents." They have not spoken directly since, but Valdis watches for any excuse to dishonor him.

## Plot Hooks

1. **The Smuggler's Intelligence**—Brákôs discovers evidence during a patrol that the contraband moving through the high passes includes not just black-market goods but intercepted imperial dispatches. He realizes the smuggling network has a mole inside the garrison—someone high-ranking enough to know supply schedules and courier routes. Captain Mervian believes him but Prefect Valdis will use any leak to the investigation as proof of Brákôs's disloyalty. He must identify the mole without triggering Valdis's interference, knowing that failure will result in his arrest as an accomplice.

2. **The Hârlânis Inheritance**—A messenger arrives with word that his eldest brother has died without heirs, and the family estate now belongs to Brákôs—but only if he returns to Province of Alyssa to formally claim it within the season. The property is mortgaged to hostile creditors and probably insolvent. Abandoning his garrison post means desertion; staying means his family loses everything. Captain Mervian suggests he could take extended leave while Valdis ensures he is labeled a deserter. The choice appears binary, but both paths lead to ruin.

3. **The Courier Who Knows Too Much**—Another imperial dispatch rider, **Vela Korrin**, arrives at the garrison carrying sealed orders for Captain Mervian. She pulls Brákôs aside in private and tells him she has been riding couriers between garrisons long enough to recognize patterns: [[affiliation-vylarinmpr|Vylaria]] is organizing a massive redeployment of forces, and soldiers like Brákôs are being systematically reassigned away from their home regions. She suggests he is a target—not for execution, but for exile, so he cannot become a rallying point for provincial loyalty. She offers him information about where the redeployment is headed, but accepting that intelligence makes him complicit in whatever she is planning.

4. **The Old Rider's Request**—**Master Hárok**, the garrison's oldest soldier and the man who trained Brákôs as a courier, approaches him quietly and asks him to carry a single sealed letter beyond the official courier routes—to a contact in the mountain settlements beyond the empire's borders. Hárok will not explain why. Brákôs knows that Hárok is dying (consumption visible in his cough) and probably wants something done after his death. But carrying unauthorized mail is explicit cause for court-martial, and Valdis is already waiting for any excuse.
