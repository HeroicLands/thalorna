---
shortcode: glmsprt
name: {full: Gloomsprite, aliases: []}
type: being
subType: creature
description: "A fey trickster of the shadow-touched borderlands who delights in puzzles and bargains, leading travelers astray to punish broken unspoken promises."
tags: [spirit]
data:
  packFolder: spirit
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
    complexion: null
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    end: 1d4+5
    dex: 1d6+6
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+10
    wil: 1d4+5
    rea: 1d4+8
    cre: 1d4+12
    str: 1d4
  items:
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 2}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 13}}
    - name: Tiny Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Tiny Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -5, aspect: edged}
          lengthBase: 1
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
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: thoraxzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mandibles
            shortcode: mandibloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 3
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: thoraxpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.33
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[glmsprt|Gloomsprite]]{float=top-left}

The path forks at the old thorn tree, and you are sure you took the left fork an hour ago; and here is the old thorn tree again. Something laughs, very small and very close. On the thorn tree, at the height of your eyes, sits a creature no bigger than your hand, shaped somewhere between a dragonfly and a little gray woman, its body made of something halfway between light and shadow, so that your eyes slide off it. It has its head on one side. "You promised your mother you'd be home by dark," it says, in a voice like a dry leaf, "and you won't be." It is gone. Both forks of the path now lead back to the tree.

# Dossier {#dossier}

The Gloomsprite is a small spirit of the borderlands between the spirit world and the material world, a trickster of shadow and half-light no bigger than a hand, which delights in puzzles, bargains and contradictions and leads travelers astray. It is neither wholly malicious nor at all kind. It is drawn above all to broken promises, including the ones never spoken aloud, and it punishes them the way it does everything else, by confusion. It is met in the [[place-thuravelhills|Thúravel Hills]] of southern Provènzia, the low wooded hills that are mapped with a vagueness unusual in so well-surveyed a kingdom and that the people who live near them do not go far into without a reason.

## Presentation

A gloomsprite is the size of a hand, with a slender body and four gauzy wings, shaped somewhere between an insect and a tiny person. It is made of something between light and shadow, translucent and shimmering, and the eye slides off it; it is easiest to see out of the corner of the eye. Its face is small and sharp and very expressive. It speaks, in a whispering voice, and it knows things about the people it speaks to that it should not know. It laughs a great deal. In bright light it becomes solid and dull, and plainly frightened.

## In the Land

The Thúravel Hills were a country of the Old Gods before the Aurèldían Twelve came west, and they were never really converted so much as left alone; every attempt to survey them has produced a chart that disagrees with the last. The gloomsprites haunt the edges of things there: the forks of paths, the margins of woods and clearings, the fords, the old stones, places where the light changes. They do not stay in one place and they are seldom seen in the same place twice. They are drawn to travelers, to anyone who is lost or uncertain, and to anyone carrying an unkept promise.

## Key Behaviors

A gloomsprite plays. It sets puzzles and contradictions: a path that leads back to where it started, directions that are true and useless, a bargain offered at a crossroads. It is solitary and capricious. It seems to judge people by whether they keep their word, including promises made carelessly or only to themselves, and those who have broken one it leads astray, sometimes for an hour and sometimes for days, sometimes into real danger. It honors an explicit bargain exactly, as if compelled to, though it reads the terms in the way that suits it best. It avoids fighting.

## What the Hill People Do

The villages at the edges of the hills are small, old and inward, and they keep their own customs, which the ballad-collectors have recorded and do not understand. One of them is that nobody goes into the hills with a promise unkept; a man who has one goes and keeps it first, or sends word that he will. Another is that a traveler who finds himself coming back to the same tree twice stops, says aloud what he owes and to whom, and promises to pay it, and then walks on. Shepherds carry a lantern even by day in the deep woods. The cartographers who blame the vague maps on the terrain have never asked the villagers whether the gloomsprites have anything to do with it, and the villagers have never offered.

## Signs

- A path that returns to the same landmark however carefully it is followed.
- A small laugh close by with no one there, in a wood at dusk.
- Directions given by a stranger that are true and lead nowhere.
- Travelers who come out of the hills a day later than they should have, with no idea where the day went.
- A shimmer at the edge of sight, at the fork of a path, that is gone when looked at.

## Combat Strategy

A gloomsprite almost never fights; it is far too fragile. It confuses, misdirects and hides, darts in to scratch and vanishes into shadow, and leaves its victims fighting images. If it cannot win by trickery, it leaves. Light is its weakness: lanterns, torches, sunlight and light magic force it into a solid form that weapons can hit, and a party with strong light can turn an encounter round.

## Attack Methods

### Tiny Claws

Forced to fight, the sprite rakes with tiny claws that find the gaps in armor with uncanny precision. The wounds are small and strangely deep.

## Special Abilities

### Mental Disorientation

The sprite confuses the mind: directions feel wrong, distances lie, a man walks toward it while he means to walk away and strikes at images instead of the sprite.

### Shadow Flitting

It moves through shadows as if they were open doors, vanishing from one and appearing from another. In bright light it is held to ordinary space.

### Layered Illusions

It lays false images over the world, many sprites, many paths and many ways out, all false, and the real sprite is somewhere among them.

### Incorporeal Nature

Ordinary weapons usually pass through it. Light magic and blessed weapons strike it as if it were solid, and bright light makes it solid enough to hit.

### Fey Bargaining

It is bound to honor an explicit bargain, and so is the one who makes it with it. It keeps its word to the letter and reads the letter in its own favor.

## Attributes

- **Endurance:** 6-9 (1d4+5)

- **Dexterity:** 7-12 (1d6+6)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 11-14 (1d4+10)

- **Will:** 6-9 (1d4+5)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 13-16 (1d4+12)

- **Strength:** 1-4 (1d4)
