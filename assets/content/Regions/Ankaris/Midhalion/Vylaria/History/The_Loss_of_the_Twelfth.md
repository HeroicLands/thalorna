---
shortcode: twelfthloss
name:
  full: The Loss of the Twelfth
  aliases: [The Doran Hilvan's Last Winter, The Kervaron Campaign]
type: lore
subType: history
description: "About 680 AF a regent's council sends the Doran Hilvan into the Kervaron to enforce the boundary stones on the Áelendan clans; the clans let the legion climb, close the passes behind it and wait for the snow, and the legion is struck from the rolls as destroyed with its eagle unreturned."
tags: [history, vylaria, thecore]
data:
  packFolder: vylaria
  events:
    - id: twelfth
      when: ~680
      kind: battle
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-vylrnmltry
        - affiliation-aelndntrbs
        - affiliation-alndnwrdns
        - place-vylariargn
        - place-alndntrblnds
        - place-twelfthcamp
      summary: >-
        A regent's council sends the Doran Hilvan into the Kervaron to enforce the boundary stones on the clans. The Áelendan let it climb, close the passes behind it and wait for the snow. The legion is disbanded on the record as destroyed, and its eagle is never returned.
      standing: attested
      names:
        - {name: the Loss of the Twelfth, by: affiliation-vylrnmltry}
        - name: the winter the mountain kept
          by: place-alndntrblnds
          gloss: the clans' name for the year, which counts the snow and not the legion
      where:
        locus: [place-twelfthcamp]
        reach:
          - place: place-vylariargn
            how: >-
              the passage-gift is paid at the first camp without comment, and nobody on either side calls it a toll
            knowledge: named
          - place: place-twelfthcamp
            how: >-
              the fort below the passes where the last cohorts wintered stands ruined on the Vylarian side
            knowledge: named
          - place: place-alndntrblnds
            how: >-
              the clans hold the range as the dwelling of the First Gods and say the stones were never theirs to answer
            knowledge: named
      who:
        - {ref: affiliation-vylrnmltry, role: victim}
        - {ref: affiliation-aelndntrbs, role: actor}
        - {ref: affiliation-vylarinmpr, role: actor}
      follows:
        - event: "lore-westernwars#wars"
          how: answered
          note: the boundary-stones the western expeditions planted are the stones the Twelfth is sent to enforce
        - event: "lore-crownssettle#settlement"
          how: enabled
          note: sixty years of chancery silence on the range leave a regent's council to try what the Settlement set aside
      accounts:
        - by: affiliation-vylrnmltry
          says: >-
            The Doran Hilvan was destroyed in a campaign in the Kervaron, and its eagle is lost.
          agrees: partly
          withholds: that the legion was never beaten in the field
        - by: place-alndntrblnds
          says: >-
            The mountain took back what climbed it.
          agrees: partly
          withholds: what walks the Twelfth's last camp
      unresolved: [who raised the Twelfth's dead, where the Twelfth's eagle lies]
---

In The Loss of the Twelfth, a mule-train master at the first camp below a pass of the [Kervaron Spine]{.name data-type="place/feature"}, accepting the passage-gift from a factor's steward, checks the weight of the bag and does not count it. "The [Doran Hilvan]{.name data-type="affiliation"}, the Twelfth, is why," he says, if he is asked why the gift is never haggled. "Before it, [[affiliation-seldan|Seldan]], the Senate, sent men up to read the stones to us. After it, the Senate sent grain merchants, and we let them through."

## A Council Tries the Range

The chancery had said nothing to the clans of the Kervaron since [[lore-crownssettle|The Settlement of the Crowns]]. The boundary-stones the western expeditions had planted at the passes stood where the western expeditions had set them ([[lore-westernwars|The Western Wars]]), and the clans treated them as ritual objects of obscure meaning.

About 680, under a regency, the regent's council wanted a victory it could show the Senate. It chose the one boundary the [[affiliation-vylarinmpr|Vylarian Empire]] claimed and had never held, and it sent the Doran Hilvan to read the stones to the clans. The chancery was not asked. The legion marched in the thaw.

## The Mountain

The [[lore-aelendnppl|Áelendan People]] had met such columns before. They let the Twelfth climb deep into the range, as they had let the columns of the western wars, and they closed the passes behind it. They did not give battle. The legion left its rear cohorts in a fort it built at the foot of the passes and took the rest up through the summer, and it ran out of road when the snow came.

The record the army keeps says the Twelfth was destroyed. The cohorts in the fort wintered there, and what became of them is not in any report ([[place-twelfthcamp|The Twelfth's Last Camp]]). The eagle never came back. The army struck the legion from the rolls, as the manual requires of a legion that loses its _orkaima_, and the families whose sons were cashiered in the disbanding have not forgotten it.

## What It Left

- **The passage-gift.** Merchants pay it at the first camp without question, and the chancery has not raised the range since.
- **The Twelfth's Last Camp.** A ruin on the Vylarian side of the passes, recently cleared of the undead by a border patrol.
- **The missing eagle.** The families of the disbanded Twelfth want it found, and the legions raised in its place want it left where it is ([[affiliation-vylrnmltry|The Vylarian Military]]).

## See Also

[[lore-westernwars|The Western Wars]]
: the stones the Twelfth was sent to enforce

[[lore-crownssettle|The Settlement of the Crowns]]
: the silence the regency broke

[[place-twelfthcamp|The Twelfth's Last Camp]]
: the fort below the passes

[[place-vylariargn|Vylaria Region]]
: the Kervaron Spine and its passage-gifts

[[place-alndntrblnds|Áelendan Tribal Lands]]
: the clans who hold the range
