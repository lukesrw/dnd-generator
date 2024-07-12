import { List as _List } from "../util/List.js";

const ETHICS = [
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
] as const;

export namespace Ethic {
    export const List = _List.createList(ETHICS);
}

export type Ethic = (typeof ETHICS)[number]["value"];
