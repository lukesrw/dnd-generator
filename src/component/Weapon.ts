import { List as _List } from "../util/List.js";
import { Class } from "./Class.js";

const RANGED_CLASSES = new Class.List().filter({ isRanged: true }).getValues();

const WEAPONS = [
    {
        value: "Club"
    },
    {
        value: "Dagger"
    },
    {
        value: "Greatclub"
    },
    {
        value: "Handaxe"
    },
    {
        value: "Light Hammer"
    },
    {
        value: "Mace"
    },
    {
        value: "Quarterstaff"
    },
    {
        value: "Sickle"
    },
    {
        value: "Spear"
    },
    {
        class: RANGED_CLASSES,
        value: "Blowgun"
    },
    {
        class: RANGED_CLASSES,
        value: "Longbow"
    },
    {
        class: RANGED_CLASSES,
        value: "Shortbow"
    },
    {
        class: RANGED_CLASSES,
        value: "Crossbow"
    },
    {
        value: "Battleaxe"
    },
    {
        value: "Flail"
    },
    {
        value: "Glaive"
    },
    {
        value: "Greataxe"
    },
    {
        value: "Greatsword"
    },
    {
        value: "Halberd"
    },
    {
        value: "Lance"
    },
    {
        value: "Longsword"
    },
    {
        value: "Maul"
    },
    {
        value: "Morningstar"
    },
    {
        value: "Pike"
    },
    {
        value: "Rapier"
    },
    {
        value: "Scimitar"
    },
    {
        value: "Shortsword"
    },
    {
        value: "Trident"
    },
    {
        value: "War pick"
    },
    {
        value: "Warhammer"
    },
    {
        value: "Whip"
    },
    {
        value: "Net"
    }
] as const;

export type Weapon = (typeof WEAPONS)[number]["value"];

export namespace Weapon {
    export const List = _List.createList<
        Weapon,
        {
            class?: Class[];
        },
        Weapon
    >(WEAPONS);
}
