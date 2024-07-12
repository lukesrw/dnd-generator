import { Item } from "../types/Item.js";
import { List as _List } from "../util/List.js";
import { Class } from "./Class.js";

const METAL_WEARING_CLASS: Class[] = new Class.List()
    .filter({
        isMetalWearer: true
    })
    .getValues();

const ARMOURS = [
    {
        value: "Padded"
    },
    {
        value: "Leather"
    },
    {
        value: "Hide"
    },
    {
        value: "Scale Mail"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Studded Leather"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Chain Shirt"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Breastplate"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Half Plate"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Ring Mail"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Chain Mail"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Splint"
    },
    {
        class: METAL_WEARING_CLASS,
        value: "Plate"
    }
] as const satisfies Item<
    string,
    {
        class?: Class[];
    },
    string
>[];

export namespace Armour {
    export const List = _List.createList(ARMOURS);
}

export type Armour = (typeof ARMOURS)[number]["value"];
