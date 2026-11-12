/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

const yaml = createRequire(import.meta.resolve("@heroiclands/package-build/package.json"))("yaml");
const spec = {
    file: "lint.yml",
    gate: "gate",
    gated: ["guards", "fonts", "lint", "build"],
    light: "format",
    runs: ["npm run lint:format", "npm run lint:markdown", "npm run lint:lang"],
    test: "utils/wip-workflows.test.mjs",
    required: [
        "No Attribution / No AI attribution (pull_request)",
        "Lint / Content pack compile (pull_request)",
        "Lint / Content, prose, and registry checks (pull_request)",
    ],
    lightActions: [
        "HeroicLands/.github/actions/changesets",
        "HeroicLands/.github/actions/no-attribution",
    ],
};
const workflows = Object.fromEntries(
    fs
        .readdirSync(".gitea/workflows")
        .filter((name) => name.endsWith(".yml"))
        .map((name) => [
            name,
            yaml.parse(fs.readFileSync(path.join(".gitea/workflows", name), "utf8")),
        ]),
);
const workflow = workflows[spec.file];
const jobs = workflow.jobs;

// Run a readiness step for a title and read the outputs it publishes.
function stepOutputs(step, title) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wip-gate-"));
    try {
        const out = path.join(dir, "output");
        fs.writeFileSync(out, "");
        shell(step.run, { PR_TITLE: title ?? "", GITHUB_OUTPUT: out });
        return Object.fromEntries(
            fs
                .readFileSync(out, "utf8")
                .split("\n")
                .filter(Boolean)
                .map((line) => line.split("=")),
        );
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}
const gateStep = jobs[spec.gate].steps.find((candidate) => candidate.id === "ready");
const requestStep = workflows["e2e-full.yml"].jobs.requested.steps.find(
    (candidate) => candidate.id === "request",
);
const readiness = { [spec.gate]: gateStep, requested: requestStep };

// Evaluate the job condition surface used here, including Gitea's implicit
// success().
function condition(
    expression,
    { title, results = {}, success = true, cancelled = false, steps = {} } = {},
) {
    const source = String(expression ?? "success()").replace(/^\$\{\{\s*|\s*\}\}$/g, "");
    if (!/\b(?:always|cancelled|success|failure)\(/.test(source) && !success) return false;
    const needs = Object.fromEntries(
        Object.entries(results).map(([id, result]) => [
            id,
            { result, outputs: readiness[id] ? stepOutputs(readiness[id], title) : {} },
        ]),
    );
    return Function(
        "needs",
        "steps",
        "cancelled",
        "success",
        "failure",
        "always",
        `return (${source});`,
    )(
        needs,
        steps,
        () => cancelled,
        () => success,
        () => !success && !cancelled,
        () => true,
    );
}
function enabled(job, title, results = {}, cancelled = false) {
    const dependencies = [job.needs ?? []].flat();
    const all = Object.fromEntries(dependencies.map((id) => [id, results[id] ?? "success"]));
    return condition(job.if, {
        title,
        results: all,
        cancelled,
        success: Object.values(all).every((result) => result === "success"),
    });
}
function shell(run, env = {}) {
    const localEnv = { ...process.env };
    delete localEnv.PR_TITLE;
    delete localEnv.READY;
    return spawnSync("bash", ["-e", "-o", "pipefail", "-c", run], { env: { ...localEnv, ...env } })
        .status;
}
const requiredJobs = Object.entries(jobs).filter(([id, job]) =>
    spec.required.includes(`${workflow.name} / ${job.name ?? id} (pull_request)`),
);

test("the readiness job reads the title once, case-insensitively, and publishes the decision", () => {
    for (const step of [gateStep, requestStep]) {
        for (const title of ["WIP: work", "wip: work", "Wip:work", "WIP: $(exit 7)"])
            assert.equal(stepOutputs(step, title).ready, "false", title);
        for (const title of ["Ready $(exit 7)", "Work in progress", "", undefined])
            assert.equal(stepOutputs(step, title).ready, "true", String(title));
        assert.equal(step.env.PR_TITLE, "${{ github.event.pull_request.title }}");
        assert.ok(!step.run.includes("${{ github.event.pull_request.title }}"));
    }
    assert.equal(jobs[spec.gate].outputs.ready, "${{ steps.ready.outputs.ready }}");
    assert.equal(
        workflows["e2e-full.yml"].jobs.requested.outputs.ready,
        "${{ steps.request.outputs.ready }}",
    );
});

test("a required merge gate runs and fails on WIP instead of satisfying branch protection", () => {
    const gates = requiredJobs.filter(([, job]) => enabled(job, "WIP: work"));
    const blockers = gates.filter(
        ([, job]) => job.steps?.[0]?.name === "Require a ready pull request",
    );
    assert.ok(
        blockers.length,
        "all required checks were satisfied or skipped without a WIP blocker",
    );
    for (const [, job] of blockers) {
        assert.ok([job.needs ?? []].flat().includes(spec.gate));
        assert.doesNotMatch(job.if ?? "", /gate/);
        const guard = job.steps[0];
        assert.notEqual(job["continue-on-error"], true);
        assert.notEqual(guard["continue-on-error"], true);
        assert.equal(condition(guard.if, { title: "WIP: work" }), true);
        for (const result of ["success", "failure", "cancelled", "skipped"]) {
            const results = Object.fromEntries([job.needs ?? []].flat().map((id) => [id, result]));
            assert.equal(enabled(job, "WIP: work", results), true);
        }
        assert.equal(guard.env.READY, "${{ needs.gate.outputs.ready }}");
        assert.equal(shell(guard.run), 0, "raw local replay");
        assert.equal(shell(guard.run, { READY: "false" }), 1);
        assert.equal(shell(guard.run, { READY: "true" }), 0);
    }
});

test("every expensive job skips WIP while ready and non-PR work remains applicable", () => {
    const heavy = spec.gated
        .filter((id) => id !== "lint")
        .map((id) => ({ job: jobs[id], gate: spec.gate, output: "ready" }));
    // Also derive the build-runner and reusable-e2e surface from the workflows.
    for (const current of Object.values(workflows)) {
        if (!Object.hasOwn(current.on ?? {}, "pull_request")) continue;
        for (const job of Object.values(current.jobs ?? {})) {
            const e2e = /\/workflows\/e2e-full\.yml@/.test(job.uses ?? "");
            if (
                (["build", "ubuntu-vm"].includes(job["runs-on"]) || e2e) &&
                !heavy.some((entry) => entry.job === job)
            )
                heavy.push({ job, gate: e2e ? "requested" : spec.gate, output: "ready" });
        }
    }
    assert.ok(
        heavy.some((entry) => entry.gate === "requested"),
        "reusable e2e is covered",
    );
    for (const { job, gate, output } of heavy) {
        assert.ok(job);
        assert.ok([job.needs ?? []].flat().includes(gate), job.name);
        assert.match(job.if, new RegExp(`needs\\.${gate}\\.outputs\\.${output} == 'true'`));
        assert.ok(!/startsWith/.test(job.if), job.name);
        assert.equal(enabled(job, "Ready work"), true, job.name);
        assert.equal(enabled(job, undefined), true, `${job.name}: no title`);
        assert.equal(enabled(job, "WIP: work"), false, job.name);
        assert.equal(enabled(job, "wip: work"), false, job.name);
    }
});
test("light checks, attribution and changeset review remain independent on WIP", () => {
    const light = Object.values(workflows)
        .flatMap((w) => Object.values(w.jobs ?? {}))
        .filter((job) => !String(job.if ?? "").includes("gate.outputs"));
    const steps = light.flatMap((job) => job.steps ?? []);
    for (const run of spec.runs)
        assert.ok(
            steps.some((step) => step.run === run || step.run?.includes(`${run}\n`)),
            `missing light command: ${run}`,
        );
    for (const action of spec.lightActions)
        assert.ok(
            steps.some((step) => step.uses?.split("@")[0] === action),
            `missing light action: ${action}`,
        );
    assert.equal(enabled(jobs[spec.light], "WIP: work"), true);
    assert.ok(![jobs[spec.light].needs ?? []].flat().some((id) => spec.gated.includes(id)));
    assert.ok(!workflows[spec.file].on.pull_request?.types?.includes("edited"), spec.file);
});

test("protected status context names retain their exact spelling", () => {
    const names = Object.values(workflows).flatMap((w) =>
        Object.entries(w.jobs ?? {}).map(
            ([id, job]) => `${w.name} / ${job.name ?? id} (pull_request)`,
        ),
    );
    for (const required of spec.required) assert.ok(names.includes(required), required);
});
