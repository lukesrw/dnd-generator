import * as index from "../index";
import { List } from "../lib/list/List";
import { parseStringPromise } from "xml2js";
import { get } from "https";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { ucfirst } from "../lib/utils";

const { addSuffix } = require("./suffix");

if (!process.argv[2]) {
    throw new Error("Missing Tool Name");
}

switch (process.argv[2]) {
    case "getValues":
        if (!process.argv[3]) {
            throw new Error("Missing List Name");
        }

        if (!(process.argv[3] in index.List)) {
            throw new Error(`Unknown List: "${process.argv[3]}"`);
        }

        let list = new (index.List[
            process.argv[3] as keyof typeof index.List
        ] as unknown as typeof List)();

        console.log(list.getValues());
        break;

    case "cgXML":
        /**
         * intended to be used on https://github.com/CityGenerator/CityGenerator/tree/develop/xml files
         */
        if (!process.argv[3]) {
            throw new Error("Missing XML URL");
        }

        if (!process.argv[4]) {
            throw new Error("Missing List Name");
        }

        let xml = "";

        get(process.argv[3], response => {
            response
                .on("data", chunk => (xml += chunk))
                .on("end", async () => {
                    let json = await parseStringPromise(xml);
                    let data = json;

                    /**
                     * drill down into json per process arguments
                     */
                    let weight = 0;
                    for (let i = 5; i < process.argv.length; i += 1) {
                        if (process.argv[i] === "!") break;

                        if (!(process.argv[i] in data)) {
                            throw new Error(`Invalid Key "${process.argv[i]}"`);
                        }

                        if (
                            "$" in data &&
                            typeof data.$ === "object" &&
                            "chance" in data.$
                        ) {
                            weight = parseInt(data.$.chance, 10);
                        }

                        data = data[process.argv[i]];
                    }

                    /**
                     * convert into list value array
                     */
                    if (Array.isArray(data)) {
                        data = data.map(value => {
                            return {
                                value
                            };
                        });

                        if (weight) {
                            weight = (100 - weight) / 10;

                            data.push({
                                value: "",
                                weight: Math.floor(
                                    (weight * data.length) / (10 - weight)
                                )
                            });
                        }
                    }

                    /**
                     * if array and final argument is "!" write to file
                     */
                    let paths: {
                        directory: string;
                        ts?: string;
                        json?: string;
                    } = {
                        directory: join(
                            __dirname,
                            "..",
                            "lib",
                            "list",
                            process.argv[4]
                        )
                    };
                    paths.ts = join(paths.directory, `${process.argv[4]}.ts`);
                    paths.json = join(
                        paths.directory,
                        `${addSuffix(process.argv[4])}.json`
                    );

                    if (
                        Array.isArray(data) &&
                        process.argv[process.argv.length - 1] === "!"
                    ) {
                        await mkdir(paths.directory);
                        await writeFile(
                            paths.ts,
                            `import { List } from "../List";

export class ${ucfirst(process.argv[4])}List extends List {
    constructor() {
        super([]);
    }
}
`
                        );
                        await writeFile(
                            paths.json,
                            JSON.stringify(data, null, 4)
                        );
                    } else {
                        console.clear();

                        console.log(data);

                        console.table(paths);
                    }
                });
        });
        break;
}
