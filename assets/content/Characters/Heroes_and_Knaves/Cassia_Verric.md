---
tags:
  - heroes-and-knaves
  - hero
  - administration
  - character
name:
  full: Cassia Verric
  title: ""
  given: Cassia
  clan: Verric
  home: magnapolis
  aliases:
    - The Harbour Factor
    - The Empire's Hand on the Southern Shore
packFolder: midhalionvylaria
shortcode: casiaveric
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Intelligence Officer
  stations: []
  lore:
    - commonerrnk
  homes:
    - vylariargn
  affiliations:
    - vylarinmpr
  gender: female
  species: null
  age: 43
  born: 677/2/11
  height: 1.7
  weight: 66
  frame: medium
  appearance:
    eye_color: grey
    hair_color: brown
    skin_color: fair
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 8 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 13 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 70 } }
    - { model: skill-vylarilng, system: { masteryLevelBase: 55 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 66 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 55 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-hrld, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 58 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-dge, system: { masteryLevelBase: 38 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 40 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 35 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-ltvest, name: Concealed leather vest }
    - { model: sohl-sohl-armorgear-wdress }
    - { model: sohl-sohl-armorgear-wclk }
    - name: Sealed letters of credit and forged passes
      type: miscgear
      system:
        shortcode: sealedletters
        weight: 0.5
        value: 200
        durability: 2
    - { model: sohl-sohl-miscgear-gldcrwn, system: { quantity: 60 } }
    - { model: sohl-sohl-miscgear-tndrbx }
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

Cassia Verric is an unremarkable woman, and works at it. She is of middling height and quiet, well-kept build, with brown hair graying at the temples bound up in the practical style of a working merchant, and pale gray eyes that miss very little. Her complexion is weathered from years along the wharves of the [[place-midhalnrgn|Mídhalión Region]] coast. She dresses as a prosperous trading factor or shipping agent in good worsted, nothing that draws the eye, and carries only a dagger, as any traveler might. People who deal with her find her warm, competent, and easy to talk to—and struggle, afterward, to recall much about her face.

# Dossier {#dossier}

## Background

### Origin and Service

Cassia Verric is a career officer of the [[affiliation-vylarinmpr|Vylarian]] intelligence service, born to a minor administrative family of [[place-magnapolis|Magnápolis]] and raised in the empire's vast bureaucratic machine rather than its legions or its Senate. She came up through the harbor-offices and customs-houses of the western ports, where the empire watches its rivals' shipping, and learned early that a clerk with the right ledgers and the right informants is worth a cohort. For two decades she has run agents along the contested [[place-vylarianse|Vylarian Sea]], shepherding defectors, buying captains, and quietly bleeding [[affiliation-mtrrchybth|Bethûa's]] deniable war of its deniability.

Her sex is one of her sharpest instruments. [[affiliation-mtrrchybth|Bethûa]] is a matriarchy that suffers a foreign _man_ in its ports only grudgingly—served, watched, and quietly reminded at every turn that he holds no standing—but deals with a foreign _woman_ trading on her own account as a normal merchant, woman to woman. Where a male Vylarian agent would meet friction at every gate and counting-house, Cassia passes through the matriarchy's harbors and trade-houses with an ease no man could buy. The empire knows the value of this, and spends her where a woman's freedom of movement is worth more than a legion.

### The Asset She Made

The affair began as Cassia's own operation. Working the Bethûan ports under her merchant's cover, she cultivated **[[being-rshrhssfrn|Rashîra of House Safîrôn]]**—a senior Grammatíssa of the [[affiliation-bethuanflt|Naukrátissa's]] office, with access to the realm's deepest naval secrets—first as a source and, in time, as a lover. She is too careful to have learned the particulars of what Rashîra kept; the Purple Warrant's contents were always closed to her, and she knew only the general shape of the rot her clerk hinted at. Her real work was subtler: to listen, to sympathize, and to press—gently and without ceasing—on the conscience of a devout woman who could no longer stomach what she copied out in a fair hand. _Do the right thing_, Cassia urged her, meaning, though she never said it aloud, _bring it to me, and to Vylaria._

It did not go as she planned. When Rashîra finally broke, she did not come to Cassia. She took the sealed original and fled **south**, into the lawless Marches, judging—rightly—that to put the proof in Vylarian hands would only make her the empire's weapon against her own land. Cassia's most promising asset had slipped her grasp with the prize in hand; only then did the patient courtship harden into open pursuit, and the present operation begin.

### The Present Operation

Cassia's current assignment is the most valuable of her career: the sealed **Purple Warrant** register that the renegade Grammatíssa **[[being-rshrhssfrn|Rashîra of House Safîrôn]]** has stolen out of [[affiliation-bethuanflt|the Naukrátissa's office]] and carried south into the [[affiliation-jcklsthmrchs|South Marches]]. In Vylarian hands that one purple original is a weapon of state—incontrovertible proof, on controlled crown vellum under unforgeable seals, that Bethûa's "deniable" privateer war is shot through with naked profiteering, and that the matriarchy has been secretly preying on the very patron it pretends to serve. With it, Vylaria could shatter the [[affiliation-empirtkhpr|Kheperi]]–Bethûan alliance that hems the empire's southern sea. Cassia means to take it whole.

### Her Three Fronts

The trouble is that Cassia is not the only one who wants the rolls, and almost everyone else's success is her failure. She reckons the possible outcomes in a strict order, best to worst:

1. **Vylaria takes the register**—the win.
2. **No one secures it**—tolerable; the game stays open and the proof keeps existing.
3. **Ta'Kheperu gets it**—bad, but the proof still exists and the Kheperi–Bethûan axis takes its wound regardless of whose hand holds the vellum.
4. **Bethûa recovers or burns it**—catastrophe: the proof is gone forever, deniability is restored, the alliance is preserved, and the empire is left with nothing.

So Cassia fights on three fronts at once, deep in country hostile to her. She **courts Rashîra**—offering protection, passage, and coin to turn the fugitive toward a Vylarian handover. She **blocks the road east**, because above all the register must not reach [[affiliation-empirtkhpr|Wasetkara]]: she buys off guides, closes routes, spreads false word, and salts Rashîra's path with delays, turning to open force only when the covert hand fails. And she **sabotages the Bethûan hunt**, confusing and misdirecting the Court of the Veil's agents and frustrating [[being-zahirmlkht|Zahira Malkhet]]—for a Bethûan recapture is the one ending worse than losing the rolls to the Kheperi.

### Method

Cassia almost never acts with her own hand. She is a runner of people: she finds the lever—a debt, a grudge, an ambition, a frightened family—and she pulls it. It was her cut-outs that paid **[[being-yasurajckl|Yâsûra the Jackal]]** to bleed away [[being-zahirmlkht|Zahira's]] time, letting the warlord's old hatred do Vylaria's work for free. But that same lever is now her sharpest danger: if Yâsûra or the Hound actually seizes the rolls and they fall into Bethûan hands, that is precisely the catastrophe Cassia most fears. She must keep the Jackals delaying the Veil's hunt without letting anyone in the Marches close a hand on the documents—a blade she can point but not fully trust, swung over the one outcome she cannot allow.

### Skills and Abilities

- **Spycraft and Handling**: A master at recruiting, running, and disposing of agents. She reads people for their levers and rarely misjudges what a person can be made to do.
- **A Woman's Freedom in Bethûa**: Her sex lets her move through the matriarchy's ports, trade-houses, and counting-rooms with an ease no male agent could manage—served and trusted as a fellow merchant where a man would be watched.
- **Cover and Misdirection**: Passes through the ports of Mídhalión as a shipping factor, a customs agent, a creditor—whichever face the moment wants. Carries forged passes and genuine letters of credit in equal measure.
- **Coin as a Weapon**: Commands a generous imperial purse and the authority to spend it. Much of what she accomplishes, she buys.

## Psyche

### Personality and Motivations

Cassia is patient, warm, and entirely without scruple in the service of the empire—a woman whose easy courtesy is a working tool rather than a window onto anything underneath. She is a patriot of a cold and bureaucratic kind: she believes the Vylarian peace is worth more than the lives spent to extend it, and she has spent a great many without losing sleep. She takes a craftsman's pride in clean work and a craftsman's contempt for the showy and the cruel; she would call herself a reasonable woman, and within the narrow walls of her loyalty she is.

She does not hate Rashîra, or Zahira, or Bethûa. They are, respectively, a prize to be won, an obstacle, and a target—and the moment any of them ceases to serve the operation, her regard for them ends. This is precisely what makes her dangerous: there is no anger in her to provoke, no vanity to flatter, only an unhurried calculation of advantage that will spend any ally, including the woman she is courting, the instant the ledger turns.

### Strengths

- **Networks** of informants, factors, and bought officials across the Mídhalion coast and the Bethûan ports
- **Freedom of movement** in a matriarchy that distrusts foreign men but not foreign women
- **Misdirection and deniability**—others act, she is never seen to
- **An imperial purse** and the authority to use it

### Weaknesses

- **Overuses her levers**: her reliance on bought and coerced proxies fails when a proxy has motives of her own—as [[being-yasurajckl|Yâsûra]] very much does
- **A proxy that could hand her her worst outcome**: the Jackals she hired could let the rolls fall to Bethûa, the one ending she cannot allow
- **No personal loyalty to spend**: those who serve her for coin or fear will not die for her, and know it
- **Fighting on three fronts**: opposing Rashîra, Bethûa, and Ta'Kheperu at once stretches even a Vylarian purse, and any two of them combining against her undoes the whole operation

## Social

### Targets and Tools

- **[[being-rshrhssfrn|Rashîra of House Safîrôn]]**: The fugitive Grammatíssa and her purple register—the prize Cassia means to win by courtship if she can and force if she must, and above all to keep out of Kheperi hands. To Cassia she is a delivery that has not yet agreed to be delivered.
- **[[being-yasurajckl|Yâsûra the Jackal]] and the [[affiliation-jcklsthmrchs|Jackals of the South Marches]]**: Hired through cut-outs to delay [[being-zahirmlkht|Zahira]], believing they hunt only for their warlord's grudge. A useful blade—and a dangerous one, since a Jackal who seizes the rolls might sell them anywhere, Bethûa included.

### Enemies

- **[[being-zahirmlkht|Zahira Malkhet, the Hound of the Veil]]**: The Bethûan thief-taker racing to recover or destroy the register. Cassia means to see her thwarted, confused, and delayed at every turn—never letting the Veil's hand close on the rolls—and respects her enough to spend real resources on it.
- **The Court of the Veil**: The Bethûan intelligence household whose secret she is working to expose. The whole of Cassia's operation is a quiet duel against the unseen agents of **Mêtríssa Amîthéna of House Thamîrîon**.
- **The agents of [[affiliation-empirtkhpr|Ta'Kheperu]]**: Should the Kheperi learn that the register exists and is running for their frontier, their hand will reach into the Marches too—and Cassia must keep the proof from them as surely as from Bethûa.

## Plot Hooks

1. **The Courtship**: Cassia makes contact with [[being-rshrhssfrn|Rashîra]] under a merchant's cover, offering safe passage and an attentive ear—anything but the truth that she means the rolls for Vylaria and will never let them reach [[affiliation-empirtkhpr|Wasetkara]]. The party may meet her as a charming, helpful stranger long before they understand what she is, and must decide how much of her aid to take before the price comes due.

2. **The Blocked Road**: Every eastward path Rashîra tries closes ahead of her—a guide bought, a ford watched, a rumor of plague on the road, a caravan that will not take her. Somewhere behind the bad luck is Cassia's quiet hand, herding the fugitive away from the Kheperi frontier and toward a Vylarian crossing she would never choose freely.

3. **The Proxy Turns**: The [[affiliation-jcklsthmrchs|Jackals]] Cassia hired to delay [[being-zahirmlkht|Zahira]] come within reach of the register itself—and Cassia must scramble to stop her own instrument from handing the rolls to whoever pays best, when the buyer might be Bethûa and the result her single worst outcome.
