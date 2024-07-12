import { List as _List } from "../util/List.js";
import { Ability } from "./Ability.js";

const SKILLS = [
    {
        value: "Acrobatics",
        ability: "Dexterity"
    },
    {
        value: "Animal Handling",
        ability: "Wisdom"
    },
    {
        value: "Arcana",
        ability: "Intelligence"
    },
    {
        value: "Athletics",
        ability: "Strength"
    },
    {
        value: "Deception",
        ability: "Charisma"
    },
    {
        value: "History",
        ability: "Intelligence"
    },
    {
        value: "Insight",
        ability: "Wisdom"
    },
    {
        value: "Intimidation",
        ability: "Charisma"
    },
    {
        value: "Investigation",
        ability: "Intelligence"
    },
    {
        value: "Medicine",
        ability: "Wisdom"
    },
    {
        value: "Nature",
        ability: "Intelligence"
    },
    {
        value: "Perception",
        ability: "Wisdom"
    },
    {
        value: "Performance",
        ability: "Charisma"
    },
    {
        value: "Persuasion",
        ability: "Charisma"
    },
    {
        value: "Religion",
        ability: "Intelligence"
    },
    {
        value: "Sleight of Hand",
        ability: "Dexterity"
    },
    {
        value: "Stealth",
        ability: "Dexterity"
    },
    {
        value: "Survival",
        ability: "Wisdom"
    }
] as const;

export type Skill = (typeof SKILLS)[number]["value"];

export namespace Skill {
    export const List = _List.createList<
        Skill,
        {
            ability: Ability;
        },
        Skill
    >(SKILLS);
}
