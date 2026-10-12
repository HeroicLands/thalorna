---
shortcode: elemcrtr
name: {full: Elementals, aliases: [Elemental]}
type: lore
subType: bestiary
description: "Physical manifestations of spirits from the spirit realm, each embodying a single elemental aspect."
tags: [draft]
data: {banner: creaturebnr}
---

An elemental is a spirit that has come into the world as a body of its own element. Its home is the spirit realm, and its nature is to channel a single elemental aspect, fire, water, air, earth, metal or another, without pause and without having to think about it. When it manifests in the material world, that channeling makes it a body: the flames of an [[being-embrhnd|Emberhound]], the ice of a [[being-frostjaw|Frostjaw]], the stone and soil of a [[being-lthgnt|Lithogiant]]. The body is projected and kept up by the spirit's channeling. It is not flesh, it was not born, and it does not grow old.

The first thing a newcomer learns about one is that killing it does not end it. An elemental's body can be destroyed, and a fire elemental struck down is suddenly smoke and embers; but its spirit goes back to the spirit realm, gathers itself, and in time manifests again, usually in the same place and often with a grievance against whoever drove it off. A small one may be back within hours, and a great one may take centuries. Folk tradition everywhere knows it in its own words: the river-spirit driven off returns next spring, and the forge-spirit bound and dispersed comes back generations later, when the binding has weakened. To end an elemental for good, it must be met in the spirit realm itself, where it has no body and is simply a spirit, and few mortals try.

Elementals are not spread evenly over the world. They gather where their element is strong, fire elementals at volcanoes and forges, water at rivers and lakes, air in storms and on high peaks, and they gather above all at thin places, where the boundary between the material world and the spirit realm is close. Some anchor themselves to a single place and become its spirit, a particular river or a particular forge. Mages can summon them, and some can bind them, a harder and more questionable practice; an elemental bound to a gate or a forge guards it as long as the binding holds. They range in power from barely conscious wisps that last a moment, like the [[being-fireflit|Fireflit]], to entities that change the weather of a region and stay for years, like the [[being-frostmaw|Frostmaw]].

Every people that meets them has its own account. The [[affiliation-tngvkrrklei|Celestial Order]] of Tānvür sets each element under one of the Five Elemental Lords, who administer their domains as ministries administer provinces, and its scholars sort elementals by the categories those ministries keep, so that a volcano's fire and a temple brazier's fire answer to different offices of the same Lord. The Jürthāti read an eruption and what walks out of it as heaven's attention. The Storm-Speakers of the north read the storms the sky elementals ride. None of these accounts makes an elemental any less dangerous to meet.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'elemental'
```
