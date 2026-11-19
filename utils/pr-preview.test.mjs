/* SPDX-License-Identifier: GPL-3.0-or-later */
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import { parse } from "yaml";
import { previewRequest, previewDecision } from "./pr-preview.mjs";

const repository = "HeroicLands/thalorna";
const sha = "a".repeat(40);
const revision = "6980ac546909f562708b0ec63eb8d8aa316d6e2f";
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
const helpers = (eligible) => ({
    previewEligible: (pr, context) => {
        assert.equal(context.sourceSha, sha);
        return eligible;
    },
    previewRequested: (action, changes) =>
        ["synchronized", "reopened"].includes(action) ||
        (action === "label_updated" &&
            changes?.added_labels?.some((label) => label.name === "ci/preview")),
});

test("event identity uses the PR head and rejects alternate repository, base, fork and malformed identity", () => {
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
            e.pull_request.base.ref = "topic";
        },
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

test("only native label additions and sticky refreshes build when the shared current-head guard allows them", () => {
    const pr = { state: "open" };
    const requests = [
        request("label_updated", { added_labels: [{ name: "ci/preview" }] }),
        request("synchronized"),
        request("reopened"),
    ];
    for (const candidate of requests) {
        assert.equal(previewDecision(candidate, pr, helpers(true)).build, true);
        assert.equal(previewDecision(candidate, pr, helpers(false)).build, false);
    }
    for (const changes of [
        undefined,
        { added_labels: [{ name: "area/devops" }] },
        { removed_labels: [{ name: "ci/preview" }] },
    ])
        assert.equal(
            previewDecision(request("label_updated", changes), pr, helpers(true)).build,
            false,
        );
});

test("close cleanup and reopen invalidation remain independent of label, head eligibility and builds", () => {
    assert.equal(
        previewDecision(request("closed"), { state: "closed" }, helpers(false)).cleanup,
        true,
    );
    assert.equal(
        previewDecision(request("closed"), { state: "open" }, helpers(false)).cleanup,
        false,
    );
    assert.deepEqual(previewDecision(request("reopened"), { state: "open" }, helpers(false)), {
        build: false,
        cleanup: false,
        reopen: true,
        unsupported: false,
    });
    assert.equal(
        previewDecision(request("reopened"), { state: "closed" }, helpers(false)).reopen,
        false,
    );
    assert.equal(previewDecision({ unsupported: true }, null, {}).unsupported, true);
});

test("manual requests keep the exact identity and ordinary publication eligibility", () => {
    const manual = (operation, sourceSha = sha, ref = "refs/heads/main") =>
        previewRequest(
            "workflow_dispatch",
            { inputs: { operation, "pr-number": "42", "source-sha": sourceSha } },
            repository,
            ref,
        );
    assert.equal(previewDecision(manual("publish"), { state: "open" }, helpers(true)).build, true);
    assert.equal(
        previewDecision(manual("publish"), { state: "open" }, helpers(false)).build,
        false,
    );
    assert.equal(
        previewDecision(manual("cleanup"), { state: "closed" }, helpers(false)).cleanup,
        true,
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
    assert.equal(workflow.permissions.contents, "write");
    assert.equal(workflow.on.schedule, undefined);
    const { controller, reopen, build, publish, cleanup } = workflow.jobs;
    assert.equal(workflow.jobs.unsupported.name, "Fork previews are unsupported");
    assert.equal(
        workflow.jobs.unsupported.if,
        "${{ needs.controller.outputs.unsupported == 'true' }}",
    );
    assert.match(workflow.jobs.unsupported.steps[0].run, /exit 1/);
    assert.equal(controller.permissions.contents, "read");
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
        if (name !== "build") assert.equal(job.with.operation, name);
    }
    assert.equal(build.permissions.contents, "read");
    assert.equal(build.secrets, undefined);
    assert.equal(reopen.secrets, undefined);
    assert.deepEqual(build.needs, ["controller", "reopen"]);
    assert.match(build.if, /needs\.controller\.outputs\.build == 'true'/);
    assert.match(
        build.if,
        /needs\.reopen\.result == 'success' \|\| needs\.reopen\.result == 'skipped'/,
    );
    assert.deepEqual(publish.needs, ["controller", "build"]);
    assert.equal(cleanup.needs, "controller");
    assert.equal(cleanup.if, "${{ needs.controller.outputs.cleanup == 'true' }}");
    for (const job of [publish, cleanup])
        assert.deepEqual(job.secrets, {
            PREVIEW_SSH_PRIVATE_KEY: "${{ secrets.PREVIEW_SSH_PRIVATE_KEY }}",
        });
    assert.equal(build.with["artifact-name"], publish.with["artifact-name"]);
    assert.equal(build.with["min-pages"], 1001);
    assert.equal(publish.with["min-pages"], 1001);
});
