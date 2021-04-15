import { join } from "path";
import { List } from "../List";

export class ArmorList extends List {
    constructor() {
        super(join(__dirname, "armor.json"));
    }
}
