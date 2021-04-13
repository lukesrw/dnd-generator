import { join } from "path";
import { List } from "../List";

export class CharacteristicList extends List {
    constructor() {
        super(join(__dirname, "characteristics.json"));
    }
}
