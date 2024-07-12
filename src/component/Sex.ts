import { List as _List } from "../util/List.js";

const sexes = [
    {
        value: "Male"
    },
    {
        value: "Female"
    }
] as const;

export namespace Sex {
    export const List = _List.createList(sexes);
}
export type Sex = (typeof sexes)[number]["value"];
