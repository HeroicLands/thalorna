---
shortcode: abysslsl
name: {full: Abyssal Silt}
type: being
subType: creature
description: "A predatory ooze from toxic marshes and deep caverns that lurks camouflaged in stagnant darkness, hungering with unnatural cunning."
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
    end: 1d6+16
    dex: 1d4+13
    agl: 1d4+13
    per: 1d6+10
    aur: 1d4+9
    wil: 1d6+14
    rea: 1d4+9
    cre: 1d4+9
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Corrosive Envelopment
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 77
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Corrosive Envelopment
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 14, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, envelop: true, impTA: 4}
    - name: Lashing Tendrils
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Lashing Tendrils
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.17
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 20
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[abysslsl|Abyssal Silt]]{float=top-left}

The pool at the bottom of the sinkhole is black and perfectly still, and the rock round its edge is stained green and rust. There are no reeds in it and no fish, and the bones on the ledge beside it are white and clean. The smell is sharp, like hot copper and burned hair. Then you see that the edge of the pool is closer to your feet than it was, and that it is not water: it is a thick, dark-blue sludge, crawling up the stone against the slope, and fine pale threads are rising out of its surface and turning toward you like the feelers of a snail.

# Dossier {#dossier}

The Abyssal Silt is a dreadspawn in the shape of a living pool: six to eight feet across when it spreads, about two hundred pounds of dark, corrosive slime that hunts by lying still in a dark place and dissolving whatever comes into it. It dwells in the flooded galleries of deep caverns and the black pools of poisoned country, and the place it is best known is [[place-qapteltzaklrgn|Q'aptel Tsa'kul]], the threshold of the southern wastes of [[place-kiichchik|Ki'ich'chik]], where the ground is stained by seeping minerals and the sinkholes hold pools no one drinks from. Like every dreadspawn it was made, and it cannot breed. It is clever after its fashion: it learns where prey comes, and waits there.

## Presentation

The Abyssal Silt looks like a pool of dark water until it moves. A closer look shows the surface crawling against the wind and the edges of the pool drawing in. Its color is a deep blue going to black, and in full darkness it gives off a faint, slow, pulsing glow. Fine, translucent threads rise from its surface to taste the air, and it can throw out heavier tendrils ten feet or more. It makes no sound but a wet sucking as it moves. Where it has lain, the stone is wet, pitted and pale, and bone, wood and leather left near it soften and fall apart.

## In the Land

It holds the flooded galleries of the deep caverns and the black pools of the poisoned marshes, and it spreads along drains and seeps into ruins built over either. In Q'aptel Tsa'kul that means the sinkholes and the mineral pools of the plateau's chaotic descent, the scalding springs where the vents have cooled, and the cisterns under the fortress-temples that guard the road south. A silt keeps to one pool or gallery for years, and can lie in it, unseen and unfed, for months. When it is hungry it roams, creeping along seeps and the damp floors of passages, and comes back. Silts are found apart from each other, never two in one pool.

## Key Behaviors

It lies motionless for weeks, spreads under a victim's feet, and feeds on whatever stays still long enough. It feels the vibration of footsteps through wet stone and water and tastes what passes in the water and the air, and it waits until its prey is standing in it or bending over it. Then it closes. It feeds slowly, dissolving flesh and bone, and leaves nothing but metal and a scatter of white bone at the pool's edge. It learns the paths animals and men use to come to water, and moves to lie across them.

## What the Temple Guides Do

The fortress-temples of Q'aptel Tsa'kul sell passage south, and their guides know every water on the road. They mark the pools they have lost animals to with a ring of stakes and draw water only upstream of them, and a guide tests any still pool with a long pole before a caravan comes near it: a pole that comes out pitted and smoking means the caravan goes round. A pool marked by the stakes is never entered for any reason, and the guides charge more for a road that passes one. Alchemists who come to the plateau to study the poisons of the vents pay the temples well for a jar of silt taken alive, and the guides who fill one with a long-handled ladle of fired clay are paid more than for a season's guiding.

## Signs

- Animal bones, clean of flesh, in a pool with no fish in it.
- A ring of dead reeds or bare stone around still water, the stone bleached and pitted.
- A sharp smell of hot copper and burned hair in a cave or sinkhole with no fire in it.
- Leather, rope or wood left at the edge of a pool found next day soft and rotten.
- A faint blue glow under the surface of a pool at night, slowly brightening and fading.

## Combat Strategy

It waits for prey to enter it, then closes over the legs and holds. Once it has a victim it pulls tendrils over him and draws the whole of its mass round him, and it does not let go while it is feeding. Against several attackers it lashes with tendrils to drag the nearest in and keeps the rest back. It cannot be frightened, but it does not fight to the death: badly hurt, it breaks itself into pieces that slide off in different directions into cracks and water, and draws itself back together in the dark days later.

## Attack Methods

### Corrosive Envelopment

The silt rises over a limb and clings, and the flesh beneath it softens. It contracts its whole mass round a victim's legs or body and eats into him, through leather and cloth, for as long as it holds on, and it can hold on a long time.

### Lashing Tendrils

Long, elastic tendrils whip out of the mass, wrap round an arm, a leg or a neck, and drag the victim toward the silt's center. Each strike entangles and pulls.

## Special Abilities

### Acid Secretion

Its body eats through leather, cloth and wood in a few breaths, and bone and flesh soon after. Wooden shields and leather armor in sustained contact with it break down and fall apart.

### Fission

Badly hurt, the silt splits into several smaller pools that flee separately, each with a share of its strength and each hungry. The pieces draw back together into one creature when the danger has passed. A piece that cannot find the rest dries and dies.

### Sensing Through Water

It perceives everything moving in water or on damp stone within a fair distance, by vibration and by taste. It needs no light, and darkness and concealment do not hide anyone from it in its own pool.

### Regeneration

In damp and dark, the silt heals slowly but steadily: small wounds close within hours and great ones over days and weeks. Dried out or in sunlight, it does not heal at all.

## Attributes

Strength
: 11-16 (1d6+10)

Endurance
: 17-22 (1d6+16)

Dexterity
: 14-17 (1d4+13)

Agility
: 14-17 (1d4+13)

Perception
: 11-16 (1d6+10)

Aura
: 10-13 (1d4+9)

Will
: 15-20 (1d6+14)

Reasoning
: 10-13 (1d4+9)

Creativity
: 10-13 (1d4+9)
