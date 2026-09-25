---
tags:
  - heroes-and-knaves
  - guilded
  - administration
  - character
name:
  full: Kallíxenos Paraklávos
  title: ""
  given: Kallíxenos
  clan: Paraklávos
  home: kostaros
  aliases: []
packFolder: helladbyzaria
shortcode: klxnsprklvs
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Litigant
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: humanflk
  born: 675/10/12
  height: 1.7
  weight: 64
  frame: medium
  appearance:
    eye_color: brown
    hair_color: gray
    skin_color: light
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 12 } }
    - { model: affiliation-sacredforge }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 17 } }
    - { model: skill-helnkscrpt, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 75 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 27 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-txtl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-wood, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-armorgear-wshirt }
    - { model: sohl-sohl-armorgear-wtrsr }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Leather briefcase for documents
      type: miscgear
      system:
        shortcode: leatherbriefcase
        weight: 1
        value: 100
        durability: 3
    - name: Legal reference scrolls
      type: miscgear
      system:
        shortcode: legalreference
        weight: 1
        value: 100
        durability: 3
    - name: Writing materials (ink, quill, parchment)
      type: miscgear
      system:
        shortcode: writingmaterials
        weight: 1
        value: 100
        durability: 3
    - name: Trade agreement copies
      type: miscgear
      system:
        shortcode: tradeagreementcopies
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bpchmd }
  system:
    body:
      structure:
        zones:
          - name: Head
            shortcode: headzone
            probWeight: 1
          - name: Arms
            shortcode: armszone
            probWeight: 4
          - name: Torso
            shortcode: torsozone
            probWeight: 4
          - name: Legs
            shortcode: legszone
            probWeight: 6
        parts:
          - name: Head
            shortcode: headpart
            bodyZoneCode: headzone
            roles:
              - vital
            canHoldItem: false
            probWeight: 1
          - name: Right Arm
            shortcode: rarmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Left Arm
            shortcode: larmpart
            bodyZoneCode: armszone
            roles:
              - manipulator
            canHoldItem: true
            probWeight: 2
          - name: Torso
            shortcode: torsopart
            bodyZoneCode: torsozone
            roles:
              - core
            canHoldItem: false
            probWeight: 4
          - name: Right Leg
            shortcode: rlegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
            canHoldItem: false
            probWeight: 3
          - name: Left Leg
            shortcode: llegpart
            bodyZoneCode: legszone
            roles:
              - locomotor
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
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Eye
            shortcode: leyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Eye
            shortcode: reyeloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Nose
            shortcode: noseloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 5
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Cheek
            shortcode: lcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Cheek
            shortcode: rcheekloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Ear
            shortcode: learloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Ear
            shortcode: rearloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 15
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Mouth
            shortcode: mouthloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Jaw
            shortcode: jawloc
            bodyPartCode: headpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 60
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Neck
            shortcode: neckloc
            bodyPartCode: headpart
            bleedingSusceptibility: high
            amputability: low
            shockValue: 5
            probWeight: 200
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Shoulder
            shortcode: rshldloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Upper Arm
            shortcode: rupaloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Elbow
            shortcode: relbloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Forearm
            shortcode: rfraloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Hand
            shortcode: rhandloc
            bodyPartCode: rarmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Shoulder
            shortcode: lshldloc
            bodyPartCode: larmpart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 3
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Upper Arm
            shortcode: lupaloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Elbow
            shortcode: lelbloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Forearm
            shortcode: lfraloc
            bodyPartCode: larmpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Hand
            shortcode: lhandloc
            bodyPartCode: larmpart
            bleedingSusceptibility: none
            amputability: high
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Thorax
            shortcode: thrxloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Abdomen
            shortcode: abdmnloc
            bodyPartCode: torsopart
            bleedingSusceptibility: high
            amputability: none
            shockValue: 4
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Pelvis
            shortcode: plvisloc
            bodyPartCode: torsopart
            bleedingSusceptibility: medium
            amputability: none
            shockValue: 4
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Thigh
            shortcode: rthghloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Knee
            shortcode: rkneeloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Calf
            shortcode: rcalfloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Right Foot
            shortcode: rfootloc
            bodyPartCode: rlegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Thigh
            shortcode: lthghloc
            bodyPartCode: llegpart
            bleedingSusceptibility: medium
            amputability: low
            shockValue: 3
            probWeight: 40
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Knee
            shortcode: lkneeloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 2
            probWeight: 10
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Calf
            shortcode: lcalfloc
            bodyPartCode: llegpart
            bleedingSusceptibility: low
            amputability: medium
            shockValue: 1
            probWeight: 30
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
          - name: Left Foot
            shortcode: lfootloc
            bodyPartCode: llegpart
            bleedingSusceptibility: none
            amputability: medium
            shockValue: 2
            probWeight: 20
            protectionBase:
              blunt: 0
              edged: 0
              piercing: 0
              fire: 0
      weight:
        base: null
        calc: "(9 * str) + 50"
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

![[klxnsprklvs|Kallíxenos Paraklávos]]{float: top-left}

Kallíxenos stands 5'7" tall with a medium build. He has light weathered skin, gray hair, and brown eyes. His features include a diamond-shaped face, a hawkish nose, a pointed chin, well-defined lips, strong brows, and prominent cheeks.

# Dossier {#dossier}

Born the son of a successful merchant, Kallíxenos showed early aptitude for rhetoric and logic. His family secured him apprenticeship with **Advocate Chrysandáhr**, the most feared litigant in the Byzarian League's commercial courts. Chrysandáhr was a harsh master but brilliant, training Kallíxenos in the arts of argumentation, negotiation, and the complex web of commercial law that governed the League.

By his early twenties, Kallíxenos had established himself as a feared advocate, known for his ability to find previously unnoticed clauses in contracts and his uncanny ability to sway juries through precise logic presented with devastating eloquence. Over the next two decades, he built an empire of influence, representing major merchant houses, shipping concerns, and craftsmen's guilds. He accumulated wealth, power, and knowledge of the League's secrets—information that could destroy lesser figures.

Five years ago, he was brought before the council accused of using improper methods to win cases. The accusation was carefully orchestrated by a rival advocate and a merchant house he had defeated in court. Rather than face the scandal, Kallíxenos accepted a settlement that required him to step back from directly arguing cases. Now forty-five, he acts primarily as an advisor and mentor to younger litigants, still wielding considerable power behind the scenes, though with somewhat diminished public prominence. The experience left him bitter about the capriciousness of reputation and honor in commercial society.

## Psyche

### Personality

Kallíxenos is charming by trade—intelligent, thoughtful, and capable of making anyone feel valued during conversation. He is an excellent listener, remembering details that others forget, using this information to build trust and a hold over people. He mentors younger advocates with real dedication, believing he is grooming the next generation of legal minds who will surpass him.

The affability covers a deep cynicism. He views the courts as fundamentally corrupt, commerce as inherently predatory, and most people as fundamentally self-interested. He manipulates and maneuvers constantly, finding it almost impossible to trust anyone completely. His relationships with those close to him are cordial but carefully controlled, never truly open. The forced reduction in his public role was a humiliation he has not entirely come to terms with, and it has hardened what was already a somewhat cold personality.

### Motivation

Kallíxenos is driven by the desire to regain his prominent position within the League through indirect means—to be the invisible architect of victories, the secret strategist behind others' successes. He seeks to prove that his reduction was merely temporary, that he remains the preeminent legal mind in the region. More deeply, he is motivated by the accumulation of power and information; he collects secrets the way other men collect wealth, finding the knowledge itself more satisfying than money.

### Strengths

- **Master of Law**: His law skill, with five multipliers, and his reasoning make him without equal in understanding the letter and spirit of commercial contracts and regulations. He can find loopholes others miss.
- **Exceptional Orator**: His discourse and eloquence allow him to present arguments with compelling clarity that sways juries and negotiating partners alike.
- **Strategic Thinker**: His combination of strong reasoning, will, and extensive practical experience makes him able to plan complex campaigns many moves in advance.
- **Networked**: His decades in the League have given him connections throughout the merchant houses. Few merchants or advocates operate without considering his potential involvement or opposition.
- **Diplomatic Protocol**: His heraldry and folklore make him well-versed in proper procedure and tradition, allowing him to work within (and sometimes exploit) formal structures.

### Weaknesses

- **Overly Rigid Analysis**: His reliance on logical analysis sometimes prevents him from understanding or accepting that people are motivated by emotion as much as reason. He dismisses unconventional approaches without fully considering them.
- **Limited Physical Capability**: His weak strength and poor agility leave him vulnerable in physical confrontation. He is entirely dependent on others for protection.
- **Burned Bridges**: His cynicism and occasional betrayal of allies in pursuit of advantage have created enemies. Not everyone he has defeated remains friendly.
- **Political Vulnerability**: His forced reduction in prominence remains a sore subject, and his enemies could potentially orchestrate another scandal if given the opportunity.
- **Isolation**: His inability to truly trust others means he lacks the kind of true allies who would support him unconditionally in a crisis.

## Social

### Patrons

- **The Litigant's Guild**: Official organization that still employs him in advisory capacity, though his role is more limited than in his glory days.
- **Lord Merchant Vasilis**: A major trader whose commercial interests Kallíxenos has protected through countless suits at law, maintaining a mutually beneficial relationship of considerable depth.
- **The Byzarian Consortium of Shipping Merchants**: A trade organization that regularly seeks his counsel on the League's trade rules and how to turn them against rivals.

### Enemies

- **Advocate Demetráz**: Younger, more charismatic rival who has been slowly taking Kallíxenos's clients and position. Demetráz orchestrated the scandal that forced Kallíxenos's reduction.
- **House Malassian**: A merchant dynasty Kallíxenos once defeated decisively in court, causing them significant financial harm. They have long memories and resources for vengeance.

### Affiliations

- **The Litigant's Guild of Byzaría**: Official organization governing advocates and pleaders in commercial law.
- **The Council of Master Advocates**: Informal organization of senior litigants who meet to discuss precedent and strategy, though Kallíxenos's position within it has weakened.

## Plot Hooks

1. **The Incriminating Evidence**: A clerk from Kallíxenos's earlier years arrives with evidence that some of his greatest victories were achieved through technically illegal methods—suppressed witnesses, forged documents, corrupted judges. The clerk is either blackmailing him or has been sent by rivals. Kallíxenos must determine the truth while protecting his legacy and considering whether justice might actually require that he face consequences for past actions.

2. **The Impossible Defense**: A client approaches Kallíxenos with a seemingly unwinnable case—they are accused of a crime that carries automatic forfeiture of all property and exile. The evidence against them appears overwhelming, but Kallíxenos realizes the accusation is politically motivated, meant to eliminate a rival of someone powerful. He can take the case knowing that success might make powerful enemies and that the fee will never justify the risk, or turn it away.

3. **The Successor's Rebellion**: A young advocate he mentored approaches him with evidence that his own mentor, Advocate Chrysandáhr, was corrupt and used illegal methods even more egregiously than Kallíxenos himself. The question becomes whether Kallíxenos will help cover up this truth (protecting his own reputation as Chrysandáhr's student) or expose it (potentially undermining the entire foundation of his standing and training).

4. **Demetráz's Fall**: Evidence emerges that Advocate Demetráz, his rival, orchestrated the scandal against Kallíxenos and is currently engaged in even more serious corruptions. Kallíxenos has the means to destroy him through legal action—but doing so would require him to expose evidence that would also implicate him in the original scandal. The choice is between revenge and self-preservation.

5. **The Shadow Counsel**: An anonymous patron offers Kallíxenos extraordinary payment to act as legal advisor to a merchant operation that appears legitimate on the surface but whose true operations clearly venture into criminal activity. The work is intellectually stimulating, the pay is life-changing, and the patron knows enough about his past indiscretions to compel obedience. Kallíxenos can accept and risk becoming entangled with outright crime, or refuse and face exposure of his secrets.
