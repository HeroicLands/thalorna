---
shortcode: tantsouelp
name: {full: Tantsou Elephant, aliases: []}
type: being
subType: creature
description: "A massive, highly intelligent tusked megafauna often domesticated for labor and war, yet formidable and deadly in the wild."
tags: [animal]
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
    str: 1d6+53
    end: 1d6+45
    agl: 1d4+5
    per: 1d6+15
    snt: 1d4+5
    aur: 1d4+4
    wil: 1d6+13
    rea: 1d4+6
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 56}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 90}}
    - name: Tusk
      type: skill
      system:
        shortcode: tusk
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tusk
          name: Tusk
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 23, aspect: piercing}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 2}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 44
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 24, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 20, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 7}
          - {name: Trunk, shortcode: trunkzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 6}
          - {name: Torso, shortcode: torsozone, probWeight: 18}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor]
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
            probWeight: 6
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 1
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Trunk
            shortcode: trunkloc
            bodyPartCode: trunkpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 18, edged: 17, piercing: 15, fire: 17}
      weight: {base: 10000, calc: "10000"}
      reachBase: 0
      bodyScaleBase: 2.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 90
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[tantsouelp|Tantsou Elephant]]{float=top-left}

The road of fitted stone is wide enough for two carts, and the elephant takes up all of it. It comes on at an easy walk with a load of timber chained across its back, gray and domed of head, its ears small and close to its skull, its trunk swinging and curling as it walks. A wooden tablet on a cord hangs from the harness at its shoulder, painted with a number. The keeper walking at its head in undyed hemp touches its leg with a cane and says a word, and the animal stops dead and stands aside for you, and turns one large, steady eye on you as you pass.

# Dossier {#dossier}

The Tantsou elephant is the elephant of the far east of [[place-ankrscntnnt|Ankaris]]: eight to ten feet at the shoulder, five tons and more, domed of head and small of ear, with short tusks in the bulls and none to speak of in the cows. It is the heavy laborer of the [[affiliation-tantsouempr|Empire of Tantsou]]—hauling timber and stone, turning great water-wheels, carrying the baggage of armies and the litters of the great—and wild herds still live in the forests and grasslands of the river basins and the hills beyond the terraces. A tame one is the most valuable animal a household can own; a wild one, or a tame one gone wrong, is the most dangerous animal in the empire's settled country. It is clever enough to learn many dozens of words and to remember a face for its whole life.

The empire's bureaus have classed it, as they class everything. To the [[lore-tanchei|Tanchéi]] it is a natural kind, a life-group of the sorted world, and every tame elephant in Tantsou is entered in a register with its number, its keeper's lineage and its work.

## Presentation

A huge gray animal, smaller and more compact than the elephants of [[place-vedyarargn|Vedyara]] and the south, with a high domed forehead in two rounded lobes, small ears that lie close to the head, and a back that rises to its highest point between the shoulders. The skin is thick, gray and wrinkled, often freckled pale at the ears and the base of the trunk with age. Bulls carry tusks, short and thick; cows carry little stubs or none. The trunk ends in a single fingerlike tip, strong enough to lift a log and fine enough to pick up a coin. The legs are thick columns. The eyes are larger and more expressive than its size suggests.

## In the Land

Wild herds range the forests and grasslands of the [[place-tantsouregin|Tantsou]] heartland's river basins where the terraces have not reached, and the wooded hills toward the frontiers, moving between the river margins in the dry season and the high grass in the wet. They raid the terraced fields at the forest's edge, and a herd that has learned the taste of rice comes back. Tame elephants are everywhere there is heavy work: in the timber-yards along the rivers, in the quarries, in the stables of the Warlords, and in the baggage-trains of the armies that garrison the western passes.

## Key Behaviors

A wild herd is a family of cows and calves led by an old cow, and it lives by her memory of water, food and danger; bulls go alone or in small groups. Elephants are close to one another, mourn their dead and stand over the bones of their kin. A bull in musth is violent and unpredictable for weeks, and even a well-trained tame bull is chained in its season. Tame elephants learn complex work, follow spoken commands, and form bonds with their keepers that last their lives; an elephant that is mistreated remembers the man who did it, and some have killed him years later.

## What the Tantsou Do

Elephant-keeping is a hereditary trade in Tantsou, passed from father to son within a lineage, and a keeper raises a young elephant from the age of four or five and works it until one of them dies. The animals belong to whoever holds their register: a Warlord, a temple, a ministry, a great household. A wild herd raiding the terraces is reported to the district office, and the office sends men to drive it off with drums and fire, or to take its young for the stables; a farmer who kills a wild elephant without leave has destroyed something the register might have claimed. In war the [[lore-wohou|Wohou]] use elephants to carry, to haul siege engines and to break gates, and some lords put armored archers on their backs. Elephant ivory is entered in the same ledgers as gold.

## Signs

- Stripped bamboo and broken saplings along a forest track, chewed and dropped.
- A terraced rice-field trampled flat in one night, with the bank broken through.
- Round prints as wide as a platter in the mud of a river crossing.
- A low rumbling from the forest at dusk that the buffalo stop to listen to.
- A tame elephant in a timber-yard that will not let one particular man near it.

## Combat Strategy

A wild elephant charges to drive off a threat and seldom to kill it; it comes with ears spread and trunk raised, trumpeting, and very often stops short. When it does not stop, it knocks a man down with its weight, kneels on him or kicks him, and hooks or gores him with a tusk. The trunk snatches a man up and throws him. A herd defending its calves charges together and does not stop. A tame war-elephant goes where its keeper sends it, through a gate or a shield-line, and a war-elephant whose keeper has been killed turns and runs through its own army. Fire, drums and the death of its keeper are what break one.

## Attack Methods

### Tusk

A bull drives a tusk into a man on the ground or held in its trunk. The tusks are short and thick and the wound is crushing as much as piercing.

### Kick

The feet stamp down on what the charge has knocked over, and the elephant kneels on a man and crushes him.

## Special Abilities

### Charging Impact

Five tons at a run go through a palisade, a gate or a line of men, and the elephant tramples what is behind it.

### Trunk Grab and Throw

The trunk seizes a man by the arm or the body, lifts him, and throws him or holds him for the tusk and the foot.

### Intelligent Manipulation

The trunk unties a knot, lifts a bar, draws a pin and opens a gate. A clever elephant has opened a stable that was meant to hold it.

### Herd Coordination

A herd calls by rumbles too low for a man to hear well, gathers its calves to the middle, and turns its cows outward together.

## Attributes

- **Strength:** 54-59 (1d6+53)

- **Endurance:** 46-51 (1d6+45)

- **Agility:** 6-9 (1d4+5)

- **Perception:** 16-21 (1d6+15)

- **Scent:** 6-9 (1d4+5)

- **Aura:** 5-8 (1d4+4)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 7-10 (1d4+6)
