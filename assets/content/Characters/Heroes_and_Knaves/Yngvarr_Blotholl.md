---
tags:
  - heroes-and-knaves
  - tradesfolk
  - character
name:
  full: Yngvarr Blóthöll
  title: ""
  given: Yngvarr
  clan: Blóthöll
  home: ormstead
  aliases: []
packFolder: ankarisnordlands
shortcode: yngvrblthl
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Jester
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmvthgrd
  gender: male
  species: null
  age: 30
  born: 690/3/15
  height: 1.7
  weight: 64.9
  frame: light
  appearance:
    eye_color: blue
    hair_color: red
    skin_color: light
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 18 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 16 } }
    - { model: affiliation-thorr }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 80 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 51 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 85 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-acro, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-lgdm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 32 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 68 } }
    - { model: sohl-sohl-skill-lock, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-musc, system: { masteryLevelBase: 16 } }
    - { model: sohl-sohl-weapongear-stf }
    - { model: sohl-sohl-armorgear-vtunic }
    - { model: sohl-sohl-armorgear-vbrch }
    - { model: sohl-sohl-armorgear-ltshoe }
    - { model: sohl-sohl-armorgear-vcap }
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-stdrtns, system: { quantity: 2 } }
    - name: Satchel for jest props
      type: miscgear
      system:
        shortcode: satchelforjestprops
        weight: 0.5
        value: 100
        durability: 3
    - name: Musical instruments (pipes, bells, lute)
      type: miscgear
      system:
        shortcode: musicalinstruments
        weight: 1.5
        value: 100
        durability: 3
    - name: Juggling balls
      type: miscgear
      system:
        shortcode: jugglingballs
        quantity: 1
        weight: 1
        value: 100
        durability: 3
    - name: Collection of written jests and jokes
      type: miscgear
      system:
        shortcode: collectionofwritten
        weight: 0.3
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bglgcvs }
    - { model: sohl-sohl-containergear-bpchlg }
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

![[yngvrblthl|Yngvarr Blóthöll]]{float: top-left}

Yngvarr stands 5'7" tall with a light build. He has light fair skin, red hair, and blue eyes. His features include an oblong face, an aquiline nose, a square jawline, a small mouth, heavy brows.

# Dossier {#dossier}

## Background

### Early Life and the Jester's Gift

Yngvarr was born during the tempestuous month of spring winds in a riverside town of [[place-vithgard|Vithgard]]'s eastern provinces. His mother, **Sigrid the Brewmaster**, kept an inn where merchants and wanderers gathered; his father, a traveling performer himself, remained only long enough to pass on his gift for performance before departing for other horizons. From his earliest years, Yngvarr learned to read faces as others read scrolls—understanding the hidden griefs, the secret joys, the careful calculations behind every expression. He apprenticed under **Master Kolbeinn**, a legendary jester whose wit was said to have averted wars through sheer cleverness, learning that the craft of laughter is perhaps the most dangerous art of all.

### The Court Years

At twenty, Yngvarr secured patronage with the ducal household of Vithgard, where his talent for reading his audience evolved into a sophisticated practice of political theater. His jokes and performances became increasingly layered—entertaining the masses while conveying subtle messages to the nobility, always walking the razor's edge between wisdom and foolishness. He has witnessed the secret councils of power, the intimate moments of great houses, the hidden shame and pride of kings. His extensive knowledge of folklore and arcane history has proven invaluable in understanding the complex tapestries of power and prophecy that bind the realm.

### The Present Reckoning

Now in his thirtieth year, Yngvarr finds himself caught between the comfort of his established reputation and a gnawing uncertainty about the purpose his performance serves. He has begun taking commissions beyond the Duke's court, traveling to distant festivals and merchant gatherings, searching for something intangible—perhaps redemption, perhaps merely a new challenge that might satisfy his restless spirit.

## Psyche

### Personality

Yngvarr possesses the chameleon's gift, adapting his persona to whatever audience surrounds him. He can evoke laughter from the hardest merchant, draw tears from the coldest nobleman, and inspire courage in the fearful through careful deployment of jest and truth. Yet beneath the perpetual performance lies a contemplative soul, deeply aware of the weight of words and their power to heal or wound. He carries the jester's burden—the knowledge that those who make others laugh often hide the deepest sorrows.

His wit is legendary but double-edged; he has wounded as many feelings as he has charmed, though rarely without purpose. His self-awareness borders on obsessive, often leading him to overanalyze his own motivations and question the authenticity of his connections with others. He struggles with genuine vulnerability, fearing that any moment of true feeling might compromise his carefully constructed mask.

### Motivation

Yngvarr seeks to discover whether his talents for performance and persuasion might serve some greater purpose beyond mere entertainment and political maneuvering. He is driven by an undefined hunger—a sense that the universe speaks through stories and laughter, and that he might be a translator of some cosmic truth. The possibility that his gifts might avert tragedy, heal broken hearts, or illuminate hidden injustices drives him forward, even as he fears his own capacity for deception.

### Strengths

- **Master of Performance** - Exceptional singing, theatrics, and drawing skills allow him to captivate any audience and convey complex emotions through art
- **Silver Tongue** - Legendary charm, eloquence, and persuasion enable him to negotiate, manipulate, or inspire through sheer force of personality
- **Tactical Deception** - Extraordinary skill in guile and intrigue, reading motivations, and employing misdirection make him invaluable for unraveling conspiracies
- **Versatile Craftsman** - Mastery of brewing, cooking, shipwright work, and music means he can contribute to survival and comfort in any situation
- **Physical Grace** - Exceptional dexterity, acrobatics, dancing, and climbing abilities allow him to navigate both social and physical spaces with practiced ease
- **Hidden Knowledge** - Deep folklore expertise and diverse skill application grant him unusual perspectives on ancient secrets and hidden connections

### Weaknesses

- **Chronic Self-Doubt** - His introspective nature often paralyzes him with second-guessing, undermining his confidence in moments requiring decisive action
- **Performance Addiction** - His need for audience approval and admiration can override judgment, leading him to take unnecessary risks for dramatic effect
- **Emotional Distance** - His constant performance creates genuine difficulty forming authentic relationships; many who claim to know him barely scratch the surface
- **Vulnerability to Manipulation** - Those who understand his hunger for meaning and purpose can exploit his idealism
- **Physical Fragility** - Despite his agility, his light frame and modest strength make him vulnerable in direct physical confrontation
- **The Jester's Curse** - Few take him seriously when he speaks truth, a consequence of his reputation for clever deception

## Social

### Patrons

- **Duke Ragnarr of Vithgard** - The primary patron who employs Yngvarr's talents for court entertainment and subtle political messaging; their relationship is cordial but transactional
- **Sigrid Blóthöll** - His mother, the innkeeper, who still provides refuge and honest counsel when he returns home worn by the demands of performance
- **Master Kolbeinn** - His aging mentor and former teacher, now retired in the mountains, whom Yngvarr consults on matters of ethics and the deeper purposes of his craft

### Enemies

- **Jorvald the Red** - A rival jester whose less sophisticated humor once dominated the Vithgard court; he schemes constantly to discredit Yngvarr's wit and expose his methods
- **The Whispered Syndicate** - A network of information brokers who view Yngvarr's access to noble secrets as either an asset to control or a threat to eliminate
- **Alderman Grevik of the Guildhall** - A strict moralist who views jesters as dangerous corruptors of virtue and has publicly questioned the Duke's patronage of Yngvarr

### Affiliations

- **The Wandering Minstrels' Collective** - An informal network of traveling performers who share stories, techniques, and intelligence gathered from their various courts and commissions

## Plot Hooks

1. **The Duke's Unspoken Confession** - During a late night performance, the Duke drinks heavily and begins to hint at a terrible secret—a past betrayal, an illegitimate child, or perhaps knowledge of a conspiracy at the highest levels of the realm. Yngvarr, sworn to secrecy by the bonds of his position, must decide whether this knowledge demands action or whether discretion truly serves his patron better. The truth could topple the duchy, but concealment gnaws at his conscience.

2. **The Prophecy in Jest** - A traveling mystic attends one of Yngvarr's performances and afterward approaches him with a chilling assertion: that his jokes contain prophetic truth, that the universe speaks through his wit in ways he doesn't consciously understand. She offers cryptic evidence—past jokes that came true, warnings embedded in his past performances. Yngvarr must investigate whether he is a conduit for something far greater, or if this is merely a clever deception preying upon his desire for meaning.

3. **The Hidden Heir** - A child arrives at the Duke's court claiming to be the bastard offspring of **Master Kolbeinn**, Yngvarr's mentor. The child possesses extraordinary performance talent and claims Kolbeinn sent them to study under Yngvarr. But the timing is suspicious, and whispers suggest this child may be a spy, an impostor, or worse—a political tool placed to compromise Yngvarr's loyalty. He must discover the truth while potentially training a successor he doesn't trust.

4. **The Merchants' Rebellion** - A coalition of wealthy merchants approaches Yngvarr with a proposal: use his access to the Duke's ear to advocate for tax reforms and reduced trade tariffs that benefit commerce. Refusing risks making enemies of powerful merchants; accepting means compromising his relationship with the Duke and potentially betraying his patron's interests. The situation grows more complex when he discovers the merchants' true goal is not reform but complete political restructuring.

5. **The Stolen Song** - Yngvarr's most famous composition—a hauntingly beautiful ballad about loss and redemption—appears in a far distant city, performed by an unknown artist who claims it as their own. As Yngvarr investigates, he discovers the song has inspired a genuine movement of change and hope across the realm, but its true authorship remains obscured. He must decide whether to reclaim credit for his art or allow it to serve humanity better as a work of uncertain origin, belonging to all who need it.
