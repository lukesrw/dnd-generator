import { List as _List } from "../util/List.js";

const CURRENCIES = [
    {
        value: "Copper",
        weight: 1000
    },
    {
        value: "Silver",
        weight: 100
    },
    {
        value: "Electrum",
        weight: 20
    },
    {
        value: "Gold",
        weight: 10
    },
    {
        value: "Platinum"
    }
] as const;

export namespace Currency {
    export const List = _List.createList(CURRENCIES);
}

export type Currency = (typeof CURRENCIES)[number]["value"];
