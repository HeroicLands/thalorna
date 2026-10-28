---
shortcode: ncrtcmr
name: {full: Necrotic Mire}
type: being
subType: creature
description: "An animate ooze made of concentrated decay in deep stagnant swamps, spreading inexorably to corrupt and consume all it touches."
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
    str: 1d4+9
    end: 1d6+16
    dex: 1d6+6
    agl: 1d6+4
    per: 1d6+10
    aur: 1d6+16
    wil: 1d4+13
    rea: 1d6+6
    cre: 1d6+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Engulfing Surge
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 61
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Engulfing Surge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 12, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, envelop: true}
    - name: Corrosive Spray
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Corrosive Spray
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 25
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Core, shortcode: corezone, probWeight: 2}
          - {name: Mass, shortcode: masszone, probWeight: 4}
          - {name: Tendrils, shortcode: tendrilzone, probWeight: 2}
        parts:
          - name: Core
            shortcode: corepart
            bodyZoneCode: corezone
            roles: [vital]
            canHoldItem: false
            probWeight: 10
          - name: Mass
            shortcode: masspart
            bodyZoneCode: masszone
            roles: [core, locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Tendrils
            shortcode: ltendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Tendrils
            shortcode: rtendrilpart
            bodyZoneCode: tendrilzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Core
            shortcode: coreloc
            bodyPartCode: corepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Mass
            shortcode: massloc
            bodyPartCode: masspart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Underside
            shortcode: underbellyloc
            bodyPartCode: masspart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Tendrils
            shortcode: ltendrilloc
            bodyPartCode: ltendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Tendrils
            shortcode: rtendrilloc
            bodyPartCode: rtendrilpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 500, calc: "500"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[ncrtcmr|Necrotic Mire]]{float=top-left}

The cause-walk of sunken logs runs out across the bog, and at the end of it, where it should reach an island of alders, there is no island: only a low black mound standing in the water, as high as a man, glistening. It moves. Its surface heaves and blisters, and the blisters break and leak a dark fluid that smokes where it runs into the water. The alders round it are bare and gray, and the reeds lie flat and rotten. Then the smell reaches you, carrion and sulfur and grave-earth together, so thick that you gag on it, and the mound begins to come along the cause-walk toward you, slowly, swallowing the logs as it comes.

# Dossier {#dossier}

The Necrotic Mire is a dreadspawn made of rot: a heaving column or mound of black sludge four to eight feet high, about five hundred pounds, which consumes everything organic it touches and grows on what it eats. Everything near it sickens and decays. It moves slowly and does not stop. It is not a dead thing, though it looks and smells like death: like every dreadspawn it was made, it is alive, and it does not breed. The one that is known lives in the [Drowned Country]{.name data-type="place/region"}, the vast marshes of [[place-grkrhlmrgn|Grukarholm]], where neither [[lore-grukarfolk|Grukar]] nor the armies of the Nordmal will follow it, and it has eaten its way across a quarter of a great bog.

## Presentation

The mire has no fixed shape. It is usually a heaving column or a low mound of black sludge, its surface rolling and blistered with boils that burst and weep a dark, caustic fluid. Things show inside it as it moves: bones, antlers, the iron of a spear-head, a Grukar war-canoe's prow. The smell is overwhelming, rotting flesh, sulfur and grave-earth, strong enough to make hardened soldiers vomit. Round it the ground and the water rot: plants wither and go gray, fish float, and wood goes soft. It moves at a slow crawl and never seems to tire.

## In the Land

Grukarholm's marshlands are a vast complex of swamp, peat-bog, slow water and seasonal flood covering perhaps a quarter of the region, passable on foot only when they freeze in deep winter or in a few weeks of dry summer. The mire moves through them slowly and has done so for longer than any Grukar tribe remembers, and behind it lies a track of dead bog, gray reeds and bare trees that the tribes call by their own words and the [[lore-varokhiclt|Varokh]] call the [Black Road]{.name data-type="place/feature"}. It eats fish, water birds, deer, carrion, the plants of the bog itself, and any Grukar or traveler it catches. It positions itself at the islands and cause-walks where animals and people must cross, and it goes deep into the wettest bog when it is hurt.

## Key Behaviors

The mire exists to consume and grow. It senses prey through the vibration of the water and the ground, crawls to where prey crosses, and waits, and when something comes near enough, it surges over it. A mire that has eaten a man is visibly larger than one that has eaten only reeds. It is not mindless: it chooses what it can engulf and ignores what it cannot, and it learns where creatures cross the bog. It does not flee and does not plan, but when badly damaged it withdraws into the deepest part of the bog, where it heals fastest, and comes back.

## What the Grukar and Their Neighbors Do

The Grukar tribes of the marshes move their settlements away from the mire's track and do not use the cause-walks it has crossed until a season has passed. They will not fight it hand to hand. When it comes near a longhouse, they burn the reed-beds in front of it, because fire destroys its body and stops it healing, and a burned strip of bog turns it aside. Varokh traders who cross the edges of Grukarholm by river ask at every landing where the mire was last seen, and the answer is worth paying for. The Nordmal, who have learned not to send armies into the Drowned Country, count the mire among the reasons.

## Signs

- A long track of dead bog: gray, rotted reeds, bare trees and dead water, running across the marsh like a road.
- A stench of carrion, sulfur and grave-earth on the wind, far stronger than any carcass could make.
- Fish floating belly up in a channel, and frogs and birds silent for half a mile.
- A cause-walk of sunken logs that ends abruptly in black, soft, rotted wood.
- Bones, antlers and pieces of iron left on the surface of the bog in a line, as if dropped.

## Combat Strategy

The mire simply advances and engulfs. It surges over one victim at a time, choosing one it can swallow whole, and ignores the others while it feeds. It sprays acid at anyone near it. Its real weapon is time: its aura rots and sickens everyone who stays close, so a long fight against it is a losing one. When it is badly hurt it goes deep into the wettest bog and heals there. Fire is what a party needs, a great deal of it.

## Attack Methods

### Engulfing Surge

The mire surges forward and flows over a victim, partly or wholly, and grinds and dissolves whatever it holds. Flesh and equipment break down fast under the constant pressure.

### Corrosive Spray

The mire spits a spray of acid fluid at anyone within a few paces, which eats through leather, cloth and skin.

## Special Abilities

### Aura of Decay

Within fifteen feet of the mire, living things sicken and rot: men feel their strength drain, plants wither, and exposed flesh begins to fester. A weak man may be made ill by the miasma alone.

### Undying Regeneration

While it touches organic matter, corpses, plants or rich soil, it heals quickly from any wound. Fire, acid and powerful magic overcome the healing; nothing else does.

### Death Feeding

It grows larger and stronger with each meal, and a mire that has fed well on flesh is much more dangerous than one that has lived on reeds.

### Fire Weakness

Fire destroys its body where it burns and stops it healing there. Kept away from organic matter, it shrinks and weakens over weeks or months.

## Attributes

Strength
: 10-13 (1d4+9)

Endurance
: 17-22 (1d6+16)

Dexterity
: 7-12 (1d6+6)

Agility
: 5-10 (1d6+4)

Perception
: 11-16 (1d6+10)

Aura
: 17-22 (1d6+16)

Will
: 14-17 (1d4+13)

Reasoning
: 7-12 (1d6+6)

Creativity
: 5-10 (1d6+4)
