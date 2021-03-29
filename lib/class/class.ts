import { join } from "path";
import { List } from "../List";

export class ClassList extends List {
    constructor() {
        super(join(__dirname, "classes.json"));
    }
}
