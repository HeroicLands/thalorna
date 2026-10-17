---
shortcode: tereb
name: {full: Tereb, aliases: [Terebu, Nightwight]}
type: being
subType: creature
description: "The cloaked one—the sentient, self-directed undead that wears its former self as a garment: vampires, dread-priests, and sorcerer-emperors who persist past death through deliberate, prepared ritual."
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
  attrRollFormula:
    str: 1d4+13
    end: 1d4+13
    dex: 1d4+13
    agl: 1d4+13
    per: 1d4+13
    pal: 1d4+13
    wil: 1d6+14
    rea: 1d8+10
    cre: 1d4+13
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-pal, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 16}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-trip}
    - name: Unnatural Blow
      type: skill
      system:
        shortcode: ublow
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: ublow
          name: Unnatural Blow
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: blunt}
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
      bodyScaleBase: 1.28
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

![[tereb|Tereb]]{float=top-left}

As night falls the cold comes into the hall, and the darkness at its far end becomes attentive. A figure steps out of it, a man or a woman, beautiful in a way no living face is: every proportion perfect, like a statue of a god given motion, and wrong because of it. The skin is pale and faintly luminous. The eyes burn with a dark light. It smiles, and the smile is warm and courteous and reaches nothing. Where it stands the shadows deepen, and the longer you look at it the more an aching despair settles on you, as if you were seeing something you were never meant to see.

# Dossier {#dossier}

**Tereb** (plural _terebu_; "terebs" at the table) is the learned name for the sentient undead, from _t-r-b_, a root in [[skill-khelathlng|Khelathi Language]] meaning to wear, to cloak: _the cloaked one_. A tereb is a powerful person who prepared in life, through deliberate ritual, to persist past death: a vampire, an undying lord, a dread-priest, a sorcerer-king who rules from beyond the grave. It wears its former self as a garment. The cloak holds for a short time and not too closely: across a room or through a brief exchange a tereb passes for a living person, and under close eyes and long company the cloak frays, because nothing wears it from inside but the will. Every tereb carries [[lore-theshadow|The Shadow]], and every tereb must harm the living to go on. See [[lore-undead|Undead]] for the learned terms and the folk names.

## Presentation

A tereb looks like a person, and how much like one varies, because the cloak is what varies. Some look nearly normal, pale and slightly cold, with a wrongness only those who linger catch. Some are unnaturally beautiful, in a way the living find both attractive and disquieting. Some are plainly inhuman, withered or monstrous or marked by their making. Their look usually follows from the tradition that made them and the conditions of their arising. Freshly fed and newly risen, a tereb is at its most convincing. As it degrades, it grows pallid and gray, smells faintly of decay and cannot bear daylight: the cloak wearing through.

## In the Land

Terebu are rare and they are found where the traditions that make them are kept. In the [[place-nrdlndsrgn|Nordlands Region]] the [[affiliation-nahild|Faith of Nahild]] raises its favored terebu, the [[lore-nagengir|Nágengir]], as warriors and sorcerers who guard her hidden hovs and command her legions of raised dead; the north's folk name for a tereb is the nightwight. In [[place-kchchkcntnnt|K'ich'chik Continent]] the terebu are the Threshold-Held; the [[affiliation-pikultzumaq|Pik'ul Ts'umaq]] tradition teaches that its fallen celestial holds their souls at the boundary of the underworld. Elsewhere they are the lords of hidden courts and the masters of old houses, keeping to cities where the living are many and a disappearance is one among many, or to remote halls where nobody asks. Every tereb keeps a Hallowed Ground, a single hidden place it returns to, and its range is the country round that place.

## Key Behaviors

A tereb is a person with a terrible appetite. It thinks, plans, remembers, holds grudges and affections, keeps its tastes and its learning, and conducts itself as the person it was, cultivated and courteous as often as not, while its existence depends on harming the living.

### How One Is Made

Becoming a tereb takes preparation during life: rituals, over months or years, that align the candidate's soul, body and circumstances for the passage, held by particular dark traditions and costly in skill, materials and timing. The rituals end in the candidate's death; they kill the candidate. The arising comes later, sometimes at once, sometimes after hours, days, weeks or months, and it does not need whoever performed the ritual to be present. A vampire that bites and kills its victim does not need to stay for the victim's rising; the ritual was completed at the biting. The person who rises is not exactly the person who died, but the continuity is far greater than any [[being-damut|Damut]]'s: the soul more or less intact, the personality and memory more or less kept. No one can make himself a tereb; it always takes an agent outside the candidate.

### Consent and Quality

The candidate's state of mind decides what rises. A willing candidate, prepared in spirit for the death and the arising, makes a strong tereb, at full or more than full strength, that degrades slowly. A candidate who fights the passage damages the soul in it: moderately, and a weak tereb rises, its mind fragmenting faster, its cloak thin from the first, and its own horror at what it has become its worst torment; severely, and a failed-ritual damut rises instead; catastrophically, and nothing rises at all, and the soul disperses in the spirit realm, unrecoverable.

### Degradation and Regeneration

A tereb degrades as every undead does, more slowly than a damut. Over weeks, a tereb that does not feed grows pallid and gray, smells of decay and cannot tolerate daylight, and left unchecked it declines to the state of a damut and at last rots away. To halt and reverse the decline it must regenerate, and every way of regenerating harms the living: drinking their blood, the commonest and the way of the vampire traditions; eating their flesh; drawing out their Aura, leaving the body whole and the person permanently diminished; or feeding on a particular feeling, fear, despair or ecstasy, which makes the tereb a skilled manipulator of its prey. There is no harmless way. Regeneration takes hold only after feeding and time spent at its Hallowed Ground.

### Hallowed Ground and Rebirth

Every tereb has one Hallowed Ground, chosen with care to be safe and hidden. It may move it, but it must be present to name a place, and it can have only one at a time. A tereb has thirteen lives. When it is destroyed, by the destruction of its body or by complete decay, its animating force dissolves for one to twelve months and then gathers itself again, and the tereb rises in a new body at its Hallowed Ground: like the last but physically a little worse, never regaining the body it had, while its mind and its Aura grow stronger. After the thirteenth life it is destroyed entirely, the soul dissolved and irredeemably gone. Every tereb knows how many lives it has spent.

Where it dies makes no difference: a tereb destroyed at its Hallowed Ground spends a life and rises there again, as it would from anywhere else. What ends a tereb before its thirteenth life is the loss of the ground itself. A Hallowed Ground can be desecrated, by a faith's rite of unhallowing or by breaking the place as a place, and a desecrated ground can no longer receive the tereb. Destroyed while its ground lies desecrated, a tereb has nowhere to gather and is gone for good, whatever lives it had left. Timing decides it. A ground desecrated while the tereb is dissolved receives nothing, and the tereb does not rise; a ground desecrated while the tereb walks costs it only the place, because it can go and name another. Hunters who mean to end a tereb therefore find its ground, desecrate it, and destroy the tereb before it reaches anywhere new.

### Courts and Lineages

Terebu have creators, and creators keep some hold over what they make; a tereb that made others has dependents, rivals and heirs. Where there are several, there is politics: lineages, courts, old grievances, struggles for territory and feeding-grounds, and creations who resent their makers. A party that sets out against a vampire court finds itself in the middle of that politics, and some terebu make useful allies against their own kind.

## What People Do

Most of the world's faiths treat the undead as a deep disorder, souls that should have passed and arranged not to, and their adherents treat terebu with particular horror. The [Sekran]{.name data-type="affiliation"}, the [[affiliation-ordoarcanis|Thordimalon]]'s enforcement arm, hunts terebu wherever its writ runs, and accepts the loss of hunters as a cost of the work; some of its specialists have spent their lives following a single tereb across decades. Where the Arcane Order's reach is short, independent hunters work for pay or for vengeance, and in some districts particular families raise their children to the work. Hunters learn the same lessons: find the Hallowed Ground, because a tereb destroyed anywhere else rises there again; watch for a household or a district losing its people quietly; and do not accept an invitation to dine after dark. In the north, the hidden hovs of Nahild are hunted by the faithful of the other gods, and the tale of a traveler turned away from such a hov by a courteous, thinking guardian is told at hearths as a warning.

## Signs

- Deaths in a district that come quietly and one at a time: servants, travelers, the poor, people no one searches for.
- Victims left alive but pale, drained, listless or diminished in spirit, without knowing why.
- A gracious host who keeps late hours, does not eat, and is never seen in daylight.
- A house or a hall where the shadows lie deeper and the cold settles at nightfall.
- A person who returned from a long illness or a death reported in error, and who is not quite the same.

## Combat Strategy

A tereb fights as the person it was, with every skill it had and the strength the transformation gave it. It prefers not to fight at all: it plans, manipulates, sets its dependents and its servants and its raised dead between itself and its enemies, and strikes when they are divided, tired and far from daylight. Warriors among terebu fight with supernatural strength; sorcerers with magic stronger than they had in life; dark priests with their religion's power, often greater. It retreats when a fight turns, knowing it can feed and heal, and knowing that even death returns it to its Hallowed Ground. Daylight is its weakness, and its Hallowed Ground is the one place that, unmade, lets it be ended.

## Attack Methods

### Unnatural Blow

A tereb that was a warrior in life strikes with the supernatural strength the transformation gave it, and a single blow breaks what a living fighter's would only bruise.

## Special Abilities

### Greatly Extended Life

A tereb persists for centuries if nothing interrupts it, across its thirteen lives.

### Enhanced Capacities

What it had in life it keeps and often surpasses: a warrior's strength becomes unnatural, a sorcerer's magic draws on the greater Aura the transformation unlocked, a leader's presence becomes overwhelming. Traditions differ: vampire terebu commonly have powers of blood, transformation and influence over the living; sorcerer terebu keep and amplify their magic; priestly terebu of dark faiths go on working their religion's thaumaturgy.

### Heightened Senses

Most terebu have sharpened senses or unusual ways of perceiving.

### Beyond Living Limits

It tires less readily, needs no ordinary food, and does not age as the living do.

### Resistance to Harm

It survives wounds that would kill the living and may heal damage that would be permanent on a mortal.

### Daylight Penalties

In daylight a tereb suffers −4 to all physical attributes and −2 to all mental attributes.

## Attributes

- **Strength:** 14-17 (1d4+13)

- **Endurance:** 14-17 (1d4+13)

- **Dexterity:** 14-17 (1d4+13)

- **Agility:** 14-17 (1d4+13)

- **Perception:** 14-17 (1d4+13)

- **Shadow:** 14-17 (1d4+13)

- **Will:** 15-20 (1d6+14)

- **Reasoning:** 11-18 (1d8+10)

- **Creativity:** 14-17 (1d4+13)

## See Also

- [[lore-undead|Undead]]—the undead as a class, the learned terms and the folk names, and how the undead differ from spirits

- [[being-damut|Damut]]—the driven one: the mindless undead

- [[lore-nagengir|Nágengir]]—the Faith of Nahild's favored terebu

- [[lore-theshadow|The Shadow]]—the corrupting force from outside creation that every undead carries
