import { spawn } from "child_process";
import { readFile } from "fs/promises";
import { join } from "path";

const DOC_DIR_NAME = "doc";
const DOC_DIR = join(process.cwd(), "src", DOC_DIR_NAME);
const REGEX_EXAMPLE_NAME = /```ts (.+)/u;
const CONSOLE_LOG_LENGTH = 100;

export async function getExampleOutput(example: string) {
    const name = example.match(REGEX_EXAMPLE_NAME)?.[1] ?? "";

    /**
     * Skip blocks without an example name
     */
    if (!name.length) return "";

    let content = await readFile(join(DOC_DIR, `${name}.ts`), "utf-8").then(content => content.split("\n"));

    /**
     * Extract the code from the example
     */
    let start = 0;
    let consoleLogs: number[] = [];
    content.forEach((line, index) => {
        if (line.startsWith("// Begin example")) {
            start = index + 2;
            return;
        }
        if (line.startsWith("console.log")) {
            consoleLogs.push(index - start);
            console.table({ line, index: index - start });
        }
    });
    content = content.slice(start, content.length - 1);

    let consoleLogsIndex = 0;

    /**
     * Spawn a child process to run the example
     */
    return new Promise<string>(async (resolve, reject) => {
        const { stderr, stdout } = spawn("node", [`dist/commonjs/${DOC_DIR_NAME}/${name}`]).on("exit", () => {
            resolve("```ts " + name + "\n" + content.join("\n") + "\n```");
        });

        stderr.addListener("data", data => {
            return reject(data.toString());
        });

        stdout.addListener("data", data => {
            const contentIndex = consoleLogs[consoleLogsIndex++];

            if (typeof contentIndex === "undefined") return;

            data = data.toString().replace(/\n\s*/g, " ").trim().replace(/,\s*'/g, ", '");
            // console.log(contentIndex);
            // console.log(data);
            // console.log("---");
            if (data.length > CONSOLE_LOG_LENGTH) {
                data = data.substring(0, CONSOLE_LOG_LENGTH) + "...";
            }

            content[contentIndex] = content[contentIndex]?.replace(/;.*/, `; // ${data}`) ?? "";
        });
    });
}
