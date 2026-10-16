---
shortcode: grtstg
name: {full: Great Stag, aliases: []}
type: being
subType: creature
description: "A regal megafauna deer ruling deep temperate woodlands in herds, a dominant prime male built for unstoppable dominance through raw power."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-staghead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+12
    end: 1d6+11
    dex: 1d6+9
    agl: 1d6+10
    per: 1d6+11
    aur: 1d6+7
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Antler Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Antler Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Hoof Strike
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Hoof Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
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
            roles: &a1 [locomotor]
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
            roles: []
            canHoldItem: false
            probWeight: 2
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 800, calc: "800"}
      reachBase: 0
      bodyScaleBase: 1.28
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[grtstg|Great Stag]]{float=top-left}

A line of bark has been stripped from the oak at the height of your head, in long ribbons, and the ground beneath it is torn and wet. A low roar comes through the trees, and then, in the glade ahead, a great deer steps out from the beeches, over six feet at the shoulder and brown as a chestnut, with a white blaze on his chest. His antlers, a matched pair spreading nine or ten feet, rock slowly as he turns his head and finds you.

# Dossier {#dossier}

The Great Stag is the giant red deer of the deep woods, over six feet at the shoulder, with antlers spanning nine to ten feet. A herd of does and young animals under one dominant stag lives in the old oak and beech woods of [[place-vrystwald|Vristwald]], the woodland of [[place-aureldirgn|Aureldia]] and the Silver Forests of Élavendre. The stag is peaceful until he has a territory, a doe or his standing to defend, and then he fights with total determination.

## Presentation

A large, noble deer, muscular but refined, built for speed as well as power. The antlers are a matched pair spanning nine to ten feet, with many points and branches, each sharp enough to go through armor. The coat is rich brown with a paler belly and a white patch on the chest. The head is large, with intelligent eyes and ears set to catch sound from all sides.

## In the Land

Great stags hold the old oak and beech woods of [[place-vrystwald|Vristwald]], the temperate woodland of [[place-aureldirgn|Aureldia]] and the Silver Forests of Élavendre. A herd of does and young animals keeps to a stretch of woodland, a glade for grazing and a thicket for lying up, and the master stag stays with them through the autumn rut. In winter the herd yards up in a sheltered valley and browses the bark and twigs.

## Key Behaviors

Herds are made up of does and their young, and the dominant stag has the breeding. In the rut stags are aggressive and territorial, challenging rivals and holding their does. Outside the season they may form bachelor groups with males of like strength. They feed at night and in the twilight and chew the cud by day. They bugle and roar, and mark ground with scent.

## What the Villages Do

The stag is the wesk of Vristwald villages such as Eichwald, Thragrund and Dagstein, and a stag's hunt there is a rite, led by the Weskár. The lords of the Aureldian kingdoms keep woods for the chase, and take a great stag with hounds, a horn and a mounted party. The Sinale call the stag by a name of its own, and treat its kill as a theft from the wood. A stag's antlers are carved into hilts and combs, and the hide is made into gloves. A village that kills the master stag in its own woods loses the herd for several seasons.

## Signs

- A tree with its bark torn off in strips at head height, where the antlers were rubbed.
- A hollow in the leaf litter, bed-sized and still warm in the morning.
- A deep roar, repeated, across a valley in the cold mornings of autumn.
- Prints of a cloven hoof as wide as a man's hand, with the dew-claws showing.
- A ring of trampled ground, with torn turf and broken saplings, where two stags have fought.

## Combat Strategy

A Great Stag uses its antlers as primary weapons, charging with the full weight of its body and using the antlers as lance points. If forced to fight at close range, the stag uses powerful legs to deliver crushing kicks from both hind legs (when rearing) and front legs (when striking). A stag defending its herd or territory fights with terrible determination and will not retreat until the threat is eliminated or escape is impossible. A stag facing overwhelming odds will attempt to scatter and flee, using forest terrain to break pursuit.

## Attack Methods

### Antler Charge

The stag drives forward with antlers lowered, using the combined force of the charge and the weight of the creature to impale and gore opponents. Each point of the antlers can penetrate armor.

### Hoofed Strike

Both front and hind legs deliver powerful kicks—the hind legs are used when the stag rears, the front legs during a collision. These strikes are capable of breaking bones and driving opponents backward with force.

## Special Abilities

### Herd Coordination

When the stag moves with a herd, the group shares alertness and protective behavior. A threat to one triggers response from all, and the herd can execute coordinated movements—stampedes or coordinated charges—that amplify the danger.

### Dominance Display

The Great Stag can perform displays of intimidation—rearing, bellowing, and thrashing antlers—designed to frighten opponents. A creature witnessing this display must resist fear or risk fleeing.

## Additional Information

A Great Stag's antlers are shed annually and can be collected for weapons, decorations, or trophies. The size and quality of antlers reflects the stag's health and status. A stag's hide is valuable for leather working. Some cultures consider the Great Stag sacred or hunt it as the ultimate test of a warrior's skill.

## Attributes

- **Strength:** 13-18 (1d6+12)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-13 (1d6+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
