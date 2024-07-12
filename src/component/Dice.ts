import { List as _List } from "../util/List.js";

const DICE = [
    {
        value: "d4",
        sides: 4
    },
    {
        value: "d6",
        sides: 6
    },
    {
        value: "d8",
        sides: 8
    },
    {
        value: "d10",
        sides: 10
    },
    {
        value: "d12",
        sides: 12
    },
    {
        value: "d20",
        sides: 20
    },
    {
        value: "d100",
        sides: 100
    }
] as const;

export namespace Dice {
    export const List = _List.createList<
        Dice,
        {
            value: string;
            sides: number;
        },
        Dice
    >(DICE);
}

export type Dice = (typeof DICE)[number]["value"];
