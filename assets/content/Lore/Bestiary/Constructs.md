---
shortcode: golemcrtr
name: {full: Constructs, aliases: [Golem, Golems]}
type: lore
subType: bestiary
description: "Magical constructs animated by the arcane arts—clay, stone, iron or once-dead flesh given motion and purpose, and no will of their own."
tags: []
data: {banner: creaturebnr}
---

A construct is a thing a mage has made to move: a figure of clay, stone or iron, or a body that is already dead, worked with bindings until it walks, fights and obeys. It has no will and no mind of its own. It does what it was told, in the words it was told, for as long as the binding holds, and many bindings have held far longer than the mage who laid them. The bindings are usually cut into the construct itself as runes and signs, and a construct whose signs are broken stops. Most are guardians, set at the door of a tomb, a temple or a mage's private rooms and left there; some are laborers, put to work too heavy or too dangerous for living hands. A construct cannot be bribed, frightened or argued with, and it stops where its orders stop, at a threshold or a ring of stones, so the first thing a party learns about one is where that line runs.

Constructs are one of three classes of made creature, and the material and the maker are what place it. A [[lore-dreadspawncrtr|Dreadspawn]] is genuinely alive and its life is attributed to a celestial hand; a construct is matter that never lived or no longer does, moved by a mage's working; an [[lore-undead|Undead]] is a dead thing walking under necrotic force, said to be raised by a death god or raised by a necromancer holding that authority. A corpse sewn into a new shape and animated by spellwork is a construct, because the spell is a mage's and the flesh is material; the same corpse walking on a necromancer's binding is undead.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'construct'
```
