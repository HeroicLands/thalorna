---
shortcode: frstrndrvs
name: {full: Father Ostaran Dorvás, given: Ostaran, clan: Dorvás, aliases: [The Árdavonian Priest]}
type: being
subType: character
tags: [heroes-and-knaves, todo, hero, clergy]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [cleric]
  occupation: Priest
  lore: []
  culture: tarvenanclt
  homes: [thorgila]
  affiliations: {kingdmtrvn: {rank: 3}, ardavon: {rank: 3}}
  gender: male
  species: humanflk
  born: 694.121
  height: 5' 11"
  weight: 170 lbs
  frame: medium
  appearance:
    eye_color: dark_brown
    hair_color: dark_brown
    skin_color: tanned
    complexion: [clear]
    extra_features: []
  packFolder: aureldiatarvenia
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 14}}
    - {model: sohl-sohl-skill-cook, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-embl, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-pysn, system: {masteryLevelBase: 28}}
    - {model: skill-semrnscrpt, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-cmd, system: {masteryLevelBase: 70}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 75}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 42}}
    - {model: sohl-sohl-skill-sing, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-thtcs, system: {masteryLevelBase: 13}}
    - {model: sohl-sohl-skill-srvl, system: {masteryLevelBase: 14}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-clmb, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-dnce, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-jump, system: {masteryLevelBase: 33}}
    - {model: sohl-sohl-skill-ridg, system: {masteryLevelBase: 39}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 36}}
    - {model: sohl-sohl-skill-swim, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-archery, system: {masteryLevelBase: 12}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 56}}
    - {model: sohl-sohl-skill-melee, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-thro, system: {masteryLevelBase: 22}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 11}}
    - {model: sohl-sohl-skill-mtlc, system: {masteryLevelBase: 20}}
    - {model: sohl-sohl-skill-musc, system: {masteryLevelBase: 26}}
    - {model: sohl-sohl-weapongear-shrtswd}
    - {model: sohl-sohl-armorgear-lshirt}
    - {model: sohl-sohl-armorgear-ltrsr}
    - {model: sohl-sohl-armorgear-ltshoe}
    - name: Ceremonial priestly robes (white with silver embroidery)
      type: miscgear
      system: {shortcode: ceremonialpriestly, weight: 1, value: 100, durability: 3}
    - name: Árdavonian holy symbol (staff-topped amulet)
      type: miscgear
      system: {shortcode: ardavonholysymbol, weight: 1, value: 100, durability: 3}
    - name: Holy scripture and theological texts
      type: miscgear
      system: {shortcode: holyscripture, weight: 1, value: 100, durability: 3}
    - name: Prayer beads and ritual items
      type: miscgear
      system: {shortcode: prayerbeadsandritual, weight: 1, value: 100, durability: 3}
    - name: Blessed oils and incense
      type: miscgear
      system: {shortcode: blessedoils, quantity: 2, weight: 1, value: 100, durability: 3}
    - name: Red sash (symbol of priesthood)
      type: miscgear
      system: {shortcode: redsash, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - name: Parchment and writing supplies
      type: miscgear
      system: {shortcode: parchmentandwriting, weight: 1, value: 100, durability: 3}
    - {model: sohl-sohl-miscgear-pence, system: {quantity: 5}}
    - {model: sohl-sohl-containergear-bpchmd}
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

![[frstrndrvs|Father Ostaran Dorvás]]{float=top-left}

Standing at 5'11", Father Ostaran has a medium build, weighing around 170 pounds, with a tanned complexion that speaks to his Meridiane heritage. His hair is dark and wavy, cut short, and his beard is neatly trimmed. His dark brown eyes are calm and observant, reflecting his deep sense of justice and his role as a Árdavonian priest. His nose is straight, and his face is marked by a serene, almost paternal expression. Father Ostaran wears the traditional garb of the Árdavonian clergy—a long, white robe embroidered with silver, and a red sash symbolizing his status as priest. He carries a ceremonial staff topped with the symbol of Árdavon, though a short sword hangs at his waist as a reminder of his chivalric duties.

# Dossier {#dossier}

Ostaran Dorvás was born into a modest but respected noble family in the [[affiliation-kingdmtrvn|Kingdom of Tarvénia]], a land known for its strong traditions of chivalry, honor, and justice. His father, **Álvaro Dorvás**, was a knight in the royal guard, while his mother, **Zédima**, was the daughter of a well-known scholar. From an early age, Ostaran was taught the principles of the **Árdavonian** faith, which holds sacred the ideals of protection, honor, and the defense of the weak.

Although Ostaran’s family hoped he would follow in his father’s footsteps as a knight, Ostaran felt a strong calling to the clergy. He was particularly inspired by the god **Árdavon**, the god of justice and honor, who teaches his followers to defend the helpless and stand against oppression. By the age of 12, Ostaran expressed his desire to join the **Order of the Sword of Árdavon**, the priesthood dedicated to serving both the spiritual and martial aspects of the Árdavonian faith.

## Background

### Joining the Árdavonian Church

Ostaran was sent to the **Great Temple of Árdavon** in the city of [[place-polthamis|Polthamis]], where he began his formal training as an acolyte. His studies included theology, law, and combat training, as the Árdavonian faith expects its priests to be both protectors and spiritual guides. Ostaran excelled in all aspects of his training, particularly in the philosophical and legal teachings of the faith, as well as in swordsmanship.

At the age of 20, Ostaran took his vows and was ordained as a priest dedicated to serving Árdavon’ cause on the battlefield and in the courts. He became known for his dedication to justice, traveling throughout the kingdom to mediate disputes, bring corrupt officials to justice, and uphold the ideals of the Árdavonian church.

### The Rising Threat of Injustice

In recent years, the Kingdom of Tarvénia has faced increasing political unrest, with corruption spreading among the nobility. Several powerful lords have begun to use their influence to exploit the common people, disregarding the chivalric code and the teachings of Árdavon. As a priest, Ostaran has become a central figure in the church’s efforts to combat this rising tide of injustice. He is often called upon to investigate claims of corruption and arbitrate disputes, so that the kingdom’s laws of honor and protection are upheld.

One of Ostaran’s most recent assignments involves investigating **Lord Nizelo Ganotis**, a noble accused of abusing his power and oppressing the local peasantry. Nizelo has seized land unlawfully and has shown a blatant disregard for the kingdom’s laws, presenting Ostaran with one of his most difficult challenges yet. As Ostaran digs further into the investigation, he uncovers a web of corruption that extends beyond Lord Nizelo, threatening the very foundations of Tarvénia’s chivalric code.

### Skills and Abilities

- **Strength**: His strength lies more in his faith and conviction than in physical prowess.
- **Endurance**: Has endurance for the long hours and trials of priestly life, though not as robust as a warrior.
- **Dexterity**: His hands are steady for performing rituals but not outstanding.
- **Agility**: His agility is unremarkable but not a weakness.
- **Perception**: He is aware of his surroundings.
- **Comeliness**: Ostaran’s appearance is modest and respectful, with an air of calm dignity.
- **Aura**: Ostaran has a deep metaphysical power and awareness.
- **Will**: His will is unbreakable, strengthened by his devotion to his god and his cause.
- **Reasoning**: Ostaran’s logic is tempered by his faith, and he uses both to guide his decisions.
- **Creativity**: His creativity lies in interpreting religious texts and adapting them to new situations.
- **Empathy**: He is deeply attuned to the needs and feelings of others, making him an effective priest.
- **Eloquence**: His sermons and words of wisdom are delivered with clarity and conviction.
- **Morality**: Ostaran, as a Árdavonian priest, adheres strictly to his religion’s standards of chivalry, honor, and protecting the weak, making principled decisions even at personal cost.
- **Voice**: As a priest, Ostaran often leads chants and religious hymns. His voice is clear and strong, resonating with reverence and devotion.

## Psyche

## Personality and Motivations

Father Ostaran is a man of deep faith, driven by his devotion to Árdavon and the ideals of justice and honor. He believes that those who possess power must wield it responsibly, using their strength to protect the weak and uphold the law. He is both a scholar and a warrior, combining his knowledge of the law with his martial prowess to uphold justice in a world increasingly marred by corruption.

Despite his commitment to his faith, Father Ostaran is pragmatic enough to recognize that the world is not black and white. He knows that achieving justice often requires navigating the complexities of politics and power, and he is willing to compromise when necessary, though never at the expense of his core values.

### Strengths

- **Religious Guidance**
- **Swordsmanship**

## Social

### Patrons

Sir [[being-srdlvnthrvkknghtwstrnmrchs|Dalven]] Thorvek
: A loyal knight and Ostaran’s close friend, Sir [[being-srdlvnthrvkknghtwstrnmrchs|Dalven]] has been Ostaran’s protector and companion on many dangerous missions. Together, they have fought bandits, quelled rebellions, and brought corrupt nobles to justice. Sir [[being-srdlvnthrvkknghtwstrnmrchs|Dalven]] lives by the ideals of Árdavonian chivalry and holds firm in his support of Ostaran’s quest for justice.

Archbishop Thaluro Zenothis
: The Árdavonian prelate at Polthamis, who confirms Ostaran’s arbitrations under seal and so meets him on the register four times a year. The commissions into noble corruption carry that seal, and so does the protection from the complaints they draw—protection Ostaran knows is conditional on the matter never reaching the royal court. Zenothis is also **Zédima**’s brother. Neither of them says so, and nobody counts a scholar’s daughter who married into the royal guard as kin to an archbishop.

### Enemies

Lord Nizelo Ganotis
: A corrupt noble who has been exploiting his people and ignoring the laws of the kingdom, Lord Nizelo sees Ostaran’s investigation as a direct threat to his power. Lord Nizelo will use every means at his disposal—bribery, manipulation, and even violence—to stop Ostaran from uncovering the full extent of his crimes.

Lady Zenotha Ulmeris
: A shrewd noblewoman who plays a dangerous political game, Lady Zenotha publicly supports the Árdavonian faith but has secretly allied herself with the corrupt elements within the kingdom. She views Ostaran as an obstacle to her ambitions and has begun to quietly work against him, spreading rumors and using her influence in the royal court to undermine his reputation.

### Affiliations

Sir [[being-srdlvnthrvkknghtwstrnmrchs|Dalven]] Thorvek
: A staunch advocate of chivalry and honor, Sir [[being-srdlvnthrvkknghtwstrnmrchs|Dalven]] was impressed with Father Ostaran’s commitment and dedication, and has decided to support his goals. Their friendship is borne out of mutual respect and admiration.

## Plot Hooks

1. **Investigating Corruption**: Ostaran’s investigation into Lord Nizelo’s actions could lead to the discovery of a larger conspiracy within the kingdom. Players could assist him in gathering evidence, infiltrating noble circles, or protecting him from assassination attempts.

2. **A Knight’s Duel**: Lord Nizelo, unwilling to face justice, may challenge Father Ostaran to a duel, forcing him to prove his martial skills in a high-stakes confrontation.

3. **Political Intrigue**: As Father Ostaran navigates the complexities of the royal court, players may become entangled in the power struggles between the nobility and the church, with the fate of Tarvénia’s chivalric code hanging in the balance.
