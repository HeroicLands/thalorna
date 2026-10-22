---
shortcode: zmrhdhsncnttns
name: {full: Zemor Hodhis Incantations, aliases: []}
type: lore
subType: arcana
tags: [lore, arcane, zemor-hodhis, draft]
data: {packFolder: affiliationszemorhodhis, culture: vylarianclt}
---

## Pirethos (Fire)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'pirethos'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Zefaris (Air)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'zefaris'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Fisera (Earth/Life)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'fisera'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Hidalis (Water)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'hidalis'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Sideris (Metal)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'sideris'
ORDER BY sohl.system.levelBase, name.full COLLATE NOCASE
```

## Neumenos (Spirit)

```sql
SELECT address.slug          AS _ref,
       name.full             AS "Name",
       sohl.system.levelBase AS "Level",
       description           AS "Description"
FROM notes
WHERE type = 'mysticalability'
  AND subType = 'arcaneincantation'
  AND sohl.system.assocSkillCode = 'neumenos'
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

- [[affiliation-zemorhodhis|Zemor Hodhis]]
