---
shortcode: prthnblthl
name: {full: Parthun Pelthal, given: Parthun, clan: Pelthal}
type: being
subType: character
description: "The keeper of the sheriff's rolls at Valdun, the most powerful man in the hall who does not hold its seal."
tags: [heroes-and-knaves, guilded, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar, courtier]
  occupation: Bureaucrat
  lore: []
  culture: elavendriclt
  homes: [valdun]
  affiliations: {kngdmlvndr: {rank: 2}, ardavon: {rank: 1}}
  gender: male
  species: humanflk
  born: 683.142
  height: 5' 9"
  weight: 148 lbs
  frame: medium
  appearance:
    eye_color: brown
    hair_color: dark_brown
    skin_color: tanned
    complexion: [ruddy]
    extra_features: [a scar on the left foot]
  packFolder: aureldiaelavendre
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 8}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 11}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 14}}
    - {model: skill-thrvrdhscrpt, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 27}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-agri, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 65}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 9}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-cmcs, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-weapongear-kni}
    - {model: sohl-sohl-armorgear-lshirt}
    - {model: sohl-sohl-armorgear-wtrsr}
    - {model: sohl-sohl-armorgear-ltshoe}
    - name: Ink and quills (fine quality)
      type: miscgear
      system: {shortcode: inkandquills, weight: 1, value: 100, durability: 3}
    - name: Sealing wax and seal
      type: miscgear
      system: {shortcode: sealingwaxandseal, weight: 1, value: 100, durability: 3}
    - name: Local laws and legal references (book)
      type: miscgear
      system: {shortcode: locallawsandlegal, weight: 1, value: 100, durability: 3}
    - name: Official documents (collection)
      type: miscgear
      system: {shortcode: officialdocuments, quantity: 5, weight: 1, value: 100, durability: 3}
    - name: Parchment (writing supplies)
      type: miscgear
      system: {shortcode: parchment, quantity: 6, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - name: Whetstone
      type: miscgear
      system: {shortcode: whetstone, weight: 1, value: 100, durability: 3}
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

![[prthnblthl|Parthun Pelthal]]{float=top-left}

Parthun Pelthal is a 36-year-old man who stands 5'9" tall and is of medium build. He has a heart-shaped face with a small nose, a gentle jawline and dark brows. His brown eyes give nothing away, and his tanned skin is ruddy at the cheek. His dark brown hair is cut close, and he walks with a slight limp from a scar on the left foot.

# Dossier {#dossier}

**Birth in the Shadow of Law**

Parthun Pelthal was born in [[place-valdun|Valdun]], the walled border town of the eastern march of the [[affiliation-kngdmlvndr|Kingdom of Élavendre]], to parents of modest means. His father, [Semroth Pelthal]{.name data-type="being/npc"}, was a minor clerk of the sheriff's hall, and his mother, [Olthe]{.name data-type="being/npc"}, took in washing and mending. Parthun watched his father work the procedures of the crown's officers and learned that behind every writ lay opportunities for those clever enough to use them. His father taught him that power in any system rests less with those who make the rules than with those who keep the rolls.

While other children played at raids, Parthun studied the town's offices. He befriended the clerks of the sheriff's hall, learned the sitting days of the royal court and discovered which officers could be made sympathetic if approached correctly. By his late teens he was helping neighbors through disputes over boundaries, tolls and fair dues, always on the understanding that a favor would be repaid.

**Rise Through the Sheriff's Hall**

At twenty Parthun took a clerkship in the sheriff's hall at Valdun, through a mix of real qualification and the intervention of [[being-lotrenilther|Lotren Ílthernde]], then a gentleman of the town who saw a useful tool in him and who now holds the crown's office of Sheriff in the shire. In sixteen years Parthun has risen to keep the sheriff's rolls: a post that sounds minor and gives him every writ, tally and receipt the hall holds, with the say over how they are filed, found and read. The levy, the road tolls and the wall money all pass through his rolls.

**Current Position and Agenda**

Parthun is the most powerful man in the sheriff's hall who does not hold its seal. Lotren signs what Parthun puts in front of him. Parthun has grown moderately rich by entirely legal means, by methods that would scandalize anyone who does not keep rolls. This winter he has drafted a stall levy on craftspeople who sell outside the fair days, and the treasury at [[place-beravel|Péravel]] has sent a clerk, [[being-kelyrslthr|Kélvira Salthar]], to audit the wall money he has been collecting. He speaks of rising to Gentry and of the shrievalty itself.

:::secret {title="The foot's mark"}
The scar on Parthun's foot dates from five years ago, when he decided that Lotren had become a liability: expensive, demanding and impatient with Parthun's careful methods. He meant to be rid of him by a quiet poisoning. A rival clerk walked into Lotren's study while Parthun was preparing it, the two men fought, and Parthun came out of it with a knife wound in the foot and the rival's silence, bought at a price he still pays. Lotren does not know how close he came. Parthun learned that the best plan is broken by chaos, and now keeps contingencies for everything.

The round sums in the wall money are his. He has skimmed it for years in amounts too small to notice singly, and Kélvira is the first reader of the rolls clever enough to add them up.

**Hook: the second roll.** The rival clerk who saw Parthun in Lotren's study has offered Kélvira a second roll of the wall levy, in his own hand, and the price is protection from Parthun.
:::

## Psyche

### Personality

Parthun is a student of human nature, endlessly fascinated by the mechanisms of motivation and control. In conversation, he is careful and measured, asking probing questions and revealing little about himself unless there is clear advantage to doing so. He keeps the public face of a dedicated servant of the crown, a man committed to the proper functioning of government and the fair application of law. Those who work closely with him, however, recognize his capacity for ruthlessness and his willingness to sacrifice allies if they become inconvenient.

He is not cruel for cruelty's sake, nor does he act out of simple greed or ambition. Rather, he is a pragmatist who has developed a personal philosophy in which morality is subservient to utility. If a rule serves the functioning of society, he will uphold it scrupulously; if a rule hinders the goals he has deemed important, he will work to circumvent it. This makes him both reliable in certain contexts and deeply untrustworthy in others. His rare moments of warmth emerge when he is discussing the elegant logic of administrative systems or when he is sharing quiet hours with people he considers to have truly understood him—such moments are rare indeed.

### Motivation

Parthun seeks to consolidate his power and expand his influence to the highest levels of government. He believes that most people are fundamentally incompetent or corrupt, and that his role is to be the hidden architect directing the machinery of government in ways that prevent catastrophic failure. While he would claim that his ultimate goal is the good of the kingdom, his actual priority is the advancement of his own position and the security of his power base. He has begun to wonder whether a post in the chancery at Péravel might give him more leverage than the shrievalty.

### Strengths

Master of Administrative Systems
: Parthun possesses an encyclopedic knowledge of regulations, precedents, and procedures. He can cite obscure clauses, discover loopholes, and manipulate bureaucratic structures in ways that accomplish his objectives while remaining technically legal.

Strategic Patience
: He is willing to invest years of preparation for advantage that may not be realized for a decade. This long-term perspective allows him to position himself far ahead of more impulsive competitors.

Network and Influence
: Through years of careful cultivation, he has built a network of informants, subordinates, and allies throughout the administrative apparatus. He learns things before official channels, and can arrange for events to occur that appear to be natural bureaucratic processes.

Linguistic Precision
: He has a gift for language—particularly the dense, technical language of law and administration. He can take a regulation and interpret it in multiple ways, or craft language that achieves his goals while satisfying the letter if not the spirit of existing law.

Emotional Control
: His face rarely betrays his actual thoughts or feelings. He is difficult to pressure, intimidate, or manipulate, as his emotions are a tool he consciously controls rather than forces that control him.

### Weaknesses

Physical Limitation
: The scar on his foot leaves him with a slight limp that worsens under stress or extended exertion. He is not suited to physical conflict and would flee rather than fight in most situations.

Reliance on Systems
: Outside of formal bureaucratic structures, his advantages largely disappear. He is at a loss in situations where authority derives from force, lineage, or personal charisma rather than administrative position.

Inability to Inspire Loyalty
: Those who work with Parthun serve him out of fear, obligation, or pragmatic self-interest rather than loyalty or affection. This makes his network fragile if circumstances change.

Visible Advancement Creates Enemies
: As he rises in power, he necessarily displaces others and creates rivals. These displaced people understand how the bureaucratic system works and can potentially use it against him.

Contempt for Others
: His belief in the fundamental incompetence of most people occasionally manifests as arrogance, leading him to underestimate threats or to treat potential allies dismissively.

## Social

### Patrons

[[being-lotrenilther|Lotren Ílthernde]]
: The Sheriff, who got Parthun his clerkship and remains his patron in name. Lotren depends on Parthun to run the hall and suspects that Parthun manages him.

The Chancellor of Élavendre
: The head of the crown's chancery at Péravel has begun to notice the keeper of the rolls at Valdun. Whether this is patronage or the ordinary watching of an unusually capable clerk is not clear.

### Enemies

[[being-ilseviletirv|Magistrate Ílsevile Tírvalnde]]
: A magistrate of the royal court at Valdun who has clashed with Parthun again and again over the reading of writs and rolls, regards him as a danger to the crown's justice and would gladly see him out of the hall.

[[being-kelyrslthr|Kélvira Salthar]]
: The treasury's clerk, who is reading his rolls and trusts none of them.

Displaced clerks
: Men Parthun has edged out of the hall, who know enough of his methods to be dangerous.

### Affiliations

[[affiliation-kngdmlvndr|Kingdom of Élavendre]]
: Parthun is a Freeman of the crown and keeps the rolls of its sheriff's hall at Valdun. His loyalty is to himself.

[[affiliation-ardavon|Faith of Árdavon]]
: He keeps the faith's rites with exact and passionless attention.

## Plot Hooks

The Auditor from Péravel
: Kélvira Salthar is asking far more specific questions than a routine audit warrants, and she has begun examining sums Parthun was sure he had hidden. He wants a party to learn whether she is acting on evidence, on an enemy's word, or on her own, and whether she can be turned.

The Stall Levy
: Parthun's stall levy has the makers under the wall in an uproar, and the toymaker [[being-alyrklmrth|Álira Kálmereth]] is to speak against it before the Sheriff. Parthun hires a party to learn which of the makers mean to do more than speak.

The Blackmail
: Someone has sent Parthun copies of rolls he believed destroyed, and wants a prisoner released from the royal court's cells in return. The sender has arranged for the copies to reach Ílsevile if anything happens to them.

The Drove Inheritance
: A droving family asks Parthun to settle the inheritance of its grazing rights through the rolls. The dispute covers a death that may not have been natural, and both sides are people he cannot afford to offend.

The Room under the Hall
: Masons repairing the sheriff's hall have broken into a sealed room full of rolls from the years of the treaty with the Empire, which were supposed to have been burned. They record what the town gave the legate and where the legion's dead were laid, and the [[affiliation-ordoarcanis|Order]]'s antiquarians, who want to know where an unrusted imperial helmet was found, would pay anything for them.
