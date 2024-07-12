import { List as _List } from "../util/List.js";

const RELATIONSHIPS = [
    {
        value: "Twin"
    },
    {
        value: "Sibling"
    },
    {
        value: "Brother"
    },
    {
        value: "Sister"
    },
    {
        value: "Father"
    },
    {
        value: "Grandfather"
    },
    {
        value: "Mother"
    },
    {
        value: "Grandmother"
    },
    {
        value: "Husband"
    },
    {
        value: "Wife"
    },
    {
        value: "Spouce"
    },
    {
        value: "Partner"
    },
    {
        value: "Son"
    },
    {
        value: "Grandson"
    },
    {
        value: "Daughter"
    },
    {
        value: "Granddaughter"
    },
    {
        value: "Friend"
    },
    {
        value: "Aunt"
    },
    {
        value: "Uncle"
    },
    {
        value: "Cousin"
    },
    {
        value: "Neighbour"
    },
    {
        value: "Colleague"
    },
    {
        value: "Neice"
    },
    {
        value: "Nephew"
    }
] as const;

export namespace Relationship {
    export const List = _List.createList(RELATIONSHIPS);
}

export type Relationship = (typeof RELATIONSHIPS)[number]["value"];
