---
shortcode: vulture
name: {full: Vulture, aliases: []}
type: being
subType: creature
description: "A massive soaring desert scavenger with a nine-foot wingspan, riding thermals for hours to feast wherever death visits the steppe."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-vulture, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d4+3
    end: 1d4+6
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+14
    aur: 1d4+5
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - name: Beak Strike
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: headzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 3
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 0.67
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 90
        leaguesPerWatch: 8
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
      - medium: terrestrial
        feetPerRound: 25
        leaguesPerWatch: 1
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[vulture|Vulture]]{float=top-left}

High over the desert road the sky is full of slow black wheels. A shadow with a wingspan wider than a tent crosses the sand and the wheel tightens, coil by coil, over one point on the ground. On a dead camel's ribs, a dozen birds are hunched with their wings half-spread, naked heads on ruffs of pale feathers, hissing at each other. They look up. One flaps heavily, hops, and settles again, and none of them leaves the carcass.

# Dossier {#dossier}

The Vulture is the great scavenger of the steppe and desert, fifteen to twenty-five pounds with a wingspan of seven to nine feet, found over the caravan roads and desert margins of the [[place-khzryndsrtrgn|Khazryn]] and [[place-dunharargn|Dunhara]] wherever something dies. It does not kill, finds carrion by sight from a great height and watches other vultures as well as the ground. The steppe peoples regard it with ambiguity: it is a feared omen, and a gathering over a caravan route is read as a prophecy of disaster.

## Presentation

A very large, heavy-bodied bird with broad wings and a small naked head thrust forward from a ruff of white or cream feathers. The plumage is dark brown to black across wings and body, paler beneath. The head and upper neck are bare, wrinkled pinkish-gray skin. The beak is large, hooked and strong, made for tearing hide and sinew. The feet are weaker than an eagle's, for standing on a carcass and bracing against it. The eyes are dark and sharp. On the ground the bird hops and shuffles awkwardly with its wings half open; in the air it is among the most efficient of fliers.

## In the Land

Vultures soar over the steppe, the desert margins and the caravan roads of the [[place-khzryndsrtrgn|Khazryn]] and [[place-dunharargn|Dunhara]], wherever something dies. A colony roosts on a cliff or in a dead tree, launches at mid-morning when the thermals form and soars until late afternoon. A bird watches the others as well as the ground, and a carcass draws dozens from miles around. At the carcass the large birds feed first.

## Key Behaviors

Vultures roost together on cliffs and in dead trees and gather in groups at carcasses. They leave the roost soon after dawn, when the thermals begin, and soar until late afternoon, searching and watching the other birds. A bird that begins to descend draws others from miles around. At a carcass the largest feed first and the smaller wait at the edge. They gorge as fast as they can, several pounds in minutes, since time at a carcass means exposure to bigger predators. Vultures live for decades and form loose bonds in the roost. They are silent in flight and hiss, grunt and clatter their bills at a feeding place.

## What the Caravans Do

A caravan reads the birds. A circle over a distant ridge marks a carcass, a kill, a dead camel or a camp, and the master sends a rider to look. A trail of camel bones picked clean marks the road. Tribes of the steppe lay out their dead on high rock, and the birds are not driven off. Hunters take vultures for the feathers, which fletch the best arrows. A vulture on the roof of a tent is an omen of death in the family, and the family moves the tent.

## Signs

- A slow spiral of dark birds in the sky, tight and descending.
- A line of birds on a ridge with their wings half-open and their heads drawn down.
- A bald-headed bird on the ground, walking round a carcass, too gorged to rise.
- A shadow of broad wings crossing the sand.
- A pile of bones picked white on the road, with the harness still on.

## Combat Strategy

Vultures are not combatants and will flee from any serious threat. Their defensive responses are limited to aggressive posturing — spreading wings, hissing, and lunging with the beak — against rivals at a carcass or against smaller animals attempting to steal food. When threatened by a predator or human at a feeding site, vultures will typically take flight, though gorged birds that have eaten heavily may be temporarily unable to fly and will instead retreat on foot with an ungainly, shuffling run. A vulture's only dangerous defensive behavior occurs when cornered — the bird may strike with its heavy beak, which is capable of tearing flesh and inflicting painful wounds, though this is a last resort. Vultures also employ a particularly unpleasant defensive mechanism: when stressed or threatened, they may regurgitate their stomach contents at the aggressor, producing a stream of partially digested carrion that is both revolting and mildly caustic.

## Attack Methods

### Beak Strike

A defensive attack only. The vulture lunges with its heavy, hooked beak, targeting hands, faces, and eyes. The beak is designed for tearing tough hide and can inflict deep, ragged wounds, but the vulture lacks the foot strength and killing instinct of a true raptor. This attack is reserved for situations where the vulture cannot flee.

### Defensive Regurgitation

When cornered or severely stressed, a vulture vomits the contents of its crop at the threat — a stream of partially digested, strongly acidic carrion that is viscerally repulsive and can cause chemical burns to eyes and exposed skin. This behavior also lightens the bird for emergency takeoff.

## Special Abilities

### Supreme Eyesight

The vulture possesses the sharpest distance vision of any creature in the desert. From soaring altitude — thousands of feet — a vulture can detect a carcass the size of a gazelle on the ground below and can observe the behavior of other vultures across distances measured in miles. This eyesight functions as an early warning system for desert travelers: vultures circling and descending indicate a carcass, which may indicate predator activity, a recent battle, or an abandoned campsite. Experienced desert nomads read vulture behavior as fluently as they read tracks.

### Thermal Soaring

Vultures are masters of energy-efficient flight, exploiting rising columns of warm air to gain altitude and then gliding for miles without a single wingbeat. A vulture can cover enormous distances — fifty miles or more in a day — while expending almost no energy, an adaptation that allows it to search vast areas of desert for the widely scattered carcasses on which it depends. This efficiency means vultures can appear over a fresh kill within minutes of death, seemingly materializing from empty sky.

### Information Network

Vultures watch each other. When one bird begins to descend, others that can see it adjust their flight paths to converge on the same location. This creates a cascading effect where vultures across dozens of miles are drawn to a single carcass, each bird following the movements of its nearest neighbor. For desert travelers, this network is a readable map of death — the convergence point of vulture spirals marks the location of carrion with reliable accuracy.

### Carrion Immunity

Vultures possess an extraordinary resistance to pathogens. Their stomach acid is potent enough to neutralize anthrax, botulism, and other toxins that would kill most other animals. They can consume meat in advanced stages of decomposition without ill effect, filling an ecological niche that no other large animal can occupy. This immunity extends to a degree to the diseases carried by the parasites that infest carcasses, making vultures nearly immune to the plagues that follow battlefields, famines, and mass die-offs.

## Attributes

- **Strength:** 4-7 (1d4+3)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 15-20 (1d6+14)

- **Aura:** 6-9 (1d4+5)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
