import { List as _List } from "../util/List.js";

const MORALS = [
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
] as const;

export type Moral = (typeof MORALS)[number]["value"];

export namespace Moral {
    export const List = _List.createList(MORALS);
}
