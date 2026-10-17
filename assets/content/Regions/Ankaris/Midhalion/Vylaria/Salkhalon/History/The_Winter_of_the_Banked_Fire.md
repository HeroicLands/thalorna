---
shortcode: bankedfire
name:
  full: The Winter of the Banked Fire
  aliases: [The Burning of the Bay, Hvirnmil's Door-Faring]
type: lore
subType: history
description: "In 523 AF a Malagna crew from the Southern Fleets sailed a captured galley through the western strait to the Salkalon coast, lost it to a fire that burned the bay, wintered on the headland, and in 524 went to the oars of the imperial fleet; the bay kept their name for it, Bralvik."
tags: [history, thedrift]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: landing
      when: 523
      kind: battle
      depth: region
      stated: {calendar: domseycount, text: "237 HF"}
      sources: [place-braldvik, place-castamar, lore-southrnfleets]
      summary: >-
        A crew of forty Malagna men under Hvirnmil, who had taken a Provenzian merchant galley in the Gulf of Bataren, sails her down the ocean coast, through the western strait under imperial colors and east along the northern shore, and comes ashore at a fishing village on a deep bay in Salkalon. Nine days later a squadron from Kastamar fires the galley at her moorings, and the fire runs up the beach into the village's forty-one boats and its net-lofts. The crew digs in on the north headland and keeps a fire banked there all winter, and the starving village trades fish up the slope to be smoked.
      standing: attested
      names:
        - {name: the Burning of the Bay, by: place-braldvik}
        - {name: Hvirnmil's Door-Faring, by: affiliation-kingdomlgn}
      where:
        locus: [place-braldvik]
        reach:
          - place: place-castamar
            how: the squadron that fired the galley burned the village's boats with it, and the admiralty has received a bill for them every year since
            knowledge: named
          - place: place-gnarthborg
            how: the crew's home, which learned what became of them only when the survivors came home from the oars
            knowledge: named
      who:
        - {ref: affiliation-kingdomlgn, role: actor}
        - {ref: affiliation-vylrnmltry, role: actor}
        - {ref: affiliation-provincvld, role: victim}
      follows:
        - event: "lore-southrnfleets#fleets"
          how: enabled
          note: the crew sailed south with the fleets and did not turn for home
      accounts:
        - by: place-braldvik
          says: >-
            The raiders took the village and killed four men, and the navy burned every boat it owned to kill forty; the raiders fed the village through the winter, and the navy has never paid for the boats.
          agrees: full
        - by: place-castamar
          says: >-
            A northern raider was destroyed at anchor on the Salkalon coast and its crew contained ashore until they surrendered.
          agrees: partly
          withholds: the boats
        - by: affiliation-kingdomlgn
          says: >-
            Hvirnmil's ship was the one hull of the Southern Fleets that went through the door of the warm sea, and his men came home from the empire's own oars with the empire's silver.
          agrees: partly
          withholds: the village, which no Malagna skald names
      unresolved:
        - how a northern crew in a southern galley passed the forts of the western strait, which the strait's own records do not say
        - the village's name before the landing, which survives only in the census rolls at Delalara
    - id: terms
      when: 524
      kind: treaty
      depth: region
      stated: {calendar: domseycount, text: "238 HF"}
      sources: [place-braldvik, affiliation-provincvld]
      summary: >-
        The therkos of Salkalon, Zenothas Varelis, gives the thirty-one survivors terms: seven years at the oars of the Kastamar fleet, the captain with them, and passage home at the end. Twenty-eight go to the oars and three stay in the village by his leave, among them Dvilgvir, who kept the fire. About eighteen of the rowers come home to Malagna in 532 AF.
      standing: single-source
      where:
        locus: [place-braldvik]
        reach:
          - place: place-castamar
            how: northern crews row in the imperial fleet for a full term, a generation before the empire hires Nordmen by contract
            knowledge: named
      who: [{ref: affiliation-provincvld, role: signatory}]
      follows:
        - event: "lore-bankedfire#landing"
          how: ended
          note: the siege of the headland ends in the terms
      accounts:
        - by: place-braldvik
          says: >-
            The first Nordmen the empire ever paid were the crew off Hvirnmil's Head, and the town fed them first.
          agrees: partly
          withholds: that the therkos's terms were rowing, not hire
      unresolved:
        - whether these rowers were the first Nordmen in imperial pay, which the town claims and the empire's chroniclers date otherwise
---

**The Winter of the Banked Fire** is the reason a fishing town on the warm Vylarian coast carries a northern name. It is a small event in the history of [[lore-southrnfleets|The Southern Fleets]], forty men out of the hirvs of three kingdoms, and the only time those fleets touched the Vylarian heartland.

## The Door-Faring

In the summer of 523 AF, 237 HF by [[lore-domseycount|The Domsey Count]], a Malagna captain named **[Hvirnmil]{.name data-type="being/npc"}** took a Provenzian merchant galley in the [[place-batarengulf|Gulf of Bataren]], and her pilot told him what lay beyond the western strait. The skalds of the [[affiliation-kingdomlgn|Kingdom of Malagna]] call the voyage that followed his Door-Faring, after the sailors' name for the strait, the one door of the warm sea. The crew sailed the galley south down the ocean coast, passed the strait forts under her imperial colors, and worked east along the northern shore through the end of summer. They came ashore at a fishing village on a deep bay in [[place-salkhalon|Salkalon]], took its stores and its smokehouse, and held it.

On the ninth night, the eve of the autumn equinox and of [[lore-vetrnaetr|Vetrnetr]] by the crew's own count, a squadron from [[place-castamar|Kastamar]] under **[Holvethos Marendates]{.name data-type="being/npc"}** fired the galley at her moorings. The wind carried the fire up the shingle into the village's forty-one boats and its net-lofts, and by morning the bay had burned. The crew went up the north headland with what they could carry.

## The Winter

The _felzos_ (legate) chose to starve the headland rather than storm it, and the village, with no boats and no stores, starved below it. The crew kept a fire banked under a smoke-rack every night, as northern halls keep a winter's fish, and in the first month of winter a widow of the village, **[Ilthera Salken]{.name data-type="being/npc"}**, carried a basket of fish up the slope and brought it down smoked. The trade went on all winter under the eyes of the pickets. Nine of the crew died before spring.

## The Terms

In the spring of 524, 238 HF, the _therkos_ (governor) of the [[affiliation-provincvld|Province of Salkalon]], **[Zenothas Varelis]{.name data-type="being/npc"}**, offered terms rather than an assault: seven years at the oars of the Kastamar fleet, the captain rowing with his men, and passage home at the end of them. Twenty-eight went to the oars and three stayed in the village by the _therkos_'s leave. One of the three, **[Dvilgvir]{.name data-type="being/npc"}**, who had kept the fire, married Ilthera the next year. About eighteen of the rowers, Hvirnmil among them, came home to Malagna in 532 AF, the year of the thirty-sixth sitting on [[place-domsey|Domsey]], with imperial pay in their purses and the first account the north had of the [[affiliation-vylarinmpr|Vylarian Empire]]'s own coast.

## What It Left

- **A name.** The crew called the bay [[place-braldvik|Bralvik]], the inlet of the banked fire, and the village kept the name because the [[place-mercavia|Delalara]] factors bought its first smoke-fish under it.
- **A fire.** The [Old Coal]{.name data-type="miscgear"}, banked in the Salken smokehouse and carried in Hvirnmil's helm on the eve of 1 [Karnavar]{.name data-type="lore/calendar"}, lights every smokehouse in the town.
- **A bill.** Bralvik has sent the Kastamar admiralty a bill for its forty-one boats every autumn since 524, and the admiralty has paid none of them.
- **A claim.** The town holds that the crew off [Hvirnmil's Head]{.name data-type="place/feature"} were the first Nordmen the empire ever paid, a generation before [[lore-compactsignd|The Signing of the Compact]] (the hiring of the Nordmen). The rowers drew pay for their seven years; whether a term of oars set as a surrender counts as hire is a question the empire's chroniclers answer differently.

## See Also

- [[place-braldvik|Bralvik]]—the town, its smokehouses and its Coal Night
- [[lore-southrnfleets|The Southern Fleets]]—the raids the crew sailed with
- [[lore-compactsignd|The Signing of the Compact]]—the empire's later hiring of Nordmen
- [[place-castamar|Kastamar]]—the naval city whose squadron burned the bay
- [[affiliation-kingdomlgn|Kingdom of Malagna]]—the crew's kingdom
- [[lore-domseycount|The Domsey Count]] · [[lore-commoncal|The Vylarian Calendar]]—the two reckonings these dates are given in
