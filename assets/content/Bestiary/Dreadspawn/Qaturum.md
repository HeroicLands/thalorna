---
shortcode: hullgripper
name: {full: Qaturum, en: [The Hull-Gripper]}
type: being
subType: creature
description: "A made thing of the Taruzelian channels that wraps a ship's rudder and keel in gray, ridged limbs, stops her dead in calm water and strips her of her metal."
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
    str: 1d6+16
    end: 1d6+18
    dex: 1d6+10
    agl: 1d6+10
    per: 1d6+14
    aur: 1d6+4
    wil: 1d6+10
    rea: 1d6+6
    cre: 1d6+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 20}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 22}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 53}}
    - name: Tearing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Tearing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tentacle Grasp
      type: skill
      system:
        shortcode: tentacle
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: tentacle
          name: Tentacle Grasp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 6
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 6}
  system:
    body:
      structure:
        zones:
          - {name: Mantle, shortcode: mantlezone, probWeight: 4}
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 4}
        parts:
          - name: Mantle
            shortcode: mantlepart
            bodyZoneCode: mantlezone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Arms
            shortcode: larmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Arms
            shortcode: rarmspart
            bodyZoneCode: armszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Mantle
            shortcode: mantleloc
            bodyPartCode: mantlepart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Beak
            shortcode: beakloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Left Arms
            shortcode: larmsloc
            bodyPartCode: larmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
          - name: Right Arms
            shortcode: rarmsloc
            bodyPartCode: rarmspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 8, edged: 7, piercing: 6, fire: 8}
      weight: {base: 20000, calc: "20000"}
      reachBase: 0
      bodyScaleBase: 1.47
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aquatic
        feetPerRound: 100
        leaguesPerWatch: 12
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The wind is fair, the channel between the islands lies flat as oil, and the ship stops. She does not slow as she would on a sandbar; she stops all at once, so that the deck tilts forward and every loose thing slides toward the bow. The steersman shouts that the rudder will not answer. Over the stern rail the water is clear and green, and wrapped round the rudder, running forward along the keel and out of sight under the hull, are limbs: gray, ridged like old cable, each as thick as a man's thigh, a dozen of them at least. Somewhere below the waterline a nail shrieks as it is drawn out of its plank.

# Dossier {#dossier}

**Qaturum** (the Hull-Gripper) is a dreadspawn of the shallow seas, named in the [[skill-taruzelilng|Taruzeli Language]] from _qatur-_, to stop, with the ending _-um_ of the one who does it: _the one that stops_. It takes hold of a vessel from below in calm, shallow water, holds her where she lies, and strips her of her metal: the iron of her fittings, the nails of her planking, the bronze of her rudder pins and whatever coin and tools she carries. It leaves her crew alone unless they interfere. It lives in the channels and shoals of the [[place-taruzelrgn|Taruzel Region]], the archipelago in the eastern [[place-vylarianse|Vilérian Sea]], where a ship is rarely far from a shallow bottom. Like every dreadspawn it was made, it is alive, and it does not breed. The shipmasters of the islands count more than one of them in their waters and have never seen a young one, and the shape is one of the made templates met again and again.

## Presentation

Nobody sees a qaturum whole without going into the water. Its body is a low, gray mantle, a mound as long as a coasting vessel, ridged and seamed like a coil of tarred cable, and it lies flat on the bottom with its back no more than a fathom under the keel of the ship it holds. Under the mantle's leading edge is a broad, flat head, and from the head grow its limbs, a dozen or more, spreading to either side, long enough to reach from the bottom over a ship's rail, ridged on the outer face and lined on the inner with rows of hard, pale pads that grip wet timber without slipping. Its mouth is a hard, rasping beak set among the roots of the limbs, and its eyes are two pale bulges on the head that the limbs close over when it feeds. It is cold to the touch, and the water round it smells of rust.

## In the Land

The islands of the archipelago are harbors, hills and scrub, and the channels between them are where the trade goes. A qaturum keeps to that water: sand and rock bottoms at two to five fathoms, calm days, and the lanes the trading ships use. It does not take hold of a ship in deep water, where it cannot brace against the bottom, and it does not come into a harbor's inner basin, where the water is fouled and busy. It moves between shoals over a season and lies a long time in one place when the feeding there is good. A channel with a qaturum in it is known by the islands within a few months, from what comes ashore.

## Key Behaviors

A qaturum wants metal, and wants nothing else a ship carries. It holds a vessel still with its limbs, drawing her down a hand's breadth by the stern, and works along her from below, prying out nails, tearing away chain plates, pulling the pins from the rudder and the iron from the hatches. It reaches over the rail for metal it can feel on deck: anchors, tools, weapons, a strongbox. A ship it has worked over for an hour comes free leaking at every seam. It ignores men who stand back, and it seizes and drags into the water anyone who cuts at its limbs or stands between it and the iron. When it is badly hurt it lets go and sinks back to the bottom, and on the next tide it comes back to the same ship if she is still in the channel. Iron thrown overboard to it is taken, and a ship that throws over enough is let go.

## What the Shipmasters Do

The shipmasters of the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]] keep a reckoning of the channels where a qaturum has been met, and a captain who must cross one waits for wind enough to keep her moving, because it takes hold of a ship in calm water. Harbors whose trade runs through such a channel pay it: a share of every cargo's iron, in bars or old fittings, is taken out in a boat and dropped on the shoal it holds, and the ships that come after pass untouched. A harbor that stops paying loses its ships. Whether a qaturum recognizes the payment or is only fed by it is argued in every harbor tavern of the islands.

## Signs

- A ship that comes in leaking at every seam, with her nails pulled, her chain plates gone and her rudder hanging loose.
- Iron rust staining the sand of a shoal where no wreck lies.
- A boat rowed out on a calm morning to drop bars of iron over a shoal and rowed straight back.
- Planks and spars washed ashore with every nail hole empty.
- A channel the bigger ships of the islands avoid in a calm, with a longer passage taken round it.

## Combat Strategy

A qaturum fights to keep its hold and to keep the iron. It grips the vessel with most of its limbs and uses the rest against whatever troubles it, sweeping men off the rail, dragging them under and holding them there. It crushes the planking from below where the crew is thickest, so that the ship begins to flood under them. It never shows its body above the water, and weapons that do not reach the bottom find only its limbs. It lets go when it is badly hurt, and comes back on the next tide.

## Attack Methods

### Tearing Bite

The rasping beak among the roots of its limbs tears through planking and through anyone dragged down to it, and it bites the metal out of a hull as easily as the flesh off a bone.

### Tentacle Grasp

A limb comes over the rail and wraps whoever it touches, and drags him over the side. The pads on the inner face grip like wet rope, and a man held under by one rarely comes up without help.

## Special Abilities

### The Hold

Braced against the bottom, a qaturum holds a ship of any size the trade uses still in calm water against oars and sail alike, and draws her down by the stern.

### Iron Sense

It feels metal through planking and water, and finds every nail in a hull and every blade on a deck.

### On Its Own Bottom

On its own bottom it moves fast and strikes surely, and it shrugs off cold and the press of the water. Out of the water it is helpless.

## Attributes

Strength
: 17-22 (1d6+16)

Endurance
: 19-24 (1d6+18)

Dexterity
: 11-16 (1d6+10)

Agility
: 11-16 (1d6+10)

Perception
: 15-20 (1d6+14)

Aura
: 5-10 (1d6+4)

Will
: 11-16 (1d6+10)

Reasoning
: 7-12 (1d6+6)

Creativity
: 7-12 (1d6+6)

## Plot Hooks

1. **The unpaid share.** A harbor's council has stopped paying the iron share to save the cost, and its ships are coming in stripped. A party is hired to escort the next convoy through the channel in a flat calm.
2. **A strongbox on the bottom.** A shipmaster's strongbox went over the rail in a limb's grip with a contract sealed inside it, and the merchant who holds the other half of the contract pays well for it to be brought up before the contract falls due.
3. **Wind for a crossing.** A party must cross a channel the islands know a qaturum holds, on a ship whose master cannot wait for wind and will not pay the share.
4. **Nails in the sand.** Fishermen are diving for iron on a shoal where a qaturum lies, and a son has not come up.

:::secret {title="What drives a qaturum off"}

- **The limb roots.** Its limbs grow from a ring of soft, pale flesh round its beak, under the head, and the hold depends on them. A swimmer who reaches the roots under the keel and cuts them makes the limbs on that side let go at once, and a qaturum that loses a third of its hold lets the ship go and sinks away.
- **Fire on the waterline.** Bright fire held at the waterline, burning pitch on a line or torches lashed to oars, pains its eyes and confuses its iron sense. It slackens its hold while the fire burns, and a ship with wind enough in that moment comes free.

:::

:::secret {title="Where it keeps the metal"}

- **The heap under the shoal.** A qaturum does not eat the iron it takes. It carries it to a hollow under the lee of a shoal and piles it there, and the heap of a qaturum that has worked a channel for years holds anchors, chain, nails by the barrel, weapons, bronze fittings and the coin of every strongbox it has taken. It returns to the heap between ships and lies over it. The iron share of a paying harbor ends up on it too.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-taruzelrgn|Taruzel Region]]
: the archipelago whose channels it holds

[[being-stygnlvt|Stygian Leviathan]]
: another made thing of the water, in the lakes beneath the earth
