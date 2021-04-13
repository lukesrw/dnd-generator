import { join } from "path";
import { List } from "../List";

export class HairList extends List {
    constructor() {
        super(join(__dirname, "hairs.json"));
    }
}
