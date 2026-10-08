---
shortcode: thaulgau
name: {full: The Coming of the Tha'Ulgau, aliases: [The Battle of Zel-Halzi]}
type: lore
subType: history
description: "In the Season of Emergence of 1612 ST (499 BF) the hill-nomads of the western margins destroy the last Galezkara army on the west-bank floodplain below Lenen-Nezut, forbid the rites for the dead, and take the throne; the unwrapped dead are Zel-Halzi, the first blood-field in Khelâthi memory."
tags: [history, khelathu]
data:
  packFolder: regkhhist
  events:
    - when: -499
      stated: {calendar: khelathclndr, text: "1612 ST"}
      precision: year
      kind: conquest
      depth: region
      sources: [lore-garauu, place-lenennezut, place-galezkara, place-zuqeztunome, lore-bloodfield]
      summary: >-
        The hill-nomads of the western margins, the Tha'Ulgau, come down through the horse-country into a valley still weak from the war of the two thrones. In the Season of Emergence of 1612 ST they destroy the last Galezkara army on the west-bank floodplain below Lenen-Nezut, and the Gar-Aû Amqel'Uzner I dies on the field. The list enters him as having gone to the West in his fourteenth year and nothing more. The conquerors forbid the rites for the dead through the Season of Harvest, the next flood covers the unwrapped dead, and the priesthood crowns the nomad chief as Quz'Uqa. The field is Zel-Halzi, the first blood-field in Khelâthi memory.
      standing: attested
      where:
        locus: [place-zelhalzi]
        reach:
          - place: place-lenennezut
            how: >-
              the army is destroyed on the floodplain below the old capital
            knowledge: named
          - place: place-galezkara
            how: >-
              the throne passes to the conquerors, and the priesthood crowns their chief
            knowledge: named
          - place: place-zuqeztunome
            how: >-
              the western pastures, where the conquerors' kin are settled when their house closes, and where horsemen are feared
            knowledge: named
      who: [{ref: affiliation-empireakhlth, role: victim}]
      follows:
        - event: lore-twothrones
          how: enabled
          note: a valley that burned its own upper-river granaries had no army to spare for the western margin
      accounts:
        - by: affiliation-empireakhlth
          says: >-
            The Gar-Aû went to the West in his fourteenth year, and the priesthood crowned the one who stood upon the mound. The throne is the throne, whoever sits it.
          agrees: partly
          withholds: the field, the forbidden rites, and any count of the dead
        - by: place-lenennezut
          says: >-
            The army of Galezkara died below our walls, and nobody wrapped a man of it. We were not asked, and we did not ask.
          agrees: partly
          withholds: whether anyone from the town tried to bury them
      unresolved:
        - how many died, which no list or roll records
        - which of the nomad bands was the Tha'Ulgau before the crowning, and where in the margins they came from
        - whether the rites were forbidden by the chief's order or by the ruin of the army's priests
---

The Khelâthi say that every field in the valley has seen fighting, and that only a few remember it. The first of the few is a stretch of west-bank floodplain below [[place-lenennezut|Lenen-Nezut]], and the **Coming of the Tha'Ulgau** is how it was made.

## The Valley Before

The war of the two thrones had ended eighty years before, with the upriver house closed and the granaries of the upper river left half burned ([[lore-twothrones|the War of the Two Thrones]]). A valley that burns its own harvest does not fill its armies again quickly. The throne at [[place-galezkara|Galezkara]] was held by the house of **Zu'Magetu**, and its Gar-Aû, **Amqel'Uzner I**, crowned in 1599 ST (512 BF), had held it for thirteen years.

On the western margin lived the **Tha'Ulgau**, hill-nomads of the horse-country past the last canal, who came to trade and sometimes to raid. The border patrols rode the line between the pastures and the fields. In 1612 ST the Tha'Ulgau came down in numbers the patrols had not seen.

## The Field

The Gar-Aû took the last army of Galezkara up the river to meet them. It met them in the Season of Emergence, with the water gone down and the silt freshly planted, on the west-bank floodplain below Lenen-Nezut. The army broke. Amqel'Uzner I died on the field with it, and the list enters him as having gone to the West in his fourteenth year and gives no battle, no ground and no enemy.

## The Dead

The victors forbade the rites for the dead. The valley's law is that the dead of a battle are carried off, wrapped, named and read, and nobody did any of it. The prohibition held through the Season of Harvest, and in the next Azlet the flood covered the field with the dead still lying where they fell. The water took the bodies into the silt, and their names went with them, because the names had never been entered. The Khelâthi hold that a soul with no tomb, no name read aloud and no rites has no continuation, and there were thousands of them on that ground ([[lore-bloodfield|Blood-fields]]).

## The Crowning

The priesthood crowned the nomad chief as **Quz'Uqa**, "strong of the sun-lord," because the throne cannot stand empty and the temples had always crowned whoever stood upon the mound. His house held it for four reigns and fifty-nine years, and the temple chronicle enters it by the usual formulas ([[lore-hillhouse|the Closing of the Hill House]]).

## What It Left

- **The field.** The ground is [[place-zelhalzi|Zel-Halzi]], the Unmeasured Field, the first _zelqezat_ (the place of a battle left unread) in Khelâthi memory. No survey roll gives it a line.
- **The Tha'Ulgau.** When the hill house closed, its kin were settled on the western pastures and became a Halzi'a house, and they have kept the offering the field is owed ever since.
- **The fear of horsemen.** The western march still watches its edge, and the cult of Qeztu is strong there.
- **The horse barrows.** The first Tha'Ulgau to die were buried in the hill way, with their horses, in the grazing country of the west ([[place-horsebarrows|the Horse Barrows]]).

## See Also

- [[lore-akhdivriver|The Divided River]]—the age this conquest falls in
- [[lore-twothrones|The War of the Two Thrones]]—the war that left the valley weak
- [[lore-hillhouse|The Closing of the Hill House]]—the end of their house
- [[place-zelhalzi|Zel-Halzi]] · [[place-horsebarrows|The Horse Barrows]]—what the conquest left on the ground
