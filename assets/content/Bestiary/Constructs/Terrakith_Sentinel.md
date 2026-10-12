---
shortcode: trrkthsn
name: {full: Terrakith Sentinel, aliases: []}
type: being
subType: creature
description: "An eight-foot golem sculpted from magically infused clay, engineered as a relentless enforcer guarding temples, crypts, and mages' chambers."
tags: [construct]
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
    complexion: null
    extra_features: []
sohl:
  kbcat: construct
  attrRollFormula: {str: 1d6+21, agl: 1d4+3, per: 1d6+9}
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
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
          impactBase: {numDice: 1, die: 6, modifier: 7, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Ground Stomp
      type: skill
      system:
        shortcode: stomp
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: stomp
          name: Ground Stomp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure: {zones: [], parts: [], locations: []}
      weight: {base: 1000, calc: "1000"}
      reachBase: 0
      bodyScaleBase: 1.66
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

![[trrkthsn|Terrakith Sentinel]]{float=top-left}

The two figures beside the inner door look like statues: eight feet of gray-brown clay, rough-modeled, broad in the shoulder, with blank sockets for eyes and lines of signs cut into their chests and arms. Then you notice that the clay is wet. It glistens in the lamplight as if it had been shaped this morning, in a hall where nothing has been wet for a thousand years. When the first of you steps past the threshold stone, both heads turn together with a sound like a millstone grinding, and the nearer one takes a step down off its plinth.

# Dossier {#dossier}

The Terrakith Sentinel is a construct: an eight-foot figure of dense, always-damp clay, carved with binding signs, that a mage made to stand at a door and keep it. It is not alive and has no will; it does what it was set to do, for as long as the working holds, and many have held far longer than whoever set them. They are met as guardians of temples, tombs and the private chambers of mages, and in the [[place-khzryndsrtrgn|Khazryn]] they stand in the ruins of the dead cities, at doors that the sand has buried and uncovered again. The tribes call the ruins that hold them shut, and leave them so. Every sentinel stops where its orders stop: at a threshold, a stair or a ring of carved stones, and a party that stays outside that line is not touched.

Who made the Khazryn's sentinels is not known. The scholars of [[place-caldar|Caldar]] point out that their clay is the gray lake-clay of [[place-ewod|Ewod]] and that the signs on them are close to the script over the doorways of [[place-osikor|Osikor]], and they credit the sentinels to the [[lore-basinbldrs|Basin Builders]]; the tribes say only that they were there before anyone.

## Presentation

A massive human shape of gray-brown clay, roughly modeled, thick in the limb and short in the neck, eight feet tall and a thousand pounds. The surface is always wet and glistening, whatever the air, and it gives under a fingertip as fresh clay does and then closes again. Lines of signs are cut into its chest, arms and brow; those are the binding, and while they are whole the sentinel moves. The eyes are empty hollows. It makes no sound but the grinding of its own movement, and it smells of river mud.

## In the Land

In the Khazryn the sentinels stand in the ruins of the dead cities, at doors the sand has buried and uncovered again, in the lowest halls and at the thresholds of sealed rooms, and they are found too in old temples, tombs and the private chambers of mages elsewhere. Each stands at the post it was given and has never left it. The tribes know which ruins hold one and call those ruins shut. Wherever the sand shifts, a sentinel that has been buried for a lifetime is uncovered standing exactly where it stood.

## Key Behaviors

A sentinel stands without moving for as long as its post is undisturbed, for centuries if need be, and does not tire, eat, sleep or decay. When something crosses the line it keeps, it acts, and its orders decide what it does: some strike anything that passes, some only what touches a particular thing, some stand aside for a word or a sign that whoever set them knew and nobody remembers. It pursues as far as its orders run and not a step further, then goes back to its post. It cannot be talked to, bribed or frightened, and it does not learn.

## What the Tribes Do

The tribes leave a ruin with a sentinel in it alone and say so to anyone who asks the way. Tomb-robbers and scholars do not, and the ones who come back have learned three things: the sentinel's line can be found by watching where it turns back, water softens it and fire cracks it, and the signs cut into it are the life of it. A sentinel whose signs are scored through stops. The difficulty is getting close enough to score them. Caldar pays well for the clay of a stopped sentinel, which stays wet in a sealed jar for years.

## Signs

- Two figures of wet clay flanking a doorway in a ruin where everything else is bone-dry.
- Deep, rounded footprints in a dusty floor that lead from a plinth to a threshold and back, and no further.
- Bones lying in a line across a floor, all of them just inside a doorway.
- A smell of river mud in a dead city in the middle of the sand.
- Signs cut in a ring on the floor stones around a door.

## Combat Strategy

The sentinel walks straight at the intruder and strikes. It does not dodge, feint or protect itself; it absorbs what is done to it and goes on hitting. It stamps to throw a group off its feet and then strikes whoever is down. It is slow until something runs, and then it moves faster than its bulk suggests over a short distance. It fights until the intruder is dead, has gone back across its line, or it is destroyed. Edged weapons and points sink in and do little. A party that wants it stopped pours water on it, burns it, batters it with heavy blows, or gets to the signs.

## Attack Methods

### Crushing Blow

A heavy, clubbing swing of a clay arm that breaks shields, bones and men. It strikes as hard on the hundredth blow as on the first.

### Ground Stomp

The sentinel lifts a foot and brings it down, and the shock throws everyone near it off balance and knocks loose stone from the walls of a narrow chamber.

## Special Abilities

### Clay Durability

Cuts and thrusts sink into the clay and close again. Heavy crushing blows break pieces off it. Water softens it and makes it slow; strong heat bakes and cracks it.

### Surprising Speed

Over a short distance, chasing something that runs, it moves as fast as a running man.

### Relentless Drive

It feels no pain and no fear and does not stop for damage. It cannot be reasoned with, because there is nothing in it to reason with.

### The Binding Signs

The signs cut into it hold the working. Scoring them through with a blade stops it, and one that is damaged moves more slowly and strikes more weakly.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Agility:** 4-7 (1d4+3)

- **Perception:** 10-15 (1d6+9)
