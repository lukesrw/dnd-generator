import { join } from "path";
import { List } from "../List";

export class EyeList extends List {
    constructor() {
        super(join(__dirname, "eyes.json"));
    }
}
