---
shortcode: vahrundenun
name: {full: The Denunciation of Vahrun Marzuvan}
type: lore
subType: history
description: "About 690 AF the storm-walker Vahrun Marzuvan, who had taken the title Master of the Tower for himself on the Pale Floor, claimed to be a vessel of Bazhrámish without the gathered elders' assent, and the storm cults' Council of Elders at the Stone of Ranaz denounced him; the Lightning-Marked say he climbed into a storm at the Tower soon after and was gone by morning."
tags: [history, dunhara]
data:
  culture: dunhariclt
  packFolder: dunhara
  events:
    - id: denunciation
      when: ~690
      kind: council
      depth: region
      sources: [affiliation-strmcltsbzhrms, place-stoneofranaz, place-twrlghtnmrkd]
      summary: >-
        Vahrun Marzuvan, a storm-walker who gathers the cults' youngest and boldest on the Pale Floor and calls the lightning down to the spike of the Tower, takes the title Master of the Tower, which no body confers, and claims to be a vessel of Bazhrámish. The Council of Elders at the Stone of Ranaz gives him no assent and denounces him before the gathered lineages.
      standing: attested
      where:
        locus: [place-stoneofranaz]
        reach:
          - place: place-twrlghtnmrkd
            how: >-
              the Tower's following breaks up, and the Lightning-Marked keep the Floor and its toll without a master
            knowledge: named
      who: [{ref: affiliation-strmcltsbzhrms, role: actor}]
      accounts:
        - by: affiliation-strmcltsbzhrms
          says: >-
            The five lineages have no master. A vessel is recognized by the assent of the gathered elders, and the torc is theirs to give.
          agrees: full
      unresolved: [what Vahrun read in the lightning that he would not bring before the Council]
    - id: storm
      when: ~691
      kind: loss
      depth: region
      sources: [place-twrlghtnmrkd, miscgear-crwnvahrun]
      summary: >-
        A great storm comes up out of a clear sky over the Pale Floor, and Vahrun climbs alone to the gallery of the Tower. The bolt takes the tower, the storm stays, and in the morning he is gone, with no body, no ash and no crown.
      standing: single-source
      where: {locus: [place-twrlghtnmrkd]}
      follows:
        - {event: "lore-vahrundenun#denunciation", how: enabled, note: he went up a denounced man}
      accounts:
        - by: affiliation-strmcltsbzhrms
          says: >-
            Vahrun never died. He went into the storm.
          agrees: partly
      unresolved: [whether Vahrun is dead, whether the iron crown went into the storm with him]
---

The [[affiliation-strmcltsbzhrms|Storm Cults of Bazhrámish]] are five lineages with no master over them, and **the Denunciation of Vahrun Marzuvan** is the time the Council of Elders was made to say so before every lineage at once.

## The Master of the Tower

[[being-vhrnmrzvn|Vahrun Marzuvan]] was a storm-walker of the _ghuzmogar_ and a _ruzhogar_ in his own lineage. In the years before about 690 AF he gathered the cults' youngest and boldest on the [[place-palefloor|Pale Floor]] and taught them to call the lightning down on purpose, to the iron spike at the summit of the [[place-twrlghtnmrkd|Tower of the Lightning-Marked]], and to read what he held to be the god's mood from where it fell. He called himself the _Master of the Tower_. No body conferred the title, and the lineages have no office of that name.

Then he claimed to be a vessel of [[lore-bazhramisdty|Bazhrámish]], one in whom the storm god speaks. A vessel is recognized only by the assent of the gathered elders of all five lineages, and the recognition binds every one of them. Vahrun did not ask for it.

## Before the Council

About 690 the [Council of Elders]{.name data-type="affiliation/governmental"} sat at the [[place-stoneofranaz|Stone of Ranaz]] at a season-turn, with the lineages gathered and the [[affiliation-wrrscrcldnhrtrbs|Warrior's Circle]] meeting on the same days. It gave him no assent. It denounced him, and the iron torc that a recognized vessel wears at the throat was never given to him. He wore a crown of iron he had forged himself in its place ([[miscgear-crwnvahrun|The Iron Crown of Vahrun Marzuvan]]).

## Into the Storm

What came after is told by one lineage only. The elders of [the Lightning-Marked]{.name data-type="affiliation"} say a great storm came up out of a clear sky over the Floor soon after the denunciation, and Vahrun climbed to the gallery of the tower alone. The bolt took the tower and the storm did not leave with it. In the morning he was gone: no body, no ash, not so much as the crown. **Vahrun never died. He went into the storm.** The elders say it the same way each time and decline to say what they mean by it.

## What It Left {#what-it-left}

- **The rule.** The denunciation stands as the plainest statement of the Council's authority: the lineages have no master, and only the gathered elders make a vessel.
- **The Floor.** The Lightning-Marked keep the toll below the tower and their own counsel about it, and the other lineages hold their silence against them at the Council.
- **The crown.** The iron crown is held to be lost in the sky above the Floor, and a fence in [[place-qarvelakhend|Qarvelakhend]] pays well for it all the same.
- **The question.** The Warrior's Circle has never ruled whether the Old Promise covers a Dunhari whom the elders say walked into the sky.

## See Also {#see-also}

[[affiliation-strmcltsbzhrms|Storm Cults of Bazhrámish]]
: the five lineages and their Council of Elders

[[place-twrlghtnmrkd|Tower of the Lightning-Marked]]
: the spire on the Pale Floor

[[place-stoneofranaz|Stone of Ranaz]]
: where the Council sat

[[miscgear-crwnvahrun|The Iron Crown of Vahrun Marzuvan]]
: the crown he forged in place of a vessel's torc
