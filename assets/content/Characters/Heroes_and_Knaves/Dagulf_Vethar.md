---
tags:
  - blackpine-wolves
  - brigand
  - serf
  - vrystwald
  - underworld
  - character
name:
  full: Dágulf Véthar
  title: ""
  given: Dágulf
  clan: Véthar
  aliases: []
packFolder: ankarisvrystwald
shortcode: dagulfvthr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Brigand
  stations: []
  lore:
    - slavernk
  homes:
    - vrystwald
  affiliations:
    - blckpnwlvs
    - vrystwldtrbs
  gender: male
  species: null
  age: 33
  birthday: 686/8/24
  height: 1.73
  weight: 69.4
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: medium
    complexion: medium
    extra_features:
      - Pox marks
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 4 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 21 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 41 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 49 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 57 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 74 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 49 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 61 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-clb }
    - { model: sohl-sohl-armorgear-ctunic }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltcowl }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-containergear-bpchmd }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 4 } }
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

![[dagulfvthr|Dágulf Véthar]]{float: top-left}

Dágulf cuts a wretched figure on the forest road. He stands at middling height with a wiry, restless frame that never quite holds still — always shifting weight, always glancing over his shoulder. His brown hair hangs in matted ropes past his jaw, unwashed and uncared for, and his face is cratered with the pale scars of a childhood pox. What strikes most who meet him are his eyes: a startling ice-blue, bright and watchful in a face otherwise unremarkable. He wears a battered leather vest over rough cloth, a cowl of cracked hide pulled low, and carries himself with the coiled tension of a man accustomed to violence. His hands are never far from the club at his hip or the long dagger in his belt. He smells of woodsmoke, sweat, and something faintly sour — the smell of a man who sleeps rough in the dark pines of [[place-vrystwald|Vrystwald]] and trusts no one.

# Dossier {#dossier}

Dágulf grew up the second son of a sheepherder among the Varokh clans of Vrystwald, born into serfdom in a small pastoral village on the empire's crumbling northern frontier. From an early age he showed a talent for avoiding work and a gift for convincing others to cover for him. His cousin, who served as clanhead, was easily manipulated, though his mother and older sister saw through every excuse. He would claim to be drilling with the militia or chasing strays when he was in fact sleeping in forest clearings beneath the ancient dark pines, dreaming of a life beyond the drudgery of the fields.

By fifteen, a cruel streak had surfaced. He began striking his father, then his mother and sister. The village reeve — a scarred former soldier who had served the Vylarian garrison — beat him bloody more than once, but punishment only hardened Dágulf's defiance. When the men of the village finally came together to thrash him after he struck his mother in the open square, Dágulf vanished into the deep woods with a bow, a dagger, and a burning hatred for the life he'd left behind.

His years tracking lost sheep through the fog-filled valleys and hiding from chores served him well as a fugitive. He fell in with a roving band of runaway serfs preying on the old imperial trade road that threads through Vrystwald toward [[place-vylariargn|Vylaria]], and within a season had murdered three of their strongest men in their sleep to seize control. The gang now operates along a stretch of that crumbling road, ambushing merchants and travelers in the shadow of ancient ruins under Dágulf's cold direction.

## Psyche

### Personality

Dágulf is quiet, watchful, and deliberate in a way that unnerves those around him. He rarely raises his voice — he doesn't need to. Years of dominating through sudden violence have taught him that silence is more threatening than shouting. He has a dry, mocking humor that surfaces when he feels in control, and vanishes the moment he doesn't. Among his men he cultivates an aura of unpredictability, rewarding loyalty one day and punishing imagined slights the next. He is incapable of genuine trust and assumes everyone around him is scheming, because he always is.

### Motivation

Dágulf craves power and the fear it brings. He never wants to feel helpless again — not under his father's hand, not under the reeve's boot, not under any Vylarian lord's authority. Every robbery, every captive brought low, feeds a hunger that no amount of stolen silver can satisfy. Somewhere beneath the cruelty is a terrified boy who learned that the world only respects strength, and he will never be weak again.

### Strengths

He is a genuinely skilled fighter, particularly with a bow and in close-quarters melee. His dexterity and perception make him a dangerous ambush predator, and his high aura gives him an unsettling presence that keeps his gang in line. He knows the forest roads intimately and can vanish into the wilderness when pursuit comes.

### Weaknesses

Dágulf suffers from a moderate fear of dogs — a phobia rooted in a childhood mauling by a Vylarian lord's hounds — which can paralyze him at the worst moments. His indecisive will means he is prone to sudden panic when his plans unravel, and his low empathy and comeliness make it nearly impossible for him to operate in civilized settings without drawing suspicion. He is also deeply immoral, which limits his alliances to those who fear him.

## Social

### Patrons

None. Dágulf has no benefactors and trusts no authority.

### Enemies

The local Vylarian lord whose lands he raids has placed a bounty on his head. The Varokh village he fled still remembers his cruelty. Several members of his own gang resent his leadership and would betray him for the right price.

### Affiliations

He leads a small gang of brigands — runaway Varokh serfs and petty criminals — who follow him out of fear rather than loyalty. The gang numbers between two and six men at any given time, as members die, flee, or are killed by Dágulf himself.

## Plot Hooks

1. **Ambush on the Imperial Road** — Dágulf and his brigands waylay the party while they travel a remote stretch of the old Vylarian trade road through Vrystwald. The bandits are well-positioned among the dark pines and crumbling milestones, and fight with desperate ferocity, but Dágulf will flee into the fog-filled valleys if the tide turns against him, leaving his men to die.

2. **The Burned Caravan** — The party discovers a merchant caravan that has been looted and torched along the Vrystwald road. Survivors describe a blue-eyed man with a pocked face who seemed to enjoy their suffering. The local Vylarian lord offers a reward for the brigands' capture or proof of their deaths.

3. **The Unwelcome Drinker** — Dágulf slips into a village tavern in disguise, gathering intelligence about upcoming caravans heading south to Vylaria. He strikes up conversation with the party, probing for useful information. If recognized or cornered, he has an escape route planned through the back alley and into the treeline.

4. **A Mother's Plea** — An aging Varokh woman from Dágulf's home village approaches the party. She wants her son brought back alive — not for justice, but because she still loves him despite everything. She offers what little she has, and her grief is real. The party must decide whether to honor her wish or take the easier bounty.

5. **Dogs of War** — A clever reeve has heard of the brigand leader's fear of dogs and proposes using hounds to flush the gang from the forest. The party is hired to accompany the hunt through the ancient pines of Vrystwald, but the dense woodland, the fog, and Dágulf's traps make the pursuit treacherous.
