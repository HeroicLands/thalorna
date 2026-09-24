---
tags:
  - region
  - coastal
description: "The scattered island chain southeast of Vedyara—coastal kingdoms of their own, and the Vedyari merchant colonies whose speech has gone its own way."
name:
  full: The Sūrya-samudra Islands
  aliases:
    - The Eastern Islands
shortcode: suryaislnds
type: place
subType: region
data:
  demonym: null
  lore:
    - humanflk
  parents:
    - suryasamdra
  population: 240000
packFolder: vedyara
---

## Overview

The islands lie southeast of Vedyara across open water, scattered over several days' sailing and belonging to nobody on the mainland. Each of the larger ones holds a coastal kingdom of its own, and the Vedyari deal with those kingdoms as they deal with any foreign court. What Vedyara knows of the chain it knows through its own shipping, and the charts are the property of the houses that made them.

On a dozen of the islands there is a Vedyari merchant colony, planted for the spice and the shell and kept up for generations. A colony is a quarter of a port town, a warehouse, a shrine and the families that work them. It answers to the island's king in everything but its own disputes, and no polity of the mainland has ever sent it an official.

The [[skill-vedyarlng|Vedyari]] spoken in the colonies is the Eastern Outlier dialect and has drifted furthest of any. Case and agreement have gone, the gender distinctions are going, and a second and a third language are mixed into ordinary speech. A scholar of the northern dialect can follow a colony merchant's letter and cannot follow his household.

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
  AND list_contains(s.data.parents, 'suryaislnds')
ORDER BY s.name.full COLLATE NOCASE
```

The query names the settlements of the chain. A merchant colony is a quarter of an island king's port and is counted with that port, so none stands here in its own name.

## See Also

- [[place-suryasamdra|The Sūrya-samudra]]—the sea the chain lies in
- [[place-vedyarargn|Vedyara Region]]—the mainland the colonies trade to
- [[skill-vedyarlng|Vedyari]]—the language and its Eastern Outlier dialect
