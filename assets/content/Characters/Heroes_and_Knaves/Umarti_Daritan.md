---
shortcode: umrtdrtn
name: {full: Umarti Daritan}
type: being
subType: npc
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior, skirmisher]
  occupation: Company Captain
  lore: []
  culture: vedyariclt
  homes: [ashvapada]
  affiliations: {bhumipal: {rank: 2}, vrnkpnthn: {rank: 1}}
  gender: female
  species: humanflk
  born: 689.301
  height: 5' 5"
  weight: 128 lbs
  frame: light
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: brown
    complexion: [scarred]
    hair_style: braided
    extra_features:
      - A bowstring callus across the first three fingers of the right hand
      - A pale scar along the left forearm from a lance-head
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-fltch, system: {masteryLevelBase: 35}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 25}}
    - {model: weapongear-swfthndbw}
    - {model: sohl-sohl-projectilegear-arwstd}
    - {model: sohl-sohl-containergear-quiverlgsh}
    - {model: weapongear-shkhlynswd}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-mshirt}
    - {model: sohl-sohl-armorgear-ltvest}
    - {model: sohl-sohl-armorgear-ltbrch}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-ltcap}
    - {model: sohl-sohl-armorgear-ltcloak}
    - {model: sohl-sohl-miscgear-saddlewar}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 3}}
    - {model: sohl-sohl-miscgear-litebdrl}
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

Umarti is small, light and quick, 5'5" and spare, with brown skin, a black braid cut short at the shoulder and dark eyes that do not stay on one thing for long. The first three fingers of her right hand carry a bowstring's callus, and a pale scar runs along her left forearm where a lance-head opened it. She rides in a mail shirt under a leather vest, a leather cap and a cloak dyed the color of her company's gateposts, with a [[weapongear-swfthndbw|Swift Hand Horse-Bow]] cased at her knee and a Shikhalayan sword she rarely draws.

# Dossier {#dossier}

## The Groom's Daughter

Umarti was born at [[place-ashvatir|Ashvatir]], the horse village above [[place-bowfort|the Bow-Fort]], where [[place-swifthand|the Academy of the Swift Hand]] keeps its mounts. Her wrist carries the sign of the **Karmija**, and her father was a groom in the academy's stables. The Swift Hand teaches the mounted bow, and it provides no horses; a student must bring one, and the rule keeps its intake the smallest and best-born of the four halls whatever the janpoda's rules about station say.

She brought one. It was a culled mare her father had been ordered to sell, which he did not sell, and she rode it to the academy's gate at fifteen and asked for the first question the Swift Hand asks an aspirant, which is about the horse. The masters admitted her. Her graduation gave her what [[affiliation-dnrktjnpd|the Janpoda of the Bow-Fort]]'s academies give every graduate whatever their birth, the right to bear arms and to be answered for it, and she left the janpoda at twenty with the mare, a bow and a contract with a company on the desert frontier.

## The Company

[[affiliation-bhumipal|Bhumipal]] keeps no standing host. It keeps five companies of horse and foot under captains who contract by the season, paid out of the escort money, and Umarti has commanded one of them for four years. Her company is mixed: Vedyari of the march, Dunhari riders from both sides of the sand, two Swift Hand graduates she recruited herself, and a cook from [[place-sandyapur|Sandyapur]] whose wrist nobody has asked to see. It winters at [[place-ludrapur|Ludrapur]] behind its own painted gateposts and rides the second stage of the escort out of [[place-ashvapada|Ashvapada]].

A caravan pays at Ashvapada for the run west to the wells of [[place-marukupa|Marukupa]], and the captain who takes the money is answerable for the stage. Umarti takes it. Her stage passes [[place-lantustal|the Banner Ground]], the cursed field the road bends round and the companies chain off at dusk, and her company does not camp short of the chain or past it after dark.

Like every march-captain she carries her own copy of the clauses of the treaty with [[affiliation-kngdmmrdd|the Kingdom of Amradad]] that she is expected to enforce. She has read them more closely than most. The treaty governs the movement of pilgrim caravans and the treatment of merchants arrested for trade violations, and it binds the Kingdom and not the tribes.

## Arrears

The captains of the hired companies sit on the [Martial Council]{.name data-type="affiliation/governmental"} with the chieftains who hold the road's forts, and it meets before each caravan season and after it. Umarti sits on it with a Karmija's wrist among men who hold forts, wells and a hundred horse each by descent. On the road nobody asks about her wrist. In the council hall the fort-holders do not ask either, and they do not need to.

Her company has not been paid in full for two seasons. The crown's escort money has been short, the grazing beyond Marukupa failed in the spring, and a lean season on the sand means fewer caravans and more raiders. A company that is paid keeps the road. A company that is not paid keeps the road anyway and collects what it is owed from the traffic, and the difference between that and banditry is a season's arrears. Her riders know the arithmetic as well as she does.

She wants her company paid before the lean season comes, so that it never has to collect its arrears from the road. She has asked the council twice and been answered twice that the Maharava's treasury will pay after the season's escort money is counted. She does not believe it, and she has begun looking for the money elsewhere.

## Psyche

### Personality

Umarti is impatient, funny and fiercely loyal to the people under her. She does not drink before a stage and does not let her riders do it either. She gives orders short and explains them afterward, when there is time, and she remembers the name of every horse in the company.

She is careful never to remind anyone that she is Karmija, and she is quick to notice when someone else does.

### Motivation

She wants her company paid before the lean season, so that it never has to collect its arrears from the road. She has seen what a company becomes when it starts collecting, and she will not command one.

### Strengths

The Mounted Bow
: She is a Swift Hand graduate and one of the best horse-archers on the march. The tribes ride better than anybody the academy trains, and the academy says so; she is closer to them than most.

Command
: She keeps a mixed company together and in the saddle through a bad season, and her riders follow her past the chain at dusk when she asks.

The Stage
: She knows every well, gully and cairn between Ashvapada and Marukupa, and where a raid would come from.

### Weaknesses

Station
: The fort-holders on the council will not let her forget her birth, and she has no fort, no well and no descent to answer them with.

Pride
: She will not ask the Collective for credit and will not take a sheikh's money. She has very few other places to go.

Her Riders First
: She will do almost anything to keep her company together, and her riders know it.

## Social

### Patrons and Allies

[[being-svnshvrdzn|Sivanash Vardozan]]
: The Dunhari factor at Sandyapur, whose caravans her company escorts and who has more than once advanced her arrears against his own account.

The masters of the Swift Hand
: Who admitted a groom's daughter and still answer her letters.

### Rivals

The chieftains of the road's forts
: Who sit beside her on the Martial Council and outrank her by birth in every room but the field.

Another captain of the five
: Whose company has begun collecting its arrears at the wells, and who has invited hers to join it.

### Affiliations

[[affiliation-bhumipal|Bhumipal]]
: Karmija by birth, bearing arms under the Danurkot academies' grant, and captain of a hired company with a seat on the Martial Council.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: She asks the dream-reader at the Ashvapada fair about her horses and about nothing else.

## Plot Hooks

The Chain at Dusk
: A caravan master insists on pressing past Lantustal's chain at dusk to make up a day, and offers to pay the arrears of the whole company if it rides with him. Umarti refuses and loses the caravan to a company that agrees. She hires the party to follow it.

The Other Company
: A sister company has started collecting its arrears from the traffic at the wells of Marukupa. The council wants it stopped without a fight between companies, and sends Umarti, who wants the party beside her when she rides in.

The Treaty Copy
: A merchant from Amradad is arrested at Ashvapada for a trade violation, and the clauses Umarti carries require that he be held for the Kingdom. The Samonta who arrested him wants him held for ransom instead. The party is in the yard when the two copies of the clauses are laid side by side and found not to agree.
