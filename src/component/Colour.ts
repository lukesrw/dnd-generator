import { randomItem } from "../lib/randomItem.js";
import { List as _List } from "../util/List.js";
import { Race } from "./Race.js";

const TIEFLING_RACES: Race[] = new Race.List().filter(item => item.value.includes("Tiefling")).getValues();

const COLOURS = [
    {
        value: "Blue",
        isEye: true,
        isHair: false,
        isSkin: true,
        race: TIEFLING_RACES,
        onPick() {
            /**
             * I'm not sure why the original skin colour list had so many kinds of blue...
             */
            return randomItem([
                "Aquamarine",
                "Azure",
                "Cerulean",
                "Cobalt",
                "Indigo",
                "Sky Blue",
                "Midnight Blue",
                "Periwinkle",
                "Sapphire",
                "Steel Blue",
                "Turquoise",
                "Baby Blue",
                "Ice Blue",
                "Ultramarine",
                "Teal Blue",
                "Powder Blue",
                "Electric Blue",
                "Light Cyan",
                "Tiffany Blue",
                "Viridinan Blue"
            ]);
        }
    },
    {
        value: "Grey",
        isEye: true,
        isHair: false,
        isSkin: false
    },
    {
        value: "Green",
        isEye: true,
        isHair: false,
        isSkin: false
    },
    {
        value: "Brown",
        isEye: true,
        isHair: true,
        isSkin: true,
        onPick() {
            return randomItem(["Light Brown", "Brown", "Dark Brown"]);
        }
    },
    {
        value: "Hazel",
        isEye: true,
        isHair: false,
        isSkin: false
    },
    {
        value: "Blonde",
        isEye: false,
        isHair: true,
        isSkin: false,
        onPick() {
            return randomItem(["Light Blonde", "Blonde", "Dark Blonde"]);
        }
    },
    {
        value: "Golden",
        isEye: false,
        isHair: true,
        isSkin: false
    },
    {
        value: "Red",
        isEye: false,
        isHair: true,
        isSkin: true,
        race: TIEFLING_RACES,
        onPick() {
            return randomItem([
                "Red",
                "Crimson Red",
                "Maroon",
                "Ruby Red",
                "Scarlet",
                "Burgundy",
                "Blood Red",
                "Carmine",
                "Garnet",
                "Maroon"
            ]);
        }
    },
    {
        value: "Purple",
        isEye: false,
        isHair: false,
        isSkin: true,
        race: TIEFLING_RACES,
        onPick() {
            return randomItem([
                "Purple",
                "Royal Purple",
                "Pearly Purple",
                "Pansy Purple",
                "Deep Purple",
                "Lavander",
                "Mulberry",
                "Heliotrope Purple",
                "Violet",
                "Orchid Purple",
                "Mauve"
            ]);
        }
    },
    {
        value: "Ginger",
        isEye: false,
        isHair: true,
        isSkin: false
    },
    {
        value: "Black",
        isEye: false,
        isHair: true,
        isSkin: true
    },
    {
        value: "Fair",
        isEye: false,
        isHair: false,
        isSkin: true
    },
    {
        value: "Beige",
        isEye: false,
        isHair: false,
        isSkin: true
    },
    {
        value: "White",
        isEye: false,
        isSkin: true,
        isHair: true,
        onPick() {
            return randomItem(["White", "Ivory", "Porcelain", "Milky", "Creamy", "Albino"]);
        }
    },
    {
        value: "Olive",
        isEye: false,
        isSkin: true,
        isHair: false
    },
    {
        value: "Tan",
        isEye: false,
        isSkin: true,
        isHair: false
    },
    {
        value: "Alabaster",
        isEye: false,
        isSkin: true,
        isHair: false
    },
    {
        value: "Ruddy",
        isEye: false,
        isSkin: true,
        isHair: false
    },
    {
        value: "Rosy",
        isEye: false,
        isSkin: true,
        isHair: false,
        onPick() {
            return randomItem(["Rosy", "Peachy", "Fawn"]);
        }
    },
    {
        value: "Bronze",
        isEye: false,
        isSkin: true,
        isHair: false,
        onPick() {
            return randomItem(["Bronze", "Honey"]);
        }
    }
] as const;

export namespace Colour {
    export const List = _List.createList<
        Colour,
        {
            isEye: boolean;
            isHair: boolean;
            isSkin: boolean;
            race?: Race[];
        },
        string
    >(COLOURS);
}

export type Colour = (typeof COLOURS)[number]["value"];
