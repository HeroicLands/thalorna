/* SPDX-License-Identifier: GPL-3.0-or-later */

import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { parse } from "yaml";
import { selectPublication, validatePages, ensurePublicProject } from "./site-publication.mjs";

const SHARED = "5d2db91909feba6a8c99013ac15c9a155f066445";

test("only main pushes build internally; release tags and trusted manual dispatches build publicly", () => {
    assert.deepEqual(selectPublication("push", "refs/heads/main"), {
        mode: "internal",
        root: "internal.heroiclands.org",
    });
    for (const [event, ref] of [
        ["push", "refs/tags/v0.2.1"],
        ["workflow_dispatch", "refs/heads/main"],
        ["workflow_dispatch", "refs/tags/v1.2.3-beta.1"],
    ])
        assert.deepEqual(selectPublication(event, ref), {
            mode: "public",
            root: "heroiclands.org",
        });
    for (const [event, ref] of [
        ["pull_request", "refs/heads/main"],
        ["push", "refs/heads/topic"],
        ["workflow_dispatch", "refs/heads/topic"],
        ["push", "refs/tags/vlatest"],
    ])
        assert.throws(() => selectPublication(event, ref));
});

async function pages() {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "thalorna-pages-"));
    await fs.mkdir(path.join(root, "thalorna/child"), { recursive: true });
    await fs.writeFile(path.join(root, "_headers"), "/*\n  X-Robots-Tag: noindex\n");
    await fs.writeFile(path.join(root, "thalorna/index.html"), "<main>Landing</main>");
    await fs.writeFile(path.join(root, "thalorna/child/index.html"), "<main>Child</main>");
    await fs.writeFile(path.join(root, "thalorna/404.html"), "<main>Missing</main>");
    return root;
}

test("public payload retains its package prefix, nonempty headers/404/home and completeness guard", async () => {
    const root = await pages();
    try {
        assert.equal(await validatePages(root, { minPages: 2 }), 2);
        await assert.rejects(validatePages(root), /incomplete/);
        for (const file of ["_headers", "thalorna/404.html", "thalorna/index.html"]) {
            const original = await fs.readFile(path.join(root, file));
            await fs.writeFile(path.join(root, file), "");
            await assert.rejects(validatePages(root, { minPages: 2 }), /empty/);
            await fs.writeFile(path.join(root, file), original);
        }
        await fs.writeFile(path.join(root, "outside.html"), "outside");
        await assert.rejects(validatePages(root, { minPages: 2 }), /unexpected/);
        await fs.unlink(path.join(root, "outside.html"));
        await fs.symlink("index.html", path.join(root, "thalorna/linked.html"));
        await assert.rejects(validatePages(root, { minPages: 2 }), /regular/);
    } finally {
        await fs.rm(root, { recursive: true, force: true });
    }
});

test("Cloudflare project identity stays fixed and credentials stay in environment/headers", async () => {
    const token = "private-token";
    let command;
    assert.equal(await ensurePublicProject({ env: {} }), false);
    assert.equal(
        await ensurePublicProject({
            env: { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: "a".repeat(32) },
            fetchImpl: async (url, options) => {
                assert.ok(url.endsWith("/pages/projects/sohl-thalorna"));
                assert.equal(options.headers.Authorization, `Bearer ${token}`);
                assert.equal(options.redirect, "error");
                return { status: 404 };
            },
            run: (program, args, options) => {
                command = [program, ...args];
                assert.equal(options.env.CLOUDFLARE_API_TOKEN, token);
                return { status: 0 };
            },
        }),
        true,
    );
    assert.ok(command.includes("sohl-thalorna"));
    assert.ok(!command.join(" ").includes(token));
    await assert.rejects(
        ensurePublicProject({
            env: { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: "a".repeat(32) },
            fetchImpl: async () => {
                throw new Error(token);
            },
        }),
        (error) => !error.message.includes(token),
    );
});

test("site workflow builds secret-free pages and delegates only internal artifact deployment", async () => {
    const workflow = parse(
        await fs.readFile(new URL("../.gitea/workflows/deploy-site.yml", import.meta.url), "utf8"),
    );
    assert.deepEqual(workflow.on.push.branches, ["main"]);
    assert.deepEqual(workflow.on.push.tags, ["v*"]);
    assert.ok(Object.hasOwn(workflow.on, "workflow_dispatch"));
    assert.equal(workflow.concurrency["cancel-in-progress"], false);
    const build = workflow.jobs.build;
    assert.equal(build["runs-on"], "build");
    assert.ok(!JSON.stringify(build).includes("secrets."));
    assert.ok(build.steps.some((step) => step.run?.includes('site build --root "$BUILD_ROOT"')));
    assert.ok(build.steps.some((step) => step.run?.includes("git merge-base --is-ancestor")));
    const trusted = build.steps.find((step) => step.with?.repository === "HeroicLands/.github");
    assert.equal(trusted.with.ref, SHARED);
    assert.equal(trusted.with["github-server-url"], "https://git.pupluppy.org");
    const manifest = build.steps.find((step) => step.run?.includes("publish.mjs manifest"));
    assert.match(manifest.if, /internal/);
    assert.equal(manifest.env.PUBLICATION_PACKAGE, "thalorna");
    assert.equal(Number(manifest.env.MIN_PAGES), 1001);
    assert.equal(manifest.env.SOURCE_SHA, "${{ github.sha }}");
    assert.equal(
        build.steps.find((step) => step.uses?.startsWith("actions/upload-artifact@")).with.path,
        "publication/",
    );
    const internal = workflow.jobs.internal;
    assert.equal(
        internal.uses,
        `HeroicLands/.github/.gitea/workflows/deploy-internal-site.yml@${SHARED}`,
    );
    assert.equal(internal.with.package, "thalorna");
    assert.equal(internal.with["source-sha"], "${{ github.sha }}");
    assert.equal(internal.with["min-pages"], 1001);
    assert.deepEqual(Object.keys(internal.secrets), ["PREVIEW_SSH_PRIVATE_KEY"]);
    assert.ok(!internal.steps);
    const publicSteps = workflow.jobs.public.steps;
    const validate = publicSteps.findIndex((step) =>
        step.run?.includes("site-publication.mjs verify publication/site"),
    );
    assert.ok(validate >= 0);
    assert.ok(
        publicSteps.findIndex((step) => JSON.stringify(step).includes("secrets.")) > validate,
    );
    assert.ok(
        publicSteps.some(
            (step) =>
                step.with?.command ===
                "pages deploy publication/site --project-name=sohl-thalorna --branch=main",
        ),
    );
    const serialized = JSON.stringify(workflow);
    for (const obsolete of [
        "preview-assets",
        "preview-publish",
        "assets.json",
        "cdn publish",
        "publish-package-cdn",
        "CDN_ACCESS_KEY",
        "rsync",
    ])
        assert.ok(!serialized.includes(obsolete), obsolete);
});

test("CDN publication remains a separate manual choice with explicit backend secrets", async () => {
    const workflow = parse(
        await fs.readFile(new URL("../.gitea/workflows/publish-cdn.yml", import.meta.url), "utf8"),
    );
    assert.deepEqual(Object.keys(workflow.on), ["workflow_dispatch"]);
    assert.equal(workflow.on.workflow_dispatch.inputs.dest.default, "internal");
    assert.deepEqual(workflow.on.workflow_dispatch.inputs.dest.options, ["internal", "cloudflare"]);
    assert.equal(workflow.jobs.publish.with.dest, "${{ inputs.dest }}");
    assert.equal(workflow.jobs.publish.with["dry-run"], "${{ inputs.dry-run }}");
    assert.ok(workflow.jobs.publish.secrets.PREVIEW_SSH_PRIVATE_KEY);
    assert.ok(workflow.jobs.publish.secrets.CDN_SECRET_ACCESS_KEY);
    assert.ok(workflow.jobs.publish.uses.endsWith(`@${SHARED}`));
});
