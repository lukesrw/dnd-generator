import { List } from "../../List";
import { PickList } from "../../List";

export interface BackgroundProperties {
    languages: number | string[];
    tools: PickList;
    skills: PickList;
}

export class BackgroundList extends List<BackgroundProperties> {
    constructor() {
        super([]);
    }
}
