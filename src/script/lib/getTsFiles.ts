import { readdir } from "fs/promises";
import { join } from "path";

export async function getTsFiles(...path: string[]) {
    const files = await readdir(join(process.cwd(), ...path));

    return files.filter(file => file.match(/^\w+\.ts$/));
}
