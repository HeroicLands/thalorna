---
shortcode: templetrib
name: {full: The Tribute of the Temple-Cities, aliases: []}
type: lore
subType: history
description: "About 1800 to 1825 ST (311 to 286 BF) the sun-house sent an army and an embassy across the South Marches to make the eastern temple-cities of Okháris pay tribute to the Gar-Aû; a chain of forts on wells was built for the road, and within a generation the tribute stopped and the forts were abandoned."
tags: [history, khelathu]
data:
  packFolder: regkhhist
  events:
    - when: -311
      precision: span
      until: -286
      kind: conquest
      depth: region
      sources:
        - lore-garauu
        - affiliation-empireakhlth
        - affiliation-okharis
        - place-sthmrchsrgn
        - place-nrthrnfrtlrgn
      summary: >-
        In the years of the sun-house the court sends an army and an embassy west through the South Marches to make the eastern temple-cities of Okháris tributary to the Gar-Aû. A chain of forts, each on a well, is built across the dry country for the tribute road. Within a generation the tribute stops coming and the forts are abandoned.
      standing: attested
      where:
        locus: [place-sthmrchsrgn]
        reach:
          - place: place-okharisrgn
            how: the eastern temple-cities receive the embassy and pay for a time
            knowledge: named
          - place: place-khuqetzalu
            how: the forts of the tribute road are left standing and empty
            knowledge: named
      who: [{ref: affiliation-empireakhlth, role: actor}, {ref: affiliation-okharis, role: victim}]
      follows:
        - event: lore-sunhouse
          how: caused
          note: the court that sent the army was the sun-house's
      accounts:
        - by: affiliation-empireakhlth
          says: >-
            The temple-cities of the east paid the Gar-Aû's due for a generation, and the forts were built to keep the road for their carriers.
          agrees: partly
          withholds: that the tribute was never collected after the house closed
        - by: affiliation-okharis
          says: >-
            The envoys were received with gifts and sent home with gifts, and what the Khelâthi book as tribute the temple-cities remember as the guest-price of a long road.
          agrees: disputes
      unresolved:
        - how much the temple-cities paid, since the Khelâthi record keeps no sum
        - whether any fort held a garrison after the sun-house closed
---

Ask a drover of the South Marches who built the forts on the long wells and he will give you the name of the clan that owns the well now. The first builders are older than any clan's claim, and they were Khelâthi.

## The Reach West

The sun-house had a doctrine of one sun over every temple, and it wanted a witness. In the years after the court moved to [[place-maguathen|Magu-Athen]], it looked west past the last of Bethûa's irrigated frontier to the temple-cities of [[affiliation-okharis|Okháris]], which are the nearest settled powers beyond the empire's own side of the [[place-sthmrchsrgn|South Marches]]. The eastern ones lie closest to the road across the dry country. A tributary relationship with them would make the Gar-Aû's claim visible from outside the valley.

The court sent an embassy with an army behind it. The embassy carried gifts and the sun-house's titles, and the army carried water.

## The Forts

The South Marches have no river, and a column cannot cross them on what it brings. So the army dug and deepened wells along the line of march, and built a fort at each one: a chain of walled posts across the dry country, each a day from the next, with cisterns, barracks and a store for the tribute that was to come back along the road. The Khelâthi name for the chain is Khuqet-Zalu, the southern desert-march. The Okháric temple-cities received the embassy and paid, and the first carriers came east.

## Why It Failed

The venture was the sun-house's and it ended with the sun-house. When the house closed in 1822 ST (289 BF) and the court went back to Galezkara, the new house had no use for a distant claim that cost a garrison a year in wells and grain. The tribute stopped, the garrisons were called in, and the forts were left standing across a country nobody in the valley wanted to hold. The generation the venture lasted is the longest the Khelâthi record admits.

## What It Left

- **The forts.** Broken mud-brick, standing cisterns and a chain of dry-country wells that the free companies of the Marches use as lairs ([[place-khuqetzalu|Khuqet-Zalu]]).
- **A wariness.** The Okháric temple-cities treat a Khelâthi embassy as a thing that wants something, and have done so since.
- **An unclaimed treasury.** Somewhere along the chain, the tribute of one generation that nobody came east to collect.
- **A lesson in reach.** The empire's later reaches beyond its own border, to Bethûa and to Harad, go by gold and engineers and not by armies.

## See Also

- [[lore-sunhouse|The Sun-House at Magu-Athen]]—the house that sent the army
- [[place-khuqetzalu|Khuqet-Zalu]]—the forts as they stand
- [[affiliation-okharis|Okháris]] · [[place-sthmrchsrgn|The South Marches]]
- [[lore-akhrestcrown|The Restored Crown]]—the age
