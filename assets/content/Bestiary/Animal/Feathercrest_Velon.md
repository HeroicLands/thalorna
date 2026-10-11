---
shortcode: fthrcrst
name: {full: Feathercrest Velon, aliases: []}
type: being
subType: creature
description: "A four-foot iridescent-plumed pack predator of dense forests and rocky highlands, aggressively territorial and cunning in its hunts."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+7
    end: 1d6+9
    dex: 1d6+12
    agl: 1d6+13
    per: 1d6+11
    aur: 1d4+7
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Talon Slash
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Talon Slash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Beak Stab
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 71
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Beak Stab
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreclaw
            shortcode: lforelegpart
            bodyZoneCode: torsozone
            roles: &a1 [locomotor, manipulator]
            canHoldItem: false
            probWeight: 2
          - name: Right Foreclaw
            shortcode: rforelegpart
            bodyZoneCode: torsozone
            roles: *a1
            canHoldItem: false
            probWeight: 2
          - name: Left Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Right Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 8
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: []
            canHoldItem: false
            probWeight: 4
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
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
          - name: Left Foreclaw
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreclaw
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 50, calc: "50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 8
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[fthrcrst|Feathercrest Velon]]{float=top-left}

A bird calls somewhere up the slope, a run of notes that jars like a bell struck wrong, and a second answers it from behind you. Something bright crosses between two boulders at the edge of the trees, upright on two legs, four feet tall, green and violet and gone. The call comes again, closer, and this time it seems to come from the rock itself. Then the thing steps out into the open and a fan of feathers opens round its head like a shield of colored glass, and it screams.

# Dossier {#dossier}

The Feathercrest Velon is a four-foot, fifty-pound hunting bird of the highland forests of the [[place-pshtrwldrns|Peshtar Wilderness]] on Aelwyth, which runs on two legs, flies in short, fast bursts between crag and tree, and hunts in packs of six to a dozen. Its plumage shifts from blue to green to violet with the light, and the crest it fans when it attacks is the brightest thing in the forest. It takes hares, grouse and fawns for the most part, and a pack that is hungry takes a man.

The Peshtar tribes hunt it for the crest and keep well clear of its ground otherwise. The lowland kingdoms know it from the headdresses and from the few hunters who come home without their dogs.

## Presentation

A lean, upright bird on long, strong hind legs, built for a sprint and a leap, with short forelimbs that end in talons the length of a finger. The plumage is fine and close, and its colors change as the bird turns. The crest is a fan of long feathers that lies flat along the skull and snaps open to twice the width of the head. The eyes are large, forward-set, amber or deep red. The beak is hard and hooked. The wings are short and rounded, enough to carry the bird over a gully or up into a crag in a whirring rush of a hundred paces, and it climbs trees with its talons as readily as it flies.

## In the Land

Velons live in the broken country where the Peshtar forest meets rock: the gullies, scree slopes and crag-edged clearings of the island's northwestern highlands, and the forest margins where the [[place-nordfells|Nordfells]] run east from the Peshtar woods. A pack holds a hunting ground of a few square miles and marks its edges with the plucked feathers and fur of its kills, hung on thorns, and a traveler who finds a bush dressed that way has been told to turn back. They are rarer in the deep forest, where there is nothing to drop from, and absent from the settled kingdom-belt in the east.

## Key Behaviors

A pack hunts by day, in the dappled light of the forest edge where its colors break up its outline. The birds talk constantly in high, ringing calls that rebound off rock, so that a listener cannot place them, and they hunt by surrounding: one or two show themselves and call, the rest come in from the sides and from above, dropping from the crags. They eat hares, grouse, lambs and fawns and the young of anything larger. A pack has an order, and the leading pair feed first. A lone velon is a cautious animal that will not attack a man; a hungry pack will, and once it has started it presses until the man is down or the pack has lost too many.

## What the Tribes Do

The Peshtar know a velon ground by its dressed thorns and go round it. A hunter who must cross one goes in the rain, when the birds sit silent in the crags, and he plugs his ears with wool against the calling. A pack that has taken lambs is killed by the whole hunting band at once, with nets strung across its gully and spears behind the nets. A velon crest, taken whole, is worked into the headdress a Peshtar war-leader wears, and one comes down to the kingdoms now and then at a price that would buy a horse. A chick taken from the nest can be raised to the hand and flown at hares, and it stays wild in temper all its life.

## Signs

- Fur, feathers and a hare's foot hung on a thornbush where no wind put them.
- Bright calls from several places up a slope that cannot be placed, answering one another.
- A flash of green or violet crossing a gully at the edge of sight.
- Grouse feathers in a circle on the scree, the carcass gone.
- Dogs that stop, bristle and will not go on up a gully.

## Combat Strategy

The pack surrounds before it attacks. One or two birds show themselves in front, crests fanned, calling, while the rest come from behind and above; the display and the calling are meant to hold the eyes and the ears while the talons arrive from another direction. They feint, draw a blow and leap back, and come again, and they go for the eyes, the throat, the backs of the knees and the groin. They try to cut one person out of a group. They are not stubborn: a pack that has lost three or four birds leaves. A man with his back to a rock, a long spear and his ears stopped has a fair chance; a man in the open with a sword has none.

## Attack Methods

### Talon Slash

The bird leaps and rakes with both forelimbs, several hooking cuts in a moment, aimed at tendons and the great vessels of the legs and neck. A pack in a frenzy slashes until the prey stops moving.

### Beak Stab

A deliberate, driving blow with the full weight of the bird behind the beak, at the eye, the throat or any bare skin.

## Special Abilities

### Hypnotic Chirps

The velon's call is made in a throat built for it and carries a ringing harmonic that confuses whoever hears it: the direction of the sound cannot be found, the calls of allies are lost in it, and a plain threat in front of a man goes unnoticed. A deaf creature, or one with its ears stopped, is unaffected.

### Dazzling Display

The crest snaps open and the bird shakes its whole plumage, and the flashing of its colors in sunlight leaves anyone looking straight at it half-blind and unable to judge a distance for a short while.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 13-18 (1d6+12)

- **Agility:** 14-19 (1d6+13)

- **Perception:** 12-17 (1d6+11)

- **Aura:** 8-11 (1d4+7)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
