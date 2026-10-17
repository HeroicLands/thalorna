---
shortcode: acidtoad
name: {full: Acidtoad, aliases: []}
type: being
subType: creature
description: "A made amphibian of swamps and toxic pools that ambushes prey with sluggish movements and lethally venomous, acidic flesh."
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
    str: 1d4+9
    end: 1d6+14
    dex: 1d6+6
    agl: 1d6+4
    per: 1d4+13
    aur: 1d6+6
    wil: 1d4+9
    rea: 1d6+4
    cre: 1d6+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Venomous Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Venomous Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Corrosive Spit
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 56
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Corrosive Spit
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
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
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 80, calc: "80"}
      reachBase: 0
      bodyScaleBase: 1.06
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
---

# Appearance {#appearance}

![[acidtoad|Acidtoad]]{float=top-left}

The drain runs straight between two dikes, brown and still, scummed over with green, and the sluice-gate at its end has been eaten through: the oak boards hang in black, soft rags, and the iron straps are pitted like old bread. A bubble breaks the scum. Then a second, larger, and a shape rises from the water beside the gate, a toad as big as a calf, mottled green and sick yellow, its warty skin weeping and steaming faintly where it meets the air. Its throat swells and empties. Its eyes are yellow-green and have no lids. There is a thin, steady hiss, like fat in a pan, and the smell of it catches at the back of your throat.

# Dossier {#dossier}

The Acidtoad is a dreadspawn made in the shape of a great toad: six to eight feet long and about eighty pounds, sluggish and patient, with skin that weeps a burning slime, a bite that weakens, and a gullet that spits acid. It lies in still water and waits for something to come close enough. It was made, as all dreadspawn are, and it does not breed, and the one that troubles [[place-greylevels|the Greylevels]] of eastern [[place-aldorathrgn|Aldorath]] came out of nowhere anyone can name, a generation ago, and has been there ever since. It moves from drain to drain across the reclaimed marsh, and it is the one creature on the Levels that the commissions of sewers fear more than a high tide.

## Presentation

The acidtoad is broad and flat, all head and body on short thick legs, with a hide of warts and open, weeping sores, mottled algae-green and jaundiced yellow, so that in a scummed ditch it looks like a mound of weed. The slime that runs from its sores hisses faintly on contact with the air and leaves a pale, pitted trail on stone. The mouth is huge and opens wider than any toad's, its inside pale and raw-looking, lined with small backward teeth. The eyes are bulging, lidless and yellow-green, and they glow dimly at night. It moves in slow, heavy hops and long crawls, and it sits for days without moving at all.

## In the Land

The Greylevels are low, wet, tidal country, drained by generations of work into grazing and arable and laced with dikes, drains, sluices and channels, and the acidtoad uses all of them. It lies up in the still, scummed water of the drains and the old unreclaimed marsh at the edges of the mudflats, and it moves between them by night along the channels. It favors water near a sluice or a ford, where cattle and people come. Wherever it has lain long, the water is poisoned: fish die, the weed turns yellow, and the timber of the sluices rots. It does not go into the tidal river or onto the open flats, and it does not go up into the dry ground of [[place-aldorvale|the Aldorvale]].

## Key Behaviors

The toad sits in the shallows with only its eyes and the top of its head above the water and waits, sometimes for days, until something comes down to drink, wades across or leans over the bank. Then it lunges, bites and spits. It eats sheep, calves, dogs, waterfowl and fish, and swallows them slowly. Between meals it lies nearly comatose, breathing slowly, its slime running thinner. It is solitary and keeps to no fixed range, moving from one drain to the next when it has fouled the last. It does not pursue far: a sheep that reaches the dike-top is safe from it. It is not stupid, and it learns which gates and fords are used at which hours.

## What the Levels Do

The commissions of sewers that keep the drains and sluices of the Greylevels argue about everything except the toad. A drain where the fish have died and the gate-timbers have gone soft is closed to cattle and to men at once, and the commission sends its dikemen to find the toad and drive it out: they churn the water with long poles from the dike-top and wait for it to move, and they keep well back from its spit. Killing it has been tried several times, with spears, fire and once a cask of quicklime; it has been hurt and has gone, and has come back to another drain a season later. The Levels count the rotten sluice-gates among their costs, and a commissioner's bill for new oak after a toad year is the one bill nobody contests. Cold weather makes it slow, and the dikemen go after it in a frost.

## Signs

- A drain or ditch where the fish float dead and the weed has gone yellow.
- Sluice-gates and footbridges whose timber has gone black and soft, and iron fittings pitted.
- A pale, pitted trail across a stone ford or a dike-top, as if something burning had crawled over it.
- A thin hissing over still water on a quiet night, and the smell of something sour and sharp.
- Sheep that will not drink at a particular ditch, and a dog that comes home with burned paws.

## Combat Strategy

The toad strikes from hiding: it lunges out of the water at whatever is nearest, bites, and holds long enough for its slime to burn. If the prey breaks away, it spits after it, again and again, while it has a clear line. It does not follow up a steep bank or onto open ground. If a fight goes badly it sinks back into the water and is gone along the drain, but a hurt acidtoad becomes erratic and dangerous and may come out of the water after whoever hurt it.

## Attack Methods

### Venomous Bite

The jaws close on a leg or an arm and crush, and the bite carries a venom that weakens the muscles of the bitten limb. A man bitten in the leg moves stiffly and slowly; bitten in the arm, he loses his grip.

### Corrosive Spit

The toad's throat swells and throws a stream of acid from its mouth that burns skin, eats into leather and pits iron. It keeps spitting while it has a clear line to its target.

## Special Abilities

### Toxic Slime

The slime that runs from its skin burns on contact and burns worse the longer the contact lasts. A man grappled with it, or who grabs it, is scalded continually.

### Camouflage in Wetlands

In a scummed ditch, a muddy bank or a weedy pool the toad is a mound of weed, very hard to see, and it holds still for days without being noticed.

### Acidic Secretion

It weeps acid all the time. Leather, wood and cloth near it rot quickly, and the water it lies in is poisoned.

### Venom Potency

Each bite or spit weakens the victim further, and a man struck several times grows slower and clumsier as his muscles stiffen.

### Cold Weakness

Cold makes the toad sluggish, and hard frost cracks its soft, wet skin. It is easiest to drive and to kill in a freeze.

## Attributes

Strength
: 10-13 (1d4+9)

Endurance
: 15-20 (1d6+14)

Dexterity
: 7-12 (1d6+6)

Agility
: 5-10 (1d6+4)

Perception
: 14-17 (1d4+13)

Aura
: 7-12 (1d6+6)

Will
: 10-13 (1d4+9)

Reasoning
: 5-10 (1d6+4)

Creativity
: 6-11 (1d6+5)
