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
  born: 668/2/29
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

Vöggr stands 5'11" tall with a heavy build. He has tanned weathered skin, gray hair, and blue eyes. His features include a long face, a long nose, a strong jawline, a firm-set mouth, low-set brows, and angular cheeks. He has a scar running down his back.

# Dossier {#dossier}

**The Forest's Education**

Vöggr Blóthöll was born into a family of woodcutters in the Darkwood Reaches of the [[affiliation-kngdmnrdhm|Kingdom of Nordheim]], a region where the vast forests that covered the landscape were simultaneously the greatest resource and the most dangerous adversary. From the moment he could walk, he learned to move through the forest with respect and care, training from his father and uncles emphasizing that the forest was a living system that would provide year after year if treated with wisdom, not a resource to be exploited without consequence. This philosophy—unusual among northern woodcutters who tended toward aggressive extraction—was passed through the Blóthöll line as carefully as any inherited treasure.

**The Scar's Lesson**

At the age of twenty-two, Vöggr made a critical error in judgment: he chose a tree to fell while rushing to meet an arbitrary deadline imposed by a noble purchaser eager for rapid completion. The tree, weakened by prior damage and disease he had not properly assessed, fractured unexpectedly and fell in an uncontrolled manner that sent him sprawling backward. The secondary trunk that struck him ran from his neck nearly to his waist, and he retained consciousness long enough to understand that he was dying. A chance encounter with a wandering herbalist and healer named Kaessa saved his life, though recovery took nearly three years. During that period of painful rehabilitation, Vöggr re-examined everything he believed about his work and his obligations to the forest. He emerged from that experience with a deepened commitment to his family's philosophy of sustainable practice and a settled conviction that rushing the work was never acceptable.

**The Master of the Craft**

For the next thirty years, Vöggr has been regarded as the finest practitioner of his craft in all of Nordheim—not because he cuts the most timber or takes on the largest contracts, but because his reputation is built entirely on the quality, sustainability, and ethics of his work. He has trained several apprentices in his methods, though fewer accept his philosophy each generation. He maintains relationships with local carpenters who depend upon his wood for their finest work, and with the Woodcutters' Guild, where his presence keeps certain standards of craft and care in place. He has also developed unexpected relationships with those who care for the forests' preservation, acting as a bridge between exploitation and conservation.

**The Twilight of Traditional Ways**

Now at fifty-two winters, Vöggr finds himself increasingly out of step with his own profession. A new generation of woodcutters has emerged who put speed and volume before sustainability, who use newer, faster techniques that sacrifice the careful deliberation he believes essential. Younger merchants seek cheaper timber and care nothing for the philosophy of its sourcing. Vöggr remains committed to his ideals, but he recognizes that his way may die with him, and this knowledge weighs heavily on his spirit.

## Psyche

### Personality

Vöggr is a man of deep silence. Where others might fill gaps with conversation, he observes and thinks. This quietness is not the result of shyness or social incapacity; rather, it reflects a mind that prefers to understand a situation thoroughly before speaking. When he does choose to offer words, they are typically few, direct, and considered carefully. He has little patience for pretense or deception, and he makes his disapproval of such things clear through his bearing rather than elaborate explanation.

Despite his gruff manner, Vöggr possesses a deep capacity for connection with those who share his values or who demonstrate a real willingness to learn. He can be surprisingly warm with apprentices who show promise and commitment, though he never permits sentiment to override his standards. He maintains a dry, understated sense of humor that emerges in unexpected moments, usually accompanied by the faintest smile.

Vöggr's primary emotional reality, however, is one of slow-burning melancholy. He is not incapacitated by it; he is keenly aware of the dying of an era and the approaching obsolescence of his own way of life. This sadness informs his dealings with the world, lending him a gravitas that younger men mistake for grimness.

### Motivation

Vöggr is driven by two interrelated motivations: a determination to practice his craft according to the highest principles of care and sustainability, and a desperate hope that he might somehow preserve this philosophy for future generations despite overwhelming evidence that the world is moving in the opposite direction. His actions are guided by the conviction that the proper relationship between humans and the natural world is one of careful stewardship rather than aggressive exploitation. He seeks opportunities to demonstrate this philosophy's validity and to inspire—or force—others to adopt more thoughtful practices. At his deepest level, he is fighting against inevitable decline, attempting to leave a legacy of understanding and method that might survive him.

### Strengths

- **Incomparable Expertise**: Vöggr's knowledge of trees, wood quality, sustainable harvesting, and timber preparation has no equal in the region. No other living woodcutter can match his ability to assess a tree's readiness for harvest or identify the best use for any given piece of timber.
- **Physical Endurance**: Despite his age, Vöggr possesses great strength and stamina, capable of work that would exhaust younger men. His body is a tool perfectly calibrated through decades of use.
- **Unquestionable Integrity**: His reputation for conducting his business with complete honesty and commitment to stated principles is absolute. Carpenters, nobles, and ordinary people alike know that Vöggr's word is reliable and his judgment incorruptible.
- **Deep Forest Knowledge**: Beyond woodcutting, Vöggr possesses extensive practical knowledge of the life of the forest, medicinal plants, animal behavior, and wilderness survival—years of careful observation accumulated through constant presence in wild spaces.

### Weaknesses

- **Stubborn Inflexibility**: Vöggr's commitment to traditional methods blinds him to potential applications of newer techniques, even when such techniques might achieve sustainability through different means.
- **Difficulty Adapting to Markets**: He struggles to understand and accept that commercial realities may require compromise. His refusal to cut corners sometimes makes him uncompetitive in a market that increasingly values speed over quality.
- **Cautionary Pessimism**: His awareness of cultural decline and generational change sometimes manifests as fatalism—a belief that resistance is ultimately futile and that the best he can do is maintain his own standards while the world changes around him.
- **Limited Capacity for Trust**: Vöggr's experiences with those who ignore his warnings and proceed with foolish practices have left him deeply skeptical of others' commitment to careful work, making collaboration difficult.

## Social

### Patrons

- **The Masterwork Carpenters' Alliance**: A collective of the region's finest woodworkers who depend upon Vöggr's timber for their most important commissions and fiercely defend his methods against criticism.
- **Jarl Hálrek Forestborn**: A noble who has made the surprising commitment to sustainable forest management and contracts Vöggr for all major timber needs across his extensive lands.
- **The Herbal Society of Nordheim**: An organization dedicated to preserving forest knowledge and sustainable practices that values Vöggr's knowledge and advocates for his methods throughout the kingdom.

### Enemies

- **The Rapid Timber Consortium**: A coalition of aggressive woodcutters and merchants who put the volume cut before sustainability and view Vöggr as an obstacle to profit, regularly underbidding his contracts and spreading rumors about his inflexibility.
- **Master Loggen the Efficient**: A younger, talented woodcutter who has embraced modern techniques that allow rapid felling and processing. He and Vöggr have clashed repeatedly over philosophy and methods, with Loggen publicly mocking the elder's "outdated sentimentality."
- **The Expanding Cities Guild**: An organization of merchants and builders who source timber for urban expansion and have no interest in the slower pace and higher costs of sustainable harvesting.

### Affiliations

- **The Woodcutters' Guild of Nordheim**: Vöggr holds significant prestige within the Guild as one of its most respected masters, and his advocacy for traditional standards provides the primary counterweight to those pushing toward more aggressive practices.

## Plot Hooks

1. **The Forest's Dying Plea**: A forester friend of Vöggr's discovers that an entire region of the forest is being systematically poisoned by something—whether deliberate contamination or waste from a distant settlement, it is killing the trees slowly and methodically. Vöggr is devastated but uncertain how to respond, as the poisoning is subtle enough that conventional harvesting practices won't resolve it. The party must help him investigate the source while also deciding whether the response requires violence, negotiation, or something more complex.

2. **The Apprentice's Betrayal**: A young woodcutter trained by Vöggr under the promise of learning sustainable methods accepts a lucrative commission from the Rapid Timber Consortium to harvest an ancient grove in a way that violates all principles of stewardship. Vöggr feels personally betrayed and struggles with the realization that his teachings have failed to instill true understanding in the younger generation. The party must assist in a desperate effort to prevent the destruction, potentially through sabotage or negotiation.

3. **The Timber Monopoly**: A wealthy merchant organization begins buying up all major timber-harvesting contracts in the region, deliberately excluding Vöggr and others who insist on sustainable practices. Their goal is clear: eliminate the competition and establish a monopoly on timber supply that allows them to dictate methods and pricing. As Vöggr's income dwindles, he becomes desperate and vulnerable to temptation. The party becomes involved in a conflict that could either break the merchant monopoly or represent Vöggr's final defeat.

4. **The Secret Sacred Grove**: An ancient grove of trees, sacred to the old faith of Nordheim and protected by obscure laws, is scheduled for harvest under a loophole that merchants have discovered. Vöggr becomes aware of the plan and determines to prevent it, even if it means breaking laws he has always respected. The party can support him in increasingly desperate measures or attempt to find legitimate means to prevent the harvest.

5. **The Master's Final Commission**: Vöggr receives an offer that is extraordinary: a wealthy noble from a distant realm offers enough coin to secure his retirement, requesting that he personally oversee a single, enormous commission—felling a famed ancient tree that is said to be older than recorded history. The tree is perfect in every way for the work requested, but Vöggr realizes it is irreplaceable and that taking this one commission would violate every principle he has lived by. Yet the money offered would allow him to train a new generation of apprentices and establish a school dedicated to sustainable practices. The party must help him with the impossible choice between personal compromise and potential legacy.
