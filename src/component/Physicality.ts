import { List as _List } from "../util/List.js";

const PHYSICALITIES = [
    {
        value: "Plump"
    },
    {
        value: "Stocky"
    },
    {
        value: "Overweight"
    },
    {
        value: "Fat"
    },
    {
        value: "Pudgy"
    },
    {
        value: "Medium Build"
    },
    {
        value: "Athletic"
    },
    {
        value: "Slender"
    },
    {
        value: "Lanky"
    },
    {
        value: "Fit"
    },
    {
        value: "Slim"
    },
    {
        value: "Trim"
    },
    {
        value: "Skinny"
    },
    {
        value: "Buff"
    },
    {
        value: "Muscular"
    },
    {
        value: "Ripped"
    },
    {
        value: "Well Built"
    },
    {
        value: "Towering"
    },
    {
        value: "Gigantic"
    },
    {
        value: "Tall"
    },
    {
        value: "Short"
    },
    {
        value: "Petite"
    },
    {
        value: "Tiny"
    }
] as const;

export type Physicality = (typeof PHYSICALITIES)[number]["value"];

export namespace Physicality {
    export const List = _List.createList(PHYSICALITIES);
}
