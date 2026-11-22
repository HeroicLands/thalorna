---
shortcode: thresholdstatue
name: {full: Thaurandon, en: [The Threshold Statue]}
type: being
subType: creature
description: "A stone figure worked into motion by a mage and set on a shrine step, which stands still until its maker's rule is broken and then strikes within the reach of its plinth."
tags: [construct, image-needed]
data:
  packFolder: constructs
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
  kbcat: construct
  attrRollFormula: {str: 1d6+33, agl: 1d4+3, per: 1d6+13}
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - name: Crushing Blow
      type: skill
      system:
        shortcode: blow
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: blow
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 12, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure: {zones: [], parts: [], locations: []}
      weight: {base: 3500, calc: "3500"}
      reachBase: 0
      bodyScaleBase: 2.16
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The shrine is a single room at the top of seven steps, open at the front, with a lamp burning before an altar and offerings heaped on a ledge: coins, a silver cup, ribbons, small figures of clay. On the top step, to the right of the doorway, stands a stone figure on a square plinth, a robed man with a staff, ten feet tall, worn smooth by weather, its face turned toward the road. Pilgrims pass it without a glance. One of them, on the way out, has a silver cup under his cloak that was not his when he went in. As he steps down past the plinth, the stone head turns, and the stone arm comes up with the staff in it, and the sound it makes is the sound of a millstone starting.

# Dossier {#dossier}

**Thaurandon** (the Threshold Statue) is a construct, a stone figure worked into motion by a mage and set on the step of a shrine to keep it, named for its office with the [[skill-vylarilng|Vilari Language]] word _thaurandon_, keeping, guarding, from _thaurathen_, to keep: _the keeping_. It stands still as any statue until the rule its maker set is broken, and then it strikes. The rule is short and plain: nothing leaves the shrine, or nobody enters armed, or nobody passes the step after dark. It strikes only within the reach of its plinth and does not step down from it. Like every construct it has no will and no mind, and it does what it was told, in the words it was told, for as long as the working holds. It is met at shrines and temples across the [[place-vylariargn|Viléria Region]], where shrines that keep offerings of value are many, and mages who can work stone are to be had for a price.

## Presentation

A thaurandon looks like any temple statue: a robed figure, a warrior, a priest with a staff, or a beast on a plinth, carved in the local stone and weathered with the shrine around it. It is larger than a man, eight to ten feet tall, and its plinth is part of it, carved from the same block. On its brow, under the hair of the carving or at the center of a helmet, is a small round seal cut into the stone, and the signs that bind it run from the seal down its back and into its plinth, cut fine and filled with lime so that they are hard to see. When it moves, it moves slowly and with a grinding noise, and dust falls from its joints. When it is still, nothing tells it from a statue but the seal.

## In the Land

Viléria is a land of cities, roads and wayside shrines, and its temples keep offerings of real value: silver vessels, coin, gold leaf, the votive gifts of great houses. A thaurandon stands at the step of such a place, usually beside the doorway, occasionally in the middle of the step where every visitor must pass it. Each was made for one shrine and set there at the shrine's commissioning or after a theft, and it stays there as long as the stone and the working last. Some stand at shrines nobody tends, keeping offerings that nobody comes to see.

## Key Behaviors

A thaurandon answers its rule and nothing else. It does not watch, wonder or decide; when the thing its rule forbids happens within its reach, it strikes, and when it is not happening, it is still. A thief who has taken an offering is struck as he passes the plinth. A man with a sword is struck as he climbs the step. It does not strike anyone outside its reach, it does not step down, and it does not pursue. It cannot be bribed, frightened or argued with. It obeys one word, which its maker set and taught to the shrine's keeper: spoken within its reach, the word stills it for as long as the speaker stands on the step, so that the keeper can carry offerings in and out, or admit a man in armor.

## What the Keepers Do

The keeper of a shrine with a thaurandon holds the word, and the shrine's priests pass it from one keeper to the next, at a death or a retirement, by mouth and in private. At most shrines only one living priest knows it. Pilgrims are told the rule at the foot of the steps and leave their weapons there, and nobody takes so much as a ribbon from the offering ledge. A shrine whose statue is known to be a thaurandon is rarely robbed, and a shrine that has lost its keeper without the word being passed on keeps its offerings for good, because no one can carry them out.

## Signs

- A temple statue with a small round seal cut into its brow.
- A pile of weapons left at the foot of a shrine's steps, unguarded.
- A stain on a shrine step, scrubbed but not gone, right beside a statue's plinth.
- Offerings heaped untouched at a shrine nobody tends, with coin among them.
- A priest who goes up a shrine's steps alone, murmurs something at the statue, and only then lets the porters follow.

## Combat Strategy

A thaurandon strikes whoever broke its rule, as hard as it can, with whatever its carving holds, a staff, a sword, a fist, and keeps striking until he is down or out of its reach. It does not defend itself, does not dodge, and does not care about its wounds. It cannot step off its plinth, so anyone outside its reach is safe, and a thief who gets past it with the offering is not followed.

## Attack Methods

### Crushing Blow

It swings its stone arm, or the stone staff or sword carved in its hand, with the strength of a millstone, and the blow breaks bones and throws a man down the steps.

## Special Abilities

### Stone Body

Its carved stone turns cuts, thrusts and blows, and fire does it no harm.

### The Rule

It strikes only at whoever breaks the rule its maker set, and ignores everyone else on the step.

### The Plinth

It never leaves its plinth, and it reaches no further than its arm can.

## Attributes

Strength
: 34-39 (1d6+33)

Agility
: 4-7 (1d4+3)

Perception
: 14-19 (1d6+13)

## Plot Hooks

1. **The keeper is dying.** The only priest who knows a shrine's word is dying without having passed it on, and the shrine's offerings, a great house's votive silver among them, are about to be locked in for good. The house hires a party to get the word, or the silver, before the priest dies.
2. **The cup that got away.** A thief took a silver cup from a shrine past a thaurandon and lived, and now the shrine's priests want to know how, before others learn it.
3. **Armed pilgrims.** A lord's escort refuses to leave its weapons at the foot of a shrine's steps, and the lord insists on making his offering in person. The keeper asks a party to keep the peace.
4. **A shrine nobody tends.** A shrine on an old road has been abandoned for a generation, and its offering ledge is heaped with coin and silver behind a statue nobody has dared to pass.

:::secret {title="How a thaurandon is passed or stopped"}

- **The word.** The maker's word, spoken on the step, stills it. One living priest holds it at most shrines, and a word overheard, bought or forced out of that priest works as well in any other mouth.
- **The seal.** The working is held in the round seal on its brow. A blow that breaks the seal through, from a hammer swung from a ladder or a shot that strikes it squarely, ends the working, and the figure is only a statue from then on.
- **Its reach.** It cannot leave its plinth. A thief who goes up the steps out of its reach, by the far side of a wide step or a rope from the roof, and comes down the same way, is never touched.

:::

## See Also

[[lore-golemcrtr|Constructs]]
: the made things that move without life or will

[[being-rckhdglm|Rockhide Golem]]
: another stone construct set to keep a gate

[[place-vylariargn|Viléria Region]]
: the heartland whose shrines it keeps
