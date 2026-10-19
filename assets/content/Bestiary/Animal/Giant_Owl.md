---
shortcode: giantowl
name: {full: Giant Owl, aliases: []}
type: being
subType: creature
description: "A silent nocturnal apex raptor with a twenty-five-foot wingspan and armor-piercing talons, intelligently ruling vast territories across many valleys."
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
    str: 1d6+21
    end: 1d6+17
    dex: 1d6+12
    agl: 1d6+11
    per: 1d6+14
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 25}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 58}}
    - name: Talon Rend
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon Rend
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 7, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Piercing Beak
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
          name: Piercing Beak
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: piercing}
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
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
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
            bodyZoneCode: lwingzone
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
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
      weight: {base: 40, calc: "40"}
      reachBase: 0
      bodyScaleBase: 1.71
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 90
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 25
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[giantowl|Giant Owl]]{float=top-left}

The dog went quiet first, and now you understand why. There was no sound. There was only the fire's light going out across the clearing as something passed between it and the trees, and now the thing is sitting on the broken spruce at the clearing's edge with its back to the moon: taller than a man, broad as a cart, two round golden eyes in a disc of feathers turned full upon the fire. The head turns a little further than a head should turn. Then the eyes close, and in the dark you cannot find where it was.

# Dossier {#dossier}

The Giant Owl is the great owl of the northern forests, with a wingspan of twenty-five feet and a flight that makes no sound at all, which hunts the old woods of [[place-vrystwald|Vristwald]] and the spruce forest behind the [[place-nrdlndsrgn|Nordlands]] fjords by night and sleeps in a hollow trunk or a cliff-cave by day. It takes hares, foxes, fawns, lynx, goats and dogs, and a man alone on a forest path after dark, and it is the one hunter of the north that a traveler does not hear coming. The [[lore-varokhiclt|Varokh]] keep it as a wesk, and the shamans of the owl villages read its calls.

## Presentation

A huge owl in mottled brown and gray that vanishes against bark and shadow, standing upright on heavy feathered legs. The wings are enormous and their feathers are fringed and soft, so that the air makes no sound over them. The head is large and turns almost right round on the neck. The eyes are great golden discs set in the facial feathers, forward-looking, and they catch firelight at a distance. The beak is hooked and strong and the talons are long, curved and needle-pointed, and they go through leather and light mail. It weighs forty pounds and carries a goat.

## In the Land

Giant Owls hold the deep timber of Vristwald's central forest belt and its deepwood, [[place-vethwald|Vethwald]], where the great trees give them hollows to roost in, and the spruce and pine forest south and east of the Nordlands mountains, up to the edge of the caribou plateaus. Each holds a range of many square miles alone, and a pair in the nesting season holds it together and fiercely. They want old forest with clearings and river-meadows to hunt over. Each of the Varokh owl villages—[[place-vethholt|Vethholt]] in [[place-thornwald|Thornwald]], and [Frodstein]{.name data-type="place/settlement"}, [Domreth]{.name data-type="place/settlement"} and **[[place-frodhaven|Fródhaven]]** elsewhere in the forest—has a pair in its woods, and its shaman knows the roost.

## Key Behaviors

The owl hunts in the dark hours, quartering its range in long silent glides and listening, and stoops on whatever moves on the ground or in the lower branches. It kills by striking with the talons and carrying the prey to a perch. It eats hares, grouse, foxes, martens, fawns and the young of larger animals, and in a lean winter it takes a dog from a village edge and a sheep from a fold. A pair with young in the nest strike at anything that passes under the tree and follow an intruder through the forest for miles. A fed owl is an idle one and sits out the night on a snag. It learns the paths people use at night and the hour the herd-boy brings the goats in.

## What the Villages Do

A Varokh village with an owl in its woods brings the goats in before dusk and the dogs in with them, and nobody walks the forest paths alone after dark in the nesting weeks. In an owl village the bird is the wesk and the shaman who leads the village keeps its roost as a holy place: the owl's calls are read for the dead, a feather found under the roost is given to the shaman, and killing one is an offense against the village itself. Elsewhere in the forest an owl that has taken a child is hunted by day at its roost, with fire under the hollow tree and bows round it, and the hunters count it a bad night's work. The flight feathers, which make no sound, are prized by hunters for fletching, and the great facial discs are worked into a shaman's mask.

## Signs

- A dog or a goat gone from a village edge at night with no track and no sound.
- Pellets the size of a fist under a tree, full of fox fur and hare bones.
- A sudden silence of the night birds along one stretch of path.
- Two round points of gold reflecting the fire from the forest edge, high up, that go out together.
- A hollow in an old trunk, big enough for a man to sleep in, with a litter of bones at its foot.

## Combat Strategy

The owl comes silently from behind and above and strikes with both feet before anyone has looked up. If the first strike does not finish the prey it climbs away into the dark and comes again from another quarter, as many times as it takes, and in the dark nobody sees where the next pass is coming from. It does not land to fight if it can help it, and on the ground it is awkward. It gives up on a party that keeps a bright fire and stays close to it, because the fire hurts its eyes, and it does not stoop into thick brush. A nesting bird keeps coming until it is dead.

## Attack Methods

### Talon Rend

The talons strike from above with the weight of the stoop behind them and rake deep; on a perch or on the ground the owl strikes again and again with one foot and then the other.

### Piercing Beak

A thing held under the talons is torn by the hooked beak at the eyes, the throat and the neck, where the beak goes through mail and bone.

## Special Abilities

### Silent Wings

The flight feathers are soft-edged and the owl makes no sound in the air. It is beside a man before he hears anything, and he hears nothing then either.

### Supreme Night Vision

In starlight the owl sees as a man sees at noon; moonlight is bright to it, and a fire is painful. Its prey in the dark is blind and it is not.

### Rotational Head

The head turns nearly all the way round, so that the owl on its perch sees behind it without moving its body, and nothing walks up to it from any side.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 18-23 (1d6+17)

Dexterity
: 13-18 (1d6+12)

Agility
: 12-17 (1d6+11)

Perception
: 15-20 (1d6+14)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Reasoning
: 6-9 (1d4+5)

Creativity
: 4-7 (1d4+3)
