/* SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import { parse } from "yaml";
import { previewRequest, previewDecision, writePreviewDiagnostic } from "./pr-preview.mjs";
import * as helpers from "../trusted-preview-contracts/actions/internal-site-deploy/publish.mjs";

const repository = "HeroicLands/thalorna";
const sha = "a".repeat(40);
const revision = "37b1fa7cb6eb63fe6e54531e66a4d0ca61094442";
const event = (action, changes) => ({
    action,
    changes,
    pull_request: {
        number: 42,
        base: { ref: "main", repo: { full_name: repository } },
        head: { sha, repo: { full_name: repository } },
    },
});
const request = (action, changes) =>
    previewRequest("pull_request_target", event(action, changes), repository);
const currentPR = (overrides = {}) => ({
    ...event("synchronized").pull_request,
    state: "open",
    title: "Preview proof",
    draft: false,
    labels: [{ name: "ci/preview" }],
    ...overrides,
});

test("event identity uses the PR head and rejects alternate repository, fork and malformed identity", () => {
    const selected = request("synchronized");
    assert.equal(selected.context.sourceSha, sha);
    assert.equal(selected.context.prNumber, 42);
    assert.equal(selected.context.repository, repository);
    assert.equal(selected.context.minPages, 1001);
    assert.throws(() => previewRequest("pull_request", event("synchronized"), repository));
    assert.throws(() =>
        previewRequest("pull_request_target", event("synchronized"), "Elsewhere/thalorna"),
    );
    for (const mutate of [
        (e) => {
            e.pull_request.base.repo.full_name = "Elsewhere/thalorna";
        },
        (e) => {
            e.pull_request.head.sha = "refs/heads/topic";
        },
        (e) => {
            e.pull_request.number = "42/../1";
        },
    ]) {
        const candidate = event("synchronized");
        mutate(candidate);
        assert.throws(() => previewRequest("pull_request_target", candidate, repository));
    }
    const fork = event("synchronized");
    fork.pull_request.head.repo.full_name = "Elsewhere/thalorna";
    assert.deepEqual(previewRequest("pull_request_target", fork, repository), {
        unsupported: true,
    });
});

test("forks on other bases are unsupported and retargeted closed PRs clean up without building", () => {
    const fork = event("closed");
    fork.pull_request.base.ref = "topic";
    fork.pull_request.head.repo.full_name = "Elsewhere/thalorna";
    const unsupported = previewRequest("pull_request_target", fork, repository);
    assert.deepEqual(previewDecision(unsupported, null, helpers), {
        build: false,
        cleanup: false,
        reopen: false,
        unsupported: true,
    });

    const retargeted = event("closed");
    retargeted.pull_request.base.ref = "topic";
    const selected = previewRequest("pull_request_target", retargeted, repository);
    const current = currentPR({ state: "closed", base: retargeted.pull_request.base });
    assert.deepEqual(previewDecision(selected, current, helpers), {
        build: false,
        cleanup: true,
        reopen: false,
        unsupported: false,
    });
    retargeted.action = "synchronized";
    const refresh = previewRequest("pull_request_target", retargeted, repository);
    assert.equal(
        previewDecision(refresh, currentPR({ base: retargeted.pull_request.base }), helpers).build,
        false,
    );
    assert.equal(previewDecision(refresh, currentPR(), helpers).build, false);
});

test("only native label additions and sticky refreshes build when the shared current-head guard allows them", () => {
    const pr = currentPR();
    const requests = [
        request("label_updated", { added_labels: [{ name: "ci/preview" }] }),
        request("synchronized"),
        request("reopened"),
    ];
    for (const candidate of requests) {
        assert.equal(previewDecision(candidate, pr, helpers).build, true);
        assert.equal(previewDecision(candidate, currentPR({ labels: [] }), helpers).build, false);
    }
    for (const changes of [
        undefined,
        { added_labels: [{ name: "area/devops" }] },
        { removed_labels: [{ name: "ci/preview" }] },
    ])
        assert.equal(previewDecision(request("label_updated", changes), pr, helpers).build, false);
});

test("controller diagnostics contain only booleans and match the helper decision", async () => {
    for (const [candidate, pr] of [
        [
            request("label_updated", { added_labels: [{ name: "ci/preview", secret: "private" }] }),
            currentPR(),
        ],
        [request("label_updated", { removed_labels: [{ name: "ci/preview" }] }), currentPR()],
        [request("synchronized"), currentPR({ draft: true })],
        [request("reopened"), currentPR()],
        [request("closed"), currentPR({ state: "closed" })],
        [
            previewRequest(
                "workflow_dispatch",
                { inputs: { operation: "publish", "pr-number": "42", "source-sha": sha } },
                repository,
                "refs/heads/main",
            ),
            currentPR(),
        ],
        [
            previewRequest(
                "workflow_dispatch",
                { inputs: { operation: "cleanup", "pr-number": "42", "source-sha": sha } },
                repository,
                "refs/heads/main",
            ),
            currentPR({ state: "closed" }),
        ],
        [{ unsupported: true }, null],
    ]) {
        let diagnostic;
        const decision = previewDecision(candidate, pr, helpers, (value) => {
            diagnostic = value;
        });
        assert.deepEqual(
            Object.keys(diagnostic).sort(),
            [
                "action_label_updated",
                "action_synchronized",
                "action_reopened",
                "action_closed",
                "action_publish",
                "action_cleanup",
                "added_labels_array",
                "added_preview",
                "base_is_main",
                "current_eligible",
                "requested",
                "build",
                "cleanup",
                "reopen",
                "unsupported",
            ].sort(),
        );
        assert.ok(Object.values(diagnostic).every((value) => typeof value === "boolean"));
        for (const action of [
            "label_updated",
            "synchronized",
            "reopened",
            "closed",
            "publish",
            "cleanup",
        ])
            assert.equal(diagnostic[`action_${action}`], candidate.action === action);
        for (const [key, value] of Object.entries(decision)) assert.equal(diagnostic[key], value);
        if (!candidate.unsupported) {
            assert.equal(
                diagnostic.current_eligible,
                helpers.previewEligible(pr, candidate.context),
            );
            assert.equal(
                diagnostic.requested,
                candidate.action === "publish" ||
                    helpers.previewRequested(candidate.action, candidate.changes),
            );
        }
        const logs = [];
        const summaries = [];
        await writePreviewDiagnostic(diagnostic, {
            summary: "summary",
            log: (value) => logs.push(value),
            append: async (file, value) => summaries.push({ file, value }),
        });
        assert.equal(logs.length, 1);
        assert.deepEqual(summaries, [{ file: "summary", value: logs[0] + "\n" }]);
        assert.deepEqual(JSON.parse(logs[0]), diagnostic);
        assert.doesNotMatch(logs[0], /private|ci\/preview|Preview proof|aaaa/);
    }
});

test("close cleanup and reopen invalidation remain independent of label, head eligibility and builds", () => {
    assert.equal(
        previewDecision(request("closed"), currentPR({ state: "closed" }), helpers).cleanup,
        true,
    );
    assert.equal(
        previewDecision(request("closed"), currentPR({ labels: [] }), helpers).cleanup,
        false,
    );
    assert.deepEqual(previewDecision(request("reopened"), currentPR({ labels: [] }), helpers), {
        build: false,
        cleanup: false,
        reopen: true,
        unsupported: false,
    });
    assert.equal(
        previewDecision(request("reopened"), currentPR({ state: "closed" }), helpers).reopen,
        false,
    );
    assert.equal(previewDecision({ unsupported: true }, null, {}).unsupported, true);
});

test("the pinned helper rejects stale, draft, WIP, closed and cross-repository candidates", () => {
    const candidate = request("synchronized");
    for (const change of [
        { labels: [] },
        { draft: true },
        { title: "wip: not ready" },
        { state: "closed" },
        { head: { ...currentPR().head, sha: "b".repeat(40) } },
        { base: { ...currentPR().base, ref: "topic" } },
    ])
        assert.equal(previewDecision(candidate, currentPR(change), helpers).build, false);
    for (const change of [
        { base: { ...currentPR().base, repo: { full_name: "Elsewhere/thalorna" } } },
        { head: { ...currentPR().head, repo: { full_name: "Elsewhere/thalorna" } } },
    ])
        assert.throws(
            () => previewDecision(candidate, currentPR(change), helpers),
            /identity rejected/,
        );
});

test("only eligible builds share PR cancellation; no-op and lifecycle jobs cannot cancel a queued refresh or cleanup", async () => {
    const workflow = parse(
        await fs.readFile(new URL("../.gitea/workflows/pr-preview.yml", import.meta.url), "utf8"),
    );
    const { build, controller, publish, cleanup, reopen } = workflow.jobs;
    assert.equal(workflow.concurrency, undefined);
    for (const job of [controller, publish, cleanup, reopen])
        assert.equal(job.concurrency, undefined);
    assert.equal(build.concurrency["cancel-in-progress"], true);
    assert.equal(
        build.concurrency.group,
        "${{ github.repository }}-pr-preview-build-${{ needs.controller.outputs.pr-number }}",
    );
    const group = (number) =>
        build.concurrency.group
            .replace("${{ github.repository }}", repository)
            .replace("${{ needs.controller.outputs.pr-number }}", String(number));
    assert.equal(group(42), group(42));
    assert.notEqual(group(42), group(43));
    // The YAML expression is evaluated directly; this does not run the scheduler.
    const evaluate = (job, needs, cancelled = false) => {
        const expression = job.if.replace(/^\$\{\{\s*|\s*\}\}$/g, "");
        return Function("needs", "cancelled", `return (${expression});`)(needs, () => cancelled);
    };
    assert.match(build.if, /\bcancelled\(\)/);
    assert.match(publish.if, /\bcancelled\(\)/);
    assert.deepEqual(build.needs, ["controller", "reopen"]);
    assert.deepEqual(publish.needs, ["controller", "build"]);
    const enabled = (decision, reopenResult = "skipped", overrides = {}) =>
        evaluate(
            build,
            {
                controller: {
                    result: overrides.controller ?? "success",
                    outputs: {
                        build: overrides.build ?? String(decision.build),
                        reopen: overrides.reopen ?? String(decision.reopen),
                    },
                },
                reopen: { result: reopenResult },
            },
            overrides.cancelled ?? false,
        );
    assert.equal(enabled(previewDecision(request("synchronized"), currentPR(), helpers)), true);
    for (const changes of [
        undefined,
        { added_labels: [{ name: "area/devops" }] },
        { removed_labels: [{ name: "ci/preview" }] },
    ])
        assert.equal(
            enabled(previewDecision(request("label_updated", changes), currentPR(), helpers)),
            false,
        );
    const normal = previewDecision(request("synchronized"), currentPR(), helpers);
    for (const decision of [
        normal,
        previewDecision(
            request("label_updated", { added_labels: [{ name: "ci/preview" }] }),
            currentPR(),
            helpers,
        ),
    ])
        for (const result of ["skipped", "", "blocked"])
            assert.equal(enabled(decision, result), true);
    for (const intent of ["", "unknown"])
        assert.equal(enabled(normal, "success", { reopen: intent }), false);
    for (const status of ["failure", "skipped", "cancelled", ""])
        assert.equal(enabled(normal, "skipped", { controller: status }), false);
    for (const intent of ["false", ""])
        assert.equal(enabled(normal, "skipped", { build: intent }), false);
    assert.equal(enabled(normal, "skipped", { cancelled: true }), false);
    const closed = previewDecision(request("closed"), currentPR({ state: "closed" }), helpers);
    assert.equal(closed.cleanup, true);
    assert.equal(enabled(closed), false);
    const reopened = previewDecision(request("reopened"), currentPR(), helpers);
    assert.equal(reopened.reopen, true);
    for (const result of ["skipped", "", "blocked", "failure", "cancelled"])
        assert.equal(enabled(reopened, result), false);
    assert.equal(enabled(reopened, "success"), true);
    assert.equal(
        enabled(
            previewDecision(request("reopened"), currentPR({ labels: [] }), helpers),
            "success",
        ),
        false,
    );
    // Explicit publication checks provide defense in depth.
    const publication = (controllerResult, buildIntent, buildResult, cancelled = false) =>
        evaluate(
            publish,
            {
                controller: { result: controllerResult, outputs: { build: buildIntent } },
                build: { result: buildResult },
            },
            cancelled,
        );
    assert.equal(publication("success", "true", "success"), true);
    for (const result of ["failure", "skipped", "cancelled", ""]) {
        assert.equal(publication(result, "true", "success"), false);
        assert.equal(publication("success", "true", result), false);
    }
    for (const intent of ["false", "", "unknown"])
        assert.equal(publication("success", intent, "success"), false);
    assert.equal(publication("success", "true", "success", true), false);
});

test("manual requests keep the exact identity and ordinary publication eligibility", () => {
    const manual = (operation, sourceSha = sha, ref = "refs/heads/main") =>
        previewRequest(
            "workflow_dispatch",
            { inputs: { operation, "pr-number": "42", "source-sha": sourceSha } },
            repository,
            ref,
        );
    assert.equal(previewDecision(manual("publish"), currentPR(), helpers).build, true);
    assert.equal(
        previewDecision(manual("publish"), currentPR({ labels: [] }), helpers).build,
        false,
    );
    assert.equal(
        previewDecision(manual("cleanup"), currentPR({ state: "closed" }), helpers).cleanup,
        true,
    );
    assert.deepEqual(
        previewDecision(
            manual("cleanup"),
            currentPR({ state: "closed", base: { ...currentPR().base, ref: "topic" } }),
            helpers,
        ),
        { build: false, cleanup: true, reopen: false, unsupported: false },
    );
    assert.throws(() => manual("shell"));
    assert.throws(() => manual("publish", "main"));
    for (const ref of ["refs/heads/topic", "refs/tags/v1.0.0", "main", "", undefined])
        assert.throws(
            () =>
                previewRequest(
                    "workflow_dispatch",
                    {
                        inputs: { operation: "publish", "pr-number": "42", "source-sha": sha },
                    },
                    repository,
                    ref,
                ),
            /requires main/,
        );
});

test("the workflow rejects branch and tag dispatches before any controller step", async () => {
    const workflow = parse(
        await fs.readFile(new URL("../.gitea/workflows/pr-preview.yml", import.meta.url), "utf8"),
    );
    const expression = workflow.jobs.controller.if.replace(/^\$\{\{\s*|\s*\}\}$/g, "");
    const allowed = (event_name, ref) =>
        Function(
            "github",
            "vars",
            `return (${expression});`,
        )(
            { event_name, ref, server_url: "https://git.pupluppy.org" },
            { HL_DEPLOY_ENABLED: "true" },
        );
    assert.equal(allowed("workflow_dispatch", "refs/heads/main"), true);
    for (const ref of ["refs/heads/topic", "refs/tags/v1.0.0", "main", "", undefined])
        assert.equal(allowed("workflow_dispatch", ref), false);
    assert.equal(allowed("pull_request_target", "refs/heads/main"), true);
});

test("the actual workflow pins trusted code, isolates build secrets and handles cleanup independently", async () => {
    const workflow = parse(
        await fs.readFile(new URL("../.gitea/workflows/pr-preview.yml", import.meta.url), "utf8"),
    );
    assert.deepEqual(workflow.on.pull_request_target, {
        types: ["labeled", "synchronize", "reopened", "closed"],
    });
    assert.deepEqual(workflow.on.workflow_dispatch.inputs.operation.options, [
        "publish",
        "cleanup",
    ]);
    assert.equal(workflow.permissions.contents, "read");
    assert.equal(workflow.on.schedule, undefined);
    const { controller, reopen, build, publish, cleanup } = workflow.jobs;
    assert.equal(workflow.jobs.unsupported.name, "Fork previews are unsupported");
    assert.equal(
        workflow.jobs.unsupported.if,
        "${{ needs.controller.outputs.unsupported == 'true' }}",
    );
    assert.doesNotMatch(workflow.jobs.unsupported.steps[0].run, /exit 1/);
    assert.equal(controller.permissions.contents, "read");
    const lint = parse(
        await fs.readFile(new URL("../.gitea/workflows/lint.yml", import.meta.url), "utf8"),
    );
    const contractIndex = lint.jobs.guards.steps.findIndex(
        (step) => step.name === "Checkout pinned preview contracts",
    );
    const testsIndex = lint.jobs.guards.steps.findIndex(
        (step) => step.name === "Run the utility tests",
    );
    assert.ok(contractIndex >= 0 && contractIndex < testsIndex);
    assert.equal(lint.jobs.guards.steps[contractIndex].if, "${{ !cancelled() }}");
    const publishing = await fs.readFile(new URL("../docs/publishing.md", import.meta.url), "utf8");
    assert.ok(
        publishing.includes(`git -C trusted-preview-contracts checkout --detach ${revision}`),
    );
    assert.equal(lint.jobs.guards.steps[contractIndex].with.ref, revision);
    assert.equal(lint.jobs.guards.steps[contractIndex].with.repository, "HeroicLands/.github");
    assert.equal(lint.jobs.guards.steps[contractIndex].with.path, "trusted-preview-contracts");
    assert.equal(lint.jobs.guards.steps[contractIndex].with["persist-credentials"], false);
    const checkouts = controller.steps.filter((step) => step.uses?.startsWith("actions/checkout@"));
    assert.equal(checkouts.length, 2);
    assert.equal(checkouts[0].with.ref, "${{ github.sha }}");
    assert.equal(checkouts[1].with.ref, revision);
    assert.equal(checkouts[1].with.repository, "HeroicLands/.github");
    for (const checkout of checkouts) assert.equal(checkout.with["persist-credentials"], false);
    assert.ok(!JSON.stringify(controller).includes("secrets."));
    assert.ok(controller.steps.every((step) => !/npm (ci|install|run)/.test(step.run ?? "")));
    for (const [name, job] of Object.entries({ reopen, build, publish, cleanup })) {
        const file = name === "build" ? "build" : "deploy";
        assert.equal(
            job.uses,
            `HeroicLands/.github/.gitea/workflows/${file}-internal-preview.yml@${revision}`,
        );
        assert.equal(job.with["trusted-ref"], revision);
        assert.equal(job.with["source-sha"], "${{ needs.controller.outputs.source-sha }}");
        assert.equal(job.with["pr-number"], "${{ needs.controller.outputs.pr-number }}");
        assert.equal(job.with.package, "thalorna");
        if (name !== "build") {
            assert.equal(job.with.operation, name);
            assert.deepEqual(job.permissions, { contents: "write", actions: "read" });
        }
    }
    assert.deepEqual(build.permissions, { contents: "read" });
    assert.equal(build.secrets, undefined);
    assert.equal(reopen.secrets, undefined);
    assert.deepEqual(build.needs, ["controller", "reopen"]);
    assert.match(build.if, /needs\.controller\.outputs\.build == 'true'/);
    assert.match(build.if, /needs\.controller\.outputs\.reopen == 'false'/);
    assert.match(build.if, /needs\.reopen\.result == 'success'/);
    assert.deepEqual(publish.needs, ["controller", "build"]);
    assert.equal(cleanup.needs, "controller");
    assert.equal(cleanup.if, "${{ needs.controller.outputs.cleanup == 'true' }}");
    for (const job of [publish, cleanup])
        assert.deepEqual(job.secrets, {
            PREVIEW_SSH_PRIVATE_KEY: "${{ secrets.PREVIEW_SSH_PRIVATE_KEY }}",
        });
    assert.equal(build.with["artifact-name"], publish.with["artifact-name"]);
    assert.equal(publish.with["artifact-id"], "${{ needs.build.outputs.artifact-id }}");
    for (const job of [build, cleanup, reopen]) assert.equal(job.with["artifact-id"], undefined);
    assert.equal(build.with["min-pages"], 1001);
    assert.equal(publish.with["min-pages"], 1001);
});
