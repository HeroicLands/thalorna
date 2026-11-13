---
shortcode: saelvricrusade
name: {full: The Seilvri Crusade, en: [The Hunting of the Seilvri, The War in the West]}
type: lore
subType: history
description: "Since about 694 AF the Order of the Just Blade has waged the Synod of Dúnavarre's war on the Seilvri, a forest people of the western woods: it took their valleys, killed several thousand of them in the Hushwood about 703, and now cuts its road into Teilvari, the last forest they hold."
tags: [history]
data:
  culture: aelwythanclt
  packFolder: eilwith
  events:
    - when: ~694
      until: 720
      kind: war
      depth: region
      sources:
        - affiliation-kingdmdnvr
        - affiliation-saelvri
        - affiliation-justbladeordr
        - place-hushwood
        - place-teilvari
        - place-dunavarre
      summary: >-
        The Synod of Dúnavarre declares the Seilvri, a forest people of the western woods, a danger to the island and sends the Order of the Just Blade against them. Over nine years the Order drives them out of their valleys, and at the turn of the year about 703 it kills several thousand of them, with their children, in the Hushwood, the wood of their dead, in three days. The survivors withdraw into Teilvari on the edge of Seirasto, and the Order follows them, cutting a road deeper into the forest every summer. The Synod's stated reason is raiding. The Order holds that it carries the light of Árdavon to a people outside every law and oath.
      standing: attested
      names:
        - {name: the Seilvri Crusade, by: affiliation-justbladeordr}
        - {name: the Hunting, by: affiliation-saelvri}
      where:
        locus: [place-hushwood, place-teilvari]
        reach:
          - place: place-dunavarre
            how: the Synod grants the taken valleys to estates, the Order musters at Kelivren every spring, and the western estates hang tenants who trade with the forest
            knowledge: named
          - place: place-eilwith
            how: the island's forest peoples learn that a realm will end a people it fears, and trust the Synod accordingly
            knowledge: named
      who:
        - {ref: affiliation-kingdmdnvr, role: actor}
        - {ref: affiliation-justbladeordr, role: instrument}
        - {ref: being-merraddovvrn, role: actor}
        - {ref: affiliation-saelvri, role: victim}
        - {ref: being-arvanir, role: actor}
        - {ref: being-toradhtaravren, role: witness}
      follows:
        - event: lore-dunavarresynod
          how: enabled
          note: only a government that answers to nobody outside its closed session could order the end of a people and not be asked to explain it
      accounts:
        - by: affiliation-kingdmdnvr
          says: >-
            A raiding people is a danger to the island, and the Order is ending the danger.
          agrees: full
          withholds: why the Synod seeks the end of a people whose raiding it never proved
        - by: affiliation-justbladeordr
          says: >-
            A people outside every oath and law is brought to Árdavon's threshold, and those who kneel are spared.
          agrees: full
          withholds: how few have been given the chance to kneel
        - by: affiliation-saelvri
          says: >-
            The kingdom took the valleys, killed the people in the wood of their dead, and keeps the dead from their rite.
          agrees: disputes
          withholds: nothing it is asked
      unresolved:
        - what the Seilvri keep that the Synod wants gone with them
        - whether a Seilvri child was carried out of the Hushwood alive
---

[[affiliation-kingdmdnvr|Dúnavarre]]'s own records call the **[[affiliation-saelvri|Seilvri]]** its nemesis. The war on them is the [[affiliation-justbladeordr|Order of the Just Blade]]'s longest campaign and its present one, and the [[affiliation-dunavarsynod|Synod]] describes it briefly, as a necessary campaign against raiders. The Synod's account does not say why a people who raided could not be answered with a garrison.

## Nine Years

The Seilvri held the valleys and woods of Dúnavarre's west, with their own speech, their own rites and their own dead. The Synod declared them a danger to the island in about 694 AF, and the Order of the Just Blade took the field. The Knight-Captains drove them out valley by valley, burning steadings and taking the passes, and the Seilvri withdrew toward the oldest of their woods. By the turn of the year about 703 several thousand of them, with their children, were gathered in it, and the Order went in. The killing took three days. The ground is [[place-hushwood|the Hushwood]].

## The War in the West

The survivors went west and up into [[place-teilvari|Teilvari]], the deep forest on the edge of [[place-hallowwood|Seirasto]], and the war went with them. It is a war of seasons. Each spring the Order musters at [[place-kelivren|Kelivren]] after the [[lore-kelivrentrny|Royal Kelivren Tournament of Chivalry]], and each summer the Knight-Captain of the West, [[being-merraddovvrn|Sir Merrad Dovavren]], cuts the road a few miles deeper into the forest and burns the clearings it reaches. Each winter the Seilvri bowmen under [[being-arvanir|Arvanir]] take back what they can of the forest's edge. About two thousand of the people are left, and they are losing.

The Order offers terms. A Seilvri who comes out of the woods and kneels at [[lore-ardavondty|Árdavon]]'s threshold is spared and settled as an unfree tenant on an estate. A few hundred have accepted. Those who do not kneel are killed where they are found.

## Two Names for It

The war has two names in Dúnavarre, and the same people use both.

The Order is the realm's pride. Its knights keep the roads, sit as judges beside the priests of Árdavon, defend the weak by oath and are held to it, and it is the chivalry the island's other courts measure their own against. Its knights call the war the crusade. Its chaplain, [[being-edrintalvvl|Edrin Talvavel]], preaches it at every Sanctification of Swords as the light of Árdavon carried to a people outside every oath and law, and the knights who ride west each summer believe it.

The Seilvri call it the Hunting. In Wreimouth, on the western estates and among the forest-edge tenants who trade with the Seilvri and are hanged for it, many who honor the Order call the war in the west a murder. The Order hears them, and does not answer.

## What the Knights Heard

The stated reason was raiding, and the Order's knights, who were sent to answer raids, found little to support it. The knights heard others from the Synod's _marendoi_ (masters) and from one another: that the Seilvri held a thing the Synod wanted, that they had refused it and that they were dangerous for it. The accounts did not agree and none was confirmed. Most of the Order's Knight-Captains did their duty and have not spoken of it.

:::secret {title="A Knight-Captain's conscience"}
[[being-toradhtaravren|Dame Torad Taravren]] fought in the crusade's first years as a decorated warrior of several campaigns and holds it contrary to the principles of the Order and of the [[affiliation-ardavon|Faith of Árdavon]], whose god the Order serves. She has said so to no one. Her posting to the embassy to Tantsou keeps her out of the war in the west.
:::

## What It Left {#what-it-left}

- **The Hushwood.** A blood-field in the western woods, forbidden by the Synod, whose dead the Seilvri cannot reach to settle.
- **The road.** The Order's road into Teilvari, with its camps and the burned clearings beside it.
- **The taken valleys.** The Seilvri valleys, granted by the Synod to estates whose stewards hold the settled Seilvri as unfree tenants.
- **A nemesis in the records.** Dúnavarre's registers name the Seilvri an enemy and say no more.
- **A question the Synod does not answer.** What the Seilvri keep, and why the Synod wants it gone.

## See Also {#see-also}

[[affiliation-saelvri|The Seilvri]]
: the people

[[place-teilvari|Teilvari]]
: the forest the war is fought in

[[place-hushwood|The Hushwood]]
: the wood where several thousand of them died

[[affiliation-justbladeordr|The Order of the Just Blade]]
: the Synod's arm

[[lore-dunavarresynod|The Mages Take Dúnavarre]]
: the government that ordered it
