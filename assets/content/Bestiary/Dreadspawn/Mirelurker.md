---
shortcode: mrlrkr
name: {full: Mirelurker, aliases: []}
type: being
subType: creature
description: "A crustacean-amphibian apex predator of brackish marshes that waits motionless as a submerged log before striking with brutal force."
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
    str: 1d4+10
    end: 1d4+10
    dex: 1d4+8
    agl: 1d4+8
    per: 1d4+6
    aur: 1d4+5
    wil: 1d6+10
    rea: 1d4+3
    cre: 1d4+2
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 5}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 4}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-mysticalability-sprt, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-shok, system: {masteryLevelBase: 33}}
    - name: Crushing Jaws
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: bite
          name: Crushing Jaws
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 4, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 2, aspect: piercing}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Claw Rake
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 62
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw Rake
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 8, modifier: 1, aspect: edged}
          lengthBase: 2
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true}
    - name: Mire Grasp
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 67
        combatCategory: melee
        impairedByRoles: [manipulator]
        strikeMode:
          type: melee
          shortcode: grab
          name: Mire Grasp
          minParts: 1
          assocSkillCode: null
          attack: {disabled: false, spread: 8, modifier: 0}
          impactBase: {numDice: 1, die: 6, modifier: 13, aspect: blunt}
          lengthBase: 1
          defense:
            block: {disabled: true, modifier: 0, successLevelMod: 0}
            counterstrike: {disabled: false, modifier: 0, successLevelMod: 0}
          traits: {noBlock: true, impTA: 4}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 2}
          - {name: Arms, shortcode: armszone, probWeight: 5}
          - {name: Torso, shortcode: torsozone, probWeight: 5}
          - {name: Legs, shortcode: legszone, probWeight: 8}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital, manipulator]
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles: [manipulator]
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles: [core]
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles: [locomotor]
            canHoldItem: false
            probWeight: 3
        locations:
          - name: Skull
            shortcode: skullloc
            bodyPartCode: headpart
            bleedingSusceptibility: low
            amputability: none
            shockValue: 5
            probWeight: 500
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: medium
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 15
            protectionBase: {blunt: 7, edged: 6, piercing: 5, fire: 7}
      weight: {base: 300, calc: "300"}
      reachBase: 0
      bodyScaleBase: 1.11
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 30
        leaguesPerWatch: 2
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors:
          - {scope: surface_cover, key: wetlands, mode: add, textValue: "0"}
          - {scope: hydrology, key: shallow, mode: add, textValue: "0"}
        disabled: false
      - medium: aquatic
        feetPerRound: 50
        leaguesPerWatch: 4
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        factors: []
        disabled: false
---

# Appearance {#appearance}

![[mrlrkr|Mirelurker]]{float=top-left}

The inlet is brown and brackish and full of reeds, and the punt-pole goes down into soft mud before it finds bottom. Twenty yards ahead a log lies half under the water across the channel, gray-brown, crusted with slime and weed. As the punt comes up to it, the log opens. Two long arms unfold from it, jointed and heavy, ending in thick, ridged pincers, and four shorter limbs spread out beside them, clawed. A head comes up out of the mud, all jaw, plated like a crab's back. The water round it begins to churn and darken, thick as porridge, and the smell of rotting weed comes up off it in a wave.

# Dossier {#dossier}

The Mirelurker is a dreadspawn of the brackish marshes: eight to ten feet long and three hundred pounds, armored like a crab and built like nothing natural, with six limbs, a plated head that is mostly jaw, and two great arms that seize and drag. It lies in the mud of a channel, still as a sunken log, for hours, and when something comes within reach it erupts, grabs and pulls it under, churning the water to a choking slurry round it. It holds a stretch of salt-marsh and inlet on the coast of [[place-lisere|Lísere]], [[place-elavendre|Élavendre]]'s cold northern shore on [[place-liserebay|Lísere Bay]], and the coast that already watches the sea for raiders watches its own inlets for this. Like every dreadspawn it was made, it is alive, and it does not breed.

## Presentation

The mirelurker's body is a squat, heavy torso encased in mottled gray-brown chitin, patched with slime and green weed that grows on it. From it come six limbs: four shorter legs ending in clusters of sharp claws, on which it walks and swims, and two long, heavy arms ending in ridged pincers, which it uses to grab and crush. The head is low and broad and plated, with small dark eyes on short stalks and a wide jaw lined with plate-edged crushers. It breathes water and air alike. Out of water it moves slowly, heavily, with a clatter; in water and mud it is quick and silent. It smells of rotting weed and salt mud.

## In the Land

Lísere's shore is shingle and low headland, with boggy, thickly wooded country behind it, and between the headlands lie brackish inlets, salt-marshes and reed-choked channels where the streams meet the sea. The mirelurker holds one of these, a long inlet and the marsh round it between two fishing villages, and it moves through the channels with the tide. It hunts fish, seals, waterfowl, the sheep that graze the salt-marsh, and anyone who wades or punts its channels. It defends its inlet against seals and other large predators, and it never goes far up the streams into fresh water or out onto the open shingle.

## Key Behaviors

A mirelurker hunts from ambush, mostly by night, lying in the mud with only the top of its head showing, motionless for hours. It knows every pool and channel in its inlet, and every hidden stone. When prey comes near, it erupts, seizes with its pincers, drags its victim into deep water and stirs up the mud to blind and choke it. It herds prey into deep water and away from the bank where it can. In dry weather and at the lowest tides it lies in the deepest pool and becomes sluggish, and a long drought or a hard freeze weakens it badly.

## What the Coast People Do

Lísere's villages are already set back from the water for fear of raiders, and the two villages either side of the mirelurker's inlet have drawn their boats up out of it and launch from the open shingle instead, which is harder work. Sheep are not grazed on that marsh. Nobody wades its channels, and a fisherman who must go into the inlet goes in daylight, at high water, in a boat, with a lit brazier aboard, because fire hurts the creature and it avoids the heat. The beacon watch on the headland above the inlet, which is there for raiders, has a second duty: to call out if the log in the channel is not where it was yesterday. [[lore-varokhiclt|Varokhi]] raiders who land in that inlet are not warned. The villages count it a good night when a raiding boat comes in there.

## Signs

- A sunken "log" in a channel that is not in the same place two days running.
- Water that clouds suddenly to a thick brown slurry on a still day, with no wind or current to stir it.
- Seal carcasses on the shingle with crushed ribs and great pincer-marks, half eaten.
- Broad, six-limbed tracks in the salt mud at low tide, with deep claw-prints and two dragging furrows.
- A strong smell of rotting weed over an inlet, and no birds feeding in it.

## Combat Strategy

The mirelurker erupts from the mud and tries to seize and crush its victim before he can react, and then to drag him into deep water. Once it has hold, it fights with everything: pincers, claws and jaws together, while it churns the water so that no one can see to help. It uses the channels to separate a party and pulls the one it has seized away from the others. If a fight goes against it, it lets go and sinks into the mud and is gone along the channel. Fire and dry ground are what it fears.

## Attack Methods

### Crushing Jaws

The mirelurker lunges and bites with its plated jaws, which pierce and crush at once and can snap a limb or break ribs through armor.

### Claw Rake

Its clawed legs slash together at whatever is close, opening wounds and pulling its victim off balance, faster than a man can defend against all of them.

### Mire Grasp

The mirelurker seizes with its great pincers and drags its victim down into the mud and water, churning them into a choking slurry. Held, the victim cannot breathe or see, and is crushed and pulled deeper.

## Special Abilities

### Amphibious Adaptation

It breathes water and air equally well and can stay under indefinitely. Its shell turns blades: cuts and thrusts glance off with little effect.

### Swamp Camouflage

In murky water or thick reeds it is nearly invisible. In clear water or on open ground the advantage is gone.

### Terrain Mastery

It moves through mud, reeds and water as easily as a man on a road, while its enemies flounder.

### Fire and Drought

Fire cracks its shell and pains it badly. Kept out of water, it weakens over days as its body dries.

## Attributes

- **Strength:** 11-14 (1d4+10)

- **Endurance:** 11-14 (1d4+10)

- **Dexterity:** 9-12 (1d4+8)

- **Agility:** 9-12 (1d4+8)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 6-9 (1d4+5)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 4-7 (1d4+3)

- **Creativity:** 3-6 (1d4+2)
