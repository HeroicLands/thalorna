---
shortcode: jaguar
name: {full: Jaguar, aliases: []}
type: being
subType: creature
description: "The stocky apex cat of tropical jungles and riverbanks, wielding the strongest proportional bite of any cat, able to puncture turtle shell and skull."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-feline, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+14
    end: 1d6+11
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+12
    aur: 1d6+10
    wil: 1d6+11
    rea: 1d4+6
    cre: 1d4+5
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 43}}
    - name: Skull Crush
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Skull Crush
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Raking Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 72
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Raking Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 3, aspect: edged}
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
          - {name: Forelegs, shortcode: forelegszone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
      weight: {base: 200, calc: "200"}
      reachBase: 0
      bodyScaleBase: 1.38
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 70
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[jaguar|Jaguar]]{float=top-left}

The river bank is soft with rain, and a single line of prints runs along it, round and broad as your palm, with no claw-marks. They lead to a log where a turtle's shell lies cracked open, the plates bitten clean through. Then something coughs in the forest behind you, a deep, sawing sound, and the shadows under the buttress roots shift. A heavy golden cat with a broad skull and black rosettes is standing in the half-light, watching.

# Dossier {#dossier}

The Jaguar is the strongest-biting cat, two and a half feet at the shoulder and one hundred fifty to two hundred fifty pounds, killing by crushing the skull, even through a turtle shell. It lives on the river banks and lake shores of the jungle of [[place-xelemrgn|Shelem]], the limestone country of [[place-kankulrgn|K'ankul]], the valleys of [[place-ixbaltzakurgn|Ish'bal Tsa'ku]] and the isthmus coasts of [[place-neokbaatergn|Ne'ok Ba'ate]]. It is the most important animal of K'ich'chik: its name is in personal names, warrior titles and places, the jaguar warrior orders are the priest-kings' elite forces, and a jaguar throne marks supreme authority.

## Presentation

A compact, enormously strong cat, short-legged, broad-chested, heavy through the shoulders and skull. The coat is golden-tawny, marked with rosettes, dark rings enclosing smaller spots. Some animals, which the jungle peoples call shadow jaguars, are black with the rosettes showing in certain light, and are held especially sacred, emissaries of the underworld. The head is large with a broad skull and heavy jaw muscles, and the canines are thick. The paws are broad with partly webbed toes, and the cat swims well.

## In the Land

Jaguars hunt the river jungles and lowland forest of [[place-xelemrgn|Shelem]], the limestone country of [[place-kankulrgn|K'ankul]], the jungle valleys of [[place-ixbaltzakurgn|Ish'bal Tsa'ku]] and the isthmus coasts of [[place-neokbaatergn|Ne'ok Ba'ate]]. A jaguar holds a stretch of river bank or lake shore where the water and the prey meet, swims well, and takes turtles, caimans, fish and peccary as readily as deer. It lies up by day in a thicket or on a limb and hunts at dusk and in the dark.

## Key Behaviors

Jaguars hunt alone, from ambush, holding a stretch of river, lake or forest edge where water and prey meet. They swim well and take caimans, turtles, large fish and capybaras from the water. On land they stalk through cover for hours and rush at the last moment, and if the ambush fails they withdraw and try again. They hunt at dawn and dusk, and in the half-light beneath the canopy at any hour. They mark their ranges with claw-marks, scent and a deep coughing roar that carries far. They seldom attack people unprovoked, but one that is hurt, guarding cubs or used to people as prey is among the most dangerous animals alive.

## What the Itsani Do

The Itsani of the cities hold the jaguar sacred. The word for it, _ish'bal_, is in the names of peoples and realms, and the Death Jaguar [[lore-tzuqilixbaldty|Ts'uqil Ish'bal]] is the god who kills swiftly. Ish'bal Tsa'ku is called the Jaguar's House. Priests and warriors wear the pelt, and a jaguar skin is a gift fit for a ruler. Hunters take the cats for the pelts that the valleys sell with cacao and quetzal feathers. Villages on the river bank keep fires lit through the night and pen their dogs and stock inside a fence.

## Signs

- Round, broad pugmarks with four toes and no claws, as wide as a man's palm, on a river bank.
- A turtle shell cracked open cleanly, the plates bitten through, among the roots of a tree.
- A deep, sawing cough in the forest at dusk.
- A dog gone from a village, with a drag-mark leading to the water.
- Claw-marks on a trunk higher than a man can reach, and a pelt-smell hanging in the air.

## Combat Strategy

The jaguar's strategy is defined by a single principle: one strike, one kill. It stalks with infinite patience, approaching from behind or above — jaguars are excellent climbers and frequently drop onto prey from overhanging branches. The attack is a short, explosive rush followed by a killing bite delivered not to the throat (as other cats prefer) but directly to the skull, the canines piercing the temporal bones to penetrate the brain. Against armored prey — turtles, caimans — the jaguar bites through the shell or armor plates, its jaw muscles generating sufficient force to crack the protection. Against humanoid opponents, the jaguar targets the back of the skull or the base of the neck, and its bite can puncture helmets of lighter construction. If a straight kill is not possible, the jaguar grapples with its forelimbs and rakes with the hind claws while repositioning for the killing bite. A jaguar in water is even more dangerous — it can attack from below the surface, drag opponents under, and fight with a freedom of movement that land combat does not permit.

## Attack Methods

### Skull Crush

The jaguar's signature kill — a bite delivered directly to the skull, the thick canine teeth piercing bone to reach the brain. This bypasses the slow suffocation of a throat bite entirely. Against armored prey, the jaw force is sufficient to crack turtle shells and caiman scales. Against humans, this bite can penetrate light helmets and is instantly lethal.

### Ambush Pounce

The jaguar launches from concealment — dense cover, overhanging branches, or the water's edge — with explosive speed, landing on the prey's back and immediately attempting to position for the killing bite. The weight of the impact alone can stun or collapse a smaller opponent.

### Raking Disembowelment

When grappling larger prey, the jaguar wraps its forelimbs around the opponent's torso and rakes with the powerful hind claws, tearing at the belly and inner thighs. This attack causes massive blood loss and forces the prey to defend its ventral area, exposing the skull and neck to the bite.

### Aquatic Ambush

From the water, the jaguar surges upward to seize prey at the water's edge — a technique perfected on caimans and turtles. The attack comes from below and behind with virtually no warning, and the jaguar can drag the victim into the water where its swimming ability gives it absolute advantage.

## Special Abilities

### Crushing Jaw

The jaguar's bite force is the highest of any cat relative to body size — sufficient to puncture turtle carapaces, crack caiman skulls, and bite through bone. This gives it a unique ability among cats to defeat natural armor, and it means that light man-made armor provides less protection against a jaguar than against other predators of similar size.

### Water Hunter

Unlike most cats, the jaguar is a confident and capable swimmer that actively hunts in rivers and lakes. Its partially webbed paws and powerful build make it effective in water, and it routinely takes aquatic prey that other cats would never attempt. An encounter with a jaguar near water is significantly more dangerous than one in dry forest.

### Shadow Camouflage

The jaguar's rosette pattern provides extraordinary camouflage in the dappled light of the jungle floor. A motionless jaguar in forest shadow is effectively invisible at distances beyond a few paces. Melanistic (black) jaguars are even harder to detect in low-light conditions, becoming visible only when they move.

## Attributes

- **Strength:** 15-20 (1d6+14) — Pound-for-pound the strongest cat; jaw force exceeds all others relative to size
- **Endurance:** 12-17 (1d6+11) — Solid but not outstanding; ambush predator, not a pursuit hunter
- **Dexterity:** 12-17 (1d6+11) — Precise and controlled; excellent climber and swimmer
- **Agility:** 13-18 (1d6+12) — Quick and fluid, though stockier than the leopard
- **Perception:** 13-18 (1d6+12) — Excellent senses; hunts in jungle twilight and murky water
- **Aura:** 11-16 (1d6+10) — The sacred animal of the jungle civilizations; warrior-god avatar; underworld guardian
- **Will:** 12-17 (1d6+11) — Fearless and patient; does not abandon a committed hunt
- **Reasoning:** 7-10 (1d4+6) — Intelligent predator; learns individual prey behavior
- **Creativity:** 6-9 (1d4+5) — Adaptable; adjusts hunting strategy to environment
