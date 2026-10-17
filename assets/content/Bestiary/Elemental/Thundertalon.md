---
shortcode: thndrtln
name: {full: Thundertalon, aliases: []}
type: being
subType: creature
description: "A conscious storm elemental of tremendous power haunting high peaks and open skies, attacking earth- and sea-dwellers it deems mere primitives."
tags: [elemental]
data:
  packFolder: elementals
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
  kbcat: elemental
  attrRollFormula:
    str: 1d4+12
    end: 1d4+12
    dex: 1d4+10
    agl: 1d4+14
    per: 1d4+14
    aur: 1d4+12
    wil: 1d4+10
    rea: 1d4+6
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 68}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 38}}
    - name: Lightning-Charged Talons
      type: skill
      system:
        shortcode: talon
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: talon
          name: Lightning-Charged Talons
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 2, aspect: fire}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Lightning Bolt
      type: skill
      system:
        shortcode: bolt
        subType: combattechnique
        masteryLevelBase: 59
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: bolt
          name: Lightning Bolt
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 5, aspect: fire}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 120
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 3}
          - {name: Body, shortcode: torsozone, probWeight: 6}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 3}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 3}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 10
          - name: Left Wing
            shortcode: lwingpart
            bodyZoneCode: lwingzone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 10
          - name: Body
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
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
            canHoldItem: false
            probWeight: 5
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: hindqtrzone
            roles: [locomotor, manipulator]
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
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: 0, calc: "0"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 100
        leaguesPerWatch: 10
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[thndrtln|Thundertalon]]{float=top-left}

The summit of the seamount is bare rock, and the thunderheads have piled up over the sea until the light is green. The candidate standing alone on the summit has his face turned up. Then the clouds split, and out of them drops an eagle made of storm: thirty feet of wing, feathers that crackle and spit sparks, talons that blaze white like lightning held in a fist. It does not scream. It comes straight down at the man on the summit, and the air round it shrieks, and every hair on your body stands up, and the bolt that comes with it strikes the rock beside him and throws him off his feet.

# Dossier {#dossier}

The Thundertalon is a great air elemental of storm: a spirit of the sky manifested as an eagle of lightning and cloud with a wingspan approaching thirty feet, a conscious, intelligent predator with clear purposes of its own, which haunts high peaks and open skies and attacks anything it deems an intruder there. It strikes with lightning-charged talons, calls bolts out of the sky, and raises storms. One haunts [[place-thrumufjall|Thrumufjall]], the sheer seamount on the [[place-nordheim|Nordheim]] coast that holds the temple of the [[affiliation-thrunvald|Faith of Thrunvald]] and the mother-hall of [[affiliation-ordrstrmspkrs|The Order of the Storm-Speakers]], whose summit takes every storm that comes in off the sea. Like every elemental, it can be destroyed in the material world, and it comes back.

## Presentation

The thundertalon is shaped like an enormous eagle, but its body is storm: dark cloud shot through with lightning, its feathers crackling and spitting sparks, its eyes two points of white fire. Its talons are lightning held in shape and glow white-blue. When it beats its wings, thunder rolls. The air round it smells burned and sharp, and metal near it hums and sparks. It flies fast and with absolute precision, and it can stoop from the cloud-base to a single man on a summit in moments.

## In the Land

Thrumufjall's summit is exposed to every storm off the water, and the hov and the mother-hall share the height and keep separate promises. The thundertalon comes with the great storms, out of the sea-clouds, and haunts the summit and the sky over the Nordheim coast round it, the cliffs and the fjord-mouths and the high fells behind. It hunts seals, whales at the surface, eagles, and the men who climb into its sky, and it treats the summit of the seamount as its own. In calm weather it is not seen. It is drawn to height, to open sky and to storms, and the summit draws it more than anywhere else on the coast.

## Key Behaviors

The thundertalon is territorial and intelligent. It understands what men do, it knows the paths up the seamount and the times men are on the summit, and it attacks men climbing into the sky it claims. It hunts from the air and seldom lands. It grows stronger in every storm and from every lightning strike near it. It has a clear disdain for creatures of the earth and the sea, and it kills them with what seems like contempt. When its body is destroyed it bursts into a crack of thunder and a gust of rain, and it comes back with a later storm.

## What the Storm-Speakers Do

The Order of the Storm-Speakers examines its candidates on the exposed summit as the thunderheads pile up over the sea, and asks whether each can feel the storm coming. The thundertalon is part of the examination whether the order wishes it or not: the examiners stand a candidate alone on the rock in a storm, and they watch the sky as well as the candidate. A Speaker who can read a storm closely enough to know when the thundertalon is in it is a Speaker who has passed, and the order says so. Speakers on the summit carry their hammers and a grounding staff of iron driven into a crack in the rock, which draws the creature's bolts to the earth, and in a bad storm they take the candidates down. The Hofgudi of Thrunvald's temple, who keeps a separate promise on the same height, says the thundertalon is a test sent with the storm, and blesses the candidates before they go up. The Speakers do not dispute it.

## Signs

- Lightning that strikes the same summit or headland again and again in one storm.
- Seals and seabirds found dead on the rocks after a storm, burned and torn by talons.
- A shape of wings outlined in lightning in the cloud-base over a peak.
- Iron on a summit, a staff, a nail, a buckle, found fused and blackened after a storm.
- A sudden stillness and a smell of burning in the air on a high place before any lightning is seen.

## Combat Strategy

A thundertalon fights from the air with precision. It stoops, strikes with its talons, and climbs away before anyone can answer, and it calls lightning down on those it cannot reach. It beats out thunderclaps to knock its enemies down and scatter them, sheds feathers of lightning that fly like darts, and raises a storm round itself to make the ground and the air worse. In a storm it is very hard to stop. Earth is what hurts it: grounding, iron rods in the earth, and magic of the earth take the force out of its lightning and can scatter it.

## Attack Methods

### Lightning-Charged Talons

The thundertalon stoops and strikes with talons of lightning. They tear and burn at once, the lightning passes through armor, and a man struck is jolted rigid and left numb.

### Lightning Bolt

It calls a bolt out of the sky onto its target, precisely, and can call more while it holds its focus, striking the same man again and again.

## Special Abilities

### Thunderclap

It beats its wings in a shock of thunder and lightning that deafens and knocks men off their feet, and drives them back.

### Storm Creation

It raises a storm round itself quickly, with lightning, heavy rain and fierce wind, which lasts as long as it holds its focus.

### Aerial Dominance

In the open sky it moves with precision and speed that nothing on the ground can answer.

### Electrical Form

Lightning does it little harm. Earth magic hurts it, and so does anything that draws its charge into the ground.

### Lightning Summoning

It calls lightning down from storm clouds with uncanny precision.

### Feather Projectiles

It sheds feathers of lightning that fly like darts, arcing through the air to strike its targets.

### Storm Attunement

It grows stronger in storms and draws power from every strike near it. In a full thunderstorm it is nearly unstoppable.

## Attributes

Strength
: 13-16 (1d4+12)

Endurance
: 13-16 (1d4+12)

Dexterity
: 11-14 (1d4+10)

Agility
: 15-18 (1d4+14)

Perception
: 15-18 (1d4+14)

Aura
: 13-16 (1d4+12)

Will
: 11-14 (1d4+10)

Reasoning
: 7-10 (1d4+6)

Creativity
: 11-14 (1d4+10)
