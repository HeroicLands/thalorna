---
tags: []
description: "Vylarian imperial treasury and central bank—holds the empire's bullion reserves, issues the master and traveler's notes that underwrite continental commerce, and extracts a 2% issuance fee from every note generated even in territories the empire no longer governs."
name:
  full: The Aerarium Imperii
  aliases:
    - The Imperial Treasury
    - The Aerarium
shortcode: aerarimmpr
type: affiliation
subType: governmental
data:
  templatePriority: null
  demonym: null
  epithet: null
  symbol: null
  governance:
    model: council
    summary: >-
      An imperial treasury and central bank under a Quaestor appointed for life, with three
      Praefares over its functions, a Magistar to each station, and sixteen Censores reckoning
      the strongroom against its books.
    ranks:
      - level: 0
        title: Dismissed
        lore: expelledrnk
        description: >-
          The Quaestor Imperii serves for life or until imperial dismissal, and every officer
          beneath him holds at the Quaestor's pleasure or the throne's.
      - level: 1
        title: Censor
        lore: clerkrnk
        description: >-
          One of sixteen auditors: sees that the strongroom's books match the held bullion, that
          clearing claims are honored only against valid notes, and that the Praefares' reports
          reconcile.
      - level: 3
        title: Magistar Stationum
        lore: officerrnk
        description: >-
          Provincial deputy, one to each Vylarian province and one to Heliónis. Administers the
          Aerarium's direct operations in his territory and coordinates with the Argentariorum
          chapters in the non-imperial territories adjacent to his station.
      - level: 4
        title: Praefar
        lore: commanderrnk
        description: >-
          Senior deputy over a whole function of the treasury—operations, the script and
          clearing system, or the strongroom and reserves—appointed by the Quaestor with
          imperial confirmation.
      - level: 5
        title: Quaestor
        lore: magistraternk
        description: >-
          The Aerarium's chief officer, appointed by the Augustar on the Dux Bellorum's
          recommendation and serving for life, holding one of the six standing accesses to the
          imperial privy presence.
    offices:
      Censor Maximus: >-
        Senior of the sixteen Censores Aerarii, and one of the three keys by which the
        strongroom at Magnápolis is secured.
      Praefar of Treasury Operations: >-
        Holds the receipt of revenue and the disbursement of imperial expenditure, which is
        released only on the joint authorization of the Augustar and the Dux Bellorum.
      Praefar of the Script: >-
        Holds the note-issuance and clearing system on which most large-value commerce in
        member territory depends.
      Praefar of the Strongroom: >-
        Holds the reserves and the strongroom at Magnápolis, which has never been breached in
        three centuries.
  seat: null
  domains: []
  population: null
  economy:
    - affiliation-clgmrgntrrm
    - affiliation-curiafscls
    - affiliation-magnumclgm
    - lore-vylrncrncy
  lore: []
  parents: []
  relations: {}
sohl:
  system:
    commonSkills: []
---

_Vylarian: Aerarium Imperii—"the Imperial Treasury"_

- **Type:** Imperial state institution; central bank and imperial treasury
- **Region of direct presence:** [[affiliation-vylarinmpr|Vylaria]] proper and [[place-helionis|Heliónis]]—the territories where imperial governance currently runs
- **Region of indirect presence:** All territories where the [[affiliation-clgmrgntrrm|The Collegium Argentariorum]] operates, including the [[place-aureldirgn|Aurèldían kingdoms]] and [[place-byzariargn|Byzaría]]—banking functions there are handled by Argentariorum chapterhouses and their member moneylenders, with the Aerarium standing behind them as the ultimate backing
- **Seat:** The Aerarium's strongroom and clearing house within the **Officia Imperii**, the bureaucratic compound of the Inner City of [[place-magnapolis|Magnápolis]]
- **Founded:** By edict of the founding Augustar at the establishment of the empire; the institution has operated continuously since

## Overview

The Aerarium Imperii is the empire's treasury and, since the consolidation of the script system three centuries ago, its central bank. It holds the empire's bullion reserves, receives the imperial tax revenue that the [[affiliation-curiafscls|The Curia Fiscalis]] collects through its Publicarii, disburses imperial expenditure on the joint authorization of the Augustar and the Dux Bellorum, and operates the central-bank functions on which most large-value commerce in member territory depends. The Quaestor Imperii—its chief officer—is widely regarded as second in power only to the Dux Bellorum among non-noble imperial appointments.

The Aerarium's reach is wider than its formal authority. Its direct offices operate only in Vylaria proper and Heliónis—the two territories where imperial governance currently runs—but the banking system it anchors extends across the entire post-imperial commonwealth: the [[place-aureldirgn|Aurèldían kingdoms]], [[place-byzariargn|Byzaría]], and (until twelve years ago) Harad. Outside the empire, the visible institution is the **[[affiliation-clgmrgntrrm|The Collegium Argentariorum]]**—the moneylenders' guild chartered under the [[affiliation-magnumclgm|The Magnum Collegium]]—whose chapterhouses and member moneylenders handle the note traffic, hold the local reserves, and present the public face of the system. The Aerarium itself does not visit these territories. Everyone knows the Argentariorum's chapter reserves are part of the Aerarium-backed pool; nobody publicly says so.

This polite fiction is one of the most consequential pieces of imperial diplomacy. The Aerarium gets its 2% note-issuance fee from every note generated in the Argentariorum system, regardless of where the originating moneylender holds his chapter—which means the imperial treasury draws a substantial revenue stream from territories the empire no longer governs. The Aurèldían crowns and the Byzarian League know this and tolerate it because the cost of withdrawing from the banking system would be ruinous to their commercial life. The fiction holds because both sides have powerful reasons not to disturb it.

## The Three Tiers of Paper

The Vylarian currency anchors at the **Aurion** (gold), circulates in the **Argentus** (Argo, silver, 160 per Aurion), and pays small transactions in the **Octus** (Bit, 1/8 of an Argo, 1,280 per Aurion). Physical Aurion coin is rare—perhaps 200,000 in existence empire-wide—and large-value commerce moves not in coin but in paper, in three distinct forms. (For the full coinage system, geographic acceptance, sample prices, and wage scale, see the canonical [[lore-vylrncrncy|Vylarian Currency]] reference.)

| Paper                | Issued By                                     | Backed By                                                                          | Honored Where                                                                        | Typical Use                                                                             |
| -------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **Retail notes**     | Individual member moneylender                 | The issuing house's own reserves                                                   | At the issuing house and at houses with reciprocal arrangements; locally circulating | Everyday large transactions in a single city or trading region                          |
| **Traveler's notes** | Member moneylender, drawn on Aerarium Imperii | Aerarium Imperii reserves (held locally by Argentariorum chapter where applicable) | At any Argentariorum-member moneylender across the commonwealth                      | Cross-territory travel; merchant working capital; remittance                            |
| **Master notes**     | Aerarium Imperii directly                     | Aerarium Imperii reserves                                                          | At any Aerarium chapter (imperial territory only) or any Argentariorum chapterhouse  | Inter-moneylender settlement; very large commercial transactions; imperial disbursement |

A common merchant uses retail notes for local commerce. A merchant traveling between cities—within or across polities—buys a traveler's note from his home moneylender, carries it, presents it at his destination for redemption. A great commercial transaction (a Legar commission, a major land sale, an inter-moneylender clearing settlement) uses master notes drawn from the Aerarium directly.

## The Traveler's Note in Practice

The traveler's-note system is the Aerarium's most important commercial product and the structural feature on which continent-wide trade depends.

The mechanics: a customer presents himself at a member moneylender's office and requests a note for a specified amount. The moneylender prepares the note (sealed paper, registered serial, the moneylender's mark and the Argentariorum chapter countersignature, the customer's name or "to bearer" as appropriate). The Aerarium's issuance fee is **2% of the note's face value**; the moneylender adds his own arranging fee (typically 1–2%); the customer pays the total. For a 100 Aurion note, the customer pays 103–104 Aurion; the Aerarium's 2 Aurion is forwarded to imperial accounts (through the Argentariorum chapter's clearing arrangement in non-imperial territory); the moneylender keeps his 1–2 Aurion fee.

The note travels with the customer. He presents it at any Argentariorum member moneylender in any city he reaches. That moneylender pays him face value _minus a discount_ set by the moneylender's judgment of his own liquidity, the size of the note, and the local market for note-redemption services. Discounts range from 1–3% in major commercial cities to 15–25% in remote frontier postings. The redeeming moneylender then forward the note to his Argentariorum chapter for clearing; the chapter reimburses him at face value; the chapter clears the note through the broader Aerarium-backed pool (in imperial territory directly with the Aerarium; in non-imperial territory through the Argentariorum's clearing channels back to Magnápolis).

The customer bears **location risk** but not **counterparty risk**. The note is good—the Aerarium honors every valid note—but the customer must find a moneylender solvent enough to actually pay out today. A traveler carrying large notes into a small frontier town may simply be told that the moneylender cannot cover the note in cash and will offer partial settlement in his own retail notes. The traveler then converts those at his next stop. This is one of the principal reasons travelers carry a sheaf of notes in varied denominations rather than one large note.

The Aerarium itself charges **no fee on redemption**. The moneylenders charge fees on both ends—small markup on issuance, larger discount on redemption—which is their business model. A customer's total cost of moving 100 Aurion across the empire by traveler's note runs from about 5% (best case, major-to-major-city) to about 27% (worst case, major city to deep frontier). The fees flowing to the moneylender vary by location; the 2% to the imperial treasury is constant.

## The Noble and Crown Alternative

The gentry and the local crowns have an additional option. A noble traveling without his home moneylender's correspondent in the destination city may present himself at the household of a peer family of his acquaintance; his note will be cashed within a day at a small discount (typically 1–3%); the host family redeems the note through their own Argentariorum contact. Reciprocal arrangement is implicit. The same network operates between the Aurèldían crowns: a Tarvénian crown official traveling on official business carries notes that he can cash at any of the other crowns' household treasuries on courtesy terms.

This route is not available to commoners—including wealthy merchants and chartered moneylenders on personal business. The social barrier is total. A commoner presenting himself at an Aurelian house's gate would be turned away without ceremony.

## Structure

| Office                 | Holder                     | Role                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quaestor Imperii**   | Marcus Arelliani Septarius | The Aerarium's chief officer; appointed by the Augustar on the recommendation of the Dux Bellorum; serves for life or until imperial dismissal. Currently fourteen years in office; widely regarded as one of the most quietly powerful figures in imperial governance.                                                                                       |
| **Praefar Aerarii**    | Three serving officers     | Senior deputies; one for treasury operations (revenue receipt and disbursement), one for the script and clearing system, one for the strongroom and reserves. Appointed by the Quaestor with imperial confirmation.                                                                                                                                           |
| **Magistri Stationum** | Eight officers             | Provincial deputies—one for each Vylarian province, plus one for Heliónis. Administer the Aerarium's direct operations in their territories and coordinate with Argentariorum chapters in non-imperial territories adjacent to their stations.                                                                                                                |
| **Censores Aerarii**   | Sixteen officers           | Auditors and discipline officers; ensure the strongroom's books match the held bullion, that moneylenders' clearing claims are honored only against valid notes, that the Praefar Aerarii's reports reconcile. Distinct from the [[affiliation-magnumclgm\|Censores Collegiorum]] (who audit guilds, including the Argentariorum's guild charter compliance). |

The **strongroom at Magnápolis** holds the empire's largest single concentration of Aurion bullion. The strongroom is jointly secured by the Quaestor Imperii, the Censor Maximus of the Aerarium, and the captain of the permanent imperial guard detail stationed at the imperial palace. The strongroom has never been breached in three centuries; its contents are audited annually by a panel including representatives of the imperial throne, the [[affiliation-imprlscrblgld|The Imperial Scribal Guild]], and (since the post-Haradian reform compromise) one representative selected by the Reformist Faction at court.

## The 2% Issuance Fee as Revenue Stream

The Aerarium's issuance fee is one of the imperial throne's largest single revenue lines, comparable in scale to the imperial land tax. Every traveler's note issued anywhere in the commonwealth contributes 2% of its face value to the imperial treasury. The fees aggregate to substantial annual flows—a Tarvénian merchant family's working-capital cycle, an Aurelian house's commission payment, a Provenzian wedding-gift remittance all contribute, regardless of the originating territory's political relationship with the empire.

The structural significance of this is hard to overstate: **the empire extracts revenue from territories it no longer governs**, through a system those territories continue to participate in because the alternative is worse. The Aurèldían crowns periodically propose alternative arrangements—a sliding fee, a partial rebate to participating crowns, a renegotiation of the rate—and the Aerarium has, in every generation since the post-imperial settlement, refused to discuss any modification. The crowns acquiesce because withdrawal would mean dismantling the banking infrastructure their commercial classes depend on, which is politically unsurvivable.

The fee is one reason the polite fiction holds. As long as the kingdoms can describe the institution they pay into as "the Collegium Argentariorum" rather than "the imperial treasury," the fee can be tolerated as a banker's charge rather than as a tax. Imperial officials who attempt to make the fee's destination more visible—usually for domestic Vylarian political reasons—face immediate diplomatic protest from the kingdoms and quiet pressure from the Dux Bellorum's office to walk the claim back.

## Relations

- **The [[affiliation-curiafscls|The Curia Fiscalis]]**—primary source of tax revenue; the Curia collects, the Aerarium holds. Relations are correct and bureaucratic; tensions arise when the Aerarium's disbursement priorities (set by the Dux Bellorum and the Augustar) conflict with the Curia's revenue projections.
- **The [[affiliation-magnumclgm|The Magnum Collegium]]**—sibling cross-realm institution. The Magnum Collegium charters the [[affiliation-clgmrgntrrm|moneylenders' guild]] that handles the Aerarium's foreign operations; the Aerarium provides the credit backing that makes the Argentariorum's clearing system function. Coordination is constant; the Princeps Collegii and the Quaestor Imperii meet weekly during their respective tenures.
- **The [[affiliation-clgmrgntrrm|The Collegium Argentariorum]]**—operational interface. The Argentariorum is the visible face of the Aerarium's banking system in non-imperial territory; its chapter reserves are part of the broader Aerarium-backed pool; its moneylenders clear through Aerarium accounts. The relationship is described publicly as one of "honored guild standing" rather than as subordination.
- **The Augustar**—patron and ultimate authority. The Quaestor Imperii is one of perhaps six officeholders with direct standing access to the Augustar's privy presence.
- **The [[affiliation-sodnaqirin|Sôd-Naqîrîn]] and the Haradian Bayt al-Khazînah**—formally unrecognized counterparts. The Aerarium does not honor Sôd paper; the Bayt does not honor Aerarium paper. Cross-border arrangements run through the small number of Heliónite intermediary houses willing to operate in both systems.
- **Aurèldían crowns and the Byzarian League**—formally non-relating; in practice, the Aerarium's revenue depends on these polities' continued participation. Diplomatic communications about the banking system are routed through the Dux Bellorum's office, not the Aerarium itself, to maintain the fiction that the Aerarium has no foreign-relations role.

## Identifying Marks

The Aerarium's seal—an eagle bearing in its talons a balance-scale and a wreath of laurel, with the imperial cipher above—is struck into every master note, every issued credential, every official correspondence. Aerarium officers wear the imperial purple stole over working dress at formal sessions; Magistri Stationum wear an additional brass pin in the shape of the Aerarium eagle. The Quaestor Imperii wears the great gold collar of imperial finance, kept at Magnápolis between holders.

The **traveler's note** itself is produced on a distinctive watermarked paper (the watermark is the Aerarium eagle, visible only when the paper is held against light), with the issuing moneylender's seal in colored wax, the Argentariorum chapter countersignature in black wax, the serial number registered with both the moneylender and the Aerarium, and the face value spelled in both Aurions and Argo. Counterfeit notes are a capital crime; detection mechanisms include the watermarked paper (specially treated to detect known imitations), the registered serial system, and the wax seals' specific compositions.

## Plot Hooks

- **The Counterfeit Wave.** A particularly skilled forging operation has been producing convincing counterfeit traveler's notes across three Aurèldían cities for the better part of a year. The forgeries are good enough that detection requires comparison against the registered serials, which is slow. The Censores Aerarii are investigating quietly; the Censores Collegiorum (who audit the Argentariorum's guild compliance) are investigating less quietly; the Reformist Faction at court has begun suggesting that the Argentariorum moneylender houses themselves are involved—a suggestion the Quaestor Imperii is taking with extreme seriousness.
- **The Frozen Note.** A major Vénustrian moneylender house has been suspended by the Aerarium for political reasons (its senior partners made the wrong court enemy). Notes that other houses have already cashed and forwarded to that house's Aerarium account are temporarily un-redeemable. The cashing houses are exposed; receiving moneylenders are becoming cautious about cashing any notes originating from the suspended house's correspondents; a cascade of liquidity tightening is underway across Aurèldía. The Quaestor Imperii must decide whether to lift the suspension and lose the political point, hold it and risk a broader confidence crisis, or extend emergency clearing credit and pretend the suspension was a procedural error.
- **The Crown's Demand.** The Tarvénian crown has formally proposed a renegotiation of the 2% issuance fee—its first such proposal in two generations. The proposal is supported by the Provenzian and Élavendrean crowns; the Aelwythan crown is undecided; the Byzarian League is watching. The Aerarium's standing response is refusal. The Dux Bellorum is being asked whether the empire is willing to face a coordinated boycott of the note system; the answer will define imperial commercial policy for the next generation.
- **The Strongroom Audit.** The annual audit of the Aerarium's strongroom is scheduled for the third week of the spring quarter. This year's audit panel includes, by procedural anomaly, a Reformist representative the Quaestor Imperii has been unable to block. The representative is reputed to have access to anomaly-detection techniques developed in private Vedyaran banking practice. If the audit discovers what the Quaestor's enemies believe it will, the institutional consequences are difficult to forecast.
- **The Hidden Hand.** A pattern of unusually large traveler's notes issued by a particular Heliónite moneylender house has begun to suggest that the house is functioning as a channel for foreign powers (possibly the Sôd-Naqîrîn, possibly something farther afield) to move capital across imperial territory under deniable cover. The notes are individually legitimate; the pattern is what is anomalous. The Quaestor Imperii has the analytical evidence; the political question is what to do with it.
- **The Disbursement Refusal.** A senior Magistar Vexilii has requested an extraordinary disbursement from the Aerarium to fund a campaign the Dux Bellorum has authorized but the Augustar has not yet formally approved. By Aerarium procedure, disbursement requires _joint_ authorization. The Quaestor Imperii's refusal would delay the campaign by weeks; his approval would create a procedural precedent that the Conservative Faction would treat as a major imperial-prerogative breach. The campaign's window is closing.
