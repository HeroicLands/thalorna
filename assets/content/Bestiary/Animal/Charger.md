---
shortcode: charger
name: {full: Charger}
type: being
subType: creature
description: "A powerful warhorse bred and trained for battle, conditioned to endure noise, blood, and violence while carrying an armored rider into the fray."
tags: [animal, creature]
data: {packFolder: animals, icon: sohl-none-icon-horsehead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+25
    end: 1d6+8
    agl: 1d6+8
    per: 1d6+14
    snt: 1d4+2
    aur: 1d4+2
    wil: 1d6+8
    rea: 1d4+2
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 28}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-snt, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 4}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 21}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 65}}
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [locomotor]
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 6, aspect: blunt}
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
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 4, modifier: 4, aspect: piercing}
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
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            isFumble: true
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Foreleg
            shortcode: lforelegloc
            bodyPartCode: lforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Foreleg
            shortcode: rforelegloc
            bodyPartCode: rforelegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Flank
            shortcode: flkloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 6
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Abdomen
            shortcode: abdloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Quarter
            shortcode: lqtrloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Left Hind Leg
            shortcode: lhindlegloc
            bodyPartCode: lhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Quarter
            shortcode: rqtrloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 5
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Right Hind Leg
            shortcode: rhindlegloc
            bodyPartCode: rhindlegpart
            isStumble: true
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 4
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
          - name: Tail
            shortcode: tailloc
            bodyPartCode: tailpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 1
            probWeight: 10
            protectionBase: {blunt: 5, edged: 4, piercing: 2, fire: 4}
      weight: {base: 1200, calc: "1200"}
      reachBase: 0
      bodyScaleBase: 1.84
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 140
        leaguesPerWatch: 9
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

![[charger|Charger]]{float=top-left}

Behind the stable-yard gate a tall, dark horse is being walked in a ring by a groom, its coat shining and its mane braided with leather cords. It is taller than any farm horse you have seen and heavier in the bone. When a trumpet sounds in the street outside, its ears flick forward and its nostrils flare, and it does not shy. A pale scar runs across the shoulder where a blade once opened the hide.

# Dossier {#dossier}

The Charger is the warhorse of the noble houses and garrison towns, sixteen to eighteen hands high and twelve to eighteen hundred pounds, selected, bred and trained to carry an armed rider into a fight. It is brought up from a colt to stand under a drum and a banner and to endure noise, blood and fire. The stables of [[place-aureldirgn|Aureldia]], [[place-aelwyth|Aelwyth]] and the five cities of [[place-byzariargn|Bizaria]] keep them, and a knight rides one to battle and a lighter horse on the road.

## Presentation

A tall, broad horse with heavy bone in the legs and a muscular, compact body, thick in the neck, with pronounced withers and a short back that carries armor and a rider. The head is small for the frame and carried alertly. The coat is a solid black, dark brown, chestnut or gray, kept groomed, and the mane and tail are braided with cords, clips or small bells. The hooves are large and dark. An old charger carries scars, healed cuts, burns and marks where armor edges have rubbed the hide.

## In the Land

Chargers are kept in the stables of the noble houses and keeps of Aureldia and Aelwyth and in the garrison towns of the five cities of Bizaria. A charger lives in a stall, is groomed and fed on grain, and is brought out for drill and for war. It is not bred in the open: stud farms in the grain belt and the river meadows breed them under a stud-master, and a colt is trained from his second year.

## Key Behaviors

Chargers are herd animals, but training has bent the instinct toward the rider. A charger bonds with its handler and follows commands that would send an untrained horse bolting. It is more aggressive than a farm horse and fights other horses for rank. Drilled chargers move together as one body. A horse reads its rider: a calm rider produces a calm horse, and a frightened one makes it unreliable. Away from the field a charger can be gentle with people it trusts, and it eats and drinks a great deal to hold its condition.

## What the Knights Do

A knight or a man-at-arms keeps one charger as the horse he fights from, and he rides a lighter horse on the road. The stable-master trains a colt to stand under a banner, to hold steady at a drum and at the smell of blood, and to turn into a charge on a word. A good charger is worth more than the armour on its rider's back. In a siege or a rout the horses are the first thing a defeated army tries to save and the first thing a victor takes. A charger bred in war is led, not ridden, over any road that is not necessary, and is walked cool after drill.

## Signs

- A long stable with doors on both sides, and a groom at each one walking a big horse cool.
- Hoof-prints, deep and wide, in the churned mud of a drill-field.
- A horse that stands unmoved by a shout, a horn and a fire.
- A saddle with a high cantle and a breastplate hung over a stall door.
- A bay stallion that flattens its ears and turns its quarters to a stranger who walks past too close.

## Combat Strategy

A Charger's training teaches it to charge directly at threats when commanded, to trample or strike with hooves or teeth, and to remain in position even in chaos. In direct combat with an armored rider, a Charger is used primarily as a striking platform—its mobility and impact are advantages. Without a rider, a Charger will still fight, using its hooves to strike and its teeth to bite with surprising force. The horse will charge repeatedly at threats, attempting to knock them down, trample them, or drive them away. Multiple Chargers in coordination are devastatingly effective—they can encircle a single target or break through defensive formations. A Charger will continue fighting even when injured unless so severely damaged that mobility is compromised. A spooked or panicked Charger is capable of causing as much damage to its allies as enemies—an important tactical consideration.

## Attack Methods

### Crushing Hoof Strikes

The Charger raises a foreleg and brings the hoof down with force comparable to a sledgehammer blow. A strike can crush skull bone, break ribs, and shatter limbs. Multiple hoof strikes in rapid succession can reduce an opponent from standing to prostrate in seconds. The second attack of this type often occurs as the horse wheels and strikes again or delivers a rear-leg kick.

### Bite and Tear

A Charger's teeth are large and capable of crushing bone. The horse will grab flesh and tear, pulling away with violent force to create large wounds. A bite is typically accompanied by rearing or shaking, increasing damage significantly. The teeth frequently break off or leave fragments in wounds.

### Rear and Strike

The horse rises on hind legs to maximize the reach of front-leg strikes, becoming momentarily vulnerable to attacks on the flank but gaining significant height advantage. From this position, it can strike multiple times in succession, particularly against smaller humanoid opponents.

### Trample

Once an opponent is on the ground or knocked down, the Charger will deliberately step on them, focusing weight onto the legs, torso, and head. Each hoof impact carries the full weight of the animal. The Charger will continue trampling, moving across the fallen opponent and potentially circling to repeat the attack.

## Special Abilities

### Warhorse Training and Discipline

Generations of selective breeding and rigorous training have created a horse that does not panic in circumstances that would terrify ordinary equines. A Charger trained to war tolerates fire, blood, death screams, and close combat without losing focus or bolting. This training allows them to be effective in combat scenarios and makes them valuable military assets. The bond between a Charger and its experienced rider can be extraordinarily strong, with the horse responding to subtle weight shifts and commands inaudible to others.

### Strength and Mass

A Charger's physical power greatly exceeds that of civilian horses. They can carry significantly heavier loads, accelerate to high speeds despite their mass, and deliver impacts with devastating force. Their muscle and bone density allow them to sustain impacts and injuries that would cripple lighter horses. A charging Charger becomes a living battering ram with the impact force of a siege weapon.

### Acute Combat Awareness

A well-trained Charger develops an almost intuitive sense of threat and positioning. It will dodge obvious attacks, attack vulnerable opponents preferentially, and maintain awareness of terrain and other combatants. In coordinated formations, trained Chargers exhibit behavior suggesting communication and coordination beyond simple herd instinct, though the mechanism is not fully understood.

### Extreme Endurance

A Charger can sustain combat effort for extended periods, accumulating fatigue slowly. The extensive conditioning of military service allows these horses to march for days, fight for hours, and recover quickly. This endurance is one of the primary reasons military organizations value them—they simply outlast civilian horses.

## Attributes

Strength
: 26-31 (1d6+25)

Endurance
: 9-14 (1d6+8)

Agility
: 9-14 (1d6+8)

Perception
: 15-20 (1d6+14)

Scent
: 3-6 (1d4+2)

Aura
: 3-6 (1d4+2)

Will
: 9-14 (1d6+8)

Reasoning
: 3-6 (1d4+2)

Creativity
: 3-6 (1d4+2)
