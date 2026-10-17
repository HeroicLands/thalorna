---
shortcode: gntscrpn
name: {full: Giant Scorpion, aliases: []}
type: being
subType: creature
description: "A ten-foot armored arachnid ambusher that waits motionless for prey, combining crushing claws with lethal venom across a multi-mile territory."
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
    str: 1d6+13
    end: 1d6+15
    dex: 1d6+8
    agl: 1d6+7
    per: 1d6+9
    aur: 1d6+7
    wil: 1d6+10
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Pincer Crush
      type: skill
      system:
        shortcode: pincer
        subType: combattechnique
        masteryLevelBase: 51
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: pincer
          name: Pincer Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 54
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Tail Sting
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
          - {name: Legs, shortcode: legszone, probWeight: 1}
        parts:
          - name: Cephalothorax
            shortcode: cephpart
            bodyZoneCode: cephzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Cephalothorax
            shortcode: cephloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntscrpn|Giant Scorpion]]{float=top-left}

The rocks on the ravine floor are still warm from the day, and one of them is walking. Ten feet of it comes out from under the overhang, dark brown and rust, plated like a man in armor, the two pincers held open before it and the tail curled up over its back with a stinger at the tip the length of a short sword. A drop falls from the stinger onto the stone and hisses. It stops at the edge of the firelight with its small eyes catching the flame, and the pincers open a little wider.

# Dossier {#dossier}

The Giant Scorpion is the big dark scorpion of the black-rock plateau of the [[place-dkrqrrgn|Diqraqor]] and the ravines and badlands round it, ten feet from pincer-tip to tail and plated in brown, rust and near-black chitin that matches the warm rock it hunts across. It is an ambush hunter that lies still for a day among the boulders and takes whatever comes within reach, and in its country it is the thing that comes to the fire at night. The tribes of the plateau rank it with floods and falls among the killers of the ravines, and the pale [[being-bnscrpn|Bone Scorpion]] of the wells is a cousin it never meets.

Its venom is worth a camel-load of salt to the right buyer, and the men who sell it do not grow old.

## Presentation

A heavily plated scorpion with a squat, muscular forebody and a segmented tail that curves high over the back and ends in a stinger the length of a short sword, with a bead of clear venom at its point. The pincers are each longer than a man's arm, toothed, and move independently. It stands on eight jointed legs with its body clear of the ground, and it crosses broken rock without slowing. The plates are dark brown, rust or black, and dull, so that a still scorpion among sun-warmed boulders is one more boulder. Several small eyes sit around the front of the head.

## In the Land

Giant Scorpions live on the mesas and in the dry ravines of the Diqraqor between the sands and the oasis belt, where they hunt the warm rocks at dusk, and in the badlands and stone uplands around the plateau's edges, among the fallen stone of the old tomb-ravines of [[place-osikor|Oshiqor]] and the cisterns the plateau tribes depend on. Each holds several square miles of rock and ravine against every other and is out at dusk and in the first of the night, when the stone still holds the day's heat. They are not found on open sand or in the cold north.

## Key Behaviors

A scorpion lies motionless for hours or days in the shade of a rock or the mouth of a cleft and takes what comes within reach of the pincers: lizards, hares, foxes, goats, and anything larger that stops in the shade. It does not distinguish prey from threat and attacks whatever enters its ground. It hunts by feel and by scent, reading a footfall through the rock, and it comes to a fire at night because the fire draws the small animals it eats and because a fire is warm. It mates in spring, when the males wander and are met on the open plateau in daylight, and a wandering male is a bold one.

## What the Tribes Do

The hard, poor tribes of the plateau water their flocks at a cistern by day and camp well above the ravine floor, with the goats inside a thorn ring and a fire that is kept small. A man does not sit down in the shade of a rock he has not looked under, and nobody sleeps on a ravine floor in the warm months. A scorpion that has taken up near a cistern is killed, by the tribe together, with long spears from above and stones rolled onto it, and the tribe loses a man or a boy at it as often as not. The venom is milked from a pinned animal into a horn by men who do nothing else, and sold at [[place-kethramir|Kethramir]] to the physicians and the poisoners; the plates are worked into light armor for the forearms and the shins, and the pincers are hung over a tent door.

## Signs

- Bleached goat and fox bones heaped in the shade of one boulder in a ravine.
- A dark, ten-foot shape on warm rock at dusk that was a boulder at noon.
- Eight-legged tracks as wide as a cart in the dust of a ravine floor, with a drag-mark between them.
- A hiss and a smoking spot on the stone where a drop of venom fell.
- Goats that will not go into one stretch of a ravine, however thirsty.

## Combat Strategy

The scorpion lets the prey come within reach and strikes with the pincers and the tail together: the pincers to hold, the tail to sting. A held thing is stung again and again while it struggles, and the pincers tighten. If the first strike misses the scorpion comes on and fights in the open, where its plates turn a blade and its pincers reach further than a sword; it does not retreat, and it fights until it is dead or its prey is. The soft places are the joints and the underside, which a man reaches only from close in, past the pincers; a long spear from above a ledge, or a heavy mace, is the plateau tribes' answer.

## Attack Methods

### Pincer Crush

A pincer closes on a limb or a body and crushes. A man held in one has a broken arm; held in both, he is pulled in toward the mouthparts and the tail comes down.

### Tail Sting

The stinger drives into a held or close victim and injects a venom that paralyzes and kills. The tail strikes again while the pincers hold, and the second and third stings finish what the first began.

## Special Abilities

### Exoskeletal Armor

The plates turn a cut and a thrust that lands square. A heavy blow cracks them; a point finds the joints and the underside.

### Ambush Predator

Among warm rock a still scorpion is a rock, and a man who comes within reach of the pincers before he sees it has no time to do anything about it.

## Attributes

Strength
: 14-19 (1d6+13)

Endurance
: 16-21 (1d6+15)

Dexterity
: 9-14 (1d6+8)

Agility
: 8-13 (1d6+7)

Perception
: 10-15 (1d6+9)

Aura
: 8-13 (1d6+7)

Will
: 11-16 (1d6+10)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
