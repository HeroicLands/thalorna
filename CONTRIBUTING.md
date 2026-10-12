# Contributing to the Thalorna setting package

Thank you for your interest in contributing to _Thalorna_, the original setting
package for [Song of Heroic Lands](https://github.com/HeroicLands/Song-of-Heroic-Lands-FoundryVTT).

## Filing an issue

**This repository tracks its own work.** File Thalorna issues here, not in the
system repository — [§9 of the issue-reporting standard](.github/ISSUE_REPORTING.md#9-which-repository-does-an-issue-belong-in)
says which repository a given piece of work belongs in.

Every issue is classified on four axes — **type**, **priority**, **labels**, and
**milestone**. The standard defines each one, and the issue forms pre-fill the
body shape for the type you pick:

- [Issue Reporting standard](.github/ISSUE_REPORTING.md)
- [Open an issue](https://github.com/HeroicLands/thalorna/issues/new/choose)

Exploitable weaknesses go to a **private advisory**, never a public issue — see
[SECURITY.md](SECURITY.md).

## Making a change

`main` is protected: it takes no direct pushes. Every change lands through a pull
request.

1. **Find or file the tracking issue.** Pure repo housekeeping (`chore/*`) may skip
   this; anything else gets an issue first, so you have its number for the branch.
2. **Branch off current `main`**, named `<type>/<issue_#>_<short-kebab-summary>` —
   e.g. `feat/12_hegovyn-bestiary`, `bug/19_dead-region-wikilink`. Issue-free
   housekeeping is `chore/<slug>`.

   **Git refuses a commit on `main`.** The `pre-commit` and `pre-merge-commit`
   hooks from the `@heroiclands/package-build` toolchain decline it, so the
   mistake surfaces before the commit exists rather than at push time. `npm ci`
   installs them. To commit on `main` anyway, `git commit --no-verify`; to opt
   this checkout out entirely, `git config hooks.allowCommitOnMain true`.

3. **Make the change**, keeping it small and focused — one feature, one fix, or one
   documentation improvement per pull request.
4. **Verify it.** At minimum `npm run build` must succeed, which compiles every note
   into its pack and validates the link manifest. Site changes should additionally
   build: `npm run build:site`.
5. **Format**: `npm run format:check` must be clean for the files you touched.
6. **Commit** in Conventional-Commits style, and **open a pull request** with
   `Closes #<n>` and a what/why description.

**No AI/assistant attribution** in commit messages, pull-request titles or bodies,
or issues — no `Co-Authored-By:` trailer naming an assistant, and no "Generated
with Claude Code"-style signature. A committed `commit-msg` hook (activated by
`npm install`) rejects such commits locally, and the **No Attribution** GitHub
Actions check fails any pull request carrying it.

## What belongs here

Thalorna is **original content**, licensed CC-BY-SA-4.0. Material derived from
Kelestia Productions' Hârn properties never enters this repository — it lives in
[`sohl-kethira-basic`](https://github.com/HeroicLands/sohl-kethira-basic) under a
separate licence. Under no circumstances commit copyrighted text, art, maps, or
trade dress belonging to a third party.

## Nordmal names

A generic membership title in the reader's tongue can use a concordance `keep`
row with its exact `literal`, named affiliation `paths`, integer
`membershipLevel` and explanation in `why`. Both the lexicon and drift guards
limit this exception to that affiliation's matching rung title. Other levels,
body types, offices, prose occurrences and paths retain normal validation. The
exception does not confer a Nordmal name or a social standing beyond membership.
Run `node --test utils/nordmal-membership-titles.test.mjs` for this contract.

`npm run lint:nordmal-lexicon` checks northern names against the element tables
in the Nordmal language note. A deliberate name outside those rules has
`kinds: []` on its row in `utils/nordmal-concordance.json`, with the reason in
`note`. For a given-name row, the exemption applies only to the character at
`newPath` whose full name matches `newName`; the clan name remains checked.
Nordmal aliases and the language note's examples retain their normal spelling.

Concordance source citations accept capitalization variants of a recorded name.
Accents and specified columns remain exact; a note’s full name must match its
concordance row. A live spelling does not belong in the retired alias list.

A prose-only concordance half may carry its containing note's path without a
shortcode or address, provided an `oldRefPaths` citation names that exact path.
This applies independently to each half: a name that gains a note keeps its
prose source in `oldPath` and records the new note's shortcode, path and address
together. A half that carries a shortcode or address requires all three fields.

A `place/world` name uses the published compound elements: `thurs-` and
`-guard` form Thursguard, an enclosed world of giants. Both world note names
and world concordance rows use that class. Earthly settlement names use the
place generics and their permitted first elements.

Run `node --test utils/lexicons/*.test.mjs` when changing this guard, and
`npm run lint:nordmal-concordance` when changing the table.

Standing titles shared by several bodies belong in `standingCoinages`, rather than
`entries`, whose names identify whole notes. Each `rungs` row carries the authored
affiliation `path`, integer `level`, `oldTitle` and current `title`. The concordance
guard requires that exact body and rung, a description, and a compound made from
the language note's elements and sound rules. A body and level have one mapping.
`deliberatelyUnused` rows carry `title`, `elements` and `reason`; they cannot also
be placed. `limits` records where a word's sense excludes a body or office.

Run `node --test utils/nordmal-standing-coinages.test.mjs` for the standing
contract, including rejected stale mappings and contradictory dispositions.

## Rank levels

An affiliation's `data.governance.ranks` levels are ordinal within that
affiliation. Two levels mean the same thing everywhere:

- **0** is cast out and refused readmittance: a person the affiliation has
  expelled and will not take back, and nothing else. A state that is not an
  expulsion, such as a dismissal from an office, an applicant turned away, a
  member who has left or an unsettled feud, does not take level 0. It belongs in
  the affiliation's `offices`, its `governance.summary` or the note's prose.
- **1** is the lowest member. A ladder that has members starts them at 1, and a
  ladder with no one cast out simply has no level 0.

Every level above 1 orders that affiliation's own ranks from lower to higher.
A rung at level 3 in one affiliation is not the equal of a rung at level 3 in
another, and no ladder is padded to reach a number. A rung's title and
description say what the standing is; a rung where a person at that level is
not considered higher than the one below is an office, and belongs under
`offices`.

A rank note describes the standing and carries no level. The level lives in the
`ranks:` data of each affiliation that confers the standing, so one note can
serve ladders that place it at different levels.

An English rank title stays when it names the standing the culture actually
confers, since ranks read in the reader's tongue as bynames do. A title changes
where it names the wrong kind of standing, where it is out of its period, or
where the culture's own notes already name the standing natively.

## Aliases

An alias is an explanatory phrase or a genuine other name: an exonym, a folk
name or an endonym that someone in the setting uses. It is never a respelling
of the full name or a fragment of it.

- A respelling is unnecessary. Resolution folds case, diacritics and a leading
  article, so `Cardeth` already finds `Cárdeth` and `Sons of Eldheim` already
  finds `The Sons of Eldheim`. A singular or plural of the full name is a
  respelling too.
- A word of the full name is found by the editor's completion and the content
  index, which match any part of a name, so it is not written as an alias.
  A note whose full name opens with a descriptor, such as `Kingdom of`, `Faith
of` or `Ritual:`, keeps the bare name as an alias because the printed index
  files a note only under the first word of its full name.
- A former name is not an alias. A note answers to its current name; renames
  are recorded in the concordance and in git, and links resolve by address.
- A pseudonym that a lexicon registers as `other` is removed together with its
  register row.

## Rank-note scope

An affiliation's `data.governance.ranks` ladder is authoritative for the standing
it confers. A rung may stand on its title, level and description without a `lore`
link. Keep a rank note where it explains substantial obligations or standing
shared on the same terms; do not recreate composite notes merely to link a rung.

Write `Where This Standing Is Held` as legal scope: the body that confers it,
the family of bodies governed by that law, or the observance that admits it.
Avoid handwritten counts and exhaustive lists of current users. A number belongs
where it states a rule, such as seats in a council or trials for admission,
rather than how many bodies or rungs currently cite a note. Named jurisdictions
may define a law's boundary; make clear that they identify jurisdictions, not
a tally of citing rungs.

When editing a shared note, read every rung that cites its `shortcode`, including
affiliations filed under `Regions`, and compare their descriptions with the
note's obligations and scope. Also check any named legal boundary against its
bodies' ladders, even when a body does not link the note. A rename must not
require revising an unrelated usage inventory. Build the site with
`npm run build:site` and inspect the emitted rank pages as well as the source.
