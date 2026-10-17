---
shortcode: strcrwlr
name: {full: Starcrawler, aliases: []}
type: being
subType: creature
description: "A rare celestial being of stellar essence given flesh, appearing where earth and sky grow thin, harmless yet utterly alien in its priorities."
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
    complexion: []
    extra_features: []
sohl:
  kbcat: spirit
  attrRollFormula:
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+14
    agl: 1d4+16
    per: 1d4+6
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Sharp Mandibles
      type: skill
      system:
        shortcode: mandible
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: mandible
          name: Sharp Mandibles
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: edged}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Paralyzing Venom
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: sting
          name: Paralyzing Venom
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
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
            probWeight: 8
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Sting
            shortcode: stingloc
            bodyPartCode: abdomenpart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 0.81
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

![[strcrwlr|Starcrawler]]{float=top-left}

The ruin is a ring of fallen stones on a rise in the desert, and on the largest of them, cut deep and worn smooth, is a map of the sky. As the night deepens, the map begins to glitter. Points of light are crawling over the carved stars, matching them, and one of them detaches itself and comes down the stone: a creature the size of a cat, many-legged, its body clear as glass and full of tiny lights, some steady and some twinkling, arranged in shapes you almost recognize. It stops at the foot of the stone, lifts its head toward the sky, and holds still. Then the lights in its body rearrange themselves, slowly, into the shape of the stars directly overhead.

# Dossier {#dossier}

The Starcrawler is a rare and strange spirit-being of the night sky: a small, many-legged creature with a clear body full of points of light, that appears where earth and sky come close and watches the stars with a purpose no one has fathomed. It is harmless unless threatened, and it is wholly alien. It does not breed; each is single, and perhaps very old. The place it is met is [[place-beshakan|Beshakan]], the desert of [[place-aukhelathrgq|Au'Khelathu]] whose ruins hold the star maps the empire's earliest astronomers carved in the age of [[lore-akhfirsttab|the First Tablets]], and whose ruins, the astrologers say, hold spirits of the desert and creatures bound to the stars.

## Presentation

A starcrawler is the size of a cat or a small dog, with a long segmented body on many fine legs and a small head with no visible eyes. Its body is clear or nearly so, and every segment is studded with points of light, some steady, some twinkling, some slowly pulsing, arranged in patterns that resemble constellations and change as the sky turns. It moves with a fluid, gliding motion, up walls and over carved stone as easily as across sand, and its feet barely touch the surface. It makes no sound. In daylight it is dim and sluggish and hides; at night it glows.

## In the Land

Beshakan is desert, and the astrologers of Au'Khelathu count its deep reaches among the sacred places of their craft: an astrologer who wants to see the sky as the first astronomers recorded it goes deep into Beshakan to read the stones. The starcrawlers are found at those ruins and on the high points round them, the ridges, the standing stones, the tops of ruined walls, and nowhere else that anyone knows. They come out at night and crawl over the carved star maps, matching the lights in their bodies to the carvings and to the sky, and they go into crevices in the stones at dawn. They do not eat that anyone has seen.

## Key Behaviors

A starcrawler watches the sky. It climbs to a high point and holds still for hours, and the lights in its body move with the stars. It compares: the carvings with the sky, the sky with the carvings, and sometimes it rearranges its own lights into patterns that are not in either. It pays almost no attention to people unless they come close or threaten it, and then it flees, upward. It is unique: no two have the same patterns, and none has ever been seen with young. The astrologers believe it is keeping a record of its own, and that it is older than the carvings.

## What the Astrologers Do

The astrologers who make the pilgrimage into Beshakan regard a starcrawler as an omen and a colleague. They do not harm one, and they copy its patterns onto their tablets when it rearranges its lights into a shape that is not in the sky, because some of them hold that those are skies that have been or will be. Several of the temple-schools' star-tables rest on copies of starcrawler patterns, and the schools that do not use them call those tables worthless. The desert rangers who guide pilgrims through Beshakan warn them not to touch one, because its bite numbs a hand for days. Followers of the old cults who see in **[The Convergence of the Nine Moons]{.name data-type="lore/history"}** the chance to begin an age of chaos are said to hunt starcrawlers for their lights, and the astrologers count that among the cults' crimes.

## Signs

- Points of light crawling over a carved star map at night, matching the stars.
- Faint, fine tracks of many small feet up the face of a standing stone, and none on the sand round it.
- A cluster of steady lights on a ridge-top that moves as the stars move.
- Small, clear, empty husks with tiny holes in them, lodged in the crevices of a ruin.
- An astrologer's tablet with a star pattern copied on it that does not match the sky.

## Combat Strategy

A starcrawler avoids fighting. Threatened, it flees to high ground or slips partly out of the world so that blows pass through it. Cornered, it flashes its lights to dazzle its attacker, bites, and runs while the bitten hand goes numb. It does not pursue.

## Attack Methods

### Sharp Mandibles

It bites with small, strong, sharp mandibles, quickly and precisely. The wound is minor; it bites to escape.

### Paralyzing Venom

Its bite carries a venom that numbs and weakens the bitten limb for a time, so that the hand drops what it holds and the starcrawler gets away.

## Special Abilities

### Celestial Luminescence

Its body glows, and it can brighten to a dazzling flash or dim to nearly nothing at will.

### Aerial Grace

It climbs walls and overhangs as if they were level ground, and goes where nothing else can.

### Spirit Affinity

It is partly in the spirit realm and can become more or less solid at will. Solid, weapons can hurt it; half there, they pass through.

### Swift Movement

It is astonishingly fast, and it dodges blows that should not miss.

## Attributes

Strength
: 6-9 (1d4+5)

Endurance
: 7-10 (1d4+6)

Dexterity
: 15-18 (1d4+14)

Agility
: 17-20 (1d4+16)

Perception
: 7-10 (1d4+6)

Aura
: 9-12 (1d4+8)

Will
: 7-10 (1d4+6)

Reasoning
: 6-9 (1d4+5)

Creativity
: 7-10 (1d4+6)
