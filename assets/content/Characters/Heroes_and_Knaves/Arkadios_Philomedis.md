---
tags:
  - heroes-and-knaves
  - soldiery
  - character
name:
  full: Arkádios Philomédis
  title: ""
  given: Arkádios
  clan: Philomédis
  home: chrysamar
  aliases: []
packFolder: helladbyzaria
shortcode: arkdsphlmds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Mercenary
  stations: []
  lore:
    - commonerrnk
  homes:
    - byzariargn
  affiliations:
    - byzarianlg
  gender: male
  species: null
  born: 675/4/2
  height: 1.93
  weight: 88.9
  frame: heavy
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a tattoo of a serpent on the back
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 17 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-pfmy, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-hide, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-mtlc, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-mill, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-weapongear-baxe }
    - { model: sohl-sohl-weapongear-knsh }
    - { model: sohl-sohl-armorgear-plbreast }
    - { model: sohl-sohl-armorgear-plgrvs }
    - { model: sohl-sohl-armorgear-plkncp }
    - { model: sohl-sohl-armorgear-plspld }
    - { model: sohl-sohl-armorgear-plvamb }
    - { model: sohl-sohl-armorgear-pl34hlm }
    - name: Healing poultices (field dressings)
      type: miscgear
      system:
        shortcode: healingpoultices
        quantity: 6
        value: 4
        weight: 1
        durability: 3
    - { model: sohl-sohl-miscgear-hvybdrl }
    - { model: sohl-sohl-miscgear-hvyblkt }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 3 } }
    - { model: sohl-sohl-containergear-wtrskin }
    - { model: sohl-sohl-miscgear-tndrbx }
    - name: Personal seal and insignia
      type: miscgear
      system:
        shortcode: personalseal
        value: 2
        weight: 1
        durability: 3
    - { model: sohl-sohl-containergear-backpk }
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

![[arkdsphlmds|Arkádios Philomédis]]{float: top-left}

Arkádios stands 6'4" tall with a heavy build. He has tanned weathered skin, black hair, and dark brown eyes. His features include a narrow face, an aquiline nose, a pointed chin, well-defined lips, dark brows, sculpted cheeks. A distinguishing mark is a tattoo of a serpent on the back.

# Dossier {#dossier}

## Background

### Blood and Training

Born to a modest trading family in the [[affiliation-byzarianlg|Byzarian League]], Arkádios showed early aptitude for violence—an unfortunate gift in a peaceful child. At fourteen, his parents, despairing of his tendency to solve every problem through physical domination, contracted him to the Silver Vipers as an apprentice. The company refined his raw ferocity into disciplined lethality, and Arkádios discovered that mercenary life suited his nature perfectly. No moral ambiguity here—kill those you're hired to kill, protect those you're paid to protect, and ask no unnecessary questions.

### The Rise of the Silver Vipers

For twenty years, Arkádios rose through the Vipers' ranks, distinguishing himself through an almost supernatural combination of courage and strategic brilliance. He commanded the Viper Guard, an elite unit of fifty warriors who never suffered a contracted defeat. Battles were won not through superior numbers but through Arkádios's capacity to identify a foe's psychological weaknesses and exploit them ruthlessly. He became known as "the Serpent's Head"—the decisive instrument of the Vipers' will.

### The Dissolution and After

When the Silver Vipers disbanded fifteen years ago amid rumors of internal schisms and a catastrophically failed contract, Arkádios found himself adrift. Rather than attach himself to another company as a subordinate officer, he established independent operations, taking contracts directly from nobles, merchant houses, and foreign powers. His small but perfectly trained force—never exceeding twenty warriors—commands premium wages. More importantly, working independently allows him to be selective about his contracts, a luxury his growing conscience increasingly demands.

## Psyche

### Personality

Arkádios maintains an exterior of professional detachment bordering on coldness, viewing emotional engagement as a liability in his line of work. He speaks in measured tones, choosing words with military precision. Subordinates respect him without quite liking him—he is neither cruel nor generous, simply efficient.

Beneath this controlled exterior, however, Arkádios wrestles with the accumulated weight of his choices. Each contract leaves a small scar on his conscience, and the older he grows, the more these scars itch. He drinks more than is healthy, and his nights are often sleepless. Those few who have earned his trust see glimpses of a man fundamentally troubled by what he has become—a man wondering if a lifetime of warfare can ever be balanced by acts of mercy.

### Motivation

Arkádios no longer fights merely for gold, though he insists this to himself and others. Rather, he seeks validation that his skills, his terrible capabilities, serve some larger purpose beyond accumulating wealth. He chooses contracts that feel defensible—protecting the innocent from bandits, crushing criminal organizations, defending borders from invasion. He refuses work that targets civilians or involves slavery. These self-imposed restrictions frustrate his more ambitious peers but represent Arkádios's private attempt to build a moral framework within an immoral profession. Deep down, he fears that redemption is impossible, but this fear drives him forward, searching for contracts that might prove him wrong.

### Strengths

- **Master of Blades and Strategy**: Arkádios's combat skills are legendary throughout the League. His understanding of battlefield tactics, feint and counter, formation and breakpoint, gives him advantages independent of physical strength.
- **Exceptional Physical Prowess**: Strength, endurance, and agility combine with the tactical discipline to make him nearly unstoppable in direct confrontation. Few living swordsmen could match him.
- **Unflappable Command Presence**: Soldiers fight harder and with greater courage under Arkádios's command. His reputation for never losing a contract creates confidence that borders on the supernatural.
- **Intricate Knowledge of Warfare**: His deep expertise in military strategy, fortification assessment, and tactical deception makes him invaluable in siege situations and complex military engagements.
- **Network of Mercenary Contacts**: Decades in the profession have given him connections throughout the League and beyond—intelligence sources, safe houses, and allies in unexpected places.

### Weaknesses

- **Moral Burden**: The accumulating weight of questionable decisions haunts him. He second-guesses choices, hesitates at crucial moments, and suffers from terrible nightmares.
- **Limited Diplomatic Skills**: His tendency toward bluntness and his difficulty with emotional intelligence make him a poor negotiator outside of strictly military matters. Business deals often require intermediaries.
- **Growing Cynicism**: His increasing doubt about the nature of his work sometimes manifests as paralysis. He becomes unable to commit to new contracts, wondering if he is simply becoming a tool of others' ambitions.
- **Physical Decline**: At forty-five, Arkádios's reflexes, though still exceptional, no longer possess the superhuman quickness of his youth. Younger fighters are beginning to match him.
- **Isolation**: His profession and temperament have left him without close relationships. This loneliness, in moments of weakness, nearly overwhelms him.

## Social

### Patrons

- **Lord Commander Vasilis of the [[place-eastrnmrch|Eastern March]]**: A powerful nobleman who contracts Arkádios whenever border security becomes critical. They maintain a relationship of mutual respect spanning two decades.
- **Merchant Consortium of the Golden Coast**: Several trading families maintain Arkádios under retainer for protection against piracy and rival merchant houses. The payments are generous but steady.
- **Duke Stávron Pylíkot**: An aging but still-powerful aristocrat who employs Arkádios for sensitive security work, often involving protection from internal conspiracies within the court.

### Enemies

- **Kael the Dirge, Captain of the Crimson Wolves**: A rival mercenary company leader whose contract was chosen over his own by a major client. Kael harbors deep resentment and seeks opportunities to undermine Arkádios's reputation.
- **The Shadow Syndicate**: A criminal organization whose operations Arkádios destroyed on behalf of a client five years ago. Several high-ranking members survive and hunger for vengeance.

### Affiliations

- **The Byzarian League**: Citizen in good standing, though his mercenary status makes him somewhat of an outsider in traditional society.
- **The Independent Mercenary Council**: A loose association of mercenary captains who maintain professional standards and negotiate pay rates. Arkádios holds significant influence.
- **The Order of Jánus (Order Aspect)**: A practicing worshipper who attends temples regularly, finding the god's emphasis on structure and discipline spiritually resonant with his own worldview.

## Plot Hooks

1. **The Contract Nobody Should Take**: A mysterious client offers Arkádios an astronomical sum—enough to retire in absolute luxury—for a contract so vague and suspicious that every instinct screams danger. The target's identity remains deliberately obscured. As Arkádios investigates, he discovers the true nature of the contract: assassination of a political figure that would trigger a regional war. He must decide whether to accept and execute the contract that would finally provide financial security, or reject it and maintain the moral line he has desperately tried to hold.

2. **The Deserter's Daughter**: A young woman approaches Arkádios claiming to be the daughter of **Langárion Kyriákash**, a soldier he fought alongside in the Silver Vipers who deserted the company under mysterious circumstances decades ago. She carries a letter purportedly from her father, begging Arkádios to investigate something hidden in the Vipers' old fortress. Investigation leads to the discovery of a conspiracy that goes to the highest levels of the League—one that both he and Vex were manipulated into participating.

3. **The Redemption Contract**: A noble priest of Jánus approaches Arkádios with a contract: protect a refugee camp of displaced civilians from raiders and warlords—with no payment, only spiritual counsel about the possibility of redemption. The contract becomes personal when Arkádios discovers that the camp shelters women and children from a faction he himself once fought for, and his presence there creates dangerous division among the refugees who fear him.

4. **The Immortal Warrior**: During a contract in a remote region, Arkádios encounters a warrior of impossible age—a man who claims to have fought for over two centuries and to recognize Arkádios as his reincarnated rival. The mysterious fighter challenges Arkádios to a series of tests, hinting that survival requires understanding a truth about himself and his past that has been deliberately hidden. The physical and psychological tests force Arkádios to confront the possibility that his memories may be false.

5. **The Final Battle of the Silver Vipers**: Evidence surfaces suggesting that the Silver Vipers were destroyed not from internal schism as believed, but through deliberate sabotage by someone within the organization. Arkádios, driven by loyalty to his former brothers, begins investigating the truth. This quest draws him into conflict with powerful entities who benefit from the Vipers' destruction and who will do anything to keep the truth buried—including hiring rivals to eliminate him.
