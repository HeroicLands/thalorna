---
tags: []
name:
  full: Thalorna Bestiary
  aliases: []
description: "A categorized catalogue of the creatures inhabiting the world of Thalorna, from mundane animals to spirits, elementals, and mythic beasts."
shortcode: thlbestiary
type: doc
subType: reference
---

## Animals

Natural creatures of Thalorna.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'animal'
```

## Constructs

See [[lore-golemcrtr|Constructs]].

## Dreadspawn

See [[lore-dreadspawncrtr|Dreadspawn]].

## Elementals

See [[lore-elemcrtr|Elementals]].

## Grukar - A Blight Upon the Land

See [[lore-grukarfolk|Grukar]].

## Goblins - The Cunning Tricksters

See [[lore-goblinfolk|Goblins]].

## Undead

See [[lore-undead|Undead]].

## Mythic Creatures {#mythic}

Rare but fantastic creatures whose existence relies on arcane forces.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'mythic'
```

## Spirit Creatures {#spirit}

Physical manifestations of spirits from the astral realm

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'spirit'
```
