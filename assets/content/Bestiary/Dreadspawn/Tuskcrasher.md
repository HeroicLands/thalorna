---
shortcode: tskcrshr
name: {full: Tuskcrasher, aliases: []}
type: being
subType: creature
description: "A made, colossal wild boar of suicidal ferocity that rules deep forests and destroys any threat to its territory."
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
    str: 1d6+23
    end: 1d6+18
    dex: 1d4+5
    agl: 1d4+6
    per: 1d4+8
    aur: 1d4+3
    wil: 1d6+16
    rea: 1d4+5
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 27}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 63}}
    - name: Goring Charge
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Goring Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 9, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Destructive Trampling
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Destructive Trampling
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 16}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 12}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 9, edged: 8, piercing: 6, fire: 8}
      weight: {base: 3000, calc: "3000"}
      reachBase: 0
      bodyScaleBase: 1.79
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[tskcrshr|Tuskcrasher]]{float=top-left}

The drove road runs through a hanging wood of oak and holly, and the drovers have stopped the herd. Ahead, the wood is broken: trees snapped off at waist height, a swathe of them, as if a storm had come through in a line. From the end of the swathe comes a grunt you feel in your chest. Then the boar comes out of the trees. It is as tall at the shoulder as a man on a horse, black and bristled, with tusks that curl up past its eyes as long as a man's arm, and its eyes are small and red with rage. It does not snort or paw the ground. It simply lowers its head and charges, and the oaks it hits on the way go down.

# Dossier {#dossier}

The Tuskcrasher is a dreadspawn in the shape of a gigantic wild boar, seven to eight feet at the shoulder and as heavy as a team of oxen, with tusks like scythes, hide like a tanned door, and a temper that makes no difference between a wolf and a war-party. It claims ten to twenty miles of forest and defends it against everything that moves through it, with a ferocity that does not stop for wounds. One holds the wooded hills of [[place-auldalon|Áuldalon]], [[place-elavendre|Élavendre]]'s eastern march, where the drove roads run west to the markets and the raiders come down from the east, and it has fought them both. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The tuskcrasher is a boar on a monstrous scale: a huge, wedge-shaped head, a massive humped neck and shoulders, short thick legs and a body like a hay wagon. Its hide is very thick, covered in coarse black bristles that stand on end when it is roused, and caked with mud and scarred all over. Its tusks curl up and back from the lower jaw, longer than a man's arm, yellowed and chipped, kept sharp on the upper tusks and on trees. Its eyes are small and red. It smells rank enough to set horses screaming at a quarter of a mile. It moves through forest by going through it, and the trees it cannot go round it knocks down.

## In the Land

Áuldalon's rolling wooded hills are excellent for stock and are the road by which trouble arrives overland, and the tuskcrasher holds a long stretch of them east of [[place-valdun|Valdun]], oak and holly woods with clearings and springs. It has wallows and resting places all through its ground, and it roots for mast, roots and anything else, and eats cattle when it can catch them. Its ground lies across two of the drove roads, and it treats a drove of cattle as an invasion. It treats a raiding band of the [[lore-grukarfolk|Grukar Folk]] or a [[lore-varokhiclt|Varokhi]] war-party the same way, and it does not seem to care which side of the march anyone is on.

## Key Behaviors

The tuskcrasher patrols its ground, feeds, wallows and fights. It attacks everything large that comes into its ground, without warning and without stopping, and it does not tire: it fights for hours, and its rage grows with every wound. It is not clever, but it remembers the roads people use and the times they use them. It sharpens its tusks on oaks until they are scarred white, and it plows up whole clearings rooting. In autumn, in the mast season, it is worst.

## What the March Does

Áuldalon is built for raiding, and the march treats the tuskcrasher as one more raider, and a useful one. The droving families, a power of their own, send their herds round its ground by the long road, which costs them two days and saves the drove. The hill levy at Valdun, which has a better record against Varokh war-parties and Grukar bands than the court's cavalry, keeps a careful eye on which way raiders come in, because a band that comes through the tuskcrasher's ground arrives at Valdun smaller, if it arrives at all. When the boar has come out of its ground toward the steadings, the levy has turned it back with fire and noise, and twice has tried to kill it with spears set against its charge, and has buried the spearmen. The levy's officers would not kill it now if they could, and say so over a drink.

## Signs

- Trees snapped off at waist height in a straight line through a wood, as if a storm had come through.
- Clearings plowed up to the subsoil, and wallows the size of a cottage floor.
- Oak trunks scarred white and gouged at the height of a man's chest, where it whets its tusks.
- Huge cloven hoofprints, each as wide as a shield, sunk deep in a wallow's edge.
- A rank smell on the wind that sets cattle bellowing and horses rearing.

## Combat Strategy

The tuskcrasher charges, every time, with its head down and its whole weight behind its tusks, and it goes through whatever is in front of it. Then it slashes with the tusks, turns, and tramples what is down, and charges again. It does not plan, it does not retreat, and it does not tire, and wounds make it faster and angrier. Its weakness is that it is not clever: a party that scatters and uses trees, rocks and ravines too steep for it can avoid its charges, and fire hurts it and slows it.

## Attack Methods

### Goring Charge

The boar charges at full speed with its head down, and its tusks drive into anything in front of it with the weight of its whole body behind them. It is nearly impossible to stop or to dodge in close country, and it guts horses and throws men like sacks.

### Destructive Trampling

Once a man is down, the boar runs over him and stamps on him with its huge hooves, and nothing beneath them survives long.

## Special Abilities

### Tusk Strike

Close in, it slashes sideways and upward with its tusks, cleaving flesh, bone and wood alike, again and again while its enemy is in reach.

### Forest Authority

It moves through dense forest and broken ground faster than across open country, crashing through obstacles that would stop anything else.

### Relentless Aggression

It does not tire, it fights for hours, and wounds make it faster and stronger.

### Hide Resilience

Its thick hide and great bulk shrug off most weapons. Blows that find the eyes, the throat or the joints of the legs do far more than blows to the body.

### Fire Weakness

Fire hurts it and frightens it, and enough fire will turn it, though only a very hot fire stops a charge already under way.

## Attributes

- **Strength:** 24-29 (1d6+23)

- **Endurance:** 19-24 (1d6+18)

- **Dexterity:** 6-9 (1d4+5)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 4-7 (1d4+3)

- **Will:** 17-22 (1d6+16)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 4-7 (1d4+3)
