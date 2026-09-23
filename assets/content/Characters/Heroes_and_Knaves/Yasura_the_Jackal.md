---
tags:
  - heroes-and-knaves
  - hero
  - soldiery
  - character
name:
  full: Yâsûra the Jackal
  title: ""
  given: Yâsûra
  clan: ""
  home: null # was: The South Marches
  aliases:
    - The Jackal-Queen
    - The Unhoused
    - Yâsûra
packFolder: northernfertileregionbethua
shortcode: yasurajckl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Raider Warlord
  stations: []
  lore:
    - commonerrnk
  homes:
    - bethuargn
  affiliations:
    - mtrrchybth
  gender: female
  species: null
  age: 41
  birthday: 679/3/19
  height: 1.72
  weight: 66
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: black
    skin_color: dark
    complexion: sun-scarred
    extra_features:
      - A long scar from brow to jaw on the left side
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 6 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-morvana }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 55 } }
    - { model: skill-bethunlng, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 72 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 64 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 50 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-weapongear-scmtr }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-weapongear-shkn }
    - { model: sohl-sohl-projectilegear-arwstd, system: { quantity: 20 } }
    - { model: sohl-sohl-armorgear-kbrst }
    - { model: sohl-sohl-armorgear-ltstunic }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-ltcap }
    - name: War-horse (desert-bred mare)
      type: miscgear
      system:
        shortcode: warhorse
        weight: 0
        value: 2500
        durability: 5
    - { model: sohl-sohl-miscgear-hvybdrl }
    - { model: sohl-sohl-miscgear-frtns, system: { quantity: 5 } }
    - { model: sohl-sohl-miscgear-gldcrwn, system: { quantity: 25 } }
    - { model: sohl-sohl-containergear-wtrskin, system: { quantity: 2 } }
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

Yâsûra is a lean, weather-hardened woman in her early forties, built in the wiry, fast-moving mold the Bethûan war-art prizes rather than the bulk of a marcher raider. She stands 5'8", dark-skinned and burned darker by the southern sun, her black hair shot with gray and bound back hard for the saddle. A long pale scar runs from her left brow to her jaw—the mark of the hunt that cost her everything and set her on the road south. She still carries herself like the spear-sister she was, upright and balanced, and she still wears, beneath marcher leathers, the habits of a woman trained from girlhood to kill with empty hands. Her dark eyes are flat and measuring, and she has the unhurried confidence of someone who has had a long time to grow comfortable with violence.

# Dossier {#dossier}

## Background

### Origin: A Daughter of the Matriarchy

Yâsûra was born to a minor clan of the southern cantons of the [[affiliation-mtrrchybth|Matriarchy of Bethûa]]—lesser nobility, but nobility, with land enough to raise a daughter to expect standing. Like the realm's other promising women she was trained young in arms and in the **Charíssa**, the lethal Bethûan unarmed art, and she earned a place among the **Lonkhai**, the Spear-Sisterhood, rising to command a frontier company that patrolled the very marches she now haunts. For most of her life she was exactly what Bethûa raises its women to be: armed, proud, and certain of her place in an order built around her sex. The name she was born with she no longer speaks, and will kill anyone who uses it; she threw her House away the day it threw her away, and keeps only the given name her mother gave her and the byname the marches hung on her after.

### The Fall

Her ruin came through a hunt—the same hunt that scarred her face. Years ago a fugitive she had reason to shelter, or was bound by debt or kin to protect, was run to ground in her cantons by the rising thief-taker **[[being-zahirmlkht|Zahira Malkhet]]**, then still building the name that would become the Hound of the Veil. The hunt turned bloody on Yâsûra's own ground; people under her protection died, her judgment was called into question, and the matter reached higher than she could answer. The Houses needed a failure to blame, and a minor clan's daughter served. Yâsûra was **stripped of her commission, cast out of her House, and exiled**—unmade, in a single season, from a spear-sister of the realm into a woman with no House, no standing, and no country. She knows exactly whom to blame: had **[[being-zahirmlkht|Zahira]]** never come hunting into her cantons, Yâsûra would still have her rank, her House, and the name she was born with. Zahira is, quite simply, _the reason she is what she is_—and that is a debt the Jackal-Queen means to collect in full. It is not the contract that drives her after the Hound of the Veil; it is the exile.

### The Jackal-Queen

She fled south, across the frontier where the matriarchal writ runs thin, into the drier borderlands of the **South Marches**—a country of pastoral nomad peoples who pay Bethûa tribute but keep their own ways, are led by men, and are warily hostile to the rich matriarchy on their northern horizon. There Yâsûra became something the Marches had never seen and Bethûa most fears: an armed, exiled woman gathering an army of the matriarchy's other castoffs. To her came other **dispossessed Bethûan women**—disgraced, widowed, fled, or sold, every one of them stripped of House and home as she had been—and, most dangerously, a hard cadre of **exiled Spádai**, the gelded eunuch-warriors who are the only men Bethûa ever trusts with steel and who, gelded and Houseless by their very nature, had even less to lose than she did. These outcasts found in Yâsûra a leader who shared their exile and their training, and they became the disciplined Bethûan core of her band. Around that core she hires and spends the **men of the southern Marches**—herders' sons and marcher raiders—as light horse and expendable rank-and-file.

It was in those years that the byname found her. Whether the marcher clans first spat it at her as an insult—a Houseless scavenger feeding on the edges of better people's herds—or her own followers took it up in grim pride, no one now remembers; but **Yâsûra the Jackal** is the only name she answers to, and the warband that formed around her, the **[[affiliation-jcklsthmrchs|Jackals]]**, took its name from hers. It is the most feared free company of the southern border: a brotherhood and sisterhood of the Houseless, gathered under a queen who threw her own House away.

### Skills and Abilities

- **The Charíssa**: Yâsûra was trained from girlhood in the Bethûan open-hand killing art, and remains lethal weaponless—a fact that has surprised more than one larger opponent who took an unarmed woman of forty for an easy mark.
- **Spear-Sister's Craft**: Years as a Lonkha officer gave her real command, tactics, and discipline, which she has bent to the warband—her Jackals fight as a trained pack, not a rabble, and her Spádai core fights in the Bethûan manner.
- **Mounted Raider**: A superb horsewoman, deadly with scimitar and throwing-axe from the saddle, at home in the waterless marcher country she once patrolled and now rules.
- **A Personal Stake**: Against [[being-zahirmlkht|Zahira]] in particular she is more dangerous than any contract could make her—she has waited years for the chance to repay the woman who unmade her.

## Psyche

### Personality and Motivations

Yâsûra is cold, disciplined, and consumed by a grievance she has had years to refine into something patient and exact. She keeps a quiet, bitter devotion to **[[affiliation-morvana|Morvána]]**, the Mistress of the Waning Moon—the Aurèldían goddess of decay and endings, who presides over the slow ruin of all that once flourished. It is a faith Bethûa's sunny state-cult of goddesses does not honor, and exactly the god a cast-out woman would choose: Yâsûra has watched her own House and standing wither to nothing, and has made herself the agent of that same decline visited on others. She does not rage; she remembers. Where a marcher warlord would raid for loot and glory, Yâsûra builds, recruits, and waits, holding her motley band together by force of will, shared exile, and the certainty of what she does to those who fail her.

She is not, in her own telling, a traitor or a monster but a woman who was thrown away by the order she served faithfully—and who has built, out of everything that order discards, a power that owes it nothing. That she would not have her band, her standing, or her purpose without her downfall is an irony she is too proud to examine. Her hatred of Zahira is the one place her discipline cracks: offered the Hound of the Veil, she will overcommit, pursue too far, and spend lives and caution she would otherwise hoard, for the chance to look the thief-taker in the eye before the end.

### Strengths

- **The Charíssa and a lifetime of arms**—lethal even unarmed
- **A disciplined core** of exiled Spádai and Bethûan women who fight in the trained manner
- **Real command and tactics** from her years as a Lonkha officer

### Weaknesses

- **The grudge** against [[being-zahirmlkht|Zahira]] clouds her otherwise careful judgment
- **A divided band**: her loyal Houseless core is small; the marcher men who pad her ranks ride for loot and scatter when it dries up
- **An exile among exiles**: feared by Bethûa and distrusted by the Marches alike, she has no true country to fall back on

## Social

### Enemies

- **[[being-zahirmlkht|Zahira Malkhet, the Hound of the Veil]]**: The thief-taker whose long-ago hunt cost Yâsûra her commission, her House, and her country. Yâsûra wants her dead by her own hand, and the present contract to run her down is, to the Jackal-Queen, the settling of the oldest debt she owns as much as any paid job.

### Patrons of Convenience

- **[[being-casiaveric|Cassia Verric]]**: The Vylarian intelligence officer whose cut-outs have hired the Jackals to bleed away the time [[being-rshrhssfrn|Rashîra]] needs to cross the Marches toward the Kheperi frontier. Yâsûra does not know—or care—whose coin it truly is; she knows only that someone has paid her to do the thing she already meant to do.

### The Band

- **The [[affiliation-jcklsthmrchs|Jackals of the South Marches]]**: Her own warband and her life's second work—exiled Bethûan women, a hard core of cast-out Spádai eunuch-blades, and marcher men spent as light horse, all of them Houseless. They are her instrument, her standing, and the only home left to her.

### The Prize on Her Ground

- **[[being-rshrhssfrn|Rashîra of House Safîrôn]]** and the **Purple Warrant**: The fugitive Grammatíssa is crossing Yâsûra's country with the most valuable object on the southern border—the stolen crown register that proves the matriarchy a profiteer and an oath-breaker against its own patron. Yâsûra was hired only to delay the Hound, not to take the rolls; but a warlord who rules the only road does not stay ignorant of what crosses it for long. Should she grasp what Rashîra carries, the choice is the sharpest of her exile: sell the register to the highest bidder and buy her band a kingdom's worth of coin; carry it to [[affiliation-empirtkhpr|Ta'Kheperu]] and watch the Matriarchy that unmade her brought low; or burn it, and deny every power that ever used her the prize they crave. For the register is the indictment of the very machine that scapegoated her to save itself—and the woman it threw away now holds, by sheerest accident, the power to ruin it.

## Plot Hooks

1. **The Hunt Comes South**: Rashîra's flight into the **[[affiliation-jcklsthmrchs|South Marches]]** brings the one quarry Yâsûra truly wants onto her own ground: [[being-zahirmlkht|Zahira]], hunting straight into the territory of the woman she unmade. Paid through [[being-casiaveric|Verric's]] agents to cost the Hound the time her own quarry needs, Yâsûra needs no second reason—it is the reckoning she has waited years for, on land she chooses and the Hound does not know. For Zahira it means cutting her way free of an old enemy who wants her dead for reasons that have nothing to do with the contract, before the trail leads out of the Marches and away.

2. **Two Daughters of the Matriarchy**: The hunt forces Yâsûra and [[being-zahirmlkht|Zahira]] face to face at last—two Bethûan women of arms, one the realm's hound and one its exile, each the road the other did not take. There is room here for vengeance, for an ugly recognition, or even for an uneasy alliance against those who used them both, if Zahira can be made to see what her old success really cost.

3. **A Warlord's Price**: Approached by the other side, Yâsûra proves willing to hear an offer—her hatred is real, but so is her discipline, and a party that can pay in coin, in vengeance better aimed, or in the truth of who truly engineered her downfall might turn the Jackals loose from [[being-casiaveric|Verric's]] leash entirely.

4. **The Register and the Jackal**: Yâsûra grasps that the fugitive crossing her land carries proof that could topple the Matriarch who made her Houseless. Now the warlord paid merely to delay the Hound holds the real prize within reach—and must weigh coin against vengeance against the bitter satisfaction of handing the truth to [[affiliation-empirtkhpr|Ta'Kheperu]], while [[being-casiaveric|Cassia]], the Veil, and [[being-rshrhssfrn|Rashîra]] herself all scramble to keep the most dangerous object in the Marches out of a Jackal's hands.
