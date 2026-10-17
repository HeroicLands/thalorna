---
shortcode: onager
name: {full: Onager, aliases: []}
type: being
subType: creature
description: "A wild ass of the arid steppe, a medium equine of legendary speed, endurance, and ferocity ranging across gravel plains and salt flats."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-donkey, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+8
    end: 1d6+11
    dex: 1d6+9
    agl: 1d6+11
    per: 1d6+10
    aur: 1d4+5
    wil: 1d6+12
    rea: 1d4+5
    cre: 1d4+4
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 7}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 35}}
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
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: -2, aspect: blunt}
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
        masteryLevelBase: 70
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 1, aspect: piercing}
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
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 3, edged: 2, piercing: 1, fire: 3}
      weight: {base: 575, calc: "575"}
      reachBase: 0
      bodyScaleBase: 1.06
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 80
        leaguesPerWatch: 10
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[onager|Onager]]{float=top-left}

A band of pale, long-legged animals stands on the salt flat a long way off, every head turned toward you. They are smaller than horses and paler, with a dark stripe running down the back and long ears. The stallion stamps. Before you have decided what to do, the band has wheeled and gone, a plume of white dust rising behind them across the flat.

# Dossier {#dossier}

The Onager is the wild ass of the arid steppe, eleven to twelve hands at the shoulder and five hundred to six hundred fifty pounds, grazing the gravel plains, salt flats and dry grassland of the [[place-khzryndsrtrgn|Khazryn Desert Region]] and the stone desert of [[place-idwkrrgn|Idvaqor]]. It is smaller than a wild horse and faster over open ground, tireless over distance and savage when cornered, and no attempt to tame it has succeeded. To the steppe nomads it is a quarry and a symbol of the wild desert. Hunting one on horseback tests rider and mount to the limit.

## Presentation

A medium-sized equine, lean and narrow, built for speed. The coat is pale sandy-beige to reddish brown, paler on the belly and legs, with a dark stripe down the back and sometimes faint stripes on the shoulders. The head is large with long ears, longer than a horse's and shorter than a donkey's, and a pale, almost white muzzle. The eyes are large and set high. The legs are long and fine, with hard, narrow hooves. The mane is short, dark and erect, and the tail is tufted. There is nothing decorative about it.

## In the Land

Onagers graze the gravel plains, salt flats and dry steppe of the Khazryn and the stone desert of Idvaqor, on the cold high steppe before the western passes of [[place-tantsouregin|Tantsou Region]]. A band of mares and foals ranges between a few water-holes under a stallion who holds the ground around one. They graze at dusk and dawn and rest in the heat. A band bunches at a distance from the observer, stares, and bolts.

## Key Behaviors

Onagers live in loose bands of mares and foals, with stallions that hold ground around a water-hole or good grazing and breed with the mares that pass through, without keeping a harem. The bands split and reform with drought and season. They graze tough steppe grass, desert shrubs and dry plants, and survive on forage that would starve a tame animal. They are active at dawn and dusk and rest in the midday heat. They are alert, keep a long flight distance, begin to move off an approaching person at several hundred yards, and gallop at any pursuit. Stallions fight savagely and often in the breeding season, with biting, kicking and rearing.

## What the Tribes Do

The steppe tribes hunt onagers for the meat and the hide and do not tame them. A wild ass will not take a rider or a harness, and the tribes say that every attempt has ended in a dead man or a dead animal. Hunters ride the band down by turns, since an onager outruns a horse on open ground, and take it by relays or by a waterhole ambush. A tribe that holds a well keeps count of the bands that use it. The hide makes a tough rawhide, and a foal caught young is kept to cross with a mare.

## Signs

- A band of sand-colored asses on a skyline, motionless, every head turned the same way.
- Narrow hoof-prints crossing a salt flat in a long, straight line, running.
- A cloud of dust moving fast over gravel with no rider in it.
- A stallion braying from a ridge-top at dawn, a harsh, descending call.
- A trampled ring around a water-hole with the dung-piles of a territory-holder.

## Combat Strategy

An onager's overwhelming preference is to run. It detects threats at extreme range and simply leaves, accelerating to speeds that outpace any pursuing horse over the first mile. However, an onager that is cornered, wounded, or defending a foal transforms from a flight animal into one of the most aggressive equines in existence. A cornered onager attacks without warning or hesitation, charging directly at the threat and delivering a rapid combination of bites, rearing strikes, and kicks that is far more violent than anything a wild horse produces. Onagers bite with real malice — they target faces, arms, and hands with snapping lunges and will hold and shake, behavior rarely seen in horses. Their kicks are delivered with precision, often spinning to present the hindquarters and then lashing out with both hind feet simultaneously. An onager that has been roped or restrained fights with an intensity that frequently injures handlers and has historically resulted in the death of the animal rather than its capture — they will throw themselves against restraints until bones break rather than submit.

## Attack Methods

### Savage Bite

Far more aggressive than a horse bite. The onager lunges with jaws open, seizes the target — arm, hand, face, throat — and shakes violently, tearing flesh and crushing tissue. The incisors are heavy and the jaw muscles are proportionally more powerful than a horse's, reflecting a lifetime of fighting that domestic equines never experience. An onager will bite repeatedly and with apparent intent to cause maximum damage, targeting the same wound multiple times.

### Double Kick

The onager spins to present its hindquarters and lashes out with both hind legs simultaneously, delivering a devastating double impact. The hooves are narrow and extremely hard, concentrating force into a small area, and the kick is powered by hindquarter muscles developed for explosive acceleration. This attack is faster than a horse's kick and delivered with less warning.

### Charging Strike

A cornered onager will charge directly at a threat, rearing at the last moment to bring forelegs crashing down on the target. Unlike a horse's defensive rear, which is typically a single motion, the onager's charge involves a sustained assault — rearing, striking, then immediately lunging to bite before rearing again.

## Special Abilities

### Desert Speed

The onager is the fastest equine on the arid steppe. Over short distances — the first half-mile of a pursuit — an onager can outrun any horse, reaching speeds that are simply inaccessible to heavier domestic breeds. Even over longer distances, an onager's speed drops only marginally, and it can sustain a pace that exhausts pursuing horses within a few miles. This speed, combined with the onager's ability to navigate rough terrain at full gallop without faltering, makes mounted pursuit a difficult proposition.

### Untameable Spirit

The onager's famed willfulness is not merely stubbornness — it is an active, aggressive refusal to submit that has no parallel among equines. Historical attempts to domesticate onagers have universally failed. Captured animals injure handlers, refuse training, attack other livestock, and will starve themselves or fight restraints to the point of self-destruction rather than cooperate. This is not fear-based panic but something closer to rage — an onager that has been restrained becomes dangerous to everyone around it. The few steppe stories of warriors who managed to ride onagers describe animals that cooperated only on their own terms and that could never be fully trusted.

### Extreme Endurance

Like the donkey to which it is related, the onager possesses extraordinary metabolic efficiency. It requires less water and food than a horse of comparable size, tolerates heat that would prostrate heavier equines, and can sustain activity through conditions — sandstorms, extreme cold, prolonged drought — that would leave domestic animals debilitated. An onager band can range across territories that no mounted pursuer can follow without supply lines.

### Territorial Aggression

Onager stallions are territorial in a way that wild horse stallions are not — they defend specific patches of ground rather than herds, and they respond to intrusion with immediate, escalating aggression. A stallion that perceives a horse-mounted rider as a territorial challenge may charge directly rather than flee, creating dangerous situations for travelers who unknowingly cross territorial boundaries near water sources or grazing grounds.

## Attributes

Strength
: 9-14 (1d6+8)

Endurance
: 12-17 (1d6+11)

Dexterity
: 10-15 (1d6+9)

Agility
: 12-17 (1d6+11)

Perception
: 11-16 (1d6+10)

Aura
: 6-9 (1d4+5)

Will
: 13-18 (1d6+12)

Reasoning
: 6-9 (1d4+5)

Creativity
: 5-8 (1d4+4)
