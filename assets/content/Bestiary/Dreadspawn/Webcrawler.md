---
shortcode: wbcrwlr
name: {full: Webcrawler, aliases: []}
type: being
subType: creature
description: "A supremely cunning spider of dark caverns and ruins that spreads nearly invisible webs across confined spaces to snare prey."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+14
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+6
    cre: 1d4+12
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Paralytic Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Paralytic Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Web Constriction
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Web Constriction
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 8, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, constrict: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 2}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Fangs
            shortcode: fangloc
            bodyPartCode: cephpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 100, calc: "100"}
      reachBase: 0
      bodyScaleBase: 0.81
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

![[wbcrwlr|Webcrawler]]{float=top-left}

The old fort is half swallowed by the forest, its walls green with moss and split by birch roots, and its gate-tower still has a roof. Inside the tower it is dark and cool and the stair goes up into shadow. You start up it. On the fourth step your foot will not lift. On the fifth your hand is held fast to the wall. You cannot see what holds you; the stair looks empty. Then a faint iridescent shimmer runs across the dark above you, blue and green, like oil on water, and you see that it is the light sliding along a body: black, as long as you are tall, with legs folded about it, hanging upside down from nothing, and coming down.

# Dossier {#dossier}

The Webcrawler is a dreadspawn in the shape of a great black spider, five to seven feet in the body with a leg-span of eight to twelve feet more, which fills dark, confined places with webs so fine they cannot be seen and so strong they cannot be broken by hand. It is inventive, patient and clever, and it designs its traps for the prey it expects. One holds an overgrown Vylarian fort in [[place-vandstein|Vandstein]], the stony southern edge of the Vrystwald toward Vylaria, where the posts of an older imperial reach survive under the trees. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The webcrawler is long-legged and heavy-bodied, plated in deep black chitin with an iridescent sheen of blue and green that shows only when light slides across it. Its legs are long, jointed and fringed with fine hairs that feel every movement in its web. Its head carries a close cluster of eyes and a pair of curved fangs. Its silk is fine, dark and almost invisible, and it is very strong. It moves across its web, walls and ceilings as easily as a man walks a floor, without a sound, and it hangs motionless in the dark for days.

## In the Land

Vandstein's crossings make travel and the fur trade possible, and the overgrown Vylarian posts in its southern woods can offer shelter or buried goods to a party that finds them. The webcrawler holds one of them: a small stone fort, its gate-tower, barracks and storerooms still roofed, its cellars intact, every room of it laced with webs. It hunts the martens, owls, bats and foxes that come into the ruin, and the men who come for its shelter or its goods. It does not go out into the forest. It has been there a long time, and its webs reach from the cellars to the tower roof.

## Key Behaviors

The webcrawler builds and rebuilds its web constantly, a three-dimensional net through every room and passage, laid in invisible layers. It designs it with invention: strands that trip, strands that bind, strands that guide a victim into a room it has prepared, strands that tell it where everything is. It waits in a dark corner until something is caught, then crosses its web fast and bites, and binds what it has bitten, and feeds at leisure. It learns from what escapes it, and the next trap is better. It is solitary and kills any other spider that comes in.

## What the Forest Villages Do

The Varokh villages below Vandstein's passes keep away from the old posts in general, because a ruin that draws an imperial claimant into ground a village considers its own is trouble whatever is in it. They keep away from this one in particular. Fur traders crossing the passes are told, at the last village, not to shelter in the old fort however bad the weather, and the ones who have done so anyway tell of stairs that held their feet and a companion who went down to the cellar for wood. Vylarian surveyors who came up a few years ago to look at the old posts, with a claim in mind, sent two men into this one; the village elders say the surveyors went home with a smaller claim. The villagers burn the brush round the fort's gate every few years, to keep the forest from hiding it from anyone who needs to see it and stay away.

## Signs

- A ruin whose rooms look empty and swept, with no dust, no droppings and no nests.
- Bats, owls and martens found hanging in midair in a doorway, held by nothing a lamp can show.
- A foot or hand that sticks to a stair or wall with no visible cause.
- A faint blue-green shimmer moving across the dark of a ceiling.
- Silk-wrapped bundles, man-sized, wedged into the corners of a cellar.

## Combat Strategy

The webcrawler fights through its web. It lets its enemies walk in and get caught, then crosses the web to bite one, binds him, and withdraws to let the venom work while the others struggle. It tightens strands round those caught, crushing and choking, and lays new strands across their path as they fight. It avoids open, prolonged fighting, and it never comes out of its web to fight. Fire is its great weakness: it destroys the web and terrifies the spider. Smoke and powder reveal the strands.

## Attack Methods

### Paralytic Bite

The webcrawler strikes very fast and drives its fangs in, and the venom numbs the bite and spreads outward until the victim cannot move.

### Web Constriction

It pulls the strands that hold a caught victim tight round his limbs, chest and throat, crushing and choking him at once.

## Special Abilities

### Guided Entanglement

It lays new sticky strands across the paths its enemies will take, as they take them, and closes off ways out with barriers no one can see until he touches them.

### Web Mastery

It commands its web exactly, working single strands or whole sections at once, and the web is nearly invisible and strong enough to hold the spider and much more besides.

### Silk Navigation

It moves across its web, walls and ceilings in three dimensions as easily as a man walks a road, and hangs from nothing for as long as it likes.

### Predatory Creativity

It invents and solves problems, designs its traps for the prey it expects, and changes them when they fail.

### Venom Mastery

Its venom paralyzes and numbs and, in a large dose, kills, but it is made to hold its prey still, so that the spider can feed at leisure.

### Fire Weakness

Fire destroys its web at once and throws it into a panic, and losing part of its web forces it to retreat and rebuild.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 15-18 (1d4+14)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 13-16 (1d4+12)
