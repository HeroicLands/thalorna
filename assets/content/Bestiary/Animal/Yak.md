---
shortcode: yak
name: {full: Yak, aliases: []}
type: being
subType: creature
description: "A massive, cold-adapted highland bovine providing milk, transport, and survival to mountain peoples amid the harshest peaks."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: bison, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+11
    end: 1d6+13
    dex: 1d4+6
    agl: 1d4+7
    per: 1d6+9
    aur: 1d4+5
    wil: 1d6+11
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 40}}
    - name: Horn Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 57
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Trampling Charge
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 50
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Trampling Charge
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: blunt}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 4}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 8}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 6}
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
            isFumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 2, fire: 4}
      weight: {base: 1500, calc: "1500"}
      reachBase: 0
      bodyScaleBase: 1.22
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 60
        leaguesPerWatch: 4
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[yak|Yak]]{float=top-left}

The yak at the head of the pass is draped in a skirt of coarse black hair that hangs to the snow, so that it looks like a walking tent. Its breath smokes. Its enormous curved horns turn slowly toward you, and the shoulder hump rises and falls. Behind it the herd stands among the boulders, utterly at home at an altitude where you are gasping. A string of red tassels bobs on the bell-animal's collar.

# Dossier {#dossier}

The Yak is the essential animal of the high plateaus, a massive, cold-adapted ox five to six feet at the shoulder, over a thousand pounds wild, with enormous curved horns. It grazes the high plateau and mountain valleys of the [[place-graznmntns|Grazian Mountains]] and the cold steppe of [[place-idwkrrgn|Idvaqor]]. Tame yaks are smaller and give milk, butter, cheese, wool, leather, dung fuel and draft power at altitudes where no horse or ox can work. The yak-herding peoples are independent and hard to govern. Wild herds in the remotest highlands have never known people and are larger and more dangerous.

## Presentation

A massive ox draped in a skirt of long, coarse hair hanging from the belly and flanks nearly to the ground. The body is heavily muscled, with a shoulder hump of fat for lean seasons. The coat is dense and layered, a fine, soft undercoat of great warmth under long outer hair. Wild yaks are dark brown to black; tame ones come in brown, red, piebald and sometimes white. The horns are smooth and dark, curving out and up, and span three feet in a wild bull. The head is broad with a wide muzzle for sparse grazing. The hooves are broad and splayed, with a hard rim.

## In the Land

Yaks graze the high plateau and mountain valleys of the [[place-graznmntns|Grazian Mountains]], the cold steppe of [[place-idwkrrgn|Idvaqor]] and the high pastures above the tree-line, on sedge, moss and lichen. A wild herd of a few hundred moves between summer pasture and winter shelter. Domestic yaks are smaller and kept by the herding families of the high valleys, who bring them down in winter to the villages.

## Key Behaviors

Yaks live in herds from small family bands to several hundred on the open plateau, led by dominant bulls in the rut and by experienced cows on the move. They eat highland grasses, sedges, mosses and lichens. They tolerate cold well, show heat stress at temperatures others find mild and seek higher, colder ground in warm spells. They are sure-footed on narrow trails and moraines. Wild bulls are aggressive and territorial in the rut, and cows with calves charge without hesitation. Tame yaks are placid but stubborn: they refuse dangerous trails and cannot be forced along routes they dislike.

## What the Ösket Do

The Ösket of the high valleys, in villages such as [[place-tsokhar|Tsökhar]], raise yaks and the small mountain horses bred to their altitude. Yaks carry loads on the high roads, and the hereditary guides know what a yak-route will bear and how the weather ahead of a storm behaves. A yak gives milk, butter, cheese, wool, leather and dung for fuel. A bull in rut is dangerous, and a wild herd stampedes if approached. The long hair is spun into rope and tent-cloth. Yak butter is burned in lamps in the shrines.

## Signs

- A heavy black animal with long skirts of hair standing on a snow-slope against the sky.
- A string of yaks on a pass, each with a red tassel, led by a boy.
- Dung patties drying on a stone wall, stacked for fuel.
- A low, grunting noise from a herd in the dark.
- Round, split-hoofed prints in snow, deep and rounded, around a spring.

## Combat Strategy

A wild yak's primary defense is the charge — a full-speed rush with lowered horns that delivers tremendous impact. The shoulder hump and heavy skull make the yak a natural battering ram, and the horns can gore deeply. Wild bulls are aggressive enough to charge predators, including snow leopards and wolves, and will stand ground rather than flee. A yak defending calves attacks with horns and hooves, stamping and goring with furious determination. Domesticated yaks are less aggressive but can still be dangerous when panicked or cornered — a loaded yak that bolts on a narrow mountain trail is a hazard to everything in its path.

## Attack Methods

### Horn Gore

The yak lowers its massive head and drives forward, using the curved horns to hook and penetrate. The charge is backed by the full mass of the animal and the power of the shoulder hump. A wild bull's charge can kill a wolf outright and can seriously injure or kill an armored human.

### Trampling Charge

At full charge, the yak simply runs through obstacles, using its mass and broad hooves to trample anything that doesn't move. The heavy body and sure-footed stride mean the yak rarely stumbles during a charge, even on uneven ground.

### Defensive Stamp

When cornered or defending calves, the yak rears slightly and stamps with its forelimbs, driving the broad hooves down with bone-cracking force. This is used at close range against opponents too near for a charging attack.

## Special Abilities

### Altitude Mastery

The yak thrives at elevations that render horses useless and leave humans gasping. Its blood carries oxygen more efficiently than any lowland bovine, its lungs are proportionally larger, and its thick coat and metabolic adaptations allow it to function normally in conditions of extreme cold and thin air. A yak at high altitude is as comfortable and capable as a horse on a lowland road.

### Mountain Sure-footedness

Yaks navigate narrow ledge trails, loose scree, and glacial ice with a calm confidence that borders on the supernatural. Their broad, split hooves grip surfaces that defeat most other animals of their size, and their low center of gravity prevents the stumbles that make horses dangerous on mountain trails.

### Cold Weather Fuel

In the treeless highlands, dried yak dung is the primary fuel for cooking and heating — a practical reality that makes yak herds essential for human survival above the tree line. A settlement without yaks has no fire, and a caravan without yaks has no warmth.

## Attributes

- **Strength:** 12-17 (1d6+11) — Powerful draft animal; wild bulls are formidable in combat
- **Endurance:** 14-19 (1d6+13) — Supreme altitude and cold tolerance; tireless caravan animal
- **Dexterity:** 7-10 (1d4+6) — Adequate; not built for fine movement
- **Agility:** 8-11 (1d4+7) — Sure-footed on mountain terrain despite bulk
- **Perception:** 10-15 (1d6+9) — Good senses; handlers trust their danger assessment
- **Aura:** 6-9 (1d4+5) — Respected as essential, but not spiritually elevated
- **Will:** 12-17 (1d6+11) — Stubborn and determined; will not be forced into danger
- **Reasoning:** 5-8 (1d4+4) — Intelligent enough to assess trail safety; learns handlers and routes
- **Creativity:** 4-7 (1d4+3) — Limited
