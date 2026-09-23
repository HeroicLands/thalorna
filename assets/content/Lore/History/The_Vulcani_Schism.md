---
tags:
  - history
  - spine
description: "Roughly five hundred years ago a faction within the Vúlcani clergy declared that the god's true nature was destruction – and the Aurèldían faith of the Forge-Lord split into the Sacred Forge and the Black Flame."
type: lore
subType: history
name:
  full: The Vúlcani Schism
  aliases:
    - The Splitting of the Forge-Lord
shortcode: vulcanschsm
packFolder: settinglore
event:
  kind: schism
  depth: world
  when:
    year: 220
    precision: century
    derived: five hundred years ago
  sources:
    - lore-vulcanischism
    - affiliation-blackflame
  summary: >-
    A faction within the Vúlcani clergy declares that the god's duality is an evasion: that Vúlcan's
    true nature is destruction, purification through fire and the dominance of the strong, and that
    the forge is merely destruction put to temporary use. The claim cannot be accommodated, because it
    is a claim about which half of the god is real. Two bitterly opposed faiths result, each holding
    the other heretical.
  standing: attested
  names:
    - name: The Sacred Forge
      by: affiliation-sacredforge
      gloss: the creative aspect, which kept the temples, the endowments and the name
    - name: The Black Flame
      by: affiliation-blackflame
      gloss: the destructive aspect, suppressed in most kingdoms and open in one
  where:
    locus:
      - place-aureldirgn
    reach:
      - place: place-midhalnrgn
        how: >-
          the imperial policy of religious tolerance has never proscribed the Black Flame, so it keeps
          temples and ordains clergy openly here and nowhere else
        knowledge: named
      - place: place-alyssa
        how: >-
          the Night of Ashes is a public festival in the commercial cities, which infuriates the
          orthodox clergy who operate in the same streets
        knowledge: named
      - place: place-provenzrgn
        how: which shrines a realm tolerates and which it burns is decided by this quarrel
        knowledge: named
      - place: place-tarvenirgn
        how: the same, and the frontier districts are where the suppressed half keeps its footholds
        knowledge: named
  who:
    - ref: affiliation-arldnpnthn
      role: victim
    - ref: affiliation-sacredforge
      role: actor
    - ref: affiliation-blackflame
      role: actor
  accounts:
    - by: affiliation-sacredforge
      says: The Black Flame is a perversion that mistook the ash for the fire.
      agrees: partly
    - by: affiliation-blackflame
      says: >-
        The Sacred Forge is a comfortable lie told by people who wanted a patron for their workshops
        and could not face what they were praying to.
      agrees: partly
  unresolved: []
---

**Vúlcan** the Forge-Lord holds both aspects of flame at once – the forge that shapes and the inferno
that consumes – and for most of the [[affiliation-arldnpnthn|Aurèldían Pantheon]]'s history that
duality was carried without difficulty. A god of fire was understood to be a god of both what fire
makes and what it takes.

The claim that split it could not be accommodated, because it was not a claim about emphasis. It was a
claim about which half of the god is real. Schisms over practice can be papered over; this one could
not, because each faith's central claim is that the other worships half a god and calls it whole.

Neither position leaves room for the other to be merely mistaken, and both are arguments about the
same god rather than about different ones – which is what makes the enmity theological rather than
merely political, and why five centuries have not worn it down.

The full account is [[lore-vulcanischism|The Vúlcani Schism]].
