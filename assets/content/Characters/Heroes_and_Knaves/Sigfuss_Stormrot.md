---
tags:
  - heroes-and-knaves
  - common-folk
  - character
name:
  full: Sigfúss Stormrót
  title: ""
  given: Sigfúss
  clan: Stormrót
  home: bjornstad
  aliases: []
packFolder: ankarisnordlands
shortcode: sigfstrmrt
type: being
data:
  icon: icon-person
  templatePriority: null
  archetypes: []
  occupation: Common Seaman
  stations: []
  lore:
    - commonerrnk
  homes:
    - nrdlndsrgn
  affiliations:
    - kngdmvthgrd
  gender: male
  species: null
  born: 690/2/15
  height: 1.88
  weight: 83.5
  frame: medium
  appearance:
    eye_color: blue
    hair_color: brown
    skin_color: tanned
    complexion: weathered
    extra_features: []
sohl:
  items:
    - { model: sohl-sohl-attribute-str, system: { scoreBase: 13 } }
    - { model: sohl-sohl-attribute-end, system: { scoreBase: 15 } }
    - { model: sohl-sohl-attribute-dex, system: { scoreBase: 14 } }
    - { model: sohl-sohl-attribute-agl, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-per, system: { scoreBase: 16 } }
    - { model: sohl-sohl-attribute-cml, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-aur, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-wil, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-rea, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-cre, system: { scoreBase: 11 } }
    - { model: sohl-sohl-attribute-emp, system: { scoreBase: 10 } }
    - { model: sohl-sohl-attribute-elo, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-mor, system: { scoreBase: 12 } }
    - { model: sohl-sohl-attribute-voi, system: { scoreBase: 10 } }
    - { model: affiliation-freyja }
    - { model: sohl-sohl-skill-brew, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-cook, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-embl, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-folklr, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-law, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-shpw, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-cmd, system: { masteryLevelBase: 24 } }
    - { model: sohl-sohl-skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: sohl-sohl-skill-guil, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-intr, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-sing, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-thtcs, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-agri, system: { masteryLevelBase: 14 } }
    - { model: sohl-sohl-skill-fish, system: { masteryLevelBase: 56 } }
    - { model: sohl-sohl-skill-herb, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-pilt, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-smsh, system: { masteryLevelBase: 70 } }
    - { model: sohl-sohl-skill-srvl, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-awar, system: { masteryLevelBase: 42 } }
    - { model: sohl-sohl-skill-clmb, system: { masteryLevelBase: 65 } }
    - { model: sohl-sohl-skill-dnce, system: { masteryLevelBase: 48 } }
    - { model: sohl-sohl-skill-jump, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-ridg, system: { masteryLevelBase: 11 } }
    - { model: sohl-sohl-skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: sohl-sohl-skill-swim, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-skill-archery, system: { masteryLevelBase: 15 } }
    - { model: sohl-sohl-skill-init, system: { masteryLevelBase: 33 } }
    - { model: sohl-sohl-skill-melee, system: { masteryLevelBase: 26 } }
    - { model: sohl-sohl-skill-thro, system: { masteryLevelBase: 30 } }
    - { model: sohl-sohl-skill-draw, system: { masteryLevelBase: 13 } }
    - { model: sohl-sohl-weapongear-shrtswd }
    - { model: sohl-sohl-weapongear-dgr }
    - { model: sohl-sohl-armorgear-wtunic }
    - { model: sohl-sohl-armorgear-lnbrch }
    - { model: sohl-sohl-armorgear-ltcboot }
    - { model: sohl-sohl-armorgear-wclk }
    - { model: sohl-sohl-armorgear-wcap }
    - name: Rope (coil)
      type: miscgear
      system:
        shortcode: rope
        quantity: 2
        weight: 1
        value: 100
        durability: 3
    - name: Navigation tools (compass, sextant)
      type: miscgear
      system:
        shortcode: navigationtools
        weight: 0.3
        value: 100
        durability: 3
    - name: Fishing gear and hooks
      type: miscgear
      system:
        shortcode: fishinggearandhooks
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-miscgear-tndrbx }
    - { model: sohl-sohl-miscgear-frtns, system: { quantity: 4 } }
    - name: Fishing net (compact, rolled)
      type: miscgear
      system:
        shortcode: fishingnet
        weight: 1
        value: 100
        durability: 3
    - { model: sohl-sohl-containergear-bgsmcvs }
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

![[sigfstrmrt|Sigfúss Stormrót]]{float: top-left}

Sigfúss stands 6'2" tall with a medium build. He has tanned weathered skin, brown hair, and blue eyes. His features include an oblong face, a narrow nose, a broad chin, a small mouth, thick brows, and high cheeks.

# Dossier {#dossier}

Sigfúss was born in [[place-bjornstad|Bjornstad]], a minor coastal settlement of the [[affiliation-kngdmvthgrd|Kingdom of Vithgard]], to parents of modest means. His mother, **Ragnhildr**, ran a small inn catering to sailors, while his father, **Jostein Stormrót**, was himself a ship's navigator until a boarding accident left him partially crippled. Rather than burden his aging parents further, Sigfúss took to the sea at fourteen, climbing the ranks from cabin boy through sheer competence and an intuitive understanding of ships and seafaring.

For sixteen years, Sigfúss has served aboard merchant vessels, fishing fleets, and occasionally military patrol ships contracted to Vithgard's coastal defense. He has sailed the Crystalline Straits, the Shattered Archipelago, and the dangerous shoals of the Merchant's Passage, surviving tempests that sank larger, better-equipped vessels. His reputation is earned through uncountable small acts of seamanship—the ability to read weather before it manifests, to navigate by stars when maps fail, to remain calm when the deck pitches forty degrees and the masts groan with the strain of violent wind.

Five years ago, after the death of his father, Sigfúss briefly returned to Bjornstad to secure his mother's future, purchasing property in her name from his accumulated wages. Satisfied that she would never want, he returned to the sea—his truest home.

## Psyche

### Personality

Sigfúss possesses the easy confidence of a man comfortable in his domain and secure in his competence. He is neither arrogant nor boastful; simply untroubled by doubt. In crisis, he becomes crystalline in focus, his mind operating with preternatural clarity. Outside of emergencies, he is gregarious and quick to laugh, entertaining crew with tales of impossible catches and narrow escapes told with theatrical flair. He views himself as servant of Fréyja, goddess of prosperity, and attributes his survival of multiple storms to her grace.

His philosophy is fundamentally practical. He sees little point in unnecessary worry or elaborate planning when experience has taught him the sea's true nature—unpredictable, dangerous, beautiful, and ultimately indifferent to human pretense. This makes him seem cavalier to those who don't understand him, though in reality, he has absorbed decades of sea knowledge into instinct that appears intuitive but is grounded in close observation.

### Motivation

Sigfúss sails because it is what he is—the sea is his whole self as well as his occupation. He accumulates wealth not for luxury but for security and freedom; having enough coin means never being forced to ship aboard a vessel or captain he distrusts, never being compelled to accept degrading work. There is also a quieter motivation: a need to prove that his father's disability and early death need not define family destiny, that through strength and persistence, one can escape poverty and claim a real say in one's fate in a harsh world.

### Strengths

- **Supernatural Navigation**: Sigfúss can read weather patterns hours before they fully manifest and navigate by stars, currents, and the flight patterns of seabirds with accuracy that seems almost prescient. He has brought ships to port through storms that should have claimed them.
- **Expert Seamanship**: Decades of practical experience at sea translate into a mastery of ship-handling, rigging, knot-work, and improvised repairs. He can coax a damaged vessel to harbor through sheer ingenuity.
- **Crew Leadership**: Though he holds no official rank, sailors instinctively follow his guidance. He possesses the rare ability to maintain morale and discipline without resorting to tyranny, earning respect through competence and fairness.
- **Environmental Intuition**: His perception of the natural world extends beyond water to weather, wildlife, and survival. He can provide food and freshwater where others would perish.
- **Calm Under Extreme Pressure**: Combat, disaster, and catastrophe do not rattle Sigfúss. His mind operates more clearly during crisis, enabling decisive action when others freeze.

### Weaknesses

- **Contempt for Authority**: Sigfúss chafes under rigid hierarchies and bureaucratic nonsense. Captains who rule through fear or blind adherence to rules without pragmatic consideration find him insubordinate and troublesome, despite his competence.
- **Wanderlust Over Commitment**: His loyalty to any single employer or captain rarely exceeds a year or two. He perpetually hears the call of the horizon and grows restless with routine.
- **Recklessness in Confidence**: His faith in his own abilities sometimes crosses the line into dangerous overconfidence. He will attempt risky maneuvers that could endanger the entire crew, believing his skill sufficient to overcome any hazard.
- **Poor Administrative Skills**: Sigfúss is hopeless with paperwork, contracts, and negotiation. He leaves himself vulnerable to exploitation by clever merchants and unscrupulous captains who take advantage of his disinterest in financial detail.
- **Emotional Distance**: His comfort at sea translates to discomfort in cities and with land-dwellers. He struggles to maintain relationships beyond the crew, leaving him fundamentally alone despite his gregariousness.

## Social

### Patrons

- **Captain Thorgrim Ironhull**: A grizzled merchant captain whose aging vessel has become famous across the northern routes. He brings Sigfúss aboard whenever his schedule allows, calling him "the best navigator in Vithgard's service." Thorgrim has twice promoted Sigfúss to first mate, though Sigfúss has refused permanent rank.
- **Merchant Princess Astrid Gylvedóttir**: A wealthy trading magnate who contracts sailors for her extensive merchant fleet. She has offered Sigfúss command of her flagship multiple times, recognizing his value and offering wages that would set him for life. His refusals perplex and intrigue her.
- **The Fishermen's Collective of Bjornstad**: Local fishing masters who regularly hire Sigfúss for particularly dangerous catches or rescue operations. They consider him family and see that he always has work.
- **The Lighthouse Order**: Keepers of navigational beacons along Vithgard's coast. They maintain informal communication with Sigfúss, warning of hazardous conditions and occasionally requesting specific intelligence about distant waters.

### Enemies

- **Harbormaster Hrandvir Hvalgendikh**: An official charged with the ordering of the port in Vithgard's capital. Hrandvir views Sigfúss as a troublemaker who flouts maritime law and encourages crew insubordination. Their conflicts are frequent and bitter.
- **Captain Ragnar Thraldarukh**: A rival sailor who captains a merchant vessel and views Sigfúss as competition for the most prestigious contracts. Ragnar has twice maneuvered to undercut Sigfúss's negotiations through lies and political leverage.
- **The Smugglers' Network**: Criminal elements operating across the Vithgard coast view Sigfúss as a threat because he occasionally reports suspicious activity to maritime authorities and refuses to accept smuggling contracts regardless of payment.

### Affiliations

- **The Seafarers' Guild of Vithgard**: Though maintaining independence, Sigfúss is a registered member in good standing, benefiting from the guild's information networks about routes, hazards, and available work.
- **The Crew of the _Stormrider_**: Though not officially organized, Sigfúss maintains bonds with the rotating crew of his preferred vessel, and they actively seek his continued involvement in their ventures.

## Plot Hooks

1. **The Lost Expedition**: A wealthy scholar approaches Sigfúss with a commission to sail to the Shattered Archipelago in search of **ancient ruins of the Old Kingdom**, believed to hold libraries of lost knowledge. The last expedition to find them vanished seven years ago without sending word. The scholar, **Magister Haldón**, is willing to pay extraordinary sums, but Sigfúss discovers through cautious inquiry that the last crew encountered something in the deep caves that drove survivors mad. The archipelago itself seems to resist mapping—charts reveal contradictory information, and sailors report islands that weren't where they should be. The astronomical pay is set against investigating something that suggests the islands themselves are concealed by magic or a living intelligence.

2. **The Mutiny Prophecy**: Sigfúss joins the crew of the merchant vessel _Gyllir's Fortune_ under a captain he's worked with before, **Captain Thraskvir Draskendikh**. Everything seems standard until the ship's seer, an ancient woman named **Völva Skadi**, pulls Sigfúss aside and describes a vivid vision: him standing over Thraskvir's corpse, sword in hand, crew watching in horror. She insists this future is "written in bone and blood" and that it will come to pass within the next lunar cycle. Sigfúss initially dismisses this as superstition, but when he begins witnessing small events that align with the prophecy's details, doubt creeps in. Meanwhile, tensions simmer among the crew due to Thraskvir's increasingly erratic and brutal leadership. Sigfúss has to steer between accepting a destiny he doesn't wish to fulfill and preventing a real tragedy born from poor captaincy.

3. **The Leviathan's Wake**: Fishing vessels across the northern routes report unprecedented losses—ships returning with massive holes in their hulls, survivors speaking of something colossal moving beneath the waves. Merchant Princess Astrid commissions Sigfúss to investigate and locate this creature before it destroys commerce in her waters. The deeper the investigation goes, the more Sigfúss realizes this is not a natural creature: ancient texts recovered from sunken ships reference a being of living water called **Maelstrom**, bound by ritual into the depths centuries ago. Its binding appears to be failing, and its awakening could devastate all coastal civilizations. Sigfúss can attempt the nearly suicidal task of re-binding the creature, seek out the scholar who might know the original ritual, or accept that some forces cannot be stopped.

4. **The Stormrider's Secret**: Sigfúss's favored vessel, the _Stormrider_, begins exhibiting impossible behavior—sails steering themselves, the helm responding to commands no one gave, the ship moving against wind and current as though guided by an invisible hand. The crew grows terrified, suggesting the ship is cursed or possessed. Sigfúss, however, suspects something more complex: during routine repairs, he discovers carvings in the hold he doesn't remember being there—navigation symbols and ritual marks that seem deliberately constructed. Investigation reveals the ship was commissioned by a mage decades ago as a "thinking vessel," designed to guide itself through dangerous waters. The mage apparently placed a fragment of his own consciousness into the ship's construction. Now, this consciousness is awakening after decades of dormancy, and it has its own purposes. Sigfúss must negotiate with an entity that is partly his beloved ship and partly something wholly alien, all while the crew demands he find a way to "cure" the vessel.

5. **The Divided Crown**: Civil war threatens to tear Vithgard apart as two noble claimants dispute succession to the throne. Both sides offer Sigfúss staggering sums to use his ship's speed and stealth to transport military supplies, reconnaissance, or even assassination targets. Despite his usual political indifference, Sigfúss discovers that the legitimate claimant is actually his distant cousin through his mother's line, someone he never knew existed. The other claimant, while politically skilled, has already demonstrated willingness to execute political opponents without trial. Sigfúss has treacherous waters to cross, at sea and in politics alike, and the question is whether remaining neutral is still possible or his family duty and his conscience demand he choose a side in a conflict that could consume Vithgard.
