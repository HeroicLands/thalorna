---
shortcode: flooddrake
name: {full: Chengsou, en: [The Flood-Drake]}
type: being
subType: creature
description: "A long, hornless made drake of a Tantsou river that rides a high spring flood down through the farmland and tears through the dikes and weirs that hold the river in."
tags: [dreadspawn, image-needed]
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
    str: 1d4+14
    end: 1d4+14
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+12
    aur: 1d4+16
    wil: 1d4+14
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 54}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Serpent Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Serpent Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: *a1
            canHoldItem: false
            probWeight: 1
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
            probWeight: 9
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 9
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The river has been rising for three days with the snowmelt from the mountains, brown and fast and full of broken reeds, and the corvée is out on the dike with baskets of earth. Then the men nearest the water drop their baskets and run. A swell is coming down the middle of the river, higher than the rest of the flood and moving faster, and something is riding it: a long back, scaled the color of river mud, as long as three oxen nose to tail from its blunt head to the whip of its tail, with no horns and no crest. It turns out of the current toward the dike and rides the swell in.

# Dossier {#dossier}

**Chengsou** (the Flood-Drake) is a dreadspawn in the shape of a long, hornless river drake that comes down one of the great rivers of the [[place-tantsouregin|Tantsou Region]] with a high spring flood and breaks the river's banks. It is named in the [[skill-tantsoulng|Tantsou Language]] from _cheng_, to rise, and _sou_, a serpent: _the rising serpent_. It rides the high water, rams and tears the dikes and weirs that hold the river in its course, and when the flood is through the breach it goes back to the deep water and rests there until the next high flood. Like every dreadspawn it was made, it is alive, and it does not breed. Only one is known, and the [[lore-tanchei|Tanchei]] register it as they register every dreadspawn met inside the [[affiliation-tantsouempr|Empire of Tantsou]].

## Presentation

The chengsou is long and low, twenty to thirty feet of thick, scaled body on four short, clawed legs, with a heavy tail longer than the rest of it. Its scales are brown and dull green, the colors of a river in flood, and paler underneath. Its head is blunt and flat, with small eyes set high and nostrils that close under water, and a wide mouth of hooked teeth. It has no horns, no crest and no beard. In the water it swims with its legs folded against its sides and its tail driving it, and it is very fast. On the bank it walks with its belly near the ground and moves heavily.

## In the Land

The chengsou lives in the river and nowhere else. Through the summer, autumn and winter it lies in the deepest reach of its river, a pool below the mountains where the water is cold and slow, and is seldom seen. When the snowmelt raises the river high in spring it comes down with the flood through the basin's farmland, past the terraces, the river villages and the market towns, as far as the high water carries it. It goes back upstream as the river falls.

## Key Behaviors

The chengsou breaks banks. It rides the strongest current of the flood, and wherever a dike, a weir or an embankment holds the river in, it turns against it and rams and tears at it until the water goes through. It attacks the people on a dike only when they stand in its way, and it eats the fish and the drowned beasts of the flood. When the river has broken through, it goes on downstream to the next bank. It does not leave the water, and as the flood falls it falls back with it.

## What the Districts Do

The river districts of the basin live by their dikes. The district corvée raises and mends the banks before the floods, and in a year of heavy snow on the mountains the magistrates call the corvée early and set watchers on the river below the mountains. When it comes down, the districts send runners ahead of it from one dike to the next. The Tanchei keep its entry in the register, with every breach and every district it has drowned, and the [[lore-wohou|Wohou]] who hold the districts treat it as they treat every dreadspawn: as an operation for heavy force, with a [[lore-wanduo|Wandwo]] to assess it first.

## Signs

- A swell running down the middle of a flooded river faster than the flood around it.
- Breaches in a dike torn outward from the river side, the earth gouged by claws.
- A broken weir with its posts snapped off below the waterline.
- Long gouges in the river face of a dike below the flood line, of four clawed feet and a dragged tail.
- Drowned cattle in a flooded field with the bites of a large mouth in them.

## Combat Strategy

The chengsou fights from the water and with the current behind it. It comes at a boat or a bank at speed, rams with its whole weight behind its head, and seizes and drags under whatever it has struck. It rakes with its forefeet at anyone who tries to hold it on a bank. Its strength is in the flood: in deep, fast water it is quicker than any boat and hard to hit, and it tears a breach in a dike faster than the men on it can fill one. In shallow water or on dry ground it is slow, it cannot ram, and its reach is no more than its jaws and claws.

## Attack Methods

### Serpent Bite

It drives in head first with the weight of its body behind the blow, then seizes with its hooked teeth and twists, dragging what it holds into the water.

### Raking Claws

A rake of its clawed forefeet, used to tear at a dike or at anyone who stands over it on a bank.

## Special Abilities

### Riding the Flood

In a flooded river it swims faster than any boat can row, and it rides the swell in so that its weight and the water strike a bank together.

### Bank-Breaker

Its claws and its weight are made for earth and timber. A dike or a weir that it reaches does not stand long.

### Low Water

Out of deep water it is a heavy, slow beast, and it does not leave the river by choice.

## Attributes

Strength
: 15-18 (1d4+14)

Endurance
: 15-18 (1d4+14)

Dexterity
: 11-14 (1d4+10)

Agility
: 13-16 (1d4+12)

Perception
: 13-16 (1d4+12)

Aura
: 17-20 (1d4+16)

Will
: 15-18 (1d4+14)

Creativity
: 11-14 (1d4+10)

Reasoning
: 9-12 (1d4+8)

## Plot Hooks

1. **The banks unmended.** The corvée of a river district was taken last season to build a Prince's hall, and the district's dikes have gone a year unmended. The watchers below the mountains have seen the swell, and the magistrate hires a party to hold the worst of the banks until the flood is past.
2. **The weir.** A town's weir was torn down in the last flood, and without it the town's channels run dry all summer. The magistrate needs it rebuilt before the snowmelt and guarded while the river rises.
3. **The entry.** A Tanchei registrar wants the chengsou's entry in the register made complete: its length, its weight and the pool where it rests. She hires a party to go upriver and measure it in its sleep.

:::secret {title="What beats the chengsou"}

- **A dam.** It rides the current and goes where the current goes. A channel dammed across its path, or a boom of chained timbers across the river, turns it aside as it turns the water.
- **A drained channel.** Drawn into a side channel or a breach and stranded there by closing the channel behind it and letting the water out, it is a slow beast on mud and can be killed.
- **The sacrificed bank.** It goes through the first breach the flood makes and follows the water. A district that breaks its own dike upstream, away from its town, draws the flood and the chengsou with it onto the open fields. The town is saved and that season's harvest on those fields is lost, and the Tanchei record the loss.
- **Two banks.** Two districts face each other across the river, and a dike broken on one bank saves the other. Each magistrate wants a party to break the other bank's dike before the chengsou arrives, and neither wants the other to know.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-tantsouregin|Tantsou Region]]
: the river basins its river runs through

[[lore-tanchei|Tanchei]]
: the scholar caste that keeps its entry in the register

[[being-abyssdrk|Abyssdrake]]
: another made drake of the water, which keeps a drowned ruin
