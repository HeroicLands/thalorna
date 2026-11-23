---
shortcode: grovewarden
name: {full: Salvegeiland, en: [The Grove-Warden]}
type: being
subType: creature
description: "A made thing in the shape of an old oak standing on its own roots, which keeps a dryad's grove in the deep woods of the Provénzian and Élavendren frontier and fights whoever cuts or burns it."
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
    str: 1d6+52
    end: 1d4+16
    dex: 1d4+3
    agl: 1d4+3
    per: 1d4+5
    aur: 1d4+5
    wil: 1d4+8
    cre: 1d4+3
    rea: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 55}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 93}}
    - name: Crushing Blow
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: punch
          name: Crushing Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 9, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 22, aspect: blunt}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Seismic Stomp
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 42
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Seismic Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 18, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 20, aspect: blunt}
          lengthBase: 5
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Face, shortcode: headzone, probWeight: 3}
          - {name: Limbs, shortcode: armszone, probWeight: 12}
          - {name: Trunk, shortcode: torsozone, probWeight: 12}
          - {name: Root-Feet, shortcode: legszone, probWeight: 18}
        parts:
          - name: Face
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Limb
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Limb
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Trunk
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Root-Foot
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Root-Foot
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Brow
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Knot-Hole
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Knot-Hole
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Bark Ridge
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Burr
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Burr
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Fork
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Fork
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Split
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Lower Face
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Crotch of the Limbs
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Limb Root
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Inner Limb
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Limb Bend
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Outer Limb
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Limb End
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Limb Root
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Inner Limb
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Limb Bend
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Outer Limb
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Limb End
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Upper Trunk
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Lower Trunk
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Trunk Base
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Upper Root
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Root Knot
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Lower Root
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Right Root Pad
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Upper Root
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Root Knot
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Lower Root
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
          - name: Left Root Pad
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 11, edged: 10, piercing: 9, fire: 11}
      weight: {base: 49000, calc: "49000"}
      reachBase: 0
      bodyScaleBase: 2.85
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

The road has been dim under the oaks all morning, and here the trees stand back from a clearing a stone's throw across, carpeted in moss and old leaves and quiet. No pig has rooted in it and no axe has touched it. In the middle of it stands an oak older than anything else in the wood, low and enormously broad, five times a man's height, its crown spread over the whole clearing. Its roots are in the wrong places. They do not spread into the ground at its foot. They come out of the trunk above a man's head and go down in two great knotted masses that grip the moss like feet, and between them there is daylight under the tree.

# Dossier {#dossier}

**Salvegeiland** (the Grove-Warden) is a dreadspawn in the shape of an old oak that keeps a grove in the deep woods of the north of the [[place-provenzrgn|Provénzia Region]] and of the [[place-elavendre|Élavendre Region]] beyond the border. It is named in the [[skill-elvndrlng|Élavendri Language]] from _salve_, a tree, and _geiland_, a keeper: _the tree-keeper_. Each keeps one grove, and each grove it keeps is a grove with a [[being-dryad|Dryad]] in it. It stands still while its grove is left alone and fights when the grove is harmed. Like every dreadspawn it was made, it is alive, and it does not breed. Several are known, each in a grove of its own.

## Presentation

The salvegeiland is an oak in its bark, its leaves and its acorns, and is shaped like one until it moves. Its trunk is short and as thick as a cottage, and where it divides into its two lowest limbs the bark has grown into something like a face: two deep knot-holes, a ridge of bark between them, and a split below that opens and closes. The two lowest limbs are longer and heavier than an oak's should be and hang nearly to the ground. Its roots come down from the trunk into two masses, each as broad as a cart, that serve it for feet. When it stands still it is a tree, and a traveler who has not seen its roots walks past it without a second look.

## In the Land

The salvegeiland is found in the old forests of the Provénzian north and of Élavendre, among them [[place-darvena|Darvena]], the deep wood that closes the frontier between the two kingdoms: old oak and beech on low, wet ground, crossed by one road and few paths. Its grove is a clearing among the oldest trees, with its dryad's tree among the old trees at its edge. It never leaves the grove. It stands at one place in the clearing for years at a time, and its roots have worn two hollows in the moss where it stands.

## Key Behaviors

The salvegeiland keeps the grove whole and does nothing else. It does not hunt and does not eat as a beast eats; it stands, takes the rain and the light, and watches. Travelers who cross the grove without harming it are let go, and so are deer, birds and anything that only walks through. It moves when a root in its grove is cut, when a tree in it is felled or a limb is hacked from one, or when fire is set in it. Then it walks, slowly and heavily, to whatever did the harm and strikes until the harm stops, and it goes back to its place when nothing harmful is left in the grove. It does not follow anyone past the grove's edge.

## What the Woodmen Do

The charcoal-burners, timber-cutters and pig-keepers of the forest margin know the groves where an oak stands on its roots, and they cut nothing within sight of one and keep their pigs out of it. The Élavendren border families leave the groves alone in the same way. The carters of [[place-darvenaroad|The Darvena Road]] keep to the road, which bends where the old surveyors bent it, and few of them know why it bends where it does.

## Signs

- A clearing among the oldest trees with no rooting, no cut wood and no charcoal rides in it.
- An old oak whose roots leave the trunk above a man's head and come down in two masses, with daylight under it.
- Two hollows in the moss, each as broad as a cart, where something heavy has stood a long time.
- Stumps at a grove's edge with the cutters' axes lying beside them, the hafts broken.
- Ground torn up across a clearing in a line of deep, round prints.

## Combat Strategy

The salvegeiland fights slowly and with enormous weight. It walks into the middle of whatever is harming its grove and strikes with its two great limbs, sweeping men aside and breaking what they carry, and it brings a root-foot down on anyone underneath it. Blades and arrows bite into its bark as into an oak and hardly trouble it. It is slow to turn and slow to strike, and a quick fighter can keep out of its reach, but it does not tire as a beast tires and it does not stop while the harm goes on.

## Attack Methods

### Crushing Blow

A sweep of one of its great limbs, which breaks shields and bones and throws a man across the clearing.

### Seismic Stomp

It lifts a root-foot and brings it down with all its weight, and the ground of the clearing jumps under everyone near it.

## Special Abilities

### Oak Bark

Its body is the wood of a living oak, thick and hard. Ordinary weapons cut it as they would cut a tree, a chip at a time.

### Still as a Tree

Standing still, it is an oak and nothing else. Nothing in its look or its sound gives it away until it moves.

### The Grove

It fights only for the grove and only inside it. A traveler who harms nothing is never touched, and one who leaves the grove is not followed.

## Attributes

Strength
: 53-58 (1d6+52)

Endurance
: 17-20 (1d4+16)

Dexterity
: 4-7 (1d4+3)

Agility
: 4-7 (1d4+3)

Perception
: 6-9 (1d4+5)

Aura
: 6-9 (1d4+5)

Will
: 9-12 (1d4+8)

Creativity
: 4-7 (1d4+3)

Reasoning
: 4-7 (1d4+3)

## Plot Hooks

1. **The straight road.** The Darvena Road is busier than it has been in years, and a carrying house of [[place-batarencity|Bataren City]] wants a new cut through the forest that saves the carts half a day. Its surveyors' line runs across a grove, and its timber-cutters came back from it carrying one of their own. The house hires a party to clear the line.
2. **The burner's ride.** A charcoal-burner cut a ride for the season along the edge of an old grove, and his kiln has been trodden flat and he has not come home. His daughter wants him found, alive or dead, and his tools brought back.
3. **A tree for the dead.** An Élavendren border family wants a tree planted for its dead grandmother in the grove where she gathered acorns as a girl, as she asked. Nobody of the family dares cross the clearing, and they ask a party to go in and ask leave of the grove.

:::secret {title="What beats a salvegeiland"}

- **The anchor roots.** Two great roots run from the backs of its root-feet down into the ground at the grove's heart, under the moss, and it can never go further from that spot than they reach. A party that digs down to them and cuts through both brings it down like a felled oak, and it does not rise again.
- **Fire.** It burns as an oak burns, slowly and hard to start, and once the grove is alight it turns from the party to fight the fire and dies with the grove. Fire costs everything the warden was made to keep: the grove burns, and the dryad dies with her tree.
- **The dryad.** The salvegeiland keeps the grove for its dryad and does as she asks. A party that sheathes its blades in the clearing and speaks to the grove is answered by her, and the warden stands still while she listens. She sets a price for what the party wants, passage, the body of a cutter or a road through the trees: a tree planted for every tree cut, the road bent round her oldest trees, a promise that her grove is never cut. Once she has agreed, the warden keeps her bargain exactly, and it keeps it against whoever breaks it.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[being-dryad|Dryad]]
: the tree-bound spirit whose grove it keeps

[[place-darvena|Darvena]]
: the deep wood on the frontier where it keeps its groves

[[being-rtwrth|Rootwraith]]
: another made thing of the deep forest, which rises from the soil to punish intruders
