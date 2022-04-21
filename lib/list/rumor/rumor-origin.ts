import { List } from "../List";

export class RumorOriginList extends List {
    constructor() {
        super([
            {
                value: "{NPC[source]:getName} heard "
            },
            {
                value: "{NPC[source]:getName} said "
            },
            {
                value: "",
                weight: 4
            }
        ]);
    }
}
