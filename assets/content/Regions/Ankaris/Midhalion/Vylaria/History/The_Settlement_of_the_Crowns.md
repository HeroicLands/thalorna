---
shortcode: crownssettle
name:
  full: The Settlement of the Crowns
  aliases: [The Post-Imperial Settlement, The Settlement of Azénalès]
type: lore
subType: history
description: "About 619 AF, the year after Provènzia's charter war ended, the Augustar Azénalès settles with the envoys of the Aurèldían crowns and the Byzarian League what the Empire still is: Provènzia's Charter recognized, the crowns and the League free of imperial governance and tax but inside the note system at a two-percent issuance fee, Heliónis a province on paper, and the far forts' commissions unpaid."
tags: [history, vylaria, thedrift]
data:
  packFolder: vylaria
  events:
    - id: settlement
      when: ~619
      kind: treaty
      depth: region
      sources:
        - affiliation-vylarinmpr
        - affiliation-aerarimmpr
        - affiliation-magnumclgm
        - affiliation-clgmrgntrrm
        - affiliation-kngdmprvnz
        - affiliation-byzarianlg
        - place-aureldirgn
        - place-byzariargn
        - place-helionis
        - place-orzara
      summary: >-
        The Augustar Azénalès receives the envoys of the Aurèldían crowns and the Byzarian League and settles what the Empire still is. Provènzia's Charter is recognized. The crowns and the League are free of imperial governance and tax, and stay inside the note system at a two-percent issuance fee that goes to the Aerarium. Heliónis stays a province on the chancery's roll with its own magistrates and legions only where its cities ask for them by treaty. The far forts' commissions go unpaid, and the chancery stops pressing claims it cannot enforce.
      standing: attested
      names:
        - {name: the Settlement of the Crowns, by: affiliation-vylarinmpr}
        - name: the post-imperial settlement
          by: affiliation-aerarimmpr
          gloss: the Aerarium's name for the terms it has refused to reopen in every generation since
      where:
        locus: [place-orzara]
        reach:
          - place: place-aureldirgn
            how: >-
              the crowns pay the issuance fee as a banker's charge and call their realms members of the post-imperial commonwealth
            knowledge: named
          - place: place-byzariargn
            how: >-
              the League sits in the commonwealth, taxed by nobody and charged by the Collegium
            knowledge: named
          - place: place-helionis
            how: >-
              the cities keep their magistrates and the chancery keeps the name, and the relationship is that of a grown child to an aging parent
            knowledge: named
          - place: place-vylariargn
            how: >-
              the chancery says nothing to the clans of the Cervaron, and the passage-gift is paid without comment
            knowledge: unlinked
      who:
        - {ref: affiliation-vylarinmpr, role: signatory}
        - {ref: affiliation-aerarimmpr, role: actor}
        - {ref: affiliation-kngdmprvnz, role: signatory}
        - {ref: affiliation-byzarianlg, role: signatory}
      follows:
        - event: lore-charterwar
          how: ended
          note: the Charter the estates won in nine years of war is the first term the Empire recognizes
        - event: lore-tarvfallsawy
          how: enabled
          note: the first crown to leave the Empire had already shown that a realm can stop paying and keep banking
        - event: lore-empirdclne
          how: enabled
          note: an Empire that cannot collect from its provinces trades governance for the fee
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The Augustar Azénalès settled the Empire's relations with its former provinces, and the Aerarium has never since been asked to give up the note system.
          agrees: partly
          withholds: that the Empire kept the fee because it had lost the means to keep anything else
        - by: affiliation-kngdmprvnz
          says: >-
            The Charter was won in the field, and the Settlement is the Empire putting its seal on a fact.
          agrees: partly
        - by: place-helionis
          says: >-
            The Empire kept the name of a province, and the cities kept the rest.
          agrees: partly
      unresolved:
        - whether the crowns' envoys met in one hall or the Augustar received them one at a time
---

An Aurèldían factor, handing a Vylarian clerk a traveler's note at a counting-table in Ôrzâra, watches the clerk deduct the fee and write the sum in the margin. "Two in a hundred," the clerk says. "It was settled in Azénalès's time and nobody has reopened it. Your king calls it the Collegium's charge. The Aerarium calls it the Aerarium's. Both are right, and neither will say so to the other."

## What the Empire Had Left

By the time the estates of Provènzia made peace ([[lore-charterwar|The War of the Charter]]), the Empire had been losing provinces for a century. Tarvénia had stopped paying in the generation after the Three Winters ([[lore-tarvfallsawy|Tarvénia Falls Away]]). The Byzarian League, annexed three centuries before ([[lore-heladeastwar|The Eastern War]]), had re-formed its council and answered to no imperial officer. Heliónis kept its cities' councils and had no governor it obeyed. The western crowns had armies of their own.

What the Empire still had was the note system. The Aerarium minted the coin, the Collegium Argentariorum issued the notes, and the Magnum Collegium held the guilds of every city under one charter ([[lore-arzanasedict|The Edicts of Arzánas]]). Every realm that had left the Empire still banked through it.

## The Terms

In the year after the Charter's peace, the Augustar **Azénalès** of **House Mârdôvanês**, who had ruled for fifteen years and spent them watching the provinces go, received the envoys of the crowns and the League in Ôrzâra and set the terms down in one settlement.

- **Provènzia's Charter** was recognized. The Empire stopped sending governors, and the Charter's king was acknowledged in the chancery's own style.
- **The crowns and the League** were free of imperial governance and imperial tax. They kept the Vylarian coin and the paper-script, and paid a two-percent fee on every note issued, which went to the Aerarium ([[affiliation-aerarimmpr|Aerarium Imperii]]).
- **Heliónis** stayed on the chancery's roll as a province. Its cities kept their own magistrates, and a legion sat in a Helionite city only where the city had asked for one by treaty. The roll names a province, and the cities govern themselves ([[place-helionis|Heliónis]]).
- **The far forts** went unpaid. A fortress commander who held a post in the Hellád on an imperial commission kept the post and lost the pay, and some of their heirs hold the posts still.
- **The claims the Empire could not enforce**, among them the Cervaron, stopped being pressed. The chancery has not raised the range with the clans since.

The terms were not a defeat for the Aerarium and were not presented as one. The crowns were told they were partners in a commonwealth, and the fee was a banker's charge.

## What It Made

The Aurèldían kingdoms and the Byzarian League became what every commerce section calls the post-imperial commonwealth: realms that answer to their own crowns and councils and bank through Ôrzâra. The Aerarium has refused to reopen the fee in every generation since, and the crowns have never had a way to refuse it.

Provènzia's Charter was tested within a lifetime, in a succession war the Empire watched from outside ([[lore-warprinces|The War of the Princes]]).

## What It Left

- **The post-imperial commonwealth.** The phrase in every Aurèldían and Byzarian commerce section.
- **The two-percent fee.** The Empire's largest standing revenue from lands it does not govern.
- **Heliónis as a province on paper.** The chancery's roll and the cities' practice, side by side.
- **The unpaid forts.** Hereditary commanders in the Hellád who file a yearly report and wait for an answer.
- **The chancery's silence on the Cervaron.**

## See Also

- [[lore-charterwar|The War of the Charter]]—the war the Settlement ended
- [[lore-warprinces|The War of the Princes]]—Provènzia's first test of the Charter
- [[lore-tarvfallsawy|Tarvénia Falls Away]]—the first crown to leave
- [[lore-heladeastwar|The Eastern War]]—how the League came into the Empire
- [[affiliation-aerarimmpr|Aerarium Imperii]] · [[affiliation-clgmrgntrrm|Collegium Argentariorum]]
