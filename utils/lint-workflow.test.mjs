/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import yaml from "yaml";

const workflow = yaml.parse(fs.readFileSync(".gitea/workflows/lint.yml", "utf8"));
const step = (job, name) => workflow.jobs[job].steps.find((entry) => entry.name === name);

test("required statuses aggregate every independent check", () => {
    assert.equal(workflow.jobs.lint.name, "Content, prose, and registry checks");
    assert.equal(workflow.jobs.build.name, "Content pack compile");
    assert.deepEqual(workflow.jobs.lint.needs, ["format", "guards", "fonts", "build"]);
    assert.equal(workflow.jobs.lint.if, "${{ !cancelled() }}");
    const run = step("lint", "Every check passed").run;
    for (const results of [
        "success success success success",
        "success success failure success",
        "success skipped success success",
    ]) {
        const checked = spawnSync("bash", [
            "-e",
            "-c",
            run.replace("${{ join(needs.*.result, ' ') }}", results),
        ]);
        assert.equal(
            checked.status,
            results.split(" ").every((value) => value === "success") ? 0 : 1,
        );
    }
});

test("build retains standalone commands and shares one published index with Veldikko", () => {
    const { scripts } = JSON.parse(fs.readFileSync("package.json", "utf8"));
    assert.equal(
        scripts["build:db"],
        "npm run build:deps && package-build content build --calendaria-version 1.4.2",
    );
    for (const command of [
        "build:content-index",
        "build:calendars",
        "build:assets",
        "build:content",
    ])
        assert.ok(scripts[command]);
    assert.ok(step("build", "Veldikko"));
    assert.ok(!step("fonts", "Veldikko"));
    assert.equal(
        step("build", "Veldikko").if,
        "${{ !cancelled() && steps.publication_reset.outcome == 'success' }}",
    );
    assert.equal(step("build", "Clear content publication").id, "publication_reset");
    for (const name of ["Compile the content packs", "Veldikko"])
        assert.notEqual(step("build", name)["continue-on-error"], true);
    assert.ok(
        workflow.jobs.build.steps.indexOf(step("build", "Clear content publication")) <
            workflow.jobs.build.steps.indexOf(step("build", "Install dependencies")),
    );
    assert.ok(
        workflow.jobs.build.steps.indexOf(step("build", "Compile the content packs")) <
            workflow.jobs.build.steps.indexOf(step("build", "Veldikko")),
    );
});

test("native geometry pins one font revision while language guards use installed encoders", () => {
    assert.match(workflow.env.FONTS_REVISION, /^[a-f0-9]{40}$/);
    const fetch = step("fonts", "Fetch the fonts").run;
    assert.match(fetch, /fetch.*\"\$FONTS_REVISION\"/);
    assert.match(fetch, /checkout.*FETCH_HEAD/);
    assert.equal(workflow.jobs.build.needs, undefined);
    assert.equal(workflow.jobs.fonts.needs, undefined);
    assert.match(step("fonts", "Install Thalorna dependencies").run, /npm ci/);
    assert.doesNotMatch(step("build", "Veldikko").run, /npm ci|git .*fetch|--fonts/);
    const geometry = workflow.jobs.fonts.steps.filter((entry) =>
        /native fixtures and geometry$/.test(entry.name ?? ""),
    );
    assert.equal(geometry.length, 8);
    for (const entry of geometry) {
        assert.match(
            entry.run,
            /--font \"?\$GITHUB_WORKSPACE\/node_modules\/@heroiclands\/fonts\/fonts\//,
        );
        assert.doesNotMatch(entry.run, /--note|--map-note/);
    }
    const forms = step("fonts", "Shape every lexicon form through its encoding document").run;
    assert.match(forms, /node utils\/font-lexicon-inputs.mjs/);
    assert.match(forms, /utils\/font-lexicon-guard.py.*--input/s);
});

test("Veldikko refuses absent publication, clears stale output, and runs after a later build failure", (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lint-publication-"));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const marker = path.join(dir, "build/content-index/.publication-ready");
    fs.mkdirSync(path.dirname(marker), { recursive: true });
    fs.writeFileSync(marker, "stale");
    const cleared = spawnSync(
        "bash",
        ["-e", "-c", step("build", "Clear content publication").run],
        { cwd: dir },
    );
    assert.equal(cleared.status, 0);
    assert.ok(!fs.existsSync(marker));
    const bin = path.join(dir, "bin");
    fs.mkdirSync(bin);
    for (const tool of ["git", "node"])
        fs.writeFileSync(
            path.join(bin, tool),
            '#!/bin/sh\nprintf "%s\\n" "$0 $*" >> "$RUNNER_TEMP/calls"\n',
            { mode: 0o755 },
        );
    const run = () =>
        spawnSync("bash", ["-e", "-c", step("build", "Veldikko").run], {
            cwd: dir,
            encoding: "utf8",
            env: {
                ...process.env,
                RUNNER_TEMP: dir,
                FONTS_REVISION: workflow.env.FONTS_REVISION,
                PATH: `${bin}:${process.env.PATH}`,
            },
        });
    const absent = run();
    assert.equal(absent.status, 1);
    assert.match(absent.stdout + absent.stderr, /fresh.*index|index.*publish/i);
    assert.ok(!fs.existsSync(path.join(dir, "calls")));
    fs.mkdirSync(path.dirname(marker), { recursive: true });
    fs.writeFileSync(marker, "fresh");
    fs.writeFileSync(path.join(dir, "build/content-index/thalorna-metadata.jsonl"), "{}\n");
    const published = run();
    assert.equal(published.status, 0, published.stderr);
    assert.match(
        fs.readFileSync(path.join(dir, "calls"), "utf8"),
        /node utils\/veldikko-guard.mjs --index build\/content-index\/thalorna-metadata.jsonl(?:\n|$)/,
    );
});

test("only superseded revisions of the same pull request are cancelled", () => {
    assert.equal(
        workflow.concurrency.group,
        "${{ github.repository }}-${{ github.workflow }}-${{ github.event_name }}-${{ github.event.pull_request.number || github.run_id }}",
    );
    assert.equal(
        workflow.concurrency["cancel-in-progress"],
        "${{ github.event_name == 'pull_request' }}",
    );
});

test("registry toolchain caches follow the lockfile and npm downloads restore only for installation", (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lint npm cache "));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const bin = path.join(dir, "bin");
    fs.mkdirSync(bin);
    fs.writeFileSync(path.join(bin, "npm"), '#!/bin/sh\nprintf "%s\\n" "$@"\n', { mode: 0o755 });
    const keys = new Set();
    const moduleKeys = new Set();
    for (const job of Object.values(workflow.jobs)) {
        const modules = job.steps.find((entry) => entry.id === "modules");
        if (!modules) continue;
        moduleKeys.add(modules.with.key);
        const setup = job.steps.find((entry) => entry.uses?.startsWith("actions/setup-node@"));
        assert.equal(setup.with.cache, undefined);
        const downloads = job.steps.find((entry) => entry.name === "Cache npm downloads");
        const install = job.steps.find((entry) => entry.name === "Install dependencies");
        assert.ok(downloads);
        assert.equal(downloads.if, "${{ steps.modules.outputs.cache-hit != 'true' }}");
        assert.equal(install.if, downloads.if);
        assert.equal(downloads.with.path, "${{ runner.temp }}/npm-cache");
        assert.ok(job.steps.indexOf(modules) < job.steps.indexOf(downloads));
        assert.ok(job.steps.indexOf(downloads) < job.steps.indexOf(install));
        keys.add(downloads.with.key);
        const run = spawnSync("bash", ["-e", "-c", install.run], {
            encoding: "utf8",
            env: { ...process.env, RUNNER_TEMP: dir, PATH: `${bin}:${process.env.PATH}` },
        });
        assert.equal(run.status, 0, run.stderr);
        assert.deepEqual(run.stdout.trim().split("\n"), [
            "ci",
            "--cache",
            path.join(dir, "npm-cache"),
        ]);
    }
    assert.deepEqual(
        [...keys],
        ["${{ runner.os }}-npm-node-24-${{ hashFiles('package-lock.json') }}"],
    );
    assert.deepEqual(
        [...moduleKeys],
        ["${{ runner.os }}-node-24-${{ hashFiles('package-lock.json') }}"],
    );
    assert.doesNotMatch(
        JSON.stringify(workflow),
        /PACKAGE_BUILD_CANDIDATE|package-build-candidate|npm pack\b/,
    );
    assert.ok(!step("fonts", "Cache npm downloads"));
});
