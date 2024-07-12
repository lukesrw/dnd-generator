import { List as _List } from "../util/List.js";

const MOTIVATIONS = [
    {
        value: "Acceptance"
    },
    {
        value: "Curiosity"
    },
    {
        value: "Family"
    },
    {
        value: "Honor"
    },
    {
        value: "Idealism"
    },
    {
        value: "Independence"
    },
    {
        value: "Order"
    },
    {
        value: "Physical Activity"
    },
    {
        value: "Power"
    },
    {
        value: "Romance"
    },
    {
        value: "Wealth"
    },
    {
        value: "Social Status"
    },
    {
        value: "Tranquility"
    },
    {
        value: "Vengence"
    },
    {
        value: "Shelter"
    }
] as const;

export type Motivation = (typeof MOTIVATIONS)[number]["value"];

export namespace Motivation {
    export const List = _List.createList(MOTIVATIONS);
}
