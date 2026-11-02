---
shortcode: snrshbhmrn
name: {full: Sunarsha Bhimarna}
type: being
subType: npc
tags: [heroes-and-knaves, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [courtier, warrior]
  occupation: Samonta
  lore: []
  culture: vedyariclt
  homes: [bharyastan2]
  affiliations: {bharyastan: {rank: 6}, vrnkpnthn: {rank: 1}}
  gender: male
  species: humanflk
  born: "668.120"
  height: 5' 10"
  weight: 190 lbs
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: grey
    skin_color: tawny
    complexion: [ruddy]
    extra_features: []
  packFolder: ankarisvedyara
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 45}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-trak, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 25}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 35}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 25}}
    - {model: skill-vdykshrscrpt, system: {masteryLevelBase: 50}}
    - {model: weapongear-shkhlynswd}
    - {model: sohl-sohl-weapongear-lnc}
    - {model: weapongear-rhnhdshld}
    - {model: sohl-sohl-armorgear-slktunic}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltkboot}
    - {model: sohl-sohl-armorgear-wmntl}
    - {model: sohl-sohl-miscgear-sealsignat}
    - {model: miscgear-chendra, system: {quantity: 30}}
    - {model: sohl-sohl-containergear-bpchlg}
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

Sunarsha is a heavy, florid man of 5'10", tawny-skinned and ruddy, with grey hair worn long and tied back and brown eyes that crease when he smiles, which is often. He dresses in a silk tunic and a wool mantle at the palace and in the same clothes on the plain, because he says a man who changes his coat between two courts is telling both of them something. He rides a big valley horse and carries a lance and a rhinoceros-hide shield on a muster day, and on every other day a signet ring and a purse of Chendrapuri silver.

# Dossier {#dossier}

## Two Countries

[[affiliation-bharyastan|The Kingdom of Bharyastan]] holds eight valleys and a hundred and twenty thousand people in the upland east of [[place-goldmountain|the Gold Mountain]], and it is ruled by a Maharava with a martial council of the eight valley chieftains, each a **Samonta**. Sunarsha is the Samonta of the lowest of the eight, the valley whose stream runs down to the plain, and he holds estates on the plain itself below [[affiliation-suvrgrjnpd|the Janpoda of the Gold Mountain]]'s wedge of upland, outside the janpoda's territory and outside its constitution.

A Samonta with land in both countries is the man both courts send for when something needs settling quietly, and for twenty years he has been the man they send for. He has settled a boundary between a Bharyastani village and a Suvargeri one, a horse-thief's ransom, a marriage, and the price of the grain the kingdom buys from the plain a season ahead for the muster. He is good at it. He is liked in both places and trusted in neither, and he knows the difference.

## The Gold Treaty

Bharyastan is bound by standing treaty to send military assistance to Suvargeri in exchange for an annual gold tribute. The treaty is eight hundred years old, and it has been renewed without argument at every succession on either side since [Dursabira]{.name data-type="being/npc"} swore it after [[lore-lastgldrd|the Last Gold Raid]]. Bharyastan keeps four hundred horse it could not otherwise afford. Suvargeri keeps three hundred guards of its own and would rather not keep three thousand.

The weight of the tribute has not changed in eight hundred years. The cost of the horse has. Grain for the muster is bought from the plain at the plain's price, remounts come from the march at the march's price, and Shikhalayan steel goes up every decade. The difference between the tribute and the cost of the horse is paid by the valleys, in barley, walnut timber and their young men's service, and Sunarsha's valley pays more of it than any other, because it is the one nearest the plain.

He has been doing the arithmetic for thirty years, and he has done it in front of the martial council twice.

## The Next Succession

The Maharava of Bharyastan, [Pritivita]{.name data-type="being/npc"}, is old, and his heir, the **Yuvarava** [Kritakana]{.name data-type="being/npc"}, has never ridden the tribute road. The treaty is renewed at every succession on either side, and the next renewal is coming.

Sunarsha wants the gold tribute's weight raised at the next succession, or the treaty let lapse. He has said the second half of that aloud only once, round a fire on the tribute road a day above [[place-raiderscairn|the Raiders' Cairn]], and it has been repeated in every valley since. He does not want the treaty to lapse. He wants Suvargeri to believe it might, because a janpoda that keeps three hundred guards would pay a great deal not to need three thousand. And there are buyers for four hundred horse: the patron kingdoms of the plain, Chendrapur's houses, and [[affiliation-mrchntclctvvdyr|the Merchant Collective]], whose factors have no standing to weigh the tribute and would like to.

The tribute leaves the [Gold Constitution]{.name data-type="lore/law"}'s reach as tribute and not as trade, and the [[affiliation-assmblycmpct|Assembly of the Compact]] has raised the point and never raised it twice in the same decade. Sunarsha has written to the Assembly's men too.

## Psyche

### Personality

Sunarsha is genial, sociable, generous with food and drink, and never off duty. He likes people and is curious about them, and he remembers every favor done and owed. He is an honest broker in the narrow sense: he does not lie about what he has been told. He does not always say who told him.

He is proud of his valley and impatient with the court at [[place-bharyastan2|Bharyastan]], which he considers forty people who have never bought grain.

### Motivation

He wants the gold tribute's weight raised at the next succession, or the treaty let lapse.

### Strengths

Two Courts
: He has standing at both, and access to the Maharava's council, Suvargeri's sabhra and the plain's markets.

Negotiation
: He is patient, well informed and very hard to bluff.

The Horse
: He was raised in the saddle and rides with the four hundred at muster.

### Weaknesses

Trusted by Neither
: Both courts use him, and both would disown him the moment it was convenient.

The Fire
: He said "lapse" aloud, once. The heir has heard it, and so have the Twenty-Eight of Suvargeri.

Indulgence
: He eats and drinks too well, and he is heavier and slower than he was at the muster ten years ago.

## Social

### Patrons and Allies

The chieftains of the lower valleys
: Who pay the same difference and agree with his arithmetic, if not with his methods.

A Collective factor at Chendrapur
: Who has asked him what four hundred horse would cost by the year.

### Rivals

[[being-vrnntklnt|Vrinnati Kalanat]]
: A rider of the four hundred who rides the tribute road every spring and wants the treaty kept.

The Twenty-Eight of Suvargeri
: The hereditary panning families, who regard the treaty as fixed and Sunarsha as an extortioner.

### Affiliations

[[affiliation-bharyastan|Bharyastan]]
: Samonta of the lowest valley, sitting on the martial council, with estates on the plain below Suvargeri.

[[affiliation-vrnkpnthn|Varnuka Pantheon]]
: He gives handsomely at the Mahajaya temple in the town, and attends its rites at the muster and at nothing else.

## Plot Hooks

The Price of Horse
: Sunarsha hires the party to ride down to Chendrapur and carry a sealed letter to a Collective factor, asking what four hundred horse would fetch by the year. The letter is a bluff, and he wants Suvargeri to intercept it. He has not told the party that.

The Heir's Ride
: The Yuvarava Kritakana has never ridden the tribute road. Sunarsha arranges for him to ride it this spring, with the party in the escort, so that the heir sees how much the gold costs to carry. Someone in the court would rather the heir did not come back.

The Boundary
: A Suvargeri village and a Bharyastani one are fighting over a terrace that both claim, and both courts send for Sunarsha. He settles it in a way that makes the Suvargeri sabhra owe him a favor before the renewal. The losing village wants the party to find out what he was paid.
