---
shortcode: shdwspnn
name: {full: Shadowspinner, aliases: []}
type: being
subType: creature
description: "An infernally intelligent apex arachnid that engineers light-drinking webs to trap prey and shatter the spirits of onlookers."
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
    str: 1d4+13
    end: 1d6+14
    dex: 1d6+16
    agl: 1d4+13
    per: 1d4+13
    aur: 1d4+9
    wil: 1d4+13
    rea: 1d6+10
    cre: 1d6+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Raking Limbs
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 64
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Limbs
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Cephalothorax, shortcode: cephzone, probWeight: 3}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 3}
          - {name: Legs, shortcode: legszone, probWeight: 4}
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
      weight: {base: 800, calc: "800"}
      reachBase: 0
      bodyScaleBase: 1.28
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

![[shdwspnn|Shadowspinner]]{float=top-left}

Below the tower, under the sand, the buried street is a tunnel of brick, and the lamp shows its far end blocked by a curtain of black. It is a web. It goes from wall to wall and floor to roof and back into the dark beyond in layer after layer, built in angles as exact as a mason's, and it is black, and the lamplight goes into it and does not come out. Caught in it, hung in neat rows, are bundles wrapped in silk, and one of them is the size of a man and still moving a little. Then something on the far side of the web moves too: a spider with a body as long as a horse and legs that reach from wall to wall, plated in black, with eight eyes catching your lamp.

# Dossier {#dossier}

The Shadowspinner is a dreadspawn in the shape of a colossal spider, ten to fourteen feet long in the body with a leg-span of twenty to thirty feet, which turns its territory into a fortress of webs built with geometric precision from a black silk that drinks light. It is intelligent and patient, it keeps what it catches alive in silk for weeks, and it learns from every victim that escapes. One holds the buried lower stories of [[place-ruinsarkor|the Ruins of Arkor]], the westernmost of the Tower Cities, under the sand of the [[place-hekardesert|Desert of Hek'ar]], where the Black Flame's Blazing Oath is searching for a relic. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The shadowspinner is a spider on a monstrous scale, its body plated in glossy black chitin that takes no shine, its long jointed legs covered in fine, stiff black hairs like obsidian threads. Eight eyes sit in two groups of four on its head, each catching light like a polished bead, and below them long chelicerae end in fangs as long as a man's forearm. Its legs end in points hard enough to pierce armor. Its web is the strangest thing about it: black, strong as rope, laid in exact angles and layers, and lamplight that falls on it is swallowed. It moves faster than anything its size should, and in perfect silence.

## In the Land

The desert has buried Arkor to the second story, and under the sand the city's lower streets and halls still stand, roofed with brick and full of dark. The shadowspinner has made a fortress of a quarter of them: streets walled off with web, halls hung with it, passages laid with it so that every step on a strand tells the spider where an intruder is. It hunts what comes into the buried city: foxes and jackals, the giant camel spiders of the cellars, herders' strays, and the treasure-seekers and knights who dig down from the dunes. It never comes up into the desert sun. The tribes keep clear of the tower and of the shallow, oddly cold bowl round its foot, and give no reason.

## Key Behaviors

The shadowspinner builds, all the time. It extends and repairs its web in elaborate geometric patterns, laying traps within traps, false passages and dead ends, and it feels every movement on every strand. When something is caught it comes, bites, and wraps it in silk, and hangs it up alive in its larder, where it feeds on it slowly over weeks. It is solitary and kills other spiders on sight, including its own kind. It is intelligent: it remembers prey that escapes, learns the weapons and tactics of those who come against it, and builds a better trap for the next time.

## What People Do

The tribes of the Welqator will not drive stock within a mile of Arkor's tower at night, and say the sand took the city in its sleep. The Black Flame's **Blazing Oath**, the faction of the Servants of Sycânus sent under [[being-srdrzhsycnknghtblckflm|Sir Drazha Sycâni]] to recover the Eye of Velok, has dug down into the buried streets more than once, and lost men in the dark each time; the knights speak of ancient traps, and some of the traps are webs. The caravans that cross the Hek'ar by the old road buy silk from the margin tribes, a black rope strong enough to hang a camel from, and do not ask where it comes from. The tribes who sell it collect it from the dunes over the tower at dawn, in the one hour a day it is safe, and cut only what hangs loose.

## Signs

- Black silk lines strung across a buried passage, so dark that a lamp shows them only by the shadows they cast.
- Animals and men wrapped in silk bundles hung in rows from a ceiling, some still alive.
- A cold draft from a crack in the sand, and a faint vibration in the ground underfoot.
- Lamplight that seems to go out a few yards ahead in a passage that is not blocked by anything visible.
- Giant camel spiders, ordinarily fearless, fleeing up out of a hole in the dunes.

## Combat Strategy

The shadowspinner fights from its web, where it has every advantage: it takes the position that gives it most movement, swings and hangs and runs along strands in every direction, and strikes from above, below and behind. It uses the web as a weapon, tightening strands round a man's limbs, pulling him off his feet, cutting off retreat with a new line. It bites to paralyze and rakes with its legs, then wraps what it has bitten. It plans for its victims' tricks if it has seen them before. Fire is the thing it fears: flame destroys its web and panics it, and a large enough fire can drive it out of its fortress.

## Attack Methods

### Venomous Bite

The chelicerae snap forward and the fangs drive deep, injecting a venom that spreads a numbness and a creeping paralysis from the wound.

### Raking Limbs

The pointed legs strike in quick combinations from several directions at once, piercing armor and tearing flesh.

## Special Abilities

### Web Entanglement

The spider tightens strands round a victim's limbs, wraps him, pulls him off his feet and bars his escape with new lines, using the whole web as a weapon.

### Web Mastery

It commands its web perfectly: it tightens or slackens strands, makes or cuts connections in an instant, and the web holds enormous weight.

### Vibration Sense

It feels every movement on every strand of its web, and anyone touching the web cannot hide from it.

### Predatory Intellect

It plans ahead, remembers prey that escaped, learns the weapons and tactics of repeat opponents, and builds better traps for them.

### Venom Resistance

Poisons and venoms barely affect it.

### Fire Weakness

Fire destroys its web at once, burns its body and panics it.

## Attributes

- **Strength:** 14-17 (1d4+13)

- **Endurance:** 15-20 (1d6+14)

- **Dexterity:** 17-22 (1d6+16)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 14-17 (1d4+13)

- **Aura:** 10-13 (1d4+9)

- **Will:** 14-17 (1d4+13)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 11-16 (1d6+10)
