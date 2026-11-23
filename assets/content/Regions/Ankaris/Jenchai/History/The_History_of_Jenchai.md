---
shortcode: hstryjenchai
name: {full: The History of Jenchai, en: [History of Jenchai]}
type: lore
subType: history
description: "A referee's reading history of the Nine Mountains from the Secession to 720 AF: the thousand-year stalemate with Tantsou, the balance of the great lords, Hojujai Henwo's sixteen years as Teng Ja, and the war and the abdication that left the office empty."
tags: [history, jenchai]
data:
  culture: jenchaiclt
  packFolder: jenchai
  events:
    - id: tengja
      when: 693
      until: 709
      kind: accession
      depth: region
      sources: [affiliation-jenchaiempr, affiliation-hojujaidmn, place-zojai]
      summary: >-
        The Emperor confers the office of Teng Ja, Heaven's Blade, on the Dauzhwo of Hojujai, Henwo. For sixteen years Henwo is the lord the other lords obey. He speaks for the Emperor to them, keeps the peace between the houses by force, and forwards the rice of the court estates to the court that depends on him.
      standing: attested
      where:
        locus: [place-zojai]
        reach:
          - place: place-lengwou
            how: >-
              the court's rice reaches the Dawn Court through the Teng Ja's hands, and the Emperor is dependent on him for it
            knowledge: named
          - place: place-yanwu
            how: >-
              the household of the Teng Ja is the household of the castle town, and the house's retainers hold their stipends from the Dauzhwo who holds the office
            knowledge: named
      who:
        - {ref: affiliation-hojujaidmn, role: actor}
        - {ref: affiliation-jenchaiempr, role: ruler}
      accounts:
        - by: affiliation-hojujaidmn
          says: >-
            Henwo held the office as the Emperor's sword-arm, and the Nine had peace between the houses for as long as he held it.
          agrees: partly
        - by: affiliation-shuiwojaidmn
          says: >-
            The office was a house's, held for sixteen years, and the court's dependence on it was the cost the balance paid.
          agrees: partly
      unresolved:
        - which of the houses Henwo brought to heel before the Emperor conferred the office on him
    - id: henwodeath
      when: 709
      kind: death
      depth: region
      sources: [affiliation-hojujaidmn, place-yanwu]
      summary: >-
        Hojujai Henwo dies in office. His widow, Rewei, governs the mountain for their small son, and the office of Teng Ja, which lapses with its holder, stands vacant.
      standing: attested
      where:
        locus: [place-yanwu]
        reach:
          - place: place-hojai
            how: >-
              the burning mountain passes to a regency, and its omen-readers have read the mountain's moods against it since
            knowledge: named
      follows:
        - {event: "lore-hstryjenchai#tengja", how: ended, note: the office lapses with its holder}
      who: [{ref: affiliation-hojujaidmn, role: actor}]
---

The Nine Mountains keep their history in two registers. One is the unbroken line of Emperors, which the islanders offer as proof that heaven favors them. The other is the long run of quarrels between the houses that hold the mountains, which they remember in the names of the lords who ended them. **The History of Jenchai** follows both, from the Secession to the year 720 AF, and closes on what they left for a party arriving now.

## The Secession

Over a thousand years ago the island province broke away from the [[affiliation-tantsouempr|Empire of Tantsou]] in a bloody war, led by the imperial governor from whom the Emperors of the Nine claim unbroken descent ([[lore-jenchaiscs|The Secession of Jenchai]]). No imperial expedition has reasserted sovereignty over the archipelago since. The mainland calls the realm _Chaiwong_ and treats it as a renegade province, and the islanders hold that heaven withdrew its [[lore-mandatehvn|Mandate of Heaven]] from the mainland and gave it to the Nine Mountains. The proof they offer is the line itself: where Tantsou's has been broken by conquest and civil war, theirs stands.

**What it left.** An eastern frontier that has been a stalemate of raid and counter-raid ever since, a navy the mainland has never matched, and an Emperor whose claim to the whole Mandate is the one the lords cannot make for themselves.

## The Nine and Their Balance

Over the centuries the realm became what it is. The Emperor kept the palace above [[place-lengwou|Lengwou]] on [[place-zojai|Zojai]], the Dragon's Mountain, which he does not leave, and the real authority passed to the Dauzhwo, the great lords, who each hold a mountain by the Emperor's patent and keep an army, a fleet, a granary and a law of their own. Eight houses hold the eight domains, and the balance among them rests on three or four of roughly equal strength, none willing to risk open war against a coalition of the others. Every generation or so the balance collapses into civil war before a new one settles.

The Emperor holds what the lords need and cannot take, which is the patent, the court's dignities, a place at the [Dawn Rite]{.name data-type="lore/custom"} and the one office that reaches beyond them: **Teng Ja**, Heaven's Blade. The Emperor confers it on a Dauzhwo who has brought enough of the others to heel, and for as long as the lord holds it, the others obey him.

**What it left.** A realm of eight kings in everything but the title, a throne that commands only its household guard, and an office that decides who rules the rest.

## Henwo's Teng Ja, 693 to 709 AF

In 693 AF the Emperor conferred the office on the Dauzhwo of [[affiliation-hojujaidmn|Hojujai Domain]], [[being-henwohojujai|Hojujai Henwo]]. For sixteen years the Nine had one lord the others obeyed. Henwo spoke for the Emperor to the houses and kept the peace between them by force, and he forwarded the rice of the court estates, which made the court his debtor. The house of the burning mountain, [[place-hojai|Hojai]], held the sword-arm of the realm for the whole of those years, and the retainers of [[place-yanwu|Yanwu]] became the household of the Teng Ja.

The office is not inherited, and it ended with him. Henwo died in 709 AF, and the heir to Hojujai was a small child. His widow, [[being-reweihojujai|Hojujai Rewei]], took the mountain in the boy's name.

**What it left.** A house that remembers holding the office, a regent who keeps the mountain until her son comes of age, and the question of the office, which stood open when Henwo died.

## The War of the Empty Seat, 709 to 712 AF

The court was ready to confer the office on the regency. [[affiliation-shuiwojaidmn|Shuiwojai Domain]] and [[affiliation-wojaidmn|Wojai Domain]] pressed it not to, so that no house should hold the office and the balance should stand, and the quarrel became a war between the loyalists, Hojujai and [[affiliation-muwojaidmn|Muwojai Domain]], and Shuiwojai and Wojai with the fleets of the Strait behind them ([[lore-empseatwar|The War of the Empty Seat]]). It ran three years across both islands and the strait. The peace was bought with the throne. The Emperor abdicated and took vows, and his son [[being-weilengjnch|Weileng]], eleven years old, was enthroned on Zojai in 712 AF. The office of Teng Ja was conferred on nobody.

**What it left.** A Retired Emperor in a household the court cannot afford, an Emperor who has ruled since he was eleven, and the sin the islands name as their own: the lords made a Son of Heaven step down to pay for their quarrel.

## The Empty Seat, 712 to 720 AF

The office has stood vacant since the peace, and the race to fill it is the realm's central contest. The Strait, which is Shuiwojai and the lesser island's [[affiliation-rinjaidmn|Rinjai Domain]], wants [[being-henzoshuiwo|Shuiwojai Henzo]] named Teng Ja. The loyalists, Hojujai and Muwojai, want it for the Hojujai heir when he comes of age, or for nobody. Henzo's silver has covered the shortfall in the court's budget for three years, and the court is in his debt. He has petitioned for the office, and Weileng has answered with a sealed letter ([[affiliation-shuiwojaidmn|Shuiwojai Domain]]). [[affiliation-wojaidmn|Wojai Domain]] and [[affiliation-zenjaidmn|Zenjai Domain]] belong to neither bloc, and either joining one ends the balance. The Emperor confers the office, and he is nineteen years old and of age. The houses are testing whether he rules or is ruled.

**What it left.** An office nobody holds, two blocs that each have the numbers to lose the realm and not to win it, and a young Emperor who has the one thing left to confer.

## See Also {#see-also}

- [[lore-jenchaiscs|The Secession of Jenchai]]—the breaking away, in the world's histories
- [[lore-empseatwar|The War of the Empty Seat]]—the war, the peace and the enthronement
- [[affiliation-jenchaiempr|Jenchai Empire]]—the throne, the Teng Ja and the court
- [[place-jenchairgn|Jenchai Region]]—the islands themselves
- [[lore-mandatehvn|The Mandate of Heaven]]—the claim the islanders and the mainland dispute
