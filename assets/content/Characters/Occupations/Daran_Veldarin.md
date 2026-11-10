---
shortcode: dharnvldrn
name: {full: Daran Véldarin}
type: being
subType: npc
description: "The captain of the crown's garrison at Elanmere, a capable officer of a minor noble house who has risen as far as his manners allow."
tags: []
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Garrison Captain
  lore: []
  culture: elavendriclt
  homes: [elanmere]
  affiliations: {kngdmlvndr: {rank: 5}, hseveldarin: {rank: 2, office: Heir of Véldarin}}
  gender: male
  species: humanflk
  born: 679.108
  height: 6' 3"
  weight: 194 lbs
  frame: heavy
  appearance:
    eye_color: grey
    hair_color: auburn
    skin_color: pale
    complexion: [smooth]
    extra_features: [a nose broken and set at least once]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 18}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 75}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-mysticalability-summ, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 14}}
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

Daran Véldarin is a 40-year-old man who stands 6'3" tall and is of heavy build, the kind of frame earned through years of drill and hard riding rather than careful diet. He has a diamond face with defined cheekbones, a lined forehead and a rounded jaw that leads to a blunt chin. His gray eyes sit beneath heavy brows, and he has the steady, appraising stare of a man used to sizing people up quickly. A nose broken and set at least once and firm, unyielding lips complete his features. He has pale skin with a smooth complexion, and his auburn hair is cropped short in the soldier's fashion. He wears a mail shirt under a surcoat bearing the arms of the [[affiliation-kngdmlvndr|Crown of Élavendre]] as a matter of course, and carries his warhammer as other men carry a walking stick.

# Dossier {#dossier}

Daran Véldarin is the captain of the crown's garrison at [[place-elanmere|Elanmere]], the force that answers for order in the district around the lake town, patrols the forest margin and the lake road, and investigates the crimes and heresies of a wide rural country. He was born to the [[affiliation-hseveldarin|House of Véldarin]], a minor noble family of the [[lore-elavendriclt|Élavendri]] with a long tradition of service on the kingdom's borders. His father commanded a garrison; his grandfather died fighting border raiders. Daran took to the sword with an aptitude that surprised no one. He was strong, aggressive and possessed of the kind of presence that makes other men fall in line without quite knowing why.

He went to the border garrisons at sixteen and earned a commission by twenty. Stationed at a frontier post, he saw raiders and bandits who respected nothing but force, and he watched [[affiliation-bardicolgs|the Bardic Circle]] send envoys to men who understood only the blade and [[affiliation-groveconcl|the Grove Council]] debate while villages burned. The Élavendri way of wisdom and contemplation struck him not as noble but as a kind of cowardice, and he has never entirely hidden that he thinks so.

Over the next twenty years he rose through the garrison at Elanmere and earned his captaincy on merit. He is a strong fighter and a decisive commander, his forty men respect him because he leads from the front, and his men catch more bandits and recover more stolen goods than any comparable company in the kingdom. None of this is pretense. Daran is, by any honest measure, a capable officer.

He has also reached his ceiling. Officers who wish to rise beyond a captaincy must show they can manage the political landscape as well as the physical one, and Daran manages it badly. He attends the functions he is expected to attend and says the correct things, mostly in the correct order, but the courtesies sit on him like borrowed clothing. He has been reprimanded twice: once for a questioning that left a suspect unable to stand at his own trial, and once for a curt exchange with a Bardic Circle envoy that crossed from blunt into discourteous. His record saved him both times. His superiors value what he does and have passed him over twice for anything more, and he tells himself it does not matter.

The district is uneasy this year. The grovekeeper [[being-lanthevileha|Lánthevile Halren]] has been mapping burned shrines and scorched clearings along the lake road, and the garrison has found nothing behind them. Three years ago Lord [[being-kenrelkardet|Kenrel Kardeth]] was killed on the road into the town, and Daran's report named it a bandit raid from beyond the border. Lord Kenrel's cousin has begun asking how the bandits knew which rider to take.

:::secret {title="Captain Véldarin's faith"}
Daran is a priest of [[affiliation-blackflame|the Black Flame]], a Scorchmaster, and the brand of the faith is scarred into his skin above his heart under the mail. A sellsword captain passing through his frontier post spoke of the faith around a campfire: that mercy without strength is surrender, that the world belongs to those willing to seize it, that fire does not ask permission to burn. Within a year Daran had gone beyond the kingdom on leave, taken the brand and been ordained. He returned to his post and served well. That was the point.

He uses his captaincy to shield a congregation of a dozen hard followers, ex-soldiers, mercenaries and enforcers of the frontier, with a wider circle of sympathizers who give information, shelter and alibis. Several are in his own company. They hold rites of fire and dominance in the deep forest, and they have more than once left bodies behind. When the Grove Council or the Bardic Circle reports Black Flame activity, it is the garrison that investigates, and Captain Véldarin who leads the investigation. He is very good at not finding anything. Testimony is garbled in his reports, charred circles and branded corpses are put down to bandits, wildfires or wolves, and when a follower does something too blatant to bury, Daran finds a scapegoat, a drifter or a madman, and delivers him to justice with great ceremony.

Under the name [Dórkima]{.name data-type="being/npc"} he leads the rites himself, with the same warhammer and the same parade-ground voice. His followers are emboldened by him. He answers to a Flame-Warden in a neighboring realm whose cell reaches across the region, who counts a Black Flame captain commanding the force that hunts the Black Flame an asset beyond price. Daran wants the faith strong enough in Élavendre that the authorities cannot afford to move against it.

He arranged Lord Kenrel's death at the request of [[being-glyencrdth|Lyenna Kardeth]], who heads House Kardeth now, and closed the case himself.

He controls the patrol routes and which reports reach the authorities. His conspicuous lack of refinement helps conceal his second life, and he cannot see betrayal coming from someone moved by conscience.

His danger comes from below. A young lieutenant of the garrison, [Caelith]{.name data-type="being/npc"}, has begun to notice investigations that go nowhere and witnesses who change their stories after speaking privately with the captain. Lánthevile's map, laid over the garrison's patrol routes, points straight at the ground his patrols cover most.

**Hook: the honest lieutenant.** Caelith has written a private letter to a grove-elder of the Grove Council setting out the pattern of botched investigations under Daran's command. It has not been sent. Daran has learned of it through a loyal soldier, and must decide whether to destroy the letter, discredit Caelith, post him somewhere remote or silence him.

**Hook: the burned grove.** One of Daran's followers has killed a woodsman who stumbled onto a rite and left the body at the edge of a holy grove. The Grove Council demands a full investigation with an outside observer present, and a party hired as that observer walks beside the man who must make it point anywhere but at his own people.

**Hook: Lánthevile's map.** The grovekeeper has asked the captain to help her interpret her map of scorched sites. He will be looking at a map of his own operations, and a party she has brought along as witnesses will be watching his face.

**Hook: the reckoning fire.** Daran's Flame-Warden is coming to Élavendre to judge whether the region is ready for escalation. Daran must show strength and discipline while keeping the visitor from anything reckless enough to bring the crown down on all of them.
:::

## Psyche

### Personality

Daran is direct, forceful and impatient with inefficiency. He is hard, competent, demanding and respected by his troops. He pays the social graces lip service, plainly against his nature, and nobody is fooled. He has a soldier's dark humor and a commander's instinct for loyalty, he rewards good service and punishes failure harshly but not capriciously, and he lacks any sense of proportion in the use of force.

### Motivation

Daran believes that strength earns authority and that authority must be exercised or it means nothing. He wants a kingdom that fights for what it has instead of trusting the old ways to protect it, and he despises the endless deliberation of the courts and councils.

### Strengths

Daran is a dangerous fighter, heavy, skilled with his warhammer and hardened by years on the frontier. His command is extraordinary, he knows the country around Elanmere intimately, and he organizes the garrison’s patrols.

### Weaknesses

He cannot work outside his element: anything that needs political judgment or social grace exposes the gap between what he is and what the kingdom expects of its officers. His contempt for the Élavendri way blinds him to its strengths, and his low empathy makes him a poor judge of loyalty.

## Social

Among the nobility Daran is respected for his competence and not sought out for his company. The stories of the suspect who could not stand and the curt exchange with the envoy are known. The Grove Council deals with him cordially and without warmth, and the Bardic Circle is largely indifferent to him. His soldiers are fiercely loyal to a captain who shares every hardship of a thankless post.

### Companions

The soldiers of his company, several of whom have served with him for a decade.

### Patrons

The [[affiliation-hseveldarin|House of Véldarin]]'s military connections keep his commission sound, and his family's name still shields him from the worst of his reputation, though his father, [[being-halmesarveld|Hálmesar]], retired and deeply traditional, has made it clear that the family's patience has limits.

### Enemies

Lánthevile Halren, who does not trust the garrison's explanations of the burned shrines and has the patience to go on asking.

### Affiliations

- **[[affiliation-kngdmlvndr|Kingdom of Élavendre]]**: Daran is of a Noble house and holds the crown's captaincy at Elanmere.
- **[[affiliation-hseveldarin|House of Véldarin]]**: He is Of the Line and holds the office of Heir of Véldarin.

## Plot Hooks

A Guard for the Fair
: Lord [[being-dalrenmorlin|Dalren Mórlineth]] has taken rooms ahead of the autumn fair, sleeps in a different room each night and says someone has been hired to kill him. He has asked the garrison for a guard, and Captain Véldarin has offered two of his own men and a party of outsiders, if the party will report to him.

The Sellsword Company
: A mercenary band passing through the district wears a sigil the Grove Council takes for the Black Flame's, bold as brass in the borderlands. The Council expects Captain Véldarin to arrest them, and he asks a party to bring them in quietly.
