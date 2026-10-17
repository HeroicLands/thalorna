---
shortcode: crcdl
name: {full: Crocodile, aliases: []}
type: being
subType: creature
description: "A semi-aquatic ambush predator of warm waters, lying motionless for days before erupting into explosive violence to seize its prey."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-crocjaws, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+17
    end: 1d6+15
    dex: 1d6+7
    agl: 1d4+7
    per: 1d6+9
    aur: 1d6+8
    wil: 1d6+11
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 50}}
    - name: Lunging Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Lunging Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Strike
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            isFumble: true
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 5, fire: 7}
      weight: {base: 700, calc: "700"}
      reachBase: 0
      bodyScaleBase: 1.52
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: aquatic
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[crcdl|Crocodile]]{float=top-left}

The sandbank in the middle of the river looks like a drift of old logs, until one of the logs opens an eye. A long, ridged back lies half out of the water, olive and brown, plated like a ship's hull, with a snout lying flat before it. Beyond it the ford where the herds cross is silent and the water is perfectly still. The air smells of musk and mud.

# Dossier {#dossier}

The Crocodile is the great river reptile of the warm waters, fourteen to twenty feet long and five hundred to over two thousand pounds. It lies in the rivers, papyrus channels and marsh pools of [[place-aukhelathrgq|Au'Khelathu Region]], along the lower rivers of [[place-okharisrgn|Okharis Region]] and in the river country of the [[place-sthrnsvnhs|Southern Savannahs]]. A crocodile waits motionless for hours at a ford or a drinking place and then strikes at once. One that has taken a person comes back for another.

## Presentation

A massive reptile shaped like a hull, broad and deep in the middle and tapering toward snout and tail, covered in rows of rough scales, dark brown, gray or olive above and yellowish below. The head is triangular from above, with the nostrils and eyes set high so that the animal can breathe and see while almost submerged. The mouth opens enormously on numerous backward-pointing teeth. The tail is thick, flattened and strong, and drives the animal through the water. The short legs are set at the sides, and the animal is clumsy on land. It smells of musk.

## In the Land

Crocodiles lie in the rivers, papyrus channels and marsh pools of Au'Khelathu, along the lower reaches of the rivers of Okharis and in the eastern river country of the Southern Savannahs, among the hippopotamus pools. A crocodile holds a stretch of river for years, basking on a sandbank by day and hunting the drinking-places at dusk and in the dark. The big ones are found at the fords, where the herds cross.

## Key Behaviors

Crocodiles hold a stretch of river, several miles for a big one, and defend it against other crocodiles by display and sometimes a fight. They spend the day motionless in the water and hunt at dawn, dusk and night, taking fish, birds, small animals and the large herbivores that come to drink. A big animal eats once a month or less. A female guards the nest and the hatchlings ferociously. They recognize individual enemies and remember encounters, and a crocodile that has killed a person hunts people. They slow in cold weather, and may live over sixty years.

## What the River Peoples Do

In Au'Khelathu the crocodile is sacred to [[lore-tjelsukdty|Tjelsur]], and the river temples feed the animals that live by them. The [[lore-nyalubaclt|Nyáluba]] clan of the [Kolembozi]{.name data-type="affiliation/polity"} are the crocodile-clan, and for them the crocodile guide is an ancestral presence and not only an animal; they are the river-people and fish the whole river country. Villages place their water-points and wash-places at the upstream end of a bend and fence them with stakes. The hunters of the [[affiliation-zeghetnelgu|Zeghet'Nelgu]] take a crocodile in open water as proof of their rank. A fisherman looks for the track on the bank before he wades.

## Signs

- A long, ridged shape on a sandbank that slides into the water when approached.
- A slide of flattened mud down a river bank, and a trail of claw-marks beside it.
- Two eyes and a nose on the water that do not move, in the pool by a ford.
- A herd of antelope drinking in a line, with a dozen spaced yards between each animal.
- A dog or a goat gone from the water's edge, with a swirl and no shout.

## Combat Strategy

A crocodile's preferred hunting strategy is to identify prey approaching the water, submerge itself nearly completely, wait for the prey to enter the water, then accelerate and attack. The initial attack is a bite to the head, throat, or limb—the goal is to seize and pull the prey into the water. Once water-bound, the crocodile is far stronger: it is a stronger swimmer than most prey, can hold its breath indefinitely, and uses the medium to apply force that would be impossible on land. A seized prey is typically subjected to the famous death roll—the crocodile rotates its body rapidly around the long axis of its snout, attempting to dismember the prey through torque and shearing force. Multiple crocodiles feeding on a carcass will sometimes coordinate, with one individual holding the prey while others tear chunks away. If a crocodile is forced onto land or forced into combat, it is less effective but still dangerous—the bite force is extraordinary, and the tail is a devastating bludgeon.

## Attack Methods

### Lunging Bite

The crocodile accelerates explosively and attempts to seize the target in its enormous jaws. The jaw can open wide enough to engulf prey the size of humans. The bite force is extraordinary—sufficient to crush bone and sever arteries. The teeth, while not cutting-sharp, provide grip that makes escape nearly impossible. Once seized, the target is pulled toward the water or down beneath the surface.

### Death Roll

Once the crocodile has seized prey in its jaws, it may perform the death roll: rotating its body around the long axis of its snout to create torque forces that tear prey apart. Multiple rotations can dismember prey, separate heads from bodies, or rupture internal organs. A human caught in a death roll has minutes before the injuries become fatal.

### Tail Strike

Using the powerful caudal fin, the crocodile can strike opponents with tremendous force, capable of breaking bones, dislocating joints, or simply knocking a man down. The tail is used both in water and on land, and its reach exceeds the crocodile's bite range.

### Crushing Jaw Pressure

Once a prey is seized, the crocodile may simply maintain bite pressure, crushing bone and wearing down prey through sheer force. This technique is used against particularly large or resistant prey where the death roll may be inefficient.

## Special Abilities

### Ambush Predator and Patience

A crocodile can remain completely motionless for days without significant metabolic cost. This patience allows it to position itself perfectly and attack from close range. The camouflage is extraordinarily effective—a submerged crocodile is virtually impossible to detect until it moves. Once an attack is initiated, the speed is shocking: acceleration from motionless to full speed in the space of heartbeats.

### Aquatic Dominance and Breath-holding

In water, the crocodile is an apex predator with no equal. It can outswim most creatures, hold its breath indefinitely, see clearly in darkness, and apply force multiplied by leverage that would be impossible on land. A human in water with a crocodile is at catastrophic disadvantage unless they exit the water immediately.

### Crushing Bite Force and Jaw Engineering

The crocodile's bite force exceeds that of any land mammal by a significant margin. The jaw design allows it to bite with force comparable to the impact force of a falling boulder. The jaw cannot be forced open once closed by external force, making escape from a crocodile bite very difficult.

### Regenerating Teeth and Scalp Armor

If a crocodile loses teeth, replacement teeth move forward to take their place—the replacement cycle is continuous, allowing unlimited hunting despite dental damage. The scaly armor provides substantial resistance to cutting and piercing attacks, though the softer areas around the eyes and mouth are vulnerable.

## Attributes

Strength
: 18-23 (1d6+17)

Endurance
: 16-21 (1d6+15)

Dexterity
: 8-13 (1d6+7)

Agility
: 8-11 (1d4+7)

Perception
: 10-15 (1d6+9)

Aura
: 9-14 (1d6+8)

Will
: 12-17 (1d6+11)

Reasoning
: 6-9 (1d4+5)

Creativity
: 4-7 (1d4+3)
