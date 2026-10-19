---
shortcode: tvnrthr
name: {full: Tavonei Reithuri, given: Tavonei, clan: Reithuri, aliases: []}
type: being
subType: character
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Caravan Guard
  lore: []
  culture: kaliharanclt
  homes: [vashuran]
  affiliations: {kalihara: {rank: 2}, lusinia: {rank: 1}}
  gender: male
  species: humanflk
  born: "680.100"
  height: 6' 2"
  weight: 189 lbs
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: dark_brown
    complexion: [scarred]
    extra_features: [a scar across the bridge of the nose]
  packFolder: heroesandknaveskalihara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-glas, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-weapongear-brdswd}
    - {model: sohl-sohl-weapongear-knsh}
    - {model: sohl-sohl-armorgear-mhbk}
    - {model: sohl-sohl-armorgear-mleg}
    - {model: sohl-sohl-armorgear-mmtn}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-miscgear-medsupil, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-stdrtns, system: {quantity: 3}}
    - {model: sohl-sohl-containergear-wtrskin, system: {quantity: 2}}
    - {model: sohl-sohl-miscgear-tndrbx}
    - name: Whetstone
      type: miscgear
      system: {shortcode: whetstone, weight: 1, value: 100, durability: 3}
    - name: Physician's roll (bandages, herbs, salves)
      type: miscgear
      system: {shortcode: physiciansroll, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-containergear-backpk}
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

![[tvnrthr|Tavonei Reithuri]]{float=top-left}

Tavonei stands 6'2" tall with a heavy build. He has dark skin, black hair, and dark brown eyes. His features include an angular face, a sharp jawline, full lips, dark brows, and angular cheeks. He has a scar across the bridge of his nose.

# Dossier {#dossier}

## Background

### Early Years and Training

Tavonei was born the seventh son of a cloth merchant of modest means in [[place-vashuran|Vashurán]], the port on the eastern coast of [[place-kaliharargn|Kalihara]] where the island's spice comes down to foreign hulls, and where a cargo is only as safe as the men walking beside it. His father saw early that the youngest would inherit nothing, and at twelve Tavonei was apprenticed to [Tuamanei Navoreli]{.name data-type="being/npc"}, the hardest pack-train guard on the coast. Tuamanei taught him sword and shield, and the rest of the trade with them: how to read weather off the sea and the stars, how to tell when a ridge path has been walked by strangers, how to keep mules, porters and stores in order over a week on the coast road, and how to make a decision on which twenty lives depend.

### Service and Ascendance

For twenty years Tavonei walked the coast road as a common guard and rose through the ranks. The road runs between the ports along the foot of the ridges, the only overland way the island allows a cargo to travel, and the trains on it carry what is too precious for a coaster's open deck: cut stones, pressed spice, the letters of credit the houses of [[place-ilovanu|Ilovanu]] honor among themselves. His method and his knack for smelling trouble before it came brought him to the great merchant houses, and by his thirties he was the guard the wealthiest factors asked for by name, at a price that matched his record. In fifteen years no train in his charge has lost a single bale. On the quays and in the factors' halls the record is a legend, and nobody is quite sure whether it is foresight or simple ruthlessness.

### Present Circumstances

Now forty, Tavonei faces questions he never expected. Every season more cargo goes by sea, on the fast coasters that run between the ports, and less goes by the road where he made his name. Younger guards who ride light and strike fast undercut his fees and take contracts he once had for the asking. The merchants still call him for the richest trains and the worst stretches of road, because he is the safest choice for a cargo that cannot be lost. He can change his ways, retire with the legend whole, or stake everything on the old method, certain it is right while the trade moves out from under him.

## Psyche

### Personality

Tavonei talks little; years on the road taught him that loose talk draws notice. When he speaks, he speaks with the certainty of a man who has made a thousand decisions and got them right, and he has no patience for pleasantries or politics. He sets out exactly what he expects and then does exactly what he said. The men who have walked a week beside him know a dry humor that appears on the fourth night or so, and a protectiveness toward the people in his charge that borders on obsession.

His perfectionism is his strength and his flaw. He cannot accept a failure or a change of plan, and he resents a merchant who suggests another route even when the suggestion is better, because changing a plan admits the plan was wrong. His regular employers have begun to worry about that rigidity in a man his age, and none of them has said so to his face.

### Motivation

Tavonei wants to be perfect at his work. A safe arrival is a sacred trust to him, and the thought that one failure could stain his name drives him harder every year. Under that runs a fear of becoming the old man clinging to old methods while younger guards inherit his road. He has not decided whether to prove he still belongs on it, or to stop before anyone can say he does not.

### Strengths

Dedication
: in fifteen years no train in his charge has been robbed, and he would defend the record with his life.

Knowledge of the road
: he knows every bend of the coast road, its weather, its bad seasons, and which ridge tracks a smuggler would use, and he can feel trouble hours before it arrives.

Command
: he is not charming, and his guards obey him at once anyway, because his orders have always brought them home.

Swordsmanship
: at forty he is still dangerous at close quarters, his blade work spare and heavy, worn smooth by decades of use.

Practical skill
: he can dress a wound, feed and water forty mules and porters on a short road, and keep a frightened column moving in a monsoon squall.

### Weaknesses

Resistance to change
: he distrusts every new method on principle, and that distrust will cost lives.

Overcaution
: his routes are slow, safe and expensive, which loses him merchants with goods that cannot wait.

Control
: he cannot delegate, and his constant oversight wears out his guards and breeds resentment among the younger ones.

Distance
: he keeps everyone at arm's length, and the only relationships he has are contracts.

Age
: the road tires him more than it did, and he heals more slowly.

## Social

### Patrons

[House Thavoeli]{.name data-type="affiliation/venture"}
: an Ilovanu merchant house in rare spice and cut stones, which has hired Tavonei for its three richest trains each year for over a decade. **Merchant-Prince [[being-anoriveithav|Anorivei Thavoeli]]** asks for him by name for any cargo bound to a foreign hull, and trusts no one else with goods worth a fortune.

[The Silk Caravans Consortium]{.name data-type="affiliation/venture"}
: an association of independent factors who pool their goods for the coast road. Tavonei is their first choice for the stretch between Vashurán and [[place-nalurithan|Nalurithan]], where the road runs closest under the ridges.

The Lady of [House Duravin]{.name data-type="affiliation/lineage"}
: the widow of a foreign trading family long settled in the Ilovanu quarter, who hires Tavonei whenever she travels between the ports and values his discretion as much as his sword.

### Enemies

[The Veiled Riders]{.name data-type="affiliation/criminal"}
: a smuggling ring that tries to run goods off the coast road and up the ridge tracks toward the closed interior, past [[affiliation-wardensapproaches|the Wardens]], for buyers inland who want foreign things the island does not admit. They have never taken a train of Tavonei's, and every failure has made them hate him more. They have put a price on his head and are waiting for their chance.

[Revi the Scarlet]{.name data-type="being/npc"}
: a younger, more charming guard captain who has been undercutting Tavonei's fees and taking contracts from merchants who want speed. The rivalry has turned personal, and each man sees the other as the end of his living.

### Affiliations

[[affiliation-kalihara|Kalihara]]
: Tavonei holds an islander's standing among the port [[lore-kaliharanclt|Kaliharan]] people, as a master of a trade the port depends on.

[[affiliation-lusinia|Faith of Lusinia]]
: like many port Kaliharans, Tavonei keeps the foreigners' faith he grew up beside, and he lights a lamp to [[lore-lusiniadty|Lusinia]], the World-Weaver, in the Ilovanu temple before every long road.

## Plot Hooks

The Lost Crown Shipment
: House Thavoeli hires Tavonei to take what he believes is an ordinary train down the coast road to a foreign hull waiting at Nalurithan. Halfway there he learns the bales hold the regalia of a deposed royal line from across the water, and that several parties are following the train with killing in mind. He can push on and watch his record break, or try the new methods he has always scorned.

The Apprentice's Betrayal
: Tavonei takes on a young orphan, [Vaoleni]{.name data-type="being/npc"}, as an apprentice guard, seeing in him the raw talent he once had, and over a season on the road he grows almost fatherly toward the boy. Then Vaoleni is revealed as a Veiled Riders spy, sent to learn Tavonei's routes and habits. Tavonei must hunt him down while asking himself whether his own need to control everything made the opening his enemy used.

The Seer's Warning
: A wandering seer, **Seer [[being-maithorinael|Maithori]]**, reads Tavonei's fortune and tells him his last journey is near and that it will break everything he believes about himself and his craft. He calls her a fraud and cannot forget her. When his next contract takes him somewhere his foresight fails, he begins to wonder whether fate, and not chance, is walking beside him.

The Road Inland
: A merchant consortium offers Tavonei a fortune to find a way across the island's interior, a crossing no port cargo has ever been allowed to make, through country the custodians have never opened. It would make his name for ever, or end his record and perhaps his life; and the Wardens would treat it as the Veiled Riders' crime with better paperwork. The offer forces him to decide whether he wants excellence or proof that he still matters.

The Conspiracy Within
: Tavonei notices discrepancies in the bills of lading, cargo swapped between stops and late-night meetings among his employers. Slowly he finds that someone high in the Consortium has been hiding contraband inside his guarded trains, bound for the same inland buyers the Veiled Riders serve. He must accuse powerful men without proof, protect his charges, and decide whether he owes more to the Wardens or to the merchants who made his legend.
