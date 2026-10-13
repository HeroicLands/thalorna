---
shortcode: brmblspn
name: {full: Bramblespine Dartel, aliases: []}
type: being
subType: creature
description: "A small, heavily armored arid-land reptile, far less deadly than large predators but disproportionately hazardous through its spined defenses."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+9
    end: 1d6+11
    dex: 1d6+8
    agl: 1d6+7
    per: 1d6+9
    aur: 1d4+7
    wil: 1d6+9
    rea: 1d4+3
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Tail Lash
      type: skill
      system:
        shortcode: tail
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: tail
          name: Tail Lash
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Spine Charge
      type: skill
      system:
        shortcode: quill
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: quill
          name: Spine Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Snap
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Snap
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: fqtrzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Foreleg
            shortcode: lforelegpart
            bodyZoneCode: fqtrzone
            roles: &a1 [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Right Foreleg
            shortcode: rforelegpart
            bodyZoneCode: fqtrzone
            roles: *a1
            canHoldItem: false
            probWeight: 5
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
            probWeight: 5
          - name: Right Hind Leg
            shortcode: rhindlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Tail
            shortcode: tailpart
            bodyZoneCode: hindqtrzone
            roles: [manipulator]
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
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 6, edged: 5, piercing: 4, fire: 6}
      weight: {base: 80, calc: "80"}
      reachBase: 0
      bodyScaleBase: 1.11
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

![[brmblspn|Bramblespine Dartel]]{float=top-left}

The ravine floor is black rock and loose scree, and the clump of spines beside the path looks like one more dead thornbush until it opens two yellow-green eyes. The spines lift, all together, with a dry rattle like coins shaken in a drum. Then it screams: a high, ringing note with a metal edge to it that comes off the rock walls from every side at once and goes on long after the animal's mouth has shut. Your mule has already backed into the man behind you.

# Dossier {#dossier}

The Bramblespine Dartel is a small, spined, armored reptile of the black-rock plateau of the [[place-dkrqrrgn|Diqraqor]] and the dry badlands round it, two to four feet at the shoulder and forty to eighty pounds, a carnivore of lizards, hares and birds that is dangerous to people chiefly because it will not get out of the way. It is solitary, it is out at dusk and dawn, and it defends a burrow and a hunting range against anything that comes near them with a lashing tail, a body of spines and a scream that stops a mule on a ledge.

## Presentation

A low, barrel-bodied quadruped on short legs, covered from nose to tail-tip in ridged, overlapping scales and spines that run from quarter-inch points along the belly to three-inch spikes down the back and flanks. The tail is thick, muscular and barbed, with the heaviest spine clusters near the tip. The head is blunt and wedge-shaped, with a strong jaw, small round ears set high on the skull and eyes that glow faintly yellow-green in poor light. The coloring is mottled gray and brown with darker patches, the colors of the rock it lives on. A calm Dartel carries its spines flat; an angry one stands them up and looks a fifth larger than it is.

## In the Land

The Dartel belongs to the mesas, dry ravines and rock cisterns of the Diqraqor, between the sands of the [[place-hskrrgn|Khoshiqor]] and the oasis belt, and to the badlands and stone uplands on the plateau's margins. It wants broken rock to lie against, an overhang or a crack to den in, and a water source within a few miles that draws the small animals it eats. The ravine mouths below the cut tombs and the shaded sides of the mesas hold the most of them, and the hard, poor tribes who graze the plateau know where each one lies.

## Key Behaviors

A Dartel holds a range of a mile or two and keeps to it for years. It hunts at dusk and dawn, lies up under a rock through the heat of the day, and remembers where food was found in past seasons and returns to the place. Two Dartels meeting at a boundary posture and scream at each other and settle it with a brief, vicious exchange of tails; neither dies. Faced with a larger animal it flattens, stands its spines up and screams, and most predators of the plateau have learned to leave it alone. The scream is not under its control: it comes with fear, and a Dartel that is startled screams whether it wants to or not. It avoids people unless they walk up to its burrow or its egg-cache, and then it does not avoid them at all.

## What the Tribes Do

Nobody hunts it for meat. The tribes of the plateau know where each one lies and walk round it, and a herder leading mules past a Dartel's bend goes ahead on foot and taps the rock with a staff, so that the animal screams at him and not under the mules' feet. When one takes up under a cistern a tribe needs, the tribe kills it, from a distance, with slings and long spears, because nobody closes with a Dartel twice. Its spines are kept: a handful bound to a stick makes the comb the plateau women card wool with.

## Signs

- A dead thornbush on a bare rock shelf, where nothing else grows.
- Three-inch spines, gray-brown and barbed, lying loose on a path or stuck in a dead hare.
- A ringing metallic scream at dusk in a ravine, repeated from the walls so that its source cannot be placed.
- Lizard tails and bird feathers heaped at the mouth of a crack under an overhang.
- Mules and camels that stop dead at a particular bend and will not be led past it.

## Combat Strategy

The Dartel would rather flee, and it flees from anything it can outpace. Cornered, or defending its den, it flattens itself against the rock, raises its spines and screams, and lashes with the tail at anything within its reach; a man who steps in to strike it finds the tail faster than his arm. If that does not end it, the animal curls into a ball and launches itself at the attacker, spines first. Several Dartels together, which happens only where dens lie close, strike from different sides at once. It sees poorly at distance and depends on hearing and smell, so a quiet attacker approaching across the wind, with a long spear, has the better of it.

## Attack Methods

### Tail Lash

The barbed tail swings in fast, flat arcs, and each spine on it goes through leather and skin. The tail is almost as long as the body and reaches further than the head does. The spines are angled backward, so pulling the tail free tears the wound, and a spine often breaks off in it.

### Spine Charge

The Dartel rolls tight and throws itself at the attacker, so that its whole body of spines lands at once. The blow wounds on contact and leaves spines in armor and flesh.

### Snap

A limb that comes within reach of the head is bitten and held, and the jaw crushes. The bite is rare and bad.

## Special Abilities

### Keening Wail

The Dartel's scream is a metallic, ringing note that rebounds off rock so that it comes from everywhere at once. A person close to it loses the thread of what they were doing for a moment; animals bolt. The animal cannot stop the scream once it is frightened, which gives it away as often as it saves it.

### Spined Armor

Thousands of spines over ridged scales turn a cut or a thrust that lands at an angle, and anyone who grapples the Dartel or strikes it barehanded comes away punctured. The spines carry no venom. The wounds they leave fester if they are not cleaned.

### Camouflage and Concealment

Still, among rock or half-buried in scree, a Dartel is a dead bush or a stone until it opens its eyes. Moving, its low profile and mottled color hide it well on broken ground and not at all on open sand.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 12-17 (1d6+11)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 10-15 (1d6+9)

- **Aura:** 8-11 (1d4+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 4-7 (1d4+3)
