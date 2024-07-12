import { List as _List } from "../util/List.js";

/**
 * Intentionally named "Animal" to avoid confusion with "Beast", this is a subset
 * that is intended to be more common animals that a typical villager would be
 * familiar with.
 */
const ANIMALS = [
    {
        value: "Badger"
    },
    {
        value: "Cat"
    },
    {
        value: "Crab"
    },
    {
        value: "Deer"
    },
    {
        value: "Eagle"
    },
    {
        value: "Fox"
    },
    {
        value: "Frog"
    },
    {
        value: "Goat"
    },
    {
        value: "Hare"
    },
    {
        value: "Hawk"
    },
    {
        value: "Lizard"
    },
    {
        value: "Owl"
    },
    {
        value: "Pig"
    },
    {
        value: "Rat"
    },
    {
        value: "Raven"
    },
    {
        value: "Sheep"
    },
    {
        value: "Spider"
    },
    {
        value: "Weasel"
    },
    {
        value: "Mastiff"
    },
    {
        value: "Dog"
    },
    {
        value: "Mule"
    },
    {
        value: "Pony"
    },
    {
        value: "Boar"
    },
    {
        value: "Cow"
    },
    {
        value: "Elk"
    },
    {
        value: "Ox"
    },
    {
        value: "Wolf"
    },
    {
        value: "Bear"
    },
    {
        value: "Bee"
    },
    {
        value: "Butterfly"
    },
    {
        value: "Chicken"
    },
    {
        value: "Duck"
    },
    {
        value: "Rabbit"
    }
] as const;

export namespace Animal {
    export const List = _List.createList(ANIMALS);
}

export type Animal = (typeof ANIMALS)[number]["value"];
