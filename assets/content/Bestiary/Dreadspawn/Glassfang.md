---
shortcode: glssfng
name: {full: Glassfang, aliases: []}
type: being
subType: creature
description: "A small, blindingly fast light-magic predator that hunts nearly invisible through crystalline caverns and radiant magical sites."
tags: [dreadspawn]
data:
  packFolder: dreadspawn
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
  kbcat: dreadspawn
  attrRollFormula:
    end: 1d4+3
    dex: 1d4+12
    agl: 1d4+12
    per: 1d4+8
    aur: 1d4+8
    wil: 1d4+6
    rea: 1d4+5
    cre: 1d4+8
    str: 1d4+6
  items:
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 6}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 18}}
    - name: Crystalline Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crystalline Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, poison: true}
    - name: Shard Release
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 70
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Shard Release
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: edged}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
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
            roles: []
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
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
      weight: {base: 80, calc: "80"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[glssfng|Glassfang]]{float=top-left}

The workshop is bright: three tall windows, a bench of glass vessels, a lens on a brass arm throwing a spot of sunlight on the floor. The spot of sunlight bends. It slides sideways across the boards as if the lens had moved, and the lens has not moved. Something is crossing the floor that you cannot see, a ripple in the light the size of a cat, and where it passes the edges of things waver like heat over a road. A glass flask on the bench rings faintly, all by itself. Then there are two small dark points in the air at knee height, eyes, and under them a curve of fangs like clear ice, and the ripple comes at you very fast.

# Dossier {#dossier}

The Glassfang is a small dreadspawn of clear, living crystal, about the size of a big cat and eighty pounds in weight, nearly invisible in bright light, with fangs that cut through leather and a venom that weakens and paralyzes. It hunts fast and alone, and it is drawn to light and to places where magic is worked. One is loose in [[place-beravel|Péravel]], in the [[affiliation-ordoarcanis|Thordimalon]]'s [University of Péravel]{.name data-type="affiliation"} and the workshop quarter round it, in [[place-ellive|Éllive]], the heartland of [[place-elavendre|Élavendre]], and the Order has been trying to catch it for three years. Like every dreadspawn it was made, it is alive, and it does not breed. How it came to the University is the question the Order least wants asked.

## Presentation

The glassfang is sleek and low, built like a weasel or a small cat, and almost entirely transparent: a body of clear crystal that bends the light passing through it, so that what is seen through it wavers and shifts. Its skin is a sheath of tiny, hard, razor-edged scales that cut whatever brushes them. The fangs are long, curved and clear as ice. The eyes are the only opaque part of it, two small dark points that seem to hang in the air. In bright light it is a ripple and nothing more; in dim light a faint glassy outline; in the dark a shape picked out by the glints of whatever light there is. It makes a faint ringing sound when it is struck or when it brushes glass.

## In the Land

The glassfang hunts the University's buildings and the workshops of the glassmakers, instrument-makers and goldsmiths round it, and above all the rooms where the Order's scholars work their arts. It is drawn to light, to lenses, to glass and to working magic, and it returns again and again to the same few laboratories. By day it hides in sunlit attics, glasshouses and window-bays, where it cannot be seen at all. It hunts rats, pigeons, cats, dogs and, three times now, people. It has never been seen outside the city and does not seem to want to leave, and it moves along the roofs, the gutters and the warm flues from one quarter of the University to another.

## Key Behaviors

The glassfang is always moving. It stalks, waits beside a door or under a bench in strong light, strikes, and is gone, and it feeds often, on small animals, by preference. It is intelligent: it learns the hours a workshop is empty and the hours a scholar works alone, and it sets ambushes. It has no lair, only favored hiding-places, and it does not defend ground. When it is hurt, it runs, faster and farther than anything chasing it, and it does not come back to a place where it was hurt for a long time.

## What the Order Does

The Thordimalon (the Arcane Order) has not announced that a dreadspawn is loose in the University, and the city knows anyway. Masters who work alone after dark now work in pairs, with a hand-bell on the bench and a lead-weighted cudgel within reach, because a ringing note distresses the creature and a blunt blow breaks it where a blade skates off. Several laboratories have been fitted with wards that ring a chime when something crosses the threshold unseen, and the glassmakers' guild sells the chimes. Fine sand scattered on a workshop floor overnight shows its tracks in the morning. The Order pays a standing reward for its body, and [[affiliation-bardicolgs|the Bardic Colleges]] and [[affiliation-groveconcl|the Grove Council]], who contest the Order's authority over the kingdom's supernatural life, have pointed out in public, politely, that the Order has failed to collect it.

## Signs

- A ripple in bright light, like heat over a road, moving across a floor where nothing is visible.
- Glassware ringing on a shelf when no one has touched it.
- Rats, pigeons and cats found dead with two clean, deep punctures and fine cuts along their fur.
- Tiny, clear, razor-sharp flakes of crystal on a windowsill or a workbench.
- Small footprints in sand or flour that start and stop with nothing to make them.

## Combat Strategy

The glassfang depends on surprise. It stalks until it is sure, then bites from where it cannot be seen, aiming for the throat or the inside of a limb, and bites again and again as fast as it can while its victim strikes at air. It throws shards of its body at anyone who comes to help. If it is hurt it flees at once, and nothing on legs can catch it. It is most dangerous in small, bright rooms, and least in the dark or in open ground, where a man can see its outline and outrun its first rush.

## Attack Methods

### Crystalline Bite

The glassfang lunges and bites with clear, razor-edged fangs that cut through leather and many layers of cloth. The wounds are deep and bleed freely, and the fangs carry its venom.

### Shard Release

When it is threatened or hurt, the glassfang throws shards of its own body, flicked off its flanks at speed, one after another. They are razor-sharp and hard to see coming.

## Special Abilities

### Venomous Fangs

Its fangs carry a venom that weakens the bitten man, more with each bite, until his limbs grow heavy and, after several bites, he cannot move.

### Transparency

Its body bends light round it. In bright light it is effectively invisible unless it moves fast; in dim light it can be seen with care. It crosses open floors unseen.

### Crystalline Fragility

Its scales turn blades, but it is brittle. A solid blow with a hammer, a cudgel or anything heavy cracks and shatters it, and loud ringing sound and vibration hurt it.

### Light Refraction

It bends light deliberately to confuse eyes, and it can throw a sudden, dazzling flash of refracted light to blind a pursuer for a moment.

### Predatory Acceleration

It runs very fast and keeps running, and once it has fled no one catches it.

## Attributes

Endurance
: 4-7 (1d4+3)

Dexterity
: 13-16 (1d4+12)

Agility
: 13-16 (1d4+12)

Perception
: 9-12 (1d4+8)

Aura
: 9-12 (1d4+8)

Will
: 7-10 (1d4+6)

Reasoning
: 6-9 (1d4+5)

Creativity
: 9-12 (1d4+8)

Strength
: 7-10 (1d4+6)
