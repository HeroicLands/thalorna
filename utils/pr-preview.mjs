/* SPDX-License-Identifier: GPL-3.0-or-later */
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const REPOSITORY = "HeroicLands/thalorna";
const SHA = /^[0-9a-f]{40}$/;

/** Read identity from the event; the forge lookup supplies current eligibility. */
export function previewRequest(eventName, event, repository, ref) {
    if (repository !== REPOSITORY) throw new Error("preview repository rejected");
    let number,
        sourceSha,
        action,
        baseIsMain = true;
    if (eventName === "workflow_dispatch") {
        if (ref !== "refs/heads/main") throw new Error("manual preview requires main");
        ({ "pr-number": number, "source-sha": sourceSha, operation: action } = event.inputs ?? {});
        if (!["publish", "cleanup"].includes(action)) throw new Error("preview operation rejected");
    } else if (eventName === "pull_request_target") {
        const pr = event.pull_request;
        if (pr?.base?.repo?.full_name !== repository) throw new Error("preview base rejected");
        if (pr.head?.repo?.full_name !== repository) return { unsupported: true };
        baseIsMain = pr.base.ref === "main";
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
        baseIsMain,
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
export function previewDecision(
    request,
    pr,
    { previewEligible, previewRequested },
    report = () => {},
) {
    const { context, action, changes, baseIsMain } = request;
    const eligible = request.unsupported ? false : previewEligible(pr, context);
    const requested =
        request.unsupported ? false : action === "publish" || previewRequested(action, changes);
    const decision =
        request.unsupported ?
            { build: false, cleanup: false, reopen: false, unsupported: true }
        :   {
                build: baseIsMain && eligible && requested,
                cleanup: ["closed", "cleanup"].includes(action) && pr.state === "closed",
                reopen: action === "reopened" && pr.state === "open",
                unsupported: false,
            };
    report({
        action_label_updated: action === "label_updated",
        action_synchronized: action === "synchronized",
        action_reopened: action === "reopened",
        action_closed: action === "closed",
        action_publish: action === "publish",
        action_cleanup: action === "cleanup",
        added_labels_array: Array.isArray(changes?.added_labels),
        added_preview:
            Array.isArray(changes?.added_labels) &&
            changes.added_labels.some((label) => label?.name === "ci/preview"),
        base_is_main: baseIsMain === true,
        current_eligible: eligible,
        requested,
        ...decision,
    });
    return decision;
}

/** Write the same bounded decision fields to the log and optional step summary. */
export async function writePreviewDiagnostic(
    diagnostic,
    { summary, log = console.log, append = fs.appendFile } = {},
) {
    const text = JSON.stringify(diagnostic);
    log(text);
    if (summary) await append(summary, text + "\n");
}

async function main() {
    const event = JSON.parse(await fs.readFile(process.env.GITHUB_EVENT_PATH, "utf8"));
    const request = previewRequest(
        process.env.GITHUB_EVENT_NAME,
        event,
        process.env.GITHUB_REPOSITORY,
        process.env.GITHUB_REF,
    );
    const helper = await import(
        pathToFileURL(path.resolve("trusted-deploy/actions/internal-site-deploy/publish.mjs"))
    );
    const pr =
        request.unsupported ? null : (
            await helper.currentPullRequest(request.context, process.env.GITEA_TOKEN)
        );
    let diagnostic;
    const decision = previewDecision(request, pr, helper, (value) => {
        diagnostic = value;
    });
    await writePreviewDiagnostic(diagnostic, { summary: process.env.GITHUB_STEP_SUMMARY });
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
