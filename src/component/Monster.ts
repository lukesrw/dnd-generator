import { randomItem } from "../lib/randomItem.js";
import { List as _List } from "../util/List.js";

/**
 * Intentionally not an exhaustive list of D&D monsters, these are specifically
 * selected as recognisable and dangerous, i.e. if you said to your players
 * "You turn the corner and see a _____", would they expect to roll initiative?
 *
 * Each monster has a weight which is determined by 31 - the average CR,
 * allowing more common monsters to be picked more often. If you want a rougher
 * fight you should use `Monster.List.pickItem()` multiple times and keep track
 * of either the total or max weight.
 */
const MONSTERS = [
    {
        value: "Aboleth",
        challenge: 10,
        weight: 21
    },
    {
        value: "Basilisk",
        challenge: 3,
        weight: 28
    },
    {
        value: "Bugbear",
        challenge: 1,
        weight: 30
    },
    {
        value: "Chimera",
        challenge: 6,
        weight: 25
    },
    {
        value: "Demon",
        challenge: 19,
        weight: 12
    },
    {
        value: "Devil",
        onPick() {
            return randomItem([
                "Devil",
                "Barbed Devil",
                "Bearded Devil",
                "Bone Devil",
                "Chain Devil",
                "Horned Devil",
                "Ice Devil",
                "Imp",
                "Pit Fiend"
            ]);
        },
        challenge: 7,
        weight: 24
    },
    {
        value: "Dinosaur",
        onPick() {
            return randomItem(["Plesiosaur", "Triceratops", "Tyrannosaurus"]);
        },
        challenge: 8,
        weight: 23
    },
    {
        value: "Doppelganger",
        challenge: 3,
        weight: 28
    },
    {
        value: "Chromatic Dragon",
        onPick() {
            return randomItem([
                "Chromatic Dragon",
                "Black Dragon",
                "Blue Dragon",
                "Green Dragon",
                "Red Dragon",
                "White Dragon"
            ]);
        },
        challenge: 12,
        weight: 19
    },
    {
        value: "Metalic Dragon",
        onPick() {
            return randomItem([
                "Metalic Dragon",
                "Brass Dragon",
                "Bronze Dragon",
                "Copper Dragon",
                "Gold Dragon",
                "Silver Dragon"
            ]);
        },
        challenge: 12,
        weight: 19
    },
    {
        value: "Dryad",
        challenge: 1,
        weight: 30
    },
    {
        value: "Duergar",
        challenge: 1,
        weight: 30
    },
    {
        value: "Elemental",
        onPick() {
            return randomItem(["Elemental", "Air Elemental", "Earth Elemental", "Fire Elemental", "Water Elemental"]);
        },
        challenge: 5,
        weight: 26
    },
    {
        value: "Gargoyle",
        challenge: 2,
        weight: 29
    },
    {
        value: "Ghost",
        challenge: 4,
        weight: 27
    },
    {
        value: "Ghoul",
        challenge: 1,
        weight: 30
    },
    {
        value: "Giant",
        onPick() {
            return randomItem([
                "Giant",
                "Cloud Giant",
                "Fire Giant",
                "Frost Giant",
                "Hill Giant",
                "Stone Giant",
                "Storm Giant"
            ]);
        },
        challenge: 8,
        weight: 23
    },
    {
        value: "Gnoll",
        challenge: 0.5,
        weight: 30
    },
    {
        value: "Goblin",
        challenge: 0.25,
        weight: 31
    },
    {
        value: "Hag",
        onPick() {
            return randomItem(["Hag", "Green Hag", "Night Hag", "Sea Hag"]);
        },
        challenge: 3,
        weight: 28
    },
    {
        value: "Harpy",
        challenge: 1,
        weight: 30
    },
    {
        value: "Hobgoblin",
        challenge: 0.5,
        weight: 30
    },
    {
        value: "Hydra",
        challenge: 8,
        weight: 23
    },
    {
        value: "Kobold",
        challenge: 0.125,
        weight: 31
    },
    {
        value: "Lich",
        challenge: 21,
        weight: 10
    },
    {
        value: "Lycan",
        onPick() {
            return randomItem(["Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf"]);
        },
        challenge: 6,
        weight: 25
    },
    {
        value: "Manticore",
        challenge: 3,
        weight: 28
    },
    {
        value: "Medusa",
        challenge: 6,
        weight: 25
    },
    {
        value: "Mimic",
        challenge: 2,
        weight: 29
    },
    {
        value: "Minotaur",
        challenge: 3,
        weight: 28
    },
    {
        value: "Mummy",
        challenge: 3,
        weight: 28
    },
    {
        value: "Ogre",
        challenge: 2,
        weight: 29
    },
    {
        value: "Ooze",
        onPick() {
            return randomItem(["Black Pudding", "Gelatinous Cube", "Gray Ooze", "Ochre Jelly"]);
        },
        challenge: 2,
        weight: 29
    },
    {
        value: "Owlbear",
        challenge: 3,
        weight: 28
    },
    {
        value: "Rakshasa",
        challenge: 13,
        weight: 18
    },
    {
        value: "Skeleton",
        challenge: 0.25,
        weight: 31
    },
    {
        value: "Tarrasque",
        challenge: 30,
        weight: 1
    },
    {
        value: "Troll",
        challenge: 5,
        weight: 26
    },
    {
        value: "Vampire",
        challenge: 13,
        weight: 18
    },
    {
        value: "Wight",
        challenge: 3,
        weight: 28
    },
    {
        value: "Zombie",
        challenge: 0.25,
        weight: 31
    }
] as const;

export type Monster = (typeof MONSTERS)[number]["value"];

export namespace Monster {
    export const List = _List.createList<
        Monster,
        {
            challenge: number;
            weight: number;
        },
        string
    >(MONSTERS);
}
