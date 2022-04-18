import { List } from "../List";

export class MoralList extends List {
    constructor() {
        super([
            {
                value: "Good",
                weight: 20
            },
            {
                value: "Neutral",
                weight: 10
            },
            {
                value: "Evil"
            }
        ]);
    }
}
