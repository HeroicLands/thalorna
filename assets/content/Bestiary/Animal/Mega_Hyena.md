---
shortcode: mghyn
name: {full: Mega Hyena, aliases: []}
type: being
subType: creature
description: "A colossal four-foot-tall hyena built for bone-crushing bite force and endurance, its sloped back and coarse mottled coat marking a relentless hunter."
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
    str: 1d6+11
    end: 1d6+9
    dex: 1d6+8
    agl: 1d6+10
    per: 1d6+10
    aur: 1d4+6
    wil: 1d6+8
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
    - name: Bone-Crushing Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 68
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bone-Crushing Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 2, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 2}
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
            roles: &a1 [locomotor]
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
      weight: {base: 150, calc: "150"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 7
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: mixed_forest, mode: add, textValue: "-1"}
          - {scope: surface_cover, key: needleleaf_forest, mode: add, textValue: "0"}
        disabled: false
---

# Appearance {#appearance}

![[mghyn|Mega Hyena]]{float=top-left}

The laugh starts somewhere out in the scrub after the moon has set: a rising, whooping cackle, and then another voice joining it, and another, until the whole dark beyond the camels is laughing. The night-herd's dogs have stopped barking. At the edge of the firelight a shape comes up out of the brush, high in the shoulder and sloping away behind like a hill, as tall at the withers as a pony, with a heavy head held low and yellow eyes that catch the fire. Its coat is coarse and blotched brown on dun. It opens its mouth, and the teeth in it are thicker than your thumbs.

# Dossier {#dossier}

The Mega Hyena is the great hyena of the Khazryn: four feet at the shoulder, built heavy in front and sloping to small hindquarters, with a head that is mostly jaw and a bite that cracks a camel's thigh-bone. It runs in clans of five to twenty along the camel road and on the grass and scrub of the [[place-wlqtrrgn|Welqator]] and the steppe margins, and it lives on what the road leaves behind: the camels that fall on the march, the remains of a caravan's slaughter, the dead of a raid. It is also a hunter that takes wild asses, gazelle and the stragglers of a herd, and a clan that is hungry takes a sleeping drover from the edge of a camp. The tribes count it with the [[being-budeq|Budeq]] as one of the two things that follow a string, and the hyena is the one that comes in at night.

## Presentation

A huge, deep-chested hyena with a back that slopes steeply from high, heavily muscled shoulders to low hindquarters, on thick forelegs and shorter hind legs that give it a rolling, tireless lope. The coat is coarse and bristling, sandy dun to gray, blotched with dark brown and black, with a short stiff mane along the neck that stands up when the animal is roused. The head is broad and massive, the muzzle short and blunt, the jaws deep and set with heavy conical teeth made for crushing; the ears are round and the eyes yellow. The tail is short and carried low. Most adults carry scars about the face and neck from fights within the clan. The animal stinks of musk and carrion, and the musk is on every rock it has marked.

## In the Land

Mega hyenas range the whole western half of the road, from the grass of the Welqator across the gravel reaches of the [[place-hskrrgn|Hosikor]] to the edge of the deep sands, and the stone uplands of the [[place-dkrqrrgn|Dikraqor]] where the ravines give them dens. A clan holds a stretch of road and the country on either side, marks its edges with musk and dung-heaps, and fights any other clan that crosses them. They follow the strings along their own stretch and stop at its boundary, where the next clan takes over. They den in caves, under rock shelves and in the collapsed cellars of the dead towns, and they come to every place where animals and men die: the wells, the camps, the scene of a raid and the [[lore-sowidesclt|Sowides]]' laying-out grounds (_yelos_).

## Key Behaviors

A clan is ruled by its females, which are larger than the males, and the leading female and her daughters eat first. They forage by night and lie up in the heat. They eat everything of a carcass, bone and hide included, and leave nothing but the horns and a white chalky dung. They hunt as well as scavenge: a clan runs down a wild ass or a gazelle over miles of ground at a lope it holds all night, and takes the weak, the old and the young from any herd. They drive cats and lone wolves off their kills and mob a camel spider for sport. They laugh and whoop when they gather, quarrel over food and call across miles of open country, and a clan in full voice round a camp is the worst sound the night on the road makes. A lone hyena is a young male driven out of its clan, and it is bolder and more dangerous than a clan animal.

## What the Tribes Do

A Sowides camp keeps its dogs loose at night for the hyenas and its camels couched in a ring with the baggage inside it, and the night-herd carries a torch and a spear. A string that loses an animal on the march butchers it at once and carries the meat, rather than leave the clan a reason to follow; a dead camel left by the track has the hyenas at it by dark and the hyenas at the camp by midnight. A tribe that has laid out its dead keeps watch over the laying-out ground until the name has been spoken to the four winds, and drives the clans off with fire. The hide is too coarse for anything but sandals. The tribes trade the jaws, which a smith at [[place-qisomrktcmp|Qìso]] sets with a handle as a bone-breaker for marrow.

## Signs

- A whooping, cackling laugh after moonset, taken up by several voices at once.
- Chalk-white dung in heaps at a rock or a track junction, and a strong smell of musk.
- A camel carcass reduced overnight to horns, hooves and a stain on the sand.
- Broad four-toed prints, larger in front than behind, in a loose pack along a caravan's own trail.
- Dogs that stop barking and press against the tents.

## Combat Strategy

A clan surrounds, worries and waits. It circles at the edge of the light, darts in to bite at the nearest legs and pulls back, and keeps it up until something falls or runs, and then the whole clan is on it. It goes for the weakest thing in reach: a child, a sick man, a camel that cannot rise. A single hyena closes, bites once with its whole weight behind the jaws, and holds or tears free. The clan breaks off before it takes heavy losses, but it comes back the next night, and the next. A camp that keeps its fire high and its people together loses nothing to it; a man who wanders from the fire alone, or a party that breaks and runs, is taken.

## Attack Methods

### Bone-Crushing Bite

The hyena lunges and clamps its jaws on a limb, the throat or the belly, and the bite crushes bone and splits a light shield. Once it has a grip it holds and drags, pulling the man off his feet for the rest of the clan.

## Special Abilities

### Crushing Jaws

The hyena's bite breaks a thigh-bone, cracks a spear-shaft and crushes a hand inside a gauntlet. A bite on the throat or the head is the end of the fight.

### Pack Overwhelm

Hyenas attacking together come from every side at once, each one biting and pulling back, so that a man who turns to one is bitten by another. A clan brings down an armed man who could fight off any one of them.

### Tireless Lope

A clan follows a string or a wounded animal all night at a loping pace that never slackens, and a man on foot does not outrun it.

### Territorial Fury

On its own kill, at its den or against a rival clan, a hyena fights with a savagery it does not show anywhere else, and it fights to the death for the clan's kill.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 9-14 (1d6+8)

- **Agility:** 11-16 (1d6+10)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 7-10 (1d4+6)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 5-8 (1d4+4)

- **Creativity:** 4-7 (1d4+3)
