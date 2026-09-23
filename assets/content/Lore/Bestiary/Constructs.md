---
tags: []
name:
  full: Constructs
  aliases:
    - Construct
    - Golem
    - Golems
description: "Magical constructs animated by the arcane arts—clay, stone or iron given motion and purpose, and no will of their own."
shortcode: golemcrtr
type: lore
subType: bestiary
data:
  banner: creaturebnr
---

Golems are powerful, magical constructs animated by the mystical arts of skilled magicians. Crafted from a variety of materials such as clay, stone, iron, or other substances, these humanoid figures are brought to life through the infusion of arcane energy and complex enchantments. Unlike living creatures, golems lack free will and consciousness, operating solely under the commands and directives of their creators. Their imposing forms and immense strength make them formidable guardians and relentless enforcers, capable of executing simple but crucial tasks with precision and unwavering loyalty. The intricate runes and mystical symbols often etched into their surfaces are the binding spells that maintain their animation and tireless purpose. Golems are typically found guarding ancient treasures, sacred sites, or serving as tireless laborers in tasks too dangerous or demanding for mortal hands, embodying the pinnacle of magical craftsmanship and arcane ingenuity.

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
