---
tags:
  - region
  - endowed
description: "The land of the Dhanurkota Janapada—villages along a defensible curve of the upper Sarvada, around the ancient bow-fort where the river leaves the northern hills."
name:
  full: Dhanurkota Janapada
  aliases: []
shortcode: dhanurkotajnpd
type: place
subType: region
data:
  demonym: Dhanurkoti
  lore:
    - humanflk
  parents:
    - vedyarargn
  population: 30000
terran_analog: "Medieval South Indian temple-republic with a martial-caste specialty—Chola-era brahmadeya village federation centered on a fortified temple complex, distinguished by hereditary archery training traditions"
packFolder: vedyara
---

Dhanurkota Janapada is the land of the temple-republic of [[affiliation-dhnrktjnpd|Dhanurkota Janapada]], the upper Sarvada valley of [[place-vedyarargn|Vedyara]].

Its population is thirty thousand; its territory occupies a long defensible curve of the Sarvada where the river emerges from the northern hill country into the inland plain.

## The Bow-Fort

The town of Dhanurkota is built on a low fortified hill where the Sarvada bends west around an outcrop of red rock. The fort itself is older than the janapada—older, indeed, than the Mahā-Saṅgha, older than the temples, older perhaps than the Vedyari language itself. Its lowest courses are megalithic, of a construction-style that no living mason knows how to reproduce; the upper walls have been rebuilt many times in successive Vedyari styles. The fort encloses the **Mahájaya temple**, the four academy halls, the sabhā chamber, and the granary; the town proper spreads down the slope below the walls and along the riverbank.

The fort's name has always been Dhanurkota. The meaning of the word is contested. Some scholars derive _dhanur_ from the bow that has been the janapada's emblem since before recorded history. Others derive it from a much older root meaning a bend or curve in a river, which is likely the truer account. The bow came to the name after the academies were founded, and nothing will get it out again.

## Settlements

```sql
SELECT address.slug AS _ref,
       name.full       AS "Settlement",
       data.population AS "Population",
       description     AS "Overview"
FROM entries
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'dhanurkotajnpd')
ORDER BY name.full COLLATE NOCASE
```

## Society

The cultivator villages along the Sarvada produce rice, sugarcane, sesame, and the cotton that feeds the local weaver-caste workshops.

## Economy

Dhanurkota's economy rests on three things. The first is agriculture, the standard Vedyari rice-cotton-sugarcane mix, which feeds the janapada and leaves a modest export surplus. The second is the making of bows and arrows by hereditary bowyer-fletcher families, whose work is exported across Vedyara. The third is the academies and their retainers.

The academies bring in the least direct revenue of the three and the most of everything else: the pilgrim-traffic of aspirants and their families, the steady patron-kingdom payments for graduate services, and the donations to the Mahájaya temple.

## See Also

- [[affiliation-dhnrktjnpd|Dhanurkota Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- Dhanurkota—the temple-seat
