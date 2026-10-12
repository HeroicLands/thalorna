---
shortcode: empirdclne
name: {full: The Decline of the Vylarian Empire, aliases: [The Losing of the Provinces]}
type: lore
subType: history
description: "Roughly two hundred years ago the Vylarian Empire's decline began—overextension, corruption, barbarian pressure and the gradual independence of provinces, ending twelve years ago in the loss of Tarûzel."
tags: [history, spine]
data:
  packFolder: settinglore
  events:
    - when: ~520
      kind: secession
      depth: world
      sources: [affiliation-vylarinmpr, place-ankrscntnnt]
      summary: >-
        The Vylarian Empire begins losing what it holds—to overextension, internal corruption, barbarian pressure from the north, and the gradual independence of provinces. Provènzia and Tarvénia become successor states in all but name, Heliónis regains practical independence while keeping formal ties, and twelve years ago Tarûzel fought and won a war of independence with Khelâthi gold behind it. The Empire has retreated to its core territories and still claims authority over regions that have long since gone their own way.
      standing: attested
      where:
        locus: [place-midhalnrgn]
        reach:
          - place: place-provenzrgn
            how: a province becomes a realm without ever declaring it, and keeps the forms
            knowledge: named
          - place: place-tarvenirgn
            how: the same, with a court that cultivates its own diplomatic channels
            knowledge: named
          - place: place-taruzelrgn
            how: >-
              the merchant princes bankrolled a revolution, a naval squadron was destroyed at the Tamzîr Shoals, and independence was recognized within the year
            knowledge: named
          - place: place-helionis
            how: >-
              practical independence returns while the formal ties stay, and the relationship becomes that of a grown child to an aging parent
            knowledge: named
          - place: place-vrystwald
            how: after the Three Winters Varokh war-bands strip northern Moktur's valleys for grain, and the province's revenue fails
            knowledge: named
          - place: place-nrdlndsrgn
            how: the fleets that burned the western coast come home with church silver, and a generation later the empire is paying the same hirds to hold what they loosened
            knowledge: named
          - place: place-aukhelathrgq
            how: >-
              gold, weapons and naval expertise went west under the fiction of humanitarian commerce, and direct trade now bypasses Vylarian intermediaries entirely
            knowledge: named
          - place: place-moktur
            how: >-
              every watchtower counts the smoke at dusk, and the sergeants teach the recruits that the count was right at the Black Marsh
            knowledge: named
          - place: place-aureldirgn
            how: >-
              the crowns pay the issuance fee as a banker's charge and call their realms members of the post-imperial commonwealth
            knowledge: named
          - place: place-byzariargn
            how: >-
              the League sits in the commonwealth, taxed by nobody and charged by the Collegium
            knowledge: named
      who:
        - {ref: affiliation-vylarinmpr, role: victim}
        - {ref: affiliation-empireakhlth, role: actor}
      follows:
        - event: lore-thefounding
          how: enabled
          note: what is being lost is the reach the Empire took in the centuries after that year
        - {event: lore-restorehouse, how: enabled}
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The empire retains nominal authority over its provinces, and the knowledge that Aû'Khelâthu's hand was behind Tarûzel festers in the Senate and the officer corps.
          agrees: partly
          withholds: how much of Tarûzel's war was bought
        - by: affiliation-empireakhlth
          says: Humanitarian commerce.
          agrees: denies
          withholds: the gold, weapons and officers the court of Meqes XVI sent, which stand in no king-list and no tax roll
        - by: place-helionis
          says: >-
            A grown child to an aging parent—respectful, complicated, and occasionally resentful.
          agrees: partly
        - by: affiliation-byzarianlg
          says: >-
            The League kept out of Tarûzel's war and carried the freight of both sides. A council that keeps its terms is worth more paid than conquered, and the Empire's losses were a matter of the Empire's accounts.
          agrees: partly
          withholds: that the war filled Nêsthiros's yards and its freight-houses
      unresolved: []
---

The decline was driven by a combination of overextension, internal corruption, barbarian pressure from
[[place-vrystwald|Vrystwald]] and the [[affiliation-kngdmnrdhm|Kingdom of Nordheim]], and the gradual
independence of provinces. [[place-provenzrgn|Provènzia]] and [[place-tarvenirgn|Tarvénia]] are long
since successor states; [[place-helionis|Heliónis]] has regained practical independence while
maintaining formal ties.

The most humiliating blow came twelve years ago. The Tarûzelian merchant princes, grown rich as
intermediaries in the eastern trade, had chafed for generations under imperial taxation imposed
without any representation in the Senate. When the empire answered their growing power with heavier
levies, the merchants bankrolled a revolution and recruited the common people with promises of
liberty.

The imperial response was effective on land—until
[[affiliation-empireakhlth|Empire of Aû'Khelâthu]], seeing an opportunity to weaken a northern rival, covertly
supplied the rebels with gold, weapons and military advisors. Khelâthi gold kept the rebellion solvent
and Khelâthi naval expertise turned a ragtag flotilla into a fighting force; the destruction of a
Vylarian squadron at the Battle of [[place-tamzirshoals|Tamzîr Shoals]] broke the empire's ability to sustain its eastern
garrisons, and Tarûzel's independence was recognized within the year.

Today the empire has retreated to its core territories around the Vylarian peninsula, though it still
claims nominal authority over regions that have long since gone their own way. The loss of Tarûzel's
trade revenues has accelerated the fiscal decline, made worse by the explosion of direct
Tarûzelian–Khelâthi commerce that now bypasses Vylarian intermediaries entirely.
