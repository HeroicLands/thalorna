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
  born: 679/3/22
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

Azéndas Dâemâtôr is a 45-year-old man who stands 6'1" tall and is broad and solidly built. He has a diamond face with prominent cheekbones, a narrow forehead, and an angular jaw that leads to a firm chin. His almond-shaped blue eyes sit beneath heavy brows and give him a measured gaze. He has a straight nose and wide lips. He has tanned skin with a weathered complexion. His dark brown hair is short and swept back.

The dragon tattooed around his upper arm tells a story he rarely discusses—a coiled beast inked in deep black and rust, the kind of mark men earn in distant wars or mercenary camps. The tattoo has faded with time and sun exposure, its edges softened but unmistakable. Those familiar with such things recognize it as the mark of a soldier, though Azéndas turned toward Flórania's green blessing long ago.

# Dossier {#dossier}

Azéndas did not come to the priesthood by the expected path. Born into a freeman family in rural [[place-vylariargn|Vylaria]], he spent his younger years as what soldiers call a "contract man"—hired out to provincial warlords and trading companies, riding with militia bands across the declining empire's borderlands. The work was brutal, the pay inconsistent, and the cause always uncertain. Somewhere in those blood-soaked years, he learned horsemanship, endurance, and the hard mathematics of survival. The dragon on his arm marked him as a survivor of the Harad campaign, though he was among the fortunate few who escaped before the independence forces overran the eastern province twelve years ago.

As the mercenary roads began to close—as they always do—Azéndas found himself in Tyrellan with few skills but considerable experience and a deep weariness. He took work as a farmhand, then as a steward for a modest estate, learning the cycles of planting and harvest with the intensity he'd once applied to warfare. It was an old priestess of Flórania, seeing the warrior's hands trying to coax life from the soil, who first suggested he had the makings of a healer. That suggestion took root in him like seed in good earth.

Now, at forty-five, Azéndas serves the farming communities and villages throughout Tyrellan with the same disciplined commitment he once gave to combat. He oversees the Temple of Flórania's seasonal festivals—the blessing of the fields at spring plowing, the harvest thanksgiving festivals that draw entire villages. His reputation grows not from eloquence—he speaks plainly, sometimes harshly—but from results. Cattle blessed under his rituals rarely sicken. Herbal remedies he compounds ease childbirth complications. Crops tended with Flórania's wisdom flourish even as the imperial roads and works crumble elsewhere. In a realm gradually strangled by economic decline, Azéndas has become essential.

Yet the decline troubles him deeply. He watches the imperial roads fall into disrepair, sees fewer merchant caravans arriving in Tyrellan, witnesses the slow starvation of the towns that depended on imperial trade. The farming communities he serves grow more desperate, more vulnerable. He knows that in a dying empire, the priesthood becomes either the last holdfast of civilized order or merely another hungry mouth competing for scraps. He works as a healer and as a bulwark, trying to hold back chaos through old knowledge and care.

## Psyche

Azéndas carries two distinct temperaments in uneasy tension. The soldier in him is methodical, pragmatic, resistant to sentiment—he believes in discipline, clear hierarchy, and proven methods. The priest in him has learned compassion, a fellow-feeling rooted in his years as a helpless laborer and a soldier who saw too much suffering. This conflict manifests as someone who can be blunt to the point of cruelty when discussing policy or change, yet very gentle with the sick and dying in his care.

He is stubborn, even rigid, in matters where he has formed conviction. Once he has determined that a farming method works, or that a herbal treatment is effective, he resists those who advocate different approaches. He sees this not as closed-mindedness but as the hard-won wisdom of experience—a soldier's judgment that uncertainty gets people killed. He is no speaker and cannot persuade through rhetoric; he relies on demonstrated results and on being known to be right. When those fail to convince, he grows frustrated and sometimes contemptuous of those he deems foolish.

For all this hardness, he chose the priesthood because he could no longer stomach meaningless violence. His feeling for the suffering, particularly for farmers and laborers, is real and runs deep. He tends the dying with a tenderness that surprises those who know only his gruff exterior. He has sacrificed comfort and personal advancement to remain in Tyrellan rather than seek higher station in the Temple hierarchy—a choice born of real commitment to the people he serves.

What drives Azéndas is the need to make a tangible difference in a collapsing world. Having learned through mercenary work that glory is a lie and honor is expensive, he seeks instead to build something that lasts: healthy harvests, living children, communities resilient enough to weather the empire's decline. He no longer asks whether change is possible in the grand sense; he focuses instead on whether he can stave off hunger in the next village and ease the pain of the next dying woman. It is a small ambition, but one he pursues with the same uncompromising intensity he once gave to war.

## Social

Azéndas holds the formal rank of Senior Priest of Flórania in the Tyrellan region, answerable nominally to the Temple hierarchy in Vylaria's capital but exercising near-total autonomy in his rural circuits. The Temple trusts him precisely because he asks for so little and delivers consistent results—harvests blessed under his watch feed the temple's institutional charity, and his medical knowledge has become indispensable as Vylaria's formal physicians grow scarce.

Among the farming classes, his standing is unassailable. He is known as a man who keeps his word, who can be trusted with the temple's secrets and a dying person's final wishes. Farmers leave portions of their harvest at the temple not out of blind tradition but because they have seen Azéndas's blessing translate into tangible survival. His status among the free commons is almost aristocratic in its stability.

Yet among the Temple's upper clergy and certainly among Vylaria's senatorial class, he is regarded with a complex mixture of respect and faint dismissal. He is "useful"—a priest who keeps the rural populations fed, calm, and devotional without requiring expensive imperial support. But he carries the stain of his mercenary past (whispered about even now), speaks without courtly refinement, and shows little interest in the intramural politics that consume the capital's priesthood. Some reform-minded priests see his traditional methods and resistance to changing temple practice as reactionary; some of the traditional faction appreciate his steadfastness but find his lack of ambition peculiar.

He is not part of any faction, by design. His alliance is with Flórania and with the farming communities, in that order.

## Companions

**Patrons:** The farmers and village elders of the Tyrellan circuit are Azéndas's true patrons. Specific among them is Elder Vasken of Millhaven, a former militia commander now in his seventies, who first encouraged Azéndas to take up healing work and who provides shelter and local political cover whenever the Temple hierarchy questions his methods. The Temple Matriarch in the capital, Avrella Corisande, respects his work enough to defend his autonomy, though she wishes he were more ambitious.

**Enemies:** Azéndas has few personal enemies, but he has accrued opponents through his refusal to compromise. The land-merchant Dorian Fitch, who seeks to consolidate failing farmland into vast estates, views Azéndas's work strengthening small-holder farmers as direct opposition to his ambitions—they have clashed twice over water rights. Several younger priests in the Temple hierarchy resent his influence and his old-fashioned methods, viewing him as an obstacle to reform. And somewhere in the declining provinces, there may still be former contract soldiers who remember Azéndas's face from the Harad campaign and bear him grudges he does not even know about.

## Plot Hooks

1. **The Failing Harvest**—A blight spreads through the Tyrellan grain fields despite Azéndas's blessings and remedies, and superstitious farmers begin to whisper that he has lost Flórania's favor. In truth, the blight is something new, perhaps carried on merchant caravans from the dying eastern provinces, and requires him to venture beyond his known methods. He must travel to the capital's great libraries to consult with the Temple's scholars before the community loses faith entirely.

2. **A Mercenary's Shadow**—A woman arrives in Tyrellan claiming to be the widow of a man Azéndas once fought beside in Harad, and she carries a debt that only he can pay. She needs information about a missing shipment of weapons that may still be cached in the region, and she's willing to destroy his reputation as a man of peace to get it. The life he has built and a blood-debt from his violent past cannot both be honored.

3. **Imperial Authority**—A new imperial auditor, aggressively reforming rural Vylaria's tax collection, arrives in Tyrellan and immediately suspects that the Temple's tithes are being misdirected toward feeding the population rather than filling imperial coffers. She demands Azéndas open the temple's records and justify why the harvest blessings yield so little "official yield." Azéndas must either falsify records or allow the Temple's charity work to be exposed—and likely shut down.

4. **The Plague Bearer**—A merchant caravan arrives in one of Azéndas's circuit villages carrying, along with its goods, the seeds of a fever that kills rapidly. Azéndas recognizes it as something from the eastern wars—the kind of sickness that military camps bred. He can isolate the village completely, dooming the trapped merchants and perhaps the village's trade, or risk spreading the contagion to neighboring communities while he seeks a cure.

5. **The Successor Question**—Azéndas's health begins to fail subtly—nothing dramatic, but enough for him to recognize mortality's approach. The Temple hierarchy wants to install a younger, politically connected priest to take over the Tyrellan circuit, but Azéndas fears the institutional changes this would bring. He must either groom a successor who will preserve his legacy, accept the Temple's choice, or fight to maintain control of a post he may soon be unable to fill effectively.
