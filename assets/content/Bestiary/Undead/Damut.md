---
shortcode: damut
name: {full: Damut, aliases: [Damutu]}
type: being
subType: creature
description: "The driven one—the mindless undead that goes as it is driven: zombies, skeletons, mummies, and ghouls, animated by necromancy that binds soul-fragments to a corpse."
tags: [undead]
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

![[damut|Damut]]{float=top-left}

What comes out of the dark is a corpse on its feet: a body dead long enough to rot, with patches of gray skin hanging loose, bone showing at the cheek and the hand, and mold furring the rags it wears. The smell reaches you before it does, thick and sweet. It walks with a jerking, uneven gait, as if strings were pulling it from several points at once, and it does not hesitate or look about. Its eyes are dark hollows. It has seen you, or smelled you, and it comes on, and behind it in the dark there are others.

Some are worse because they are not like that. A husband come home three days after his burial, standing at the door in his good coat, pale and cold, his eyes a little too still; a daughter brought back from the grave who knows her mother's name and speaks in broken sentences and will not go near the window when the sun is on it. They are recognizable, and that is the horror of them.

# Dossier {#dossier}

**Damut** (plural _damutu_; "damuts" at the table) is the learned name for the mindless undead, zombies, mummies, skeletons, ghouls and every other shambling thing, from _d-m-t_, a root in [[skill-khelathlng|Khelathi Language]] meaning to drive, to goad: _the driven one_. A damut is a corpse that a necromancer or a death god's servant has driven back into motion by binding to it the dead person's soul, or a fragment of it, pulled back out of the spirit realm. Nothing in it moves itself: it goes as it is driven, by the one who raised it or by the last hunger left in the meat. Having no will, it has no cloak, and cannot pass for anything but what it is for long. Every damut carries [[lore-theshadow|the Shadow]], the necrotic force that binds it, and every one is degrading from the moment it rises. See [[lore-undead|Undead]] for the learned terms and the folk names.

## Presentation

A damut looks like what it is, at the stage it has reached. Newly risen and skillfully raised, it may pass at a glance for the living person: pale, cold to the touch, stiff in its movements, the eyes too still or too bright, carrying a faint shine in low light. Weeks into its decline the skin grays and sinks, the smell of decay begins, the movements become mechanical, and the eyes go flat and dark. At the end it is the corpse of the stories, rotting flesh over exposed bone, rags, hollow eyes and an overwhelming stench. The decline is continuous and does not reverse. A damut does not breathe unless it is speaking, and its chest is still when it stands.

## In the Land

Damutu are found wherever someone with the power has raised them, and the power is not rare enough. In the [[place-nrdlndsrgn|Nordlands]] the [[affiliation-nahild|Faith of Nahild]] raises its dead from the bodies of the weak, the cowardly and the dishonored and calls them [[lore-haugverdir|hrúmverdir]], servants and soldiers of the goddess's legions under the command of her favored [[lore-nagengir|nágengir]]. Elsewhere damutu are the work of necromancers: hedge practitioners who grab enough soul-stuff to drive a corpse, and skilled ones who are paid by grieving families to bring a particular person back. They are found in graveyards and burial chambers, in the cellars and hidden halls where necromancers work, at the edges of battlefields and plague pits, and on the roads behind whatever is driving them.

## Key Behaviors

A damut does what its creator tells it, and otherwise it hungers. Where it sits on the spectrum of decline decides almost everything else about it.

### The Recently Returned

A soul pulled back soon after death by a skilled necromancer makes a damut nearly indistinguishable from the living person at first. It speaks, knows its family and its name and its home, holds fragments of its life, and can follow complex instructions and fight with the skill it had in life. It provokes sympathy instead of revulsion, and the sympathy is the danger: the family sees its own returned and diminished, and hopes. It is not the person they loved. The soul is damaged and the hunger is already there, held down at first by what remains of the person's will. That may hold for days or for weeks. When it fails, the results are terrible for anyone in the house.

### The Fading

Within weeks or months, faster for a weaker soul, a cruder necromancer or a soul longer in the spirit realm before it was taken, the decline shows. Speech slurs, then shortens, then stops. Memory breaks into fragments: a face or a place recognized, and no idea why. Movement stiffens, then jerks, then shambles. The hunger takes over. Strength and endurance stay high, held up by the necromantic force, while dexterity, agility and every faculty of the mind fall away.

### The Shambling Dead

This is what most people mean by a damut: a corpse far gone in decay, moving with jerky, irregular motion, as if the animating force were pulling at random points of it. Nothing of the person remains. It does what its controller commands and nothing else, and without a controller it follows the only drive left to it, its hunger. It marches for days without rest, attacks regardless of odds, cannot be frightened or bargained with, and ignores other damutu unless commanded otherwise. One is slow, clumsy and predictable. Many are overwhelming.

### The Terminal

At the last a damut is a frame of bone and leathery scraps held together by the last sparks of the binding. It lurches at random, cannot follow commands or even pursue prey well, collapses and lies inert for hours, and lurches up again. Then the soul-fragments dissipate, the binding fails, and it falls into a heap. What was once a person, perhaps a loved one pulled back by a grieving family, is gone: no afterlife, no rebirth, no continuation. The soul has been spent.

### Failed-Ritual Damutu

Not every damut was pulled back from the spirit realm. Some are what comes of a [[being-tereb|tereb]] ritual that failed, when the candidate lacked the strength, the devotion or the power to cross with the soul intact, or fought the transition. These start higher on the spectrum and decline more slowly, because the ritual partly worked, and a failed-ritual damut may keep its intelligence and its skill for months, and be mistaken for a tereb, before the slide begins. The end is the same.

### The Hunger

Every damut hungers for the flesh and blood of the living. It gains nothing from feeding: the flesh brings no sustenance or healing and passes through or lies rotting in a gut that no longer works. The hunger belongs to the broken soul, a futile attempt to take back the life it has lost. Blood draws it most, and a damut follows a bleeding man with particular intensity; warmth, breath and flesh all draw it. It prefers the living flesh and blood of its own kind before all others. Dead flesh and spilled blood do not attract it.

### Creators and Control

Every damut has a creator, and the creator usually keeps some command of it: direct orders spoken close at hand, broad instructions carried out at a distance. A skilled necromancer has something near full command of a recently returned damut; a sloppy one with a shambling damut gives it a direction and hopes. A damut whose controller is gone does what it wants, if it still has the mind to want anything, and otherwise falls back on the hunger.

## What People Do

Most peoples of [[place-worldthlrn|Thalorna]] hold necromancy to be evil, and the remedy for a damut is the same everywhere: destroy it, burn the body, and say over the remains the rites that should have been said in the first place, whether or not they can do anything for a soul so damaged. A damut cannot be cured, and the kindest thing that can be done for one of the recently returned is to end it quickly, before its family has to watch what it becomes. In the Nordlands, where Nahild's priests raise the hrúmverdir, the dead are burned or laid in the howe with the grave-ale drunk and the reckoning spoken, and a local gudi, gudja or velva is sent for when the dead walk. The [Sekran]{.name data-type="affiliation"}, the [[affiliation-ordoarcanis|Thordimalon]]'s enforcement arm, hunts necromancers wherever its writ runs and destroys what they have raised. Villages that have met damutu learn to barricade, because the shambling dead do not go round an obstacle intelligently, and they learn to look for the controller, because the damutu stop being coordinated when it dies.

## Signs

- Graves found open from the inside, the earth thrown outward, and the shroud left behind.
- A smell of rot on the wind with no carcass to account for it, moving.
- Livestock found partly eaten, the wounds gnawed by human teeth, the blood untouched where it was spilled.
- A neighbor who came back from the dead and who will not sit in the sun or near the fire, and whose chest does not move.
- Tracks of many bare or ragged feet walking in step, in a straight line, through fences and hedges.

## Combat Strategy

A damut fights as its stage allows. The recently returned fight with the skill and the weapons they had in life and make intelligent choices, and they do not feel pain or tire, which makes them dangerous. As a damut declines, tactics give way to instinct and instinct to the plain, mindless advance of the shambling dead. In numbers, damutu overwhelm by pressing in from several sides without regard for themselves. They drop weapons to grapple and bite when the hunger is strong. Fire, daylight, barricades and the death of their controller are a party's best allies.

## Attack Methods

### Festering Bite

The hunger drives a damut to close quarters, where it seizes its prey and bites. The bite of the dead festers: wounds from undead teeth often go bad and poison the blood.

### Grab

The damut seizes and holds, pinning its prey for the bite.

## Special Abilities

### Weapon Strike

A damut that keeps its skill from life fights with whatever weapons it had or was given, and the recently returned can fight well. A declining damut strikes clumsily but with unnatural strength.

### Shambling Charge

Many degraded damutu charging together come on as a wave of dead flesh that can overrun a position by weight alone.

### Overwhelming Assault

Damutu converging on prey, directed or not, press on from every side at once and wear their target down with blow after blow.

### No Pain or Fatigue

A damut does not tire, does not feel pain, and is untouched by fear or despair.

### No Need for Air or Rest

A damut does not need to breathe. At first it may mimic breathing, and it must draw breath to speak, but it cannot be suffocated or drowned. It cannot float or swim: it sinks to the bed of the river, lake or sea and walks until it finds its way out of the water.

### No Need for Food

Necromantic force animates it, and it has no need of food. If it eats ordinary food, it eventually brings it up undigested and putrid: the gut no longer works, but the food still rots. This is separate from the Hunger, which belongs to the soul.

### Supernatural Endurance

A damut survives the destruction of organs that would kill the living, keeps fighting at full strength missing limbs, and never goes into shock. Severed parts often go on moving: fingers dragging a hand across the floor, a leg still kicking, a torso with one arm reaching out to grasp. Only a grievous wound disables a body part, and only when every part is disabled is the damut destroyed. Burning the whole body is the surest way.

### Daylight Effects

Ordinary sunlight weakens a damut. Torchlight and other light have no effect; only daylight does. A serious wound inflicted in daylight does the harm of a grievous one, and a damut in sunlight decays three times as fast as usual. Even highly functional damutu avoid daylight if they can, hiding in a room or other shade. The effect is directly proportional to the damut's ability to cast a shadow: on dark, rainy, overcast days the dim daylight may not affect it at all.

### Hive Coordination

Damutu controlled by the same creator move in perfect coordination, without visible signals, as if they shared a connection through their controller.

### Flesh Hunger

Every damut is drawn to living flesh and blood with compulsive intensity, and prefers that of its own kind before all others. Dead flesh and spilled blood do not draw it.

## Attributes

The attributes below represent a fully degraded damut—the shambling dead. Recently returned damutu may have attributes approaching or matching their living values, declining over weeks and months toward these minimums.

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

## See Also

[[lore-undead|Undead]]
: the undead as a class, the learned terms and the folk names, and how the undead differ from spirits

[[being-tereb|Tereb]]
: the cloaked one: the sentient undead

[[lore-theshadow|The Shadow]]
: the corrupting force from outside creation that every undead carries

[[lore-haugverdir|Hrúmverdir]]
: the Faith of Nahild's raised dead, and the northern folk word's wider use
