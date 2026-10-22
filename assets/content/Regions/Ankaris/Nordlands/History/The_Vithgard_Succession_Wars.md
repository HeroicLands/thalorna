---
shortcode: vthgrdsccwrs
name: {full: The Vithgard Succession Wars, aliases: [The Truce of Logstead]}
type: lore
subType: history
description: "King Tvarnthann of Vithgard died in the dark of 694 AF with two sons by two wives and no acclaimed heir; Snirvmil held Thrunborg and Glirvorv held Hrandstead, and the levies fought seven summers until a Sworn Hand brought the brothers to Logstead in 701 and they swore the truce the kingdom lives under."
tags: [history, nordlands]
data:
  culture: nordheimnclt
  packFolder: nordlands
  events:
    - id: outbreak
      when: 694
      kind: war
      depth: region
      stated: {calendar: domseycount, text: "408 SG"}
      sources:
        - affiliation-kngdmvthgrd
        - place-thrunborg
        - place-hrandstead
        - place-inthstead
        - affiliation-malldbndlg
      summary: >-
        King Tvarnthann dies in the winter dark of 694 with two sons by two wives and no heir acclaimed by the ting. Snirvmil, the elder, holds Thrunborg and the coast; Glirvorv, the younger, holds Hrandstead and its own ting. Each ting acclaims its own man, and the levies fight seven summers along the border between them; the Burning of Inthstead is one night of it.
      standing: attested
      names: [{name: the Vithgard Succession Wars, by: affiliation-skaldscrcl}]
      where:
        locus: [place-vithgard]
        reach:
          - place: place-inthstead
            how: fire takes a levy's tent-lines with the men inside
            knowledge: named
          - place: place-hringstead
            how: the Compact's companies hire out to both brothers, and its present Speaker is a one-eyed veteran of the war
            knowledge: named
      who: [{ref: affiliation-kngdmvthgrd, role: victim}]
      unresolved:
        - which brother Tvarnthann meant to name, since he named neither and the velva who sat with him will not say
    - id: truce
      when: 701
      kind: treaty
      depth: region
      stated: {calendar: domseycount, text: "415 PR"}
      sources: [affiliation-kngdmvthgrd, place-logstead, affiliation-eidhond]
      summary: >-
        A Sworn Hand brings both brothers to Logstead, and before the hov of Eidgar they swear the truce: Snirvmil takes the crown and is acclaimed at the kingdom's ting; Glirvorv holds the Hrandstead district for his life as its jarl and has no voice in the succession. The losing branch keeps its claim and presses it.
      standing: attested
      names: [{name: the Truce of Logstead, by: affiliation-kngdmvthgrd}]
      where:
        locus: [place-logstead]
        reach:
          - place: place-hrandstead
            how: the district is held for a life by the brother who lost, under his own ting
            knowledge: named
      who: [{ref: affiliation-eidhond, role: actor}]
      follows: [{event: "lore-vthgrdsccwrs#outbreak", how: caused, note: the war the truce ended}]
      accounts:
        - by: affiliation-kngdmvthgrd
          says: >-
            The truce was sworn before Eidgar and holds; the king is acclaimed and his brother is a jarl, and a claim pressed in a hall is a claim the ting has already heard.
          agrees: full
        - by: place-hrandstead
          says: >-
            The Hrandstead ting acclaimed Glirvorv first and has never un-acclaimed him; the truce binds the brothers, not the district.
          agrees: partly
      unresolved:
        - what happens to Hrandstead's seat when Glirvorv dies, which the truce does not say
---

"Check the lines before you check your sword," [[being-dvrnvrhrfnsvld|Dvarnvir Hrafansvald]] tells the levymen he sells tents to, and the levy he learned it in was fighting a king's son against a king's son. **The Vithgard Succession Wars** are the war every captain of the north's free companies learned his trade in, and the truce that ended them is the kind that keeps a kingdom quiet rather than at peace.

## A King with Two Sons

King [Tvarnthann]{.name data-type="being/npc"} of the [Thalmidrok]{.name data-type="affiliation/lineage"} ruled [[affiliation-kngdmvthgrd|Vithgard]] from about 668, through the hungry whaling winter that ended at [[place-askholm|Askholm]], and died in the winter dark of 694 at [[place-thrunborg|Thrunborg]]. He had two sons by two wives, [Snirvmil]{.name data-type="being/npc"} by the first and [Glirvorv]{.name data-type="being/npc"} by the second, and he had never had either acclaimed as his heir, because a king of the north is chosen by the ting and a king who names his heir in his lifetime invites the ting to refuse him. The velva who sat with him at the end has never said which son he spoke of.

Snirvmil, the elder, held Thrunborg and the coast, and the kingdom's ting at [[place-logstead|Logstead]] would have acclaimed him in the spring. Glirvorv held [[place-hrandstead|Hrandstead]], the one province of the kingdom with a ting of its own, under the [Bjarnaett]{.name data-type="affiliation/lineage"} jarls who had fostered him, and the Hrandstead ting acclaimed him first, in the dark, before the roads opened. Each brother was a king to one assembly, and the levies of the two halves of the kingdom fought seven summers along the line between them.

## Seven Summers

It was a war of levies and hired swords, fought in the short season between the ships going out and the slaughter. The [[affiliation-malldbndlg|Compact's companies]] sold their swords to both brothers, which is why the present Speaker of the Málalidabandalag, [Hrindvir Vetreldur]{.name data-type="being/npc"}, has one eye, and why a company that served Snirvmil one summer and Glirvorv the next was breaking no oath. The war's one remembered night is [The Burning of Inthstead]{.name data-type="lore/history"}, at the border steading of [[place-inthstead|Inthstead]], when fire took a levy's tent-lines with the men inside them, and Dvarnvir, then a young levyman, carried burning canvas out of his company's tent before it could close over his companions. Nothing in seven summers settled anything. Neither brother could take the other's ting, and a king who cannot be acclaimed by the whole assembly is a king of half a kingdom.

## The Truce of Logstead

In 701 a Sworn Hand of [[affiliation-eidhond|the Order of the Sworn Hand]], whose knights serve all five crowns and are sworn to none, brought both brothers to Logstead, where an oath is made before the hov of [[affiliation-eidgar|Eidgar]] and the north holds the breaking of such an oath the gravest offense its faith knows. Before the hov the brothers swore the truce. Snirvmil took the crown and was acclaimed by the kingdom's ting. Glirvorv took the Hrandstead district as its jarl for his life, with his own ting under him, and swore to have no voice in the succession. The levies went home.

The losing branch did not stop being a branch. Glirvorv's sons were never asked to swear, the Hrandstead ting has never un-acclaimed the man it acclaimed, and a jarl who holds a province for life under a truce holds it for exactly as long as he lives. Vithgard is quiet. It is the quiet of a kingdom whose two tings are waiting for the same funeral.

## What It Left

- **The truce.** Snirvmil king at Thrunborg; Glirvorv jarl at Hrandstead for life, with no voice in the succession and a ting that remembers acclaiming him.
- **The claim.** Alive in Glirvorv's hall, and pressed; a ship's captain in the kingdom's waters can be offered a staggering sum by either side to carry what a war needs.
- **Inthstead and the tentmaker.** The night that made Dvarnvir check the lines before the sword.
- **Veterans everywhere.** The Compact's Speaker among them, and every captain of a signed company who was young in 694.

What the truce does not say is what becomes of Hrandstead's seat when Glirvorv dies, and he is not young. A party in Vithgard in the present reckoning can be hired by the king to make sure the question is never asked, or by the Hrandstead ting to make sure it is.

## See Also

[[affiliation-kngdmvthgrd|Kingdom of Vithgard]]
: the crown and the Thalmidrok

[[place-logstead|Logstead]]
: where the truce was sworn

[[place-hrandstead|Hrandstead]] · [[place-thrunborg|Thrunborg]]
: the two halves of the war

[[place-inthstead|Inthstead]]
: the one night the kingdom remembers

[[affiliation-malldbndlg|Málalidabandalag]]
: the companies that served both sides

[[lore-domseycount|The Domsey Count]]
: the Stormveld Generation and the Present Reckoning
