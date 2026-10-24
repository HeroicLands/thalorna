---
shortcode: mtrfrdrg
name: {full: Mature Fire Dragon, aliases: []}
type: being
subType: creature
description: "A calculating apex fire dragon of three or four centuries, cruel and supreme, selecting its prey with deliberate predatory strategy."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: icon-dragonheadft
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
  kbcat: mythic
  attrRollFormula:
    str: 1d6+45
    end: 1d6+33
    dex: 1d4+5
    agl: 1d4+7
    per: 1d6+12
    snt: 1d4+1
    aur: 1d6+10
    wil: 1d6+16
    rea: 1d6+10
    cre: 1d6+8
    emp: 1d6+7
    elo: 1d6+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 48}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 36}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 19}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 85}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 84}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 66}}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 19, aspect: piercing}
          lengthBase: 8
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, armorReduction: 3}
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 12, modifier: 0}
          impactBase: {numDice: 1, die: 10, modifier: 18, aspect: edged}
          lengthBase: 7
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 16, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 17, aspect: blunt}
          lengthBase: 9
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Breath
      type: skill
      system:
        shortcode: breath
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: breath
          name: Breath
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 15, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 60
          drawBase: 0
          traits: {breath: true, impactBands: 15 · 11 · 7}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 8}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 8}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 6}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 6}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 8}
          - {name: Tail, shortcode: tailzone, probWeight: 6}
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
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: forelegszone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Wing
            shortcode: rwingpart
            bodyZoneCode: rwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Left Hind Leg
            shortcode: lhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 1
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: tailzone
            roles: [locomotor]
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
            protectionBase: &a1 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 7
            protectionBase: *a1
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: &a2 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Left Fore Foot
            shortcode: lfftloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a3 {blunt: 20, edged: 22, piercing: 21, fire: 19}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 7
            protectionBase: *a2
          - name: Right Fore Foot
            shortcode: rfftloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a3
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: &a5 {blunt: 16, edged: 18, piercing: 17, fire: 15}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 7
            protectionBase: &a4 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: *a4
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: none
            amputability: low
            shockValue: 1
            probWeight: 10
            protectionBase: *a5
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: &a6 {blunt: 22, edged: 24, piercing: 23, fire: 21}
          - name: Left Hind Foot
            shortcode: lhftloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: &a7 {blunt: 20, edged: 22, piercing: 21, fire: 19}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 7
            protectionBase: *a6
          - name: Right Hind Foot
            shortcode: rhftloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 3
            protectionBase: *a7
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 20, edged: 22, piercing: 21, fire: 19}
      weight: {base: 3000, calc: "3000"}
      reachBase: 0
      bodyScaleBase: 2.61
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 65
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: aerial
        feetPerRound: 190
        leaguesPerWatch: 16
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

The mesa stands alone above the salt flat, and the scouts said it was empty. It is not. On its rim, against the white glare of the flat, lies a dragon, still as a carving: twenty-four feet of crimson and black scale, its wings folded like a cloak, its head resting on its forelegs. It has watched you cross the whole flat. When it lifts its head the air above it wavers with heat, and its eyes, deep orange and patient, move from one of you to the next and settle on the one at the back, the one with the water-skins. It does not roar. It yawns, showing teeth like spearheads, and the heat of its breath reaches you across a hundred yards of salt.

# Dossier {#dossier}

The Mature Fire Dragon is a fire dragon of three or four centuries: twenty-four feet from snout to rump, with a thirty-six-foot wingspan, in the full of its strength and its cunning, with its ground held and its hoard gathered, and with the patience to choose its prey. Its cruelty is deliberate. Like every dragon it is a mortal creature with a soul of vast scale, whose instinctive channeling floods the magic round it and makes a mage's spells come apart in his hands. It remembers every insult and every broken bargain, and it was hatched in the centuries after the [Vylarian Republic]{.name data-type="affiliation/polity"} betrayed the dragons who had won its war, and has heard from its elders, and from the dragon dead, what was done. One holds the mesas and badlands of [[place-chakultzklrgn|Ch'akul Tsa'kul]], the Thirsty Land, the desert barrier between the tribal north of [[place-kiichchik|Ki'ich'chik]] and the southern civilizations.

## Presentation

A mature fire dragon is massive and heavily muscled, its scales thick, overlapping and dark, crimson going to black at the edges and along the spine, with a dull red glow between them when it is roused. Its wings are broad and powerful, strong enough to carry off a horse. Its tail is thick and scarred from centuries of fighting. Its head is long and heavy, crowned with backswept horns, and its eyes are deep orange and steady. The heat round it is fierce; vegetation wilts and water steams within sixty feet. It moves slowly when it chooses and very fast when it means to, and it makes no unnecessary sound.

## In the Land

Ch'akul Tsa'kul is sand seas in the north, rocky plateaus, mesas and badlands in the center and west, and salt flats in the south where ancient seas dried away, with the ruins of an older, wetter age scattered through it. The dragon holds the central badlands, a great stretch of mesas and box canyons, with lairs in several of them and its hoard in the deepest, in a ruin from that older age. It hunts the desert's herds, and it takes what crosses its ground: the caravans that carry trade between the tribal north and the south, and the travelers who come prepared with water and the knowledge of hidden oases and still do not emerge. It holds its ground against every rival large enough to matter.

## Key Behaviors

A mature fire dragon is a strategist. It studies its prey before it strikes, chooses the weakest point, and strikes once, decisively. It holds grudges for centuries and seeks its revenge when the revenge will be complete. It keeps a careful hoard and knows every piece in it. It speaks, and it can bargain: a mature dragon has learned that words can be worth more than fire, and it will exact tribute, or trade safe passage for something it wants, and keep the bargain exactly as long as it suits it. It does not trust humans and does not forget that it has reason not to. It tolerates no rival large enough to be one.

## What the Peoples of the Border Do

No nation claims Ch'akul Tsa'kul. The tribal peoples to the north and the Ki'ich'chik to the south both cross it, by the routes they know, and both pay for crossing the dragon's badlands. The traders who carry northern goods south have learned to leave a tribute at the foot of a particular mesa, metal, worked stone, things that shine, and to cross only in the season when the dragon has fed. Itsani priests at the southern edge read the dragon as a sign of something, and do not agree on what. Travelers who come to the badlands for the ruins of the older age, scholars and treasure-hunters both, are told by the guides which mesas not to climb, and the guides keep their fees whether or not the warning is taken. The survivors of a Ki'ich'chik war party sent to kill it came back at the end of a season with a message, which they would not repeat.

## Signs

- A mesa-top in the badlands whose rocks are glazed and fused, as if from great heat.
- Bones of large animals, horses and men among them, heaped at the foot of a cliff, and ash.
- Tribute left at the foot of a mesa: metal, worked stone, shining things, and the tracks of the people who left it going away fast.
- A heat-shimmer over a box canyon at dawn, before the sun is high.
- Caravan routes that go far round a stretch of the badlands for no reason the country explains.

## Combat Strategy

A mature fire dragon chooses its fights. It strikes from the air out of the sun, takes the most dangerous enemy or the most valuable prey first, and does not waste breath on the rest until it must. It burns its enemies in their formation, scatters them, and picks them off. It uses its wings to batter and its tail to sweep men off ledges. It retreats from a fight it is losing, deliberately, and comes back when the odds are better, and it remembers the faces. It knows the tricks men use against dragons and has seen most of them.

## Attack Methods

### Bite

The jaws close with crushing force, severing limbs and crushing armor, and the dragon shakes and flings what it holds.

### Claw

The forefeet rake in combination, each claw piercing armor, and the dragon pins a victim under one foot while it strikes with the other.

### Tail

The heavy tail sweeps in a wide arc that knocks several men down at once, or crushes one, and throws men off ledges and walls.

### Breath

It breathes a spreading gout of flame thirty feet long, hot enough to melt stone, that sets every combustible alight. It paces its breath and can breathe many times before it tires.

## Special Abilities

### Wing Buffet

It snaps its wings outward and the blast of air knocks everyone near it off their feet, scatters a formation and blows out torches.

### Flight

A powerful flier, it can carry off a horse and fight in the air for as long as it chooses.

### Armored Scales

Its scales are all but proof against ordinary weapons; it takes enchanted weapons or great force to hurt it.

### Heat Aura

The air within sixty feet is fiercely hot. Plants wilt, water steams away, and those who stay near tire quickly and burn.

### Draconic Presence

Within sixty feet, intelligent creatures feel its overwhelming power as dread, and horses and dogs panic.

### Fire Immunity

Fire does not harm it.

### Unraveling Presence

Its channeling floods the currents of magic round it, and a mage near it finds his workings coming apart: spells misfire, wards fail, and partly channeled power discharges wildly, often on the mage.

## Attributes

Strength
: 46-51 (1d6+45)

Endurance
: 34-39 (1d6+33)

Dexterity
: 6-9 (1d4+5)

Agility
: 8-11 (1d4+7)

Perception
: 13-18 (1d6+12)

Scent
: 2-5 (1d4+1)

Aura
: 11-16 (1d6+10)

Will
: 17-22 (1d6+16)

Reasoning
: 11-16 (1d6+10)

Creativity
: 9-14 (1d6+8)

Empathy
: 8-13 (1d6+7)

Eloquence
: 11-16 (1d6+10)
