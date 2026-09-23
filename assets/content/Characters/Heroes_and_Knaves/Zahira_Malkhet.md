---
tags:
  - heroes-and-knaves
  - hero
  - soldiery
  - character
name:
  full: Zahira Malkhet
  title: ""
  given: Zahira
  clan: Malkhet
  home: bethura
  aliases:
    - The Bounty Hunter
    - The Hound of the Veil
packFolder: northernfertileregionbethua
shortcode: zahirmlkht
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Bounty Hunter
  stations: []
  lore:
    - commonerrnk
  homes:
    - bethuargn
  affiliations:
    - mtrrchybth
  gender: female
  species: null
  age: 28
  birthday: 692/12/3
  height: 1.7
  weight: 68
  frame: heavy
  appearance:
    eye_color: brown
    hair_color: black
    skin_color: dark
    complexion: tanned
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 8 } }
    - { model: affiliation-janus }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-wpnc, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-weapongear-brdswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltshirt }
    - { model: sohl-sohl-armorgear-ltbrch }
    - { model: sohl-sohl-armorgear-ltkboot }
    - { model: sohl-sohl-armorgear-ltvest }
    - { model: sohl-sohl-armorgear-ltcloak }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-frtns, system: { quantity: 3 } }
    - { model: sohl-sohl-miscgear-medsupil, system: { quantity: 4 } }
    - name: Whetstone
      type: miscgear
      system:
        shortcode: whetstone
        weight: 1.5
        value: 100
        durability: 3
    - name: Rope and climbing gear
      type: miscgear
      system:
        shortcode: ropeandclimbinggear
        weight: 1
        value: 30
        durability: 5
    - name: Tracker's tools and tracking supplies
      type: miscgear
      system:
        shortcode: trackerstools
        weight: 1
        value: 50
        durability: 4
    - { model: sohl-sohl-containergear-bglgcvs }
    - { model: sohl-sohl-containergear-wtrskin }
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

![[zahirmlkht|Zahira Malkhet]]{float: top-left}

Zahira stands 5'7" tall with a heavy build. She has dark tanned skin, black hair, and brown eyes. Her features include a high-cheekboned face, an aquiline nose, a tapered chin, arched brows.

# Dossier {#dossier}

## Background

### Origin and Early Life

Zahira Malkhet was born in **Sehéla**, a small grain-village of the dry southern interior of the [[affiliation-mtrrchybth|Matriarchy of Bethûa]], where the fields are kept alive only by the qanats and channels the engineer-priestesses maintain. Her family were peasants of the irrigated hinterland, working land held by the local House. As is the Bethûan way, the household turned on its women: Zahira's mother and grandmother held what little the family owned and governed its affairs, while her father and the men of the house labored in the fields as the dependents they were under law. Zahira, the eldest daughter, was raised from the first as one who would matter – for in Bethûa it is daughters who inherit, carry the line, and answer for a household.

Like every free Bethûan girl, Zahira was trained young in arms and in the **[[affiliation-mtrrchybth#the-martial-bridge-the-spear-sisterhood-and-the-fleet|Charíssa]]**, the realm's lethal unarmed art that turns a woman's speed and agility into a weapon. She took to it as few do – by ten she was outfighting girls years older, and her unusual quickness, the very gift on which the Charíssa depends, marked her out to the women who trained the village levy.

### Training and Rise to Prominence

Zahira's talent did not go unnoticed. **Dómissa Tázîtha of House Khalîthôn**, the clan-matriarch whose lands hold Sehéla and the cantons around it, took an interest in the girl and brought her into her own household guard, where she learned the spear, the broadsword, and the finer points of the Charíssa from the Dómissa's veteran women. Zahira rose quickly to be among the most feared fighters of the House's retinue, prized for her discipline and her cold tactical sense as much as her skill at arms.

For a time she served as one of the Dómissa's household guard, enforcing her mistress's will and settling the disputes of the canton. But the work chafed. Zahira had risen as high as a peasant's daughter could within another woman's House, and she wanted a path that answered to her own judgment rather than spending her life as the instrument of a Dómissa's.

### Becoming a Bounty Hunter

Her chance came with a runaway bound-man – a House servant who had struck his mistress and fled into the southern marches, a capital matter in Bethûa, where no man may raise his hand to a woman and live. Zahira tracked him across the borderlands and returned him for judgment, and in doing so found her trade. She left the Dómissa's guard with her blessing and set up as a **thief-taker and bounty hunter**, hiring out her tracking, her blade, and her Charíssa to any woman with coin and a quarry: the Houses, the Trade-Houses, the cantonal Hégissai, and in time the discreet agents of the capital itself. Working out of Bethûra, she built a name as the woman you sent after a quarry no one else could run to ground.

### Current Mission

Zahira has now been engaged for the most dangerous hunt of her life, and by the highest authority in the realm. Through the discreet intermediaries of the **Court of the Veil**, the household of **[[affiliation-mtrrchybth|Mêtríssa Amîthéna of House Thamîrîon]]** herself has set Zahira after **Rashîra of House Safîrôn** – a former senior **Grammatíssa** of the [[affiliation-bethuanflt|Naukrátissa's]] office and a keeper of the sealed rolls of the **Purple Warrant**. Rashîra has fled with the one stolen original: the crown register that lays bare the truth of the deniable war on [[place-vylarianse|Vylarian]] shipping – that most of its "patriot privateers" are common criminals, that the Great Houses and the Mêtríssa herself grow rich on the plunder with no real benefit to the realm, and, worst of all, that the matriarchy has been secretly preying on its own patron **[[affiliation-empirtkhpr|Ta'Kheperu]]**, fencing grave-goods robbed from the Kheperi dead. Written on crown purple vellum under unforgeable seals, that single roll is incontrovertible – and in the wrong hands it could cost Bethûa the patron on whom its freedom depends. For taking up the work of the Veil, Zahira has earned a quiet and dangerous name in the right circles: **the Hound of the Veil**.

What sets this hunt apart is what Zahira has _not_ been told. Her handlers at the Veil have given her only the shape of the thing – that Rashîra stole secrets that would be catastrophic in the wrong hands – and bound her with one standing order above all others: **she is never to read the stolen papers, and never to let Rashîra speak her case.** The fugitive is a liar, they warn, a silver-tongued clerk who will say anything to save her own neck, and a single conversation could turn a loyal woman. So Zahira's charge is as simple as it is absolute – recover the rolls or destroy them, kill their keeper, and learn nothing of what they contain. She does not know that the order to keep her ignorant is the whole point, nor that the truth written on that purple vellum would damn the very masters who loosed her.

Rashîra did not run for the northern ports as a defector is expected to, but the other way – south, into the **[[affiliation-jcklsthmrchs|South Marches]]** beyond the matriarchy's frontier, and through them west: her goal is **[[affiliation-empirtkhpr|Ta'Kheperu]]**, the betrayed patron, the one power with reason and strength enough to act on the proof she carries. So the hunt has carried Zahira south into the lawless drylands – and into the territory of **[[being-yasurajckl|Yâsûra the Jackal]]**, the exiled warlord who blames Zahira for her own ruin and has been paid, through unseen hands, to see the Hound of the Veil dead. Nor is the Veil the only hunter: the Vylarian agent **[[being-casiaveric|Cassia Verric]]** works the same country, courting Rashîra and closing the roads east, for Vylaria wants the register for itself and fears a Bethûan recovery more than a Kheperi one. In this tangle Zahira can call on the resources of **Dómissa Othris of [[affiliation-bthntrdhss|House Othris-Khanu]]**, the great maritime House whose own secrets sit among the stolen rolls and who wants them recovered as badly as the Veil does.

### End Goal

Zahira must run Rashîra to ground and recover the Purple Warrant – or, failing that, destroy it – before it reaches Ta'Kheperu or Vylaria. The stakes are the realm itself: the register's truth in Kheperi hands could cost Bethûa the patron its independence rests on, and in Vylarian hands could arm the empire to shatter that alliance outright. Yet the deeper she chases, the more the work troubles her. Rashîra is no common traitor, and the rot she carries proof of is real – and Zahira, a peasant's daughter who has spent her life as the instrument of powerful women, has begun to wonder whether she is sent to serve justice or to bury it. Whether her loyalty lies with the Mêtríssa who loosed her or with her own conscience is a question this hunt may force her to answer.

### Skills and Abilities

- **Strength**: Years of combat training have given her considerable physical strength.
- **Endurance**: Capable of enduring harsh conditions and prolonged physical activity.
- **Dexterity**: Skilled in handling weapons and performing precise movements.
- **Agility**: Exceptional agility allows her to move swiftly and evade attacks.
- **Perception**: Highly alert and observant, essential for tracking targets.
- **Comeliness**: Her rugged appearance carries a certain charm.
- **Aura**: Not particularly attuned to the metaphysical.
- **Will**: Determined and tenacious, rarely swayed from her objectives.
- **Reasoning**: Quick-thinking and able to adapt to changing situations.
- **Creativity**: Resourceful in overcoming obstacles during hunts.
- **Empathy**: Can understand others but often prioritizes her mission.
- **Eloquence**: Communicates effectively, especially when necessary for her work.
- **Morality**: Zahira, as a bounty hunter, follows her own moral code of honor and duty while balancing the practical needs of her profession. She respects her culture’s mores but is willing to act pragmatically.
- **Voice**: Zahira’s voice is not her strongest asset. While she can communicate clearly, singing is not her forte, and her voice can be a bit rough when attempting melodies.

## Psyche

## Personality and Motivations

Zahira is pragmatic, disciplined, and driven by a sense of personal honor. She keeps a quiet, private devotion to [[affiliation-janus|Jánus]], the god of justice and honorable struggle – an unfashionable choice in a realm whose temples of state belong to goddesses, but a fitting one for a thief-taker who believes, beneath all her pragmatism, that she serves something like justice. She is not easily swayed by wealth or promises of power, instead focusing on completing her missions with precision and efficiency. Though she often works for the powerful, Zahira remains deeply connected to her peasant roots, understanding the struggles of the common people and sympathizing with those who hold no standing in Bethûa's rigid order – the landless poor and the bound men among whom she was raised.

Despite her skills and reputation, Zahira is not without doubts. She struggles with the moral complexities of her work, often questioning whether she is truly serving justice or simply enforcing the will of the powerful. This internal conflict drives her to seek a higher purpose beyond her role as a bounty hunter, though she has yet to fully define what that purpose is.

### Strengths

- **Bounty Hunting & Tracking**
- **Dual-Wielding** (broadsword and dagger)
- **The Charíssa** – the Bethûan unarmed killing art, in which her exceptional agility makes her lethal even weaponless

## Social

### Patrons

- **Dómissa Tázîtha of House Khalîthôn**: Zahira's first patron, the clan-matriarch who raised her out of the village levy into her own household guard and taught her the trade of arms. Though Zahira has long since left her service, the Dómissa remains a resource and an occasional advisor, and her word still opens doors among the lesser Houses of the southern cantons.
- **Dómissa Othris of [[affiliation-bthntrdhss|House Othris-Khanu]]**: Matriarch of Bethûa's principal maritime House and Zahira's patron for the present hunt. Othris-Khanu's own dealings sit among the secrets in Rashîra's stolen rolls, and the Dómissa has thrown her ships, her captains, and her coin behind the pursuit – acting, it is understood, for the Court of the Veil. Her interest is real but not disinterested, and Zahira knows better than to assume their goals are identical.
- **Mûnêtha of House Ghôlâris**: A rival thief-taker of real skill and Zahira's long-standing competitor for the richest contracts. The two have crossed paths often, sometimes as rivals and sometimes as wary allies; Mûnêtha respects Zahira's gifts and resents them in equal measure, and her help, when it comes, always carries a price and a hidden angle.

### Enemies

- **[[being-rshrhssfrn|Rashîra of House Safîrôn]]**: Zahira's quarry – the renegade Grammatíssa who fled the Naukrátissa's office with the sealed Warrant-rolls. Once a trusted keeper of the realm's deepest naval secret, she is now its most dangerous fugitive: intelligent, well-connected, and carrying knowledge that powerful people on both shores of the [[place-vylarianse|Vylarian Sea]] would kill to control or to bury. She insists she is no traitor, but a woman fleeing a rot she could no longer serve.
- **[[being-casiaveric|Cassia Verric]]**: The Vylarian agent working the same Marches – courting Rashîra toward a Vylarian handover, closing the roads east to keep the register from Ta'Kheperu, and sabotaging Zahira's own hunt at every turn. To Vylaria a Bethûan recovery is the worst outcome of all, so Cassia means to see the Hound confused, misled, and delayed until the rolls are in imperial hands – though she is far too careful to be seen doing it.
- **[[being-yasurajckl|Yâsûra the Jackal]] and her [[affiliation-jcklsthmrchs|Jackals of the South Marches]]**: A warband of the Houseless in the drylands beyond Bethûa's southern frontier, led by an exiled spear-sister who blames Zahira – rightly – for her ruin. Years ago a hunt of Zahira's turned bloody on Yâsûra's own ground and brought about her disgrace, the loss of her House, and her exile from the matriarchy; the renegade has nursed the grudge ever since, and made of Bethûa's castoffs a power that owes the realm nothing. Answerable to no Dómissa, the Jackals sell their blades to whoever pays – and Rashîra's protectors have coin enough to set them on Zahira's trail.

### Affiliations

- **[[being-laylamarut|Layla Marut, the Merchant Princess]]**: [[being-laylamarut|Layla]] and Zahira met when Zahira was hired by Layla's trading clan to recover goods stolen from one of their caravans. Taken with Zahira's nerve and skill, the restless daughter of the House talked her family into letting her ride along – trading the gilded cage of a Bethûan trade-clan's expectations for the road, and bringing her web of mercantile contacts and her sharp tongue to Zahira's hunts.
- **[[being-narisahrvn|Nari Sahravân, the Desert Mystic]]**: A far-wandering mystic and healer of the deep [[place-khzryndsrtrgn|Khazryn]], drawn across the world by visions toward a thread she could not name. She and Zahira met in the southern Mídhalion borderlands – a vision had carried Nari there, a hunt had carried Zahira – and [[being-narisahrvn|Nari]]'s craft saved Zahira from a mortal wound. She travels with Zahira to learn why her sight binds them, lending her knowledge of the wilds, her visions, and her healer's hands; and she makes no secret of how much of Bethûa, and what it does to its men, unsettles her.

## Plot Hooks

1. **The Fugitive's Refuge**:

   Zahira learns that Rashîra has not run blindly north but has bought the protection of a [[affiliation-bethuanflt|warrant-captain]] of doubtful loyalty – a privateer who has read enough of the stolen rolls to know their worth and is weighing whether to sell Rashîra to Vylaria herself. To reach her quarry, Zahira must get aboard or alongside a ship whose mistress may be the realm's enemy or merely its most opportunistic servant, and decide how far she can trust a woman with everything to gain from betrayal.

2. **The Price of the Trail**:

   Her rival **Mûnêtha of House Ghôlâris** claims to know exactly where Rashîra will make her crossing – but demands Zahira surrender a standing bounty, and her pride with it, to learn it. Worse, Mûnêtha's knowledge hints that she has had her own quiet dealings with the fugitive's protectors; taking the bargain may bind Zahira into a conspiracy that could see her named traitor to the Veil if it ever comes to light.

3. **Into the Marches**:

   Following Rashîra's trail into the dry **[[affiliation-jcklsthmrchs|South Marches]]**, Zahira's party rides straight into the country of **[[being-yasurajckl|Yâsûra the Jackal]]** – and into an ambush the exiled warlord has prepared with a patience no contract could buy. Hired through [[being-casiaveric|Verric]]'s agents to bleed away the time Rashîra needs, Yâsûra means to take far more than coin from this hunt. With [[being-narisahrvn|Nari]]'s sight and [[being-laylamarut|Layla]]'s contacts, Zahira must break free of the woman she herself unmade – who wants her dead for reasons far older than any paymaster's – before her quarry slips out the far side of the Marches and away.

4. **What the Rolls Reveal**:

   Cornered at last, Rashîra offers Zahira not a fight but a choice: read the Warrant-rolls, and see for yourself what you are protecting. The register lays bare the whole machinery of the deniable war – the crown-licensed piracy, the Houses grown rich on it, the [[affiliation-empirtkhpr|Kheperi]] patron pulling the strings, and the men and ships spent to keep it secret. Rashîra means to carry the truth to those who would end it; Zahira must weigh her oath to the Mêtríssa who loosed her against the rot the register would expose – and decide, at last, whose hound she truly is.
