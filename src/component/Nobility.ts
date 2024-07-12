import { List as _List } from "../util/List.js";
import { Maturity } from "./Maturity.js";

const NOBILITIES = [
    {
        value: "Royal",
        importance: 9
    },
    {
        value: "Noble",
        weight: 5,
        importance: 8
    },
    {
        value: "Esquire",
        maturity: ["Adult", "Elder"],
        weight: 1000,
        importance: 7
    },
    {
        value: "Knighted",
        maturity: ["Adult", "Elder"],
        weight: 350,
        importance: 6
    },
    {
        value: "Gentle",
        maturity: ["Adult", "Elder"],
        weight: 1500,
        importance: 5
    },
    {
        value: "Yeoman",
        maturity: ["Adult", "Elder"],
        weight: 2500,
        importance: 4
    },
    {
        value: "Scholar",
        maturity: ["Adult", "Elder"],
        weight: 3000,
        importance: 3
    },
    {
        value: "Merchant",
        maturity: ["Adult", "Elder"],
        weight: 7500,
        importance: 2
    },
    {
        value: "Servant",
        maturity: ["Child", "Adult", "Elder"],
        weight: 7500,
        importance: 1
    },
    {
        value: "Common",
        weight: 20500,
        importance: 0
    },
    {
        value: "Peasant",
        weight: 6000,
        importance: -1
    },
    {
        value: "Underclass",
        weight: 3145,
        importance: -2
    }
] as const;

export type Nobility = (typeof NOBILITIES)[number]["value"];

export namespace Nobility {
    export const List = _List.createList<
        Nobility,
        {
            maturity?: Maturity[];
            /**
             * Societal importance of this nobility, anchoring around 0 for 'Common' people.
             */
            importance: number;
        },
        Nobility
    >(NOBILITIES);
}
