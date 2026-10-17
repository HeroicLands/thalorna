---
shortcode: yngfrdrg
name: {full: Young Fire Dragon, aliases: []}
type: being
subType: creature
description: "A century-old fire dragon at its most volatile, killing with raw territorial ferocity as it carves out fresh land and hoard."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: mythic
  attrRollFormula:
    str: 1d6+33
    end: 1d6+24
    dex: 1d4+4
    agl: 1d6+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+9
    wil: 1d6+14
    rea: 1d6+8
    cre: 1d4+7
    emp: 1d4+5
    elo: 1d6+8
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 13, aspect: piercing}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 12, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 11, aspect: blunt}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 11, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 40
          drawBase: 0
          traits: {breath: true, impactBands: 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 3}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
          - {name: Tail, shortcode: tailzone, probWeight: 3}
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
            protectionBase: &a1 {blunt: 16, edged: 18, piercing: 17, fire: 15}
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
            protectionBase: &a2 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 14, edged: 16, piercing: 15, fire: 13}
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
            protectionBase: &a5 {blunt: 10, edged: 12, piercing: 11, fire: 9}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 16, edged: 18, piercing: 17, fire: 15}
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
            protectionBase: &a6 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 14, edged: 16, piercing: 15, fire: 13}
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
            protectionBase: {blunt: 14, edged: 16, piercing: 15, fire: 13}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 200
        leaguesPerWatch: 14
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

You come round the shoulder of the mesa and stop, because the heat is wrong: a shimmer rising off the rock ahead that has nothing to do with the sun. Then the smell, sulfur and hot metal. On a ledge halfway up the cliff a dragon is pacing. It is smaller than the stories, sixteen feet of it, and that is no comfort at all. Its scales are copper and burnished gold, overlapping like a smith's best work, and smoke curls in pale ribbons from its nostrils. It moves in quick, restless jerks, scoring the rock with its claws, turning its head at every sound. Then it hears something, a falling stone or a goat, and it launches off the ledge with a roar, and the whole canyon seems to shrink round it.

# Dossier {#dossier}

The Young Fire Dragon is a fire dragon about a century old: sixteen feet from nose to rump, with a twenty-four-foot wingspan, at its most restless and most dangerous, carving out ground and a hoard of its own and killing with straightforward ferocity. Dragons are mortal creatures of the material world, born, long-lived and dying like any other, and what sets them apart is the vastness of their souls: their Aura is so great that their instinctive channeling floods the currents of magic round them, and a mage near a dragon finds his spells misfiring in his hands. Every young dragon alive was hatched long after the [Vylarian Republic]{.name data-type="affiliation/polity"} broke faith with dragonkind, and it has grown up knowing what the elder dragons and the dragon dead remember. One has come down in the last few years into the open desert of the [[place-dunhardsrtrgn|Dunhara Desert Region]], among the mesas and volcanic plugs where the tribes ride their circuits.

## Presentation

A young fire dragon is sleek and muscular, built for speed as much as power, leaner than its elders, with the musculature showing under its scales. The scales are crimson, copper and burnished gold, deepening to burned orange along the spine, and they are warm to the touch even when it rests. Its eyes are molten amber and follow every movement. Its wings are large for its body, made for agility, and its tail is thick, scarred and used as a weapon. Heat shimmers round it constantly; its breath steams in warm air; the ground darkens where it walks. Its movements are sharp and twitchy with energy barely held in, and it is never quite still.

## In the Land

The open desert of the Dunhara is sand seas, rocky mesas, lone volcanic plugs and the pale floors of dry lakes, with oases as the fixed points of everything, and no one rules it. The young dragon has taken one of the volcanic plugs for its lair, a crag of black rock with caves in it, and it is claiming the country round it: a stretch of mesas and two of the oases that the tribes' circuits pass through. It hunts the gazelle, the wild asses and the tribes' camels and goats, and it has begun to gather a hoard from the caravans it has burned: silver, brass, the painted chests of merchants, anything that shines. Young dragons range far and hunt actively, and this one is seen much more often than an older dragon would be.

## Key Behaviors

A young fire dragon is territorial, impulsive and proud. It attacks anything that seems to threaten its ground or its hoard, hunts for sport as much as food, and pursues what flees a long way. It is newly obsessed with its hoard and guards it with fury. It is curious about the world and vain about its powers, and it sometimes spares a victim for a moment to gloat over it. Any defiance or disrespect brings an instant, explosive response, and once it has taken offense there is no talking to it. It has not yet learned that words can be more useful than fire. It remembers who has wronged it, and it hunts down anyone who has wounded it or touched its hoard. It knows what humans did to its kind, and it does not distinguish one human people from another.

## What the Tribes Do

The tribes of the Dunhara live by custom, the code of salt, feud and reputation, and by the circuits each tribe rides through the year, and the dragon has broken two of those circuits. The tribes whose oases it has claimed have taken the long way round for two seasons, and have lost herds anyway. Their sheikhs have met in council about it and have not agreed: some want to go to the dragon with gifts and buy their wells back, some want to raise the confederation and kill it, and the poets, who keep the law in verse, have already begun composing the verses for both outcomes. Caravans that cross its stretch of desert do so at night, without lamps, and pay the tribes' guides double. A Vylarian agent of the [[affiliation-ordoarcanis|Thordimalon]] has been seen in the Amradi cities asking about it, and the tribes have not decided whether that is good news.

## Signs

- A shimmer of heat over a crag at night, when the desert has gone cold.
- Camel and goat carcasses burned black on one side, half eaten, far from any camp.
- A caravan's burned chests and scattered goods on the sand, the brass and silver gone.
- Long, deep claw-scores in the rock of a mesa's rim, and fused, glassy sand where something breathed on it.
- A sulfur smell on the night wind, and herds that will not graze toward a particular mesa.

## Combat Strategy

A young fire dragon fights on speed and aggression. It closes fast, burns everything, and chases whatever runs. It prefers to fight from the air, strafing its enemies with fire and keeping out of their reach. It singles out one enemy at a time and tries to destroy each before moving on. It does not feint or play for position, and it believes its hide is invulnerable, which recent victories have taught it. When it is cornered or outnumbered, it breathes, then takes to the air to gain distance, and when it retreats it means to come back with more fury.

## Attack Methods

### Bite

The dragon lunges with its whole weight behind its jaws and bites, often seizing and pinning its prey before it claws or burns it. The bite can take off a limb.

### Claw

It rakes with both forefeet in a blur, shredding armor and flesh, usually to finish a victim it has pinned or bitten.

### Tail

It whips its tail in a wide arc to strike and to keep enemies off, knocking smaller creatures down and off balance.

### Breath

It breathes a spreading gout of roiling flame fifteen feet long that sets everything combustible alight and badly burns everyone caught in it. It can breathe three times before it must rest, and more at the cost of exhausting itself.

## Special Abilities

### Flight

It is a strong flier, capable of sustained fighting in the air, and it uses flight to keep its distance and to chase down what runs.

### Armored Scales

Its scales turn most blows. Ordinary weapons rarely bite deep, and real harm takes enchanted weapons or sustained, concentrated attack.

### Heat Aura

The air within thirty feet of it is hot enough to be painful and tiring, and long exposure brings heat exhaustion.

### Unraveling Presence

A dragon's channeling floods the currents of magic round it. Near a dragon, a mage's working comes apart: spells misfire, wards fail, and partly channeled power discharges wildly, often on the mage.

## Attributes

Strength
: 34-39 (1d6+33)

Endurance
: 25-30 (1d6+24)

Dexterity
: 5-8 (1d4+4)

Agility
: 8-13 (1d6+7)

Perception
: 13-18 (1d6+12)

Scent
: 2-5 (1d4+1)

Aura
: 10-15 (1d6+9)

Will
: 15-20 (1d6+14)

Reasoning
: 9-14 (1d6+8)

Creativity
: 8-11 (1d4+7)

Empathy
: 6-9 (1d4+5)

Eloquence
: 9-14 (1d6+8)
