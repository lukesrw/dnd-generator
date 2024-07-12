import { List as _List } from "../util/List.js";

const SUBTLETIES = [
    {
        value: "Flagrantly"
    },
    {
        value: "Secretly"
    },
    {
        value: "Quietly"
    },
    {
        value: "Publicly"
    }
] as const;

export type Subtlety = (typeof SUBTLETIES)[number]["value"];

export namespace Subtlety {
    export const List = _List.createList(SUBTLETIES);
}
