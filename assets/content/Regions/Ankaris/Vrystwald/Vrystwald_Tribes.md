---
description: "Confederation of warrior tribes inhabiting the Vrystwald forests—hardy people bound by clan honor, hunting tradition, and resistance to foreign rule."
type: affiliation
name:
  full: Vrystwald Tribes
  aliases: []
shortcode: vrystwldtrbs
subType: polity
data:
  templatePriority: null
  demonym: Varokh
  epithet: null
  symbol: null
  governance:
    model: confederation
    summary: Tribal chiefs with a seasonal great-moot tradition.
    ranks:
      - level: 0
        title: Kinless
        lore: outlawrnk
        description: >-
          Cast out by their own kin and claimed by none; owed no hospitality, no water and no
          vengeance.
      - level: 1
        title: Bondservant
        lore: bondservantrnk
        description: >-
          Held in service or debt to a household, and answerable through its head rather than
          in their own name.
      - level: 2
        title: Dependent
        lore: dependentrnk
        description: >-
          Sheltered by a household without being of its blood—a client, a widow's family,
          a taken-in stranger.
      - level: 3
        title: Kinsman
        lore: kinsmanrnk
        description: Of a household's blood, entitled to its protection, its feud and its share.
      - level: 4
        title: Householder
        lore: commonerrnk
        description: >-
          Head of a tent or hall, holding its herds and its people and speaking for them at
          the moot.
      - level: 5
        title: Elder
        lore: elderrnk
        description: Senior of a lineage, whose memory of custom and precedent settles what
          the young dispute.
      - level: 6
        title: Chieftain
        lore: councillorrnk
        description: >-
          Leading a clan or tribe by descent and by consent together, and losing it when either
          fails.
      - level: 7
        title: Delegate
        lore: councillorrnk
        description: Sent by a tribe to the common council, empowered to argue and not to bind.
      - level: 8
        title: Speaker of the Council
        lore: prsdngffcrrnk
        description: >-
          Presiding over the common council, holding the peace of its meeting and no authority
          beyond it.
    offices:
      Speaker of the Council: Presiding officer of the common council, keeper of its peace
        and of the order of speaking.
      Chieftain: Head of a clan or tribe, holding by descent and consent together.
      Elder: Senior of a lineage, whose recollection of custom settles disputes the young
        cannot.
      Lawkeeper: >-
        Keeper of the customs the tribes hold in common, and arbiter where two tribes' customs
        differ.
      Host-Caller: Summoner of the common muster when a threat concerns every tribe.
      Truce-Warden: Holder of the peace at the council and at the seasonal markets, empowered
        to enforce it.
      Water-Warden: >-
        Keeper of the wells, springs or pastures the tribes share, and of the order in which
        they are used.
      Guide: >-
        Holder of the routes—their water, their seasons and their dangers—and hired at
        a price accordingly.
      Envoy: Sent to treat with a settled power, and protected by custom while he carries
        the word.
      Keeper of the Feud: >-
        Recorder of blood owed and blood paid between kindreds, without whom a settlement
        cannot be reckoned.
  commonSkills:
    - varokhlng
  seat: waldburg
  domains:
    - vrystwald
  population: 500000
  economy:
    - affiliation-clgmrgntrrm
    - lore-bartercnmy
    - lore-kinhalcrdt
    - lore-vylrncrncy
  lore:
    - humanflk
  parents: []
  relations:
    asguardian: aligned
    kngdmnrdhm: rival
    grukarholm: nemesis
    vylarinmpr: rival
packFolder: vrystwald
---

## Overview

The Vrystwald Tribes are a collection of Varokh barbarian clans and tribal groups that inhabit the vast primeval forests between the Nordmen kingdoms to the north and the [[affiliation-vylarinmpr|Vylarian Empire]] to the south. They are not a unified polity in any meaningful sense—the tribes fight among themselves as often as they raid their neighbors—but they share a common language, common gods, and a fierce commitment to their ancestral forests.

## Government

Each tribe is led by a chief whose authority rests on personal prowess, wisdom, and the support of the tribe's warriors. Chiefs are not hereditary in principle, though strong families tend to produce successive leaders. Decisions affecting the whole tribe are made at moots where every free warrior has a voice.

When an external threat demands coordination—a Vylarian punitive expedition, a Grukar incursion, or a particularly harsh winter—the tribes hold a great-moot to choose a war-chief with temporary authority over multiple tribes. These alliances dissolve as soon as the crisis passes, and attempts to create permanent unity have always failed.

## Character

The Varokh are descendants of the Pelwar nomads who migrated across Ankaris millennia ago—the same migration that seeded the ancestors of the Vylarians, the Élavendrians, and the Nordmen. The Varokh, however, never settled into cities or kingdoms. They remained in the forests, living as hunters, herders, and seasonal farmers in the clearings.

The Vrystwald's frontier with [[affiliation-provncmktr|Moktur province]] is the [[affiliation-vylarinmpr|Vylarian Empire]]'s most persistent military problem. Varokh raiding parties strike south into imperial territory for cattle, weapons, and slaves, then disappear back into forests that the legions cannot effectively patrol. The empire has tried everything—punitive expeditions, frontier forts, alliances with friendly chiefs, resettlement schemes—but the forest always wins.

## Commerce and Currency

Vrystwald Tribes uses the [[lore-vylrncrncy|Vylarian coinage]] (Aurion / Argo / Bit) as its _de facto_ currency for transactions conducted in money—no native coin exists, and no [[affiliation-clgmrgntrrm|The Collegium Argentariorum]] chapters operate in Vrystwald. The Vylarian script system is **not** honored here: traveler's notes and other paper instruments must be exchanged for physical coin before crossing into the region. Practical commerce above coin-carryable amounts operates through [[lore-bartercnmy|barter]] (furs, sealskins, smoked meat, ale, iron tools) and through [[lore-kinhalcrdt|clan credit]] customs that have no relationship with the Vylarian banking system.

## See Also

- [[place-vrystwald|Vrystwald]]—Regional overview
- [[affiliation-vylarinmpr|Vylarian Empire]]—Southern enemy
- [[affiliation-provncmktr|Province of Moktur]]—Frontier neighbor
- [[affiliation-kngdmnrdhm|Kingdom of Nordheim]]—Distant cultural cousins
- [[affiliation-asguardian|Asguardian Pantheon]]—Pantheon
