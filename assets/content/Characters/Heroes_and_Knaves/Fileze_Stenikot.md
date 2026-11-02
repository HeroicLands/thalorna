---
shortcode: fylzstnkt
name: {full: Fileze Stenikot, given: Fileze, clan: Stenikot}
type: being
subType: character
tags: [heroes-and-knaves, soldiery]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [warrior]
  occupation: Mercenary
  lore: []
  culture: byzarianclt
  homes: [kostaros]
  affiliations: {byzarianlg: {rank: 3}, olvenia: {rank: 1}}
  gender: female
  species: humanflk
  born: 691.65
  height: 5' 10"
  weight: 171 lbs
  frame: medium
  appearance:
    eye_color: green
    hair_color: brown
    skin_color: tanned
    complexion: [clear]
    extra_features: []
  packFolder: helladbyzaria
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 10}}
    - {model: sohl-sohl-skill-brew, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 10}}
    - {model: sohl-sohl-skill-anmcft, system: {masteryLevelBase: 15}}
    - {model: sohl-sohl-skill-fish, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-skill-smsh, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-hide, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-masn, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-wpnc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-weapongear-brdswd}
    - {model: sohl-sohl-weapongear-rndsh}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-mshirt}
    - {model: sohl-sohl-armorgear-mleg}
    - {model: sohl-sohl-armorgear-ltshoe}
    - {model: sohl-sohl-armorgear-ltcloak}
    - name: Herbal remedies and healing poultices
      type: miscgear
      system: {shortcode: herbalremedies, quantity: 3, weight: 1, value: 100, durability: 3}
    - name: Survival gear (rope, hooks, line)
      type: miscgear
      system: {shortcode: survivalgear, weight: 0.4, value: 100, durability: 3}
    - name: Whetstone for blade maintenance
      type: miscgear
      system: {shortcode: whetstoneforblade, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-torch, system: {quantity: 2}}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - name: Personal effects (old letters, mementos)
      type: miscgear
      system: {shortcode: personaleffects, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-containergear-backpk}
    - {model: sohl-sohl-containergear-wtrskin}
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

![[fylzstnkt|Fileze Stenikot]]{float=top-left}

Fileze stands 5'10" tall with a medium build. She has sun-tanned skin, brown hair, and green eyes. Her features include an oval face, a strong nose, a sharp jawline, well-defined lips, arched brows, hollow cheeks.

# Dossier {#dossier}

Fileze was born into a merchant family of middling prosperity in the [[affiliation-byzarianlg|Bizarian League]], the third of four daughters. Where her sisters were groomed for advantageous marriages, Fileze showed an early talent for the martial arts—a transgression her father initially forbade. When she was fourteen, bandits attacked a merchant convoy that included her aunt. Fileze's mother, a woman of unexpected steel, taught her daughter in secret, and by sixteen, Fileze had proven her worth beyond argument by helping defend a village against raiders.

Rather than accept a husband or business partnership, Fileze formally joined [The Mercenaries' Guild of the Bizarian League]{.name data-type="affiliation/guild"} at eighteen, much to her father's dismay. She spent her twenties undertaking increasingly dangerous contracts: guarding caravans through bandit-infested regions, protecting settlements threatened by brigands, and slowly building a reputation as someone with both skill and an uncommon moral compass. Unlike many mercenaries, Fileze refuses contracts that would harm innocents, has never accepted a job involving slavery or trafficking, and actively works against those who exploit the weak.

Now twenty-nine, she maintains her guild membership but operates with unusual independence, selecting clients based on merit rather than payment. She has become something between a mercenary and a hero-for-hire, drawing both respect and resentment from her peers.

## Psyche

### Personality

Fileze is direct to the point of bluntness, valuing honesty over courtesy. This can make her seem cold to those who prefer social niceties, but those who work with her come to understand that her straightforwardness is not rudeness but rather respect for others' intelligence. She says what she means and trusts others to do the same. In combat, she is swift and decisive. In conversation, she listens more than she speaks, seeking to understand others' perspectives.

Her greatest strength may be her empathy—a trait unusual among mercenaries. She remembers the faces of those she has protected, follows up on their fates, and takes personal responsibility for her failures. This empathy is not sentimentality; it is disciplined compassion that drives her toward justice.

### Motivation

Fileze is motivated by a desire to protect those who cannot protect themselves. She has seen what unchecked violence and exploitation can do to communities and has made it her personal mission to be a counterweight to that darkness. She fights not for gold—though she accepts fair payment—but for the satisfaction of seeing families safe and communities restored. There is also a personal drive: a need to prove that a woman can be as strong a warrior and leader as any man, and that strength can be wielded with integrity.

### Strengths

Master Swordswoman
: Fileze's skill with a longsword and shield is outstanding. Her technique is flawless, her reflexes sharp, and her instincts honed through countless real combat encounters.

Tactical Brilliance
: She can assess a situation rapidly and deploy limited resources to maximum effect. She has trained bandits with far larger numbers through clever positioning and pressure on the enemy's nerves.

Natural Leader
: Her presence inspires confidence. Even untrained militia follow her orders without hesitation because she radiates competence and concern for their welfare.

Endurance
: Years of conditioning give her stamina in prolonged combat or travel. She can maintain fighting effectiveness longer than most.

Reading People
: Her ability to read people allows her to negotiate effectively, understand civilian needs, and identify trustworthy allies quickly.

### Weaknesses

Idealism Liability
: Fileze's moral commitments sometimes make her vulnerable to clients who manipulate her sense of justice. She has accepted disadvantageous contracts because she believed in the cause.

Difficulty with Cruelty
: She cannot stomach unnecessary brutality, hesitating at moments requiring ruthlessness. This has cost her contracts and, occasionally, has prevented her from achieving objectives.

Pride in Reputation
: Her need to maintain her status as a mercenary of principle makes her inflexible in negotiations and sometimes leads her to accept risks unnecessarily to preserve her honor.

Limited Resources
: Operating independently and refusing wealthy but morally questionable patrons means she often works with limited funds and equipment compared to less scrupulous mercenaries.

Emotional Exhaustion
: The weight of protecting others and witnessing suffering takes a toll. She occasionally struggles with despair when she realizes her efforts cannot save everyone.

## Social

### Patrons

[The Village Council of Marshfeld]{.name data-type="affiliation/governmental"}
: An agrarian community in [[place-marshfeld|Marshfeld]] that hires Fileze annually to protect against bandits and raiders. **Elder Magistrate [[being-razaagorikot|Raza]]** has become a mentor figure, offering wisdom and support.

Lady [[being-tulvazeameli|Tulvazea Melitakit]]
: A noblewoman of conscience who uses her influence to connect Fileze with communities in need of protection. She asks only that Fileze help those who cannot afford formal mercenary rates.

[The Scholars' Collective of the Archive]{.name data-type="affiliation"}
: Dangerous knowledge sometimes requires protection. The head archivist, **Master Scholarch [Menandáhr]{.name data-type="being/npc"}**, retains Fileze for sensitive operations involving recovered texts or persecuted scholars.

### Enemies

[The Crimson Brotherhood]{.name data-type="affiliation/criminal"}
: A slavering organization operating throughout the **Bizarian League**. Their leader, **Captain [[being-tchirnaleonv|Chirnaleon Validek]]**, has marked Fileze for death after she dismantled two of their trafficking operations.

Mercenary Lord [[being-ruzhvelissap|Ruzhvelis Sapipidek]]
: A rival who views her moral stance as weakness and profit-loss. He has actively worked to undermine her contracts and damage her reputation.

The corrupt [House of Magistrates]{.name data-type="affiliation/governmental"}
: City officials who profit from allowing crime to flourish. They view Fileze as a threat to their comfortable arrangements.

### Affiliations

The Mercenaries' Guild of the Bizarian League
: Fileze maintains full membership, though she operates with unusual independence.

[The Protectors' Circle]{.name data-type="affiliation"}
: An informal network of conscientious mercenaries who share information about dangerous criminals and support one another's defensive operations.

## Plot Hooks

The Impossible Contract
: A young scholar offers Fileze an extraordinary sum to protect someone for one week—with the catch that she cannot know who they are protecting or why they are in danger. The mystery deepens when she realizes her client may be **prophetically gifted** and the danger comes from the [Bizarian Inquisition]{.name data-type="affiliation"} itself, forcing her into direct conflict with official authority.

The Ghost Brigade
: Fileze encounters a group of former soldiers—women mostly—who have begun conducting vigilante operations against violent criminals the official justice system refuses to prosecute. Their leader, **Captain [[being-dreliapetrik|Drelia Petrikot]]**, asks Fileze to join formally or at minimum to train them. Accepting means becoming an outlaw; refusing means abandoning those who could do tremendous good.

The Infiltration
: Lady Tulvazea asks Fileze to accomplish something previously thought impossible: infiltrate the **Crimson Brotherhood** as a criminal-for-hire, identify their actual leadership structure, and gather evidence for prosecution. The operation would require Fileze to commit heinous acts as cover—forcing her to question whether her moral code can bend without breaking.

The Rival's Challenge
: **Ruzhvelis Sapipidek** publicly challenges Fileze to single combat, winner takes both their reputations. He has carefully orchestrated the challenge to occur during a time when she cannot simply refuse without losing the confidence of the mercenary community. Beyond the personal stakes, Fileze suspects he has some larger purpose in forcing this confrontation.

The Refugee Crisis
: A sudden catastrophe—plague, war, or magical disaster—displaces an entire region's population. The mercenary guild offers substantial contracts to those willing to handle the chaos. Fileze discovers that some "safety operations" are actually harvesting refugees for slavery. She must handle politics within her own guild while protecting the vulnerable and exposing corruption from within the organization she has relied upon.
