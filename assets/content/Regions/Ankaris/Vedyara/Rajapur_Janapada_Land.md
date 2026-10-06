---
shortcode: rajapurjnpd
name: {full: Rājapur Janapada, aliases: []}
type: place
subType: region
description: "The land of the Rājapur Janapada—villages on a fertile floodplain forty miles along the upper Mahānadi, around the temple raised on the ruins of the old royal capital."
tags: [region, endowed]
data:
  demonym: Rājapuri
  lore: [vedyariclt]
  parents: [vedyarargn]
  population: 25000
  packFolder: vedyara
  government: rajaprjnpd

# terran_analog: "Medieval South Indian temple-republic that emerged from the ruins of a failed kingdom—a Chola-era brahmadeya village federation centered on a temple complex built atop or alongside an abandoned royal capital, governed by an assembly that explicitly preserves the memory of the displaced dynasty"
---

The land of [[affiliation-rajaprjnpd|Rājapur Janapada]] runs forty miles along the upper [[place-mahanadi|Mahānadi]], from [[place-khandapura|Khandāpura]] at the head of the irrigation works to [[place-mukteshvara|Mukteshvara]] at the burning-ground, and a boatman working upstream with a load of sugar names it by those two ends. Between them live twenty-five thousand people on a fertile floodplain in the central plain of [[place-vedyarargn|Vedyara]].

What a stranger notices first is how far the houses stand from the river. The Mahānadi moves, and the villages keep a mile back from it, on old levees and raised mounds, with the fields between. [[place-nadipada|Nadīpāda]], the fishing village, is the one that lives on the bank.

## Settlements

```sql
SELECT s.address.slug AS _ref,
       s.name.full AS "Name",
       s.data.market || ' ' || m.name AS "Market",
       s.data.population AS "People",
       (SELECT CASE
                   WHEN p.address.slug IS NULL THEN p.name.full
                   ELSE '[[' || p.address.slug || '|' || p.name.full || ']]'
               END
        FROM entries p
        WHERE p.type = 'affiliation'
          AND p.documents IS NULL
          AND s.data.government IN (p.address.canonical, p.documentation)) AS "Government",
       -- No field states why a place stands where it does, so "For" projects nothing.
       NULL AS "For"
FROM entries s
LEFT JOIN market m ON m.value = s.data.market
WHERE s.type = 'place'
  AND s.subType = 'settlement'
  AND list_contains(s.data.parents, 'thalorna-note-place-rajapurjnpd')
ORDER BY s.name.full COLLATE NOCASE
```

The table names the constituent villages and the temple-town of [[place-rajapur|Rājapur]]. Most of the janapada lives outside them, in the hamlets and riverside farmsteads that each village answers for.

## The Fields

The cultivator villages grow the standard Vedyari mix of rice, cotton and pulse. [[place-vrihisthali|Vrīhisthalī]] is the largest of the rice villages, and [[place-mashakshetra|Māshakshetra]] on the higher ground grows the pulse that carries the janapada through a failed rice year. One crop belongs to the janapada alone: Mahānadi sugar, cut and boiled at [[place-gudagrama|Gudagrāma]] and one of Rājapur's principal exports.

## The Surplus

Floodplain farming, the sugar, the manuscript trade out of the scriptoria of [[place-lipigrama|Lipigrāma]] and the temple, and the pilgrim economy of the Vyālendra temple together leave the janapada a comfortable surplus most years. The pilgrims of the spring festival are fed from that surplus, and [[place-pushpavana|Pushpavana]] garlands the temple for them.

## See Also

- [[affiliation-rajaprjnpd|Rājapur Janapada]]—the temple-republic that holds this land
- [[place-vedyarargn|Vedyara Region]]—the enclosing region
- [[place-rajapur|Rājapur]]—the temple-seat
- [[place-mahanadi|The Mahānadi]]—the river the villages keep their distance from
