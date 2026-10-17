---
shortcode: grkrsh
name: {full: Grukar-Sha, aliases: []}
type: being
subType: creature
description: "A frail, cunning Grukar schemer who survives by never seeming a threat, winning through manipulation rather than any fair fight."
tags: [folk]
data:
  packFolder: folk
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
  kbcat: grukar
  attrRollFormula:
    str: 1d4+7
    end: 1d4+4
    dex: 1d4+10
    agl: 1d4+10
    per: 1d4+13
    aur: 1d4+10
    wil: 1d4+10
    rea: 1d4+14
    cre: 1d4+14
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 17}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-bflkbite}
    - {model: sohl-sohl-skill-bflkgrab}
    - {model: sohl-sohl-skill-bflkheadbutt}
    - {model: sohl-sohl-skill-bflkkick}
    - {model: sohl-sohl-skill-limbblock}
    - {model: sohl-sohl-skill-press}
    - {model: sohl-sohl-skill-bflkpunch}
    - {model: sohl-sohl-skill-trip}
  system:
    body:
      structure:
        zones:
          - {name: Head and Arms, shortcode: headzone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 2}
          - {name: Legs, shortcode: legszone, probWeight: 2}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
            canHoldItem: false
            probWeight: 6
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: headzone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 7
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 10
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 5
        locations:
          - name: Head
            shortcode: headloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 4, edged: 5, piercing: 2, fire: 5}
          - name: Right Lower Arm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 4
            protectionBase: {blunt: 4, edged: 5, piercing: 2, fire: 5}
          - name: Left Lower Arm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 2
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 1
            protectionBase: {blunt: 2, edged: 2, piercing: 1, fire: 2}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 6, piercing: 2, fire: 6}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 4, piercing: 1, fire: 4}
          - name: Right Upper Leg
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 5, piercing: 2, fire: 5}
          - name: Right Lower Leg
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Upper Leg
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 5, piercing: 2, fire: 5}
          - name: Left Lower Leg
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 3
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 2
            protectionBase: {blunt: 2, edged: 3, piercing: 1, fire: 3}
      weight: {base: 85, calc: "85"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
---

# Appearance {#appearance}

![[grkrsh|Grukar-Sha]]{float=top-left}

You almost missed it. At the edge of the firelight, half turned as if already leaving, stands a figure that barely reads as one of the [[lore-grukarfolk|Grukar Folk]]: thin to the point of gauntness, all sinew and angular bone under gray-green skin drawn tight, about as tall as the squat ones and built like a blade on its edge. Its eyes are large for a Grukar, pale and quick, going over the room. Its long fingers keep moving. When it speaks, it speaks words you know, and the voice is wrong: the mouth shapes the syllables, but the sound comes from somewhere deeper in the chest, and you feel it against your ribs before you understand it. The huge warlord beside it has not moved since it began talking.

# Dossier {#dossier}

The Grukar-Sha is the thinker of the Grukar, roughly one Grukar in ten: four and a half to five feet tall, thin, physically the weakest of its kind, and the only Grukar that can think forward. A [[being-grukaruk|Grukar-Uk]] hatches with everything it will ever know and a [[being-grkrhshk|Grukar-Hushk]] learns only what a fight teaches; a Sha sees what a course will cost several moves on, what another creature wants and how that wanting can be turned. To other Grukar this looks very nearly like sorcery. The Sha are the tribe's scouts, spies, counselors and poisoners, its only voice to outsiders, and the only Grukar that can see that a tribe is finished. They survive by being too useful to kill, until the day the spawn-chamber decides they are too useful to leave alive.

## Presentation

A Sha is lean to gauntness, with narrow shoulders, long limbs and long, dextrous fingers. Its skin is the Grukar gray-green, paler and more mottled than its kin's and often marked with paint or tattoos for concealment. Its features are sharper than other Grukar's, with high cheekbones, pointed ears, shorter tusks and large, pale, watchful eyes. It dresses in dark, plain stuff and carries small, hidden weapons, daggers, bone needles, poison. It moves with a nervous economy and always stands near a way out, a shadow or a protector. Alone among Grukar it speaks human tongues, in a voice made partly by the mouth and partly by the chest-resonance all Grukar use, so that it arrives a little out of step with the lips.

## In the Land

Every Grukar tribe keeps its Sha, in [[place-grkrhlmrgn|Grukarholm Region]], the eastern [[place-vrystwald|Vristwald]] and the empty interior of [[place-aelwyth|Aelwyth]], and the Sha go farther from the nest than any other Grukar. They spend seasons watching human roads, walls and rivalries from the forest edge, and the [[lore-varokhiclt|Varokhi]] villages of [[place-skathwald|Skathwald]], the steadings of [[place-auldalon|Áuldalon]] and the frontier forts of [[place-targud|Targud]] all have stories of a thin gray figure seen at dusk watching a gate. What a Sha learns it carries home, because it is the only Grukar that can carry an idea home at all. A Sha clutch takes eighteen weeks to hatch, the longest of any, and a tribe that loses a Sha feels it for a season and more.

## Key Behaviors

A Sha reads the room before anything else: who holds power, who wants it, who can be used, who is about to become dangerous. Beside a Hushk it is the counselor whose strategy the Hushk's temperament cannot supply; among the Uk it is the overseer and the voice of the warlord's will. Its deepest art is the management of conflict, seeding quarrels between rival Hushk and rumors among the Uk so that the tribe always needs a Sha to keep its balance, and it often carries the spawner's intent while appearing to serve the Hushk. A Sha that comes to know something the tribe cannot afford to lose is invited to dinner: its brain is fed to the [[being-grkrahk|Grukar-ahk]], which writes what it knew into the next laying. There is no refusing, and the cleverest Sha spend their lives being exactly useful enough and never more. And when a tribe is dying in good order, its spawner managing the decline to the end, it is a Sha that sees the end coming, finds a second Sha and an aggrieved Hushk, and steals a proto-Ahk to found a new tribe elsewhere.

## What the Frontier Does

A Sha met alone is scouting, spying or carrying a warning home, and the frontier peoples have learned not to mistake its talk for a parley. It can listen, learn a road and deliver a threat in a human tongue, but it cannot promise safety on behalf of another Grukar, arrange a ransom or make a bargain that binds its spawner; a Sha who listens is gathering knowledge for its tribe, and the time it spends talking is time spent studying the walls. The Varokh and the Élavendri hill levies kill a Sha on sight when they can, because taking one out of a raiding party may take that nest's only planner, and they watch their wells, because a poisoned well is a Sha's work. A Sha's planted rumor or false message that sends defenders away from a gate is the commonest way a raid gets in.

## Signs

- A thin figure watching a gate or a road from the forest edge at dusk, gone when approached.
- Narrow bare footprints that keep to cover and circle a settlement without coming close.
- A well or a cistern that sickens those who drink from it, a day before a raid.
- A message or a rumor that draws a garrison away from its post and turns out to be false.
- Raids that come where the walls are weakest and the watch is thinnest, as if someone knew.

## Combat Strategy

A Sha avoids open fighting. It strikes from darkness, from an unexpected angle, at an isolated target, and it uses poison freely, on blades, needles and darts. It divides its enemies with lies and false alarms and lets the Uk and the Hushk do the fighting. Forced into a fight, it relies on speed, agility and precision, striking for the vital places, and it is more dangerous than its frailty suggests, because it has prepared. Several Sha together coordinate their strikes with signals no one else can read. Its first choice is always to escape, and it is very good at it.

## Special Abilities

### Poisoned Blades

The Sha fights with small, hidden weapons, daggers, short blades and thrown needles and darts, coated with poisons chosen for the work: pain, paralysis or sickness.

### Shadow Mastery

In dim light and darkness the Sha is very hard to see and moves through cover with uncanny ease.

### Silent Movement

It moves without sound, even over ground that should betray it.

### Precision Strike

Its strikes go for the vital places, and a blow from hiding is deadly.

### Poison Knowledge

It knows poisons thoroughly and chooses them for the effect it wants.

### Escape Artist

It climbs, swims, leaps and runs over ground no one else can, and when it chooses to flee, it is almost always gone.

### Hybrid Speech

Alone among Grukar it speaks human tongues, in a voice that sounds from the chest as much as the mouth, grammatical, understandable and physically wrong to a human listener.

## Attributes

Strength
: 8-11 (1d4+7)

Endurance
: 5-8 (1d4+4)

Dexterity
: 11-14 (1d4+10)

Agility
: 11-14 (1d4+10)

Perception
: 14-17 (1d4+13)

Aura
: 11-14 (1d4+10)

Will
: 11-14 (1d4+10)

Reasoning
: 15-18 (1d4+14)

Creativity
: 15-18 (1d4+14)
