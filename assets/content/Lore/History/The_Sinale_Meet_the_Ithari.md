---
shortcode: itharicntc
name: {full: The Sinale Meet the Ithari, aliases: [The Only Meeting]}
type: lore
subType: history
description: "Sinale wayfarers come upon the Ithari by chance, are received with courtesy and politely declined—the only contact between the Ithari and an Elder Race in any record."
tags: [history, spine]
data:
  culture: sinaleclt
  packFolder: settinglore
  events:
    - when: ~-7500
      kind: contact
      depth: world
      sources: [lore-theithari, lore-flksinale]
      summary: >-
        Sinale wayfarers come upon the Ithari in a place neither people has ever named. They are received, offered no exchange, and politely declined. The Sinale come away without learning who they had met, where those people came from, what they were doing on Thalorna, or that there was any connection between them and the works on Kalihara. It is the only contact between the Ithari and an Elder Race in any record.
      standing: single-source
      where: {locus: [place-worldthlrn]}
      who: [{ref: lore-flksinale, role: actor}, {ref: lore-theithari, role: actor}]
      follows:
        - event: lore-sinalearrv
          how: enabled
          note: the wayfarers who came upon them had been in the world a short time
      accounts:
        - by: lore-flksinale
          says: >-
            We came upon them, we were not rebuffed and not taken seriously, and the impression we came away with—given as an impression—is that we were found quaint.
          agrees: partly
          withholds: where it happened, what was said, and what the others were doing when they were found
        - by: affiliation-kalihara
          says: >-
            Nothing. The island was not party to it and did not learn of it from the Ithari.
          agrees: silent
      unresolved:
        - where the meeting happened
        - whether the Sinale ever put that afternoon together with the builders of Kalihara's works
---

The Sinale Meet the Ithari records the one crack in the silence: an afternoon, and almost nothing came through it.

The [[lore-flksinale|Sinale]] did not seek [[lore-theithari|the Ithari]] out; by their own account they
came upon them. They were received. They were not rebuffed, threatened, questioned or taken seriously.
No exchange was proposed and no further meeting was arranged. The others returned to whatever they had
been doing, and the Sinale went away.

The limit of it is worth stating plainly. The Sinale met someone and learned nothing—not who they
had met, not where those people had come from, not that there was any connection between them and
anything else in the world. They do not use the name Ithari, because they were never given it. Nobody
told the Kaliharans either, and [[affiliation-kalihara|Kalihara]] has never told them.

Both peoples will confirm that it occurred, and that is the end of what either will give.
