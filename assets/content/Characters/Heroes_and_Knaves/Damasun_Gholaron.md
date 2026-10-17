---
shortcode: damsnghlrn
name: {full: Dámasun Gholaron, given: Dámasun, clan: Gholaron, aliases: [Kléandir]}
type: being
subType: character
tags: [tamzir-crew, clergy]
data:
  banner: tamzirbnr
  icon: icon-person
  templatePriority: null
  archetypes: [cleric]
  occupation: Priest
  lore: []
  culture: helioniteclt
  homes: [helionis]
  affiliations: {thetamzir: {rank: 3}, ctysttshlns: {rank: 4}}
  gender: male
  species: humanflk
  born: 659.118
  height: 6'
  weight: 170 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: grey
    skin_color: ebony
    complexion: [weathered]
    extra_features: []
  packFolder: helladhelionis
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 86}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 46}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 63}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 81}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 69}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 63}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 49}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 88}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 17}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 88}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 47}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 49}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-mysticalability-astr, system: {masteryLevelBase: 59}}
    - {model: sohl-sohl-mysticalability-runecft, system: {masteryLevelBase: 53}}
    - {model: sohl-sohl-mysticalability-tarot, system: {masteryLevelBase: 37}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 31}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-ctunic}
    - {model: sohl-sohl-armorgear-cleg}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-containergear-bpchmd}
    - {model: sohl-sohl-miscgear-pence, system: {quantity: 28}}
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

![[damsnghlrn|Dámasun Gholaron]]{float=top-left}

Dámasun Gholaron—known to most simply as Kléandir—is a tall, dark-skinned man of sixty years who carries his age with a dignity that commands respect without demanding it. His black hair has gone largely gray, kept close-cropped against his skull, and his hazel eyes hold a depth of experience that is both comforting and faintly unsettling. He is lean but not frail, and he moves with a measured deliberateness that suggests far more physical capability than his humble cleric's garments would imply. He dresses in a simple light blue tunic, leather shoes, and carries a worn leather shoulder bag that appears to contain little more than books, herbs, and writing materials.

# Dossier {#dossier}

## Background

### Origin

Kléandir is a [[lore-helioniteclt|Helionite]] from the southern reaches of that great republic, born to a family of modest farmers in the hill country. He claims to have spent his youth in quiet contemplation, drawn to philosophy and theology from an early age. He entered religious service young, devoting himself to the study of the divine mysteries and the welfare of the common folk. This much is true, as far as anyone can verify.

### The Missing Years

What is not easily verified is anything about the thirty years between Kléandir's youth and his arrival aboard [[affiliation-thetamzir|The Tamzir]]. He speaks of theological study, of pilgrimages to holy sites, of years spent in contemplative communities. But the gaps in his story are conspicuous, and the details he provides are carefully curated. He is suspiciously well-traveled for a rural cleric. He speaks multiple languages with native fluency. He handles a blade and bow with a proficiency that no amount of "youthful military service" can adequately explain. And when violence erupts, Kléandir's first instinct is not to pray but to position himself for a clear field of fire.

### A Man of Contradictions

Kléandir arrived aboard the Tamzir five years ago, presenting himself as a wandering cleric seeking passage between ports. [[being-zbzmjkdn|Zabuzum Jakuduni]], known as Bu, was suspicious—the man was too capable, too calm, too comfortable with the ship's illegal activities to be what he claimed. But Kléandir proved useful. His theological knowledge earned trust in ports where the crew had none. His quiet counsel helped navigate interpersonal conflicts. And on the three occasions when the Tamzir was boarded by hostile forces, Kléandir proved devastatingly effective in a fight. Bu stopped asking questions. Some mysteries, he decided, were better left alone.

### Inner Turmoil

Something weighs on Kléandir. He suffers from insomnia, and crew members have heard him in his cabin at night, speaking in low tones—prayers, arguments, or confessions directed at no visible audience. He carries a moral weariness that goes beyond his years, and there are moments when his carefully maintained serenity cracks, revealing something darker beneath. Whatever Kléandir was before he became a wandering cleric, it haunts him still.

## Psyche

### Personality

Kléandir presents a face of gentle wisdom—patient, soft-spoken, and interested in the wellbeing of those around him. He offers counsel without being asked and never presses when it is refused. He is well-read, philosophically refined, and possesses a dry humor that emerges unexpectedly. But there is steel beneath the gentleness. When pushed, Kléandir's eyes go flat and his manner becomes clipped and precise—the manner of a man accustomed to giving orders in dangerous situations. He is a mass of contradictions, and he knows it.

### Motivation

Kléandir is seeking something—redemption, perhaps, or a peace he has not yet found. His faith is sincere but troubled, tested by experiences he will not discuss. He has attached himself to the Tamzir's crew with a protectiveness that suggests he has found, in these misfits, something worth caring about. He is particularly watchful over the younger members of the crew.

### Strengths

Kléandir is more dangerous than he appears. He is an expert archer, a skilled melee fighter, and possesses tactical awareness that suggests formal military or intelligence training. He is also wise—his counsel is sound, his reading of people is incisive, and his knowledge of folklore, astrology, and arcane traditions is encyclopedic. He has connections that he occasionally calls upon, connections that a simple cleric should not possess.

### Weaknesses

His secrets. Kléandir's hidden past is a liability because the crew cannot trust what they do not understand. His inner torment sometimes clouds his judgment, and his refusal to be honest about who he was leaves him perpetually isolated, even among people who care about him. There are those from his former life who might recognize him, and not all of them would be friendly.

## Social

### Patrons

Kléandir has mysterious contacts who occasionally provide him with information or resources. The nature of these relationships is unknown to the crew. Sewn into the lining of his shoulder bag are three usurer's notes of significant value—emergency funds whose origin he has never explained.

### Enemies

Unknown, but clearly present. Kléandir avoids certain ports, certain people, and certain topics with the practiced ease of a man who has spent years managing his exposure. He is particularly cautious around [[lore-vylarianclt|Vylarian]] imperial officials.

### Affiliations

Passenger and informal counselor aboard the **Tamzir**. He claims affiliation with a minor contemplative order in [[place-helionis|Helionis]], but the order's records, if checked, would prove curiously incomplete.

## Plot Hooks

1. **The Past Arrives**: A stranger in a port city recognizes Kléandir and addresses him by a different name—a name that carries weight and danger. Kléandir's carefully constructed new identity begins to unravel, and the crew must decide how much they need to know about the old man's past.

2. **The Confessor's Burden**: Kléandir has been quietly corresponding with someone about the [[affiliation-ordoarcanis|Thordimalon]]. He knows more about the organization than he has revealed—perhaps more than is safe. When an opportunity arises to strike at the Arcane Order's interests, Kléandir has the knowledge to make it possible, but using it would expose who he once was.

3. **Crisis of Faith**: An event aboard the Tamzir shakes Kléandir's already fragile faith to its foundation. The crew must contend with the possibility that their steadfast spiritual anchor is coming apart, and that the darkness in Kléandir's past may be closer to the surface than anyone realized.

4. **The Usurer's Notes**: When Kléandir is injured and his shoulder bag is opened to treat him, the crew discovers the hidden usurer's notes—worth a small fortune. The notes trace back to an institution with ties to Vylarian intelligence. The crew must decide whether to confront Kléandir or trust him despite the evidence.
