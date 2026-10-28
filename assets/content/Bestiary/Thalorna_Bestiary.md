---
shortcode: thlbestiary
name: {full: Thalorna Bestiary}
type: doc
subType: reference
description: "A categorized catalog of the creatures inhabiting the world of Thalorna, from mundane animals to spirits, elementals, and mythic beasts."
tags: []
---

## Animals

Natural creatures of [[place-worldthlrn|Thalorna]].

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

## Grukar

See [[lore-grukarfolk|Grukar]].

## Goblins

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

Spirits of the spirit realm that have taken on a physical form in the world.

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
