---
shortcode: easternline
name: {full: The Eastern Line, aliases: [The Hill Forts of Taruzel]}
type: lore
subType: history
description: "From about 316 AF to about 330 AF the eastern legions answer the breaking of the Storm of the Hundred Banners by raising a line of hill forts and a military road across the interior of Taruzel's larger islands, garrisoned by hill horsemen the Empire pays."
tags: [history, vylaria, ageconquest]
data:
  culture: vylarianclt
  packFolder: vylaria
  events:
    - id: line
      when: ~316
      until: ~330
      kind: raising
      depth: region
      sources:
        - place-taruzelrgn
        - affiliation-cnfdrtntrzlnstts
        - affiliation-vylrnmltry
        - place-dunharargn
        - affiliation-kngdmmrdd
      summary: >-
        When the Storm of the Hundred Banners breaks up at the walls of Amradad, the eastern legions expect its scattered bands to take ship across the strait to the islands. They hold the coast, then build a line of hill forts and a military road across the interior of the larger islands, and recruit the hill horsemen of the interior to garrison it on the Empire's pay. The Empire holds the islands' interior as it never had before, and pays the hill tribes for the privilege.
      standing: reconstructed
      names: [{name: the Eastern Line, by: affiliation-vylrnmltry}]
      where:
        locus: [place-taruzelrgn]
        reach:
          - place: place-taruzelrgn
            how: >-
              the forts stand ruined in the hill country and the road runs between them, and the hill tribes keep the habit of serving for pay
            knowledge: named
      who: [{ref: affiliation-vylrnmltry, role: actor}]
      follows:
        - event: lore-hndrdbnnrs
          how: answered
          note: the legions built the line against bands the Storm might scatter across the strait
      accounts:
        - by: affiliation-vylrnmltry
          says: >-
            The hill horsemen were the best auxiliaries the eastern garrisons ever raised, and served for over a century.
          agrees: partly
          withholds: that many of them deserted to the rebels in the war of independence
        - by: affiliation-cnfdrtntrzlnstts
          says: >-
            The Empire kept the roads up and paid the tribes to keep the forts, and the guilds have done neither.
          agrees: partly
      unresolved:
        - whether any band of the Storm crossed the strait, or whether the line was built against a landing that never came
---

A hill-country mule-driver on the old military road, asked who built it, does not answer the question. "Ask who paid for it," he says. "They were paying every spring, in good silver, to men who could have robbed the road."

## The Storm Breaks

The Storm of the Hundred Banners came down the Western Descent in 315, crossed [[place-dunharargn|Dunhara]] and reached the eastern walls of [[affiliation-kngdmmrdd|Amradad]], and there it broke up when its khan died ([[lore-hndrdbnnrs|The Storm of the Hundred Banners]]). Its bands scattered over the Amradi shore. The eastern legions, garrisoned on the islands of [[place-taruzelrgn|Taruzel]] across a strait forty to eighty miles wide, could not know which way they would go.

## The Line

The legions held the islands' coasts first. In the decade after, they turned to the interior. The larger islands rise from narrow plains through rolling hills to arid scrub, and the hill tribes who lived there were as dangerous to a column as any landing. The legions raised a line of hill forts along the ridges and cut a military road between them, wide enough for a cohort and kept up by the garrisons.

They manned the forts with the people who knew the hills. Hill horsemen, hired on the Empire's pay, held the line against the bands the Storm might scatter and against one another. The practice outlasted the Storm: Taruzelian auxiliaries served in the imperial army for over a century, and many of them were the hill tribes' sons.

## What It Left

- **The forts and the road.** Ruined hill forts and a road that runs between them across the larger islands' interior, unmaintained since the revolution.
- **The auxiliary tradition.** The hill tribes' habit of serving the Empire for pay, which supplied the Empire's eastern auxiliaries for a century and the Confederation's foot soldiers in the war of independence.
- **Long acquaintance with legion pay.** The tribes know exactly what imperial silver is worth, and what the guilds' coin is not.

## See Also

- [[lore-hndrdbnnrs|The Storm of the Hundred Banners]]—the host the line was built against
- [[place-taruzelrgn|Taruzel Region]]—the islands the line crosses
- [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]]—the state that inherited the ruins
