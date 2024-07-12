import { List as _List } from "../util/List.js";

const ABILITIES = [
    {
        value: "Strength"
    },
    {
        value: "Dexterity"
    },
    {
        value: "Constitution"
    },
    {
        value: "Intelligence"
    },
    {
        value: "Wisdom"
    },
    {
        value: "Charisma"
    }
] as const;

export namespace Ability {
    export const List = _List.createList(ABILITIES);

    export type Scores = [number, number, number, number, number, number];

    export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8] satisfies Ability.Scores;
}

export type Ability = (typeof ABILITIES)[number]["value"];
