---
shortcode: rdgdskmm
name: {full: Ridged Skimmer, aliases: []}
type: being
subType: creature
description: "A semi-aquatic ambush predator up to eight feet long plus tail, lurking submerged in rivers and shallows to strike unsuspecting prey."
tags: [animal]
data:
  packFolder: animals
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
  born: "unknown"
  frame: null
  appearance:
    eye_color: null
    hair_color: null
    skin_color: null
    complexion: []
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+10
    dex: 1d6+10
    agl: 1d6+11
    per: 1d6+10
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Neck Lash and Snap
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 65
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Neck Lash and Snap
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Tail Whip
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Whip
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Body, shortcode: torsozone, probWeight: 3}
          - {name: Tail, shortcode: tailzone, probWeight: 1}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Body
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Left Fin
            shortcode: lfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
          - name: Right Fin
            shortcode: rfinpart
            bodyZoneCode: torsozone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 2
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
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Gills
            shortcode: gillloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Body
            shortcode: bodyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Underbelly
            shortcode: underbellyloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Fin
            shortcode: lfinloc
            bodyPartCode: lfinpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Fin
            shortcode: rfinloc
            bodyPartCode: rfinpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[rdgdskmm|Ridged Skimmer]]{float=top-left}

The fowler's boat is drawn up on the mud at the edge of the reeds, and the water beyond it is brown, flat and perfectly still. A pair of eyes sits on the surface twenty feet out, with a low ridge of scales behind them, and you take it for a stick until it sinks without a ripple. A moment later the water at the boat's stern bulges and a long, narrow head comes up out of it on a neck like a heron's, dark green and dripping, with a snout full of fine teeth that point backward. It sways there, level with your face. Behind it, under the surface, something long is coiling.

# Dossier {#dossier}

The Ridged Skimmer is a long-necked, long-tailed river predator of the marshes of [[place-zumeleshrvr|The Zumelesh]], six to eight feet in the body with a tail as long again, lean and light for its length, built to lie submerged at the edge of the reeds and strike up and out of the water. It eats fish and waterfowl mostly, and takes goats, dogs, children and fowlers when they come to the water's edge. It lies up in the marshes of the delta and the flood-basins of the upper river, and its home ground is the eastern marsh of [[place-luttjelskslt|Lut-Tjelsur Selat]], among the reed-beds that the river-beast hunters work. It is a smaller danger than the crocodile, and a more sudden one, and it has no god to protect it.

## Presentation

A ridged skimmer is dark green above, mottled with brown, and pale yellowish beneath, covered in small smooth scales. A low crest of raised, ridged scales runs from the back of the head down the neck and the length of the back to the end of the tail. The neck is very long and very supple, and the head long and narrow, with eyes set high on the sides and nostrils at the very tip of the snout so that it can breathe with only that showing. The mouth is lined with dozens of needle-fine teeth, all raked backward, that hold anything slippery. The legs are short, set out sideways, with webbed and clawed feet. The tail is long, flattened and whip-thin at the end. In the water it moves in long, smooth curves and makes almost no wake; on land it runs fast and low for a short distance, belly scraping.

## In the Land

Skimmers live along the whole navigable Zumelesh wherever there is a reed margin, slow water and fish: in the backwaters and canals of the upper river, the flooded basin of [[place-gadjumuluslt|Gadju-Mulu Selat]], and above all the delta marshes, where the reed-beds run for miles and the channels change every flood. They are commonest in the eastern marsh round Lut-Tjelsur. Each skimmer keeps a stretch of reed-edge and channel that it hunts every day and fights other skimmers off. They follow the flood out over the fields when the river rises, and are found in irrigation canals and village ponds far from the main channel, and they go back to the reed-beds as the water drops. In the dry season they crowd into the deeper channels and are most dangerous then.

## Key Behaviors

A skimmer lies in the water at the reed edge with only its eyes and nostrils above the surface, sometimes for most of a day, and waits for something to come within reach of its neck. It hunts hardest at dawn and dusk. When prey comes close it strikes up and out of the water, seizes, and pulls back down, and it drowns what it cannot swallow and wedges the body under a root or a sunken boat to eat later. Skimmers make low, bubbling calls in the water that carry a long way and are hard to place. One that has taken a person learns that people are prey, and comes back to the same landing.

## What the Marsh People Do

The river-beast hunters' rule for a new hand covers the skimmer as well as the crocodile: never put a foot in the water at dusk, never put it where a reed has been bent, and test the bottom with a pole. Fowlers in the reed-beds work from boats with high sides and keep their dogs aboard. Villages on the flood-basin fence their water-steps with reed hurdles in the season when the skimmers come up the canals. The temple at Lut-Tjelsur does not count the skimmer among the beasts honored by the [[affiliation-tjelsuk|Faith of Tjelsur]], so a village troubled by one sends for a licensed culler of [[affiliation-garnuw|Gar'Nuw]] without waiting for the Sanctioner's rite, and the culler is paid by the head. Cullers take skimmers with a baited hook on a chain and a heavy club, and sell the skins for sandals and the crests for charms against drowning.

## Signs

- A pair of eyes and a short ridge of scales on still water, which sink without a ripple when looked at.
- Long, curving drag-marks through mud from the water's edge into the reeds, with small webbed prints on either side.
- Low, bubbling calls on the water at dusk that seem to come from several places at once.
- Fish missing from a fowler's trap, the trap torn open from below.
- A goat or dog carcass wedged under a submerged root, half eaten.

## Combat Strategy

A skimmer attacks from the water and wants to stay in it. It strikes at whatever part of a man is nearest the surface—a hand trailing over a gunwale, a leg in the shallows, the head of a man bending to drink—seizes it, and pulls him in. In the water it holds on and lets him drown. Caught on land or in shallows too low to hide it, it rears its neck and snaps from a distance, swinging its head from unexpected angles, and lashes with its tail to keep men off its flanks. It tires quickly out of the water, and as soon as the fight turns against it, it runs for the deepest channel near it and goes under.

## Attack Methods

### Neck Lash and Snap

The long neck swings the head out like a thrown hook, and the jaws close on whatever they reach. The skimmer strikes from well beyond a man's reach and from odd angles, over a shield or round a pole, and its backward teeth hold what they catch and leave deep punctures that bleed freely.

### Tail Whip

The tail swings in a wide, flat arc, in the water or on land, and its thin end cracks like a whip. It knocks a man off balance in the shallows, cuts bare skin, and drives back anyone trying to come at the skimmer's side.

## Special Abilities

### Aquatic Ambush

A skimmer striking from under the water or out of the reeds strikes harder and more surely than in an open fight, and its first strike usually comes before anyone has seen it.

### Drowning Grip

Once its teeth are in, the skimmer clamps down and pulls for deep water, using the water's weight against its victim. A man who is dragged under must break free by main strength or hold his breath for as long as the skimmer holds him down.

### Aquatic Mastery

In the water the skimmer is much faster and more agile than any swimmer, turning in its own length and striking from below and behind.

### Predatory Patience

The skimmer waits motionless in the water for hours or days at a time, and does not tire of waiting.

## Attributes

Strength
: 12-17 (1d6+11)

Endurance
: 11-16 (1d6+10)

Dexterity
: 11-16 (1d6+10)

Agility
: 12-17 (1d6+11)

Perception
: 11-16 (1d6+10)

Aura
: 8-11 (1d4+7)

Will
: 10-15 (1d6+9)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
