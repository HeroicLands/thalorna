---
shortcode: bhrjvrmdbd
name: {full: Bhrijivara Madibada}
type: being
subType: npc
tags: [heroes-and-knaves, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, scholar]
  occupation: Devapavi (Senior Priest of a Mother-Temple)
  lore: []
  culture: vedyariclt
  homes: [bharavaban]
  affiliations: {bhrvdvbhon: {rank: 7}, vrnkpnthn: {rank: 3}, triyangasampradeya: {rank: 3}}
  gender: male
  species: humanflk
  born: "655.10"
  height: 5' 8"
  weight: 139 lbs
  frame: light
  appearance: {eye_color: dark_brown, hair_color: white, skin_color: brown, complexion: [wrinkled]}
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-timb, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 25}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 75}}
    - {model: skill-triyangasampradeya, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-weapongear-stf}
    - {model: sohl-sohl-armorgear-lrobe}
    - {model: sohl-sohl-armorgear-ltsndls}
    - {model: miscgear-ashmarkstamp}
    - {model: miscgear-threshlamp}
    - {model: sohl-sohl-miscgear-incense}
    - {model: sohl-sohl-miscgear-booktrvl}
    - {model: sohl-sohl-miscgear-inkblk}
    - {model: sohl-sohl-miscgear-penquill}
    - {model: sohl-sohl-miscgear-tndrbx}
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

Bhrijivara is a slight old man of 5'8", brown-skinned and deeply lined, with white hair cut close and white stubble he shaves on rite days. His eyes are dark and quick. He wears a plain linen robe with the single cord of an ordained priest of the [[affiliation-triyangasampradeya|Triyanga-sampradeya]], and he walks barefoot inside the temple court and in sandals beyond it. On felling days he wears [[affiliation-rasikara|Rasikara]]'s gray ash-mark on his brow, pressed there with a bronze [[miscgear-ashmarkstamp|Ash-Mark Stamp]] he has carried for forty years.

# Dossier {#dossier}

## The Mother-Temple

The forest of [[place-bharavaban|Bharavaban]] is held in estates endowed to the temples of the lower Bharava, and the [[affiliation-bhrvdvbhon|Forest Estates]] is the whole of its government. Each estate is kept by a **Shetrapalda**, an ordained keeper, and above the keeper there is the **Devapavi** of his mother-temple and nothing else.

Bhrijivara is Devapavi of a mother-temple on the south bank of the lower river, whose endowment runs inland from the pilgrim road to the last gathering grounds before the interior. He holds the endowment itself and confirms the keeper of every estate cut out of it: eleven estates, eleven keepers, and the licenses, seasons and tribute of all of them. He is **Ritrija** by birth, ordained an Achorya of the Triyanga-sampradeya to the form of Rasikara, the god of fire and of the change fire compels, whose mark is set on a man's brow before any work that destroys what came before. In a forest held for the gods and paid for by felling, that is the form a mother-temple needs, and he has served it for forty years.

## The Last Estate

The estates around the interior keep no survey of it. An estate-keeper asked about the country past the last gathering ground says that the roll names no such place, and the keepers Bhrijivara confirms say it in exactly those words, because he taught them.

He went past it once, at twenty-four, as a young priest walking the bounds with a felling crew that had lost its way on a season's path. They came out on a causeway of dressed stone under the vines, lined with lamp-posts, and every bowl on the posts was burning. The crew turned back. Bhrijivara was last in the line, and a lamp was held out to him at the height of his hand by someone he could not see. He did not take it. He did not look back, and he walked out to the gathering ground behind the others before dark.

He has never told anyone what he saw except the Devapavi before him, who listened, said nothing, and the next season closed the felling-line on that path for good. Bhrijivara has kept it closed. He has struck every season's path that drifts toward the interior from the licenses, moved two estates' bounds back from it and refused a timber license for a stand of hardwood worth a year's tribute. The other mother-temples think him overcautious, and the coastal buyers think him a fool.

## The Fire on the Road

The orthodox hold that the unburned dead are [[affiliation-kalavrata|Kalavrata]]'s affair and that no priest may presume on him. The [[affiliation-agmipantra|Agmi-pantra]] holds that the fire is owed to the dead before it is owed to anyone, and counts [[place-sorhupur|the City That Kept Its Dead]], the hearth-town in the interior, among the grounds it means to burn. A chapter of the Agmi-pantra has asked the mother-temple for leave to cross Bhrijivara's estates and for a guide from the gathering peoples.

He has refused. The Agmi-pantra's reply is that the estates cannot forbid a road the god has opened, and that the chapter will come in the dry season with or without leave. The orthodox temples of the plains, who think the Devabhona lawless, have taken his side for once.

He wants no license, survey or sabhra ever carried past his last gathering ground. He does not want the hearth-town burned, entered, mapped or named. He has a dry season to keep a chapter of fire-priests out of a forest that has no assembly and no army.

## Psyche

### Personality

Bhrijivara is learned, courteous, dryly funny and absolutely immovable on the one subject he will not discuss. He likes timber, rain and argument about the law of endowments, and he can recite the bounds of every estate of his mother-temple from memory without the **Smiritibhara**'s help, though he always sends for the Smiritibhara anyway. He keeps the rites exactly and does not explain them.

He is kind to the gathering peoples, who are not the estates' subjects in any sense a lowland court would recognize, and he pays their licenses on time. He has never asked any of them about the interior, and none of them has ever told him.

### Motivation

He wants no license, survey or sabhra ever carried past his last gathering ground, and nothing brought out of the interior or taken into it.

### Strengths

Authority
: He is the only authority above eleven keepers, and the estates of his endowment answer to nobody else.

The Law of the Endowment
: He knows the terms of every gift his temple holds, back to the first, and the Devabhona's long argument with the plains about why an endowment cannot be revoked by a body it predates.

Rite and Learning
: He is a senior priest of the Triyanga-sampradeya, ordained to Rasikara's form, and his rites are correct.

### Weaknesses

Age
: He is sixty-five and has not walked a season's path in fifteen years.

Secrecy
: He has told no keeper why the felling-line is closed, and the younger keepers have begun to ask.

No Force
: The estates keep small bodies against theft of standing timber. None of them could turn back a chapter of the Agmi-pantra that meant to pass.

## Social

### Patrons and Allies

The mother-temples of the lower river
: Who consult each other about the price of lac and nothing else, and who will not stand together on this.

The orthodox temples of the plains
: Who have never supported the Devabhona on anything, and who support him now because the Agmi-pantra is involved.

### Rivals

The Agmi-pantra chapter
: Whose Jvelita intends to bring fire into the interior in the dry season.

[[being-lkvtprtsy|Lokavati Pritasya]]
: A licensed buyer of his estates, who has offered to finance a timber license for the closed stand of hardwood, and who wants it badly.

### Affiliations

[[affiliation-bhrvdvbhon|Bharava-Devabhona]]
: Devapavi of a mother-temple on the south bank, holding its endowment and confirming its eleven keepers.

[[affiliation-triyangasampradeya|Triyanga-sampradeya]]
: An Achorya, ordained to the form of Rasikara.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: Ordained of a sampradeya.

## Plot Hooks

The Closed Path
: A young Shetrapalda of Bhrijivara's endowment has reopened a season's path toward the interior without leave, for a stand of hardwood the coastal buyers are paying for. A felling crew has gone up it and not come back. Bhrijivara asks the party to bring the crew out and the keeper back, and to tell nobody what they see.

The Chapter
: The Agmi-pantra chapter arrives at the pilgrim road with ember-vessels and a guide it has hired from the gathering peoples. Bhrijivara cannot stop it by force. He asks the party to delay it until the rains, by any means that sheds no blood on the god's land.

The Lamp
: A receiver on the coast is offering a bronze lamp with a flame in it that does not go out. Bhrijivara hears of it from Lokavati Pritasya and asks the party to buy it and carry it back to where it came from, as far as the last gathering ground and no farther.
