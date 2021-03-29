import { join } from "path";
import { List } from "../List";

export class SexList extends List {
    constructor() {
        super(join(__dirname, "sexes.json"));
    }
}
