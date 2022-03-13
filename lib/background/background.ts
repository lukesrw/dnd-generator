import { List } from "../List";

export interface PickList {
    pick: number;
    items: string[];
}

export class BackgroundList extends List {
    constructor() {
        super([]);
    }

    static pickList(raw: (string | PickList)[]) {
        let list: string[] = [];

        raw.forEach((selection) => {
            if (typeof selection === "string") {
                list.push(selection);
            } else {
                let picks = JSON.parse(JSON.stringify(selection.items));

                for (let i = 0; i < selection.pick; i += 1) {
                    let pick = List.pickRandom(selection.items);

                    if (pick) {
                        list.push(pick);
                        picks.splice(pick.indexOf(pick), 1);
                    }
                }
            }
        });

        return list;
    }
}
