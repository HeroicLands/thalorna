---
shortcode: pony
name: {full: Pony}
type: being
subType: creature
description: "A stocky, strong equine under fourteen hands, bred for endurance and labor as a draft animal and reliable mount for smaller riders and dwarves."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+21
    end: 1d6+7
    agl: 1d6+9
    per: 1d6+14
    snt: 1d4+1
    aur: 1d4+2
    wil: 1d6+8
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 24}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 3}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 36}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 6, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
          lengthBase: 3
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 3, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 3, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 3}
          - {name: Forelegs, shortcode: forelegszone, probWeight: 2}
          - {name: Torso, shortcode: torsozone, probWeight: 7}
          - {name: Hindquarters, shortcode: hindqtrzone, probWeight: 4}
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
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 4, edged: 3, piercing: 1, fire: 3}
      weight: {base: 700, calc: "700"}
      reachBase: 0
      bodyScaleBase: 1.66
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 130
        leaguesPerWatch: 7
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[pony|Pony]]{float=top-left}

The pony stands in the lane in front of the farm gate with its feet planted, thick-necked and heavy-maned, a shaggy dun with a dark stripe down its back. A boy is hauling at its halter and getting nowhere. It looks at him with a calm, considering eye. After a time it decides, for its own reasons, to move, and ambles through the gate with the cart rolling behind it.

# Dossier {#dossier}

The Pony is the small, strong horse of the hill farms, under fourteen hands and five hundred to eight hundred pounds, built for endurance and labor. It works the upland farms of [[place-aureldirgn|Aureldia]], the steadings of the [[place-nrdlndsrgn|Nordlands]] and the clearings of [[place-vrystwald|Vristwald]] as a draft animal, farm worker and mount for small riders. It carries a weight that is large for its size.

## Presentation

A concentrated, muscular animal with a thick neck, a broad chest and powerful legs thick for its size. The coat is dense and coarse, gray, brown, chestnut or black, sometimes dun with a dark stripe. The mane is thick, full and unruly, and the tail heavy and full. The head is broader than a horse's, with smaller ears and a sturdier jaw. The eyes are intelligent and alert, with a stubborn look.

## In the Land

Ponies work on the hill farms of Aureldia, the upland steadings of the Nordlands, the forest clearings of Vristwald and wherever a farm lies too steep or too poor for a larger horse. A pony lives in the yard, grazes the rough pasture, and is fed through the winter on hay and oats. Hill ponies run out on the common pasture and are gathered in autumn.

## Key Behaviors

Ponies are intelligent and opinionated and do best with steady handling, and each develops a strong character with the people it works for. They will work through hard conditions without complaint but resist bad treatment and unreasonable demands. They live in herds but do as well alone, attaching to a handler or to animals they share a yard with. They are curious and methodical, and remember a situation for years. They panic less than horses and judge danger practically.

## What the Farmers Do

A farm keeps a pony or two for the plough, the cart and the pack-saddle, and for the children to ride. They are stocky, long-lived and strong for their size, and they pull on poor feed. A pony resists a handler who strikes it and works willingly for one who is steady. A dealer buys the best colts at the autumn gathering. A pony carries a miller's sacks to the town and returns alone along the same road.

## Signs

- A stocky, shaggy horse under fourteen hands, grazing a hillside with a hobble on its forefeet.
- Small, round hoof-prints, deep and close together, in the mud of a farm track.
- A pony pulling a two-wheeled cart through a ford, with a child on its back.
- A stubborn animal with its feet planted that will not be led by a rope.
- A shed with a few ponies in it, fed on hay and bedded in bracken.

## Combat Strategy

A pony will not initiate combat and prefers to flee or simply remove itself from danger. If cornered, separated from its herd, or defending a foal, it becomes a formidable opponent despite its size. Rather than rearing dramatically, the pony uses low, powerful kicks and determined bites to drive away threats. It fights with dogged pragmatism, neither theatrical nor flashy, pressing the attack until the threat withdraws. A pony separated from its handler becomes confused and less effective in combat, though fear may still drive it to violence if trapped.

## Attack Methods

### Powerful Kick

The pony swings a muscular hind leg in a low, powerful arc, using its compact build to generate surprising force in a short arc. This attack is effective at disabling approaching threats and has enough power to crack ribs or shatter bone in arms or legs.

### Bite

If a threat comes within reach, the pony may bite with considerable force, using its broad jaw to crush fingers, tear through leather, or inflict puncture wounds on unarmored flesh.

### Shoulder Check

In rare instances, the pony may lower its head and drive forward with its whole body, using its concentrated weight to knock opponents off balance or drive them backward.

## Special Abilities

### Hardy Endurance

The pony is built for long-distance work in difficult conditions. It can travel for extended periods at steady pace without tiring, subsisting on forage that would barely sustain horses. The pony is naturally resistant to cold, heat, and deprivation, making it reliable in harsh terrain.

### Powerful Legs

Beneath the stocky frame lies extraordinary muscular development in the legs. The pony can jump higher than its size suggests, climb steep slopes, and generate power in its kicks far exceeding what a human could manage.

### Practical Determination

The pony possesses an uncanny ability to find its way across difficult terrain, assess the safest route, and move with confidence even on uncertain ground. This contributes to its effectiveness as a pack animal and working animal in wild lands.

### Honest Stubbornness

The pony will not be driven beyond what it judges reasonable — a pony that refuses to proceed does so because it has identified a real hazard (thin ice, unstable slope, dangerous animal) that its instinct rejects. Wise handlers listen to this obstinacy rather than forcing compliance.

### Additional Information

Ponies can be trained by younger or smaller humanoids without requiring the strength needed to handle full horses. They develop fierce attachment to their handlers and will actively mourn separation or death. A well-treated pony becomes a steady, reliable companion worth its weight in practical assistance. Conversely, a pony subjected to cruelty becomes vindictive and dangerous, finding creative ways to injure or escape abusive handlers.

## Attributes

Strength
: 22-27 (1d6+21)

Endurance
: 8-13 (1d6+7)

Agility
: 10-15 (1d6+9)

Perception
: 15-20 (1d6+14)

Scent
: 2-5 (1d4+1)

Aura
: 3-6 (1d4+2)

Will
: 9-14 (1d6+8)

Reasoning
: 3-6 (1d4+2)

Creativity
: 3-6 (1d4+2)
