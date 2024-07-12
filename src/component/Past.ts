import { List as _List } from "../util/List.js";

const PASTS = [
    {
        value: "",
        weight: 13
    },
    {
        value: "Yesterday"
    },
    {
        value: "The day before last"
    },
    {
        value: "Several days ago"
    },
    {
        value: "Last week"
    },
    {
        value: "Last month"
    },
    {
        value: "Last year"
    },
    {
        value: "Several years ago"
    }
] as const;

export type Past = (typeof PASTS)[number]["value"];

export namespace Past {
    export const List = _List.createList(PASTS);
}
