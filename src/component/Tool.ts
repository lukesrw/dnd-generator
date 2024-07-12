import { List as _List } from "../util/List.js";

const TOOLS = [
    {
        value: "Cartographer's Tools"
    },
    {
        value: "Musical Instrument"
    },
    {
        value: "Artisan's Tools"
    },
    {
        value: "Gaming Set"
    },
    {
        value: "Gambling Set"
    },
    {
        value: "Disguise Kit"
    },
    {
        value: "Thieves' Tools"
    },
    {
        value: "Herbalism Kit"
    },
    {
        value: "Navigator's Tools"
    },
    {
        value: "Vehicle (Land)"
    },
    {
        value: "Forgery Kit"
    },
    {
        value: "Unusual Weapon"
    },
    {
        value: "Vehicle (Water)"
    }
] as const;

export type Tool = (typeof TOOLS)[number]["value"];

export namespace Tool {
    export const List = _List.createList(TOOLS);
}
