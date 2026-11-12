/*
 * This file is part of the Song of Heroic Lands (SoHL) system for Foundry VTT.
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 *
 * This work is licensed under the GNU General Public License v3.0 (GPLv3).
 * You may copy, modify, and distribute it under the terms of that license.
 *
 * For full terms, see the LICENSE.md file in the project root or visit:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

/** The exact Wrangler release that creates the Pages project. */
export const WRANGLER_VERSION = "4.158.0";

function located(root, key, message) {
    return new Error(`${root}/${key}: error: ${message}`);
}

/** Select addresses from trusted workflow events; branch dispatches are refused. */
export function selectPublication(event, ref) {
    if (event === "push" && ref === "refs/heads/main")
        return { mode: "internal", root: "internal.heroiclands.org" };
    if (
        ((event === "push" || event === "workflow_dispatch") &&
            /^refs\/tags\/v\d+\.\d+\.\d+(?:-[A-Za-z0-9.-]+)?$/.test(ref)) ||
        (event === "workflow_dispatch" && ref === "refs/heads/main")
    )
        return { mode: "public", root: "heroiclands.org" };
    throw new Error(`unsupported publishing event/ref: ${event} ${ref}`);
}

/** Verify the Pages payload before staging and again after artifact download. */
export async function validatePages(root, { minPages = 1001 } = {}) {
    const files = [];
    async function visit(relative) {
        const file = path.join(root, relative);
        const stat = await fs.lstat(file);
        if (stat.isDirectory()) {
            for (const name of await fs.readdir(file)) await visit(path.join(relative, name));
        } else {
            if (!stat.isFile() || stat.nlink !== 1)
                throw located(
                    root,
                    relative.split(path.sep).join("/"),
                    "site payload must contain regular files only",
                );
            const key = relative.split(path.sep).join("/");
            if (
                (key !== "_headers" && !key.startsWith("thalorna/")) ||
                key.endsWith("/.preview-publication.json")
            )
                throw located(root, key, "unexpected site root payload");
            if (!stat.size) throw located(root, key, "empty site payload");
            files.push(key);
        }
    }
    await visit("");
    for (const file of ["_headers", "thalorna/index.html", "thalorna/404.html"])
        if (!files.includes(file)) throw located(root, file, "missing site payload");
    const home = await fs.readFile(path.join(root, "thalorna/index.html"), "utf8");
    if (!/<main\b[^>]*>\s*\S[\s\S]*?<\/main>/i.test(home))
        throw located(root, "thalorna/index.html", "empty homepage main");
    const pages = files.filter(
        (file) => file.startsWith("thalorna/") && /(?:^|\/)index.html$/.test(file),
    ).length;
    if (pages < minPages)
        throw new Error(
            `${root}: error: incomplete site tree: ${pages} pages, ${minPages} required`,
        );
    return pages;
}

/** Keep the Cloudflare project and custom domain, and skip absent credentials. */
export async function ensurePublicProject({
    env = process.env,
    fetchImpl = fetch,
    run = spawnSync,
} = {}) {
    const token = env.CLOUDFLARE_API_TOKEN,
        account = env.CLOUDFLARE_ACCOUNT_ID;
    if (!token || !account) return false;
    if (!/^[a-f0-9]{32}$/.test(account)) throw new Error("invalid Cloudflare account ID");
    let response;
    try {
        response = await fetchImpl(
            `https://api.cloudflare.com/client/v4/accounts/${account}/pages/projects/sohl-thalorna`,
            {
                headers: { Authorization: `Bearer ${token}` },
                redirect: "error",
                signal: AbortSignal.timeout(30000),
            },
        );
    } catch {
        throw new Error("Cloudflare project lookup failed");
    }
    if (response.status === 404) {
        const result = run(
            "npx",
            [
                "--yes",
                `wrangler@${WRANGLER_VERSION}`,
                "pages",
                "project",
                "create",
                "sohl-thalorna",
                "--production-branch=main",
            ],
            {
                env: {
                    PATH: env.PATH,
                    CLOUDFLARE_API_TOKEN: token,
                    CLOUDFLARE_ACCOUNT_ID: account,
                },
                stdio: "ignore",
            },
        );
        if (result.status !== 0) throw new Error("Cloudflare project creation failed");
    } else if (response.status !== 200) throw new Error("Cloudflare project lookup rejected");
    return true;
}

async function main() {
    const [command, root = "build/site"] = process.argv.slice(2);
    if (command === "select") {
        const selected = selectPublication(process.env.GITHUB_EVENT_NAME, process.env.GITHUB_REF);
        await fs.appendFile(
            process.env.GITHUB_OUTPUT,
            `mode=${selected.mode}\nroot=${selected.root}\n`,
        );
    } else if (command === "verify") {
        console.log(
            `Verified ${await validatePages(root)} package pages, landing, 404 and root headers`,
        );
    } else if (command === "ensure-public") {
        const enabled = await ensurePublicProject();
        await fs.appendFile(process.env.GITHUB_OUTPUT, `enabled=${enabled}\n`);
        if (!enabled)
            console.log(
                "Built and verified; Cloudflare credentials are not both configured, upload skipped.",
            );
    } else throw new Error(`unknown site publication command: ${command}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
    main().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
