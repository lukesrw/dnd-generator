import { join } from "path";
import { List } from "../List";

export class NobilityList extends List {
    constructor() {
        super(join(__dirname, "nobilities.json"));
    }
}
