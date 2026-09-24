---
tags:
  - region
  - endowed
description: "The land of the Rājapur Janapada—villages on a fertile floodplain forty miles along the upper Mahānadi, around the temple raised on the ruins of the old royal capital."
name:
  full: Rājapur Janapada
  aliases: []
shortcode: rajapurjnpd
type: place
subType: region
data:
  demonym: Rājapuri
  lore:
    - humanflk
  parents:
    - vedyarargn
  population: 25000
terran_analog: "Medieval South Indian temple-republic that emerged from the ruins of a failed kingdom—a Chola-era brahmadeya village federation centered on a temple complex built atop or alongside an abandoned royal capital, governed by an assembly that explicitly preserves the memory of the displaced dynasty"
packFolder: vedyara
---

Rājapur Janapada is the land of the temple-republic of [[affiliation-rajaprjnpd|Rājapur Janapada]], on the central Mahānadi plain of [[place-vedyarargn|Vedyara]].

Its population is twenty-five thousand; its territory occupies a fertile floodplain stretching some forty miles along the upper Mahānadi.

## Settlements

```sql
SELECT address.slug AS _ref,
       name.full       AS "Settlement",
       data.population AS "Population",
       description     AS "Overview"
FROM entries
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'rajapurjnpd')
ORDER BY name.full COLLATE NOCASE
```

The query names the constituent villages and the temple-town. The greater part of the janapada lives in the hamlets and riverside farmsteads that each village answers for.

## Society

The cultivator villages along the Mahānadi produce the standard Vedyari rice-cotton-pulse mix, plus the distinctive **Mahānadi sugar** that is one of Rājapur's principal exports.

## Economy

The combination of fertile Mahānadi floodplain agriculture, the sugar specialty, the manuscript trade, and the substantial pilgrim economy of the Vyālendra temple produces a comfortable surplus most years.

## See Also

- [[affiliation-rajaprjnpd|Rājapur Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[place-rajapur|Rājapur]]—the temple-seat
