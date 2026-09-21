---
tags:
  - todo
  - draft
  - clergy
  - character
name:
  full: Azéndas Dâemâtôr
  title: ""
  given: Azéndas
  clan: Dâemâtôr
  home: tyrellan
  aliases:
    - Ebaséthè Rowan Thistlewood
packFolder: midhalionvylaria
shortcode: azendsdmtr
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Priest
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
  age: 45
  birthday: 679/3/22
  height: 1.85
  weight: 81
  frame: heavy
  appearance:
    eye_color: blue
    hair_color: dark_brown
    skin_color: tanned
    complexion: weathered
    extra_features:
      - a tattoo of a dragon wrapping around the arm
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 9 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 11 } }
    - { model: affiliation-florania }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 28 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-mrcn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 52 } }
    - { model: sohl-sohl-skill-ritual, system: { masteryLevelBase: 39 } }
    - { model: skill-semrnscrpt, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 60 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 44 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-anmcft, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-trak, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 12 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 39 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 20 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 10 } }
    - { model: sohl-sohl-skill-jewl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-common, system: { masteryLevelBase: 33 } }
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

Azéndas Dâemâtôr is a big man, 6'1" and broad, solidly built, and at 45 still carries himself like the soldier he was. Diamond face, prominent cheekbones, a narrow forehead, an angular jaw and a firm chin. Almond-shaped blue eyes under heavy brows, and a measured way of looking at people. Straight nose, wide mouth. Tanned, weathered skin; dark brown hair cut short and swept back.

A dragon is tattooed around his upper arm — a coiled beast in black and rust, faded by sun and years, its edges soft and its meaning plain to anyone who has been in a mercenary camp. It is the mark of the Harad campaign. He does not discuss it, and he does not hide it.

# Dossier {#dossier}

Azéndas did not come to the priesthood by the usual road. Born to a freeman family in rural Vylaria, he spent his young years as what soldiers call a contract man — hired out to provincial warlords and trading companies, riding with militia bands along the borderlands of a shrinking empire. The work was brutal, the pay uncertain, the cause never clear. What he took from those years was horsemanship, endurance, and the arithmetic of staying alive. The dragon on his arm says he survived the Harad campaign; he was one of the few who got out before the independence forces overran the eastern province, twelve years ago.

The mercenary roads closed, as they do, and he came to Tyrellan with a great deal of experience, few skills anyone wanted, and a tiredness that went all the way down. He hired on as a farmhand, then as steward of a modest estate, and learned planting and harvest with the same concentration he had once given to war. An old priestess of Flórania watched the soldier's hands trying to coax life out of the soil and told him he had the makings of a healer. The idea took, and grew.

At forty-five he serves the farms and villages of Tyrellan with the discipline he once gave to fighting. He keeps the Temple of Flórania's seasonal round — the blessing of the fields at the spring ploughing, the harvest thanksgiving that brings whole villages in — and his name has grown on results, not words; he speaks plainly and sometimes harshly. Cattle he has blessed rarely sicken. The remedies he compounds ease a hard birth. Fields tended by Flórania's rule bear while the imperial roads crumble around them, and in a province being slowly strangled by decline he has become necessary.

The decline weighs on him. He watches the roads go unrepaired, counts fewer caravans reaching Tyrellan each year, sees the towns that lived on imperial trade go hungry. The farms he serves grow more desperate and more exposed. In a dying empire, he knows, a priesthood is either the last order left standing or one more mouth at the trough, and he means to be the former — a healer, and a wall.

## Psyche

Two temperaments live in Azéndas and do not sit easily together. The soldier is methodical, practical, impatient with sentiment; he believes in discipline, clear rank, and methods that have been tried. The priest has learned a real tenderness, rooted in his own years as a helpless labourer and as a soldier who saw too much. The result is a man who can be blunt to the point of cruelty about policy or change and gentle past expectation with the sick and the dying.

He is stubborn to rigidity where he has made up his mind. Once a farming method has worked for him, or a remedy, he resists anyone who proposes another; to him that is not narrowness but the earned judgement of a man who knows that uncertainty gets people killed. He is a poor speaker and cannot persuade by rhetoric, so he relies on results and on the weight of his presence, and when those fail he grows frustrated, and then contemptuous.

Under the hardness is the man who chose the priesthood because he could not stomach one more pointless killing. His feeling for the suffering, farmers and labourers above all, is real and deep. He has given up comfort and advancement to stay in Tyrellan rather than climb the Temple's ladder, and that was a choice, not an accident.

What drives him is the need to make a difference he can see in a world coming apart. Mercenary work taught him that glory is a lie and honour costs more than it is worth, so he builds things that last: a healthy harvest, a child who lives, a village that can stand the empire's fall. He no longer asks whether change is possible in the large. He asks whether the next village will eat and whether the next dying woman will be in less pain, and he pursues those two questions as hard as he ever pursued a war.

## Social

Azéndas holds the rank of Senior Priest of Flórania for the Tyrellan region, nominally under the Temple hierarchy in Vylaria's capital and in practice his own master on his rural circuits. The Temple trusts him because he asks for little and delivers: harvests blessed under his eye feed the Temple's charity, and his medicine has grown precious as Vylaria's formal physicians grow scarce.

Among the farming classes his standing cannot be shaken. He keeps his word; he can be trusted with the Temple's secrets and a dying person's last wishes; and the farmers leave a share of their harvest at the temple not from habit but because they have watched his blessing turn into survival. Among the free commons his position is as secure as a lord's.

The upper clergy and the senatorial class regard him with respect and a faint dismissal. He is "useful" — a priest who keeps the countryside fed, quiet and devout without costing the capital anything. He also carries the stain of the mercenary years, still whispered about, speaks without polish, and takes no interest in the capital priesthood's quarrels. The reform-minded priests find his old methods and his resistance to changing temple practice reactionary; the traditionalists value his steadiness and find his lack of ambition odd.

He belongs to no faction, on purpose. His loyalty is to Flórania and to the farming communities, in that order.

## Companions

**Patrons:** The farmers and village elders of the Tyrellan circuit are his true patrons. Chief among them is Elder Vasken of Millhaven, a former militia commander now in his seventies, who first pushed Azéndas toward the healing work and who gives him shelter and local political cover whenever the Temple questions his methods. In the capital the Temple Matriarch, Avrella Corisande, respects the work enough to defend his independence, and wishes he wanted more.

**Enemies:** Azéndas has few personal enemies and has collected opponents by refusing to bend. The land-merchant Dorian Fitch, who is gathering failing farmland into great estates, sees the priest's work of shoring up smallholders as a direct obstacle; they have clashed twice over water rights. Several younger priests in the hierarchy resent his influence and his old-fashioned ways and count him an obstacle to modernising the Temple. And somewhere in the failing provinces there may still be contract soldiers who remember his face from the Harad campaign and hold grudges he does not know he owes.

## Plot Hooks

1. **The Failing Harvest** — A blight moves through the Tyrellan grain despite his blessings and his remedies, and the more superstitious farmers begin to say Flórania has withdrawn her favour. The blight is something new, perhaps carried in on caravans from the dying east, and beyond his methods. He has to go to the capital's great libraries and the Temple's scholars before the villages lose their faith in him altogether.
2. **A Mercenary's Shadow** — A woman comes to Tyrellan claiming to be the widow of a man Azéndas fought beside in Harad, carrying a debt only he can settle. She wants to know where a missing shipment of weapons lies cached in the region, and she is ready to wreck his name as a man of peace to get it. The life he has built, or a blood-debt from the one he left.
3. **Imperial Authority** — A new imperial auditor, bent on modernising the province's tax collection, arrives in Tyrellan and suspects at once that the Temple's tithes are going to feed the people rather than fill the treasury. She demands the temple's records and an account of why the blessed harvests show so little "official yield." Falsify the books, or let the Temple's charity be exposed and, in all likelihood, shut down.
4. **The Plague Bearer** — A caravan comes into one of his villages carrying goods and a fever that kills fast. Azéndas knows it from the eastern wars: the kind of sickness that breeds in an army's camp. Seal the village — and doom the trapped merchants and perhaps the village's livelihood — or risk the fever spreading while he searches for a cure.
5. **The Successor Question** — His health begins to fail, not dramatically, but enough that he recognises what is coming. The Temple wants a younger, better-connected priest in the Tyrellan circuit; he fears what that would bring. Train a successor who will keep what he has made, accept the Temple's choice, or fight to hold a post he may soon be unable to fill.
