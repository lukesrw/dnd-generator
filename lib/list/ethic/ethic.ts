import { List } from "../List";

export class EthicList extends List {
    constructor() {
        super([
            {
                value: "Lawful",
                weight: 10
            },
            {
                value: "Neutral"
            },
            {
                value: "Chaotic",
                weight: 10
            }
        ]);
    }
}
