---
tags:
  - heroes-and-knaves
  - fffv1
  - herald
  - noble
  - spymaster
  - vylaria
  - administration
  - character
name:
  full: Lord Aemilon Visbari
  title: Lord
  given: Aemilon
  clan: Visbari
  home: valdosta
  aliases: []
packFolder: midhalionvylaria
shortcode: lrdmlnvsbr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Herald
  stations: []
  lore:
    - landedlordrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  born: 665/3/15
  height: 1.8
  weight: 89.4
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: gray
    skin_color: medium
    complexion: medium
    extra_features:
      - limp
      - mustache
      - beard
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 98 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-shok, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 112 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-math, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-crobe }
    - { model: sohl-sohl-armorgear-cleg }
    - { model: sohl-sohl-armorgear-cmntl }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-miscgear-pence, system: { quantity: 342 } }
    - { model: sohl-sohl-miscgear-gldcrwn }
    - name: Walking stick (blackthorn, well-worn)
      type: miscgear
      system:
        shortcode: walkingstick
        weight: 1
        value: 100
        durability: 3
    - name: Cipher documents (encoded intelligence)
      type: miscgear
      system:
        shortcode: cipherdocuments
        weight: 1
        value: 100
        durability: 3
    - name: Vylarian family seal ring
      type: miscgear
      system:
        shortcode: vylarianfamilyseal
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

![[lrdmlnvsbr|Lord Aemilon Visbari]]{float: top-left}

Lord Aemilon Visbari presents the image of a distinguished Vylarian elder statesman gone slightly to seed. He is tall and heavy-framed, with a full gray beard and mustache kept neatly trimmed in the old imperial fashion, and pale blue eyes that miss nothing despite their grandfatherly warmth. He walks with a pronounced limp—an old injury he never discusses—and leans on a blackthorn walking stick that has seen better days. He favors plain cloth robes and a fur-trimmed cloak that speak of comfortable wealth without ostentation, and carries a Vylarian-steel broadsword at his hip with the ease of a man who once knew how to use it well. His voice is unremarkable, but his words are chosen with extraordinary precision. He has the habit of pausing before answering any question, as though weighing exactly how much truth to dispense.

# Dossier {#dossier}

The Visbari family has served the Vylarian imperial throne for generations, and Aemilon was groomed from boyhood for a life of quiet service. Officially, he trained at the Imperial College of Heralds in the capital, where he excelled in heraldry, genealogy, diplomacy, and the thousand small courtesies that oil the machinery of Vylarian noble society. Unofficially, his real education began afterward—years of travel across the empire's former provinces and the wider shores of the Vylarian Sea, during which he built and inherited a network of informants, agents, and assets woven through every level of society from [[place-provenzrgn|Provènzia]] to Harad.

When his father died over twenty years ago, Aemilon inherited the full weight of the family's secret vocation: spymaster to the Emperor. He has spent the decades since expanding the network, improving the speed and reliability of its communications, and quietly ensuring that certain secrets reach the imperial ear while others are buried forever. He is fluent in multiple languages of the [[place-midhalnrgn|Mídhalión Region]] and several scripts, including ciphers of his own devising, and his memory for names, faces, and relationships is legendary among those few who know what he truly does.

Now in his fifties, Lord Aemilon faces a problem he cannot solve with information alone. He has no children, and the network must survive him—especially now, as the empire's power wanes and its enemies grow bolder. He has identified a candidate—a woman of uncommon ability—but training a successor requires time he may not have, and trust he finds difficult to extend. The limp that slows his step grows worse each year, a reminder that even spymasters grow old.

## Psyche

### Personality

Lord Aemilon is courteous, measured, and deeply private. He has spent a lifetime cultivating the appearance of a benign, slightly tedious old herald—the sort of man people forget is in the room—and he plays this role with consummate skill. Beneath the surface, he is sharp, calculating, and occasionally ruthless, though he takes no pleasure in the harder aspects of his work. He has a genuine love of learning and can hold forth on Vylarian genealogy, the history of the empire's rise and decline, and the art of heraldic design with unfeigned enthusiasm. He treats servants and nobles with equal courtesy, which makes him popular and makes people want to talk to him—which is, of course, the point.

### Motivation

Aemilon serves the imperial throne out of deep family loyalty and a principled belief that the stability of what remains of the [[affiliation-vylarinmpr|Vylarian Empire]] depends on good intelligence—perhaps now more than ever, as the empire contracts and its rivals circle. He fears what would happen if the network collapsed—the plots it would fail to uncover, the wars it would fail to prevent. Finding and training a worthy successor has become his consuming purpose. He also carries guilt for the agents he has had to sacrifice over the years, and for the few he ordered killed when they knew too much.

### Strengths

His reasoning and creativity are extraordinary, allowing him to see connections others miss and devise solutions to seemingly impossible problems. His empathy makes him an exceptional judge of character, and his iron will keeps him steady under pressures that would break lesser men. His command skill reflects decades of quietly directing people who don't always know they're being directed. He is also still a competent swordsman, though age and his limp have slowed him.

### Weaknesses

Lord Aemilon's greatest weakness is his isolation. He has sacrificed personal relationships for the work, leaving him childless and with few genuine friends. His secrecy is so ingrained that he struggles to fully trust even those closest to him. His limp limits his mobility, and his age means he can no longer personally handle the more physical demands of intelligence work. He also carries secrets that could destroy powerful Vylarian families and foreign agents alike, making him a target for assassination if his true role were ever exposed.

## Social

### Patrons

The Emperor himself, though their relationship is carefully concealed. Several senior Vylarian nobles who have benefited from Lord Aemilon's intelligence without knowing its true source.

### Enemies

Lord Aemilon has many enemies who don't know they are his enemies—Haradian merchant-spies whose operations he has disrupted, Provenzian conspirators whose plots he has quietly dismantled, and ambitious Vylarian senators who would seize power if they knew how fragile the empire's grip truly is. A few suspect what he truly is, and those are the most dangerous.

### Affiliations

The Imperial College of Heralds (his public affiliation), the imperial intelligence network (his true affiliation), and the Visbari family's extensive web of informants among common clans throughout the Mídhalión Region who have prospered through the family's secret patronage.

## Plot Hooks

1. **The Discreet Errand**—An intermediary hires the party to shadow a certain individual through the streets of the Vylarian capital for three days and report their every movement. The pay is generous, the instructions precise, and no questions are to be asked. If the party succeeds without being detected, more lucrative work follows—drawing them deeper into Lord Aemilon's network without ever meeting the man himself.

2. **The Clan Obligation**—One of the party members learns that their clan owes an old and binding debt to an unnamed benefactor. When a stranger presents the agreed-upon sign, the character is honor-bound to comply—even if the task puts them at odds with their companions. The trail leads back, eventually, to Lord Aemilon.

3. **Too Much Knowledge**—The party is hired to uncover certain information about Haradian merchant operations and dutifully reports what they find. Shortly afterward, they are declared outlaws. Someone powerful wants them silenced, and Lord Aemilon must decide whether to protect useful assets or let them burn to preserve the network's secrecy.

4. **The Heir Apparent**—Lord Aemilon approaches the party through intermediaries to evaluate a young woman he believes could succeed him as the empire's next spymaster. He wants them to test her—discreetly—by placing her in situations that reveal her judgment, loyalty, and resourcefulness. The woman has no idea she is being assessed.

5. **The Old Spy's Gambit**—Lord Aemilon has uncovered a conspiracy that threatens the imperial throne, but his usual channels have been compromised. He must rely on outsiders—the party—to deliver critical intelligence to the Emperor before the conspirators act. The catch: Lord Aemilon himself may be the target of an assassination attempt before the delivery can be made.
