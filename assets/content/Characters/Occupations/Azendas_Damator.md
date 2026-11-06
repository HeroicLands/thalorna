---
shortcode: azendsdmtr
name: {full: Azendas Damator}
type: being
subType: npc
tags: [draft, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric, warrior]
  occupation: Priest
  lore: []
  culture: vylarianclt
  homes: [tyrellan]
  affiliations: {vylarinmpr: {rank: 3}, lizelas: {rank: 3}}
  gender: male
  species: humanflk
  born: 679.83
  height: 6' 1"
  weight: 179 lbs
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: tanned
    complexion: [weathered]
    extra_features: [a tattoo of a dragon wrapping around the arm]
  packFolder: midhalionvylaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 39}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-jewl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 33}}
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

Azendas Damator is a 40-year-old man who stands 6'1" tall and is broad and solidly built. He has a diamond face with prominent cheekbones, a narrow forehead, and an angular jaw that leads to a firm chin. His almond-shaped blue eyes sit beneath heavy brows and give him a measured gaze. He has a straight nose and wide lips. He has tanned skin with a weathered complexion. His dark brown hair is short and swept back.

The dragon tattooed around his upper arm tells a story he rarely discusses—a coiled beast inked in deep black and rust, the kind of mark men earn in distant wars or mercenary camps. The tattoo has faded with time and sun exposure, its edges softened but unmistakable. Those familiar with such things recognize it as the mark of a soldier, though Azendas turned toward the green blessing of the [[affiliation-lizelas|Faith of Lizelas]] long ago.

# Dossier {#dossier}

Azendas Damator is a _sarnor_ of the [[affiliation-lizelas|Faith of Lizelas]] and the senior priest of the faith in the Tirellan region, serving from the temple of Lizelas at [[place-tyrellan|Tirellan]], the capital of [[affiliation-provncmktr|the Province of Moktur]]. He takes the blessing of the fields at spring plowing and the harvest thanksgiving out to the farming villages of the Tirellan circuit, among them [[place-mylanthos|Milanthos]], and he receives the temple's share of each village's harvest, a sheaf in ten.

His standing on the circuit comes from results, not eloquence. He speaks plainly and sometimes harshly, and the villages say that cattle he has blessed rarely sicken, that his remedies ease a hard birth, and that fields blessed under his hand bring in a harvest that keeps a family alive. In a valley where a wet summer means a hungry winter, and where fewer southern caravans come up the patched imperial road each year, the farmers count him as necessary as the granaries under the Keep.

## Background

**The levy.** Azendas was born to a free family of the countryside and was taken in the levy raised for the war in [[place-taruzelrgn|Taruzel]]. The dragon on his arm was inked in the levy's camp, and he came home from the lost war with no wish to fight again.

**The farms.** He came north to work the farms of the Tirellan circuit, first as a hired hand and then as a steward. An old priestess first urged him to take up healing in the goddess's service, and the elder of Milanthos, [[being-pirkelosholi|Pirkelos Holimandis]], who saw a soldier's hands trying to coax life from the soil, later trained him.

**The circuit.** Azendas has served the circuit since his ordination and has refused every post that would take him off it.

## Psyche

### Personality

He is methodical, blunt and stubborn, with a soldier's trust in what has been proved to work. He can be contemptuous of people he thinks foolish, and he is very gentle with the sick and the dying.

### Motivation

He wants the villages of the circuit fed through every winter and their children kept alive. He has given up on mending the empire and works on the next village and the next birth.

### Strengths

He is a skilled healer and herbalist, he knows every village and field of the circuit, and the farmers trust him without question.

### Weaknesses

He will not change a method he trusts, he cannot persuade by words, and he has made opponents of the younger priests in the temple who want the circuit run another way.

## Social

### Enemies

- **The younger priests of the temple** who resent his influence and his old methods, and one of them in particular, who has friends in the capital and wants the Tirellan circuit.

### Others

- [[being-pirkelosholi|Pirkelos Holimandis]]: The elder of Milanthos, who trained him in the goddess's service and shelters him when the temple in the capital questions his methods.
- **The farmers and village elders of the circuit**, who leave their share of the harvest at the temple because they have seen his blessing turn into bread.

### Affiliations

- **[[affiliation-vylarinmpr|Vilérian Empire]]**: a Palvethos, a free resident under imperial law without the citizenship, and liable to the Empire's taxes.
- **[[affiliation-lizelas|Faith of Lizelas]]**: a _sarnor_, an ordained priest and healer, the senior priest of the faith on the Tirellan circuit.

## Plot Hooks

1. **The blight.** A blight has come into the barley on the upper strips at Milanthos that Azendas's blessing has not stopped, and some of the farmers whisper that Lizelas has turned from him. He asks a party to carry a sample of the blighted grain to someone who knows more than he does.
2. **The auditor.** An auditor of the revenue has come to Tirellan to learn why the temple's harvest receipts from the circuit are so small, and Milanthos's are the smallest of all. Azendas wants to know what she has been told before she rides out to the villages.
3. **The successor.** The temple means to give the Tirellan circuit to a younger priest with friends in the capital. Azendas asks a party to learn who the man is, and what he means to do with the villages' harvest share.

:::secret {title="The store at Milanthos"}
The temple's share from Milanthos never leaves the village. For nine harvests the sheaves carried to the Blockhouse have been threshed and stored in the tower's cellar and in pits under its floor, and the receipts Azendas sends to the temple at Tirellan record a fraction of them. He and Pirkelos agreed it in the year the imperial road's last bridge below the provincial boundary fell and the southern grain stopped coming, and in the wet summer three years ago the store fed four villages through the winter. It is taken from the temple and from the emperor's tithe on the temple's grain, and it is enough to have Azendas stripped of his rank. The auditor's books, and the successor's first harvest, would both find it.
:::
