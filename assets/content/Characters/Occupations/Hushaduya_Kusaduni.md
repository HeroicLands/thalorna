---
shortcode: hshdyqsdn
name: {full: Hushaduya Kusaduni}
type: being
subType: npc
description: "An armorer of Pashinar's armorers' street whose fine daggers and throwing knives are made to be beautiful, and who wants the caravan guards who buy them to prove them useful."
tags: [tradesfolk]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [artisan]
  occupation: Weaponcrafter (Armorer)
  lore: []
  culture: taruzelianclt
  homes: [pashinar]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, sacredforge: {rank: 1}}
  gender: female
  species: humanflk
  born: 687.107
  height: 5' 8"
  weight: 157 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: medium
    complexion: [sun_kissed]
    hair_style: braided
    nose: straight
    brow: heavy
    mouth: wide
    extra_features: [a scar on the left ankle]
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-mnrl, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-lgdm, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 16}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 28}}
  system:
    body:
      structure:
        zones:
          - {name: Head, shortcode: headzone, probWeight: 1}
          - {name: Arms, shortcode: armszone, probWeight: 4}
          - {name: Torso, shortcode: torsozone, probWeight: 4}
          - {name: Legs, shortcode: legszone, probWeight: 6}
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles: [vital]
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
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase: {blunt: 0, edged: 0, piercing: 0, fire: 0}
      weight: {base: null, calc: "(9 * str) + 50"}
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: "enc + 5"
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: "floor(wt/4)"
        strMod: "-5 * floor((str - 10) / 2)"
        disabled: false
    defaultCombatGroup: null
---

# Appearance {#appearance}

Hushaduya Kusaduni is a 32-year-old woman who stands 5'8" tall and is of moderate build. She has a diamond face with soft cheekbones, a smooth forehead, and a sharp jaw that leads to a prominent chin. Her piercing brown eyes sit beneath heavy brows and give her a penetrating gaze. She has a straight nose and wide lips. She has medium-toned skin with a sun-kissed complexion, freckled on the forearms by forge-sparks. Her black hair is braided and coiled at the nape, out of the fire's way, and an old scar crosses her left ankle above the shoe.

# Dossier {#dossier}

Hushaduya Kusaduni is an armorer of [[place-pashinar|Pashinar]], a freewoman on the register who keeps a forge in the armorers' street below the western gate, where the street sells to the caravan guards. The street makes what the road needs: mail mended overnight, swords ground, spearheads by the dozen. Hushaduya makes daggers and throwing knives, fine ones, with patterns worked into the steel and grips of wrapped and tooled leather, and they are made to be beautiful.

They are made to be used, too, and that is her trouble. The caravan guards who come down the street before a train goes over the pass want a blade that will not break, and they take one look at hers and call them ornaments. She sells to the factors' households on the slope, who buy them as gifts, and to the few guards who have tried one and come back for a second. She wants the rest of the guards to try them.

## Background

**The forge.** She grew up in a family of smiths and learned on their anvil, and from the first she wanted to make the small, fine pieces nobody else in the family had the patience for.

**The street.** She took her own forge in the armorers' street when she was twenty, and has been arguing with its older smiths about what a knife is for ever since.

## Psyche

### Personality

Hushaduya is stubborn, exacting and proud of her work, and bad at selling it to anyone who does not already admire it.

### Motivation

She wants her blades proved where the caravan trade can see it, so that nobody calls them ornaments again.

### Strengths

She is a fine smith and an inventive designer, and she is quieter on her feet and better at keeping out of sight than an armorer has any need to be.

### Weaknesses

She will not make a plain blade to pay the rent, and the rent is often late.

## Social

### Enemies

The older smiths of the armorers' street, who say her blades shame the street and keep her off its stalls on the mornings a caravan leaves.

### Others

- **The factors' households of the slope**, who buy her knives as gifts.
- **[[being-gnrbbd|Genira Bibudi]]**, the fighter of the caravanserai yards, whom the caravan men watch and whose hands Hushaduya would like to see her knives in.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman on the register of Pashinar, entitled to petition the [[affiliation-grandcouncil|Grand Council]] through her state's councilors.
- **[[affiliation-sacredforge|The Sacred Forge]]**: one of the lay faithful, the Devran, who keeps the feasts of the forge-fire without office in the temple.

## Plot Hooks

1. **The proving.** Hushaduya offers a pair of her throwing knives to Genira Bibudi if she will fight with them in the caravanserai yards before the guards who call them ornaments. Genira has not said yes.
2. **The knife from the pass.** A caravan guard comes down from the new toll-gate on the road to [[place-besikar2|Besikar]] with a knife he took off one of the men who keep it. It is one of Hushaduya's, and she remembers who she sold it to.
3. **The gifts.** A factor of the [[affiliation-balinuni|Balinuni]] orders a dozen presentation daggers from her, to be given to the caravan masters who move their trade to [[place-qudumel2|Kudumel]]. The fee would pay her rent for two years.
4. **The stalls.** The smiths of the street have asked the [[affiliation-gldbrdpshnr|Guild Board]] to forbid ornamented blades on its stalls on caravan mornings, as a matter of the town's good name.
