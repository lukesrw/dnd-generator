import { getTsFiles } from "./getTsFiles.js";

export async function getFilesList(oldFiles: string[], ...path: string[]) {
    const files = await getTsFiles(...path);

    return files
        .map(file => {
            const name = file.substring(0, file.length - 3);

            return `-   [\`${name + (oldFiles.includes(name) ? "" : "🎉")}\`](/${path.join("/")}/${name}.ts)`;
        })
        .join("\n");
}
export namespace getFilesList {
    export async function grouped(oldFiles: string[], ...path: string[]) {
        const files = await getTsFiles(...path);

        return files.reduce((output, file) => {
            let letter = "";
            if (output.length) {
                letter = output.split("\n").pop()?.substring(6, 7) ?? "";
            }
            letter = letter.substring(0, 1);

            const name = file.substring(0, file.length - 3);
            file = `[\`${name + (oldFiles.includes(name) ? "" : "🎉")}\`](/${path.join("/")}/${name}.ts)`;

            if (name.substring(0, 1) === letter) {
                output += `, ${file}`;
            } else {
                if (output.length) {
                    output += "\n";
                }
                output += `-   ${file}`;
            }

            return output;
        }, "");
    }
}
