---
shortcode: ytlshpshtm
name: {full: Yutalush Pushutum}
type: being
subType: npc
tags: [draft, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric]
  occupation: Priest
  lore: []
  culture: taruzelianclt
  homes: [bazunel2]
  affiliations: {cnfdrtntrzlnstts: {rank: 3}, lizelas: {rank: 3}}
  gender: male
  species: humanflk
  born: "685.27"
  height: 5' 11"
  weight: 161 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: grey
    skin_color: olive
    complexion: []
    extra_features: []
  packFolder: midhaliontaruzel
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 17}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 18}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 32}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-ritual, system: {masteryLevelBase: 65}}
    - {model: skill-merazanscrpt, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 80}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-herb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-wood, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 13}}
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

At thirty-four, Yutalush Pushutum appears a decade older than his actual age, worn down by relentless exposure to human suffering. His gray hair, prematurely aged, is kept short and practical—no vanity in this man, though his careful grooming suggests discipline if not self-regard. His face is sharp-featured, almost ascetic, with deep lines around his hazel eyes that speak of years spent in close focus: reading medical texts, examining wounded patients, witnessing death. There is a gentleness in his expression that seems almost incongruous with his intimidating stature—he stands nearly six feet tall with the solid build of someone who has performed physical labor all his life, yet he moves with the careful precision of a healer, as if aware that his size could frighten the vulnerable people he serves. His olive skin bears the marks of his work: small scars, minor burns from herbal preparations, permanent stains from medicines that will not wash away. He wears the simple robes of a temple healer, practical rather than ceremonial, often carrying a well-worn leather satchel containing the tools of his trade.

# Dossier {#dossier}

Yutalush Pushutum is a healer-priest of the [[affiliation-lizelas|Faith of Lizelas]] in [[place-bazunel2|Bazunel]], a _sarnor_ who keeps a clinic below the temple and treats whoever comes through its door: the poor of [Zatturel]{.name data-type="place/site"}, the newcomers' lanes behind the eastern quays, the houses' men, and the council's own men alike. He asks no one who wounded them, and he tells no one who came.

That even hand has made the clinic a neutral ground in a city that prides itself on its balance, and it has made Yutalush the keeper of more secrets than one man should carry: who was hurt and by whom, which of the powerful are ill, and who comes ashore by night. On the magistrates' bench [[being-tarrukeshkar|Tarruk Eshkarum]] says that the even hand is a refusal to take a side, and the city argues over whether it can afford to take none.

## Background

**The apprentice.** Yutalush was born to a freeman family of modest means in Bazunel and was apprenticed to an older healer at fourteen. His eye was sharp and his hands steady.

**The war.** He was a young healer when the war of independence came, and he treated its wounded. The years since have brought him the wounds of the peace instead: the newcomers' fevers in Zatturel, the quarrels of the quays, the men the council's watch chases and the men who chase them.

**The temple.** He came to the priesthood almost by accident, seeing that the goddess of growth and fertility held the healing he already did. The temple gives him a roof for the clinic and some protection, and the city knows that his real standing is that anyone in it may one day need him.

## Psyche

### Personality

Yutalush is gentle, watchful and very tired. He has learned to read the wound behind the story he is told, and he speaks less each year.

### Motivation

He holds a patient's life above any side, and he will not turn away anyone who is suffering. He has begun to fear that by treating the consequences of the city's quarrels he helps them go on.

### Strengths

He is a skilled healer, he is trusted by people who trust no one else, and he has never broken a patient's confidence.

### Weaknesses

He is worn out, his neutrality is only as safe as his silence, and the clinic depends on money he does not ask about.

## Social

### Enemies

- [[being-tarrukeshkar|Tarruk Eshkarum]]: A young magistrate of the council, rising among its oligarchs, who presses the temple to bring the clinic under its control.

### Others

- [[being-beshuratarmu|Beshura Tarmumi]]: A [[affiliation-freecaptains|Free Captain]] whose life he saved years ago. She calls him a friend and owes him a life-debt, and the friendship of an outlaw is dangerous to them both.
- [[being-ninurishamir|Ninuri Shamiru]]: The master of the [[affiliation-auricompct|Auric Compact]]'s counting house, who quietly steers money to the clinic and asks only his discretion.

### Affiliations

- **[[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]**: a Freeman, enrolled in the register of [[affiliation-bazunel|Bazunel]].
- **[[affiliation-lizelas|Faith of Lizelas]]**: a _sarnor_, an ordained priest and healer.

## Plot Hooks

1. **The supplies.** The physic the clinic buys at the quay has begun to arrive late or not at all, and the merchants who sold to it have found reasons to stop. Yutalush asks a party to follow the next shipment up from the harbor and see who stops it.
2. **The copyist.** An agent of a [[place-besikar2|Besikar]] guild has a warrant for a copyist of Zatturel that the magistrates will not hear, and the copyist has come to the clinic. Yutalush will not hand over a patient. He asks a party to keep the copyist safe until the agent's ship leaves.
3. **The cove.** One of Beshura Tarmumi's crew is badly hurt in the channels, and she cannot bring him into Bazunel by day. A messenger asks Yutalush to come to a cove on [[place-tashilar|Tashilar]]'s shore at night, and he wants a party to go with him.
4. **The accounts.** A senior priest of Lizelas has asked for the clinic's accounts. Yutalush does not know where all of its money comes from, and he wants a party to find out before the temple does.

:::secret {title="Whose quarrel the clinic is in"}
Tarruk Eshkarum has been undermining the clinic's supplies, so that the temple can take it over as a rescue rather than a seizure and hand its keeping to men the council trusts. What he wants is the clinic's knowledge: who comes, wounded by whom. The money that keeps refilling its shelves is the Compact's, entered under other heads in [[being-ninurishamir|Ninuri Shamiru]]'s books, and an assessor from Besikar is reading those books now.

The copyist of the second hook is one of the Zatturel newcomers whom a factor of [[affiliation-crimsnldgr|The Crimson Ledger]] found through the council's roll and set to copying, and the Ledger made sure his old guild heard where he was. Beshura Tarmumi and the Free Captains mean to be on the water when the halls of [[place-yamuzel2|Yamuzel]] rise at the [[lore-fleetreview|Fleet Review]], and she has not told Yutalush. If the magistrates learn that the clinic has kept a Free Captain alive and said nothing, its neutrality is finished.
:::
