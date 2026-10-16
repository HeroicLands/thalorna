---
shortcode: blinkfox
name: {full: Blinkfox, aliases: []}
type: being
subType: creature
description: "A made predator that hunts enchanted forests by slipping through dimensions, striking from partially outside normal space."
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
    str: 1d4+5
    end: 1d4+6
    dex: 1d4+12
    agl: 1d4+14
    per: 1d4+8
    aur: 1d4+10
    wil: 1d4+6
    rea: 1d4+8
    cre: 1d4+10
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 23}}
    - name: Blinking Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Blinking Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 1, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -1, aspect: piercing}
          lengthBase: 0
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Flickering Claws
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 74
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Flickering Claws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: -2, aspect: edged}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Forequarters, shortcode: fqtrzone, probWeight: 1}
          - {name: Torso, shortcode: torsozone, probWeight: 1}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 1}
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
            roles: &a1 [locomotor, manipulator]
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
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Thorax
            shortcode: thoraxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 5
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 3
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Pelvis
            shortcode: plvsloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 2
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 2, edged: 1, piercing: 0, fire: 2}
      weight: {base: 15, calc: "15"}
      reachBase: 0
      bodyScaleBase: 0.81
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[blinkfox|Blinkfox]]{float=top-left}

The fox is sitting on the standing stone at the edge of the clearing, a fox the size of a hound, and its coat is the wrong color: blue, then green, then silver, as the light moves through the birches. A thread of pale smoke curls off its tail and does not drift. It is watching you with eyes too big for its face. You look away to tell your companion, and look back, and the stone is empty. A breath later something soft brushes the back of your knee, and you turn, and it is sitting in the grass behind you, close enough to touch, its head on one side, and you could swear it is smiling.

# Dossier {#dossier}

The Blinkfox is a small dreadspawn in the shape of a fox, about the size of a big hound and fifteen pounds in weight, which can step out of the world and back into it again a few yards away, faster than a blink. It hunts by appearing beside its prey, biting, and vanishing, and it is cunning, curious and cruel. It is met in [[place-lirve|Lirve]], on Élavendre's western coast, where the deep forest runs down to the sea and the [[lore-aralwen|aralwain]], the thin places, lie thicker than anywhere outside the mountains. The Élavendri call it a fae creature, and some of them call it worse. The scholars who sort such things call it a dreadspawn: a made thing, alive, unable to breed, and set loose in the one country where it would look most at home.

## Presentation

A blinkfox is lean and graceful, long-legged, with a narrow muzzle and very large, bright eyes that catch the light. Its fur is never one color for long: it shifts through blue, green, violet and silver as it moves and as the light moves, and when it is still it takes on the color of what is round it. Faint wisps like pale smoke trail from it as it runs and hang in the air for a breath after it has gone. Its paws make no sound. Seen sidelong, it is sometimes slightly transparent, as if not all of it were there. When it blinks out, there is no flash and no sound, only a small cold draft where it was.

## In the Land

Blinkfoxes are known from the deep forest of Lirve, between the coastal towns and the [[lore-flksinale|Sinale]] enclaves, in the oak and silver birch that is cut only under license and in the clearings round the standing stones and the thin places. A blinkfox keeps to a few miles of forest and rests in clearings and on high stones, where it can see. It is most often met at dawn and dusk and under the deep shade of the canopy, and it avoids full sunlight. Reports cluster round the aralwain, and the [[affiliation-alndnwrdns|Áelendan Wardens]] who patrol them say they have seen more than one blinkfox, though whether there are several or one that is very quick, nobody can tell.

## Key Behaviors

The blinkfox hunts birds, hares, small deer and, by preference, clever prey: crows, other foxes, dogs, children. It studies a quarry for a long time before it strikes, following it, appearing and disappearing round it, apparently for the pleasure of watching it react. It is curious about people and comes close to look at them. It is not afraid of a man unless it has been badly hurt, and it plays with what it hunts. It bites from nowhere and is gone, and comes back from another side, until its prey is bleeding, frightened and lost. Then it drives it, by appearing in front of it, toward a cliff edge, a river or the deep forest.

## What the Coast People Do

The people of Lirve's coast keep the deep forest's rules because the Wardens enforce them, and they add their own about the blinkfox. A child is not sent into the birch woods alone at dusk, and a dog that has followed something into the trees is called back at once. A woodcutter working under license who sees a fox with a coat the wrong color sits down, puts his back to a tree, and waits, because a blinkfox gets bored with prey that will not run. The guides who take pilgrims and scholars to the edges of the thin places point out blinkfox sightings as one of the sights, and charge more for it. The Wardens do not hunt the creature and do not protect it; a blinkfox that harms someone on sacred ground is, to them, one more thing that has violated it.

## Signs

- A fox seen on a standing stone or a stump that is not there when looked at again.
- Faint, pale wisps hanging in still air in a clearing, slowly fading.
- Fox tracks that stop dead in the middle of a ride, and begin again a few yards off, facing a different way.
- Crows and jays killed by a single bite, left uneaten.
- A small, sharp cold on the back of the neck, and nothing there.

## Combat Strategy

The blinkfox never stands and fights. It appears beside a target, bites or rakes once, and vanishes, and appears again a moment later on another side. It goes for the hand, the face and the backs of the legs, and it picks out whoever is alone, slow or frightened. It uses the ground: it drives its victims toward drops and water and separates one from a group. It keeps a way out, and when a fight goes against it, it blinks away into the deep forest and does not come back that day.

## Attack Methods

### Blinking Bite

The fox appears at a target's side, bites quickly and accurately at exposed skin or a gap in armor, and is gone. The bite is small and deep and bleeds freely.

### Flickering Claws

The fox rakes with its forepaws in quick succession, blinking between each stroke, so that the blows seem to come from several foxes at once. Each claw stroke is light; together they are hard to defend against.

## Special Abilities

### Short-Range Teleportation

The fox steps out of the world and back into it up to sixty feet away, anywhere it can see or has just been. It does this once as easily as a man takes a step; doing it again and again tires it, its range shortens, and its body grows less steady.

### Disorienting Manifestation

The fox appears directly in front of a man's face and is gone again, and does it again. The shock breaks his concentration, and a man it has done it to several times may panic.

### Chromatic Concealment

Its coat takes on the colors round it. Still, it is nearly invisible; moving, the color shows, but it moves too fast and too strangely to follow.

### Half-Present

Part of the blinkfox is always somewhere else. Blows and magic that work only on wholly material creatures land poorly on it, and magic that reaches a creature wherever it stands harms it fully.

## Attributes

- **Strength:** 6-9 (1d4+5)

- **Endurance:** 7-10 (1d4+6)

- **Dexterity:** 13-16 (1d4+12)

- **Agility:** 15-18 (1d4+14)

- **Perception:** 9-12 (1d4+8)

- **Aura:** 11-14 (1d4+10)

- **Will:** 7-10 (1d4+6)

- **Reasoning:** 9-12 (1d4+8)

- **Creativity:** 11-14 (1d4+10)
