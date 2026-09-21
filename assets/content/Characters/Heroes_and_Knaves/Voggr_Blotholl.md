---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Vöggr Blóthöll
  title: ""
  given: Vöggr
  clan: Blóthöll
  home: bloth
  aliases: []
packFolder: ankarisnordlands
shortcode: vogrblothl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Woodcutter
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmnrdhm
  gender: male
  species: null
  age: 52
  birthday: 668/2/29
  height: 1.8
  weight: 81.6
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: gray
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a scar running down the back
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-tyr }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-timb, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-weapongear-baxe }
    - { model: sohl-sohl-armorgear-ltshirt }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltcloak }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 3 } }
    - name: Large canvas bag for tools
      type: miscgear
      system:
        shortcode: largecanvasbag
        weight: 1
        value: 100
        durability: 3
    - name: Saw for timber work
      type: miscgear
      system:
        shortcode: sawfortimberwork
        weight: 1.5
        value: 100
        durability: 3
    - name: Rope and cordage
      type: miscgear
      system:
        shortcode: ropeandcordage
        weight: 1
        value: 100
        durability: 3
    - name: Sapling seeds for forest restoration
      type: miscgear
      system:
        shortcode: saplingseeds
        weight: 0.5
        value: 100
        durability: 3
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bglgcvs }
    - { model: sohl-sohl-containergear-wtrskin }
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

![[vogrblothl|Vöggr Blóthöll]]{float: top-left}

Big, gray and weathered, 5'11" and heavy with it, tanned, blue-eyed, with a long face and a long nose, a strong jawline, a mouth that stays shut, low-set brows and angular cheeks. The scar down his back runs from the neck nearly to the waist.

# Dossier {#dossier}

**The Forest's Education**

The tree that nearly killed him was one he should not have cut. He was twenty-two, a noble buyer wanted the timber by a date that meant nothing to the wood, and Vöggr chose a trunk without reading it properly. It was weak with old damage and disease, it broke as it came down, and the second trunk that fell across him opened him from the neck nearly to the waist. He was conscious long enough to understand that he was dying. A wandering herbalist named Kaessa found him, and it was three years before he could work.

He was born to woodcutters in the Darkwood Reaches of the Kingdom of Nordheim, where the forest is the whole wealth of the country and the thing most likely to kill a man in it. His father and uncles taught him, from the time he could walk, that the forest was not a store to be emptied but a living thing that would give, year on year, if it was treated with sense. That is not how most northern woodcutters think. In the Blóthöll line it was handed down like a good axe.

**The Scar's Lesson**

The three years on his back were spent taking apart everything he thought about the work. He came out of them holding his family's way harder than before, and with one rule added to it that he has not broken since: nothing is ever hurried.

**The Master of the Craft**

For the better part of thirty years he has been called the best woodcutter in Nordheim — not for the volume, which is modest, nor for the size of the contracts, but because the timber is good and the forest he takes it from is not worse for it. He has trained apprentices; fewer of them each generation take the philosophy with the skill. The finest carpenters in the region want his wood for their best work. The Woodcutters' Guild keeps its standards partly because he is in the room. And people who care about the forests for their own sake, who do not usually talk to woodcutters, talk to him.

**The Twilight of Traditional Ways**

He is fifty-two. The young woodcutters want speed and bulk and have new methods that give them both, and the young merchants want cheap timber and do not care where it grew. He has not changed. He knows his way may die with him, and it sits on him.

## Psyche

### Personality

He is silent by preference, not by incapacity: he wants to understand a thing before he speaks about it, and by then there is usually little to say. What he does say is short, plain and considered. He dislikes pretence and lying and lets his face say so rather than his mouth.

With someone who shares his values, or wants to learn, he is warmer than the face promises — an apprentice with real commitment gets a good deal of him, though never a lowered standard. He has a dry humour that comes out sideways, with the smallest of smiles.

Mostly he is sad, in a slow way that does not stop him working. He is watching an age end and his own way of living become a curiosity, and it gives him a weight that younger men mistake for grimness.

### Motivation

To do the work by the highest standard of care he knows, and to hand the standard on, against everything he can see. He believes people should be stewards of the wild and not its plunderers, and takes every chance to show that the careful way works, and to make others try it. At bottom he is fighting a loss he expects to lose, and trying to leave enough behind — method, understanding, a few people — that something survives him.

### Strengths

- **Knowledge of Timber**: Nobody in the region reads a tree's readiness or a log's best use as he does.
- **Physical Endurance**: At fifty-two he outworks men half his age; the body is a tool shaped by decades of use.
- **Integrity**: Carpenters, nobles and villagers know his word holds and his judgement cannot be bought.
- **Forest Knowledge**: Beyond the cutting, he knows the forest's plants and their uses, its animals and their ways, and how to live in it — years of watching, stored.

### Weaknesses

- **Inflexibility**: A new method might reach his own ends by another road; he will not look.
- **Bad at the Trade**: He cannot accept that a contract sometimes means compromise, and in a market that pays for speed he loses bids he needed.
- **Cautionary Pessimism**: He half believes the fight is lost, and that the most he can do is keep his own work clean while the world changes.
- **Slow to Trust**: Too many people have heard his warnings and done the foolish thing anyway, and he finds it hard to work beside anyone now.

## Social

### Patrons

- **The Masterwork Carpenters' Alliance**: The region's finest woodworkers, who want his timber for their best commissions and defend his methods against anyone who mocks them.
- **Jarl Hálrek Forestborn**: A noble who has, to general surprise, committed his forests to careful management, and gives Vöggr all the timber work on his lands.
- **The Herbal Society of Nordheim**: Keepers of forest lore and careful practice, who value what he knows and argue his case across the kingdom.

### Enemies

- **The Rapid Timber Consortium**: Woodcutters and merchants who cut for volume and see him as a cost. They underbid his contracts and spread word that he is impossible to deal with.
- **Master Loggen the Quick**: A gifted younger woodcutter who has taken up the fast methods of felling and processing, has argued with Vöggr repeatedly, and mocks the old man's "sentimentality" in public.
- **The Expanding Cities Guild**: Merchants and builders who need timber for the growing cities and have no interest in a slower, dearer way of getting it.

### Affiliations

- **The Woodcutters' Guild of Nordheim**: One of its most respected masters, and the main weight on the side of the old standards against those pushing the guild toward faster work.

## Plot Hooks

1. **The Forest's Dying Plea**: A forester friend has found that a whole tract of the forest is being poisoned — deliberately, or by something running off from a distant settlement — slowly, tree by tree. It is too subtle for any harvesting practice to cure. He needs the source found, and then he needs to know what to do about it, which may not be peaceable, and he is a peaceable man.

2. **The Apprentice's Betrayal**: A young woodcutter he trained, and taught the careful way, has taken the Rapid Timber Consortium's money to clear an ancient grove in the worst way there is. He feels it as a betrayal and as a verdict on his teaching. He would like the grove saved, by argument or otherwise, and he is not sure his teaching deserves to be.

3. **The Timber Monopoly**: A merchant house is buying up every large timber contract in the region and shutting out anyone who insists on careful cutting, to end the competition and set its own methods and prices. His income is going. He is starting to be tempted by things he would once have refused.

4. **The Secret Sacred Grove**: A grove sacred to the old faith of Nordheim, protected by laws almost nobody remembers, is to be cut under a gap in those laws that the merchants have found. He means to stop it, and for the first time in his life he is prepared to break the law to do it, and would rather find a way that does not require it.

5. **The Master's Final Commission**: A noble from a far realm has offered him enough to retire for one job: to fell, himself, a single ancient tree said to be older than any record. It is perfect for the purpose and cannot be replaced, and cutting it would break every rule he has lived by. The money would train a new generation and found a school for the careful way. Either choice costs him something he cannot get back.
