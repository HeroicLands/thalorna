---
shortcode: wogenunion
name: {full: "Wogen's Union of the Black Wilds"}
type: lore
subType: history
description: "Wogen Henzhwo bound the feuding tribes of the Black Wilds to him while the garrisons of the north thinned, and hard winters drove the united tribes south into the northern districts of Tantsou; the records give it no year."
tags: [history, tantsou]
data:
  culture: tantsouclt
  packFolder: tantsou
  events:
    - id: union
      when: unknown
      kind: founding
      depth: region
      sources: [being-wogenhenzhuo, place-blackwilds]
      summary: >-
        Wogen Henzhwo, war-leader of a minor tribe, binds the feuding tribes of the Black Wilds to him one at a time, by marriage, by treaty and by slaughter, while infighting among the Wohou lords of the north thins the frontier garrisons and the court looks to its own intrigues.
      standing: single-source
      where: {locus: [place-blackwilds]}
      who: [{ref: being-wogenhenzhuo, role: actor}]
    - id: raids
      when: unknown
      kind: war
      depth: region
      sources: [being-wogenhenzhuo, place-blackwilds, place-kwozhngmrch, affiliation-kwozhengprv]
      summary: >-
        A run of hard winters and failing grazing drives the united tribes south against the marches, and Wogen's riders raid the northern districts of the empire, striking supply lines and outposts and withdrawing before an imperial army can force a battle.
      standing: single-source
      where: {locus: [place-kwozhngmrch]}
      follows:
        - {event: "lore-wogenunion#union", how: enabled, note: the tribes rode south under one man}
      who: [{ref: being-wogenhenzhuo, role: actor}, {ref: affiliation-kwozhengprv, role: victim}]
---

Wogen's Union of the Black Wilds is the binding of the steppe tribes north of the [[affiliation-tantsouempr|Empire of Tantsou]] under one war-leader, and the raids that followed it into the empire's northern districts. The records give it no year.

For generations the tribes of [[place-blackwilds|the Black Wilds]] fought one another over grazing, wells and blood debts, and the empire's border garrisons kept them divided with gifts to one chief and raids against another. [[being-wogenhenzhuo|Wogen Henzhwo]] began as the war-leader of a minor tribe and bound the others to him one at a time: by marriage where a chief had a daughter, by treaty where a chief had sense, and by slaughter where he had neither. Infighting among the [[lore-wohou|Wohou]] lords of the north had thinned the frontier garrisons, and the court was too busy with its own intrigues to notice the steppe uniting. By the time a Prince's report reached the capital, the border was porous and the tribes answered to one man, in the [[affiliation-hwenhatoucnf|Hwenhatou Confederation]].

A run of hard winters and failing grazing drove the tribes south in any case, and with the tribes answering to him, Wogen turned that hunger into a war aim. His riders came into the northern districts of [[affiliation-kwozhengprv|Kwozheng Province]], striking supply lines and outposts instead of towns and withdrawing before an imperial army could force a battle.

## See Also {#see-also}

[[being-wogenhenzhuo|Wogen Henzhwo]]
: the warlord who united the tribes

[[place-blackwilds|The Black Wilds]]
: the steppe the tribes hold

[[affiliation-hwenhatoucnf|Hwenhatou Confederation]]
: the union of the tribes under Wogen

[[place-kwozhngmrch|The Kwozheng Marches]]
: the marches the riders raid
