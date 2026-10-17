---
shortcode: crownssettle
name:
  full: The Settlement of the Crowns
  aliases: [The Post-Imperial Settlement, The Settlement of Azénales]
type: lore
subType: history
description: "About 619 AF, the year after Provenzia's charter war ended, the Orzas Azénales settles with the envoys of the Aureldian crowns and the Bizarian League what the Empire still is: Provenzia's Charter recognized, the crowns and the League free of imperial governance and tax but inside the note system at a two-percent issuance fee, Helionis a province on paper, and the far forts' commissions unpaid."
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
        - affiliation-tarmex
        - affiliation-tevran
        - affiliation-danvar
        - affiliation-kngdmprvnz
        - affiliation-byzarianlg
        - place-aureldirgn
        - place-byzariargn
        - place-helionis
        - place-orzara
      summary: >-
        The Orzas Azénales receives the envoys of the Aureldian crowns and the Bizarian League and settles what the Empire still is. Provenzia's Charter is recognized. The crowns and the League are free of imperial governance and tax, and stay inside the note system at a two-percent issuance fee that goes to the Tarmeks. Helionis stays a province on the chancery's roll with its own magistrates and legions only where its cities ask for them by treaty. The far forts' commissions go unpaid, and the chancery stops pressing claims it cannot enforce.
      standing: attested
      names:
        - {name: the Settlement of the Crowns, by: affiliation-vylarinmpr}
        - name: the post-imperial settlement
          by: affiliation-tarmex
          gloss: the Tarmeks's name for the terms it has refused to reopen in every generation since
      where:
        locus: [place-orzara]
        reach:
          - place: place-aureldirgn
            how: >-
              the crowns pay the issuance fee as a banker's charge and call their realms members of the post-imperial commonwealth
            knowledge: named
          - place: place-byzariargn
            how: >-
              the League sits in the commonwealth, taxed by nobody and charged by the Tevran
            knowledge: named
          - place: place-helionis
            how: >-
              the cities keep their magistrates and the chancery keeps the name, and the relationship is that of a grown child to an aging parent
            knowledge: named
          - place: place-vylariargn
            how: >-
              the chancery says nothing to the clans of the Kervaron, and the passage-gift is paid without comment
            knowledge: unlinked
      who:
        - {ref: affiliation-vylarinmpr, role: signatory}
        - {ref: affiliation-tarmex, role: actor}
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
        - event: lore-heladreswear
          how: answered
          note: the League's council had sworn the Compact again and paid the frontier garrisons for itself, and the Settlement recognizes what the oath made
      accounts:
        - by: affiliation-vylarinmpr
          says: >-
            The Orzas Azénales settled the Empire's relations with its former provinces, and the Tarmeks has never since been asked to give up the note system.
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
        - by: affiliation-byzarianlg
          says: >-
            The council sat in the Merchant Hall and paid its own garrisons, and the Orzas wrote down that we were free. We had already sworn it.
          agrees: partly
          withholds: that the League accepted the two-percent fee at the same table
      unresolved:
        - whether the crowns' envoys met in one hall or the Orzas received them one at a time
---

In The Settlement of the Crowns, an Aureldian factor, handing a Vylarian clerk a traveler's note at a counting-table in [[place-orzara|Orzara City]], watches the clerk deduct the fee and write the sum in the margin. "Two in a hundred," the clerk says. "It was settled in [Azénales]{.name data-type="being/npc"}'s time and nobody has reopened it. Your king calls it [[affiliation-tevran|The Tevran Maldor]]'s charge. [[affiliation-tarmex|The Tarmeks Orzan]] calls it the Tarmeks's. Both are right, and neither will say so to the other."

## What the Empire Had Left

By the time the estates of the [[affiliation-kngdmprvnz|Kingdom of Provenzia]] made peace ([[lore-charterwar|The War of the Charter]]), the [[affiliation-vylarinmpr|Vylarian Empire]] had been losing provinces for a century. The [[affiliation-kingdmtrvn|Kingdom of Tarvénia]] had stopped paying in the generation after [[lore-threewinters|The Three Winters]] ([[lore-tarvfallsawy|Tarvénia Falls Away]]). The [[affiliation-byzarianlg|Bizarian League]], annexed three centuries before ([[lore-heladeastwar|The Eastern War]]), had sworn [[lore-heladcompact|The Compact of the Five]] again and answered to no imperial officer ([[lore-heladreswear|The Re-swearing of the Compact]]). [[place-helionis|Helionis]] kept its cities' councils and had no _therkos_ (governor) it obeyed. The western crowns had armies of their own.

What the Empire still had was the note system. The Tarmeks minted the coin, [[affiliation-danvar|The Danvar]] issued the notes, and the Tevran Maldor held the guilds of every city under one charter ([[lore-arzanasedict|The Edicts of Arzanas]]). Every realm that had left the Empire still banked through it.

## The Terms

In the year after the [Charter of Rights]{.name data-type="lore/law"}'s peace, the Orzas **Azénales** of **[House Mardovanes]{.name data-type="affiliation/lineage"}**, who had ruled for fifteen years and spent them watching the provinces go, received the envoys of the crowns and the League in Orzara and set the terms down in one settlement.

- **Provenzia's Charter** was recognized. The Empire stopped sending _therkoi_, and the Charter's king was acknowledged in the chancery's own style.
- **The crowns and the League** were free of imperial governance and imperial tax. They kept the Vylarian coin and the paper-script, and paid a two-percent fee on every note issued, which went to the Tarmeks.
- **Helionis** stayed on the chancery's roll as a province. Its cities kept their own magistrates, and a legion sat in a Helionite city only where the city had asked for one by treaty. The roll names a province, and the cities govern themselves ([[place-helionis|Helionis]]).
- **The far forts** went unpaid. A fortress commander who held a post in the [[place-heladrgn|Hellád Region]] on an imperial commission kept the post and lost the pay, and some of their heirs hold the posts still.
- **The claims the Empire could not enforce**, among them the [Kervaron Spine]{.name data-type="place/feature"}, stopped being pressed. The chancery has not raised the range with the clans since.

The terms were not a defeat for the Tarmeks and were not presented as one. The crowns were told they were partners in a commonwealth, and the fee was a banker's charge.

## What It Made

The Aureldian kingdoms and the Bizarian League became what every commerce section calls the post-imperial commonwealth: realms that answer to their own crowns and councils and bank through Orzara. The Tarmeks has refused to reopen the fee in every generation since, and the crowns have never had a way to refuse it.

Provenzia's Charter was tested within a lifetime, in a succession war the Empire watched from outside ([[lore-warprinces|The War of the Princes]]).

## What It Left

- **The post-imperial commonwealth.** The phrase in every Aureldian and Bizarian commerce section.
- **The two-percent fee.** The Empire's largest standing revenue from lands it does not govern.
- **Helionis as a province on paper.** The chancery's roll and the cities' practice, side by side.
- **The unpaid forts.** Hereditary commanders in the Hellád who file a yearly report and wait for an answer ([[place-unpaidfort|The Unpaid Fort]]).
- **The chancery's silence on the Kervaron.**

## See Also

- [[lore-charterwar|The War of the Charter]]—the war the Settlement ended
- [[lore-warprinces|The War of the Princes]]—Provenzia's first test of the Charter
- [[lore-tarvfallsawy|Tarvénia Falls Away]]—the first crown to leave
- [[lore-heladeastwar|The Eastern War]]—how the League came into the Empire
- [[affiliation-tarmex|Tarmeks Orzan]] · [[affiliation-danvar|Danvar]]
