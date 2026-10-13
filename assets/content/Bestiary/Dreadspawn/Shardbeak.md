---
shortcode: shrdbk
name: {full: Shardbeak, aliases: []}
type: being
subType: creature
description: "A crystalline arcane bird drawn to nodes of raw magical power, feeding on arcane energy the way natural birds feed on seed."
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
    complexion: null
    extra_features: []
sohl:
  kbcat: dreadspawn
  attrRollFormula:
    str: 1d4+6
    end: 1d4+8
    dex: 1d4+10
    agl: 1d4+12
    per: 1d4+12
    aur: 1d4+6
    wil: 1d4+8
    rea: 1d4+5
    cre: 1d4+6
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 9}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 25}}
    - name: Crystal-Beak Strike
      type: skill
      system:
        shortcode: beak
        subType: combattechnique
        masteryLevelBase: 52
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: beak
          name: Crystal-Beak Strike
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Shard Barrage
      type: skill
      system:
        shortcode: spray
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: missile
        impairedByRoles: [manipulator]
        strikeMode:
          type: missile
          shortcode: spray
          name: Shard Barrage
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 0, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 0, aspect: edged}
          projectileType: none
          maxVolleyMult: 1
          baseRangeBase: 15
          drawBase: 0
          traits: {}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Left Wing, shortcode: lwingzone, probWeight: 1}
          - {name: Body, shortcode: torsozone, probWeight: 2}
          - {name: Right Wing, shortcode: rwingzone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Wing
            shortcode: lwingloc
            bodyPartCode: lwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Wing
            shortcode: rwingloc
            bodyPartCode: rwingpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Left Leg
            shortcode: llegloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 3, fire: 5}
          - name: Right Leg
            shortcode: rlegloc
            bodyPartCode: rlegpart
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
      weight: {base: 60, calc: "60"}
      reachBase: 0
      bodyScaleBase: 0.88
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: aerial
        feetPerRound: 80
        leaguesPerWatch: 6
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[shrdbk|Shardbeak]]{float=top-left}

The meadow at the top of the pass is full of light, and some of it is moving. A bird is sitting on a standing stone at the meadow's edge, a bird the size of a heron with a wingspan wider than a man is tall, and it is made of crystal: violet at the breast, fading to pale aquamarine at the wingtips, every feather a separate faceted shard. When it turns its head the sunlight goes through it and scatters across the grass in rainbows. It is singing, a high ringing note like a wet finger on glass. Then it sees your companion's staff, the one with the carved stone set in its head, and the singing stops, and the shards of its wings lift and rattle.

# Dossier {#dossier}

The Shardbeak is a dreadspawn in the shape of a bird of living crystal, two to three feet tall with a wingspan of eight to twelve feet and sixty pounds' weight, which feeds on magic as other birds feed on seed. It is drawn to places where arcane power runs strong and to anything that carries a working, and it defends its feeding grounds with a beak that pierces armor and wings that shed showers of razor-edged shards. It was made, as every dreadspawn was, and it cannot breed, though its pattern is one its makers have returned to and several are known. They gather where the [[lore-aralwen|arálwain]] are thickest, in the [[place-drenavrspn|Drenavar Spine]], the sacred mountain range at the heart of Élavendre, where the Áelendan hold that not every creature in the mountains is an ordinary beast.

## Presentation

A shardbeak's body is translucent, faceted crystal, deep violet, pale aquamarine or amber, shading from one to another, as if cut from a single gemstone, with seams barely visible where it bends. Its feathers are overlapping shards, sharp enough to cut leather and cloth, that throw rainbows when it moves. Its beak is a long crystal spike. Its eyes are points of colorless light. It sings as it moves, a high ringing note like glass vibrating near the edge of breaking, and the note rises when it is roused. In strong sunlight it blazes, and it is hard to look at directly or to judge where it is.

## In the Land

The Drenavar Spine holds the greatest concentration of sacred sites in Ankaris, and its arálwain, the thin places where the material world and the spirit world lie close and arcane power runs strongest, are where the shardbeaks feed. They perch on standing stones, at the edges of sacred groves and by arálwen-waters in the high meadows, soaking in the power of the place, and they move from one thin place to another along the range with the seasons. They are diurnal and grow more active and more aggressive in sunlight. They do not come down into the settled valleys, where magic is thin, and a shardbeak kept away from magic long enough weakens and dies.

## Key Behaviors

A shardbeak is drawn to magic as a moth is drawn to a lamp. It senses a working, a charm, an enchanted blade or a mage's focus from a long way off and comes to it, and it feeds, drawing the power out of the place or the thing and growing stronger and healing as it does. It is territorial, but mildly: two shardbeaks chase each other from a feeding ground and rarely fight. It is clever enough to recognize weapons that threaten it and how they are used. It is drawn to bright light and shining things as well as to magic. It attacks those who carry magic it wants and those who threaten it, and it ignores almost everyone else.

## What the Wardens Do

The [[affiliation-alndnwrdns|Áelendan Wardens]], who protect the arálwain and whose authority over them is older than the crown's, regard the shardbeaks as part of what the thin places are, and they do not harm them. A Warden escorting outsiders through the Drenavar asks them to leave behind, at the last village, any charm, enchanted weapon or mage's focus they carry, and outsiders who refuse learn why in the high meadows. A mage of the [[affiliation-ordoarcanis|Ordo Arcanis]] who comes into the range without leave is warned once by the Wardens, by their doctrine; the shardbeaks do not give warnings. Shed shards of shardbeak crystal, which keep a faint ringing note for years, are sold in [[place-ellive|Éllivë]] at great prices to instrument-makers, who set them in the soundboxes of harps, and the Wardens do not ask where the sellers found them.

## Signs

- Rainbows thrown across a meadow with no rain and no water to make them.
- A high ringing note in the air near a standing stone or a grove, like glass about to break.
- Charms and enchanted objects that have gone dull and powerless after a night in the mountains.
- Small, faceted crystal shards scattered round a standing stone, sharp as knives.
- Thin cuts on the hands and faces of travelers who crossed a high meadow, and their packs slashed open.

## Combat Strategy

A shardbeak fights from the air. It dives at whoever carries the magic it wants, drives its beak in, and climbs away before anyone can strike back; it flares its wings to shed a barrage of shards at anyone who comes after it, and blinds a party with a blaze of refracted light. It recognizes heavy blunt weapons as dangerous and keeps away from them, attacking their wielders with shards from a distance. If it is wounded it flees to the nearest thin place to heal. Ringing sound, cold and heavy blows shatter it.

## Attack Methods

### Crystal-Beak Strike

The shardbeak dives and drives its needle-sharp crystal beak into its target with tremendous force. It can pierce armor, and even a glancing blow cuts deep.

### Shard Barrage

It flares its wings and sheds a cone of razor-edged crystal fragments that find the gaps in armor and leave many deep cuts.

## Special Abilities

### Prismatic Dazzle

It gathers and magnifies light through its body and flings it out in a blinding blaze that dazzles and disorients everyone facing it.

### Arcane Affinity

It senses magic at a great distance and feeds on it. Near a strong source of magic it heals fast and grows stronger in every way; kept from magic long enough, it weakens and dies.

### Crystal Armor

Its crystal turns cuts and thrusts, but blunt force, ringing sound and hard cold crack and shatter it.

### Prismatic Refraction

Light bends unpredictably through its body, so that it is hard to focus on or strike, and blows go astray unless the attacker is very observant.

## Attributes

- **Strength:** 7-10 (1d4+6)

- **Endurance:** 9-12 (1d4+8)

- **Dexterity:** 11-14 (1d4+10)

- **Agility:** 13-16 (1d4+12)

- **Perception:** 13-16 (1d4+12)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-12 (1d4+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 7-10 (1d4+6)
