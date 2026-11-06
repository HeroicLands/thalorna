---
shortcode: gashangmaul
name: {full: Maul of Gashang, en: [Hazarak's Maul]}
type: weapongear
description: "The Ashlord Hazarak Bloodhand's spiked mace of blackened steel, made by the Black Flame's priest-artificers, lost at the Battle of the Blood Hills and hidden by the Flame's zealots in a trapped cave shrine in the hills."
tags: [artifact, provenzia]
data:
  icon: sohl-none-icon-spikedmace
  templatePriority: null
  packFolder: bloodandashesinceravelvale
  unique: true
sohl:
  kbcat: club
  weaponType: Club
  system:
    weightBase: 4
    valueBase: 0
    durabilityBase: 12
    heftBase: 13
    strikeModes:
      crush:
        type: melee
        name: Crush
        assocSkillCode: melee
        minParts: 1
        attack: {spread: 8, modifier: 0}
        impactBase: {numDice: 1, die: 6, modifier: 4, aspect: blunt}
        traits:
          meleeMod: 0
          blockSLMod: 0
          durabilityMod: 0
          cxSLMod: 0
          oppDef: 0
          impTA: 3
          AR: 0
          noAttack: false
          noBlock: false
          entangle: false
          envelop: false
          couched: false
          long: false
          onlyInClose: false
          shieldMod: 0
          slow: false
          thrust: false
          swung: true
          halfSword: false
          bleed: true
          twoHndLen: 0
          shaft: false
          pommel: false
          noStrMod: false
          halfImpact: false
          lowAim: false
        lengthBase: 4
        defense: {blockMod: -5, counterstrikeMod: -5}
---

## Overview {#overview}

The **Maul of Gashang** is a spiked mace of blackened steel, made by the priest-artificers of [[affiliation-blackflame|the Black Flame]] to show what the faith holds to be the cruel and destroying face of [[lore-ustarondty|Ústaron]]. Its head carries eight blades with jagged spikes. Its handle is wrapped in red leather inscribed with the Flame's prayers for violence and torment.

## Who Holds It {#who-holds-it}

Nobody holds it. The Flame's zealots carried it to a cave shrine in [[place-bloodhills|the Blood Hills]] east of [[place-belsaren|Belsaren]] and set traps around it to keep it for a worthy successor: a blood gate, pits of smoldering coals, a trapped altar and a bound guardian. The Flame's keepers still keep the shrine's mouth on the night of the battle, and [[affiliation-twinbldrdr|the Twinblade Order]] on the road below count the seekers who climb to it.

## Its Story {#its-story}

The Ashlord [Hazarak Bloodhand]{.name data-type="being/npc"} carried it at the head of the Cohorts of Gashang at [[lore-bloodhillsbtl|the Battle of the Blood Hills]] about 248 AF, and the knights of the Sacred Forge who faced him faltered before it. He fell with it, a storm ended the fighting, and the maul stayed where it had fallen until the Flame's loyalists found it and moved it to the shrine.

The vale's legend says each of the eight blades stands for a battle or a sacrifice offered to the Flame, that the maul was forged in the heart of a volcano and its spikes cooled in the blood of enemies, and that the red leather of its handle was flayed from priests of [[affiliation-sacredforge|the Sacred Forge]].

## What It Does {#what-it-does}

It is a heavy, cruel weapon. The spikes are shaped to tear, and in ember-light the blades seem to glow when blood is on them. The shrine's inscriptions call the burning that takes anyone who touches it without the Flame's rites the Flame's curse.

:::secret {title="What the maul does"}
The maul's power is craft as much as faith, and a careful party can tell which is which.

- **The fire.** The handle is hollow and holds the Fire of Gashang, a thick concoction of naphtha and quicklime. When the maul is swung, the fluid leaks through small holes at the base of the blades and can be set alight. A struck foe is sprayed with it and burns for several heartbeats, cloth or leather on him may catch, and water does not put it out. Destroying the maul sets it burning hot and long.
- **The spikes.** Every serious wound the maul gives bleeds freely.
- **The Flame's favor.** A devotee of the Flame who kills with it feels no pain for a short while after, though his wounds go on worsening.
- **The dread.** The maul carries the Blood Hills' dread with it. Those near its wielder feel the line about to break, the Forge's faithful most of all.
- **The relic.** A faithful of the Forge who wounds a foe with it may freeze in horror, and the worst of them may collapse.

The maul is a weapon, not a curse. Its whispers come from the dread of the field it was carried out of.
:::

## Who Wants It {#who-wants-it}

- [[being-kaldinlnvl|Kaldin al Lénavel na Leravren]], the Black Flame lord of [[place-leravren|Leravren]], wants it in the faith's keeping.
- **The knights of the Sacred Forge** want it out of the Flame's hands.
- [[being-darisenlrn|Darisen al Olrun]], the old scholar of Torvila Keravel, wants it out of the Blood Hills, and wants someone else to fetch it.

:::secret {title="The other claimants"}
[[being-kilanilvrl|Kilan Ilovrel na Ilovren]], lord of [[place-ilovren|Ilovren]], wants it to take the vale: Kaldin has promised him a high place in the faith if he delivers it from its shrine. Darisen is a Limor of the [[affiliation-selmoros|Faith of Sélmoros]], and wants it laid in a Sélmoran crypt so that the dead it made can be given their rites, and the field with them. The maul rests on a stone pedestal in the shrine's last chamber, and the pedestal hides the zealots' offerings: old coin, the Ashlord's rings, and a list of the Flame cells sworn to recover it.
:::

## Hooks {#hooks}

- **The race.** Kaldin's soldiers are on the road into the hills ahead of anyone else ([[scenario-firsbldhls|The Fires of the Blood Hills]]).
- **The shrine.** The gate, the pits, the altar and the guardian stand between a seeker and the maul ([[scenario-maulgashng|Maul of Gashang]]).

## See Also {#see-also}

[[place-bloodhills|The Blood Hills]]
: the field and the shrine

[[scenario-maulgashng|Maul of Gashang]]
: the shrine and the choice of what to do with the maul

[[lore-bloodhillsbtl|The Battle of the Blood Hills]]
: the battle where it was lost
