---
shortcode: idriskrsvr
name: {full: Ídrise Kórisvar, given: Ídrise, clan: Kórisvar}
type: being
subType: character
description: "A Provenzian bodyguard raised by the warrior-monks of Brazemas, who works the Elanmere fair and has guarded Lord Dalren Mórlineth before."
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, cleric]
  occupation: Bodyguard
  lore: []
  culture: elavendriclt
  homes: [elanmere]
  affiliations: {kngdmprvnz: {rank: 2}, brazemas: {rank: 1}}
  gender: female
  species: humanflk
  born: "691.15"
  height: 6' 3"
  weight: 190 lbs
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: olive
    complexion: [clear]
    hair_style: braided
    face_shape: angular
    brow: arched
    mouth: full
    extra_features: []
  packFolder: aureldiaprovenzia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-weapongear-shrtswd}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-ltstunic}
    - {model: sohl-sohl-armorgear-ltbrch}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-weapongear-rndsh}
    - {model: sohl-sohl-miscgear-medsupil, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 3}}
    - {model: sohl-sohl-miscgear-torch, system: {quantity: 2}}
    - {model: sohl-sohl-miscgear-tndrbx}
    - name: First aid kit (salves, poultices, bandages)
      type: miscgear
      system: {shortcode: firstaidkit, weight: 0.6, value: 100, durability: 3}
    - name: Survival kit (rope, grappling tools, climbing gear)
      type: miscgear
      system: {shortcode: survivalkit, weight: 1.5, value: 100, durability: 3}
    - name: Whetstone for blade maintenance
      type: miscgear
      system: {shortcode: whetstoneforblade, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin}
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
      weight: {base: null, calc: "(9 * str) + 50"}
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

![[idriskrsvr|Ídrise Kórisvar]]{float=top-left}

Ídrise Kórisvar is a 28-year-old woman who stands 6'3" tall and is of medium build. She has an angular face with a strong nose, a pointed chin, full lips, arched brows and angular cheeks. Her green eyes never stop moving across a room, and her olive skin is clear. Her brown hair is braided tight against her skull, and she stands where she can see every door.

# Dossier {#dossier}

## Background

### The Foundling

Ídrise Kórisvar's earliest memory is of cold stone and chanting. She was raised at a shrine of [[affiliation-brazemas|Brazemas]] the Stormkeeper in the [[affiliation-kngdmprvnz|Kingdom of Provénzia]], by a community of warrior-monks devoted to the storm god. Whether she was left there as an infant or born within its walls, nobody would tell her; the monks spoke of her arrival only as an act of the god's will. They raised her with their own children and trained her from childhood in blade, body and spirit. While other girls learned needlework, she learned where a body is weak.

### The Training and the Breaking

At sixteen she fought beside the elder monks when bandits came for the shrine's treasury, and she was devastatingly effective. In the aftermath the shrine's elders decided that she was too dangerous to keep cloistered, and sent her into the world with their blessing to be what she was raised to be: a protector, a weapon of the god's will. The move from the shrine's discipline to the pragmatism of hired swords was deeply disorienting.

### Current Path

For a decade Ídrise has worked as a bodyguard, first in the towns of Provénzia and for the last two years in [[place-elanmere|Elanmere]], the lake town of the [[affiliation-kngdmlvndr|Kingdom of Élavendre]] where the autumn fair draws lords, factors and the men who prey on them. She has a name for absolute reliability and for lethality, and she takes only contracts whose ends she can accept. Her rates are high and her services in demand. She moves through the world aware of lines of attack and ways out, unable simply to be anywhere without weighing danger.

The fair is close, and her old client [[being-dalrenmorlin|Lord Dalren Mórlineth]] has taken rooms in the town ahead of it, sleeps in a different room each night and says someone has been hired to kill him.

## Psyche

### Personality

Ídrise is reserved to the point of austerity, speaking only when necessary and rarely about anything beyond the work at hand. Her humor, when it emerges, is dry and often dark—laughing at absurdities that others might find horrifying. She is not unfriendly, but she maintains emotional walls so high that even those she has worked with for years describe her as distant. She has learned through painful experience that attachments create vulnerabilities, and vulnerabilities get people killed.

She is, however, a deeply ethical individual. She will not take contracts to harm the innocent, refuses to work for obviously corrupt nobility, and has walked away from lucrative work when she discovered the true nature of what she was being asked to do. This rigid morality, combined with her lethal competence, makes her rare—a killer with a conscience, which some see as contradiction and others as deep integrity.

### Motivation

Ídrise is driven by a need to protect, rooted in the spiritual training of the shrine but complicated by her observation that most people are not worthy of protection—they pursue petty ambitions and hurt those weaker than themselves. Still, she continues working because the act of preventing harm is the closest she comes to feeling meaningful purpose. There is also a deeper motivation she seldom acknowledges: she seeks redemption for the damage she causes, attempting to balance the scales by protecting innocent lives from those who would prey upon them.

### Strengths

Martial Skill
: Her combat training spans multiple disciplines and decades of practice. She is ambidextrous, skilled with blade and ranged weapons, and devastatingly effective in hand-to-hand combat. Few people in either kingdom could match her in single combat.

Threat Assessment and Tactical Analysis
: She reads situations with almost supernatural accuracy, identifying threats and ways out within moments of entering any space. This skill extends to understanding human behavior and motivation.

Inhuman Discipline and Control
: She maintains focus and calm in situations where others panic. She can endure pain, cold, exhaustion, and fear without allowing these to affect her judgment or performance.

Absolute Reliability
: Once committed to a contract or cause, she follows through with complete dedication. Those who hire her know they are getting what they pay for, without compromise or abandonment.

Perception and Awareness
: Her senses are very sharp; she notices details others miss and remains aware of her surroundings at all times.

Physical Endurance and Strength
: Years of training have left her capable of incredible feats of stamina and strength. She can travel for days on minimal rest, carry heavy loads, and push through conditions that would incapacitate ordinary people.

### Weaknesses

Emotional Isolation and Difficulty Forming Bonds
: Her walls are so high that even those closest to her struggle to truly connect. She is incapable of intimacy and views emotions as weaknesses to be controlled rather than experienced.

Over-Protectiveness
: Because she views the world primarily through the lens of threat, she often smothers those in her charge with excessive caution, preventing them from living normally or taking acceptable risks.

Inability to Relax or Be Vulnerable
: She never truly rests, always maintaining tactical awareness. This constant vigilance exhausts her in ways that others cannot understand.

Limited Social Skills
: She struggles with small talk, emotional communication, and the unspoken rules of polite society. Her directness often offends people who expect more delicacy.

Moral Rigidity
: While her ethics are admirable, they occasionally prevent her from taking expedient action. A more flexible person might fare better in tangled situations.

Difficulty with Ambiguity
: She prefers situations where right and wrong are clear. When morality becomes gray and complex, she struggles with decision-making and second-guesses herself.

## Social

### Patrons

[Áulirarne Thólmarnde]{.name data-type="being/npc"}
: A factor of Péravel who deals in fine goods at the Elanmere fair and hires Ídrise for her escorts and her strongroom. Their working relationship has become something near friendship, though Ídrise would never use the word.

[[being-dalrenmorlin|Lord Dalren Mórlineth]]
: A nobleman whom Ídrise has guarded before and who relies on her. She does not entirely like him and does not know his past.

The shrine of Brazemas
: The monks who raised her keep her deepest loyalty. She no longer practices their faith formally, but she would move mountains to protect them.

### Enemies

The smugglers of the Lísere coast
: A ring of smugglers tried to force Ídrise into its employ. She refused, and they put a price on her life. Several have tried to collect it and failed.

[[being-urnathdorkim|Lord Urnath the Cruel]]
: A nobleman of Lámanis whose cruelty to his servants and dependents broke every principle Ídrise holds. He tried to hire her; she refused, and found evidence of his crimes. She has become his quiet enemy, gathering more and keeping her distance.

Her own past
: Before she found her code she took contracts she now regrets, and she wonders whether any of their victims' families will come looking for her.

### Affiliations

[[affiliation-kngdmprvnz|Kingdom of Provénzia]]
: Ídrise is a Freeman of Provénzia, living in Élavendre by the crown's leave.

[[affiliation-brazemas|Faith of Brazemas]]
: The shrine that raised her is her spiritual home, where the monks still speak of her as one of their best.

## Plot Hooks

The Mirror at the Fair
: Dalren hires Ídrise for the fortnight of the fair and confesses that a skilled fighter has been shadowing him, never striking. The shadow is a woman trained at Ídrise's own shrine a generation before her, who says she hunts Dalren for something in his past and asks Ídrise to stand aside. Ídrise's duty to her client is set against her respect for a sister of the shrine.

The Forbidden Vow
: Over a long contract guarding a factor's household Ídrise has let herself love the factor's daughter, the first connection she has allowed in years. The daughter asks her to give up the work. In the same week the shrine sends for her: its monks are being taken by a sorcerer who wants warrior-slaves.

The Captured Assassin
: Ídrise has taken an assassin sent after one of her clients. Under questioning he names an employer deep in the hired-sword trade and speaks of warriors trained from childhood and held under magical compulsion. He begs her to break his bonds, and asks whether the shrine's training carried any trace of the same magic.

Urnath's Ledger
: Ídrise has a page of Lord Urnath's household ledger that shows what became of three servants who vanished. She asks a party to carry it to someone in Lámanis who can use it, because Urnath's men know her face.
