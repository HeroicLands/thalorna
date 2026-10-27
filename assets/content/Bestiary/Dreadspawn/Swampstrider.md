---
shortcode: swmpstrd
name: {full: Swampstrider, aliases: []}
type: being
subType: creature
description: "A massive, supernaturally intelligent amphibian that ambushes prey from its claimed stretch of wetland with devastating precision."
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
    str: 1d6+10
    end: 1d4+13
    dex: 1d4+13
    agl: 1d6+14
    per: 1d6+10
    aur: 1d6+6
    wil: 1d6+10
    rea: 1d4+9
    cre: 1d6+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Prehensile Tongue
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 76
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Prehensile Tongue
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Leap and Ram
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 66
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Leap and Ram
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[swmpstrd|Swampstrider]]{float=top-left}

The portage trail comes down through maples to a reedy bay of the lake, where the canoes are to be put back in the water. The bay is calm and green with lily pads. One of the patches of pads is larger than the rest, and the water round it is very still. As the first canoe is pushed off, the patch rises: a frog, if a frog could be as long as the canoe, mottled green and brown and gray, its skin wet and shining, two great eyes on top of a flat head. Its throat swells. Then its mouth opens, and its tongue shoots across thirty feet of water and wraps the man in the canoe's bow, and pulls.

# Dossier {#dossier}

The Swampstrider is a dreadspawn shaped like a gigantic frog, twelve to eighteen feet long and two hundred pounds, which lies in wait in shallow water and takes its prey with a sticky tongue that reaches thirty feet, a skin that paralyzes, jaws like a bear trap, and a leap that rams a man flat. It is cunning far beyond any frog: it learns where prey goes and waits there. One holds a reedy bay at the end of a portage on the lakes of [[place-xikulchaklrgn|Shik'ul Ch'akal]] in [[place-northkiichchik|Northern Ki'ich'chik]], the country of lakes, rivers and portage-routes that the Ha'ik of [[affiliation-xikulchakl|Shik'ul Ch'akal]] control absolutely and share with no one. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The swampstrider is broad, flat and low, with a wide head, huge bulging eyes set on top, and a mouth as wide as its body. Its skin is mottled green, brown and murky gray, smooth and always wet, slick with a secretion that numbs whatever touches it. Its forelegs are short and its hind legs very long and heavily muscled, folded under it. The tongue, coiled in its mouth, is thick, sticky and strong as a rope. It sits motionless in shallow water for hours with only its eyes and back above the surface, and moves in sudden, explosive leaps. It croaks rarely, with a deep, booming note that carries for miles across the water.

## In the Land

Shik'ul Ch'akal is water in every form: lakes from small forest pools to inland seas, rivers broken by rapids, and the portage trails that join them, which the Ha'ik know intimately. The swampstrider holds a reedy bay at the lake end of one of those portages, where canoes must be carried up out of the water or put back into it, and the marsh and lily beds round it. It eats fish, ducks, beavers, otters, deer that come down to drink, and canoeists at the landing. It stays in the shallows and the marsh and does not go out into the open lake or up into the forest, and in the hard northern winter it lies under the mud at the bottom of the bay.

## Key Behaviors

The swampstrider is patient and cunning. It learns its prey's habits, where the deer drink, which channel the ducks use, where a canoe grounds at a landing, and it waits there, motionless, for hours or days, for one chance. When the chance comes, it strikes with the tongue first, sticks its prey and pulls it in, and closes its jaws on it, or leaps and rams it under. Its skin and tongue numb and paralyze whatever they touch. It understands luring and herding, and it has been seen to drive ducks toward the bank with its leaps so that they would fly past its tongue.

## What the Ha'ik Do

The Ha'ik control their waterways with quiet, absolute authority, and strangers who try to use them without permission vanish; what outsiders know about the swampstrider comes from the trading posts of [[place-hanalxilanrgn|Ha'nal Shi'lan]], where Ha'ik canoe-runners have described it. The runners say the portage where it lives is used only in a particular way: canoes are carried down to the water in pairs, put in at the same moment, and paddled straight out of the bay without stopping, and no one sets foot in the shallows. The Ha'ik do not kill it. The traders at those posts believe it keeps a portage closed to anyone who does not know the way through, and that the Ha'ik prefer it so. Ha'ik healers, whose skill is wanted across the north, are said to use its skin-secretion, taken with great care, to numb wounds before cutting.

## Signs

- A deep booming croak across a lake at dusk, from somewhere among the reeds.
- Ducks and geese that will not land in one bay of a lake.
- A patch of lily pads that is in a different place each morning, too big and too regular.
- A deer carcass in the shallows with its fur stripped off in a long sticky stripe.
- A canoe found floating empty in a bay with its paddles still in it.

## Combat Strategy

The swampstrider strikes from the water or the reeds: it throws its tongue to catch one victim, pulls him in, and bites or drags him under. If its victim fights free, it leaps and rams him flat, from surprising distances. It picks off whoever is nearest the water, and it pulls its prey into deeper water where it has every advantage. It is clever enough to wait for the right moment and to retreat when the fight goes badly. Heat and drying out are what it cannot stand.

## Attack Methods

### Crushing Bite

Once its prey is close, the jaws snap shut like a bear trap, with force enough to break bones and take off a limb.

### Prehensile Tongue

The tongue shoots out up to thirty feet, sticks to its prey and wraps round it, and the swampstrider pulls him toward its jaws. Escaping its grip takes great strength or a sharp blade, and its secretion numbs what it touches.

### Leap and Ram

The swampstrider launches itself off its hind legs across or through the water and rams its victim with its head and body, knocking him flat or under the surface.

## Special Abilities

### Toxic Secretions

Its skin and tongue are coated in a secretion that numbs and then paralyzes. A man held by the tongue or grappled by the creature grows numb, then stiff, then unable to move.

### Amphibious Adaptation

It moves easily in deep water and on land, though more slowly on land. It holds its breath indefinitely and sees perfectly in total darkness.

### Predatory Cunning

It learns its prey's habits, lures and herds it, and sets ambushes where its prey must pass.

### Desiccation Weakness

It cannot live long out of water. Heat and dry air weaken it, and long exposure to dry conditions kills it.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 14-17 (1d4+13)

Dexterity
: 14-17 (1d4+13)

Agility
: 15-20 (1d6+14)

Perception
: 11-16 (1d6+10)

Aura
: 7-12 (1d6+6)

Will
: 11-16 (1d6+10)

Reasoning
: 10-13 (1d4+9)

Creativity
: 11-16 (1d6+10)
