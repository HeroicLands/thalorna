---
tags:
  - lore
  - arcane
  - hex-hodai
  - draft
type: lore
subType: arcana
shortcode: hxhdncnttns
name:
  full: Héx Hodäi Incantations
  aliases: []
packFolder: affiliationshexhodai
---

## Pyréthos (Fire)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pyrethos'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Zephäris (Air)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zepharis'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Physéra (Earth/Life)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'physera'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Hydälis (Water)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hydalis'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Sidéros (Metal)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideros'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Pneuménos (Spirit)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pneumenos'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Kentra ( _The Center All_)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'kentra'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## See Also

- [[lore-hexhodai|Héx Hodäi]]
