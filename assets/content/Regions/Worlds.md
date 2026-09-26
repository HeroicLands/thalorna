---
shortcode: worlds
name: {full: Worlds, aliases: []}
type: doc
subType: reference
description: The worlds of the Heroic Lands multiverse.
tags: [draft]
data: {banner: null}
---

The worlds of the Heroic Lands multiverse.

```sql
SELECT address.slug AS _ref,
       name.full    AS "Name",
       description  AS "Description"
FROM notes
WHERE type = 'place'
  AND subType = 'world'
ORDER BY name.full COLLATE NOCASE
```
