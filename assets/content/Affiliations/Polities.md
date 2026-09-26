---
shortcode: polities
name: {full: Polities, aliases: []}
type: doc
subType: reference
description: States, kingdoms, empires, and other political bodies.
tags: [draft]
data: {banner: null}
---

States, kingdoms, empires, and other political bodies.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
ORDER BY name.full COLLATE NOCASE
```
