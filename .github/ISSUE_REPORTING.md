# Issue Reporting — thalorna

This document defines how issues are created and classified in the
**`thalorna`** repository, which ships the Thalorna setting package and the
`/thalorna` site.

**This repository is its own tracker.** File Thalorna work here, not in the system
repository. See §9 for where a given piece of work belongs.

The core discipline is simple — four axes, each answering a different question:

Type
: _"what shape of work is this?"_ One per issue, from a closed set of five.

Priority
: _"how soon and how badly does this need doing?"_ A GitHub issue field, one value, defaults to Medium.

Labels
: _"what is this about?"_ Categorization only, chosen **only** from the organisation's label set (§3). Never invent a label.

Milestone
: _"which capability gate does this advance?"_ A native GitHub milestone (no due date), at most one, selected from a curated set (see §4).

Type, priority, and milestone are structured single values (one each). Labels
stack. Keep the roles separate: do not encode priority, urgency, or work-shape as a
label; do not encode subject matter as a type; and do not encode a capability gate
as a label when a milestone is its proper home.

## 1. Issue types

Exactly **one** type per issue. Choose using the decision procedure in §5 when in
doubt. Do not leave an issue untyped.

Issue types are **organization-level** in the `HeroicLands` org, so the same five
types — and their definitions — are shared with every other repository in the
project. They are not redefined here.

| Type        | Use it when…                                                                                                                                                        | Do **not** use it for…                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **bug**     | Existing, shipped behavior is wrong or broken relative to what it should do — an error, crash, incorrect result, or regression.                                     | Missing capability (that's a _feature_); known-incomplete work in progress; a chore.                                   |
| **feature** | A new capability or enhancement that does not exist yet, deliverable as one shippable unit of value.                                                                | Anything broken (_bug_); work large enough to need many sub-issues (_epic_); pure maintenance (_task_).                |
| **epic**    | A large body of work that only makes sense decomposed into multiple sub-issues; a coordinating container tracked by its children.                                   | Anything you can ship as a single issue. If it has no sub-issues, it is not an epic.                                   |
| **task**    | Necessary work that is neither a defect nor a new capability: chores, maintenance, refactors, dependency bumps, tooling, docs, releases. May or may not touch code. | Work whose outcome is uncertain and exploratory (_spike_); a defect (_bug_).                                           |
| **spike**   | A **timeboxed** investigation whose deliverable is a _decision, answer, or recommendation_ — not shipped code. Outcome is genuinely uncertain going in.             | Work whose steps are already known (that's a _task_). A spike that produces code instead of a conclusion was mistyped. |

**Type rules**

- **MUST** assign exactly one type.
- A **bug** is _broken_; a **feature** is _missing_. That distinction resolves most ambiguity — decide which word fits before anything else.
- An **epic** MUST link its sub-issues (native GitHub sub-issues; see §6) and SHOULD carry little implementation detail of its own. Its acceptance is "all sub-issues closed and the whole verified together."
- A **spike** MUST state (a) the question it answers and (b) its timebox. It closes when the question is answered, and it typically _spawns_ follow-up feature/task/bug issues rather than doing the work itself.
- A **refactor** that changes no external behavior is a **task**, tagged `flag/tech-debt` — it is not a feature and not a bug.

**What "broken" means for content.** This repository ships prose and data, not
running code, so a bug is usually a wrong or unrenderable _fact_: a dead wikilink,
a shortcode collision, a note that fails to compile into its pack, a published page
whose URL changed under it. A note that is merely thin or unwritten is not broken —
that is a **feature** (the material is missing) or a **task** (it is scheduled work).

## 2. Priority (GitHub issue field)

Priority is a native **Priority** field on the issue itself — an
organization-level issue field, **not** a label and **not** tied to a Project. Set
it in the issue sidebar; the repo issue list filters on it
(`field.priority:high,medium`), and it is read/written through the GitHub issue
API. One value per issue, from: **Urgent · High · Medium · Low**.

Priority is about attention, not schedule — this project has no deadlines, so
priority answers "when I next sit down, what deserves my time?" not "what is due."

| Priority   | Meaning                                                      | Typical triggers                                                                                                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Urgent** | Do it next session. Active harm or a hard blocker.           | Content loss or corruption; packs that will not compile, so nothing ships; the published site is down or serving wrong pages; blocks the current gate. |
| **High**   | Wanted soon; the current gate leans on it.                   | A published address broken with no redirect; work the active milestone depends on.                                                                     |
| **Medium** | **Default.** Should get done; not blocking the current gate. | Most content and tooling work; defects with a workaround.                                                                                              |
| **Low**    | Deferrable indefinitely with little cost.                    | Cosmetic issues; nice-to-haves; long-tail edge cases; opportunistic cleanup.                                                                           |

**Priority rules**

- **MUST** set a priority on every issue.
- **Default to Medium.** Anything higher MUST be justified in the body (one line: why the impact warrants it). Do not inflate — not everything is High.
- Priority is independent of type, labels, **and** milestone. A `flag/security`-labelled issue is **not** automatically Urgent: hardening with no known exploit can be Low; an exploit in the wild is Urgent. Judge impact, not the topic.
- An **epic**'s priority reflects the initiative's importance, not the max of its children.

## 3. Labels

Labels are defined once for the whole organisation, in `labels.yml` of the
`HeroicLands/.github` repository. This repository keeps no registry of its own,
and does not create labels; a label that does not exist there is not applied.
If none fits, note the gap in the issue body for a maintainer to decide.

| Group         | Labels                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type/`       | `type/bug`, `type/feature`, `type/epic`, `type/task`, `type/spike` — exactly one per issue                                   |
| `area/`       | `area/documentation`, `area/devops`, `area/tests`, `area/content`, `area/system`, `area/site`, `area/layout`, `area/styling` |
| `flag/`       | `flag/breaking-change`, `flag/security`, `flag/regression`, `flag/tech-debt`                                                 |
| `status/`     | `status/blocked`, `status/question`                                                                                          |
| `resolution/` | `resolution/duplicate`, `resolution/wontfix`                                                                                 |
| `ci/`         | `ci/e2e`                                                                                                                     |

**When to use them here**

`area/content`
: setting material: notes, compendium packs, actors, items, journals, scenes, artwork.

`area/site`
: the `/thalorna` site: site build, layouts, content rendering, deployment.

`area/devops`
: build, tooling, pack pipeline, release, repository configuration.

`area/documentation`
: README, process and authoring guides.

`flag/breaking-change`
: alters a published address, shortcode, link manifest entry, or pack compatibility.

`flag/security`
: touches an attack surface: data integrity, macro/script execution, injection, or anything warranting private disclosure (§7).

`flag/regression`
: something that previously worked and stopped; pairs with `type/bug`.

`area/system` and `area/tests` do not apply
: this repository ships no system code and no test suite.

**Label rules**

- Labels are additive and orthogonal — `area/content` + `area/site` + `flag/regression` on one bug is fine.
- Do not use a label to express something a type, the priority field, or a milestone already expresses.
- Progress toward a capability is tracked by **milestones** (§4), not labels.

## 4. Milestones — capability gates

Milestones here are **capability gates, not calendar dates.** Each milestone is a
demonstrable threshold the package crosses — a state you can point at and say "it
does this now" — and **crossing a gate is what triggers a release.** This project is
not date-driven and has no deadlines, and GitHub supports that directly: a
milestone's due date is optional, and its progress bar is computed from the ratio of
closed to open issues, not from any date. Leave due dates blank.

**Name milestones by the capability reached,** phrased as a state of the package —
"the bestiary is playable", "the regional gazetteer publishes" — rather than by a
date or a version number alone. If you want the order explicit, encode it in the
name (`M1 · …`, `M2 · …`); otherwise let the list carry it.

**An issue's milestone is the gate its work advances.** When every issue in a
milestone is closed, the package has crossed that gate. One milestone per issue
(GitHub enforces this); if an issue seems to serve two gates, it usually belongs to
the earlier one or is scoped too large.

**Milestone vs. epic — different lenses, keep them straight:**

|           | **Epic** (a type)                          | **Milestone** (a gate)                       |
| --------- | ------------------------------------------ | -------------------------------------------- |
| Groups by | work breakdown — a tree of sub-issues      | outcome — a capability the package gains     |
| Answers   | "what are all the pieces of _this build_?" | "how close is it to _doing this thing_?"     |
| Done when | all its sub-issues are closed              | all issues tagged to it are closed           |
| Shape     | vertical: one initiative, decomposed       | horizontal: a slice across the whole package |

**The milestone set is curated, like the label set** — select from existing
gates and never invent one.

- You MAY assign an issue to a milestone when its work **unambiguously advances exactly one existing gate**.
- Leave the milestone **unset** when the issue advances none of the current gates (it is future/backlog), spans several, or the mapping is unclear. An unset milestone is a normal, correct state.
- You MUST NOT create a new milestone. If no gate fits and one seems warranted, note it in the body and raise it for awareness.

**This repository currently defines no milestones.** That is deliberate, not an
oversight: gates are named when the maintainer knows which capability the package is
driving at, and until then every issue's milestone is correctly unset. Do not invent
one to fill the field.

### Milestones and releases

**Reaching a gate is what cuts a release.** When every issue in a milestone is
closed, the package has demonstrably gained that capability — and that is the
trigger to cut a new release, versioned for the capability reached, not for any
date. There is no release calendar and no due dates: releases are **paced by
capability**, so the milestone progress bar is the only schedule the project keeps.

## 5. Choosing the type — decision procedure

Walk this in order; take the first match.

1. Is something **broken** relative to intended behavior? → **bug** (add `flag/regression` if it used to work).
2. Is the outcome **genuinely uncertain** and the deliverable a **decision/answer**? → **spike** (state question + timebox).
3. Is this too large to ship as one issue, needing **multiple sub-issues** to coordinate? → **epic**.
4. Is it a **new capability or enhancement** that doesn't exist yet? → **feature**.
5. Otherwise — chore, maintenance, refactor, docs, tooling, release? → **task**.

Then, regardless of type: set **priority** (default Medium; justify higher), apply
any **labels** from §3 that categorize it, and set a **milestone** only when the issue
clearly advances one existing capability gate (§4) — otherwise leave it unset.

## 6. Body structure by type

Titles: imperative and specific. "Fix the Vale gazetteer linking to a retired
shortcode," not "link bug." No trailing punctuation.

Every issue body should give enough context that someone with repo familiarity but
no memory of the conversation can act on it. Use the shape for its type — the issue
forms in `.github/ISSUE_TEMPLATE/` pre-fill each of these.

### Bug

Bugs should describe the problem as fully as possible, so it may be easily
reproduced. The description should NOT contain a description of how to fix the
issue. Suggestions for fixes or approaches may be placed in comments.

**Acceptance criteria** is optional.

```
## Summary
One sentence: what's wrong.

## Steps to reproduce
1. …
2. …

## Expected vs. actual
Expected: …
Actual: …

## Acceptance criteria
- [ ] Observable condition 1
- [ ] Observable condition 2

## Environment
Foundry version · SoHL system version · module version · browser/OS if relevant

## Notes
Stack traces, console output, suspected cause.
```

### Feature

```
## Problem / motivation
What need or gap this addresses.

## Proposed solution
What to build. Sketch the approach if known.

## Acceptance criteria
- [ ] Observable condition 1
- [ ] Observable condition 2
```

### Epic

```
## Goal
The outcome this initiative delivers.

## Scope
In scope / out of scope.

## Sub-issues
(Linked as native sub-issues; list mirrors them.)
- [ ] #…
- [ ] #…

## Done when
All sub-issues closed and integration verified.
```

### Task

```
## What
The work to be done.

## Why
The reason it's needed (keeps chores from looking arbitrary).
```

### Spike

```
## Question
The specific thing we need to decide or learn.

## Timebox
e.g. 1 day / 4 hours. MUST be present.

## Deliverable
The form of the answer: a decision, a recommendation, a written finding,
a prototype-to-throw-away. NOT production code.

## Follow-up
Note that follow-up feature/task/bug issues will be filed from the outcome.
```

## 7. Security issues — special handling

If an issue would be labelled `flag/security` **and** describes an exploitable weakness
(not merely hardening), **do not open a public issue**. Use GitHub's private
security advisories / vulnerability reporting instead — the "Report a
vulnerability" button on this repository's Security tab, also linked from the issue
chooser. This package ships into users' Foundry instances, so a macro-injection or
data-execution path in shipped content has a real (if small) attack surface. When in
doubt, disclose privately and let a maintainer decide whether to make it public.

## 8. Worked examples

**Bug, High, regression**

> **Title:** Fix Thalorna region pages 404ing after the site prefix move
> **Type:** bug · **Priority:** High · **Labels:** `area/site`, `flag/regression` · **Milestone:** _(unset)_
> Body: published URLs that resolved before now 404; no workaround for a reader → High.

**Feature, Medium**

> **Title:** Add the Hegóvyn Vale bestiary entries
> **Type:** feature · **Priority:** Medium · **Labels:** `area/content` · **Milestone:** _(unset)_
> Body: material that does not exist yet, shippable as one unit → Medium.

**Epic, Medium**

> **Title:** Publish the regional gazetteer
> **Type:** epic · **Priority:** Medium · **Labels:** `area/content`, `area/site`
> Body: coordinates a tree of sub-issues (per-region notes, map packaging, index page), each filed separately and linked.

**Task, Low**

> **Title:** Bump @heroiclands/package-build to the current release
> **Type:** task · **Priority:** Low · **Labels:** `area/devops` · **Milestone:** _(unset)_
> Body: routine maintenance, deferrable → Low.

**Spike, Medium**

> **Title:** Decide whether Thalorna scenes should ship pre-lit
> **Type:** spike · **Priority:** Medium · **Labels:** `area/content`
> Body: **Question** — is pre-lit worth the pack size? **Timebox** — 4 hours. **Deliverable** — written recommendation. Follow-up issues filed from the finding.

## 9. Which repository does an issue belong in?

The project spans several repositories in the `HeroicLands` organization, and — as
of the process split — **each one tracks its own work.** There is no central
tracker.

| Repository                        | Tracks                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------- |
| `Song-of-Heroic-Lands-FoundryVTT` | The Foundry system code, the `sohl` package's content, and the system build  |
| `thalorna`                        | **This repository** — the `thalorna` package and the `/thalorna` site        |
| `sohl-kethira-basic`              | The `kethira` package — unofficial Hârn fan material, Foundry packs only     |
| `heroiclands-site`                | heroiclands.org — its content, Cloudflare Pages, the CDN                     |
| `package-build`                   | The shared site theme this site renders through — layouts, partials, styling |

**File the issue where the work will be done.** The rule is delivery, not subject: if
the fix is an edit to a file in this repository, the issue belongs here, even when the
symptom shows up elsewhere. A Thalorna note rendering wrong because of a **theme**
bug is a theme issue; the same note rendering wrong because of its own frontmatter is
an issue here.

**Telling those two apart:** the theme is the same bytes for every site that renders
through it, so if a page is wrong here and the equivalent page is fine on `/sohl`,
the variable is this repository's content or site config — not the theme. If it is
wrong on both, file it in `package-build`. Anything about a URL, menu entry,
or branding is ours either way: the theme carries no addresses, `package.json` and
`package-build.config.yaml` do.

**When work genuinely spans two repositories, file in each and link them.** Cross-repo
references work fine (`HeroicLands/<repo>#123`); what does **not** work is closing:

> **Closing keywords do not cross repositories.** A pull request here carrying
> `Closes HeroicLands/Song-of-Heroic-Lands-FoundryVTT#123` creates a reference but
> **does not close** that issue — GitHub only auto-closes within the same repository.
> A cross-repository issue is **closed by hand**, with a comment linking the delivering
> commit or pull request. Never assume the keyword did it; check.

## Self-check before filing

You should confirm all of these before submitting an issue:

- [ ] This is the right repository (§9) — the work will be delivered here.
- [ ] Exactly **one type** assigned, chosen via the §5 procedure.
- [ ] A **priority** is set. If above Medium, the body justifies it in one line.
- [ ] Every label comes from the organisation set in §3. **Zero** invented labels.
- [ ] No label duplicates what the type, priority field, or milestone already says.
- [ ] **Milestone** set only when the issue clearly advances one existing capability gate (§4); otherwise unset. **Never** invented.
- [ ] Title is imperative and specific; body follows the §6 shape for its type. Title should not encode labels or other field information.
- [ ] If `flag/security` + exploitable → routed to **private advisory**, not a public issue (§7).
- [ ] If **epic** → sub-issues are linked. If **spike** → question and timebox are present.
