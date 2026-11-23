---
shortcode: cragroc
name: {full: Qavrogar, en: [The Crag-Roc]}
type: being
subType: creature
description: "A single made bird of prey of the Dunhara Desert, its wings broad enough to roof a camp, that takes one beast at a time from the tribes' herds and carries it to a ledge on a lone black rock."
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
    str: 1d6+37
    end: 1d6+32
    dex: 1d6+11
    agl: 1d6+9
    per: 1d6+13
    aur: 1d6+7
    wil: 1d6+11
    rea: 1d4+6
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 41}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 95}}
    - name: Diving Talon Strike
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 51
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Diving Talon Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 15, aspect: edged}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Crushing Grip
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Crushing Grip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 41, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
    - name: Beak Strike
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 16, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 5}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 5}
          - {name: Body, shortcode: torsozone, probWeight: 10}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 5}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 5}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
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
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
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
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 6000, calc: "6000"}
      reachBase: 0
      bodyScaleBase: 2.35
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 130
        leaguesPerWatch: 15
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The herd is spread across the gravel flat below the black rock, camels and goats grazing on the thorn scrub that the winter rain has brought up, and the herd boys are asleep in the shade of a boulder. The light goes all at once. A shadow is crossing the flat, wider than the whole camp of tents at the well, and the goats are already running before anyone has looked up. The bird above them is bronze and black, with wings broad enough to roof a camp, and it comes down on the herd without a sound until the last moment. It takes one camel, only one, in talons the length of swords, and climbs with it, slowly and heavily, toward a ledge high on the black rock.

# Dossier {#dossier}

**Qavrogar** (the Crag-Roc) is a dreadspawn, one of a kind, in the shape of an enormous bird of prey that hunts the herds of the [[place-dunhardsrtrgn|Dunhara Desert Region]]. It is named in the [[skill-dunharlng|Dunhari Language]] from _qavram_, to take, with the ending _-ogar_ of one whose calling a thing is: _the taker_. It nests on a ledge of a lone volcanic plug in the open desert and takes livestock from the herds that graze below, one animal at a time, and carries each to its ledge. Like every dreadspawn it was made, it is alive, and it does not breed. Only one is known.

## Presentation

The qavrogar is built like an eagle on an impossible scale: a hundred feet across the wings and weighing several tons. Its back and wings are black, shading to bronze on the breast and under the wings, and its head is bare and dark red, with a hooked beak as long as a man and pale, forward-set eyes. Its legs are thick and scaled, and its talons are as long as swords. It never calls. In the air it is the most graceful thing in the desert. On the ground it is heavy and clumsy: it walks with a lurch, its wings drag, and it has to run and beat hard to lift from flat ground.

## In the Land

The plug it nests on rises alone out of the gravel and the dunes, a tower of black rock several hundred feet high with sheer sides, a day from the nearest well. Its ledge is near the top, on the side away from the wind. The qavrogar hunts the country around the plug for a day's ride in every direction, over the grazing that the tribes use on their seasonal circuits and the wells where their herds water. It takes camels, sheep, goats and the occasional horse, from herds and never from the wild, and it takes a beast with whatever is on its back.

## Key Behaviors

The qavrogar hunts by day, soaring too high to see until it stoops. It takes one beast from a herd, carries it to its ledge and eats there, and it does not hunt again until it has eaten what it took. It takes the beast it can reach most easily, which is often the one standing apart from the rest. It does not attack people on the ground unless they stand between it and its kill, or unless they have hurt it, and it remembers both. It does not leave its country.

## What the Tribes Do

The [[affiliation-dunhartrbs|Dunhara Tribes]] whose circuits pass under the plug cross that country quickly, graze their herds near overhangs and gullies in the hours it hunts, and pen the beasts in the ravines at midday. A tribe that loses a beast to it counts the loss and moves on, and the tribal poets keep the count in their verse with the rest of the tribe's history. The guides of the caravan roads take their strings round its country when they can and through it at night when they cannot.

## Signs

- A shadow crossing a herd that is too large and too fast for a cloud.
- A whole herd crowded under an overhang at midday with its herd boys.
- Camel bones on the rocks at the foot of a black plug, cracked by a fall.
- A black feather longer than a man lying across the gravel.
- A saddle, a water skin or a pack lying on the gravel far from any camp, dropped from a height.

## Combat Strategy

The qavrogar fights from the air. It stoops from a great height, strikes with its talons, and seizes what it strikes; a beast or a man taken up is crushed in its grip and carried away, or dropped from a height onto rock. It stoops again and again at anything on open ground that has hurt it. It is strong enough to carry off a camel and hard to hurt with ordinary arrows, but it has to come down low to take anything, and on the ground it is slow, clumsy and slow to rise.

## Attack Methods

### Diving Talon Strike

It falls on its prey from a great height with its talons forward, and the weight of the whole bird drives them in.

### Crushing Grip

It closes its talons on what it has struck, crushing it, and lifts it off the ground if it can.

### Beak Strike

On the ground or at its ledge it strikes with its hooked beak, which shears through hide and bone.

## Special Abilities

### Shadow Over the Herd

It soars too high to be seen and stoops without a sound, so that its shadow is often the only warning.

### The Burden

It lifts a full-grown camel with its load and carries it to its ledge from a day's ride away.

### Clumsy on the Ground

Brought down to flat ground, it lurches and drags its wings, and it needs a long run to rise again.

## Attributes

Strength
: 38-43 (1d6+37)

Endurance
: 33-38 (1d6+32)

Dexterity
: 12-17 (1d6+11)

Agility
: 10-15 (1d6+9)

Perception
: 14-19 (1d6+13)

Aura
: 8-13 (1d6+7)

Will
: 12-17 (1d6+11)

Creativity
: 5-8 (1d4+4)

Reasoning
: 7-10 (1d4+6)

## Plot Hooks

1. **The herds for the Kingdom.** A tribe has sold a herd of camels to buyers from the [[place-amradadrgn|Amradad Region]], and the way to the market runs through the qavrogar's country. Every day of the drive costs a camel, and the sheikh hires a party to bring the herd through whole.
2. **What was on its back.** The qavrogar took a pack camel from a caravan, and on the camel's back was a merchant's chest. The merchant wants the chest back from the ledge and pays well for the climb.
3. **The circuit.** A tribe's circuit takes it past the plug to a well it cannot do without, and the qavrogar has taken a beast every day of the crossing. The elders want it driven off or killed before their herds are gone.

:::secret {title="What beats the qavrogar"}

- **The ledge.** At night it sleeps on its ledge, and a party that climbs the plug and reaches the ledge finds it on the ground, clumsy and slow to rise, with a sheer drop behind it. The ledge holds everything it has carried: the bones of its kills, and the saddles, packs, water skins and goods that were on their backs.
- **Lures and nets.** It takes the beast standing apart. A beast staked alone on open ground under nets strung from poles brings it down into the nets, and a tangled qavrogar on flat ground can be killed.
- **Archery from cover.** It must come low to take a beast. Archers hidden under an overhang or in a gully beside a staked beast can shoot as it lifts with its kill, when it is slow, low and laden, and it cannot stoop on them where they are.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-dunhardsrtrgn|Dunhara Desert Region]]
: the open desert of the tribes, where its plug stands

[[being-roc|Roc]]
: the great bird of the Grazian peaks, of which there are a few, and which hunts as a beast hunts
