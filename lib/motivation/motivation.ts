import { join } from "path";
import { List } from "../List";

export class MotivationList extends List {
    constructor() {
        super(join(__dirname, "motivations.json"));
    }
}
