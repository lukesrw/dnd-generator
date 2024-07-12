import { List as _List } from "../util/List.js";
import { Sex } from "./Sex.js";

export const NON_BINARY = "Non-Binary";

const GENDERS = [
    ...new Sex.List().items,
    {
        value: NON_BINARY
    }
] as const;

export namespace Gender {
    export const List = _List.createList(GENDERS);
}

export type Gender = (typeof GENDERS)[number]["value"];
