import { List as _List } from "../util/List.js";

const CONCLUSIONS = [
    {
        value: "Fled in terror"
    },
    {
        value: "Was killed"
    },
    {
        value: "Was stricken dumb"
    },
    {
        value: "Was nearly killed"
    },
    {
        value: "Was gravely injured"
    },
    {
        value: "Ran home as fast as possible"
    }
] as const;

export namespace Conclusion {
    export const List = _List.createList(CONCLUSIONS);
}

export type Conclusion = (typeof CONCLUSIONS)[number]["value"];
