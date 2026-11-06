---
shortcode: belrkflwyn
name: {full: Melrik Salvin}
type: being
subType: npc
description: "A violet-eyed alchemist of Liranel who harvests where the Grove Council forbids, watched by a grove-elder and warned by the Wardens."
tags: [guilded, mages]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [mage, scholar]
  occupation: Alchemist
  lore: []
  culture: elavendriclt
  homes: [liranel]
  affiliations: {kngdmlvndr: {rank: 2}, marendas: {rank: 1}}
  gender: male
  species: humanflk
  born: 677.106
  height: 5' 4"
  weight: 128 lbs
  frame: medium
  appearance:
    eye_color: violet
    hair_color: black
    skin_color: fair
    complexion: []
    extra_features: []
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 32}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-slng, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-txtl, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-mysticalability-alch, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 26}}
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

Melrik Salvin is a 42-year-old man who stands 5'4" tall and is of medium build, a lean man whose appearance draws attention for the wrong reasons. His fair skin is marked with faint discolorations where reagents have stained it. Most striking are his violet eyes, an unsettling shade in an otherwise plain, scarred face; those who knew him young say they were once brown. His black hair is pulled back in a low tail, often wrapped with cord soaked in herbal preparations. He wears a leather apron stained by a thousand experiments, and his hands carry the calluses and small burns of a man who works with dangerous substances every day.

# Dossier {#dossier}

Melrik Salvin is an alchemist of [[place-liranel|Liranel]], the timber town of the [[place-lirve|Lirve]] coast, an [[lore-elavendriclt|Élavendri]] freeman of a guilded family whose mother claimed descent from the [[lore-aelendnppl|Áelendan]] of the interior and knew the old herb-lore intimately. His father was a cloth-merchant. From his mother Melrik learned the fundamentals, not in any academy but on forest walks and in kitchen experiments.

He was seventeen when the archivists of [[affiliation-bardicolgs|the Bardic Colleges]] came to Liranel to catalog old manuscripts. Among them was [Thólmara Darel]{.name data-type="being/npc"}, a sharp-tongued scholar who marked him at once as worth teaching. Over five years she taught him script, mathematics and the deeper folklore, the true stories and not the versions [[affiliation-groveconcl|the Grove Council]] permits for public telling. She also taught him that knowledge has no morality, only consequences. When she went back to [[place-beravel|Péravel]] to the Colleges' archives, Melrik stayed in Liranel and began seeking out the plants that grow only in fae-touched groves and the minerals found near Áelendan holy places. His mother died of a wasting sickness the next winter, which neither herb-lore nor the grove-elders' singers could cure, and her death left him convinced that the old restrictions were excuses for accepting helplessness.

His alchemy owes nothing to the theory of the [[affiliation-ordoarcanis|Thordimalon]]; it comes out of the forest's lore and rejects its reverence. He studies the grovekeepers' herbalism without their care for balance, and he approaches the fae-touched places as a scavenger, not a supplicant. His violet eyes are explained in Liranel either as the price the fae took for his trespasses or as a dose he gave himself on purpose. He brews tinctures that steady a trembling hand and elixirs that clear a clouded mind, and both work. He is exact, even brilliant, and the town respects him cautiously.

Liranel is busy this winter with the wrong kind of hiring, and Melrik is in the middle of it. An Order fellow taking on guards for a moonlit night at [[place-wrghthllw|the Wrought Hollow]] has asked him for something to keep his men awake and unafraid, and the families waiting for the guides who went past the margin come to his door for something to make them sleep.

:::secret {title="Melrik's second trade"}
Melrik also sells darker wares, whispered about rather than named: substances that loosen the tongue, sharpen desire or open the mind to visions that leave the user changed. He is entirely practical about whom he sells to. Under the name [Gúlmalon Lísernde]{.name data-type="being/npc"} he sells them beyond the town. Inside the kingdom the alias keeps an unlicensed alchemist working with fae-touched materials out of sight of [[affiliation-sekran|the Arcane Inquisition]], which would take a close interest if his real name were attached. Beyond the borders, in [[place-aelwyth|Eilwith]] and [[affiliation-kingdmdnvr|Dúnavarre]], where the Order's grip is tighter still, Gúlmalon is a traveling herbalist of no fixed address, useful to nobles who want discreet remedies, scholars who want rare samples and merchants who want supply.

He will not poison a child or devastate a sacred grove, not from morality but because such acts invite retaliation from powers greater than his own. Everything else is negotiable.

**Hook: Gúlmalon's creditors.** A shipment carried by his go-between [Hálmesar]{.name data-type="being/npc"} has been seized by Dúnavarren customs, and the bottles bear Gúlmalon's careful labels. The Order has noticed, and discreet inquiries have begun in Liranel. Melrik can drop the name, call in a favor to stop the inquiry, or see that the evidence disappears before the Order examines it.
:::

## Psyche

### Personality

Melrik has a brilliant analytical mind that holds herb-lore and mathematical precision in the same thought, and he sees the world as a system of pressures and incentives. He feels little for anyone. Others are variables in his calculations, useful or not. He is not a villain from a ballad but a quieter thing: a man who has decided that the old rules were written by people more cautious than himself, and who is probably right about some of it.

### Motivation

He wants knowledge, the rarer the better, and the craft to use it. He wants to stay useful to every power in the town and owned by none of them.

### Strengths

His work is precise and does exactly what he says it will. He keeps his word to a patron because reputation is capital, he sees through flattery, and he is usually three steps ahead of anyone trying to use him.

### Weaknesses

His certainty that he is cleverer than the grove-elders, the bards and the Wardens is his greatest vulnerability, and his indifference to people leaves him with no one who would stand by him.

## Social

In Liranel Melrik is a respected and slightly suspect craftsman, tolerated for what he knows. The Grove Council watches him, and its elders have debated whether his trespasses in holy groves warrant action; he has not crossed into open defiance of them, and that matters in the kingdom's careful balance. The Bardic Circle knows of him through Thólmara and finds him a useful informant on what the town really thinks. He offers alchemy that works by direct effect, rooted in the old traditions and unbound by their reverence, which makes him indispensable to some and an irritant to the grovekeepers, the bards and the Order alike.

### Companions

Thólmara Darel, now in her seventies and an Archivist of the Bardic Colleges at Péravel, his teacher and the nearest thing he has to a friend. They write to each other; she sends rare texts and he sends specimens.

### Patrons

[[being-auliranekard|Lady Áulirane]] of [[place-cardeth|Kardeth]], a young noblewoman of Áelendan descent who comes to him for discreet remedies. She is intelligent, ambitious and as practical as he is, and he does not know whether she is testing him for someone else.

### Enemies

[Semroth Ílthernde]{.name data-type="being/npc"}, a grove-elder of the Grove Council of about his own age, who has made it his business to watch Melrik, presses his suppliers and discourages his patrons. They have never spoken.

The [[affiliation-alndnwrdns|Áelendan Wardens]], who have caught him twice in holy groves and let him talk his way out both times. [Thórnasa]{.name data-type="being/npc"}, an elder Warden, has begun leaving carved warnings in places he frequents.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Melrik is a Freeman of the crown.

## Plot Hooks

The Thin Grove
: Melrik has found a plant he has sought for years, growing where the fae veil runs thin, and the Grove Council has forbidden any harvest there. Thórnasa has set a watch on the grove, and Melrik hires a party to find him a third way that avoids both the Wardens and a fight.

The Order's Night
: The Order fellow bound for the Wrought Hollow wants a draught to keep his hired guards awake and unafraid through a moonlit night, and he pays in University silver. The crown's guide [[being-lenirasrdln|Lénira Sérdalnde]] has told the guards not to go, and Melrik wants to know what the fellow means to catch with nets before he sells him anything.

The Archivist's Bargain
: Thólmara writes that the Bardic Circle needs to know what is happening past the margin near Liranel, where guides go in and do not come out, and she cannot ask openly. She asks Melrik, and Melrik, who trusts no one's intentions, asks a party.

Violet Eyes
: A stranger with violet eyes has come to Liranel asking for Melrik, saying there are others like him. Melrik does not know whether he is being offered an alliance or warned.
