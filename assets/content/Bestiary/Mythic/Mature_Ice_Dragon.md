---
shortcode: mtricdrg
name: {full: Mature Ice Dragon, aliases: []}
type: being
subType: creature
description: "A patient apex ice dragon spanning thirty-six feet with fifty-foot wings, an ancient architect of its own legend after centuries of scheming."
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
    str: 1d6+45
    end: 1d6+33
    dex: 1d4+5
    agl: 1d4+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+10
    wil: 1d6+16
    rea: 1d6+10
    cre: 1d6+8
    emp: 1d6+7
    elo: 1d6+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 84}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 66}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 19, aspect: piercing}
          lengthBase: 8
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 18, aspect: edged}
          lengthBase: 7
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          lengthBase: 9
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 15, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {breath: true, impactBands: 15 · 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 8}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 6}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 8}
          - {name: Tail, shortcode: tailzone, probWeight: 6}
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
            protectionBase: &a1 {blunt: 22, edged: 24, piercing: 23, fire: 21}
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
            protectionBase: &a2 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 20, edged: 22, piercing: 21, fire: 19}
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
            protectionBase: &a5 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 22, edged: 24, piercing: 23, fire: 21}
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
            protectionBase: &a6 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 20, edged: 22, piercing: 21, fire: 19}
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
            protectionBase: {blunt: 20, edged: 22, piercing: 21, fire: 19}
      weight: {base: 3000, calc: "3000"}
      reachBase: 0
      bodyScaleBase: 2.61
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 190
        leaguesPerWatch: 16
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The storm came up the valley with no warning, as the guide said they do, and now it has passed, and the col is white and silent. On the far side of the col, where the ice runs down to a frozen lake, the snow is moving. A shape rises out of it that is the size of a ship, pale blue and white and gray, scarred across the shoulders and the neck with old, long-healed wounds, and it unfolds a pair of wings that cover half the lake. The air between you warps, like heat-shimmer made of cold, and in it you see the col doubled, and a second dragon beside the first that is not there. The real one lowers its head. "[[lore-hvarnclt|Hvarn]]," it says to your guide, in your guide's own tongue. "You have brought me someone new."

# Dossier {#dossier}

The Mature Ice Dragon is an ice dragon of two or three centuries: twenty-four to thirty-six feet long with wings of fifty feet and more, at the height of its power, patient beyond any human measure, and the architect of its own legend. It holds a great range with several lairs, hunts with deliberation, plays a long game with the peoples round it, and speaks. Like every dragon it is a mortal creature with a vast soul, and magic comes apart near it. It was hatched in the centuries after the [Vylarian Republic]{.name data-type="affiliation/polity"} betrayed the dragons, and it has made a life far from the west. It holds the high glaciers of [[place-estrnreach|The Eastern Reach]], the cold arc of [[place-graznmntns|The Grazian Mountains]] that turns east toward [[place-tantsouregin|Tantsou Region]], and [[affiliation-hvarnguides|The Hvarn]] who keep the two eastern crossings know it as well as they know the weather.

## Presentation

A mature ice dragon is massive and long, its scales pale blue, white and gray, thick and translucent at the edges like old ice, many of them centuries old and never shed. Old scars cross its shoulders and neck, from adventurers long dead and from fights with creatures as large as itself, and they add to its look of age and power. Its eyes are pale and clear. The cold round it is so fierce that the air warps and shows mirages, and ice forms on everything near it. It moves with complete deliberation, it is in no hurry, and it watches everything.

## In the Land

The Eastern Reach is lower and narrower than [[place-sthrnwall|The Southern Wall]] and colder for it, with storms that come up the eastern valleys without warning, and its crossings, [[place-jnanadvara|Jnanadvara]] and [[place-sankhadvra|Shankhadvara]], are Hvarn ground. The dragon holds the glaciers and cirques of the high Reach between the two crossings, with lairs in ice caves at several of them, and it moves between them with the seasons. It hunts the wild yaks, sheep and goats of the high pastures and, now and then, a caravan's beasts. It does not take Hvarn parties. The Tantsou way-station beyond Jnanadvara, which keeps a register of everything that comes through, has an entry for it.

## Key Behaviors

A mature ice dragon is patient past any human sense of the word. It waits years for revenge and decades for an opportunity; it watches kingdoms for generations and learns their defenses. It hunts deliberately and seldom, and it can go a long time between meals. It cultivates its own legend: it lets itself be seen, at the right moment, by the right people, and it shapes the stories told of it, so that the peoples round it do what it wants because the stories tell them to. It speaks several tongues and bargains well, and it keeps the bargains it makes for exactly as long as they serve it. It holds grudges for centuries.

## What the Hvarn Do

The Hvarn share their roads out each winter among their hearths, and every hearth that draws a crossing under the dragon's glaciers draws the dragon with it. The Hvarn have an arrangement with it, whose terms they do not tell lowlanders: their parties are not touched, a share of every caravan's goods is left on a particular stone at the top of the col, and the dragon is told who is crossing and why. [[place-sanghafort|The Sangra-fort]]'s garrison, which runs on Hvarn pack-trains, pays its part without being told what it is paying for. The Tantsou way-station's [[lore-tanchei|Tanchéi]] registrar has the dragon in the register as a classified creature of the frontier, with notes on its habits that go back two centuries; she believes it reads the register, and she may be right. Lowland merchants who try to cross without a Hvarn guide, to save the guide's share, are the dragon's usual meals.

## Signs

- A flat stone at the top of a col heaped with goods nobody comes back for.
- Mirages in still, bitter air: doubled peaks, a second figure beside the first.
- Yaks and sheep frozen where they stood on a high pasture, with nothing else disturbed.
- Ice formed overnight across a stream in summer, in a band, where something cold has crossed.
- Guides who stop at a particular place on the road and speak aloud to an empty mountainside.

## Combat Strategy

A mature ice dragon fights only when it has decided to, and by then it has chosen the ground, the hour and the weather. It strikes out of a storm or from the glare of the ice, breathes its supercooled mist to blind and freeze, and uses its wings and tail to throw its enemies off the ice. It confuses with mirages from its cold aura. It will not risk a serious wound: it retreats, and comes back years later, when its enemies have grown careless. It knows the tricks men use against dragons.

## Attack Methods

### Bite

The jaws close with crushing force, and the flesh round the bite freezes and dies.

### Claw

It rakes with claws that grip ice, tearing through armor and pinning what it holds.

### Tail

Its tail, nearly as long as its body, whips in an arc that knocks everyone in its path off their feet unless they are braced, and can topple small buildings.

### Breath

It breathes a spreading blast of supercooled crystalline mist thirty feet long that freezes and frostbites at once. Exposed flesh can crystallize and shatter, and the mist is dense enough to blind.

## Special Abilities

### Wing Buffet

It snaps its wings outward and batters everything within twenty feet, knocking down anyone not strong enough to keep his feet and blowing him back ten feet or more.

### Flight

It flies powerfully through the storms of the high country and rides the winds others cannot.

### Armored Scales

Its scales are all but proof against ordinary weapons. Enchanted weapons or great heat are needed to hurt it.

### Cold Aura

Within a hundred feet the cold is lethal to the unprotected, worse with every moment. The aura bends light into distortions and mirages, and ice forms on everything near it.

### Draconic Presence

Those near it feel its power as dread, and animals panic.

### Cold Immunity

Cold does not harm it.

### Unraveling Presence

Its channeling floods the currents of magic round it, and near it a mage's workings come apart: spells misfire, wards fail, and partly channeled power discharges wildly.

## Attributes

- **Strength:** 46-51 (1d6+45)

- **Endurance:** 34-39 (1d6+33)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 13-18 (1d6+12)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 11-16 (1d6+10)

- **Will:** 17-22 (1d6+16)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 9-14 (1d6+8)

- **Empathy:** 8-13 (1d6+7)

- **Eloquence:** 11-16 (1d6+10)
