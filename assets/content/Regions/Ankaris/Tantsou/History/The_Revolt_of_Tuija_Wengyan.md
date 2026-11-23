---
shortcode: tuijarevolt
name: {full: The Revolt of Tuija Wengyan}
type: lore
subType: history
description: "The Wohou general Tuija Wengyan won a battle against a direct imperial order, was stripped of his rank and exiled while the registry gave his victory to another, and rose in revolt; the records give it no year."
tags: [history, tantsou]
data:
  culture: tantsouclt
  packFolder: tantsou
  events:
    - id: victory
      when: unknown
      kind: battle
      depth: region
      sources: [being-tuijawengyan, lore-tantsouclt]
      summary: >-
        On a critical campaign the Wohou general Tuija Wengyan receives a direct imperial order to hold his position, judges it a mistake, attacks and wins. The court strips him of his rank and exiles him, and the registry records the victory under another commander's name.
      standing: single-source
      who: [{ref: being-tuijawengyan, role: actor}, {ref: affiliation-tantsouempr, role: actor}]
    - id: revolt
      when: unknown
      kind: revolt
      depth: region
      sources: [being-tuijawengyan, affiliation-tantsouempr]
      summary: >-
        In exile Tuija Wengyan gathers soldiers disaffected by the purge that followed him and minor Zhazho nobles with grievances of their own, who bring their Wandwo with them, and his forces make real gains in the border provinces.
      standing: single-source
      where: {locus: [place-tantsouregin]}
      follows: [{event: "lore-tuijarevolt#victory", how: caused, note: the court made him a rebel}]
      who: [{ref: being-tuijawengyan, role: actor}, {ref: affiliation-tantsouempr, role: victim}]
---

The Revolt of Tuija Wengyan is the rising of a condemned general of the [[affiliation-tantsouempr|Empire of Tantsou]] against the throne he served. The records give it no year.

[[being-tuijawengyan|Tuija Wengyan]], granted the name Iron Spear Piercing the Clouds for his service, was one of the most respected generals of the [[lore-wohou|Wohou]]. On a critical campaign he received a direct imperial order to hold his position, judged it a mistake, attacked and won. A battle won by defying an order is proof the order was wrong, and an imperial order cannot be wrong without the [[lore-mandatehvn|Mandate of Heaven]] behind it being questioned. The court stripped him of his rank and exiled him, and the registry recorded the victory under another commander's name.

He did not accept it. In exile he gathered soldiers disaffected by the purge that followed him and minor [[lore-zhazho|Zhazho]] nobles with grievances of their own against the court, and the nobles brought their [[lore-wanduo|Wandwo]] with them, because a Zhazho's sorcerers go where their owner goes. His forces have made real gains in the border provinces.

## See Also {#see-also}

[[being-tuijawengyan|Tuija Wengyan]]
: the general and his revolt

[[lore-tantsouclt|The Tantsou]]
: the falsehood the registry entered, and what it says of the sorting

[[affiliation-tantsouempr|Empire of Tantsou]]
: the empire he rose against
