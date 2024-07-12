import { List as _List } from "../util/List.js";

const LOCATIONS = [
    {
        value: "Old millhouse"
    },
    {
        value: "Empty riverbed"
    },
    {
        value: "Caves to the north"
    },
    {
        value: "Abandoned farmhouse outside of town"
    },
    {
        value: "Ancient ruins"
    }
] as const;

export type Location = (typeof LOCATIONS)[number]["value"];

export namespace Location {
    export const List = _List.createList(LOCATIONS);
}
