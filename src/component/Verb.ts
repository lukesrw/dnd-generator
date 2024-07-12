import { List as _List } from "../util/List.js";

const VERBS = [
    {
        value: "Blackmailed"
    },
    {
        value: "Bribed"
    },
    {
        value: "Cheated"
    },
    {
        value: "Exorted"
    },
    {
        value: "Insulted"
    },
    {
        value: "Kidnapped"
    },
    {
        value: "Maimed"
    },
    {
        value: "Murdered"
    },
    {
        value: "Patronized"
    },
    {
        value: "Robbed"
    },
    {
        value: "Screwed"
    },
    {
        value: "Torched"
    }
] as const;

export type Verb = (typeof VERBS)[number]["value"];

export namespace Verb {
    export const List = _List.createList(VERBS);
}
