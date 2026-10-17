---
shortcode: heladlandngs
name: {full: The Landings, aliases: [The Coming of the Ships]}
type: lore
subType: history
description: "From about 1300 BF to about 1150 BF the seafaring people who speak Proto-Helonic come down the western coast at the southern edge of the Pelwar displacement and take the peninsulas and islands of Helionis, where they bury their dead beside tombs that were already old."
tags: [history, hellad, landingsage]
data:
  packFolder: helionis
  events:
    - when: ~-1300
      until: ~-1150
      kind: migration
      depth: region
      sources: [place-helionis, place-byzariargn, place-nykhtion, lore-pelwarpepl]
      summary: >-
        In the last generations of the Pelwar displacement a seafaring people who speak Proto-Helonic come down the coast in ships and take the peninsulas and the islands of what becomes Helionis, then climb the valleys to the olive hills. On the eastern plateau they find stepped tombs and rock-cut chambers already standing, and they bury their own dead beside them. Each valley's settlers remember one founding ship and one founding hero, and the claims cannot all be true.
      standing: legendary
      names:
        - {name: the Landings, by: place-helionis}
        - {name: the Coming of the Ships, by: lore-helioniteclt}
      where:
        locus: [place-helionis]
        reach:
          - place: place-byzariargn
            how: >-
              the plateau's people trace their stock to the same ships, and bury their dead beside a quarter older than any of their lines
            knowledge: named
          - place: place-nykhtion
            how: >-
              the necropolis grows outward from tombs that stood before the first Helonic burial, and no record names the people who raised them
            knowledge: unlinked
          - place: place-bethuargn
            how: >-
              the Bethuan tongue and faith carry roots from the same coast
            knowledge: named
      who: [{ref: lore-helioniteclt, role: actor}]
      follows:
        - event: lore-pelwarmigr
          how: caused
          note: the displacement pushes the last of its peoples to the southern edge of the western coast, and the ships go from there
      accounts:
        - by: place-helionis
          says: >-
            Our cities were founded by heroes who came in one ship each, and the proof is the keel-stone in every agorin.
          agrees: partly
          withholds: that no city can say what the people before the ships called the valley
        - by: place-byzariargn
          says: >-
            We came up from the harbors with our dead on our backs, and the ground at the top of the road was already holy.
          agrees: full
      unresolved:
        - who raised the stepped tombs on the plateau, which no record of any city or house names
        - which of the founding ships came first, which the cities have never agreed
---

Ask a Thirenaean which ship brought the first families to the valley and he names one; ask a Pelagoran and he names another, and each city can show a keel-stone in its agorin as proof. **The Landings** are what is left when the claims are set side by side: a people with ships, a coast that was nearly empty of anyone who could stop them, and a century and a half in which they went from the landing beaches to every valley that held water.

## The Coast

The people of the ships spoke [Proto-Helonic]{.name data-type="skill/language"}, and they came down the western coast in the last generations of [[lore-pelwarmigr|The Pelwar Migration]], the Pelwar displacement, at its southern edge. The movement that pushed the [[lore-pelwarpepl|Pelwar People]] north and west ran out of land against the sea; the people of the Landings were the part of it that kept to the water and went south. They took the peninsulas first, because a peninsula is a harbor with one road, and the islands after, and from the harbors they climbed the valleys to the terraces where olives would grow.

## The Founding Ships

Every Helionite city claims a founding ship and a founding hero, and the Helionite cities tell the claims against one another at the Games. [[affiliation-thyrenae|Thirenae]] holds that its ship came first and that the others followed its fires; [[affiliation-pelagora|Pelagora]] holds that nobody followed anybody, because a ship that is not first is not a ship of Pelagora. The heroes are better kept than the ships. Each is a man of a single deed and a name worn down to two syllables, and the clans that descend from them are the oldest names in the [[lore-helioniteclt|Helionite]] rolls. The interior highland dialect, the oldest speech in the region, keeps older words for the olive terrace and the spring than the coastal speech does.

## The Plateau

The newcomers who climbed to the eastern plateau found stepped tombs and rock-cut chambers already standing in the arid ground and buried their own dead beside them. The oldest quarter of [[place-nykhtion|Nikhtion]] is that ground. No Helionite or Bizarian record names the people who raised the tombs, and the Landings do not explain them; they set the first Helonic burials against an older work and leave it there.

## What the Landings Left

- **The founding legends**, told city against city and kept alive by the contradiction.
- **The oldest speech**, the interior highland dialect, and the Proto-Helonic that [Ancient Helonic]{.name data-type="skill/language"} grew from.
- **The burial ground** on the plateau, which a Helonic people began to fill and has been filling for twenty centuries.
- **The cousinship** of [[place-helionis|Helionis]], the Bizarian plateau and the [[place-bethuargn|Bethua Region]], whose speech and faiths share these roots.

The cities filled their valleys and, a few centuries on, began sending their younger sons over the sea ([[lore-daughtercts|The Daughter-Cities]]).

## See Also

- [[lore-pelwarmigr|The Pelwar Migration]]—the displacement whose southern edge this is
- [[lore-firstgames|The First Games]]—what the cities build once they are settled
- [[place-helionis|Helionis]] · [[place-byzariargn|Bizaria Region]]
