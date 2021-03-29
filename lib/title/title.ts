import { join } from "path";
import { List } from "../List";

export class TitleList extends List {
    constructor() {
        super(join(__dirname, "titles.json"));
    }
}
