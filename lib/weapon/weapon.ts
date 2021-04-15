import { join } from "path";
import { List } from "../List";

export class WeaponList extends List {
    constructor() {
        super(join(__dirname, "weapons.json"));
    }
}
