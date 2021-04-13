import { join } from "path";
import { List } from "../List";

export class AgeList extends List {
    constructor() {
        super(join(__dirname, "age.json"));
    }
}
