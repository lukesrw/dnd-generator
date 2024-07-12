import { List as _List } from "../util/List.js";

const DANGERS = [
    {
        value: "Seeking revenge"
    },
    {
        value: "Trying to earn some quick coin"
    },
    {
        value: "Working for a new employer who suddently skipped town"
    },
    {
        value: "Drunkenly arguing with people"
    },
    {
        value: "Chasing something into the woods"
    }
] as const;

export namespace Danger {
    export const List = _List.createList(DANGERS);
}

export type Danger = (typeof DANGERS)[number]["value"];
