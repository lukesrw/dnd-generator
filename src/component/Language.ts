import { List as _List } from "../util/List.js";

const LANGUAGES = [
    {
        value: "Common"
    },
    {
        value: "Dwarvish"
    },
    {
        value: "Elvish"
    },
    {
        value: "Giant"
    },
    {
        value: "Gnomish"
    },
    {
        value: "Goblin"
    },
    {
        value: "Halfling"
    },
    {
        value: "Orc"
    },
    {
        value: "Abyssal"
    },
    {
        value: "Celestial"
    },
    {
        value: "Draconic"
    },
    {
        value: "Deep Speech"
    },
    {
        value: "Infernal"
    },
    {
        value: "Primordial"
    },
    {
        value: "Sylvan"
    },
    {
        value: "Undercommon"
    },
    {
        value: "Netherese"
    },
    {
        value: "Aarakocra"
    },
    {
        value: "Auran"
    },
    {
        value: "Gith"
    },
    {
        value: "Aquan"
    },
    {
        value: "Loxodon"
    },
    {
        value: "Minotaur"
    },
    {
        value: "Quori"
    },
    {
        value: "Grung"
    },
    {
        value: "Vedalken"
    }
] as const;

export type Language = (typeof LANGUAGES)[number]["value"];

export namespace Language {
    export const List = _List.createList(LANGUAGES);
}
