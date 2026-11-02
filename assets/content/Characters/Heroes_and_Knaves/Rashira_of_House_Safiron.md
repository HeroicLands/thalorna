---
shortcode: rshrhssfrn
name:
  full: Rashira of House Safiron
  given: Rashira
  clan: Safiron
  en: [The Keeper of the Purple Warrant, The Renegade Grammatissa]
type: being
subType: character
tags: [heroes-and-knaves, hero, administration]
data:
  icon: icon-person
  templatePriority: null
  archetypes: [scholar]
  occupation: Grammatissa (Records-Keeper)
  lore: []
  culture: bethuanclt
  homes: [bethura]
  affiliations: {mtrrchybth: {rank: 3}, marendas: {rank: 1}}
  gender: female
  species: humanflk
  born: 681.265
  height: 5' 5"
  weight: 134 lbs
  frame: medium
  appearance:
    eye_color: hazel
    hair_color: black
    skin_color: dark_brown
    complexion: [clear]
    extra_features: []
  packFolder: northernfertileregionbethua
sohl:
  items:
    - {model: sohl-sohl-attribute-str, system: {scoreBase: 9}}
    - {model: sohl-sohl-attribute-end, system: {scoreBase: 10}}
    - {model: sohl-sohl-attribute-dex, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-agl, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-per, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-cml, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-aur, system: {scoreBase: 11}}
    - {model: sohl-sohl-attribute-wil, system: {scoreBase: 15}}
    - {model: sohl-sohl-attribute-rea, system: {scoreBase: 16}}
    - {model: sohl-sohl-attribute-cre, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-emp, system: {scoreBase: 12}}
    - {model: sohl-sohl-attribute-elo, system: {scoreBase: 14}}
    - {model: sohl-sohl-attribute-mor, system: {scoreBase: 13}}
    - {model: sohl-sohl-attribute-voi, system: {scoreBase: 12}}
    - {model: skill-qalzscrscrpt, system: {masteryLevelBase: 78}}
    - {model: sohl-sohl-skill-runic, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-common, system: {masteryLevelBase: 70}}
    - {model: skill-bethunlng, system: {masteryLevelBase: 44}}
    - {model: sohl-sohl-skill-law, system: {masteryLevelBase: 62}}
    - {model: sohl-sohl-skill-math, system: {masteryLevelBase: 58}}
    - {model: sohl-sohl-skill-mrcn, system: {masteryLevelBase: 55}}
    - {model: sohl-sohl-skill-hrld, system: {masteryLevelBase: 60}}
    - {model: sohl-sohl-skill-folklr, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-mysticalability-astr, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-intr, system: {masteryLevelBase: 52}}
    - {model: sohl-sohl-skill-guil, system: {masteryLevelBase: 48}}
    - {model: sohl-sohl-skill-dscr, system: {masteryLevelBase: 50}}
    - {model: sohl-sohl-skill-chrm, system: {masteryLevelBase: 38}}
    - {model: sohl-sohl-skill-awar, system: {masteryLevelBase: 40}}
    - {model: sohl-sohl-skill-stlth, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-init, system: {masteryLevelBase: 30}}
    - {model: sohl-sohl-skill-dge, system: {masteryLevelBase: 24}}
    - {model: sohl-sohl-skill-draw, system: {masteryLevelBase: 28}}
    - {model: sohl-sohl-weapongear-dgr}
    - {model: sohl-sohl-armorgear-wtunic, name: Travelling clothes (worsted)}
    - {model: sohl-sohl-armorgear-wclk}
    - name: The Purple Warrant (the stolen original — crown purple-dyed vellum under the Naukrátissa's unforgeable seals)
      type: miscgear
      system: {shortcode: thepurplewarrant, weight: 2, value: 0, durability: 2}
    - name: Scribe's writing kit (reeds, inks, wax, seals)
      type: miscgear
      system: {shortcode: scribeswritingkit, weight: 2, value: 120, durability: 3}
    - {model: sohl-sohl-miscgear-tndrbx}
    - {model: sohl-sohl-miscgear-frtns, system: {quantity: 4}}
    - {model: sohl-sohl-miscgear-gldcrwn, system: {quantity: 30}}
    - {model: sohl-sohl-containergear-bpchlg}
    - {model: sohl-sohl-containergear-wtrskin}
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

Rashira is a woman of middle years, slight and upright, with the ink-stained composure of someone who has spent a lifetime among documents rather than in the sun. She stands 5'5" with a medium frame beginning to soften. Her skin is dark and olive-toned, her black hair shot with early gray and bound back severely, and her hazel eyes are quick and appraising. Her hands are fine and careful, the right forefinger permanently calloused where the reed-pen rests. Since taking flight she has traded her office robes for plain traveling worsted and a heavy cloak, and she carries herself with the wary stillness of the hunted.

# Dossier {#dossier}

## Background

### Origin and Early Life

Rashira was born to [House Safiron]{.name data-type="affiliation/lineage"}, a lettered but middling House of [[place-bethura|Bethura]] whose women had served the realm's offices for generations—not as Dómissai of great estates, but as the literate functionaries on whom any matriarchy of clerks and qanats must ultimately depend. Where wealthier daughters were raised to command land and arms, Rashira was raised to command the written word. She showed an early and unusual gift for it: for scripts and ciphers, for the dense legal [[skill-bethunlng|Bethuan]] of warrants and writs, and for the patient memory that lets a keeper of records hold a whole archive in her head.

### The Grammatissa's Office

She rose through the scribal administration on merit and discretion, the two virtues the [Court of the Veil]{.name data-type="affiliation/governmental"} prizes above all others, until she was made a senior **Grammatissa** of the Naukrátissa's office in [[affiliation-bethuanflt|the Bethuan Fleet]]—a records-keeper trusted with the most sensitive correspondence of the realm's sea-power. In time she was given charge of the sealed rolls of the [Purple Warrant]{.name data-type="miscgear"}: the master register of the crown's deniable war on [[place-vylarianse|Vylarian]] shipping. For the better part of two decades she kept that secret faithfully, copying, sealing, and amending the rolls as ships were commissioned and lost. Few people alive understood the machinery of Bethua's privateer war as completely as the quiet woman who wrote it all down.

### The Break

What turned her, she says, was not coin and not [[affiliation-vylarinmpr|Vylaria]]. It was the rolls themselves. Year by year, entry by entry, Rashira had watched the deniable war curdle into something with no honest defense. The register did not record a hard necessity of state; it recorded a racket. Most of the "patriot privateers" were nothing of the kind—they were simple criminals, women who burned crews and coastal villages for plunder and answered to no cause but their own profit. And the proceeds did not shore up the realm: they flowed upward, into the coffers of the Great Houses and the Court of the Veil and, at the summit, Metrissa [Amithena of House Kervanion]{.name data-type="being/npc"} herself, who grew rich on the crime with no discernible benefit to [[affiliation-mtrrchybth|Bethua]] at all. The whole edifice of _raison d'etat_—the deniable war, the noble necessity, the cause that justified the blood—was a fig leaf over organized robbery for private gain.

She did not come to the decision quite alone. For some time she had been close—closer than was wise—to a foreign trading factor named [[being-casiaveric|Kassa Verris]], a warm, easy woman who listened as no one in the Naukrátissa's office ever had, and who urged her, gently and without relenting, to _do the right thing_: to take what she knew and bring the rot into the light. Only later would Rashira fully admit what she had half-known all along—that Kassa was a Vylarian agent, and that the light she meant was Vylaria's own. That knowledge is part of why, when the moment finally came, Rashira did not carry the Warrant to her lover at all. She would not be made the empire's weapon against her own land; if the truth was to do its work, it would be on her terms and no one else's. So she took the original and ran—not to Kassa, and not north to the Vylarian ports she was expected to seek, but the other way entirely.

Worse than the profiteering was the betrayal woven through it. The rolls showed the matriarchy secretly preying on its own patron, [[affiliation-empireakhlth|Empire of Au'Khelathu]]—the empire whose backing is the sole guarantor of Bethuan independence. Bethuan privateers, in league with the [[affiliation-empireakhlth|Empire of Au'Khelathu]] tomb-robber syndicates, had been raiding [[lore-khelathiclt|Khelathi]] shipping and fencing plundered grave-goods lifted from the royal and noble necropoli: the desecration of the dead, the gravest sacrilege the Khelathi know, an offense against [[lore-qearetdty|Qe'aret]] and the gods themselves. The register names the captains, the backing Houses, the Khelathi fences, the assets and informants—and, in places, reaches high enough to touch a Halzi'a, a temple, perhaps the [[lore-garauu|Gar-Auu]]'s own house. The [[affiliation-marendas|Faith of Marendas]] that Rashira keeps quietly—devoted to [[lore-marendasdty|Marendas]], Keeper of Sacred Wisdom—holds that knowledge is a trust and not a weapon; somewhere in the keeping of so much secret blood, she came to believe she served a rot she could no longer copy out in a fair hand. She took the sealed original, walked out of the Naukrátissa's office, and did not come back.

### The Register and the Proof

There is exactly one register, and Rashira carries it. She had no chance to copy it—she took the original and ran before it could be found missing—and even had she the time, a copy would have been almost worthless. The Purple Warrant is written on **crown purple vellum**, a dyed stock that is a state monopoly, impossible to obtain privately, reserved for the commissions of the crown; it is inscribed in the recognized hands of the Naukrátissa's office and closed under **seals no forger can reproduce**. A copy made by any other hand on any other parchment is, by its nature, a forgery—and Bethua can wave away a forgery with a shrug. Only the purple original, seals intact, is _incontrovertible_. It is the single object in the world that can prove the matriarchy a profiteer, an oath-breaker, and a despoiler of the Khelathi dead.

This is why the original is everything, and it shapes the whole hunt. The proof in Rashira's saddlebag is irreplaceable, fragile, and singular: destroy it and the threat is over forever; the truth becomes one woman's deniable word. A faithful copy, were one ever made, would be worthless as proof but priceless as _intelligence_—every privateer, warrant, backing House, target, asset, and informant laid bare, enough to roll up the entire network. And Rashira's own knowledge is the least of the three: useful, transferable, but deniable, and dangerous to her enemies only because she lives to speak it and to swear to the register's truth. The artifact, then the copy that does not yet exist, then the woman—that is the order of the danger, and every party in the affair reckons by it.

She knows, too, the trap inside her own situation. To make herself safer she would have to make copies and place them in trusted hands—but the data is so valuable that any keeper might sell it to Vylaria, or to the Veil for amnesty, or sell copies of copies, and she has no way to verify loyalty and no power to punish betrayal. Worse, to entrust anyone is to condemn them: a copy-holder becomes a target the moment they are suspected. So the archivist who understands provenance and betrayal better than anyone trusts no one with the truth, and carries it alone—which is the loneliest and most dangerous course of all.

### Flight

She did not run the way a defector is expected to run. The northern roads to the Vylarian ports are exactly where the Court of the Veil watches most closely, and so Rashira went the other way—**south, into the [[place-sthmrchsrgn|South Marches]]**, the lawless drylands beyond the matriarchy's frontier where the Veil's writ and its agents have no reach. The Marches are not her destination but her road: beyond them, east, lies [[affiliation-empireakhlth|Empire of Au'Khelathu]]. She means to cross the lawless country, slip the hunt where no Dómissa's law runs, and carry the purple original to the one power with both the reason and the strength to act on it. Her gambler's route has had a cost she did not intend: it has drawn the hunt south after her, into country where older and bloodier scores than hers lie waiting. She insists she is no traitor but a woman fleeing a crime she could no longer be party to—though she is clear-eyed enough to know that the proof of conscience and the proof of treason look identical when they are bound in the same roll of vellum.

She is hunted from two sides and courted from a third, and trusts none of them. The household of **Metrissa Amithena of House Kervanion** has loosed its deadliest thief-taker, [[being-lmbhrpdhnn|Lámbira Pédhinion]], to recover or burn the register and silence its keeper. The Vylarian agent [[being-casiaveric|Kassa Verris]] reaches into the Marches to court her—offering protection and passage, while quietly working to close every road east, for Vylaria means the rolls for its own war and will not let them reach Galezkara. And the Marches themselves belong to [[being-argyrirjckl|Argirira the Jackal]], whose blades have their own bloody business with the Hound.

### Disowned

She is a fugitive from the Matriarch's own justice, and **House Safiron has cast her off**. The moment her flight became known, the House moved to save itself: it renounced her before the Court of the Veil, struck her from its rolls, and disavowed any part in her treason—for in Bethua a House that shelters or even mourns a traitor to the crown invites ruin upon every woman of its line. Rashira still gives her name as _of House Safiron_, because it is the only name she has ever had and she will not pretend otherwise; but the name is a wound now rather than a shelter. There is no door of the House left open to her. Were she taken, the House would be first to call for her silencing, the better to prove its loyalty; the only road that could ever lead her home would be to clear her name entirely—to deliver the truth so undeniably that the realm itself reckons her no traitor but the one honest keeper in a rotten office. It is a faint hope, and she knows it, but it is the only one that ends with her House restored to her.

### Where She Is Running

Her destination is [[affiliation-empireakhlth|Empire of Au'Khelathu]], and the logic is sound. The empire is Bethua's patron and the guarantor of its freedom; it is also the _victim_ of the betrayal the register proves—robbed of its shipping and its sacred dead by the proxy it protects. Au'Khelathu therefore has the motive to act, the strength to shelter her, and no incentive to sell her to Vylaria (its rival) or to silence the witness who hands it leverage over its own vassal. And there is a fitness to it that the archivist feels keenly: she carries incontrovertible truth to the one civilization whose chief goddess, [[lore-qearetdty|Qe'aret]], _is_ truth and justice, hoping for sanctuary in [[affiliation-lutrethsaar|Lut-Reth'Sa'ar]], the temple of [[lore-rethsaardty|Reth'Sa'ar]], keeper of record and sacred knowledge, or a hearing before [[affiliation-genzetgarau|Genzet'Gar-Au]], the Gar-Au's court at [[place-galezkara|Galezkara]]. To flee to Vylaria, Bethua's enemy, would make her the traitor she denies being; to appeal over the Matriarch's head to Bethua's own sovereign protector is another thing entirely.

But Au'Khelathu is no clean refuge, and she knows it. It is a cold, self-interested empire that reckons Bethua "a useful proxy"; its court might as easily **bury** the register and use it to tighten its grip on the matriarchy as expose anything—truth vanishing into a Khelathi vault as a tool of statecraft. And the rot runs both ways: tomb-robbery thrives only because Khelathi hands buy what is stolen, so there are Halzi'a, fences, and temple insiders in Galezkara who want the proof destroyed as badly as the Veil does. Reaching "Au'Khelathu" is not enough; she must reach the _right_ hands—the loyal [[affiliation-qearet|cult of Qe'aret]], the Gar-Au's own faction, a Halzi'a whose tombs were plundered—and avoid the complicit ones, in a court she does not know, as a hunted foreigner with no friends and one purple roll of vellum to buy her life.

### Skills and Abilities

Authenticator of the Truth
: As the Grammatissa who kept the Purple Warrant for twenty years, Rashira is one of the very few who can vouch that the register is the true crown record and no plant—read its internal ciphers, attest its seals and provenance, and decode the entries that name the guilty. The proof is the vellum; but it is her word that proves the vellum, which is exactly why no one can simply take the rolls and be done with her.

Scripts and Ciphers
: A master of Bethuan legal hands, the fleet's internal codes, and the runic and foreign scripts a senior Grammatissa must read. She can spot a forged seal, read a cipher she has never seen, and tell a true warrant from a false one at a glance.

The Bureaucrat's Craft
: Law, heraldry, mathematics, and mercantilism—the unglamorous skills of administration that let her navigate Houses, courts, and counting-rooms, and that make her dangerous in a way no blade is.

Guile and Discourse
: Not a fighter and no spy by training, but a quick, persuasive, careful talker who has survived this long by reading people as fluently as she reads documents.

## Psyche

### Personality and Motivations

Rashira is precise, self-contained, and quietly stubborn—a woman who has spent her life being indispensable and invisible, and who has chosen, late and at great cost, to be neither. She does not think of herself as brave; she thinks of herself as someone who finally could not look away. Her devotion to Marendas is sincere and unfashionable in a realm whose temples of state belong to goddesses of war and sea, and it shapes how she frames her own treason: knowledge held in trust must answer to conscience, or it becomes merely another weapon in another Dómissa's armory. Her goal is not escape but _delivery_—to put the truth where it can do its work and survive long enough to see it.

She is not naive. She knows Vylaria wants the register to wage its own war, not to end Bethua's, and that to [[being-casiaveric|Kassa Verris]] she is a prize, not a defector. She knows Au'Khelathu may bury the truth as readily as wield it. She knows the thief-taker on her trail may be the most honest party in the whole affair. And she knows the cruellest arithmetic of all: that she cannot share her burden without risking that the truth is sold or her confidant killed, so she carries it alone toward a refuge that may betray her. Whether what drives her is justice or only a subtler vanity is a question she argues with herself on every cold night of the road.

### Strengths

- **Authentication and provenance**—she alone can prove the proof
- **Mastery of scripts, ciphers, seals, and law**
- **Persuasion and misdirection** in place of force

### Weaknesses

No fighter
: frail, untrained at arms, wholly dependent on others for protection

One fragile object, no copy, no insurance
: lose or destroy the original and her cause dies with it; she has no dead-man's leverage to make killing her dangerous

A marked woman
: hunted by the Veil, courted by Vylaria, a stranger to the court she runs toward, trusted by none

Conscience and caution as liabilities
: her refusal to sell the rolls, and her inability to trust anyone with a copy, leave her isolated and her movements hard for allies to support

## Social

### Enemies

[[being-lmbhrpdhnn|Lámbira Pédhinion, the Hound of the Veil]]
: The thief-taker loosed by the Court of the Veil to recover or burn the register and silence its keeper. Rashira has never met her hunter and yet feels she knows her—and suspects that, of everyone in the affair, this Houseless-hearted woman with no profit in the crime might be the one who could be made to understand why she ran. Whether she can turn the Hound before the Hound takes her is the gamble her flight may come down to. What Rashira cannot know is that the Veil has foreseen exactly that hope and moved to foreclose it: the Hound rides under standing orders never to read the rolls and never to let her quarry speak—so the one argument Rashira means to make may never reach the only ear that might heed it.

The Court of the Veil
: Her former masters, the intelligence household of **Metrissa Amithena of House Kervanion**—and the very people the register condemns. To them Rashira is the worst kind of failure: a trusted keeper who kept too well and walked away with the proof. They want the rolls recovered or destroyed and the Grammatissa silenced, in that order.

### Hunters and False Friends

[[being-casiaveric|Kassa Verris]]
: Once Rashira's lover, and the one who first set her on this road. Posing as a foreign trading factor, Kassa spent months listening to Rashira's troubles and urging her, ever so gently, to expose the matriarchy's rot—knowing only the general shape of the secret, never its particulars. When Rashira fled south with the Warrant rather than deliver it into Vylarian hands, the confidante became a hunter: now Kassa courts her former lover with offers of protection and passage while quietly closing every road east, trading on what lay between them to draw Rashira toward a Vylarian handover. Kassa means the register for Vylaria—a weapon to shatter the Khelathi–Bethuan alliance—and will never let it reach Galezkara. Rashira takes her help, when she must, with both eyes open, knowing the warm hand will close into a fist the moment the rolls are within reach.

[[being-argyrirjckl|Argirira the Jackal]] and [[affiliation-jcklsthmrchs|the Jackals of the South Marches]]
: The exile-queen who rules the Marches Rashira must cross. Argirira is no friend, but she hates Bethua and hunts the Hound for her own reasons—and a Houseless band that despises the matriarchy might, for the right price or the right grievance, be the unlikeliest of shelters on the road east.

### Hoped-for Refuge

[[affiliation-empireakhlth|Empire of Au'Khelathu]]
: The patron-empire she is running toward—victim of the betrayal she carries, and the one power that might shelter her and act. But its court is cold and self-interested, and salted with the very Khelathi hands that bought the stolen dead. Her refuge and her gravest gamble are the same place.

## Plot Hooks

The Race East
: Every road through the [[place-sthmrchsrgn|Marches]] toward the Khelathi frontier is watched, bought, or blocked—[[being-casiaveric|Kassa's]] quiet work—while [[being-lmbhrpdhnn|Lámbira]] closes from behind. Rashira needs guides, passage, and protection she cannot pay for in trust, and must decide which devil on the road to bargain with to keep moving toward [[affiliation-empireakhlth|Empire of Au'Khelathu]] and Qe'aret's justice.

The Hunter Turned
: Cornered at last by [[being-lmbhrpdhnn|Lámbira]], Rashira offers not a fight but the register itself: _read it, and see what you are sent to bury._ It is her one real hope—that the only pursuer with no stake in the crime can be made to carry the truth instead of burning it. The scene is the hinge of the whole affair.

The Weight of the Original
: The purple roll is nearly lost—a river crossing, a fire, a blade through a saddlebag—and every party in the Marches must suddenly reckon with how fragile the only proof in the world really is. Rashira, who would rather see it destroyed than fall to Vylaria or the Veil, may have to choose whether to burn her life's last leverage to keep it from the wrong hands.

No Clean Hands in Galezkara
: Should she reach [[affiliation-empireakhlth|Empire of Au'Khelathu]], Rashira finds the court is no sanctuary but another snake-pit: factions that would wield the register, factions that would bury it, and the Khelathi fences of the stolen dead who want her and her proof gone. Having crossed the world to deliver the truth, she must now find the one hand clean enough to give it to.
