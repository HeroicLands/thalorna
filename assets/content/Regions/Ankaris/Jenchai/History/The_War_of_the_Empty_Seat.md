---
shortcode: empseatwar
name: {full: The War of the Empty Seat, en: [War of the Empty Seat]}
type: lore
subType: history
description: "From 709 to 712 AF the houses of the Nine Mountains fought over whether a dead Teng Ja's office could pass to a regency, and the peace was bought with the throne: the Emperor abdicated and his eleven-year-old son took his place."
tags: [history, jenchai]
data:
  culture: jenchaiclt
  packFolder: jenchai
  events:
    - id: regency
      when: 709
      kind: council
      depth: region
      sources:
        - affiliation-jenchaiempr
        - affiliation-shuiwojaidmn
        - affiliation-wojaidmn
        - affiliation-hojujaidmn
      summary: >-
        The court is ready to confer the office of Teng Ja on the regency that governs for Henwo's small heir. Shuiwojai and Wojai press it not to, so that no house holds the sword-arm and the balance among the Nine stands.
      standing: attested
      where:
        locus: [place-zojai]
        reach:
          - place: place-yanwu
            how: >-
              the castle town of the house learns that its heir may not have his father's office, and its retainers, the household of the last Teng Ja, ready the muster
            knowledge: named
          - place: place-lengwou
            how: >-
              the Dawn Court is the ground the envoys of the houses press on, and its rulings on the office are the ones the quarrel is about
            knowledge: named
      follows:
        - event: "lore-hstryjenchai#henwodeath"
          how: caused
          note: the office lapsed with its holder
      who:
        - {ref: affiliation-shuiwojaidmn, role: actor}
        - {ref: affiliation-wojaidmn, role: actor}
        - {ref: affiliation-hojujaidmn, role: victim}
        - {ref: affiliation-jenchaiempr, role: witness}
      accounts:
        - by: affiliation-shuiwojaidmn
          says: >-
            The office lapses with its holder and is not inherited. To confer it on a regency was to give the sword-arm to a house for as long as the boy was a boy, and the Nine had pressed against that before a blade was drawn.
          agrees: partly
        - by: affiliation-hojujaidmn
          says: >-
            Faith is owed to a lord's heir before every other virtue, and the heir of the last Teng Ja was refused his father's office for being a child.
          agrees: partly
    - id: war
      when: 709
      until: 712
      kind: war
      depth: region
      sources:
        - affiliation-jenchaiempr
        - affiliation-shuiwojaidmn
        - affiliation-hojujaidmn
        - affiliation-muwojaidmn
        - affiliation-wojaidmn
      summary: >-
        The quarrel over the office becomes open war between the houses. Shuiwojai and Wojai stand against the loyalists, Hojujai and Muwojai, and the other houses side as their mountains and harbors direct. The fighting runs across both islands and the strait for three years, and it ends only when the Emperor himself is made the price.
      standing: attested
      where:
        locus: [place-jenchairgn]
        reach:
          - place: place-zojai
            how: >-
              the Dragon's Mountain, which the Emperor may not leave, receives the envoys of every side and no army
            knowledge: named
          - place: place-hojai
            how: >-
              the burning mountain stays in the hands of the widow-regent for her son through the whole war
            knowledge: named
          - place: place-hawu
            how: >-
              the harbor and seat of the Strait lord, whose silver and ships carry the war for his side
            knowledge: named
      follows:
        - event: "lore-empseatwar#regency"
          how: caused
          note: the refusal to confer the office on a regency
      who:
        - {ref: affiliation-shuiwojaidmn, role: actor}
        - {ref: affiliation-wojaidmn, role: actor}
        - {ref: affiliation-hojujaidmn, role: actor}
        - {ref: affiliation-muwojaidmn, role: actor}
      accounts:
        - by: affiliation-shuiwojaidmn
          says: >-
            The war was fought so that no house should rule the rest through the Emperor's sword, and the balance that stands today is what it bought.
          agrees: partly
        - by: affiliation-hojujaidmn
          says: >-
            The war was fought over a dead lord's office and his living son, and the houses that pressed hardest were the ones that gained when the office stayed empty.
          agrees: partly
      unresolved:
        - which of the other houses fought, and on which side, before the peace
        - how many died, and how much of either island's terraces were burned
    - id: peace
      when: 712
      kind: treaty
      depth: region
      sources: [affiliation-jenchaiempr, affiliation-shuiwojaidmn, affiliation-hojujaidmn]
      summary: >-
        The houses make peace, and the price they set on it is the throne. The Emperor abdicates, takes vows and is renamed, and keeps a household in Lengwou. The office of Teng Ja is left unconferred, the regency of Hojujai stands, and the balance among the houses is the one the Nine live under now.
      standing: attested
      where:
        locus: [place-lengwou]
        reach:
          - place: place-zojai
            how: >-
              the Dawn Rite is kept each year with the Retired Emperor watching from the town below, a reminder of what the peace cost
            knowledge: named
      follows:
        - event: "lore-empseatwar#war"
          how: ended
          note: the war stopped when the Emperor stepped down
      who:
        - {ref: affiliation-jenchaiempr, role: signatory}
        - {ref: affiliation-shuiwojaidmn, role: signatory}
        - {ref: affiliation-hojujaidmn, role: signatory}
      accounts:
        - by: affiliation-jenchaiempr
          says: >-
            The Son of Heaven laid down the throne for the peace of the Nine, and the line stayed unbroken.
          agrees: partly
      unresolved:
        - which houses besides the Emperor, Shuiwojai and Hojujai swore the peace
        - who first named the abdication as the price
        - whether the Emperor chose to step down or was made to
    - id: enthronement
      when: 712
      kind: accession
      depth: region
      sources: [affiliation-jenchaiempr, place-zojai]
      summary: >-
        The Emperor's son Weileng, eleven years old, is enthroned on Zojai in his father's place. He takes the style Rongleng Tengzhei, Son of Heaven of Ten Thousand Dawns, and confers the office of Teng Ja on nobody.
      standing: attested
      where:
        locus: [place-zojai]
        reach:
          - place: place-lengwou
            how: >-
              the capital below the palace holds two courts, a boy on the throne and his father in a household the treasury cannot afford
            knowledge: named
      follows:
        - event: "lore-empseatwar#peace"
          how: caused
          note: the abdication that was the price of peace
      who: [{ref: affiliation-jenchaiempr, role: ruler}]
---

The War of the Empty Seat began with a funeral and a question about who might inherit a sword. [[being-henwohojujai|Hojujai Henwo]], the last Teng Ja, died in 709 AF, and the war that followed ran until 712 AF. It is the last time the balance among the Nine Mountains collapsed, and the way it was ended is why the realm has an Emperor who was crowned at eleven and no Teng Ja at his side.

## The Quarrel

The office of Teng Ja, Heaven's Blade, lapses with its holder and is not inherited. When Henwo died his heir was a small child, and his widow, [[being-reweihojujai|Hojujai Rewei]], held the mountain for him as regent. The court was ready to confer the office on that regency, so that the sword-arm of the realm would stay with Hojujai through the heir's minority and pass to the heir after it. [[affiliation-shuiwojaidmn|Shuiwojai Domain]] and [[affiliation-wojaidmn|Wojai Domain]] pressed the court not to confer the office on the regency, so that no house should hold it and the balance among the houses should stand.

The Nine hold two principles that bear on the question, and they pull against each other. One is that faith is owed to a lord's heir as the first of virtues, and the heir of the last Teng Ja was refused his father's office for being three years old. The other is that no house is to be set over the rest, and a regency in which a widow held the Emperor's sword was exactly that. Each side holds that the other began it, and the Nine have never agreed on which principle ranks higher.

## The War

The loyalists, [[affiliation-hojujaidmn|Hojujai Domain]] and [[affiliation-muwojaidmn|Muwojai Domain]], stood for the regency and the heir. Shuiwojai and Wojai, with the fleets of the Strait behind them, stood against it, and the remaining houses joined as their mountains and harbors directed. The fighting ran across both islands and the strait for three years. No house took [[place-zojai|Zojai]], which the Emperor does not leave and which stood above the war as a place that every side's envoys had to reach, and the court at [[place-lengwou|Lengwou]] stayed the ground the quarrel was about.

Records of the individual fights were not kept, or have not been shared by the houses that fought them. The Jenchai remember the war by what ended it.

## The Peace

The peace was bought with the throne. The Emperor abdicated, took vows and was renamed, as a lord or retainer of the islands does at the end of a long life, and he keeps a household in Lengwou. His son [[being-weilengjnch|Weileng]], eleven years old, was enthroned on Zojai in 712 AF and took the style _Rongleng Tengzhei_. The Emperor of the Nine had been made to step down to pay for his lords' quarrel. The office of Teng Ja, which had started the war, was left unconferred, and the new Emperor has conferred it on nobody since.

The settlement left both blocs standing. Hojujai kept its mountain under the widow's regency, and the Strait kept its fleet and its silver. Wojai has stood apart from both since.

## What It Left {#what-it-left}

- **An empty office.** Teng Ja has stood vacant since 709 AF, and the race to fill it, between the loyalists and the Strait, drives the politics of the eight domains ([[lore-hstryjenchai|The History of Jenchai]]).
- **A Retired Emperor.** His household in Lengwou is part of the cost the court cannot meet, and the Dawn Rite is kept each year with him watching.
- **An Emperor crowned young.** Weileng has ruled since he was eleven. The houses now test whether he rules or is ruled.
- **The sin of the Nine.** The islands hold that the mainland lost the Mandate because its line of emperors broke, and that the lords kept their own line unbroken only by making a Son of Heaven step down to pay for their quarrel, which is the sin the islands name as their own ([[lore-jenchaiscs|The Secession of Jenchai]]).

## See Also {#see-also}

- [[lore-hstryjenchai|The History of Jenchai]]—the land across the years the war closes
- [[affiliation-jenchaiempr|Jenchai Empire]]—the throne and the Teng Ja
- [[affiliation-hojujaidmn|Hojujai Domain]] · [[affiliation-shuiwojaidmn|Shuiwojai Domain]] · [[affiliation-wojaidmn|Wojai Domain]]—the houses that fought it
- [[place-lengwou|Lengwou]]—where the Retired Emperor lives
