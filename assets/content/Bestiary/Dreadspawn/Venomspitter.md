---
shortcode: vnmspttr
name: {full: Venomspitter, aliases: []}
type: being
subType: creature
description: "An acid-bodied ambush predator of warm jungles and humid caves, built entirely around producing and spitting corrosive toxins."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+10
    per: 1d4+8
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Venomous Bite
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
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Corrosive Venom Spray
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Corrosive Venom Spray
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forebody, shortcode: torsozone, probWeight: 5}
          - {name: Hindbody, shortcode: hindbodyzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Forebody
            shortcode: forebodypart
            bodyZoneCode: torsozone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Hindbody
            shortcode: hindbodypart
            bodyZoneCode: hindbodyzone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 6
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindbodyzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: forebodypart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: hindbodypart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
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
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[vnmspttr|Venomspitter]]{float=top-left}

The cistern chamber is cool and damp after the glare outside, and the water in the cut basin is black and still. Something is lying along the ledge above it. It lifts a flat head, and the lamplight runs over scales in purple and sick green with red burning between them, in patterns that seem to crawl as you look at them. It is long, ten feet and more, and it has too many joints for a snake. Its mouth opens wider than a mouth should, nearly flat back against its throat, and two hollow fangs as long as your fingers stand in it, dripping. A drop falls on the ledge and hisses, and the smell that comes off the stone is sharp enough to make your eyes run.

# Dossier {#dossier}

The Venomspitter is a dreadspawn built for one thing, which is making and delivering a venom that burns: a long, jointed, serpent-like body eight to twelve feet long, scaled in shifting warning colors, with hollow fangs and a throat that throws a stream of corrosive venom thirty feet. It lies in ambush in warm, damp, enclosed places—rock cisterns, seep-caves and the shaded clefts of the ravines in the stone uplands of the [[place-khzryndsrtrgn|Khazryn]]—and takes what comes to the water. The same shape is reported from the ruins of the [[place-cntrlrnfrsts|Central Rainforests]], as dreadspawn of one pattern often are, and no one has established how many there are or where they began. Like every dreadspawn it was made and cannot breed. It is clever: it chooses its ground, prepares it, and waits.

## Presentation

The body is long and supple like a serpent's but jointed like a spider's leg, segment by segment, which lets it bend at angles a snake cannot and lift its forepart high off the ground. The scales are iridescent, in purples, greens, yellows and reds laid out in bands and eyespots that shift as the creature moves and make it hard to look at steadily. The head is flat and reptilian with dark eyes ringed in a contrasting color, and the mouth opens nearly at a right angle. The fangs are hollow and always wet. The whole body is slick with a secretion, part venom, that lets it move almost without a sound and leaves stone etched where it has lain. The air near one is noticeably cooler, and smells of something burning.

## In the Land

Venomspitters want shade, damp and warmth together. In the Khazryn they are found in the badlands and stone uplands where water lies in rock: the cut cisterns and seep-caves of the [[place-dkrqrrgn|Diqraqor]], the clefts under the mesas where a spring keeps the rock damp, and the cistern-chambers of the old ruins. Each holds a single water and the ground round it, and one that has taken a cistern holds it for years. They do not go out on the sand or into the dry heat of the day, and hard cold sends them into a torpor. A tribe that finds one in a cistern it depends on has lost the cistern until the creature is killed.

## Key Behaviors

A venomspitter chooses a place where prey must come—a cistern's edge, the one ledge that reaches a seep—and lies above it or beside it, motionless, for days if it must. It improves its ground over time: it smears the approaches with its secretion, which burns and makes the rock slippery, and some spin a coarse, acid-wet web across a cleft as a trap and a marker. It takes whatever comes to drink—lizards, birds, foxes, goats, men—sprays it from a distance, waits for the venom to work, and then feeds on what the venom has softened. It remembers a party that has hurt it and the route the party took.

## What the Tribes Do

The plateau tribes know their waters, and a cistern where goats have been found dead and burned at its edge is a cistern nobody draws from. A tribe that must take its water back sends men with shields faced in fresh hide, which the venom eats through slowly enough to matter, with their faces wrapped and eyes shielded behind slit leather, and with fire, because the creature dislikes heat. A cold night is the time to go in, when it is sluggish. Its venom, milked from a dead one and kept in a stoppered horn, sells at [[place-kethramir|Kethramir]] to alchemists and poisoners for a sum that pays a tribe's year, and the men who sell it do not say how many they lost getting it.

## Signs

- A cistern or seep with animals lying dead at its edge, their hides burned and blistered.
- Rock round a water etched pale and pitted, as if by vinegar, in long streaks.
- A sharp, burning smell in a cave where nothing burns.
- Coarse, wet strands across a cleft that blister the hand that touches them.
- A ledge above a water with the dust wiped smooth along its length.

## Combat Strategy

The venomspitter fights at a distance. It sprays from its ledge at whoever comes within thirty feet, goes for the face and eyes, and picks its targets: an archer, a man with a lamp, whoever is already hurt. It moves quickly along ledges and through clefts to keep a party below it and in front of it, and it shifts position between sprays. Brought into close quarters, it bites to put venom into the blood and slides away. Badly hurt, it withdraws into a cleft too narrow to follow and waits out the party. A party that comes at it with shields, covered faces, fire and speed, from more than one side, can kill it; one that hangs back at the edge of the light is sprayed one man at a time.

## Attack Methods

### Venomous Bite

The fangs drive in and the venom goes into the blood. It spreads a paralysis outward from the bite, and untreated it kills in hours.

### Corrosive Venom Spray

The creature throws a stream of venom from its throat with an accuracy that finds the gap at a visor or the face above a shield, at twenty or thirty feet. The venom eats leather, cloth and the surface of metal, and burns flesh to the bone.

## Special Abilities

### Spat Globules

When pressed it coughs up gobbets of venom-soaked matter, or flings venom-coated stones with a whip of its forepart, at a man who has closed in or is trying to.

### Venom Generation

It makes venom constantly and seems never to run out of it, whether it sprays, bites or coats its ground.

### Precision Aim

Its spray finds the joints of armor and the eyes of a man who has not covered them.

### Corrosive Secretions

Everything it touches is left coated in acid that eats armor and gear until it is washed off; a sword that has struck it pits along the edge.

## Attributes

Strength
: 6-9 (1d4+5)

Endurance
: 7-10 (1d4+6)

Dexterity
: 13-16 (1d4+12)

Agility
: 11-14 (1d4+10)

Perception
: 9-12 (1d4+8)

Aura
: 9-12 (1d4+8)

Will
: 7-10 (1d4+6)

Reasoning
: 7-10 (1d4+6)

Creativity
: 9-12 (1d4+8)
