import { join } from "path";
import { List } from "../List";

export class SkinList extends List {
    constructor() {
        super(join(__dirname, "skins.json"));
    }
}
