import { List as _List } from "../util/List.js";

const MATURITIES = [
    {
        value: "Infant",
        isCombatant: false
    },
    {
        value: "Child",
        weight: 3,
        isCombatant: false
    },
    {
        value: "Adult",
        weight: 12,
        isCombatant: true
    },
    {
        value: "Elder",
        weight: 4,
        isCombatant: true
    }
] as const;

export type Maturity = (typeof MATURITIES)[number]["value"];

export namespace Maturity {
    export const List = _List.createList<
        Maturity,
        {
            isCombatant: boolean;
        },
        Maturity
    >(MATURITIES);
}
