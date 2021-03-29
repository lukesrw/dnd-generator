import { join } from "path";
import { List } from "../List";

export class RaceList extends List {
    constructor() {
        super(join(__dirname, "races.json"));
    }
}
