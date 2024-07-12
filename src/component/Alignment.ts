import { Item } from "../types/Item.js";
import { List as _List } from "../util/List.js";
import { Ethic } from "./Ethic.js";
import { Moral } from "./Moral.js";

export type Alignment = `${Ethic} ${Moral}`;

const MORALS = new Moral.List().getItems();
const ALIGNMENTS: Item<Alignment, {}, Alignment>[] = [];
for (const ethic of new Ethic.List().getItems()) {
    for (const moral of MORALS) {
        /**
         * Add the weight of the ethic & moral to get the alignment weight
         */
        ALIGNMENTS.push({
            value: `${ethic.value} ${moral.value}` as const,
            weight: (ethic.weight ?? 0) + (moral.weight ?? 0)
        });
    }
}

export namespace Alignment {
    export const List = _List.createList(ALIGNMENTS);
}
