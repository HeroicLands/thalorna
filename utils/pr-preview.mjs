/* SPDX-License-Identifier: GPL-3.0-or-later */
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const REPOSITORY = "HeroicLands/thalorna";
const SHA = /^[0-9a-f]{40}$/;

/** Read identity from the event; the forge lookup supplies current eligibility. */
export function previewRequest(eventName, event, repository) {
    if (repository !== REPOSITORY) throw new Error("preview repository rejected");
    let number, sourceSha, action;
    if (eventName === "workflow_dispatch") {
        ({ "pr-number": number, "source-sha": sourceSha, operation: action } = event.inputs ?? {});
        if (!["publish", "cleanup"].includes(action)) throw new Error("preview operation rejected");
    } else if (eventName === "pull_request_target") {
        const pr = event.pull_request;
        if (pr?.base?.repo?.full_name !== repository || pr.base.ref !== "main")
            throw new Error("preview base rejected");
        if (pr.head?.repo?.full_name !== repository) return { unsupported: true };
        number = pr.number;
        sourceSha = pr.head.sha;
        action = event.action;
        if (!["label_updated", "synchronized", "reopened", "closed"].includes(action))
            throw new Error("preview event action rejected");
    } else throw new Error("preview event rejected");
    if (
        !/^[1-9][0-9]*$/.test(String(number)) ||
        !Number.isSafeInteger(Number(number)) ||
        !SHA.test(sourceSha)
    )
        throw new Error("preview identity rejected");
    return {
        action,
        changes: event.changes,
        context: {
            mode: "pr",
            repository,
            prNumber: Number(number),
            sourceSha,
            package: "thalorna",
            minPages: 1001,
            maxPages: 0,
        },
    };
}

/** Cleanup and reopen handling do not depend on a build request or label. */
export function previewDecision(request, pr, { previewEligible, previewRequested }) {
    if (request.unsupported)
        return { build: false, cleanup: false, reopen: false, unsupported: true };
    const { context, action, changes } = request;
    const eligible = previewEligible(pr, context);
    return {
        build: eligible && (action === "publish" || previewRequested(action, changes)),
        cleanup: ["closed", "cleanup"].includes(action) && pr.state === "closed",
        reopen: action === "reopened" && pr.state === "open",
        unsupported: false,
    };
}

async function main() {
    const event = JSON.parse(await fs.readFile(process.env.GITHUB_EVENT_PATH, "utf8"));
    const request = previewRequest(
        process.env.GITHUB_EVENT_NAME,
        event,
        process.env.GITHUB_REPOSITORY,
    );
    const helper = await import(
        pathToFileURL(path.resolve("trusted-deploy/actions/internal-site-deploy/publish.mjs"))
    );
    const pr =
        request.unsupported ? null : (
            await helper.currentPullRequest(request.context, process.env.GITEA_TOKEN)
        );
    const decision = previewDecision(request, pr, helper);
    const outputs = {
        ...decision,
        "pr-number": request.context?.prNumber ?? "",
        "source-sha": request.context?.sourceSha ?? "",
    };
    await fs.appendFile(
        process.env.GITHUB_OUTPUT,
        Object.entries(outputs)
            .map(([key, value]) => `${key}=${value}\n`)
            .join(""),
    );
    if (decision.unsupported) {
        const message = "Previews are not built for fork pull requests.";
        console.log(message);
        if (process.env.GITHUB_STEP_SUMMARY)
            await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, message + "\n");
    }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
    main().catch((error) => {
        console.error(error.message);
        process.exitCode = 1;
    });
