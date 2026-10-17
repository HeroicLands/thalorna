---
shortcode: shdwlynx
name: {full: Shadow Lynx, aliases: []}
type: being
subType: creature
description: "A solitary nocturnal ambush cat of deep forests, built for stealth and precision as it guards exclusive woodland territories."
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
    str: 1d6+9
    end: 1d6+7
    dex: 1d6+11
    agl: 1d6+12
    per: 1d6+12
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 64}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 30}}
    - name: Precision Bite
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
          name: Precision Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
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
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
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
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
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
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
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
      weight: {base: 60, calc: "60"}
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

![[shdwlynx|Shadow Lynx]]{float=top-left}

Dusk comes early under the firs, and the track ahead is already a gray strip between black trunks. Something is lying along a low branch over it, so still and so nearly the color of the bark that you take it for a burl in the wood. Then two green points of light open in it. A cat, bigger than a big dog, charcoal-gray and faintly striped, with tufted black ears that turn toward you one after the other. It does not get up. It watches you come on along the track toward the branch, and its tail-tip, short and black, twitches once.

# Dossier {#dossier}

The Shadow Lynx is a large, dark forest lynx, two to three feet high at the shoulder, three to four feet long with a short tufted tail, and about sixty pounds, built for silence and for one sudden, killing rush. It hunts alone at dusk and by night through deep forest, taking hares, grouse, deer fawns and the dogs and goats of the forest villages, and very occasionally a man. In the [[place-vrystwald|Vristwald]] its stronghold is [[place-skathwald|Skathwald]], the eastern reach where the nests of the [[lore-grukarfolk|Grukar Folk]] thicken, and two of the [[lore-varokhiclt|Varokhi]] villages there keep the [[lore-lynxttm|Lynx]] as their wesk.

## Presentation

A shadow lynx is long-legged and short-bodied, with big, broad, furred paws that make no sound and carry it over snow. Its coat is thick and soft, charcoal gray to dark brown, mottled and faintly barred with darker marks that break up its shape among trunks and shadows. The ears are tall and pointed, tipped with long black tufts, and the face is round and flat, ringed with a ruff of longer fur and long pale whiskers. The eyes are large, forward-facing and pale green, and they shine in torchlight. It holds itself very still, moves very slowly when it is stalking, and moves very fast when it is not. Its calls carry: a yowl, a low growl, and a chirping cry in the mating season that sounds like a child.

## In the Land

Shadow lynxes live through the dense mixed and needleleaf forest of the Vristwald, but they are commonest in Skathwald, where the woods are deep, the crags are many, and the deer are thick because the villages there spend their labor on watches and walls and hunt less than villages elsewhere. Each lynx holds a few miles of forest that it marks with scent and with scratches on trunks, and it keeps to the same lying-up places for years: a crag ledge, a fallen trunk, a hollow under a root. It favors broken ground with rock in it. The rocky lookouts the villages watch from are lynx country, and the village of [[place-wulfstein|Wulfstein]] on its crag is named for wolves and keeps a lynx.

## Key Behaviors

A lynx rests by day and hunts from dusk to dawn. It stalks its prey slowly and in perfect silence, belly to the ground, or lies on a branch or ledge above a game trail and waits, sometimes for hours, and when the prey is near enough it rushes or drops on it and kills with one bite to the throat or the back of the neck. It does not chase far. If the first rush fails it lets the prey go and stalks again later. It takes prey larger than itself when it can catch it unaware, and it drags what it cannot eat into cover and covers it with snow and leaves. A lynx remembers the places where game is easy and the places where men have hunted it. A mother with kittens is aggressive and does not give ground.

## What the Varokh Do

The Varokh of Skathwald share the forest with the lynx and live with it. In the lynx villages, Wulfstein and **[Grimstein]{.name data-type="place/settlement"}**, it is the clan's wesk, and nobody hunts it without the Shaman's approval: a lynx that takes the village's goats is driven off with fire and noise, and only one that has taken a child is killed, with the Shaman present. Elsewhere in the forest the lynx is hunted for its fur, which makes a cloak that is warm and nearly invisible in the forest at dusk, and a scout in such a cloak is prized on the watches. Every village keeps its goats in a fold at night and its dogs indoors in winter. Sentries on the crags watch for the lynx as well as for the Grukar, because a lynx on a ledge above a path is often the first sign that something is moving on the path below.

## Signs

- Round, four-toed prints as broad as a man's palm, with no claw marks, in a line so straight it looks walked on purpose.
- Bark scratched in long vertical scores on a trunk beside a trail, at the height of a standing man's chest.
- A deer or goat carcass dragged under a fallen tree and covered with leaves or snow.
- Scent marks, rank and catty, on stones and stumps along a crag path.
- A yowl at night like a woman screaming, from somewhere very close.

## Combat Strategy

A lynx kills from ambush or not at all. It drops or rushes on a lone man, a child or a sentry from close range, often from above, and bites for the throat or the back of the neck while its claws hold on. If the first attack fails or the victim fights back strongly, it breaks off at once and disappears into the forest, and it may come back to try again from a new direction an hour later or the next night. It avoids open ground and daylight, and it does not attack a group or a fire. Cornered, or defending kittens, it fights hard with claws and teeth.

## Attack Methods

### Precision Bite

The lynx bites at the throat, the back of the neck or the base of the skull. Its jaws are strong for its size and its long canines drive deep, and a bite in the right place kills an animal outright.

### Raking Claws

Holding on with the forepaws, the lynx rakes with the hind claws, or slashes with the forepaws when it is fighting at close quarters. The claws tear through light leather and open bleeding wounds.

## Special Abilities

### Explosive Pounce

The lynx launches from concealment or from above in one great bound and lands on its victim with all four paws, knocking a small man or an animal down and putting the lynx in place for its bite.

### Forest Camouflage

In forest, still or moving slowly, the lynx is nearly invisible, and it is very hard to see until it moves.

### Silent Movement

It moves without sound on leaf litter, snow and fallen branches, and it is seldom heard even when it is close.

### Acute Hearing and Whisker Sensitivity

Its ears catch the smallest sound, and its whiskers feel air moving. In complete darkness it locates its prey by sound alone.

### Explosive Acceleration

Over a short distance the lynx is faster than nearly anything in the forest. Its first rush is more dangerous than anything it does afterward.

### Territorial Knowledge

On its own ground the lynx knows every ledge, branch and hollow, and uses them to ambush and to escape.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 12-17 (1d6+11)

- **Agility:** 13-18 (1d6+12)

- **Perception:** 13-18 (1d6+12)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 6-9 (1d4+5)

- **Creativity:** 5-8 (1d4+4)
