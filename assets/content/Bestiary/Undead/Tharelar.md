---
shortcode: bonesentry
name: {full: Tharelar, en: [The Bone Sentry], khel: [tharelar]}
type: being
subType: creature
description: "A damut stripped to the bone and set at a tomb door to stand its post, striking whoever crosses the threshold without its raiser's token."
tags: [undead, image-needed]
data:
  packFolder: helspawn
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
  kbcat: helspawn
  attrRollFormula: {str: 1d6+10, end: 1d4+13, dex: 1d4+3, agl: 1d4+3, per: 1d4+3, pal: 1d6+7}
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-pal, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
    - name: Festering Bite
      type: skill
      system:
        shortcode: fbite
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: fbite
          name: Festering Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.17
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

The passage ends at a doorway cut square into the rock, and in the doorway stands a man. The lamp shows him a piece at a time: bare feet of bone on the sill, shins of bone, a leather kilt gone black and stiff, ribs, a spear held upright in a hand of bone, a skull. He stands at the post of a gate watcher, the spear grounded by his right foot, the shoulders squared, the jaw lifted, exactly as a living guard stands a long watch, and he does not move. On the dome of the skull, cut into the bone and blackened, is a mark: three short strokes under a ring. The lamp flame leans toward the doorway. Nothing else in the passage moves until someone steps toward the sill.

# Dossier {#dossier}

**Tharelar** (the Bone Sentry) is the learned name for a [[being-damut|damut]] stripped to the bone and set at a door to keep it, from the [[skill-khelathlng|Khelathi Language]] _tharel_, to stand, with the ending _-ar_ of the one who does it: _the one who stands_. It is one of the driven dead and no more than that, with no mind and no wants. Its raiser binds it to a threshold and gives it a single order, and it carries out the order for as long as the binding lasts: it stands its post, and it attacks whoever crosses the threshold without the raiser's token. The binding is cut into the bone as a mark, on the skull or on the breastbone, and the mark is the raiser's own. Like every undead it was made by another, a necromancer or a death god's servant; no tharelar raised itself. It carries [[lore-theshadow|the Shadow]], as every undead does. See [[lore-undead|Undead]] for the learned terms and the folk names.

## Presentation

A tharelar is a skeleton, clean or nearly so, held together by the binding and by whatever cords of dried sinew are left at the joints. It stands in the posture of the trade it had in life: a spearman with the spear grounded, a gate watcher with his staff across the door, an archer with an arrow on the string, a servant with a tray. It wears or holds what it was buried with or what its raiser gave it. The mark that binds it is cut into the bone and blackened, a few strokes and a ring, a sign or a letter, and it differs from one raiser to another. In the dark its eye sockets are only dark. It does not shift its weight, and dust gathers on its shoulders.

## In the Land

A tharelar is found at the door of a tomb, a howe, a vault or the private rooms of someone who raises the dead, wherever a necromancer or a death god's servant has wanted a door kept. It is set inside a threshold and never outside it, so that a passer-by on the open hillside never sees one. In the [[place-nrdlndsrgn|Nordlands Region]] the folk give the name [[lore-haugverdir|hrúmverdir]], the howe-wardens, to the dead that keep a howe's door, and a tharelar set at a howe door by the [[affiliation-nahild|Faith of Nahild]] is one of them. Elsewhere one is found in old burial grounds whose families paid a necromancer to keep the dead from robbers, in the hidden houses of necromancers, and in tombs where somebody has hidden something that is not a body.

## Key Behaviors

A tharelar holds its post and nothing else. It stands without moving for years, and it does not react to light, noise, smell or the voices of people outside its threshold. When a living thing crosses the threshold without the token, it moves at once, strikes at the nearest living thing until nothing living is left inside, and returns to its post and to its stance. It strikes the token-bearer's companions as readily as anyone else if they are not carrying a token of their own. It takes no heed of its wounds: a tharelar knocked down gets up, a tharelar whose arm is broken off strikes with the other, and a tharelar cut into pieces goes on moving in pieces. It does not leave its threshold, does not pursue, and does not hunger, because nothing of the meat is left. It is degrading as every damut is, more slowly than one with flesh on it, and an old tharelar is slow and uncertain and at last falls apart at its post.

## What People Do

Tomb robbers learn early to look for the doorways where a skeleton stands upright and to leave them alone, and the bones heaped in front of a tharelar's door are usually theirs. Those who must pass one go to whoever raised it for the token, or to whoever holds the raiser's papers, and the token is worth more than anything in the tomb. Priests and hunters of necromancers study the marks, because the mark on the bone names the raiser as surely as a seal, and the same mark found on two doors in two provinces ties a necromancer to both. [[affiliation-sekran|The Arcane Inquisition]] keeps copies of the marks it has seen.

## Signs

- A skeleton standing upright in a doorway, in a guard's posture, with dust on its shoulders.
- A heap of broken bones and rusted tools on the near side of a tomb door, and nothing disturbed on the far side.
- A mark cut into a skull or a breastbone and blackened.
- A doorway in a tomb with a sill swept clean, though nobody comes to sweep it.
- A family that pays a man nobody likes, every year, for the keeping of its tomb.

## Combat Strategy

A tharelar fights with whatever its post gave it, a spear, a staff, a bow, and with its bare hands and teeth when that is gone. It goes straight at the nearest living thing inside its threshold and strikes until the thing stops moving. It does not dodge or parry, it does not tire, and it does not fear. It cannot be drawn out: anyone who steps back across the threshold is ignored, and it walks back to its post.

## Attack Methods

### Festering Bite

Its bare teeth close on whatever it can reach when its hands are empty, and the bite of the dead festers.

### Grab

It seizes and holds with hands of bone, pinning its prey for the weapon or the teeth.

## Special Abilities

### Weapon Strike

It strikes with the weapon of its post, with the skill of the trade it had in life and the unnatural strength of the driven dead.

### No Pain or Fatigue

It does not tire, does not feel pain, and is untouched by fear or despair.

### Supernatural Endurance

It keeps striking with limbs broken, gets up when knocked down, and its severed parts go on moving. Only a body broken past moving stops it, and it rises again from a heap of bones that has not been scattered.

### The Threshold

It moves only within its threshold and never crosses it.

## Attributes

The attributes below are those of a tharelar newly set at its post. An old one is slower and weaker, and its strength declines toward nothing as its binding wears out.

Strength
: 11-16 (1d6+10)

Endurance
: 14-17 (1d4+13)

Dexterity
: 4-7 (1d4+3)

Agility
: 4-7 (1d4+3)

Perception
: 4-7 (1d4+3)

Shadow
: 8-13 (1d6+7)

## Hooks {#hooks}

- **The token in the will.** An heir has found in his grandmother's papers a small bone disk with a ring and three strokes on it, and a note naming the tomb it opens. He wants a party to go in with him, and does not say what he expects to find.
- **A mark on two doors.** A party that has seen a tharelar's mark in one tomb finds the same mark on a sentry in a merchant's cellar in another province, and the merchant swears he has never left his town.
- **Robbers at the door.** A gang of tomb robbers has lost two men at a guarded door and wants to hire specialists to get them through it, and the family that owns the tomb wants the robbers caught on the threshold.
- **The guard who falls apart.** An old tharelar at a family tomb has begun to collapse at its post and rise again, and the family wants to know who can raise them another before word gets round.

:::secret {title="How a tharelar is passed or ended"}

- **The token.** Its raiser makes a token for each door, a small thing marked with the same sign as the bone, and anyone carrying it crosses the threshold untouched. A tharelar does not tell one bearer from another, so a stolen token works as well as a given one.
- **The mark.** The binding lives in the mark on the bone. A blow that breaks the bone through the mark, a skull split or a breastbone shattered across the cut, ends it at once, and the skeleton falls to pieces and does not rise again. Scraping the mark off the bone does the same, for anyone who can hold the thing still long enough.
- **Force.** A tharelar knocked to pieces rises again from its bones while the mark is whole, but bones scattered beyond the threshold, or burned, cannot gather.

:::

## See Also

[[being-damut|Damut]]
: the driven one: the mindless undead, of which the tharelar is one kind

[[lore-undead|Undead]]
: the undead as a class, the learned terms and the folk names

[[lore-haugverdir|Hrúmverdir]]
: the north's howe-wardens

[[lore-theshadow|The Shadow]]
: the corrupting force from outside creation that every undead carries
