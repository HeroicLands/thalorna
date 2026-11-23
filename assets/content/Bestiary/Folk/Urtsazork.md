---
shortcode: hearthkeeper
name: {full: Urtsazork, en: [The Hearth-Keeper]}
type: being
subType: creature
description: "A small household folk of the long-held farms of Tarvénia and Provénzia that works unseen at night, keeps a farmstead running, and turns on the household when it is slighted."
tags: [folk, image-needed]
data:
  packFolder: folk
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
    complexion: []
    extra_features: []
sohl:
  kbcat: folk
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+12
    per: 1d4+10
    aur: 1d4+5
    wil: 1d4+6
    rea: 1d4+6
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
      weight: {base: 45, calc: "45"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

The farmhouse kitchen is gray and cold before dawn, and the floor is clean: swept, scrubbed, fresh rushes laid by the door. Across it, from the hearth to the woodpile and back, runs a line of small footprints in soot, bare and narrow, the size of a child's. The kindling is split and stacked. In the byre the cow has been milked, and the pail stands covered by the door. Nobody in the house did any of it. On the hearth stone the ash is pressed flat in a round the size of a small seat, and when you put your hand to it, it is still warm.

# Dossier {#dossier}

**Urtsazork** (the Hearth-Keeper) is a small household folk, named in the [[skill-tarvenlng|Tarveni Language]] from _urtsa_, a hearth stone, and _zork_, the head of a household: _the hearth-stone householder_. It lives in an old farmhouse beside the family that holds it, unseen, and works through the night: it sweeps, mends, kindles, feeds the beasts and banks the fire, and a farmstead with one in it runs as if it had another pair of hands. What it wants is respect. When a household slights it, the work stops, and then the house turns against the household. It is met in the long-held farms of the [[place-tarvenirgn|Tarvénia Region]] and the [[place-provenzrgn|Provénzia Region]]. It is not a spirit and not one of the household gods but a living creature, born and dying like any other: a small people of their own, each grown one living alone in its house, and a young one leaving its mother's house to find a hearth of its own.

## Presentation

An urtsazork stands about three and a half feet tall, the height of a child of seven or eight, and it is slight and light: narrow in the shoulder, long in the arm, with big bare feet and long-fingered hands hard from work. Its skin is gray-brown and its hair a mat of dark tangles, and soot and ash cover it from the hearth, so that it leaves its mark on whatever it touches. Its face is small and creased, an old face on a child's body, with dark eyes that see well in the dark and narrow against lamplight. It wears nothing, or a rag from the household's mending. It speaks the tongue of the house it lives in, in a low, hoarse voice, and it seldom speaks to anyone. It moves without a sound and knows every board and step of its house.

## In the Land

Tarvénia is a country of hill farms and narrow mountain valleys, where a household runs for years at a time while its men are away on contract, and a [[lore-tarvenanclt|Tarvenan]] household keeps the hearth fire, the _karalzo_, and the household gods, the _karalzis_. A [[lore-provenzianclt|Provénzian]] household keeps its hearth fire, the _karalze_, and its household gods in the same way. An urtsazork is found in a farmhouse that one family has held for generations, under a roof whose hearth is kept, and seldom in a town. Beyond these two countries it is found wherever a long-held farmstead stands, at the game master's choice.

## Key Behaviors

An urtsazork works at night, while the household sleeps, and is never seen by day. It does the work of the house and the yard as it finds it to be done, the way the household does it, and does it well. It is never seen at work, and on a night when someone sits up to watch, nothing is done. It takes nothing it is not given, and it notices everything: who speaks of it and how, who mocks it, who sweeps the ash off its hearth stone or lets the hearth go cold, who does its work over as if it were badly done. A slight to itself or to the house is an insult, and it is answered. First the work stops; then the house begins to go wrong.

## What the Households Do

A household with an urtsazork seldom says so to outsiders. Its people speak of the luck of the house and do not name the creature, and they teach their children not to sit on the hearth stone, not to sweep the ash from it and not to stay up by the fire to watch. A farm that prospers year after year beyond its neighbors is said to have one, and a jealous neighbor may set out to spoil that luck. When a house goes wrong in Tarvénia, the household sends for the village wise-woman, the _tsinga_, before it sends for anyone else.

## Signs

- Small bare footprints in soot across a floor swept clean in the night.
- The night's work done by morning: kindling split, the yard swept, a harness mended, the beasts fed and watered.
- A round of pressed ash on the hearth stone, still warm at dawn.
- A farm that prospers year after year beyond the farms around it, with no more hands than they have.
- A household that will not let a guest sit up by the fire.
- In a house gone wrong: broken crockery every morning, tools snapped, the milk spilled, and the fire dead and cold at dawn though it was banked.

## Combat Strategy

An urtsazork never fights face to face. It turns on a household slowly and in the dark. First it breaks things: a jug, a churn, a latch, a hoe, something more each morning. After some nights of it, it turns to cold, falls and fire. It lets the hearth die and opens doors and shutters on winter nights; it loosens ladder rungs and stair treads, leaves a rake tines-up in the dark of the byre and trips whoever comes down the stair without a light; and at last it brings fire in the dark, a lamp tipped into straw or embers carried into the thatch. It works against the one who gave the slight before anyone else, in a house it knows by touch and the household knows only by day. Driven off or shut out, it comes back the next night.

## Attack Methods

### Trip

It catches an ankle on a stair or in a dark passage and brings a person down, and it is gone before he gets up.

### Bite and Grab

Cornered, it bites and clings with its hard little hands, kicks free and runs for the dark.

## Special Abilities

### Night Eyes

It sees in the dark as well as a cat.

### The House by Heart

It knows every board, beam, gap and step of its house and yard, and moves through them silent and unseen. It reaches places under the floors and behind the walls that nobody of the household can.

### Night Work

Patient and handy rather than strong, it does in one night the small endless work of a farm, sweeping, mending, feeding and kindling, and it does not tire of it.

## Attributes

Strength
: 6-9 (1d4+5)

Endurance
: 7-10 (1d4+6)

Dexterity
: 13-16 (1d4+12)

Agility
: 13-16 (1d4+12)

Perception
: 11-14 (1d4+10)

Aura
: 6-9 (1d4+5)

Will
: 7-10 (1d4+6)

Reasoning
: 7-10 (1d4+6)

Creativity
: 11-14 (1d4+10)

## Plot Hooks

1. **The luck gone sour.** A Tarvenan farm wife who runs her holding while her husband serves his contract asks the party why, since her husband's cousin came to stay for the winter, her farm wakes every morning to broken tools and spilled milk. The cousin laughs at the old women's tales, and last night the ladder to the loft gave way under him.
2. **A night by the fire.** The party shelters at a farmhouse on a winter night, and the household asks them, without saying why, not to sit up by the fire. One of them does, and by morning their gear is broken and the household wants them gone.
3. **A neighbor's envy.** A farmer pays the party to slip into his neighbor's house at night, sweep the ash off the hearth stone and mock whatever lives there aloud, to spoil a luck that has made the neighbor rich. The neighbor's family sleeps upstairs, and one of them is a child.

:::secret {title="How an urtsazork is set right"}

- **Recompense.** A share of the household's best, set on the hearth stone at night and left there: the first loaf of a baking, the cream off the morning's milk, the best cut of a slaughter, a cup of the good wine. It must be the best the house has and freely set out, never leavings and never thrown down; a poor or bought share is a second slight. Set out night after night, it ends the breaking, and the morning the floor is swept again the quarrel is over.
- **An apology.** Spoken aloud at the hearth stone after dark by whoever gave the slight, before the household that heard it given. A Tarvenan answers an insult given before witnesses before the same witnesses, and an urtsazork holds a household to the same rule. It does not answer, but the work is done again by morning. An apology made by someone else on behalf of the one who gave the slight is not enough.
- **Leaving the house.** An urtsazork stays with its house and never follows a family. A household that leaves is safe from it, and the farm stands empty. The house stays turned against whoever takes the farm later, until a new holder sets the old quarrel right with recompense, since an apology from someone who did not give the slight does not serve.
- **Force.** Lamplight dazzles it, and caught in it it is small and fragile, and it can be killed. It is hardly ever caught, because it is never in the open and knows the house better than anyone in it. A farm whose urtsazork is killed keeps its walls and loses its luck: the night's work is the household's own again.
- **The farm nobody keeps.** A Provénzian merchant has bought a hill farm cheap, empty since its last family left it. His laborers walk off after a fortnight of dead fires, cold nights and falls in the dark, and he wants the party to clear out whatever is in the house before the harvest.

:::

:::secret {title="How a house goes wrong"}

- **The breaking.** For the first nights after a slight it breaks things, a little more each night, and harms nobody. Recompense or an apology in this stage ends it within a night or two.
- **Cold, falls and fire.** If the slight is still unanswered, it lets the cold in and sets falls for the one who gave it, and then for the rest of the household. Fire comes last, in the dark, in the byre or the thatch, after the household has ignored every warning. A house that reaches fire is lost or abandoned within the season unless it is set right.
- **Where it sleeps.** By day it lies asleep in the ash behind the hearth, under the floor or in the space above the oven, and a daylight search of the house turns it up there.

:::

## See Also

[[lore-tarvenanclt|Tarvenan]]
: the households of Tarvénia, their hearth fire and their household gods

[[place-tarvenirgn|Tarvénia Region]]
: the hill farms and mountain valleys where it is met

[[lore-provenzianclt|Provénzian]]
: the households of Provénzia, their hearth fire and their household gods

[[place-provenzrgn|Provénzia Region]]
: the long-held farms where it is also met
