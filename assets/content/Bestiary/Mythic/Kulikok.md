---
shortcode: ashcairn
name: {full: "Kulikok", en: [The Ash Cairn]}
type: being
subType: creature
description: "A headless heap of warm gray plates on many legs that stands in the ash of the waste like a pile of stones, and stings whoever rests against it at dusk."
tags: [mythic, image-needed]
data:
  packFolder: mythic
  icon: sohl-none-icon-scorpiontail
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
    str: 1d6+14
    end: 1d6+14
    dex: 1d4+6
    agl: 1d6+8
    per: 1d6+10
    aur: 1d6+4
    wil: 1d6+12
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 90}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 75}}
    - name: Sting
      type: skill
      system:
        shortcode: sting
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: sting
          name: Sting
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 4
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Collapse
      type: skill
      system:
        shortcode: collapse
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: collapse
          name: Collapse
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 2, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Heap, shortcode: heapzone, probWeight: 8}
          - {name: Legs, shortcode: legszone, probWeight: 4}
          - {name: Tails, shortcode: tailszone, probWeight: 3}
        parts:
          - name: Heap
            shortcode: heappart
            bodyZoneCode: heapzone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Hollow
            shortcode: hollowpart
            bodyZoneCode: heapzone
            roles: [vital]
            canHoldItem: false
            probWeight: 2
          - name: Left Legs
            shortcode: llegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Legs
            shortcode: rlegspart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tails
            shortcode: tailspart
            bodyZoneCode: tailszone
            roles: [manipulator]
            canHoldItem: false
            probWeight: 10
        locations:
          - name: Plates
            shortcode: platesloc
            bodyPartCode: heappart
            bleedingSusceptibility: none
            amputability: none
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 10, piercing: 9, fire: 10}
          - name: Hollow
            shortcode: hollowloc
            bodyPartCode: hollowpart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 6
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 1, fire: 2}
          - name: Left Legs
            shortcode: llegsloc
            bodyPartCode: llegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: &a1 {blunt: 4, edged: 3, piercing: 3, fire: 5}
          - name: Right Legs
            shortcode: rlegsloc
            bodyPartCode: rlegspart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: *a1
          - name: Tails
            shortcode: tailsloc
            bodyPartCode: tailspart
            bleedingSusceptibility: low
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 4, fire: 6}
      weight: {base: 900, calc: "900"}
      reachBase: 0
      bodyScaleBase: 1.5
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 40
        leaguesPerWatch: 3
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: [{scope: surface_cover, key: barren, mode: add, textValue: "0"}]
        disabled: false
---

# Appearance {#appearance}

The light goes brown and then red behind the cones, and the day's walk is over. Beside the way stands a heap of gray slabs dusted with ash, each slab about the size of a man's head, and it is the only thing in sight a tired back can lean on. You drop your pack against it and sit. The slab behind your shoulder is warm, warmer than the ash, and it moves: not a stone settling but one plate sliding over the plate beneath it. Under the heap, in the dark between the stones, a great many thin legs draw in at once. Above you, out of the top of the pile, three long jointed tails unfold one after another, black against the red sky, each ending in a hooked point that drips.

# Dossier {#dossier}

The kulikok is the Ash Cairn of the returners' accounts: a heap of loose gray plates on many legs, with no head, no face and no front, which stands still in the ash all day and moves at dusk. The gate's warnings call it a scorpion-thing, for its stinging tails and its plates, and the name fits nothing else about it. It has no pincers and no body a man can point to. It stands as high as a man's chest, twice as broad, and weighs as much as an ox. It haunts [[place-ashcountry|the Ash Country]] from the foot of [[place-ashstair|the Ash Stair]] southward, and fewer and larger ones stand on the gravel plains of [[place-thethirst|the Thirst]].

Its name in the priests' tongue means full of plates.

## Presentation

A kulikok at rest is a cairn. Its plates lie over each other like a pile of flat stones, gray as the ash and dusted with it, each one about the size and shape of a man's head and as thick as a hand. They are warm to the touch at every hour, and between them are narrow gaps that go back into darkness. Underneath, folded tight against the ground, are thirty or forty thin jointed legs, and among them, at the bottom of the heap, a soft pale hollow that is the only part of it that bleeds. From the top of the heap rise three to five tails, each as long as a spear, jointed like a finger and ending in a curved sting. When it walks, the plates grind against each other with a sound like a cart of stones on a rough road, and the heap leans and settles as it goes, so that it seems always about to fall down.

## In the Land

The Ash Country holds the most of them. They stand in the open ash on ridges, in the lee of old lava flows and beside the seeps where the thorn shrubs glow, and they stand alone, a few miles apart. None stands within a day of [[place-deadmountain|the Dead Mountain]]. In the Thirst they are rarer, keep to the stony slopes above the springs, and grow larger: the returners' cords record one there the size of a hut.

## Key Behaviors

A kulikok spends the day without moving. The ash falls on it and it lets the ash lie. At dusk it wakes. It stings whatever comes within reach of its tails, and above all whatever leans or lies against it, and then it does not feed. It stands over what it has stung through the night, its tails raised, and it eats before dawn whatever has stopped moving by then. It does not follow a party that leaves it, and it does not cross a fire.

A plate knocked loose falls into the ash and lies there like any other stone, and the heap walks on without it, a little lighter.

## How the Day Ends

The sting does not kill. It makes the stung part cold, then gray, then stiff, and over the next hour the stiffness spreads, until by full dark the stung man cannot bend his knees or close his hands, and lies as rigid as a plank. He is awake through all of it. If he is kept warm and turned through the night he lives, and the stiffness passes in three or four days. If he is left in the cold he is stone-stiff by morning and his heart stops.

So a kulikok ends a day where it stands. A party that meets one cannot carry a rigid man through the dark ash, and cannot leave him with the heap standing over him waiting for him to stop moving. It makes its camp on that spot, builds the biggest fire it can feed, and keeps the stung man between the fire and the rest of the party until the light comes, while a few paces off a heap of stones stands and grinds and raises its tails each time someone moves.

## What the Returners Do

The returners' first rule in the Ash Country is never to rest against anything that the party did not watch from a long way off. A party at dusk throws a stone at any heap it means to camp near, or rings a spear butt against its top: a plate of a kulikok rings like a pot, and an ordinary rock does not. Returners who have been stung teach the next party to keep a stung man warm, and to keep him talking, because he can still talk.

Loose plates come back to the gate in packs. They stay warm for a month after they are picked up and then go cold and brittle, and a craftsman in the north who can work one before it cools sets it into a shield that turns obsidian.

## Signs

- A heap of gray stones standing alone in the open ash, with no ash on its top after an ash-fall.
- A ring of ash scraped smooth around a heap, a few paces across.
- A single gray plate lying in the ash, still warm.
- Rows of small round pits in the ash, many abreast, running a short way and ending at a heap.
- A man lying rigid on his back beside a cold camp, his hands half closed.

## Combat Strategy

The kulikok waits for prey to come to it, and stings from where it stands, several tails at once. Against a man who keeps his distance it creeps after him, slow and grinding, for a few paces, then stops and waits again. A man who closes to strike at the plates is stung, and a man who gets under the heap to reach the hollow risks the heap dropping on him. Cut tails grow back over a season. Fire keeps it off, and it does not cross a line of burning brush, though it stands at the edge of the light all night.

## Attack Methods

### Sting

A tail whips down over the heap and drives its point into whatever is in reach. Several tails strike together at anything close, and each sting carries the stiffening venom.

### Collapse

When something is under it, the heap drops its whole weight of plates onto it and grinds. A man pinned under a kulikok cannot rise unless the heap is lifted or driven off.

## Special Abilities

### The Stiffening Sting

The venom turns the flesh it enters cold, gray and rigid. Each sting adds to the stiffness, and a man stung twice cannot walk; the stiffness passes in days if he is kept warm through the first night, and kills him if he is not.

### Plates

Its plates turn cuts and thrusts almost entirely and shrug off fire. Heavy blows break them loose without hurting what lies beneath. Only the hollow under the heap takes harm as flesh does.

### Stillness

At rest a kulikok is a pile of stones, and nothing in its look or its smell says otherwise. It can stand unmoving for days.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 15-20 (1d6+14)

Dexterity
: 7-10 (1d4+6)

Agility
: 9-14 (1d6+8)

Perception
: 11-16 (1d6+10)

Aura
: 5-10 (1d6+4)

Will
: 13-18 (1d6+12)

Reasoning
: 4-7 (1d4+3)

Creativity
: 4-7 (1d4+3)

## See Also

[[place-ashcountry|The Ash Country]]
: the ash plains where most of them stand

[[place-thethirst|The Thirst]]
: the gravel desert, where they are fewer and larger

[[place-xelemixbalrgn|Shelem Ish'bal Region]]
: the waste
