import { lstat, readdir } from "fs/promises";
import { join } from "path";
import { updateExamples } from "./updateExamples.js";

export async function findExamples(directory: string): Promise<(string | null)[]> {
    const files = await readdir(directory);
    const filesUpdated = await Promise.all(
        files.map(async file => {
            const filePath = join(directory, file);
            const fileStat = await lstat(filePath);

            if (fileStat.isDirectory()) {
                return findExamples(filePath);
            }

            if (file.endsWith(".md")) {
                return updateExamples(filePath);
            }

            return null;
        })
    );

    return filesUpdated.flat();
}
