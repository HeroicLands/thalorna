---
shortcode: riddlewarden
name: {full: Sevrabun, en: [The Riddle-Warden]}
type: being
subType: creature
description: "A made guardian of the Dunhara Desert with a lion's body and a human face, seated at a gate, that asks each comer one question in the comer's own tongue."
tags: [dreadspawn, image-needed]
data:
  packFolder: dreadspawn
  icon: sohl-none-icon-lion
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
    str: 1d6+9
    end: 1d6+10
    agl: 1d6+15
    per: 1d6+13
    snt: 1d4+2
    aur: 1d4+3
    wil: 1d6+13
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 5}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 72}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 60}}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 85
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 0, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 1}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: &a1 [locomotor, manipulator]
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
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isFumble: true
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
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
      weight: {base: 400, calc: "400"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 160
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

The cleft narrows to the width of a cart, and at its end, where a doorway is cut into the cliff, something is sitting on a block of stone. At first it is a carving, a lion couchant with its paws out before it, the color of the rock. Then it turns its head. The face is a human face, a woman's or a young man's, broad and calm, with the eyes of someone listening to a long story, framed by a mane that lies on the shoulders like a hood. The tail moves once on the stone. It looks at each of you in turn, and when it speaks, it speaks to the one at the front in the speech of his own mother, without an accent, and it asks him a question.

# Dossier {#dossier}

**Sevrabun** (the Riddle-Warden) is a dreadspawn guardian of gates, named in the [[skill-dunharlng|Dunhari Language]] from _sevr-_, the stem of _sevraz_, to ask, with the ending _-abun_ of the keeper of a thing, a door or a household: _the keeper of the asking_. It has a lion's body and a human face, and it sits at the entrance to the place it was set to guard, a pass, a gate in a wall or the door of an archive. It asks everyone who comes one question, the question it was set with, in that person's own tongue. Whoever answers rightly goes by. Whoever answers wrongly, or refuses to answer, is attacked. It is met in the [[place-dunhardsrtrgn|Dunhara Desert Region]], at clefts and gates in the desert's ridges and at the doors of places that were old before the tribes came. Like every dreadspawn it was made, it is alive, and it does not breed. The tribes know of a few sevrabun and know them apart by their faces.

## Presentation

A sevrabun is the size of a great lion and lies like one, on a block or a ledge at the mouth of its gate, with its forepaws stretched out before it. Its hide is the color of the stone it sits on, and dust and sand settle on it. Its face is human, smooth and ageless, neither young nor old, and each sevrabun has its own, a man's or a woman's; the tribes say each face is the face of someone, though nobody knows whose. Its mane is long and lies close, like a hood. Its voice is a human voice, low and clear, and it carries down a cleft without being raised. Its eyes follow whoever is speaking. It does not eat while anyone watches, and it does not sleep at its gate.

## In the Land

The [[place-dunharargn|Dunhara Region]] is a vast desert, and the desert's ridges are cut with clefts and dry gorges that the caravan routes and the tribes' grazing routes use as passes. A sevrabun sits at the head of such a cleft, or at a gate cut into a cliff, or at the door of a place built by people who were in the desert before the tribes: a vault, a cistern-hall, a room of tablets.

## Key Behaviors

A sevrabun does what it was made to do, which is to ask. Everyone who comes to its gate is asked the same question, in that person's own tongue, and it waits for an answer as long as the person stands there. It asks each member of a party in turn, and each must answer for himself. A right answer and it lays its head down on its paws, and that person may pass in and out of the gate from then on without being asked again. A wrong answer, or silence, or a refusal, or an attempt to pass unasked, and it attacks that one from its seat. It does not attack anyone who turns back and leaves its gate. It answers no questions, makes no bargains and accepts no gifts. The question differs from gate to gate.

## What the Tribes Do

The tribes of the desert know the gates where a sevrabun sits and do not take their herds through them. The caravan masters who must use a pass that has one keep the answer as a trade secret, and pass it from master to apprentice, and a caravan that knows the answer goes through while its rivals go the long way round. Scholars and treasure-seekers who come to the desert for the old places pay well for an answer, and false answers are sold to them as freely as true ones. Among the tribes it is held a bad omen to strike a sevrabun, because it does no harm to anyone who leaves it alone.

## Signs

- A carved lion at the head of a cleft that has dust on its back but none on its face.
- A caravan route that goes two days round a ridge with an easy pass through it.
- Bones of men and beasts on the near side of a gate, and the path beyond it clean.
- Bones of goats and gazelles cracked open on the ledge beside a carved lion, and no tracks leading away.
- A caravan master who will not travel without one particular old man, who rides at the front.

## Combat Strategy

A sevrabun fights from its seat. It strikes at whoever answered wrongly with its claws and its jaws, and then at anyone who comes to that person's help, and it does not leave the mouth of its gate to do it. It places itself so that the cleft or the doorway is at its back and the walls on either side, and a party cannot get round it or behind it. It does not pursue anyone who retreats out of its reach.

## Attack Methods

### Claw

It strikes with a lion's forepaw, raking with claws as long as fingers, and it can knock a man down and pin him with one blow.

### Bite

Its jaws are a lion's jaws behind a human face, and they open wider than the face should allow.

## Special Abilities

### Every Tongue

It understands and speaks the tongue of anyone who comes to its gate, and asks each in his own.

### The Seat

At its gate it cannot be flanked or taken from behind, and it fights there with the advantage of the ground.

### Patient

It waits for an answer, or for a party to leave, as long as it takes, without moving and without sleeping.

## Attributes

Strength
: 10-15 (1d6+9)

Endurance
: 11-16 (1d6+10)

Agility
: 16-21 (1d6+15)

Perception
: 14-19 (1d6+13)

Scent
: 3-6 (1d4+2)

Aura
: 4-7 (1d4+3)

Will
: 14-19 (1d6+13)

Reasoning
: 4-7 (1d4+3)

Creativity
: 4-7 (1d4+3)

## Plot Hooks

1. **The caravan master's apprentice.** An old caravan master who carries the answer to a sevrabun's pass has died on the road, and his apprentice swears he was told the answer. The caravan, with its water running low, must decide whether to trust him at the gate or take the long way round.
2. **The answer for sale.** A trader in a desert market offers the answer to a sevrabun's gate at a price, and a second trader offers a different one. Both swear theirs is true.
3. **What the question tells.** A scholar has heard the question one sevrabun asks and believes it names the gods of a people nobody has found, and she wants a party to bring her the questions of two more.
4. **An archive behind a door.** A tribe's elder knows a gate in the deep desert where a sevrabun guards a room cut into the rock, and offers to tell where it is to a party that brings back what is written inside.

:::secret {title="How a sevrabun's gate is passed"}

- **The right answer.** The answer is always something the people who built the place behind the gate knew, a name of a god, a funeral custom, a word of their speech, and it is found in what survives of them: an inscription elsewhere, a record kept by another people who traded with them, a custom an old tribe has kept without knowing where it came from. The answer is itself a clue to who built the place.
- **A token.** The builders of some gates carried a token, a seal or a carved plaque, and a sevrabun lets its bearer pass unasked. A party that finds one in another ruin of the same people walks through.
- **Force.** A sevrabun cannot be taken from the flank at its gate, but it cannot leave its gate either. Archers out of its reach, and a party that refuses to close with it, can wear it down, though it fights to the end and does not flee.

:::

## See Also

[[lore-dreadspawncrtr|Dreadspawn]]
: the made creatures, and how they differ from constructs and undead

[[place-dunhardsrtrgn|Dunhara Desert Region]]
: the desert whose gates it keeps
