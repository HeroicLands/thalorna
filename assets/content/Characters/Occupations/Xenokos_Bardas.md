---
tags:
  - todo-warrior
  - draft
  - soldiery
  - character
name:
  full: Xénokôs Bárdâs
  title: ""
  given: Xénokôs
  clan: Bárdâs
  home: ""
  aliases: []
packFolder: midhalionvylaria
shortcode: xenoksbrds
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Town Guard
  stations: []
  lore:
    - vylarianclt
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: male
  species: null
  age: 22
  birthday: 698/12/18
  height: 1.75
  weight: 60
  frame: light
  appearance:
    eye_color: honey_brown
    hair_color: dark_brown
    skin_color: pale
    complexion: pale
    extra_features:
      - scar across forehead
sohl:
  items:
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: affiliation-arldnpnthn }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 59 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 25 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 23 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 29 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 34 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 43 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 54 } }
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

Xénokôs is young and still growing into himself — twenty-two years old, 5'9", with a light build that makes him look more like a clerk than a guardsman. His dark brown hair is worn longer than regulation permits, falling across his forehead in a way that his sergeant has remarked upon more than once. His honey-brown eyes sit in a pale, almost sallow face that rarely sees sunlight, and a thin scar runs across his forehead from an incident during his first month on duty that he would prefer to forget. His features are fine-boned and Vylarian in the classical sense: high forehead, straight nose, narrow chin. He wears his [[affiliation-provinclys|Alyssa]] district guard uniform — padded tunic, leather bracers, short sword at his hip — with the self-conscious stiffness of someone who has not yet learned to forget he is wearing it.

# Dossier {#dossier}

Xénokôs joined the Alyssa capital district town guard eighteen months ago at twenty years old, fresh from his training and full of idealism about protecting his home city. The idealism has held up better than he expected, though it is being gradually tempered by the reality of keeping the peace in a city of a declining empire. He is lean and restless, and still young enough that people are not entirely certain whether to take him seriously.

The scar on his forehead was earned during his first month of patrol, breaking up a brawl between drunk merchants in the market district. A man with a bottle caught him badly enough to require stitches. The incident taught him that violence is often chaotic and random rather than disciplined. He recovered well and returned to patrol within a week.

His posting is the capital district—the wealthiest, most densely populated part of Alyssa, where merchants, minor nobles, and successful tradespeople live alongside their servants and the perpetual population of urban poor. The work is managing disputes, stopping theft, enforcing the minor regulations that keep urban society functional. He is not especially skilled yet, but he is conscientious and learning quickly.

## Psyche

### Personality

Xénokôs is earnest and tries too hard to treat everyone fairly. He is not yet experienced enough to understand when fairness is being manipulated against him, and older criminals have learned to exploit his good nature. He is self-doubting in ways that will probably diminish with age and experience. He is polite to almost everyone, including people who resent being treated with politeness. His humor is not yet refined, though it is developing.

### Motivation

Xénokôs wants to be a good guard—good, not just competent. He feels responsible to his city and its people. His secondary motivation is proving his suitability for the role despite his youth and small stature. He is concerned that people judge him on appearance and is quietly determined to demonstrate that he belongs in the position.

### Strengths

He is very fast for his age and frame. His commitment to the work is whole. He is literate and intelligent, which helps him with paperwork and understanding legal procedures. He is emotionally resilient in ways that will serve him well.

## Social

Xénokôs is on the lowest rung of the town guard hierarchy. He is barely respected by older guards and is probably invisible to the capital district's merchant class. He is beginning to build a modest reputation for fairness and steadiness.

## Companions

### Patrons

**Senior Guard Captain Rhelis Aumont** — The sergeant commanding the capital district patrols. Rhelis recognized Xénokôs's sincerity and has taken him under his wing as an unofficial mentor. Rhelis is an older man nearing retirement and sees potential in Xénokôs. He actively protects him from the more cynical guards who would teach him to accept bribes and overlook crimes for coin.

### Enemies

**Merchant Kallias** — A successful trader in the capital district who runs what is likely a lucrative black-market operation disguised as a legitimate spice importing business. Xénokôs has tried to investigate the operation twice, and both times Merchant Kallias has made it clear—through legal threats, social pressure, and subtle intimidation—that the investigation needs to stop. Xénokôs has backed off twice. Kallias views him as intimidated and beneath contempt.

## Plot Hooks

1. **The Mentor's Corruption** — Xénokôs discovers that another guard in his squad, an older man he respected, is accepting bribes from Merchant Kallias. The guard's corruption is extensive and has been ongoing for years. Xénokôs is caught between reporting his fellow guard (which will make him unpopular with everyone) or ignoring the corruption. When he reports the situation to Captain Rhelis, Rhelis tells him that the guard is well-connected and that Xénokôs would be foolish to pursue the matter. Xénokôs can push the investigation despite his mentor's warning, or let it drop.

2. **The Noble's Crime** — Xénokôs witnesses a minor noble, **Lord Castellan**, commit a clear crime—beating a servant nearly to death during a drunken rage. There are witnesses. The crime is documented. But when Xénokôs attempts to arrest Castellan, he is told by Captain Rhelis that Castellan's family has political protection and that arresting him would result in official retaliation against the guard station. Xénokôs can ignore the crime or make an arrest that will end his service before it has truly begun.

3. **The Orphan's Choice** — Xénokôs encounters a street orphan, **Mera**, a fourteen-year-old girl who has been stealing to survive. He catches her red-handed stealing bread. Instead of arresting her, he begins buying her meals and trying to connect her with shelter and legitimate work. He comes to care about her welfare. Then Merchant Kallias approaches Xénokôs with the revelation that Mera's theft is actually directed by Kallias's operation—she is a child the black-market organization uses. Kallias is using the girl as leverage against Xénokôs. If Xénokôs investigates Kallias's operation, Kallias will have Mera arrested as punishment. Protecting the child and pursuing justice have become two different things.

4. **The Guard Station Politics** — The capital district guard station receives a new senior officer, **Captain Markos**, who is politically ambitious and wants to reduce the district's reported crimes through more aggressive enforcement. His approach involves heavy-handed tactics that Xénokôs recognizes as counterproductive and likely to create more crime. Xénokôs is supposed to support Markos, but Markos's methods contradict Captain Rhelis's mentoring about keeping the peace by knowing the district. His loyalty to his new commander and his loyalty to the mentoring he respects now pull against each other.

5. **The Dangerous Knowledge** — During a routine patrol, Xénokôs encounters a highly placed government official conducting a clandestine meeting with what appears to be a foreign agent. The meeting is brief and he catches only fragments, but it suggests potential treason or at least serious corruption. The official recognizes that Xénokôs witnessed the meeting and approaches him privately, identifying himself and explaining that the meeting involved legitimate but secret work. He asks Xénokôs not to report what he saw. Xénokôs is too young to easily verify whether the official's claims are true, and reporting them would put him in direct conflict with extremely powerful people.
