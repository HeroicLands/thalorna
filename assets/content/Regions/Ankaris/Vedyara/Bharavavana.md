---
tags:
  - region
  - endowed
description: "The southern tropical interior of Vedyara—six hundred miles of forest along the lower Bhārava, held in temple-estates where no assembly sits, and the source of the resin, lac, hardwood and spice the pilgrim road is endowed out of."
name:
  full: Bhāravavana
  aliases:
    - The Bhārava Forest
    - The Forest Country
shortcode: bharavavana
type: place
subType: region
data:
  demonym: Bhāravan
  lore:
    - vedyariclt
  parents:
    - vedyarargn
  population: 2400000
terran_analog: "Central and peninsular Indian forest belt under temple-estate tenure—hardwood, resin, lac and spice country worked by forest-dwelling communities and held as endowed land by temples rather than by village federations"
packFolder: vedyara
---

**Bhāravavana** is the forest country of the lower [[place-bharavarivr|Bhārava]]: six hundred miles of closed canopy between the foot of the gold-bearing highlands and the coastal farmland, and the largest single stretch of Vedyara that no janapada has ever federated.

It is the southern tropical interior the [[place-vedyarargn|region's]] own reckoning sets beside the river valleys and the coast, and it runs on a tenure the rest of the subcontinent does not use. The forest is held in estates endowed to temples. No sabhā meets in it, no assembly sits in it, and the roll the [[affiliation-janpdsvdyr|Mahā-Sangha]] keeps has no entry for any part of it.

## The Bounds

The forest begins where the Bhārava leaves [[place-suvarnagirijnpd|Suvarnagiri]]'s panning grounds and slows, and it ends where the last of the canopy gives out among the rice ground of the coastal plain. It is bounded north and east by the shoulder of the [[place-graznmntns|Grazian]] foothills and west by the drier scrub of the Mahānadi's eastern watershed, where the trees thin out over about thirty miles and the janapadas begin again.

Above the highlands the river runs out of the mountain through country of a different kind. That upper forest, [[place-forestnoroad|the Forest of No Road]] below [[place-estrnreach|the Eastern Reach]], is not endowed to anybody. No estate has ever been cut there, no temple has claimed it, and the boundary between the two forests is exactly the boundary of the last estate on the upper river.

## What the Forest Yields

Nothing here is farmed at scale and almost everything is gathered. Resin and lac, wild pepper and cardamom, honey and wax, medicinal bark and root, and dyewoods the coastal cities pay well for. Above all timber: the great hardwoods are felled in the dry season, dragged to the water, and floated down to the coast on the flood, which is why a river nobody can navigate carries more tonnage than two that can.

The yield is reckoned by estate and not by village, and it is the only wealth in Vedyara that arrives without a sabhā's tithe on it.

## The Gathering Peoples

The people who do the gathering are not the people who hold the forest. They live in the interior in small mobile groups, they take the estates' licences and turn their season's gathering in at the margin, and the lowland records name them collectively and individually not at all.

They are outside the tharana rather than at the bottom of it, which the estates find convenient and the orthodox temples of the plains find scandalous when it is put to them. In practice a gatherer at a forest margin is received, paid and not asked to show a wrist, and a gatherer who walks out to a plains town is an Outcaste the moment somebody does ask.

## The Road

The pilgrim road runs the whole length of the river, sea to ice, and the [[place-bhrvdvsthna|free hostels]] that make the walk possible are endowed out of exactly these forest products. A pilgrim who has never bought a meal on the road has been fed for six hundred miles by resin, lac and felled hardwood, and the observance holds that he should know it.

The road is also the only continuous line through the forest. Everything else is a season's path to a gathering ground, cut for a season and closed after it, and the estates prefer it that way.

## Who Holds It

The [[affiliation-bhrvdvbhog|Bhārava-Devabhoga]] is the whole of the government here: estates endowed to the temples of the river, each held by an ordained keeper who answers to the temple that holds his endowment and to nobody else. There is no assembly above them. What coordination exists is the mother-temples consulting each other, which they do when the price of lac moves and not otherwise.

## Settlements

```sql :allow-empty
SELECT s.address.slug AS _ref,
       s.name.full AS "Name",
       s.data.market || ' ' || m.name AS "Market",
       s.data.population AS "People",
       (SELECT string_agg(
                   CASE
                       WHEN p.address.slug IS NULL THEN p.name.full
                       ELSE '[[' || p.address.slug || '|' || p.name.full || ']]'
                   END, ' and ' ORDER BY p.name.full)
        FROM entries p
        WHERE p.type = 'affiliation'
          AND list_contains(p.data.domains, s.shortcode)) AS "Held by",
       -- No field states why a place stands where it does, so "For" projects nothing.
       NULL AS "For"
FROM entries s
LEFT JOIN market m ON m.value = s.data.market
WHERE s.type = 'place'
  AND s.subType = 'settlement'
  AND list_contains(s.data.parents, 'bharavavana')
ORDER BY s.name.full COLLATE NOCASE
```

The query names the settlements of the forest country. A gathering group moves with the season and a temple station is counted with the estate that keeps it, so the forest carries nothing that stands in its own name.

## See Also

- [[place-vedyarargn|Vedyara Region]]—parent region
- [[affiliation-bhrvdvbhog|The Bhārava-Devabhoga]]—the temple-estates that hold the forest
- [[place-bharavarivr|The Bhārava]]—the river and the pilgrim road along it
- [[affiliation-suvrgrjnpd|Suvarnagiri Janapada]]—the gold highlands above the forest, and the hostels' endowment
- [[place-forestnoroad|The Forest of No Road]]—the unendowed forest at the head of the river, above the last estate
- [[place-bhrvdvsthna|The Bhārava-Devasthāna]]—the free hostels the forest's yield pays for
- [[place-estrnreach|The Eastern Reach]]—the range above the upper river
