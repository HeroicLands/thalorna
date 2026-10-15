---
shortcode: hxhdncnttns
name: {full: Ksêmor Hodhîs Incantations, aliases: []}
type: lore
subType: arcana
tags: [lore, arcane, hex-hodai, draft]
data: {packFolder: affiliationshexhodai, culture: vylarianclt}
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

## Zepharis (Air)

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

## Hydalis (Water)

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

## Neuménos (Spirit)

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

- [[affiliation-hexhodai|Ksêmor Hodhîs]]
