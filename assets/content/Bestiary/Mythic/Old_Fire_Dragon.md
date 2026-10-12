---
shortcode: oldfrdrg
name: {full: Old Fire Dragon, aliases: [Fire Wyrm]}
type: being
subType: creature
description: "A millennium-old fire-breathing wyrm of ash and calamity, sapient and vengeful, hoarding kingdom-bankrupting wealth over lands it conquers and razes."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-dragonheadft
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
    complexion: null
    extra_features: []
sohl:
  kbcat: mythic
  attrRollFormula:
    str: 1d6+57
    end: 1d6+42
    dex: 1d4+6
    agl: 1d4+6
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+11
    wil: 1d6+18
    rea: 1d6+14
    cre: 1d6+10
    emp: 1d6+10
    elo: 1d6+14
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 60}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 45}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 21}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 95}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 93}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 25, aspect: piercing}
          lengthBase: 10
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 24, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 24, aspect: edged}
          lengthBase: 9
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 32, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 23, aspect: blunt}
          lengthBase: 11
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 96
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 19, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 80
          drawBase: 0
          traits: {breath: true, impactBands: 19 · 15 · 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 16}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 16}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 12}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 12}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 16}
          - {name: Tail, shortcode: tailzone, probWeight: 12}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Torso
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
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
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
            protectionBase: &a1 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 26, edged: 28, piercing: 27, fire: 25}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6 {blunt: 28, edged: 30, piercing: 29, fire: 27}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 26, edged: 28, piercing: 27, fire: 25}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 26, edged: 28, piercing: 27, fire: 25}
      weight: {base: 8000, calc: "8000"}
      reachBase: 0
      bodyScaleBase: 3.01
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 180
        leaguesPerWatch: 18
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The ash plain runs to a horizon that glows a sullen red, and the air tastes of sulfur and hot iron. In the middle of the plain a hill of black rock is breathing. Then the hill lifts its head. It is a dragon, thirty-two feet of it and more, its scales layered and beveled like old plate armor, black and deep red and dull gold, with the dust of a thousand years in the seams. Fire moves slowly under the scales of its throat like coals under ash. Its eyes open, molten and enormous, and look at you without any hurry, as a scholar looks at an unexpected word on a page. When it speaks, in your own tongue, the voice comes up through the ground into your feet. "You have come a long way," it says, "to die somewhere this ugly."

# Dossier {#dossier}

The Old Fire Dragon is a fire dragon more than a thousand years old: thirty-two feet from snout to rump, its wings nearly fifty feet across, a weight of eight thousand pounds, and a mind that has watched kingdoms rise and fall. It speaks human tongues and tongues dead for centuries, composes, bargains and threatens, and it remembers everything. Like every dragon it is mortal, a creature of the material world with a soul of a scale no human approaches, and its channeling floods the magic round it so that no mage's working holds near it. It is old enough to have seen the Helionite war, when the Vylarian Republic bought the dragons' help with the return of their bound dead, and the betrayal that followed, when the Republic refused the return and began the killing. It lives now in the forsaken wastes of [[place-tzikinbalmrgn|Tz'ikin Ba'alam]], at the southern end of K'ich'chik, a world away from Vylaria.

## Presentation

An old fire dragon is a creature of terrible majesty. Its scales are thick and layered like plate armor, beveled and angled, black and deep red and dull gold, scarred and pitted with age, many of them never shed in centuries. Its wings are smaller for its body than a young dragon's and far more powerful, built for great loads and great heights. Its tail is massive and scarred. Its head is long and heavy, crowned with horns grown into a crest, and its eyes are molten gold. The heat round it is lethal: within fifty feet unprotected flesh burns, and within twenty metal blisters the skin. The ground where it lies is ash and glass.

## In the Land

Tz'ikin Ba'alam is forsaken country, blasted rock and ash, fields of ice, geysers and fire breaking from the ground, poisoned water and fungi the size of houses, and no one truly rules it; the Itzáni priesthood watches it from its threshold, and the warriors and priests who go into it to test themselves mostly do not come back. The dragon holds the ash plains where the fire comes up out of the earth, and its lair is in a cavern under a dead volcano, where its hoard lies: the tribute and plunder of a thousand years, from more lands than anyone in K'ich'chik has heard of. It hunts the wastes and the margins of the wastes, and it leaves them when it chooses, on errands of its own, and comes back.

## Key Behaviors

An old fire dragon is a mind of vast intellect and perfect memory. It remembers every significant event of its life with clarity: the names of the warriors who wounded it, the lineages of the kingdoms that paid it tribute, the places where it buried what it buried. It plans across decades. It speaks and bargains and enjoys both, and it is a dangerous negotiator because it knows exactly what everyone wants and how long it can wait. It is vengeful beyond anything human: it does not forgive and does not forget, and it holds the Vylarian betrayal, which it saw, as a debt still owed. It keeps servants and lesser creatures. It hunts when it is hungry and kills when it is offended, and both are rarer than they were.

## What the Priests and the Seekers Do

The [[affiliation-itzanpnthn|Itzáni]] priesthood that watches the wastes from their threshold regards the dragon as one of the terrors of Tz'ikin Ba'alam, and some of its priests regard it as something more, a power of the wastes to be approached with offerings. Warriors who go into the wastes to prove themselves sometimes go looking for the dragon, and the ones who come back, very few, come back changed, and some come back carrying a message for someone. Scholars of the dragons in the west, and agents of the [[affiliation-ordoarcanis|Ordo Arcanis]], which has spent centuries hoping the dragons forget, have heard rumors of an old fire dragon at the bottom of the world and would give a great deal to know what it knows of [[lore-dragondead|the dragon dead]] the Republic still holds, and what it means to do about them. The dragon has spoken to one or two of them. What it said, they have not repeated.

## Signs

- An ash plain glazed into glass in long, broad swathes where fire has been breathed across it.
- Heat that grows as one walks toward a dead volcano, until metal gear is too hot to touch.
- Tracks in ash the size of a cart, and the drag of a tail like a tree-trunk.
- Old tribute and the bones of those who brought it, lying in rows at the mouth of a cavern.
- A voice heard at night across the wastes, speaking a language the listener does not know, and answering itself.

## Combat Strategy

An old fire dragon is a master tactician with a thousand years of fighting behind it. It understands sieges, cavalry and the limits of human weapons, chooses its ground, feigns, waits, and uses servants and lesser creatures to wear its enemies down while it watches. When it strikes, it strikes overwhelmingly: fire from the air that melts stone, then bite and claw on what is left. It does not fight a fight it cannot win, and it can always wait. It is not reckless with its life. It has heard every argument a man has to offer and has killed most of the men who offered them.

## Attack Methods

### Bite

Its jaws close with the force of a falling gate, crushing armor and severing whatever they hold.

### Claw

It rakes and pins with claws like scythes, tearing through plate and the men inside it.

### Tail

Its tail sweeps with force enough to topple a tower and throws everyone in its arc down or away.

### Breath

It breathes a spreading torrent of flame sixty feet long, hot enough to melt castle stone, turn water to steam in an instant and bring down fortifications. It can breathe again and again without tiring, and it shapes the flame as it chooses, to burn one man or a village.

## Special Abilities

### Wing Buffet

It snaps its wings out in a blast that throws down everyone near it, snaps trees and cracks walls.

### Flight

It flies with great loads to great heights and crosses continents when it chooses.

### Armored Scales

Its scales are all but proof against any weapon a man can carry.

### Heat Aura

Within a hundred feet the heat is dangerous; within fifty, unprotected flesh burns; within twenty, metal blisters the skin. It can spare a chosen person from it.

### Draconic Presence

Within a hundred feet, intelligent creatures are filled with dread and terror; animals panic and cavalry breaks.

### Fire Immunity

Fire does not harm it.

### Unraveling Presence

Its channeling floods the currents of magic for a long way round it. Near it, no mage's framework holds: spells misfire, wards collapse, and half-channeled power discharges wildly, often fatally for the mage. It was this property of dragons that broke the Helionite mage-warlords.

### Lair Awareness

In its lair and the country round it, it knows everything that moves and everything that has been moved.

### Speech and Sapience

It speaks human tongues, its own, and tongues dead for centuries, and it bargains, argues, composes and threatens with equal skill.

### Immortal Memory

It remembers every significant event of a thousand years: names, places, lineages, treasures, debts. It is a priceless source for anyone who can survive asking.

## Attributes

- **Strength:** 58-63 (1d6+57)

- **Endurance:** 43-48 (1d6+42)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 12-17 (1d6+11)

- **Will:** 19-24 (1d6+18)

- **Reasoning:** 15-20 (1d6+14)

- **Creativity:** 11-16 (1d6+10)

- **Empathy:** 11-16 (1d6+10)

- **Eloquence:** 15-20 (1d6+14)
