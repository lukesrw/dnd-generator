import { readFile, writeFile } from "fs/promises";
import { getExampleOutput } from "./getExampleOutput.js";

const REGEX_EXAMPLE = /(```ts(?:.|\s)+?```)/gu;

export async function updateExamples(file: string) {
    let content = await readFile(file, "utf-8");
    let contentUpdated = false;

    for (const example of content.matchAll(REGEX_EXAMPLE)) {
        const exampleOutput = await getExampleOutput(example[0]);

        if (exampleOutput.length) {
            content = content.replace(example[0], exampleOutput);
            contentUpdated = true;
        }
    }

    if (!contentUpdated) {
        return null;
    }

    await writeFile(file, content);

    return file;
}
