---
shortcode: wtrbffl
name: {full: Water Buffalo, aliases: []}
type: being
subType: creature
description: "A massive semi-aquatic bovine of tropical floodplains, valued as a powerful draft beast yet formidable when running wild in feral herds."
tags: [animal, creature, image-needed]
data: {packFolder: animals, icon: sohl-none-icon-buffalohead, templatePriority: 0}
sohl:
  kbcat: animal
  attrRollFormula:
    str: 1d6+14
    end: 1d6+13
    dex: 1d4+5
    agl: 1d4+6
    per: 1d6+8
    aur: 1d4+5
    wil: 1d6+11
    rea: 1d4+4
    cre: 1d4+3
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 7}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 6}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 45}}
    - name: Horn Gore
      type: skill
      system:
        shortcode: gore
        subType: combattechnique
        masteryLevelBase: 55
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: gore
          name: Horn Gore
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 4, aspect: piercing}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Charging Trample
      type: skill
      system:
        shortcode: ram
        subType: combattechnique
        masteryLevelBase: 48
        combatCategory: melee
        impairedByRoles: [core]
        strikeMode:
          type: melee
          shortcode: ram
          name: Charging Trample
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 3, aspect: blunt}
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
      bodyScaleBase: 1.38
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

![[wtrbffl|Water Buffalo]]{float=top-left}

Out in the flooded rice-field a row of broad black backs lies in the brown water, with only the nostrils, the eyes and the sweep of the horns showing above it. A boy sits on the nearest, a stick across his knees, half asleep. The horns are flat crescents, spanning wider than a man can reach. The animal under him lets out a long, bubbling snort, and a cloud of flies lifts off its flank and settles again.

# Dossier {#dossier}

The Water Buffalo is the working beast of the floodplains, a massive, half-aquatic ox five to six feet at the shoulder and fifteen hundred to twenty-five hundred pounds, kept as a draft animal and living wild along the great river and its tributaries in [[place-vedyarargn|Vedyara Region]]. The heavy clay of the river margins cannot be farmed without it, and it gives milk, leather and horn. Feral herds of twenty to sixty, descended from escaped stock, are fiercely territorial, strong enough to kill any predator in the region, and easily the most dangerous cattle.

## Presentation

A massively built ox with a heavy, rectangular body in sparse, coarse black or dark-gray hair over thick, dark skin. The horns are enormous flattened crescents sweeping out and back from the broad skull, spanning five to six feet in a mature bull, ridged, darker at the base and paler at the worn tips, scarred in old dominant bulls. The head has a broad, flat forehead, large dark eyes and a wide muzzle for coarse marsh grass. The ears are small and fringed. The legs are short and strong, ending in broad, splayed hooves that walk through knee-deep mud. The tail is long and tufted and whips constantly at the biting insects.

## In the Land

Water buffalo wallow in the rivers, marshes and flooded fields of the plains of Vedyara, both as draft animals and in feral herds along the great river and its tributaries. A herd of related cows and calves stays in the river or a wallow through the heat of the day and grazes the banks at night. Bulls stay alone or in small groups until the rut.

## Key Behaviors

Water buffalo live in herds built around related cows and calves, with bulls alone or in small bachelor groups until the rut. Dominant bulls join the cows then and hold them by display and fights. They spend much of the day partly submerged in rivers, marshes or wallows, cooling off and escaping flies. They graze coarse marsh grass, reeds and water-plants in the cool of dawn and dusk and rest at midday. Domestic buffalo are mostly docile but can turn on a handler, a bull in rut or a cow with a calf especially. A feral herd goes back to wild behavior within a generation, wary, territorial and ready to attack.

## What the Farmers Do

The farmers of the river plains plough the rice-fields with water buffalo and use them to draw carts, pump water and thresh. A buffalo gives milk and butter, and the dung is fuel. A child leads one by a nose-ring. Bulls in rut are dangerous, and herd-boys keep clear. Tigers take calves from the herds at the jungle edge, and a herd defends its young by forming a ring. A feral herd is hunted with spears and dogs, and the horns are carved. A buffalo is washed daily in the river.

## Signs

- A row of broad, black backs and swept-back horns in a river, with only the nostrils and eyes showing.
- Wide, round tracks in the mud of a ford, with deep sinking at the toe.
- A herd of buffalo in a ring, calves inside, horns out.
- A wallow in a field corner churned to a trough.
- A boy asleep on a buffalo's back, with a stick across his knees.

## Combat Strategy

A water buffalo's primary defense is its massive body and horns. When threatened, a herd will typically bunch together with calves in the center and adult animals facing outward, presenting a wall of horns to any predator. If the threat persists, one or more bulls may charge — a straight-line rush of extraordinary momentum, head lowered to bring the horns into play. The charge is not fast by predator standards but the sheer mass behind it makes it devastating. A buffalo that has knocked its target down will gore and trample with focused aggression, returning to a downed enemy repeatedly to ensure the threat is eliminated. Feral buffalo, particularly solitary rogues, are more aggressive and less predictable. A rogue bull may charge without warning from concealment in tall reed beds or marsh grass, using the terrain to close distance before the target can react. In water, buffalo have a significant advantage — they are strong swimmers and can move through marshland that impedes horses and humans, and they will deliberately lead pursuers into deep water or soft mud where the buffalo's superior footing becomes a lethal advantage.

## Attack Methods

### Horn Gore

The primary attack. The buffalo lowers its massive head and drives the curved horns upward into the target, using the full power of its neck and shoulders. The horns are capable of piercing armor, impaling horses, and launching human-sized targets several feet through the air. The upward sweeping motion of the horns means that targets struck in the torso may be hooked and thrown rather than simply pierced, resulting in devastating compound injuries from both the initial gore and the subsequent fall.

### Charging Trample

The buffalo charges with its full body weight — up to a ton of muscle and bone — behind the impact. Even if the horns miss, the collision of the buffalo's massive skull and chest with a human target is sufficient to break bones and cause fatal internal injuries. A target knocked down by the charge is then trampled by the broad hooves, each carrying hundreds of pounds of concentrated force.

### Herd Stampede

When a herd of water buffalo panics — from predator attack, fire, or loud disturbance — the resulting stampede is one of the most destructive natural events in the lowlands. Fifty or more animals, each weighing a ton, running at full speed through whatever is in their path. Fences, camp structures, small buildings, and anything living caught in the path of a stampede is simply destroyed. Stampedes are most dangerous at river crossings, where the churning mass of animals can capsize boats and drown anyone in the water.

## Special Abilities

### Marsh Superiority

Water buffalo are supremely adapted to soft, wet terrain. Their broad, splayed hooves distribute their enormous weight across a wide surface area, allowing them to move through mud and marshland that bogs down horses and humans. In their preferred river-margin habitat, water buffalo can outmaneuver any mounted pursuer and can retreat into water deep enough to protect their flanks while keeping their horns available for defense.

### Massive Resilience

The water buffalo's thick hide and dense muscle mass provide substantial natural armor. Arrows and light spears may fail to penetrate the hide over the shoulders and chest, and even heavier weapons must be well-placed to reach vital organs through the layers of skin, fat, and muscle. A wounded buffalo is not a weakened buffalo — it will continue fighting with full aggression, and a mortally wounded bull may survive long enough to kill the hunter who wounded it.

### Herd Defense

A water buffalo herd responds to threats collectively. When one animal gives an alarm, the herd forms a defensive formation within moments, and adults will actively charge predators to protect calves and injured herd members. Lions, crocodiles, and even hippos typically avoid confrontation with an alert buffalo herd. This collective defense makes hunting feral buffalo extremely dangerous — a hunter who wounds one animal may find themselves facing a counter-charge from the entire herd.

### Stubborn Will

Water buffalo possess a temperamental tenacity that domestication has not fully bred out. A buffalo that has decided to stand its ground will not be moved by pain, noise, or intimidation short of lethal force. This stubbornness makes feral buffalo particularly dangerous — they do not flee from threats that would send most prey animals running, instead choosing to face down and attack whatever has disturbed them. Rogue bulls exemplify this trait to its extreme, treating every encounter as a territorial challenge to be answered with violence.

## Attributes

Strength
: 15-20 (1d6+14)

Endurance
: 14-19 (1d6+13)

Dexterity
: 6-9 (1d4+5)

Agility
: 7-10 (1d4+6)

Perception
: 9-14 (1d6+8)

Aura
: 6-9 (1d4+5)

Will
: 12-17 (1d6+11)

Reasoning
: 5-8 (1d4+4)

Creativity
: 4-7 (1d4+3)
