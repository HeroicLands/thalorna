---
shortcode: vthargrmhlt
name: {full: Véthar Grimholt, given: Véthar, clan: Grimholt, aliases: []}
type: being
subType: character
tags: [heroes-and-knaves, hero, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, woodsman]
  occupation: Shaman
  stations: []
  lore: [sturgeonttm, owlttm, sturgeonroad]
  culture: varokhiclt
  homes: [grimholt]
  affiliations: {vrystwldtrbs: {rank: 5}}
  gender: male
  species: humanflk
  born: null
  height: 1.77
  weight: 69
  frame: light
  appearance:
    eye_color: brown
    hair_color: gray
    skin_color: pale
    complexion: null
    extra_features: []
  packFolder: ankarisvrystwald
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-spirit, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 82}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 78}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 78}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: skill-varokhlng, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-rhtunic}
    - {model: sohl-sohl-armorgear-rhbrch}
    - {model: sohl-sohl-armorgear-rhshoe}
    - {model: sohl-sohl-armorgear-bvcloak}
    - {model: sohl-sohl-armorgear-bvcap}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-torch, system: {quantity: 2}}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin}
    - name: Wooden bowl and personal totem tokens
      type: miscgear
      system: {shortcode: ritebowl, weight: 1, value: 20, durability: 3}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: (9 * str) + 50}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Véthar is a lean, gray-haired man with a river worker’s cracked hands and a gaze that settles on a thing until everyone else has looked away. His dark wool cloak smells of smoke and damp reeds. An owl carved from fallen wood hangs beside a small sturgeon on his cord; he distinguishes his personal bond from the wesk he keeps for the whole clan. He carries a walking staff, a knife and a plain wooden bowl for his rites.

# Dossier {#dossier}

## The Bowl That Came Back

Put another stick on the fire. This is the tale of the man who went farther than any boat, and the empty bowl that followed him home.

Véthar kept the Sturgeon for [[place-grimholt|Grimholt]], and he kept silence well. His predecessor had chosen him because he heard what others missed. At the landing the women reckoned grain and furs, the War Chief watched the wall, and Véthar tended the grove. Each held a seat beside the others. Yet a busy landing can hear a hammer more readily than a warning, and Véthar made his warnings so quiet that they were easily missed.

First the reeds whispered when no wind moved them. Then sleepers woke with river mud beneath their nails. Véthar waited to understand. The third night a child walked into the water and was pulled back by her grandmother. At morning the grandmother laid the child's wet blanket across his threshold. He could find no words small enough to hide behind.

He told the two other chiefs what he had seen and what he had failed to say. The War Chief posted watchers at the water; the Other Chief found dry sleeping places and apportioned provisions. Véthar went upriver with two companions, carrying dry fuel and provisions. At an old sacred grove they found the oldest mound cut open at the bank. Three men had taken gravel there and stolen a bronze bowl, a comb and a small iron knife to sell at the wharf. The witnesses were living people, and it was from living mouths that he learned what had been done.

Beside the injured roots he entered trance. His companions kept his body warm. In the spirit realm the path followed a river that made no sound, and hungry things moved where its banks had broken. One wore his teacher's voice. It promised to tell him who would die before winter, if only he followed it. Véthar stopped and said, “A mouth may sound familiar and still speak a forbidden word.” He followed neither the voice nor its promise.

He called to the Sturgeon and to the spirits of the grove. He sought leave to tend the damaged sacred ground and shelter for those living under his charge. The river grew deep. Something greater than the hungry things passed beneath him, so slowly that he thought it would never pass at all. The familiar voice called from farther upriver. To follow would have meant leaving the hands that held his body. He turned toward home before his questions were answered.

When he woke, his companions had spent the last of their dry fuel. One had burned a spear shaft to keep him warm. He had returned with no trophy and no prophecy. He returned with enough breath to explain what the village must repair.

The Other Chief reckoned the theft before living witnesses; the War Chief guarded the bank while Véthar guided its restoration. Grimholt recovered the bronze bowl, comb and knife and returned them publicly to the mound. Households fed the watchers; the watchers kept children from the water. Véthar returned to trance while the grove healed, and no one pretended that one night could mend every wound. The whispering diminished. After the next seasonal rite the bronze bowl was found on his hearth, empty and unbroken. Some say the Sturgeon returned it. Some say a living hand carried it there. Véthar took it back to the mound and settled neither account.

This is how the tale ends: when someone says he saved Grimholt alone, the reciter names the grandmother, the companions and the households. Then the reciter sets an empty bowl beside the fire, so that everyone sees there is room to put something in.

## Playing Véthar

The longer fireside verse is [[lore-sturgeonroad|The Sturgeon Road]].

The dates and the returning bowl differ between tellings. The sheet portrays Véthar after the first successful journey, while the grove still needs care. His trance journeys are dangerous spiritual mediation, resolved by the gamemaster; they confer no unrestricted power to travel, command spirits or predict events. He need not question the dead. He never seeks future knowledge, detailed spirit-world existence, combat or revenge counsel, or information about the banished. His tale gives no verdict about the fate of any dead person.

## Psyche

### Personality and Motivation

Patient and observant, Véthar has the Owl's quiet attention and its temptation to withdraw. He wants the clan to hear a warning soon enough to act. He now states uncertainty aloud and asks for help before his patience becomes neglect. Keeping the Sturgeon belongs to his village office; Owl is a personal bond.

### Strengths and Limits

He is a skilled keeper of oral memory, herbal care and sacred rites, with the resolve to refuse a spirit's enticing answer. He can guide funerals and living obligations without claiming to know the ancestors' judgments. He is a modest fighter, physically vulnerable in trance, and dependent on companions for warmth, protection and the journey home.

## Social

The War Chief and Other Chief are his coequal colleagues. Households support their Shaman as part of the clan's duty; he sells no rite for a fee. He values the grandmother who forced him to speak and the companions whose judgment brought him home. The predatory spirits remain a danger, while careless work on the riverbank is a harm living people can still repair.

## Plot Hooks

1. **Fuel for the Return**—Véthar must revisit the grove during a cold rain. Escort him, gather dry fuel and keep his body safe while the landing urgently needs news.
2. **Goods Beneath the Gravel**—A merchant has bought goods removed from the sacred bank. Recover them and find living witnesses who can settle responsibility before a restitution dispute turns violent.
3. **The Familiar Voice**—A frightened household hears the same false voice offering knowledge of tomorrow. Véthar needs help protecting its sleepers and tracing the disturbance without accepting the voice's forbidden bargain.
