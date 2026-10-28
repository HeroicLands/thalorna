---
shortcode: vdyrnelphnt
name: {full: Vedyaran Elephant}
type: being
subType: creature
description: "The largest land animal in Vedyara Region — war-beast of the kingdoms' hosts, temple mount, and the measure every other megafauna in the region is judged against."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  lore: []
  homes: []
  affiliations: {}
  gender: null
  species: null
  age: null
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+45
    end: 1d6+38
    agl: 1d4+4
    per: 1d6+13
    snt: 1d4+4
    aur: 1d4+5
    wil: 1d6+15
    rea: 1d4+5
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 41}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 34}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 10, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 18, aspect: piercing}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 2}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 40
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 20, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 16, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trunk-Grasp
      type: skill
      system:
        shortcode: trnkgrsp
        subType: combattechnique
        masteryLevelBase: 46
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: trnkgrsp
          name: Trunk-Grasp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 10, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: blunt}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, entangle: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 6}
          - {name: Trunk, shortcode: trunkzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 5}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 5}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Trunk
            shortcode: trunkpart
            bodyZoneCode: trunkzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 9
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
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 5
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Trunk
            shortcode: trunkloc
            bodyPartCode: trunkpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 9
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 8
            protectionBase: {blunt: 15, edged: 14, piercing: 12, fire: 14}
      weight: {base: 7200, calc: "7200"}
      reachBase: 0
      bodyScaleBase: 2.15
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 75
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The ground answers its footfall before you see it. Then it comes out of the dust of the road: a gray-brown bulk taller than a cart with its load, the hide hanging in loose folds at the knees and throat, the great ears working slowly against the heat, and the trunk never still, testing the wind, the ground and the space around you with a delicacy that has nothing to do with the size of the animal behind it. Two pale tusks curve out under the trunk. There is paint on its brow, ochre and white, and a man sitting easy behind its ears with a short iron hook laid across his knee. Its small eyes, deep under a heavy brow, find you and stay on you as it passes.

# Dossier {#dossier}

The Vedyaran elephant is the largest animal that walks in [[place-vedyarargn|Vedyara]]: a bull stands nine to eleven feet at the shoulder and weighs three and a half tons and more, a cow somewhat less, and the armored [[being-vdyrnrhn|Vedyaran rhinoceros]] that shares its floodplains is the only other animal in the country that gives it no ground. Wild herds range the forest margins, the tall grass and the river floodplains from the western march to [[place-estrnreach|the Eastern Reach]]. Tamed, the elephant is Vedyara's heaviest labor, its temple mount, its royal show and, dressed for war, the beast that decides a battle between two hosts that can both afford it. The word in [[skill-vedyarlng|Vedyari Language]] is _gajta_, and the country knows what the word costs: the slope of [[place-gajastal|Gajastal]], where two hosts broke among their own elephants, is still a field no living elephant will cross.

## Presentation

A vast body on four columnar legs, in thick, deeply wrinkled, sparsely haired skin, gray-brown and usually dusted with the red or brown earth the animal has thrown over itself. The skull is domed, the ears broad and mobile and flared wide when the animal is roused. The trunk is the striking thing: a muscular fusion of nose and lip that lifts a felled tree or picks a single blade of grass, and ends in a fingerlike tip that unties a knot. Bulls carry tusks that curve pale and heavy out of the upper jaw; cows carry short tusks or none. A temple elephant wears paint on its brow and trunk, a war-elephant scars from the goad and from other things on its flanks, and a wild one wears the mud of its last wallow.

## In the Land

Wild herds live where there is grass, browse and water within a day's walk of each other: the margins of the great forests, the elephant-grass of the floodplains of [[place-mahanodi|the Mahanodi]] and the other great rivers, and the foothills below [[place-sthrnwall|the Southern Wall]]. They walk long seasonal rounds between the dry-season rivers and the monsoon grazing, by routes the old cows remember. Every kingdom that can pay for them keeps a captive stock besides, in stables beside the royal seat, and the temples keep their own. The war-elephants of [[lore-hundredcrwn|the Hundred Crowns]] broke at [[lore-fieldelephnt|the Field of Elephants]], and the villages along Gajastal still build elephant skulls and long bones into their walls and well-heads.

## Key Behaviors

A wild herd is a family of cows and their young, led by the oldest cow, whose memory of water, forage and danger the whole herd lives by; a herd that has lost its matriarch to capture or a hunter fares worse in a hard season. Bulls go alone or in loose bachelor groups. A bull in musth, a season of surging aggression marked by a dark weeping from the temples, attacks other bulls, villages and men with no provocation, and drovers read the signs from a distance and go a long way round. A herd with calves meets a threat with the cows in a line in front of the young, and they charge one after another. Elephants mourn their dead and stand over them, and a herd passing old bones stops to touch them with the trunk.

## What the Kingdoms Do

A captive elephant answers to its mahout, the handler who has raised or trained it for years, and to almost nobody else. He directs it with voice, knee and the [[weapongear-elphnthk|elephant-hook]], a short iron spike and hook that guides an animal no man could compel by force; a kingdom's stable of war-elephants is only as reliable as the bond between each beast and the one or two men it will obey. A war-elephant goes into battle with armor on its head and flanks and archers on its back, and an army that meets one plans for it: caltrops, fire, drums and trumpets to frighten it, and men with long spears to go for the mahout first. An elephant that has lost its mahout, or been given a new one badly, is as dangerous as a wild bull, and Gajastal is the proof: both hosts broke there when their own elephants turned. Ivory goes through the warehouses of [[affiliation-mrchntclctvvdyr|the Merchant Collective of Vedyara]] to every court in the country, and a hunter who takes a wild bull for it in a kingdom that claims the herds answers to that kingdom.

## Signs

- Trees stripped of bark and branches to the height of a house, and saplings pushed over flat.
- Round tracks as wide as a cart wheel, with water standing in them after rain.
- Heaps of coarse, fibrous dung the size of a man's head along a trail.
- A deep rumbling at dusk, felt more than heard, from the tall grass.
- Village fields trampled flat overnight, with the banana trees gone.

## Combat Strategy

A wild elephant would sooner leave than fight, and it fights when it is cornered, when it is protecting calves, or when it is in musth. Then it comes on with its mass: a charge meant to knock down and trample, with the ears spread and the trunk curled up out of harm's way. A man on the ground is kicked and knelt on, then hooked with a tusk and tossed or gored. The trunk seizes a man, a limb or a spear and throws it or holds it for the tusks. A trained war-elephant presses an attack its mahout directs it to, against men it would otherwise avoid, and that is the whole reason a king pays for it. Fire, noise and the death of its mahout break it, and a broken elephant runs through whatever is behind it, friend or enemy.

## Attack Methods

### Tusk

A bull drives a tusk into a man on the ground or held in its trunk, with the weight of its body behind it. The wound is as much crushing as piercing.

### Kick

The forefeet stamp down on whatever the charge has knocked over, and the elephant kneels on a man to crush him.

### Trunk-Grasp

The trunk seizes a limb, a weapon or a whole man and lifts, throws or holds him for the tusk and the foot. The same dexterity that hands a mahout his water-skin is the elephant's most versatile weapon.

## Special Abilities

### Matriarchal Memory

A herd led by an old cow finds water and forage in a drought that would kill a herd led by a young one, and avoids dangers that a younger leader would walk it into.

### The Mahout's Bond

A trained elephant obeys the handler it has bonded with over years. A stranger's command, however correctly given, is as likely to be ignored as obeyed.

### Sheer Mass

A charging elephant's weight is all but unstoppable by anything short of a wall or another elephant. It goes through a palisade, a shield-line or a house.

## Attributes

Strength
: 46-51 (1d6+45)

Endurance
: 39-44 (1d6+38)

Agility
: 5-8 (1d4+4)

Perception
: 14-19 (1d6+13)

Scent
: 5-8 (1d4+4)

Aura
: 6-9 (1d4+5)

Will
: 16-21 (1d6+15)

Reasoning
: 6-9 (1d4+5)

Creativity
: 6-9 (1d4+5)
