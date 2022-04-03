import { List } from "../../List";
import { PickList } from "../../List";

export class RaceList extends List<RaceProperties> {
    constructor() {
        super([]);
    }
}

export interface RaceProperties {
    speed: number;
    languages: PickList;
}
