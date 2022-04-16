import * as index from "../index";
import { List } from "../lib/list/List";

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
}
