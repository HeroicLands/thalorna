---
shortcode: hosikud
name: {full: Hosikud, aliases: [The Pit-Maker]}
type: being
subType: creature
description: "A five-foot burrower that digs a funnel trap in the lee of a dune and drags into the sand whatever slides down, camels included."
tags: [animal, image-needed]
data:
  packFolder: animals
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: null
  stations: []
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
    str: 1d6+9
    end: 1d6+12
    dex: 1d6+7
    agl: 1d6+9
    per: 1d6+8
    aur: 1d4+6
    wil: 1d6+7
    rea: 1d4+4
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Mandible Bite
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 58
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Mandible Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Grapple and Drag
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 63
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Grapple and Drag
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: blunt}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Thorax, shortcode: thoraxzone, probWeight: 1}
          - {name: Abdomen, shortcode: abdomenzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Thorax
            shortcode: thoraxpart
            bodyZoneCode: thoraxzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Abdomen
            shortcode: abdomenpart
            bodyZoneCode: abdomenzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 7
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 5, calc: "5"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 1
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The slope is perfect. It falls away from the crest of the dune in a smooth, even curve, an upturned bowl of pale sand with not a ripple on it, and the lead camel has already put a foot on it, because the lee side is out of the wind and the shade is the first shade in six hours. You shout. The camel's hind leg slips, only a hand's breadth, and a thread of sand runs down the slope like water from a tipped cup. Then the whole face of the dune gives, with a long hiss, and the camel goes down it on its side, bawling, toward the point at the bottom of the bowl where something is already throwing up sand in sheets to bring it in.

# Dossier {#dossier}

The Hosikud is a burrowing predator of the sand seas, built to make a trap and wait in it. It digs a steep-sided funnel into the lee face of a dune, sinks itself at the bottom with only its jaws open, and lets the loose sand do the work. Anything that steps on the rim slides in; anything that struggles slides deeper; and the Hosikud, which throws sand upward at a victim's feet to keep the slope running, closes its jaws on whatever arrives. The tribes call it by the word for sand and the suffix of a doer, "the sand-doer", and the guides of the deep sands call the pit itself _hosik_, "sand", as though the dune had made it.

It is the reason the tribes of the Hosikor lead their strings along the crest of a dune and not the foot of it, and the reason no sensible guide will let an animal stop in the shade of a slope.

## Presentation

The Hosikud is about five feet long, with a broad, flat, buff-colored body that matches the sand it lives in, a soft rear half buried at all times and a heavy front half armored in smooth plates. The head is wide and low, and from it two curved jaws reach forward like the arms of a pair of tongs, each as long as a man's forearm and toothed on the inner edge. Six short legs, spiked on the outer joints, serve to dig. A flexible, jointed neck lets the head flick sand upward in an arc, and the underside is pale and soft, as if it had never seen daylight.

An adult spends nearly its entire life below the surface. Dug up and set on open ground, it is a slow, sluggish animal that tries to bury itself again.

## In the Land

The Hosikud lives in the dune fields of the Hosikor, in the sand seas the road crosses between the Long Dry and the wells beyond [[place-qisomrktcmp|Qìso]]. It needs a dune with a steep, sheltered lee face of loose sand, a wind that blows from one direction for most of a season, and a steady supply of animals that want shade. The sand seas around [[place-wilud|Wilud]] hold more of them than any other country, since the drowned city's walls and tower tops throw long shadows across the lee faces of the dunes, and every animal in a day's march comes to them.

A pit is not permanent. A shifting dune buries its own trap in a season, and a Hosikud that feeds well digs a new one a few hundred paces off. The animal moves at night, under the sand, and a dune field with a dozen Hosikud holds a dozen pits in various stages of use.

## Key Behaviors

A Hosikud is lazy and patient. It digs in the cool of the night, working in a spiral from the outside in and throwing sand up and out until the face of the dune stands at the steepest slope it will hold, and then it settles and waits. A pit that has taken a camel feeds its builder for a month. The animal picks the body apart from below, drawing parts of it under the sand, and does not leave the pit until the work is done.

It senses by vibration. A footfall on the rim tells it the weight, the number of legs and the direction of travel, and it times its first throw of sand to the moment a foot is on the slope. Light prey it does not trouble over; the pit takes lizards and hares without help. A pit is for a beast big enough to feed it, and its builder will let a man walk the rim of the funnel without moving.

## What the Tribes Do

The tribes of the sands know a Hosikud pit by sight. The slope is too smooth, too symmetrical and too clean, and the first thing a guide teaches a new hand is to look at the sand on the lee of every dune before he looks at the sky. Strings are led along the windward crests, where the sand is packed and the pits are never dug. A rider goes ahead on foot with a long pole and probes the shaded face, and an animal that wants to stop in the shade of a slope is hobbled on the crest instead.

A beast in a pit is not given up. The string's drivers throw ropes, weighted at the end, and the lead hand goes down on a line with a spear and a short blade, since the Hosikud can be struck from above as it rises. If the beast is already half buried, the hands cut away the load and heave the animal out by the hump. A Ruwel guide carries a coil of braided hair rope for this and nothing else.

Pit-hunters sell the Hosikud's jaws. A pair, dried and cut, becomes the bow-tips of the best composite bows of the sands, and a whole pair is worth a camel.

## Signs

- A lee slope too even and too steep, with no wind-ripple and no tracks, in a country where every other slope is pocked and drifted.
- A ring of dry bones and bleached hair at the foot of the funnel, half buried.
- Sand that trickles from the center of a slope after a light animal has crossed the crest, and keeps trickling.
- A faint, regular puffing from the sand at the point of the funnel, like breath.
- Camels that will not go down a slope, even to a shade they have smelled for hours.
- A coin, a buckle or a lump of tack lying in the middle of the smooth sand, where nothing could have carried it.

## Combat Strategy

The Hosikud never leaves the pit to fight. It strikes from the bottom of the funnel, closing the jaws on a leg or a throat and dragging the victim under, and it keeps the slope running with sand thrown from the neck. A victim that stays on the crest is out of its reach. A victim that falls in meets the jaws within a round, and every attempt to climb a slope that is moving sends the climber back down it.

Its weakness is its body. Out of the sand it is soft and slow, and any hit that finds the unarmored back half is deadly. A party that has gone into the pit on a rope, with a lead line and a second man holding the crest, can strike it from above where its head is raised.

## Attack Methods

### Mandible Bite

The pit-jaws close on the victim with a shearing grip. The inner teeth lock, and the Hosikud holds on while it pulls its prey under.

### Grapple and Drag

The Hosikud wraps its forelegs around the victim and draws it down the slope and into the sand. A creature held this way is half buried in a breath, and the sand closes over the head.

## Special Abilities

### Pit Trap

A funnel in loose sand cannot be climbed. A victim moves down it at the rate of its own struggle, and every step toward the rim loosens more sand. Escape depends on a rope, a lever or a second person on the crest.

### Sand Throw

The Hosikud flicks sand upward with its neck in a stream that knocks a victim's feet from under it and fills its eyes. A person hit in the face is blinded for a moment.

### Burrow Sense

It feels weight and movement through the sand at a considerable distance and knows what is on the rim of its pit before it can be seen.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 13-18 (1d6+12)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 10-15 (1d6+9)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 7-10 (1d4+6)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 3-6 (1d4+2)

## A Hook

A newly opened street of Wilud runs between two lines of wall into a courtyard, and the lee of the nearest dune is as smooth as a plate. The Ruweles who sold the news of the street have already lost a camel to the courtyard, and they swear it was a bog of loose sand. A rival party is a day behind. The Hosikud has taken up in the courtyard, and a party that wants what the courtyard holds has to dig the thing out of its own trap in a street with no room to swing a spear.
