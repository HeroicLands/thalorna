---
shortcode: golemcrtr
name: {full: Constructs, aliases: [Construct, Golem, Golems]}
type: lore
subType: bestiary
description: "Magical constructs animated by the arcane arts—clay, stone, iron or once-dead flesh given motion and purpose, and no will of their own."
tags: []
data: {banner: creaturebnr}
---

Golems are powerful, magical constructs animated by the mystical arts of skilled magicians. Crafted from a variety of materials such as clay, stone, iron, or flesh that is already dead, these humanoid figures are brought to a semblance of life through the infusion of arcane energy and complex enchantments. Unlike living creatures, golems lack free will and consciousness, operating solely under the commands and directives of their creators. Their imposing forms and immense strength make them formidable guardians and relentless enforcers, capable of executing simple but crucial tasks with precision and unwavering loyalty. The intricate runes and mystical symbols often etched into their surfaces are the binding spells that maintain their animation and tireless purpose. Golems are typically found guarding ancient treasures, sacred sites, or serving as tireless laborers in tasks too dangerous or demanding for mortal hands, embodying the pinnacle of magical craftsmanship and arcane ingenuity.

A construct is one of three classes of made creature, and the material and the maker are what place it. A [[lore-dreadspawncrtr|dreadspawn]] is genuinely alive and a celestial hand made it so; a construct is matter that never lived or no longer does, moved by a mage's working; an [[lore-undead|undead]] is a dead thing walking under necrotic force, raised by a death god or by a necromancer holding that authority. A corpse sewn into a new shape and animated by spellwork is a construct, because the spell is a mage's and the flesh is material; the same corpse walking on a necromancer's binding is undead.

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
