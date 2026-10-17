---
shortcode: gntspdr
name: {full: Giant Spider, aliases: []}
type: being
subType: creature
description: "A four-foot-bodied web-hunter spinning three-dimensional silken mazes through caves and forests, dominating its territory with sticky traps and venom."
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
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Venomous Fangs
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Fangs
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 0
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
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[gntspdr|Giant Spider]]{float=top-left}

The cords across the trail are as thick as your little finger and gray with dust, and the first man through has walked into three of them before he understands that they are not creeper. He pulls, and they stretch and do not break, and far up in the dark of the trees something answers the pull. It comes down a cord head first, a body four feet across and black and glossy, legs opening around it to the span of a boat, eight eyes catching the torch, and the smell that comes down ahead of it is sour rot.

# Dossier {#dossier}

The Giant Spider is a web-building spider with a body four feet across and legs that span twenty, which strings a maze of silk through the forests and marsh-woods of [[place-grkrhlmrgn|Grukarholm]] and the eastern reaches of [[place-vrystwald|Vristwald]] toward it, and waits at the heart of the maze for something to touch a line. It takes deer, boar, members of the [[lore-grukarfolk|Grukar Folk]] and men, binds them, and drains them, and it is the one thing in those woods the Grukar themselves walk round. A web-ground is a stretch of forest with cords across every path and husks hanging in the branches, and the [[lore-varokhiclt|Varokh]] of the frontier villages mark the edges of them with blazes and do not cross.

## Presentation

A huge spider with a bulbous, heavily muscled body in glossy black, dark brown or rust, covered in fine hairs that stir constantly. The eight long legs are jointed and clawed at the tips for walking web and bark. Eight eyes sit across the front of the head, the two largest forward, and reflect a torch from a long way off. The fangs are long and clear venom beads on them. The spinnerets at the rear of the abdomen pay out silk as strong as rope and sticky as pitch. It smells of rot and of the sour fluid it digests its prey with.

## In the Land

Giant Spiders live in the dense mixed forest and the drowned woods of the Grukarholm marshes, where the trees stand close enough to carry a web from trunk to trunk for a hundred yards, and in the [[place-skathwald|Skathwald]] reach of Vristwald where the Grukar nests thicken. Each spider holds a web-ground of a few acres with its own body at the center, and the webs of neighbors meet at the edges. They are thickest along the game trails and the river landings, where the deer come down and the Grukar war-canoes put in, and absent from the open taiga and the cleared ground round a village.

## Key Behaviors

The spider sits at the hub of its web, legs on the main lines, and feels. It can wait a week without moving. When a line shakes it goes to the place at a run, bites the thing that is caught, binds it in silk while the venom works, and carries it up to a branch to drain over several days. It eats only the liquid and lets the husk fall or hang. It rebuilds what is broken every night and spreads the web further each season, and a web-ground that is not burned grows. The Grukar, who clear everything else from their woods, leave the web-grounds standing; a Grukar war-party uses one as a wall.

## What the Villages Do

The Varokh villages of the eastern frontier blaze the trees at the edge of a web-ground and cut their paths round it, and a hunter who finds a fresh cord across a trail turns back. A web-ground that has spread toward a village is burned in a dry week, from upwind, by the whole village with torches and buckets, and the spider runs before the fire and is killed in the open or escapes into the next ground. Silk cut from a web, with the spider dead or driven off, is the strongest cordage in the forest and the frontier markets pay for it; the venom is bought by the Velanthian apothecaries beyond the frontier. The Grukar do none of this. They walk round.

## Signs

- Gray cords across a game trail at chest height, thick as a finger, that stretch and do not break.
- Husks of deer and boar hanging high in the trees, dry and light and swinging in the wind.
- A sour smell of rot in a stretch of forest with no carcass on the ground.
- Blazes cut on the trunks round a stretch of woods, and the path bending away from them.
- Eight points of light reflecting a torch from high in the branches.

## Combat Strategy

The spider fights in its web, where it runs at full speed along lines that hold a man fast and bind him tighter with every movement. It bites a tangled victim and leaves him to the venom while it deals with the next, throwing fresh silk over anyone who comes to cut him free. Driven out of the web it is cautious and fast and tries to get back to it. It is afraid of fire and nothing else: a torch held to the lines brings the web down in a sheet and sends the spider up the trees, and a party in a web-ground without fire is in a trap that was built for them. A spider defending its egg-sac at the hub fights to the end.

## Attack Methods

### Venomous Fangs

The fangs drive in and the venom follows. It numbs and then paralyzes, slower on a man than on a deer, and a man who is bitten and bound and left will die of it by morning.

## Special Abilities

### Venom Spit

The spider throws a spray of sticky, venom-laced silk from its spinnerets across a man who is still on his feet, binding his arms and legs and beginning the numbness before the fangs arrive.

### Web Mastery

The silk is stronger than rope of the same thickness and holds a boar. The spider runs through its own web at full speed while anything else that touches it is caught, and the lines are invisible in the dark and hard to see by day.

### Climbing Mastery

The spider goes up a trunk, along a branch and across the underside of a limb at the same speed, and never falls.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 10-15 (1d6+9)

Dexterity
: 13-18 (1d6+12)

Agility
: 14-19 (1d6+13)

Perception
: 12-17 (1d6+11)

Aura
: 8-11 (1d4+7)

Will
: 9-14 (1d6+8)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
