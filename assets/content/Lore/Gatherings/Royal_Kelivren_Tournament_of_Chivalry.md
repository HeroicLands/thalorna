---
shortcode: kelivrentrny
name: {full: Royal Kelivren Tournament of Chivalry, en: [The Kelivren Tournament, The Tournament]}
type: lore
subType: gathering
description: "The Order of the Just Blade's tournament at Kelivren each spring, after the Sanctification of Swords: a week of jousts, the melee and the trial of the sword before knights from every court on Eilwìth, after which the Order's knights ride west to the war on the Seilvri."
tags: [aureldian, military]
data:
  culture: aelwythanclt
  packFolder: eilwith
  events:
    - id: tournament
      when: ~420
      recurs: {every: 1}
      depth: region
      sources: [place-kelivren, affiliation-justbladeordr, affiliation-kingdmdnvr]
      summary: >-
        Each spring, in the week after the Sanctification of Swords, the Order of the Just Blade holds a tournament on the tiltyard below its commandery at Kelivren. Knights of every court on Eilwìth ride the jousts, the melee and the trial of the sword, and the champion is named by the Knight-Marshal before the stands. The kings of Dúnavarre founded it; the Order has kept it since the crown was set aside.
      standing: attested
      names: [{name: the Royal Kelivren Tournament of Chivalry, by: affiliation-kingdmdnvr}]
      where:
        locus: [place-kelivren]
        reach:
          - place: place-eilwith
            how: knights of Aldorath, Ondareth and the free cities ride in it, and its champions are known at every court on the island
            knowledge: named
      who:
        - {ref: affiliation-justbladeordr, role: actor}
        - {ref: being-orvandkthvl, role: actor}
        - {ref: being-arrenthabavel, role: witness}
---

The **Royal Kelivren Tournament of Chivalry** is held each spring on the tiltyard below [[place-kelivren|Kelivren]], the commandery of the [[affiliation-justbladeordr|Order of the Just Blade]], in the week after the [Sanctification of Swords]{.name data-type="lore/custom"}. It is the foremost martial gathering on [[place-eilwith|Eilwìth]]. The kings of [[place-dunavarre|Dúnavarre]] founded it and gave it its name, and the Order has kept it since the crown was set aside, so the tournament is still royal in a realm that has no king.

## The Week

Knights come to Kelivren from every court on the island: Dúnavarre's own, the barons' sons of the [[affiliation-kngdmldrth|Kingdom of Aldorath]], the citizens of the [[affiliation-repblcndrth|Republic of Ondareth]] who can afford the horse, and the knights of the free cities. Each rides under a lord or a house that answers for them.

1. **The jousts.** Three days of courses with blunted lances, each knight's tally kept on a board below the Knight-Marshal's stand.
2. **The melee.** Two companies on foot with blunted swords, held on the fourth day, in which the knights of the Order fight as one company against all comers.
3. **The trial of the sword.** On the last day the best of the jousts meet singly on foot, and the last standing is named champion.

The Knight-Marshal, [[being-orvandkthvl|Sir Orvand Kéthavel]], names the champion before the stands and gives the champion a sword blessed at the Sanctification. The champion of 719 is [[being-arrenthabavel|Sir Arren Thábavel]], who rides with the Synod's embassy to Tantsou.

## After the Week

The tournament closes the Order's spring. When the stands come down, the knights of the Order and every guest knight who chooses to ride with them muster at the commandery's gate, and the Knight-Captain of the West, [[being-merraddovvrn|Sir Merrad Dovavren]], leads them up the valley to the summer's war on the [[affiliation-saelvri|Seilvri]] in [[place-teilvari|Teilvari]] ([[lore-saelvricrusade|The Seilvri Crusade]]). A guest knight who rides west is honored at the next year's tournament.

## See Also {#see-also}

[[place-kelivren|Kelivren]]
: where it is held

[[affiliation-justbladeordr|Order of the Just Blade]]
: the order that keeps it

[[lore-saelvricrusade|The Seilvri Crusade]]
: the war its knights ride to after it
